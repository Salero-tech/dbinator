# stage run
FROM node:alpine

WORKDIR /app

# copy dependency list
COPY package*.json ./

# clean install dependencies, no devDependencies, no prepare script
RUN npm ci --production --ignore-scripts

# remove potential security issues
RUN npm audit fix

# copy built SvelteKit app to /app
COPY build ./

EXPOSE 3000
CMD ["node", "./index.js"]