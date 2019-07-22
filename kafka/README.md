# Kafka Server Config

## HOW TO BUILD AND RUN

```bash
BUILD: `docker build -t kafka .`
RUN: `docker run -ti -d --name kafka kafka`

STOP: `docker stop kafka`
START: `docker start kafka`
REMOVE: `docker rm kafka`
```

## RUN ONLY ZOOKEEPER
cmd: `docker exec -i -t kafka zookeeper-server-start.sh config/zookeeper.properties`

## RUN ONLY KAFKA SERVER
cmd: `docker exec -i -t kafka kafka-server-start.sh config/server.properties`
