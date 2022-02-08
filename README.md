# Docker Containers Monitoring #

The purpose of this readme is to describe the development/deployment of the Docker Containers Monitoring functions.

### What is this repository for? ###

* Node JS application that would be published as docker image on docker hub or some other repository and it would allow to run this docker image as container on any machine where we want to monitor status of all docker containers running there.
This service would send notification via slack for status of all docker containers running on a host machine.

* To achieve above goal, we are going to use docker REST API to get status of all containers.

### How do I get set up? ###

* npm install
* setup .env file with the help of .env.eample file present in project root directory
* npm start

### Environment Variables ###

* SLACK_TOKEN: Slack app token (required)
* SLACK_CHANNEL: Slack channel on which you want to send notification (required)
* TIME_INTERVEL: Time intervel for checking status of docker containers (optional default value "1sec")
* HOST_NAME: HostName of system where service is running (optional default value "-")
* HOST_IP: HostIp of system where service is running (optional default value "-")

The environment variables can be loaded in the run configuration of the container service. 

### Docker Command to Run Service From Docker Image ###

* docker pull coindefi/docker-container-monitoring
* docker container run -v /var/run/docker.sock:/var/run/docker.sock -e SLACK_TOKEN=slack_token -e TIME_INTERVEL=time_intervel -e SLACK_CHANNEL=channel_name -e HOST_NAME=host_name -e HOST_IP=host_ip -d coindefi/docker-container-monitoring
