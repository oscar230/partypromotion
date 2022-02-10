FROM nginx:stable-alpine
WORKDIR /app
COPY src/ /usr/share/nginx/html/
EXPOSE 80