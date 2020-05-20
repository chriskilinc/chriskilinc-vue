# chriskilinc-vue
Personal portfolio Single Page Application website running on [Vue.js](https://vuejs.org/) 

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Lints and fixes files
```
yarn run lint
```
## Docker support
This application is deployed to Azure using Docker running an ngnix server to serve vue.

### Build using Docker
```
docker build . -t chriskilinc-vue
```

### Running using Docker
Serve docker container to [localhost](http://localhost:8080)
```
docker run -d -p 8080:80 chriskilinc-vue
```

## Building docker image using Azure Pipelines
This project has an [azure-pipelines.yml](https://github.com/chriskilinc/chriskilinc-vue/blob/master/azure-pipelines.yml) file and a webhook to Azure.  
Which makes it posible to build the project into an docker image then pushing it to [Docker Hub](https://cloud.docker.com/u/chriskilinc/repository/docker/chriskilinc/chriskilinc-vue).  
Azure devops will, by the use of webhooks, deploy the application to the web. When a new docker image is available.
"# normalize" 
