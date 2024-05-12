# Architecture
![sitemap](https://github.com/memor24/myWebsite-frontend/assets/112832477/5cf1aec6-e654-4286-a253-78a65bcb423e)

# Frontend
## Security
The webpage is hosted in AWS-S3, the security of which is configured with Ansible. It includes IAM and access control level (ACL) so it can be viewd publicly as a static webpage, and permission policy for the S3 bucket, so that it won't be exposed entirely to the public. Besides, DNS, SSL/TLS and CDN services are provided by Cloudflare.
Also continuous integration (CICD) is done via GitHub Actions that integrates the local Dev environment and deploys changes to the AWS-S3 bucket.

## IaC
TBU: All the AWS resources are defined as Terraform code and deployed using Terraform commands automatically.

