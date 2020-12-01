# Demonstration: Using CDK to automate deployment of a Vue.js application to AWS S3

This project uses The **AWS Cloud Development Kit** with Typescript for *leveraging automation* and **Vue.js** for a *web application*.

The files included and instructions following automate the deployment of a publicly accessible Vue.js web application to an S3 bucket.

The purpose is to demonstrate the AWS best practice of **Operational Excellence** by *performing operations as code* as defined by the AWS Well-Architected Framework
  [The 5 Pillars of the AWS Well Architected Framework](https://aws.amazon.com/blogs/apn/the-5-pillars-of-the-aws-well-architected-framework/)



# Instructions

### Prerequisites

1. An Amazon Web Services account

2. AWS CLI Tools installed
  * [Download the AWS CLI Tools](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html)

3. AWS access keys configured for AWS account authentication
  * Access keys are created in the AWS management console
  * Access keys must then be added to the AWS CLI tools by running the command: `aws configure`
  * Best practice is to delete the key after configuration for account security
  * [Using Access Keys with AWS CLI Tools](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html)

4. Node.js javascript runtime and Node.js Package Manager (NPM) installed
  * [Download Node.js Package Manager](https://nodejs.org/en/download/package-manager/)

5. (tentative) VueCLI installed (globally)
  * Can be installed via npm by running the command: `npm install -g @vue/cli`

6. AWS CDK Toolkit installed (globally)
  * Can be installed via npm by running the command: `npm install -g aws-cdk`



### Deployment Instructions 

1. (tentative) Build a production bundle from the Vue.js application source code
  * In the `\*/cdk-and-vuejs-in-s3/demo-vuejs` directory run `npm run build`
  * This will output the Vue.js application to a dist folder within its project directory

2. (optional)(tentative) Inspect the CloudFormation template to be created by the CDK application source code 
  * In the `\*/cdk-and-vuejs-in-s3/demo-cdk` directory run `cdk synth`
  * The synth command will output the CloudFormation template structured in YAML to Stdout
  * The output will be a human-readable YAML file for easy inspection prior to deployment

3. (tentative) Bootstrap the AWS environment before deployment
  * In the `\*/cdk-and-vuejs-in-s3/demo-cdk` directory run `cdk bootstrap`
  * The bootstrap command will create an initial stack that includes resources used by the CDK Toolkit
  * In this case, it will create an S3 bucket that will contain the template and assets for the application
  * [AWS CDK Bootstrapping Documentation](https://docs.aws.amazon.com/cdk/latest/guide/bootstrapping.html)

4. (tentative) Deploy the CDK application to an S3 bucket in the AWS account
  * In the `\*/cdk-and-vuejs-in-s3/demo-cdk` directory run `cdk deploy`
  * The deploy command will egress a CloudFormation template to the AWS account configured within the AWS CLI Tools
  * The CDK application to be deployed is defined by the `app:` key in `\*/cdk-and-vuejs-in-s3/demo-cdk/cdk.json`
  * The result is a CloudFormation stack in the account that creates an S3 bucket containing the Vue.js application
  * The deploy command's output to Stdout will contain a confirmation as well as a publically accessible URL

5. (optional) Access the application
  * The URL output from the deploy command can be used to access the newly deployed Vue.js application via a web browser
  * Since the Vue.js application was configured by the CDK application to be public, this URL can be shared to and accessed by anyone on the public internet

6. (optional) Inspect the newly created resources in the AWS Management Console
  * AWS S3 is an object storage web service that logically separates its files into buckets as key-value pairs
  * The file objects of the Vue.js web application are stored inside created buckets in the S3 section of the AWS Management Console
  * Access to these objects is controlled by an associated resource policy (or more specifically, an implicit deny bucket policy)
  * The CDK application generates CloudFormation templates that can be viewed as stacks in the CloudFormation section of the AWS Management Console
  * Every resource, file, and permission that was added to the AWS account for the Vue.js application is explicitly defined by the stacks created



### Tear Down Instructions

1. Return the AWS account to its original state at the start of this demonstration
  * In the `\*/cdk-and-vuejs-in-s3/demo-cdk` directory run `cdk destroy`
  * The destroy command will automatically reverse all changes made to the AWS account by the deploy command
  * CloudFormation templates define how resources are provisioned within the AWS account, but they are stored in a stack data structure until they are explicitly removed
  * This makes it easy for AWS to remove resources that were created by the CDK application in a LIFO (last in, first out) order


# Project Takeaways

### Deployment Automation

1. Each step of the deployment process was granularized into simple commands that can be scripted or quickly executed

2. At no point during the deployment process was access to the AWS management console required



### Tear Down Automation

1. Using services in an AWS account can incur a cost and it does not make sense to pay for resources not being used

2. Since both the deployment and the tear down process can be automated, these strategies can be used to significantly reduce cost





