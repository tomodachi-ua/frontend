FROM node:16
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
EXPOSE 8000
CMD [ "npm", "run", "start", "--port", "8000"]
