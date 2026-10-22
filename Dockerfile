# Build: pnpm build -> dist/, served by nginx (nginx/default.conf).
FROM node:22-alpine AS build
WORKDIR /app
RUN corepack enable && corepack prepare pnpm@10.18.0 --activate
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile
COPY . .
RUN pnpm build && node scripts/build-nginx-conf.mjs /app/nginx-generated

FROM nginx:1.29-alpine
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/nginx-generated /etc/nginx/education
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
