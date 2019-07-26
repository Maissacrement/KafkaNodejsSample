# Kafka Server Config

## HOW TO BUILD AND RUN

```bash
BUILD: `docker build -t kafka .`

START: `docker start kafka`
STOP: `docker stop kafka`
REMOVE: `docker rm kafka`
```

## RUN ONLY ZOOKEEPER
RUN: `docker run -p 2181:2181 -ti -d --name kafka kafka`
EXEC: `docker exec -i -t kafka zookeeper-server-start.sh config/zookeeper.properties`

## RUN ONLY KAFKA SERVER
RUN: `docker run -p 9092:9092 -ti -d --name kafka kafka`
EXEC: `docker exec -i -t kafka kafka-server-start.sh config/server.properties`
