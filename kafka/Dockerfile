# JAVA IMAGE
FROM openjdk:8-jre-alpine

# MAINTENER
MAINTAINER Maissacrement <emmariodelar@gmail.com>

# SET ENV VAR
ENV DEV_HOME /home/developer
ENV uid=1000
ENV gid=1000
ENV KafkaVersion=2.2.0
ENV KafkaFilename=kafka_2.12-${KafkaVersion}
ENV KafkaRepo=${DEV_HOME}/kafka/${KafkaFilename}
ENV KafkaPkgName=${KafkaFilename}.tgz
ENV KafkaPathConfig=config/server.properties
# Download Link Env
ENV KafkaDownloadLink=http://apache.crihan.fr/dist/kafka/${KafkaVersion}/${KafkaPkgName}

# CREATE DEV USER
RUN mkdir -p ${DEV_HOME} ${DEV_HOME}/app && \
    echo "developer:x:${uid}:${gid}:Developer,,,:${DEV_HOME}:/bin/bash" >> /etc/passwd && \
    echo "developer:x:${uid}:" >> /etc/group && \
    chown ${uid}:${gid} -R ${DEV_HOME}/app

# WORKSPACE
WORKDIR ${DEV_HOME}/kafka

RUN wget ${KafkaDownloadLink} && \
    tar -xvf ${KafkaPkgName} && \
    chown -R developer:developer ${KafkaRepo}/ && \
    chmod +x ${KafkaRepo}/bin/* && \
    apk update && apk add bash tmux

ENV PATH=$PATH:${KafkaRepo}/bin

# CURRENT USER
USER developer

WORKDIR ${DEV_HOME}/kafka/${KafkaFilename}/bin

ENV PATH=$PATH:${KafkaRepo}/bin

RUN mkdir /tmp/kafka-logs /tmp/zookeeper

ENTRYPOINT ["/bin/bash"]
