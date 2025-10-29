import type { Question } from "../types/quiz";

export const awsCloudPractitionerQuestions: Question[] = [

  {
    id: "q1",
    prompt: "AWS allows users to manage their resources using a web based user interface. What is the name of this interface?",
    options: [
      { id: "a", text: "AWS CLI." },
      { id: "b", text: "AWS API." },
      { id: "c", text: "AWS SDK." },
      { id: "d", text: "AWS Management Console." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q2",
    prompt: "Which of the following is an example of horizontal scaling in the AWS Cloud?",
    options: [
      { id: "a", text: "Replacing an existing EC2 instance with a larger, more powerful one." },
      { id: "b", text: "Increasing the compute capacity of a single EC< instance to address the growing demands of an application." },
      { id: "c", text: "Adding more RAM capacity to an EC2 instance." },
      { id: "d", text: "Adding more EC2 instances of the same size to handle an increase in traffic." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q3",
    prompt: "You have noticed that several critical Amazon EC2 instances have been terminated. Which of the following AWS services would help you determine who took this action?",
    options: [
      { id: "a", text: "Amazon Inspector." },
      { id: "b", text: "AWS CloudTrail." },
      { id: "c", text: "AWS Trusted Advisor." },
      { id: "d", text: "EC2 Instance Usage Report." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q4",
    prompt: "Which of the below options are related to the reliability of AWS? (Choose TWO)",
    options: [
      { id: "a", text: "Applying the principle of least privilege to all AWS resources." },
      { id: "b", text: "Automatically provisioning new resources to meet demand." },
      { id: "c", text: "All AWS services are considered Global Services, and this design helps customers serve their international users." },
      { id: "d", text: "Providing compensation to customers if issues occur." },
      { id: "e", text: "Ability to recover quickly from failures." },
    ],
    correctOptionId: "b,e"
  },

  {
    id: "q5",
    prompt: "Which statement is true regarding the AWS Shared Responsibility Model?",
    options: [
      { id: "a", text: "Responsibilities vary depending on the services used." },
      { id: "b", text: "Security of the IaaS services is the responsibility of AWS." },
      { id: "c", text: "Patching the guest OS is always the responsibility of AWS." },
      { id: "d", text: "Security of the managed services is the responsibility of the customer." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q6",
    prompt: "You have set up consolidated billing for several AWS accounts. One of the accounts has purchased a number of reserved instances for 3 years. Which of the following is true regarding this scenario?",
    options: [
      { id: "a", text: "The Reserved Instance discounts can only be shared with the master account." },
      { id: "b", text: "All accounts can receive the hourly cost benefit of the Reserved Instances." },
      { id: "c", text: "The purchased instances will have better performance than On-demand instances." },
      { id: "d", text: "There are no cost benefits from using consolidated billing; It is for informational purposes only." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q7",
    prompt: "A company has developed an eCommerce web application in AWS. What should they do to ensure that the application has the highest level of availability?",
    options: [
      { id: "a", text: "Deploy the application across multiple Availability Zones and Edge locations." },
      { id: "b", text: "Deploy the application across multiple Availability Zones and subnets." },
      { id: "c", text: "Deploy the application across multiple Regions and Availability Zones." },
      { id: "d", text: "Deploy the application across multiple VPC's and subnets." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q8",
    prompt: "What does AWS Snowball provide? (Choose TWO)",
    options: [
      { id: "a", text: "Built-in computing capabilities that allow customers to process data locally." },
      { id: "b", text: "A catalog of third-party software solutions that customers need to build solutions and run their businesses." },
      { id: "c", text: "A hybrid cloud storage between on-premises environments and the AWS Cloud." },
      { id: "d", text: "An Exabyte-scale data transfer service that allows you to move extremely large amounts of data to AWS." },
      { id: "e", text: "Secure transfer of large amounts of data into and out of the AWS." },
    ],
    correctOptionId: "a,e"
  },

  {
    id: "q9",
    prompt: "A company has an AWS Enterprise Support plan. They want quick and efficient guidance with their billing and account inquiries. Which of the following should the company use?",
    options: [
      { id: "a", text: "AWS Health Dashboard." },
      { id: "b", text: "AWS Support Concierge." },
      { id: "c", text: "AWS Customer Service." },
      { id: "d", text: "AWS Operations Support." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q10",
    prompt: "A Japanese company hosts their applications on Amazon EC2 instances in the Tokyo Region. The company has opened new branches in the United States, and the US users are complaining of high latency. What can the company do to reduce latency for the users in the US while minimizing costs?",
    options: [
      { id: "a", text: "Applying the Amazon Connect latency-based routing policy." },
      { id: "b", text: "Registering a new US domain name to serve the users in the US." },
      { id: "c", text: "Building a new data center in the US and implementing a hybrid model." },
      { id: "d", text: "Deploying new Amazon EC2 instances in a Region located in the US." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q11",
    prompt: "An organization has a large number of technical employees who operate their AWS Cloud infrastructure. What does AWS provide to help organize them into teams and then assign the appropriate permissions for each team?",
    options: [
      { id: "a", text: "IAM roles." },
      { id: "b", text: "IAM users." },
      { id: "c", text: "IAM user groups." },
      { id: "d", text: "AWS Organizations." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q12",
    prompt: "A company has decided to migrate its Oracle database to AWS. Which AWS service can help achieve this without negatively impacting the functionality of the source database?",
    options: [
      { id: "a", text: "AWS OpsWorks." },
      { id: "b", text: "AWS Database Migration Service." },
      { id: "c", text: "AWS Server Migration Service." },
      { id: "d", text: "AWS Application Discovery Service." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q13",
    prompt: "Adjusting compute capacity dynamically to reduce cost is an implementation of which AWS cloud best practice?",
    options: [
      { id: "a", text: "Build security in every layer." },
      { id: "b", text: "Parallelize tasks." },
      { id: "c", text: "Implement elasticity." },
      { id: "d", text: "Adopt monolithic architecture." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q14",
    prompt: "What are the benefits of having infrastructure hosted in AWS? (Choose TWO)",
    options: [
      { id: "a", text: "Increasing speed and agility." },
      { id: "b", text: "There is no need to worry about security." },
      { id: "c", text: "Gaining complete control over the physical infrastructure." },
      { id: "d", text: "Operating applications on behalf of customers." },
      { id: "e", text: "All of the physical security and most of the data/network security are taken care of for you." },
    ],
    correctOptionId: "a,e"
  },

  {
    id: "q15",
    prompt: "What is the advantage of the AWS-recommended practice of 'decoupling' applications?",
    options: [
      { id: "a", text: "Allows treating an application as a single, cohesive unit." },
      { id: "b", text: "Reduces inter-dependencies so that failures do not impact other components of the application." },
      { id: "c", text: "Allows updates of any monolithic application quickly and easily." },
      { id: "d", text: "Allows tracking of any API call made to any AWS service." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q16",
    prompt: "Which of the following helps a customer view the Amazon EC2 billing activity for the past month?",
    options: [
      { id: "a", text: "AWS Budgets." },
      { id: "b", text: "AWS Pricing Calculator." },
      { id: "c", text: "AWS Systems Manager." },
      { id: "d", text: "AWS Cost & Usage Reports." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q17",
    prompt: "What do you gain from setting up consolidated billing for five different AWS accounts under another master account?",
    options: [
      { id: "a", text: "AWS services' costs will be reduced to half the original price." },
      { id: "b", text: "The consolidated billing feature is just for organizational purpose." },
      { id: "c", text: "Each AWS account gets volume discounts." },
      { id: "d", text: "Each AWS account gets five times the free-tier services capacity." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q18",
    prompt: "What should you do in order to keep the data on EBS volumes safe? (Choose TWO)",
    options: [
      { id: "a", text: "Regularly update firmware on EBS devices." },
      { id: "b", text: "Create EBS snapshots." },
      { id: "c", text: "Ensure that EBS data is encrypted at rest." },
      { id: "d", text: "Store a backup daily in an external drive." },
      { id: "e", text: "Prevent any unauthorized access to AWS data centers." },
    ],
    correctOptionId: "b,c"
  },

  {
    id: "q19",
    prompt: "One of the most important AWS best-practices to follow is the cloud architecture principle of elasticity. How does this principle improve your architecture's design?",
    options: [
      { id: "a", text: "By automatically scaling your on-premises resources based on changes in demand." },
      { id: "b", text: "By automatically scaling your AWS resources using an Elastic Load Balancer." },
      { id: "c", text: "By reducing interdependencies between application components wherever possible." },
      { id: "d", text: "By automatically provisioning the required AWS resources based on changes in demand." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q20",
    prompt: "A startup company is operating on limited funds and is extremely concerned about cost overruns. Which of the below options can be used to notify the company when their monthly AWS bill exceeds $2000? (Choose TWO)",
    options: [
      { id: "a", text: "Setup a CloudWatch billing alarm that triggers an SNS notification when the threshold is exceeded." },
      { id: "b", text: "Configure the Amazon Simple Email Service to send billing alerts to their email address on a daily basis." },
      { id: "c", text: "Configure the AWS Budgets Service to alert the company when the threshold is exceeded." },
      { id: "d", text: "Configure AWS CloudTrail to automatically delete all AWS resources when the threshold is exceeded." },
      { id: "e", text: "Configure the Amazon Connect Service to alert the company when the threshold is exceeded." },
    ],
    correctOptionId: "a,c"
  },

  {
    id: "q21",
    prompt: "What does Amazon CloudFront use to distribute content to global users with low latency?",
    options: [
      { id: "a", text: "AWS Global Accelerator." },
      { id: "b", text: "AWS Regions." },
      { id: "c", text: "AWS Edge Locations." },
      { id: "d", text: "AWS Availability Zones." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q22",
    prompt: "What does the 'Principle of Least Privilege' refer to?",
    options: [
      { id: "a", text: "You should grant your users only the permissions they need when they need them and nothing more." },
      { id: "b", text: "AllIAM users should have at least the necessary permissions to access the core AWS services." },
      { id: "c", text: "All trusted IAM users should have access to any AWS service in the respective AWS account." },
      { id: "d", text: "IAM users should not be granted any permissions; to keep your account safe." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q23",
    prompt: "Which of the following does NOT belong to the AWS Cloud Computing models?",
    options: [
      { id: "a", text: "Platform as a Service (PaaS)." },
      { id: "b", text: "Infrastructure as a Service (IaaS)." },
      { id: "c", text: "Software as a Service (SaaS)." },
      { id: "d", text: "Networking as a Service (NaaS)." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q24",
    prompt: "The identification process of an online financial services company requires that new users must complete an online interview with their security team. The completed recorded interviews are only required in the event of a legal issue or a regulatory compliance breach. What is the most cost-effective service to store the recorded videos?",
    options: [
      { id: "a", text: "S3 Intelligent-Tiering." },
      { id: "b", text: "AWS Marketplace." },
      { id: "c", text: "Amazon S3 Glacier Deep Archive." },
      { id: "d", text: "Amazon EBS." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q25",
    prompt: "Which service provides DNS in the AWS cloud?",
    options: [
      { id: "a", text: "Route 53." },
      { id: "b", text: "AWS Config." },
      { id: "c", text: "Amazon CloudFront." },
      { id: "d", text: "Amazon EMR." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q26",
    prompt: "Hundreds of thousands of DDoS attacks are recorded every month worldwide. What service does AWS provide to help protect AWS Customers from these attacks? (Choose TWO)",
    options: [
      { id: "a", text: "AWS Shield." },
      { id: "b", text: "AWS Config." },
      { id: "c", text: "Amazon Cognito." },
      { id: "d", text: "AWS WAF." },
      { id: "e", text: "AWS KMS." },
    ],
    correctOptionId: "a,d"
  },

  {
    id: "q27",
    prompt: "A company is deploying a new two-tier web application in AWS. Where should the most frequently accessed data be stored so that the application's response time is optimal?",
    options: [
      { id: "a", text: "AWS OpsWorks." },
      { id: "b", text: "AWS Storage Gateway." },
      { id: "c", text: "Amazon EBS volume." },
      { id: "d", text: "Amazon ElastiCache." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q28",
    prompt: "You want to run a questionnaire application for only one day (without interruption), which Amazon EC2 purchase option should you use?",
    options: [
      { id: "a", text: "Reserved instances." },
      { id: "b", text: "Spot instances." },
      { id: "c", text: "Dedicated instances." },
      { id: "d", text: "On-demand instances." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q29",
    prompt: "You are working on a project that involves creating thumbnails of millions of images. Consistent uptime is not an issue, and continuous processing is not required. Which EC2 buying option would be the most cost-effective?",
    options: [
      { id: "a", text: "Reserved Instances." },
      { id: "b", text: "On-demand Instances." },
      { id: "c", text: "Dedicated Instances." },
      { id: "d", text: "Spot Instances." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q30",
    prompt: "Which of the following can be described as a global content delivery network (CDN) service?",
    options: [
      { id: "a", text: "AWS VPN." },
      { id: "b", text: "AWS Direct Connect." },
      { id: "c", text: "AWS Regions." },
      { id: "d", text: "Amazon CloudFront." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q31",
    prompt: "Which of the following services allows customers to manage their agreements with AWS?",
    options: [
      { id: "a", text: "AWS Artifact." },
      { id: "b", text: "AWS Certificate Manager." },
      { id: "c", text: "AWS Systems Manager." },
      { id: "d", text: "AWS Organizations." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q32",
    prompt: "Which of the following are examples of AWS-Managed Services, where AWS is responsible for the operational and maintenance burdens of running the service? (Choose TWO)",
    options: [
      { id: "a", text: "Amazon VPC." },
      { id: "b", text: "Amazon DynamoDB." },
      { id: "c", text: "Amazon Elastic MapReduce." },
      { id: "d", text: "AWS IAM." },
      { id: "e", text: "Amazon Elastic Compute Cloud." },
    ],
    correctOptionId: "b,c"
  },

  {
    id: "q33",
    prompt: "Your company has a data store application that requires access to a NoSQL database. Which AWS database offering would meet this requirement?",
    options: [
      { id: "a", text: "Amazon Aurora." },
      { id: "b", text: "Amazon DynamoDB." },
      { id: "c", text: "Amazon Elastic Block Store." },
      { id: "d", text: "Amazon Redshift." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q34",
    prompt: "As part of the Enterprise support plan, who is the primary point of contact for ongoing support needs?",
    options: [
      { id: "a", text: "AWS Identity and Access Management (IAM) user." },
      { id: "b", text: "Infrastructure Event Management (IEM) engineer." },
      { id: "c", text: "AWS Consulting Partners." },
      { id: "d", text: "Technical Account Manager (TAM)." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q35",
    prompt: "How can you view the distribution of AWS spending in one of your AWS accounts?",
    options: [
      { id: "a", text: "By using Amazon VPC console." },
      { id: "b", text: "By contacting the AWS Support team." },
      { id: "c", text: "By using AWS Cost Explorer." },
      { id: "d", text: "By contacting the AWS Finance team." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q36",
    prompt: "Which of the following must an IAM user provide to interact with AWS services using the AWS Command Line Interface (AWS CLI)?",
    options: [
      { id: "a", text: "Access keys." },
      { id: "b", text: "Secret token." },
      { id: "c", text: "UserID." },
      { id: "d", text: "User name and password." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q37",
    prompt: "You have AWS Basic support, and you have discovered that some AWS resources are being used maliciously, and those resources could potentially compromise your data. What should you do?",
    options: [
      { id: "a", text: "Contact the AWS Customer Service team." },
      { id: "b", text: "Contact the AWS Abuse team." },
      { id: "c", text: "Contact the AWS Concierge team." },
      { id: "d", text: "Contact the AWS Security team." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q38",
    prompt: "Select TWO examples of the AWS shared controls.",
    options: [
      { id: "a", text: "Patch Management." },
      { id: "b", text: "IAM Management." },
      { id: "c", text: "VPC Management." },
      { id: "d", text: "Configuration Management." },
      { id: "e", text: "Data Center operations." },
    ],
    correctOptionId: "a,d"
  },

  {
    id: "q39",
    prompt: "In order to implement best practices when dealing with a 'Single Point of Failure,' you should attempt to build as much automation as possible in both detecting and reacting to failure. Which of the following AWS services would help? (Choose TWO)",
    options: [
      { id: "a", text: "ELB." },
      { id: "b", text: "Auto Scaling." },
      { id: "c", text: "Amazon Athen." },
      { id: "d", text: "ECR." },
      { id: "e", text: "Amazon EC2." },
    ],
    correctOptionId: "a,b"
  },

  {
    id: "q40",
    prompt: "A company is planning to host an educational website on AWS. Their video courses will be streamed all around the world. Which of the following AWS services will help achieve high transfer speeds?",
    options: [
      { id: "a", text: "Amazon SNS." },
      { id: "b", text: "Amazon Kinesis Video Streams." },
      { id: "c", text: "AWS CloudFormation." },
      { id: "d", text: "Amazon CloudFront." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q41",
    prompt: "A developer is planning to build a two-tier web application that has a MySQL database layer. Which of the following AWS database services would provide automated backups for the application?",
    options: [
      { id: "a", text: "A MySQL database installed on an EC2 instance." },
      { id: "b", text: "Amazon Aurora." },
      { id: "c", text: "Amazon DynamoDB." },
      { id: "d", text: "Amazon Neptune." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q42",
    prompt: "What is the AWS service that enables AWS architects to manage infrastructure as code?",
    options: [
      { id: "a", text: "AWS CloudFormation." },
      { id: "b", text: "AWS Config." },
      { id: "c", text: "Amazon SES." },
      { id: "d", text: "Amazon EMR." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q43",
    prompt: "Under the shared responsibility model, which of the following is the responsibility of AWS?",
    options: [
      { id: "a", text: "Client-side encryption." },
      { id: "b", text: "Configuring infrastructure devices." },
      { id: "c", text: "Server-side encryption." },
      { id: "d", text: "Filtering traffic with Security Groups." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q44",
    prompt: "What does the AWS Health Dashboard provide? (Choose TWO)",
    options: [
      { id: "a", text: "Detailed troubleshooting guidance to address AWS events impacting your resources." },
      { id: "b", text: "Health checks for Auto Scaling instances." },
      { id: "c", text: "Recommendations for Cost Optimization." },
      { id: "d", text: "A dashboard detailing vulnerabilities in your applications." },
      { id: "e", text: "Personalized view of AWS service health." },
    ],
    correctOptionId: "a,e"
  },

  {
    id: "q45",
    prompt: "You have deployed your application on multiple Amazon EC2 instances. Your customers complain that sometimes they can't reach your application. Which AWS service allows you to monitor the performance of your EC2 instances to assist in troubleshooting these issues?",
    options: [
      { id: "a", text: "AWS Lambda." },
      { id: "b", text: "AWS Config." },
      { id: "c", text: "Amazon CloudWatch." },
      { id: "d", text: "AWS CloudTrail." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q46",
    prompt: "Your company is developing a critical web application in AWS, and the security of the application is a top priority. Which of the following AWS services will provide infrastructure security optimization recommendations?",
    options: [
      { id: "a", text: "AWS Shield." },
      { id: "b", text: "AWS Management Console." },
      { id: "c", text: "AWS Secrets Manager." },
      { id: "d", text: "AWS Trusted Advisor." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q47",
    prompt: "Which of the following is not a benefit of Amazon S3? (Choose TWO)",
    options: [
      { id: "a", text: "Amazon S3 provides unlimited storage for any type of data." },
      { id: "b", text: "Amazon S3 can run any type of application or backend system." },
      { id: "c", text: "Amazon S3 stores any number of objects, but with object size limits." },
      { id: "d", text: "Amazon S3 can be scaled manually to store and retrieve any amount of data from anywhere." },
      { id: "e", text: "Amazon S3 provides 99.999999999% (11 9's) of data durability." },
    ],
    correctOptionId: "b,d"
  },

  {
    id: "q48",
    prompt: "In the AWS Shared responsibility Model, which of the following are the responsibility of the customer? (Choose TWO)",
    options: [
      { id: "a", text: "Disk disposal." },
      { id: "b", text: "Controlling physical access to compute resources." },
      { id: "c", text: "Patching the Network infrastructure." },
      { id: "d", text: "Setting password complexity rules." },
      { id: "e", text: "Configuring network access rules." },
    ],
    correctOptionId: "d,e"
  },

  {
    id: "q49",
    prompt: "What does AWS provide to deploy popular technologies such as IBM MQ on AWS with the least amount of effort and time?",
    options: [
      { id: "a", text: "Amazon Aurora." },
      { id: "b", text: "Amazon CloudWatch." },
      { id: "c", text: "AWS Quick Start reference deployments." },
      { id: "d", text: "AWS OpsWorks." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q50",
    prompt: "An organization has decided to purchase an Amazon EC2 Reserved Instance (RI) for three years in order to reduce costs. It is possible that the application workloads could change during the reservation period. What is the EC2 Reserved Instance (RI) type that will allow the company to exchange the purchased reserved instance for another reserved instance with higher computing power if they need to?",
    options: [
      { id: "a", text: "Elastic RI." },
      { id: "b", text: "Premium RI." },
      { id: "c", text: "Standard RI." },
      { id: "d", text: "Convertible RI." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q51",
    prompt: "A global company with a large number of AWS accounts is seeking a way in which they can centrally manage billing and security policies across all accounts. Which AWS Service will assist them in meeting these goals?",
    options: [
      { id: "a", text: "AWS Organizations." },
      { id: "b", text: "AWS Trusted Advisor." },
      { id: "c", text: "IAM User Groups." },
      { id: "d", text: "AWS Config." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q52",
    prompt: "Which service provides object-level storage in AWS?",
    options: [
      { id: "a", text: "Amazon EBS." },
      { id: "b", text: "Amazon Instance Store." },
      { id: "c", text: "Amazon EFS." },
      { id: "d", text: "Amazon S3." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q53",
    prompt: "A company is concerned that they are spending money on underutilized compute resources in AWS. Which AWS feature will help ensure that their applications are automatically adding/removing EC2 compute capacity to closely match the required demand?",
    options: [
      { id: "a", text: "AWS Elastic Load Balancer." },
      { id: "b", text: "AWS Budgets." },
      { id: "c", text: "AWS Auto Scaling." },
      { id: "d", text: "AWS Cost Explorer." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q54",
    prompt: "Which S3 storage class is best for data with unpredictable access patterns?",
    options: [
      { id: "a", text: "Amazon S3 Intelligent-Tiering." },
      { id: "b", text: "Amazon S3 Glacier Flexible Retrieval." },
      { id: "c", text: "Amazon S3 Standard." },
      { id: "d", text: "Amazon S3 Standard-Infrequent Access." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q55",
    prompt: "What is the AWS database service that allows you to upload data structured in key-value format?",
    options: [
      { id: "a", text: "Amazon DynamoDB." },
      { id: "b", text: "Amazon Aurora." },
      { id: "c", text: "Amazon Redshift." },
      { id: "d", text: "Amazon RDS." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q56",
    prompt: "Which of the following is NOT correct regarding Amazon EC2 On-demand instances?",
    options: [
      { id: "a", text: "You have to pay a start-up fee when launching a new instance for the first time." },
      { id: "b", text: "The on-demand instances follow the AWS pay-as-you-go pricing model." },
      { id: "c", text: "With on-demand instances, no longer-term commitments or upfront payments are needed." },
      { id: "d", text: "When using on-demand Linux instances, you are charged per second based on an hourly rate." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q57",
    prompt: "A company has moved to AWS recently. Which of the following AWS Services will help ensure that they have the proper security settings? (Choose TWO)",
    options: [
      { id: "a", text: "AWS Trusted Advisor." },
      { id: "b", text: "Amazon Inspector." },
      { id: "c", text: "Amazon SNS." },
      { id: "d", text: "Amazon CloudWatch." },
      { id: "e", text: "Concierge Support Team." },
    ],
    correctOptionId: "a,b"
  },

  {
    id: "q58",
    prompt: "What is the AWS feature that provides an additional level of security above the default authentication mechanism of usernames and passwords?",
    options: [
      { id: "a", text: "Encrypted keys." },
      { id: "b", text: "Email verification." },
      { id: "c", text: "AWS KMS." },
      { id: "d", text: "AWS MFA." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q59",
    prompt: "A company is introducing a new product to their customers, and is expecting a surge in traffic to their web application. As part of their Enterprise Support plan, which of the following provides the company with architectural and scaling guidance?",
    options: [
      { id: "a", text: "AWS Knowledge Center." },
      { id: "b", text: "AWS Health Dashboard." },
      { id: "c", text: "Infrastructure Event Management." },
      { id: "d", text: "AWS Support Concierge Service." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q60",
    prompt: "You work as an on-premises MySQL DBA. The work of database configuration, backups, patching, and DR can be time-consuming and repetitive. Your company has decided to migrate to the AWS Cloud. Which of the following can help save time on database maintenance so you can focus on data architecture and performance?",
    options: [
      { id: "a", text: "Amazon RDS." },
      { id: "b", text: "Amazon Redshift." },
      { id: "c", text: "Amazon DynamoDB." },
      { id: "d", text: "Amazon CloudWatch." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q61",
    prompt: "Which of the below is a best-practice when designing solutions on AWS?",
    options: [
      { id: "a", text: "Invest heavily in architecting your environment, as it is not easy to change your design later." },
      { id: "b", text: "Use AWS reservations to reduce costs when testing your production environment." },
      { id: "c", text: "Automate wherever possible to make architectural (© ) experimentation easier." },
      { id: "d", text: "Provision a large compute capacity to handle any spikes in load" },
    ],
    correctOptionId: "c"
  },

  {
    id: "q62",
    prompt: "According to the AWS Acceptable Use Policy, which of the following statements is true regarding penetration testing of EC2 instances?",
    options: [
      { id: "a", text: "Penetration testing is not allowed in AWS." },
      { id: "b", text: "Penetration testing is performed automatically by AWS to determine vulnerabilities in your AWS infrastructure." },
      { id: "c", text: "Penetration testing can be performed by the customer on their own instances without prior authorization from AWS." },
      { id: "d", text: "The AWS customers are only allowed to perform penetration testing on services managed by AWS." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q63",
    prompt: "Which service is used to ensure that messages between software components are not lost if one or more components fail?",
    options: [
      { id: "a", text: "Amazon SQS." },
      { id: "b", text: "Amazon SES." },
      { id: "c", text: "AWS Direct Connect." },
      { id: "d", text: "Amazon Connect." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q64",
    prompt: "The principle 'design for failure and nothing will fail' is very important when designing your AWS Cloud architecture. Which of the following would help adhere to this principle? (Choose TWO)",
    options: [
      { id: "a", text: "Multi-factor authentication." },
      { id: "b", text: "Availability Zones." },
      { id: "c", text: "Elastic Load Balancing." },
      { id: "d", text: "Penetration testing." },
      { id: "e", text: "Vertical Scaling." },
    ],
    correctOptionId: "b,c"
  },

  {
    id: "q65",
    prompt: "What is the AWS service that provides a virtual network dedicated to your AWS account?",
    options: [
      { id: "a", text: "AWS VPN." },
      { id: "b", text: "AWS Subnets." },
      { id: "c", text: "AWS Dedicated Hosts." },
      { id: "d", text: "Amazon VPC." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q66",
    prompt: "According to the AWS Shared responsibility model, which of the following are the responsibility of the customer? (Choose TWO)",
    options: [
      { id: "a", text: "Managing environmental events of AWS data centers." },
      { id: "b", text: "Protecting the confidentiality of data in transit in Amazon S3." },
      { id: "c", text: "Controlling physical access to AWS Regions." },
      { id: "d", text: "Ensuring that the underlying EC2 host is configured properly." },
      { id: "e", text: "Patching applications installed on Amazon EC2." },
    ],
    correctOptionId: "b,e"
  },

  {
    id: "q67",
    prompt: "Which of the following AWS services can be used as a compute resource? (Choose TWO)",
    options: [
      { id: "a", text: "Amazon VPC." },
      { id: "b", text: "Amazon CloudWatch." },
      { id: "c", text: "Amazon S3." },
      { id: "d", text: "Amazon EC2." },
      { id: "e", text: "AWS Lambda." },
    ],
    correctOptionId: "d,e"
  },

  {
    id: "q68",
    prompt: "Your company is designing a new application that will store and retrieve photos and videos. Which of the following services should you recommend as the underlying storage mechanism?",
    options: [
      { id: "a", text: "Amazon EBS." },
      { id: "b", text: "Amazon SQS." },
      { id: "c", text: "Amazon S3." },
      { id: "d", text: "Amazon Instance store." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q69",
    prompt: "Which of the following is equivalent to a user name and password and is used to authenticate your programmatic access to AWS services and APIs?",
    options: [
      { id: "a", text: "Instance Password." },
      { id: "b", text: "Key pairs." },
      { id: "c", text: "Access Keys." },
      { id: "d", text: "MFA." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q70",
    prompt: "What does Amazon ElastiCache provide?",
    options: [
      { id: "a", text: "In-memory caching for read-heavy applications." },
      { id: "b", text: "An Ehcache compatible in-memory data store." },
      { id: "c", text: "An online software store that allows Customers to launch pre-configured software with just few clicks." },
      { id: "d", text: "A domain name system in the cloud." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q71",
    prompt: "What is the AWS service that enables you to manage all of your AWS accounts from a single master account?",
    options: [
      { id: "a", text: "AWS WAF." },
      { id: "b", text: "AWS Trusted Advisor." },
      { id: "c", text: "AWS Organizations." },
      { id: "d", text: "Amazon Config." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q72",
    prompt: "Which of the following EC2 instance purchasing options supports the Bring Your Own License (BYOL) model for almost every BYOL scenario?",
    options: [
      { id: "a", text: "Dedicated Instances." },
      { id: "b", text: "Dedicated Hosts." },
      { id: "c", text: "On-demand Instances." },
      { id: "d", text: "Reserved Instances." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q73",
    prompt: "Which of the following is one of the benefits of moving infrastructure from an on-premises data center to AWS?",
    options: [
      { id: "a", text: "Free support for all enterprise customers." },
      { id: "b", text: "Automatic data protection." },
      { id: "c", text: "Reduced Capital Expenditure (CapEx)." },
      { id: "d", text: "AWS holds responsibility for managing customer applications." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q74",
    prompt: "Which of the following are important design principles you should adopt when designing systems on AWS? (Choose TWO)",
    options: [
      { id: "a", text: "Always use Global Services in your architecture rather than Regional Services." },
      { id: "b", text: "Always choose to pay as you go." },
      { id: "c", text: "Treat servers as fixed resources." },
      { id: "d", text: "Automate wherever possible." },
      { id: "e", text: "Remove single points of failure." },
    ],
    correctOptionId: "d,e"
  },

  {
    id: "q75",
    prompt: "Which AWS Service can be used to establish a dedicated, private network connection between AWS and your datacenter?",
    options: [
      { id: "a", text: "AWS Direct Connect." },
      { id: "b", text: "Amazon CloudFront." },
      { id: "c", text: "AWS Snowball." },
      { id: "d", text: "Amazon Route 53." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q76",
    prompt: "You are working on two projects that require completely different network configurations. Which AWS service or feature will allow you to isolate resources and network configurations?",
    options: [
      { id: "a", text: "Internet gateways." },
      { id: "b", text: "Virtual Private Cloud." },
      { id: "c", text: "Security Groups." },
      { id: "d", text: "Amazon CloudFront." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q77",
    prompt: "Which of the following services can help protect your web applications from SQL injection and other vulnerabilities in your application code?",
    options: [
      { id: "a", text: "Amazon Cognito." },
      { id: "b", text: "AWS IAM." },
      { id: "c", text: "Amazon Aurora." },
      { id: "d", text: "AWS WAF." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q78",
    prompt: "An organization needs to analyze and process a large number of data sets. Which AWS service should they use?",
    options: [
      { id: "a", text: "Amazon EMR." },
      { id: "b", text: "Amazon MQ." },
      { id: "c", text: "Amazon SNS." },
      { id: "d", text: "Amazon SQS." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q79",
    prompt: "Based on the AWS Shared Responsibility Model, which of the following are the sole responsibility of AWS? (Choose TWO)",
    options: [
      { id: "a", text: "Monitoring network performance." },
      { id: "b", text: "Installing software on EC2 instances." },
      { id: "c", text: "Creating hypervisors." },
      { id: "d", text: "Configuring Access Control Lists (ACLs)." },
      { id: "e", text: "Hardware maintenance." },
    ],
    correctOptionId: "c,e"
  },

  {
    id: "q80",
    prompt: "What is the AWS service that provides you the highest level of control over the underlying virtual infrastructure?",
    options: [
      { id: "a", text: "Amazon Redshift." },
      { id: "b", text: "Amazon DynamoDB." },
      { id: "c", text: "Amazon EC2." },
      { id: "d", text: "Amazon RDS." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q81",
    prompt: "What are the default security credentials that are required to access the AWS management console for an IAM user account?",
    options: [
      { id: "a", text: "MFA." },
      { id: "b", text: "Security tokens." },
      { id: "c", text: "A user name and password." },
      { id: "d", text: "Access keys." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q82",
    prompt: "In your on-premises environment, you can create as many virtual servers as you need from a single template. What can you use to perform the same in AWS?",
    options: [
      { id: "a", text: "IAM." },
      { id: "b", text: "An internet gateway." },
      { id: "c", text: "EBS Snapshot." },
      { id: "d", text: "AMI." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q83",
    prompt: "What are two advantages of using Cloud Computing over using traditional data centers? (Choose TWO)",
    options: [
      { id: "a", text: "Reserved Compute capacity." },
      { id: "b", text: "Eliminating Single Points of Failure (SPOFs)." },
      { id: "c", text: "Distributed infrastructure." },
      { id: "d", text: "Virtualized compute resources." },
      { id: "e", text: "Dedicated hosting." },
    ],
    correctOptionId: "b,c"
  },

  {
    id: "q84",
    prompt: "Which of the following aspects of security are managed by AWS? (Choose TWO)",
    options: [
      { id: "a", text: "Encryption of EBS volumes." },
      { id: "b", text: "VPC security." },
      { id: "c", text: "Access permissions." },
      { id: "d", text: "Hardware patching." },
      { id: "e", text: "Securing global physical infrastructure." },
    ],
    correctOptionId: "d,e"
  },

  {
    id: "q85",
    prompt: "Which statement best describes the operational excellence pillar of the AWS Well-Architected Framework?",
    options: [
      { id: "a", text: "The ability of a system to recover gracefully from failure." },
      { id: "b", text: "The efficient use of computing resources to meet requirements." },
      { id: "c", text: "The ability to monitor systems and improve supporting processes and procedures." },
      { id: "d", text: "The ability to manage datacenter operations more efficiently." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q86",
    prompt: "AWS has created a large number of Edge Locations as part of its Global Infrastructure. Which of the following is NOT a benefit of using Edge Locations?",
    options: [
      { id: "a", text: "Edge locations are used by CloudFront to cache the most recent responses." },
      { id: "b", text: "Edge locations are used by CloudFront to improve your end users' experience when uploading files." },
      { id: "c", text: "Edge locations are used by CloudFront to distribute traffic across multiple instances to reduce latency." },
      { id: "d", text: "Edge locations are used by CloudFront to distribute content to global users with low latency." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q87",
    prompt: "What are the change management tools that helps AWS customers audit and monitor all resource changes in their AWS environment? (Choose TWO)",
    options: [
      { id: "a", text: "AWS CloudTrail." },
      { id: "b", text: "Amazon Comprehend." },
      { id: "c", text: "AWS Transit Gateway." },
      { id: "d", text: "AWS X-Ray." },
      { id: "e", text: "AWS Config." },
    ],
    correctOptionId: "a,e"
  },

  {
    id: "q88",
    prompt: "Which of the following services allows you to run containerized applications on a cluster of EC2 instances?",
    options: [
      { id: "a", text: "Amazon ECS." },
      { id: "b", text: "AWS Data Pipeline." },
      { id: "c", text: "AWS Cloud9." },
      { id: "d", text: "AWS Personal Health Dashboard." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q89",
    prompt: "Which of the following services will help businesses ensure compliance in AWS?",
    options: [
      { id: "a", text: "CloudFront." },
      { id: "b", text: "CloudEndure Migration." },
      { id: "c", text: "CloudWatch." },
      { id: "d", text: "CloudTrail." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q90",
    prompt: "Which of the following procedures will help reduce your Amazon S3 costs?",
    options: [
      { id: "a", text: "Use the Import/Export feature to move old files automatically to Amazon Glacier." },
      { id: "b", text: "Use the right combination of storage classes based on different use cases." },
      { id: "c", text: "Pick the right Availability Zone for your S3 bucket." },
      { id: "d", text: "Move all the data stored in S3 standard to EBS." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q91",
    prompt: "What are the AWS services/features that can help you maintain a highly available and fault-tolerant architecture in AWS? (Choose TWO)",
    options: [
      { id: "a", text: "AWS Direct Connect." },
      { id: "b", text: "Amazon EC2 Auto Scaling." },
      { id: "c", text: "Elastic Load Balancer." },
      { id: "d", text: "CloudFormation." },
      { id: "e", text: "Network ACLs." },
    ],
    correctOptionId: "b,c"
  },

  {
    id: "q92",
    prompt: "Which of the following activities may help reduce your AWS monthly costs?",
    options: [
      { id: "a", text: "Enabling Amazon EC2 Auto Scaling for all of your workloads." },
      { id: "b", text: "Using the AWS Network Load Balancer (NLB) to load balance the incoming HTTP requests." },
      { id: "c", text: "Removing all of your Cost Allocation Tags." },
      { id: "d", text: "Deploying your AWS resources across multiple Availability Zones." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q93",
    prompt: "What is the AWS service/feature that takes advantage of Amazon CloudFront's globally distributed edge locations to transfer files to S3 with higher upload speeds?",
    options: [
      { id: "a", text: "S3 Transfer Acceleration." },
      { id: "b", text: "AWS WAF." },
      { id: "c", text: "AWS Snowmobile." },
      { id: "d", text: "AWS Snowball." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q94",
    prompt: "Which of the following AWS security features is associated with an EC2 instance and functions to filter incoming traffic requests?",
    options: [
      { id: "a", text: "AWS X-Ray." },
      { id: "b", text: "Network ACL." },
      { id: "c", text: "Security Groups." },
      { id: "d", text: "VPC Flow logs." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q95",
    prompt: "Which AWS services can be used to improve the performance of a global application and reduce latency for its users? (Choose TWO)",
    options: [
      { id: "a", text: "AWS KMS." },
      { id: "b", text: "AWS Global accelerator." },
      { id: "c", text: "AWS Direct Connect." },
      { id: "d", text: "AWS Glue." },
      { id: "e", text: "Amazon CloudFront." },
    ],
    correctOptionId: "b,e"
  },

  {
    id: "q96",
    prompt: "Using Amazon RDS falls under the shared responsibility model. Which of the following are customer responsibilities? (Choose TWO)",
    options: [
      { id: "a", text: "Building the relational database schema." },
      { id: "b", text: "Performing backups." },
      { id: "c", text: "Managing the database settings." },
      { id: "d", text: "Patching the database software." },
      { id: "e", text: "Installing the database software." },
    ],
    correctOptionId: "a,c"
  },

  {
    id: "q97",
    prompt: "A company has a large amount of structured data stored in their on-premises data center. They are planning to migrate all the data to AWS, what is the most appropriate AWS database option?",
    options: [
      { id: "a", text: "Amazon DynamoDB." },
      { id: "b", text: "Amazon SNS." },
      { id: "c", text: "Amazon RDS." },
      { id: "d", text: "Amazon ElastiCache." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q98",
    prompt: "A company has created a solution that helps AWS customers improve their architectures on AWS. Which AWS program may support this company?",
    options: [
      { id: "a", text: "APN Consulting Partners." },
      { id: "b", text: "AWS TAM." },
      { id: "c", text: "APN Technology Partners." },
      { id: "d", text: "AWS Professional Services." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q99",
    prompt: "What is the AWS serverless service that allows you to run your applications without any administrative burden?",
    options: [
      { id: "a", text: "Amazon LightSail." },
      { id: "b", text: "AWS Lambda." },
      { id: "c", text: "Amazon RDS instances." },
      { id: "d", text: "Amazon EC2 instances." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q100",
    prompt: "Jessica is managing an e-commerce web application in AWS. The application is hosted on six EC2 instances. One day, three of the instances crashed; but none of her customers were affected. What has Jessica done correctly in this scenario?",
    options: [
      { id: "a", text: "She has properly built an elastic system." },
      { id: "b", text: "She has properly built a fault tolerant system." },
      { id: "c", text: "She has properly built an encrypted system." },
      { id: "d", text: "She has properly built a scalable system." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q101",
    prompt: "Where can you store files in AWS? (Choose TWO)",
    options: [
      { id: "a", text: "Amazon EFS." },
      { id: "b", text: "Amazon SNS." },
      { id: "c", text: "Amazon EBS." },
      { id: "d", text: "Amazon ECS." },
      { id: "e", text: "Amazon EMR." },
    ],
    correctOptionId: "a,c"
  },

  {
    id: "q102",
    prompt: "Which AWS service can be used to store and reliably deliver messages across distributed systems?",
    options: [
      { id: "a", text: "Amazon Simple Queue Service." },
      { id: "b", text: "AWS Storage Gateway." },
      { id: "c", text: "Amazon Simple Email Service." },
      { id: "d", text: "Amazon Simple Storage Service." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q103",
    prompt: "Which of the following describes the payment model that AWS makes available for customers that can commit to using Amazon EC2 over a one or 3-year term to reduce their total computing costs?",
    options: [
      { id: "a", text: "Pay less as AWS grows." },
      { id: "b", text: "Pay as you go." },
      { id: "c", text: "Pay less by using more." },
      { id: "d", text: "Save when you reserve." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q104",
    prompt: "A company is migrating its on-premises database to Amazon RDS. What should the company do to ensure Amazon RDS costs are kept to a minimum?",
    options: [
      { id: "a", text: "Right-size before and after migration." },
      { id: "b", text: "Use a Multi-Region Active-Passive architecture." },
      { id: "c", text: "Combine On-demand Capacity Reservations with Saving Plans." },
      { id: "d", text: "Use a Multi-Region Active-Active architecture." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q105",
    prompt: "What is the primary storage service used by Amazon RDS database instances?",
    options: [
      { id: "a", text: "Amazon Glacier." },
      { id: "b", text: "Amazon EBS." },
      { id: "c", text: "Amazon EFS." },
      { id: "d", text: "Amazon S3." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q106",
    prompt: "A company is developing a new application using a microservices framework. The new application is having performance and latency issues. Which AWS Service should be used to troubleshoot these issues?",
    options: [
      { id: "a", text: "AWS CodePipeline." },
      { id: "b", text: "AWS X-Ray." },
      { id: "c", text: "Amazon Inspector." },
      { id: "d", text: "AWS CloudTrail." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q107",
    prompt: "Which of the following AWS services is designed with native Multi-AZ fault tolerance in mind? (Choose TWO)",
    options: [
      { id: "a", text: "Amazon Redshift." },
      { id: "b", text: "AWS Snowball." },
      { id: "c", text: "Amazon Simple Storage Service." },
      { id: "d", text: "Amazon EBS." },
      { id: "e", text: "Amazon DynamoDB." },
    ],
    correctOptionId: "c,e"
  },

  {
    id: "q108",
    prompt: "What are the Amazon RDS features that can be used to improve the availability of your database? (Choose TWO)",
    options: [
      { id: "a", text: "AWS Regions." },
      { id: "b", text: "Multi-AZ Deployment." },
      { id: "c", text: "Automatic patching." },
      { id: "d", text: "Read Replicas." },
      { id: "e", text: "Edge Locations." },
    ],
    correctOptionId: "b,d"
  },

  {
    id: "q109",
    prompt: "Sarah has deployed an application in the Northern California (us-west-1) region. After examining the application's traffic, she notices that about 30% of the traffic is coming from Asia. What can she do to reduce latency for the users in Asia?",
    options: [
      { id: "a", text: "Replicate the current resources across multiple Availability Zones within the same region." },
      { id: "b", text: "Migrate the application to a hosting provider in Asia." },
      { id: "c", text: "Recreate the website content." },
      { id: "d", text: "Create a CDN using CloudFront, so that content is cached at Edge Locations close to and in Asia." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q110",
    prompt: "An organization runs many systems and uses many AWS products. Which of the following services enables them to control how each developer interacts with these products?",
    options: [
      { id: "a", text: "AWS Identity and Access Management." },
      { id: "b", text: "Amazon RDS." },
      { id: "c", text: "Network Access Control Lists." },
      { id: "d", text: "Amazon EMR." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q111",
    prompt: "Using Amazon EC2 falls under which of the following cloud computing models?",
    options: [
      { id: "a", text: "Iaas & SaaS." },
      { id: "b", text: "IaaS." },
      { id: "c", text: "SaaS." },
      { id: "d", text: "PaaS." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q112",
    prompt: "Which of the below is a best-practice when building applications on AWS?",
    options: [
      { id: "a", text: "Strengthen physical security by applying the principle of least privilege." },
      { id: "b", text: "Ensure that the application runs on hardware from trusted vendors." },
      { id: "c", text: "Use IAM policies to maintain performance." },
      { id: "d", text: "Decouple the components of the application so that they run independently." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q113",
    prompt: "A company has deployed applications on Amazon EC2 instances. The company needs to assess application vulnerabilities and must identify infrastructure deployments that do not meet best practices. Which AWS service can the company use to meet these requirements?",
    options: [
      { id: "a", text: "AWS Trusted Advisor." },
      { id: "b", text: "Amazon Inspector." },
      { id: "c", text: "AWS Config." },
      { id: "d", text: "Amazon GuardDuty." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q114",
    prompt: "Amazon Glacier is an Amazon S3 storage class that is suitable for storing [...] & [...]. (Choose TWO)",
    options: [
      { id: "a", text: "active archives." },
      { id: "b", text: "dynamic websites' assets." },
      { id: "c", text: "long-term analytic data." },
      { id: "d", text: "active databases." },
      { id: "e", text: "cached data." },
    ],
    correctOptionId: "a,c"
  },

  {
    id: "q115",
    prompt: "What does Amazon Elastic Beanstalk provide?",
    options: [
      { id: "a", text: "A PaaS solution to automate application deployment." },
      { id: "b", text: "A compute engine for Amazon ECS." },
      { id: "c", text: "A scalable file storage solution for use with AWS and on-premises servers." },
      { id: "d", text: "A NoSQL database service." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q116",
    prompt: "What is the AWS service that performs automated network assessments of Amazon EC2 instances to check for vulnerabilities?",
    options: [
      { id: "a", text: "Amazon Kinesis." },
      { id: "b", text: "Security groups." },
      { id: "c", text: "Amazon Inspector." },
      { id: "d", text: "AWS Network Access Control Lists." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q117",
    prompt: "Under the Shared Responsibility Model, which of the following controls do customers fully inherit from AWS? (Choose TWO)",
    options: [
      { id: "a", text: "Patch management controls." },
      { id: "b", text: "Database controls." },
      { id: "c", text: "Awareness & Training." },
      { id: "d", text: "Environmental controls." },
      { id: "e", text: "Physical controls." },
    ],
    correctOptionId: "d,e"
  },

  {
    id: "q118",
    prompt: "A company needs to host a database in Amazon RDS for at least three years. Which of the following options would be the most cost-effective solution?",
    options: [
      { id: "a", text: "Reserved instances - No Upfront." },
      { id: "b", text: "Reserved instances - Partial Upfront." },
      { id: "c", text: "On-Demand instances." },
      { id: "d", text: "Spot Instances." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q119",
    prompt: "Your application has recently experienced significant global growth, and international users are complaining of high latency. What is the AWS characteristic that can help improve your international users' experience?",
    options: [
      { id: "a", text: "Elasticity." },
      { id: "b", text: "Global reach." },
      { id: "c", text: "Data durability." },
      { id: "d", text: "High availability." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q120",
    prompt: "Savings Plans are available for which of the following AWS compute services? (Choose TWO)",
    options: [
      { id: "a", text: "AWS Batch." },
      { id: "b", text: "AWS Outposts." },
      { id: "c", text: "Amazon Lightsail." },
      { id: "d", text: "Amazon EC2." },
      { id: "e", text: "AWS Lambda." },
    ],
    correctOptionId: "d,e"
  },

  {
    id: "q121",
    prompt: "A company has business critical workloads hosted on AWS and they are unwilling to accept any downtime. Which of the following is a recommended best practice to protect their workloads in the event of an unexpected natural disaster?",
    options: [
      { id: "a", text: "Replicate data across multiple Edge Locations worldwide and use Amazon CloudFront to perform automatic failover in the event of an outage." },
      { id: "b", text: "Deploy AWS resources across multiple Availability Zones within the same AWS Region." },
      { id: "c", text: "Create point-in-time backups in another subnet and recover this data when a disaster occurs." },
      { id: "d", text: "Deploy AWS resources to another AWS Region and implement an Active-Active disaster recovery strategy." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q122",
    prompt: "Which statement is correct with regards to AWS service limits? (Choose TWO)",
    options: [
      { id: "a", text: "You can contact AWS support to increase the service limits." },
      { id: "b", text: "Each IAM user has the same service limit." },
      { id: "c", text: "There are no service limits on AWS." },
      { id: "d", text: "You can use the AWS Trusted Advisor to monitor your service limits." },
      { id: "e", text: "The Amazon Simple Email Service is responsible for sending email notifications when usage approaches a service limit." },
    ],
    correctOptionId: "a,d"
  },

  {
    id: "q123",
    prompt: "What is the AWS tool that enables you to use scripts to manage all AWS services and resources?",
    options: [
      { id: "a", text: "AWS Console." },
      { id: "b", text: "AWS Service Catalog." },
      { id: "c", text: "AWS OpsWorks." },
      { id: "d", text: "AWS CLI." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q124",
    prompt: "What are the connectivity options that can be used to build hybrid cloud architectures? (Choose TWO)",
    options: [
      { id: "a", text: "AWS Artifact." },
      { id: "b", text: "AWS Cloud9." },
      { id: "c", text: "AWS Direct Connect." },
      { id: "d", text: "AWS CloudTrail." },
      { id: "e", text: "AWS VPN." },
    ],
    correctOptionId: "c,e"
  },

  {
    id: "q125",
    prompt: "A company has deployed a new web application on multiple Amazon EC2 instances. Which of the following should they use to ensure that the incoming HTTP traffic is distributed evenly across the instances?",
    options: [
      { id: "a", text: "AWS EC2 Auto Recovery." },
      { id: "b", text: "AWS Auto Scaling." },
      { id: "c", text: "AWS Network Load Balancer." },
      { id: "d", text: "AWS Application Load Balancer." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q126",
    prompt: "Which of the following AWS offerings is a MySQL-compatible relational database service that can scale capacity automatically based on demand?",
    options: [
      { id: "a", text: "Amazon Neptune." },
      { id: "b", text: "Amazon Aurora." },
      { id: "c", text: "Amazon RDS for SQL Server." },
      { id: "d", text: "Amazon RDS for PostgreSQL." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q127",
    prompt: "Which of the following can help protect your EC2 instances from DDoS attacks? (Choose TWO)",
    options: [
      { id: "a", text: "AWS CloudHSM." },
      { id: "b", text: "Security Groups." },
      { id: "c", text: "AWS Batch." },
      { id: "d", text: "AWS IAM." },
      { id: "e", text: "Network Access Control Lists (Network ACLs)." },
    ],
    correctOptionId: "b,e"
  },

  {
    id: "q128",
    prompt: "What is the AWS data warehouse service that supports a high level of query performance on large amounts of datasets?",
    options: [
      { id: "a", text: "Amazon Redshift." },
      { id: "b", text: "Amazon Kinesis." },
      { id: "c", text: "Amazon DynamoDB." },
      { id: "d", text: "Amazon RDS." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q129",
    prompt: "Which of the following should be considered when performing a TCO analysis to compare the costs of running an application on AWS instead of on-premises?",
    options: [
      { id: "a", text: "Application development." },
      { id: "b", text: "Market research." },
      { id: "c", text: "Business analysis." },
      { id: "d", text: "Physical hardware." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q130",
    prompt: "How are AWS customers billed for Linux-based Amazon EC2 usage?",
    options: [
      { id: "a", text: "EC2 instances will be billed on one second increments, with a minimum of one minute." },
      { id: "b", text: "EC2 instances will be billed on one hour increments, with a minimum of one day." },
      { id: "c", text: "EC2 instances will be billed on one minute increments, with a minimum of one hour." },
      { id: "d", text: "EC2 instances will be billed on one day increments, with a minimum of one month." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q131",
    prompt: "Which of the following will impact the price paid for an EC2 instance? (Choose TWO)",
    options: [
      { id: "a", text: "Instance type." },
      { id: "b", text: "The Availability Zone where the instance is provisioned." },
      { id: "c", text: "Load balancing." },
      { id: "d", text: "Number of buckets." },
      { id: "e", text: "Number of private IPs." },
    ],
    correctOptionId: "a,b"
  },

  {
    id: "q132",
    prompt: "A customer spent a lot of time configuring a newly deployed Amazon EC2 instance. After the workload increases, the customer decides to provision another EC2 instance with an identical configuration. How can the customer achieve this?",
    options: [
      { id: "a", text: "By creating an AWS Config template from the old instance and launching a new instance from it." },
      { id: "b", text: "By creating an EBS Snapshot of the old instance." },
      { id: "c", text: "By installing Aurora on EC2 and launching a new instance from it." },
      { id: "d", text: "By creating an AMI from the old instance and launching a new instance from it." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q133",
    prompt: "A company uses AWS Organizations to manage all of its AWS accounts. Which of the following allows the company to restrict what services and actions are allowed in each individual account?",
    options: [
      { id: "a", text: "IAM Principals." },
      { id: "b", text: "AWS Service Control Policies (SCPs)." },
      { id: "c", text: "IAM policies." },
      { id: "d", text: "AWS Fargate." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q134",
    prompt: "Which of the following statements describes the AWS Cloud's agility?",
    options: [
      { id: "a", text: "AWS allows you to host your applications in multiple regions around the world." },
      { id: "b", text: "AWS provides customizable hardware at the lowest possible cost." },
      { id: "c", text: "AWS allows you to provision resources in minutes." },
      { id: "d", text: "AWS allows you to pay upfront to reduce costs." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q135",
    prompt: "What are the benefits of using the Amazon Relational Database Service? (Choose TWO)",
    options: [
      { id: "a", text: "Lower administrative burden." },
      { id: "b", text: "Complete control over the underlying host." },
      { id: "c", text: "Resizable compute capacity." },
      { id: "d", text: "Scales automatically to larger or smaller instance types." },
      { id: "e", text: "Supports the document and key-value data structure." },
    ],
    correctOptionId: "a,c"
  },

  {
    id: "q136",
    prompt: "What is the connectivity option that uses Internet Protocol Security (IPSec) to establish encrypted connectivity between an on-premises network and the AWS Cloud?",
    options: [
      { id: "a", text: "Internet Gateway." },
      { id: "b", text: "AWS IQ." },
      { id: "c", text: "AWS Direct Connect." },
      { id: "d", text: "AWS Site-to-Site VPN." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q137",
    prompt: "What is the minimum level of AWS support that provides 24x7 access to technical support engineers via phone and chat?",
    options: [
      { id: "a", text: "Enterprise Support." },
      { id: "b", text: "Developer Support." },
      { id: "c", text: "Basic Support." },
      { id: "d", text: "Business Support." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q138",
    prompt: "Which of the following is used to control network traffic in AWS? (Choose TWO)",
    options: [
      { id: "a", text: "Network Access Control Lists (NACLs)." },
      { id: "b", text: "Key Pairs." },
      { id: "c", text: "Access Keys." },
      { id: "d", text: "IAM Policies." },
      { id: "e", text: "Security Groups." },
    ],
    correctOptionId: "a,e"
  },

  {
    id: "q139",
    prompt: "A company has developed a media transcoding application in AWS. The application is designed to recover quickly from hardware failures. Which one of the following types of instance would be the most cost-effective choice to use?",
    options: [
      { id: "a", text: "Reserved instances." },
      { id: "b", text: "Spot Instances." },
      { id: "c", text: "On-Demand instances." },
      { id: "d", text: "Dedicated instances." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q140",
    prompt: "Which AWS Service provides the current status of all AWS Services in all AWS Regions?",
    options: [
      { id: "a", text: "AWS Service Health Dashboard." },
      { id: "b", text: "AWS Management Console." },
      { id: "c", text: "Amazon CloudWatch." },
      { id: "d", text: "AWS Personal Health Dashboard." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q141",
    prompt: "Which AWS service or feature can be used to call AWS Services from different programming languages?",
    options: [
      { id: "a", text: "AWS Software Development Kit." },
      { id: "b", text: "AWS Command Line Interface." },
      { id: "c", text: "AWS CodeDeploy." },
      { id: "d", text: "AWS Management Console." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q142",
    prompt: "Which AWS Service can be used to register a new domain name?",
    options: [
      { id: "a", text: "Amazon Personalize." },
      { id: "b", text: "Amazon Route 53." },
      { id: "c", text: "AWS KMS." },
      { id: "d", text: "AWS Config." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q143",
    prompt: "App development companies move their business to AWS to reduce time-to-market and improve customer satisfaction, what are the AWS automation tools that help them deploy their applications faster? (Choose TWO)",
    options: [
      { id: "a", text: "AWS CloudFormation." },
      { id: "b", text: "AWS Migration Hub." },
      { id: "c", text: "AWS IAM." },
      { id: "d", text: "AWS Elastic Beanstalk." },
      { id: "e", text: "Amazon Macie." },
    ],
    correctOptionId: "a,d"
  },

  {
    id: "q144",
    prompt: "Which AWS service provides cost-optimization recommendations?",
    options: [
      { id: "a", text: "AWS Trusted Advisor." },
      { id: "b", text: "AWS Pricing Calculator." },
      { id: "c", text: "Amazon QuickSight." },
      { id: "d", text: "AWS X-Ray." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q145",
    prompt: "A company has hundreds of VPCs in multiple AWS Regions worldwide. What service does AWS offer to simplify the connection management among the VPCs?",
    options: [
      { id: "a", text: "VPC Peering." },
      { id: "b", text: "AWS Transit Gateway." },
      { id: "c", text: "Amazon Connect." },
      { id: "d", text: "Security Groups." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q146",
    prompt: "What is one benefit and one drawback of buying a reserved EC2 instance? (Select TWO)",
    options: [
      { id: "a", text: "Instances can be shut down by AWS at any time with no notification." },
      { id: "b", text: "Reserved instances require at least a one-year pricing commitment." },
      { id: "c", text: "There is no additional charge for using dedicated instances." },
      { id: "d", text: "Reserved instances provide a significant discount compared to on-demand instances." },
      { id: "e", text: "Reserved instances are best suited for periodic workloads." },
    ],
    correctOptionId: "b,d"
  },

  {
    id: "q147",
    prompt: "Why does every AWS Region contain multiple Availability Zones?",
    options: [
      { id: "a", text: "Multiple Availability Zones allows you to build resilient and highly available architectures." },
      { id: "b", text: "Multiple Availability Zones results in lower total cost compared to deploying in a single Availability Zone." },
      { id: "c", text: "Multiple Availability Zones allows for data replication and global reach." },
      { id: "d", text: "Multiple Availability Zones within a region increases the storage capacity available in that region." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q148",
    prompt: "What is the most cost-effective purchasing option for running a set of EC2 instances that must always be available for a period of two months?",
    options: [
      { id: "a", text: "On-Demand Instances." },
      { id: "b", text: "Spot Instances." },
      { id: "c", text: "Reserved Instances - All Upfront." },
      { id: "d", text: "Reserved Instances - No Upfront." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q149",
    prompt: "Which of the following is a benefit of running an application in multiple Availability Zones?",
    options: [
      { id: "a", text: "Allows you to exceed AWS service limits." },
      { id: "b", text: "Reduces application response time between servers and global users." },
      { id: "c", text: "Increases available compute capacity." },
      { id: "d", text: "Increases the availability of your application." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q150",
    prompt: "Data security is one of the top priorities of AWS. How does AWS deal with old storage devices that have reached the end of their useful life?",
    options: [
      { id: "a", text: "AWS sells the old devices to other hosting providers." },
      { id: "b", text: "AWS destroys the old devices in accordance with industry-standard practices." },
      { id: "c", text: "AWS sends the old devices for remanufacturing." },
      { id: "d", text: "AWS stores the old devices in a secure place." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q151",
    prompt: "A developer needs to set up an SSL security certificate for a client's eCommerce website in order to use the HTTPS protocol. Which of the following AWS services can be used to deploy the required SSL server certificates? (Choose TWO)",
    options: [
      { id: "a", text: "Amazon Route 53." },
      { id: "b", text: "AWS ACM." },
      { id: "c", text: "AWS Directory Service." },
      { id: "d", text: "AWS Identity & Access Management." },
      { id: "e", text: "AWS Data Pipeline." },
    ],
    correctOptionId: "b,d"
  },

  {
    id: "q152",
    prompt: "Which of the following AWS services scale automatically without your intervention? (Choose TWO)",
    options: [
      { id: "a", text: "Amazon EC2." },
      { id: "b", text: "Amazon S3." },
      { id: "c", text: "AWS Lambda." },
      { id: "d", text: "Amazon EMR." },
      { id: "e", text: "Amazon EBS." },
    ],
    correctOptionId: "b,c"
  },

  {
    id: "q153",
    prompt: "A company is planning to migrate an application from Amazon EC2 to AWS Lambda to use a serverless architecture. Which of the following will be the responsibility of AWS after migration? (Choose TWO)",
    options: [
      { id: "a", text: "Application management." },
      { id: "b", text: "Capacity management." },
      { id: "c", text: "Access control." },
      { id: "d", text: "Operating system maintenance." },
      { id: "e", text: "Data management." },
    ],
    correctOptionId: "b,d"
  },

  {
    id: "q154",
    prompt: "How do ELBs improve the reliability of your application?",
    options: [
      { id: "a", text: "By distributing traffic across multiple S3 buckets." },
      { id: "b", text: "By replicating data to multiple availability zones." },
      { id: "c", text: "By creating database Read Replicas." },
      { id: "d", text: "By ensuring that only healthy targets receive traffic." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q155",
    prompt: "A company needs to migrate their website from on-premises to AWS. Security is a major concern for them, so they need to host their website on hardware that is NOT shared with other AWS customers. Which of the following EC2 instance options meets this requirement?",
    options: [
      { id: "a", text: "On-demand instances." },
      { id: "b", text: "Spot instances." },
      { id: "c", text: "Dedicated instances." },
      { id: "d", text: "Reserved instances." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q156",
    prompt: "A customer is planning to move billions of images and videos to be stored on Amazon S3. The customer has approximately 60 Petabytes of data to move. Which of the following AWS Services is the best choice to transfer the data to AWS?",
    options: [
      { id: "a", text: "Snowball." },
      { id: "b", text: "S3 Transfer Acceleration." },
      { id: "c", text: "Snowmobile." },
      { id: "d", text: "Amazon VPC." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q157",
    prompt: "A company plans to migrate a large amount of archived data to AWS. The archived data must be maintained for a period of 5 years and must be retrievable within 5 hours of a request. What is the most cost-effective AWS storage service to use?",
    options: [
      { id: "a", text: "Amazon S3 Glacier." },
      { id: "b", text: "Amazon EFS." },
      { id: "c", text: "Amazon S3 Standard." },
      { id: "d", text: "Amazon EBS." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q158",
    prompt: "Which AWS Service is used to manage user permissions?",
    options: [
      { id: "a", text: "Security Groups." },
      { id: "b", text: "Amazon ECS." },
      { id: "c", text: "AWS IAM." },
      { id: "d", text: "AWS Support." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q159",
    prompt: "Which support plan includes AWS Support Concierge Service?",
    options: [
      { id: "a", text: "Premium Support." },
      { id: "b", text: "Business Support." },
      { id: "c", text: "Enterprise Support." },
      { id: "d", text: "Standard Support." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q160",
    prompt: "A company needs to track resource changes using the API call history. Which AWS service can help the company achieve this goal?",
    options: [
      { id: "a", text: "AWS Config." },
      { id: "b", text: "Amazon CloudWatch." },
      { id: "c", text: "AWS CloudTrail." },
      { id: "d", text: "AWS CloudFormation." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q161",
    prompt: "What are the benefits of using an AWS-managed service? (Choose TWO)",
    options: [
      { id: "a", text: "Provides complete control over the virtual infrastructure." },
      { id: "b", text: "Allows customers to deliver new solutions faster." },
      { id: "c", text: "Lowers operational complexity." },
      { id: "d", text: "Eliminates the need to encrypt data." },
      { id: "e", text: "Allows developers to control all patching related activities." },
    ],
    correctOptionId: "b,c"
  },

  {
    id: "q162",
    prompt: "Which of the following are use cases for Amazon S3? (Choose TWO)",
    options: [
      { id: "a", text: "Hosting static websites." },
      { id: "b", text: "Hosting websites that require sustained high CPU utilization." },
      { id: "c", text: "Cost-effective database and log storage." },
      { id: "d", text: "A media store for the CloudFront service." },
      { id: "e", text: "Processing data streams at any scale." },
    ],
    correctOptionId: "a,d"
  },

  {
    id: "q163",
    prompt: "What is the AWS' recommendation regarding access keys?",
    options: [
      { id: "a", text: "Delete all access keys and use passwords instead." },
      { id: "b", text: "Only share them with trusted people." },
      { id: "c", text: "Rotate them regularly." },
      { id: "d", text: "Save them within your application code." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q164",
    prompt: "What is the AWS IAM feature that provides an additional layer of security on top of user-name and password authentication?",
    options: [
      { id: "a", text: "Key Pair." },
      { id: "b", text: "Access Keys." },
      { id: "c", text: "SDK." },
      { id: "d", text: "MFA." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q165",
    prompt: "What is the benefit of using an API to access AWS Services?",
    options: [
      { id: "a", text: "It improves the performance of AWS resources." },
      { id: "b", text: "It reduces the time needed to provision AWS resources." },
      { id: "c", text: "It reduces the number of developers necessary." },
      { id: "d", text: "It allows for programmatic management of AWS resources." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q166",
    prompt: "A company is planning to migrate a database with high read/write activity to AWS. What is the best storage option to use?",
    options: [
      { id: "a", text: "AWS Storage Gateway." },
      { id: "b", text: "Amazon S3." },
      { id: "c", text: "Amazon EBS." },
      { id: "d", text: "Amazon Glacier." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q167",
    prompt: "How can AWS customers track and avoid over-spending on underutilized reserved instances?",
    options: [
      { id: "a", text: "Customers can add all AWS accounts to an AWS Organization, enable Consolidated Billing, and turn off Reserved Instance sharing." },
      { id: "b", text: "Customers can use Amazon Neptune to track and analyze their usage patterns, detect underutilized reserved instances, and then sell them on the Amazon EC2 Reserved Instance Marketplace." },
      { id: "c", text: "Customers can use the AWS Budgets service to track the reserved instances usage and set up alert notifications when their utilization drops below the threshold that they define." },
      { id: "d", text: "Customers can use Amazon CloudTrail to automatically check for unused reservations and get recommendations to reduce their bill." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q168",
    prompt: "What is the AWS service that provides five times the performance of a standard MySQL database?",
    options: [
      { id: "a", text: "Amazon Aurora." },
      { id: "b", text: "Amazon Redshift." },
      { id: "c", text: "Amazon DynamoDB." },
      { id: "d", text: "Amazon Neptune." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q169",
    prompt: "What does AWS Service Catalog provide?",
    options: [
      { id: "a", text: "It enables customers to quickly find descriptions and use cases for AWS services." },
      { id: "b", text: "It enables customers to explore the different catalogs of AWS services." },
      { id: "c", text: "It simplifies organizing and governing commonly deployed IT services." },
      { id: "d", text: "It allows developers to deploy infrastructure on AWS using familiar programming languages." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q170",
    prompt: "For managed services like Amazon DynamoDB, which of the below is AWS responsible for? (Choose TWO)",
    options: [
      { id: "a", text: "Protecting credentials." },
      { id: "b", text: "Logging access activity." },
      { id: "c", text: "Patching the database software." },
      { id: "d", text: "Operating system maintenance." },
      { id: "e", text: "Creating access policies." },
    ],
    correctOptionId: "c,d"
  },

  {
    id: "q171",
    prompt: "Which of the following AWS Services helps with planning application migration to the AWS Cloud?",
    options: [
      { id: "a", text: "AWS Snowball Migration Service." },
      { id: "b", text: "AWS Application Discovery Service." },
      { id: "c", text: "AWS DMS." },
      { id: "d", text: "AWS Migration Hub." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q172",
    prompt: "A company is trying to analyze the costs applied to their AWS account recently. Which of the following provides them the most granular data about their AWS costs and usage?",
    options: [
      { id: "a", text: "Amazon Machine Image." },
      { id: "b", text: "AWS Cost Explorer." },
      { id: "c", text: "AWS Cost & Usage Report." },
      { id: "d", text: "Amazon CloudWatch." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q173",
    prompt: "Which statement best describes the concept of an AWS region?",
    options: [
      { id: "a", text: "An AWS Region is a geographical location with a collection of Edge locations." },
      { id: "b", text: "An AWS Region is a virtual network dedicated only to a single AWS customer." },
      { id: "c", text: "An AWS Region is a geographical location with a collection of Availability Zones." },
      { id: "d", text: "An AWS Region represents the country where the AWS infrastructure exist." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q174",
    prompt: "A company has discovered that multiple S3 buckets were deleted, but it is unclear who deleted the buckets. Which of the following can the company use to determine the identity that deleted the buckets?",
    options: [
      { id: "a", text: "SNS logs." },
      { id: "b", text: "SQS logs." },
      { id: "c", text: "CloudWatch Logs." },
      { id: "d", text: "CloudTrail logs." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q175",
    prompt: "Which of the following are factors in determining the appropriate database technology to use for a specific workload? (Choose TWO)",
    options: [
      { id: "a", text: "Availability Zones." },
      { id: "b", text: "Data sovereignty." },
      { id: "c", text: "The number of reads and writes per second." },
      { id: "d", text: "The nature of the queries." },
      { id: "e", text: "Software bugs." },
    ],
    correctOptionId: "c,d"
  },

  {
    id: "q176",
    prompt: "What are the benefits of implementing a tagging strategy for AWS resources? (Choose TWO)",
    options: [
      { id: "a", text: "Quickly identify resources that belong to a specific project." },
      { id: "b", text: "Quickly identify software solutions on AWS." },
      { id: "c", text: "Track API calls in your AWS account." },
      { id: "d", text: "Quickly identify deleted resources and their metadata." },
      { id: "e", text: "Track AWS spending across multiple resources." },
    ],
    correctOptionId: "a,e"
  },

  {
    id: "q177",
    prompt: "What are AWS shared controls?",
    options: [
      { id: "a", text: "Controls that are solely the responsibility of the customer based on the application they are deploying within AWS services." },
      { id: "b", text: "Controls that a customer inherits from AWS." },
      { id: "c", text: "Controls that apply to both the infrastructure layer and customer layers." },
      { id: "d", text: "Controls that the customer and AWS collaborate together upon to secure the infrastructure." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q178",
    prompt: "Which design principles relate to performance efficiency in AWS? (Choose TWO)",
    options: [
      { id: "a", text: "Build multi-region architectures to better serve global customers." },
      { id: "b", text: "Apply security at all layers." },
      { id: "c", text: "Implement strong Identity and Access controls." },
      { id: "d", text: "Use serverless architectures." },
      { id: "e", text: "Enable audit logging." },
    ],
    correctOptionId: "a,d"
  },

  {
    id: "q179",
    prompt: "Which of the below are responsibilities of the customer when using Amazon EC2? (Choose TWO)",
    options: [
      { id: "a", text: "Protecting sensitive data." },
      { id: "b", text: "Patching of the underlying infrastructure." },
      { id: "c", text: "Setup and operation of managed databases." },
      { id: "d", text: "Maintaining consistent hardware components." },
      { id: "e", text: "Installing and configuring third-party software." },
    ],
    correctOptionId: "a,e"
  },

  {
    id: "q180",
    prompt: "Why would an organization decide to use AWS over an on-premises data center? (Choose TWO)",
    options: [
      { id: "a", text: "Free commercial software licenses." },
      { id: "b", text: "Free technical support." },
      { id: "c", text: "Elastic resources." },
      { id: "d", text: "On-site visits for auditing." },
      { id: "e", text: "Cost Savings." },
    ],
    correctOptionId: "c,e"
  },

  {
    id: "q181",
    prompt: "Which of the following AWS services can help you perform security analysis and regulatory compliance auditing? (Choose TWO)",
    options: [
      { id: "a", text: "Amazon Inspector." },
      { id: "b", text: "AWS Virtual Private Gateway." },
      { id: "c", text: "AWS Batch." },
      { id: "d", text: "Amazon ECS." },
      { id: "e", text: "AWS Config." },
    ],
    correctOptionId: "a,e"
  },

  {
    id: "q182",
    prompt: "Which of the following is NOT a characteristic of Amazon Elastic Compute Cloud (Amazon EC2)?",
    options: [
      { id: "a", text: "Amazon EC2 is considered a Serverless Web Service." },
      { id: "b", text: "Amazon EC2 eliminates the need to invest in hardware upfront." },
      { id: "c", text: "Amazon EC2 can launch as many or as few virtual servers as needed." },
      { id: "d", text: "Amazon EC2 offers scalable computing." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q183",
    prompt: "What is the AWS Compute service that executes code only when triggered by events?",
    options: [
      { id: "a", text: "AWS Lambda." },
      { id: "b", text: "Amazon CloudWatch." },
      { id: "c", text: "AWS Transit Gateway." },
      { id: "d", text: "Amazon EC2." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q184",
    prompt: "Both AWS and traditional IT distributors provide a wide range of virtual servers to meet their customers' requirements. What is the name of these virtual servers in AWS?",
    options: [
      { id: "a", text: "Amazon EBS Snapshots." },
      { id: "b", text: "Amazon VPC." },
      { id: "c", text: "AWS Managed Servers." },
      { id: "d", text: "Amazon EC2 Instances." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q185",
    prompt: "What is the framework created by AWS Professional Services that helps organizations design a road map to successful cloud adoption?",
    options: [
      { id: "a", text: "AWS Secrets Manager." },
      { id: "b", text: "AWS WAF." },
      { id: "c", text: "AWS CAF." },
      { id: "d", text: "Amazon EFS." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q186",
    prompt: "TYMO Cloud Corp is looking forward to migrating their entire on-premises data center to AWS. What tool can they use to perform a cost-benefit analysis of moving to the AWS Cloud?",
    options: [
      { id: "a", text: "AWS Cost Explorer." },
      { id: "b", text: "AWS TCO Calculator." },
      { id: "c", text: "AWS Budgets." },
      { id: "d", text: "AWS Pricing Calculator." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q187",
    prompt: "Which of the following activities supports the Operational Excellence pillar of the AWS Well-Architected Framework?",
    options: [
      { id: "a", text: "Using AWS Trusted Advisor to find underutilized resources." },
      { id: "b", text: "Using AWS CloudTrail to record user activities." },
      { id: "c", text: "Using AWS CloudFormation to manage infrastructure as code." },
      { id: "d", text: "Deploying an application in multiple Availability Zones." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q188",
    prompt: "Why do many startup companies prefer AWS over traditional on-premises solutions? (Choose TWO)",
    options: [
      { id: "a", text: "AWS allows them to pay later when their business succeed." },
      { id: "b", text: "AWS can build complete data centers faster than any other Cloud provider." },
      { id: "c", text: "Using AWS, they can reduce time-to-market by focusing on business activities rather than on building and managing data centers." },
      { id: "d", text: "AWS removes the need to invest in operational expenditure." },
      { id: "e", text: "Using AWS allows companies to replace large capital expenditure with low variable costs." },
    ],
    correctOptionId: "c,e"
  },

  {
    id: "q189",
    prompt: "What are the benefits of using DynamoDB? (Choose TWO)",
    options: [
      { id: "a", text: "Automatically scales to meet required throughput capacity." },
      { id: "b", text: "Provides resizable instances to match the current demand." },
      { id: "c", text: "Supports both relational and non-relational data models." },
      { id: "d", text: "Offers extremely low (single-digit millisecond) latency." },
      { id: "e", text: "Supports the most popular NoSQL database engines such as CouchDB and MongoDB." },
    ],
    correctOptionId: "a,d"
  },

  {
    id: "q190",
    prompt: "Which of the following can be used to protect data at rest on Amazon S3? (Choose TWO)",
    options: [
      { id: "a", text: "Versioning." },
      { id: "b", text: "Deduplication." },
      { id: "c", text: "Permissions." },
      { id: "d", text: "Decryption." },
      { id: "e", text: "Conversion." },
    ],
    correctOptionId: "a,c"
  },

  {
    id: "q191",
    prompt: "As part of the AWS Migration Acceleration Program (MAP), what does AWS provide to accelerate Enterprise adoption of AWS? (Choose TWO)",
    options: [
      { id: "a", text: "AWS Partners." },
      { id: "b", text: "AWS Artifact." },
      { id: "c", text: "AWS Professional Services." },
      { id: "d", text: "Amazon Athena." },
      { id: "e", text: "Amazon PinPoint." },
    ],
    correctOptionId: "a,c"
  },

  {
    id: "q192",
    prompt: "AWS recommends some practices to help organizations avoid unexpected charges on their bill. Which of the following is NOT one of these practices?",
    options: [
      { id: "a", text: "Deleting unused EBS volumes after terminating an EC2instance." },
      { id: "b", text: "Deleting unused AutoScaling launch configuration." },
      { id: "c", text: "Deleting unused Elastic Load Balancers." },
      { id: "d", text: "Releasing unused Elastic IPs after terminating an EC2instance." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q193",
    prompt: "What is the AWS tool that can help a company visualize their AWS spending in the last few months?",
    options: [
      { id: "a", text: "AWS Cost Explorer." },
      { id: "b", text: "AWS Pricing Calculator." },
      { id: "c", text: "AWS Budgets." },
      { id: "d", text: "AWS Consolidated Billing." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q194",
    prompt: "When running a workload in AWS, the customer is NOT responsible for: (Select TWO)",
    options: [
      { id: "a", text: "Running penetration tests." },
      { id: "b", text: "Reserving capacity." },
      { id: "c", text: "Data center operations." },
      { id: "d", text: "Auditing and regulatory compliance." },
      { id: "e", text: "Infrastructure security." },
    ],
    correctOptionId: "c,e"
  },

  {
    id: "q195",
    prompt: "Which AWS service can be used to send promotional text messages (SMS) to more than 200 countries worldwide?",
    options: [
      { id: "a", text: "Amazon Simple Email Service (Amazon SES)." },
      { id: "b", text: "Amazon Simple Storage Service (Amazon S3)." },
      { id: "c", text: "Amazon Simple Notification Service (Amazon SNS)." },
      { id: "d", text: "Amazon Simple Queue Service (Amazon SQS)." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q196",
    prompt: "Which of the following allows you to create new RDS instances? (Choose TWO)",
    options: [
      { id: "a", text: "AWS CodeDeploy." },
      { id: "b", text: "AWS Quick Starts." },
      { id: "c", text: "AWS CloudFormation." },
      { id: "d", text: "AWS DMS." },
      { id: "e", text: "AWS Management Console." },
    ],
    correctOptionId: "c,e"
  },

  {
    id: "q197",
    prompt: "One of the major advantages of using AWS is cost savings. What does AWS provide to reduce the cost of running Amazon EC2 instances?",
    options: [
      { id: "a", text: "Low monthly instance maintenance costs." },
      { id: "b", text: "Low-cost instance tagging." },
      { id: "c", text: "Per-second instance billing." },
      { id: "d", text: "Low instance start-up fees." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q198",
    prompt: "Which AWS Group assists customers in achieving their desired business outcomes?",
    options: [
      { id: "a", text: "AWS Security Team." },
      { id: "b", text: "AWS Professional Services." },
      { id: "c", text: "AWS Trusted Advisor." },
      { id: "d", text: "AWS Concierge Support Team." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q199",
    prompt: "Which AWS service or feature is used to manage the keys used to encrypt customer data?",
    options: [
      { id: "a", text: "AWS KMS." },
      { id: "b", text: "AWS Service Control Policies (SCPs)." },
      { id: "c", text: "Multi-Factor Authentication (MFA)." },
      { id: "d", text: "Amazon Macie." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q200",
    prompt: "Which AWS Service allows customers to download AWS SOC & PCI reports?",
    options: [
      { id: "a", text: "AWS Well-Architected Tool." },
      { id: "b", text: "AWS Artifact." },
      { id: "c", text: "AWS Glue." },
      { id: "d", text: "Amazon Chime." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q201",
    prompt: "A company is using EC2 Instances to run their e-commerce site on the AWS platform. If the site becomes unavailable, the company will lose a significant amount of money for each minute the site is unavailable. Which design principle should the company use to minimize the risk of an outage?",
    options: [
      { id: "a", text: "Least Privilege." },
      { id: "b", text: "Pilot Light." },
      { id: "c", text: "Fault Tolerance." },
      { id: "d", text: "Multi-threading." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q202",
    prompt: "You decide to buy a reserved instance for a term of one year. Which option provides the largest total discount?",
    options: [
      { id: "a", text: "All up-front reservation." },
      { id: "b", text: "All reserved instance payment options provide the same discount level." },
      { id: "c", text: "Partial up-front reservation." },
      { id: "d", text: "No up-front reservation." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q203",
    prompt: "What features does AWS offer to help protect your data in the Cloud? (Choose TWO)",
    options: [
      { id: "a", text: "Access control." },
      { id: "b", text: "Physical MFA devices." },
      { id: "c", text: "Data encryption." },
      { id: "d", text: "Unlimited storage." },
      { id: "e", text: "Load balancing." },
    ],
    correctOptionId: "a,c"
  },

  {
    id: "q204",
    prompt: "An AWS customer has used one Amazon Linux instance for 2 hours, 5 minutes and 9 seconds, and one CentOS instance for 4 hours, 23 minutes and 7 seconds. How much time will the customer be billed for?",
    options: [
      { id: "a", text: "3 hours for the Linux instance and 5 hours for the CentOS instance." },
      { id: "b", text: "2 hours, 5 minutes and 9 seconds for the Linux instance and 4 hours, 23 minutes and 7 seconds for the CentOS instance." },
      { id: "c", text: "2 hours, 5 minutes and 9 seconds for the Linux instance and 5 hours for the CentOS instance." },
      { id: "d", text: "3 hours for the Linux instance and 4 hours, 23 minutes and 7 seconds for the CentOS instance." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q205",
    prompt: "What is the AWS Support feature that allows customers to manage support cases programmatically?",
    options: [
      { id: "a", text: "AWS Trusted Advisor." },
      { id: "b", text: "AWS Operations Support." },
      { id: "c", text: "AWS Support API." },
      { id: "d", text: "AWS Personal Health Dashboard." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q206",
    prompt: "Which methods can be used by customers to interact with AWS Identity and Access Management (IAM)? (Choose TWO)",
    options: [
      { id: "a", text: "AWS CLI." },
      { id: "b", text: "AWS Security Groups." },
      { id: "c", text: "AWS SDKs." },
      { id: "d", text: "AWS Network Access Control Lists." },
      { id: "e", text: "AWS CodeCommit." },
    ],
    correctOptionId: "a,c"
  },

  {
    id: "q207",
    prompt: "Which of the following are types of AWS Identity and Access Management (IAM) identities? (Choose TWO)",
    options: [
      { id: "a", text: "AWS Resource Groups." },
      { id: "b", text: "IAM Policies." },
      { id: "c", text: "IAM Roles." },
      { id: "d", text: "IAM Users." },
      { id: "e", text: "AWS Organizations." },
    ],
    correctOptionId: "c,d"
  },

  {
    id: "q208",
    prompt: "Which of the following Amazon RDS features facilitates offloading of database read activity?",
    options: [
      { id: "a", text: "Database Snapshots." },
      { id: "b", text: "Multi-AZ Deployments." },
      { id: "c", text: "Automated Backups." },
      { id: "d", text: "Read Replicas." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q209",
    prompt: "How does AWS notify customers about security and privacy events pertaining to AWS services?",
    options: [
      { id: "a", text: "Using the AWS ACM service." },
      { id: "b", text: "Using Security Bulletins." },
      { id: "c", text: "Using the AWS Management Console." },
      { id: "d", text: "Using Compliance Resources." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q210",
    prompt: "Which IAM entity can best be used to grant temporary access to your AWS resources?",
    options: [
      { id: "a", text: "IAM Users." },
      { id: "b", text: "Key Pair." },
      { id: "c", text: "IAM Roles." },
      { id: "d", text: "IAM Groups." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q211",
    prompt: "A company has a web application that is hosted on a single EC2 instance and is approaching 100 percent CPU Utilization during peak loads. Rather than scaling the server vertically, the company has decided to deploy three Amazon EC2 instances in parallel and to distribute traffic across the three servers. What AWS Service should the company use to distribute the traffic evenly?",
    options: [
      { id: "a", text: "AWS Global Accelerator." },
      { id: "b", text: "AWS Application Load Balancer (ALB)." },
      { id: "c", text: "Amazon CloudFront." },
      { id: "d", text: "Transit VPC." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q212",
    prompt: "Which of the following approaches will help you eliminate human error and automate the process of creating and updating your AWS environment?",
    options: [
      { id: "a", text: "Use Software test automation tools." },
      { id: "b", text: "Use AWS CodeDeploy to build and automate your AWS environment." },
      { id: "c", text: "Use code to provision and operate your AWS infrastructure." },
      { id: "d", text: "Migrate all of your applications to a dedicated host." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q213",
    prompt: "A company is seeking to better secure its AWS account from unauthorized access. Which of the below options can the customer use to achieve this goal?",
    options: [
      { id: "a", text: "Restrict any API call made through SDKs or CLI." },
      { id: "b", text: "Create one IAM account for each department in the company (Development, QA, Production), and share it across all staff in that department." },
      { id: "c", text: "Require Multi-Factor Authentication (MFA) for all IAM User access." },
      { id: "d", text: "Set up two login passwords." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q214",
    prompt: "Which AWS Service offers volume discounts based on usage?",
    options: [
      { id: "a", text: "Amazon VPC." },
      { id: "b", text: "Amazon S3." },
      { id: "c", text: "Amazon Lightsail." },
      { id: "d", text: "AWS Cost Explorer." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q215",
    prompt: "Which of the following factors should be considered when determining the region in which AWS Resources will be deployed? (Choose TWO)",
    options: [
      { id: "a", text: "The AWS Region's security level." },
      { id: "b", text: "Data sovereignty." },
      { id: "c", text: "Cost." },
      { id: "d", text: "The planned number of VPCs." },
      { id: "e", text: "Geographic proximity to the company's location." },
    ],
    correctOptionId: "b,c"
  },

  {
    id: "q216",
    prompt: "You are running a financial services web application on AWS. The application uses a MySQL database to store the data. Which of the following AWS services would improve the performance of your application by allowing you to retrieve information from fast in-memory caches?",
    options: [
      { id: "a", text: "Amazon EFS." },
      { id: "b", text: "Amazon Neptune." },
      { id: "c", text: "Amazon ElastiCache." },
      { id: "d", text: "DAX." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q217",
    prompt: "What are the advantages of using Auto Scaling Groups for EC2 instances?",
    options: [
      { id: "a", text: "Auto Scaling Groups caches the most recent responses at global edge locations to reduce latency and improve performance." },
      { id: "b", text: "Auto Scaling Groups scales EC2 instances in multiple Availability Zones to increase application availability and fault tolerance." },
      { id: "c", text: "Auto Scaling Groups scales EC2 instances across multiple regions to reduce latency for global users." },
      { id: "d", text: "Auto Scaling Groups distributes application traffic across multiple Availability Zones to enhance performance." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q218",
    prompt: "The TCO gap between AWS infrastructure and traditional infrastructure has widened over the recent years. Which of the following could be the reason for that?",
    options: [
      { id: "a", text: "AWS helps customers invest more in capital expenditures." },
      { id: "b", text: "AWS automates all infrastructure operations, so customers save more on human resources costs." },
      { id: "c", text: "AWS continues to lower the cost of cloud computing for its customers." },
      { id: "d", text: "AWS secures AWS resources at no additional charge." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q219",
    prompt: "Which of the following are examples of the customer's responsibility to implement 'security IN the cloud'? (Choose TWO)",
    options: [
      { id: "a", text: "Building a schema for an application." },
      { id: "b", text: "Replacing physical hardware." },
      { id: "c", text: "Creating a new hypervisor." },
      { id: "d", text: "Patch management of the underlying infrastructure." },
      { id: "e", text: "File system encryption." },
    ],
    correctOptionId: "d,e"
  },

  {
    id: "q220",
    prompt: "Which of the following is a type of MFA device that customers can use to protect their AWS resources?",
    options: [
      { id: "a", text: "AWS CloudHSM." },
      { id: "b", text: "U2F Security Key." },
      { id: "c", text: "AWS Access Keys." },
      { id: "d", text: "AWS Key Pair." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q221",
    prompt: "A company is seeking to deploy an existing .NET application onto AWS as quickly as possible. Which AWS Service should the customer use to achieve this goal?",
    options: [
      { id: "a", text: "Amazon SNS." },
      { id: "b", text: "AWS Elastic Beanstalk." },
      { id: "c", text: "AWS Systems Manager." },
      { id: "d", text: "AWS Trusted Advisor." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q222",
    prompt: "Which of the following is NOT a factor when estimating the costs of Amazon EC2? (Choose TWO)",
    options: [
      { id: "a", text: "The amount of time the instances will be running." },
      { id: "b", text: "Number of security groups." },
      { id: "c", text: "Allocated Elastic IP Addresses." },
      { id: "d", text: "Number of Hosted Zones." },
      { id: "e", text: "Number of instances." },
    ],
    correctOptionId: "b,d"
  },

  {
    id: "q223",
    prompt: "Which AWS Service helps enterprises extend their on-premises storage to AWS in a cost-effective manner?",
    options: [
      { id: "a", text: "AWS Data Pipeline." },
      { id: "b", text: "AWS Storage Gateway." },
      { id: "c", text: "Amazon Aurora." },
      { id: "d", text: "Amazon EFS." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q224",
    prompt: "A company is building an online cloud storage platform. They need a storage service that can scale capacity automatically, while minimizing cost. Which AWS storage service should the company use to meet these requirements?",
    options: [
      { id: "a", text: "Amazon Simple Storage Service." },
      { id: "b", text: "Amazon Elastic Block Store." },
      { id: "c", text: "Amazon Elastic Container Service." },
      { id: "d", text: "AWS Storage Gateway." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q225",
    prompt: "You have just hired a skilled sys-admin to join your team. As usual, you have created a new IAM user for him to interact with AWS services. On his first day, you ask him to create snapshots of all existing Amazon EBS volumes and save them in a new Amazon S3 bucket. However, the new member reports back that he is unable to create neither EBS snapshots nor S3 buckets. What might prevent him from doing this simple task?",
    options: [
      { id: "a", text: "EBS and S3 are accessible only to the root account owner." },
      { id: "b", text: "The systems administrator must contact AWS Support first to activate his new IAM account." },
      { id: "c", text: "There is not enough space in S3 to store the snapshots." },
      { id: "d", text: "There is a non-explicit deny to all new users." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q226",
    prompt: "An external auditor is requesting a log of all accesses to the AWS resources in the company's account. Which of the following services will provide the auditor with the requested information?",
    options: [
      { id: "a", text: "AWS CloudTrail." },
      { id: "b", text: "Amazon CloudFront." },
      { id: "c", text: "AWS CloudFormation." },
      { id: "d", text: "Amazon CloudWatch." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q227",
    prompt: "Which of the below options is true of Amazon Cloud Directory?",
    options: [
      { id: "a", text: "Amazon Cloud Directory allows the organization of hierarchies of data across multiple dimensions." },
      { id: "b", text: "Amazon Cloud Directory enables the analysis of video and data streams in real time." },
      { id: "c", text: "Amazon Cloud Directory allows users to access AWS with their existing Active Directory credentials." },
      { id: "d", text: "Amazon Cloud Directory allows for registration and management of domain names." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q228",
    prompt: "A user has opened a 'Production System Down' support case to get help from AWS Support after a production system disruption. What is the expected response time for this type of support case?",
    options: [
      { id: "a", text: "12 hours." },
      { id: "b", text: "15 minutes." },
      { id: "c", text: "24 hours." },
      { id: "d", text: "One hour." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q229",
    prompt: "Which of the below options is a best practice for making your application on AWS highly available?",
    options: [
      { id: "a", text: "Deploy the application to at least two Availability Zones." },
      { id: "b", text: "Use Elastic Load Balancing (ELB) across multiple AWS Regions." },
      { id: "c", text: "Deploy the application code on at least two servers in the same Availability Zone." },
      { id: "d", text: "Rewrite the application code to handle all incoming requests." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q230",
    prompt: "Which of the following should be taken into account when performing a TCO analysis regarding the costs of running an application on AWS VS on-premises? (Choose TWO)",
    options: [
      { id: "a", text: "Labor and IT costs." },
      { id: "b", text: "Cooling and power consumption." },
      { id: "c", text: "Amazon EBS computing power." },
      { id: "d", text: "Software architecture." },
      { id: "e", text: "Software compatibility." },
    ],
    correctOptionId: "a,b"
  },

  {
    id: "q231",
    prompt: "Your company requires a response time of less than 15 minutes from support interactions about their business-critical systems that are hosted on AWS if those systems go down. Which AWS Support Plan should this company use?",
    options: [
      { id: "a", text: "AWS Basic Support." },
      { id: "b", text: "AWS Developer Support." },
      { id: "c", text: "AWS Business Support." },
      { id: "d", text: "AWS Enterprise Support." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q232",
    prompt: "Which of the following AWS offerings are serverless services? (Choose TWO)",
    options: [
      { id: "a", text: "Amazon EC2." },
      { id: "b", text: "AWS Lambda." },
      { id: "c", text: "Amazon DynamoDB." },
      { id: "d", text: "Amazon EMR." },
      { id: "e", text: "Amazon RDS." },
    ],
    correctOptionId: "b,c"
  },

  {
    id: "q233",
    prompt: "Which AWS service enables you to quickly purchase and deploy SSL/TLS certificates?",
    options: [
      { id: "a", text: "Amazon GuardDuty." },
      { id: "b", text: "AWS ACM." },
      { id: "c", text: "Amazon Detective." },
      { id: "d", text: "AWS WAF." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q234",
    prompt: "Which AWS Service provides integration with Chef to automate the configuration of EC2 instances?",
    options: [
      { id: "a", text: "AWS Config." },
      { id: "b", text: "AWS OpsWorks." },
      { id: "c", text: "AutoScaling." },
      { id: "d", text: "AWS CloudFormation." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q235",
    prompt: "A customer is seeking to store objects in their AWS environment and to make those objects downloadable over the internet. Which AWS Service can be used to accomplish this?",
    options: [
      { id: "a", text: "Amazon EBS." },
      { id: "b", text: "Amazon EFS." },
      { id: "c", text: "Amazon S3." },
      { id: "d", text: "Amazon Instance Store." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q236",
    prompt: "Which of the following services can be used to monitor the HTTP and HTTPS requests that are forwarded to Amazon CloudFront?",
    options: [
      { id: "a", text: "AWS WAF." },
      { id: "b", text: "Amazon CloudWatch." },
      { id: "c", text: "AWS Cloud9." },
      { id: "d", text: "AWS CloudTrail." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q237",
    prompt: "A company is migrating a web application to AWS. The application's compute capacity is continually utilized throughout the year. Which of the below options offers the company the most cost-effective solution?",
    options: [
      { id: "a", text: "On-demand Instances." },
      { id: "b", text: "Dedicated Hosts." },
      { id: "c", text: "Spot Instances." },
      { id: "d", text: "Reserved Instances." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q238",
    prompt: "A company wants to grant a new employee long-term access to manage Amazon DynamoDB databases. Which of the following is a recommended best-practice when granting these permissions?",
    options: [
      { id: "a", text: "Create an IAM role and attach a policy with Amazon DynamoDB access permissions." },
      { id: "b", text: "Create an IAM role and attach a policy with Administrator access permissions." },
      { id: "c", text: "Create an IAM user and attach a policy with Amazon DynamoDB access permissions." },
      { id: "d", text: "Create an IAM user and attach a policy with Administrator access permissions." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q239",
    prompt: "When granting permissions to applications running on Amazon EC2 instances, which of the following is considered best practice?",
    options: [
      { id: "a", text: "Generate new IAM access keys every time you delegate permissions." },
      { id: "b", text: "Store the required AWS credentials directly within the application code." },
      { id: "c", text: "Use temporary security credentials (IAM roles) instead of long-term access keys." },
      { id: "d", text: "Do nothing; Applications that run on Amazon EC2 instances do not need permission to interact with other AWS services or resources." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q240",
    prompt: "Which of the following will help AWS customers save on costs when migrating their workloads to AWS?",
    options: [
      { id: "a", text: "Use servers instead of managed services." },
      { id: "b", text: "Use existing third-party software licenses on AWS." },
      { id: "c", text: "Migrate production workloads to AWS edge locations instead of AWS Regions." },
      { id: "d", text: "Use AWS Outposts to run all workloads in a cost-optimized environment." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q241",
    prompt: "An organization has a legacy application designed using monolithic-based architecture. Which AWS Service can be used to decouple the components of the application?",
    options: [
      { id: "a", text: "Amazon SQS." },
      { id: "b", text: "Virtual Private Gateway." },
      { id: "c", text: "AWS Artifact." },
      { id: "d", text: "Amazon CloudFront." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q242",
    prompt: "Which of the following can be used to enable the Virtual Multi-Factor Authentication? (Choose TWO)",
    options: [
      { id: "a", text: "Amazon Connect." },
      { id: "b", text: "AWS CLI." },
      { id: "c", text: "AWS Identity and Access Management (IAM)." },
      { id: "d", text: "Amazon SNS." },
      { id: "e", text: "Amazon Virtual Private Cloud." },
    ],
    correctOptionId: "b,c"
  },

  {
    id: "q243",
    prompt: "According to best practices, which of the below options is best suited for processing a large number of binary files?",
    options: [
      { id: "a", text: "Vertically scaling EC2 instances." },
      { id: "b", text: "Running RDS instances in parallel." },
      { id: "c", text: "Vertically scaling RDS instances." },
      { id: "d", text: "Running EC2 instances in parallel." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q244",
    prompt: "A company is planning to use Amazon S3 and Amazon CloudFront to distribute its video courses globally. What tool can the company use to estimate the costs of these services?",
    options: [
      { id: "a", text: "AWS Cost Explorer." },
      { id: "b", text: "AWS Pricing Calculator." },
      { id: "c", text: "AWS Budgets." },
      { id: "d", text: "AWS Cost & Usage Report." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q245",
    prompt: "What should you do if you see resources, which you don't remember creating, in the AWS Management Console? (Choose TWO)",
    options: [
      { id: "a", text: "Stop all running services and open an investigation." },
      { id: "b", text: "Give your root account password to AWS Support so that they can assistin troubleshooting and securing the account." },
      { id: "c", text: "Check the AWS CloudTrail logs and delete all IAM users that have access to your resources." },
      { id: "d", text: "Open an investigation and delete any potentially compromised IAM users." },
      { id: "e", text: "Change your AWS root account password and the passwords of any IAM users." },
    ],
    correctOptionId: "d,e"
  },

  {
    id: "q246",
    prompt: "A key practice when designing solutions on AWS is to minimize dependencies between components so that the failure of a single component does not impact other components. What is this practice called?",
    options: [
      { id: "a", text: "Elastic coupling." },
      { id: "b", text: "Loosely coupling." },
      { id: "c", text: "Scalable coupling." },
      { id: "d", text: "Tightly coupling." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q247",
    prompt: "Which AWS Service offers an NFS file system that can be mounted concurrently from multiple EC2 instances?",
    options: [
      { id: "a", text: "Amazon Elastic File System." },
      { id: "b", text: "Amazon Simple Storage Service." },
      { id: "c", text: "Amazon Elastic Block Store." },
      { id: "d", text: "AWS Storage Gateway." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q248",
    prompt: "Availability Zones within a Region are connected over low-latency links. Which of the following is a benefit of these links?",
    options: [
      { id: "a", text: "Create private connection to your data center." },
      { id: "b", text: "Achieve global high availability." },
      { id: "c", text: "Automate the process of provisioning new compute resources." },
      { id: "d", text: "Make synchronous replication of your data possible." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q249",
    prompt: "Which of the following are true regarding the languages that are supported on AWS Lambda? (Choose TWO)",
    options: [
      { id: "a", text: "Lambda only supports Python and Node.js, but third party plugins are available to convert code in other languages to these formats." },
      { id: "b", text: "Lambda natively supports a number of programming languages such as Node.js, Python, and Java." },
      { id: "c", text: "Lambda is AWS' proprietary programming language for microservices." },
      { id: "d", text: "Lambda doesn't support programming languages; it is a serverless compute service." },
      { id: "e", text: "Lambda can support any programming language using an API." },
    ],
    correctOptionId: "b,e"
  },

  {
    id: "q250",
    prompt: "What are the capabilities of AWS X-Ray? (Choose TWO)",
    options: [
      { id: "a", text: "Automatically decouples application components." },
      { id: "b", text: "Facilitates tracking of user requests to identify application issues." },
      { id: "c", text: "Helps improve application performance." },
      { id: "d", text: "Deploys applications to Amazon EC2 instances." },
      { id: "e", text: "Deploys applications to on-premises servers." },
    ],
    correctOptionId: "b,c"
  },

  {
    id: "q251",
    prompt: "Which of the following is true regarding the AWS availability zones and edge locations?",
    options: [
      { id: "a", text: "Edge locations are located in separate Availability Zones worldwide to serve global customers." },
      { id: "b", text: "An availability zone exists within an edge location to distribute content globally with low latency." },
      { id: "c", text: "An Availability Zone is a geographic location where AWS provides multiple, physically separated and isolated edge locations." },
      { id: "d", text: "An AWS Availability Zone is an isolated location within an AWS Region, however edge locations are located in multiple cities worldwide." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q252",
    prompt: "Which features are included in the AWS Business Support Plan? (Choose TWO)",
    options: [
      { id: "a", text: "24x7 access to customer service." },
      { id: "b", text: "Access to Cloud Support Engineers via email only during business hours." },
      { id: "c", text: "Access to the Infrastructure Event Management (IEM) feature for additional fee." },
      { id: "d", text: "24x7 access to the TAM feature." },
      { id: "e", text: "Partial access to the core Trusted Advisor checks." },
    ],
    correctOptionId: "a,c"
  },

  {
    id: "q253",
    prompt: "A company is developing a mobile application and wants to allow users to use their Amazon, Apple, Facebook, or Google identities to authenticate to the application. Which AWS Service should the company use for this purpose?",
    options: [
      { id: "a", text: "Amazon GuardDuty." },
      { id: "b", text: "Amazon Personalize." },
      { id: "c", text: "Amazon Cognito." },
      { id: "d", text: "AWS IAM." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q254",
    prompt: "Which AWS Service allows customers to create a template that programmatically defines policies and configurations of all AWS resources as code and so that the same template can be reused among multiple projects?",
    options: [
      { id: "a", text: "AWS CloudFormation." },
      { id: "b", text: "AWS Config." },
      { id: "c", text: "AWS CloudTrail." },
      { id: "d", text: "AWS Auto Scaling." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q255",
    prompt: "Which of the following are advantages of using AWS as a cloud computing provider? (Choose TWO)",
    options: [
      { id: "a", text: "Eliminates the need to monitor servers and applications." },
      { id: "b", text: "Manages all the compliance and auditing tasks." },
      { id: "c", text: "Provides custom hardware to meet any specification." },
      { id: "d", text: "Eliminates the need to guess on infrastructure capacity needs." },
      { id: "e", text: "Enables customers to trade their capital expenses for operational expenses." },
    ],
    correctOptionId: "d,e"
  },

  {
    id: "q256",
    prompt: "A customer is planning to migrate their Microsoft SQL Server databases to AWS. Which AWS Services can the customer use to run their Microsoft SQL Server database on AWS? (Choose TWO)",
    options: [
      { id: "a", text: "AWS Fargate." },
      { id: "b", text: "Amazon Elastic Compute Cloud." },
      { id: "c", text: "Amazon RDS." },
      { id: "d", text: "AWS Database Migration service (DMS)." },
      { id: "e", text: "AWS Lambda." },
    ],
    correctOptionId: "b,c"
  },

  {
    id: "q257",
    prompt: "Which AWS Service can perform health checks on Amazon EC2 instances?",
    options: [
      { id: "a", text: "AWS CloudFormation." },
      { id: "b", text: "Amazon Route 53." },
      { id: "c", text: "Amazon Chime." },
      { id: "d", text: "Amazon Aurora." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q258",
    prompt: "A company is developing an application that will leverage facial recognition to automate photo tagging. Which AWS Service should the company use for facial recognition?",
    options: [
      { id: "a", text: "Amazon Comprehend." },
      { id: "b", text: "AWS IAM." },
      { id: "c", text: "Amazon Polly." },
      { id: "d", text: "Amazon Rekognition." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q259",
    prompt: "Which of the following are examples of AWS-managed databases? (Choose TWO)",
    options: [
      { id: "a", text: "Amazon Neptune." },
      { id: "b", text: "Amazon CloudSearch." },
      { id: "c", text: "Microsoft SQL Server on Amazon EC2." },
      { id: "d", text: "MySQL on Amazon EC2." },
      { id: "e", text: "Amazon RDS for MySQL." },
    ],
    correctOptionId: "a,e"
  },

  {
    id: "q260",
    prompt: "A company's AWS workflow requires that it periodically perform large-scale image and video processing jobs. The customer is seeking to minimize cost and has stated that the amount of time it takes to process these jobs is not critical, but that cost minimization is the most important factor in designing the solution. Which EC2 instance class is best suited for this processing?",
    options: [
      { id: "a", text: "EC2 On-Demand Instances." },
      { id: "b", text: "EC2 Reserved Instances - No Upfront." },
      { id: "c", text: "EC2 Spot Instances." },
      { id: "d", text: "EC2 Reserved Instances - All Upfront." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q261",
    prompt: "There is a requirement to grant a DevOps team full administrative access to all resources in an AWS account. Who can grant them these permissions?",
    options: [
      { id: "a", text: "AWS account owner." },
      { id: "b", text: "AWS technical account manager." },
      { id: "c", text: "AWS security team." },
      { id: "d", text: "AWS cloud support engineers." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q262",
    prompt: "You need to migrate a large number of on-premises workloads to AWS. Which AWS service is the most appropriate?",
    options: [
      { id: "a", text: "AWS File Transfer Acceleration." },
      { id: "b", text: "AWS Server Migration Service." },
      { id: "c", text: "AWS Database Migration Service." },
      { id: "d", text: "AWS Application Discovery Service." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q263",
    prompt: "What are some key benefits of using AWS CloudFormation? (Choose TWO)",
    options: [
      { id: "a", text: "It helps AWS customers deploy their applications without worrying about the underlying infrastructure." },
      { id: "b", text: "It applies advanced IAM security features automatically." },
      { id: "c", text: "It automates the provisioning and updating of your infrastructure in a safe and controlled manner." },
      { id: "d", text: "It allows you to model your entire infrastructure in just a text file." },
      { id: "e", text: "It compiles and builds application code in a timely manner." },
    ],
    correctOptionId: "c,d"
  },

  {
    id: "q264",
    prompt: "Which of the following is a cloud computing deployment model that connects infrastructure and applications between cloud-based resources and existing resources not located in the cloud?",
    options: [
      { id: "a", text: "On-premises." },
      { id: "b", text: "Mixed." },
      { id: "c", text: "Hybrid." },
      { id: "d", text: "Cloud." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q265",
    prompt: "A company is hosting business critical workloads in an AWS Region. To protect against data loss and ensure business continuity, a mirror image of the current AWS environment should be created in another AWS Region. Company policy requires that the standby environment must be available in minutes in case of an outage in the primary AWS Region. Which AWS service can be used to meet these requirements?",
    options: [
      { id: "a", text: "CloudEndure Disaster Recovery." },
      { id: "b", text: "CloudEndure Migration." },
      { id: "c", text: "AWS Backup." },
      { id: "d", text: "AWS Glue." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q266",
    prompt: "Which of the following S3 storage classes is most appropriate to host static assets for a popular e-commerce website with stable access patterns?",
    options: [
      { id: "a", text: "S3 Standard-IA." },
      { id: "b", text: "S3 Intelligent-Tiering." },
      { id: "c", text: "S3 Glacier Deep Archive." },
      { id: "d", text: "S3 Standard." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q267",
    prompt: "You want to create a backup of your data in another geographical location. Where should you create this backup?",
    options: [
      { id: "a", text: "In another Edge location." },
      { id: "b", text: "In another Region." },
      { id: "c", text: "In another VPC." },
      { id: "d", text: "In another Availability Zone." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q268",
    prompt: "Which statement is true in relation to the security of Amazon EC2?",
    options: [
      { id: "a", text: "You should use instance store volumes to store login data." },
      { id: "b", text: "You should regularly patch the operating system and applications on your EC2 instances." },
      { id: "c", text: "You should deploy critical components of your application in the Availability Zone that you trust." },
      { id: "d", text: "You can track all API calls using Amazon Athena." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q269",
    prompt: "What does AWS Cost Explorer provide to help manage your AWS spend?",
    options: [
      { id: "a", text: "Cost comparisons between AWS Cloud environments and on-premises environments." },
      { id: "b", text: "Accurate estimates of AWS service costs based on your expected usage." },
      { id: "c", text: "Consolidated billing." },
      { id: "d", text: "Highly accurate cost forecasts for up to 12 months ahead." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q270",
    prompt: "Which of the following is a feature of Amazon RDS that performs automatic failover when the primary database fails to respond?",
    options: [
      { id: "a", text: "RDS Single-AZ." },
      { id: "b", text: "RDS Write Replica." },
      { id: "c", text: "RDS Snapshots." },
      { id: "d", text: "RDS Multi-AZ." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q271",
    prompt: "You are using several on-demand EC2 Instances to run your development environment. What is the best way to reduce your charges when these instances are not in use?",
    options: [
      { id: "a", text: "Deleting all EBS volumes attached to the instances." },
      { id: "b", text: "You cannot minimize charges for on-demand instances." },
      { id: "c", text: "Terminating the instances." },
      { id: "d", text: "Stopping the instances." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q272",
    prompt: "Which of the following strategies helps protect your AWS root account?",
    options: [
      { id: "a", text: "Delete root user access keys if you do not need them." },
      { id: "b", text: "Apply MFA for the root account and use it for all of your work." },
      { id: "c", text: "Access the root account only from your personal Mobile Phone." },
      { id: "d", text: "Only share your AWS account password or access keys with trusted persons." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q273",
    prompt: "Which of the following are factors should be considered for Amazon EBS pricing? (Choose TWO)",
    options: [
      { id: "a", text: "The size of volumes provisioned per month." },
      { id: "b", text: "The compute capacity you consume." },
      { id: "c", text: "The amount of data you have stored in snapshots." },
      { id: "d", text: "The compute time you consume." },
      { id: "e", text: "The number of Snowball storage devices you request." },
    ],
    correctOptionId: "a,c"
  },

  {
    id: "q274",
    prompt: "You have just set up your AWS environment and have created six IAM user accounts for the DevOps team. What is the AWS recommendation when granting permissions to these IAM accounts?",
    options: [
      { id: "a", text: "Attach a separate IAM policy for each individual account." },
      { id: "b", text: "Apply the Principle of Least Privilege." },
      { id: "c", text: "For security purposes, you should not grant any permission to the DevOps team." },
      { id: "d", text: "Create six different IAM passwords." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q275",
    prompt: "Which of the following has the greatest impact on cost? (Choose TWO)",
    options: [
      { id: "a", text: "Compute charges." },
      { id: "b", text: "The number of services used." },
      { id: "c", text: "Data Transfer In charges." },
      { id: "d", text: "Data Transfer Out charges." },
      { id: "e", text: "The number of IAM roles provisioned." },
    ],
    correctOptionId: "a,d"
  },

  {
    id: "q276",
    prompt: "Who from the following will get the largest discount?",
    options: [
      { id: "a", text: "A user who chooses to buy On-demand, Convertible, Partial upfront instances." },
      { id: "b", text: "A user who chooses to buy Reserved, Convertible, All upfront instances." },
      { id: "c", text: "A user who chooses to buy Reserved, Standard, No upfront instances." },
      { id: "d", text: "A user who chooses to buy Reserved, Standard, All upfront instances." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q277",
    prompt: "Which of the following is an available option when purchasing Amazon EC2 instances?",
    options: [
      { id: "a", text: "The ability to bid to get the lowest possible prices." },
      { id: "b", text: "The ability to register EC2 instances to get volume discounts on every hour the instances are running." },
      { id: "c", text: "The ability to buy Dedicated Instances for up to 90% discount." },
      { id: "d", text: "The ability to pay upfront to get lower hourly costs." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q278",
    prompt: "What does the term 'Economies of scale' mean?",
    options: [
      { id: "a", text: "It means that you save more when you consume more." },
      { id: "b", text: "It means as more time passes using AWS, you pay more for its services." },
      { id: "c", text: "It means that AWS will continuously lower costs as it grows." },
      { id: "d", text: "It means that you have the ability to pay as you go." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q279",
    prompt: "A company experiences fluctuations in traffic patterns to their e-commerce website when running flash sales. What service can help the company dynamically match the required compute capacity to handle spikes in traffic during flash sales?",
    options: [
      { id: "a", text: "AWS Auto Scaling." },
      { id: "b", text: "Amazon Elastic Compute Cloud." },
      { id: "c", text: "Amazon Elastic File System." },
      { id: "d", text: "Amazon ElastiCache." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q280",
    prompt: "Which of the below options is true of Amazon VPC?",
    options: [
      { id: "a", text: "Amazon VPC allows customers to control user interactions with all other AWS resources." },
      { id: "b", text: "AWS Customers have complete control over their Amazon VPC virtual networking environment." },
      { id: "c", text: "AWS is responsible for all the management and configuration details of Amazon VPC." },
      { id: "d", text: "Amazon VPC helps customers to review their AWS architecture and adopt best practices." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q281",
    prompt: "Which tool can a non-AWS customer use to compare the cost of on-premises environment resources to AWS?",
    options: [
      { id: "a", text: "AWS Cost Explorer." },
      { id: "b", text: "AWS Pricing Calculator." },
      { id: "c", text: "AWS Budgets." },
      { id: "d", text: "AWS TCO Calculator." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q282",
    prompt: "Which of the following services provide real-time auditing for compliance and vulnerabilities? (Choose TWO)",
    options: [
      { id: "a", text: "AWS Config." },
      { id: "b", text: "Amazon Redshift." },
      { id: "c", text: "Amazon MQ." },
      { id: "d", text: "AWS Trusted Advisor." },
      { id: "e", text: "Amazon Cognito." },
    ],
    correctOptionId: "a,d"
  },

  {
    id: "q283",
    prompt: "Which of the following AWS services uses Puppet to automate how EC2 instances are configured?",
    options: [
      { id: "a", text: "AWS OpsWorks." },
      { id: "b", text: "AWS CloudFormation." },
      { id: "c", text: "AWS Quick Starts." },
      { id: "d", text: "AWS CloudTrail." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q284",
    prompt: "An organization uses a hybrid cloud architecture to run their business. Which AWS service enables them to deploy their applications to any AWS or on-premises server?",
    options: [
      { id: "a", text: "Amazon Kinesis." },
      { id: "b", text: "Amazon QuickSight." },
      { id: "c", text: "AWS CodeDeploy." },
      { id: "d", text: "Amazon Athena." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q285",
    prompt: "Select the services that are server-based: (Choose TWO)",
    options: [
      { id: "a", text: "Amazon RDS." },
      { id: "b", text: "Amazon DynamoDB." },
      { id: "c", text: "AWS Lambda." },
      { id: "d", text: "AWS Fargate." },
      { id: "e", text: "Amazon EMR." },
    ],
    correctOptionId: "a,e"
  },

  {
    id: "q286",
    prompt: "What best describes penetration testing?",
    options: [
      { id: "a", text: "Testing your application's response time from different locations." },
      { id: "b", text: "Testing your network to find security vulnerabilities that an attacker could exploit." },
      { id: "c", text: "Testing your instances to check for the unhealthy ones." },
      { id: "d", text: "Testing your software for bugs and errors." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q287",
    prompt: "Which of the following are use cases for Amazon EMR? (Choose TWO)",
    options: [
      { id: "a", text: "Enables you to backup extremely large amounts of data at very low costs." },
      { id: "b", text: "Enables you to move Exabyte-scale data from on-premises datacenters into AWS." },
      { id: "c", text: "Enables you to analyze and process extremely large amounts of data in a timely manner." },
      { id: "d", text: "Enables you to easily run and scale Apache Spark, Hadoop,and other Big Data frameworks." },
      { id: "e", text: "Enables you to easily run and manage Docker containers." },
    ],
    correctOptionId: "c,d"
  },

  {
    id: "q288",
    prompt: "Your CTO has asked you to contact AWS support using the chat feature to ask for guidance related to EBS. However, when you open the AWS support center you can't see a way to contact support via Chat. What should you do?",
    options: [
      { id: "a", text: "There is no chat feature in AWS support." },
      { id: "b", text: "The chat feature is available for all plans for an additional fee, but you have to request it first." },
      { id: "c", text: "At a minimum, upgrade to Business support plan." },
      { id: "d", text: "Upgrade from the Basic Support plan to Developer Support." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q289",
    prompt: "A developer wants to quickly deploy and manage his application in the AWS Cloud, but he doesn't have any experience with cloud computing. Which of the following AWS services would help the developer achieve his goal?",
    options: [
      { id: "a", text: "AWS Fargate." },
      { id: "b", text: "AWS Batch." },
      { id: "c", text: "Amazon Personalize." },
      { id: "d", text: "AWS Elastic Beanstalk." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q290",
    prompt: "Which statement best describes the AWS Pay-As-You-Go pricing model?",
    options: [
      { id: "a", text: "With AWS, you replace low upfront expenses with large variable payments." },
      { id: "b", text: "With AWS, you replace low upfront expenses with large fixed payments." },
      { id: "c", text: "With AWS, you replace large upfront expenses with low fixed payments." },
      { id: "d", text: "With AWS, you replace large capital expenses with low variable payments." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q291",
    prompt: "For Amazon RDS databases, what does AWS perform on your behalf? (Choose TWO)",
    options: [
      { id: "a", text: "Database setup." },
      { id: "b", text: "Network traffic protection." },
      { id: "c", text: "Management of the operating system." },
      { id: "d", text: "Access management." },
      { id: "e", text: "Management of firewall rules." },
    ],
    correctOptionId: "a,c"
  },

  {
    id: "q292",
    prompt: "Which of the following strategies help analyze costs in AWS?",
    options: [
      { id: "a", text: "Using tags to group resources." },
      { id: "b", text: "Using AWS CloudFormation to automate the deployment of resources." },
      { id: "c", text: "Deploying resources of the same type in different regions." },
      { id: "d", text: "Configuring Amazon Inspector to automatically analyze costs and email reports." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q293",
    prompt: "A media company has an application that requires the transfer of large data sets to and from AWS every day. This data is business critical and should be transferred over a consistent connection. Which AWS service should the company use?",
    options: [
      { id: "a", text: "AWS Direct Connect." },
      { id: "b", text: "Amazon Comprehend." },
      { id: "c", text: "AWS Snowmobile." },
      { id: "d", text: "AWS VPN." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q294",
    prompt: "What is the main benefit of the AWS Storage Gateway service?",
    options: [
      { id: "a", text: "It automates the process of building, maintaining, and running ETL jobs." },
      { id: "b", text: "It provides physical devices to migrate data from on premises to AWS." },
      { id: "c", text: "It allows integration of on-premises IT environments with Cloud Storage." },
      { id: "d", text: "It provides hardware-based key storage for regulatory compliance." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q295",
    prompt: "To protect against data loss, you need to backup your database regularly. What is the most cost-effective storage option that provides immediate retrieval of your backups?",
    options: [
      { id: "a", text: "Amazon S3 Glacier Deep Archive." },
      { id: "b", text: "Amazon S3 Standard-Infrequent Access." },
      { id: "c", text: "Amazon S3 Glacier." },
      { id: "d", text: "Instance Store." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q296",
    prompt: "Which service can you use to route traffic to the endpoint that provides the best application performance for your users worldwide?",
    options: [
      { id: "a", text: "AWS Global Accelerator." },
      { id: "b", text: "AWS Data Pipeline." },
      { id: "c", text: "AWS DAX Accelerator." },
      { id: "d", text: "AWS Transfer Acceleration." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q297",
    prompt: "Why are Serverless Architectures more economical than Server-based Architectures?",
    options: [
      { id: "a", text: "Serverless Architectures use new powerful computing devices." },
      { id: "b", text: "With the Server-based Architectures, compute resources continue to run all the time but with serverless architecture, compute resources are only used when code is being executed." },
      { id: "c", text: "When you reserve serverless capacity, you will get large discounts compared to server reservation." },
      { id: "d", text: "With Serverless Architectures you have the ability to scale automatically up or down as demand changes." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q298",
    prompt: "Which of the below options are use cases of the Amazon Route 53 service? (Choose TWO)",
    options: [
      { id: "a", text: "Point-to-point connectivity between an on-premises data center and AWS." },
      { id: "b", text: "Detects configuration changes in the AWS environment." },
      { id: "c", text: "DNS configuration and management." },
      { id: "d", text: "Manages global application traffic through a variety of routing types." },
      { id: "e", text: "Provides infrastructure security optimization recommendations." },
    ],
    correctOptionId: "c,d"
  },

  {
    id: "q299",
    prompt: "You want to transfer 200 Terabytes of data from on-premises locations to the AWS Cloud, which of the following can do the job in a cost-effective way?",
    options: [
      { id: "a", text: "AWS Snowmobile." },
      { id: "b", text: "AWS Import/Export." },
      { id: "c", text: "AWS DMS." },
      { id: "d", text: "AWS Snowball." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q300",
    prompt: "You have a real-time IoT application that requires sub-millisecond latency. Which of the following services should you use?",
    options: [
      { id: "a", text: "Amazon Redshift." },
      { id: "b", text: "Amazon Athena." },
      { id: "c", text: "AWS Cloud9." },
      { id: "d", text: "Amazon ElastiCache for Redis." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q301",
    prompt: "Which of the following can help secure your sensitive data in Amazon S3? (Choose TWO)",
    options: [
      { id: "a", text: "Delete the encryption keys once your data is encrypted." },
      { id: "b", text: "With AWS you do not need to worry about encryption." },
      { id: "c", text: "Enable S3 Encryption." },
      { id: "d", text: "Encrypt the data prior to uploading it." },
      { id: "e", text: "Delete all IAM users that have access to S3." },
    ],
    correctOptionId: "c,d"
  },

  {
    id: "q302",
    prompt: "Which AWS service helps developers compile and test their code?",
    options: [
      { id: "a", text: "AWS CodeDeploy." },
      { id: "b", text: "AWS CodeCommit." },
      { id: "c", text: "CloudEndure." },
      { id: "d", text: "AWS CodeBuild." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q303",
    prompt: "Which of the following will affect how much you are charged for storing objects in S3? (Choose TWO)",
    options: [
      { id: "a", text: "Using default encryption for any number of S3 buckets." },
      { id: "b", text: "The number of EBS volumes attached to your instances." },
      { id: "c", text: "The storage class used for the objects stored." },
      { id: "d", text: "Creating and deleting S3 buckets." },
      { id: "e", text: "The total size in gigabytes of all objects stored." },
    ],
    correctOptionId: "c,e"
  },

  {
    id: "q304",
    prompt: "What does the Amazon CloudFront service provide? (Choose TWO)",
    options: [
      { id: "a", text: "Tracks user activity and APl usage." },
      { id: "b", text: "Increases application availability by caching at the edge." },
      { id: "c", text: "Enables faster disaster recovery." },
      { id: "d", text: "Stores archived data at very low costs." },
      { id: "e", text: "Delivers content to end users with low latency." },
    ],
    correctOptionId: "b,e"
  },

  {
    id: "q305",
    prompt: "You are facing a lot of problems with your current contact center. Which service provides a cloud-based contact center that can deliver a better service for your customers?",
    options: [
      { id: "a", text: "Amazon Lightsail." },
      { id: "b", text: "Amazon Connect." },
      { id: "c", text: "AWS Direct Connect." },
      { id: "d", text: "AWS Elastic Beanstalk." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q306",
    prompt: "You have migrated your application to AWS recently. How can you view the AWS costs applied to your account?",
    options: [
      { id: "a", text: "Using the AWS Cost & Usage Report." },
      { id: "b", text: "Using the AWS Total Cost of Ownership (TCO) dashboard." },
      { id: "c", text: "Using the AWS CloudWatch logs dashboard." },
      { id: "d", text: "Using the Amazon VPC dashboard." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q307",
    prompt: "Which of the following are valid Amazon EC2 Reserved Instance types? (Choose TWO)",
    options: [
      { id: "a", text: "Convertible." },
      { id: "b", text: "Expedited." },
      { id: "c", text: "Bulk." },
      { id: "d", text: "Spot." },
      { id: "e", text: "Standard." },
    ],
    correctOptionId: "a,e"
  },

  {
    id: "q308",
    prompt: "Which of the following services gives you access to all AWS auditor-issued reports and certifications?",
    options: [
      { id: "a", text: "AWS Artifact." },
      { id: "b", text: "AWS Config." },
      { id: "c", text: "Amazon CloudWatch." },
      { id: "d", text: "AWS CloudTrail." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q309",
    prompt: "You manage a blog on AWS that has different environments: development, testing, and production. What can you use to create a custom console for each environment to view and manage your resources easily?",
    options: [
      { id: "a", text: "AWS Resource Groups." },
      { id: "b", text: "AWS Placement Groups." },
      { id: "c", text: "AWS Management Console." },
      { id: "d", text: "AWS Tag Editor." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q310",
    prompt: "Which AWS service collects metrics from running EC2 instances?",
    options: [
      { id: "a", text: "Amazon Inspector." },
      { id: "b", text: "Amazon CloudWatch." },
      { id: "c", text: "AWS CloudFormation." },
      { id: "d", text: "AWS CloudTrail." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q311",
    prompt: "Your web application currently faces performance issues and suffers from long load times. Which of the following AWS services could help fix these issues and improve performance?",
    options: [
      { id: "a", text: "Amazon Detective." },
      { id: "b", text: "AWS X-Ray." },
      { id: "c", text: "AWS Security Hub." },
      { id: "d", text: "AWS Shield." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q312",
    prompt: "Which of the following compute resources are serverless? (Choose TWO)",
    options: [
      { id: "a", text: "Amazon EC2." },
      { id: "b", text: "AWS Fargate." },
      { id: "c", text: "AWS Lambda." },
      { id: "d", text: "Amazon ECS." },
      { id: "e", text: "Amazon EMR." },
    ],
    correctOptionId: "b,c"
  },

  {
    id: "q313",
    prompt: "For compliance and regulatory purposes, a government agency requires that their applications must run on hardware that is dedicated to them only. How can you meet this requirement?",
    options: [
      { id: "a", text: "Use EC2 Dedicated Hosts." },
      { id: "b", text: "Use EC2 Reserved Instances." },
      { id: "c", text: "Use EC2 Spot Instances." },
      { id: "d", text: "Use EC2 On-demand Instances." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q314",
    prompt: "Which AWS Cost Governance best practice recommends refining workloads regularly to make the most of existing AWS resources and reduce costs?",
    options: [
      { id: "a", text: "Tagging Enforcement." },
      { id: "b", text: "Architecture Optimization." },
      { id: "c", text: "Budgeting Processes." },
      { id: "d", text: "Resource Controls." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q315",
    prompt: "An organization needs to build a financial application that requires support for ACID transactions. Which AWS database service is most appropriate in this case?",
    options: [
      { id: "a", text: "RedShift." },
      { id: "b", text: "RDS." },
      { id: "c", text: "CloudHSM." },
      { id: "d", text: "DMS." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q316",
    prompt: "What can you use to assign permissions directly to an IAM user?",
    options: [
      { id: "a", text: "IAM Identity." },
      { id: "b", text: "IAM Group." },
      { id: "c", text: "IAM Role." },
      { id: "d", text: "IAM Policy." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q317",
    prompt: "The owner of an E-Commerce application notices that the compute capacity requirements vary heavily from time to time. What makes AWS more economical than traditional data centers for this type of application?",
    options: [
      { id: "a", text: "AWS allows customers to launch powerful EC2 instances to handle spikes in load." },
      { id: "b", text: "AWS allows customers to pay upfront to get bigger discounts." },
      { id: "c", text: "AWS allows customers to launch and terminate EC2 instances based on demand." },
      { id: "d", text: "AWS allows customers to choose cheaper types of EC2 instances that best fit their needs." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q318",
    prompt: "Amazon RDS supports multiple database engines to choose from. Which of the following is not one of them?",
    options: [
      { id: "a", text: "PostgreSQL." },
      { id: "b", text: "Oracle." },
      { id: "c", text: "Microsoft SQL Server." },
      { id: "d", text: "Teradata." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q319",
    prompt: "Which of the following AWS services would help you migrate on-premise databases to AWS?",
    options: [
      { id: "a", text: "AWS DMS." },
      { id: "b", text: "Amazon S3 Transfer Acceleration." },
      { id: "c", text: "AWS Directory Service." },
      { id: "d", text: "AWS Transit Gateway." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q320",
    prompt: "For new AWS customers, what is the EASIEST way to launch a simple WordPress website on AWS?",
    options: [
      { id: "a", text: "Run WordPress on an Amazon Lightsail instance." },
      { id: "b", text: "Install WordPress on an Amazon EC2 instance." },
      { id: "c", text: "Use the Amazon S3 Web hosting feature." },
      { id: "d", text: "Host the website directly on AWS Cloud Development Kit (AWS CDK)." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q321",
    prompt: "Which of the following would you use to manage your encryption keys in the AWS Cloud? (Choose TWO)",
    options: [
      { id: "a", text: "AWS KMS." },
      { id: "b", text: "AWS Certificate Manager." },
      { id: "c", text: "AWS CodeDeploy." },
      { id: "d", text: "AWS CodeCommit." },
      { id: "e", text: "CloudHSM." },
    ],
    correctOptionId: "a,e"
  },

  {
    id: "q322",
    prompt: "Which of the following services allows you to install and run custom relational database software?",
    options: [
      { id: "a", text: "Amazon EC2." },
      { id: "b", text: "Amazon Cognito." },
      { id: "c", text: "Amazon RDS." },
      { id: "d", text: "Amazon Inspector." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q323",
    prompt: "Your application requirements for CPU and RAM are changing in an unpredictable way. Which service can be used to dynamically adjust these resources based on load?",
    options: [
      { id: "a", text: "Auto Scaling." },
      { id: "b", text: "ELB." },
      { id: "c", text: "Amazon Route53." },
      { id: "d", text: "Amazon Elastic Container Service." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q324",
    prompt: "A company has infrastructure hosted in an on-premises data center. They currently have an operations team that takes care of identity management. If they decide to migrate to the AWS cloud, which of the following services would help them perform the same role in AWS?",
    options: [
      { id: "a", text: "AWS IAM." },
      { id: "b", text: "AWS Outposts." },
      { id: "c", text: "AWS Federation." },
      { id: "d", text: "Amazon Redshift." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q325",
    prompt: "What are some key design principles for designing public cloud systems? (Choose TWO)",
    options: [
      { id: "a", text: "Reserved capacity instead of on demand." },
      { id: "b", text: "Loose coupling over tight coupling." },
      { id: "c", text: "Servers instead of managed services." },
      { id: "d", text: "Disposable resources instead of fixed servers." },
      { id: "e", text: "Multi-AZ deployments instead of multi-region deployments." },
    ],
    correctOptionId: "b,d"
  },

  {
    id: "q326",
    prompt: "Where can AWS account owners get a list of all users in their account, including the status of their AWS credentials?",
    options: [
      { id: "a", text: "AWS CloudTrail Trails." },
      { id: "b", text: "IAM Credential Report." },
      { id: "c", text: "AWS Artifact reports." },
      { id: "d", text: "AWS Cost and Usage Report." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q327",
    prompt: "Which of the following services enables you to easily generate and use your own encryption keys in the AWS Cloud?",
    options: [
      { id: "a", text: "AWS Shield." },
      { id: "b", text: "AWS Certificate Manager." },
      { id: "c", text: "AWS CloudHSM." },
      { id: "d", text: "AWS WAF." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q328",
    prompt: "You have developed a web application targeting a global audience. Which of the following will help you achieve the highest redundancy and fault tolerance from an infrastructure perspective?",
    options: [
      { id: "a", text: "There is no need to architect for these capabilities in AWS, as AWS is redundant by default." },
      { id: "b", text: "Deploy the application in a single Availability Zone." },
      { id: "c", text: "Deploy the application in multiple Availability Zones in a single AWS region." },
      { id: "d", text: "Deploy the application in multiple Availability Zones in multiple AWS regions." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q329",
    prompt: "For some services, AWS automatically replicates data across multiple Availability Zones to provide fault tolerance in the event of a server failure or Availability Zone outage. Select TWO services that automatically replicate data across Availability Zones.",
    options: [
      { id: "a", text: "Instance Store." },
      { id: "b", text: "S3." },
      { id: "c", text: "DynamoDB." },
      { id: "d", text: "Amazon Route 53." },
      { id: "e", text: "AWS VPN." },
    ],
    correctOptionId: "b,c"
  },

  {
    id: "q330",
    prompt: "Which of the following factors affect Amazon CloudFront cost? (Choose TWO)",
    options: [
      { id: "a", text: "Number of Requests." },
      { id: "b", text: "Traffic Distribution." },
      { id: "c", text: "Number of Volumes." },
      { id: "d", text: "Instance type." },
      { id: "e", text: "Storage Class." },
    ],
    correctOptionId: "a,b"
  },

  {
    id: "q331",
    prompt: "Which of the following resources can an AWS customer use to learn more about prohibited uses of the services offered by AWS?",
    options: [
      { id: "a", text: "AWS Service Control Policies (SCPs)." },
      { id: "b", text: "AWS Artifact." },
      { id: "c", text: "AWS Budgets." },
      { id: "d", text: "AWS Acceptable Use Policy." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q332",
    prompt: "Which of the following security resources are available to any user for free? (Choose TWO)",
    options: [
      { id: "a", text: "AWS Bulletins." },
      { id: "b", text: "AWS TAM." },
      { id: "c", text: "AWS Support APl." },
      { id: "d", text: "AWS Security Blog." },
      { id: "e", text: "AWS Classroom Training." },
    ],
    correctOptionId: "a,d"
  },

  {
    id: "q333",
    prompt: "How can you protect data stored on Amazon S3 from accidental deletion?",
    options: [
      { id: "a", text: "By enabling S3 Versioning." },
      { id: "b", text: "By configuring S3 Bucket Policies." },
      { id: "c", text: "By configuring S3 Lifecycle Policies." },
      { id: "d", text: "By disabling S3 Cross-Region Replication (CRR)." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q334",
    prompt: "Which of the following is the responsibility of AWS according to the AWS Shared Responsibility Model?",
    options: [
      { id: "a", text: "Securing regions and edge locations." },
      { id: "b", text: "Performing auditing tasks." },
      { id: "c", text: "Monitoring AWS resources usage." },
      { id: "d", text: "Securing access to AWS resources." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q335",
    prompt: "Which of the following AWS support plans provides access to only the seven core AWS Trusted Advisor checks?",
    options: [
      { id: "a", text: "Business & Enterprise Support." },
      { id: "b", text: "Basic & Developer Support." },
      { id: "c", text: "Developer & Enterprise Support." },
      { id: "d", text: "Developer & Business Support." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q336",
    prompt: "Which of the following is NOT a benefit of using AWS Lambda?",
    options: [
      { id: "a", text: "AWS Lambda runs code without provisioning or managing servers." },
      { id: "b", text: "AWS Lambda provides resizable compute capacity in the cloud." },
      { id: "c", text: "There is no charge when your AWS Lambda code is not running." },
      { id: "d", text: "AWS Lambda can be called directly from any mobile app." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q337",
    prompt: "How does AWS help customers achieve compliance in the cloud?",
    options: [
      { id: "a", text: "It's not possible to meet regulatory compliance requirements in the Cloud." },
      { id: "b", text: "AWS applies the most common Cloud security standards, and is responsible for complying with customers' applicable laws and regulations." },
      { id: "c", text: "AWS has many common assurance certifications such as ISO 9001 and HIPAA." },
      { id: "d", text: "Many AWS services are assessed regularly to comply with local laws and regulations." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q338",
    prompt: "Who is responsible for scaling a DynamoDB database in the AWS Shared Responsibility Model?",
    options: [
      { id: "a", text: "Your security team." },
      { id: "b", text: "Your development team." },
      { id: "c", text: "AWS." },
      { id: "d", text: "Your internal DevOps team." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q339",
    prompt: "You are working as a web app developer. You are currently facing issues in media playback for mobile devices because your media format is not supported. Which of the following AWS services can help you convert your media into another format?",
    options: [
      { id: "a", text: "Amazon Elastic Transcoder." },
      { id: "b", text: "Amazon Pinpoint." },
      { id: "c", text: "AmazonS3." },
      { id: "d", text: "Amazon Rekognition." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q340",
    prompt: "What are the benefits of the AWS Organizations service? (Choose TWO)",
    options: [
      { id: "a", text: "Control access to AWS services." },
      { id: "b", text: "Help organizations design and maintain an accelerated path to successful cloud adoption." },
      { id: "c", text: "Manage your organization's payment methods." },
      { id: "d", text: "Help organization achieve their desired business outcomes with AWS." },
      { id: "e", text: "Consolidate billing across multiple AWS accounts." },
    ],
    correctOptionId: "a,e"
  },

  {
    id: "q341",
    prompt: "Which AWS service allows you to build a data warehouse in the cloud?",
    options: [
      { id: "a", text: "AWS Shield." },
      { id: "b", text: "Amazon Redshift." },
      { id: "c", text: "Amazon RDS." },
      { id: "d", text: "Amazon Comprehend." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q342",
    prompt: "What AWS service allows you to buy third-party software solutions and services that run on AWS resources?",
    options: [
      { id: "a", text: "AWS Application Discovery service." },
      { id: "b", text: "Amazon DevPay." },
      { id: "c", text: "AWS Marketplace." },
      { id: "d", text: "Resource Groups." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q343",
    prompt: "Which of the following services is an AWS repository management system that allows for storing, versioning, and managing your application code?",
    options: [
      { id: "a", text: "AWS CodePipeline." },
      { id: "b", text: "AWS CodeCommit." },
      { id: "c", text: "AWS X-Ray." },
      { id: "d", text: "Amazon Inspector." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q344",
    prompt: "Which AWS service can be used to route end users to the nearest AWS Region to reduce latency?",
    options: [
      { id: "a", text: "Amazon Cognito." },
      { id: "b", text: "AWS Systems Manager." },
      { id: "c", text: "AWS Cloud9." },
      { id: "d", text: "Amazon Route 53." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q345",
    prompt: "Which feature enables users to sign into their AWS accounts with their existing corporate credentials?",
    options: [
      { id: "a", text: "Federation." },
      { id: "b", text: "Access keys." },
      { id: "c", text: "IAM Permissions." },
      { id: "d", text: "WAF rules." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q346",
    prompt: "According to the AWS shared responsibility model, what are the controls that customers fully inherit from AWS? (Choose TWO)",
    options: [
      { id: "a", text: "Awareness and Training." },
      { id: "b", text: "Communications controls." },
      { id: "c", text: "Data center security controls." },
      { id: "d", text: "Environmental controls." },
      { id: "e", text: "Resource Configuration Management." },
    ],
    correctOptionId: "c,d"
  },

  {
    id: "q347",
    prompt: "What can you access by visiting the URL: http://status.aws.amazon.com?",
    options: [
      { id: "a", text: "AWS Billing Dashboard." },
      { id: "b", text: "AWS Cost Dashboard." },
      { id: "c", text: "AWS Service Health Dashboard." },
      { id: "d", text: "AWS Security Dashboard." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q348",
    prompt: "Which of the following procedures can reduce latency when your end users are retrieving data? (Choose TWO)",
    options: [
      { id: "a", text: "Store media assets in the region closest to your end users." },
      { id: "b", text: "Store media assets on an additional EBS volume and increase the capacity of your server." },
      { id: "c", text: "Replicate media assets to at least two availability zones." },
      { id: "d", text: "Reduce the size of media assets using the Amazon Elastic Transcoder." },
      { id: "e", text: "Store media assets in S3 and use CloudFront to distribute these assets." },
    ],
    correctOptionId: "a,e"
  },

  {
    id: "q349",
    prompt: "Which of the following are part of the seven design principles for security in the cloud? (Choose TWO)",
    options: [
      { id: "a", text: "Use manual monitoring techniques to protect your AWS resources." },
      { id: "b", text: "Use IAM roles to grant temporary access instead of long-term credentials." },
      { id: "c", text: "Scale horizontally to protect from failures." },
      { id: "d", text: "Enable real-time traceability." },
      { id: "e", text: "Never store sensitive data in the cloud." },
    ],
    correctOptionId: "b,d"
  },

  {
    id: "q350",
    prompt: "A company is migrating production workloads to AWS, and they are concerned about cost management across different departments. Which option should the company implement to categorize and track AWS spending?",
    options: [
      { id: "a", text: "Use the AWS Pricing Calculator service to monitor the costs incurred by each department." },
      { id: "b", text: "Use Amazon Aurora to forecast AWS spending based on usage." },
      { id: "c", text: "Apply cost allocation tags to segment AWS costs by different projects and departments." },
      { id: "d", text: "Configure AWS Price List API to receive billing updates for each department automatically." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q351",
    prompt: "What is the main benefit of attaching security groups to an Amazon RDS instance?",
    options: [
      { id: "a", text: "Manages user access and encryption keys." },
      { id: "b", text: "Controls what IP address ranges can connect to your database instance." },
      { id: "c", text: "Deploys SSL/TLS certificates for use with your database instance." },
      { id: "d", text: "Distributes incoming traffic across multiple targets." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q352",
    prompt: "A company wants to use Amazon Elastic Container Service (Amazon ECS) to run its containerized applications. For compliance reasons, the company wants to retain complete visibility and control over the underlying server cluster. Which Amazon ECS launch type will satisfy these requirements?",
    options: [
      { id: "a", text: "EC2 launch type." },
      { id: "b", text: "Fargate launch type." },
      { id: "c", text: "Lightsail launch type." },
      { id: "d", text: "Lambda launch type." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q353",
    prompt: "You have multiple standalone AWS accounts and you want to decrease your AWS monthly charges. What should you do?",
    options: [
      { id: "a", text: "Try to remove unnecessary AWS accounts." },
      { id: "b", text: "Add the accounts to an AWS Organization and use Consolidated Billing." },
      { id: "c", text: "Track the AWS charges that are incurred by the member accounts." },
      { id: "d", text: "Enable AWS tiered-pricing before provisioning resources." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q354",
    prompt: "You have been tasked with auditing the security of your VPC. As part of this process, you need to start by analyzing what inbound and outbound traffic is allowed on your EC2 instances. What two parts of the VPC do you need to check to accomplish this task?",
    options: [
      { id: "a", text: "Network ACLs and Traffic Manager." },
      { id: "b", text: "Network ACLs and Subnets." },
      { id: "c", text: "Security Groups and Internet Gateways." },
      { id: "d", text: "Security Groups and Network ACLs." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q355",
    prompt: "What does the AWS 'Business' support plan provide? (Choose TWO)",
    options: [
      { id: "a", text: "Access to the full set of Trusted Advisor checks." },
      { id: "b", text: "Support Concierge Service." },
      { id: "c", text: "Less than 15 minutes response-time support if your business critical system goes down." },
      { id: "d", text: "AWS Support API." },
      { id: "e", text: "Proactive Technical Account Management." },
    ],
    correctOptionId: "a,d"
  },

  {
    id: "q356",
    prompt: "You have just finished writing your application code. Which service can be used to automate the deployment and scaling of your application?",
    options: [
      { id: "a", text: "Amazon Simple Storage Service." },
      { id: "b", text: "AWS Elastic Beanstalk." },
      { id: "c", text: "AWS CodeCommit." },
      { id: "d", text: "Amazon Elastic File System." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q357",
    prompt: "Which statement is true in relation to security in AWS?",
    options: [
      { id: "a", text: "AWS manages everything related to EC2 operating systems." },
      { id: "b", text: "AWS customers are responsible for patching any database software running on Amazon EC2." },
      { id: "c", text: "Server side encryption is the responsibility of AWS." },
      { id: "d", text: "AWS is responsible for the security of your application." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q358",
    prompt: "Amazon EC2 instances are conceptually very similar to traditional servers. However, using Amazon EC2 server instances in the same manner as traditional hardware server instances is only a starting point. What are the main benefits of using the AWS EC2 instances instead of traditional servers? (Choose TWO)",
    options: [
      { id: "a", text: "Improves Fault-Tolerance." },
      { id: "b", text: "Provides your business with a seamless remote accessibility." },
      { id: "c", text: "Prevents unauthorized users from getting into your network." },
      { id: "d", text: "Provides automatic data backups." },
      { id: "e", text: "Can be scaled manually in a shorter period of time." },
    ],
    correctOptionId: "a,e"
  },

  {
    id: "q359",
    prompt: "Which statement is true regarding AWS pricing? (Choose TWO)",
    options: [
      { id: "a", text: "With the AWS pay-as-you-go pricing model, you don't have to pay any upfront fee." },
      { id: "b", text: "You have no responsibility for third-party software license costs." },
      { id: "c", text: "You only pay for the individual services that you need with no long-term contracts." },
      { id: "d", text: "For some services, you have to pay a startup fee in order to get the service running." },
      { id: "e", text: "There are no reservations on AWS, you only pay for what you use." },
    ],
    correctOptionId: "a,c"
  },

  {
    id: "q360",
    prompt: "Which AWS service provides the EASIEST way to set up and manage a secure, well-architected, multi-account AWS environment?",
    options: [
      { id: "a", text: "AWS Control Tower." },
      { id: "b", text: "Amazon Macie." },
      { id: "c", text: "AWS Systems Manager Patch Manager." },
      { id: "d", text: "AWS Systems Manager Patch Manager AWS Security Hub." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q361",
    prompt: "A company is running a large web application that needs to always be available. The application tends to slow down when CPU usage is greater than 60%. How can they track when CPU usage goes above 60% for any of the EC2 Instances in their account?",
    options: [
      { id: "a", text: "Use CloudFront to monitor the CPU usage." },
      { id: "b", text: "Set the AWS Config CPU threshold to 60% to receive a notification when EC2 usage exceeds that value." },
      { id: "c", text: "Use CloudWatch Alarms to monitor the CPUand alert when the CPU usage is >= 60%." },
      { id: "d", text: "Use SNS to menitor the utilization of the server." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q362",
    prompt: "What is the recommended storage option when hosting an often-changing database on an Amazon EC2 instance?",
    options: [
      { id: "a", text: "Amazon EBS." },
      { id: "b", text: "Amazon RDS." },
      { id: "c", text: "You can't run a database inside an Amazon EC2 instance." },
      { id: "d", text: "Amazon DynamoDB." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q363",
    prompt: "You are working as a site reliability engineer (SRE) in an AWS environment, which of the following services helps monitor your applications?",
    options: [
      { id: "a", text: "Amazon CloudWatch." },
      { id: "b", text: "Amazon CloudSearch." },
      { id: "c", text: "Amazon Elastic MapReduce." },
      { id: "d", text: "Amazon CloudHSM." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q364",
    prompt: "What factors determine how you are charged when using AWS Lambda? (Choose TWO)",
    options: [
      { id: "a", text: "Storage consumed." },
      { id: "b", text: "Number of requests to your functions." },
      { id: "c", text: "Number of volumes." },
      { id: "d", text: "Placement groups." },
      { id: "e", text: "Compute time consumed." },
    ],
    correctOptionId: "b,e"
  },

  {
    id: "q365",
    prompt: "What are the main differences between an IAM user and an IAM role in AWS? (Choose TWO)",
    options: [
      { id: "a", text: "An IAM user is uniquely associated with only one person, however a role is intended to be assumable by anyone who needs it." },
      { id: "b", text: "An IAM user has permanent credentials associated with it, however a role has temporary credentials associated with it." },
      { id: "c", text: "IAM users are more cost effective than IAM roles." },
      { id: "d", text: "Arole is uniquely associated with only one person, however an IAM user is intended to be assumable by anyone who needs it." },
      { id: "e", text: "An IAM user has temporary credentials associated withit, however a role has permanent credentials associated with it." },
    ],
    correctOptionId: "a,b"
  },

  {
    id: "q366",
    prompt: "Which of the following actions may reduce Amazon EBS costs? (Choose TWO)",
    options: [
      { id: "a", text: "Deleting unused buckets." },
      { id: "b", text: "Using reservations." },
      { id: "c", text: "Deleting unnecessary snapshots." },
      { id: "d", text: "Changing the type of the volume." },
      { id: "e", text: "Distributing requests to multiple volumes." },
    ],
    correctOptionId: "c,d"
  },

  {
    id: "q367",
    prompt: "What does Amazon GuardDuty do to protect AWS accounts and workloads?",
    options: [
      { id: "a", text: "Notifies AWS customers about abuse events once they are reported." },
      { id: "b", text: "Continuously monitors AWS infrastructure and helps detect threats such as attacker reconnaissance or account compromise." },
      { id: "c", text: "Helps AWS customers identify the root cause of potential security issues." },
      { id: "d", text: "Checks security groups for rules that allow unrestricted access to AWS. resources." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q368",
    prompt: "Which database service should you use if your application and data schema require 'joins' or complex transactions?",
    options: [
      { id: "a", text: "Amazon RDS." },
      { id: "b", text: "AWS Outposts." },
      { id: "c", text: "Amazon DocumentDB." },
      { id: "d", text: "Amazon DynameDB." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q369",
    prompt: "Which of the following makes it easier for you to categorize, manage and filter your resources?",
    options: [
      { id: "a", text: "Amazon CloudWatch." },
      { id: "b", text: "AWS Service Catalog." },
      { id: "c", text: "AWS Directory Service." },
      { id: "d", text: "AWS Tagging." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q370",
    prompt: "What should you consider when storing data in Amazon Glacier?",
    options: [
      { id: "a", text: "Amazon Glacier only accepts data in a compressed format." },
      { id: "b", text: "Glacier can only be used to store frequently accessed data and data archives." },
      { id: "c", text: "Amazon Glacier does not provide immediate retrieval of data." },
      { id: "d", text: "Attach Glacier to an EC2 Instance to be able to store data." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q371",
    prompt: "Engineers are wasting a lot of time and effort managing batch computing software in traditional data centers. Which of the following AWS services allows them to easily run thousands of batch computing jobs?",
    options: [
      { id: "a", text: "Amazon EC2." },
      { id: "b", text: "AWS Batch." },
      { id: "c", text: "Lambda@Edge." },
      { id: "d", text: "AWS Fargate." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q372",
    prompt: "How can you increase your application's fault-tolerance while it is being hosted in AWS?",
    options: [
      { id: "a", text: "Deploy your application across multiple EC2 instances." },
      { id: "b", text: "Deploy your application across multiple Availability Zones." },
      { id: "c", text: "Host your application on one powerful EC2 instance type instead of multiple smaller instances." },
      { id: "d", text: "Deploy the underlying application resources across multiple subnets." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q373",
    prompt: "Which of the following AWS Support Plans gives you 24/7 access to Cloud Support Engineers via email & phone? (Choose TWO)",
    options: [
      { id: "a", text: "Developer." },
      { id: "b", text: "Premium." },
      { id: "c", text: "Enterprise." },
      { id: "d", text: "Standard." },
      { id: "e", text: "Business." },
    ],
    correctOptionId: "c,e"
  },

  {
    id: "q374",
    prompt: "Which of the following requires an access key ID and a secret access key to get long-lived programmatic access to AWS resources? (Choose TWO)",
    options: [
      { id: "a", text: "IAM group." },
      { id: "b", text: "IAM user." },
      { id: "c", text: "IAM role." },
      { id: "d", text: "AWS account root user." },
      { id: "e", text: "TAM." },
    ],
    correctOptionId: "b,d"
  },

  {
    id: "q375",
    prompt: "Which of the following is a benefit of the 'Loose Coupling' architecture principle?",
    options: [
      { id: "a", text: "It eliminates the need for change management." },
      { id: "b", text: "It allows for Cross-Region Replication." },
      { id: "c", text: "It helps AWS customers reduce Privileged Access to AWS resources." },
      { id: "d", text: "It allows individual application components or services to be modified without affecting other components." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q376",
    prompt: "A company needs to host a big data application on AWS using EC2 instances. Which of the following AWS Storage services would they choose to automatically get high throughput to multiple compute nodes?",
    options: [
      { id: "a", text: "Amazon Elastic Block Store." },
      { id: "b", text: "AWS Storage Gateway." },
      { id: "c", text: "Amazon Elastic File System." },
      { id: "d", text: "S3." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q377",
    prompt: "Which of the following Cloud Computing deployment models eliminates the need to run and maintain physical data centers?",
    options: [
      { id: "a", text: "On-premises." },
      { id: "b", text: "IaaS." },
      { id: "c", text: "PaaS." },
      { id: "d", text: "Cloud." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q378",
    prompt: "What are the benefits of the AWS Marketplace service? (Choose TWO)",
    options: [
      { id: "a", text: "Protects customers by performing periodic security checks on listed products." },
      { id: "b", text: "Per-second billing." },
      { id: "c", text: "Provides cheaper options for purchasing Amazon EC2 on-demand instances." },
      { id: "d", text: "Provides flexible pricing options that suit most customer needs." },
      { id: "e", text: "Provides software solutions that run on AWS or any other Cloud vendor." },
    ],
    correctOptionId: "d,e"
  },

  {
    id: "q379",
    prompt: "What is the benefit of Amazon EBS volumes being automatically replicated within the same availability zone?",
    options: [
      { id: "a", text: "Elasticity." },
      { id: "b", text: "Durability." },
      { id: "c", text: "Traceability." },
      { id: "d", text: "Accessibility." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q380",
    prompt: "You are planning to launch an advertising campaign over the coming weekend to promote a new digital product. It is expected that there will be heavy spikes in load during the campaign period, and you can't afford any downtime. You need additional compute resources to handle the additional load. What is the most cost-effective EC2 instance purchasing option for this job?",
    options: [
      { id: "a", text: "Savings Plans." },
      { id: "b", text: "Spot Instances." },
      { id: "c", text: "Reserved Instances." },
      { id: "d", text: "On-Demand Instances." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q381",
    prompt: "Which of the following AWS services integrates with AWS Shield and AWS Web Application Firewall (AWS WAF) to protect against network and application layer DDoS attacks?",
    options: [
      { id: "a", text: "Amazon EFS." },
      { id: "b", text: "AWS Secrets Manager." },
      { id: "c", text: "AWS Systems Manager." },
      { id: "d", text: "Amazon CloudFront." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q382",
    prompt: "Which of the following services is used when encrypting EBS volumes?",
    options: [
      { id: "a", text: "AWS WAF." },
      { id: "b", text: "AWS KMS." },
      { id: "c", text: "Amazon Macie." },
      { id: "d", text: "Amazon GuardDuty." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q383",
    prompt: "The AWS account administrator of your company has been fired. With the permissions granted to him as an administrator, he was able to create multiple IAM user accounts and access keys. Additionally, you are not sure whether he has access to the AWS root account or not. What should you do immediately to protect your AWS infrastructure? (Choose TWO)",
    options: [
      { id: "a", text: "Download all the attached policies in a safe place." },
      { id: "b", text: "Delete all IAM accounts and recreate them." },
      { id: "c", text: "Use the CloudWatch service to check all API calls that have been made in your account since the administrator was fired." },
      { id: "d", text: "Rotate all access keys." },
      { id: "e", text: "Change the email address and password of the root user account and enable MFA." },
    ],
    correctOptionId: "d,e"
  },

  {
    id: "q384",
    prompt: "What is the Amazon ElastiCache service used for? (Choose TWO)",
    options: [
      { id: "a", text: "Provide an in-memory data storage service." },
      { id: "b", text: "Reduce delivery costs using Edge Locations." },
      { id: "c", text: "Improve web application performance." },
      { id: "d", text: "Provide a Chef-compatible cache to speed up application response." },
      { id: "e", text: "Distribute requests to multiple instances." },
    ],
    correctOptionId: "a,c"
  },

  {
    id: "q385",
    prompt: "The elasticity of the AWS Cloud enables customers to save costs when compared to traditional hosting providers. What can AWS customers do to benefit from the elasticity of the AWS Cloud? (Choose TWO)",
    options: [
      { id: "a", text: "Deploy your resources across multiple Availability Zones." },
      { id: "b", text: "Use Amazon EC2 Auto Scaling." },
      { id: "c", text: "Deploy your resources in another region." },
      { id: "d", text: "Use Elastic Load Balancing." },
      { id: "e", text: "Use Serverless Computing whenever possible." },
    ],
    correctOptionId: "b,e"
  },

  {
    id: "q386",
    prompt: "What are some of the benefits of using On-Demand EC2 instances? (Choose TWO)",
    options: [
      { id: "a", text: "They provide free capacity when testing your new applications." },
      { id: "b", text: "They are cheaper than all other EC2 options." },
      { id: "c", text: "They remove the need to buy 'safety net' capacity to handle periodic traffic spikes." },
      { id: "d", text: "They only require 1-2 days for setup and configuration." },
      { id: "e", text: "You can increase or decrease your compute capacity depending on the demands of your application." },
    ],
    correctOptionId: "c,e"
  },

  {
    id: "q387",
    prompt: "Each AWS Region is composed of multiple Availability Zones. Which of the following best describes what an Availability Zone is?",
    options: [
      { id: "a", text: "It is a data center designed to be completely isolated from other data centers in the same region." },
      { id: "b", text: "It is a collection of data centers distributed in multiple countries." },
      { id: "c", text: "It is a logically isolated network of the AWS Cloud." },
      { id: "d", text: "It is a distinct location within a region that is insulated from « failures in other Availability Zones." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q388",
    prompt: "AWS provides disaster recovery capability by allowing customers to deploy infrastructure into multiple [...].",
    options: [
      { id: "a", text: "regions." },
      { id: "b", text: "transportation devices." },
      { id: "c", text: "support plans." },
      { id: "d", text: "edge locations." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q389",
    prompt: "A financial services company decides to migrate one of its applications to AWS. The application deals with sensitive data, such as credit card information, and must run on a PCI-compliant environment. Which of the following is the company's responsibility when building a PCI-compliant environment in AWS? (Choose TWO)",
    options: [
      { id: "a", text: "Start the migration process immediately as all AWS services are PCI compliant." },
      { id: "b", text: "Ensure that AWS services are configured properly to meet all PCI DSS standards." },
      { id: "c", text: "Restrict any access to cardholder data and create a policy that addresses information security for all personnel." },
      { id: "d", text: "Configure the underlying infrastructure of AWS services to meet all PCI DSS requirements." },
      { id: "e", text: "Ensure that all PCI DSS physical security requirements are met." },
    ],
    correctOptionId: "b,c"
  },

  {
    id: "q390",
    prompt: "What is the maximum amount of data that can be stored in S3 in a single AWS account?",
    options: [
      { id: "a", text: "100 PetaBytes." },
      { id: "b", text: "Virtually unlimited storage." },
      { id: "c", text: "5TeraBytes." },
      { id: "d", text: "10 Exabytes." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q391",
    prompt: "Which pillar of the AWS Well-Architected Framework provides recommendations to help customers select the right compute resources based on workload requirements?",
    options: [
      { id: "a", text: "Operational Excellence." },
      { id: "b", text: "Security." },
      { id: "c", text: "Performance Efficiency." },
      { id: "d", text: "Reliability." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q392",
    prompt: "Which AWS service delivers data, videos, applications, and APIs to users globally with low latency and high transfer speeds?",
    options: [
      { id: "a", text: "Amazon Route 53." },
      { id: "b", text: "Amazon Connect." },
      { id: "c", text: "Amazon CloudFront." },
      { id: "d", text: "Amazon EC2." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q393",
    prompt: "Which of the following steps should be taken by a customer when conducting penetration testing on AWS?",
    options: [
      { id: "a", text: "Conduct penetration testing using Amazon Inspector, and then notify AWS support." },
      { id: "b", text: "Request and wait for approval from the customer's internal security team, and then conduct testing." },
      { id: "c", text: "Notify AWS support, and then conduct testing immediately." },
      { id: "d", text: "Request and wait for approval from AWS support, and then conduct testing." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q394",
    prompt: "Which AWS Cost Management tool allows you to view the most granular data about your AWS bill?",
    options: [
      { id: "a", text: "AWS Cost Explorer." },
      { id: "b", text: "AWS Budgets." },
      { id: "c", text: "AWS Cost and Usage report." },
      { id: "d", text: "AWS Billing dashboard." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q395",
    prompt: "Which element of the AWS global infrastructure consists of one or more discrete data centers each with redundant power networking and connectivity which are housed in separate facilities?",
    options: [
      { id: "a", text: "AWS Regions." },
      { id: "b", text: "Availability Zones." },
      { id: "c", text: "Edge locations." },
      { id: "d", text: "Amazon CloudFront." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q396",
    prompt: "How many Availability Zones should compute resources be provisioned across to achieve high availability?",
    options: [
      { id: "a", text: "A minimum of one." },
      { id: "b", text: "A minimum of two." },
      { id: "c", text: "A minimum of three." },
      { id: "d", text: "A minimum of four or more." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q397",
    prompt: "The AWS Cloud's multiple Regions are an example of:",
    options: [
      { id: "a", text: "Agility." },
      { id: "b", text: "Global infrastructure." },
      { id: "c", text: "Elasticity." },
      { id: "d", text: "Pay-as-you-go pricing." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q398",
    prompt: "Which AWS service can be used to manually launch instances based on resource requirements?",
    options: [
      { id: "a", text: "Amazon EBS." },
      { id: "b", text: "Amazon S3." },
      { id: "c", text: "Amazon EC2." },
      { id: "d", text: "Amazon ECS." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q399",
    prompt: "Which is a recommended pattern for designing a highly available architecture on AWS?",
    options: [
      { id: "a", text: "Ensure that components have low-latency network connectivity." },
      { id: "b", text: "Run enough Amazon EC2 instances to operate at peak load." },
      { id: "c", text: "Ensure that the application is designed to accommodate failure of any single component." },
      { id: "d", text: "Use a monolithic application that handles all operations." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q400",
    prompt: "Which AWS characteristics make AWS cost effective for a workload with dynamic user demand? (Select TWO)",
    options: [
      { id: "a", text: "High availability." },
      { id: "b", text: "Shared security model." },
      { id: "c", text: "Elasticity." },
      { id: "d", text: "Pay-as-you-go pricing." },
      { id: "e", text: "Reliability." },
    ],
    correctOptionId: "c,d"
  },

  {
    id: "q401",
    prompt: "An administrator needs to rapidly deploy a popular IT solution and start using it immediately. Where can the administrator find assistance?",
    options: [
      { id: "a", text: "AWS Well-Architected Framework documentation." },
      { id: "b", text: "Amazon CloudFront." },
      { id: "c", text: "AWS CodeCommit." },
      { id: "d", text: "AWS Quick Start reference deployments." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q402",
    prompt: "What is one of the advantages of the Amazon Relational Database Service (Amazon RDS)?",
    options: [
      { id: "a", text: "It simplifies relational database administration tasks." },
      { id: "b", text: "It provides 99.99999999999% reliability and durability." },
      { id: "c", text: "It automatically scales databases for loads." },
      { id: "d", text: "It enabled users to dynamically adjust CPU and RAM resources." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q403",
    prompt: "Which of the following AWS Cloud services can be used to run a customer-managed relational database?",
    options: [
      { id: "a", text: "Amazon EC2." },
      { id: "b", text: "Amazon Route 53." },
      { id: "c", text: "Amazon ElastiCache." },
      { id: "d", text: "Amazon DynamoDB." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q404",
    prompt: "A user is planning to launch two additional Amazon EC2 instances to increase availability. Which action should the user take?",
    options: [
      { id: "a", text: "Launch the instances across multiple Availability Zones in a single AWS Region." },
      { id: "b", text: "Launch the instances as EC2 Reserved Instances in the same AWS Region and the same Availability Zone." },
      { id: "c", text: "Launch the instances in multiple AWS Regions but in the same Availability Zone." },
      { id: "d", text: "Launch the instances as EC2 Spot Instances in the same AWS Region but in different Availability Zones." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q405",
    prompt: "Which of the following can limit Amazon Storage Service (Amazon S3) bucket access to specific users?",
    options: [
      { id: "a", text: "A public and private key-pair." },
      { id: "b", text: "Amazon Inspector." },
      { id: "c", text: "AWS Identity and Access Management (IAM) policies." },
      { id: "d", text: "Security Groups." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q406",
    prompt: "Which AWS service allows companies to connect an Amazon VPC to an on-premises data center?",
    options: [
      { id: "a", text: "AWS VPN." },
      { id: "b", text: "Amazon Redshift." },
      { id: "c", text: "API Gateway." },
      { id: "d", text: "Amazon Direct Connect." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q407",
    prompt: "Which AWS service of feature can be used to monitor CPU usage?",
    options: [
      { id: "a", text: "AWS CloudTrail." },
      { id: "b", text: "VPC Flow Logs." },
      { id: "c", text: "Amazon CloudWatch." },
      { id: "d", text: "AWSConfig." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q408",
    prompt: "Which task is AWS responsible for in the shared responsibility model for security and compliance?",
    options: [
      { id: "a", text: "Granting access to individuals and services." },
      { id: "b", text: "Encrypting data in transit." },
      { id: "c", text: "Updating Amazon EC2 host firmware." },
      { id: "d", text: "Updating operating systems." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q409",
    prompt: "Which of the following security-related actions are available at no cost?",
    options: [
      { id: "a", text: "Calling AWS Support." },
      { id: "b", text: "Contacting AWS Professional Services to request a workshop." },
      { id: "c", text: "Accessing forums, blogs, and whitepapers." },
      { id: "d", text: "Attending AWS classes at a local university." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q410",
    prompt: "Which storage service can be used as a low-cost option for hosting static websites?",
    options: [
      { id: "a", text: "Amazon Glacier." },
      { id: "b", text: "Amazon DynamoDB." },
      { id: "c", text: "Amazon Elastic File System (Amazon EFS)." },
      { id: "d", text: "Amazon Simple Storage Service (Amazon S3)." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q411",
    prompt: "According to the AWS shared responsibility model what is the sole responsibility of AWS?",
    options: [
      { id: "a", text: "Application security." },
      { id: "b", text: "Edge location management." },
      { id: "c", text: "Patch management." },
      { id: "d", text: "Client-side data." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q412",
    prompt: "Which of the following are pillars of the AWS Well-Architected Framework? (Select TWO)",
    options: [
      { id: "a", text: "Multiple Availability Zones." },
      { id: "b", text: "Performance efficiency." },
      { id: "c", text: "Security." },
      { id: "d", text: "Encryption usage." },
      { id: "e", text: "High availability." },
    ],
    correctOptionId: "b,c"
  },

  {
    id: "q413",
    prompt: "Which AWS service identifies security groups that allow unrestricted access to a user's AWS resources?",
    options: [
      { id: "a", text: "AWS Trusted Advisor." },
      { id: "b", text: "Amazon Inspector." },
      { id: "c", text: "Amazon CloudWatch." },
      { id: "d", text: "AWS CloudTrail." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q414",
    prompt: "Which design principles for cloud architecture are recommended when re-architecting a large monolithic application? (Select TWO)",
    options: [
      { id: "a", text: "Use manual monitoring." },
      { id: "b", text: "Use fixed servers." },
      { id: "c", text: "Implement loose coupling." },
      { id: "d", text: "Rely on individual components." },
      { id: "e", text: "Design for scalability." },
    ],
    correctOptionId: "c,e"
  },

  {
    id: "q415",
    prompt: "When architecting cloud applications, which of the following are a key design principle?",
    options: [
      { id: "a", text: "Use the largest instance possible." },
      { id: "b", text: "Provision capacity for peak load." },
      { id: "c", text: "Use the Scrum development process." },
      { id: "d", text: "Implement elasticity." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q416",
    prompt: "A company has deployed several relational databases on Amazon EC2 instances Every month the database software vendor releases new security patches that need to be applied to the databases. What is the MOST efficient way to apply the security patches?",
    options: [
      { id: "a", text: "Connect to each database instance on a monthly basis and download and apply the necessary security patches from the vendor." },
      { id: "b", text: "Enable automate patching for the instances using the Amazon RDS console." },
      { id: "c", text: "In AWS Config. configure a rule for the instances and the required patch level." },
      { id: "d", text: "Use AWS Systems Manager to automate database patching according to a schedule." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q417",
    prompt: "Which mechanism allows developers to access AWS sendees from application code?",
    options: [
      { id: "a", text: "AWS Software Development Kit." },
      { id: "b", text: "AWS Management Console." },
      { id: "c", text: "AWS CodePipeline." },
      { id: "d", text: "AWS Config." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q418",
    prompt: "Which AWS feature will reduce the customer's total cost of ownership (TCO)?",
    options: [
      { id: "a", text: "Shared responsibility security model." },
      { id: "b", text: "Single tenancy." },
      { id: "c", text: "Elastic computing." },
      { id: "d", text: "Encryption." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q419",
    prompt: "Which of the following is a benefit of using the AWS Cloud?",
    options: [
      { id: "a", text: "Permissive security removes the administrative burden." },
      { id: "b", text: "Ability to focus on revenue-generating activities." },
      { id: "c", text: "Control over cloud network hardware." },
      { id: "d", text: "Choice of specific cloud hardware vendors." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q420",
    prompt: "Which of the following are categories of AWS Trusted Advisor? (Select TWO)",
    options: [
      { id: "a", text: "Fault Tolerance." },
      { id: "b", text: "Instance Usage." },
      { id: "c", text: "Infrastructure." },
      { id: "d", text: "Performance." },
      { id: "e", text: "Storage Capacity." },
    ],
    correctOptionId: "a,d"
  },

  {
    id: "q421",
    prompt: "What is Amazon CloudWatch?",
    options: [
      { id: "a", text: "A code repository with customizable build and team commit features." },
      { id: "b", text: "A metrics repository with customizable notification thresholds and channels." },
      { id: "c", text: "A security configuration repository with threat analytics." },
      { id: "d", text: "A rule repository of a web application firewall with automated vulnerability prevention features." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q422",
    prompt: "Under the AWS shared responsibility model, which of the following activities are the customer's responsibility? (Select TWO)",
    options: [
      { id: "a", text: "Patching operating system components for Amazon Relational Database Server (Amazon RDS)." },
      { id: "b", text: "Encrypting data on the client-side." },
      { id: "c", text: "Training the data center staff." },
      { id: "d", text: "Configuring Network Access Control Lists (ACL)." },
      { id: "e", text: "Maintaining environmental controls within a data center." },
    ],
    correctOptionId: "b,d"
  },

  {
    id: "q423",
    prompt: "Under the shared responsibility model, which of the following is a shared control between a customer and AWS?",
    options: [
      { id: "a", text: "Physical controls." },
      { id: "b", text: "Patch management." },
      { id: "c", text: "Zone security." },
      { id: "d", text: "Data center auditing." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q424",
    prompt: "Which AWS service is used to pay AWS bills, and monitor usage and budget costs?",
    options: [
      { id: "a", text: "AWS Billing and Cost Management." },
      { id: "b", text: "Consolidated billing." },
      { id: "c", text: "Amazon CloudWatch." },
      { id: "d", text: "Amazon GuickStght." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q425",
    prompt: "How do customers benefit from Amazon's massive economies of scale?",
    options: [
      { id: "a", text: "Periodic price reductions as the result of Amazon's operational efficiencies." },
      { id: "b", text: "New Amazon EC2 instance types providing the latest hardware." },
      { id: "c", text: "The ability to scale up and down when needed." },
      { id: "d", text: "Increased reliability in the underlying hardware of Amazon EC2 instances." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q426",
    prompt: "Which AWS feature allows a company to take advantage of usage tiers for services across multiple member accounts?",
    options: [
      { id: "a", text: "Service control policies (SCPs)." },
      { id: "b", text: "Consolidated billing." },
      { id: "c", text: "All Upfront Reserved Instances." },
      { id: "d", text: "AWS Cost Explorer." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q427",
    prompt: "Which AWS services provide a way to extend an on-premises architecture to the AWS cloud? (Select TWO)",
    options: [
      { id: "a", text: "Amazon EBS." },
      { id: "b", text: "Amazon Connect." },
      { id: "c", text: "AWS Storage Gateway." },
      { id: "d", text: "Amazon CloudFront." },
      { id: "e", text: "AWS Direct Connect." },
    ],
    correctOptionId: "c,e"
  },

  {
    id: "q428",
    prompt: "Which of the following services will automatically scale with an expected increase in web traffic?",
    options: [
      { id: "a", text: "AWS CodePipeline." },
      { id: "b", text: "Elastic Load Balancing." },
      { id: "c", text: "Amazon EBS." },
      { id: "d", text: "AWS Direct Connect." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q429",
    prompt: "Which service provides a virtually unlimited amount of online highly durable object storage?",
    options: [
      { id: "a", text: "Amazon Redshift." },
      { id: "b", text: "Amazon Elastic File System (Amazon EFS)." },
      { id: "c", text: "Amazon Elastic Container Service (Amazon ECS)." },
      { id: "d", text: "Amazon S3." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q430",
    prompt: "Which AWS feature should a customer leverage to achieve high availability of an application?",
    options: [
      { id: "a", text: "AWS Direct Connect." },
      { id: "b", text: "Availability Zones." },
      { id: "c", text: "Data centers." },
      { id: "d", text: "Amazon Virtual Private Cloud (Amazon VPC)." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q431",
    prompt: "Which AWS service or feature can enhance network security by blocking requests from a particular network for a web application on AWS? (Select TWO)",
    options: [
      { id: "a", text: "AWS WAF." },
      { id: "b", text: "AWS Trusted Advisor." },
      { id: "c", text: "AWS Direct Connect." },
      { id: "d", text: "AWS Organizations." },
      { id: "e", text: "Network ACLs." },
    ],
    correctOptionId: "a,e"
  },

  {
    id: "q432",
    prompt: "Which of the following is a cloud architectural design principle?",
    options: [
      { id: "a", text: "Scale up not out." },
      { id: "b", text: "Loosely couple components." },
      { id: "c", text: "Build monolithic systems." },
      { id: "d", text: "Use commercial database software." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q433",
    prompt: "Which service enables risk auditing by continuously monitoring and logging account activity, including user actions in the AWS Management Console and AWS SDKs?",
    options: [
      { id: "a", text: "Amazon CloudWatch." },
      { id: "b", text: "AWS CloudTrail." },
      { id: "c", text: "AWS Config." },
      { id: "d", text: "AWS Health." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q434",
    prompt: "Where can AWS compliance and certification reports be downloaded?",
    options: [
      { id: "a", text: "AWS Artifact." },
      { id: "b", text: "AWS Concierge." },
      { id: "c", text: "AWS Certificate Manager." },
      { id: "d", text: "AWS Trusted Advisor." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q435",
    prompt: "The financial benefits of using AWS are: (Select TWO)",
    options: [
      { id: "a", text: "Reduced Total Cost of Ownership (TCO)." },
      { id: "b", text: "Increased capital expenditure (capex)." },
      { id: "c", text: "Reduced operational expenditure ( opex )." },
      { id: "d", text: "Deferred payment plans for startups." },
      { id: "e", text: "Business credit lines for startups." },
    ],
    correctOptionId: "a,d"
  },

  {
    id: "q436",
    prompt: "Which AWS service can serve a static website?",
    options: [
      { id: "a", text: "Amazon S3." },
      { id: "b", text: "Amazon Route 53." },
      { id: "c", text: "Amazon QuickSight." },
      { id: "d", text: "AWS X-Ray." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q437",
    prompt: "What are the benefits of using the AWS Cloud for companies with customers in many countries around the world (Select TWO)",
    options: [
      { id: "a", text: "Companies can deploy applications in multiple AWS Regions to reduce latency." },
      { id: "b", text: "Amazon Translate automatically translates third-party website interfaces into multiple languages." },
      { id: "c", text: "Amazon CloudFront has multiple edge locations around the world to reduce latency." },
      { id: "d", text: "Amazon Comprehend allows users to build applications that can respond to user requests in many languages." },
      { id: "e", text: "Elastic Load Balancing can distribute application web traffic to multiple AWS Regions around the world which reduces latency." },
    ],
    correctOptionId: "a,c"
  },

  {
    id: "q438",
    prompt: "Which of the following are main components of the AWS global infrastructure? (Select TWO)",
    options: [
      { id: "a", text: "Resource groups." },
      { id: "b", text: "Availability Zones." },
      { id: "c", text: "Security groups." },
      { id: "d", text: "Regions." },
      { id: "e", text: "Amazon Machine Images (AMIS)." },
    ],
    correctOptionId: "b,d"
  },

  {
    id: "q439",
    prompt: "What is the AWS customer responsible for according to the AWS shared responsibility model?",
    options: [
      { id: "a", text: "Physical access controls." },
      { id: "b", text: "Data encryption." },
      { id: "c", text: "Secure disposal of storage devices." },
      { id: "d", text: "Environmental risk management." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q440",
    prompt: "If each department within a company has its own AWS account, what is one way to enable consolidated billing?",
    options: [
      { id: "a", text: "Use AWS Budgets on each account to pay only to budget." },
      { id: "b", text: "Contact AWS Support for a monthly bill." },
      { id: "c", text: "Create an AWS Organization from the payer account and invite the other accounts to join." },
      { id: "d", text: "Put all invoices into one Amazon Simple Storage Service (Amazon S3) bucket, load data into Amazon Redshift, and then run a billing report." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q441",
    prompt: "What costs are included when comparing AWS Total Cost of Ownership (TCO) with on-premises TCO?",
    options: [
      { id: "a", text: "Project management." },
      { id: "b", text: "Antivirus software licensing." },
      { id: "c", text: "Data center security." },
      { id: "d", text: "Software development." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q442",
    prompt: "What is the benefit of using AWS managed services, such as Amazon ElastiCache and Amazon Relational Database Service (Amazon RDS)?",
    options: [
      { id: "a", text: "They require the customer to monitor and replace failing instances." },
      { id: "b", text: "They have better performance than customer-managed services." },
      { id: "c", text: "They simplify patching and updating underlying OSs." },
      { id: "d", text: "They do not require the customer to optimize instance type or size selections." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q443",
    prompt: "Which services can be used across hybrid AWS Cloud architectures? (Select TWO)",
    options: [
      { id: "a", text: "Amazon Route 53." },
      { id: "b", text: "Virtual Private Gateway." },
      { id: "c", text: "Classic Load Balancer." },
      { id: "d", text: "Auto Scaling." },
      { id: "e", text: "Amazon CloudWatch default metrics." },
    ],
    correctOptionId: "a,b"
  },

  {
    id: "q444",
    prompt: "Which statement best describes Elastic Load Balancing?",
    options: [
      { id: "a", text: "It translates a domain name into an IP address using DNC." },
      { id: "b", text: "It distributes incoming application traffic across one or more Amazon EC2 instances." },
      { id: "c", text: "It collects metrics on connected Amazon EC2 instances." },
      { id: "d", text: "It automatically adjusts the number of Amazon EC2 instances to support incoming traffic." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q445",
    prompt: "Which of the following is a fast and reliable NoSQL database service?",
    options: [
      { id: "a", text: "Amazon Redshift." },
      { id: "b", text: "Amazon RDS." },
      { id: "c", text: "Amazon DynamoDB." },
      { id: "d", text: "Amazon S3." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q446",
    prompt: "Which AWS service would you use to obtain compliance reports and certificates?",
    options: [
      { id: "a", text: "AWS Artifact." },
      { id: "b", text: "AWS Lambda." },
      { id: "c", text: "Amazon Inspector." },
      { id: "d", text: "AWS Certificate Manager." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q447",
    prompt: "Which AWS services are defined as global instead of regional? (Select TWO)",
    options: [
      { id: "a", text: "Amazon Route 53." },
      { id: "b", text: "Amazon EC2." },
      { id: "c", text: "Amazon S3." },
      { id: "d", text: "Amazon CloudFront." },
      { id: "e", text: "Amazon DynamoDB." },
    ],
    correctOptionId: "a,d"
  },

  {
    id: "q448",
    prompt: "How would an AWS customer easily apply common access controls to a large set of users?",
    options: [
      { id: "a", text: "Apply an IAM policy to an IAM group." },
      { id: "b", text: "Apply an IAM policy to an IAM role." },
      { id: "c", text: "Apply the same IAM policy to all IAM users with access to the same workload." },
      { id: "d", text: "Apply an IAM policy to an Amazon Cognito user pool." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q449",
    prompt: "Which of the following is an important architectural design principle when designing cloud applications?",
    options: [
      { id: "a", text: "Use multiple Availability Zones." },
      { id: "b", text: "Use tightly coupled components." },
      { id: "c", text: "Use open source software." },
      { id: "d", text: "Provision extra capacity." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q450",
    prompt: "Which service allows a company with multiple AWS accounts to combine its usage to obtain volume discounts?",
    options: [
      { id: "a", text: "AWS Server Migration Service." },
      { id: "b", text: "AWS Organizations." },
      { id: "c", text: "AWS Budgets." },
      { id: "d", text: "AWS Trusted Advisor." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q451",
    prompt: "Which of the following can an AWS customer use to launch a new Amazon Relational Database Service (Amazon RDS) cluster? (Select TWO)",
    options: [
      { id: "a", text: "AWS Concierge." },
      { id: "b", text: "AWS CloudFormation." },
      { id: "c", text: "Amazon Simple Storage Service (Amazon S3)." },
      { id: "d", text: "Amazon EC2 Auto Scaling." },
      { id: "e", text: "AWS Management Console." },
    ],
    correctOptionId: "b,e"
  },

  {
    id: "q452",
    prompt: "Which of the following Reserved Instance (RI) pricing models provides the highest average savings compared to On-Demand pricing?",
    options: [
      { id: "a", text: "One-year, No Upfront, Standard RI pricing." },
      { id: "b", text: "One-year, All Upfront, Convertible RI pricing." },
      { id: "c", text: "Three-year, All Upfront, Standard RI pricing." },
      { id: "d", text: "Three-year, No Upfront, Convertible RI pricing." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q453",
    prompt: "Which of the following are features of Amazon CloudWatch Logs? (Select TWO)",
    options: [
      { id: "a", text: "Summaries by Amazon Simple Notification Service (Amazon SNS)." },
      { id: "b", text: "Free Amazon Elasticsearch Service analytics." },
      { id: "c", text: "Provided at no charge." },
      { id: "d", text: "Real-time monitoring." },
      { id: "e", text: "Adjustable retention." },
    ],
    correctOptionId: "d,e"
  },

  {
    id: "q454",
    prompt: "Which of the following is an AWS-managed compute service?",
    options: [
      { id: "a", text: "Amazon SWF." },
      { id: "b", text: "Amazon EC2." },
      { id: "c", text: "AWS Lambda." },
      { id: "d", text: "Amazon Aurora." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q455",
    prompt: "A company wants to reduce the physical compute footprint that developers use to run code. Which service would meet that need by enabling serverless architectures?",
    options: [
      { id: "a", text: "Amazon Elastic Compute Cloud (Amazon EC2)." },
      { id: "b", text: "AWS Lambda." },
      { id: "c", text: "Amazon DynamoDB." },
      { id: "d", text: "AWS CodeCommit." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q456",
    prompt: "Which of the following is the customer's responsibility under the AWS shared responsibility model?",
    options: [
      { id: "a", text: "Patching underlying infrastructure" },
      { id: "b", text: "Physical security" },
      { id: "c", text: "Patching Amazon EC2 instances" },
      { id: "d", text: "Patching network infrastructure" },
    ],
    correctOptionId: "c"
  },

  {
    id: "q457",
    prompt: "According to the AWS shared responsibility model who is responsible for configuration management?",
    options: [
      { id: "a", text: "It is solely the responsibility of the customer." },
      { id: "b", text: "It is solely the responsibility of AWS." },
      { id: "c", text: "It is shared between AWS and the customer." },
      { id: "d", text: "It is not part of the AWS shared responsibility model." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q458",
    prompt: "Which security service automatically recognizes and classifies sensitive data or intellectual property on AWS?",
    options: [
      { id: "a", text: "Amazon GuardDuty." },
      { id: "b", text: "Amazon Macie." },
      { id: "c", text: "Amazon Inspector." },
      { id: "d", text: "AWS Shield." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q459",
    prompt: "Which of the following BEST describe the AWS pricing model? (Select TWO)",
    options: [
      { id: "a", text: "Fixed-term." },
      { id: "b", text: "Pay-as-you-go." },
      { id: "c", text: "Colocation." },
      { id: "d", text: "Planned." },
      { id: "e", text: "Variable cost." },
    ],
    correctOptionId: "b,e"
  },

  {
    id: "q460",
    prompt: "Under the shared responsibility model, which of the following tasks are the responsibility of the AWS customer? (Select TWO)",
    options: [
      { id: "a", text: "Ensuring that application data is encrypted at rest." },
      { id: "b", text: "Ensuring that AWS NTP servers are set to the correct time." },
      { id: "c", text: "Ensuring that users have received security training in the use of AWS services." },
      { id: "d", text: "Ensuring that access to data centers is restricted." },
      { id: "e", text: "Ensuring that hardware is disposed of properly." },
    ],
    correctOptionId: "a,c"
  },

  {
    id: "q461",
    prompt: "A customer is using multiple AWS accounts with separate billing. How can the customer take advantage of volume discounts with minimal impact to the AWS resources?",
    options: [
      { id: "a", text: "Create one global AWS account and move all AWS resources to tha account." },
      { id: "b", text: "Sign up for three years of Reserved Instance pricing up front." },
      { id: "c", text: "Use the consolidated billing feature from AWS Organizations." },
      { id: "d", text: "Sign up for the AWS Enterprise support plan to get volume discounts." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q462",
    prompt: "Which Amazon EC2 pricing model offers the MOST significant discount when compared to OnDemand Instances?",
    options: [
      { id: "a", text: "A Partial Upfront Reserved Instances for a 1-year term." },
      { id: "b", text: "All Upfront Reserved instances for a 1 year form." },
      { id: "c", text: "All Upfront Reserved Instances for a 3 year term." },
      { id: "d", text: "No Upfront Reserved Instances for a 3 year term." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q463",
    prompt: "Which AWS services should be used for read/write of constantly changing data? (Select TWO)",
    options: [
      { id: "a", text: "Amazon Glacier." },
      { id: "b", text: "Amazon RDS." },
      { id: "c", text: "AWS Snowball." },
      { id: "d", text: "Amazon Redshift." },
      { id: "e", text: "Amazon EFS." },
    ],
    correctOptionId: "b,e"
  },

  {
    id: "q464",
    prompt: "Which AWS service allows users to identify the changes made to a resource over time?",
    options: [
      { id: "a", text: "Amazon Inspector." },
      { id: "b", text: "AWS Config." },
      { id: "c", text: "AWS Service Catalog." },
      { id: "d", text: "AWS IAM." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q465",
    prompt: "According to best practices, how should an application be designed to run in the AWS Cloud?",
    options: [
      { id: "a", text: "Use tightly coupled components." },
      { id: "b", text: "Use loosely coupled components." },
      { id: "c", text: "Use infrequently coupled components." },
      { id: "d", text: "Use frequently coupled components." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q466",
    prompt: "Which benefits are included with the AWS Business Support plan? (Select TWO)",
    options: [
      { id: "a", text: "24/7 assistance by way of live chat or a telephone call." },
      { id: "b", text: "Support from a dedicated AWS Technical Account Manager." },
      { id: "c", text: "An unlimited number of cases and contacts." },
      { id: "d", text: "15-minute response time for production system interruption cases." },
      { id: "e", text: "Annual operational reviews with AWS Solutions Architects." },
    ],
    correctOptionId: "a,c"
  },

  {
    id: "q467",
    prompt: "Which of the following is an AWS managed Domain Name System (DNS) web service?",
    options: [
      { id: "a", text: "Amazon Route 53." },
      { id: "b", text: "Amazon Neptune." },
      { id: "c", text: "Amazon SageMaker." },
      { id: "d", text: "Amazon Lightsail." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q468",
    prompt: "A user must meet compliance and software licensing requirements that state a workload must be hosted on a physical server. When Amazon EC2 instance pricing option will meet these requirements?",
    options: [
      { id: "a", text: "Dedicated Hosts." },
      { id: "b", text: "Dedicated Instances." },
      { id: "c", text: "Spot Instances." },
      { id: "d", text: "Reserved Instances." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q469",
    prompt: "Which of the Reserved Instance (RI) pricing models can change the attributes of the RI as long as the exchange results in the creation of RIs of equal or greater value?",
    options: [
      { id: "a", text: "Dedicated RIs." },
      { id: "b", text: "Scheduled RIs." },
      { id: "c", text: "Convertible RIs." },
      { id: "d", text: "Standard RIs." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q470",
    prompt: "Which service is best for storing common database query results, which helps to alleviate database access load?",
    options: [
      { id: "a", text: "Amazon Machine Learning." },
      { id: "b", text: "Amazon SQS." },
      { id: "c", text: "Amazon ElastiCache." },
      { id: "d", text: "Amazon EC2 Instance Store." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q471",
    prompt: "When should a company consider using Amazon EC2 Spot Instances? (Select TWO)",
    options: [
      { id: "a", text: "For non-production applications." },
      { id: "b", text: "For stateful workloads." },
      { id: "c", text: "For applications that cannot have interruptions." },
      { id: "d", text: "For fault-tolerant flexible applications." },
      { id: "e", text: "For sensitive database applications." },
    ],
    correctOptionId: "a,d"
  },

  {
    id: "q472",
    prompt: "Which AWS tools assist with estimating costs? (Select three)",
    options: [
      { id: "a", text: "Detailed billing report." },
      { id: "b", text: "Cost allocation tags." },
      { id: "c", text: "AWS Simple Monthly Calculator." },
      { id: "d", text: "AWS Total Cost of Ownership (TCO) Calculator." },
      { id: "e", text: "Cost Estimator." },
    ],
    correctOptionId: "b,c,d"
  },

  {
    id: "q473",
    prompt: "A company wants to focus on business activities instead of managing compute and capacity. Which AWS service can be used to automatically add or remove Amazon EC2 instances based on demand?",
    options: [
      { id: "a", text: "Elastic Load Balancer." },
      { id: "b", text: "Amazon EC2 Auto Scaling." },
      { id: "c", text: "Amazon Route 53." },
      { id: "d", text: "Amazon CloudFront." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q474",
    prompt: "Which is the minimum AWS Support plan that includes Infrastructure Event Management without additional costs?",
    options: [
      { id: "a", text: "Enterprise." },
      { id: "b", text: "Business." },
      { id: "c", text: "Developer." },
      { id: "d", text: "Basic." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q475",
    prompt: "Access keys in AWS Identity and Access Management (IM1) are used to:",
    options: [
      { id: "a", text: "Log in to the AWS Management Console." },
      { id: "b", text: "Make programmatic calls to AWS from AWS APIs." },
      { id: "c", text: "Log in to Amazon EC2 instances." },
      { id: "d", text: "Authenticate to AWS CodeCommit repositories." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q476",
    prompt: "Which AWS service can be used to query stored datasets directly from Amazon S3 using standard SQL?",
    options: [
      { id: "a", text: "AWS Glue." },
      { id: "b", text: "AWS Data Pipeline." },
      { id: "c", text: "Amazon CloudSearch." },
      { id: "d", text: "Amazon Athena." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q477",
    prompt: "How does AWS shorten the time to provision IT resources?",
    options: [
      { id: "a", text: "It supplies an online IT ticketing platform for resource requests." },
      { id: "b", text: "It supports automatic code validation services." },
      { id: "c", text: "It provides the ability to programmatically provision existing resources." },
      { id: "d", text: "It automates the resource request process from a company's IT vendor list." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q478",
    prompt: "Which AWS services can be used to gather information about AWS account activity? (Select TWO)",
    options: [
      { id: "a", text: "Amazon CloudFront." },
      { id: "b", text: "AWS Cloud9." },
      { id: "c", text: "AWS CloudTrail." },
      { id: "d", text: "AWS CloudHSM." },
      { id: "e", text: "Amazon CloudWatch." },
    ],
    correctOptionId: "c,e"
  },

  {
    id: "q479",
    prompt: "Which of the following are characteristics of Amazon S3? (Select TWO)",
    options: [
      { id: "a", text: "A global file system." },
      { id: "b", text: "An object store." },
      { id: "c", text: "A local file store." },
      { id: "d", text: "A network file system." },
      { id: "e", text: "A durable storage system." },
    ],
    correctOptionId: "b,e"
  },

  {
    id: "q480",
    prompt: "A user wants guidance on possible savings when migrating from on-premises to AWS. Which tool is suitable for this scenario?",
    options: [
      { id: "a", text: "AWS Budgets." },
      { id: "b", text: "Cost Explorer." },
      { id: "c", text: "AWS Total Cost of Ownership (TCO) Calculator." },
      { id: "d", text: "AWS Well-Architected Tool." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q481",
    prompt: "Which of the following services is in the category of AWS serverless platform?",
    options: [
      { id: "a", text: "Amazon EMR." },
      { id: "b", text: "Elastic Load Balancing." },
      { id: "c", text: "AWS Lambda." },
      { id: "d", text: "AWS Mobile Hub." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q482",
    prompt: "The use of what AWS feature or service allows companies to track and categorize spending on a detailed level?",
    options: [
      { id: "a", text: "Cost allocation tags." },
      { id: "b", text: "Consolidated billing." },
      { id: "c", text: "AWS Budgets." },
      { id: "d", text: "AWS Marketplace." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q483",
    prompt: "Which of the following inspects AWS environments to find opportunities that can save money for users and also improve system performance?",
    options: [
      { id: "a", text: "AWS Cost Explorer." },
      { id: "b", text: "AWS Trusted Advisor." },
      { id: "c", text: "Consolidated billing." },
      { id: "d", text: "Detailed billing." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q484",
    prompt: "Web servers running on Amazon EC2 access a legacy application running in a corporate data center. What term would describe this model?",
    options: [
      { id: "a", text: "Cloud-native." },
      { id: "b", text: "Partner network." },
      { id: "c", text: "Hybrid architecture." },
      { id: "d", text: "Infrastructure as a service." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q485",
    prompt: "What technology enables compute capacity to adjust as loads change?",
    options: [
      { id: "a", text: "Load balancing." },
      { id: "b", text: "Automatic failover." },
      { id: "c", text: "Round robin." },
      { id: "d", text: "Auto Scaling." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q486",
    prompt: "Which AWS service is a managed NoSQL database?",
    options: [
      { id: "a", text: "Amazon Redshift." },
      { id: "b", text: "Amazon DynamoDB." },
      { id: "c", text: "Amazon Aurora." },
      { id: "d", text: "Amazon RDS for ManaDB." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q487",
    prompt: "Which of the following is a correct relationship between regions, Availability Zones, and edge locations?",
    options: [
      { id: "a", text: "Data centers contain regions." },
      { id: "b", text: "Regions contain Availability Zones." },
      { id: "c", text: "Availability Zones contain edge locations." },
      { id: "d", text: "Edge locations contain regions." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q488",
    prompt: "What approach to transcoding a large number of individual video files adheres to AWS architecture principles?",
    options: [
      { id: "a", text: "Using many instances in parallel." },
      { id: "b", text: "Using a single large instance during off-peak hours." },
      { id: "c", text: "Using dedicated hardware." },
      { id: "d", text: "Using a large GPU instance type." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q489",
    prompt: "Which AWS services can host a Microsoft SQL Server database? (Select TWO)",
    options: [
      { id: "a", text: "Amazon EC2." },
      { id: "b", text: "Amazon Relational Database Service (Amazon RDS)." },
      { id: "c", text: "Amazon Aurora." },
      { id: "d", text: "Amazon Redshift." },
      { id: "e", text: "Amazon S3." },
    ],
    correctOptionId: "a,b"
  },

  {
    id: "q490",
    prompt: "Which AWS IAM feature allows developers to access AWS services through the AWS CLI?",
    options: [
      { id: "a", text: "API keys." },
      { id: "b", text: "Access keys." },
      { id: "c", text: "User names/Passwords." },
      { id: "d", text: "SSH keys." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q491",
    prompt: "The user is fully responsible for which action when running workloads on AWS?",
    options: [
      { id: "a", text: "Patching the infrastructure components." },
      { id: "b", text: "Maintaining the underlying infrastructure components." },
      { id: "c", text: "Maintaining physical and environmental controls." },
      { id: "d", text: "Implementing controls to route application traffic." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q492",
    prompt: "Which AWS support plan includes a dedicated Technical Account Manager?",
    options: [
      { id: "a", text: "Developer." },
      { id: "b", text: "Enterprise." },
      { id: "c", text: "Business." },
      { id: "d", text: "Basic." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q493",
    prompt: "What time-savings advantage is offered with the use of Amazon Rekognition?",
    options: [
      { id: "a", text: "Amazon Rekognition provides automatic watermarking of images." },
      { id: "b", text: "Amazon Rekognition provides automatic detection of objects appearing in pictures." },
      { id: "c", text: "Amazon Recognition provides the ability to resize millions of images automatically." },
      { id: "d", text: "Amazon Rekognition uses Amazon Mechanical Turk to allow humans to bid on object detection jobs." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q494",
    prompt: "Which AWS service can be used to automatically scale an application up and down without making capacity planning decisions?",
    options: [
      { id: "a", text: "Amazon EBS." },
      { id: "b", text: "Amazon Redshift." },
      { id: "c", text: "AWS CloudTrail." },
      { id: "d", text: "AWS Lambda." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q495",
    prompt: "Amazon Relational Database Service (Amazon RDS) offers which of the following benefits over traditional database management?",
    options: [
      { id: "a", text: "AWS manages the data stored in Amazon RDS tables." },
      { id: "b", text: "AWS manages the maintenance of the operating system." },
      { id: "c", text: "AWS automatically scales up instance types on demand." },
      { id: "d", text: "AWS manages the database type." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q496",
    prompt: "A company's web application currently has light dependencies on underlying components so when one component fails the entire web application fails. Applying which AWS Cloud design principle will address the current design issue?",
    options: [
      { id: "a", text: "Implementing elasticity enabling the application to scale up or scale down as demand changes." },
      { id: "b", text: "Enabling several EC2 instances to run in parallel to achieve better performance." },
      { id: "c", text: "Focusing on decoupling components by isolating them and ensuring individual components can function when other components." },
      { id: "d", text: "Doubling EC2 computing resources to increase system fault tolerance." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q497",
    prompt: "A customer would like to design and build a new workload on AWS Cloud but does not have the AWS-related software technical expertise in-house. Which of the following AWS programs can a customer take advantage of to achieve that outcome?",
    options: [
      { id: "a", text: "AWS Partner Network Technology Partners." },
      { id: "b", text: "AWS Marketplace." },
      { id: "c", text: "AWS Partner Network Consulting Partners." },
      { id: "d", text: "AWS Service Catalog." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q498",
    prompt: "Which service stores objects, provides real-time access to those objects, and offers versioning and lifecycle capabilities?",
    options: [
      { id: "a", text: "Amazon Glacier." },
      { id: "b", text: "AWS Storage Gateway." },
      { id: "c", text: "Amazon S3." },
      { id: "d", text: "Amazon EBS." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q499",
    prompt: "Distributing workloads across multiple Availability Zones supports which cloud architecture design principle?",
    options: [
      { id: "a", text: "Implement automation." },
      { id: "b", text: "Design for agility." },
      { id: "c", text: "Design for failure." },
      { id: "d", text: "Implement elasticity." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q500",
    prompt: "Which service should a customer use to consolidate and centrally manage multiple AWS accounts?",
    options: [
      { id: "a", text: "AWS IAM." },
      { id: "b", text: "AWS Organizations." },
      { id: "c", text: "AWS Schema Conversion Tool." },
      { id: "d", text: "AWS Config." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q501",
    prompt: "How can a company reduce its Total Cost of Ownership (TCO) using AWS?",
    options: [
      { id: "a", text: "By minimizing large capital expenditures." },
      { id: "b", text: "By having no responsibility for third-party license costs." },
      { id: "c", text: "By having no operational expenditures." },
      { id: "d", text: "By having AWS manage applications." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q502",
    prompt: "Which options does AWS make available for customers who want to learn about security in the cloud in an instructor-led setting? (Select TWO)",
    options: [
      { id: "a", text: "AWS Trusted Advisor." },
      { id: "b", text: "AWS Online Tech Talks." },
      { id: "c", text: "AWS Blog." },
      { id: "d", text: "AWS Forums." },
      { id: "e", text: "AWS Classroom Training." },
    ],
    correctOptionId: "b,e"
  },

  {
    id: "q503",
    prompt: "Which of the following will enhance the security of access to the AWS Management Console'? (Select TWO)",
    options: [
      { id: "a", text: "AWS Secrets Manager." },
      { id: "b", text: "AWS Certificate Manager." },
      { id: "c", text: "AWS Multi-Factor Authentication (AWS MFA)." },
      { id: "d", text: "Security groups." },
      { id: "e", text: "Password policies." },
    ],
    correctOptionId: "c,e"
  },

  {
    id: "q504",
    prompt: "Which of the following features can be configured through the Amazon Virtual Private Cloud (Amazon VPC) Dashboard? (Select TWO)",
    options: [
      { id: "a", text: "Amazon CloudFront distributions." },
      { id: "b", text: "Amazon Route 53." },
      { id: "c", text: "Security Groups." },
      { id: "d", text: "Subnets." },
      { id: "e", text: "Elastic Load Balancing." },
    ],
    correctOptionId: "c,d"
  },

  {
    id: "q505",
    prompt: "For which auditing process does AWS have sole responsibility?",
    options: [
      { id: "a", text: "AWS IAM policies." },
      { id: "b", text: "Physical security." },
      { id: "c", text: "Amazon S3 bucket policies." },
      { id: "d", text: "AWS CloudTrail Logs." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q506",
    prompt: "Which of the following are advantages of AWS consolidated billing? (Select TWO)",
    options: [
      { id: "a", text: "The ability to receive one bill for multiple accounts." },
      { id: "b", text: "Service limits increasing by default in all accounts." },
      { id: "c", text: "A fixed discount on the monthly bill." },
      { id: "d", text: "Potential volume discounts, as usage in all accounts is combined." },
      { id: "e", text: "The automatic extension of the master account's AWS support plan to all accounts." },
    ],
    correctOptionId: "a,d"
  },

  {
    id: "q507",
    prompt: "Which of the following common IT tasks can AWS cover to free up company IT resources? (Select TWO)",
    options: [
      { id: "a", text: "Patching databases software." },
      { id: "b", text: "Testing application releases." },
      { id: "c", text: "Backing up databases." },
      { id: "d", text: "Creating database schema." },
      { id: "e", text: "Running penetration tests." },
    ],
    correctOptionId: "a,c"
  },

  {
    id: "q508",
    prompt: "A company wants to expand from one AWS Region into a second AWS Region. What does the company need to do to start supporting the new Region?",
    options: [
      { id: "a", text: "Contact an AWS Account Manager to sign a new contract." },
      { id: "b", text: "Move an Availability Zone to the new Region." },
      { id: "c", text: "Begin deploying resources in the second Region." },
      { id: "d", text: "Download the AWS Management Console for the new Region." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q509",
    prompt: "Why is it beneficial to use Elastic Load Balancers with applications?",
    options: [
      { id: "a", text: "They allow for the conversion from Application Load." },
      { id: "b", text: "Balancers to Classic Load Balancers." },
      { id: "c", text: "They are capable of handling constant changes in network traffic patterns." },
      { id: "d", text: "They automatically adjust capacity. They are provided at no charge to users." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q510",
    prompt: "Which is the MINIMUM AWS Support plan that allows for one-hour target response time for support cases?",
    options: [
      { id: "a", text: "Enterprise." },
      { id: "b", text: "Business." },
      { id: "c", text: "Developer" },
      { id: "d", text: "Basic" },
    ],
    correctOptionId: "b"
  },

  {
    id: "q511",
    prompt: "What is the lowest-cost, durable storage option for retaining database backups for immediate retrieval?",
    options: [
      { id: "a", text: "Amazon S3." },
      { id: "b", text: "Amazon Glacier." },
      { id: "c", text: "Amazon EBS." },
      { id: "d", text: "Amazon EC2 Instance Store." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q512",
    prompt: "What AWS team assists customers with accelerating cloud adoption through paid engagements in any of several specialty practice areas?",
    options: [
      { id: "a", text: "AWS Enterprise Support." },
      { id: "b", text: "AWS Solutions Architects." },
      { id: "c", text: "AWS Professional Services." },
      { id: "d", text: "AWS Account Managers." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q513",
    prompt: "A company needs 24/7 phone email and chat access with a response time of less than 1 hour if a production system has a service interruption. Which AWS Support plan meets these requirements at the LOWEST cost?",
    options: [
      { id: "a", text: "Basic." },
      { id: "b", text: "Developer." },
      { id: "c", text: "Business." },
      { id: "d", text: "Enterprise." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q514",
    prompt: "If a customer needs to audit the change management of AWS resources, which of the following AWS services should the customer use?",
    options: [
      { id: "a", text: "AWS Config." },
      { id: "b", text: "AWS Trusted Advisor." },
      { id: "c", text: "Amazon CloudWatch." },
      { id: "d", text: "Amazon Inspector." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q515",
    prompt: "How does AWS Trusted Advisor provide guidance to users of the AWS Cloud? (Select TWO)",
    options: [
      { id: "a", text: "It identifies software vulnerabilities in applications running on AWS." },
      { id: "b", text: "It provides a list of cost optimization recommendations based on current AWS usage." },
      { id: "c", text: "It detects potential security vulnerabilities caused by permissions settings on account resources." },
      { id: "d", text: "It automatically corrects potential security issues caused by permissions settings on account resources." },
      { id: "e", text: "It provides proactive alerting whenever an Amazon EC2 instance has been compromised." },
    ],
    correctOptionId: "b,c"
  },

  {
    id: "q516",
    prompt: "Which AWS managed service is used to host databases?",
    options: [
      { id: "a", text: "AWS Batch." },
      { id: "b", text: "AWS Artifact." },
      { id: "c", text: "AWS Data Pipeline." },
      { id: "d", text: "Amazon RDS." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q517",
    prompt: "Which of the following Identity and Access Management (IAM) entities is associated with an access key ID and secret access key when using AWS Command Line Interface (AWS CLI)?",
    options: [
      { id: "a", text: "IAM group." },
      { id: "b", text: "IAM user." },
      { id: "c", text: "IAM role." },
      { id: "d", text: "IAM policy." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q518",
    prompt: "Under the shared responsibility model, which of the following is the customer responsible for?",
    options: [
      { id: "a", text: "Ensuring that disk drives are wiped after use." },
      { id: "b", text: "Ensuring that firmware is updated on hardware devices." },
      { id: "c", text: "Ensuring that data is encrypted at rest." },
      { id: "d", text: "Ensuring that network cables are category six or higher." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q519",
    prompt: "Which AWS service provides a simple and scalable shared file storage solution for use with Linux-based AWS and on-premises servers?",
    options: [
      { id: "a", text: "Amazon S3." },
      { id: "b", text: "Amazon Glacier." },
      { id: "c", text: "Amazon EBS." },
      { id: "d", text: "Amazon EFS." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q520",
    prompt: "What credential components are required to gain programmatic access to an AWS account? (Select TWO)",
    options: [
      { id: "a", text: "An access key ID." },
      { id: "b", text: "A primary key." },
      { id: "c", text: "A secret access key." },
      { id: "d", text: "A user ID." },
      { id: "e", text: "A secondary key." },
    ],
    correctOptionId: "a,c"
  },

  {
    id: "q521",
    prompt: "Which of the following is a shared control between the customer and AWS?",
    options: [
      { id: "a", text: "Providing a key for Amazon S3 client-side encryption." },
      { id: "b", text: "Configuration of an Amazon EC2 instance." },
      { id: "c", text: "Environmental controls of physical AWS data centers." },
      { id: "d", text: "Awareness." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q522",
    prompt: "Which type of AWS storage is ephemeral and is deleted when an instance is stopped Of terminated?",
    options: [
      { id: "a", text: "Amazon EBS." },
      { id: "b", text: "Amazon EC2 instance store." },
      { id: "c", text: "Amazon EFS." },
      { id: "d", text: "Amazon S3." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q523",
    prompt: "Which of the following is an advantage of consolidated billing on AWS?",
    options: [
      { id: "a", text: "Volume pricing qualification." },
      { id: "b", text: "Shared access permissions." },
      { id: "c", text: "Multiple bills per account." },
      { id: "d", text: "Eliminates the need for tagging." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q524",
    prompt: "Which services are parts of the AWS serverless platform?",
    options: [
      { id: "a", text: "Amazon EC2, Amazon S3, Amazon Athena." },
      { id: "b", text: "Amazon Kinesis, Amazon SQS, Amazon EMR." },
      { id: "c", text: "AWS Step Functions, Amazon DynamoDB, Amazon SNS." },
      { id: "d", text: "Amazon Athena, Amazon Cognito, Amazon EC2." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q525",
    prompt: "Which of the following Amazon EC2 pricing models allow customers to use existing server-bound software licenses?",
    options: [
      { id: "a", text: "Spot Instances." },
      { id: "b", text: "Reserved Instances." },
      { id: "c", text: "Dedicated Hosts." },
      { id: "d", text: "On-Demand Instances." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q526",
    prompt: "Which of the following security measures protect access to an AWS account? (Select TWO)",
    options: [
      { id: "a", text: "Enable AWS CloudTrail." },
      { id: "b", text: "Grant least privilege access to IAM users." },
      { id: "c", text: "Create one IAM user and share with many developers and users." },
      { id: "d", text: "Enable Amazon CloudFront." },
      { id: "e", text: "Activate multi-factor authentication (MFA) for privileged users." },
    ],
    correctOptionId: "b,e"
  },

  {
    id: "q527",
    prompt: "Which AWS service provides the ability to manage infrastructure as code?",
    options: [
      { id: "a", text: "AWS CodePipeline." },
      { id: "b", text: "AWS CodeDeploy." },
      { id: "c", text: "AWS Direct Connect." },
      { id: "d", text: "AWS CloudFormation." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q528",
    prompt: "What is an advantage of deploying an application across multiple Availability Zones?",
    options: [
      { id: "a", text: "There is a lower risk of service failure if a natural disaster causes a service disruption in a given AWS Region." },
      { id: "b", text: "The application will have higher availability because it can withstand a service disruption in one Availability Zone." },
      { id: "c", text: "There will be better coverage as Availability Zones are geographical^ distant and can serve a wider area." },
      { id: "d", text: "There will be decreased application latency that will improve the user experience." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q529",
    prompt: "A customer needs to run a MySQL database that easily scales. Which AWS service should they use?",
    options: [
      { id: "a", text: "Amazon Aurora." },
      { id: "b", text: "Amazon Redshift." },
      { id: "c", text: "Amazon DynamoDB." },
      { id: "d", text: "Amazon ElastiCache." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q530",
    prompt: "Which of the following is an AWS Cloud architecture design principle?",
    options: [
      { id: "a", text: "Implement single points of failure." },
      { id: "b", text: "Implement loose coupling." },
      { id: "c", text: "Implement monolithic design." },
      { id: "d", text: "Implement vertical scaling." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q531",
    prompt: "AWS Enterprise Support users have access to which service or feature that is not available to users with other AWS Support plans?",
    options: [
      { id: "a", text: "AWS Trusted Advisor." },
      { id: "b", text: "AWS Support case." },
      { id: "c", text: "Concierge team." },
      { id: "d", text: "Amazon Connect." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q532",
    prompt: "A company will be moving from an on-premises data center to the AWS Cloud. What would be one financial difference after the move?",
    options: [
      { id: "a", text: "Moving from variable operational expense ( opex ) to upfront capital expense (capex)." },
      { id: "b", text: "Moving from upfront capital expense (capex) to variable capital expense (capex)." },
      { id: "c", text: "Moving from upfront capital expense (capex) to variable operational expense ( opex )." },
      { id: "d", text: "Elimination of upfront capital expense (capex) and elimination of variable operational expense ( opex )." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q533",
    prompt: "When performing a cost analysis that supports physical isolation of a customer workload, which compute hosting model should be accounted for in the Total Cost of Ownership (TCO)?",
    options: [
      { id: "a", text: "Dedicated Hosts" },
      { id: "b", text: "Reserved Instances" },
      { id: "c", text: "On-Demand Instances" },
      { id: "d", text: "No Upfront Reserved Instances" },
    ],
    correctOptionId: "a"
  },

  {
    id: "q534",
    prompt: "Which AWS service should be used for long-term, low-cost storage of data backups?",
    options: [
      { id: "a", text: "Amazon RDS." },
      { id: "b", text: "Amazon Glacier." },
      { id: "c", text: "AWS Snowball." },
      { id: "d", text: "AWS EBS." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q535",
    prompt: "Which is the MINIMUM AWS Support plan that provides technical support through phone calls?",
    options: [
      { id: "a", text: "Enterprise." },
      { id: "b", text: "Business." },
      { id: "c", text: "Developer." },
      { id: "d", text: "Basic." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q536",
    prompt: "Which Amazon EC2 instance pricing model can provide discounts of up to 90%?",
    options: [
      { id: "a", text: "Reserved Instances." },
      { id: "b", text: "On-Demand." },
      { id: "c", text: "Dedicated Hosts." },
      { id: "d", text: "Spot Instances." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q537",
    prompt: "Which of the following AWS services can be used to serve large amounts of online video content with the lowest possible latency? (Select TWO)",
    options: [
      { id: "a", text: "appGateway." },
      { id: "b", text: "Amazon S3." },
      { id: "c", text: "Amazon Elastic File System (EFS)." },
      { id: "d", text: "Amazon Glacier." },
      { id: "e", text: "Amazom CloudFront." },
    ],
    correctOptionId: "b,e"
  },

  {
    id: "q538",
    prompt: "What can AWS edge locations be used for? (Select TWO)",
    options: [
      { id: "a", text: "Hosting applications." },
      { id: "b", text: "Delivering content closer to users." },
      { id: "c", text: "Running NoSQL database caching services." },
      { id: "d", text: "Reducing traffic on the server by caching responses." },
      { id: "e", text: "Sending notification messages to end users." },
    ],
    correctOptionId: "b,d"
  },

  {
    id: "q539",
    prompt: "A company is planning to migrate from on-premises to the AWS Cloud. When AWS tool or service provides detailed reports on estimated cost savings after migration?",
    options: [
      { id: "a", text: "AWS Total Cost of Ownership (TCO) Calculator." },
      { id: "b", text: "Cost Explorer." },
      { id: "c", text: "AWS Budgets." },
      { id: "d", text: "AWS Migration Hub." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q540",
    prompt: "Which AWS service provides a customized view of the health of specific AWS services that power a customer's workloads running on AWS?",
    options: [
      { id: "a", text: "AWS Service Health Dashboard." },
      { id: "b", text: "AWS X-Ray." },
      { id: "c", text: "AWS Personal Health Dashboard." },
      { id: "d", text: "Amazon CloudWatch." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q541",
    prompt: "One of the advantages to moving infrastructure from an on-premises data center to the AWS Cloud is:",
    options: [
      { id: "a", text: "It allows the business to eliminate IT bills." },
      { id: "b", text: "It allows the business to put a server in each customer's data center." },
      { id: "c", text: "It allows the business to focus on business activities." },
      { id: "d", text: "It allows the business to leave servers unpatched." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q542",
    prompt: "How can an AWS user with an AWS Basic Support plan obtain technical assistance from AWS?",
    options: [
      { id: "a", text: "AWS Senior Support Engineers." },
      { id: "b", text: "AWS Technical Account Managers." },
      { id: "c", text: "AWS Trusted Advisor." },
      { id: "d", text: "AWS Discussion Forums." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q543",
    prompt: "How can a user protect against AWS service disruptions if a natural disaster affects an entire geographic area?",
    options: [
      { id: "a", text: "Deploy applications across multiple Availability Zones within an AWS Region." },
      { id: "b", text: "Use a hybrid cloud computing deployment model within the geographic area." },
      { id: "c", text: "Deploy applications across multiple AWS Regions." },
      { id: "d", text: "Store application artifacts using AWS Artifact and replicate them across multiple AWS Regions." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q544",
    prompt: "Which activity is a customer responsibility in the AWS Cloud according to the AWS shared responsibility model?",
    options: [
      { id: "a", text: "Ensuring network connectivity from AWS to the internet." },
      { id: "b", text: "Patching and fixing flaws within the AWS Cloud infrastructure." },
      { id: "c", text: "Ensuring the physical security of cloud data centers." },
      { id: "d", text: "Ensuring Amazon EBS volumes are backed up." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q545",
    prompt: "In which scenario should Amazon EC2 Spot Instances be used?",
    options: [
      { id: "a", text: "A company wants to move its main website to AWS from an on-premises web server." },
      { id: "b", text: "A company has a number of application services whose Service Level Agreement (SLA) requires 99.999% uptime." },
      { id: "c", text: "A company's heavily used legacy database is currently running on-premises." },
      { id: "d", text: "A company has a number of infrequent, interruptible jobs that are currently using On-Demand Instances." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q546",
    prompt: "A customer is deploying a new application and needs to choose an AWS Region. Which of the following factors could influence the customer's decision? (Select TWO)",
    options: [
      { id: "a", text: "Reduced latency to users." },
      { id: "b", text: "The application's presentation in the local language." },
      { id: "c", text: "Data sovereignty compliance." },
      { id: "d", text: "Cooling costs in hotter climates." },
      { id: "e", text: "Proximity to the customer's office for on-site visits." },
    ],
    correctOptionId: "a,c"
  },

  {
    id: "q547",
    prompt: "Which AWS service provides alerts when an AWS event may impact a company's AWS resources?",
    options: [
      { id: "a", text: "AWS Personal Health Dashboard." },
      { id: "b", text: "AWS Service Health Dashboard." },
      { id: "c", text: "AWS Trusted Advisor." },
      { id: "d", text: "AWS Infrastructure Event Management." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q548",
    prompt: "Which disaster recovery scenario offers the lowest probability of down time?",
    options: [
      { id: "a", text: "Backup and restore." },
      { id: "b", text: "Pilot light." },
      { id: "c", text: "Warm standby." },
      { id: "d", text: "Multi-site active-active." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q549",
    prompt: "Which service's PRIMARY purpose is software version control?",
    options: [
      { id: "a", text: "Amazon CodeStar." },
      { id: "b", text: "AWS Command Line Interface (AWS CLI)." },
      { id: "c", text: "Amazon Cognito." },
      { id: "d", text: "AWS CodeCommit." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q550",
    prompt: "How can a customer increase security to AWS account logons? (Select TWO)",
    options: [
      { id: "a", text: "Configure AWS Certificate Manager" },
      { id: "b", text: "Enable Multi-Factor Authentication (MFA)" },
      { id: "c", text: "Use Amazon Cognito to manage access" },
      { id: "d", text: "Configure a strong password policy" },
      { id: "e", text: "Enable AWS Organizations" },
    ],
    correctOptionId: "b,d"
  },

  {
    id: "q551",
    prompt: "Which of the following components of the AWS Global Infrastructure consists of one or more discrete data centers interconnected through low latency links?",
    options: [
      { id: "a", text: "Availability Zone" },
      { id: "b", text: "Edge location" },
      { id: "c", text: "Region" },
      { id: "d", text: "Private networking" },
    ],
    correctOptionId: "a"
  },

  {
    id: "q552",
    prompt: "One benefit of On-Demand Amazon Elastic Compute Cloud (Amazon EC2) pricing is:",
    options: [
      { id: "a", text: "The ability to bid for a lower hourly cost." },
      { id: "b", text: "Paying a daily rate regardless of time used." },
      { id: "c", text: "Paying only for time used." },
      { id: "d", text: "Pre-paying for instances and paying a lower hourly rate." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q553",
    prompt: "What can assist in evaluating an application for migration to the cloud? (Select TWO)",
    options: [
      { id: "a", text: "AWS Trusted Advisor." },
      { id: "b", text: "AWS Professional Services." },
      { id: "c", text: "AWS Systems Manager." },
      { id: "d", text: "AWS Partner Network (APN)." },
      { id: "e", text: "AWS Secrets Manager." },
    ],
    correctOptionId: "b,d"
  },

  {
    id: "q554",
    prompt: "A characteristic of edge locations is that they:",
    options: [
      { id: "a", text: "Host Amazon EC2 instances closer to users." },
      { id: "b", text: "Help lower latency and improve performance for users." },
      { id: "c", text: "Cache frequently changing data without reaching the origin server." },
      { id: "d", text: "Refresh data changes daily." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q555",
    prompt: "Which of the following are valid ways for a customer to interact with AWS services? (Select TWO)",
    options: [
      { id: "a", text: "Command line interface." },
      { id: "b", text: "On-premises." },
      { id: "c", text: "Software Development Kits." },
      { id: "d", text: "Software-as-a-service." },
      { id: "e", text: "Hybrid." },
    ],
    correctOptionId: "a,c"
  },

  {
    id: "q556",
    prompt: "What is a value proposition of the AWS Cloud?",
    options: [
      { id: "a", text: "AWS is responsible for security in the AWS Cloud." },
      { id: "b", text: "No long-term contract is required." },
      { id: "c", text: "Provision new servers in days." },
      { id: "d", text: "AWS manages user applications in the AWS Cloud." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q557",
    prompt: "A company is migrating an application that is running non-interruptible workloads for a three-year time frame. Which pricing construct would provide the MOST cost-effective solution?",
    options: [
      { id: "a", text: "Amazon EC2 Spot Instances." },
      { id: "b", text: "Amazon EC2 Dedicated Instances." },
      { id: "c", text: "Amazon EC2 On-Demand Instances." },
      { id: "d", text: "Amazon EC2 Reserved Instances." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q558",
    prompt: "Which AWS service is used to track record, and audit configuration changes made to AWS resources?",
    options: [
      { id: "a", text: "AWS Shield." },
      { id: "b", text: "AWS Config." },
      { id: "c", text: "AWS IAM." },
      { id: "d", text: "Amazon Inspector." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q559",
    prompt: "Which feature of the AWS Cloud will support an international company's requirement for low latency to all of its customers?",
    options: [
      { id: "a", text: "Fault tolerance." },
      { id: "b", text: "Global reach." },
      { id: "c", text: "Pay-as-you-go pricing." },
      { id: "d", text: "High availability." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q560",
    prompt: "How can one AWS account use Reserved Instances from another AWS account?",
    options: [
      { id: "a", text: "By using Amazon EC2 Dedicated Instances." },
      { id: "b", text: "By using AWS Organizations consolidated billing." },
      { id: "c", text: "By using the AWS Cost Explorer tool." },
      { id: "d", text: "By using AWS Budgets." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q561",
    prompt: "What are the benefits of developing and running a new application in the AWS Cloud compared to on-premises? (Select TWO)",
    options: [
      { id: "a", text: "AWS automatically distributes the data globally for higher durability." },
      { id: "b", text: "AWS will take care of operating the application." },
      { id: "c", text: "AWS makes it easy to architect for high availability." },
      { id: "d", text: "AWS can easily accommodate application demand changes." },
      { id: "e", text: "AWS takes care of application security patching." },
    ],
    correctOptionId: "c,d"
  },

  {
    id: "q562",
    prompt: "Which of the following services falls under the responsibility of the customer to maintain operating system configuration, security patching, and networking?",
    options: [
      { id: "a", text: "Amazon RDS." },
      { id: "b", text: "Amazon EC2." },
      { id: "c", text: "Amazon ElastiCache." },
      { id: "d", text: "AWS Fargate." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q563",
    prompt: "AWS supports which of the following methods to add security to Identity and Access Management (IAM) users? (Select TWO)",
    options: [
      { id: "a", text: "Implementing Amazon Rekognition." },
      { id: "b", text: "Using AWS Shield-protected resources." },
      { id: "c", text: "Blocking access with Security Groups." },
      { id: "d", text: "Using Multi-Factor Authentication (MFA)." },
      { id: "e", text: "Enforcing password strength and expiration." },
    ],
    correctOptionId: "d,e"
  },

  {
    id: "q564",
    prompt: "Which service provides a hybrid storage service that enables on-premises applications to seamlessly use cloud storage?",
    options: [
      { id: "a", text: "Amazon Glacier" },
      { id: "b", text: "AWS Snowball" },
      { id: "c", text: "AWS Storage Gateway" },
      { id: "d", text: "Amazon Elastic Block Storage (Amazon EBS)" },
    ],
    correctOptionId: "c"
  },

  {
    id: "q565",
    prompt: "Where should a company go to search software listings from independent software vendors to find, test, buy and deploy software that runs on AWS?",
    options: [
      { id: "a", text: "AWS Marketplace." },
      { id: "b", text: "Amazon Lumberyard." },
      { id: "c", text: "AWS Artifact." },
      { id: "d", text: "Amazon CloudSearch." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q566",
    prompt: "Which of the following is a component of the AWS Global Infrastructure?",
    options: [
      { id: "a", text: "Amazon Alexa." },
      { id: "b", text: "AWS Regions." },
      { id: "c", text: "Amazon Lightsail." },
      { id: "d", text: "AWS Organizations." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q567",
    prompt: "Which Amazon EC2 pricing model adjusts based on supply and demand of EC2 instances?",
    options: [
      { id: "a", text: "On-Demand Instances." },
      { id: "b", text: "Reserved Instances." },
      { id: "c", text: "Spot Instances." },
      { id: "d", text: "Convertible Reserved Instances." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q568",
    prompt: "A company wants to migrate its applications to a VPC on AWS. These applications will need to access on-premises resources. What combination of actions will enable the company to accomplish this goals? (Select TWO)",
    options: [
      { id: "a", text: "Use the AWS Service Catalog to identify a list of on-premises resources that can be migrated." },
      { id: "b", text: "Build a VPN connection between an on-premises device and a virtual private gateway in the new VPC." },
      { id: "c", text: "Use Amazon Athena to query data from the on-premises database servers." },
      { id: "d", text: "Connect the company's on-premises data center to AWS using AWS Direct Connect." },
      { id: "e", text: "Leverage Amazon CloudFront to restrict access to static web content provided through the company's on-premises web servers." },
    ],
    correctOptionId: "b,d"
  },

  {
    id: "q569",
    prompt: "A Cloud Practitioner must determine if any security groups in an AWS account have been provisioned to allow unrestricted access for specific ports. What is the SIMPLEST way to do this?",
    options: [
      { id: "a", text: "Review the inbound rules for each security group in the Amazon EC2 management console to check for port 0.0.0.0/0." },
      { id: "b", text: "Run AWS Trusted Advisor and review the findings." },
      { id: "c", text: "Open the AWS IAM console and check the inbound rule filters for open access." },
      { id: "d", text: "In AWS Config, create a custom rule that invokes an AWS Lambda function to review firewall rules for inbound access." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q570",
    prompt: "Which of the following security-related services does AWS offer? (Select TWO)",
    options: [
      { id: "a", text: "Multi-factor authentication physical tokens." },
      { id: "b", text: "AWS Trusted Advisor security checks." },
      { id: "c", text: "Data encryption." },
      { id: "d", text: "Automated penetration testing." },
      { id: "e", text: "Amazon S3 copyrighted content detection." },
    ],
    correctOptionId: "b,c"
  },

  {
    id: "q571",
    prompt: "Which of the following services have Distributed Denial of Service (DDoS) mitigation features? (Select TWO)",
    options: [
      { id: "a", text: "AWS WAF." },
      { id: "b", text: "Amazon DynamoDB." },
      { id: "c", text: "Amazon EC2." },
      { id: "d", text: "Amazon CloudFront." },
      { id: "e", text: "Amazon Inspector." },
    ],
    correctOptionId: "a,d"
  },

  {
    id: "q572",
    prompt: "Which of the following AWS features enables a user to launch a pre-configured Amazon Elastic Compute Cloud (Amazon EC2) instance?",
    options: [
      { id: "a", text: "Amazon Elastic Block Store (Amazon EBS)." },
      { id: "b", text: "Amazon Machine Image." },
      { id: "c", text: "Amazon EC2 Systems Manager." },
      { id: "d", text: "Amazon AppStream 2.0." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q573",
    prompt: "A solution that is able to support growth in users, traffic, or data size with no drop in performance aligns with which cloud architecture principle?",
    options: [
      { id: "a", text: "Think parallel." },
      { id: "b", text: "Implement elasticity." },
      { id: "c", text: "Decouple your components." },
      { id: "d", text: "Design for failure." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q574",
    prompt: "Which AWS Cloud benefit eliminates the need for users to try estimating future infrastructure usage?",
    options: [
      { id: "a", text: "Easy and fast deployment of applications in multiple Regions around the world." },
      { id: "b", text: "Security of the AWS Cloud." },
      { id: "c", text: "Elasticity of the AWS Cloud." },
      { id: "d", text: "Lower variable costs due to massive economies of scale." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q575",
    prompt: "What can users access from AWS Artifact?",
    options: [
      { id: "a", text: "AWS security and compliance documents." },
      { id: "b", text: "A download of configuration management details for all AWS resources." },
      { id: "c", text: "Training materials for AWS services." },
      { id: "d", text: "A security assessment of the applications deployed in the AWS Cloud." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q576",
    prompt: "Compared with costs in traditional and virtualized data centers, AWS has:",
    options: [
      { id: "a", text: "Greater variable costs and greater upfront costs." },
      { id: "b", text: "Fixed usage costs and lower upfront costs." },
      { id: "c", text: "Lower variable costs and greater upfront costs." },
      { id: "d", text: "Lower variable costs and lower upfront costs." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q577",
    prompt: "Which AWS service would a customer use with a static website to achieve tower latency and high transfer speeds?",
    options: [
      { id: "a", text: "AWS Lambda." },
      { id: "b", text: "Amazon DynamoDB Accelerator." },
      { id: "c", text: "Amazon Route 53." },
      { id: "d", text: "Amazon CloudFront." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q578",
    prompt: "How do Amazon EC2 Auto Scaling groups help achieve high availability for a web application?",
    options: [
      { id: "a", text: "They automatically add more instances across multiple AWS Regions based on global demand of the application." },
      { id: "b", text: "They automatically add or replace instances across multiple Availability Zones when the application needs it." },
      { id: "c", text: "They enable the application's stalk: content to reside closer to end users." },
      { id: "d", text: "They are able to distribute incoming requests across a tier of web server instances." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q579",
    prompt: "Which of the following can limit Amazon Simple Storage Service (Amazon S3) bucket access to specific users?",
    options: [
      { id: "a", text: "A public and private key-pair." },
      { id: "b", text: "Amazon Inspector." },
      { id: "c", text: "AWS Identity and Access Management (IAM) policies." },
      { id: "d", text: "Security Groups." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q580",
    prompt: "How should a customer forecast the future costs for running a new web application?",
    options: [
      { id: "a", text: "Amazon Aurora Backtrack." },
      { id: "b", text: "Amazon CloudWatch Billing Alarms." },
      { id: "c", text: "AWS Simple Monthly Calculator." },
      { id: "d", text: "AWS Cost and Usage report." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q581",
    prompt: "Where are AWS compliance documents, such as an SOC 1 report, located?",
    options: [
      { id: "a", text: "Amazon Inspector." },
      { id: "b", text: "AWS CloudTrail." },
      { id: "c", text: "AWS Artifact." },
      { id: "d", text: "AWS Certificate Manager." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q582",
    prompt: "Which of the following tasks is the responsibility of AWS?",
    options: [
      { id: "a", text: "Encrypting client-side data." },
      { id: "b", text: "Configuring AWS Identity and Access Management (IAM) roles." },
      { id: "c", text: "Securing the Amazon EC2 hypervisor." },
      { id: "d", text: "Setting user password policies." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q583",
    prompt: "Under the shared responsibility model which of the following areas are the customer's responsibility? (Select TWO)",
    options: [
      { id: "a", text: "Firmware upgrades of network infrastructure." },
      { id: "b", text: "Patching of operating systems." },
      { id: "c", text: "Patching of the underlying hypervisor." },
      { id: "d", text: "Physical security of data centers." },
      { id: "e", text: "Configuration of the security group." },
    ],
    correctOptionId: "b,e"
  },

  {
    id: "q584",
    prompt: "A company is looking for a scalable data warehouse solution. Which of the following AWS solutions would meet the company's needs?",
    options: [
      { id: "a", text: "Amazon Simple Storage Service (Amazon S3)." },
      { id: "b", text: "Amazon DynamoDB." },
      { id: "c", text: "Amazon Kinesis." },
      { id: "d", text: "Amazon Redshift." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q585",
    prompt: "A company plans to use an Amazon Snowball Edge device to transfer files to the AWS Cloud. Which activities related to a Snowball Edge device are available to the company at no cost?",
    options: [
      { id: "a", text: "Use of the Snowball Edge appliance for a 10-day period." },
      { id: "b", text: "The transfer of data out of Amazon S3 and to the Snowball Edge appliance." },
      { id: "c", text: "The transfer of data from the Snowball Edge appliance into Amazon S3." },
      { id: "d", text: "Daily use of the Snowball Edge appliance after 10 days." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q586",
    prompt: "What are the advantages of the AWS Cloud? (Select TWO)",
    options: [
      { id: "a", text: "Fixed rate monthly cost." },
      { id: "b", text: "No need to guess capacity requirements." },
      { id: "c", text: "Increased speed to market." },
      { id: "d", text: "Increased upfront capital expenditure." },
      { id: "e", text: "Physical access to cloud data centers." },
    ],
    correctOptionId: "b,c"
  },

  {
    id: "q587",
    prompt: "How can the AWS Cloud increase user workforce productivity after migration from an on-premises data center?",
    options: [
      { id: "a", text: "Users do not have to wait for infrastructure provisioning." },
      { id: "b", text: "The AWS Cloud infrastructure is much faster than an on-premises data center infrastructure." },
      { id: "c", text: "AWS takes over application configuration management on behalf of users." },
      { id: "d", text: "Users do not need to address security and compliance issues." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q588",
    prompt: "Which of the following services could be used to deploy an application to servers running on-premises? (Select TWO)",
    options: [
      { id: "a", text: "AWS Elastic Beanstalk." },
      { id: "b", text: "AWS OpsWorks." },
      { id: "c", text: "AWS CodeDeploy." },
      { id: "d", text: "AWS Batch." },
      { id: "e", text: "AWS X-Ray." },
    ],
    correctOptionId: "b,c"
  },

  {
    id: "q589",
    prompt: "What is an example of agility in the AWS Cloud?",
    options: [
      { id: "a", text: "Access to multiple instance types." },
      { id: "b", text: "Access to managed services." },
      { id: "c", text: "Using Consolidated Billing to produce one bill." },
      { id: "d", text: "Decreased acquisition time for new compute resources." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q590",
    prompt: "Which AWS security service protects applications from distributed denial of service attacks with always-on detection and automatic inline mitigations?",
    options: [
      { id: "a", text: "Amazon Inspector." },
      { id: "b", text: "AWS Web Application Firewall (AWS WAF)." },
      { id: "c", text: "Elastic Load Balancing (ELB)." },
      { id: "d", text: "AWS Shield." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q591",
    prompt: "Which of the following are advantages of AWS consolidated billing? (Choose two)",
    options: [
      { id: "a", text: "The ability to receive one bill for multiple accounts." },
      { id: "b", text: "Service limits increasing by default in all accounts." },
      { id: "c", text: "A fixed discount on the monthly bill." },
      { id: "d", text: "Potential volume discounts, as usage in all accounts is combined." },
      { id: "e", text: "The automatic extension of the master account's AWS support plan to all accounts." },
    ],
    correctOptionId: "a,d"
  },

  {
    id: "q592",
    prompt: "A company is considering using AWS for a self-hosted database that requires a nightly shutdown for maintenance and cost-saving purposes. Which service should the company use?",
    options: [
      { id: "a", text: "Amazon Redshift." },
      { id: "b", text: "Amazon DynamoDB." },
      { id: "c", text: "Amazon Elastic Compute Cloud (Amazon EC2) with Amazon EC2 instance store." },
      { id: "d", text: "Amazon EC2 with Amazon Elastic Block Store (Amazon EBS)." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q593",
    prompt: "Which type of mirroring does SPAN technology perform?",
    options: [
      { id: "a", text: "Remote mirroring over Layer 2." },
      { id: "b", text: "Remote mirroring over Layer 3." },
      { id: "c", text: "Local mirroring over Layer 2." },
      { id: "d", text: "Local mirroring over Layer 3." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q594",
    prompt: "Your customer wants to grant restricted proxy rights to their HR Department to act on behalf of employees belonging to their legal entity. How can you perform this requirement? There are 2 correct answers to this question.",
    options: [
      { id: "a", text: "Use the Manage Permission Roles tool to grant proxy rights to the HR Department." },
      { id: "b", text: "Fill the PROXY column of the Basic Import template to match the requirements and import the file using the Import Employee Data tool." },
      { id: "c", text: "Use the Proxy Management tool to configure the requested proxy assignments." },
      { id: "d", text: "Fill the Basic Import template with the requested proxy configuration and import the file using the Import and Export Data tool." },
    ],
    correctOptionId: "b,c"
  },

  {
    id: "q595",
    prompt: "Which two statements about configuring a traffic monitoring session are true? (Choose two)",
    options: [
      { id: "a", text: "You can set a local VM as a traffic destination." },
      { id: "b", text: "You can have up to two active monitoring sessions simultaneously." },
      { id: "c", text: "An unlimited number of monitoring session can be stored." },
      { id: "d", text: "A newly created monitoring session is enabled by default." },
      { id: "e", text: "A destination port can also be a source port within the same session." },
      { id: "f", text: "A vHBA can be a source for either an Ethernet or Fibre Channel monitoring session, but not both." },
    ],
    correctOptionId: "b,f"
  },

  {
    id: "q596",
    prompt: "What are the advantages of the AWS Cloud? (Select TWO)",
    options: [
      { id: "a", text: "AWS management of user-owned infrastructure." },
      { id: "b", text: "Ability to quickly change required capacity." },
      { id: "c", text: "High economies of scale." },
      { id: "d", text: "Increased deployment time to market." },
      { id: "e", text: "Increased fixed expenses." },
    ],
    correctOptionId: "b,c"
  },

  {
    id: "q597",
    prompt: "A company wants to migrate its applications from its on-premises data center to a VPC in the AWS Cloud. These applications will need to access on-premises resources. Which actions will meet these requirements? (Choose TWO)",
    options: [
      { id: "a", text: "Use AWS Service Catalog to identify a list of on-premises resources that can be migrated." },
      { id: "b", text: "Create a VPN connection between an on-premises device and a virtual private gateway in the VPC." },
      { id: "c", text: "Use an Amazon CloudFront distribution and configure it to accelerate content delivery close to the on-premises resources." },
      { id: "d", text: "Set up an AWS Direct Connect connection between the on-premises data center and AWS." },
      { id: "e", text: "Use Amazon CloudFront to restrict access to static web content provided through the on-premises web servers." },
    ],
    correctOptionId: "b,d"
  },

];
