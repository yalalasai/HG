FROM docker.io/openjdk:8-jre

MAINTAINER Hygieia@capitalone.com

RUN mkdir /hygieia /hygieia/config

COPY *.jar /hygieia/
COPY properties-builder.sh /hygieia/


WORKDIR /hygieia

VOLUME ["/hygieia/logs"]

ENV PROP_FILE /hygieia/config/application.properties

CMD ./properties-builder.sh && \
  java -jar mendix-*.jar --spring.config.location=$PROP_FILE
