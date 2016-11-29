## Remove docker images for unused
docker rmi $(docker images -qf "dangling=true")

## Dockerfile and docker-compose.yml for rebuilding
## (1) images and (2) nodejs service
* run "docker-compose build ." and "docker-compose up"
* checkout "docker ps"


