FROM node:16
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm ci
COPY . .
EXPOSE 3000
CMD [ "npm", "run", "start", "--port", "3000"]