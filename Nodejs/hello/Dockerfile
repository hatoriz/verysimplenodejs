# checkout the version from docker hub
FROM node:boron

# create src app as working directory in docker image
RUN mkdir /app
WORKDIR /app

# install app dependencies
COPY package.json /app/
RUN npm install

# bundle source
#COPY . /app

# port of service
EXPOSE 3001

#CMD ["ls"]
CMD ["npm", "start"]
