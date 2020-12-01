# Demonstration: How to use the AWS CDK Toolkit to automate deployment of a Vue.js application to AWS S3

This project uses the **AWS Cloud Development Kit** with Typescript to *leverage automation* with **Vue.js** as the target web application.

The files included in this repository along with the following instructions will allow the reader to automate the deployment of a publicly accessible Vue.js web application to an S3 bucket.

The purpose is to demonstrate the AWS best practice of **Operational Excellence** by performing *operations as code* as defined by the **AWS Well-Architected Framework**
<br/>[Read: The 5 Pillars of the AWS Well Architected Framework](https://aws.amazon.com/blogs/apn/the-5-pillars-of-the-aws-well-architected-framework/)
<br/><br/><br/><br/>


# Project Instructions

## Prerequisites:

**1. An Amazon Web Services account**
<br/><br/>

**2. AWS CLI Tools installed**
  * [Download: AWS CLI Tools](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html)
<br/>

**3. AWS access keys configured for AWS account authentication**
  * Access keys are created in the AWS management console
  * Access keys must then be added to the AWS CLI tools by running the global command: `aws configure`
  * Best practice is to delete the key after configuration for account security
  * [Read: Access Keys with AWS CLI Tools](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html)
<br/>

**4. Node.js javascript runtime and Node.js Package Manager (NPM) installed**
  * [Download: Node.js Package Manager](https://nodejs.org/en/download/package-manager/)
<br/>

**5. ~~(tentative)~~ VueCLI installed *(globally)***
  * Can be installed via NPM by running the global command: `npm install -g @vue/cli`
<br/>

**6. AWS CDK Toolkit installed *(globally)***
  * Can be installed via NPM by running the global command: `npm install -g aws-cdk`
<br/>
  
**7. Git Software Change Management installed**
  * [Download: git-scm](https://git-scm.com/downloads)
<br/><br/><br/>


## Deployment Instructions:

**1. Use Git to clone this repository to a local machine**
  * In Git Bash, change the current working directory to the location where this repository should be cloned
  * In the directory run the command: `git clone https://github.com/austinesmith/cdk-and-vuejs-in-s3.git`
<br/>

**2. Build a production bundle from the Vue.js application source code**
  * In the `*/cdk-and-vuejs-in-s3/demo-vuejs` directory run the command: `npm run build`
  * This will output the Vue.js application to a `dist` folder within its project directory
<br/>

**3. *(optional)* Inspect the CloudFormation template to be created by the CDK application source code**
  * In the `*/cdk-and-vuejs-in-s3/demo-cdk` directory run the command: `cdk synth`
  * The `cdk synth` command will output the CloudFormation template to Stdout structured in YAML
  * The output will be a human-readable YAML file used for easy inspection prior to deployment
<br/>

**4. Bootstrap the AWS environment before deployment**
  * In the `*/cdk-and-vuejs-in-s3/demo-cdk` directory run the command: `cdk bootstrap`
  * The `cdk bootstrap` command will create an initial CloudFormation stack that includes resources needed by the CDK Toolkit
  * [Read: AWS CDK Bootstrapping Documentation](https://docs.aws.amazon.com/cdk/latest/guide/bootstrapping.html)
<br/>

**5. Deploy the CDK application to an S3 bucket in the AWS account**
  * In the `*/cdk-and-vuejs-in-s3/demo-cdk` directory run the command: `cdk deploy`
  * The `cdk deploy` command will egress a CloudFormation template to the AWS account configured within the AWS CLI Tools
  * The CDK application source to be deployed is defined by the `app:` key in `*/cdk-and-vuejs-in-s3/demo-cdk/cdk.json`
  * The result is a CloudFormation stack that creates an S3 bucket containing the Vue.js application in the AWS account
  * The `cdk deploy` command's output to Stdout will contain a confirmation as well as a publicly accessible URL
<br/>

**6. Access the deployed application via public internet**
  * Use the URL from the `cdk deploy` command output to access the newly deployed Vue.js application via a web browser
  * Since the Vue.js application was configured by the CDK application to be public, this URL can be shared to and accessed by anyone on the public internet
<br/>

**7. *(optional)* Inspect the newly created resources by logging into the AWS Management Console**
  * The newly created resources can be viewed in the S3 and CloudFormation sections of the AWS Management Console
  * AWS S3 is an object storage web service that logically separates its files into buckets as key-value pairs
  * The file objects of the Vue.js web application are stored inside created buckets in the S3 section of the AWS Management Console
  * Access to these objects is controlled by an associated resource policy (or more specifically, an implicit deny bucket policy)
  * The CDK application generates CloudFormation templates that can be viewed as stacks in the CloudFormation section of the AWS Management Console
  * Every resource, file, and permission that was added to the AWS account for the Vue.js application is explicitly defined by the stacks created
<br/><br/><br/>



## Tear Down Instructions:

**1. Reverse all changes made by the deployment and return the AWS account to its original state**
  * In the `*/cdk-and-vuejs-in-s3/demo-cdk` directory run `cdk destroy`
  * The `cdk destroy` command will automatically reverse all the changes made to the AWS account by the `cdk deploy` command
  * CloudFormation templates define how resources are provisioned within the AWS account, but they are stored in a stack data structure until they are explicitly removed
  * The stack structure allows AWS to remove resources that were created by the CDK application in a LIFO (last in, first out) order
<br/><br/><br/><br/>

# Project Takeaways

### Deployment Automation:

  * Each step of the deployment process was granularized into simple commands that could be scripted or quickly executed

  * At no point during the deployment process was access to the AWS management console required

  * The source logic of this CDK application contained in `*/cdk-and-vuejs-in-s3/demo-cdk/lib/demo-cdk-stack.ts` consists of `8` lines of written code and generates a CloudFormation template consisting of `191` lines of YAML.  This contrast is an example of how the AWS CDK Toolkit can streamline the development process.
<br/><br/>


### Tear Down Automation:

  * Using services in an AWS account can incur a cost and it does not make sense to pay for resources not being used

  * Since both the deployment and the tear down process can be automated, modeling your *infrastructure as code* can significantly reduce costs
<br/><br/>




