# Image Location
FROM alpine

# MAINTENER
MAINTAINER Maissacrement <emmariodelar@gmail.com>

# SET ENV VAR
ENV DEV_HOME /home/developer
ENV uid=1000
ENV gid=1000
ENV KafkaVersion=2.2.0
ENV KafkaRepo=kafka_2.12-${KafkaVersion}
ENV KafkaPkgName=${KafkaRepo}.tgz

# DEV USER
RUN mkdir -p ${DEV_HOME} ${DEV_HOME}/app && \
    echo "developer:x:${uid}:${gid}:Developer,,,:${DEV_HOME}:/bin/bash" >> /etc/passwd && \
    echo "developer:x:${uid}:" >> /etc/group && \
    chown ${uid}:${gid} -R ${DEV_HOME}/app


# WORKSPACE
WORKDIR ${DEV_HOME}/kafka

RUN wget http://apache.crihan.fr/dist/kafka/${KafkaVersion}/${KafkaPkgName} && \
    tar -xvf ${KafkaPkgName}

# CURRENT USER
USER developer

ENV PATH=$PATH:${DEV_HOME}/kafka/${KafkaRepo}/bin
