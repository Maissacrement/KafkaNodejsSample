# Micro service node

## Node

```bash
run server : `yarn dev`
lint : `yarn lint`
test : `yarn test`
build : `yarn build`
```

## Run my micro service on docker

```bash
BUILD: `docker build -t nodeforkafka .`
RUN: `docker run -p 8082:8082 -ti -d --name nodeforkafka nodeforkafka`

START: `docker start nodeforkafka`
STOP: `docker stop nodeforkafka`
REMOVE: `docker rm nodeforkafka`
```

## RUN NODE SERVICE
cmd: `docker exec -i -t nodeforkafka yarn dev`

