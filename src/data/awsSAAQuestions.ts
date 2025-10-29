import type { Question } from "../types/quiz";

export const awsSAAQuestions: Question[] = [
  {
    id: "q1",
    prompt:
      "Which set of Amazon S3 features helps to prevent and recover from accidental data loss?",
    options: [
      { id: "a", text: "Object lifecycle and service access logging." },
      { id: "b", text: "Object versioning and Multi-factor authentication." },
      { id: "c", text: "Access controls and server-side encryption." },
      { id: "d", text: "Website hosting and Amazon S3 policies." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q2",
    prompt:
      "What is the minimum time Interval for the data that Amazon CloudWatch receives and aggregates?",
    options: [
      { id: "a", text: "One second." },
      { id: "b", text: "Five seconds." },
      { id: "c", text: "One minute." },
      { id: "d", text: "Three minutes." },
      { id: "e", text: "Five minutes." },
    ],
    correctOptionId: "c",
  },

  {
    id: "q3",
    prompt:
      "A user has launched an EC2 instance. The instance got terminated as soon as it was launched. Which of the below mentioned options is not a possible reason for this?",
    options: [
      {
        id: "a",
        text: "The user account has reached the maximum volume limit.",
      },
      { id: "b", text: "The AMI is missing. It is the required part." },
      { id: "c", text: "The snapshot is corrupt." },
      {
        id: "d",
        text: "The user account has reached the maximum EC2 instance limit.",
      },
    ],
    correctOptionId: "d",
  },

  {
    id: "q4",
    prompt:
      "Your website is serving on-demand training videos to your workforce. Videos are uploaded monthly in high resolution MP4 format. Your workforce is distributed globally often on the move and using company-provided tablets that require the HTTP Live Streaming (HLS) protocol to watch a video. Your company has no video transcoding expertise and it required you may need to pay for a consultant. How do you implement the most cost-efficient architecture without compromising high availability and quality of video delivery'?",
    options: [
      {
        id: "a",
        text: "A video transcoding pipeline running on EC2 using SQS to distribute tasks and Auto Scaling to adjust the number of nodes depending on the length of the queue. EBS volumes to host videos and EBS snapshots to incrementally backup original files after a few days. CloudFront to serve HLS transcoded videos from EC2.",
      },
      {
        id: "b",
        text: "Elastic Transcoder to transcode original high-resolution MP4 videos to HLS. EBS volumes to host videos and EBS snapshots to incrementally backup original files after a few days. CloudFront to serve HLS transcoded videos from EC2.",
      },
      {
        id: "c",
        text: "Elastic Transcoder to transcode original high-resolution MP4 videos to HLS. S3 to host videos with Lifecycle Management to archive original files to Glacier after a few days. CloudFront to serve HLS transcoded videos from S3.",
      },
      {
        id: "d",
        text: "A video transcoding pipeline running on EC2 using SQS to distribute tasks and Auto Scaling to adjust the number of nodes depending on the length of the queue. S3 to host videos with Lifecycle Management to archive all files to Glacier after a few days. CloudFront to serve HLS transcoded videos from Glacier.",
      },
    ],
    correctOptionId: "c",
  },

  {
    id: "q5",
    prompt:
      "You are designing an intrusion detection prevention (IDS/IPS) solution for a customer web application in a single VPC. You are considering the options for implementing IOS IPS protection for traffic coming from the Internet. Which of the following options would you consider? (Choose 2 answers)",
    options: [
      {
        id: "a",
        text: "Implement IDS/IPS agents on each Instance running in VPC.",
      },
      {
        id: "b",
        text: "Configure an instance in each subnet to switch its network interface card to promiscuous mode and analyze network traffic.",
      },
      {
        id: "c",
        text: "Implement Elastic Load Balancing with SSL listeners in front of the web applications.",
      },
      {
        id: "d",
        text: "Implement a reverse proxy layer in front of web servers and configure IDS/ IPS agents on each reverse proxy server.",
      },
    ],
    correctOptionId: "a,d",
  },

  {
    id: "q6",
    prompt:
      "Which of the following are valid statements about Amazon S3? (Choose 2 answers)",
    options: [
      {
        id: "a",
        text: "Amazon S3 provides read-after-write consistency for any type of PUT or DELETE.",
      },
      {
        id: "b",
        text: "Consistency is not guaranteed for any type of PUT or DELETE.",
      },
      {
        id: "c",
        text: "A successful response to a PUT request only occurs when a complete object is saved.",
      },
      {
        id: "d",
        text: "Partially saved objects are immediately readable with a GET after an overwrite PU.",
      },
      {
        id: "e",
        text: "S3 provides eventual consistency for overwrite PUTS and DELETE.",
      },
    ],
    correctOptionId: "c,e",
  },

  {
    id: "q7",
    prompt:
      "How can the domain's zone apex, for example, 'myzoneapexdomain.com', be pointed towards an Elastic Load Balancer?",
    options: [
      { id: "a", text: "By using an Amazon Route 53 Alias record." },
      { id: "b", text: "By using an AAAA record." },
      { id: "c", text: "By using an Amazon Route 53 CNAME record." },
      { id: "d", text: "By using an A record." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q8",
    prompt: "When should I choose Provisioned IOPS over Standard RDS storage?",
    options: [
      { id: "a", text: "If you have batch-oriented workloads." },
      {
        id: "b",
        text: "If you use production online transaction processing (OLTP) workloads.",
      },
      {
        id: "c",
        text: "If you have workloads that are not sensitive to consistent performance.",
      },
    ],
    correctOptionId: "b",
  },

  {
    id: "q9",
    prompt:
      "Your department creates regular analytics reports from your company's log files All log data is collected in Amazon S3 and processed by daily Amazon Elastic MapReduce (EMR) jobs that generate daily PDF reports and aggregated tables in CSV format for an Amazon Redshift data warehouse. Which of the following alternatives will lower costs without compromising average performance of the system or data integrity for the raw data?",
    options: [
      {
        id: "a",
        text: "Use reduced redundancy storage (RRS) for all data in S3. Use a combination of Spot Instances and Reserved Instances for Amazon EMR jobs. Use Reserved Instances for Amazon Redshift.",
      },
      {
        id: "b",
        text: "Use reduced redundancy storage (RRS) for PDF and .csv data in S3. Add Spot Instances to EMR jobs. Use Spot Instances for Amazon Redshift.",
      },
      {
        id: "c",
        text: "Use reduced redundancy storage (RRS) for PDF and .csv data in Amazon S3. Add Spot Instances to Amazon EMR jobs. Use Reserved Instances for Amazon Redshift.",
      },
      {
        id: "d",
        text: "Use reduced redundancy storage (RRS) for all data in Amazon S3. Add Spot Instances to Amazon EMR jobs. Use Reserved Instances for Amazon Redshift.",
      },
    ],
    correctOptionId: "c",
  },

  {
    id: "q10",
    prompt:
      "Because of the extensibility limitations of striped storage attached to Windows Server, Amazon RDS does not currently support increasing storage on a [...] DB Instance.",
    options: [
      { id: "a", text: "SQL Server." },
      { id: "b", text: "MySQL." },
      { id: "c", text: "Oracle." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q11",
    prompt:
      "In regards to IAM you can edit user properties later, but you cannot use the console to change the [...].",
    options: [
      { id: "a", text: "user name." },
      { id: "b", text: "password." },
      { id: "c", text: "default group." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q12",
    prompt:
      "In Amazon EC2 Container Service, are other container types supported?",
    options: [
      {
        id: "a",
        text: "Yes, EC2 Container Service supports any container service you need.",
      },
      {
        id: "b",
        text: "Yes, EC2 Container Service also supports Microsoft container service.",
      },
      {
        id: "c",
        text: "No, Docker is the only container platform supported by EC2 Container Service presently.",
      },
      {
        id: "d",
        text: "Yes, EC2 Container Service supports Microsoft container service and Openstack.",
      },
    ],
    correctOptionId: "c",
  },

  {
    id: "q13",
    prompt:
      "Content and Media Server is the latest requirement that you need to meet for a client. The client has been very specific about his requirements such as low latency, high availability, durability, and access control. Potentially there will be millions of views on this server and because of 'spiky' usage patterns, operations teams will need to provision static hardware, network, and management resources to support the maximum expected need. The Customer base will be initially low but is expected to grow and become more geographically distributed. Which of the following would be a good solution for content distribution?",
    options: [
      { id: "a", text: "Amazon S3 as both the origin server and for caching." },
      {
        id: "b",
        text: "AWS Storage Gateway as the origin server and Amazon EC2 for caching.",
      },
      {
        id: "c",
        text: "AWS CloudFront as both the origin server and for caching.",
      },
      {
        id: "d",
        text: "Amazon S3 as the origin server and Amazon CloudFront for caching.",
      },
    ],
    correctOptionId: "d",
  },

  {
    id: "q14",
    prompt:
      "Name the disk storage supported by Amazon Elastic Compute Cloud (EC2)",
    options: [
      { id: "a", text: "None of these." },
      { id: "b", text: "Amazon AppStream store." },
      { id: "c", text: "Amazon SNS store." },
      { id: "d", text: "Amazon Instance Store." },
    ],
    correctOptionId: "d",
  },

  {
    id: "q15",
    prompt:
      "After an Amazon VPC instance is launched, can I change the VPC security groups it belongs to?",
    options: [
      { id: "a", text: "Only if the tag 'VPC_Change_Group' is true." },
      { id: "b", text: "Yes. You can." },
      { id: "c", text: "No. You cannot." },
      { id: "d", text: "Only if the tag 'VPC Change Group' is true." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q16",
    prompt:
      "If I want an instance to have a public IP address, which IP address should I use?",
    options: [
      { id: "a", text: "Elastic IP Address." },
      { id: "b", text: "Class B IP Address." },
      { id: "c", text: "Class A IP Address." },
      { id: "d", text: "Dynamic IP Address." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q17",
    prompt: "Amazon RDS supports SOAP only through [...].",
    options: [
      { id: "a", text: "HTTP or HTTPS." },
      { id: "b", text: "TCP/IP." },
      { id: "c", text: "HTTP." },
      { id: "d", text: "HTTPS." },
    ],
    correctOptionId: "d",
  },

  {
    id: "q18",
    prompt:
      "Which of the following services natively encrypts data at rest within an AWS region? (Choose 2 answers)",
    options: [
      { id: "a", text: "AWS Storage Gateway." },
      { id: "b", text: "Amazon DynamoDB." },
      { id: "c", text: "Amazon CloudFront." },
      { id: "d", text: "Amazon Glacier." },
      { id: "e", text: "Amazon Simple Queue Service." },
    ],
    correctOptionId: "a,d",
  },

  {
    id: "q19",
    prompt:
      "Which one of the following can't be used as an origin server with Amazon CloudFront?",
    options: [
      { id: "a", text: "A web server running in your infrastructure." },
      { id: "b", text: "Amazon S3." },
      { id: "c", text: "Amazon Glacier." },
      { id: "d", text: "A web server running on Amazon EC2 instances." },
    ],
    correctOptionId: "c",
  },

  {
    id: "q20",
    prompt:
      "Select the most correct The device name /dev/sdal (within Amazon EC2) is [...].",
    options: [
      { id: "a", text: "possible for EBS volumes." },
      { id: "b", text: "reserved for the root device." },
      { id: "c", text: "recommended for EBS volumes." },
      { id: "d", text: "recommended for instance store volumes." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q21",
    prompt:
      "How can I change the security group membership for interfaces owned by other AWS, such as Elastic Load Balancing?",
    options: [
      {
        id: "a",
        text: "By using the service specific console or APICLI commands.",
      },
      { id: "b", text: "None of these." },
      { id: "c", text: "Using Amazon EC2 API/CLI." },
      { id: "d", text: "Using all these methods." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q22",
    prompt:
      "You have created a Route 53 latency record set from your domain to a machine in Northern Virginia and a similar record to a machine in Sydney. When a user located in US visits your domain he will be routed to",
    options: [
      { id: "a", text: "Northern Virginia." },
      { id: "b", text: "Sydney." },
      { id: "c", text: "Both, Northern Virginia and Sydney." },
      { id: "d", text: "Depends on the Weighted Resource Record Sets." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q23",
    prompt:
      "In the context of MySQL, version numbers are organized as MySQL version = X.Y.Z. What does X denote here?",
    options: [
      { id: "a", text: "Release level." },
      { id: "b", text: "Minor version." },
      { id: "c", text: "Version number." },
      { id: "d", text: "Major version." },
    ],
    correctOptionId: "d",
  },

  {
    id: "q24",
    prompt: "Which one of the below doesn't affect Amazon CloudFront billing?",
    options: [
      { id: "a", text: "Distribution Type." },
      { id: "b", text: "Data Transfer Out." },
      { id: "c", text: "Dedicated IP SSL Certificates." },
      { id: "d", text: "Requests." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q25",
    prompt:
      "Just when you thought you knew every possible storage option on AWS you hear someone mention Reduced Redundancy Storage (RRS) within Amazon S3. What is the ideal scenario to use Reduced Redundancy Storage (RRS)?",
    options: [
      { id: "a", text: "Huge volumes of data." },
      { id: "b", text: "Sensitive data." },
      { id: "c", text: "Non-critical or reproducible data." },
      { id: "d", text: "Critical data." },
    ],
    correctOptionId: "c",
  },

  {
    id: "q26",
    prompt:
      "Which of the following AWS CLI commands is syntactically incorrect?",
    options: [
      { id: "a", text: "`$ aws ec2 describe-instances`." },
      {
        id: "b",
        text: "`$ aws ec2 start-instances --instance-ids i-1348636c`.",
      },
      {
        id: "c",
        text: '`$ aws sns publish --topic-arn arn:aws:sns:us-east-1:546419318123:OperationsError -message "Script Failure"`.',
      },
      {
        id: "d",
        text: "`$ aws sqs receive-message --queue-url https://queue.amazonaws.com/546419318123/Test`.",
      },
    ],
    correctOptionId: "c",
  },

  {
    id: "q27",
    prompt:
      "When running my DB Instance as a Multi-AZ deployment, can I use the standby for read or write operations?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "Only with MSSQL based RDS." },
      { id: "c", text: "Only for Oracle RDS instances." },
      { id: "d", text: "No." },
    ],
    correctOptionId: "d",
  },

  {
    id: "q28",
    prompt:
      "In the Launch Db Instance Wizard, where can I select the backup and maintenance options?",
    options: [
      { id: "a", text: "Under DB INSTANCE DETAILS." },
      { id: "b", text: "Under REVI EW." },
      { id: "c", text: "Under MANAGEMENT OPTIONS." },
      { id: "d", text: "Under ENGINE SELECTION." },
    ],
    correctOptionId: "c",
  },

  {
    id: "q29",
    prompt:
      "What is the network performance offered by the c4.8xlarge instance in Amazon EC2?",
    options: [
      { id: "a", text: "20 Gigabit." },
      { id: "b", text: "10 Gigabit." },
      { id: "c", text: "Very High but variable." },
      { id: "d", text: "5 Gigabit." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q30",
    prompt:
      "In Amazon EC2, if your EBS volume stays in the detaching state, you can force the detachment by clicking [...].",
    options: [
      { id: "a", text: "Force Detach." },
      { id: "b", text: "Detach Instance." },
      { id: "c", text: "AttachVolume." },
      { id: "d", text: "AttachInstance." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q31",
    prompt: "What does Amazon DynamoDB provide?",
    options: [
      { id: "a", text: "A predictable and scalable MySQL database." },
      { id: "b", text: "A fast and reliable PL/SQL database cluster." },
      {
        id: "c",
        text: "A standalone Cassandra database, managed by Amazon Web Services.",
      },
      {
        id: "d",
        text: "A fast, highly scalable managed NoSQL database service.",
      },
    ],
    correctOptionId: "d",
  },

  {
    id: "q32",
    prompt:
      "Security groups act like a firewall at the instance level, whereas [...] are an additional layer of security that act at the subnet level.",
    options: [
      { id: "a", text: "DB Security Groups." },
      { id: "b", text: "VPC Security Groups." },
      { id: "c", text: "network ACLs." },
    ],
    correctOptionId: "c",
  },

  {
    id: "q33",
    prompt:
      "You have been asked to tighten up the password policies in your organization after a serious security breach, so you need to consider every possible security measure. Which of the following is not an account password policy for IAM Users that can be set?",
    options: [
      {
        id: "a",
        text: "Force IAM users to contact an account administrator when the user has allowed his or her password to expire.",
      },
      { id: "b", text: "A minimum password length." },
      {
        id: "c",
        text: "Force IAM users to contact an account administrator when the user has entered his password incorrectly.",
      },
      { id: "d", text: "Prevent IAM users from reusing previous passwords." },
    ],
    correctOptionId: "c",
  },

  {
    id: "q34",
    prompt:
      "Multi-AZ deployment [...] supported for Microsoft SQL Server DB Instances.",
    options: [
      { id: "a", text: "is not currently." },
      { id: "b", text: "is as of 2013." },
      { id: "c", text: "is planned to be in 2014." },
      { id: "d", text: "will never be." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q35",
    prompt: "What does Amazon Elastic Beanstalk provide?",
    options: [
      {
        id: "a",
        text: "A scalable storage appliance on top of Amazon Web Services.",
      },
      {
        id: "b",
        text: "An application container on top of Amazon Web Services.",
      },
      { id: "c", text: "A service by this name doesn't exist." },
      { id: "d", text: "A scalable cluster of EC2 instances." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q36",
    prompt:
      "You need to quickly set up an email-sending service because a client needs to start using it in the next hour. Amazon Simple Email Service (Amazon SES) seems to be the logical choice but there are several options available to set it up. Which of the following options to set up SES would best meet the needs of the client?",
    options: [
      { id: "a", text: "Amazon SES console." },
      { id: "b", text: "AWS CloudFormation." },
      { id: "c", text: "SMTP Interface." },
      { id: "d", text: "AWS Elastic Beanstalk." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q37",
    prompt:
      "A user is observing the EC2 CPU utilization metric on CloudWatch. The user has observed some interesting patterns while filtering over the 1 week period for a particular hour. The user wants to zoom that data point to a more granular period. How can the user do that easily with CloudWatch?",
    options: [
      {
        id: "a",
        text: "The user can zoom a particular period by selecting that period with the mouse and then releasing the mouse.",
      },
      {
        id: "b",
        text: "The user can zoom a particular period by specifying the aggregation data for that period.",
      },
      {
        id: "c",
        text: "The user can zoom a particular period by double clicking on that period with the mouse.",
      },
      {
        id: "d",
        text: "The user can zoom a particular period by specifying the period in the Time Range.",
      },
    ],
    correctOptionId: "a",
  },

  {
    id: "q38",
    prompt:
      "A company is running a batch analysis every hour on their main transactional DB. running on an RDS MySQL instance to populate their central Data Warehouse running on Redshift During the execution of the batch their transactional applications are very slow When the batch completes they need to update the top management dashboard with the new data The dashboard is produced by another system running on-premises that is currently started when a manually-sent email notifies that an update is required The on-premises system cannot be modified because is managed by another team. How would you optimize this scenario to solve performance issues and automate the process as much as possible? How would you optimize this scenario to solve performance issues and automate the process as much as possible?",
    options: [
      {
        id: "a",
        text: "Replace RDS with Redshift for the batch analysis and SNS to notify the on-premises system to update the dashboard.",
      },
      {
        id: "b",
        text: "Replace RDS with Redshift for the oaten analysis and SQS to send a message to the on-premises system to update the dashboard.",
      },
      {
        id: "c",
        text: "Create an RDS Read Replica for the batch analysis and SNS to notify me on-premises system to update the dashboard.",
      },
      {
        id: "d",
        text: "Create an RDS Read Replica for the batch analysis and SQS to send a message to the on-premises system to update the dashboard.",
      },
    ],
    correctOptionId: "a",
  },

  {
    id: "q39",
    prompt:
      "You are configuring a new VPC for one of your clients for a cloud migration project, and only a public VPN will be in place. After you created your VPC, you created a new subnet, a new internet gateway, and attached your internet gateway to your VPC. When you launched your first instance into your VPC, you realized that you aren't able to connect to the instance, even if it is configured with an elastic IP. What should be done to access the instance?",
    options: [
      {
        id: "a",
        text: "A route should be created as 0.0.0.0/0 and your internet gateway as target.",
      },
      {
        id: "b",
        text: "Attach another ENI to the instance and connect via new EN.",
      },
      {
        id: "c",
        text: "A NAT instance should be created and all traffic should be forwarded to NAT instance.",
      },
      {
        id: "d",
        text: "A NACL should be created that allows all outbound traffic.",
      },
    ],
    correctOptionId: "a",
  },

  {
    id: "q40",
    prompt:
      "You have been asked to build a database warehouse using Amazon Redshift. You know a little about it, including that it is a SQL data warehouse solution, and uses industry standard ODBC and JDBCconnections and PostgreSQL drivers. However you are not sure about what sort of storage it uses for database tables. What sort of storage does Amazon Redshift use for database tables?",
    options: [
      { id: "a", text: "InnoDB Tables." },
      { id: "b", text: "NDB data storage." },
      { id: "c", text: "Columnar data storage." },
      { id: "d", text: "NDB CLUSTER Storage." },
    ],
    correctOptionId: "c",
  },

  {
    id: "q41",
    prompt:
      "A user has attached 1 EBS volume to a VPC instance. The user wants to achieve the best fault tolerance of data possible. Which of the below mentioned options can help achieve fault tolerance?",
    options: [
      { id: "a", text: "Attach one more volume with RAID 1 configuration." },
      { id: "b", text: "Attach one more volume with RAID 0 configuration." },
      { id: "c", text: "Connect multiple volumes and stripe them with RAI." },
      { id: "d", text: "Use the EBS volume as a root device." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q42",
    prompt:
      "Which features can be used to restrict access to data in S3? (Choose 2 answers)",
    options: [
      { id: "a", text: "Set an S3 ACL on the bucket or the object." },
      { id: "b", text: "Create a CloudFront distribution for the bucket." },
      { id: "c", text: "Set an S3 bucket policy." },
      { id: "d", text: "Enable IAM Identity Federation." },
      { id: "e", text: "Use S3 Virtual l Hosting." },
    ],
    correctOptionId: "a,c",
  },

  {
    id: "q43",
    prompt:
      "You are in the process of creating a Route 53 DNS failover to direct traffic to two EC2 zones. Obviously, if one fails, you would like Route 53 to direct traffic to the other region. Each region has an ELB with some instances being distributed. What is the best way for you to configure the Route 53 health check?",
    options: [
      {
        id: "a",
        text: "Route 53 doesn't support ELB with an internal health check.You need to create your own Route 53 health check of the ELB.",
      },
      {
        id: "b",
        text: "Route 53 natively supports ELB with an internal health check. Turn 'Evaluate target health' off and 'Associate with Health Check' on and R53 will use the ELB's internal health check.",
      },
      {
        id: "c",
        text: "Route 53 doesn't support ELB with an internal health check. You need to associate your resource record set for the ELB with your own health check.",
      },
      {
        id: "d",
        text: "Route 53 natively supports ELB with an internal health check. Turn 'Evaluate target health' on and 'Associate with Health Check' off and R53 will use the ELB's internal health check.",
      },
    ],
    correctOptionId: "d",
  },

  {
    id: "q44",
    prompt:
      "For each DB Instance class, what is the maximum size of associated storage capacity?",
    options: [
      { id: "a", text: "5GB." },
      { id: "b", text: "1TB." },
      { id: "c", text: "2TB." },
      { id: "d", text: "500GB." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q45",
    prompt:
      "A user is planning a highly available application deployment with EC2. Which of the below mentioned options will not help to achieve HA?",
    options: [
      { id: "a", text: "Elastic IP address." },
      { id: "b", text: "PIOPS." },
      { id: "c", text: "AMI." },
      { id: "d", text: "Availability Zones." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q46",
    prompt:
      "What does specifying the mapping /dev/sdc=none when launching an instance do?",
    options: [
      { id: "a", text: "Prevents /dev/sdc from creating the instance." },
      { id: "b", text: "Prevents /dev/sdc from deleting the instance." },
      { id: "c", text: "Set the value of /dev/sdc to 'zero'." },
      { id: "d", text: "Prevents /dev/sdc from attaching to the instance." },
    ],
    correctOptionId: "d",
  },

  {
    id: "q47",
    prompt:
      "Which of the following statements is true of tagging an Amazon EC2 resource?",
    options: [
      {
        id: "a",
        text: "You don't need to specify the resource identifier while terminating a resource.",
      },
      {
        id: "b",
        text: "You can terminate, stop, or delete a resource based solely on its tags.",
      },
      {
        id: "c",
        text: "You can't terminate, stop, or delete a resource based solely on its tags.",
      },
      {
        id: "d",
        text: "You don't need to specify the resource identifier while stopping a resource.",
      },
    ],
    correctOptionId: "c",
  },

  {
    id: "q48",
    prompt:
      "You are deploying an application to collect votes for a very popular television show. Millions of users will submit votes using mobile devices. The votes must be collected into a durable, scalable, and highly available data store for real-time public tabulation. Which service should you use?",
    options: [
      { id: "a", text: "Amazon DynamoDB." },
      { id: "b", text: "Amazon Redshift." },
      { id: "c", text: "Amazon Kinesis." },
      { id: "d", text: "Amazon Simple Queue Service." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q49",
    prompt: "Are Reserved Instances available for Multi-AZ Deployments?",
    options: [
      { id: "a", text: "Only for Cluster Compute instances." },
      { id: "b", text: "Yes for all instance types." },
      { id: "c", text: "Only for M3 instance types." },
      { id: "d", text: "No." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q50",
    prompt:
      "A [...] for a VPC is a collection of subnets (typically private) that you may want to designate for your backend RDS DB Instances.",
    options: [
      { id: "a", text: "DB Subnet Set." },
      { id: "b", text: "RDS Subnet Group." },
      { id: "c", text: "DB Subnet Group." },
      { id: "d", text: "DB Subnet Collection." },
    ],
    correctOptionId: "c",
  },

  {
    id: "q51",
    prompt:
      "An instance is launched into a VPC subnet with the network ACL configured to allow all inbound traffic and deny all outbound traffic. The instance's security group is configured to allow SSH from any IP address and deny all outbound traffic. What changes need to be made to allow SSH access to the instance?",
    options: [
      {
        id: "a",
        text: "The outbound security group needs to be modified to allow outbound traffic.",
      },
      {
        id: "b",
        text: "The outbound network ACL needs to be modified to allow outbound traffic.",
      },
      {
        id: "c",
        text: "Nothing, it can be accessed from any IP address using S3.",
      },
      {
        id: "d",
        text: "Both the outbound security group and outbound network ACL need to be modified to allow outbound traffic.",
      },
    ],
    correctOptionId: "b",
  },

  {
    id: "q52",
    prompt:
      "You can modify the backup retention period; valid values are 0 (for no backup retention) to a maximum of [...] days.",
    options: [
      { id: "a", text: "45." },
      { id: "b", text: "35." },
      { id: "c", text: "15." },
      { id: "d", text: "5." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q53",
    prompt:
      "To serve Web traffic for a popular product your chief financial officer and IT director have purchased 10 ml large heavy utilization Reserved Instances (RIs) evenly spread across two Availability Zones: Route 53 is used to deliver the traffic to an Elastic Load Balancer (ELB). After several months, the product grows even more popular and you need additional capacity As a result, your company purchases two C3.2xlarge medium utilization RIs You register the two c3 2xlarge instances with your ELB and quickly find that the ml large instances are at 100% of capacity and the c3 2xlarge instances have significant capacity that's unused Which option is the most cost effective and uses EC2 capacity most effectively?",
    options: [
      {
        id: "a",
        text: "Use a separate ELB for each instance type and distribute load to ELBs with Route 53 weighted round robin.",
      },
      {
        id: "b",
        text: "Configure Autoscaning group and Launch Configuration with ELB to add up to 10 more on-demand ml large instances when triggered by Cloudwatch shut off c3 2xlarge instances.",
      },
      {
        id: "c",
        text: "Route traffic to EC2 ml large and c3 2xlarge instances directly using Route 53 latency based routing and health checks shut off ELB.",
      },
      {
        id: "d",
        text: "Configure ELB with two c3 2xiarge Instances and use on-demand Autoscaling group for up to two additional c3.2xlarge instances Shut on mi .large instances.",
      },
    ],
    correctOptionId: "a",
  },

  {
    id: "q54",
    prompt:
      "An existing application stores sensitive information on a non-boot Amazon EBS data volume attached to an Amazon Elastic Compute Cloud instance. Which of the following approaches would protect the sensitive data on an Amazon EBS volume?",
    options: [
      { id: "a", text: "Upload your customer keys to AWS CloudHS." },
      { id: "b", text: "Associate the Amazon EBS volume with AWS CloudHS." },
      { id: "c", text: "Re-mount the Amazon EBS volume." },
      {
        id: "d",
        text: "Create and mount a new, encrypted Amazon EBS volume. Move the data to the new volume. Delete the old Amazon EBS volume.",
      },
      {
        id: "e",
        text: "Unmount the EBS volume. Toggle the encryption attribute to True. Re-mount the Amazon EBS volume.",
      },
      {
        id: "f",
        text: "Snapshot the current Amazon EBS volume. Restore the snapshot to a new, encrypted Amazon EBS volume. Mount the Amazon EBS volume.",
      },
    ],
    correctOptionId: "d",
  },

  {
    id: "q55",
    prompt:
      "A user has launched one EC2 instance in the US West region. The user wants to access the RDS instance launched in the US East region from that EC2 instance. How can the user configure the access for that EC2 instance?",
    options: [
      {
        id: "a",
        text: "Configure the IP range of the US West region instance as the ingress security rule of RDS.",
      },
      {
        id: "b",
        text: "It is not possible to access RDS of the US East region from the US West region.",
      },
      {
        id: "c",
        text: "Open the security group of the US West region in the RDS security group's ingress rule.",
      },
      {
        id: "d",
        text: "Create an IAM role which has access to RDS and launch an instance in the US West region with it.",
      },
    ],
    correctOptionId: "a",
  },

  {
    id: "q56",
    prompt:
      "You have been asked to build AWS infrastructure for disaster recovery for your local applications and within that you should use an AWS Storage Gateway as part of the solution. Which of the following best describes the function of an AWS Storage Gateway?",
    options: [
      {
        id: "a",
        text: "Accelerates transferring large amounts of data between the AWS cloud and portable storage devices .",
      },
      {
        id: "b",
        text: "A web service that speeds up distribution of your static and dynamic web content.",
      },
      {
        id: "c",
        text: "Connects an on-premises software appliance with cloud-based storage to provide seamless and secure integration between your on-premises IT environment and AWS's storage infrastructure.",
      },
      {
        id: "d",
        text: "Is a storage service optimized for infrequently used data, or 'cold data'.",
      },
    ],
    correctOptionId: "c",
  },

  {
    id: "q57",
    prompt:
      "While creating an Amazon RDS DB, your first task is to set up a DB [...] that controls which IP address or EC2 instance can access your DB Instance.",
    options: [
      { id: "a", text: "security token pool." },
      { id: "b", text: "security token." },
      { id: "c", text: "security pool." },
      { id: "d", text: "security group." },
    ],
    correctOptionId: "d",
  },

  {
    id: "q58",
    prompt:
      "You need to import several hundred megabytes of data from a local Oracle database to an Amazon RDS DB instance. What does AWS recommend you use to accomplish this?",
    options: [
      { id: "a", text: "Oracle export/import utilities." },
      { id: "b", text: "Oracle SQL Developer." },
      { id: "c", text: "Oracle Data Pump." },
      { id: "d", text: "DBMS_FILE_TRANSFER." },
    ],
    correctOptionId: "c",
  },

  {
    id: "q59",
    prompt:
      "In the context of AWS support, why must an EC2 instance be unreachable for 20 minutes rather than allowing customers to open tickets immediately?",
    options: [
      {
        id: "a",
        text: "Because most reachability issues are resolved by automated processes in less than 20 minutes.",
      },
      {
        id: "b",
        text: "Because all EC2 instances are unreachable for 20 minutes every day when AWS does routine maintenance.",
      },
      {
        id: "c",
        text: "Because all EC2 instances are unreachable for 20 minutes when first launched.",
      },
      { id: "d", text: "Because of all the reasons listed here." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q60",
    prompt:
      "HTTP Query-based requests are HTTP requests that use the HTTP verb GET or POST and a Query parameter named [...].",
    options: [
      { id: "a", text: "Action." },
      { id: "b", text: "Value." },
      { id: "c", text: "Reset." },
      { id: "d", text: "Retrieve." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q61",
    prompt:
      "A friend tells you he is being charged $100 a month to host his WordPress website, and you tell him you can move it to AWS for him and he will only pay a fraction of that, which makes him very happy. He then tells you he is being charged $50 a month for the domain, which is registered with the same people that set it up, and he asks if it's possible to move that to AWS as well. You tell him you aren't sure, but will look into it. Which of the following statements is true in regards to transferring domain names to AWS?",
    options: [
      { id: "a", text: "You can't transfer existing domains to AWS." },
      {
        id: "b",
        text: "You can transfer existing domains into Amazon Route 53's management.",
      },
      {
        id: "c",
        text: "You can transfer existing domains via AWS Direct Connect.",
      },
      {
        id: "d",
        text: "You can transfer existing domains via AWS Import/Export.",
      },
    ],
    correctOptionId: "b",
  },

  {
    id: "q62",
    prompt:
      "While creating the snapshots using the command line tools, which command should I be using?",
    options: [
      { id: "a", text: "ec2-deploy-snapshot." },
      { id: "b", text: "ec2-fresh-snapshot." },
      { id: "c", text: "ec2-create-snapshot." },
      { id: "d", text: "ec2-new-snapshot." },
    ],
    correctOptionId: "c",
  },

  {
    id: "q63",
    prompt:
      "All Amazon EC2 instances are assigned two IP addresses at launch, out of which one can only be reached from within the Amazon EC2 network?",
    options: [
      { id: "a", text: "Multiple IP address." },
      { id: "b", text: "Public IP address." },
      { id: "c", text: "Private IP address." },
      { id: "d", text: "Elastic IP Address." },
    ],
    correctOptionId: "c",
  },

  {
    id: "q64",
    prompt:
      "When an EC2 instance that is backed by an S3-based AMI is terminated, what happens to the data on the root volume?",
    options: [
      { id: "a", text: "Data is automatically saved as an EBS snapshot." },
      { id: "b", text: "Data is automatically saved as an EBS volume." },
      { id: "c", text: "Data is unavailable until the instance is restarted." },
      { id: "d", text: "Data is automatically deleted." },
    ],
    correctOptionId: "d",
  },

  {
    id: "q65",
    prompt:
      "You've created your first load balancer and have registered your EC2 instances with the load balancer. Elastic Load Balancing routinely performs health checks on all the registered EC2 instances and automatically distributes all incoming requests to the DNS name of your load balancer across your registered, healthy EC2 instances. By default, the load balancer uses the [...] protocol for checking the health of your instances.",
    options: [
      { id: "a", text: "HTTPS." },
      { id: "b", text: "HTTP." },
      { id: "c", text: "ICMP." },
      { id: "d", text: "IPv6." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q66",
    prompt:
      "Amazon Elastic Load Balancing is used to manage traffic on a fleet of Amazon EC2 instances, distributing traffic to instances across all Availability Zones within a region. Elastic Load Balancing has all the advantages of an on-premises load balancer, plus several security benefits. Which of the following is not an advantage of ELB over an on-premise load balancer?",
    options: [
      {
        id: "a",
        text: "ELB uses a four-tier, key-based architecture for encryption.",
      },
      {
        id: "b",
        text: "ELB offers clients a single point of contact, and can also serve as the first line of defense against attacks on your network.",
      },
      {
        id: "c",
        text: "ELB takes over the encryption and decryption work from the Amazon EC2 instances and manages it centrally on the load balancer.",
      },
      {
        id: "d",
        text: "ELB supports end-to-end traffic encryption using TLS (previously SSL) on those networks that use secure HTTP (HTTPS) connections.",
      },
    ],
    correctOptionId: "a",
  },

  {
    id: "q67",
    prompt:
      "A web company is looking to implement an external payment service into their highly available application deployed in a VPC Their application EC2 instances are behind a public lacing ELB Auto scaling is used to add additional instances as traffic increases under normal load the application runs 2 instances in the Auto Scaling group but at peak it can scale 3x in size. The application instances need to communicate with the payment service over the Internet which requires whitelisting of all public IP addresses used to communicate with it. A maximum of 4 whitelisting IP addresses are allowed at a time and can be added through an API. How should they architect their solution?",
    options: [
      {
        id: "a",
        text: "Route payment requests through two NAT instances setup for High Availability and whitelist the Elastic IP addresses attached to the MAT instances.",
      },
      {
        id: "b",
        text: "Whitelist the VPC Internet Gateway Public IP and route payment requests through the Internet Gateway.",
      },
      {
        id: "c",
        text: "Whitelist the ELB IP addresses and route payment requests from the Application servers through the EL.",
      },
      {
        id: "d",
        text: "Automatically assign public IP addresses to the application instances in the Auto Scaling group and run a script on boot that adds each instances public IP address to the payment validation whitelist AP.",
      },
    ],
    correctOptionId: "a",
  },

  {
    id: "q68",
    prompt:
      "You are using Amazon SES as an email solution but are unsure of what its limitations are. Which statement below is correct in regards to that?",
    options: [
      {
        id: "a",
        text: "New Amazon SES users who have received production access can send up to 1,000 emails per 24-hour period, at a maximum rate of 10 emails per second.",
      },
      {
        id: "b",
        text: "Every Amazon SES sender has a the same set of sending limits.",
      },
      {
        id: "c",
        text: "Sending limits are based on messages rather than on recipients.",
      },
      {
        id: "d",
        text: "Every Amazon SES sender has a unique set of sending limits.",
      },
    ],
    correctOptionId: "d",
  },

  {
    id: "q69",
    prompt:
      "Your company is getting ready to do a major public announcement of a social media site on AWS. The website is running on EC2 instances deployed across multiple Availability Zones with a Multi-AZ RDS MySQL Extra Large DB Instance. The site performs a high number of small reads and writes per second and relies on an eventual consistency model. After comprehensive tests you discover that there is read contention on RDS MySQL. Which are the best approaches to meet these requirements? (Choose 2 answers)",
    options: [
      {
        id: "a",
        text: "Deploy ElasticCache in-memory cache running in each Availability Zone.",
      },
      {
        id: "b",
        text: "Implement sharding to distribute load to multiple RDS MySQL instances.",
      },
      {
        id: "c",
        text: "Increase the RDS MySQL Instance size and Implement provisioned IOPS.",
      },
      {
        id: "d",
        text: "Add an RDS MySQL read replica in each Availability Zone.",
      },
    ],
    correctOptionId: "a,d",
  },

  {
    id: "q70",
    prompt: "What does a 'Domain' refer to in Amazon SWF?",
    options: [
      {
        id: "a",
        text: "A security group in which only tasks inside can communicate with each other.",
      },
      { id: "b", text: "A special type of worker." },
      { id: "c", text: "A collection of related Workflows." },
      { id: "d", text: "The DNS record for the Amazon SWF service." },
    ],
    correctOptionId: "c",
  },

  {
    id: "q71",
    prompt:
      "The SQL Server [...] feature is an efficient means of copying data from a source database to your DB Instance. It writes the data that you specify to a data file, such as an ASCII file.",
    options: [
      { id: "a", text: "bulk copy." },
      { id: "b", text: "group copy." },
      { id: "c", text: "dual copy." },
      { id: "d", text: "mass copy." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q72",
    prompt:
      "Any person or application that interacts with AWS requires security credentials. AWS uses these credentials to identify who is making the call and whether to allow the requested access. You have just set up a VPC network for a client and you are now thinking about the best way to secure this network. You set up a security group called vpcsecuritygroup. Which following statement is true in respect to the initial settings that will be applied to this security group if you choose to use the default settings for this group?",
    options: [
      {
        id: "a",
        text: "Allow all inbound traffic and allow no outbound traffic.",
      },
      {
        id: "b",
        text: "Allow no inbound traffic and allow all outbound traffic.",
      },
      {
        id: "c",
        text: "Allow inbound traffic on port 80 only and allow all outbound traffic.",
      },
      {
        id: "d",
        text: "Allow all inbound traffic and allow all outbound traffic.",
      },
    ],
    correctOptionId: "b",
  },

  {
    id: "q73",
    prompt: "Which one of the below is not an AWS Storage Service?",
    options: [
      { id: "a", text: "Amazon S3." },
      { id: "b", text: "Amazon Glacier." },
      { id: "c", text: "Amazon CloudFront." },
      { id: "d", text: "Amazon EBS." },
    ],
    correctOptionId: "c",
  },

  {
    id: "q74",
    prompt:
      "You are trying to launch an EC2 instance, however the instance seems to go into a terminated status immediately. What would probably not be a reason that this is happening?",
    options: [
      { id: "a", text: "The AMI is missing a required part." },
      { id: "b", text: "The snapshot is corrupt." },
      { id: "c", text: "You need to create storage in EBS first." },
      { id: "d", text: "You've reached your volume limit." },
    ],
    correctOptionId: "c",
  },

  {
    id: "q75",
    prompt:
      "A company is building software on AWS that requires access to various AWS services. Which configuration should be used to ensure mat AWS credentials (i.e., Access Key ID/Secret Access Key combination) are not compromised?",
    options: [
      {
        id: "a",
        text: "Enable Multi-Factor Authentication for your AWS root account.",
      },
      { id: "b", text: "Assign an IAM role to the Amazon EC2 instance." },
      {
        id: "c",
        text: "Store the AWS Access Key ID/Secret Access Key combination in software comments.",
      },
      { id: "d", text: "Assign an IAM user to the Amazon EC2 Instance." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q76",
    prompt:
      "Can we attach an EBS volume to more than one EC2 instance at the same time?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
      { id: "c", text: "Only EC2-optimized EBS volumes." },
      { id: "d", text: "Only in read mode." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q77",
    prompt:
      "You need to measure the performance of your EBS volumes as they seem to be under performing. You have come up with a measurement of 1,024 KB I/O but your colleague tells you that EBS volume performance is measured in IOPS. How many IOPS is equal to 1,024 KB I/O?",
    options: [
      { id: "a", text: "16." },
      { id: "b", text: "256." },
      { id: "c", text: "8." },
      { id: "d", text: "4." },
    ],
    correctOptionId: "d",
  },

  {
    id: "q78",
    prompt:
      "Your company produces customer commissioned one-of-a-kind skiing helmets combining nigh fashion with custom technical enhancements Customers can show off their Individuality on the ski slopes and have access to head-up-displays. GPS rear-view cams and any other technical innovation they wish to embed in the helmet. The current manufacturing process is data rich and complex including assessments to ensure that the custom electronics and materials used to assemble the helmets are to the highest standards Assessments are a mixture of human and automated assessments you need to add a new set of assessment to model the failure modes of the custom electronics using GPUs with CUDA, across a cluster of servers with low latency networking. What architecture would allow you to automate the existing process using a hybrid approach and ensure that the architecture can support the evolution of processes over time?",
    options: [
      {
        id: "a",
        text: "Use AWS Data Pipeline to manage movement of data & meta-data and assessments Use an autoscaling group of G2 instances in a placement group.",
      },
      {
        id: "b",
        text: "Use Amazon Simple Workflow (SWF) to manages assessments, movement of data & meta-data Use an auto-scaling group of G2 instances in a placement group.",
      },
      {
        id: "c",
        text: "Use Amazon Simple Workflow (SWF) to manages assessments movement of data & meta-data Use an auto-scaling group of C3 instances with SR-IOV (Single Root 1/0 Virtualization).",
      },
      {
        id: "d",
        text: "Use AWS data Pipeline to manage movement of data & meta-data and assessments use autoscaling group of C3 with SR-IOV (Single Root 1/0 virtualization).",
      },
    ],
    correctOptionId: "b",
  },

  {
    id: "q79",
    prompt:
      "You are designing Internet connectivity for your VPC. The Web servers must be available on the Internet. The application must have a highly available architecture. Which alternatives should you consider? (Choose 2 answers)",
    options: [
      {
        id: "a",
        text: "Configure a NAT instance in your VPC Create a default route via the NAT instance and associate it with all subnets Configure a DNS A record that points to the NAT instance public IP address.",
      },
      {
        id: "b",
        text: "Configure a CloudFront distribution and configure the origin to point to the private IP addresses of your Web servers Configure a Route 53 CNAME record to your CloudFront distribution.",
      },
      {
        id: "c",
        text: "Place all your web servers behind EL8 Configure a Route 53 CNAME to point to the ELB DNS name.",
      },
      {
        id: "d",
        text: "Assign EIPs to all web servers. Configure a Route 53 record set with all EIPs. With health checks and DNS failover.",
      },
      {
        id: "e",
        text: "Configure ELB with an EIP Place all your Web servers behind ELB Configure a Route 53 A record that points to the EIP.",
      },
    ],
    correctOptionId: "c,d",
  },

  {
    id: "q80",
    prompt:
      "You need to configure an Amazon S3 bucket to serve static assets for your public-facing web application. Which methods ensure that all objects uploaded to the bucket are set to public read? (Choose 2 answers)",
    options: [
      {
        id: "a",
        text: "Set permissions on the object to public read during upload.",
      },
      {
        id: "b",
        text: "Configure the bucket ACL to set all objects to public read.",
      },
      {
        id: "c",
        text: "Configure the bucket policy to set all objects to public read.",
      },
      {
        id: "d",
        text: "Use AWS Identity and Access Management roles to set the bucket to public read.",
      },
      {
        id: "e",
        text: "Amazon S3 objects default to public read, so no action is needed.",
      },
    ],
    correctOptionId: "a,c",
  },

  {
    id: "q81",
    prompt:
      "A major customer has asked you to set up his AWS infrastructure so that it will be easy to recover in the case of a disaster of some sort. Which of the following is important when thinking about being able to quickly launch resources in AWS to ensure business continuity in case of a disaster?",
    options: [
      {
        id: "a",
        text: "Create and maintain AMIs of key servers where fast recovery is required.",
      },
      {
        id: "b",
        text: "Regularly run your servers, test them, and apply any software updates and configuration changes.",
      },
      {
        id: "c",
        text: "All items listed here are important when thinking about disaster recovery.",
      },
      {
        id: "d",
        text: "Ensure that you have all supporting custom software packages available in AWS.",
      },
    ],
    correctOptionId: "c",
  },

  {
    id: "q82",
    prompt:
      "You are developing a new mobile application and are considering storing user preferences in AWS. This would provide a more uniform cross-device experience to users using multiple mobile devices to access the application. The preference data for each user is estimated to be SOKB in size Additionally 5 million customers are expected to use the application on a regular basis. The solution needs to be cost-effective, highly available, scalable and secure, how would you design a solution to meet the above requirements?",
    options: [
      {
        id: "a",
        text: "Setup an RDS MySQL instance in 2 Availability Zones to store the user preference data. Deploy a public facing application on a server in front of the database to manage security and access credentials.",
      },
      {
        id: "b",
        text: "Setup a DynamoDB table with an item for each user having the necessary attributes to hold the user preferences. The mobile application will query the user preferences directly from the DynamoDB table. Utilize ST.",
      },
      {
        id: "c",
        text: "Web Identity Federation, and DynamoDB Fine Grained Access Control to authenticate and authorize access.",
      },
      {
        id: "d",
        text: "Setup an RDS MySQL instance with multiple read replicas in 2 Availability Zones to store the user preference data. The mobile application will query the user preferences from the read replicas. Leverage the MySQL user management and access privilege system to manage security and access credentials.",
      },
      {
        id: "e",
        text: "Store the user preference data in S3 Setup a DynamoDB table with an item for each user and an item attribute pointing to the user' S3 object. The mobile application will retrieve the S3 URL from DynamoDB and then access the S3 object directly utilize STS, Web identity Federation, and S3 ACLs to authenticate and authorize access.",
      },
    ],
    correctOptionId: "b",
  },

  {
    id: "q83",
    prompt:
      "In the Amazon RDS which uses the SQL Server engine, what is the maximum size for a Microsoft SQL Server DB Instance with SQL Server Express edition?",
    options: [
      { id: "a", text: "10GB per DB." },
      { id: "b", text: "100GB per DB." },
      { id: "c", text: "2TB per DB." },
      { id: "d", text: "1TB per DB." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q84",
    prompt:
      "You have deployed a web application targeting a global audience across multiple AWS Regions under the domain name.example.com. You decide to use Route 53 Latency-Based Routing to serve web requests to users from the region closest to the user. To provide business continuity in the event of server downtime you configure weighted record sets associated with two web servers in separate Availability Zones per region. Dunning a DR test you notice that when you disable all web servers in one of the regions Route 53 does not automatically direct all users to the other region. What could be happening? (Choose 2 answers)",
    options: [
      {
        id: "a",
        text: "Latency resource record sets cannot be used in combination with weighted resource record sets.",
      },
      {
        id: "b",
        text: "You did not setup an HTTP health check tor one or more of the weighted resource record sets associated with me disabled web servers.",
      },
      {
        id: "c",
        text: "The value of the weight associated with the latency alias resource record set in the region with the disabled servers is higher than the weight for the other region.",
      },
      {
        id: "d",
        text: "One of the two working web servers in the other region did not pass its HTTP health check.",
      },
      {
        id: "e",
        text: "You did not set 'Evaluate Target Health' to 'Yes' on the latency alias resource record set associated with example com in the region where you disabled the servers.",
      },
    ],
    correctOptionId: "b,e",
  },

  {
    id: "q85",
    prompt:
      "Amazon EBS provides the ability to create backups of any Amazon EC2 volume into what is known as [...].",
    options: [
      { id: "a", text: "snapshots." },
      { id: "b", text: "images." },
      { id: "c", text: "instance backups." },
      { id: "d", text: "mirrors." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q86",
    prompt:
      "You've been hired to enhance the overall security posture for a very large e-commerce site They have a well architected multi-tier application running in a VPC that uses ELBs in front of both the web and the app tier with static assets served directly from S3 They are using a combination of RDS and DynamoOB for their dynamic data and then archiving nightly into S3 for further processing with EMR They are concerned because they found questionable log entries and suspect someone is attempting to gain unauthorized access. Which approach provides a cost effective scalable mitigation to this kind of attack?",
    options: [
      {
        id: "a",
        text: "Recommend that they lease space at a DirectConnect partner location and establish a lG DirectConnect connection to their vPC they would then establish Internet connectivity into their space, filter the traffic in hardware Web Application Firewall (WAF). And then pass the traffic through the DirectConnect connection into their application running in their VPC,",
      },
      {
        id: "b",
        text: "Add previously identified hostile source IPs as an explicit INBOUND DENY NACL to the web tier sub net.",
      },
      {
        id: "c",
        text: "Add a WAF tier by creating a new ELB and an AutoScaling group of EC2 Instances running a host based WAF They would redirect Route 53 to resolve to the new WAF tier ELB The WAF tier wouldthier pass the traffic to the current web tier The web tier Security Groups would be updated to only allow traffic from the WAF tier Security Group",
      },
      {
        id: "d",
        text: "Remove all but TLS 1 2 from the web tier ELB and enable Advanced Protocol Filtering This will enable the ELB itself to perform WAF functionality.",
      },
    ],
    correctOptionId: "c",
  },

  {
    id: "q87",
    prompt:
      "You are designing the network infrastructure for an application server in Amazon VPC Users will access all the application instances from the Internet as well as from an on-premises network The on-premises network is connected to your VPC over an AWS Direct Connect link. How would you design routing to meet the above requirements?",
    options: [
      {
        id: "a",
        text: "Configure a single routing Table with a default route via the Internet gateway Propagate a default route via BGP on the AWS Direct Connect customer router. Associate the routing table with all VPCsubnets.",
      },
      {
        id: "b",
        text: "Configure a single routing table with a default route via the internet gateway Propagate specific routes for the on-premises networks via BGP on the AWS Direct Connect customer router Associatethe routing table with all VPC subnets.",
      },
      {
        id: "c",
        text: "Configure a single routing table with two default routes: one to the internet via an Internet gateway the other to the on-premises network via the VPN gateway use this routing table across all subnets in your VPC.",
      },
      {
        id: "d",
        text: "Configure two routing tables one that has a default route via the Internet gateway and another that has a default route via the VPN gateway Associate both routing tables with each VPC subnet.",
      },
    ],
    correctOptionId: "a",
  },

  {
    id: "q88",
    prompt:
      "You have multiple VPN connections and want to provide secure communication between sites using the AWS VPN CloudHub. Which statement is the most accurate in describing what you must do to set this up correctly?",
    options: [
      {
        id: "a",
        text: "Create a virtual private gateway with multiple customer gateways, each with unique Border Gateway Protocol (BGP) Autonomous System Numbers (ASNs).",
      },
      {
        id: "b",
        text: "Create a virtual private gateway with multiple customer gateways, each with a unique set of keys.",
      },
      {
        id: "c",
        text: "Create a virtual public gateway with multiple customer gateways, each with a unique Private subnet.",
      },
      {
        id: "d",
        text: "Create a virtual private gateway with multiple customer gateways, each with unique subnet id.",
      },
    ],
    correctOptionId: "a",
  },

  {
    id: "q89",
    prompt:
      "A user is aware that a huge download is occurring on his instance. He has already set the Auto Scaling policy to increase the instance count when the network I/O increases beyond a certain limit. How can the user ensure that this temporary event does not result in scaling?",
    options: [
      {
        id: "a",
        text: "The network I/O are not affected during data download.",
      },
      { id: "b", text: "The policy cannot be set on the network I/O." },
      {
        id: "c",
        text: "There is no way the user can stop scaling as it is already configured.",
      },
      { id: "d", text: "Suspend scaling." },
    ],
    correctOptionId: "d",
  },

  {
    id: "q90",
    prompt:
      "The Amazon EC2 web service can be accessed using the [...] web services messaging protocol. This interface is described by a Web Services Description Language (WSDL) document.",
    options: [
      { id: "a", text: "SOAP." },
      { id: "b", text: "DCOM." },
      { id: "c", text: "CORBA." },
      { id: "d", text: "XML-RPC." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q91",
    prompt:
      "Which of the following are true regarding encrypted Amazon Elastic Block Store (EBS) volumes? (Choose 2 answers)",
    options: [
      { id: "a", text: "Supported on all Amazon EBS volume types." },
      { id: "b", text: "Snapshots are automatically encrypted." },
      { id: "c", text: "Available to all instance types." },
      { id: "d", text: "Existing volumes can be encrypted." },
      { id: "e", text: "Shared volumes can be encrypted." },
    ],
    correctOptionId: "a,b",
  },

  {
    id: "q92",
    prompt:
      "Is Federated Storage Engine currently supported by Amazon RDS for MySQL?",
    options: [
      { id: "a", text: "Only for Oracle RDS instances." },
      { id: "b", text: "Yes." },
      { id: "c", text: "No." },
      { id: "d", text: "Only in VPC." },
    ],
    correctOptionId: "c",
  },

  {
    id: "q93",
    prompt:
      "While creating the snapshots using the API, which Action should I be using?",
    options: [
      { id: "a", text: "MakeSnapShot." },
      { id: "b", text: "FreshSnapshot." },
      { id: "c", text: "DeploySnapshot." },
      { id: "d", text: "CreateSnapshot." },
    ],
    correctOptionId: "d",
  },

  {
    id: "q94",
    prompt:
      "A customer needs to capture all client connection information from their load balancer every five minutes. The company wants to use this data for analyzing traffic patterns and troubleshooting their applications. Which of the following options meets the customer requirements?",
    options: [
      { id: "a", text: "Enable AWS CloudTrail for the load balancer." },
      { id: "b", text: "Enable access logs on the load balancer." },
      {
        id: "c",
        text: "Install the Amazon CloudWatch Logs agent on the load balancer.",
      },
      {
        id: "d",
        text: "Enable Amazon CloudWatch metrics on the load balancer.",
      },
    ],
    correctOptionId: "a",
  },

  {
    id: "q95",
    prompt: "Will my standby RDS instance be in the same Region as my primary?",
    options: [
      { id: "a", text: "Only for Oracle RDS types." },
      { id: "b", text: "Yes." },
      { id: "c", text: "Only if configured at launch." },
      { id: "d", text: "No." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q96",
    prompt:
      "If I want my instance to run on a single-tenant hardware, which value do I have to set the instance's tenancy attribute to?",
    options: [
      { id: "a", text: "Dedicated." },
      { id: "b", text: "Isolated." },
      { id: "c", text: "One." },
      { id: "d", text: "Reserved." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q97",
    prompt: "Can the string value of 'Key' be prefixed with :aws:'?",
    options: [
      { id: "a", text: "Only in GovCloud." },
      { id: "b", text: "Only for S3 not EC2." },
      { id: "c", text: "Yes." },
      { id: "d", text: "No." },
    ],
    correctOptionId: "d",
  },

  {
    id: "q98",
    prompt:
      "A user wants to increase the durability and availability of the EBS volume. Which of the below mentioned actions should he perform?",
    options: [
      { id: "a", text: "Take regular snapshots." },
      { id: "b", text: "Create an AM." },
      { id: "c", text: "Create EBS with higher capacity." },
      { id: "d", text: "Access EBS regularly." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q99",
    prompt: "What does Amazon RDS stand for?",
    options: [
      { id: "a", text: "Regional Data Server." },
      { id: "b", text: "Relational Database Service." },
      { id: "c", text: "Nothing." },
      { id: "d", text: "Regional Database Service." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q100",
    prompt:
      "You have been asked to set up monitoring of your network and you have decided that Cloudwatch would be the best service to use. Amazon CloudWatch monitors your Amazon Web Services (AWS) resources and the applications you run on AWS in real-time. You can use CloudWatch to collect and track metrics, which are the variables you want to measure for your resources and applications. Which of the following items listed can AWS Cloudwatch monitor?",
    options: [
      { id: "a", text: "Log files your applications generate." },
      { id: "b", text: "All of the items listed on this page." },
      {
        id: "c",
        text: "System-wide visibility into resource utilization, application performance, and operational health.",
      },
      {
        id: "d",
        text: "Custom metrics generated by your applications and services.",
      },
    ],
    correctOptionId: "b",
  },

  {
    id: "q101",
    prompt:
      "What is the maximum write throughput I can provision for a single Dynamic DB table?",
    options: [
      { id: "a", text: "1,000 write capacity units." },
      { id: "b", text: "100,000 write capacity units." },
      {
        id: "c",
        text: "Dynamic DB is designed to scale without limits, but if you go beyond 10,000 you have to contact AWS first.",
      },
      { id: "d", text: "10,000 write capacity units." },
    ],
    correctOptionId: "c",
  },

  {
    id: "q102",
    prompt:
      "Do Amazon EBS volumes persist independently from the running life of an Amazon EC2 instance?",
    options: [
      {
        id: "a",
        text: "Yes, they do but only if they are detached from the instance.",
      },
      { id: "b", text: "No, you cannot attach EBS volumes to an instance." },
      { id: "c", text: "No, they are dependent." },
      { id: "d", text: "Yes, they do." },
    ],
    correctOptionId: "d",
  },

  {
    id: "q103",
    prompt: "What is a Security Group?",
    options: [
      { id: "a", text: "None of these." },
      {
        id: "b",
        text: "A list of users that can access Amazon EC2 instances.",
      },
      { id: "c", text: "An Access Control List (ACL) for AWS resources." },
      {
        id: "d",
        text: "A firewall for inbound traffic, built-in around every Amazon EC2 instance.",
      },
    ],
    correctOptionId: "d",
  },

  {
    id: "q104",
    prompt:
      "You need to set up a high level of security for an Amazon Relational Database Service (RDS) you have just built in order to protect the confidential information stored in it. What are all the possible security groups that RDS uses?",
    options: [
      {
        id: "a",
        text: "DB security groups, VPC security groups, and EC2 security groups.",
      },
      { id: "b", text: "DB security groups only." },
      { id: "c", text: "EC2 security groups only." },
      { id: "d", text: "VPC security groups, and EC2 security groups." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q105",
    prompt:
      "In the 'Detailed' monitoring data available for your Amazon EBS volumes, Provisioned IOPS volumes automatically send [...] minute metrics to Amazon CloudWatch.",
    options: [
      { id: "a", text: "3." },
      { id: "b", text: "1." },
      { id: "c", text: "5." },
      { id: "d", text: "2." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q106",
    prompt:
      "You are looking at ways to improve some existing infrastructure as it seems a lot of engineering resources are being taken up with basic management and monitoring tasks and the costs seem to be excessive. You are thinking of deploying Amazon ElasticCache to help. Which of the following statements is true in regards to ElasticCache?",
    options: [
      {
        id: "a",
        text: "You can improve load and response times to user actions and queries however the cost associated with scaling web applications will be more.",
      },
      {
        id: "b",
        text: "You can't improve load and response times to user actions and queries but you can reduce the cost associated with scaling web applications.",
      },
      {
        id: "c",
        text: "You can improve load and response times to user actions and queries however the cost associated with scaling web applications will remain the same.",
      },
      {
        id: "d",
        text: "You can improve load and response times to user actions and queries and also reduce the cost associated with scaling web applications.",
      },
    ],
    correctOptionId: "d",
  },

  {
    id: "q107",
    prompt:
      "A customer needs corporate IT governance and cost oversight of all AWS resources consumed by its divisions. The divisions want to maintain administrative control of the discrete AWS resources they consume and keep those resources separate from the resources of other divisions. Which of the following options, when used together will support the autonomy/control of divisions while enabling corporate IT to maintain governance and cost oversight? (Choose 2 answers)",
    options: [
      {
        id: "a",
        text: "Use AWS Consolidated Billing and disable AWS root account access for the child accounts.",
      },
      {
        id: "b",
        text: "Enable IAM cross-account access for all corporate IT administrators in each child account.",
      },
      {
        id: "c",
        text: "Create separate VPCs for each division within the corporate IT AWS account.",
      },
      {
        id: "d",
        text: "Use AWS Consolidated Billing to link the divisions' accounts to a parent corporate account.",
      },
      {
        id: "e",
        text: "Write all child AWS CloudTrail and Amazon CloudWatch logs to each child account's Amazon S3 'Log' bucket.",
      },
    ],
    correctOptionId: "d,e",
  },

  {
    id: "q108",
    prompt:
      "After creating a new IAM user which of the following must be done before they can successfully make API calls?",
    options: [
      { id: "a", text: "Add a password to the user." },
      { id: "b", text: "Enable Multi-Factor Authentication for the user." },
      { id: "c", text: "Assign a Password Policy to the user." },
      { id: "d", text: "Create a set of Access Keys for the user." },
    ],
    correctOptionId: "d",
  },

  {
    id: "q109",
    prompt:
      "A friend wants you to set up a small BitTorrent storage area for him on Amazon S3. You tell him it is highly unlikely that AWS would allow such a thing in their infrastructure. However you decide to investigate. Which of the following statements best describes using BitTorrent with Amazon S3?",
    options: [
      {
        id: "a",
        text: "Amazon S3 does not support the BitTorrent protocol because it is used for pirated software.",
      },
      {
        id: "b",
        text: "You can use the BitTorrent protocol but only for objects that are less than 100 GB in size.",
      },
      {
        id: "c",
        text: "You can use the BitTorrent protocol but you need to ask AWS for specific permissions first.",
      },
      {
        id: "d",
        text: "You can use the BitTorrent protocol but only for objects that are less than 5 GB in size.",
      },
    ],
    correctOptionId: "d",
  },

  {
    id: "q110",
    prompt:
      "IAM's Policy Evaluation Logic always starts with a default [...] for every request, except for those that use the AWS account's root security credentials?",
    options: [
      { id: "a", text: "Permit." },
      { id: "b", text: "Deny." },
      { id: "c", text: "Cancel." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q111",
    prompt:
      "You have been given a scope to deploy some AWS infrastructure for a large organization. The requirements are that you will have a lot of EC2 instances but may need to add more when the average utilization of your Amazon EC2 fleet is high and conversely remove them when CPU utilization is low. Which AWS services would be best to use to accomplish this?",
    options: [
      {
        id: "a",
        text: "Auto Scaling, Amazon CloudWatch and AWS Elastic Beanstalk.",
      },
      {
        id: "b",
        text: "Auto Scaling, Amazon CloudWatch and Elastic Load Balancing.",
      },
      {
        id: "c",
        text: "Amazon CloudFront, Amazon CloudWatch and Elastic Load Balancing.",
      },
      {
        id: "d",
        text: "AWS Elastic Beanstalk, Amazon CloudWatch and Elastic Load Balancing.",
      },
    ],
    correctOptionId: "b",
  },

  {
    id: "q112",
    prompt: "When does the billing of an Amazon EC2 system begin?",
    options: [
      {
        id: "a",
        text: "It starts when the Status column for your distribution changes from Creating to Deployed.",
      },
      {
        id: "b",
        text: "It starts as soon as you click the create instance option on the main EC2 console.",
      },
      {
        id: "c",
        text: "It starts when your instance reaches 720 instance hours.",
      },
      {
        id: "d",
        text: "It starts when Amazon EC2 initiates the boot sequence of an AMI instance.",
      },
    ],
    correctOptionId: "d",
  },

  {
    id: "q113",
    prompt:
      "A user is storing a large number of objects on AWS S3. The user wants to implement the search functionality among the objects. How can the user achieve this?",
    options: [
      { id: "a", text: "Use the indexing feature of S3." },
      { id: "b", text: "Tag the objects with the metadata to search on that." },
      { id: "c", text: "Use the query functionality of S3." },
      {
        id: "d",
        text: "Make your own DB system which stores the S3 metadata for the search functionality.",
      },
    ],
    correctOptionId: "d",
  },

  {
    id: "q114",
    prompt:
      "A corporate web application is deployed within an Amazon Virtual Private Cloud (VPC) and is connected to the corporate data center via an IPsec VPN. The application must authenticate against the on-premises LDAP server. After authentication, each logged-in user can only access an Amazon Simple Storage Space (S3) keyspace specific to that user. Which two approaches can satisfy these objectives? (Choose 2 answers)",
    options: [
      {
        id: "a",
        text: "Develop an identity broker that authenticates against IAM security Token service to assume a Lam role in order to get temporary AWS security credentials The application calls the identity broker toget AWS temporary security credentials with access to the appropriate S3 bucket.",
      },
      {
        id: "b",
        text: "The application authenticates against LDAP and retrieves the name of an IAM role associated with the user. The application then ca lls the IAM Security Token Service to assume that IAM role The application can use the temporary credentials to access the appropriate S3 bucket.",
      },
      {
        id: "c",
        text: "Develop an identity broker that authenticates against LDAP and then calls IAM Security To ken Service to get IAM federated user credentials The application calls the identity broker to get IAMfederated user credentials with access to the appropriate S3 bucket.",
      },
      {
        id: "d",
        text: "The application authenticates against LDAP the application then calls the AWS identity and Access Management (IAM) Security service to log in to IAM using the LDAP credentials the application can use the IAM temporary credentials to access the appropriate S3 bucket.",
      },
      {
        id: "e",
        text: "The application authenticates against IAM Security Token Service using the LDAP credentials the application uses those temporary AWS security credentials to access the appropriate S3 bucket.",
      },
    ],
    correctOptionId: "b,c",
  },

  {
    id: "q115",
    prompt:
      "A group can contain many users. Can a user belong to multiple groups?",
    options: [
      { id: "a", text: "Yes always." },
      { id: "b", text: "No." },
      {
        id: "c",
        text: "Yes but only if they are using two factor authentication.",
      },
      { id: "d", text: "Yes but only in VPC." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q116",
    prompt: "Does Dynamo DB support in-place atomic updates?",
    options: [
      { id: "a", text: "It is not defined." },
      { id: "b", text: "Yes." },
      { id: "c", text: "It does support in-place non-atomic updates." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q117",
    prompt:
      "Can you move a Reserved Instance from one Availability Zone to another?",
    options: [
      {
        id: "a",
        text: "Yes, but each Reserved Instance is associated with a specific Region that cannot be changed.",
      },
      { id: "b", text: "Yes, only in US-West-2." },
      { id: "c", text: "Yes, only in US-East-1." },
      { id: "d", text: "No." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q118",
    prompt:
      "You want to establish a dedicated network connection from your premises to AWS in order to save money by transferring data directly to AWS rather than through your internet service provider. You are sure there must be some other benefits beyond cost savings. Which of the following statements would be the best choice to put your client's mind at rest?",
    options: [
      {
        id: "a",
        text: "Different instances running on the same physical machine are isolated from each other via a 256-bit Advanced Encryption Standard (AES-256).",
      },
      {
        id: "b",
        text: "Different instances running on the same physical machine are isolated from each other via the Xen hypervisor and via a 256-bit Advanced Encryption Standard (AES-256).",
      },
      {
        id: "c",
        text: "Different instances running on the same physical machine are isolated from each other via the Xen hypervisor.",
      },
      {
        id: "d",
        text: "Different instances running on the same physical machine are isolated from each other via IAM permissions.",
      },
    ],
    correctOptionId: "c",
  },

  {
    id: "q119",
    prompt:
      "Can I detach the primary (ethO) network interface when the instance is running or stopped?",
    options: [
      { id: "a", text: "Yes, You can." },
      { id: "b", text: "No. You cannot." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q120",
    prompt:
      "You have launched an Amazon Elastic Compute Cloud (EC2) instance into a public subnet with a primary private I P address assigned, an internet gateway is attached to the VPC, and the public route table is configured to send all Internet-based traffic to the Internet gateway. The instance security group is set to allow all outbound traffic but cannot access the internet. Why is the Internet unreachable from this instance?",
    options: [
      { id: "a", text: "The instance does not have a public IP address." },
      {
        id: "b",
        text: "The internet gateway security group must allow all outbound traffic.",
      },
      {
        id: "c",
        text: "The instance security group must allow all inbound traffic.",
      },
      {
        id: "d",
        text: "The instance 'Source/Destination check' property must be enabled.",
      },
    ],
    correctOptionId: "a",
  },

  {
    id: "q121",
    prompt:
      "Which of the following statements best describes the differences between Elastic Beanstalk and CloudFormation?",
    options: [
      {
        id: "a",
        text: "Elastic Beanstalk uses Elastic load balancing and CloudFormation doesn't.",
      },
      {
        id: "b",
        text: "CloudFormation is faster in deploying applications than Elastic Beanstalk.",
      },
      {
        id: "c",
        text: "Elastic Beanstalk is faster in deploying applications than CloudFormation.",
      },
      {
        id: "d",
        text: "CloudFormation is much more powerful than Elastic Beanstalk, because you can actually design and script custom resources.",
      },
    ],
    correctOptionId: "d",
  },

  {
    id: "q122",
    prompt:
      "It is advised that you watch the Amazon CloudWatch [...] metric (available via the AWS Management Console or Amazon Cloud Watch APIs) carefully and recreate the Read Replica should it fall behind due to replication errors.",
    options: [
      { id: "a", text: "Write Lag." },
      { id: "b", text: "Read Replica." },
      { id: "c", text: "Replica Lag." },
      { id: "d", text: "Single Replica." },
    ],
    correctOptionId: "c",
  },

  {
    id: "q123",
    prompt:
      "Your application provides data transformation services. Files containing data to be transformed are first uploaded to Amazon S3 and then transformed by a fleet of spot EC2 instances. Fi les submitted by your premium customers must be transformed with the highest priority. How should you implement such a system?",
    options: [
      {
        id: "a",
        text: "Use a DynamoDB table with an attribute defining the priority level. Transformation instances will scan the table for tasks, sorting the results by priority level.",
      },
      {
        id: "b",
        text: "Use Route 53 latency based-routing to send high priority tasks to the closest transformation instances.",
      },
      {
        id: "c",
        text: "Use two SQS queues, one for high priority messages, the other for default priority. Transformation instances first poll the high priority queue; if there is no message, they poll the default priority queue.",
      },
      {
        id: "d",
        text: "Use a single SQS queue. Each message contains the priority level. Transformation instances poll high-priority messages first.",
      },
    ],
    correctOptionId: "c",
  },

  {
    id: "q124",
    prompt:
      "True or False: When you view the block device mapping for your instance, you can see only the EBS volumes, not the instance store volumes.",
    options: [
      { id: "a", text: "Depends on the instance type." },
      { id: "b", text: "False." },
      { id: "c", text: "Depends on whether you use API call." },
      { id: "d", text: "True." },
    ],
    correctOptionId: "d",
  },

  {
    id: "q125",
    prompt: "Does AWS CloudFormation support Amazon EC2 tagging?",
    options: [
      { id: "a", text: "Yes, AWS CloudFormation supports Amazon EC2 tagging." },
      { id: "b", text: "No, CloudFormation doesn't support any tagging." },
      { id: "c", text: "No, it doesn't support Amazon EC2 tagging." },
      {
        id: "d",
        text: "It depends if the Amazon EC2 tagging has been defined in the template.",
      },
    ],
    correctOptionId: "a",
  },

  {
    id: "q126",
    prompt:
      "If I modify a DB Instance or the DB parameter group associated with the instance, should I reboot the instance for the changes to take effect?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q127",
    prompt:
      "If you are using Amazon RDS Provisioned IOPS storage with MySQL and Oracle database engines, you can scale the throughput of your database Instance by specifying the IOPS rate from [...].",
    options: [
      { id: "a", text: "1,000 to 100,000." },
      { id: "b", text: "100 to 1,000." },
      { id: "c", text: "10,000 to 100,000." },
      { id: "d", text: "1,000 to 10,000." },
    ],
    correctOptionId: "d",
  },

  {
    id: "q128",
    prompt:
      "To specify a resource in a policy statement, in Amazon EC2, can you use its Amazon Resource Name (ARN)?",
    options: [
      { id: "a", text: "Yes, you can." },
      { id: "b", text: "No, you can't because EC2 is not related to AR" },
      {
        id: "c",
        text: "No, you can't because you can't specify a particular Amazon EC2 resource in an IAM policy.",
      },
      {
        id: "d",
        text: "Yes, you can but only for the resources that are not affected by the action.",
      },
    ],
    correctOptionId: "a",
  },

  {
    id: "q129",
    prompt:
      "An enterprise wants to use a third-party SaaS application. The SaaS application needs to have access to issue several API commands to discover Amazon EC2 resources running within the enterprise's account The enterprise has internal security policies that require any outside access to their environment must conform to the principles of least privilege and there must be controls in place to ensure that the credentials used by the 5aa5 vendor cannot be used by any other third party. Which of the following would meet all of these conditions?",
    options: [
      {
        id: "a",
        text: "From the AWS Management Console, navigate to the Security Credentials page and retrieve the access and secret key for your account.",
      },
      {
        id: "b",
        text: "Create an IAM user within the enterprise account assign a user policy to the IAM user that allows only the actions required by the SaaS application create a new access and secret key for the user and provide these credentials to the 5aa5 provider.",
      },
      {
        id: "c",
        text: "Create an IAM role for cross-account access allows the SaaS provider's account to assume the role and assign it a policy that allows only the actions required by the SaaS application.",
      },
      {
        id: "d",
        text: "Create an IAM role for EC2 instances, assign it a policy that allows only the actions required tor the Saas application to work, provide the role ARM to the SaaS provider to use when launching their application instances.",
      },
    ],
    correctOptionId: "c",
  },

  {
    id: "q130",
    prompt:
      "By default what are ENIs that are automatically created and attached to instances using the EC2 console set to do when the attached instance terminates?",
    options: [
      { id: "a", text: "Remain as is." },
      { id: "b", text: "Terminate." },
      { id: "c", text: "Hibernate." },
      { id: "d", text: "Pause." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q131",
    prompt:
      "In EC2, what happens to the data in an instance store if an instance reboots (either intentionally or unintentionally)?",
    options: [
      {
        id: "a",
        text: "Data is deleted from the instance store for security reasons.",
      },
      { id: "b", text: "Data persists in the instance store." },
      { id: "c", text: "Data is partially present in the instance store." },
      { id: "d", text: "Data in the instance store will be lost." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q132",
    prompt:
      "You are designing a social media site and are considering how to mitigate distributed denial-of service (DDoS) attacks. Which of the below are viable mitigation techniques? (Choose 3 answers)",
    options: [
      {
        id: "a",
        text: "Add multiple elastic network interfaces (ENis) to each EC2 instance to increase the network bandwidth.",
      },
      {
        id: "b",
        text: "Use dedicated instances to ensure that each instance has the maximum performance possible.",
      },
      {
        id: "c",
        text: "Use an Amazon CloudFront distribution for both static and dynamic content.",
      },
      {
        id: "d",
        text: "Use an Elastic Load Balancer with auto scaling groups at the web. App and Amazon Relational Database Service (RDS) tiers.",
      },
      {
        id: "e",
        text: "Add alert Amazon CloudWatch to look for high Network in and CPU utilization.",
      },
      {
        id: "f",
        text: "Create processes and capabilities to quickly add and remove rules to the instance OS firewall.",
      },
    ],
    correctOptionId: "c,d,e",
  },

  {
    id: "q133",
    prompt:
      "In Amazon CloudFront, if you use Amazon EC2 instances and other custom origins with CloudFront, it is recommended to [...].",
    options: [
      { id: "a", text: "not use Elastic Load Balancing." },
      {
        id: "b",
        text: "restrict Internet communication to private instances while allowing outgoing traffic.",
      },
      { id: "c", text: "enable access key rotation for CloudWatch metrics." },
      {
        id: "d",
        text: "specify the URL of the load balancer for the domain name of your origin server.",
      },
    ],
    correctOptionId: "d",
  },

  {
    id: "q134",
    prompt:
      "Which of the following statements is true regarding attaching network interfaces to your instances in your VPC?",
    options: [
      { id: "a", text: "You can attach 5 ENIs per instance type." },
      { id: "b", text: "You can attach as many ENIs as you want." },
      {
        id: "c",
        text: "The number of ENIs you can attach varies by instance type.",
      },
      {
        id: "d",
        text: "You can attach 100 ENIs total regardless of instance type.",
      },
    ],
    correctOptionId: "c",
  },

  {
    id: "q135",
    prompt: "What is the reason for this?",
    options: [
      { id: "a", text: "For security reasons." },
      { id: "b", text: "Hardware restrictions." },
      {
        id: "c",
        text: "Public (IPV4) internet addresses are a scarce resource.",
      },
      { id: "d", text: "There are only 5 network interfaces per instance." },
    ],
    correctOptionId: "c",
  },

  {
    id: "q136",
    prompt: "Can a 'user' be associated with multiple AWS accounts?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q137",
    prompt:
      "You have an application running on an Amazon Elastic Compute Cloud instance, that uploads 5 GB video objects to Amazon Simple Storage Service (S3). Video uploads are taking longer than expected, resulting in poor application performance. Which method will help improve performance of your application?",
    options: [
      { id: "a", text: "Enable enhanced networking." },
      { id: "b", text: "Use Amazon S3 multipart upload." },
      {
        id: "c",
        text: "Leveraging Amazon CloudFront, use the HTTP POST method to reduce latency.",
      },
      {
        id: "d",
        text: "Use Amazon Elastic Block Store Provisioned IOPs and use an Amazon EBS-optimized instance.",
      },
    ],
    correctOptionId: "b",
  },

  {
    id: "q138",
    prompt:
      "You have been given a scope to set up an AWS Media Sharing Framework for a new start up photo sharing company similar to flickr. The first thing that comes to mind about this is that it will obviously need a huge amount of persistent data storage for this framework. Which of the following storage options would be appropriate for persistent storage?",
    options: [
      { id: "a", text: "Amazon Glacier or Amazon S3." },
      { id: "b", text: "Amazon Glacier or AWS Import/Export." },
      { id: "c", text: "AWS Import/Export or Amazon CloudFront." },
      { id: "d", text: "Amazon EBS volumes or Amazon S3." },
    ],
    correctOptionId: "d",
  },

  {
    id: "q139",
    prompt:
      "You need a persistent and durable storage to trace call activity of an IVR (Interactive Voice Response) system. Call duration is mostly in the 2-3 minutes timeframe. Each traced call can be either active or terminated. An external application needs to know each minute the list of currently active calls, which are usually a few calls/second. Put once per month there is a periodic peak up to 1000 calls/second for a few hours. The system is open 24/7 and any downtime should be avoided. Historical data is periodically archived to files. Cost saving is a priority for this project. What database implementation would better fit this scenario, keeping costs as low as possible?",
    options: [
      {
        id: "a",
        text: "Use RDS Multi-AZ with two tables, one for 'Active calls' and one for 'Terminated calls'. in this way the 'Active calls' table is always small and effective to access.",
      },
      {
        id: "b",
        text: "Use DynamoDB with a 'Calls' table and a Global Secondary Index on a 'lsActive' attribute that is present for active calls only in this way the Global Secondary index is sparse and more effective.",
      },
      {
        id: "c",
        text: "Use DynamoDB with a 'Calls' table and a Global secondary index on a 'State' attribute that can equal to 'active' or 'terminated' in this way the Global Secondary index can be used for all Items in the table.",
      },
      {
        id: "d",
        text: "Use RDS Multi-AZ with a 'CALLS' table and an Indexed 'STATE* field that can be equal to 'ACTIVE' or 'TERMINATED' in this way the SOL query Is optimized by the use of the Index.",
      },
    ],
    correctOptionId: "a",
  },

  {
    id: "q140",
    prompt:
      "If you have chosen Multi-AZ deployment, in the event of a planned or unplanned outage of your primary DB Instance, Amazon RDS automatically switches to the standby replica. The automatic failover mechanism simply changes the record of the main DB Instance to point to the standby DB Instance.",
    options: [
      { id: "a", text: "DNAME." },
      { id: "b", text: "CNAME." },
      { id: "c", text: "TXT." },
      { id: "d", text: "MX." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q141",
    prompt:
      "All Amazon EC2 instances are assigned two IP addresses at launch. Which are those?",
    options: [
      { id: "a", text: "2 Elastic IP addresses." },
      { id: "b", text: "A private IP address and an Elastic IP address." },
      { id: "c", text: "A public IP address and an Elastic IP address." },
      { id: "d", text: "A private IP address and a public IP address." },
    ],
    correctOptionId: "d",
  },

  {
    id: "q142",
    prompt:
      "You need to pass a custom script to new Amazon Linux instances created in your Auto Scaling group. Which feature allows you to accomplish this?",
    options: [
      { id: "a", text: "User data." },
      { id: "b", text: "EC2Config service." },
      { id: "c", text: "IAM roles." },
      { id: "d", text: "AWS Config." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q143",
    prompt:
      "A customer wants to track access to their Amazon Simple Storage Service (S3) buckets and also use this information for their internal security and access audits. Which of the following will meet the Customer requirement?",
    options: [
      {
        id: "a",
        text: "Enable AWS CloudTrail to audit all Amazon S3 bucket access.",
      },
      {
        id: "b",
        text: "Enable server access logging for all required Amazon S3 buckets.",
      },
      {
        id: "c",
        text: "Enable the Requester Pays option to track access via AWS Billing.",
      },
      {
        id: "d",
        text: "Enable Amazon S3 event notifications for Put and Post.",
      },
    ],
    correctOptionId: "a",
  },

  {
    id: "q144",
    prompt: "Which DNS name can only be resolved within Amazon EC2?",
    options: [
      { id: "a", text: "Public DNS name." },
      { id: "b", text: "Internal DNS name." },
      { id: "c", text: "External DNS name." },
      { id: "d", text: "Global DNS name." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q145",
    prompt:
      "An AWS customer is deploying an application mat is composed of an AutoScaling group of EC2 Instances. The customers security policy requires that every outbound connection from these instances to any other service within the customers Virtual Private Cloud must be authenticated using a unique x 509 certificate that contains the specific instance-id. In addition an x 509 certificates must Designed by the customer's Key management service in order to be trusted for authentication. Which of the following configurations will support these requirements?",
    options: [
      {
        id: "a",
        text: "Configure an IAM Role that grants access to an Amazon S3 object containing a signed certificate and configure me Auto Scaling group to launch instances with this role Have the instances bootstrap get the certificate from Amazon S3 upon first boot.",
      },
      {
        id: "b",
        text: "Embed a certificate into the Amazon Machine Image that is used by the Auto Scaling group Have the launched instances generate a certificate signature request with the instance's assigned instance- id to the Key management service for signature.",
      },
      {
        id: "c",
        text: "Configure the Auto Scaling group to send an SNS notification of the launch of a new instance to the trusted key management service. Have the Key management service generate a signed certificate and send it directly to the newly launched instance.",
      },
      {
        id: "d",
        text: "Configure the launched instances to generate a new certificate upon first boot Have the Key management service poll the AutoScaling group for associated instances and send new instances a certificate signature (hat contains the specific instance-id.",
      },
    ],
    correctOptionId: "c",
  },

  {
    id: "q146",
    prompt:
      "A company is storing data on Amazon Simple Storage Service (S3). The company's security policy mandates that data is encrypted at rest. Which of the following methods can achieve this? (Choose 3 answers)",
    options: [
      {
        id: "a",
        text: "Use Amazon S3 server-side encryption with AWS Key Management Service managed keys.",
      },
      {
        id: "b",
        text: "Use Amazon S3 server-side encryption with customer-provided keys.",
      },
      {
        id: "c",
        text: "Use Amazon S3 server-side encryption with EC2 key pair.",
      },
      {
        id: "d",
        text: "Use Amazon S3 bucket policies to restrict access to the data at rest.",
      },
      {
        id: "e",
        text: "Encrypt the data on the client-side before ingesting to Amazon S3 using their own master key.",
      },
      {
        id: "f",
        text: "Use SSL to encrypt the data while in transit to Amazon S3.",
      },
    ],
    correctOptionId: "a,b,e",
  },

  {
    id: "q147",
    prompt: "In Amazon EC2, you are billed instance-hours when [...].",
    options: [
      { id: "a", text: "your EC2 instance is in a running state." },
      { id: "b", text: "the instance exits from Amazon S3 console." },
      { id: "c", text: "your instance still exits the EC2 console." },
      { id: "d", text: "EC2 instances stop." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q148",
    prompt:
      "Which of the below mentioned options is a possible solution to avoid any security threat?",
    options: [
      {
        id: "a",
        text: "Use the IAM based single sign between the AWS resources and the organization application.",
      },
      { id: "b", text: "Use the IAM role and assign it to the instance." },
      {
        id: "c",
        text: "Since the application is hosted on EC2, it does not need credentials to access S3.",
      },
      {
        id: "d",
        text: "Use the 509 certificates instead of the access and the secret access keys.",
      },
    ],
    correctOptionId: "b",
  },

  {
    id: "q149",
    prompt:
      "In Amazon EC2 Container Service components, what is the name of a logical grouping of container instances on which you can place tasks?",
    options: [
      { id: "a", text: "A cluster." },
      { id: "b", text: "A container instance." },
      { id: "c", text: "A container." },
      { id: "d", text: "A task definition." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q150",
    prompt:
      "You are looking to migrate your Development (Dev) and Test environments to AWS. You have decided to use separate AWS accounts to host each environment. You plan to link each accounts bill to a Master AWS account using Consolidated Billing. To make sure you Keep within budget you would like to implement a way for administrators in the Master account to have access to stop, delete and/or terminate resources in both the Dev and Test accounts. Identify which option will allow you to achieve this goal.",
    options: [
      {
        id: "a",
        text: "Create IAM users in the Master account with full Admin permissions. Create cross-account roles in the Dev and Test accounts that grant the Master account access to the resources in the account by inheriting permissions from the Master account.",
      },
      {
        id: "b",
        text: "Create IAM users and a cross-account role in the Master account that grants full Admin permissions to the Dev and Test accounts.",
      },
      {
        id: "c",
        text: "Create IAM users in the Master account Create cross-account roles in the Dev and Test accounts that have full Admin permissions and grant the Master.",
      },
      {
        id: "d",
        text: "Link the accounts using Consolidated Billing. This will give IAM users in the Master account access to resources in the Dev and Test accounts.",
      },
    ],
    correctOptionId: "c",
  },

  {
    id: "q151",
    prompt:
      "What will be the status of the snapshot until the snapshot is complete?",
    options: [
      { id: "a", text: "Running." },
      { id: "b", text: "Working." },
      { id: "c", text: "Progressing." },
      { id: "d", text: "Pending." },
    ],
    correctOptionId: "d",
  },

  {
    id: "q152",
    prompt:
      "A customer is running a multi-tier web application farm in a virtual private cloud (VPC) that is not connected to their corporate network. They are connecting to the VPC over the Internet to manage all of their Amazon EC2 instances running in both the public and private subnets. They have only authorized the bastion-security-group with Microsoft Remote Desktop Protocol (RDP) access to the application instance security groups, but the company wants to further limit administrative access to all of the instances in the VPC. Which of the following Bastion deployment scenarios will meet this requirement?",
    options: [
      {
        id: "a",
        text: "Deploy a Windows Bastion host on the corporate network that has RDP access to all instances in the VP.",
      },
      {
        id: "b",
        text: "Deploy a Windows Bastion host with an Elastic IP address in the public subnet and allow SSH access to the bastion from anywhere.",
      },
      {
        id: "c",
        text: "Deploy a Windows Bastion host with an Elastic IP address in the private subnet, and restrict RDP access to the bastion from only the corporate public IP addresses.",
      },
      {
        id: "d",
        text: "Deploy a Windows Bastion host with an auto-assigned Public IP address in the public subnet, and allow RDP access to the bastion from only the corporate public IP addresses.",
      },
    ],
    correctOptionId: "c",
  },

  {
    id: "q153",
    prompt:
      "True or False: Common points of failures like generators and cooling equipment are shared across Availability Zones.",
    options: [
      { id: "a", text: "True." },
      { id: "b", text: "False." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q154",
    prompt:
      "A company is building a voting system for a popular TV show, viewers win watch the performances then visit the show's website to vote for their favorite performer. It is expected that in a short period of time after the show has finished the site will receive millions of visitors. The visitors will first login to the site using their Amazon.com credentials and then submit their vote. After the voting is completed the page will display the vote totals. The company needs to build the site such that can handle the rapid influx of traffic while maintaining good performance but also wants to keep costs to a minimum. Which of the design patterns below should they use?",
    options: [
      {
        id: "a",
        text: "Use CloudFront and an Elastic Load balancer in front of an auto-scaled set of web servers, the web servers will first can the Login With Amazon service to authenticate the user then process the users vote and store the result into a multi-AZ Relational Database Service instance.",
      },
      {
        id: "b",
        text: "Use CloudFront and the static website hosting feature of S3 with the Javascript SDK to call the Login With Amazon service to authenticate the user, use IAM Roles to gain permissions to a DynamoDB table to store the users vote.",
      },
      {
        id: "c",
        text: "Use CloudFront and an Elastic Load Balancer in front of an auto-scaled set of web servers, the web servers will first call the Login with Amazon service to authenticate the user, the web servers will process the users vote and store the result into a DynamoDB table using IAM Roles for EC2 instances to gain permissions to the DynamoDB table.",
      },
      {
        id: "d",
        text: "Use CloudFront and an Elastic Load Balancer in front of an auto-scaled set of web servers, the web servers will first call the Login. With Amazon service to authenticate the user, the web servers win process the users vote and store the result into an SQS queue using IAM Roles for EC2 Instances to gain permissions to the SQS queue. A set of application servers will then retrieve the items from the queue and store the result into a DynamoDB table.",
      },
    ],
    correctOptionId: "d",
  },

  {
    id: "q155",
    prompt:
      "You are designing a photo sharing mobile app the application will store all pictures in a single Amazon S3 bucket. Users will upload pictures from their mobile device directly to Amazon S3 and will be able to view and download their own pictures directly from Amazon S3. You want to configure security to handle potentially millions of users in the most secure manner possible. What should your server-side application do when a new user registers on the photo sharing mobile application?",
    options: [
      {
        id: "a",
        text: "Create a set of long-term credentials using AWS Security Token Service with appropriate permissions Store these credentials in the mobile app and use them to access Amazon S3.",
      },
      {
        id: "b",
        text: "Record the user's Information in Amazon RDS and create a role in IAM with appropriate permissions. When the user uses their mobile app create temporary credentials using the AWS Security Token Service 'Assume Role' function Store these credentials in the mobile app's memory and use them to access Amazon S3 Generate new credentials the next time the user runs the mobile app.",
      },
      { id: "c", text: "Record the user's Information in Amazon DynamoDB." },
      {
        id: "d",
        text: "When the user uses their mobile app create temporary credentials using AWS Security Token Service with appropriate permissions Store these credentials in the mobile app's memory and use them to access Amazon S3 Generate new credentials the next time the user runs the mobile app.",
      },
      {
        id: "e",
        text: "Create IAM user. Assign appropriate permissions to the IAM user Generate an access key and secret key for the IAM user, store them in the mobile app and use these credentials to access Amazon S3.",
      },
      {
        id: "f",
        text: "Create an IAM user. Update the bucket policy with appropriate permissions for the IAM user Generate an access Key and secret Key for the IAM user, store them in the mobile app and use these credentials to access Amazon S3.",
      },
    ],
    correctOptionId: "b",
  },

  {
    id: "q156",
    prompt: "Is there a limit to how many groups a user can be in?",
    options: [
      { id: "a", text: "Yes for all users." },
      { id: "b", text: "Yes for all users except root." },
      { id: "c", text: "No." },
      { id: "d", text: "Yes unless special permission granted." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q157",
    prompt: "Which is the default region in AWS?",
    options: [
      { id: "a", text: "eu-west-1." },
      { id: "b", text: "us-east-1." },
      { id: "c", text: "us-east-2." },
      { id: "d", text: "ap-southeast-1." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q158",
    prompt:
      "Your company hosts a social media site supporting users in multiple countries. You have been asked to provide a highly available design tor the application that leverages multiple regions tor the most recently accessed content and latency sensitive portions of the wet) site The most latency sensitive component of the application involves reading user preferences to support web site personalization and ad selection. In addition to running your application in multiple regions, which option will support this application's requirements?",
    options: [
      {
        id: "a",
        text: "Serve user content from S3. CloudFront and use Route 53 latency-based routing between ELBs in each region Retrieve user preferences from a local DynamoDB table in each region and leverage SQS to capture changes to user preferences with 505 workers for propagating updates to each table.",
      },
      {
        id: "b",
        text: "Use the 53 Copy API to copy recently accessed content to multiple regions and serve user content from S3. CloudFront with dynamic content and an ELB in each region Retrieve user preferences from an ElasticCache cluster in each region and leverage SNS notifications to propagate user preference changes to a worker node in each region.",
      },
      {
        id: "c",
        text: "Use the 53 Copy API to copy recently accessed content to multiple regions and serve user content from S3 CloudFront and Route 53 latency-based routing Between ELBs in each region Retrieve user preferences from a DynamoDB table and leverage SQS to capture changes to user preferences with 505 workers for propagating DynamoDB updates.",
      },
      {
        id: "d",
        text: "Serve user content from S3. CloudFront with dynamic content, and an ELB in each region Retrieve user preferences from an ElastiCache cluster in each region and leverage Simple Workflow (SWF) to manage the propagation of user preferences from a centralized OB to each ElastiCache cluster.",
      },
    ],
    correctOptionId: "a",
  },

  {
    id: "q159",
    prompt:
      "A [...] is a document that provides a formal statement of one or more permissions.",
    options: [
      { id: "a", text: "policy." },
      { id: "b", text: "permission." },
      { id: "c", text: "role." },
      { id: "d", text: "resource." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q160",
    prompt:
      "A company wants to implement their website in a virtual private cloud (VPC). The web tier will use an Auto Scaling group across multiple Availability Zones (AZs). The database will use Multi-AZ RDSMySQL and should not be publicly accessible. What is the minimum number of subnets that need to be configured in the VPC?",
    options: [
      { id: "a", text: "1." },
      { id: "b", text: "2." },
      { id: "c", text: "3." },
      { id: "d", text: "4." },
    ],
    correctOptionId: "d",
  },

  {
    id: "q161",
    prompt: "Is there a limit to the number of groups you can have?",
    options: [
      { id: "a", text: "Yes for all users except root." },
      { id: "b", text: "No." },
      { id: "c", text: "Yes unless special permission granted." },
      { id: "d", text: "Yes for all users." },
    ],
    correctOptionId: "d",
  },

  {
    id: "q162",
    prompt:
      "True or False: Automated backups are enabled by default for a new DB Instance",
    options: [
      { id: "a", text: "True." },
      { id: "b", text: "False." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q163",
    prompt:
      "What is one key difference between an Amazon EBS-backed and an instance-store backed instance?",
    options: [
      {
        id: "a",
        text: "Amazon EBS-backed instances can be stopped and restarted.",
      },
      {
        id: "b",
        text: "Instance-store backed instances can be stopped and restarted.",
      },
      {
        id: "c",
        text: "Auto scaling requires using Amazon EBS-backed instances.",
      },
      { id: "d", text: "Virtual Private Cloud requires EBS backed instances." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q164",
    prompt:
      "A major customer has asked you to set up his AWS infrastructure so that it will be easy to recover in the case of a disaster of some sort. Which of the following statements is true of Amazon EC2 security groups?",
    options: [
      {
        id: "a",
        text: "Create and maintain AMIs of key servers where fast recovery is required.",
      },
      {
        id: "b",
        text: "Regularly run your servers, test them, and apply any software updates and configuration changes.",
      },
      {
        id: "c",
        text: "Ensure that you have all supporting custom software packages available in AWS.",
      },
      {
        id: "d",
        text: "All items listed here are important when thinking about disaster recovery.",
      },
    ],
    correctOptionId: "d",
  },

  {
    id: "q165",
    prompt:
      "Select a true statement about Amazon EC2 Security Groups (EC2-Classic).",
    options: [
      {
        id: "a",
        text: "After you launch an instance in EC2-Classic, you can't change its security groups.",
      },
      {
        id: "b",
        text: "After you launch an instance in EC2-Classic, you can change its security groups only once.",
      },
      {
        id: "c",
        text: "After you launch an instance in EC2-Classic, you can only add rules to a security group.",
      },
      {
        id: "d",
        text: "After you launch an instance in EC2-Classic, you cannot add or remove rules from a security group.",
      },
    ],
    correctOptionId: "a",
  },

  {
    id: "q166",
    prompt:
      "To view information about an Amazon EBS volume, open the Amazon EC2 console at <https://console.aws.amazon.com/ec2/>, click in the Navigation panel.",
    options: [
      { id: "a", text: "EBS." },
      { id: "b", text: "Describe." },
      { id: "c", text: "Details." },
      { id: "d", text: "Volumes." },
    ],
    correctOptionId: "d",
  },

  {
    id: "q167",
    prompt:
      "True or False: Provisioned IOPS Costs - you are charged for the IOPS and storage whether or not you use them in a given month.",
    options: [
      { id: "a", text: "True." },
      { id: "b", text: "False." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q168",
    prompt:
      "You have an EC2 Security Group with several running EC2 instances. You change the Security Group rules to allow inbound traffic on a new port and protocol, and launch several new instances in the same Security Group. The new rules apply:",
    options: [
      { id: "a", text: "Immediately to all instances in the security group." },
      { id: "b", text: "Immediately to the new instances only." },
      {
        id: "c",
        text: "Immediately to the new instances, but old instances must be stopped and restarted before the new rules apply.",
      },
      {
        id: "d",
        text: "To all instances, but it may take several minutes for old instances to see the changes.",
      },
    ],
    correctOptionId: "a",
  },

  {
    id: "q169",
    prompt: "An edge location refers to which Amazon Web Service?",
    options: [
      {
        id: "a",
        text: "An edge location is referred to the network configured within a Zone or Region.",
      },
      { id: "b", text: "An edge location is an AWS Region." },
      {
        id: "c",
        text: "An edge location is the location of the data center used for Amazon CloudFront.",
      },
      { id: "d", text: "An edge location is a Zone within an AWS Region." },
    ],
    correctOptionId: "c",
  },

  {
    id: "q170",
    prompt:
      "If I want to run a database in an Amazon instance, which is the most recommended Amazon storage option?",
    options: [
      { id: "a", text: "Amazon Instance Storage." },
      { id: "b", text: "Amazon EBS." },
      { id: "c", text: "You can't run a database inside an Amazon instance." },
      { id: "d", text: "Amazon S3." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q171",
    prompt:
      "A customer is leveraging Amazon Simple Storage Service in eu-west-1 to store static content for a web-based property. The customer is storing objects using the Standard Storage class. Where are the customers objects replicated?",
    options: [
      {
        id: "a",
        text: "A single facility in eu-west-1 and a single facility in eu-central-1.",
      },
      {
        id: "b",
        text: "A single facility in eu-west-1 and a single facility in us-east-1.",
      },
      { id: "c", text: "Multiple facilities in eu-west-1." },
      { id: "d", text: "A single facility in eu-west-1." },
    ],
    correctOptionId: "c",
  },

  {
    id: "q172",
    prompt:
      "You have set up an S3 bucket with a number of images in it and you have decided that you want anybody to be able to access these images, even anonymous users. To accomplish this you create a bucket policy. You will need to use an Amazon S3 bucket policy that specifies a [...] in the principal element, which means anyone can access the bucket.",
    options: [
      { id: "a", text: "hash tag (#)." },
      { id: "b", text: "anonymous user." },
      { id: "c", text: "wildcard (*)." },
      { id: "d", text: "S3 user." },
    ],
    correctOptionId: "c",
  },

  {
    id: "q173",
    prompt:
      "You try to connect via SSH to a newly created Amazon EC2 instance and get one of the following error messages: 'Network error: Connection timed out' or 'Error connecting to [instance], reason: -> Connection timed out: connect,' You have confirmed that the network and security group rules are configured correctly and the instance is passing status checks. What steps should you take to identify the source of the behavior? (Choose 2 answers)",
    options: [
      {
        id: "a",
        text: "Verify that the private key file corresponds to the Amazon EC2 key pair assigned at launch.",
      },
      {
        id: "b",
        text: "Verify that your IAM user policy has permission to launch Amazon EC2 instances.",
      },
      {
        id: "c",
        text: "Verify that you are connecting with the appropriate user name for your AMI.",
      },
      {
        id: "d",
        text: "Verify that the Amazon EC2 Instance was launched with the proper IAM role.",
      },
      {
        id: "e",
        text: "Verify that your federation trust to AWS has been established.",
      },
    ],
    correctOptionId: "a,c",
  },

  {
    id: "q174",
    prompt:
      "An Auto-Scaling group spans 3 AZs and currently has 4 running EC2 instances. When Auto Scaling needs to terminate an EC2 instance by default, AutoScaling will: (Choose 2 answers)",
    options: [
      {
        id: "a",
        text: "Allow at least five minutes for Windows/Linux shutdown scripts to complete, before terminating the instance.",
      },
      {
        id: "b",
        text: "Terminate the instance with the least active network connections. If multiple instances meet this criterion, one will be randomly selected.",
      },
      { id: "c", text: "Send an SNS notification, if configured to do so." },
      {
        id: "d",
        text: "Terminate an instance in the AZ which currently has 2 running EC2 instances.",
      },
      {
        id: "e",
        text: "Randomly select one of the 3 AZs, and then terminate an instance in that A.",
      },
    ],
    correctOptionId: "c,d",
  },

  {
    id: "q175",
    prompt:
      "A photo-sharing service stores pictures in Amazon Simple Storage Service (S3) and allows application sign-in using an OpenID Connect-compatible identity provider. Which AWS Security Token Service approach to temporary access should you use for the Amazon S3 operations?",
    options: [
      { id: "a", text: "SAML-based Identity Federation." },
      { id: "b", text: "Cross-Account Access." },
      { id: "c", text: "AWS Identity and Access Management roles." },
      { id: "d", text: "Web Identity Federation." },
    ],
    correctOptionId: "d",
  },

  {
    id: "q176",
    prompt: "What is the maximum key length of a tag?",
    options: [
      { id: "a", text: "512 Unicode characters." },
      { id: "b", text: "64 Unicode characters." },
      { id: "c", text: "256 Unicode characters." },
      { id: "d", text: "128 Unicode characters." },
    ],
    correctOptionId: "d",
  },

  {
    id: "q177",
    prompt:
      "Does Amazon RDS allow direct host access via Telnet, Secure Shell (SSH), or Windows Remote Desktop Connection?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q178",
    prompt:
      "A user wants to achieve High Availability with PostgreSQL DB. Which of the below mentioned functionalities helps achieve HA?",
    options: [
      { id: "a", text: "Multi-AZ." },
      { id: "b", text: "Read Replica." },
      { id: "c", text: "Multi region." },
      { id: "d", text: "PostgreSQL does not support HA." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q179",
    prompt:
      "Are penetration tests allowed as long as they are limited to the customer's instances?",
    options: [
      { id: "a", text: "Yes, they are allowed but only for selected regions." },
      { id: "b", text: "No, they are never allowed." },
      { id: "c", text: "Yes, they are allowed without any permission." },
      { id: "d", text: "Yes, they are allowed but only with approval." },
    ],
    correctOptionId: "d",
  },

  {
    id: "q180",
    prompt:
      "You are building a system to distribute confidential documents to employees. Using CloudFront, what method could be used to serve content that is stored in S3, but not publically accessible from S3 directly?",
    options: [
      {
        id: "a",
        text: "Add the CloudFront account security group 'amazon-cf/amazon-cf-sg' to the appropriate S3 bucket policy.",
      },
      {
        id: "b",
        text: "Create a S3 bucket policy that lists the CloudFront distribution ID as the Principal and the target bucket as the Amazon Resource Name (ARN).",
      },
      {
        id: "c",
        text: "Create an Identity and Access Management (IAM) User for CloudFront and grant access to the objects in your S3 bucket to that IAM User.",
      },
      {
        id: "d",
        text: "Create an Origin Access Identity (OAI) for CloudFront and grant access to the objects in your S3 bucket to that OA.",
      },
    ],
    correctOptionId: "d",
  },

  {
    id: "q181",
    prompt:
      "You require the ability to analyze a large amount of data, which is stored on Amazon S3 using Amazon Elastic MapReduce. You are using the cc2 8x large Instance type, whose CPUs are mostly idle during processing. Which of the below would be the most cost efficient way to reduce the runtime of the job?",
    options: [
      { id: "a", text: "Create more smaller flies on Amazon S3." },
      {
        id: "b",
        text: "Add additional cc2 8x large instances by introducing a task group.",
      },
      {
        id: "c",
        text: "Use smaller instances that have higher aggregate 1/0 performance.",
      },
      { id: "d", text: "Create fewer, larger fi les on Amazon S3." },
    ],
    correctOptionId: "c",
  },

  {
    id: "q182",
    prompt:
      "What is the name of licensing model in which I can use your existing Oracle Database licenses to run Oracle deployments on Amazon RDS?",
    options: [
      { id: "a", text: "Bring Your Own License." },
      { id: "b", text: "Role Bases License." },
      { id: "c", text: "Enterprise License." },
      { id: "d", text: "License Included." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q183",
    prompt:
      "Which of the following statements are true about Amazon Route 53 resource records? (Choose 2 answers)",
    options: [
      {
        id: "a",
        text: "An Alias record can map one DNS name to another Amazon Route 53 DNS name.",
      },
      { id: "b", text: "A CNAME record can be created for your zone apex." },
      {
        id: "c",
        text: "An Amazon Route 53 CNAME record can point to any DNS record hosted anywhere.",
      },
      {
        id: "d",
        text: "TIL can be set for an Alias record in Amazon Route 53.",
      },
      {
        id: "e",
        text: "An Amazon Route 53 Alias record can point to any DNS record hosted anywhere.",
      },
    ],
    correctOptionId: "a,c",
  },

  {
    id: "q184",
    prompt:
      "Do you need to shutdown your EC2 instance when you create a snapshot of EBS volumes that serve as root devices?",
    options: [
      {
        id: "a",
        text: "No, you only need to shutdown an instance before deleting it.",
      },
      { id: "b", text: "Yes." },
      {
        id: "c",
        text: "No, the snapshot would turn off your instance automatically.",
      },
      { id: "d", text: "No." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q185",
    prompt:
      "Can I initiate a 'forced failover' for my Oracle Multi-AZ DB Instance deployment?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "Only in certain regions." },
      { id: "c", text: "Only in VPC." },
      { id: "d", text: "No." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q186",
    prompt:
      "Amazon RDS provides high availability and failover support for DB instances using [...].",
    options: [
      { id: "a", text: "customized deployments." },
      { id: "b", text: "AppStream customizations." },
      { id: "c", text: "log events." },
      { id: "d", text: "Multi-AZ deployments." },
    ],
    correctOptionId: "d",
  },

  {
    id: "q187",
    prompt:
      "True or False: Amazon EC2 has no Amazon Resource Names (ARNs) because you can't specify a particular Amazon EC2 resource in an IAM policy.",
    options: [
      { id: "a", text: "True." },
      { id: "b", text: "False." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q188",
    prompt:
      "A major client who has been spending a lot of money on his internet service provider asks you to set up an AWS Direct Connection to try and save him some money. You know he needs high-speed connectivity. Which connection port speeds are available on AWS Direct Connect?",
    options: [
      { id: "a", text: "500Mbps and 1Gbps." },
      { id: "b", text: "1Gbps and 10Gbps." },
      { id: "c", text: "100Mbps and 1Gbps." },
      { id: "d", text: "1Gbps." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q189",
    prompt:
      "What will be the state of the alarm at the end of 90 minutes, if the CPU utilization is constant at 80%?",
    options: [
      { id: "a", text: "ALERT." },
      { id: "b", text: "ALARM." },
      { id: "c", text: "OK." },
      { id: "d", text: "INSUFFICIENT_DATA." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q190",
    prompt:
      "A 3-tier e-commerce web application is current deployed on-premises and will be migrated to AWS for greater scalability and elasticity The web server currently shares read-only data using a network distributed file system The app server tier uses a clustering mechanism for discovery and shared session state that depends on I P multicast The database tier uses shared-storage clustering to provide database fail over capability, and uses several read slaves for scaling Data on all servers and the distributed file system directory is backed up weekly to off-site tapes. Which AWS storage and database architecture meets the requirements of the application?",
    options: [
      {
        id: "a",
        text: "Web servers: store read-only data in S3, and copy from S3 to root volume at boot time. App servers: share state using a combination of DynamoDB and IP unicast. Database: use RDS with multi-AZdeployment and one or more read replicas. Backup: web servers, app servers, and database backed up weekly to Glacier using snapshots.",
      },
      {
        id: "b",
        text: "Web servers: store read-only data in an EC2 NFS server, mount to each web server at boot time. App servers: share state using a combination of DynamoDB and IP multicast. Database: use RDS with multi-AZ deployment and one or more Read Replicas. Backup: web and app servers backed up weekly via AMIs, database backed up via DB snapshots.",
      },
      {
        id: "c",
        text: "Web servers: store read-only data in S3, and copy from S3 to root volume at boot time. App servers: share state using a combination of DynamoDB and IP unicast. Database: use RDS with multi-AZ deployment and one or more Read Replicas. Backup: web and app servers backed up weekly via AMIs, database backed up via DB snapshots.",
      },
      {
        id: "d",
        text: "Web servers: store read-only data in S3, and copy from S3 to root volume at boot time. App servers: share state using a combination of DynamoDB and IP unicast. Database: use RDS with multi-AZdeployment. Backup: web and app servers backed up weekly via AMIs, database backed up via DB snapshots.",
      },
    ],
    correctOptionId: "c",
  },

  {
    id: "q191",
    prompt: "What are the four levels of AWS Premium Support?",
    options: [
      { id: "a", text: "Basic, Developer, Business, Enterprise." },
      { id: "b", text: "Basic, Startup, Business, Enterprise." },
      { id: "c", text: "Free, Bronze, Silver, Gold." },
      { id: "d", text: "All support is free." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q192",
    prompt: "What is the default maximum number of Access Keys per user?",
    options: [
      { id: "a", text: "10." },
      { id: "b", text: "15." },
      { id: "c", text: "2." },
      { id: "d", text: "20." },
    ],
    correctOptionId: "c",
  },

  {
    id: "q193",
    prompt:
      "In the most recent company meeting, your CEO focused on the fact that everyone in the organization needs to make sure that all of the infrastructure that is built is truly scalable. Which of the following statements is incorrect in reference to scalable architecture?",
    options: [
      {
        id: "a",
        text: "A scalable service is capable of handling heterogeneity.",
      },
      { id: "b", text: "A scalable service is resilient." },
      {
        id: "c",
        text: "A scalable architecture won't be cost effective as it grows.",
      },
      {
        id: "d",
        text: "Increasing resources results in a proportional increase in performance.",
      },
    ],
    correctOptionId: "c",
  },

  {
    id: "q194",
    prompt: "What does Amazon S3 stand for?",
    options: [
      { id: "a", text: "Simple Storage Solution." },
      { id: "b", text: "Storage Storage Storage (triple redundancy Storage)." },
      { id: "c", text: "Storage Server Solution." },
      { id: "d", text: "Simple Storage Service." },
    ],
    correctOptionId: "d",
  },

  {
    id: "q195",
    prompt:
      "A company needs to monitor the read and write IOPs metrics for their AWS MySQL RDS instance and send real-time alerts to their operations team. Which AWS services can accomplish this? (Choose 2 answers)",
    options: [
      { id: "a", text: "Amazon Simple Email Service." },
      { id: "b", text: "Amazon CloudWatch." },
      { id: "c", text: "Amazon Simple Queue Service." },
      { id: "d", text: "Amazon Route 53." },
      { id: "e", text: "Amazon Simple Notification Service." },
    ],
    correctOptionId: "b,e",
  },

  {
    id: "q196",
    prompt:
      "A user has configured ELB with two EBS backed EC2 instances. The user is trying to understand the DNS access and IP support for ELB. Which of the below mentioned statements may not help the user understand the IP mechanism supported by ELB?",
    options: [
      {
        id: "a",
        text: "The client can connect over IPV4 or IPV6 using Dualstack.",
      },
      {
        id: "b",
        text: "Communication between the load balancer and back-end instances is always through IPV4.",
      },
      { id: "c", text: "ELB DNS supports both IPV4 and IPV6." },
      { id: "d", text: "The ELB supports either IPV4 or IPV6 but not both." },
    ],
    correctOptionId: "d",
  },

  {
    id: "q197",
    prompt: "What is Oracle SQL Developer?",
    options: [
      {
        id: "a",
        text: "An AWS developer who is an expert in Amazon RDS using both the Oracle and SQL Server DB engines.",
      },
      {
        id: "b",
        text: "A graphical Java tool distributed without cost by Oracle.",
      },
      {
        id: "c",
        text: "It is a variant of the SQL Server Management Studio designed by Microsoft to support Oracle DBMS functionalities.",
      },
      { id: "d", text: "A different DBMS released by Microsoft free of cost." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q198",
    prompt: "You can use [...] to help secure the instances in your VPC.",
    options: [
      { id: "a", text: "security groups and multi-factor authentication." },
      { id: "b", text: "security groups and 2-Factor authentication." },
      { id: "c", text: "security groups and biometric authentication." },
      { id: "d", text: "security groups and network ACLs." },
    ],
    correctOptionId: "d",
  },

  {
    id: "q199",
    prompt:
      "What is the type of monitoring data (for Amazon EBS volumes) which is available automatically in 5- minute periods at no charge called?",
    options: [
      { id: "a", text: "Basic." },
      { id: "b", text: "Primary." },
      { id: "c", text: "Detailed." },
      { id: "d", text: "Local." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q200",
    prompt:
      "A user comes to you and wants access to Amazon CloudWatch but only wants to monitor a specific LoadBalancer. Is it possible to give him access to a specific set of instances or a specific LoadBalancer?",
    options: [
      {
        id: "a",
        text: "No because you can't use IAM to control access to CloudWatch data for specific resources.",
      },
      {
        id: "b",
        text: "Yes. You can use IAM to control access to CloudWatch data for specific resources.",
      },
      {
        id: "c",
        text: "No because you need to be Sysadmin to access CloudWatch data.",
      },
      {
        id: "d",
        text: "Yes. Any user can see all CloudWatch data and needs no access rights.",
      },
    ],
    correctOptionId: "a",
  },

  {
    id: "q201",
    prompt:
      "Which Amazon Elastic Compute Cloud feature can you query from within the instance to access instance properties?",
    options: [
      { id: "a", text: "Instance user data." },
      { id: "b", text: "Resource tags." },
      { id: "c", text: "Instance metadata." },
      { id: "d", text: "Amazon Machine Image." },
    ],
    correctOptionId: "c",
  },

  {
    id: "q202",
    prompt:
      "Making your snapshot public shares all snapshot data with everyone. Can the snapshots with AWS Market place product codes be made public?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q203",
    prompt:
      "Which service enables AWS customers to manage users and permissions in AWS?",
    options: [
      { id: "a", text: "AWS Access Control Service (ACS)." },
      { id: "b", text: "AWS Identity and Access Management (IAM)." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q204",
    prompt:
      "You have launched an EC2 instance with four (4) 500 GB EBS Provisioned IOPS volumes attached. The EC2 instance is EBS-Optimized and supports 500 Mbps throughput between EC2 and EBS. The four EBS volumes are configured as a single RAID 0 device, and each Provisioned IOPS volume is provisioned with 4,000IOPS (4,000 16KB reads or writes), for a total of 16,000 random IOPS on the instance. The EC2 instance initially delivers the expected 16,000 IOPS random read and write performance. Sometime later, in order to increase the total random I/O performance of the instance, you add an additional two 500 GB EBS Provisioned IOPS volumes to the RAID. Each volume is provisioned to 4,000 IOPs like the original four, for a total of 24,000 IOPS on the EC2 instance. Monitoring shows that the EC2 instance CPU utilization increased from 50% to 70%, but the total random IOPS measured at the instance level does not increase at all. What is the problem and a valid solution?",
    options: [
      {
        id: "a",
        text: "Larger storage volumes support higher Provisioned IOPS rates; increase the provisioned volume storage of each of the 6 EBS volumes to 1TB.",
      },
      {
        id: "b",
        text: "The EBS-Optimized throughput limits the total IOPS that can be utilized; use an EBS Optimized instance that provides larger throughput. Mo",
      },
      {
        id: "c",
        text: "Small block sizes cause performance degradation, limiting the I/O throughput; configure the instance device driver and filesystem to use 64KB blocks to increase throughput.",
      },
      {
        id: "d",
        text: "The standard EBS Instance root volume limits the total IOPS rate; change the instance root volume to also be a 500GB 4,000 Provisioned IOPS volume.",
      },
      {
        id: "e",
        text: "RAID 0 only scales linearly to about 4 devices; use RAID 0 with 4 EBS Provisioned IOPS volumes, but increase each Provisioned IOPS EBS volume to 6,000 IOPS.",
      },
    ],
    correctOptionId: "b",
  },

  {
    id: "q205",
    prompt:
      "A user has configured a website and launched it using the Apache web server on port 80. The user is using ELB with the EC2 instances for Load Balancing. What should the user do to ensure that the EC2 instances accept requests only from ELB?",
    options: [
      {
        id: "a",
        text: "Configure the security group of EC2, which allows access to the ELB source security group.",
      },
      {
        id: "b",
        text: "Configure the EC2 instance so that it only listens on the ELB port.",
      },
      {
        id: "c",
        text: "Open the port for an ELB static IP in the EC2 security group.",
      },
      {
        id: "d",
        text: "Configure the security group of EC2, which allows access only to the ELB listener.",
      },
    ],
    correctOptionId: "a",
  },

  {
    id: "q206",
    prompt:
      "You're trying to delete an SSL certificate from the IAM certificate store, and you're getting the message 'Certificate: <certificate< span=''>-id> is being used by CloudFront.' Which of the following statements is probably the reason why you are getting this error?",
    options: [
      {
        id: "a",
        text: "Before you can delete an SSL certificate, you need to either rotate SSL certificates or revert from using a custom SSL certificate to using the default CloudFront certificate.",
      },
      {
        id: "b",
        text: "You can't delete SSL certificates. You need to request it from AWS.",
      },
      {
        id: "c",
        text: "Before you can delete an SSL certificate, you need to set up the appropriate access level in IAM. Before you can delete an SSL certificate you need to set up https on your server.",
      },
      {
        id: "d",
        text: "Before you can delete an SSL certificate you need to set up https on your server.",
      },
    ],
    correctOptionId: "a",
  },

  {
    id: "q207",
    prompt:
      "A government client needs you to set up secure cryptographic key storage for some of their extremely confidential data. You decide that the AWS CloudHSM is the best service for this. However, there seem to be a few pre-requisites before this can happen, one of those being a security group that has certain ports open. Which of the following is correct in regards to those security groups?",
    options: [
      {
        id: "a",
        text: "A security group that has port 22 (for SSH) or port 3389 (for RDP) open to your network.",
      },
      {
        id: "b",
        text: "A security group that has no ports open to your network.",
      },
      {
        id: "c",
        text: "A security group that has only port 3389 (for RDP) open to your network.",
      },
      {
        id: "d",
        text: "A security group that has only port 22 (for SSH) open to your network.",
      },
    ],
    correctOptionId: "a",
  },

  {
    id: "q208",
    prompt:
      "A web company is looking to implement an intrusion detection and prevention system into their deployed VPC. This platform should have the ability to scale to thousands of instances running inside of the VPC. How should they architect their solution to achieve these goals?",
    options: [
      {
        id: "a",
        text: "Configure an instance with monitoring software and the elastic network interface (ENI) set to promiscuous mode packet sniffing to see an traffic across the VPC. Configure servers running in the VPC using the host-based 'route' commands to send all traffic through the platform to a scalable virtualized IDS/IP.",
      },
      {
        id: "b",
        text: "Create a second VPC and route all traffic from the primary application VPC through the second VPC where the scalable virtualized IDS/IPS platform resides.",
      },
      {
        id: "c",
        text: "Configure servers running in the VPC using the host-based 'route' commands to send all traffic through the platform to a scalable virtualized IDS/IP.",
      },
      {
        id: "d",
        text: "Configure each host with an agent that collects all network traffic and sends that traffic to the IDS/IPS platform for inspection.",
      },
    ],
    correctOptionId: "c",
  },

  {
    id: "q209",
    prompt:
      "You run an ad-supported photo sharing website using Amazon S3 to serve photos to visitors of your site. At some point you find out that other sites have been linking to the photos on your site, causing loss to your business. What is an effective method to mitigate this?",
    options: [
      {
        id: "a",
        text: "Remove public read access and use signed URLs with expiry dates.",
      },
      { id: "b", text: "Use CloudFront distributions for static content." },
      {
        id: "c",
        text: "Block the IPs of the offending websites in Security Groups.",
      },
      { id: "d", text: "Store photos on an EBS volume of the web server." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q210",
    prompt:
      "Which of the following is not a true statement relating to the performance of your EBS volumes?",
    options: [
      {
        id: "a",
        text: "Frequent snapshots provide a higher level of data durability and they will not degrade the performance of your application while the snapshot is in progress.",
      },
      {
        id: "b",
        text: "General Purpose (SSD) and Provisioned IOPS (SSD) volumes have a throughput limit of 128 MB/s per volume.",
      },
      {
        id: "c",
        text: "There is a relationship between the maximum performance of your EBS volumes, the amount of I/O you are driving to them, and the amount of time it takes for each transaction to complete.",
      },
      {
        id: "d",
        text: "There is a 5 to 50 percent reduction in IOPS when you first access each block of data on a newly created or restored EBS volume.",
      },
    ],
    correctOptionId: "a",
  },

  {
    id: "q211",
    prompt: "Changes to the backup window take effect [...].",
    options: [
      { id: "a", text: "from the next billing cycle." },
      { id: "b", text: "after 30 minutes." },
      { id: "c", text: "immediately." },
      { id: "d", text: "after 24 hours." },
    ],
    correctOptionId: "c",
  },

  {
    id: "q212",
    prompt: "Location of Instances are [...].",
    options: [
      { id: "a", text: "regional." },
      { id: "b", text: "based on Availability Zone." },
      { id: "c", text: "global." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q213",
    prompt:
      "You log in to IAM on your AWS console and notice the following message. 'Delete your root access keys.' Why do you think IAM is requesting this?",
    options: [
      {
        id: "a",
        text: "Because the root access keys will expire as soon as you log out.",
      },
      { id: "b", text: "Because the root access keys expire after 1 week." },
      {
        id: "c",
        text: "Because the root access keys are the same for all users.",
      },
      {
        id: "d",
        text: "Because they provide unrestricted access to your AWS resources.",
      },
    ],
    correctOptionId: "d",
  },

  {
    id: "q214",
    prompt:
      "What is the minimum charge for the data transferred between Amazon RDS and Amazon EC2 Instances in the same Availability Zone?",
    options: [
      { id: "a", text: "USD 0.10 per GB." },
      { id: "b", text: "No charge. It is free." },
      { id: "c", text: "USD 0.02 per GB" },
      { id: "d", text: "USD 0.01 per GB." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q215",
    prompt:
      "In DynamoDB, could you use IAM to grant access to Amazon DynamoDB resources and API actions?",
    options: [
      { id: "a", text: "In DynamoDB there is no need to grant access." },
      { id: "b", text: "Depended to the type of access." },
      { id: "c", text: "Yes." },
      { id: "d", text: "No." },
    ],
    correctOptionId: "c",
  },

  {
    id: "q216",
    prompt:
      "The common use cases for DynamoDB Fine-Grained Access Control (FGAC) are cases in which the end user wants [...].",
    options: [
      { id: "a", text: "to change the hash keys of the table directly." },
      {
        id: "b",
        text: "to check if an IAM policy requires the hash keys of the tables directly.",
      },
      {
        id: "c",
        text: "to read or modify any code commit key of the table directly, without a middle-tier service.",
      },
      {
        id: "d",
        text: "to read or modify the table directly, without a middle-tier service.",
      },
    ],
    correctOptionId: "d",
  },

  {
    id: "q217",
    prompt: "What are the initial settings of an user created security group?",
    options: [
      {
        id: "a",
        text: "Allow all inbound traffic and Allow no outbound traffic.",
      },
      {
        id: "b",
        text: "Al low no inbound traffic and Al low no outbound traffic.",
      },
      {
        id: "c",
        text: "Al low no inbound traffic and Al low all outbound traffic.",
      },
      {
        id: "d",
        text: "Allow all inbound traffic and Allow all outbound traffic.",
      },
    ],
    correctOptionId: "c",
  },

  {
    id: "q218",
    prompt:
      "Which one of the following answers is not a possible state of Amazon CloudWatch Alarm?",
    options: [
      { id: "a", text: "INSUFFICIENT_DATA." },
      { id: "b", text: "ALARM." },
      { id: "c", text: "OK." },
      { id: "d", text: "STATUS_CHECK_FAILED." },
    ],
    correctOptionId: "d",
  },

  {
    id: "q219",
    prompt:
      "[...] let you categorize your EC2 resources in different ways, for example, by purpose, owner, or environment.",
    options: [
      { id: "a", text: "wildcards." },
      { id: "b", text: "pointers." },
      { id: "c", text: "tags." },
      { id: "d", text: "special filters." },
    ],
    correctOptionId: "c",
  },

  {
    id: "q220",
    prompt:
      "Which of the below mentioned options is not available when an instance is launched by Auto Scaling with EC2 Classic?",
    options: [
      { id: "a", text: "Public IP." },
      { id: "b", text: "Elastic IP." },
      { id: "c", text: "Private DNS." },
      { id: "d", text: "Private IP." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q221",
    prompt:
      "You have a lot of data stored in the AWS Storage Gateway and your manager has come to you asking about how the billing is calculated, specifically the Virtual Tape Shelf usage. What would be a correct response to this?",
    options: [
      {
        id: "a",
        text: "You are billed for the virtual tape data you store in Amazon Glacier and are billed for the size of the virtual tape.",
      },
      {
        id: "b",
        text: "You are billed for the virtual tape data you store in Amazon Glacier and billed for the portion of virtual tape capacity that you use, not for the size of the virtual tape.",
      },
      {
        id: "c",
        text: "You are billed for the virtual tape data you store in Amazon S3 and billed for the portion of virtual tape capacity that you use, not for the size of the virtual tape.",
      },
      {
        id: "d",
        text: "You are billed for the virtual tape data you store in Amazon S3 and are billed for the size of the virtual tape.",
      },
    ],
    correctOptionId: "b",
  },

  {
    id: "q222",
    prompt:
      "True or False: The new DB Instance that is created when you promote a Read Replica retains the backup window period.",
    options: [
      { id: "a", text: "True." },
      { id: "b", text: "False." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q223",
    prompt: "[...] is a fast, flexible, fully managed push messaging service.",
    options: [
      { id: "a", text: "Amazon SNS." },
      { id: "b", text: "Amazon SES." },
      { id: "c", text: "Amazon SQS." },
      { id: "d", text: "Amazon FPS." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q224",
    prompt:
      "You are tasked with setting up a Linux bastion host for access to Amazon EC2 instances running in your VPC. Only clients connecting from the corporate external public IP address 72.34.51.100 should have SSH access to the host. Which option will meet the customer requirement?",
    options: [
      {
        id: "a",
        text: "Security Group Inbound Rule: Protocol – TCP. Port Range – 22, Source 72.34.51.100/32",
      },
      { id: "b", text: "Port Range- 22, Source 72.34.51. 100/32." },
      {
        id: "c",
        text: "Security Group Inbound Rule: Protocol – UDP, Port Range- 22, Source 72.34.51.100/32.",
      },
      {
        id: "d",
        text: "Network ACL Inbound Rule: Protocol – UDP, Port Range- 22, Source 72.34.51.100/32.",
      },
      {
        id: "e",
        text: "Network ACL Inbound Rule: Protocol – TCP, Port Range-22, Source 72.34.51.100/0.",
      },
    ],
    correctOptionId: "a",
  },

  {
    id: "q225",
    prompt: "How can you secure data at rest on an EBS volume?",
    options: [
      {
        id: "a",
        text: "Attach the volume to an instance using EC2's SSL interface.",
      },
      { id: "b", text: "Write the data randomly instead of sequentially." },
      {
        id: "c",
        text: "Encrypt the volume using the S3 server-side encryption service.",
      },
      {
        id: "d",
        text: "Create an IAM policy that restricts read and write access to the volume.",
      },
      {
        id: "e",
        text: "Use an encrypted file system on top of the EBS volume.",
      },
    ],
    correctOptionId: "e",
  },

  {
    id: "q226",
    prompt:
      "Is there a method in the IAM system to allow or deny access to a specific instance?",
    options: [
      { id: "a", text: "Only for VPC based instances." },
      { id: "b", text: "Yes." },
      { id: "c", text: "No." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q227",
    prompt:
      "Using Amazon IAM, can I give permission based on organizational groups?",
    options: [
      { id: "a", text: "Yes but only in certain cases." },
      { id: "b", text: "Yes." },
      { id: "c", text: "No." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q228",
    prompt:
      "Which services allow the customer to retain full administrative privileges of the underlying EC2 instances? (Choose 2 answers)",
    options: [
      { id: "a", text: "Amazon Relational Database Service." },
      { id: "b", text: "Amazon Elastic MapReduce." },
      { id: "c", text: "Amazon ElastiCache." },
      { id: "d", text: "Amazon DynamoDB." },
      { id: "e", text: "AWS Elastic Beanstalk." },
    ],
    correctOptionId: "b,e",
  },

  {
    id: "q229",
    prompt:
      "While launching an RDS DB instance, on which page I can select the Availability Zone?",
    options: [
      { id: "a", text: "REVIEW." },
      { id: "b", text: "DB INSTANCE DETAILS." },
      { id: "c", text: "MANAGEMENT OPTIONS." },
      { id: "d", text: "ADDITIONAL CONFIGURATION." },
    ],
    correctOptionId: "d",
  },

  {
    id: "q230",
    prompt:
      "You are responsible for a legacy web application whose server environment is approaching end of life. You would like to migrate this application to AWS as quickly as possible, since the application environment currently has the following limitations. The VM's single 10GB VMDK is almost full Me virtual network interface still uses the 10Mbps driver, which leaves your 100Mbps WAN connection completely underutilized. It is currently running on a highly customized. Windows VM within a VMware environment: You do not have me installation media. This is a mission critical application with an RTO (Recovery Time Objective) of 8 hours. RPO (Recovery Point Objective) of 1 hour. How could you best migrate this application to AWS while meeting your business continuity requirements?",
    options: [
      {
        id: "a",
        text: "Use the EC2 VM Import Connector for vCenter to import the VM into EC2.",
      },
      {
        id: "b",
        text: "Use Import/Export to import the VM as an EBS snapshot and attach to EC2.",
      },
      {
        id: "c",
        text: "Use S3 to create a backup of the VM and restore the data into EC2.",
      },
      {
        id: "d",
        text: "Use me ec2-bundle-instance API to Import an Image of the VM into EC2.",
      },
    ],
    correctOptionId: "a",
  },

  {
    id: "q231",
    prompt:
      "You are setting up some EBS volumes for a customer who has requested a setup which includes a RAID (redundant array of inexpensive disks). AWS has some recommendations for RAID setups. Which RAID setup is not recommended for Amazon EBS?",
    options: [
      { id: "a", text: "RAID 5 only." },
      { id: "b", text: "RAID 5 and RAID 6." },
      { id: "c", text: "RAID 1 only." },
      { id: "d", text: "RAID 1 and RAID 6." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q232",
    prompt:
      "Much of your company's data does not need to be accessed often, and can take several hours for retrieval time, so it's stored on Amazon Glacier. However someone within your organization has expressed concerns that his data is more sensitive than the other data, and is wondering whether the high level of encryption that he knows is on S3 is also used on the much cheaper Glacier service. Which of the following statements would be most applicable in regards to this concern?",
    options: [
      {
        id: "a",
        text: "There is no encryption on Amazon Glacier, that's why it is cheaper.",
      },
      {
        id: "b",
        text: "Amazon Glacier automatically encrypts the data using AES-128 a lesser encryption method than Amazon S3 but you can change it to AES-256 if you are willing to pay more.",
      },
      {
        id: "c",
        text: "Amazon Glacier automatically encrypts the data using AES-256, the same as Amazon S3.",
      },
      {
        id: "d",
        text: "Amazon Glacier automatically encrypts the data using AES-128 a lesser encryption method than Amazon S3.",
      },
    ],
    correctOptionId: "c",
  },

  {
    id: "q233",
    prompt: "Can I use Provisioned IOPS with VPC?",
    options: [
      { id: "a", text: "Only Oracle based RDS." },
      { id: "b", text: "No." },
      { id: "c", text: "Only with MSSQL based RDS." },
      { id: "d", text: "Yes for all RDS instances." },
    ],
    correctOptionId: "d",
  },

  {
    id: "q234",
    prompt:
      "To ensure failover capabilities, consider using a [...] for incoming traffic on a network interface.",
    options: [
      { id: "a", text: "primary public IP." },
      { id: "b", text: "secondary private IP." },
      { id: "c", text: "secondary public IP." },
      { id: "d", text: "add on secondary IP." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q235",
    prompt:
      "By default, EBS volumes that are created and attached to an instance at launch are deleted when that instance is terminated. You can modify this behavior by changing the value of the flag [...] to false when you launch the instance.",
    options: [
      { id: "a", text: "Delete On Termination." },
      { id: "b", text: "Remove On Deletion." },
      { id: "c", text: "Remove On Termination." },
      { id: "d", text: "Terminate On Deletion." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q236",
    prompt: "Which AWS service helps this functionality?",
    options: [
      { id: "a", text: "AWS Simple Queue Service." },
      { id: "b", text: "AWS Simple Notification Service." },
      { id: "c", text: "AWS Simple Workflow Service." },
      { id: "d", text: "AWS Simple Email Service." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q237",
    prompt:
      "Which of the below statements would be an incorrect response to your customers enquiry?",
    options: [
      {
        id: "a",
        text: "Amazon EMR customers can choose to send data to Amazon S3 using the HTTPS protocol for secure transmission.",
      },
      {
        id: "b",
        text: "Amazon S3 provides authentication mechanisms to ensure that stored data is secured against unauthorized access.",
      },
      {
        id: "c",
        text: "Every packet sent in the AWS network uses Internet Protocol Security (IPsec).",
      },
      {
        id: "d",
        text: "Customers may encrypt the input data before they upload it to Amazon S3.",
      },
    ],
    correctOptionId: "c",
  },

  {
    id: "q238",
    prompt:
      "The one-time payment for Reserved Instances is [...] refundable if the reservation is cancelled.",
    options: [
      { id: "a", text: "always." },
      { id: "b", text: "in some circumstances." },
      { id: "c", text: "never." },
    ],
    correctOptionId: "c",
  },

  {
    id: "q239",
    prompt:
      "Is it possible to get a history of all EC2 API calls made on your account for security analysis and operational troubleshooting purposes?",
    options: [
      {
        id: "a",
        text: "Yes, by default, the history of your API calls is logged.",
      },
      {
        id: "b",
        text: "Yes, you should turn on the CloudTrail in the AWS console.",
      },
      { id: "c", text: "No, you can only get a history of VPC API calls." },
      {
        id: "d",
        text: "No, you cannot store history of EC2 API calls on Amazon.",
      },
    ],
    correctOptionId: "b",
  },

  {
    id: "q240",
    prompt:
      "The Trusted Advisor service provides insight regarding which four categories of an AWS account?",
    options: [
      {
        id: "a",
        text: "Security, fault tolerance, high availability, and connectivity.",
      },
      {
        id: "b",
        text: "Security, access control, high availability, and performance.",
      },
      {
        id: "c",
        text: "Performance, cost optimization, security, and fault tolerance.",
      },
      {
        id: "d",
        text: "Performance, cost optimization, access control, and connectivity.",
      },
    ],
    correctOptionId: "c",
  },

  {
    id: "q241",
    prompt:
      "An AWS customer runs a public blogging website. The site users upload two million blog entries a month. The average blog entry size is 200 KB. The access rate to blog entries drops to negligible 6 months after publication and users rarely access a blog entry 1 year after publication. Additionally, blog entries have a high update rate during the first 3 months following publication, this drops to no updates after 6 months. The customer wants to use CloudFront to improve his user's load times. Which of the following recommendations would you make to the customer?",
    options: [
      {
        id: "a",
        text: "Duplicate entries into two different buckets and create two separate CloudFront distributions where S3 access is restricted only to CloudFront identity.",
      },
      {
        id: "b",
        text: "Create a CloudFront distribution with 'US' Europe price class for US/ Europe users and a different CloudFront distribution with Al l Edge Locations' for the remaining users.",
      },
      {
        id: "c",
        text: "Create a CloudFront distribution with S3 access restricted only to the CloudFront identity and partition the blog entry's location in S3 according to the month it was uploaded to be used withCloudFront behaviors.",
      },
      {
        id: "d",
        text: "Create a CloudFronl distribution with Restrict Viewer Access Forward Query string set to true and minimum TTL of 0.",
      },
    ],
    correctOptionId: "c",
  },

  {
    id: "q242",
    prompt:
      "Your supervisor has asked you to build a simple file synchronization service for your department. He doesn't want to spend too much money and he wants to be notified of any changes to files by email. What do you think would be the best Amazon service to use for the email solution?",
    options: [
      { id: "a", text: "Amazon SES." },
      { id: "b", text: "Amazon CloudSearch." },
      { id: "c", text: "Amazon SWF." },
      { id: "d", text: "Amazon AppStream." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q243",
    prompt: "What are the Amazon EC2 API tools?",
    options: [
      {
        id: "a",
        text: "They don't exist. The Amazon EC2 AMI tools, instead, are used to manage permissions.",
      },
      { id: "b", text: "Command-line tools to the Amazon EC2 web service." },
      {
        id: "c",
        text: "They are a set of graphical tools to manage EC2 instances.",
      },
      {
        id: "d",
        text: "They don't exist. The Amazon API tools are a client interface to Amazon Web Services.",
      },
    ],
    correctOptionId: "b",
  },

  {
    id: "q244",
    prompt:
      "Your customer wishes to deploy an enterprise application to AWS which will consist of several web servers, several application servers and a small (50GB) Oracle database information is stored, both in the database and the file systems of the various servers. The backup system must support database recovery whole server and whole disk restores, and individual file restores with a recovery time of no more than two hours. They have chosen to use RDS Oracle as the database. Which backup architecture will meet these requirements?",
    options: [
      {
        id: "a",
        text: "Backup RDS using automated daily DB backups Backup the EC2 instances using AMIs and supplement with file-level backup to S3 using traditional enterprise backup software to provide file level restore.",
      },
      {
        id: "b",
        text: "Backup RDS using a Multi-AZ Deployment Backup the EC2 instances using Amis, and supplement by copying file system data to S3 to provide file-level restore.",
      },
      {
        id: "c",
        text: "Backup RDS using automated daily DB backups Backup the EC2 instances using EBS snapshots and supplement with file-level backups to Amazon Glacier using traditional enterprise backup software to provide file-level restore.",
      },
      {
        id: "d",
        text: "Backup RDS database to S3 using Oracle RMAN Backup the EC2 instances using Amis, and supplement with EBS snapshots for individual volume restore.",
      },
    ],
    correctOptionId: "a",
  },

  {
    id: "q245",
    prompt:
      "You are architecting a highly-scalable and reliable web application which will have a huge amount of content. You have decided to use Cloudfront as you know it will speed up distribution of your static and dynamic web content and know that Amazon CloudFront integrates with Amazon CloudWatch metrics so that you can monitor your web application. Because you live in Sydney you have chosen the the Asia Pacific (Sydney) region in the AWS console. However you have set up this up but no CloudFront metrics seem to be appearing in the CloudWatch console. What is the most likely reason from the possible choices below for this?",
    options: [
      {
        id: "a",
        text: "Metrics for CloudWatch are available only when you choose the same region as the application you are monitoring.",
      },
      {
        id: "b",
        text: "You need to pay for CloudWatch for it to become active.",
      },
      {
        id: "c",
        text: "Metrics for CloudWatch are available only when you choose the US East (Virginia).",
      },
      {
        id: "d",
        text: "Metrics for CloudWatch are not available for the Asia Pacific region as yet.",
      },
    ],
    correctOptionId: "c",
  },

  {
    id: "q246",
    prompt:
      "Is the SQL Server Audit feature supported in the Amazon RDS SQL Server engine?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q247",
    prompt:
      "What is the command line instruction for running the remote desktop client in Windows?",
    options: [
      { id: "a", text: "desk.cpl." },
      { id: "b", text: "mstsc." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q248",
    prompt:
      "Which of the following cannot be used in Amazon EC2 to control who has access to specific Amazon EC2 instances?",
    options: [
      { id: "a", text: "Security Groups." },
      { id: "b", text: "IAM System." },
      { id: "c", text: "SSH keys." },
      { id: "d", text: "Windows passwords." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q249",
    prompt:
      "What is the charge for the data transfer incurred in replicating data between your primary and standby?",
    options: [
      { id: "a", text: "Same as the standard data transfer charge." },
      { id: "b", text: "Double the standard data transfer charge." },
      { id: "c", text: "No charge. It is free." },
      { id: "d", text: "Half of the standard data transfer charge." },
    ],
    correctOptionId: "c",
  },

  {
    id: "q250",
    prompt:
      "You have a load balancer configured for VPC, and all back-end Amazon EC2 instances are in service. However, your web browser times out when connecting to the load balancer's DNS name. Which options are probable causes of this behavior? (Choose 2 answers)",
    options: [
      {
        id: "a",
        text: "The load balancer was not configured to use a public subnet with an Internet gateway configured.",
      },
      {
        id: "b",
        text: "The Amazon EC2 instances do not have a dynamically allocated private IP address.",
      },
      {
        id: "c",
        text: "The security groups or network ACLs are not property configured for web traffic.",
      },
      {
        id: "d",
        text: "The load balancer is not configured in a private subnet with a NAT instance.",
      },
      { id: "e", text: "The VPC does not have a VGW configured." },
    ],
    correctOptionId: "a,c",
  },

  {
    id: "q251",
    prompt:
      "Resources that are created in AWS are identified by a unique identifier called an",
    options: [
      { id: "a", text: "Amazon Resource Number." },
      { id: "b", text: "Amazon Resource Nametag." },
      { id: "c", text: "Amazon Resource Name." },
      { id: "d", text: "Amazon Resource Namespace." },
    ],
    correctOptionId: "c",
  },

  {
    id: "q252",
    prompt:
      "What are the two types of licensing options available for using Amazon RDS for Oracle?",
    options: [
      { id: "a", text: "BYOL and Enterprise License." },
      { id: "b", text: "BYOL and License Included." },
      { id: "c", text: "Enterprise License and License Included." },
      { id: "d", text: "Role based License and License Included." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q253",
    prompt:
      "In AWS, which security aspects are the customer's responsibility? (Choose 4 answers)",
    options: [
      {
        id: "a",
        text: "Security Group and ACL (Access Control List) settings.",
      },
      { id: "b", text: "Decommissioning storage devices." },
      {
        id: "c",
        text: "Patch management on the EC2 instance's operating system.",
      },
      { id: "d", text: "Life-cycle management of IAM credentials." },
      { id: "e", text: "Controlling physical access to compute resources." },
      { id: "f", text: "Encryption of EBS (Elastic Block Storage) volumes." },
    ],
    correctOptionId: "a,c,d,f",
  },

  {
    id: "q254",
    prompt:
      "You have a web application running on six Amazon EC2 instances, consuming about 45% of resources on each instance. You are using auto-scaling to make sure that six instances are running at all times. The number of requests this application processes is consistent and does not experience spikes. The application is critical to your business and you want high availability at all times. You want the load to be distributed evenly between all instances. You also want to use the same Amazon Machine Image (AMI) for all instances. Which of the following architectural choices should you make?",
    options: [
      {
        id: "a",
        text: "Deploy 6 EC2 instances in one Availability Zone and use Amazon Elastic Load Balancer.",
      },
      {
        id: "b",
        text: "Deploy 3 EC2 instances in one region and 3 in another region and use Amazon Elastic Load Balancer.",
      },
      {
        id: "c",
        text: "Deploy 3 EC2 instances in one Availability Zone and 3 in another Availability Zone and use Amazon Elastic Load Balancer.",
      },
      {
        id: "d",
        text: "Deploy 2 EC2 instances in three regions and use Amazon Elastic Load Balancer.",
      },
    ],
    correctOptionId: "c",
  },

  {
    id: "q255",
    prompt:
      "An ERP application is deployed across multiple AZs in a single region. in the event of failure, the Recovery Time Objective (RTO) must be less than 3 hours, and the Recovery Point Objective (RPO) must be 15 minutes the customer realizes that data corruption occurred roughly 1.5 hours ago. What DR strategy could be used to achieve this RTO and RPO in the event of this kind of failure?",
    options: [
      {
        id: "a",
        text: "Take hourly DB backups to S3, with transaction logs stored in S3 every 5 minutes.",
      },
      {
        id: "b",
        text: "Use synchronous database master-slave replication between two Availability Zones.",
      },
      {
        id: "c",
        text: "Take hourly DB backups to EC2 Instance store volumes with transaction logs stored in S3 every 5 minutes.",
      },
      {
        id: "d",
        text: "Take 15 minute DB backups stored in Glacier with transaction logs stored in S3 every 5 minutes.",
      },
    ],
    correctOptionId: "a",
  },

  {
    id: "q256",
    prompt:
      "You have been setting up an Amazon Virtual Private Cloud (Amazon VPC) for your company, including setting up subnets. Security is a concern, and you are not sure which is the best security practice for securing subnets in your VPC. Which statement below is correct in describing the protection of AWS resources in each subnet?",
    options: [
      {
        id: "a",
        text: "You can use multiple layers of security, including security groups and network access control lists (ACL).",
      },
      { id: "b", text: "You can only use access control lists (ACL)." },
      { id: "c", text: "You don't need any security in subnets." },
      {
        id: "d",
        text: "You can use multiple layers of security, including security groups, network access control lists (ACL) and CloudHS.",
      },
    ],
    correctOptionId: "a",
  },

  {
    id: "q257",
    prompt:
      "Amazon EC2 provides a repository of public data sets that can be seamlessly integrated into AWS cloud-based applications. What is the monthly charge for using the public data sets?",
    options: [
      { id: "a", text: "A 1 time charge of 10$ for all the datasets." },
      { id: "b", text: "1$ per dataset per month." },
      { id: "c", text: "10$ per month for all the datasets." },
      { id: "d", text: "There is no charge for using the public data sets." },
    ],
    correctOptionId: "d",
  },

  {
    id: "q258",
    prompt:
      "[...] embodies the 'share-nothing' architecture and essentially involves breaking a large database into several smaller databases. Common ways to split a database include: 1. Splitting tables that are not joined in the same query onto different hosts or 2. Duplicating a table across multiple hosts and then using a hashing algorithm to determine which host receives a given update.",
    options: [
      { id: "a", text: "$harding." },
      { id: "b", text: "Fai lure recovery." },
      { id: "c", text: "Federation." },
      { id: "d", text: "DOL operations." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q259",
    prompt:
      "After deploying a new website for a client on AWS, he asks if you can set it up so that if it fails it can be automatically redirected to a backup website that he has stored on a dedicated server elsewhere. You are wondering whether Amazon Route 53 can do this. Which statement below is correct in regards to Amazon Route 53?",
    options: [
      {
        id: "a",
        text: "Amazon Route 53 can't help detect an outage. You need to use another service.",
      },
      {
        id: "b",
        text: "Amazon Route 53 can help detect an outage of your website and redirect your end users to alternate locations.",
      },
      {
        id: "c",
        text: "Amazon Route 53 can help detect an outage of your website but can't redirect your end users to alternate locations.",
      },
      {
        id: "d",
        text: "Amazon Route 53 can't help detect an outage of your website, but can redirect your end users to alternate locations.",
      },
    ],
    correctOptionId: "b",
  },

  {
    id: "q260",
    prompt:
      "Your company plans to host a large donation website on Amazon Web Services (AWS). You anticipate a large and undetermined amount of traffic that will create many database writes. To be certain that you do not drop any writes to a database hosted on AWS. Which service should you use?",
    options: [
      {
        id: "a",
        text: "Amazon RDS with provisioned IOPS up to the anticipated peak write throughput.",
      },
      {
        id: "b",
        text: "Amazon Simple Queue Service (SOS) for capturing the writes and draining the queue to write to the database.",
      },
      {
        id: "c",
        text: "Amazon ElastiCache to store the writes until the writes are committed to the database.",
      },
      {
        id: "d",
        text: "Amazon DynamoDB with provisioned write throughput up to the anticipated peak write throughput.",
      },
    ],
    correctOptionId: "b",
  },

  {
    id: "q261",
    prompt:
      "You have set up an Auto Scaling group. The cool down period for the Auto Scaling group is 7 minutes. The first instance is launched after 3 minutes, while the second instance is launched after 4 minutes. How many minutes after the first instance is launched will Auto Scaling accept another scaling activity request?",
    options: [
      { id: "a", text: "11 minutes." },
      { id: "b", text: "7 minutes." },
      { id: "c", text: "10 minutes." },
      { id: "d", text: "14 minutes." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q262",
    prompt:
      "You are migrating a legacy client-server application to AWS. The application responds to a specific DNS domain (e.g. <www.example.com>) and has a 2-tier architecture, with multiple application servers and a database server. Remote clients use TCP to connect to the application servers. The application servers need to know the IP address of the clients in order to function properly and are currently taking that information from the TCP socket. A Multi-AZ RDS MySQL instance will be used for the database. During the migration you can change the application code, but you have to file a change request. How would you implement the architecture on AWS in order to maximize scalability and high availability?",
    options: [
      {
        id: "a",
        text: "File a change request to implement Alias Resource support in the application. Use Route 53 Alias Resource Record to distribute load on two application servers in different AZs.",
      },
      {
        id: "b",
        text: "File a change request to implement Latency Based Routing support in the application. Use Route 53 with Latency Based Routing enabled to distribute load on two application servers in different AZs.",
      },
      {
        id: "c",
        text: "File a change request to implement Cross-Zone support in the application. Use an ELB with a TCP Listener and Cross-Zone Load Balancing enabled, two application servers in different AZs.",
      },
      {
        id: "d",
        text: "File a change request to implement Proxy Protocol support in the application. Use an ELB with a TCP Listener and Proxy Protocol enabled to distribute load on two application servers in different AZs.",
      },
    ],
    correctOptionId: "d",
  },

  {
    id: "q263",
    prompt: "Can I test my DB Instance against a new version before upgrading?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
      { id: "c", text: "Only in VPC." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q264",
    prompt:
      "Your system recently experienced down time during the troubleshooting process. You found that a new administrator mistakenly terminated several production EC2 instances. Which of the following strategies will help prevent a similar situation in the future? The administrator still must be able to: Launch, start stop, and terminate development resources. Launch and start production instances.",
    options: [
      {
        id: "a",
        text: "Create an IAM user, which is not allowed to terminate instances by leveraging production EC2 termination protection.",
      },
      {
        id: "b",
        text: "Leverage resource based tagging along with an IAM user, which can prevent specific users from terminating production EC2 resources.",
      },
      {
        id: "c",
        text: "Leverage EC2 termination protection and multi-factor authentication, which together require users to authenticate before terminating EC2 instances.",
      },
      {
        id: "d",
        text: "Create an IAM user and apply an IAM role which prevents users from terminating production EC2 instances.",
      },
    ],
    correctOptionId: "b",
  },

  {
    id: "q265",
    prompt:
      "You have just set up a large site for a client which involved a huge database which you set up with Amazon RDS to run as a Multi-AZ deployment. You now start to worry about what will happen if the database instance fails. Which statement best describes how this database will function if there is a database failure?",
    options: [
      {
        id: "a",
        text: "Updates to your DB Instance are synchronously replicated across Availability Zones to the standby in order to keep both in sync and protect your latest database updates against DB Instance failure.",
      },
      {
        id: "b",
        text: "Your database will not resume operation without manual administrative intervention.",
      },
      {
        id: "c",
        text: "Updates to your DB Instance are asynchronously replicated across Availability Zones to the standby in order to keep both in sync and protect your latest database updates against DB Instance failure.",
      },
      {
        id: "d",
        text: "Updates to your DB Instance are synchronously replicated across S3 to the standby in order to keep both in sync and protect your latest database updates against DB Instance failure.",
      },
    ],
    correctOptionId: "a",
  },

  {
    id: "q266",
    prompt:
      "Your company has an on-premises multi-tier PHP web application, which recently experienced downtime due to a large burst in web traffic due to a company announcement Over the coming days, you are expecting similar announcements to drive similar unpredictable bursts, and are looking to find ways to quickly improve your infrastructures ability to handle unexpected increases in traffic. The application currently consists of 2 tiers a web tier which consists of a load balancer and several Linux Apache web servers as well as a database tier which hosts a Linux server hosting a MySQLdatabase. Which scenario below will provide full site functionality, while helping to improve the ability of your application in the short timeframe required?",
    options: [
      {
        id: "a",
        text: "Failover environment: Create an S3 bucket and configure it for website hosting. Migrate your DNS to Route 53 using zone file import, and leverage Route 53 DNS failover to failover to the S3 hosted website.",
      },
      {
        id: "b",
        text: "Hybrid environment: Create an AMI, which can be used to launch web servers in EC2. Create an Auto Scaling group, which uses the AMI to scale the web tier based on incoming traffic. LeverageElastic Load Balancing to balance traffic between on-premises web servers and those hosted in AWS.",
      },
      {
        id: "c",
        text: "Offload traffic from on-premises environment: Setup a CloudFront distribution, and configure CloudFront to cache objects from a custom origin. Choose to customize your object cache behavior, and select a TIL that objects should exist in cache.",
      },
      {
        id: "d",
        text: "Migrate to AWS: Use VM Import/Export to quickly convert an on-premises web server to an AMI.",
      },
      {
        id: "e",
        text: "Create an Auto Scaling group, which uses the imported AMI to scale the web tier based on incoming traffic. Create an RDS read replica and setup replication between the RDS instance and on-premises MySQL server to migrate the database.",
      },
    ],
    correctOptionId: "c",
  },

  {
    id: "q267",
    prompt:
      "When using consolidated billing there are two account types. What are they?",
    options: [
      { id: "a", text: "Paying account and Linked account." },
      { id: "b", text: "Parent account and Child account." },
      { id: "c", text: "Main account and Sub account." },
      { id: "d", text: "Main account and Secondary account." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q268",
    prompt:
      "You have a periodic Image analysis application that gets some files in Input analyzes them and tor each file writes some data in output to a ten file the number of files in input per day is high and concentrated in a few hours of the day. Currently you have a server on EC2 with a large EBS volume that hosts the input data and the results it takes almost 20 hours per day to complete the process What services could be used to reduce the elaboration time and improve the availability of the solution?",
    options: [
      {
        id: "a",
        text: "Amazon S3 to store 1/0 files. SQS to distribute elaboration commands to a group of hosts working in parallel. Auto scaling to dynamically size the group of hosts depending on the length of the SQS queue.",
      },
      {
        id: "b",
        text: "EBS with Provisioned IOPS (PIOPS) to store 1/0 files. SNS to distribute elaboration commands to a group of hosts working in parallel Auto Scaling to dynamically size the group of hosts depending on the number of SNS notifications.",
      },
      {
        id: "c",
        text: "Amazon S3 to store 1/0 files, SNS to distribute evaporation commands to a group of hosts working in parallel. Auto scaling to dynamically size the group of hosts depending on the number of SNS notifications.",
      },
      {
        id: "d",
        text: "EBS with Provisioned IOPS (PIOPS) to store 1/0 files SOS to distribute elaboration commands to a group of hosts working in parallel Auto Scaling to dynamically size the group ot hosts depending on the length of the SQS queue.",
      },
    ],
    correctOptionId: "d",
  },

  {
    id: "q269",
    prompt:
      "While controlling access to Amazon EC2 resources, which of the following acts as a firewall that controls the traffic allowed to reach one or more instances?",
    options: [
      { id: "a", text: "A security group." },
      { id: "b", text: "An instance type." },
      { id: "c", text: "A storage cluster." },
      { id: "d", text: "An object." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q270",
    prompt: "The base URI for all requests for instance metadata is [...].",
    options: [
      { id: "a", text: "<http://254.169.169.254/latest/>." },
      { id: "b", text: "<http://169.169.254.254/latest/>." },
      { id: "c", text: "<http://127.0.0.1/latest/>." },
      { id: "d", text: "<http://169.254.169.254/latest/>." },
    ],
    correctOptionId: "d",
  },

  {
    id: "q271",
    prompt:
      "While using the EC2 GET requests as URLs, the [...] is the URL that serves as the entry point for the web service.",
    options: [
      { id: "a", text: "token." },
      { id: "b", text: "endpoint." },
      { id: "c", text: "action." },
      { id: "d", text: "None of these." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q272",
    prompt:
      "A user is planning to launch a scalable web application. Which of the below mentioned options will not affect the latency of the application?",
    options: [
      { id: "a", text: "Region." },
      { id: "b", text: "Provisioned IOPS." },
      { id: "c", text: "Availability Zone." },
      { id: "d", text: "Instance size." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q273",
    prompt:
      "Your firm has uploaded a large amount of aerial image data to S3 in the past, in your on-premises environment, you used a dedicated group of servers to oaten process this data and used Rabbit MQAnopen source messaging system to get job information to the servers. Once processed the data would go to tape and be shipped offsite. Your manager told you to stay with the current design, and leverage AWS archival storage and messaging services to minimize cost. Which is correct?",
    options: [
      {
        id: "a",
        text: "Use SQS for passing job messages use Cloud Watch alarms to terminate EC2 worker instances when they become idle. Once data is processed, change the storage class of the S3 objects to Reduced Redundancy Storage.",
      },
      {
        id: "b",
        text: "Setup Auto-Scaled workers triggered by queue depth that use spot instances to process messages in SOS Once data is processed,",
      },
      {
        id: "c",
        text: "Change the storage class of the S3 objects to Reduced Redundancy Storage. Setup Auto-Scaled workers triggered by queue depth that use spot instances to process messages in SQS Once data is processed, change the storage class of the S3 objects to Glacier.",
      },
      {
        id: "d",
        text: "Use SNS to pass job messages use Cloud Watch alarms to terminate spot worker instances when they become idle. Once data is processed, change the storage class of the S3 object to Glacier.",
      },
    ],
    correctOptionId: "d",
  },

  {
    id: "q274",
    prompt:
      "A user has launched 10 EC2 instances inside a placement group. Which of the below mentioned statements is true with respect to the placement group?",
    options: [
      { id: "a", text: "All instances must be in the same AZ." },
      { id: "b", text: "All instances can be across multiple regions." },
      {
        id: "c",
        text: "The placement group cannot have more than 5 instances.",
      },
      { id: "d", text: "All instances must be in the same region." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q275",
    prompt:
      "A user has created a CloudFormation stack. The stack creates AWS services, such as EC2 instances, ELB, AutoScaling, and RDS. While creating the stack it created EC2, ELB and AutoScaling but failed to create RDS. What will CloudFormation do in this scenario?",
    options: [
      {
        id: "a",
        text: "Rollback all the changes and terminate all the created services.",
      },
      {
        id: "b",
        text: "It will wait for the user's input about the error and correct the mistake after the input.",
      },
      {
        id: "c",
        text: "CloudFormation can never throw an error after launching a few services since it verifies all the steps before launching.",
      },
      {
        id: "d",
        text: "It will warn the user about the error and ask the user to manually create RDS.",
      },
    ],
    correctOptionId: "a",
  },

  {
    id: "q276",
    prompt:
      "You have been asked to design the storage layer for an application. The application requires disk performance of at least 100,000 IOPS. In addition, the storage layer must be able to survive the loss of an individual disk, EC2 instance, or Availability Zone without any data loss. The volume you provide must have a capacity of at least 3 TB. Which of the following designs will meet these objectives?",
    options: [
      {
        id: "a",
        text: "Instantiate a c3.8xlarge instance in us-east-1. Provision 4x1TB EBS volumes, attach them to the instance, and configure them as a single RAID 5 volume. Ensure that EBS snapshots are performed every 15 minutes.",
      },
      {
        id: "b",
        text: "Instantiate a c3.8xlarge instance in us-east-1. Provision 3xlTB EBS volumes, attach them to the Instance, and configure them as a single RAID 0 volume. Ensure that EBS snapshots are performed every 15 minutes.",
      },
      {
        id: "c",
        text: "Instantiate an i2.8xlarge instance in us-east-1a. Create a RAID 0 volume using the four 800GB SSD ephemeral disks provided with the instance. Provision 3x1TB EBS volumes, attach them to the instance, and configure them as a second RAID 0 volume. Configure synchronous, block-level replication from the ephemeral-backed volume to the EBS-backed volume.",
      },
      {
        id: "d",
        text: "Instantiate a c3.8xlarge instance in us-east-1. Provision an AWS Storage Gateway and configure it for 3 TB of storage and 100,000 IOPS. Attach the volume to the instance.",
      },
      {
        id: "e",
        text: "Instantiate an i2.8xlarge instance in us-east-1a. Create a RAID 0 volume using the four 800GB SSD ephemeral disks provided with the instance. Configure synchronous, block-level replication to an identically configured instance in us-east-1b.",
      },
    ],
    correctOptionId: "e",
  },

  {
    id: "q277",
    prompt:
      "A company is preparing to give AWS Management Console access to developers Company policy mandates identity federation and role-based access control. Roles are currently assigned using groups in the corporate Active Directory. What combination of the following will give developers access to the AWS console? (Choose 2 answers)",
    options: [
      { id: "a", text: "AWS Directory Service AD Connector." },
      { id: "b", text: "AWS Directory Service Simple AD." },
      { id: "c", text: "AWS Identity and Access Management groups." },
      { id: "d", text: "AWS identity and Access Management roles." },
      { id: "e", text: "AWS identity and Access Management users." },
    ],
    correctOptionId: "a,d",
  },

  {
    id: "q278",
    prompt:
      "Your startup wants to implement an order fulfillment process for selling a personalized gadget that needs an average of 3-4 days to produce with some orders taking up to 6 months you expect 10orders per day on your first day. 1000 orders per day after 6 months and 10,000 orders after 12 months. Orders coming in are checked for consistency men dispatched to your manufacturing plant for production quality control packaging shipment and payment processing If the product does not meet the quality standards at any stage of the process employees may force the process to repeat a step Customers are notified via email about order status and any critical issues with their orders such as payment failure. Your case architecture includes AWS Elastic Beanstalk for your website with an RDS MySQL instance for customer data and orders. How can you implement the order fulfillment process while making sure that the emails are delivered reliably?",
    options: [
      {
        id: "a",
        text: "Add a business process management application to your Elastic Beanstalk app servers and re-use the RDS database for tracking order status use one of the Elastic Beanstalk instances to send emails to customers.",
      },
      {
        id: "b",
        text: "Use SWF with an Auto Scaling group of activity workers and a decider instance in another Auto Scaling group with min/max=l Use the decider instance to send emails to customers.",
      },
      {
        id: "c",
        text: "Use SWF with an Auto Scaling group of activity workers and a decider instance in another Auto Scaling group with min/max=l use SES to send emails to customers.",
      },
      {
        id: "d",
        text: "Use an SQS queue to manage all process tasks Use an Auto Scaling group of EC2 Instances that poll the tasks and execute them. Use SES to send emails to customers.",
      },
    ],
    correctOptionId: "c",
  },

  {
    id: "q279",
    prompt:
      "A, [...] is an individual, system, or application that interacts with AWS programmatically.",
    options: [
      { id: "a", text: "user." },
      { id: "b", text: "AWS Account." },
      { id: "c", text: "group." },
      { id: "d", text: "role." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q280",
    prompt:
      "A user is accessing an EC2 instance on the SSH port for IP 10.20.30.40. Which one is a secure way to configure that the instance can be accessed only from this IP?",
    options: [
      {
        id: "a",
        text: "In the security group, open port 22 for IP 10.20.30.40.",
      },
      {
        id: "b",
        text: "In the security group, open port 22 for IP 10.20.30.40/32.",
      },
      {
        id: "c",
        text: "In the security group, open port 22 for IP 10.20.30.40/24.",
      },
      {
        id: "d",
        text: "In the security group, open port 22 for IP 10.20.30.40/0.",
      },
    ],
    correctOptionId: "b",
  },

  {
    id: "q281",
    prompt:
      "Read Replicas require a transactional storage engine and are only supported for the [...] storage engine.",
    options: [
      { id: "a", text: "OracleISAM." },
      { id: "b", text: "MSSQLDB." },
      { id: "c", text: "InnoDB." },
      { id: "d", text: "MyISAM." },
    ],
    correctOptionId: "c",
  },

  {
    id: "q282",
    prompt: "What is Amazon Glacier?",
    options: [
      {
        id: "a",
        text: "You mean Amazon 'Iceberg': it's a low-cost storage service.",
      },
      {
        id: "b",
        text: "A security tool that allows to 'freeze' an EBS volume and perform computer forensics on it.",
      },
      {
        id: "c",
        text: "A low-cost storage service that provides secure and durable storage for data archiving and backup.",
      },
      {
        id: "d",
        text: "It's a security tool that allows to 'freeze' an EC2 instance and perform computer forensics on it.",
      },
    ],
    correctOptionId: "c",
  },

  {
    id: "q283",
    prompt:
      "You have a content management system running on an Amazon EC2 instance that is approaching 100% CPU utilization. Which option will reduce load on the Amazon EC2 instance?",
    options: [
      {
        id: "a",
        text: "Create a load balancer, and register the Amazon EC2 instance with it.",
      },
      {
        id: "b",
        text: "Create a CloudFront distribution, and configure the Amazon EC2 instance as the origin.",
      },
      {
        id: "c",
        text: "Create an Auto Scaling group from the instance using the Create AutoScaling Group action.",
      },
      {
        id: "d",
        text: "Create a launch configuration from the instance using the Create launch Configuration action.",
      },
    ],
    correctOptionId: "b",
  },

  {
    id: "q284",
    prompt:
      "Can I initiate a 'forced failover' for my MySQL Multi-AZ DB Instance deployment?",
    options: [
      { id: "a", text: "Only in certain regions." },
      { id: "b", text: "Only in VPC." },
      { id: "c", text: "Yes." },
      { id: "d", text: "No." },
    ],
    correctOptionId: "c",
  },

  {
    id: "q285",
    prompt:
      "When controlling access to Amazon EC2 resources, each Amazon EBS Snapshot has a [...] attribute that controls which AWS accounts can use the snapshot.",
    options: [
      { id: "a", text: "createVolumePermission." },
      { id: "b", text: "LaunchPermission." },
      { id: "c", text: "SharePermission." },
      { id: "d", text: "RequestPermission." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q286",
    prompt:
      "You have decided to change the instance type for instances running in your application tier that is using Auto Scaling. In which area below would you change the instance type definition?",
    options: [
      { id: "a", text: "Auto Scaling policy." },
      { id: "b", text: "Auto Scaling group." },
      { id: "c", text: "Auto Scaling tags." },
      { id: "d", text: "Auto Scaling launch configuration." },
    ],
    correctOptionId: "d",
  },

  {
    id: "q287",
    prompt:
      "Which of the following statements is true of creating a launch configuration using an EC2 instance?",
    options: [
      {
        id: "a",
        text: "The launch configuration can be created only using the Query APIs.",
      },
      {
        id: "b",
        text: "Auto Scaling automatically creates a launch configuration directly from an EC2 instance.",
      },
      {
        id: "c",
        text: "A user should manually create a launch configuration before creating an Auto Scaling group.",
      },
      {
        id: "d",
        text: "The launch configuration should be created manually from the AWS CL.",
      },
    ],
    correctOptionId: "b",
  },

  {
    id: "q288",
    prompt:
      "Your company has multiple IT departments, each with their own VPC. Some VPCs are located within the same AWS account, and others in a different AWS account. You want to peer together all VPCs to enable the IT departments to have full access to each others' resources. There are certain limitations placed on VPC peering. Which of the following statements is incorrect in relation to VPC peering?",
    options: [
      {
        id: "a",
        text: "Private DNS values cannot be resolved between instances in peered VPCs.",
      },
      {
        id: "b",
        text: "You can have up to 3 VPC peering connections between the same two VPCs at the same time.",
      },
      {
        id: "c",
        text: "You cannot create a VPC peering connection between VPCs in different regions.",
      },
      {
        id: "d",
        text: "You have a limit on the number active and pending VPC peering connections that you can have per VP.",
      },
    ],
    correctOptionId: "b",
  },

  {
    id: "q289",
    prompt:
      "A gaming company comes to you and asks you to build them infrastructure for their site. They are not sure how big they will be as with all start ups they have limited money and big ideas. What they do tell you is that if the game becomes successful, like one of their previous games, it may rapidly grow to millions of users and generate tens (or even hundreds) of thousands of writes and reads per second. After considering all of this, you decide that they need a fully managed NoSQL database service that provides fast and predictable performance with seamless scalability. Which of the following databases do you think would best fit their needs?",
    options: [
      { id: "a", text: "Amazon DynamoDB." },
      { id: "b", text: "Amazon Redshift." },
      { id: "c", text: "Any non-relational database." },
      { id: "d", text: "Amazon SimpleDB." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q290",
    prompt:
      "A/An [...] acts as a firewall that controls the traffic allowed to reach one or more instances.",
    options: [
      { id: "a", text: "security group." },
      { id: "b", text: "ACL." },
      { id: "c", text: "IAM." },
      { id: "d", text: "private IP Addresses." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q291",
    prompt:
      "Your manager has just given you access to multiple VPN connections that someone else has recently set up between all your company's offices. She needs you to make sure that the communication between the VPNs is secure. Which of the following services would be best for providing a low-cost hub-and-spoke model for primary or backup connectivity between these remote offices?",
    options: [
      { id: "a", text: "Amazon CloudFront." },
      { id: "b", text: "AWS Direct Connect." },
      { id: "c", text: "AWS CloudHSM." },
      { id: "d", text: "AWS VPN CloudHub." },
    ],
    correctOptionId: "d",
  },

  {
    id: "q292",
    prompt:
      "You need to create a management network using network interfaces for a virtual private cloud (VPC) network. Which of the following statements is incorrect pertaining to Best Practices for ConfiguringNetwork Interfaces.",
    options: [
      {
        id: "a",
        text: "You can detach secondary (ethN) network interfaces when the instance is running or stopped. However, you can't detach the primary (eth0) interface.",
      },
      {
        id: "b",
        text: "Launching an instance with multiple network interfaces automatically configures interfaces, private IP addresses, and route tables on the operating system of the instance.",
      },
      {
        id: "c",
        text: "You can attach a network interface in one subnet to an instance in another subnet in the same VPC, however, both the network interface and the instance must reside in the same Availability Zone.",
      },
      {
        id: "d",
        text: "Attaching another network interface to an instance is a valid method to increase or double the network bandwidth to or from the dual-homed instance.",
      },
    ],
    correctOptionId: "d",
  },

  {
    id: "q293",
    prompt:
      "A user has launched 10 EC2 instances inside a placement group. Which of the following statements is true in regards to what ability launching your instances into a VPC instead of EC2-Classic gives you?",
    options: [
      { id: "a", text: "All of the things listed here." },
      {
        id: "b",
        text: "Change security group membership for your instances while they're running.",
      },
      {
        id: "c",
        text: "Assign static private IP addresses to your instances that persist across starts and stops.",
      },
      {
        id: "d",
        text: "Define network interfaces, and attach one or more network interfaces to your instances.",
      },
    ],
    correctOptionId: "a",
  },

  {
    id: "q294",
    prompt:
      "In the HQ region you run an hourly batch process reading data from every region to compute cross regional reports that are sent by email to all offices this batch process must be completed as fast as possible to quickly optimize logistics how do you build the database architecture in order to meet the requirements'?",
    options: [
      {
        id: "a",
        text: "For each regional deployment, use RDS MySQL with a master in the region and a read replica in the HQ region.",
      },
      {
        id: "b",
        text: "For each regional deployment, use MySQL on EC2 with a master in the region and send hourly EBS snapshots to the HQ region.",
      },
      {
        id: "c",
        text: "For each regional deployment, use RDS MySQL with a master in the region and send hourly RDS snapshots to the HQ region.",
      },
      {
        id: "d",
        text: "For each regional deployment, use MySQL on EC2 with a master in the region and use S3 to copy data files hourly to the HQ region.",
      },
      {
        id: "e",
        text: "Use Direct Connect to connect all regional MySQL deployments to the HQ region and reduce network latency for the batch process.",
      },
    ],
    correctOptionId: "a",
  },

  {
    id: "q295",
    prompt:
      "What is the average IOPS that the user will get for most of the year as per EC2 SLA if the instance is attached to the EBS optimized instance?",
    options: [
      { id: "a", text: "950." },
      { id: "b", text: "990." },
      { id: "c", text: "1000." },
      { id: "d", text: "900." },
    ],
    correctOptionId: "d",
  },

  {
    id: "q296",
    prompt:
      "You are working with a customer who has 10 TB of archival data that they want to migrate to Amazon Glacier. The customer has a 1-Mbps connection to the Internet. Which service or feature provides the fastest method of getting the data into Amazon Glacier?",
    options: [
      { id: "a", text: "Amazon Glacier multipart upload." },
      { id: "b", text: "AWS Storage Gateway." },
      { id: "c", text: "VM Import/Export." },
      { id: "d", text: "AWS Import/Export." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q297",
    prompt:
      "Your manager has asked you to set up a public subnet with instances that can send and receive internet traffic, and a private subnet that can't receive traffic directly from the internet, but can initiate traffic to the internet (and receive responses) through a NAT instance in the public subnet. Hence, the following 3 rules need to be allowed: Inbound SSH traffic. Web servers in the public subnet to read and write to MS SQL servers in the private subnet. Inbound RDP traffic from the Microsoft Terminal Services gateway in the public private subnet. What are the respective ports that need to be opened for this?",
    options: [
      { id: "a", text: "Ports 22, 1433, 3389." },
      { id: "b", text: "Ports 21, 1433, 3389." },
      { id: "c", text: "Ports 25, 1433, 3389." },
      { id: "d", text: "Ports 22, 1343, 3999." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q298",
    prompt:
      "An EC2 instance is connected to an ENI (Elastic Network Interface) in one subnet. What happens to the data on an instance if the instance reboots (intentionally or unintentionally)?",
    options: [
      { id: "a", text: "Data will be lost." },
      { id: "b", text: "Data persists." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q299",
    prompt: "Please select the Amazon EC2 resource which can be tagged.",
    options: [
      { id: "a", text: "Key pairs." },
      { id: "b", text: "Elastic IP addresses." },
      { id: "c", text: "Placement groups." },
      { id: "d", text: "Amazon EBS snapshots." },
    ],
    correctOptionId: "c",
  },

  {
    id: "q300",
    prompt:
      "Without [...] you must either create multiple AWS accounts-each with its own billing and subscriptions to AWS products-or your employees must share the security credentials of a single AWS account.",
    options: [
      { id: "a", text: "Amazon RDS." },
      { id: "b", text: "Amazon Glacier." },
      { id: "c", text: "Amazon EMR." },
      { id: "d", text: "Amazon IAM." },
    ],
    correctOptionId: "d",
  },

  {
    id: "q301",
    prompt:
      "An EC2 instance is connected to an ENI (Elastic Network Interface) in one subnet. What happens when you attach an ENI of a different subnet to this EC2 instance?",
    options: [
      {
        id: "a",
        text: "The EC2 instance follows the rules of the older subnet.",
      },
      {
        id: "b",
        text: "The EC2 instance follows the rules of both the subnets.",
      },
      { id: "c", text: "Not possible, cannot be connected to 2 ENIs." },
      {
        id: "d",
        text: "The EC2 instance follows the rules of the newer subnet.",
      },
    ],
    correctOptionId: "b",
  },

  {
    id: "q302",
    prompt:
      "You have deployed a three-tier web application in a VPC with a CIDR block of 10.0.0.0/28. You initially deploy two web servers, two application servers, two database servers and one NAT instance tor a total of seven EC2 instances. The web, application and database servers are deployed across two Availability Zones (AZs). You also deploy an ELB in front of the two web servers, and use Route 53 for DNS Web. Raffle gradually increases in the first few days following the deployment, so you attempt to double the number of instances in each tier of the application to handle the new load unfortunately some of these new instances fail to launch.Which of the following could be the root caused? (Choose 2 answers)",
    options: [
      {
        id: "a",
        text: "AWS reserves the first and the last private IP address in each subnet's CIDR block so you do not have enough addresses left to launch all of the new EC2 instances.",
      },
      {
        id: "b",
        text: "The Internet Gateway (IGW) of your VPC has scaled-up, adding more instances to handle the traffic spike, reducing the number of available private IP addresses for new instance launches.",
      },
      {
        id: "c",
        text: "The ELB has scaled-up, adding more instances to handle the traffic spike, reducing the number of available private IP addresses for new instance launches.",
      },
      {
        id: "d",
        text: "AWS reserves one IP address in each subnet's CIDR block for Route 53 so you do not have enough addresses left to launch all of the new EC2 instances.",
      },
      {
        id: "e",
        text: "AWS reserves the first four and the last IP address in each subnet's CIDR block so you do not have enough addresses left to launch all of the new EC2 instances.",
      },
    ],
    correctOptionId: "c,e",
  },

  {
    id: "q303",
    prompt:
      "Which of the following will cause an immediate DB instance reboot to occur?",
    options: [
      {
        id: "a",
        text: "You change storage type from standard to PIOPS, and Apply Immediately is set to true.",
      },
      {
        id: "b",
        text: "You change the DB instance class, and Apply Immediately is set to false.",
      },
      {
        id: "c",
        text: "You change a static parameter in a DB parameter group.",
      },
      {
        id: "d",
        text: "You change the backup retention period for a DB instance from 0 to a nonzero value or from a nonzero value to 0, and Apply Immediately is set to false.",
      },
    ],
    correctOptionId: "a",
  },

  {
    id: "q304",
    prompt: "EBS Snapshots occur [...].",
    options: [
      { id: "a", text: "Asynchronously." },
      { id: "b", text: "Synchronously." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q305",
    prompt:
      "You are tasked with moving a legacy application from a virtual machine running Inside your datacenter to an Amazon VPC Unfortunately this app requires access to a number of on-premises services and no one who configured the app still works for your company. Even worse there's no documentation for it. What will allow the application running inside the VPC to reach back and access its internal dependencies without being reconfigured? (Choose 3 answers)",
    options: [
      {
        id: "a",
        text: "An AWS Direct Connect link between the VPC and the network housing the internal services.",
      },
      { id: "b", text: "An Internet Gateway to allow a VPN connection." },
      { id: "c", text: "An Elastic IP address on the VPC instance." },
      {
        id: "d",
        text: "An IP address space that does not conflict with the one on-premises.",
      },
      {
        id: "e",
        text: "Entries in Amazon Route 53 that allow the Instance to resolve its dependencies' IP addresses.",
      },
      { id: "f", text: "A VM Import of the current virtual machine." },
    ],
    correctOptionId: "a,d,f",
  },

  {
    id: "q306",
    prompt:
      "A company needs to deploy services to an AWS region which they have not previously used. The company currently has an AWS identity and Access Management (IAM) role for the Amazon EC2 instances, which permits the instance to have access to Amazon DynamoDB. The company wants their EC2 instances in the new region to have the same privileges. How should the company achieve this?",
    options: [
      {
        id: "a",
        text: "Create a new IAM role and associated policies within the new region.",
      },
      {
        id: "b",
        text: "Assign the existing IAM role to the Amazon EC2 instances in the new region.",
      },
      {
        id: "c",
        text: "Copy the IAM role and associated policies to the new region and attach it to the instances.",
      },
      {
        id: "d",
        text: "Create an Amazon Machine Image (AMI) of the instance and copy it to the desired region using the AMI Copy feature.",
      },
    ],
    correctOptionId: "b",
  },

  {
    id: "q307",
    prompt:
      "If you want to launch Amazon Elastic Compute Cloud (EC2) instances and assign each instance a predetermined private IP address you should:",
    options: [
      {
        id: "a",
        text: "Launch the instance from a private Amazon Machine Image (AMI).",
      },
      {
        id: "b",
        text: "Assign a group of sequential Elastic IP address to the instances.",
      },
      {
        id: "c",
        text: "Launch the instances in the Amazon Virtual Private Cloud (VPC).",
      },
      { id: "d", text: "Launch the instances in a Placement Group." },
      {
        id: "e",
        text: "Use standard EC2 instances since each instance gets a private Domain Name Service (DNS) already.",
      },
    ],
    correctOptionId: "b",
  },

  {
    id: "q308",
    prompt:
      "When automatic failover occurs, Amazon RDS will emit a DB Instance event to inform you that automatic failover occurred. You can use the [...] to return information about events related to your DB Instance.",
    options: [
      { id: "a", text: "FetchFailure." },
      { id: "b", text: "DescriveFailure." },
      { id: "c", text: "DescribeEvents." },
      { id: "d", text: "FetchEvents." },
    ],
    correctOptionId: "c",
  },

  {
    id: "q309",
    prompt:
      "You have a Business support plan with AWS. One of your EC2 instances is running Microsoft Windows Server 2008 R2 and you are having problems with the software. Can you receive support from AWS for this software?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No, AWS does not support any third-party software." },
      {
        id: "c",
        text: "No, Microsoft Windows Server 2008 R2 is not supported.",
      },
      { id: "d", text: "No, you need to be on the enterprise support plan." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q310",
    prompt:
      "A newspaper organization has a on-premises application which allows the public to search its back catalogue and retrieve individual newspaper pages via a website written in Java They have scanned the old newspapers into JPEGs (approx 17TB) and used Optical Character Recognition (OCR) to populate a commercial search product. The hosting platform and software are now end of life and the organization wants to migrate Its archive to AWS and produce a cost efficient architecture and still be designed for availability and durability. Which is the most appropriate?",
    options: [
      {
        id: "a",
        text: "Use S3 with reduced redundancy to store and serve the scanned files, install the commercial search application on EC2 Instances and configure with auto-scaling and an Elastic Load Balancer.",
      },
      {
        id: "b",
        text: "Model the environment using CloudFormation use an EC2 instance running Apache webserver and an open source search application, stripe multiple standard EB5 volumes together to store the JPEGs and search index.",
      },
      {
        id: "c",
        text: "Use S3 with standard redundancy to store and serve the scanned files, use Cloud5earch for query processing, and use Elastic Beanstalk to host the website across multiple Availability Zones.",
      },
      {
        id: "d",
        text: "Use a single-AZ RD5 My5QL instance to store the search index 33d the JPEG images use an EC2 instance to serve the website and translate user queries into 5Q",
      },
      {
        id: "e",
        text: "Use a CloudFront download distribution to serve the JPEGs to the end users and Install the current commercial search product, along with a Java Container Tor the website on EC2 instances and use Route 53 with DNS round-robin.",
      },
    ],
    correctOptionId: "c",
  },

  {
    id: "q311",
    prompt: "A Provisioned IOPS volume must be at least [...] GB in size.",
    options: [
      { id: "a", text: "1." },
      { id: "b", text: "50." },
      { id: "c", text: "20." },
      { id: "d", text: "10." },
    ],
    correctOptionId: "d",
  },

  {
    id: "q312",
    prompt:
      "In Amazon EC2, while sharing an Amazon EBS snapshot, can the snapshots with AWS Marketplace product codes be public?",
    options: [
      { id: "a", text: "Yes, but only for US-based providers." },
      { id: "b", text: "Yes, they can be public." },
      { id: "c", text: "No, they cannot be made public." },
      {
        id: "d",
        text: "Yes, they are automatically made public by the system.",
      },
    ],
    correctOptionId: "c",
  },

  {
    id: "q313",
    prompt:
      "A company has an AWS account that contains three VPCs (Dev, Test, and Prod) in the same region. Test is peered to both Prod and Dev. All VPCs have non-overlapping CIDR blocks. The company wants to push minor code releases from Dev to Prod to speed up time to market. Which of the following options helps the company accomplish this?",
    options: [
      {
        id: "a",
        text: "Create a new peering connection Between Prod and Dev along with appropriate routes.",
      },
      {
        id: "b",
        text: "Create a new entry to Prod in the Dev route table using the peering connection as the target.",
      },
      {
        id: "c",
        text: "Attach a second gateway to Dev. Add a new entry in the Prod route table identifying the gateway as the target.",
      },
      {
        id: "d",
        text: "The VPCs have non-overlapping Cl DR blocks in the same account. The route tables contain local routes for all VPCs.",
      },
    ],
    correctOptionId: "d",
  },

  {
    id: "q314",
    prompt:
      "The [...] service is targeted at organizations with multiple users or systems that use AWS products such as Amazon EC2, Amazon SimpleDB, and the AWS Management Console.",
    options: [
      { id: "a", text: "Amazon RDS." },
      { id: "b", text: "AWS Integrity Management." },
      { id: "c", text: "AWS Identity and Access Management." },
      { id: "d", text: "Amazon EMR." },
    ],
    correctOptionId: "c",
  },

  {
    id: "q315",
    prompt:
      "You have just been given a scope for a new client who has an enormous amount of data (petabytes) that he constantly needs analysed. Currently he is paying a huge amount of money for a data warehousing company to do this for him and is wondering if AWS can provide a cheaper solution. Do you think AWS has a solution for this?",
    options: [
      { id: "a", text: "Yes. Amazon SimpleDB." },
      { id: "b", text: "No. Not presently." },
      { id: "c", text: "Yes. Amazon Redshift." },
      {
        id: "d",
        text: "Yes. Your choice of relational AMIs on Amazon EC2 and EBS.",
      },
    ],
    correctOptionId: "c",
  },

  {
    id: "q316",
    prompt:
      "You have set up an Elastic Load Balancer (ELB) with the usual default settings, which route each request independently to the application instance with the smallest load. However, someone has asked you to bind a user's session to a specific application instance so as to ensure that all requests coming from the user during the session will be sent to the same application instance. AWS has a feature to do this. What is it called?",
    options: [
      { id: "a", text: "Connection draining." },
      { id: "b", text: "Proxy protocol." },
      { id: "c", text: "Tagging." },
      { id: "d", text: "Sticky session." },
    ],
    correctOptionId: "d",
  },

  {
    id: "q317",
    prompt:
      "You have written a CloudFormation template that creates 1 Elastic Load Balancer fronting 2 EC2 Instances. Which section of the template should you edit so that the DNS of the load balancer is returned upon creation of the stack?",
    options: [
      { id: "a", text: "Resources." },
      { id: "b", text: "Outputs." },
      { id: "c", text: "Parameters." },
      { id: "d", text: "Mappings." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q318",
    prompt:
      "AWS CloudFormation is a service that helps you model and set up your Amazon Web Services resources so that you can spend less time managing those resources and more time focusing on your applications that run in AWS. You create a template that describes all the AWS resources that you want (like Amazon EC2 instances or Amazon RDS DB instances), and AWS CloudFormation takes care of provisioning and configuring those resources for you. What formatting is required for this template?",
    options: [
      { id: "a", text: "JSON-formatted document." },
      { id: "b", text: "CSS-formatted document." },
      { id: "c", text: "XML-formatted document." },
      { id: "d", text: "HTML-formatted document." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q319",
    prompt:
      "A user has created an application which will be hosted on EC2. The application makes calls to DynamoDB to fetch certain data. The application is using the DynamoDB SDK to connect with from theEC2 instance. Which of the below mentioned statements is true with respect to the best practice for security in this scenario?",
    options: [
      {
        id: "a",
        text: "The user should create an IAM user with DynamoDB access and use its credentials within the application to connect with DynamoDB.",
      },
      {
        id: "b",
        text: "The user should attach an IAM role with DynamoDB access to the EC2 instance.",
      },
      {
        id: "c",
        text: "The user should create an IAM role, which has EC2 access so that it will allow deploying the application.",
      },
      {
        id: "d",
        text: "The user should create an IAM user with DynamoDB and EC2 access. Attach the user with the application so that it does not use the root account credentials.",
      },
    ],
    correctOptionId: "b",
  },

  {
    id: "q320",
    prompt:
      "After setting up an EC2 security group with a cluster of 20 EC2 instances, you find an error in the security group settings. You quickly make changes to the security group settings. When will the changes to the settings be effective?",
    options: [
      {
        id: "a",
        text: "The settings will be effective immediately for all the instances in the security group.",
      },
      {
        id: "b",
        text: "The settings will be effective only when all the instances are restarted.",
      },
      {
        id: "c",
        text: "The settings will be effective for all the instances only after 30 minutes.",
      },
      {
        id: "d",
        text: "The settings will be effective only for the new instances added to the security group.",
      },
    ],
    correctOptionId: "a",
  },

  {
    id: "q321",
    prompt:
      "Can a user get a notification of each instance start / terminate configured with Auto Scaling?",
    options: [
      { id: "a", text: "Yes, if configured with the Launch Config." },
      { id: "b", text: "Yes, always." },
      { id: "c", text: "Yes, if configured with the Auto Scaling group." },
      { id: "d", text: "No." },
    ],
    correctOptionId: "c",
  },

  {
    id: "q322",
    prompt:
      "Which Amazon storage do you think is the best for my database-style applications that frequently encounter many random reads and writes across the dataset?",
    options: [
      { id: "a", text: "None of these." },
      { id: "b", text: "Amazon Instance Storage." },
      { id: "c", text: "Any of these." },
      { id: "d", text: "Amazon EBS." },
    ],
    correctOptionId: "d",
  },

  {
    id: "q323",
    prompt:
      "In the Amazon RDS Oracle DB engine, the Database Diagnostic Pack and the Database Tuning Pack are only available with [...].",
    options: [
      { id: "a", text: "Oracle Standard Edition." },
      { id: "b", text: "Oracle Express Edition." },
      { id: "c", text: "Oracle Enterprise Edition." },
      { id: "d", text: "None of these." },
    ],
    correctOptionId: "c",
  },

  {
    id: "q324",
    prompt:
      "Will my standby RDS instance be in the same Availability Zone as my primary?",
    options: [
      { id: "a", text: "Only for Oracle RDS types." },
      { id: "b", text: "Yes." },
      { id: "c", text: "Only if configured at launch." },
      { id: "d", text: "No." },
    ],
    correctOptionId: "d",
  },

  {
    id: "q325",
    prompt:
      "An administrator is using Amazon CloudFormation to deploy a three tier web application that consists of a web tier and application tier that will utilize Amazon DynamoDB for storage when creating theCloudFormation template which of the following would allow the application instance access to the DynamoDB tables without exposing API credentials?",
    options: [
      {
        id: "a",
        text: "Create an Identity and Access Management Role that has the required permissions to read and write from the required DynamoDB table and associate the Role to the application instances by referencing an instance profile.",
      },
      {
        id: "b",
        text: "Use the Parameter section in the Cloud Formation template to nave the user input Access and Secret Keys from an already created IAM user that has me permissions required to read and write from the required DynamoDB table.",
      },
      {
        id: "c",
        text: "Create an Identity and Access Management Role that has the required permissions to read and write from the required DynamoDB table and reference the Role in the instance profile property of the application instance.",
      },
      {
        id: "d",
        text: "Create an identity and Access Management user in the CloudFormation template that has permissions to read and write from the required DynamoDB table, use the GetAtt function to retrieve the Access and secret keys and pass them to the application instance through user-data.",
      },
    ],
    correctOptionId: "c",
  },

  {
    id: "q326",
    prompt:
      "In an experiment, if the minimum size for an Auto Scaling group is 1 instance, which of the following statements holds true when you terminate the running instance?",
    options: [
      {
        id: "a",
        text: "Auto Scaling must launch a new instance to replace it.",
      },
      {
        id: "b",
        text: "Auto Scaling will raise an alarm and send a notification to the user for action.",
      },
      {
        id: "c",
        text: "Auto Scaling must configure the schedule activity that terminates the instance after 5 days.",
      },
      { id: "d", text: "Auto Scaling will terminate the experiment." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q327",
    prompt:
      "True or False: Manually created DB Snapshots are deleted after the DB Instance is deleted.",
    options: [
      { id: "a", text: "True." },
      { id: "b", text: "False." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q328",
    prompt:
      "Amazon S3 doesn't automatically give a user who creates [...] permission to perform other actions on that bucket or object.",
    options: [
      { id: "a", text: "a file." },
      { id: "b", text: "a bucket or object." },
      { id: "c", text: "a bucket or file." },
      { id: "d", text: "a object or file." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q329",
    prompt:
      "A company wants to review the security requirements of Glacier. Which of the below mentioned statements is true with respect to the AWS Glacier data security?",
    options: [
      {
        id: "a",
        text: "All data stored on Glacier is protected with AES-256 serverside encryption.",
      },
      {
        id: "b",
        text: "All data stored on Glacier is protected with AES-128 serverside encryption.",
      },
      {
        id: "c",
        text: "The user can set the serverside encryption flag to encrypt the data stored on Glacier.",
      },
      {
        id: "d",
        text: "The data stored on Glacier is not encrypted by default.",
      },
    ],
    correctOptionId: "a",
  },

  {
    id: "q330",
    prompt: "What does Amazon EBS stand for?",
    options: [
      { id: "a", text: "Elastic Block Storage." },
      { id: "b", text: "Elastic Business Server." },
      { id: "c", text: "Elastic Blade Server." },
      { id: "d", text: "Elastic Block Store." },
    ],
    correctOptionId: "d",
  },

  {
    id: "q331",
    prompt:
      "You have a distributed application that periodically processes large volumes of data across multiple Amazon EC2 Instances. The application is designed to recover gracefully from Amazon EC2 instance failures. You are required to accomplish this task in the most cost-effective way. Which of the following will meet your requirements?",
    options: [
      { id: "a", text: "Spot Instances." },
      { id: "b", text: "Reserved instances." },
      { id: "c", text: "Dedicated instances." },
      { id: "d", text: "On-Demand instances." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q332",
    prompt: "What does Amazon SWF stand for?",
    options: [
      { id: "a", text: "Simple Web Flow." },
      { id: "b", text: "Simple Work Flow." },
      { id: "c", text: "Simple Wireless Forms." },
      { id: "d", text: "Simple Web Form." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q333",
    prompt:
      "Can you specify the security group that you created for a VPC when you launch an instance in EC2-Classic?",
    options: [
      {
        id: "a",
        text: "No, you can specify the security group created for EC2-Classic when you launch a VPC instance.",
      },
      { id: "b", text: "Yes." },
      { id: "c", text: "No." },
      {
        id: "d",
        text: "No, you can specify the security group created for EC2-Classic to a non-VPC based instance only.",
      },
    ],
    correctOptionId: "c",
  },

  {
    id: "q334",
    prompt:
      "Which two methods increases the fault tolerance of the connection to VPC-1? (Choose 2 answers)",
    options: [
      {
        id: "a",
        text: "Establish a hardware VPN over the internet between VPC-2 and the on-premises network.",
      },
      {
        id: "b",
        text: "Establish a hardware VPN over the internet between VPC-1 and the on-premises network.",
      },
      {
        id: "c",
        text: "Establish a new AWS Direct Connect connection and private virtual interface in the same region as VPC-2.",
      },
      {
        id: "d",
        text: "Establish a new AWS Direct Connect connection and private virtual interface in a different AWS region than VPC-1.",
      },
      {
        id: "e",
        text: "Establish a new AWS Direct Connect connection and private virtual interface in the same AWS region as VPC-1.",
      },
    ],
    correctOptionId: "b,e",
  },

  {
    id: "q335",
    prompt:
      "How would you improve page load times for your users? (Choose 3 answers)",
    options: [
      {
        id: "a",
        text: "Lower the scale up trigger of your Auto Scaling group to 30% so it scales more aggressively.",
      },
      {
        id: "b",
        text: "Add an Amazon ElastiCache caching layer to your application for storing sessions and frequent DB queries.",
      },
      {
        id: "c",
        text: "Configure Amazon CloudFront dynamic content support to enable caching of re-usable content from your site.",
      },
      {
        id: "d",
        text: "Switch Amazon RDS database to the high memory extra large Instance type.",
      },
      {
        id: "e",
        text: "Set up a second installation in another region, and use the Amazon Route 53 latency-based routing feature to select the right region.",
      },
    ],
    correctOptionId: "b,c,d",
  },

  {
    id: "q336",
    prompt:
      "Typically, you want your application to check whether a request generated an error before you spend any time processing results. The easiest way to find out if an error occurred is to look for an [...] node in the response from the Amazon RDS API.",
    options: [
      { id: "a", text: "incorrect." },
      { id: "b", text: "error." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q337",
    prompt:
      "Through which of the following interfaces is AWS Identity and Access Management available? A. AWS Management Console. B. Command line interface (CLI). C. IAM Query API. D. Existing libraries.",
    options: [
      { id: "a", text: "Only through Command line interface (CLI)." },
      { id: "b", text: "A, B and C." },
      { id: "c", text: "A and C." },
      { id: "d", text: "All of the above." },
    ],
    correctOptionId: "d",
  },

  {
    id: "q338",
    prompt:
      "A [...] is a storage device that moves data in sequences of bytes or bits (blocks).",
    options: [
      { id: "a", text: "block map." },
      { id: "b", text: "storage block." },
      { id: "c", text: "mapping device." },
      { id: "d", text: "block device." },
    ],
    correctOptionId: "d",
  },

  {
    id: "q339",
    prompt:
      "You have just finished setting up an advertisement server in which one of the obvious choices for a service was Amazon Elastic MapReduce( EMR) and are now troubleshooting some weird cluster states that you are seeing. Which of the below is not an Amazon EMR cluster state?",
    options: [
      { id: "a", text: "STARTING." },
      { id: "b", text: "STOPPED." },
      { id: "c", text: "RUNNING." },
      { id: "d", text: "WAITING." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q340",
    prompt:
      "A US-based company is expanding their web presence into Europe. The company wants to extend their AWS infrastructure from Northern Virginia (us-east-1) into the Dublin (eu-west-1) region. Which of the following options would enable an equivalent experience for users on both continents?",
    options: [
      {
        id: "a",
        text: "Use a public-facing load balancer per region to load-balance web traffic, and enable HTTP health checks.",
      },
      {
        id: "b",
        text: "Use a public-facing load balancer per region to load-balance web traffic, and enable sticky sessions.",
      },
      {
        id: "c",
        text: "Use Amazon Route 53, and apply a geolocation routing policy to distribute traffic across both regions.",
      },
      {
        id: "d",
        text: "Use Amazon Route 53, and apply a weighted routing policy to distribute traffic across both regions.",
      },
    ],
    correctOptionId: "d",
  },

  {
    id: "q341",
    prompt:
      "You are building infrastructure for a data warehousing solution and an extra request has come through that there will be a lot of business reporting queries running all the time and you are not sure if your current DB instance will be able to handle it. What would be the best solution for this?",
    options: [
      { id: "a", text: "DB Parameter Groups." },
      { id: "b", text: "Read Replicas." },
      { id: "c", text: "Multi-AZ DB Instance deployment." },
      { id: "d", text: "Database Snapshots." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q342",
    prompt:
      "One of the criteria for a new deployment is that the customer wants to use AWS Storage Gateway. However you are not sure whether you should use gateway-cached volumes or gateway-stored volumes or even what the differences are. Which statement below best describes those differences?",
    options: [
      {
        id: "a",
        text: "Gateway-cached lets you store your data in Amazon Simple Storage Service (Amazon S3) and retain a copy of frequently accessed data subsets locally. Gateway-stored enables you to configure your on-premises gateway to store all your data locally and then asynchronously back up point-in-time snapshots of this data to Amazon S3.",
      },
      { id: "b", text: "Gateway-cached is free whilst gateway-stored is not." },
      {
        id: "c",
        text: "Gateway-cached is up to 10 times faster than gateway-stored.",
      },
      {
        id: "d",
        text: "Gateway-stored lets you store your data in Amazon Simple Storage Service (Amazon S3) and retain a copy of frequently accessed data subsets locally. Gateway-cached enables you to configure your on-premises gateway to store all your data locally and then asynchronously back up point-in-time snapshots of this data to Amazon S3.",
      },
    ],
    correctOptionId: "a",
  },

  {
    id: "q343",
    prompt: "In Amazon RDS, security groups are ideally used to:",
    options: [
      { id: "a", text: "Define maintenance period for database engines." },
      { id: "b", text: "Launch Amazon RDS instances in a subnet." },
      { id: "c", text: "Create, describe, modify, and delete DB instances." },
      {
        id: "d",
        text: "Control what IP addresses or EC2 instances can connect to your databases on a DB instance.",
      },
    ],
    correctOptionId: "d",
  },

  {
    id: "q344",
    prompt: "How long does an AWS free usage tier EC2 last for?",
    options: [
      { id: "a", text: "Forever." },
      { id: "b", text: "12 Months upon signup." },
      { id: "c", text: "1 Month upon signup." },
      { id: "d", text: "6 Months upon signup." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q345",
    prompt:
      "After you recommend Amazon Redshift to a client as an alternative solution to paying data warehouses to analyze his data, your client asks you to explain why you are recommending Redshift. Which of the following would be a reasonable response to his request?",
    options: [
      {
        id: "a",
        text: "It has high performance at scale as data and query complexity grows.",
      },
      {
        id: "b",
        text: "It prevents reporting and analytic processing from interfering with the performance of OLTP workloads.",
      },
      {
        id: "c",
        text: "You don't have the administrative burden of running your own data warehouse and dealing with setup, durability, monitoring, scaling, and patching.",
      },
      {
        id: "d",
        text: "All answers listed are a reasonable response to his question.",
      },
    ],
    correctOptionId: "d",
  },

  {
    id: "q346",
    prompt:
      "You can seamlessly join an EC2 instance to your directory domain. What connectivity do you need to be able to connect remotely to this instance?",
    options: [
      {
        id: "a",
        text: "You must have IP connectivity to the instance from the network you are connecting from.",
      },
      {
        id: "b",
        text: "You must have the correct encryption keys to connect to the instance remotely.",
      },
      {
        id: "c",
        text: "You must have enough bandwidth to connect to the instance.",
      },
      {
        id: "d",
        text: "You must use MFA authentication to be able to connect to the instance remotely.",
      },
    ],
    correctOptionId: "a",
  },

  {
    id: "q347",
    prompt:
      "Does Amazon DynamoDB support both increment and decrement atomic operations?",
    options: [
      {
        id: "a",
        text: "Only increment, since decrement are inherently impossible with DynamoDB's data model.",
      },
      { id: "b", text: "No, neither increment nor decrement operations." },
      { id: "c", text: "Yes, both increment and decrement operations." },
      {
        id: "d",
        text: "Only decrement, since increment are inherently impossible with DynamoDB's data model.",
      },
    ],
    correctOptionId: "c",
  },

  {
    id: "q348",
    prompt:
      "You nave multiple Amazon EC2 instances running in a cluster across multiple Availability Zones within the same region. What combination of the following should be used to ensure the highest network performance (packets per second), lowest latency, and lowest jitter? (Choose 3 answers)",
    options: [
      { id: "a", text: "Amazon EC2 placement groups." },
      { id: "b", text: "Enhanced networking." },
      { id: "c", text: "Amazon PV AMI." },
      { id: "d", text: "Amazon HVM AMI." },
      { id: "e", text: "Amazon Linux." },
      { id: "f", text: "Amazon VPC." },
    ],
    correctOptionId: "a,b,d",
  },

  {
    id: "q349",
    prompt:
      "If an Amazon EBS volume is the root device of an instance, can I detach it without stopping the instance?",
    options: [
      { id: "a", text: "Yes but only if Windows instance." },
      { id: "b", text: "Yes." },
      { id: "c", text: "No." },
      { id: "d", text: "Yes but only if a Linux instance." },
    ],
    correctOptionId: "c",
  },

  {
    id: "q350",
    prompt:
      "True or False: When you add a rule to a DB security group, you do not need to specify port number or protocol.",
    options: [
      { id: "a", text: "Depends on the ROMS used." },
      { id: "b", text: "True." },
      { id: "c", text: "False." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q351",
    prompt:
      "Before I delete an EBS volume, what can I do if I want to recreate the volume later?",
    options: [
      { id: "a", text: "Create a copy of the EBS volume (not a snapshot)." },
      { id: "b", text: "Store a snapshot of the volume." },
      { id: "c", text: "Download the content to an EC2 instance" },
      { id: "d", text: "Back up the data in to a physical disk." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q352",
    prompt:
      "An accountant asks you to design a small VPC network for him and, due to the nature of his business, just needs something where the workload on the network will be low, and dynamic data will be accessed infrequently. Being an accountant, low cost is also a major factor. Which EBS volume type would best suit his requirements?",
    options: [
      { id: "a", text: "Magnetic." },
      { id: "b", text: "Any, as they all perform the same and cost the same." },
      { id: "c", text: "General Purpose (SSD)." },
      { id: "d", text: "Magnetic or Provisioned IOPS (SSD)." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q353",
    prompt:
      "Uur company currently has a 2-tier web application running in an on-premises data center. You have experienced several infrastructure failures in the past two months resulting in significant financial losses. Your CIO is strongly agreeing to move the application to AWS. While working on achieving buy-in from the other company executives, he asks you to develop a disaster recovery plan to help improve Business continuity in the short term. He specifies a target Recovery Time Objective (RTO) of 4 hours and a Recovery Point Objective (RPO) of 1 hour or less. He also asks you to implement the solution within 2 weeks. Your database is 200GB in size and you have a 20Mbps Internet connection. How would you do this while minimizing costs?",
    options: [
      {
        id: "a",
        text: "Create an EBS backed private AMI which includes a fresh install of your application. Develop a CloudFormation template which includes your AMI and the required EC2, AutoScaling, and ELBresources to support deploying the application across Multiple- Availability-Zones. Asynchronously replicate transactions from your on-premises database to a database instance in AWS across a secure VPN connection.",
      },
      {
        id: "b",
        text: "Deploy your application on EC2 instances within an Auto Scaling group across multiple availability zones. Asynchronously replicate transactions from your on-premises database to a database instance in AWS across a secure VPN connection.",
      },
      {
        id: "c",
        text: "Create an EBS backed private AMI which includes a fresh install of your application. Setup a script in your data center to backup the local database every 1 hour and to encrypt and copy the resulting file to an S3 bucket using multi-part upload.",
      },
      {
        id: "d",
        text: "Install your application on a compute-optimized EC2 instance capable of supporting the application's average load. Synchronously replicate transactions from your on-premises database to a database instance in AWS across a secure Direct Connect connection.",
      },
    ],
    correctOptionId: "a",
  },

  {
    id: "q354",
    prompt:
      "A customer implemented AWS Storage Gateway with a gateway-cached volume at their main office. An event takes the link between the main and branch office offline. Which methods will enable the branch office to access their data? (Choose 3 answers)",
    options: [
      {
        id: "a",
        text: "Use a HTTPS GET to the Amazon S3 bucket where the files are located.",
      },
      {
        id: "b",
        text: "Restore by implementing a lifecycle policy on the Amazon S3 bucket.",
      },
      {
        id: "c",
        text: "Make an Amazon Glacier Restore API ca ll to load the files into another Amazon S3 bucket within four to six hours.",
      },
      {
        id: "d",
        text: "Launch a new AWS Storage Gateway instance AMI in Amazon EC2, and restore from a gateway snapshot.",
      },
      {
        id: "e",
        text: "Create an Amazon EBS volume from a gateway snapshot, and mount it to an Amazon EC2 instance.",
      },
      {
        id: "f",
        text: "Launch an AWS Storage Gateway virtual iSCSI device at the branch office, and restore from a gateway snapshot.",
      },
    ],
    correctOptionId: "d,e,f",
  },

  {
    id: "q355",
    prompt:
      "Your customer is willing to consolidate their log streams (access logs application logs security logs etc.) in one single system. Once consolidated, the customer wants to analyze these logs in real time based on heuristics. From time to time, the customer needs to validate heuristics, which requires going back to data samples extracted from the last 12 hours. What is the best approach to meet your customer's requirements?",
    options: [
      {
        id: "a",
        text: "Send all the log events to Amazon SQS, setup an Auto Scaling group of EC2 servers to consume the logs and apply the heuristics.",
      },
      {
        id: "b",
        text: "Send all the log events to Amazon Kinesis develop a client process to apply heuristics on the logs.",
      },
      {
        id: "c",
        text: "Configure Amazon Cloud Trail to receive custom logs, use EMR to apply heuristics the logs.",
      },
      {
        id: "d",
        text: "Setup an Auto Scaling group of EC2 syslogd servers, store the logs on S3 use EMR to apply heuristics on the logs.",
      },
    ],
    correctOptionId: "b",
  },

  {
    id: "q356",
    prompt: "Can the string value of 'Key' be prefixed with laws?",
    options: [
      { id: "a", text: "No." },
      { id: "b", text: "Only for EC2 not S3." },
      { id: "c", text: "Yes." },
      { id: "d", text: "Only for S3 not EC." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q357",
    prompt:
      "You are configuring your company's application to use Auto Scaling and need to move user state information. Which of the following AWS services provides a shared data store with durability and lowlatency?",
    options: [
      { id: "a", text: "AWS ElastiCache Memcached." },
      { id: "b", text: "Amazon Simple Storage Service." },
      { id: "c", text: "Amazon EC2 instance storage." },
      { id: "d", text: "Amazon DynamoDB." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q358",
    prompt:
      "Your company previously configured a heavily used, dynamically routed VPN connection between your on-premises data center and AWS. You recently provisioned a DirectConnect connection and would like to start using the new connection. After configuring DirectConnect settings in the AWS Console, which of the following options win provide the most seamless transition for your users?",
    options: [
      {
        id: "a",
        text: "Delete your existing VPN connection to avoid routing loops configure your DirectConnect router with the appropriate settings and verity network traffic is leveraging DirectConnect.",
      },
      {
        id: "b",
        text: "Configure your DirectConnect router with a higher 8GP priority man your VPN router, verify network traffic is leveraging Directconnect and then delete your existing VPN connection.",
      },
      {
        id: "c",
        text: "Update your VPC route tables to point to the DirectConnect connection configure your DirectConnect router with the appropriate settings verify network traffic is leveraging DirectConnect and then delete the VPN connection.",
      },
      {
        id: "d",
        text: "Configure your DirectConnect router, update your VPC route tables to point to the DirectConnect connection, configure your VPN connection with a higher BGP pointy. And verify network traffic is leveraging the DirectConnect connection.",
      },
    ],
    correctOptionId: "d",
  },

  {
    id: "q359",
    prompt:
      "After setting up several database instances in Amazon Relational Database Service (Amazon RDS) you decide that you need to track the performance and health of your databases. How can you do this?",
    options: [
      {
        id: "a",
        text: "Subscribe to Amazon RDS events to be notified when changes occur with a DB instance, DB snapshot, DB parameter group, or DB security group.",
      },
      {
        id: "b",
        text: "Use the free Amazon CloudWatch service to monitor the performance and health of a DB instance.",
      },
      {
        id: "c",
        text: "All of the items listed will track the performance and health of a database.",
      },
      {
        id: "d",
        text: "View, download, or watch database log files using the Amazon RDS console or Amazon RDS APIs. You can also query some database log files that are loaded into database tables.",
      },
    ],
    correctOptionId: "c",
  },

  {
    id: "q360",
    prompt:
      "You deployed your company website using Elastic Beanstalk and you enabled log file rotation to S3. An Elastic MapReduce job is periodically analyzing the logs on S3 to build a usage dashboard that you share with your CIO. You recently improved overall performance of the website using CloudFront for dynamic content delivery and your website as the origin. After this architectural change, the usage dashboard shows that the traffic on your website dropped by an order of magnitude. How do you fix your usage dashboard?",
    options: [
      {
        id: "a",
        text: "Enable CloudFront to deliver access logs to S3 and use them as input of the Elastic MapReduce job.",
      },
      {
        id: "b",
        text: "Turn on Cloud Trail and use trail log tiles on S3 as input of the Elastic MapReduce job.",
      },
      {
        id: "c",
        text: "Change your log collection process to use Cloud Watch ELB metrics as input of the Elastic Map Reduce job.",
      },
      {
        id: "d",
        text: "Use Elastic Beanstalk 'Rebuild Environment' option to update log delivery to the Elastic Map Reduce job.",
      },
      {
        id: "e",
        text: "Use Elastic Beanstalk 'Restart App server(s)' option to update log delivery to the Elastic Map Reduce job.",
      },
    ],
    correctOptionId: "a",
  },

  {
    id: "q361",
    prompt:
      "A customer has a 10 GB AWS Direct Connect connection to an AWS region where they have a web application hosted on Amazon Elastic Computer Cloud (EC2). The application has dependencies on an on-premises mainframe database that uses a BASE (Basic Available. Sort stale Eventual consistency) rather than an ACID (Atomicity. Consistency isolation. Durability) consistency model. The application is exhibiting undesirable behavior because the database is not able to handle the volume of writes. How can you reduce the load on your on-premises database resources in the most cost-effective way?",
    options: [
      {
        id: "a",
        text: "Use an Amazon Elastic MapReduce (EMR) S3DistCp as a synchronization mechanism between the on-premises database and a Hadoop cluster on AWS.",
      },
      {
        id: "b",
        text: "Modify the application to write to an Amazon SQS queue and develop a worker process to flush the queue to the on-premises database.",
      },
      {
        id: "c",
        text: "Modify the application to use DynamoDB to feed an EMR cluster which uses a map function to write to the on-premises database.",
      },
      {
        id: "d",
        text: "Provision an RDS read-replica database on AWS to handle the writes and synchronize the two databases using Data Pipeline.",
      },
    ],
    correctOptionId: "b",
  },

  {
    id: "q362",
    prompt:
      "You are very concerned about security on your network because you have multiple programmers testing APIs and SDKs and you have no idea what is happening. You think CloudTrail may help but are not sure what it does. Which of the following statements best describes the AWS service CloudTrail?",
    options: [
      {
        id: "a",
        text: "With AWS CloudTrail you can get a history of AWS API calls and related events for your account.",
      },
      {
        id: "b",
        text: "With AWS CloudTrail you can get a history of IAM users for your account.",
      },
      {
        id: "c",
        text: "With AWS CloudTrail you can get a history of S3 logfiles for your account.",
      },
      {
        id: "d",
        text: "With AWS CloudTrail you can get a history of CloudFormation JSON scripts used for your account.",
      },
    ],
    correctOptionId: "a",
  },

  {
    id: "q363",
    prompt: "Every user you create in the IAM system starts with [...].",
    options: [
      { id: "a", text: "partial permissions." },
      { id: "b", text: "full permissions." },
      { id: "c", text: "no permissions." },
    ],
    correctOptionId: "c",
  },

  {
    id: "q364",
    prompt:
      "Amazon S3 allows you to set per-file permissions to grant read and/or write access. However you have decided that you want an entire bucket with 100 files already in it to be accessible to the public. You don't want to go through 100 files individually and set permissions. What would be the best way to do this?",
    options: [
      { id: "a", text: "Move the bucket to a new region." },
      { id: "b", text: "Add a bucket policy to the bucket." },
      { id: "c", text: "Move the files to a new bucket." },
      { id: "d", text: "Use Amazon EBS instead of S3." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q365",
    prompt:
      "You are designing an SSUTLS solution that requires HTTPS clients to be authenticated by the Web server using client certificate authentication. The solution must be resilient. Which of the following options would you consider for configuring the web server infrastructure? (Choose 2 answers)",
    options: [
      {
        id: "a",
        text: "Configure ELB with TCP listeners on TCP/4d3. And place the Web servers behind it.",
      },
      {
        id: "b",
        text: "Configure your Web servers with EIPS Place the Web servers in a Route 53 Record Set and configure health checks against all Web servers.",
      },
      {
        id: "c",
        text: "Configure ELB with HTTPS listeners, and place the Web servers behind it.",
      },
      {
        id: "d",
        text: "Configure your web servers as the origins for a CloudFront distribution. Use custom SSL certificates on your CloudFront distribution.",
      },
    ],
    correctOptionId: "a,b",
  },

  {
    id: "q366",
    prompt:
      "Which of the following are use cases for Amazon DynamoDB? (Choose 3 answers)",
    options: [
      { id: "a", text: "Storing BLOB data." },
      { id: "b", text: "Managing web sessions." },
      { id: "c", text: "Storing JSON documents." },
      { id: "d", text: "Storing metadata for Amazon S3 objects." },
      { id: "e", text: "Running relational joins and complex updates." },
      { id: "f", text: "Storing large amounts of infrequently accessed data." },
    ],
    correctOptionId: "b,c,d",
  },

  {
    id: "q367",
    prompt:
      "You have been asked to set up a database in AWS that will require frequent and granular updates. You know that you will require a reasonable amount of storage space but are not sure of the best option. What is the recommended storage option when you run a database on an instance with the above criteria?",
    options: [
      { id: "a", text: "Amazon S3." },
      { id: "b", text: "Amazon EBS." },
      { id: "c", text: "AWS Storage Gateway." },
      { id: "d", text: "Amazon Glacier." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q368",
    prompt:
      "An application hosted at the EC2 instance receives an HTTP request from ELB. The same request has an X-Forwarded-For header, which has three IP addresses. Which system's IP will be a part of this header?",
    options: [
      { id: "a", text: "Previous Request IP address." },
      { id: "b", text: "Client IP address." },
      { id: "c", text: "All of the answers listed here." },
      { id: "d", text: "Load Balancer IP address." },
    ],
    correctOptionId: "c",
  },

  {
    id: "q369",
    prompt:
      "An organization has developed a mobile application which allows end users to capture a photo on their mobile device, and store it inside an application. The application internally uploads the data to AWS S3. The organization wants each user to be able to directly upload data to S3 using their Google ID. How will the mobile app allow this?",
    options: [
      {
        id: "a",
        text: "Use the AWS Web identity federation for mobile applications, and use it to generate temporary security credentials for each user.",
      },
      {
        id: "b",
        text: "It is not possible to connect to AWS S3 with a Google I",
      },
      {
        id: "c",
        text: "Create an IAM user every time a user registers with their Google ID and use IAM to upload files to S3.",
      },
      {
        id: "d",
        text: "Create a bucket policy with a condition which allows everyone to upload if the login ID has a Google part to it.",
      },
    ],
    correctOptionId: "a",
  },

  {
    id: "q370",
    prompt: "You must increase storage size in increments of at least [...].",
    options: [
      { id: "a", text: "40." },
      { id: "b", text: "20." },
      { id: "c", text: "50." },
      { id: "d", text: "10." },
    ],
    correctOptionId: "d",
  },

  {
    id: "q371",
    prompt:
      "You need to set up a security certificate for a client's e-commerce website as it will use the HTTPS protocol. Which of the below AWS services do you need to access to manage your SSL server certificate?",
    options: [
      { id: "a", text: "AWS Directory Service." },
      { id: "b", text: "AWS Identity & Access Management." },
      { id: "c", text: "AWS CloudFormation." },
      { id: "d", text: "Amazon Route 53." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q372",
    prompt:
      "After setting up a Virtual Private Cloud (VPC) network, a more experienced cloud engineer suggests that to achieve low network latency and high network throughput you should look into setting up a placement group. You know nothing about this, but begin to do some research about it and are especially curious about its limitations. Which of the below statements is wrong in describing the limitations of a placement group?",
    options: [
      {
        id: "a",
        text: "Although launching multiple instance types into a placement group is possible, this reduces the likelihood that the required capacity will be available for your launch to succeed.",
      },
      {
        id: "b",
        text: "A placement group can span multiple Availability Zones.",
      },
      {
        id: "c",
        text: "You can't move an existing instance into a placement group.",
      },
      { id: "d", text: "A placement group can span peered VPCs." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q373",
    prompt:
      "True or False: When you perform a restore operation to a point in time or from a DB Snapshot, a new DB Instance is created with a new endpoint.",
    options: [
      { id: "a", text: "True." },
      { id: "b", text: "False." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q374",
    prompt: "What is the Reduced Redundancy option in Amazon S3?",
    options: [
      { id: "a", text: "Less redundancy for a lower cost." },
      { id: "b", text: "It doesn't exist in Amazon S3, but in Amazon EBS." },
      {
        id: "c",
        text: "It allows you to destroy any copy of your files outside a specific jurisdiction.",
      },
      { id: "d", text: "It doesn't exist at all." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q375",
    prompt:
      "You are setting up your first Amazon Virtual Private Cloud (Amazon VPC) so you decide to use the VPC wizard in the AWS console to help make it easier for you. Which of the following statements is correct regarding instances that you launch into a default subnet via the VPC wizard?",
    options: [
      {
        id: "a",
        text: "Instances that you launch into a default subnet receive a public IP address and 10 private IP addresses.",
      },
      {
        id: "b",
        text: "Instances that you launch into a default subnet receive both a public IP address and a private IP address.",
      },
      {
        id: "c",
        text: "Instances that you launch into a default subnet don't receive any ip addresses and you need to define them manually.",
      },
      {
        id: "d",
        text: "Instances that you launch into a default subnet receive a public IP address and 5 private IP addresses.",
      },
    ],
    correctOptionId: "b",
  },

  {
    id: "q376",
    prompt:
      "For which of the following use cases are Simple Workflow Service (SWF) and Amazon EC2 an appropriate solution? (Choose 2 answers)",
    options: [
      {
        id: "a",
        text: "Using as an endpoint to collect thousands of data points per hour from a distributed fleet of sensors.",
      },
      {
        id: "b",
        text: "Managing a multi-step and multi-decision checkout process of an e-commerce website.",
      },
      {
        id: "c",
        text: "Orchestrating the execution of distributed and auditable business processes.",
      },
      {
        id: "d",
        text: "Using as an SNS (Simple Notification Service) endpoint to trigger execution of video transcoding jobs.",
      },
      {
        id: "e",
        text: "Using as a distributed session store for your web application.",
      },
    ],
    correctOptionId: "b,c",
  },

  {
    id: "q377",
    prompt:
      "Which of the following instance types are available as Amazon EBS-backed only? (Choose 2 answers)",
    options: [
      { id: "a", text: "General purpose T2." },
      { id: "b", text: "General purpose M3." },
      { id: "c", text: "Compute-optimized C4." },
      { id: "d", text: "Compute-optimized C3." },
      { id: "e", text: "Storage-optimized 12." },
    ],
    correctOptionId: "a,d",
  },

  {
    id: "q378",
    prompt:
      "True or False: Without IAM, you cannot control the tasks a particular user or system can do and what AWS resources they might use.",
    options: [
      { id: "a", text: "True." },
      { id: "b", text: "False." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q379",
    prompt: "What does Amazon ELB stand for?",
    options: [
      { id: "a", text: "Elastic Linux Box." },
      { id: "b", text: "Encrypted Linux Box." },
      { id: "c", text: "Encrypted Load Balancing." },
      { id: "d", text: "Elastic Load Balancing." },
    ],
    correctOptionId: "d",
  },

  {
    id: "q380",
    prompt:
      "A read only news reporting site with a combined web and application tier and a database tier that receives large and unpredictable traffic demands must be able to respond to these traffic fluctuations automatically. What AWS services should be used meet these requirements?",
    options: [
      {
        id: "a",
        text: "Stateless instances for the web and application tier synchronized using Elasticache Memcached in an autoscaimg group monitored with CloudWatch. And RDSwith read replicas.",
      },
      {
        id: "b",
        text: "Stateful instances for the web and application tier in an autoscaling group monitored with CloudWatch and RDS with read replicas.",
      },
      {
        id: "c",
        text: "Stateful instances for the web and application tier in an autoscaling group monitored with CloudWatch and multi-AZ RDS.",
      },
      {
        id: "d",
        text: "Stateless instances for the web and application tier synchronized using ElastiCache Memcached in an autoscaling group monitored with CloudWatch and multi-AZ RDS.",
      },
    ],
    correctOptionId: "a",
  },

  {
    id: "q381",
    prompt:
      "In Amazon AWS, which of the following statements is true of key pairs?",
    options: [
      { id: "a", text: "Key pairs are used only for Amazon SDKs." },
      {
        id: "b",
        text: "Key pairs are used only for Amazon EC2 and Amazon CloudFront.",
      },
      {
        id: "c",
        text: "Key pairs are used only for Elastic Load Balancing and AWS IA.",
      },
      { id: "d", text: "Key pairs are used for all Amazon services." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q382",
    prompt: "What does Amazon ElastiCache provide?",
    options: [
      {
        id: "a",
        text: "A service by this name doesn't exist. Perhaps you mean Amazon CloudCache.",
      },
      { id: "b", text: "A virtual server with a huge amount of memory." },
      { id: "c", text: "A managed In-memory cache service." },
      {
        id: "d",
        text: "An Amazon EC2 instance with the Memcached software already pre-installed.",
      },
    ],
    correctOptionId: "c",
  },

  {
    id: "q383",
    prompt: "What are the two permission types used by AWS?",
    options: [
      { id: "a", text: "Resource-based and Product-based." },
      { id: "b", text: "Product-based and Service-based." },
      { id: "c", text: "Service-based." },
      { id: "d", text: "User-based and Resource-based." },
    ],
    correctOptionId: "d",
  },

  {
    id: "q384",
    prompt:
      "In AWS CloudHSM, in addition to the AWS recommendation that you use two or more HSM appliances in a high-availability configuration to prevent the loss of keys and data, you can also perform a remote backup/restore of a Luna SA partition if you have purchased a:",
    options: [
      { id: "a", text: "Luna Restore HS." },
      { id: "b", text: "Luna Backup HS." },
      { id: "c", text: "Luna HS." },
      { id: "d", text: "Luna SA HS." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q385",
    prompt:
      "An organization has a statutory requirement to protect the data at rest for the S3 objects. Which of the below mentioned options need not be enabled by the organization to achieve data security?",
    options: [
      { id: "a", text: "MFA delete for S3 objects." },
      { id: "b", text: "Client side encryption." },
      { id: "c", text: "Bucket versioning." },
      { id: "d", text: "Data replication." },
    ],
    correctOptionId: "d",
  },

  {
    id: "q386",
    prompt:
      "Your company is in the process of developing a next generation pet collar that collects biometric information to assist families with promoting healthy lifestyles for their pets Each collar will push 30kb of biometric data in JSON format every 2 seconds to a collection platform that will process and analyze the data providing health trending information back to the pet owners and veterinarians via a web portal Management has tasked you to architect the collection platform ensuring the following requirements are met. Provide the ability for real-time analytics of the inbound biometric data. Ensure processing of the biometric data is highly durable. Elastic and parallel. The results of the analytic processing should be persisted for data mining. Which architecture outlined below win meet the initial requirements for the collection platform?",
    options: [
      {
        id: "a",
        text: "Utilize S3 to collect the inbound sensor data analyze the data from S3 with a daily scheduled Data Pipeline and save the results to a Redshift Cluster.",
      },
      {
        id: "b",
        text: "Utilize Amazon Kinesis to collect the inbound sensor data, analyze the data with Kinesis clients and save the results to a Red shift cluster using EMR.",
      },
      {
        id: "c",
        text: "Utilize SQS to collect the inbound sensor data analyze the data from SQS with Amazon Kinesis and save the results to a Microsoft SQL Server RDS instance.",
      },
      {
        id: "d",
        text: "Utilize EMR to collect the inbound sensor data, analyze the data from EUR with Amazon Kinesis and save me results to Dynamo DB.",
      },
    ],
    correctOptionId: "b",
  },

  {
    id: "q387",
    prompt:
      "Which of the following approaches provides the lowest cost for Amazon Elastic Block Store snapshots while giving you the ability to fully restore data?",
    options: [
      {
        id: "a",
        text: "Maintain two snapshots: the original snapshot and the latest incremental snapshot.",
      },
      {
        id: "b",
        text: "Maintain a volume snapshot; subsequent snapshots will overwrite one another",
      },
      {
        id: "c",
        text: "Maintain a single snapshot the latest snapshot is both Incremental and complete.",
      },
      {
        id: "d",
        text: "Maintain the most current snapshot, archive the original and incremental to Amazon Glacier.",
      },
    ],
    correctOptionId: "a",
  },

  {
    id: "q388",
    prompt:
      "You have a video transcoding application running on Amazon EC2. Each instance pol ls a queue to find out which video should be transcoded, and then runs a transcoding process. If this process is interrupted, the video will be transcoded by another instance based on the queuing system. You have a large backlog of videos which need to be transcoded and would like to reduce this backlog by adding more instances. You will need these instances only until the backlog is reduced. Which type of Amazon EC2 instances should you use to reduce the backlog in the most cost efficient way?",
    options: [
      { id: "a", text: "Reserved instances." },
      { id: "b", text: "Spot instances." },
      { id: "c", text: "Dedicated instances." },
      { id: "d", text: "On-demand instances." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q389",
    prompt: "What does the AWS Storage Gateway provide?",
    options: [
      {
        id: "a",
        text: "It allows to integrate on-premises IT environments with Cloud Storage.",
      },
      { id: "b", text: "A direct encrypted connection to Amazon S3." },
      {
        id: "c",
        text: "It's a backup solution that provides an on-premises Cloud storage.",
      },
      {
        id: "d",
        text: "It provides an encrypted SSL endpoint for backups in the Cloud.",
      },
    ],
    correctOptionId: "a",
  },

  {
    id: "q390",
    prompt:
      "You have recently joined a startup company building sensors to measure street noise and air quality in urban areas. The company has been running a pilot deployment of around 100 sensors for 3 months each sensor uploads 1KB of sensor data every minute to a backend hosted on AWS. During the pilot, you measured a peak or 10 IOPS on the database, and you stored an average of 3GB of sensor data per month in the database. The current deployment consists of a load-balanced auto scaled Ingestion layer using EC2 instances and a PostgreSQL RDS database with 500GB standard storage. The pilot is considered a success and your CEO has managed to get the attention or some potential investors. The business plan requires a deployment of at least lOOK sensors which needs to be supported by the backend. You also need to store sensor data for at least two years to be able to compare year over year Improvements. To secure funding, you have to make sure that the platform meets these requirements and leaves room for further scaling. Which setup win meet the requirements?",
    options: [
      {
        id: "a",
        text: "Add an SQS queue to the ingestion layer to buffer writes to the RDS instance.",
      },
      {
        id: "b",
        text: "Ingest data into a DynamoDB table and move old data to a Redshift cluster.",
      },
      {
        id: "c",
        text: "Replace the RDS instance with a 6 node Redshift cluster with 96TB of storage.",
      },
      {
        id: "d",
        text: "Keep the current architecture but upgrade RDS storage to 3TB and lOK provisioned IOPS.",
      },
    ],
    correctOptionId: "c",
  },

  {
    id: "q391",
    prompt:
      "After a major security breach your manager has requested a report of all users and their credentials in AWS. You discover that in IAM you can generate and download a credential report that lists all users in your account and the status of their various credentials, including passwords, access keys, MFA devices, and signing certificates. Which following statement is incorrect in regards to the use of credential reports?",
    options: [
      { id: "a", text: "Credential reports are downloaded XML files." },
      {
        id: "b",
        text: "You can get a credential report using the AWS Management Console, the AWS CLI, or the IAM API.",
      },
      {
        id: "c",
        text: "You can use the report to audit the effects of credential lifecycle requirements, such as password rotation.",
      },
      {
        id: "d",
        text: "You can generate a credential report as often as once every four hours.",
      },
    ],
    correctOptionId: "a",
  },

  {
    id: "q392",
    prompt:
      "What is the maximum response time for a Business level Premium Support case?",
    options: [
      { id: "a", text: "30 minutes." },
      { id: "b", text: "1 hour." },
      { id: "c", text: "12 hours." },
      { id: "d", text: "10 minutes." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q393",
    prompt:
      "Per the AWS Acceptable Use Policy, penetration testing of EC2 instances",
    options: [
      {
        id: "a",
        text: "May be performed by AWS, and will be performed by AWS upon customer request.",
      },
      {
        id: "b",
        text: "May be performed by AWS, and is periodically performed by AWS.",
      },
      { id: "c", text: "Are expressly prohibited under all circumstances." },
      {
        id: "d",
        text: "May be performed by the customer on their own instances with prior authorization from AWS.",
      },
      {
        id: "e",
        text: "May be performed by the customer on their own instances, only if performed from EC2 instances.",
      },
    ],
    correctOptionId: "b",
  },

  {
    id: "q394",
    prompt: "Which of the following features are provided by Amazon EC2?",
    options: [
      {
        id: "a",
        text: "Exadata Database Machine, Optimized Storage Management, Flashback Technology, and Data Warehousing.",
      },
      {
        id: "b",
        text: "Instances, Amazon Machine Images (AMIs), Key Pairs, Amazon EBS Volumes, Firewall, Elastic IP address, Tags, and Virtual Private Clouds (VPCs).",
      },
      {
        id: "c",
        text: "Real Application Clusters (RAC), Elasticache Machine Images (EMIs), Data Warehousing, Flashback Technology, Dynamic IP address.",
      },
      {
        id: "d",
        text: "Exadata Database Machine, Real Application Clusters (RAC), Data Guard, Table and Index Partitioning, and Data Pump Compression.",
      },
    ],
    correctOptionId: "b",
  },

  {
    id: "q395",
    prompt:
      "True or False: If you add a tag that has the same key as an existing tag on a DB Instance, the new value overwrites the old value.",
    options: [
      { id: "a", text: "True." },
      { id: "b", text: "False." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q396",
    prompt:
      "You decide that you need to create a number of Auto Scaling groups to try and save some money as you have noticed that at certain times most of your EC2 instances are not being used. By default, what is the maximum number of Auto Scaling groups that AWS will allow you to create?",
    options: [
      { id: "a", text: "12." },
      { id: "b", text: "Unlimited." },
      { id: "c", text: "20." },
      { id: "d", text: "2." },
    ],
    correctOptionId: "c",
  },

  {
    id: "q397",
    prompt:
      "After moving an E-Commerce website for a client from a dedicated server to AWS you have also set up auto scaling to perform health checks on the instances in your group and replace instances that fail these checks. Your client has come to you with his own health check system that he wants you to use as it has proved to be very useful prior to his site running on AWS. What do you think would be an appropriate response to this given all that you know about auto scaling?",
    options: [
      {
        id: "a",
        text: "It is not possible to implement your own health check system. You need to use AWSs health check system.",
      },
      {
        id: "b",
        text: "It is not possible to implement your own health check system due to compatibility issues.",
      },
      {
        id: "c",
        text: "It is possible to implement your own health check system and then send the instance's health information directly from your system to Cloud Watch.",
      },
      {
        id: "d",
        text: "It is possible to implement your own health check system and then send the instance's health information directly from your system to Cloud Watch but only in the US East (Virginia) region.",
      },
    ],
    correctOptionId: "c",
  },

  {
    id: "q398",
    prompt:
      "You've been brought in as solutions architect to assist an enterprise customer with their migration of an e-commerce platform to Amazon Virtual Private Cloud (VPC) The previous architect has already deployed a 3-tier VPC, The configuration is as follows. VPC: vpc-2f8bc447. IGW: igw-2d8bc445. NACL: ad-208bc448. 5ubnets and Route Tables: Web servers: subnet-258bc44d. Application servers: subnet-248bc44c. Database servers: subnet-9189c6f9. Route Tables: rrb-218bc449, rtb-238bc44b. Associations: subnet-258bc44d: rtb-218bc449, subnet-248bc44c: rtb-238bc44b, subnet-9189c6f9: rtb-238bc44b. You are now ready to begin deploying EC2 instances into the VPC Web servers must have direct access to the internet Application and database servers cannot have direct access to the internet. Which configuration below will allow you the ability to remotely administer your application and database servers, as well as allow these servers to retrieve updates from the Internet?",
    options: [
      {
        id: "a",
        text: "Create a bastion and NAT instance in subnet-258bc44d, and add a route from rtb- 238bc44b to the NAT instance.",
      },
      {
        id: "b",
        text: "Add a route from rtb-238bc44b to igw-2d8bc445 and add a bastion and NAT instance within subnet-248bc44c.",
      },
      {
        id: "c",
        text: "Create a bastion and NAT instance in subnet-248bc44c, and add a route from rtb- 238bc44b to subnet-258bc44d.",
      },
      {
        id: "d",
        text: "Create a bastion and NAT instance in subnet-258bc44d, add a route from rtb-238bc44b to lgw- 2d8bc445, and a new NACL that allows access between subnet-258bc44d and subnet -248bc44c.",
      },
    ],
    correctOptionId: "a",
  },

  {
    id: "q399",
    prompt:
      "After deciding that EMR will be useful in analysing vast amounts of data for a gaming website that you are architecting you have just deployed an Amazon EMR Cluster and wish to monitor the cluster performance. Which of the following tools cannot be used to monitor the cluster performance?",
    options: [
      { id: "a", text: "Kinesis." },
      { id: "b", text: "Ganglia." },
      { id: "c", text: "CloudWatch Metrics." },
      { id: "d", text: "Hadoop Web Interfaces." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q400",
    prompt:
      "A/An [...] is the concept of allowing (or disallowing) an entity such as a user, group, or role some type of access to one or more resources.",
    options: [
      { id: "a", text: "user." },
      { id: "b", text: "AWS Account." },
      { id: "c", text: "resource." },
      { id: "d", text: "permission." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q401",
    prompt:
      "You are running a successful multitier web application on AWS and your marketing department has asked you to add a reporting tier to the application. The reporting tier will aggregate and publish status reports every 30 minutes from user-generated information that is being stored in your web application s database. You are currently running a Multi-AZ RDS MySQL instance for the database tier. You also have implemented Elasticache as a database caching layer between the application tier and database tier. Please select the answer that will allow you to successful ly implement the reporting tier with as little impact as possible to your database.",
    options: [
      {
        id: "a",
        text: "Continually send transaction logs from your master database to an S3 bucket and generate the reports off the S3 bucket using S3 byte range requests.",
      },
      {
        id: "b",
        text: "Generate the reports by querying the synchronously replicated standby RDS MySQL instance maintained through Multi-AZ.",
      },
      {
        id: "c",
        text: "Launch a RDS Read Replica connected to your Multi-AZ master database and generate reports by querying the Read Replica.",
      },
      {
        id: "d",
        text: "Generate the reports by querying the ElastiCache database caching tier.",
      },
    ],
    correctOptionId: "c",
  },

  {
    id: "q402",
    prompt:
      "Can I delete a snapshot of the root device of an EBS volume used by a registered AMI?",
    options: [
      { id: "a", text: "Only via API." },
      { id: "b", text: "Only via Console." },
      { id: "c", text: "Yes." },
      { id: "d", text: "No." },
    ],
    correctOptionId: "c",
  },

  {
    id: "q403",
    prompt: "MySQL installations default to port [...].",
    options: [
      { id: "a", text: "3306." },
      { id: "b", text: "443." },
      { id: "c", text: "80." },
      { id: "d", text: "1158." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q404",
    prompt:
      "In the 'Detailed ' monitoring data available for your Amazon EBS volumes, Provisioned IOPS volumes automatically send [...] minute metrics to Amazon CloudWatch.",
    options: [
      { id: "a", text: "5." },
      { id: "b", text: "2." },
      { id: "c", text: "1." },
      { id: "d", text: "3." },
    ],
    correctOptionId: "c",
  },

  {
    id: "q405",
    prompt:
      "A user has deployed an application on his private cloud. The user is using his own monitoring tool. He wants to configure it so that whenever there is an error, the monitoring tool will notify him via SMS. Which of the below mentioned AWS services will help in this scenario?",
    options: [
      { id: "a", text: "AWS SES." },
      { id: "b", text: "AWS SNS." },
      {
        id: "c",
        text: "None because the user infrastructure is in the private cloud.",
      },
      { id: "d", text: "AWS SMS." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q406",
    prompt: "What does Amazon Route 53 provide?",
    options: [
      { id: "a", text: "A global Content Delivery Network." },
      { id: "b", text: "None of these." },
      { id: "c", text: "A scalable Domain Name System." },
      { id: "d", text: "An SSH endpoint for Amazon EC2." },
    ],
    correctOptionId: "c",
  },

  {
    id: "q407",
    prompt:
      "The AWS CloudHSM service defines a resource known as a high-availability (HA) [...], which is a virtual partition that represents a group of partitions, typically distributed between several physical HSMs for high-availability.",
    options: [
      { id: "a", text: "proxy group." },
      { id: "b", text: "partition group." },
      { id: "c", text: "functional group." },
      { id: "d", text: "relational group." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q408",
    prompt: "In Amazon EC2, partial instance-hours are billed [...].",
    options: [
      { id: "a", text: "per second used in the hour." },
      { id: "b", text: "per minute used." },
      { id: "c", text: "by combining partial segments into full hours." },
      { id: "d", text: "as full hours." },
    ],
    correctOptionId: "d",
  },

  {
    id: "q409",
    prompt:
      "In Amazon EC2, what is the limit of Reserved Instances per Availability Zone each month?",
    options: [
      { id: "a", text: "5." },
      { id: "b", text: "20." },
      { id: "c", text: "50." },
      { id: "d", text: "10." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q410",
    prompt:
      "True or False: When using IAM to control access to your RDS resources, the key names that can be used are case sensitive. For example, aws: CurrentTime is NOT equivalent to AWS: currenttime.",
    options: [
      { id: "a", text: "True." },
      { id: "b", text: "False." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q411",
    prompt:
      "You need to create a JSON-formatted text file for AWS CloudFormation. This is your first template and the only thing you know is that the templates include several major sections but there is only one that is required for it to work. What is the only section required?",
    options: [
      { id: "a", text: "Mappings." },
      { id: "b", text: "Outputs." },
      { id: "c", text: "Resources." },
      { id: "d", text: "Conditions." },
    ],
    correctOptionId: "c",
  },

  {
    id: "q412",
    prompt:
      "A user wants to use an EBS-backed Amazon EC2 instance for a temporary job. Based on the input data, the job is most likely to finish within a week. Which of the following steps should be followed to terminate the instance automatically once the job is finished?",
    options: [
      {
        id: "a",
        text: "Configure the EC2 instance with a stop instance to terminate it.",
      },
      {
        id: "b",
        text: "Configure the EC2 instance with ELB to terminate the instance when it remains idle.",
      },
      {
        id: "c",
        text: "Configure the Cloud Watch alarm on the instance that should perform the termination action once the instance is idle.",
      },
      {
        id: "d",
        text: "Configure the Auto Scaling schedule activity that terminates the instance after 7 days.",
      },
    ],
    correctOptionId: "c",
  },

  {
    id: "q413",
    prompt:
      "You are building an automated transcription service in which Amazon EC2 worker instances process an uploaded audio file and generate a text file. You must store both of these files in the same durable storage until the text file is retrieved. You do not know what the storage capacity requirements are. Which storage option is both cost-efficient and scalable?",
    options: [
      { id: "a", text: "Multiple Amazon EBS volume with snapshots." },
      { id: "b", text: "A single Amazon Glacier vault." },
      { id: "c", text: "A single Amazon S3 bucket." },
      { id: "d", text: "Multiple instance stores." },
    ],
    correctOptionId: "c",
  },

  {
    id: "q414",
    prompt:
      "Your company has recently extended its datacenter into a VPC on AVVS to add burst computing capacity as needed Members of your Network Operations Center need to be able to go to the AWSManagement Console and administer Amazon EC2 instances as necessary You don't want to create new IAM users for each NOC member and make those users sign in again to the AWS Management Console Which option below will meet the needs for your NOC members?",
    options: [
      {
        id: "a",
        text: "Use OAuth 2 0 to retrieve temporary AWS security credentials to enable your NOC members to sign in to the AVVS Management Console.",
      },
      {
        id: "b",
        text: "Use web Identity Federation to retrieve AWS temporary security credentials to enable your NOC members to sign in to the AWS Management Console.",
      },
      {
        id: "c",
        text: "Use your on-premises SAML 2.0-compliant identity provider (IOP) to grant the NOC members federated access to the AWS Management Console via the AWS sing le sign-on (550) endpoint.",
      },
      {
        id: "d",
        text: "Use your on-premises SAML2.0-compliam identity provider (IOP) to retrieve temporary security credentials to enable NOC members to sign in to the AWS Management Console.",
      },
    ],
    correctOptionId: "d",
  },

  {
    id: "q415",
    prompt:
      "You have just set up your first Elastic Load Balancer (ELB) but it does not seem to be configured properly. You discover that before you start using ELB, you have to configure the listeners for your load balancer. Which protocols does ELB use to support the load balancing of applications?",
    options: [
      { id: "a", text: "HTTP and HTTPS." },
      { id: "b", text: "HTTP, HTTPS, TCP, SSL and SSH." },
      { id: "c", text: "HTTP, HTTPS, TCP, and SSL." },
      { id: "d", text: "HTTP, HTTPS, TCP, SSL and SFTP." },
    ],
    correctOptionId: "c",
  },

  {
    id: "q416",
    prompt:
      "A t2.medium EC2 instance type must be launched with what type of Amazon Machine Image (AMI)?",
    options: [
      { id: "a", text: "An Instance store Hardware Virtual Machine AMI." },
      { id: "b", text: "An Instance store Paravirtual AMI." },
      { id: "c", text: "An Amazon EBS-backed Hardware Virtual Machine AMI." },
      { id: "d", text: "An Amazon EBS-backed Paravirtual AMI." },
    ],
    correctOptionId: "c",
  },

  {
    id: "q417",
    prompt:
      "A user has created a subnet in VPC and launched an EC2 instance within it. The user has not selected the option to assign the IP address while launching the instance. The user has 3 elastic IPs and is trying to assign one of the Elastic IPs to the VPC instance from the console. The console does not show any instance in the IP assignment screen. What is a possible reason that the instance is unavailable in the assigned IP console?",
    options: [
      {
        id: "a",
        text: "The IP address may be attached to one of the instances.",
      },
      {
        id: "b",
        text: "The IP address belongs to a different zone than the subnet zone.",
      },
      { id: "c", text: "The user has not created an internet gateway." },
      {
        id: "d",
        text: "The IP addresses belong to EC2 Classic; so they cannot be assigned to VPC.",
      },
    ],
    correctOptionId: "d",
  },

  {
    id: "q418",
    prompt: "Will I be alerted when automatic fail over occurs?",
    options: [
      { id: "a", text: "Only if SNS configured." },
      { id: "b", text: "Yes." },
      { id: "c", text: "No." },
      { id: "d", text: "Only if Cloud watch configured." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q419",
    prompt:
      "Amazon EC2 provides a [...]. It is an HTTP or HTTPS request that uses the HTTP verbs GET or POST.",
    options: [
      { id: "a", text: "web database." },
      { id: "b", text: ".NET framework." },
      { id: "c", text: "Query API." },
      { id: "d", text: "C library." },
    ],
    correctOptionId: "c",
  },

  {
    id: "q420",
    prompt:
      "Which of the following requires a custom Cloud Watch metric to monitor?",
    options: [
      { id: "a", text: "Memory Utilization of an EC2 instance." },
      { id: "b", text: "CPU Utilization of an EC2 instance." },
      { id: "c", text: "Disk usage activity of an EC2 instance." },
      { id: "d", text: "Data transfer of an EC2 instance." },
    ],
    correctOptionId: "c",
  },

  {
    id: "q421",
    prompt:
      "An International company has deployed a multi-tier web application that relies on DynamoDB in a single region For regulatory reasons they need disaster recovery capability in a separate region with a Recovery Time Objective of 2 hours and a Recovery Point Objective of 24 hours They should synchronize their data on a regular basis and be able to provision me web application rapidly using CloudFormation. The objective is to minimize changes to the existing web application, control the throughput of DynamoDB used for the synchronization of data and synchronize only the modified elements. Which design would you choose to meet these requirements?",
    options: [
      {
        id: "a",
        text: "Use AWS data Pipeline to schedule a DynamoDB cross region copy once a day. create a Last updated' attribute in your DynamoDB table that would represent the timestamp of the last update and use it as a filter.",
      },
      {
        id: "b",
        text: "Use EMR and write a custom script to retrieve data from DynamoDB in the current region using a SCAN operation and push it to Dynamo DB in the second region.",
      },
      {
        id: "c",
        text: "Use AWS data Pipeline to schedule an export of the DynamoDB table to S3 in the current region once a day then schedule another task immediately after it that will import data from S3 to DynamoDB in the other region.",
      },
      {
        id: "d",
        text: "Send also each Ante into an SQS queue in me second region; use an auto-scaling group behind the SQS queue to replay the write in the second region.",
      },
    ],
    correctOptionId: "a",
  },

  {
    id: "q422",
    prompt:
      "An Elastic IP address (EIP) is a static IP address designed for dynamic cloud computing. With an EIP, you can mask the failure of an instance or software by rapidly remapping the address to another instance in your account. Your EIP is associated with your AWS account, not a particular EC2 instance, and it remains associated with your account until you choose to explicitly release it. By default how many EIPs is each AWS account limited to on a per region basis?",
    options: [
      { id: "a", text: "1." },
      { id: "b", text: "5." },
      { id: "c", text: "Unlimited." },
      { id: "d", text: "10." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q423",
    prompt:
      "Which Amazon Storage behaves like raw, unformatted, external block devices that you can attach to your instances?",
    options: [
      { id: "a", text: "None of these." },
      { id: "b", text: "Amazon Instance Storage" },
      { id: "c", text: "Amazon EBS" },
      { id: "d", text: "All of these." },
    ],
    correctOptionId: "c",
  },

  {
    id: "q424",
    prompt:
      "You currently operate a web application in the AWS US-East region The application runs on an autoscaled layer of EC2 instances and an RDS Multi-AZ database Your IT security compliance officer has tasked you to develop a reliable and durable logging solution to track changes made to your EC2.1AM And RDS resources. The solution must ensure the integrity and confidentiality of your log data. Which of these solutions would you recommend?",
    options: [
      {
        id: "a",
        text: "Create a new CloudTrail trail with one new S3 bucket to store the logs and with the global services option selected Use IAM roles S3 bucket policies and Multi Factor Authentication (MFA) Delete on the S3 bucket that stores your logs.",
      },
      {
        id: "b",
        text: "Create a new CloudTrail with one new S3 bucket to store the logs Configure SNS to send log file delivery notifications to your management system Use IAM roles and S3 bucket policies on the S3 bucket mat stores your logs.",
      },
      {
        id: "c",
        text: "Create a new CloudTrail trail with an existing S3 bucket to store the logs and with the global services option selected Use S3 ACLs and Multi Factor Authentication (MFA) Delete on the S3 bucket that stores your logs.",
      },
      {
        id: "d",
        text: "Create three new CloudTrail trails with three new S3 buckets to store the logs one for the AWS Management console, one for AWS SDKs and one for command line tools Use IAM roles and S3 bucket policies on the S3 buckets that store your logs.",
      },
    ],
    correctOptionId: "a",
  },

  {
    id: "q425",
    prompt: "Does DynamoDB support in-place atomic updates?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
      { id: "c", text: "It does support in-place non-atomic updates." },
      { id: "d", text: "It is not defined." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q426",
    prompt: "Which of the following is true of Amazon EC2 security group?",
    options: [
      { id: "a", text: "You can modify the outbound rules for EC2-Classic." },
      {
        id: "b",
        text: "You can modify the rules for a security group only if the security group controls the traffic for just one instance.",
      },
      {
        id: "c",
        text: "You can modify the rules for a security group only when a new instance is created.",
      },
      {
        id: "d",
        text: "You can modify the rules for a security group at any time.",
      },
    ],
    correctOptionId: "d",
  },

  {
    id: "q427",
    prompt:
      "You need to set up security for your VPC and you know that Amazon VPC provides two features that you can use to increase security for your VPC: security groups and network access control lists (ACLs). You have already looked into security groups and you are now trying to understand ACLs. Which statement below is incorrect in relation to ACLs?",
    options: [
      { id: "a", text: "Supports allow rules and deny rules." },
      {
        id: "b",
        text: "Is stateful: Return traffic is automatically allowed, regardless of any rules.",
      },
      {
        id: "c",
        text: "Processes rules in number order when deciding whether to allow traffic.",
      },
      {
        id: "d",
        text: "Operates at the subnet level (second layer of defense).",
      },
    ],
    correctOptionId: "b",
  },

  {
    id: "q428",
    prompt:
      "A user is trying to launch a similar EC2 instance from an existing instance with the option 'Launch More like this'. The AMI of the selected instance is deleted. What will happen in this case?",
    options: [
      {
        id: "a",
        text: "AWS does not need an AMI for the 'Launch more like this' option.",
      },
      {
        id: "b",
        text: "AWS will launch the instance but will not create a new AMI.",
      },
      { id: "c", text: "AWS will create a new AMI and launch the instance." },
      {
        id: "d",
        text: "AWS will throw an error saying that the AMI is deregistered.",
      },
    ],
    correctOptionId: "d",
  },

  {
    id: "q429",
    prompt:
      "True or False: When you use the AWS Management Console to delete an IAM user, IAM also deletes any signing certificates and any access keys belonging to the user.",
    options: [
      { id: "a", text: "False." },
      { id: "b", text: "This is configurable." },
      { id: "c", text: "True." },
    ],
    correctOptionId: "c",
  },

  {
    id: "q430",
    prompt:
      "You are working with a customer who is using Chef configuration management in their data center. Which service is designed to let the customer leverage existing Chef recipes in AWS?",
    options: [
      { id: "a", text: "Amazon Simple Workflow Service." },
      { id: "b", text: "AWS Elastic Beanstalk." },
      { id: "c", text: "AWS CloudFormation." },
      { id: "d", text: "AWS OpsWorks." },
    ],
    correctOptionId: "d",
  },

  {
    id: "q431",
    prompt:
      "Does Amazon RDS for SQL Server currently support importing data into the msdb database?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q432",
    prompt:
      "How can an EBS volume that is currently attached to an EC2 instance be migrated from one Availability Zone to another?",
    options: [
      {
        id: "a",
        text: "Detach the volume and attach it to another EC2 instance in the other AZ.",
      },
      {
        id: "b",
        text: "Simply create a new volume in the other AZ and specify the original volume as the source.",
      },
      {
        id: "c",
        text: "Create a snapshot of the volume, and create a new volume from the snapshot in the other AZ.",
      },
      {
        id: "d",
        text: "Detach the volume, then use the ec2-migrate-voiume command to move it to another AZ.",
      },
    ],
    correctOptionId: "c",
  },

  {
    id: "q433",
    prompt:
      "Having set up a website to automatically be redirected to a backup website if it fails, you realize that there are different types of failovers that are possible. You need all your resources to be available the majority of the time. Using Amazon Route 53 which configuration would best suit this requirement?",
    options: [
      { id: "a", text: "Active-active failover." },
      { id: "b", text: "None. Route 53 can't failover." },
      { id: "c", text: "Active-passive failover." },
      {
        id: "d",
        text: "Active-active-passive and other mixed configurations.",
      },
    ],
    correctOptionId: "a",
  },

  {
    id: "q434",
    prompt:
      "A client application requires operating system privileges on a relational database server. What is an appropriate configuration for a highly available database architecture?",
    options: [
      { id: "a", text: "A standalone Amazon EC2 instance." },
      { id: "b", text: "Amazon RDS in a Multi-AZ configuration." },
      {
        id: "c",
        text: "Amazon EC2 instances in a replication configuration utilizing a single Availability Zone.",
      },
      {
        id: "d",
        text: "Amazon EC2 instances in a replication configuration utilizing two different Availability Zones.",
      },
    ],
    correctOptionId: "d",
  },

  {
    id: "q435",
    prompt: "Is decreasing the storage size of a DB Instance permitted?",
    options: [
      { id: "a", text: "Depends on the ROMS used." },
      { id: "b", text: "Yes." },
      { id: "c", text: "No." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q436",
    prompt: "Can you encrypt EBS volumes?",
    options: [
      {
        id: "a",
        text: "Yes, you can enable encryption when you create a new EBS volume using the AWS Management Console, API, or CLI.",
      },
      {
        id: "b",
        text: "No, you should use a third-party software to perform raw block-level encryption of an EBS volume.",
      },
      {
        id: "c",
        text: "Yes, but you must use a third-party API for encrypting data before it's loaded on EBS.",
      },
      {
        id: "d",
        text: "Yes, you can encrypt with the special 'ebs_encrypt' command through Amazon APIs.",
      },
    ],
    correctOptionId: "a",
  },

  {
    id: "q437",
    prompt: "You must assign each server to at least [...] security group.",
    options: [
      { id: "a", text: "3." },
      { id: "b", text: "2." },
      { id: "c", text: "4." },
      { id: "d", text: "1." },
    ],
    correctOptionId: "d",
  },

  {
    id: "q438",
    prompt:
      "Is the encryption of connections between my application and my DB Instance using SSL for the MySQL server engines available?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "Only in VPC." },
      { id: "c", text: "Only in certain regions." },
      { id: "d", text: "No." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q439",
    prompt:
      "Your manager has come to you saying that he is very confused about the bills he is receiving from AWS as he is getting different bills for every user and needs you to look into making it more understandable. Which of the following would be the best solution to meet his request?",
    options: [
      { id: "a", text: "AWS Billing Aggregation." },
      { id: "b", text: "Consolidated Billing." },
      { id: "c", text: "Deferred Billing." },
      { id: "d", text: "Aggregated Billing." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q440",
    prompt:
      "Regarding Amazon Route 53, if your application is running on Amazon EC2 instances in two or more Amazon EC2 regions and if you have more than one Amazon EC2 instance in one or more regions, you can use [...] to route traffic to the correct region and then use [...] route traffic to instances within the region, based on probabilities that you specify.",
    options: [
      { id: "a", text: "weighted-based routing; alias resource record sets." },
      {
        id: "b",
        text: "latency-based routing; weighted resource record sets.",
      },
      {
        id: "c",
        text: "weighted-based routing; weighted resource record sets.",
      },
      { id: "d", text: "latency-based routing; alias resource record sets." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q441",
    prompt:
      "If I scale the storage capacity provisioned to my DB Instance by mid of a billing month, how will I be charged?",
    options: [
      {
        id: "a",
        text: "You will be charged for the highest storage capacity you have used.",
      },
      { id: "b", text: "On a proration basis." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q442",
    prompt:
      "When using the following AWS services, which should be implemented in multiple Availability Zones for high availability solutions? (Choose 2 answers)",
    options: [
      { id: "a", text: "Amazon Dynamo DB." },
      { id: "b", text: "Amazon Elastic Compute Cloud (EC2)." },
      { id: "c", text: "Amazon Elastic Load Balancing." },
      { id: "d", text: "Amazon Simple Notification Service (SNS)." },
      { id: "e", text: "Amazon Simple Storage Service (S3)." },
    ],
    correctOptionId: "b,c",
  },

  {
    id: "q443",
    prompt:
      "A customer is hosting their company website on a cluster of web servers that are behind a public facing load balancer. The customer also uses Amazon Route 53 to manage their public DNS. How should the customer configure the DNS zone apex record to point to the load balancer?",
    options: [
      {
        id: "a",
        text: "Create an A record pointing to the IP address of the load balancer.",
      },
      {
        id: "b",
        text: "Create a CNAME record pointing to the load balancer DNS name.",
      },
      {
        id: "c",
        text: "Create a CNAME record aliased to the load balancer DNS name.",
      },
      {
        id: "d",
        text: "Create an A record aliased to the load balancer DNS name.",
      },
    ],
    correctOptionId: "c",
  },

  {
    id: "q444",
    prompt:
      "True or False: REST or Query requests are HTTP or HTTPS requests that use an HTTP verb (such as GET or POST) and a parameter named Action or Operation that specifies the API you are calling.",
    options: [
      { id: "a", text: "True." },
      { id: "b", text: "False." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q445",
    prompt:
      "Which of the following features ensures even distribution of traffic to Amazon EC2 instances in multiple Availability Zones registered with a load balancer?",
    options: [
      { id: "a", text: "Elastic Load Balancing request routing." },
      { id: "b", text: "An Amazon Route 53 weighted routing policy." },
      { id: "c", text: "Elastic Load Balancing cross-zone load balancing." },
      { id: "d", text: "An Amazon Route 53 latency routing policy." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q446",
    prompt: "Groups can't [...].",
    options: [
      { id: "a", text: "be nested more than 3 levels." },
      { id: "b", text: "be nested at all." },
      { id: "c", text: "be nested more than 4 levels." },
      { id: "d", text: "be nested more than 2 levels." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q447",
    prompt:
      "You have been using T2 instances as your CPU requirements have not been that intensive. However you now start to think about larger instance types and start looking at M1 and M3 instances. You are a little confused as to the differences between them as they both seem to have the same ratio of CPU and memory. Which statement below is incorrect as to why you would use one over the other?",
    options: [
      { id: "a", text: "M3 instances are less expensive than M1 instances." },
      {
        id: "b",
        text: "M3 instances are configured with more swap memory than M1 instances.",
      },
      {
        id: "c",
        text: "M3 instances provide better, more consistent performance that M1 instances for most use-cases.",
      },
      {
        id: "d",
        text: "M3 instances also offer SSD-based instance storage that delivers higher I/O performance.",
      },
    ],
    correctOptionId: "b",
  },

  {
    id: "q448",
    prompt:
      "Do the system resources on the Micro instance meet the recommended configuration for Oracle?",
    options: [
      { id: "a", text: "Yes, completely." },
      { id: "b", text: "Yes, but only for certain situations." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q449",
    prompt:
      "Which of the following are true regarding AWS CloudTrail? (Choose 3 answers)",
    options: [
      { id: "a", text: "CloudTrail is enabled globally." },
      { id: "b", text: "CloudTrail is enabled by default." },
      { id: "c", text: "CloudTrail is enabled on a per-region basis." },
      { id: "d", text: "CloudTrail is enabled on a per-service basis." },
      {
        id: "e",
        text: "Logs can be delivered to a single Amazon S3 bucket for aggregation.",
      },
      {
        id: "f",
        text: "CloudTrail is enabled for all available services within a region.",
      },
      {
        id: "g",
        text: "Logs can only be processed and delivered to the region in which they are generated.",
      },
    ],
    correctOptionId: "c,d,e",
  },

  {
    id: "q450",
    prompt:
      "If you're unable to connect via SSH to your EC2 instance, which of the following should you check and possibly correct to restore connectivity?",
    options: [
      {
        id: "a",
        text: "Adjust Security Group to permit egress traffic over TCP port 443 from your IP.",
      },
      {
        id: "b",
        text: "Configure the JAM role to permit changes to security group settings.",
      },
      {
        id: "c",
        text: "Modify the instance security group to allow ingress of ICMP packets from your IP.",
      },
      {
        id: "d",
        text: "Adjust the instance's Security Group to permit ingress traffic over port 22 from your IP.",
      },
      {
        id: "e",
        text: "Apply the most recently released Operating System security patches.",
      },
    ],
    correctOptionId: "d",
  },

  {
    id: "q451",
    prompt:
      "A major finance organisation has engaged your company to set up a large data mining application. Using AWS you decide the best service for this is Amazon Elastic MapReduce (EMR) which you know uses Hadoop. Which of the following statements best describes Hadoop?",
    options: [
      {
        id: "a",
        text: "Hadoop is 3rd Party software which can be installed using AMI.",
      },
      { id: "b", text: "Hadoop is an open source python web framework." },
      { id: "c", text: "Hadoop is an open source Java software framework." },
      { id: "d", text: "Hadoop is an open source javascript framework." },
    ],
    correctOptionId: "c",
  },

  {
    id: "q452",
    prompt:
      "A customer has established an AWS Direct Connect connection to AWS. The link is up and routes are being advertised from the customer's end, however the customer is unable to connect from EC2 instances inside its VPC to servers residing in its datacenter. Which of the following options provide a viable solution to remedy this situation? (Choose 2 answers)",
    options: [
      {
        id: "a",
        text: "Add a route to the route table with an IPsec VPN connection as the target.",
      },
      {
        id: "b",
        text: "Enable route propagation to the virtual pinnate gateway (VGW).",
      },
      {
        id: "c",
        text: "Enable route propagation to the customer gateway (CGW).",
      },
      {
        id: "d",
        text: "Modify the route table of all Instances using the 'route' command.",
      },
      {
        id: "e",
        text: "Modify the Instances VPC subnet route table by adding a route back to the customer's on-premises environment.",
      },
    ],
    correctOptionId: "b,e",
  },

  {
    id: "q453",
    prompt:
      "While creating a network in the VPC, which of the following is true of a NAT device?",
    options: [
      {
        id: "a",
        text: "You have to administer the NAT Gateway Service provided by AW",
      },
      {
        id: "b",
        text: "You can choose to use any of the three kinds of NAT devices offered by AWS for special purposes.",
      },
      {
        id: "c",
        text: "You can use a NAT device to enable instances in a private subnet to connect to the Internet.",
      },
      {
        id: "d",
        text: "You are recommended to use AWS NAT instances over NAT gateways, as the instances provide better availability and bandwidth.",
      },
    ],
    correctOptionId: "b",
  },

  {
    id: "q454",
    prompt:
      "Which of the following statements is NOT true about using Elastic IP Address (EIP) in EC2-Classic and EC2-VPC platforms?",
    options: [
      {
        id: "a",
        text: "In the EC2-VPC platform, the Elastic IP Address (EIP) does not remain associated with the instance when you stop it.",
      },
      {
        id: "b",
        text: "In the EC2-Classic platform, stopping the instance disassociates the Elastic IP Address (EIP) from it.",
      },
      {
        id: "c",
        text: "In the EC2-VPC platform, if you have attached a second network interface to an instance, when you disassociate the Elastic IP Address (EIP) from that instance, a new public IP address is not assigned to the instance automatically; you'll have to associate an EIP with it manually.",
      },
      {
        id: "d",
        text: "In the EC2-Classic platform, if you disassociate an Elastic IP Address (EIP) from the instance, the instance is automatically assigned a new public IP address within a few minutes.",
      },
    ],
    correctOptionId: "a",
  },

  {
    id: "q455",
    prompt:
      "A user has hosted an application on EC2 instances. The EC2 instances are configured with ELB and Auto Scaling. The application server session time out is 2 hours. The user wants to configure connection draining to ensure that all in-flight requests are supported by ELB even though the instance is being deregistered. What time out period should the user specify for connection draining?",
    options: [
      { id: "a", text: "1 hour." },
      { id: "b", text: "30 minutes." },
      { id: "c", text: "5 minutes." },
      { id: "d", text: "2 hours." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q456",
    prompt:
      "What does the following command do with respect to the Amazon EC2 security groups? ec2-create-group CreateSecurityGroup",
    options: [
      {
        id: "a",
        text: "Groups the user created security groups in to a new group for easy access.",
      },
      {
        id: "b",
        text: "Creates a new security group for use with your account.",
      },
      { id: "c", text: "Creates a new group inside the security group." },
      { id: "d", text: "Creates a new rule inside the security group." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q457",
    prompt:
      "You are in the process of moving your friend's WordPress site onto AWS to try and save him some money, and you have told him that he should probably also move his domain name. He asks why he can't leave his domain name where it is and just have his infrastructure on AWS. What would be an incorrect response to his question?",
    options: [
      {
        id: "a",
        text: "Route 53 offers low query latency for your end users.",
      },
      {
        id: "b",
        text: "Route 53 is designed to automatically answer queries from the optimal location depending on network conditions.",
      },
      {
        id: "c",
        text: "The globally distributed nature of AWS's DNS servers helps ensure a consistent ability to route your end users to your application.",
      },
      {
        id: "d",
        text: "Route 53 supports Domain Name System Security Extensions (DNSSEC).",
      },
    ],
    correctOptionId: "d",
  },

  {
    id: "q458",
    prompt:
      "Which of the following are characteristics of a reserved instance? (Choose 3 answers)",
    options: [
      { id: "a", text: "It can be migrated across Availability Zones." },
      { id: "b", text: "It is specific to an Amazon Machine Image (AMI)." },
      {
        id: "c",
        text: "It can be applied to instances launched by Auto Scaling.",
      },
      { id: "d", text: "It is specific to an instance Type." },
      {
        id: "e",
        text: "It can be used to lower Total Cost of Ownership (TCO) of a system.",
      },
    ],
    correctOptionId: "a,d,e",
  },

  {
    id: "q459",
    prompt:
      "A user has defined an AutoScaling termination policy to first delete the instance with the nearest billing hour. AutoScaling has launched 3 instances in the US-East-1A region and 2 instances in the US-East-1B region. One of the instances in the US-East-1B region is running nearest to the billing hour. Which instance will AutoScaling terminate first while executing the termination action?",
    options: [
      { id: "a", text: "Random Instance from US-East-1A." },
      {
        id: "b",
        text: "Instance with the nearest billing hour in US-East-1B.",
      },
      {
        id: "c",
        text: "Instance with the nearest billing hour in US-East-1A.",
      },
      { id: "d", text: "Random instance from US-East-1B." },
    ],
    correctOptionId: "c",
  },

  {
    id: "q460",
    prompt:
      "You have an environment that consists of a public subnet using Amazon VPC and 3 instances that are running in this subnet. These three instances can successfully communicate with other hosts on the Internet. You launch a fourth instance in the same subnet, using the same AMI and security group configuration you used for the others, but find that this instance cannot be accessed from the internet. What should you do to enable Internet access?",
    options: [
      { id: "a", text: "Deploy a NAT instance into the public subnet." },
      { id: "b", text: "Assign an Elastic IP address to the fourth instance." },
      {
        id: "c",
        text: "Configure a publically routable IP Address in the host OS of the fourth instance.",
      },
      { id: "d", text: "Modify the routing table for the public subnet." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q461",
    prompt:
      "What does the 'Server Side Encryption' option on Amazon S3 provide?",
    options: [
      { id: "a", text: "It provides an encrypted virtual disk in the Cloud." },
      {
        id: "b",
        text: "It doesn't exist for Amazon S3, but only for Amazon EC2.",
      },
      {
        id: "c",
        text: "It encrypts the files that you send to Amazon S3, on the server side.",
      },
      {
        id: "d",
        text: "It allows to upload fi les using an SSL endpoint, for a secure transfer.",
      },
    ],
    correctOptionId: "a",
  },

  {
    id: "q462",
    prompt: "What is a placement group?",
    options: [
      {
        id: "a",
        text: "A collection of Auto Scaling groups in the same region.",
      },
      {
        id: "b",
        text: "A feature that enables EC2 instances to interact with each other via high bandwidth, low latency connections.",
      },
      {
        id: "c",
        text: "A collection of authorized CloudFront edge locations for a distribution.",
      },
      {
        id: "d",
        text: "A collection of Elastic Load Balancers in the same Region or Availability Zone.",
      },
    ],
    correctOptionId: "b",
  },

  {
    id: "q463",
    prompt:
      "You are checking the workload on some of your General Purpose (SSD) and Provisioned IOPS (SSD) volumes and it seems that the I/O latency is higher than you require. You should probably check the [...] to make sure that your application is not trying to drive more IOPS than you have provisioned.",
    options: [
      { id: "a", text: "amount of IOPS that are available." },
      { id: "b", text: "acknowledgement from the storage subsystem." },
      { id: "c", text: "average queue length." },
      { id: "d", text: "time it takes for the I/O operation to complete." },
    ],
    correctOptionId: "c",
  },

  {
    id: "q464",
    prompt: "Within the IAM service a GROUP is regarded as a:",
    options: [
      { id: "a", text: "A collection of AWS accounts." },
      {
        id: "b",
        text: "It's the group of EC2 machines that gain t he permissions specified in the GROUP.",
      },
      {
        id: "c",
        text: "There's no GROUP in IAM, but only USERS and RESOURCES.",
      },
      { id: "d", text: "A collection of users." },
    ],
    correctOptionId: "d",
  },

  {
    id: "q465",
    prompt:
      "Doug has created a VPC with CIDR 10.201.0.0/16 in his AWS account. in this VPC he has created a public subnet with CIDR block 10.201.31.0/24. While launching a new EC2 from the console, he is not able to assign the private IP address 10.201.31.6 to this instance. Which is the most likely reason for this issue?",
    options: [
      {
        id: "a",
        text: "Private IP address 10.201.31.6 is blocked via ACLs in Amazon infrastructure as a part of platform security.",
      },
      {
        id: "b",
        text: "Private address IP 10.201.31.6 is currently assigned to another interface.",
      },
      {
        id: "c",
        text: "Private IP address 10.201.31.6 is not part of the associated subnet's IP address range.",
      },
      {
        id: "d",
        text: "Private IP address 10.201.31.6 is reserved by Amazon for IP networking purposes.",
      },
    ],
    correctOptionId: "b",
  },

  {
    id: "q466",
    prompt:
      "A user is planning to make a mobile game which can be played online or offline and will be hosted on EC2. The user wants to ensure that if someone breaks the highest score or they achieve some milestone they can inform all their colleagues through email. Which of the below mentioned AWS services helps achieve this goal?",
    options: [
      { id: "a", text: "AWS Simple Workflow Service." },
      { id: "b", text: "AWS Simple Email Service." },
      { id: "c", text: "Amazon Cognito." },
      { id: "d", text: "AWS Simple Queue Service." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q467",
    prompt: "Is creating a Read Replica of another Read Replica supported?",
    options: [
      { id: "a", text: "Only in VPC." },
      { id: "b", text: "Yes." },
      { id: "c", text: "Only in certain regions." },
      { id: "d", text: "No." },
    ],
    correctOptionId: "d",
  },

  {
    id: "q468",
    prompt:
      "Which of the following is NOT a characteristic of Amazon Elastic Compute Cloud (Amazon EC2)?",
    options: [
      {
        id: "a",
        text: "It can be used to launch as many or as few virtual servers as you need.",
      },
      {
        id: "b",
        text: "It increases the need to forecast traffic by providing dynamic IP addresses for static cloud computing.",
      },
      {
        id: "c",
        text: "It eliminates your need to invest in hardware up front, so you can develop and deploy applications faster.",
      },
      {
        id: "d",
        text: "It offers scalable computing capacity in the Amazon Web Services (AWS) cloud.",
      },
    ],
    correctOptionId: "b",
  },

  {
    id: "q469",
    prompt:
      "A user has launched one EC2 instance in the US East region and one in the US West region. The user has launched an RDS instance in the US East region. How can the user configure access from both the EC2 instances to RDS?",
    options: [
      {
        id: "a",
        text: "It is not possible to access RDS of the US East region from the US West region.",
      },
      {
        id: "b",
        text: "Configure the US West region's security group to allow a request from the US East region's instance and configure the RDS security group's ingress rule for the US East EC2 group.",
      },
      {
        id: "c",
        text: "Configure the security group of the US East region to allow traffic from the US West region's instance and configure the RDS security group's ingress rule for the US East EC2 group.",
      },
      {
        id: "d",
        text: "Configure the security group of both instances in the ingress rule of the RDS security group.",
      },
    ],
    correctOptionId: "c",
  },

  {
    id: "q470",
    prompt:
      "What happens to the 1/0 operations while you take a database snapshot?",
    options: [
      {
        id: "a",
        text: "1/0 operations to the database are suspended for an hour while the backup is in progress.",
      },
      {
        id: "b",
        text: "1/0 operations to the database are sent to a Replica (if available) for a few minutes while the backup is in progress.",
      },
      { id: "c", text: "1/0 operations will be functioning normally." },
      {
        id: "d",
        text: "1/0 operations to the database are suspended for a few minutes while the backup is in progress.",
      },
    ],
    correctOptionId: "d",
  },

  {
    id: "q471",
    prompt:
      "When an EC2 EBS-backed (EBS root) instance is stopped, what happens to the data on any ephemeral store volumes?",
    options: [
      { id: "a", text: "Data is automatically saved in an EBS volume." },
      { id: "b", text: "Data is unavailable until the instance is restarted." },
      {
        id: "c",
        text: "Data will be deleted and will no longer be accessible.",
      },
      { id: "d", text: "Data is automatically saved as an EBS snapshot." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q472",
    prompt:
      "[...] is a durable, block-level storage volume that you can attach to a single, running Amazon EC2 instance.",
    options: [
      { id: "a", text: "Amazon S3." },
      { id: "b", text: "Amazon EBS." },
      { id: "c", text: "None of these." },
      { id: "d", text: "All of these." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q473",
    prompt:
      "A favored client needs you to quickly deploy a database that is a relational database service with minimal administration as he wants to spend the least amount of time administering it. Which database would be the best option?",
    options: [
      { id: "a", text: "Amazon SimpleDB." },
      { id: "b", text: "Your choice of relational AMIs on Amazon EC2 and EB." },
      { id: "c", text: "Amazon RDS." },
      { id: "d", text: "Amazon Redshift." },
    ],
    correctOptionId: "c",
  },

  {
    id: "q474",
    prompt:
      "You have a number of image files to encode. in an Amazon SQS worker queue, you create an Amazon SQS message for each file specifying the command (jpeg-encode) and the location of the file in Amazon S3. Which of the following statements best describes the functionality of Amazon SQS?",
    options: [
      {
        id: "a",
        text: "Amazon SQS is a distributed queuing system that is optimized for horizontal scalability, not for single-threaded sending or receiving speeds.",
      },
      {
        id: "b",
        text: "Amazon SQS is for single-threaded sending or receiving speeds.",
      },
      { id: "c", text: "Amazon SQS is a non-distributed queuing system." },
      {
        id: "d",
        text: "Amazon SQS is a distributed queuing system that is optimized for vertical scalability and for single-threaded sending or receiving speeds.",
      },
    ],
    correctOptionId: "a",
  },

  {
    id: "q475",
    prompt:
      "While creating an Amazon RDS DB, your first task is to set up a DB [...] that controls what IP addresses or EC2 instances have access to your DB Instance.",
    options: [
      { id: "a", text: "Security Pool." },
      { id: "b", text: "Secure Zone." },
      { id: "c", text: "Security Token Pool." },
      { id: "d", text: "Security Group." },
    ],
    correctOptionId: "d",
  },

  {
    id: "q476",
    prompt:
      "After launching an instance that you intend to serve as a NAT (Network Address Translation) device in a public subnet you modify your route tables to have the NAT device be the target of internet bound traffic of your private subnet. When you try and make an outbound connection to the internet from an instance in the private subnet, you are not successful. Which of the following steps could resolve the issue?",
    options: [
      {
        id: "a",
        text: "Disabling the Source/Destination Check attribute on the NAT instance.",
      },
      {
        id: "b",
        text: "Attaching an Elastic IP address to the instance in the private subnet.",
      },
      {
        id: "c",
        text: "Attaching a second Elastic Network Interface (EN I) to the NAT instance, and placing it in the private subnet.",
      },
      {
        id: "d",
        text: "Attaching a second Elastic Network Interface (ENI) to the instance in the private subnet, and placing it in the public subnet.",
      },
    ],
    correctOptionId: "a",
  },

  {
    id: "q477",
    prompt:
      "Which of the following would you use to list your AWS Import/Export jobs?",
    options: [
      { id: "a", text: "Amazon RDS." },
      { id: "b", text: "AWS Import/Export Web Service Tool." },
      { id: "c", text: "Amazon S3 REST API." },
      { id: "d", text: "AWS Elastic Beanstalk." },
    ],
    correctOptionId: "c",
  },

  {
    id: "q478",
    prompt:
      "Company B is launching a new game app for mobile devices. Users will log into the game using their existing social media account to streamline data capture. Company B would like to directly save player data and scoring information from the mobile app to a DynamoDS table named Score Data. When a user saves their game the progress data will be stored to the Game state S3 bucket. What is the best approach for storing data to DynamoDB and S3?",
    options: [
      {
        id: "a",
        text: "Use an EC2 Instance that is launched with an EC2 role providing access to the Score Data DynamoDB table and the GameState S3 bucket that communicates with the mobile app via web services.",
      },
      {
        id: "b",
        text: "Use temporary security credentials that assume a role providing access to the Score Data DynamoDB table and the Game State S3 bucket using web identity federation.",
      },
      {
        id: "c",
        text: "Use Login with Amazon allowing users to sign in with an Amazon account providing the mobile app with access to the Score Data DynamoDB table and the Game State S3 bucket.",
      },
      {
        id: "d",
        text: "Use an IAM user with access credentials assigned a role providing access to the Score Data DynamoDB table and the Game State S3 bucket for distribution with the mobile app.",
      },
    ],
    correctOptionId: "b",
  },

  {
    id: "q479",
    prompt:
      "If your DB instance runs out of storage space or file system resources, its status will change to [...] and your DB Instance will no longer be available.",
    options: [
      { id: "a", text: "storage-overflow." },
      { id: "b", text: "storage-full." },
      { id: "c", text: "storage-exceed." },
      { id: "d", text: "storage-overage." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q480",
    prompt:
      "Your application is using an ELB in front of an Auto Scaling group of web/application servers deployed across two AZs and a Multi-AZ RDS Instance for data persistence. The database CPU is often above 80% usage and 90% of 1/0 operations on the database are reads. To improve performance you recently added a single-node Memcached ElastiCache Cluster to cache frequent DB query results. in the next weeks the overall workload is expected to grow by 30%. Do you need to change anything in the architecture to maintain the high availability or the application with the anticipated additional load? Why?",
    options: [
      {
        id: "a",
        text: "Yes, you should deploy two Memcached ElastiCache Clusters in different AZs because the RDS instance will not be able to handle the load if the cache node fails.",
      },
      {
        id: "b",
        text: "No, if the cache node fails you can always get the same data from the DB without having any availability impact.",
      },
      {
        id: "c",
        text: "No, if the cache node fails the automated ElastiCache node recovery feature will prevent any availability impact.",
      },
      {
        id: "d",
        text: "Yes, you should deploy the Memcached ElastiCache Cluster with two nodes in the same AZ as the RDS DB master instance to handle the load if one cache node fails.",
      },
    ],
    correctOptionId: "a",
  },

  {
    id: "q481",
    prompt: "How many Elastic IP by default in Amazon Account?",
    options: [
      { id: "a", text: "1 Elastic IP." },
      { id: "b", text: "3 Elastic IP." },
      { id: "c", text: "5 Elastic IP." },
      { id: "d", text: "0 Elastic IP." },
    ],
    correctOptionId: "d",
  },

  {
    id: "q482",
    prompt:
      "What would be the best way to retrieve the public IP address of your EC2 instance using the CLI?",
    options: [
      { id: "a", text: "Using tags." },
      { id: "b", text: "Using traceroute." },
      { id: "c", text: "Using ipconfig." },
      { id: "d", text: "Using instance metadata." },
    ],
    correctOptionId: "d",
  },

  {
    id: "q483",
    prompt:
      "A company is building a two-tier web application to serve dynamic transaction-based content. The data tier is leveraging an Online Transactional Processing (OLTP) database. What services should you leverage to enable an elastic and scalable web tier?",
    options: [
      {
        id: "a",
        text: "Elastic Load Balancing, Amazon EC2, and Auto Scaling.",
      },
      {
        id: "b",
        text: "Elastic Load Balancing, Amazon RDS with Multi-AZ, and Amazon S3.",
      },
      { id: "c", text: "Amazon RDS with Multi-AZ and Auto Scaling." },
      { id: "d", text: "Amazon EC2, Amazon DynamoDB, and Amazon S3." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q484",
    prompt:
      "You are designing a connectivity solution between on-premises infrastructure and Amazon VPC. Your server's on-premises will De communicating with your VPC instances. You will De establishing IPSec tunnels over the internet You will be using VPN gateways and terminating the IPsec tunnels on AWS supported customer gateways. Which of the following objectives would you achieve by implementing an IPSec tunnel as outlined above? (Choose 4 answers)",
    options: [
      { id: "a", text: "End-to-end protection of data in transit." },
      { id: "b", text: "End-to-end Identity authentication." },
      { id: "c", text: "Data encryption across the Internet." },
      { id: "d", text: "Protection of data in transit over the Internet." },
      {
        id: "e",
        text: "Peer identity authentication between VPN gateway and customer gateway.",
      },
      { id: "f", text: "Data integrity protection across the Internet." },
    ],
    correctOptionId: "c,d,e,f",
  },

  {
    id: "q485",
    prompt:
      "You have been storing massive amounts of data on Amazon Glacier for the past 2 years and now start to wonder if there are any limitations on this. What is the correct answer to your question?",
    options: [
      {
        id: "a",
        text: "The total volume of data is limited but the number of archives you can store are unlimited.",
      },
      {
        id: "b",
        text: "The total volume of data is unlimited but the number of archives you can store are limited.",
      },
      {
        id: "c",
        text: "The total volume of data and number of archives you can store are unlimited.",
      },
      {
        id: "d",
        text: "The total volume of data is limited and the number of archives you can store are limited.",
      },
    ],
    correctOptionId: "c",
  },

  {
    id: "q486",
    prompt: "How are the EBS snapshots saved on Amazon S3?",
    options: [
      { id: "a", text: "Exponentially." },
      { id: "b", text: "Incrementally." },
      { id: "c", text: "EBS snapshots are not stored in the Amazon S3." },
      { id: "d", text: "Decrementally." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q487",
    prompt:
      "An online gaming site asked you if you can deploy a database that is a fast, highly scalable NoSQL database service in AWS for a new site that he wants to build. Which database should you recommend?",
    options: [
      { id: "a", text: "Amazon DynamoDB." },
      { id: "b", text: "Amazon RDS." },
      { id: "c", text: "Amazon Redshift." },
      { id: "d", text: "Amazon SimpleDB." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q488",
    prompt:
      "You have three Amazon EC2 instances with Elastic IP addresses in the US East (Virginia) region, and you want to distribute requests across all three IPs evenly for users for whom US East (Virginia) is the appropriate region. How many EC2 instances would be sufficient to distribute requests in other regions?",
    options: [
      { id: "a", text: "3." },
      { id: "b", text: "9." },
      { id: "c", text: "2." },
      { id: "d", text: "1." },
    ],
    correctOptionId: "d",
  },

  {
    id: "q489",
    prompt:
      "You are the new IT architect in a company that operates a mobile sleep tracking application. When activated at night, the mobile app is sending collected data points of 1 kilobyte every 5 minutes to your backend. The backend takes care of authenticating the user and writing the data points into an Amazon DynamoDB table. Every morning, you scan the table to extract and aggregate last night's data on a per user basis, and store the results in Amazon S3. Users are notified via Amazon 5M5 mobile push notifications that new data is available, which is parsed and visualized by The mobile app Currently you have around lOOk users who are mostly based out of North America. You have been tasked to optimize the architecture of the backend system to lower cost what would you recommend? (Choose 2 answers)",
    options: [
      {
        id: "a",
        text: "Create a new Amazon DynamoDB able each day and drop the one for the previous day after its data is on Amazon S3.",
      },
      {
        id: "b",
        text: "Have the mobile app access Amazon DynamoDB directly instead of J50N files stored on Amazon S3.",
      },
      {
        id: "c",
        text: "Introduce an Amazon SQS queue to buffer writes to the Amazon DynamoDB table and reduce provisioned write throughput.",
      },
      {
        id: "d",
        text: "Introduce Amazon Elasticache to cache reads from the Amazon DynamoDB table and reduce provisioned read throughput.",
      },
      {
        id: "e",
        text: "Write data directly into an Amazon Redshift cluster replacing both Amazon DynamoDB and Amazon S3.",
      },
    ],
    correctOptionId: "a,c",
  },

  {
    id: "q490",
    prompt:
      "You are implementing a URL whitelisting system for a company that wants to restrict outbound HTTP'S connections to specific domains from their EC2-hosted applications you deploy a single EC2 instance running proxy software and configure It to accept traffic from all subnets and EC2 instances in the VPC. You configure the proxy to only pass through traffic to domains that you define in its whitelist configuration You have a nightly maintenance window or 10 minutes where all instances fetch new software updates. Each update Is about 200MB in size and there are 500 instances in theVPC that routinely fetch updates After a few days you notice that some machines are failing to successfully download some, but not all of their updates within the maintenance window. The download URLs used for these updates are correctly listed in the proxy's whitelist configuration and you are able to access them manually using a web browser on the instances. What might be happening? (Choose 2 answers)",
    options: [
      {
        id: "a",
        text: "You are running the proxy on an undersized EC2 instance type so network throughput is not sufficient for all instances to download their updates in time.",
      },
      {
        id: "b",
        text: "You are running the proxy on a sufficiently-sized EC2 instance in a private subnet and its network throughput is being throttled by a NAT running on an undersized EC2 instance.",
      },
      {
        id: "c",
        text: "The route table for the subnets containing the affected EC2 instances is not configured to direct network traffic for the software update locations to the proxy.",
      },
      {
        id: "d",
        text: "You have not allocated enough storage to t he EC2 instance running the proxy so the network buffer is filling up, causing some requests to fail.",
      },
      {
        id: "e",
        text: "You are running the proxy in a public subnet but have not allocated enough EIPs to support the needed network throughput through the Internet Gateway (IGW).",
      },
    ],
    correctOptionId: "a,b",
  },

  {
    id: "q491",
    prompt:
      "You are playing around with setting up stacks using JSON templates in CloudFormation to try and understand them a little better. You have set up about 5 or 6 but now start to wonder if you are being charged for these stacks. What is AWS's billing policy regarding stack resources?",
    options: [
      {
        id: "a",
        text: "You are not charged for the stack resources if they are not taking any traffic.",
      },
      {
        id: "b",
        text: "You are charged for the stack resources for the time they were operating (even if you deleted the stack right away).",
      },
      {
        id: "c",
        text: "You are charged for the stack resources for the time they were operating (but not if you deleted the stack within 60 minutes).",
      },
      {
        id: "d",
        text: "You are charged for the stack resources for the time they were operating (but not if you deleted the stack within 30 minutes).",
      },
    ],
    correctOptionId: "b",
  },

  {
    id: "q492",
    prompt: "What does Amazon Cloud Formation provide?",
    options: [
      {
        id: "a",
        text: "The ability to setup Autoscaling for Amazon EC2 instances.",
      },
      { id: "b", text: "None of these." },
      {
        id: "c",
        text: "A templated resource creation for Amazon Web Services.",
      },
      {
        id: "d",
        text: "A template to map network resources for Amazon Web Services.",
      },
    ],
    correctOptionId: "d",
  },

  {
    id: "q493",
    prompt:
      "You are signed in as root user on your account but there is an Amazon S3 bucket under your account that you cannot access. What is a possible reason for this?",
    options: [
      {
        id: "a",
        text: "An IAM user assigned a bucket policy to an Amazon S3 bucket and didn't specify the root user as a principal",
      },
      { id: "b", text: "The S3 bucket is full." },
      {
        id: "c",
        text: "The S3 bucket has reached the maximum number of objects allowed.",
      },
      { id: "d", text: "You are in the wrong Availability Zone." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q494",
    prompt:
      "When creation of an EBS snapshot is initiated, but not completed, the EBS volume?",
    options: [
      { id: "a", text: "Can be used while the snapshot is in progress." },
      {
        id: "b",
        text: "Cannot be detached or attached to an EC2 instance until the snapshot completes.",
      },
      {
        id: "c",
        text: "Can be used in read-only mode while the snapshot is in progress.",
      },
      { id: "d", text: "Cannot be used until the snapshot completes." },
    ],
    correctOptionId: "d",
  },

  {
    id: "q495",
    prompt: "What does Amazon SES stand for?",
    options: [
      { id: "a", text: "Simple Elastic Server." },
      { id: "b", text: "Simple Email Service." },
      { id: "c", text: "Software Email Solution." },
      { id: "d", text: "Software Enabled Server." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q496",
    prompt:
      "You receive a bill from AWS but are confused because you see you are incurring different costs for the exact same storage size in different regions on Amazon S3. You ask AWS why this is so. What response would you expect to receive from AWS?",
    options: [
      { id: "a", text: "We charge less in different time zones." },
      { id: "b", text: "We charge less where our costs are less." },
      { id: "c", text: "This will balance out next bill." },
      { id: "d", text: "It must be a mistake." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q497",
    prompt:
      "Disabling automated backups [...] disable the point-in-time recovery.",
    options: [
      { id: "a", text: "if configured to can." },
      { id: "b", text: "will never." },
      { id: "c", text: "will." },
    ],
    correctOptionId: "c",
  },

  {
    id: "q498",
    prompt:
      "A user has launched a large EBS backed EC2 instance in the US-East-1a region. The user wants to achieve Disaster Recovery (DR) for that instance by creating another small instance in Europe. How can the user achieve DR?",
    options: [
      {
        id: "a",
        text: "Copy the instance from the US East region to the EU region.",
      },
      {
        id: "b",
        text: "Use the 'Launch more like this' option to copy the instance from one region to another.",
      },
      {
        id: "c",
        text: "Copy the running instance using the 'Instance Copy' command to the EU region.",
      },
      {
        id: "d",
        text: "Create an AMI of the instance and copy the AMI to the EU region. Then launch the instance from the EU AMI.",
      },
    ],
    correctOptionId: "d",
  },

  {
    id: "q499",
    prompt: "How many relational database engines does RDS currently support?",
    options: [
      { id: "a", text: "Three: MySQL, Oracle and Microsoft SQL Server." },
      { id: "b", text: "Just two: MySQL and Oracle." },
      {
        id: "c",
        text: "Five: MySQL, PostgreSQL, MongoDB, Cassandra and SQLite.",
      },
      {
        id: "d",
        text: "Eight: Amazon Aurora PostgreSQL-Compatible Edition, Amazon Aurora MySQL-Compatible Edition, RDS for PostgreSQL, RDS for MySQL, RDS for MariaDB, RDS for SQL Server, RDS for Oracle, and RDS for Db2.",
      },
    ],
    correctOptionId: "d",
  },

  {
    id: "q500",
    prompt:
      "Are you able to integrate a multi-factor token service with the AWS Platform?",
    options: [
      {
        id: "a",
        text: "Yes, you can integrate private multi-factor token devices to authenticate users to the AWS platform.",
      },
      {
        id: "b",
        text: "No, you cannot integrate multi-factor token devices with the AWS platform.",
      },
      {
        id: "c",
        text: "Yes, using the AWS multi-factor token devices to authenticate users on the AWS platform.",
      },
    ],
    correctOptionId: "c",
  },

  {
    id: "q501",
    prompt:
      "What is the default maximum number of MFA devices in use per AWS account (at the root account level)?",
    options: [
      { id: "a", text: "1." },
      { id: "b", text: "5." },
      { id: "c", text: "15." },
      { id: "d", text: "10." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q502",
    prompt:
      "Select the correct statement: Within Amazon EC2, when using Linux instances, the device name /dev/sda1 is [...].",
    options: [
      { id: "a", text: "reserved for EBS volumes." },
      { id: "b", text: "recommended for EBS volumes." },
      { id: "c", text: "recommended for instance store volumes." },
      { id: "d", text: "reserved for the root device." },
    ],
    correctOptionId: "d",
  },

  {
    id: "q503",
    prompt: "Does Amazon Route 53 support NS Records?",
    options: [
      { id: "a", text: "Yes, it supports Name Service records." },
      { id: "b", text: "No." },
      { id: "c", text: "It supports only MX records." },
      { id: "d", text: "Yes, it supports Name Server records." },
    ],
    correctOptionId: "d",
  },

  {
    id: "q504",
    prompt:
      "Your web application front end consists of multiple EC2 instances behind an Elastic Load Balancer. You configured ELB to perform health checks on these EC2 instances, if an instance fails to pass health checks, which statement will be true?",
    options: [
      {
        id: "a",
        text: "The instance gets terminated automatically by the ELB.",
      },
      {
        id: "b",
        text: "The instance gets quarantined by the ELB for root cause analysis.",
      },
      { id: "c", text: "The instance is replaced automatically by the ELB." },
      {
        id: "d",
        text: "The ELB stops sending traffic to the instance that failed its health check.",
      },
    ],
    correctOptionId: "d",
  },

  {
    id: "q505",
    prompt:
      "George has launched three EC2 instances inside the US-East-1a zone with his AWS account. Ray has launched two EC2 instances in the US-East-1a zone with his AWS account. Which of the below mentioned statements will help George and Ray understand the Availability Zone (AZ) concept better?",
    options: [
      {
        id: "a",
        text: "All the instances of George and Ray can communicate over a private IP with a minimal cost.",
      },
      {
        id: "b",
        text: "The US-East-1a region of George and Ray can be different Availability Zones.",
      },
      {
        id: "c",
        text: "All the instances of George and Ray can communicate over a private IP without any cost.",
      },
      {
        id: "d",
        text: "The instances of George and Ray will be running in the same data centre.",
      },
    ],
    correctOptionId: "b",
  },

  {
    id: "q506",
    prompt:
      "Once again your customers are concerned about the security of their sensitive data and with their latest enquiry ask about what happens to old storage devices on AWS. What would be the best answer to this question?",
    options: [
      { id: "a", text: "AWS reformats the disks and uses them again." },
      {
        id: "b",
        text: "AWS uses the techniques detailed in DoD 5220.22-M to destroy data as part of the decommissioning process.",
      },
      {
        id: "c",
        text: "AWS uses their own proprietary software to destroy data as part of the decommissioning process.",
      },
      {
        id: "d",
        text: "AWS uses a 3rd party security organization to destroy data as part of the decommissioning process.",
      },
    ],
    correctOptionId: "b",
  },

  {
    id: "q507",
    prompt:
      "Which of the following are characteristics of Amazon VPC subnets? (Choose 2 answers)",
    options: [
      {
        id: "a",
        text: "Each subnet spans at least 2 Availability Zones to provide a high-availability environment.",
      },
      { id: "b", text: "Each subnet maps to a single Availability Zone." },
      {
        id: "c",
        text: "CIDR block mask of/25 is the smallest range supported.",
      },
      {
        id: "d",
        text: "By default, all subnets can route between each other, whether they are private or public.",
      },
      {
        id: "e",
        text: "Instances in a private subnet can communicate with the Internet only if they have an Elastic IP.",
      },
    ],
    correctOptionId: "b,e",
  },

  {
    id: "q508",
    prompt:
      "Which AWS instance address has the following characteristics? 'If you stop an instance, its Elastic IP address is unmapped, and you must remap it when you restart the instance.'",
    options: [
      { id: "a", text: "Both A and B." },
      { id: "b", text: "None of these." },
      { id: "c", text: "VPC Addresses." },
      { id: "d", text: "EC2 Addresses." },
    ],
    correctOptionId: "d",
  },

  {
    id: "q509",
    prompt:
      "You are designing a data leak prevention solution for your VPC environment. You want your VPC Instances to be able to access software depots and distributions on the Internet for product updates. The depots and distributions are accessible via third party CONs by their URLs. You want to explicitly deny any other outbound connections from your VPC instances to hosts on the internet. Which of the following options would you consider?",
    options: [
      {
        id: "a",
        text: "Configure a web proxy server in your VPC and enforce URL-based ru les for outbound access Remove default routes.",
      },
      {
        id: "b",
        text: "Implement security groups and configure outbound rules to only permit traffic to software depots.",
      },
      {
        id: "c",
        text: "Move all your instances into private VPC subnets remove default routes from all routing tables and add specific routes to the software depots and distributions only.",
      },
      {
        id: "d",
        text: "Implement network access control lists to all specific destinations, with an Implicit deny as a rule.",
      },
    ],
    correctOptionId: "a",
  },

  {
    id: "q510",
    prompt:
      "What is an isolated database environment running in the cloud (Amazon RDS) called?",
    options: [
      { id: "a", text: "DB Instance." },
      { id: "b", text: "DB Unit." },
      { id: "c", text: "DB Server." },
      { id: "d", text: "DB Volume." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q511",
    prompt:
      "A user is sending bulk emails using AWS SES. The emails are not reaching some of the targeted audience because they are not authorized by the ISPs. How can the user ensure that the emails are all delivered?",
    options: [
      { id: "a", text: "Send an email using DKIM with SE." },
      { id: "b", text: "Send an email using SMTP with SE." },
      {
        id: "c",
        text: "Open a ticket with AWS support to get it authorized with the IS.",
      },
      {
        id: "d",
        text: "Authorize the ISP by sending emails from the development account.",
      },
    ],
    correctOptionId: "a",
  },

  {
    id: "q512",
    prompt: "What's an ECU?",
    options: [
      { id: "a", text: "Extended Cluster User." },
      { id: "b", text: "None of these." },
      { id: "c", text: "Elastic Computer Usage." },
      { id: "d", text: "Elastic Compute Unit." },
    ],
    correctOptionId: "d",
  },

  {
    id: "q513",
    prompt:
      "You would like to create a mirror image of your production environment in another region for disaster recovery purposes. Which of the following AWS resources do not need to be recreated in the second region? (Choose 2 answers)",
    options: [
      { id: "a", text: "Route 53 Record Sets." },
      { id: "b", text: "IAM Roles." },
      { id: "c", text: "Elastic IP Addresses (EIP)." },
      { id: "d", text: "EC2 Key Pairs." },
      { id: "e", text: "Launch configurations." },
      { id: "f", text: "Security Groups." },
    ],
    correctOptionId: "a,b",
  },

  {
    id: "q514",
    prompt:
      "Which procedure for backing up a relational database on EC2 that is using a set of RAIDed EBS volumes for storage minimizes the time during which the database cannot be written to and results in a consistent backup?",
    options: [
      {
        id: "a",
        text: "1. Detach EBS volumes, 2. Start EBS snapshot of volumes, 3. Re-attach EBS volumes.",
      },
      {
        id: "b",
        text: "1. Stop the EC2 Instance. 2. Snapshot the EBS volumes.",
      },
      {
        id: "c",
        text: "1. Suspend disk 1/0, 2. Create an image of the EC2 Instance, 3. Resume disk 1/0.",
      },
      {
        id: "d",
        text: "1. Suspend disk 1/0, 2. Start EBS snapshot of volumes, 3. Resume disk 1/0.",
      },
      {
        id: "e",
        text: "1. Suspend disk 1/0, 2. Start EBS snapshot of volumes, 3. Wait for snapshots to complete, 4. Resume disk 1/0.",
      },
    ],
    correctOptionId: "a",
  },

  {
    id: "q515",
    prompt:
      "My Read Replica appears 'stuck' after a Multi-AZ failover and is unable to obtain or apply updates from the source DB Instance. What do I do?",
    options: [
      {
        id: "a",
        text: "You will need to delete the Read Replica and create a new one to rep lace it.",
      },
      {
        id: "b",
        text: "You will need to disassociate the DB Engine and re associate it.",
      },
      {
        id: "c",
        text: "The instance should be deployed to Single AZ and then moved to Multi-AZ once again.",
      },
      {
        id: "d",
        text: "You will need to delete the DB Instance and create a new one to replace it.",
      },
    ],
    correctOptionId: "a",
  },

  {
    id: "q516",
    prompt:
      "You are setting up some IAM user policies and have also become aware that some services support resource-based permissions, which let you attach policies to the service's resources instead of to IAM users or groups. Which of the below statements is true in regards to resource-level permissions?",
    options: [
      {
        id: "a",
        text: "All services support resource-level permissions for all actions.",
      },
      {
        id: "b",
        text: "Resource-level permissions are supported by Amazon CloudFront.",
      },
      {
        id: "c",
        text: "All services support resource-level permissions only for some actions.",
      },
      {
        id: "d",
        text: "Some services support resource-level permissions only for some actions.",
      },
    ],
    correctOptionId: "d",
  },

  {
    id: "q517",
    prompt:
      "You have some very sensitive data stored on AWS S3 and want to try every possible alternative to keeping it secure in regards to access control. What are the mechanisms available for access control on AWS S3?",
    options: [
      {
        id: "a",
        text: "(IAM) policies, Access Control Lists (ACLs), bucket policies, and query string authentication.",
      },
      {
        id: "b",
        text: "(IAM) policies, Access Control Lists (ACLs) and bucket policies.",
      },
      {
        id: "c",
        text: "Access Control Lists (ACLs), bucket policies, and query string authentication.",
      },
      {
        id: "d",
        text: "(IAM) policies, Access Control Lists (ACLs), bucket policies, query string authentication and encryption.",
      },
    ],
    correctOptionId: "a",
  },

  {
    id: "q518",
    prompt:
      "You are implementing AWS Direct Connect. You intend to use AWS public service end points such as Amazon S3, across the AWS Direct Connect link. You want other Internet traffic to use your existing link to an Internet Service Provider. What is the correct way to configure AWS Direct connect for access to services such as Amazon S3?",
    options: [
      {
        id: "a",
        text: "Configure a public Interface on your AWS Direct Connect link. Configure a static route via your AWS Direct Connect link that points to Amazon S3 Advertise a default route to AWS using BGP.",
      },
      {
        id: "b",
        text: "Create a private interface on your AWS Direct Connect link. Configure a static route via your AWS Direct connect link that points to Amazon S3 Configure specific routes to your network in your VPC.",
      },
      {
        id: "c",
        text: "Create a public interface on your AWS Direct Connect link. Redistribute BGP routes into your existing routing infrastructure; advertise specific routes for your network to AWS.",
      },
      {
        id: "d",
        text: "Create a private interface on your AWS Direct connect link. Redistribute BGP routes into your existing routing infrastructure and advertise a default route to AWS.",
      },
    ],
    correctOptionId: "c",
  },

  {
    id: "q519",
    prompt:
      "You are setting up your first Amazon Virtual Private Cloud (Amazon VPC) network so you decide you should probably use the AWS Management Console and the VPC Wizard. Which of the following is not an option for network architectures after launching the 'Start VPC Wizard' in Amazon VPC page on the AWS Management Console?",
    options: [
      { id: "a", text: "VPC with a Single Public Subnet Only." },
      {
        id: "b",
        text: "VPC with a Public Subnet Only and Hardware VPN Access.",
      },
      {
        id: "c",
        text: "VPC with Public and Private Subnets and Hardware VPN Access.",
      },
      {
        id: "d",
        text: "VPC with a Private Subnet Only and Hardware VPN Access.",
      },
    ],
    correctOptionId: "b",
  },

  {
    id: "q520",
    prompt:
      "True or False: A VPC contains multiple subnets, where each subnet can span multiple Availability Zones.",
    options: [
      {
        id: "a",
        text: "This is true only if requested during the set-up of VPC.",
      },
      { id: "b", text: "This is true." },
      { id: "c", text: "This is false." },
      { id: "d", text: "This is true only for US regions." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q521",
    prompt:
      "Amazon RDS automated backups and DB Snapshots are currently supported for only the [...] storage engine.",
    options: [
      { id: "a", text: "InnoDB." },
      { id: "b", text: "MyISAM." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q522",
    prompt:
      "While signing in REST/ Query requests, for additional security, you should transmit your requests using Secure Sockets Layer (SSL) by using [...].",
    options: [
      { id: "a", text: "HTTP." },
      { id: "b", text: "Internet Protocol Security (IPsec)." },
      { id: "c", text: "TLS (Transport Layer Security)." },
      { id: "d", text: "HTTPS." },
    ],
    correctOptionId: "d",
  },

  {
    id: "q523",
    prompt:
      "Out of the stripping options available for the EBS volumes, which one has the following disadvantage: 'Doubles the amount of 1/0 required from the instance to EBS compared to RAID 0, because you're mirroring all writes to a pair of volumes, limiting how much you can stripe.'?",
    options: [
      { id: "a", text: "Raid 0." },
      { id: "b", text: "RAID 1+0 (RAID 10)." },
      { id: "c", text: "Raid 1." },
      { id: "d", text: "Raid." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q524",
    prompt:
      "Can I encrypt connections between my application and my DB Instance using SSL?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "Only in VPC." },
      { id: "c", text: "Only in certain regions." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q525",
    prompt:
      "Which of the following items are required to allow an application deployed on an EC2 instance to write data to a DynamoDB table? Assume that no security keys are allowed to be stored on the EC2 instance. (Choose 3 answers)",
    options: [
      {
        id: "a",
        text: "Create an IAM Role that allows write access to the DynamoDB table.",
      },
      { id: "b", text: "Add an IAM Role to a running EC2 instance." },
      {
        id: "c",
        text: "Create an IAM User that allows write access to the Dynamo DB table.",
      },
      { id: "d", text: "Add an IAM User to a running EC2 instance." },
      {
        id: "e",
        text: "Launch an EC2 Instance with the IAM Role included in the launch configuration.",
      },
    ],
    correctOptionId: "a,b,e",
  },

  {
    id: "q526",
    prompt:
      "Identify a true statement about the On-Demand instances purchasing option provided by Amazon EC2.",
    options: [
      {
        id: "a",
        text: "Pay for the instances that you use by the hour, with no long-term commitments or up-front payments.",
      },
      {
        id: "b",
        text: "Make a low, one-time, up-front payment for an instance, reserve it for a one- or three-year term, and pay a significantly lower hourly rate for these instances.",
      },
      {
        id: "c",
        text: "Pay for the instances that you use by the hour, with long-term commitments or up-front payments.",
      },
      {
        id: "d",
        text: "Make a high, one-time, all-front payment for an instance, reserve it for a one- or three-year term, and pay a significantly higher hourly rate for these instances.",
      },
    ],
    correctOptionId: "a",
  },

  {
    id: "q527",
    prompt: "When will you incur costs with an Elastic IP address (EIP)?",
    options: [
      { id: "a", text: "When an EIP is allocated." },
      {
        id: "b",
        text: "When it is allocated and associated with a running instance.",
      },
      {
        id: "c",
        text: "When it is allocated and associated with a stopped instance.",
      },
      {
        id: "d",
        text: "Costs are incurred regardless of whether the ElP is associated with a running instance.",
      },
    ],
    correctOptionId: "d",
  },

  {
    id: "q528",
    prompt:
      "IAM provides several policy templates you can use to automatically assign permissions to the groups you create. The [...] policy template gives the Admins group permission to access all account resources, except your AWS account information.",
    options: [
      { id: "a", text: "Read Only Access." },
      { id: "b", text: "Power User Access." },
      { id: "c", text: "AWS Cloud Formation Read Only Access." },
      { id: "d", text: "Administrator Access." },
    ],
    correctOptionId: "d",
  },

  {
    id: "q529",
    prompt: "What does RRS stand for when talking about S3?",
    options: [
      { id: "a", text: "Redundancy Removal System." },
      { id: "b", text: "Relational Rights Storage." },
      { id: "c", text: "Regional Rights Standard." },
      { id: "d", text: "Reduced Redundancy Storage." },
    ],
    correctOptionId: "d",
  },

  {
    id: "q530",
    prompt:
      "Can I change the EC2 security groups after an instance is launched in EC2-Classic?",
    options: [
      {
        id: "a",
        text: "Yes, you can change security groups after you launch an instance in EC2-Classic.",
      },
      {
        id: "b",
        text: "No, you cannot change security groups after you launch an instance in EC2-Classic.",
      },
      {
        id: "c",
        text: "Yes, you can only when you remove rules from a security group.",
      },
      {
        id: "d",
        text: "Yes, you can only when you add rules to a security group.",
      },
    ],
    correctOptionId: "b",
  },

  {
    id: "q531",
    prompt: "Please select the Amazon EC2 resource which cannot be tagged.",
    options: [
      { id: "a", text: "Images (AMIs, kernels, RAM disks)." },
      { id: "b", text: "Amazon EBS volumes." },
      { id: "c", text: "Elastic IP addresses." },
      { id: "d", text: "VPCs." },
    ],
    correctOptionId: "c",
  },

  {
    id: "q532",
    prompt: "Does Route 53 support MX Records?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "It supports CNAME records, but not MX records." },
      { id: "c", text: "No." },
      {
        id: "d",
        text: "Only Primary MX records. Secondary MX records are not supported.",
      },
    ],
    correctOptionId: "a",
  },

  {
    id: "q533",
    prompt:
      "Which of the following notification endpoints or clients are supported by Amazon Simple Notification Service? (Choose 2 answers)",
    options: [
      { id: "a", text: "Email." },
      { id: "b", text: "CloudFront distribution." },
      { id: "c", text: "File Transfer Protocol." },
      { id: "d", text: "Short Message Service." },
      { id: "e", text: "Simple Network Management Protocol." },
    ],
    correctOptionId: "a,d",
  },

  {
    id: "q534",
    prompt:
      "AWS Identity and Access Management is a web service that enables Amazon Web Services (AWS) customers to manage users and user permissions in AWS. In addition to supporting IAM user policies, some services support resource-based permissions. Which of the following services are supported by resource-based permissions?",
    options: [
      { id: "a", text: "Amazon SNS, and Amazon SQS and AWS Direct Connect." },
      { id: "b", text: "Amazon S3 and Amazon SQS and Amazon ElastiCache." },
      {
        id: "c",
        text: "Amazon S3, Amazon SNS, Amazon SQS, Amazon Glacier and Amazon EB",
      },
      { id: "d", text: "Amazon Glacier, Amazon SNS, and Amazon CloudWatch." },
    ],
    correctOptionId: "c",
  },

  {
    id: "q535",
    prompt:
      "What does the following policy for Amazon EC2 do? { 'Statement':[{ 'Effect': 'Allow', 'Action':'ec2: Describe*', 'Resource':'*' }] }",
    options: [
      {
        id: "a",
        text: "Allow users to use actions that start with 'Describe' over all the EC2 resources.",
      },
      { id: "b", text: "Share an AMI with a partner." },
      { id: "c", text: "Share an AMI within the account." },
      {
        id: "d",
        text: "Allow a group to only be able to describe, run, stop, start, and terminate instances.",
      },
    ],
    correctOptionId: "a",
  },

  {
    id: "q536",
    prompt:
      "Which IAM role do you use to grant AWS Lambda permission to access a DynamoDB Stream?",
    options: [
      { id: "a", text: "Dynamic role." },
      { id: "b", text: "Invocation role." },
      { id: "c", text: "Execution role." },
      { id: "d", text: "Event Source role." },
    ],
    correctOptionId: "c",
  },

  {
    id: "q537",
    prompt:
      "Can resource record sets in a hosted zone have a different domain suffix (for example, <www.blog>. acme.com and <www.acme.ca>)?",
    options: [
      {
        id: "a",
        text: "Yes, it can have for a maximum of three different TLDs.",
      },
      { id: "b", text: "Yes." },
      { id: "c", text: "Yes, it can have depending on the TL." },
      { id: "d", text: "No." },
    ],
    correctOptionId: "c",
  },

  {
    id: "q538",
    prompt:
      "In Amazon Elastic Compute Cloud, which of the following is used for communication between instances in the same network (EC2-Classic or a VPC)?",
    options: [
      { id: "a", text: "Private IP addresses." },
      { id: "b", text: "Elastic IP addresses." },
      { id: "c", text: "Static IP addresses." },
      { id: "d", text: "Public IP addresses." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q539",
    prompt:
      "A user is planning to host a mobile game on EC2 which sends notifications to active users on either high score or the addition of new features. The user should get this notification when he is online on his mobile device. Which of the below mentioned AWS services can help achieve this functionality?",
    options: [
      { id: "a", text: "AWS Simple Notification Service." },
      { id: "b", text: "AWS Simple Email Service." },
      { id: "c", text: "AWS Mobile Communication Service." },
      { id: "d", text: "AWS Simple Queue Service." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q540",
    prompt:
      "You need to create an Amazon Machine Image (AMI) for a customer for an application which does not appear to be part of the standard AWS AMI template that you can see in the AWS console. What are the alternative possibilities for creating an AMI on AWS?",
    options: [
      {
        id: "a",
        text: "You can purchase an AMIs from a third party but cannot create your own AMI.",
      },
      {
        id: "b",
        text: "You can purchase an AMIs from a third party or can create your own AMI.",
      },
      {
        id: "c",
        text: "Only AWS can create AMIs and you need to wait till it becomes available.",
      },
      {
        id: "d",
        text: "Only AWS can create AMIs and you need to request them to create one for you.",
      },
    ],
    correctOptionId: "b",
  },

  {
    id: "q541",
    prompt: "Will I be charged if the DB instance is idle?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "Only is running in GovCloud." },
      { id: "c", text: "Only if running in VPC." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q542",
    prompt:
      "Your company has been storing a lot of data in Amazon Glacier and has asked for an inventory of what is in there exactly. So you have decided that you need to download a vault inventory. Which of the following statements is incorrect in relation to Vault Operations in Amazon Glacier?",
    options: [
      {
        id: "a",
        text: "You can use Amazon Simple Notification Service (Amazon SNS) notifications to notify you when the job completes.",
      },
      {
        id: "b",
        text: "A vault inventory refers to the list of archives in a vault.",
      },
      {
        id: "c",
        text: "You can use Amazon Simple Queue Service (Amazon SQS) notifications to notify you when the job completes.",
      },
      {
        id: "d",
        text: "Downloading a vault inventory is an asynchronous operation.",
      },
    ],
    correctOptionId: "c",
  },

  {
    id: "q543",
    prompt:
      "Your fortune 500 company has under taken a TCO analysis evaluating the use of Amazon S3 versus acquiring more hardware The outcome was that ail employees would be granted access to use Amazon S3 for storage of their personal documents. Which of the following will you need to consider so you can set up a solution that incorporates single sign-on from your corporate AD or LDAP directory and restricts access for each user to a designated user folder in a bucket? (Choose 3 answers)",
    options: [
      { id: "a", text: "Setting up a federation proxy or identity provider." },
      {
        id: "b",
        text: "Using AWS Security Token Service to generate temporary tokens.",
      },
      { id: "c", text: "Tagging each folder in the bucket." },
      { id: "d", text: "Configuring IAM role." },
      {
        id: "e",
        text: "Setting up a matching IAM user for every user in your corporate directory that needs access to a folder in the bucket.",
      },
    ],
    correctOptionId: "a,b,d",
  },

  {
    id: "q544",
    prompt:
      "Your company policies require encryption of sensitive data at rest. You are considering the possible options for protecting data while storing it at rest on an EBS data volume, attached to an EC2 instance. Which of these options would allow you to encrypt your data at rest? (Choose 3 answers)",
    options: [
      { id: "a", text: "Implement third party volume encryption tools." },
      { id: "b", text: "Do nothing as EBS volumes are encrypted by default." },
      {
        id: "c",
        text: "Encrypt data inside your applications before storing it on EBS.",
      },
      {
        id: "d",
        text: "Encrypt data using native data encryption drivers at the file system level.",
      },
      {
        id: "e",
        text: "Implement SSL/TLS for all services running on the server.",
      },
    ],
    correctOptionId: "a,c,d",
  },

  {
    id: "q545",
    prompt:
      "A scope has been handed to you to set up a super fast gaming server and you decide that you will use Amazon DynamoDB as your database. For efficient access to data in a table, Amazon DynamoDB creates and maintains indexes for the primary key attributes. A secondary index is a data structure that contains a subset of attributes from a table, along with an alternate key to support Query operations. How many types of secondary indexes does DynamoDB support?",
    options: [
      { id: "a", text: "2." },
      { id: "b", text: "16." },
      { id: "c", text: "4." },
      { id: "d", text: "As many as you need." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q546",
    prompt:
      "True or False: in Amazon Route 53, you can create a hosted zone for a top-level domain (TLD).",
    options: [
      { id: "a", text: "False." },
      {
        id: "b",
        text: "False, Amazon Route 53 automatically creates it for you.",
      },
      {
        id: "c",
        text: "True, only if you send an XML document with a CreateHostedZoneRequest element for TLD.",
      },
      { id: "d", text: "True." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q547",
    prompt:
      "You want to use AWS Import/Export to send data from your S3 bucket to several of your branch offices. What should you do if you want to send 10 storage units to AWS?",
    options: [
      {
        id: "a",
        text: "Make sure your disks are encrypted prior to shipping.",
      },
      { id: "b", text: "Make sure you format your disks prior to shipping." },
      { id: "c", text: "Make sure your disks are 1TB or more." },
      {
        id: "d",
        text: "Make sure you submit a separate job request for each device.",
      },
    ],
    correctOptionId: "d",
  },

  {
    id: "q548",
    prompt:
      "You are deploying an application to track GPS coordinates of delivery trucks in the United States. Coordinates are transmitted from each delivery t ruck once every three seconds. You need to design an architecture that will enable real-time processing of these coordinates from multiple consumers. Which service should you use to implement data ingestion?",
    options: [
      { id: "a", text: "Amazon Kinesis." },
      { id: "b", text: "AWS Data Pipeline." },
      { id: "c", text: "Amazon AppStream." },
      { id: "d", text: "Amazon Simple Queue Service." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q549",
    prompt:
      "While performing the volume status checks, if the status is insufficient-data, what does it mean?",
    options: [
      { id: "a", text: "The checks may still be in progress on the volume." },
      { id: "b", text: "The check has passed." },
      { id: "c", text: "The check has failed." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q550",
    prompt: "Can you create IAM security credentials for existing users?",
    options: [
      {
        id: "a",
        text: "Yes, existing users can have security credentials associated with their account.",
      },
      {
        id: "b",
        text: "No, IAM requires that all users who have credentials set up are not existing users.",
      },
      {
        id: "c",
        text: "No, security credentials are created within GROUPS, and then users are associated to GROUPS at a later time.",
      },
      {
        id: "d",
        text: "Yes, but only IAM credentials, not ordinary security credentials.",
      },
    ],
    correctOptionId: "a",
  },

  {
    id: "q551",
    prompt: "Can I move a Reserved Instance from one Region to another?",
    options: [
      { id: "a", text: "No." },
      { id: "b", text: "Only if they are moving into GovCloud." },
      { id: "c", text: "Yes." },
      {
        id: "d",
        text: "Only if they are moving to US East from another region.",
      },
    ],
    correctOptionId: "a",
  },

  {
    id: "q552",
    prompt:
      "A user has created an ELB with the Availability Zone US-East-1A. The user wants to add more zones to ELB to achieve High Availability. How can the user add more zones to the existing ELB?",
    options: [
      {
        id: "a",
        text: "The user should stop the ELB and add zones and instances as required.",
      },
      {
        id: "b",
        text: "The only option is to launch instances in different zones and add to ELB.",
      },
      {
        id: "c",
        text: "It is not possible to add more zones to the existing ELB.",
      },
      {
        id: "d",
        text: "The user can add zones on the fly from the AWS console.",
      },
    ],
    correctOptionId: "d",
  },

  {
    id: "q553",
    prompt: "Amazon SWF is designed to help users …",
    options: [
      { id: "a", text: "Design graphical user interface interactions." },
      { id: "b", text: "Manage user identification and authorization." },
      { id: "c", text: "Store Web content." },
      {
        id: "d",
        text: "Coordinate synchronous and asynchronous tasks which are distributed and fault tolerant.",
      },
    ],
    correctOptionId: "d",
  },

  {
    id: "q554",
    prompt:
      "Which technique can be used to integrate AWS IAM (Identity and Access Management) with an on-premise LDAP (Lightweight Directory Access Protocol) directory service?",
    options: [
      {
        id: "a",
        text: "Use an IAM policy that references the LDAP account identifiers and the AWS credentials.",
      },
      {
        id: "b",
        text: "Use SAML (Security Assertion Markup Language) to enable single sign-on between AWS and LDAP.",
      },
      {
        id: "c",
        text: "Use AWS Security Token Service from an identity broker to issue short-lived AWS credentials.",
      },
      {
        id: "d",
        text: "Use IAM roles to automatically rotate the IAM credentials when LDAP credentials are updated.",
      },
      {
        id: "e",
        text: "Use the LDAP credentials to restrict a group of users from launching specific EC2 instance types.",
      },
    ],
    correctOptionId: "b",
  },

  {
    id: "q555",
    prompt:
      "You are building a solution for a customer to extend their on-premises data center to AWS. The customer requires a 50-Mbps dedicated and private connection to their VPC. Which AWS product or feature satisfies this requirement?",
    options: [
      { id: "a", text: "Amazon VPC peering." },
      { id: "b", text: "Elastic IP Addresses." },
      { id: "c", text: "AWS Direct Connect." },
      { id: "d", text: "Amazon VPC virtual private gateway." },
    ],
    correctOptionId: "c",
  },

  {
    id: "q556",
    prompt:
      "A customer wants to leverage Amazon Simple Storage Service (S3) and Amazon Glacier as part of their backup and archive infrastructure. The customer plans to use third-party software to support this integration. Which approach will limit the access of the third party software to only the Amazon S3 bucket named 'company-backup'?",
    options: [
      {
        id: "a",
        text: "A custom bucket policy limited to the Amazon S3 API in the Amazon Glacier archive 'company backup'.",
      },
      {
        id: "b",
        text: "A custom bucket policy limited to the Amazon S3 API in 'company-backup'.",
      },
      {
        id: "c",
        text: "A custom IAM user policy limited to the Amazon S3 API for the Amazon Glacier archive 'company backup'.",
      },
      {
        id: "d",
        text: "A custom IAM user policy limited to the Amazon S3 API in 'company-backup'.",
      },
    ],
    correctOptionId: "d",
  },

  {
    id: "q557",
    prompt:
      "A user needs to run a batch process which runs for 10 minutes. This will only be run once, or at maximum twice, in the next month, so the processes will be temporary only. The process needs 15 X-Large instances. The process downloads the code from S3 on each instance when it is launched, and then generates a temporary log file. Once the instance is terminated, all the data will be lost. Which of the below mentioned pricing models should the user choose in this case?",
    options: [
      { id: "a", text: "Spot instance." },
      { id: "b", text: "Reserved instance." },
      { id: "c", text: "On-demand instance." },
      { id: "d", text: "EBS optimized instance." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q558",
    prompt:
      "You have been doing a lot of testing of your VPC Network by deliberately failing EC2 instances to test whether instances are failing over properly. Your customer who will be paying the AWS bill for all this asks you if he being charged for all these instances. You try to explain to him how the billing works on EC2 instances to the best of your knowledge. What would be an appropriate response to give to the customer in regards to this?",
    options: [
      {
        id: "a",
        text: "Billing commences when Amazon EC2 AMI instance is completely up and billing ends as soon as the instance starts to shutdown.",
      },
      {
        id: "b",
        text: "Billing only commences only after 1 hour of uptime and billing ends when the instance terminates.",
      },
      {
        id: "c",
        text: "Billing commences when Amazon EC2 initiates the boot sequence of an AMI instance and billing ends when the instance shuts down.",
      },
      {
        id: "d",
        text: "Billing commences when Amazon EC2 initiates the boot sequence of an AMI instance and billing ends as soon as the instance starts to shutdown.",
      },
    ],
    correctOptionId: "c",
  },

  {
    id: "q559",
    prompt:
      "Refer to the architecture diagram above of a batch processing solution using Simple Queue Service (SQS) to set up a message queue between EC2 instances which are used as batch processors Cloud Watch monitors the number of Job requests (queued messages) and an Auto Scaling group adds or deletes batch servers automatically based on parameters set in Cloud Watch alarms. You can use this architecture to implement which of the following features in a cost effective and efficient manner? ![Question 563](images/question563.jpg)",
    options: [
      {
        id: "a",
        text: "Reduce the overall lime for executing jobs through parallel processing by allowing a busy EC2 instance that receives a message to pass it to the next instance in a daisy-chain setup.",
      },
      {
        id: "b",
        text: "Implement fault tolerance against EC2 instance failure since messages would remain in SQS and worn can continue with recovery of EC2 instances implement fault tolerance against SQS failure by backing up messages to S3.",
      },
      {
        id: "c",
        text: "Implement message passing between EC2 instances within a batch by exchanging messages through SQS.",
      },
      {
        id: "d",
        text: "Coordinate number of EC2 instances with number of job requests automatically thus Improving cost effectiveness.",
      },
      {
        id: "e",
        text: "Handle high priority jobs before lower priority jobs by assigning a priority metadata fie ld to SQS messages.",
      },
    ],
    correctOptionId: "c",
  },

  {
    id: "q560",
    prompt:
      "You are migrating an internal server on your DC to an EC2 instance with EBS volume. Your server disk usage is around 500GB so you just copied all your data to a 2TB disk to be used with AWS Import/Export. Where will the data be imported once it arrives at Amazon?",
    options: [
      { id: "a", text: "To a 2TB EBS volume." },
      { id: "b", text: "To an S3 bucket with 2 objects of 1TB." },
      { id: "c", text: "To an 500GB EBS volume." },
      { id: "d", text: "To an S3 bucket as a 2TB snapshot." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q561",
    prompt:
      "Is there any way to own a direct connection to Amazon Web Services?",
    options: [
      {
        id: "a",
        text: "You can create an encrypted tunnel to VPC, but you don't own the connection.",
      },
      { id: "b", text: "Yes, it's called Amazon Dedicated Connection." },
      { id: "c", text: "No, AWS only allows access from the public Internet." },
      { id: "d", text: "Yes, it's called Direct Connect." },
    ],
    correctOptionId: "d",
  },

  {
    id: "q562",
    prompt:
      "Which of the following strategies can be used to control access to your Amazon EC2 instances?",
    options: [
      { id: "a", text: "DB security groups." },
      { id: "b", text: "IAM policies." },
      { id: "c", text: "None of these." },
      { id: "d", text: "EC2 security groups." },
    ],
    correctOptionId: "d",
  },

  {
    id: "q563",
    prompt:
      "A client of yours has a huge amount of data stored on Amazon S3, but is concerned about someone stealing it while it is in transit. You know that all data is encrypted in transit on AWS, but which of the following is wrong when describing server-side encryption on AWS?",
    options: [
      {
        id: "a",
        text: "Amazon S3 server-side encryption employs strong multi-factor encryption.",
      },
      {
        id: "b",
        text: "Amazon S3 server-side encryption uses one of the strongest block ciphers available, 256-bit Advanced Encryption Standard (AES-256), to encrypt your data.",
      },
      {
        id: "c",
        text: "In server-side encryption, you manage encryption/decryption of your data, the encryption keys, and related tools.",
      },
      {
        id: "d",
        text: "Server-side encryption is about data encryption at rest―that is, Amazon S3 encrypts your data as it writes it to disks.",
      },
    ],
    correctOptionId: "c",
  },

  {
    id: "q564",
    prompt:
      "When you run a DB Instance as a Multi-AZ deployment, the [...] serves database writes and reads",
    options: [
      { id: "a", text: "secondary." },
      { id: "b", text: "backup." },
      { id: "c", text: "stand by." },
      { id: "d", text: "primary." },
    ],
    correctOptionId: "d",
  },

  {
    id: "q565",
    prompt:
      "In Amazon EC2, how many Elastic IP addresses can you have by default?",
    options: [
      { id: "a", text: "10." },
      { id: "b", text: "2." },
      { id: "c", text: "5." },
      { id: "d", text: "20." },
    ],
    correctOptionId: "c",
  },

  {
    id: "q566",
    prompt:
      "A user has created photo editing software and hosted it on EC2. The software accepts requests from the user about the photo format and resolution and sends a message to S3 to enhance the picture accordingly. Which of the below mentioned AWS services will help make a scalable software with the AWS infrastructure in this scenario?",
    options: [
      { id: "a", text: "AWS Simple Notification Service." },
      { id: "b", text: "AWS Simple Queue Service." },
      { id: "c", text: "AWS Elastic Transcoder." },
      { id: "d", text: "AWS Glacier." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q567",
    prompt:
      "Using Amazon CloudWatch's Free Tier, what is the frequency of metric updates which you receive?",
    options: [
      { id: "a", text: "5 minutes." },
      { id: "b", text: "500 milliseconds." },
      { id: "c", text: "30 seconds" },
      { id: "d", text: "1 minute." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q568",
    prompt:
      "When you resize the Amazon RDS DB instance, Amazon RDS will perform the upgrade during the next maintenance window. If you want the upgrade to be performed now, rather than waiting for the maintenance window, specify the [...] option.",
    options: [
      { id: "a", text: "Apply Now." },
      { id: "b", text: "Apply Soon." },
      { id: "c", text: "Apply This." },
      { id: "d", text: "Apply Immediately." },
    ],
    correctOptionId: "d",
  },

  {
    id: "q569",
    prompt:
      "A user is running a webserver on EC2. The user wants to receive the SMS when the EC2 instance utilization is above the threshold limit. Which AWS services should the user configure in this case?",
    options: [
      { id: "a", text: "AWS CloudWatch + AWS SQS." },
      { id: "b", text: "AWS CloudWatch + AWS SNS." },
      { id: "c", text: "AWS CloudWatch + AWS SES." },
      { id: "d", text: "AWS EC2 + AWS Cloudwatch." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q570",
    prompt:
      "You're running an application on-premises due to its dependency on non-x86 hardware and want to use AWS for data backup. Your backup application is only able to write to POSIX-compatible block based storage. You have 140TB of data and would like to mount it as a single folder on your file server Users must be able to access portions of this data while the backups are taking place. What backup solution would be most appropriate for this use case?",
    options: [
      {
        id: "a",
        text: "Use Storage Gateway and configure it to use Gateway Cached volumes.",
      },
      {
        id: "b",
        text: "Configure your backup software to use S3 as the target for your data backups.",
      },
      {
        id: "c",
        text: "Configure your backup software to use Glacier as the target for your data backups.",
      },
      {
        id: "d",
        text: "Use Storage Gateway and configure it to use Gateway Stored volumes.",
      },
    ],
    correctOptionId: "a",
  },

  {
    id: "q571",
    prompt:
      "What happens to Amazon EBS root device volumes, by default, when an instance terminates?",
    options: [
      { id: "a", text: "Amazon EBS root device volumes are moved to IA" },
      {
        id: "b",
        text: "Amazon EBS root device volumes are copied into Amazon RD",
      },
      {
        id: "c",
        text: "Amazon EBS root device volumes are automatically deleted.",
      },
      {
        id: "d",
        text: "Amazon EBS root device volumes remain in the database until you delete them.",
      },
    ],
    correctOptionId: "b",
  },

  {
    id: "q572",
    prompt:
      "You require the ability to analyze a customer's clickstream data on a website so they can do behavioral analysis. Your customer needs to know what sequence of pages and ads their customer clicked on. This data will be used in real time to modify the page layouts as customers click through the site to increase stickiness and advertising click-through. Which option meets the requirements for captioning and analyzing this data?",
    options: [
      {
        id: "a",
        text: "Log clicks in weblogs by URL store to Amazon S3, and then analyze with Elastic MapReduce.",
      },
      {
        id: "b",
        text: "Push web clicks by session to Amazon Kinesis and analyze behavior using Kinesis workers.",
      },
      {
        id: "c",
        text: "Write click events directly to Amazon Redshift and then analyze with SQL.",
      },
      {
        id: "d",
        text: "Publish web clicks by session to an Amazon SQS queue men periodically drain these events to Amazon RDS and analyze with SQL.",
      },
    ],
    correctOptionId: "b",
  },

  {
    id: "q573",
    prompt: "What happens when you create a topic on Amazon SNS?",
    options: [
      {
        id: "a",
        text: "The topic is created, and it has the name you specified for it.",
      },
      { id: "b", text: "An ARN (Amazon Resource Name) is created." },
      {
        id: "c",
        text: "You can create a topic on Amazon SQS, not on Amazon SNS.",
      },
      { id: "d", text: "This question doesn't make sense." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q574",
    prompt:
      "A company needs to deploy virtual desktops to its customers in a virtual private cloud, leveraging existing security controls. Which set of AWS services and features will meet the company's requirements?",
    options: [
      {
        id: "a",
        text: "Virtual Private Network connection. AWS Directory Services, and Classic link.",
      },
      {
        id: "b",
        text: "Virtual Private Network connection. AWS Di rectory Services, and Amazon Workspaces.",
      },
      {
        id: "c",
        text: "AWS Directory Service, Amazon Workspaces, and AWS Identity and Access Management.",
      },
      {
        id: "d",
        text: "Amazon Elastic Compute Cloud, and AWS Identity and Access Management.",
      },
    ],
    correctOptionId: "c",
  },

  {
    id: "q575",
    prompt:
      "You are designing a multi-platform web application for AWS The application will run on EC2 instances and will be accessed from PCs. tablets and smart phones Supported accessing platforms are Windows, macOS, iOS and Android Separate sticky session and SSL certificate setups are required for different platform types which of the following describes the most cost effective and performance efficient architecture setup?",
    options: [
      {
        id: "a",
        text: "Setup a hybrid architecture to handle session state and SSL certificates on-prem and separate EC2 Instance groups running web applications for different platform types running in a VPC.",
      },
      {
        id: "b",
        text: "Set up one ELB for all platforms to distribute load among multiple instance under it Each EC2 instance implements ail functionality for a particular platform.",
      },
      {
        id: "c",
        text: "Set up two ELBs The first ELB handles SSL certificates for all platforms and the second ELB handles session stickiness for all platforms for each ELB run separate EC2 instance groups to handle the web application for each platform.",
      },
      {
        id: "d",
        text: "Assign multiple ELBS to an EC2 instance or group of EC2 instances running the common components of the web application, one ELB for each platform type Session stickiness and SSLtermination are done at the ELBs.",
      },
    ],
    correctOptionId: "d",
  },

  {
    id: "q576",
    prompt:
      "A company is deploying a two-tier, highly available web application to AWS. Which service provides durable storage for static content while utilizing lower Overall CPU resources for the web tier?",
    options: [
      { id: "a", text: "Amazon EBS volume." },
      { id: "b", text: "Amazon S3." },
      { id: "c", text: "Amazon EC2 instance store." },
      { id: "d", text: "Amazon RD5 instance." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q577",
    prompt: "Select the incorrect statement.",
    options: [
      {
        id: "a",
        text: "In Amazon EC2, the private IP addresses only returned to Amazon EC2 when the instance is stopped or terminated.",
      },
      {
        id: "b",
        text: "In Amazon VPC, an instance retains its private IP addresses when the instance is stopped.",
      },
      {
        id: "c",
        text: "In Amazon VPC, an instance does NOT retain its private IP addresses when the instance is stopped.",
      },
      {
        id: "d",
        text: "In Amazon EC2, the private IP address is associated exclusive ly with the instance for its lifetime.",
      },
    ],
    correctOptionId: "c",
  },

  {
    id: "q578",
    prompt:
      "An organization has a statutory requirement to protect the data at rest for data stored in EBS volumes. Which of the below mentioned options can the organization use to achieve data protection?",
    options: [
      { id: "a", text: "Data replication." },
      { id: "b", text: "Data encryption." },
      { id: "c", text: "Data snapshot." },
      { id: "d", text: "All the options listed here." },
    ],
    correctOptionId: "d",
  },

  {
    id: "q579",
    prompt:
      "A web design company currently runs several FTP servers that their 250 customers use to upload and download large graphic files They wish to move this system to AWS to make it more scalable, butthey wish to maintain customer privacy and Keep costs to a minimum. What AWS architecture would you recommend?",
    options: [
      {
        id: "a",
        text: "Ask their customers to use an S3 client instead of an FTP client. Create a single S3 bucket Create an IAM user for each customer Put the IAM Users in a Group that has an IAM policy that permits access to sub-directories within the bucket via use of the 'username' Policy variable.",
      },
      {
        id: "b",
        text: "Create a single S3 bucket with Reduced Redundancy Storage turned on and ask their customers to use an S3 client instead of an FTP client Create a bucket for each customer with a Bucket Policy that permits access only to that one customer.",
      },
      {
        id: "c",
        text: "Create an auto-scaling group of FTP servers with a scaling policy to automatically scale-in when minimum network traffic on the auto-scaling group is below a given threshold. Load a central list of ftp users from S3 as part of the user Data startup script on each Instance.",
      },
      {
        id: "d",
        text: "Create a single S3 bucket with Requester Pays turned on and ask their customers to use an S3 client instead of an FTP client Create a bucket tor each customer with a Bucket Policy that permits access only to that one customer.",
      },
    ],
    correctOptionId: "a",
  },

  {
    id: "q580",
    prompt: "Amazon RDS DB snapshots and automated backups are stored in:",
    options: [
      { id: "a", text: "Amazon S3." },
      { id: "b", text: "Amazon ECS Volume." },
      { id: "c", text: "Amazon RDS." },
      { id: "d", text: "Amazon EMR." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q581",
    prompt:
      "Can Amazon S3 uploads resume on failure or do they need to restart?",
    options: [
      { id: "a", text: "Restart from beginning." },
      {
        id: "b",
        text: "You can resume them, if you flag the 'resume on fai lure' option before uploading.",
      },
      { id: "c", text: "Resume on failure." },
      { id: "d", text: "Depends on the file size." },
    ],
    correctOptionId: "c",
  },

  {
    id: "q582",
    prompt:
      "Prior to the introduction of this function, the HA feature provided redundancy and performance, but required that a failed/lost group member be [...] reinstated.",
    options: [
      { id: "a", text: "automatically." },
      { id: "b", text: "periodically." },
      { id: "c", text: "manually." },
      { id: "d", text: "continuously." },
    ],
    correctOptionId: "c",
  },

  {
    id: "q583",
    prompt:
      "A company has a workflow that sends video files from their on-premise system to AWS for transcoding. They use EC2 worker instances that pull transcoding jobs from SQS. Why is SQS an appropriate service for this scenario?",
    options: [
      { id: "a", text: "SQS guarantees the order of the messages." },
      { id: "b", text: "SQS synchronously provides transcoding output." },
      { id: "c", text: "SQS checks the health of the worker instances." },
      {
        id: "d",
        text: "SQS helps to facilitate horizontal scaling of encoding tasks.",
      },
    ],
    correctOptionId: "d",
  },

  {
    id: "q584",
    prompt:
      "Which statement below best describes what thresholds you can set to trigger a CloudWatch Alarm?",
    options: [
      {
        id: "a",
        text: "Set a target value and choose whether the alarm will trigger when the value is greater than (>), greater than or equal to (>=), less than (<), or less than or equal to (<=) that value.",
      },
      { id: "b", text: "Thresholds need to be set in IAM not CloudWatch." },
      {
        id: "c",
        text: "Only default thresholds can be set you can't choose your own thresholds.",
      },
      {
        id: "d",
        text: "Set a target value and choose whether the alarm will trigger when the value hits this threshold.",
      },
    ],
    correctOptionId: "a",
  },

  {
    id: "q585",
    prompt:
      "You are designing a web application that stores static assets in an Amazon Simple Storage Service (S3) bucket. You expect this bucket to immediately receive over 150 PUT requests per second. What should you do to ensure optimal performance?",
    options: [
      { id: "a", text: "Use multi-part upload." },
      { id: "b", text: "Add a random prefix to the key names." },
      {
        id: "c",
        text: "Amazon S3 will automatically manage performance at this scale.",
      },
      {
        id: "d",
        text: "Use a predictable naming scheme, such as sequential numbers or date time sequences, in the key names.",
      },
    ],
    correctOptionId: "a",
  },

  {
    id: "q586",
    prompt: "What does Amazon EC2 provide?",
    options: [
      { id: "a", text: "Virtual servers in the Cloud." },
      {
        id: "b",
        text: "A platform to run code (Java, PHP, Python), paying on an hourly basis.",
      },
      { id: "c", text: "Computer Clusters in the Cloud." },
      { id: "d", text: "Physical servers, remotely managed by the customer." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q587",
    prompt:
      "A customer has a single 3-TB volume on-premises that is used to hold a large repository of images and print layout files. This repository is growing at 500 GB a year and must be presented as a single logical volume. The customer is becoming increasingly constrained with their local storage capacity and wants an off-site backup of this data, while maintaining low-latency access to their frequently accessed data. Which AWS Storage Gateway configuration meets the customer requirements?",
    options: [
      {
        id: "a",
        text: "Gateway-Cached volumes with snapshots scheduled to Amazon S3.",
      },
      {
        id: "b",
        text: "Gateway-Stored volumes with snapshots scheduled to Amazon S3.",
      },
      {
        id: "c",
        text: "Gateway-Virtual Tape Library with snapshots to Amazon S3.",
      },
      {
        id: "d",
        text: "Gateway-Virtual Tape Library with snapshots to Amazon Glacier.",
      },
    ],
    correctOptionId: "d",
  },

  {
    id: "q588",
    prompt:
      "You are architecting an auto-scalable batch processing system using video processing pipelines and Amazon Simple Queue Service (Amazon SQS) for a customer. You are unsure of the limitations of SQS and need to find out. What do you think is a correct statement about the limitations of Amazon SQS?",
    options: [
      {
        id: "a",
        text: "It supports an unlimited number of queues but a limited number of messages per queue for each user but automatically deletes messages that have been in the queue for more than 4 weeks.",
      },
      {
        id: "b",
        text: "It supports an unlimited number of queues and unlimited number of messages per queue for each user but automatically deletes messages that have been in the queue for more than 4 days.",
      },
      {
        id: "c",
        text: "It supports an unlimited number of queues but a limited number of messages per queue for each user but automatically deletes messages that have been in the queue for more than 4 days.",
      },
      {
        id: "d",
        text: "It supports an unlimited number of queues and unlimited number of messages per queue for each user but automatically deletes messages that have been in the queue for more than 4 weeks.",
      },
    ],
    correctOptionId: "b",
  },

  {
    id: "q589",
    prompt:
      "Which Amazon service can I use to define a virtual network that closely resembles a traditional data center?",
    options: [
      { id: "a", text: "Amazon VPC." },
      { id: "b", text: "Amazon Service Bus." },
      { id: "c", text: "Amazon EMR." },
      { id: "d", text: "Amazon RDS." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q590",
    prompt:
      "Select the correct set of options. These are the initial settings for the default security group:",
    options: [
      {
        id: "a",
        text: "Allow no inbound traffic, Allow all outbound traffic and Allow instances associated with this security group to talk to each other.",
      },
      {
        id: "b",
        text: "Allow all inbound traffic, Allow no outbound traffic and Allow instances associated with this security group to talk to each other.",
      },
      {
        id: "c",
        text: "Allow no inbound traffic, Allow all outbound traffic and Does NOT allow instances associated with this security group to talk to each other.",
      },
      {
        id: "d",
        text: "Al low all inbound traffic, Allow all outbound traffic and Does NOT allow instances associated with this security group to talk to each other.",
      },
    ],
    correctOptionId: "a",
  },

  {
    id: "q591",
    prompt:
      "You need to migrate a large amount of data into the cloud that you have stored on a hard disk and you decide that the best way to accomplish this is with AWS Import/Export and you mail the hard disk to AWS. Which of the following statements is incorrect in regards to AWS Import/Export?",
    options: [
      { id: "a", text: "It can export from Amazon S3." },
      { id: "b", text: "It can Import to Amazon Glacier." },
      { id: "c", text: "It can export from Amazon Glacier." },
      { id: "d", text: "It can Import to Amazon EBS." },
    ],
    correctOptionId: "c",
  },

  {
    id: "q592",
    prompt:
      "Can I control if and when MySQL based RDS Instance is upgraded to new supported versions?",
    options: [
      { id: "a", text: "No." },
      { id: "b", text: "Only in VPC." },
      { id: "c", text: "Yes." },
    ],
    correctOptionId: "c",
  },

  {
    id: "q593",
    prompt:
      "If I have multiple Read Replicas for my master DB Instance and I promote one of them, what happens to the rest of the Read Replicas?",
    options: [
      {
        id: "a",
        text: "The remaining Read Replicas will still replicate from the older master DB Instance.",
      },
      { id: "b", text: "The remaining Read Replicas will be deleted." },
      {
        id: "c",
        text: "The remaining Read Replicas will be combined to one read replica.",
      },
    ],
    correctOptionId: "a",
  },

  {
    id: "q594",
    prompt:
      "A user is running a batch process which runs for 1 hour every day. Which of the below mentioned options is the right instance type and costing model in this case if the user performs the same task for the whole year?",
    options: [
      { id: "a", text: "EBS backed instance with on-demand instance pricing." },
      {
        id: "b",
        text: "EBS backed instance with heavy utilized reserved instance pricing.",
      },
      {
        id: "c",
        text: "EBS backed instance with low utilized reserved instance pricing.",
      },
      {
        id: "d",
        text: "Instance store backed instance with spot instance pricing.",
      },
    ],
    correctOptionId: "a",
  },

  {
    id: "q595",
    prompt:
      "You are in the process of building an online gaming site for a client and one of the requirements is that it must be able to process vast amounts of data easily. Which AWS Service would be very helpful in processing all this data?",
    options: [
      { id: "a", text: "Amazon S3." },
      { id: "b", text: "AWS Data Pipeline." },
      { id: "c", text: "AWS Direct Connect." },
      { id: "d", text: "Amazon EMR." },
    ],
    correctOptionId: "d",
  },

  {
    id: "q596",
    prompt:
      "Your team has a tomcat-based Java application you need to deploy into development, test and production environments. After some research, you opt to use Elastic Beanstalk due to its tight integration with your developer tools and RDS due to its ease of management. Your QA team lead points out that you need to roll a sanitized set of production data into your environment on a nightly basis. Similarly, other software teams in your org want access to that same restored data via their EC2 instances in your VPC. The optimal setup for persistence and security that meets the above requirements would be the following:",
    options: [
      {
        id: "a",
        text: "Create your RDS instance as part of your Elastic Beanstalk definition and alter its security group to allow access to it from hosts in your application subnets.",
      },
      {
        id: "b",
        text: "Create your RDS instance separately and add its IP address to your application's DB connection strings in your code Alter its security group to allow access to it from hosts within your VPC's IP address block.",
      },
      {
        id: "c",
        text: "Create your RDS instance separately and pass its DNS name to your app's DB connection string as an environment variable. Create a security group for client machines and add it as a valid source for DB traffic to the security group of the RDS instance itself.",
      },
      {
        id: "d",
        text: "Create your RDS instance separately and pass its DNS name to your's DB connection string as an environment variable Alter its security group to allow access to It from hosts in your application subnets.",
      },
    ],
    correctOptionId: "a",
  },

  {
    id: "q597",
    prompt: "What are characteristics of Amazon S3? (Choose 2 answers)",
    options: [
      {
        id: "a",
        text: "Amazon S3 allows you to store objects of virtually unlimited size.",
      },
      { id: "b", text: "Amazon S3 offers Provisioned IOP." },
      {
        id: "c",
        text: "Amazon S3 allows you to store unlimited amounts of data.",
      },
      {
        id: "d",
        text: "Amazon S3 should be used to host a relational database.",
      },
      { id: "e", text: "Objects are directly accessible via a URL." },
    ],
    correctOptionId: "c,e",
  },

  {
    id: "q598",
    prompt:
      "You need to set up a complex network infrastructure for your organization that will be reasonably easy to deploy, replicate, control, and track changes on. Which AWS service would be best to use to help you accomplish this?",
    options: [
      { id: "a", text: "AWS Import/Export." },
      { id: "b", text: "AWS CloudFormation." },
      { id: "c", text: "Amazon Route 53." },
      { id: "d", text: "Amazon CloudWatch." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q599",
    prompt:
      "How should the application use AWS credentials to access the S3 bucket securely?",
    options: [
      {
        id: "a",
        text: "Use the AWS account access Keys the application retrieves the credentials from the source code of the application.",
      },
      {
        id: "b",
        text: "Create an IAM user for the application with permissions that allow list access to the S3 bucket launch the instance as the IAM user and retrieve the IAM user's credentials from the EC2 instance user data.",
      },
      {
        id: "c",
        text: "Create an IAM role for EC2 that allows list access to objects in the S3 bucket. Launch the instance with the role, and retrieve the role's credentials from the EC2 Instance metadata.",
      },
      {
        id: "d",
        text: "Create an IAM user for the application with permissions that allow list access to the S3 bucket. The application retrieves the IAM user credentials from a temporary directory with permissions that allow read access only to the application user.",
      },
    ],
    correctOptionId: "c",
  },

  {
    id: "q600",
    prompt:
      "You are setting up a VPC and you need to set up a public subnet within that VPC. Which following requirement must be met for this subnet to be considered a public subnet?",
    options: [
      {
        id: "a",
        text: "Subnet's traffic is not routed to an internet gateway but has its traffic routed to a virtual private gateway.",
      },
      { id: "b", text: "Subnet's traffic is routed to an internet gateway." },
      {
        id: "c",
        text: "Subnet's traffic is not routed to an internet gateway.",
      },
      {
        id: "d",
        text: "None of these answers can be considered a public subnet.",
      },
    ],
    correctOptionId: "b",
  },

  {
    id: "q601",
    prompt: "Is it possible to access your EBS snapshots?",
    options: [
      { id: "a", text: "Yes, through the Amazon S3 APIs." },
      { id: "b", text: "Yes, through the Amazon EC2 APIs." },
      {
        id: "c",
        text: "No, EBS snapshots cannot be accessed; they can only be used to create a new EBS volume.",
      },
      { id: "d", text: "EBS doesn't provide snapshots." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q602",
    prompt: "How many types of block devices does Amazon EC2 support?",
    options: [
      { id: "a", text: "4." },
      { id: "b", text: "5." },
      { id: "c", text: "2." },
      { id: "d", text: "1." },
    ],
    correctOptionId: "c",
  },

  {
    id: "q603",
    prompt:
      "SQL Server [...] store log ins and passwords in the master database.",
    options: [
      { id: "a", text: "can be configured to but by default does not." },
      { id: "b", text: "doesn't." },
      { id: "c", text: "does." },
    ],
    correctOptionId: "c",
  },

  {
    id: "q604",
    prompt:
      "You are using an m1.small EC2 Instance with one 300GB EBS volume to host a relational database. You determined that write throughput to the database needs to be increased. Which of the following approaches can help achieve this? (Choose 2 answers)",
    options: [
      { id: "a", text: "Use an array of EBS volumes." },
      { id: "b", text: "Enable Multi-AZ mode." },
      { id: "c", text: "Place the instance in an Auto Scaling Groups." },
      { id: "d", text: "Add an EBS volume and place into RAID 5." },
      { id: "e", text: "Increase the size of the EC2 Instance." },
      { id: "f", text: "Put the database behind an Elastic Load Balancer." },
    ],
    correctOptionId: "a,e",
  },

  {
    id: "q605",
    prompt:
      "A user is hosting a website in the US West-1 region. The website has the highest client base from the Asia-Pacific (Singapore / Japan) region. The application is accessing data from S3 before serving it to client. Which of the below mentioned regions gives a better performance for S3 objects?",
    options: [
      { id: "a", text: "Japan." },
      { id: "b", text: "Singapore." },
      { id: "c", text: "US East." },
      { id: "d", text: "US West-1." },
    ],
    correctOptionId: "d",
  },

  {
    id: "q606",
    prompt:
      "You need to set up security for your VPC and you know that Amazon VPC provides two features that you can use to increase security for your VPC: Security groups and network access control lists (ACLs). You start to look into security groups first. Which statement below is incorrect in relation to security groups?",
    options: [
      {
        id: "a",
        text: "Are stateful: Return traffic is automatically allowed, regardless of any rules.",
      },
      {
        id: "b",
        text: "Evaluate all rules before deciding whether to allow traffic.",
      },
      { id: "c", text: "Support allow rules and deny rules." },
      {
        id: "d",
        text: "Operate at the instance level (first layer of defense).",
      },
    ],
    correctOptionId: "c",
  },

  {
    id: "q607",
    prompt:
      "Can a single EBS volume be attached to multiple EC2 instances at the same time?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
      { id: "c", text: "Only for high-performance EBS volumes." },
      {
        id: "d",
        text: "Only when the instances are located in the US regions.",
      },
    ],
    correctOptionId: "b",
  },

  {
    id: "q608",
    prompt:
      "You are planning and configuring some EBS volumes for an application. in order to get the most performance out of your EBS volumes, you should attach them to an instance with enough [...] to support your volumes.",
    options: [
      { id: "a", text: "redundancy." },
      { id: "b", text: "storage." },
      { id: "c", text: "bandwidth." },
      { id: "d", text: "memory." },
    ],
    correctOptionId: "c",
  },

  {
    id: "q609",
    prompt:
      "An organization has three separate AWS accounts, one each for development, testing, and production. The organization wants the testing team to have access to certain AWS resources in the production account. How can the organization achieve this?",
    options: [
      {
        id: "a",
        text: "It is not possible to access resources of one account with another account.",
      },
      { id: "b", text: "Create the IAM roles with cross account access." },
      {
        id: "c",
        text: "Create the IAM user in a test account, and allow it access to the production environment with the IAM policy.",
      },
      { id: "d", text: "Create the IAM users with cross account access." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q610",
    prompt:
      "A benefits enrollment company is hosting a 3-tier web application running in a VPC on AWS which includes a NAT (Network Address Translation) instance in the public Web tier. There is enough provisioned capacity for the expected workload tor the new fiscal year benefit enrollment period plus some extra overhead Enrollment proceeds nicely for two days and then the web tier becomes unresponsive, upon investigation using CloudWatch and other monitoring tools it is discovered that there is an extremely large and unanticipated amount of inbound traffic coming from a set of 15specific IP addresses over port 80 from a country where the benefits company has no customers. The web tier instances are so overloaded that benefit enrollment administrators cannot even SSH into them. Which activity would be useful in defending against this attack?",
    options: [
      {
        id: "a",
        text: "Create a custom route table associated with the web tier and block the attacking IP addresses from the IGW (Internet Gateway).",
      },
      {
        id: "b",
        text: "Change the EIP (Elastic IP Address) of the NAT instance in the web tier subnet and update the Main Route Table with the new EIP.",
      },
      {
        id: "c",
        text: "Create 15 Security Group rules to block the attacking IP addresses over port 80.",
      },
      {
        id: "d",
        text: "Create an inbound NACL (Network Access control list) associated with the web tier subnet with deny rules to block the attacking IP addresses.",
      },
    ],
    correctOptionId: "d",
  },

  {
    id: "q611",
    prompt:
      "You launch an Amazon EC2 instance without an assigned AVVS identity and Access Management (IAM) role. Later, you decide that the instance should be running with an IAM role. Which action must you take in order to have a running Amazon EC2 instance with an IAM role assigned to it?",
    options: [
      {
        id: "a",
        text: "Create an image of the instance, and register the image with an IAM role assigned and an Amazon EBS volume mapping.",
      },
      {
        id: "b",
        text: "Create a new IAM role with the same permissions as an existing IAM role, and assign it to the running instance.",
      },
      {
        id: "c",
        text: "Create an image of the instance, add a new IAM role with the same permissions as the desired IAM role, and deregister the image with the new role assigned.",
      },
      {
        id: "d",
        text: "Create an image of the instance, and use this image to launch a new instance with the desired Lam role assigned.",
      },
    ],
    correctOptionId: "d",
  },

  {
    id: "q612",
    prompt:
      "Does AWS Direct Connect allow you access to all Availabilities Zones within a Region?",
    options: [
      { id: "a", text: "Depends on the type of connection." },
      { id: "b", text: "Yes." },
      { id: "c", text: "No." },
      {
        id: "d",
        text: "Only when there's just one Availability Zone in a region. If there are more than one, only one availability zone can be accessed directly.",
      },
    ],
    correctOptionId: "a",
  },

  {
    id: "q613",
    prompt: "What is the durability of S3 RRS?",
    options: [
      { id: "a", text: "99.99%." },
      { id: "b", text: "99.95%." },
      { id: "c", text: "99.995%." },
      { id: "d", text: "99.999999999%." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q614",
    prompt:
      "Your organization is in the business of architecting complex transactional databases. For a variety of reasons, this has been done on EBS. What is AWS's recommendation for customers who have architected databases using EBS for backups?",
    options: [
      {
        id: "a",
        text: "Backups to Amazon S3 be performed through the database management system.",
      },
      {
        id: "b",
        text: "Backups to AWS Storage Gateway be performed through the database management system.",
      },
      {
        id: "c",
        text: "If you take regular snapshots no further backups are required.",
      },
      {
        id: "d",
        text: "Backups to Amazon Glacier be performed through the database management system.",
      },
    ],
    correctOptionId: "a",
  },

  {
    id: "q615",
    prompt:
      "You need to create a load balancer in a VPC network that you are building. You can make your load balancer internal (private) or internet-facing (public). When you make your load balancer internal, a DNS name will be created, and it will contain the private IP address of the load balancer. An internal load balancer is not exposed to the internet. When you make your load balancer internet-facing, a DNS name will be created with the public IP address. If you want the Internet-facing load balancer to be connected to the Internet, where must this load balancer reside?",
    options: [
      {
        id: "a",
        text: "The load balancer must reside in a subnet that is connected to the internet using the internet gateway.",
      },
      {
        id: "b",
        text: "The load balancer must reside in a subnet that is not connected to the internet.",
      },
      {
        id: "c",
        text: "The load balancer must not reside in a subnet that is connected to the internet.",
      },
      {
        id: "d",
        text: "The load balancer must be completely outside of your IP.",
      },
    ],
    correctOptionId: "a",
  },

  {
    id: "q616",
    prompt:
      "In the Amazon CloudWatch, which metric should I be checking to ensure that your DB Instance has enough free storage space?",
    options: [
      { id: "a", text: "Free Storage." },
      { id: "b", text: "Free Storage Space." },
      { id: "c", text: "Free Storage Volume." },
      { id: "d", text: "Free DB Storage Space." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q617",
    prompt:
      "A web-startup runs its very successful social news application on Amazon EC2 with an Elastic Load Balancer, an Auto-Scaling group of Java/Tomcat application-servers, and DynamoDB as data store. The main web-application best runs on m2 x large instances since it is highly memory- bound Each new deployment requires semi-automated creation and testing of a new AMI for the application servers which takes quite a while ana is therefore only done once per week. Recently, a new chat feature has been implemented in nodejs and wails to be integrated in the architecture. First tests show that the new component is CPU bound Because the company has some experience with using Chef, they decided to streamline the deployment process and use AWS OpsWorks as an application life cycle tool to simplify management of the application and reduce the deployment cycles. What configuration in AWS OpsWorks is necessary to integrate the new chat module in the most cost-efficient and flexible way?",
    options: [
      {
        id: "a",
        text: "Create one AWS OpsWorks stack, create one AWS OpsWorks layer, create one custom recipe.",
      },
      {
        id: "b",
        text: "Create one AWS OpsWorks stack create two AWS OpsWorks layers create one custom recipe.",
      },
      {
        id: "c",
        text: "Create two AWS OpsWorks stacks create two AWS OpsWorks layers create one custom recipe.",
      },
      {
        id: "d",
        text: "Create two AWS OpsWorks stacks create two AWS OpsWorks layers create two custom recipe.",
      },
    ],
    correctOptionId: "c",
  },

  {
    id: "q618",
    prompt:
      "A client needs you to import some existing infrastructure from a dedicated hosting provider to AWS to try and save on the cost of running his current website. He also needs an automated process that manages backups, software patching, automatic failure detection, and recovery. You are aware that his existing set up currently uses an Oracle database. Which of the following AWS databases would be best for accomplishing this task?",
    options: [
      { id: "a", text: "Amazon RDS." },
      { id: "b", text: "Amazon Redshift." },
      { id: "c", text: "Amazon SimpleDB." },
      { id: "d", text: "Amazon ElastiCache." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q619",
    prompt:
      "A user is currently building a website which will require a large number of instances in six months, when a demonstration of the new site will be given upon launch. Which of the below mentioned options allows the user to procure the resources beforehand so that they need not worry about infrastructure availability during the demonstration?",
    options: [
      {
        id: "a",
        text: "Procure all the instances as reserved instances beforehand.",
      },
      {
        id: "b",
        text: "Launch all the instances as part of the cluster group to ensure resource availability.",
      },
      {
        id: "c",
        text: "Pre-warm all the instances one month prior to ensure resource availability.",
      },
      {
        id: "d",
        text: "Ask AWS now to procure the dedicated instances in 6 months.",
      },
    ],
    correctOptionId: "a",
  },

  {
    id: "q620",
    prompt:
      "Amazon RDS creates an SSL certificate and installs the certificate on the DB Instance when Amazon RDS provisions the instance. These certificates are signed by a certificate authority. The [...] is stored at <https://rds.amazonaws.com/doc/rds-ssl-ca-cert.pem>.",
    options: [
      { id: "a", text: "private key." },
      { id: "b", text: "foreign key." },
      { id: "c", text: "public key." },
      { id: "d", text: "protected key." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q621",
    prompt:
      "What happens to data on an ephemeral volume of an EBS-backed EC2 instance if it is terminated or if it fails?",
    options: [
      { id: "a", text: "Data is automatically copied to another volume." },
      { id: "b", text: "The volume snapshot is saved in S3." },
      { id: "c", text: "Data persists." },
      { id: "d", text: "Data is deleted." },
    ],
    correctOptionId: "d",
  },

  {
    id: "q622",
    prompt:
      "You manually launch a NAT AMI in a public subnet. The network is properly configured. Security groups and network access control lists are property configured. Instances in a private subnet can access the NAT. The NAT can access the Internet. However, private instances cannot access the Internet. What additional step is required to allow access from the private instances?",
    options: [
      {
        id: "a",
        text: "Enable Source/Destination Check on the private Instances.",
      },
      { id: "b", text: "Enable Source/Destination Check on the NAT instance." },
      {
        id: "c",
        text: "Disable Source/Destination Check on the private instances.",
      },
      {
        id: "d",
        text: "Disable Source/Destination Check on the NAT instance.",
      },
    ],
    correctOptionId: "b",
  },

  {
    id: "q623",
    prompt:
      "You have just discovered that you can upload your objects to Amazon S3 using Multipart Upload API. You start to test it out but are unsure of the benefits that it would provide. Which of the following is not a benefit of using multipart uploads?",
    options: [
      {
        id: "a",
        text: "You can begin an upload before you know the final object size.",
      },
      { id: "b", text: "Quick recovery from any network issues." },
      { id: "c", text: "Pause and resume object uploads." },
      { id: "d", text: "It's more secure than normal upload." },
    ],
    correctOptionId: "d",
  },

  {
    id: "q624",
    prompt:
      "To help you manage your Amazon EC2 instances, images, and other Amazon EC2 resources, you can assign your own metadata to each resource in the form of [...].",
    options: [
      { id: "a", text: "special filters." },
      { id: "b", text: "functions." },
      { id: "c", text: "tags." },
      { id: "d", text: "wildcards." },
    ],
    correctOptionId: "c",
  },

  {
    id: "q625",
    prompt:
      "Do the Amazon EBS volumes persist independently from the running life of an Amazon EC2 instance?",
    options: [
      { id: "a", text: "No." },
      { id: "b", text: "Only if instructed to when created." },
      { id: "c", text: "Yes." },
    ],
    correctOptionId: "c",
  },

  {
    id: "q626",
    prompt:
      "If I write the below command, what does it do? ec2-run ami-e3a5408a -n 20 -g appserver",
    options: [
      {
        id: "a",
        text: "Start twenty instances as members of appserver group.",
      },
      {
        id: "b",
        text: "Creates 20 rules in the security group named appserver.",
      },
      {
        id: "c",
        text: "Terminate twenty instances as members of appserver group.",
      },
      { id: "d", text: "Start 20 security groups." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q627",
    prompt:
      "A company is deploying a new two-tier web application in AWS. The company has limited staff and requires high availability, and the application requires complex queries and table joins. Which configuration provides the solution for the company's requirements?",
    options: [
      {
        id: "a",
        text: "MySQL Installed on two Amazon EC2 Instances in a single Availability Zone.",
      },
      { id: "b", text: "Amazon RDS for MySQL with Multi-AZ." },
      { id: "c", text: "Amazon ElastiCache" },
      { id: "d", text: "Amazon DynamoDB." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q628",
    prompt:
      "In order to optimize performance for a compute cluster that requires low inter-node latency, which of the following feature should you use?",
    options: [
      { id: "a", text: "Multiple Availability Zones." },
      { id: "b", text: "AWS Direct Connect." },
      { id: "c", text: "EC2 Dedicated Instances." },
      { id: "d", text: "Placement Groups." },
      { id: "e", text: "VPC private subnets." },
    ],
    correctOptionId: "d",
  },

  {
    id: "q629",
    prompt:
      "Regarding the attaching of ENI to an instance, what does 'warm attach' refer to?",
    options: [
      { id: "a", text: "Attaching an ENI to an instance when it is stopped." },
      { id: "b", text: "This question doesn't make sense." },
      { id: "c", text: "Attaching an ENI to an instance when it is running." },
      {
        id: "d",
        text: "Attaching an ENI to an instance during the launch process.",
      },
    ],
    correctOptionId: "a",
  },

  {
    id: "q630",
    prompt: "Can I attach more than one policy to a particular entity?",
    options: [
      { id: "a", text: "Yes always." },
      { id: "b", text: "Only if within GovCloud." },
      { id: "c", text: "No." },
      { id: "d", text: "Only if within VPC." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q631",
    prompt:
      "By default, when an EBS volume is attached to a Windows instance, it may show up as any drive letter on the instance. You can change the settings of the [...] Service to set the drive letters of the EBS volumes per your specifications.",
    options: [
      { id: "a", text: "EBS Config Service." },
      { id: "b", text: "AMI Config Service." },
      { id: "c", text: "EC2 Config Service." },
      { id: "d", text: "EC2-AMI Config Service." },
    ],
    correctOptionId: "c",
  },

  {
    id: "q632",
    prompt:
      "Select the correct set of steps for exposing the snapshot only to specific AWS accounts.",
    options: [
      {
        id: "a",
        text: "Select public for all the accounts and check mark t hose accounts with whom you want to expose the snapshots and cl ick save.",
      },
      {
        id: "b",
        text: "Select Private, enter the IDs of t hose AWS accounts, and click Save.",
      },
      {
        id: "c",
        text: "Select Public, enter the IDs of those AWS accounts, and click Save.",
      },
      {
        id: "d",
        text: "Select Public, mark the IDs of those AWS accounts as private, and click Save.",
      },
    ],
    correctOptionId: "c",
  },

  {
    id: "q633",
    prompt: "How can you apply more than 100 rules to an Amazon EC2-Classic?",
    options: [
      { id: "a", text: "By adding more security groups." },
      {
        id: "b",
        text: "You need to create a default security group specifying your required rules if you need to use more than 100 rules per security group.",
      },
      {
        id: "c",
        text: "By default the Amazon EC2 security groups support 500 rules.",
      },
      {
        id: "d",
        text: "You can't add more than 100 rules to security groups for an Amazon EC2 instance.",
      },
    ],
    correctOptionId: "d",
  },

  {
    id: "q634",
    prompt:
      "A user has created an ELB with Auto Scaling. Which of the below mentioned offerings from ELB helps the user to stop sending new requests traffic from the load balancer to the EC2 instance when the instance is being deregistered while continuing in-flight requests?",
    options: [
      { id: "a", text: "ELB sticky session." },
      { id: "b", text: "ELB deregistration check." },
      { id: "c", text: "ELB auto registration Off." },
      { id: "d", text: "ELB connection draining." },
    ],
    correctOptionId: "d",
  },

  {
    id: "q635",
    prompt:
      "What can I access by visiting the URL: http://status.aws.amazon.com/?",
    options: [
      { id: "a", text: "Amazon Cloud Watch." },
      { id: "b", text: "Status of the Amazon RDS DB." },
      { id: "c", text: "AWS Service Health Dashboard." },
      { id: "d", text: "AWS Cloud Monitor." },
    ],
    correctOptionId: "c",
  },

  {
    id: "q636",
    prompt: "In Route 53, what does a Hosted Zone refer to?",
    options: [
      {
        id: "a",
        text: "A hosted zone is a collection of geographical load balancing rules for Route 53.",
      },
      {
        id: "b",
        text: "A hosted zone is a collection of resource record sets hosted by Route 53.",
      },
      {
        id: "c",
        text: "A hosted zone is a selection of specific resource record sets hosted by CloudFront for distribution to Route 53.",
      },
      {
        id: "d",
        text: "A hosted zone is the Edge Location that hosts the Route 53 records for a user.",
      },
    ],
    correctOptionId: "b",
  },

  {
    id: "q637",
    prompt:
      "A user is launching an EC2 instance in the US East region. Which of the below mentioned options is recommended by AWS with respect to the selection of the Availability Zone?",
    options: [
      { id: "a", text: "Always select the AZ while launching an instance." },
      { id: "b", text: "Always select the US-East-1-a zone for HA." },
      { id: "c", text: "Do not select the AZ; instead let AWS select the AZ." },
      {
        id: "d",
        text: "The user can never select the Availability Zone while launching an instance.",
      },
    ],
    correctOptionId: "c",
  },

  {
    id: "q638",
    prompt: "ec2-revoke RevokeSecurityGroup Ingress",
    options: [
      { id: "a", text: "Removes one or more security groups from a rule." },
      {
        id: "b",
        text: "Removes one or more security groups from an Amazon EC2 instance.",
      },
      { id: "c", text: "Removes one or more rules from a security group." },
      { id: "d", text: "Removes a security group from our account." },
    ],
    correctOptionId: "c",
  },

  {
    id: "q639",
    prompt: "Select the correct statement.",
    options: [
      {
        id: "a",
        text: "You don't need not specify the resource identifier while stopping a resource.",
      },
      {
        id: "b",
        text: "You can terminate, stop, or delete a resource based solely on its tags.",
      },
      {
        id: "c",
        text: "You can't terminate, stop, or delete a resource based solely on its tags.",
      },
      {
        id: "d",
        text: "You don't need to specify the resource identifier while terminating a resource.",
      },
    ],
    correctOptionId: "c",
  },

  {
    id: "q640",
    prompt:
      "What is the time period with which metric data is sent to CloudWatch when detailed monitoring is enabled on an Amazon EC2 instance?",
    options: [
      { id: "a", text: "15 minutes." },
      { id: "b", text: "5 minutes." },
      { id: "c", text: "1 minute." },
      { id: "d", text: "45 seconds." },
    ],
    correctOptionId: "c",
  },

  {
    id: "q641",
    prompt:
      "A large real -estate brokerage is exploring the option of adding a cost-effective location based alert to their existing mobile application The application backend infrastructure currently runs on AWS Users who opt in to this service will receive alerts on their mobile device regarding real-estate otters in proximity to their location. For the alerts to be relevant delivery time needs to be in the low minute count the existing mobile app has 5 million users across the us. Which one of the following architectural suggestions would you make to the customer?",
    options: [
      {
        id: "a",
        text: "The mobile application will submit its location to a web service endpoint utilizing Elastic Load Balancing and EC2 instances: DynamoDB will be used to store and retrieve relevant otters EC2 instances will communicate with mobile earners/device providers to push alerts back to mobile application.",
      },
      {
        id: "b",
        text: "Use AWS DirectConnect or VPN to establish connectivity with mobile carriers EC2 instances will receive the mobile applications' location through carrier connection: RDS will be used to store and relevant relevant offers EC2 instances will communicate with mobile carriers to push alerts back to the mobile application.",
      },
      {
        id: "c",
        text: "The mobile application will send device location using SQS.",
      },
      {
        id: "d",
        text: "EC2 instances will retrieve the re levant others from DynamoDB AWS Mobile Push will be used to send offers to the mobile application to push alerts back to the mobile application.",
      },
      {
        id: "e",
        text: "The mobile application will send device location using AWS Mobile Push EC2 instances will retrieve the relevant offers from DynamoDB EC2 instances will communicate with mobile carriers/device providers to push alerts back to the mobile application.",
      },
    ],
    correctOptionId: "a",
  },

  {
    id: "q642",
    prompt:
      "You are running PostgreSQL on Amazon RDS and it seems to be all running smoothly deployed in one Availability Zone. A database administrator asks you if DB instances running PostgreSQL support Multi-AZ deployments. What would be a correct response to this question?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "Yes but only for small db instances." },
      { id: "c", text: "No." },
      { id: "d", text: "Yes but you need to request the service from AWS." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q643",
    prompt: "What is the data model of DynamoDB?",
    options: [
      {
        id: "a",
        text: "Since DynamoDB is schema-less, there is no data model.",
      },
      {
        id: "b",
        text: "'Items', with Keys and one or more Attribute; and 'Attribute', with Name and Value.",
      },
      {
        id: "c",
        text: "'Table', a collection of Items; 'Items', with Keys and one or more Attribute; and 'Attribute', with Name and Value.",
      },
      {
        id: "d",
        text: "'Database', which is a set of 'Tables', which is a set of 'Items', which is a set of 'Attributes'.",
      },
    ],
    correctOptionId: "c",
  },

  {
    id: "q644",
    prompt: "What is a placement group in Amazon EC2?",
    options: [
      {
        id: "a",
        text: "It is a group of EC2 instances within a single Availability Zone.",
      },
      { id: "b", text: "It the edge location of your web content." },
      {
        id: "c",
        text: "It is the AWS region where you run the EC2 instance of your web content.",
      },
      {
        id: "d",
        text: "It is a group used to span multiple Availability Zones.",
      },
    ],
    correctOptionId: "a",
  },

  {
    id: "q645",
    prompt:
      "A company is running an SMB file server in its data center. The file server stores large files that are accessed frequently for the first few days after the files are created. After 7 days the files are rarely accessed. The total data size is increasing and is close to the company's total storage capacity. A solutions architect must increase the company's available storage space without losing low-latency access to the most recently accessed files. The solutions architect must also provide file lifecycle management to avoid future storage issues.Which solution will meet these requirements?",
    options: [
      {
        id: "a",
        text: "Use AWS DataSync to copy data that is older than 7 days from the SMB file server to AWS.",
      },
      {
        id: "b",
        text: "Create an Amazon S3 File Gateway to extend the company's storage space. Create an S3 Lifecycle policy to transition the data to S3 Glacier Deep Archive after 7 days.",
      },
      {
        id: "c",
        text: "Create an Amazon FSx for Windows File Server file system to extend the company's storage space.",
      },
      {
        id: "d",
        text: "Install a utility on each user's computer to access Amazon S3. Create an S3 Lifecycle policy to transition the data to S3 Glacier Flexible Retrieval after 7 days.",
      },
    ],
    correctOptionId: "d",
  },

  {
    id: "q646",
    prompt:
      "A large company wants to provide its globally located developers separate, limited size, managed PostgreSQL databases for development purposes. The databases will be low volume. The developers need the databases only when they are actively working.Which solution will meet these requirements MOST cost-effectively?",
    options: [
      {
        id: "a",
        text: "Give the developers the ability to launch separate Amazon Aurora instances. Set up a process to shut down Aurora instances at the end of the workday and to start Aurora instances at the beginning of the next workday.",
      },
      {
        id: "b",
        text: "Develop an AWS Service Catalog product that enforces size restrictions for launching Amazon Aurora instances. Give the developers access to launch the product when they need a development database.",
      },
      {
        id: "c",
        text: "Create an Amazon Aurora Serverless cluster. Develop an AWS Service Catalog product to launch databases in the cluster with the default capacity settings. Grant the developers access to the product.",
      },
      {
        id: "d",
        text: "Monitor AWS Trusted Advisor checks for idle Amazon RDS databases. Create a process to terminate identified idle RDS databases.",
      },
    ],
    correctOptionId: "c",
  },

  {
    id: "q647",
    prompt:
      "A company is building a web application that serves a content management system. The content management system runs on Amazon EC2 instances behind an Application Load Balancer (ALB). The EC2 instances run in an Auto Scaling group across multiple Availability Zones. Users are constantly adding and updating files, blogs, and other website assets in the content management system. A solutions architect must implement a solution in which all the EC2 instances share up-to-date website content with the least possible lag time. Which solution meets these requirements?",
    options: [
      {
        id: "a",
        text: "Update the EC2 user data in the Auto Scaling group lifecycle policy to copy the website assets from the EC2 instance that was launched most recently. Configure the ALB to make changes to the website assets only in the newest EC2 instance.",
      },
      {
        id: "b",
        text: "Copy the website assets to an Amazon Elastic File System (Amazon EFS) file system. Configure each EC2 instance to mount the EFS file system locally. Configure the website hosting application to reference the website assets that are stored in the EFS file system.",
      },
      {
        id: "c",
        text: "Copy the website assets to an Amazon S3 bucket. Ensure that each EC2 instance downloads the website assets from the S3 bucket to the attached Amazon Elastic Block Store (Amazon EBS) volume. Run the S3 sync command once each hour to keep files up to date.",
      },
      {
        id: "d",
        text: "Restore an Amazon Elastic Block Store (Amazon EBS) snapshot with the website assets. Attach the EBS snapshot as a secondary EBS volume when a new EC2 instance is launched. Configure the website hosting application to reference the website assets that are stored in the secondary EBS volume.",
      },
    ],
    correctOptionId: "b",
  },

  {
    id: "q648",
    prompt:
      "A company's web application consists of multiple Amazon EC2 instances that run behind an Application Load Balancer in a VPC. An Amazon RDS for MySQL DB instance contains the data. The company needs the ability to automatically detect and respond to suspicious or unexpected behavior in its AWS environment. The company already has added AWS WAF to its architecture. What should a solutions architect do next to protect against threats?",
    options: [
      {
        id: "a",
        text: "Use Amazon GuardDuty to perform threat detection. Configure Amazon EventBridge (Amazon CloudWatch Events) to filter for GuardDuty findings and to invoke an AWS Lambda function to adjust the AWS WAF rules.",
      },
      {
        id: "b",
        text: "Use AWS Firewall Manager to perform threat detection. Configure Amazon EventBridge (Amazon CloudWatch Events) to filter for Firewall Manager findings and to invoke an AWS Lambda function to adjust the AWS WAF web ACL.",
      },
      {
        id: "c",
        text: "Use Amazon Inspector to perform threat detection and to update the AWS WAF rules. Create a VPC network ACL to limit access to the web application.",
      },
      {
        id: "d",
        text: "Use Amazon Macie to perform threat detection and to update the AWS WAF rules. Create a VPC network ACL to limit access to the web application.",
      },
    ],
    correctOptionId: "a",
  },

  {
    id: "q649",
    prompt:
      "A company is planning to run a group of Amazon EC2 instances that connect to an Amazon Aurora database. The company has built an AWS CloudFormation template to deploy the EC2 instances and the Aurora DB cluster. The company wants to allow the instances to authenticate to the database in a secure way. The company does not want to maintain static database credentials. Which solution meets these requirements with the LEAST operational effort?",
    options: [
      {
        id: "a",
        text: "Create a database user with a user name and password. Add parameters for the database user name and password to the CloudFormation template. Pass the parameters to the EC2 instances when the instances are launched.",
      },
      {
        id: "b",
        text: "Create a database user with a user name and password. Store the user name and password in AWS Systems Manager Parameter Store. Configure the EC2 instances to retrieve the database credentials from Parameter Store.",
      },
      {
        id: "c",
        text: "Configure the DB cluster to use IAM database authentication. Create a database user to use with IAM authentication. Associate a role with the EC2 instances to allow applications on the instances to access the database.",
      },
      {
        id: "d",
        text: "Configure the DB cluster to use IAM database authentication with an IAM user. Create a database user that has a name that matches the IAM user. Associate the IAM user with the EC2 instances to allow applications on the instances to access the database.",
      },
    ],
    correctOptionId: "c",
  },

  {
    id: "q650",
    prompt:
      "A company wants to configure its Amazon CloudFront distribution to use SSL/TLS certificates. The company does not want to use the default domain name for the distribution. Instead, the company wants to use a different domain name for the distribution. Which solution will deploy the certificate without incurring any additional costs?",
    options: [
      {
        id: "a",
        text: "Request an Amazon issued private certificate from AWS Certificate Manager (ACM) in the us-east-1 Region.",
      },
      {
        id: "b",
        text: "Request an Amazon issued private certificate from AWS Certificate Manager (ACM) in the us-west-1 Region.",
      },
      {
        id: "c",
        text: "Request an Amazon issued public certificate from AWS Certificate Manager (ACM) in the us-east-1 Region.",
      },
      {
        id: "d",
        text: "Request an Amazon issued public certificate from AWS Certificate Manager (ACM) in the us-west-1 Region.",
      },
    ],
    correctOptionId: "c",
  },

  {
    id: "q651",
    prompt:
      "A company creates operations data and stores the data in an Amazon S3 bucket. For the company's annual audit, an external consultant needs to access an annual report that is stored in the S3 bucket. The external consultant needs to access the report for 7 days. The company must implement a solution to allow the external consultant access to only the report. Which solution will meet these requirements with the MOST operational efficiency?",
    options: [
      {
        id: "a",
        text: "Create a new S3 bucket that is configured to host a public static website. Migrate the operations data to the new S3 bucket. Share the S3 website URL with the external consultant.",
      },
      {
        id: "b",
        text: "Enable public access to the S3 bucket for 7 days. Remove access to the S3 bucket when the external consultant completes the audit.",
      },
      {
        id: "c",
        text: "Create a new IAM user that has access to the report in the S3 bucket. Provide the access keys to the external consultant. Revoke the access keys after 7 days.",
      },
      {
        id: "d",
        text: "Generate a presigned URL that has the required access to the location of the report on the S3 bucket. Share the presigned URL with the external consultant.",
      },
    ],
    correctOptionId: "d",
  },

  {
    id: "q652",
    prompt:
      "A company plans to run a high performance computing (HPC) workload on Amazon EC2 Instances. The workload requires low-latency network performance and high network throughput with tightly coupled node-to-node communication. Which solution will meet these requirements?",
    options: [
      {
        id: "a",
        text: "Configure the EC2 instances to be part of a cluster placement group.",
      },
      {
        id: "b",
        text: "Launch the EC2 instances with Dedicated Instance tenancy.",
      },
      { id: "c", text: "Launch the EC2 instances as Spot Instances." },
      {
        id: "d",
        text: "Configure an On-Demand Capacity Reservation when the EC2 instances are launched.",
      },
    ],
    correctOptionId: "a",
  },

  {
    id: "q653",
    prompt:
      "A company has primary and secondary data centers that are 500 miles (804.7 km) apart and interconnected with high-speed fiber-optic cable. The company needs a highly available and secure network connection between its data centers and a VPC on AWS for a mission-critical workload. A solutions architect must choose a connection solution that provides maximum resiliency. Which solution meets these requirements?",
    options: [
      {
        id: "a",
        text: "Two AWS Direct Connect connections from the primary data center terminating at two Direct Connect locations on two separate devices.",
      },
      {
        id: "b",
        text: "A single AWS Direct Connect connection from each of the primary and secondary data centers terminating at one Direct Connect location on the same device.",
      },
      {
        id: "c",
        text: "Two AWS Direct Connect connections from each of the primary and secondary data centers terminating at two Direct Connect locations on two separate devices.",
      },
      {
        id: "d",
        text: "A single AWS Direct Connect connection from each of the primary and secondary data centers terminating at one Direct Connect location on two separate devices.",
      },
    ],
    correctOptionId: "c",
  },

  {
    id: "q654",
    prompt:
      "A company runs several Amazon RDS for Oracle On-Demand DB instances that have high utilization. The RDS DB instances run in member accounts that are in an organization in AWS Organizations. The company's finance team has access to the organization's management account and member accounts. The finance team wants to find ways to optimize costs by using AWS Trusted Advisor. Which combination of steps will meet these requirements? (Choose two.)",
    options: [
      {
        id: "a",
        text: "Use the Trusted Advisor recommendations in the management account.",
      },
      {
        id: "b",
        text: "Use the Trusted Advisor recommendations in the member accounts where the RDS DB instances are running.",
      },
      {
        id: "c",
        text: "Review the Trusted Advisor checks for Amazon RDS Reserved Instance Optimization.",
      },
      {
        id: "d",
        text: "Review the Trusted Advisor checks for Amazon RDS Idle DB Instances.",
      },
      {
        id: "e",
        text: "Review the Trusted Advisor checks for compute optimization. Crosscheck the results by using AWS Compute Optimizer.",
      },
    ],
    correctOptionId: "a,c",
  },

  {
    id: "q655",
    prompt:
      "A solutions architect is creating an application. The application will run on Amazon EC2 instances in private subnets across multiple Availability Zones in a VPC. The EC2 instances will frequently access large files that contain confidential information. These files are stored in Amazon S3 buckets for processing. The solutions architect must optimize the network architecture to minimize data transfer costs. What should the solutions architect do to meet these requirements?",
    options: [
      {
        id: "a",
        text: "Create a gateway endpoint for Amazon S3 in the VPC. In the route tables for the private subnets, add an entry for the gateway endpoint.",
      },
      {
        id: "b",
        text: "Create a single NAT gateway in a public subnet. In the route tables for the private subnets, add a default route that points to the NAT gateway.",
      },
      {
        id: "c",
        text: "Create an AWS PrivateLink interface endpoint for Amazon S3 in the VPC. In the route tables for the private subnets, add an entry for the interface endpoint.",
      },
      {
        id: "d",
        text: "Create one NAT gateway for each Availability Zone in public subnets. In each of the route tables for the private subnets, add a default route that points to the NAT gateway in the same Availability Zone.",
      },
    ],
    correctOptionId: "a",
  },

  {
    id: "q656",
    prompt:
      "A company wants to relocate its on-premises MySQL database to AWS. The database accepts regular imports from a client-facing application, which causes a high volume of write operations. The company is concerned that the amount of traffic might be causing performance issues within the application. How should a solutions architect design the architecture on AWS?",
    options: [
      {
        id: "a",
        text: "Provision an Amazon RDS for MySQL DB instance with Provisioned IOPS SSD storage. Monitor write operation metrics by using Amazon CloudWatch. Adjust the provisioned IOPS if necessary.",
      },
      {
        id: "b",
        text: "Provision an Amazon RDS for MySQL DB instance with General Purpose SSD storage. Place an Amazon ElastiCache cluster in front of the DB instance. Configure the application to query ElastiCache instead.",
      },
      {
        id: "c",
        text: "Provision an Amazon DocumentDB (with MongoDB compatibility) instance with a memory optimized instance type. Monitor Amazon CloudWatch for performance-related issues. Change the instance class if necessary.",
      },
      {
        id: "d",
        text: "Provision an Amazon Elastic File System (Amazon EFS) file system in General Purpose performance mode. Monitor Amazon CloudWatch for IOPS bottlenecks. Change to Provisioned Throughput performance mode if necessary.",
      },
    ],
    correctOptionId: "a",
  },

  {
    id: "q657",
    prompt:
      "A company runs an application in the AWS Cloud that generates sensitive archival data files. The company wants to rearchitect the application's data storage. The company wants to encrypt the data files and to ensure that third parties do not have access to the data before the data is encrypted and sent to AWS. The company has already created an Amazon S3 bucket. Which solution will meet these requirements?",
    options: [
      {
        id: "a",
        text: "Configure the S3 bucket to use client-side encryption with an Amazon S3 managed encryption key. Configure the application to use the S3 bucket to store the archival files.",
      },
      {
        id: "b",
        text: "Configure the S3 bucket to use server-side encryption with AWS KMS keys (SSE-KMS). Configure the application to use the S3 bucket to store the archival files.",
      },
      {
        id: "c",
        text: "Configure the S3 bucket to use dual-layer server-side encryption with AWS KMS keys (SSE-KMS). Configure the application to use the S3 bucket to store the archival files.",
      },
      {
        id: "d",
        text: "Configure the application to use client-side encryption with a key stored in AWS Key Management Service (AWS KMS). Configure the application to store the archival files in the S3 bucket.",
      },
    ],
    correctOptionId: "d",
  },

  {
    id: "q658",
    prompt:
      "A company uses Amazon RDS with default backup settings for its database tier. The company needs to make a daily backup of the database to meet regulatory requirements. The company must retain the backups for 30 days. Which solution will meet these requirements with the LEAST operational overhead?",
    options: [
      {
        id: "a",
        text: "Write an AWS Lambda function to create an RDS snapshot every day.",
      },
      {
        id: "b",
        text: "Modify the RDS database to have a retention period of 30 days for automated backups.",
      },
      {
        id: "c",
        text: "Use AWS Systems Manager Maintenance Windows to modify the RDS backup retention period.",
      },
      {
        id: "d",
        text: "Create a manual snapshot every day by using the AWS CLI. Modify the RDS backup retention period.",
      },
    ],
    correctOptionId: "b",
  },

  {
    id: "q659",
    prompt:
      "A company is running a multi-tier web application on AWS. The application runs its database tier on Amazon Aurora MySQL. The application and database tiers are in the us-east-1 Region. A database administrator who regularly monitors the Aurora DB cluster finds that an intermittent increase in read traffic is creating high CPUutilization on the read replica and causing increased read latency of the application. What should a solutions architect do to improve read scalability?",
    options: [
      { id: "a", text: "Reboot the Aurora DB cluster." },
      { id: "b", text: "Create a cross-Region read replica" },
      { id: "c", text: "Increase the instance class of the read replica." },
      { id: "d", text: "Configure Aurora Auto Scaling for the read replica." },
    ],
    correctOptionId: "d",
  },

  {
    id: "q660",
    prompt:
      "A company that runs its application on AWS uses an Amazon Aurora DB cluster as its database. During peak usage hours when multiple users access and read the data, the monitoring system shoes degradation of database performancefor write queries. The company wants to increase the scalability of the application to meet peak usage demands. Which solution will meet these requirements MOST cost effectively?",
    options: [
      {
        id: "a",
        text: "Create a second Aurora DB cluster. Configure a copy job to replicate the users' data to the new database. Update the application to use the second database to read the data.",
      },
      {
        id: "b",
        text: "Create an Amazon DynamoDB Accelerator (DAX) cluster in front of the existing Aurora DB cluster. Update the application to use the DAX cluster for read-only queries. Write data directly to the Aurora DB cluster.",
      },
      {
        id: "c",
        text: "Create an Aurora read replica in the existing Aurora DB clu ster. Update tyhe applicatio nto uyser the replica endpoint for read only queries and to use the cluster endpoint for write queries.",
      },
      {
        id: "d",
        text: "Create an Amazon Redshift cluster. Copy the users' data to the Redshift cluster. Update the application to connect to the Redshift cluster and to perform read-only queries on the Redshift cluster.",
      },
    ],
    correctOptionId: "c",
  },

  {
    id: "q661",
    prompt:
      "A company's near-real-time streaming application is running on AWS. As the data is ingested, a job runs on the data and takes 30 minutes to complete. The workload frequently experiences high latency due to large amounts of incoming data. A solutions architect needs to design a scalable and serverless solution to enhance performance. Which combination of steps should the solutions architect take? (Choose two.)",
    options: [
      { id: "a", text: "Use Amazon Kinesis Data Firehose to ingest the data." },
      {
        id: "b",
        text: "Use AWS Lambda with AWS Step Functions to process the data.",
      },
      {
        id: "c",
        text: "Use AWS Database Migration Service (AWS DMS) to ingest the data.",
      },
      {
        id: "d",
        text: "Use Amazon EC2 instances in an Auto Scaling group to process the data.",
      },
      {
        id: "e",
        text: "Use AWS Fargate with Amazon Elastic Container Service (Amazon ECS) to process the data.",
      },
    ],
    correctOptionId: "a,e",
  },

  {
    id: "q662",
    prompt:
      "A company runs a web application on multiple Amazon EC2 instances in a VPC. The application needs to write sensitive data to an Amazon S3 bucket. The data cannot be sent over the public internet. Which solution will meet these requirements?",
    options: [
      {
        id: "a",
        text: "Create a gateway VPC endpoint for Amazon S3. Create a route in the VPC route table to the endpoint.",
      },
      {
        id: "b",
        text: "Create an internal Network Load Balancer that has the S3 bucket as the target.",
      },
      {
        id: "c",
        text: "Deploy the S3 bucket inside the VPC. Create a route in the VPC route table to the bucket.",
      },
      {
        id: "d",
        text: "Create an AWS Direct Connect connection between the VPC and an S3 regional endpoint.",
      },
    ],
    correctOptionId: "a",
  },

  {
    id: "q663",
    prompt:
      "A company runs its production workload on Amazon EC2 instances with Amazon Elastic Block Store (Amazon EBS) volumes. A solutions architect needs to analyze the current EBS volume cost and to recommend optimizations. The recommendations need to include estimated monthly saving opportunities. Which solution will meet these requirements?",
    options: [
      {
        id: "a",
        text: "Use Amazon Inspector reporting to generate EBS volume recommendations for optimization.",
      },
      {
        id: "b",
        text: "Use AWS Systems Manager reporting to determine EBS volume recommendations for optimization.",
      },
      {
        id: "c",
        text: "Use Amazon CloudWatch metrics reporting to determine EBS volume recommendations for optimization.",
      },
      {
        id: "d",
        text: "Use AWS Compute Optimizer to generate EBS volume recommendations for optimization.",
      },
    ],
    correctOptionId: "d",
  },

  {
    id: "q664",
    prompt:
      "A global company runs its workloads on AWS. The company's application uses Amazon S3 buckets across AWS Regions for sensitive data storage and analysis. The company stores millions of objects in multiple S3 buckets daily. The company wants to identify all S3 buckets that are not versioning-enabled. Which solution will meet these requirements?",
    options: [
      {
        id: "a",
        text: "Use AWS Config managed rule to identify S3 bucket that is not version controlled",
      },
      {
        id: "b",
        text: "Use Amazon S3 Storage Lens to identify all S3 buckets that are not versioning-enabled across Regions.",
      },
      {
        id: "c",
        text: "Enable IAM Access Analyzer for S3 to identify all S3 buckets that are not versioning-enabled across Regions.",
      },
      {
        id: "d",
        text: "Create an S3 Multi-Region Access Point to identify all S3 buckets that are not versioning-enabled across Regions.",
      },
    ],
    correctOptionId: "b",
  },

  {
    id: "q665",
    prompt:
      "A company wants to enhance its ecommerce order-processing application that is deployed on AWS. The application must process each order exactly once without affecting the customer experience during unpredictable traffic surges. Which solution will meet these requirements?",
    options: [
      {
        id: "a",
        text: "Create an Amazon Simple Queue Service (Amazon SQS) FIFO queue. Put all the orders in the SQS queue. Configure an AWS Lambda function as the target to process the orders.",
      },
      {
        id: "b",
        text: "Create an Amazon Simple Notification Service (Amazon SNS) standard topic. Publish all the orders to the SNS standard topic. Configure the application as a notification target.",
      },
      {
        id: "c",
        text: "Create a flow by using Amazon AppFlow. Send the orders to the flow. Configure an AWS Lambda function as the target to process the orders.",
      },
      {
        id: "d",
        text: "Configure AWS X-Ray in the application to track the order requests. Configure the application to process the orders by pulling the orders from Amazon CloudWatch.",
      },
    ],
    correctOptionId: "a",
  },

  {
    id: "q666",
    prompt:
      "A company has two AWS accounts: Production and Development. There are code changes ready in the Development account to push to the Production account. In the alpha phase, only two senior developers on the development team need access to the Production account. In the beta phase, more developers might need access to perform testing as well. What should a solutions architect recommend?",
    options: [
      {
        id: "a",
        text: "Create two policy documents using the AWS Management Console in each account. Assign the policy to developers who need access.",
      },
      {
        id: "b",
        text: "Create an IAM role in the Development account. Give one IAM role access to the Production account. Allow developers to assume the role.",
      },
      {
        id: "c",
        text: "Create an IAM role in the Production account with the trust policy that specifies the Development account. Allow developers to assume the role.",
      },
      {
        id: "d",
        text: "Create an IAM group in the Production account and add it as a principal in the trust policy that specifies the Production account. Add developers to the group.",
      },
    ],
    correctOptionId: "c",
  },

  {
    id: "q667",
    prompt:
      "A company wants to restrict access to the content of its web application. The company needs to protect the content by using authorization techniques that are available on AWS. The company also wants to implement a serverless architecture for authorization and authentication that has low login latency. The solution must integrate with the web application and serve web content globally. The application currently has a small user base, but the company expects the application's user base to increase. Which solution will meet these requirements?",
    options: [
      {
        id: "a",
        text: "Configure Amazon Cognito for authentication. Implement Lambda@Edge for authorization. Configure Amazon CloudFront to serve the web application globally.",
      },
      {
        id: "b",
        text: "Configure AWS Directory Service for Microsoft Active Directory for authentication. Implement AWS Lambda for authorization. Use an Application Load Balancer to serve the web application globally.",
      },
      {
        id: "c",
        text: "Configure Amazon Cognito for authentication. Implement AWS Lambda for authorization. Use Amazon S3 Transfer Acceleration to serve the web application globally.",
      },
      {
        id: "d",
        text: "Configure AWS Directory Service for Microsoft Active Directory for authentication. Implement Lambda@Edge for authorization. Use AWS Elastic Beanstalk to serve the web application globally.",
      },
    ],
    correctOptionId: "a",
  },

  {
    id: "q668",
    prompt:
      "A development team uses multiple AWS accounts for its development, Staging, and production environments Team members have been launching large Amazon EC2 instances that are underutilized. A solutions architect must prevent large instances from being launched in all accounts. How can the solutions architect meet this requirement with the LEAST operational overhead?",
    options: [
      {
        id: "a",
        text: "Update the IAM policies to deny the launch of large EC2 instances. Apply the policies to all users",
      },
      {
        id: "b",
        text: "Define a resource in AWS Resource Access Manager that prevents the launch of large EC2 instances.",
      },
      {
        id: "c",
        text: "Create an IAM role in each account that denies the launch of large EC2 instances. Grant the developers IAM group access to the role.",
      },
      {
        id: "d",
        text: "Create an orgainization in AWS Organizations in the managment account with the default policy. Create a Service control prolicy that denies the launch of large  EC2 instances and apply to all aws accounts.",
      },
    ],
    correctOptionId: "d",
  },

  {
    id: "q669",
    prompt:
      "A company has migrated a fleet of hundreds of on-premises virtual machines (VMs) to Amazon EC2 instances. The instances run a diverse fleet of Windows Server versions along with several Linux distributions. The company wants a solution that will automate inventory and updates of the operating systems. The company also needs a summary of common vulnerabilities of each instance for regular monthly reviews. What should a solutions architect recommend to meet these requirements?",
    options: [
      {
        id: "a",
        text: "Set up AWS Systems Manager Patch Manager to manage all the EC2 instances. Configure AWS Security Hub to produce monthly reports.",
      },
      {
        id: "b",
        text: "Set up AWS Systems Manager Patch Manager to manage all the EC2 instances. Deploy Amazon Inspector, and configure monthly reports.",
      },
      {
        id: "c",
        text: "Set up AWS Shield Advanced, and configure monthly reports. Deploy AWS Config to automate patch installations on the EC2 instances.",
      },
      {
        id: "d",
        text: "Set up Amazon GuardDuty in the account to monitor all EC2 instances. Deploy AWS Config to automate patch installations on the EC2 instances.",
      },
    ],
    correctOptionId: "b",
  },

  {
    id: "q670",
    prompt:
      "A company hosts its application in the AWS Cloud. The application runs on Amazon EC2 instances behind an Elastic Load Balancer in an Auto Scaling group and with an Amazon DynamoDB table. The company wants to ensure the application can be made available in another AWS Region with minimal downtime. What should a solutions architect do to meet these requirements with the LEAST amount of downtime?",
    options: [
      {
        id: "a",
        text: "Create an Auto Scaling group and a load balancer in the disaster recovery Region. Configure the DynamoDB table as a global table. Configure DNS failover to point to the new disaster recovery Region's load balancer.",
      },
      {
        id: "b",
        text: "Create an AWS CloudFormation template to create EC2 instances, load balancers, and DynamoDB tables to be executed when needed. Configure DNS failover to point to the new disaster recovery Region's load balancer.",
      },
      {
        id: "c",
        text: "Create an AWS CloudFormation template to create EC2 instances and a load balancer to be executed when needed. Configure the DynamoDB table as a global table. Configure DNS failover to point to the new disaster recovery Region's load balancer.",
      },
      {
        id: "d",
        text: "Create an Auto Scaling group and load balancer in the disaster recovery Region. Configure the DynamoDB table as a global table. Create an Amazon CloudWatch alarm to trigger and AWS Lambda function that updates Amazon Route 53 pointing to the disaster recovery load balancer.",
      },
    ],
    correctOptionId: "a",
  },

  {
    id: "q671",
    prompt:
      "A company runs an application on Amazon EC2 instances in a private subnet. The application needs to store and retrieve data in Amazon S3 buckets. According to regulatory requirements, the data must not travel across the public internet. What should a solutions architect do to meet these requirements MOST cost-effectively?",
    options: [
      { id: "a", text: "Deploy a NAT gateway to access the S3 buckets." },
      { id: "b", text: "Deploy AWS Storage Gateway to access the S3 buckets." },
      {
        id: "c",
        text: "Deploy an S3 interface endpoint to access the S3 buckets.",
      },
      {
        id: "d",
        text: "Deploy an S3 gateway endpoint to access the S3 buckets.",
      },
    ],
    correctOptionId: "d",
  },

  {
    id: "q672",
    prompt:
      "A company hosts an application on Amazon EC2 instances that run in a single Availability Zone. The application is accessible by using the transport layer of the Open Systems Interconnection (OSI) model. The company needs the application architecture to have high availability. Which combination of steps will meet these requirements MOST cost-effectively? (Choose two.)",
    options: [
      {
        id: "a",
        text: "Configure new EC2 instances in a different Availability Zone. Use Amazon Route 53 to route traffic to all instances.",
      },
      {
        id: "b",
        text: "Configure a Network Load Balancer in front of the EC2 instances.",
      },
      {
        id: "c",
        text: "Configure a Network Load Balancer for TCP traffic to the instances. Configure an Application Load Balancer for HTTP and HTTPS traffic to the instances.",
      },
      {
        id: "d",
        text: "Create an Auto Scaling group for the EC2 instances. Configure the Auto Scaling group to use multiple Availability Zones. Configure the Auto Scaling group to run application health checks on the instances.",
      },
      {
        id: "e",
        text: "Create an Amazon CloudWatch alarm. Configure the alarm to restart EC2 instances that transition to a stopped state.",
      },
    ],
    correctOptionId: "b,d",
  },

  {
    id: "q673",
    prompt:
      "A company hosts its static website by using Amazon S3. The company wants to add a contact form to its webpage. The contact form will have dynamic server-side components for users to input their name, email address, phone number, and user message. The company anticipates that there will be fewer than 100 site visits each month. Which solution will meet these requirements MOST cost-effectively?",
    options: [
      {
        id: "a",
        text: "Host the dynamic contact form in Amazon Elastic Container Service (Amazon ECS). Set up Amazon Simple Email Service (Amazon SES) to connect to a third-party email provider.",
      },
      {
        id: "b",
        text: "Create an Amazon API Gateway endpoint that returns the contact form from an AWS Lambda function. Configure another Lambda function on the API Gateway to publish a message to an Amazon Simple Notification Service (Amazon SNS) topic.",
      },
      {
        id: "c",
        text: "Host the website by using AWS Amplify Hosting for static content and dynamic content. Use server-side scripting to build the contact form. Configure Amazon Simple Queue Service (Amazon SQS) to deliver the message to the company.",
      },
      {
        id: "d",
        text: "Migrate the website from Amazon S3 to Amazon EC2 instances that run Windows Server. Use Internet Information Services (IIS) for Windows Server to host the webpage. Use client-side scripting to build the contact form. Integrate the form with Amazon WorkMail.",
      },
    ],
    correctOptionId: "b",
  },

  {
    id: "q674",
    prompt:
      "A company uses AWS Organizations to create dedicated AWS accounts for each business unit to manage each business unit's account independently upon request. The root email recipient missed a notification that was sent to the root user email address of one account. The company wants to ensure that all future notifications are not missed. Future notifications must be limited to account administrators.Which solution will meet these requirements?",
    options: [
      {
        id: "a",
        text: "Configure the company's email server to forward notification email messages that are sent to the AWS account root user email address to all users in the organization.",
      },
      {
        id: "b",
        text: "Configure all AWS account root user email addresses as distribution lists that go to a few administrators who can respond to alerts. Configure AWS account alternate contacts in the AWS Organizations console or programmatically.",
      },
      {
        id: "c",
        text: "Configure all AWS account root user email messages to be sent to one administrator who is responsible for monitoring alerts and forwarding those alerts to the appropriate groups.",
      },
      {
        id: "d",
        text: "Configure all existing AWS accounts and all newly created accounts to use the same root user email address. Configure AWS account alternate contacts in the AWS Organizations console or programmatically.",
      },
    ],
    correctOptionId: "b",
  },

  {
    id: "q675",
    prompt:
      "A company runs an ecommerce application on AWS. Amazon EC2 instances process purchases and store the purchase details in an Amazon Aurora PostgreSQL DB cluster. Customers are experiencing application timeouts during times of peak usage. A solutions architect needs to rearchitect the application so that the application can scale to meet peak usage demands. Which combination of actions will meet these requirements MOST cost-effectively? (Choose two.)",
    options: [
      {
        id: "a",
        text: "Configure an Auto Scaling group of new EC2 instances to retry the purchases until the processing is complete. Update the applications to connect to the DB cluster by using Amazon RDS Proxy.",
      },
      {
        id: "b",
        text: "Configure the application to use an Amazon ElastiCache cluster in front of the Aurora PostgreSQL DB cluster.",
      },
      {
        id: "c",
        text: "Update the application to send the purchase requests to an Amazon Simple Queue Service (Amazon SQS) queue. Configure an Auto Scaling group of new EC2 instances that read from the SQS queue.",
      },
      {
        id: "d",
        text: "Configure an AWS Lambda function to retry the ticket purchases until the processing is complete.",
      },
      {
        id: "e",
        text: "Configure an Amazon AP! Gateway REST API with a usage plan.",
      },
    ],
    correctOptionId: "a,c",
  },

  {
    id: "q676",
    prompt:
      "A company that uses AWS Organizations runs 150 applications across 30 different AWS accounts. The company used AWS Cost and Usage Report to create a new report in the management account. The report is delivered to an Amazon S3 bucket that is replicated to a bucket in the data collection account. The company's senior leadership wants to view a custom dashboard that provides NAT gateway costs each day starting at the beginning of the current month. Which solution will meet these requirements?",
    options: [
      {
        id: "a",
        text: "Share an Amazon QuickSight dashboard that includes the requested table visual. Configure QuickSight to use AWS DataSync to query the new report.",
      },
      {
        id: "b",
        text: "Share an Amazon QuickSight dashboard that includes the requested table visual. Configure QuickSight to use Amazon Athena to query the new report.",
      },
      {
        id: "c",
        text: "Share an Amazon CloudWatch dashboard that includes the requested table visual. Configure CloudWatch to use AWS DataSync to query the new report.",
      },
      {
        id: "d",
        text: "Share an Amazon CloudWatch dashboard that includes the requested table visual. Configure CloudWatch to use Amazon Athena to query the new report.",
      },
    ],
    correctOptionId: "b",
  },

  {
    id: "q677",
    prompt:
      "A company is hosting a high-traffic static website on Amazon S3 with an Amazon CloudFront distribution that has a default TTL of 0 seconds. The company wants to implement caching to improve performance for the website. However, the company also wants to ensure that stale content is not served for more than a few minutes after a deployment. Which combination of caching methods should a solutions architect implement to meet these requirements? (Choose two.)",
    options: [
      { id: "a", text: "Set the CloudFront default TTL to 2 minutes." },
      { id: "b", text: "Set a default TTL of 2 minutes on the S3 bucket." },
      {
        id: "c",
        text: "Add a Cache-Control private directive to the objects in Amazon S3.",
      },
      {
        id: "d",
        text: "Create an AWS Lambda@Edge function to add an Expires header to HTTP responses. Configure the function to run on viewer response.",
      },
      {
        id: "e",
        text: "Add a Cache-Control max-age directive of 24 hours to the objects in Amazon S3. On deployment, create a CloudFront invalidation to clear any changed files from edge caches.",
      },
    ],
    correctOptionId: "a,e",
  },

  {
    id: "q678",
    prompt:
      "A company uses Amazon EC2 instances and AWS Lambda functions to run its application. The company has VPCs with public subnets and private subnets in its AWS account. The EC2 instances run in a private subnet in one of the VPCs. The Lambda functions need direct network access to the EC2 instances for the application to work. The application will run for at least 1 year. The company expects the number of Lambda functions that the application uses to increase during that time. The company wants to maximize its savings on all application resources and to keep network latency between the services low. Which solution will meet these requirements?",
    options: [
      {
        id: "a",
        text: "Purchase an EC2 Instance Savings Plan Optimize the Lambda functions' duration and memory usage and the number of invocations. Connect the Lambda functions to the private subnet that contains the EC2 instances.",
      },
      {
        id: "b",
        text: "Purchase an EC2 Instance Savings Plan Optimize the Lambda functions' duration and memory usage, the number of invocations, and the amount of data that is transferred. Connect the Lambda functions to a public subnet in the same VPC where the EC2 instances run.",
      },
      {
        id: "c",
        text: "Purchase a Compute Savings Plan. Optimize the Lambda functions' duration and memory usage, the number of invocations, and the amount of data that is transferred. Connect the Lambda functions to the private subnet that contains the EC2 instances.",
      },
      {
        id: "d",
        text: "Purchase a Compute Savings Plan. Optimize the Lambda functions' duration and memory usage, the number of invocations, and the amount of data that is transferred. Keep the Lambda functions in the Lambda service VPC.",
      },
    ],
    correctOptionId: "c",
  },

  {
    id: "q679",
    prompt:
      "A company hosts a data lake on AWS. The data lake consists of data in Amazon S3 and Amazon RDS for PostgreSQL. The company needs a reporting solution that provides data visualization and includes all the data sources within the data lake. Only the company's management team should have full access to all the visualizations. The rest of the company should have only limited access. Which solution will meet these requirements?",
    options: [
      {
        id: "a",
        text: "Create an analysis in Amazon QuickSight. Connect all the data sources and create new datasets. Publish dashboards to visualize the data. Share the dashboards with the appropriate IAM roles.",
      },
      {
        id: "b",
        text: "Create an analysis in Amazon QuickSight. Connect all the data sources and create new datasets. Publish dashboards to visualize the data. Share the dashboards with the appropriate users and groups.",
      },
      {
        id: "c",
        text: "Create an AWS Glue table and crawler for the data in Amazon S3. Create an AWS Glue extract, transform, and load (ETL) job to produce reports. Publish the reports to Amazon S3. Use S3 bucket policies to limit access to the reports.",
      },
      {
        id: "d",
        text: "Create an AWS Glue table and crawler for the data in Amazon S3. Use Amazon Athena Federated Query to access data within Amazon RDS for PostgreSQL. Generate reports by using Amazon Athena. Publish the reports to Amazon S3. Use S3 bucket policies to limit access to the reports.",
      },
    ],
    correctOptionId: "a",
  },

  {
    id: "q680",
    prompt:
      "A company runs an ecommerce application on Amazon EC2 instances behind an Application Load Balancer. The instances run in an Amazon EC2 Auto Scaling group across multiple Availability Zones. The Auto Scaling group scales based on CPU utilization metrics. The ecommerce application stores the transaction data in a MySQL 8.0 database that is hosted on a large EC2 instance. The database's performance degrades quickly as application load increases. The application handles more read requests than write transactions. The company wants a solution that will automatically scale the database to meet the demand of unpredictable read workloads while maintaining high availability. Which solution will meet these requirements?",
    options: [
      {
        id: "a",
        text: "Use Amazon Redshift with a single node for leader and compute functionality.",
      },
      {
        id: "b",
        text: "Use Amazon RDS with a Single-AZ deployment Configure Amazon RDS to add reader instances in a different Availability Zone.",
      },
      {
        id: "c",
        text: "Use Amazon Aurora with a Multi-AZ deployment. Configure Aurora Auto Scaling with Aurora Replicas.",
      },
      {
        id: "d",
        text: "Use Amazon ElastiCache for Memcached with EC2 Spot Instances.",
      },
    ],
    correctOptionId: "c",
  },

  {
    id: "q681",
    prompt:
      "A company has an application that ingests incoming messages. Dozens of other applications and microservices then quickly consume these messages. The number of messages varies drastically and sometimes increases suddenly to 100,000 each second. The company wants to decouple the solution and increase scalability. Which solution meets these requirements?",
    options: [
      {
        id: "a",
        text: "Persist the messages to Amazon Kinesis Data Analytics. Configure the consumer applications to read and process the messages.",
      },
      {
        id: "b",
        text: "Deploy the ingestion application on Amazon EC2 instances in an Auto Scaling group to scale the number of EC2 instances based on CPU metrics.",
      },
      {
        id: "c",
        text: "Write the messages to Amazon Kinesis Data Streams with a single shard. Use an AWS Lambda function to preprocess messages and store them in Amazon DynamoDB. Configure the consumer applications to read from DynamoDB to process the messages.",
      },
      {
        id: "d",
        text: "Publish the messages to an Amazon Simple Notification Service (Amazon SNS) topic with multiple Amazon Simple Queue Service (Amazon SOS) subscriptions. Configure the consumer applications to process the messages from the queues.",
      },
    ],
    correctOptionId: "d",
  },

  {
    id: "q682",
    prompt:
      "An application development team is designing a microservice that will convert large images to smaller, compressed images. When a user uploads an image through the web interface, the microservice should store the image in an Amazon S3 bucket, process and compress the image with an AWS Lambda function, and store the image in its compressed form in a different S3 bucket. A solutions architect needs to design a solution that uses durable, stateless components to process the images automatically. Which combination of actions will meet these requirements? (Choose two.)",
    options: [
      {
        id: "a",
        text: "Create an Amazon Simple Queue Service (Amazon SQS) queue. Configure the S3 bucket to send a notification to the SQS queue when an image is uploaded to the S3 bucket.",
      },
      {
        id: "b",
        text: "Configure the Lambda function to use the Amazon Simple Queue Service (Amazon SQS) queue as the invocation source. When the SQS message is successfully processed, delete the message in the queue.",
      },
      {
        id: "c",
        text: "Configure the Lambda function to monitor the S3 bucket for new uploads. When an uploaded image is detected, write the file name to a text file in memory and use the text file to keep track of the images that were processed.",
      },
      {
        id: "d",
        text: "Launch an Amazon EC2 instance to monitor an Amazon Simple Queue Service (Amazon SQS) queue. When items are added to the queue, log the file name in a text file on the EC2 instance and invoke the Lambda function.",
      },
      {
        id: "e",
        text: "Configure an Amazon EventBridge (Amazon CloudWatch Events) event to monitor the S3 bucket. When an image is uploaded, send an alert to an Amazon ample Notification Service (Amazon SNS) topic with the application owner's email address for further processing.",
      },
    ],
    correctOptionId: "a,b",
  },

  {
    id: "q683",
    prompt:
      "A company has a three-tier web application that is deployed on AWS. The web servers are deployed in a public subnet in a VPC. The application servers and database servers are deployed in private subnets in the same VPC. The company has deployed a third-party virtual firewall appliance from AWS Marketplace in an inspection VPC. The appliance is configured with an IP interface that can accept IP packets. A solutions architect needs to integrate the web application with the appliance to inspect all traffic to the application before the traffic reaches the web server. Which solution will meet these requirements with the LEAST operational overhead?",
    options: [
      {
        id: "a",
        text: "Create a Network Load Balancer in the public subnet of the application's VPC to route the traffic to the appliance for packet inspection.",
      },
      {
        id: "b",
        text: "Create an Application Load Balancer in the public subnet of the application's VPC to route the traffic to the appliance for packet inspection.",
      },
      {
        id: "c",
        text: "Deploy a transit gateway in the inspection VPConfigure route tables to route the incoming packets through the transit gateway.",
      },
      {
        id: "d",
        text: "Deploy a Gateway Load Balancer in the inspection VPC. Create a Gateway Load Balancer endpoint to receive the incoming packets and forward the packets to the appliance.",
      },
    ],
    correctOptionId: "d",
  },

  {
    id: "q684",
    prompt:
      "A company wants to improve its ability to clone large amounts of production data into a test environment in the same AWS Region. The data is stored in Amazon EC2 instances on Amazon Elastic Block Store (Amazon EBS) volumes. Modifications to the cloned data must not affect the production environment. The software that accesses this data requires consistently high I/O performance. A solutions architect needs to minimize the time that is required to clone the production data into the test environment. Which solution will meet these requirements?",
    options: [
      {
        id: "a",
        text: "Take EBS snapshots of the production EBS volumes. Restore the snapshots onto EC2 instance store volumes in the test environment.",
      },
      {
        id: "b",
        text: "Configure the production EBS volumes to use the EBS Multi-Attach feature. Take EBS snapshots of the production EBS volumes. Attach the production EBS volumes to the EC2 instances in the test environment.",
      },
      {
        id: "c",
        text: "Take EBS snapshots of the production EBS volumes. Create and initialize new EBS volumes. Attach the new EBS volumes to EC2 instances in the test environment before restoring the volumes from the production EBS snapshots.",
      },
      {
        id: "d",
        text: "Take EBS snapshots of the production EBS volumes. Turn on the EBS fast snapshot restore feature on the EBS snapshots. Restore the snapshots into new EBS volumes. Attach the new EBS volumes to EC2 instances in the test environment.",
      },
    ],
    correctOptionId: "d",
  },

  {
    id: "q685",
    prompt:
      "An ecommerce company wants to launch a one-deal-a-day website on AWS. Each day will feature exactly one product on sale for a period of 24 hours. The company wants to be able to handle millions of requests each hour with millisecond latency during peak hours. Which solution will meet these requirements with the LEAST operational overhead?",
    options: [
      {
        id: "a",
        text: "Use Amazon S3 to host the full website in different S3 buckets. Add Amazon CloudFront distributions. Set the S3 buckets as origins for the distributions. Store the order data in Amazon S3.",
      },
      {
        id: "b",
        text: "Deploy the full website on Amazon EC2 instances that run in Auto Scaling groups across multiple Availability Zones. Add an Application Load Balancer (ALB) to distribute the website traffic. Add another ALB for the backend APIs. Store the data in Amazon RDS for MySQL.",
      },
      {
        id: "c",
        text: "Migrate the full application to run in containers. Host the containers on Amazon Elastic Kubernetes Service (Amazon EKS). Use the Kubernetes Cluster Autoscaler to increase and decrease the number of pods to process bursts in traffic. Store the data in Amazon RDS for MySQL.",
      },
      {
        id: "d",
        text: "Use an Amazon S3 bucket to host the website's static content. Deploy an Amazon CloudFront distribution. Set the S3 bucket as the origin. Use Amazon API Gateway and AWS Lambda functions for the backend APIs. Store the data in Amazon DynamoDB.",
      },
    ],
    correctOptionId: "d",
  },

  {
    id: "q686",
    prompt:
      "A solutions architect is using Amazon S3 to design the storage architecture of a new digital media application. The media files must be resilient to the loss of an Availability Zone. Some files are accessed frequently while other files are rarely accessed in an unpredictable pattern. The solutions architect must minimize the costs of storing and retrieving the media files. Which storage option meets these requirements?",
    options: [
      { id: "a", text: "S3 Standard." },
      { id: "b", text: "S3 Intelligent-Tiering." },
      { id: "c", text: "S3 Standard-Infrequent Access (S3 Standard-IA)." },
      { id: "d", text: "S3 One Zone-Infrequent Access (S3 One Zone-IA)." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q687",
    prompt:
      "A company is storing backup files by using Amazon S3 Standard storage. The files are accessed frequently for 1 month. However, the files are not accessed after 1 month. The company must keep the files indefinitely. Which storage solution will meet these requirements MOST cost-effectively?",
    options: [
      {
        id: "a",
        text: "Configure S3 Intelligent-Tiering to automatically migrate objects.",
      },
      {
        id: "b",
        text: "Create an S3 Lifecycle configuration to transition objects from S3 Standard to S3 Glacier Deep Archive after 1 month.",
      },
      {
        id: "c",
        text: "Create an S3 Lifecycle configuration to transition objects from S3 Standard to S3 Standard-Infrequent Access (S3 Standard-IA) after 1 month.",
      },
      {
        id: "d",
        text: "Create an S3 Lifecycle configuration to transition objects from S3 Standard to S3 One Zone-Infrequent Access (S3 One Zone-IA) after 1 month.",
      },
    ],
    correctOptionId: "b",
  },

  {
    id: "q688",
    prompt:
      "A company observes an increase in Amazon EC2 costs in its most recent bill. The billing team notices unwanted vertical scaling of instance types for a couple of EC2 instances. A solutions architect needs to create a graph comparing the last 2 months of EC2 costs and perform an in-depth analysis to identify the root cause of the vertical scaling. How should the solutions architect generate the information with the LEAST operational overhead?",
    options: [
      {
        id: "a",
        text: "Use AWS Budgets to create a budget report and compare EC2 costs based on instance types.",
      },
      {
        id: "b",
        text: "Use Cost Explorer's granular filtering feature to perform an in-depth analysis of EC2 costs based on instance types.",
      },
      {
        id: "c",
        text: "Use graphs from the AWS Billing and Cost Management dashboard to compare EC2 costs based on instance types for the last 2 months.",
      },
      {
        id: "d",
        text: "Use AWS Cost and Usage Reports to create a report and send it to an Amazon S3 bucket. Use Amazon QuickSight with Amazon S3 as a source to generate an interactive graph based on instance types.",
      },
    ],
    correctOptionId: "b",
  },

  {
    id: "q689",
    prompt:
      "A company is designing an application. The application uses an AWS Lambda function to receive information through Amazon API Gateway and to store the information in an Amazon Aurora PostgreSQL database. During the proof-of-concept stage, the company has to increase the Lambda quotas significantly to handle the high volumes of data that the company needs to load into the database. A solutions architect must recommend a new design to improve scalability and minimize the configuration effort. Which solution will meet these requirements?",
    options: [
      {
        id: "a",
        text: "Refactor the Lambda function code to Apache Tomcat code that runs on Amazon EC2 instances. Connect the database by using native Java Database Connectivity (JDBC) drivers.",
      },
      {
        id: "b",
        text: "Change the platform from Aurora to Amazon DynamoDProvision a DynamoDB Accelerator (DAX) cluster. Use the DAX client SDK to point the existing DynamoDB API calls at the DAX cluster.",
      },
      {
        id: "c",
        text: "Set up two Lambda functions. Configure one function to receive the information. Configure the other function to load the information into the database. Integrate the Lambda functions by using Amazon Simple Notification",
      },
      {
        id: "d",
        text: "Set up two Lambda functions. Configure one function to receive the information. Configure the other function to load the information into the database. Integrate the Lambda functions by using an Amazon Simple Queue Service (Amazon SQS) queue.",
      },
    ],
    correctOptionId: "d",
  },

  {
    id: "q690",
    prompt:
      "A company needs to review its AWS Cloud deployment to ensure that its Amazon S3 buckets do not have unauthorized configuration changes. What should a solutions architect do to accomplish this goal?",
    options: [
      { id: "a", text: "Turn on AWS Config with the appropriate rules." },
      {
        id: "b",
        text: "Turn on AWS Trusted Advisor with the appropriate checks.",
      },
      {
        id: "c",
        text: "Turn on Amazon Inspector with the appropriate assessment template.",
      },
      {
        id: "d",
        text: "Turn on Amazon S3 server access logging. Configure Amazon EventBridge (Amazon Cloud Watch Events).",
      },
    ],
    correctOptionId: "a",
  },

  {
    id: "q691",
    prompt:
      "A company is launching a new application and will display application metrics on an Amazon CloudWatch dashboard. The company's product manager needs to access this dashboard periodically. The product manager does not have an AWS account. A solutions architect must provide access to the product manager by following the principle of least privilege. Which solution will meet these requirements?",
    options: [
      {
        id: "a",
        text: "Share the dashboard from the CloudWatch console. Enter the product manager's email address, and complete the sharing steps. Provide a shareable link for the dashboard to the product manager.",
      },
      {
        id: "b",
        text: "Create an IAM user specifically for the product manager. Attach the CloudWatchReadOnlyAccess AWS managed policy to the user. Share the new login credentials with the product manager. Share the browser URL of the correct dashboard with the product manager.",
      },
      {
        id: "c",
        text: "Create an IAM user for the company's employees. Attach the ViewOnlyAccess AWS managed policy to the IAM user. Share the new login credentials with the product manager. Ask the product manager to navigate to the CloudWatch console and locate the dashboard by name in the Dashboards section.",
      },
      {
        id: "d",
        text: "Deploy a bastion server in a public subnet. When the product manager requires access to the dashboard, start the server and share the RDP credentials. On the bastion server, ensure that the browser is configured to open the dashboard URL with cached AWS credentials that have appropriate permissions to view the dashboard.",
      },
    ],
    correctOptionId: "a",
  },

  {
    id: "q692",
    prompt:
      "A company is migrating applications to AWS. The applications are deployed in different accounts. The company manages the accounts centrally by using AWS Organizations. The company's security team needs a single sign-on (SSO) solution across all the company's accounts. The company must continue managing the users and groups in its on-premises self-managed Microsoft Active Directory. Which solution will meet these requirements?",
    options: [
      {
        id: "a",
        text: "Enable AWS Single Sign-On (AWS SSO) from the AWS SSO console. Create a one-way forest trust or a one-way domain trust to connect the company's self-managed Microsoft Active Directory with AWS SSO by using AWS Directory Service for Microsoft Active Directory.",
      },
      {
        id: "b",
        text: "Enable AWS Single Sign-On (AWS SSO) from the AWS SSO console. Create a two-way forest trust to connect the company's self-managed Microsoft Active Directory with AWS SSO by using AWS Directory Service for Microsoft Active Directory.",
      },
      {
        id: "c",
        text: "Use AWS Directory Service. Create a two-way trust relationship with the company's self-managed Microsoft Active Directory.",
      },
      {
        id: "d",
        text: "Deploy an identity provider (IdP) on premises. Enable AWS Single Sign-On (AWS SSO) from the AWS SSO console.",
      },
    ],
    correctOptionId: "b",
  },

  {
    id: "q693",
    prompt:
      "A company provides a Voice over Internet Protocol (VoIP) service that uses UDP connections. The service consists of Amazon EC2 instances that run in an Auto Scaling group. The company has deployments across multiple AWS Regions. The company needs to route users to the Region with the lowest latency. The company also needs automated failover between Regions. Which solution will meet these requirements?",
    options: [
      {
        id: "a",
        text: "Deploy a Network Load Balancer (NLB) and an associated target group. Associate the target group with the Auto Scaling group. Use the NLB as an AWS Global Accelerator endpoint in each Region.",
      },
      {
        id: "b",
        text: "Deploy an Application Load Balancer (ALB) and an associated target group. Associate the target group with the Auto Scaling group. Use the ALB as an AWS Global Accelerator endpoint in each Region.",
      },
      {
        id: "c",
        text: "Deploy a Network Load Balancer (NLB) and an associated target group. Associate the target group with the Auto Scaling group. Create an Amazon Route 53 latency record that points to aliases for each NLB. Create an Amazon CloudFront distribution that uses the latency record as an origin.",
      },
      {
        id: "d",
        text: "Deploy an Application Load Balancer (ALB) and an associated target group. Associate the target group with the Auto Scaling group. Create an Amazon Route 53 weighted record that points to aliases for each ALB. Deploy an Amazon CloudFront distribution that uses the weighted record as an origin.",
      },
    ],
    correctOptionId: "a",
  },

  {
    id: "q694",
    prompt:
      "A development team runs monthly resource-intensive tests on its general purpose Amazon RDS for MySQL DB instance with Performance Insights enabled. The testing lasts for 48 hours once a month and is the only process that uses the database. The team wants to reduce the cost of running the tests without reducing the compute and memory attributes of the DB instance. Which solution meets these requirements MOST cost-effectively?",
    options: [
      {
        id: "a",
        text: "Stop the DB instance when tests are completed. Restart the DB instance when required.",
      },
      {
        id: "b",
        text: "Use an Auto Scaling policy with the DB instance to automatically scale when tests are completed.",
      },
      {
        id: "c",
        text: "Create a snapshot when tests are completed. Terminate the DB instance and restore the snapshot when required.",
      },
      {
        id: "d",
        text: "Modify the DB instance to a low-capacity instance when tests are completed. Modify the DB instance again when required.",
      },
    ],
    correctOptionId: "c",
  },

  {
    id: "q695",
    prompt:
      "A company that hosts its web application on AWS wants to ensure all Amazon EC2 instances, Amazon RDS DB instances, and Amazon Redshift clusters are configured with tags. The company wants to minimize the effort of configuring and operating this check. What should a solutions architect do to accomplish this?",
    options: [
      {
        id: "a",
        text: "Use AWS Config rules to define and detect resources that are not properly tagged.",
      },
      {
        id: "b",
        text: "Use Cost Explorer to display resources that are not properly tagged. Tag those resources manually.",
      },
      {
        id: "c",
        text: "Write API calls to check all resources for proper tag allocation. Periodically run the code on an EC2 instance.",
      },
      {
        id: "d",
        text: "Write API calls to check all resources for proper tag allocation. Schedule an AWS Lambda function through Amazon CloudWatch to periodically run the code.",
      },
    ],
    correctOptionId: "a",
  },

  {
    id: "q696",
    prompt:
      "A company runs an online marketplace web application on AWS. The application serves hundreds of thousands of users during peak hours. The company needs a scalable, near-real-time solution to share the details of millions of financial transactions with several other internal applications. Transactions also need to be processed to remove sensitive data before being stored in a document database for low-latency retrieval. What should a solutions architect recommend to meet these requirements?",
    options: [
      {
        id: "a",
        text: "Store the transactions data into Amazon DynamoDB. Set up a rule in DynamoDB to remove sensitive data from every transaction upon write. Use DynamoDB Streams to share the transactions data with other applications.",
      },
      {
        id: "b",
        text: "Stream the transactions data into Amazon Kinesis Data Firehose to store data in Amazon DynamoDB and Amazon S3. Use AWS Lambda integration with Kinesis Data Firehose to remove sensitive data. Other applications can consume the data stored in Amazon S3.",
      },
      {
        id: "c",
        text: "Stream the transactions data into Amazon Kinesis Data Streams. Use AWS Lambda integration to remove sensitive data from every transaction and then store the transactions data in AmazonDynamoDB. Other applications can consume the transactions data off the Kinesis data stream.",
      },
      {
        id: "d",
        text: "Store the batched transactions data in Amazon S3 as files. Use AWS Lambda to process every file and remove sensitive data before updating the files in Amazon S3. The Lambda function then stores the data in Amazon DynamoDB. Other applications can consume transaction files stored in Amazon S3.",
      },
    ],
    correctOptionId: "c",
  },

  {
    id: "q697",
    prompt:
      "A company is preparing to launch a public-facing web application in the AWS Cloud. The architecture consists of Amazon EC2 instances within a VPC behind an Elastic Load Balancer (ELB). A third-party service is used for the DNS. The company's solutions architect must recommend a solution to detect and protect against large-scale DDoS attacks. Which solution meets these requirements?",
    options: [
      { id: "a", text: "Enable Amazon GuardDuty on the account." },
      { id: "b", text: "Enable Amazon Inspector on the EC2 instances." },
      { id: "c", text: "Enable AWS Shield and assign Amazon Route 53 to it." },
      { id: "d", text: "Enable AWS Shield Advanced and assign the ELB to it." },
    ],
    correctOptionId: "d",
  },

  {
    id: "q698",
    prompt:
      "A company is building an application in the AWS Cloud. The application will store data in Amazon S3 buckets in two AWS Regions. The company must use an AWS Key Management Service (AWS KMS) customer managed key to encrypt all data that is stored in the S3 buckets. The data in both S3 buckets must be encrypted and decrypted with the same KMS key. The data and the key must be stored in each of the two Regions. Which solution will meet these requirements with the LEAST operational overhead?",
    options: [
      {
        id: "a",
        text: "Create an S3 bucket in each Region. Configure the S3 buckets to use server-side encryption with Amazon S3 managed encryption keys (SSE-S3). Configure replication between the S3 buckets.",
      },
      {
        id: "b",
        text: "Create a customer managed multi-Region KMS key. Create an S3 bucket in each Region. Configure replication between the S3 buckets. Configure the application to use the KMS key with client-side encryption.",
      },
      {
        id: "c",
        text: "Create a customer managed KMS key and an S3 bucket in each Region. Configure the S3 buckets to use server-side encryption with Amazon S3 managed encryption keys (SSE-S3). Configure replication between the S3 buckets.",
      },
      {
        id: "d",
        text: "Create a customer managed KMS key and an S3 bucket in each Region. Configure the S3 buckets to use server-side encryption with AWS KMS keys (SSE-KMS). Configure replication between the S3 buckets.",
      },
    ],
    correctOptionId: "b",
  },

  {
    id: "q699",
    prompt:
      "A company recently launched a variety of new workloads on Amazon EC2 instances in its AWS account. The company needs to create a strategy to access and administer the instances remotely and securely. The company needs to implement a repeatable process that works with native AWS services and follows the AWS Well-Architected Framework. Which solution will meet these requirements with the LEAST operational overhead?",
    options: [
      {
        id: "a",
        text: "Use the EC2 serial console to directly access the terminal interface of each instance for administration.",
      },
      {
        id: "b",
        text: "Attach the appropriate IAM role to each existing instance and new instance. Use AWS Systems Manager Session Manager to establish a remote SSH session.",
      },
      {
        id: "c",
        text: "Create an administrative SSH key pair. Load the public key into each EC2 instance. Deploy a bastion host in a public subnet to provide a tunnel for administration of each instance.",
      },
      {
        id: "d",
        text: "Establish an AWS Site-to-Site VPN connection. Instruct administrators to use their local on-premises machines to connect directly to the instances by using SSH keys across the VPN tunnel.",
      },
    ],
    correctOptionId: "b",
  },

  {
    id: "q700",
    prompt:
      "A development team needs to host a website that will be accessed by other teams. The website contents consist of HTML, CSS, client-side JavaScript, and images. Which method is the MOST cost-effective for hosting the website?",
    options: [
      { id: "a", text: "Containerize the website and host it in AWS Fargate." },
      {
        id: "b",
        text: "Create an Amazon S3 bucket and host the website there.",
      },
      {
        id: "c",
        text: "Deploy a web server on an Amazon EC2 instance to host the website.",
      },
      {
        id: "d",
        text: "Configure an Application Load Balancer with an AWS Lambda target that uses the Express.js framework.",
      },
    ],
    correctOptionId: "b",
  },

  {
    id: "q701",
    prompt:
      "A company has a production workload that runs on 1,000 Amazon EC2 Linux instances. The workload is powered by third-party software. The company needs to patch the third-party software on all EC2 instances as quickly as possible to remediate a critical security vulnerability. What should a solutions architect do to meet these requirements?",
    options: [
      {
        id: "a",
        text: "Create an AWS Lambda function to apply the patch to all EC2 instances.",
      },
      {
        id: "b",
        text: "Configure AWS Systems Manager Patch Manager to apply the patch to all EC2 instances.",
      },
      {
        id: "c",
        text: "Schedule an AWS Systems Manager maintenance window to apply the patch to all EC2 instances.",
      },
      {
        id: "d",
        text: "Use AWS Systems Manager Run Command to run a custom command that applies the patch to all EC2 instances.",
      },
    ],
    correctOptionId: "d",
  },

  {
    id: "q702",
    prompt:
      "A company uses Amazon RDS for PostgreSQL databases for its data tier. The company must implement password rotation for the databases. Which solution meets this requirement with the LEAST operational overhead?",
    options: [
      {
        id: "a",
        text: "Store the password in AWS Secrets Manager. Enable automatic rotation on the secret.",
      },
      {
        id: "b",
        text: "Store the password in AWS Systems Manager Parameter Store. Enable automatic rotation on the parameter.",
      },
      {
        id: "c",
        text: "Store the password in AWS Systems Manager Parameter Store. Write an AWS Lambda function that rotates the password.",
      },
      {
        id: "d",
        text: "Store the password in AWS Key Management Service (AWS KMS). Enable automatic rotation on the customer master key (CMK).",
      },
    ],
    correctOptionId: "a",
  },

  {
    id: "q703",
    prompt:
      "A company runs its application on Oracle Database Enterprise Edition. The company needs to migrate the application and the database to AWS. The company can use the Bring Your Own License (BYOL) model while migrating to AWS. The application uses third-party database features that require privileged access. A solutions architect must design a solution for the database migration. Which solution will meet these requirements MOST cost-effectively?",
    options: [
      {
        id: "a",
        text: "Migrate the database to Amazon RDS for Oracle by using native tools. Replace the third-party features with AWS Lambda.",
      },
      {
        id: "b",
        text: "Migrate the database to Amazon RDS Custom for Oracle by using native tools. Customize the new database settings to support the third-party features.",
      },
      {
        id: "c",
        text: "Migrate the database to Amazon DynamoDB by using AWS Database Migration Service (AWS DMS). Customize the new database settings to support the third-party features.",
      },
      {
        id: "d",
        text: "Migrate the database to Amazon RDS for PostgreSQL by using AWS Database Migration Service (AWS DMS). Rewrite the application code to remove the dependency on third-party features.",
      },
    ],
    correctOptionId: "b",
  },

  {
    id: "q704",
    prompt:
      "A company has deployed a multi-account strategy on AWS by using AWS Control Tower. The company has provided individual AWS accounts to each of its developers. The company wants to implement controls to limit AWS resource costs that the developers incur. Which solution will meet these requirements with the LEAST operational overhead?",
    options: [
      {
        id: "a",
        text: "Instruct each developer to tag all their resources with a tag that has a key of CostCenter and a value of the developer's name. Use the required-tags AWS Config managed rule to check for the tag. Create an AWS Lambda function to terminate resources that do not have the tag. Configure AWS Cost Explorer to send a daily report to each developer to monitor their spending.",
      },
      {
        id: "b",
        text: "Use AWS Budgets to establish budgets for each developer account. Set up budget alerts for actual and forecast values to notify developers when they exceed or expect to exceed their assigned budget. Use AWS Budgets actions to apply a DenyAll policy to the developer's IAM role to prevent additional resources from being launched when the assigned budget is reached.",
      },
      {
        id: "c",
        text: "Use AWS Cost Explorer to monitor and report on costs for each developer account. Configure Cost Explorer to send a daily report to each developer to monitor their spending. Use AWS Cost Anomaly Detection to detect anomalous spending and provide alerts.",
      },
      {
        id: "d",
        text: "Use AWS Service Catalog to allow developers to launch resources within a limited cost range. Create AWS Lambda functions in each AWS account to stop running resources at the end of each work day. Configure the Lambda functions to resume the resources at the start of each work day.",
      },
    ],
    correctOptionId: "b",
  },

  {
    id: "q705",
    prompt:
      "A solutions architect is designing an application that will allow business users to upload objects to Amazon S3. The solution needs to maximize object durability. Objects also must be readily available at any time and for any length of time. Users will access objects frequently within the first 30 days after the objects are uploaded, but users are much less likely to access objects that are older than 30 days. Which solution meets these requirements MOST cost-effectively?",
    options: [
      {
        id: "a",
        text: "Store all the objects in S3 Standard with an S3 Lifecycle rule to transition the objects to S3 Glacier after 30 days.",
      },
      {
        id: "b",
        text: "Store all the objects in S3 Standard with an S3 Lifecycle rule to transition the objects to S3 Standard-Infrequent Access (S3 Standard-IA) after 30 days.",
      },
      {
        id: "c",
        text: "Store all the objects in S3 Standard with an S3 Lifecycle rule to transition the objects to S3 One Zone-Infrequent Access (S3 One Zone-IA) after 30 days.",
      },
      {
        id: "d",
        text: "Store all the objects in S3 Intelligent-Tiering with an S3 Lifecycle rule to transition the objects to S3 Standard-Infrequent Access (S3 Standard-IA) after 30 days.",
      },
    ],
    correctOptionId: "b",
  },

  {
    id: "q706",
    prompt:
      "A solutions architect is designing a three-tier web application. The architecture consists of an internet-facing Application Load Balancer (ALB) and a web tier that is hosted on Amazon EC2 instances in private subnets. The application tier with the business logic runs on EC2 instances in private subnets. The database tier consists of Microsoft SQL Server that runs on EC2 instances in private subnets. Security is a high priority for the company. Which combination of security group congurations should the solutions architect use? (Choose three.)",
    options: [
      {
        id: "a",
        text: "Configure the security group for the web tier to allow inbound HTTPS traffic from the security group for the ALB.",
      },
      {
        id: "b",
        text: "Configure the security group for the web tier to allow outbound HTTPS traffic to 0.0.0.0/0.",
      },
      {
        id: "c",
        text: "Configure the security group for the database tier to allow inbound Microsoft SQL Server traffic from the security group for the application tier.",
      },
      {
        id: "d",
        text: "Configure the security group for the database tier to allow outbound HTTPS traffic and Microsoft SQL Server trac to the security group for the web tier.",
      },
      {
        id: "e",
        text: "Configure the security group for the application tier to allow inbound HTTPS traffic from the security group for the web tier.",
      },
      {
        id: "f",
        text: "Configure the security group for the application tier to allow outbound HTTPS traffic and Microsoft SQL Server traffic to the security group for the web tier.",
      },
    ],
    correctOptionId: "a,c,e",
  },

  {
    id: "q707",
    prompt:
      "A company has released a new version of its production application. The company's workload uses Amazon EC2, AWS Lambda, AWS Fargate, and Amazon SageMaker. The company wants to cost optimize the workload now that usage is at a steady state. The company wants to cover the most services with the fewest savings plans. Which combination of savings plans will meet these requirements? (Choose two.)",
    options: [
      {
        id: "a",
        text: "Purchase an EC2 Instance Savings Plan for Amazon EC2 and SageMaker.",
      },
      {
        id: "b",
        text: "Purchase a Compute Savings Plan for Amazon EC2, Lambda, and SageMaker.",
      },
      { id: "c", text: "Purchase a SageMaker Savings Plan." },
      {
        id: "d",
        text: "Purchase a Compute Savings Plan for Lambda, Fargate, and Amazon EC2.",
      },
      {
        id: "e",
        text: "Purchase an EC2 Instance Savings Plan for Amazon EC2 and Fargate.",
      },
    ],
    correctOptionId: "c,d",
  },

  {
    id: "q708",
    prompt:
      "A company uses a Microsoft SQL Server database. The company's applications are connected to the database. The company wants to migrate to an Amazon Aurora PostgreSQL database with minimal changes to the application code. Which combination of steps will meet these requirements? (Choose two.)",
    options: [
      {
        id: "a",
        text: "Use the AWS Schema Conversion Tool (AWS SCT) to rewrite the SQL queries in the applications.",
      },
      {
        id: "b",
        text: "Enable Babelfish on Aurora PostgreSQL to run the SQL queries from the applications.",
      },
      {
        id: "c",
        text: "Migrate the database schema and data by using the AWS Schema Conversion Tool (AWS SCT) and AWS Database Migration Service (AWS DMS).",
      },
      {
        id: "d",
        text: "Use Amazon RDS Proxy to connect the applications to Aurora PostgreSQL.",
      },
      {
        id: "e",
        text: "Use AWS Database Migration Service (AWS DMS) to rewrite the SQL queries in the applications.",
      },
    ],
    correctOptionId: "b,c",
  },

  {
    id: "q709",
    prompt:
      "A company plans to rehost an application to Amazon EC2 instances that use Amazon Elastic Block Store (Amazon EBS) as the attached storage. A solutions architect must design a solution to ensure that all newly created Amazon EBS volumes are encrypted by default. The solution must also prevent the creation of unencrypted EBS volumes. Which solution will meet these requirements?",
    options: [
      {
        id: "a",
        text: "Configure the EC2 account attributes to always encrypt new EBS volumes.",
      },
      {
        id: "b",
        text: "Use AWS Config. Configure the encrypted-volumes identifier. Apply the default AWS Key Management Service (AWS KMS) key.",
      },
      {
        id: "c",
        text: "Configure AWS Systems Manager to create encrypted copies of the EBS volumes. Reconfigure the EC2 instances to use the encrypted volumes.",
      },
      {
        id: "d",
        text: "Create a customer managed key in AWS Key Management Service (AWS KMS). Configure AWS Migration Hub to use the key when the company migrates workloads.",
      },
    ],
    correctOptionId: "b",
  },

  {
    id: "q710",
    prompt:
      "An ecommerce company wants to collect user clickstream data from the company's website for real-time analysis. The website experiences fluctuating traffic patterns throughout the day. The company needs a scalable solution that can adapt to varying levels of traffic. Which solution will meet these requirements?",
    options: [
      {
        id: "a",
        text: "Use a data stream in Amazon Kinesis Data Streams in on-demand mode to capture the clickstream data. Use AWS Lambda to process the data in real time.",
      },
      {
        id: "b",
        text: "Use Amazon Kinesis Data Firehose to capture the clickstream data. Use AWS Glue to process the data in real time.",
      },
      {
        id: "c",
        text: "Use Amazon Kinesis Video Streams to capture the clickstream data. Use AWS Glue to process the data in real time.",
      },
      {
        id: "d",
        text: "Use Amazon Managed Service for Apache Flink (previously known as Amazon Kinesis Data Analytics) to capture the clickstream data. Use AWS Lambda to process the data in real time.",
      },
    ],
    correctOptionId: "a",
  },
];
