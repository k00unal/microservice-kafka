FROM node:24.0.1
WORKDIR /app
COPY package.json ./
RUN npm install
COPY ./ ./
RUN npm run build
CMD ["npm","run","start:prod"]