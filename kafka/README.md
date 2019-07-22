# STEP 1 : add zookeeper config and add kafka-server config and require java 1.8

# HOW TO BUILD AND RUN

BUILD: `docker build -t kafka .`
RUN: `docker run -ti -d --name kafka kafka`

STOP: `docker stop kafka`
START: `docker start kafka`
REMOVE: `docker rm kafka`

# RUN ONLY ZOOKEEPER CLIENT
cmd: `docker exec -i -t kafka zookeeper-server-start.sh kafka_2.12-2.2.0/config/zookeeper.properties`

# RUN ONLY KAFKA SERVER
cmd: `docker exec -i -t kafka kafka-server-start.sh kafka_2.12-2.2.0/config/server.properties`
