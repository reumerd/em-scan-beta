# EM scan server
# version 1.0
# Author: Dennis Reumer

FROM node:4-onbuild
MAINTAINER d.reumer@strict.nl
LABEL Description="This image is used to start a docker container with the EM scan server API" Vendor="Strict Consultancy" Version="1.0"
EXPOSE 80
VOLUME ["/var/db"]
