___
### Distributed Jenkins Environment 
* Master installed on Ubuntu EC2 instance
* Applied reverse proxy using NGINX
* Configured Simple Email Service SMTP credentials via AWS Management Console
* Configured SMTP Authentication and SSL for Jenkins' email notifications
* Configured build server with IAM role to optionally only allow SSH connections from Jenkins master
* Installed openJDK, Git, Docker, and awsebcli
* Removed all executors from Jenkins master and connected build server(s) 
### Containerized deployments of builds for worker services and web clients
* Setup Docker registry using Amazon ECS for building containers
* Used AWS CLI to push and pull Image tags
* Worker Microservices deployed to AWS EC2 instances
* Websites are deployed as static builds to AWS S3 buckets
* Created custom SSL certificate using AWS Certificate Manager service
* Deployed website to edges world-wide via AWS Cloudfront distributions 
* Used AWS Route53 service to route to current name: marshhawkmusic.com/
* Created CNAME configuration for WWWW (e.g. `https://www.marshhawkmusic.com`)

### References
+ [Running Jenkins on AWS](https://www.google.com)
+ [Docker: Continous Delivery](https://www.lynda.com/Docker-tutorials/Docker-Continuous-Delivery/672474-2.html)