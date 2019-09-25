# Angular App ========================================
FROM johnpapa/angular-cli as angular-build
LABEL authors="Composite key"
# Copy and install the Angular app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN ng build --prod

FROM nginx
LABEL package="composite.key.frontend"
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=angular-build /app/dist /usr/share/nginx/html
