# Architecture
![sitemap](https://github.com/memor24/myWebsite-frontend/assets/112832477/c717be40-2d98-4a72-a27d-fb56b163878b)

# Frontend
## Security
The webpage is hosted in AWS-S3, the security of which is configured with Ansible. It includes IAM and access control level (ACL) so it can be viewd publicly as a static webpage, and permission policy for the S3 bucket, so that it won't be exposed entirely to the public. Besides, DNS, SSL/TLS and CDN services are provided by Cloudflare.
Also continuous integration (CICD) is done via GitHub Actions that integrates the local Dev environment and deploys changes to the AWS-S3 bucket.

## IaC
TBU: All the AWS resources will be defined as Terraform code and deployed using Terraform commands automatically.

