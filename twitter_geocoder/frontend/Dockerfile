FROM node:14.21.1-alpine
WORKDIR /

COPY package.json package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@5.0.1 -g --silent
COPY . ./
EXPOSE 3000