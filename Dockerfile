# Build: pnpm build -> dist/ (public) and pnpm build:drafts -> dist-drafts/ (adds draft posts), served
# by nginx (nginx/default.conf). One image carries both; the container serves dist/ unless
# SERVE_DRAFTS=1, which only the sign-in-gated drafts deployment sets.
FROM node:22-alpine AS build
WORKDIR /app
RUN corepack enable && corepack prepare pnpm@10.18.0 --activate
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile
COPY . .
RUN pnpm build && pnpm build:drafts && node scripts/build-nginx-conf.mjs /app/nginx-generated

FROM nginx:1.29-alpine
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
COPY nginx/40-select-site.sh /docker-entrypoint.d/40-select-site.sh
COPY --from=build /app/nginx-generated /etc/nginx/education
COPY --from=build /app/dist /usr/share/nginx/site-public
COPY --from=build /app/dist-drafts /usr/share/nginx/site-drafts
RUN chmod +x /docker-entrypoint.d/40-select-site.sh && rm -rf /usr/share/nginx/html \
  && ln -s /usr/share/nginx/site-public /usr/share/nginx/html
EXPOSE 80
