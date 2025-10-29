import type { Question } from "../types/quiz";

export const microsoftAzureAZ900Questions: Question[] = [

  {
    id: "q1",
    prompt: "If you plan to host a web application in the Azure platform as a service solution of Azure Web Apps, then the platform will have the ability to scale automatically?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q2",
    prompt: "You decide to create 2 Virtual machines. Each virtual machine is of the size D2s v3. Would these machines always generate the same monthly cost?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q3",
    prompt: "Your team needs to have a tool that provides a digital online assistant that can provide speech support. Which of the following service can be used for this purpose?",
    options: [
      { id: "a", text: "Azure Machine Learning." },
      { id: "b", text: "Azure loT Hub." },
      { id: "c", text: "Azure Al bot." },
      { id: "d", text: "Azure Functions." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q4",
    prompt: "Your team needs to have a tool that can use past trainings to provide predictions of very high probability. Which of the following service can be used for this purpose?",
    options: [
      { id: "a", text: "Azure Machine Learning." },
      { id: "b", text: "Azure loT Hub." },
      { id: "c", text: "Azure Al bot." },
      { id: "d", text: "Azure Functions." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q5",
    prompt: "Your team needs to have a tool that can provide serverless computing capabilities. Which of the following service can be used for this purpose?",
    options: [
      { id: "a", text: "Azure Machine Learning." },
      { id: "b", text: "Azure loT Hub." },
      { id: "c", text: "Azure Al bot." },
      { id: "d", text: "Azure Functions." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q6",
    prompt: "Your team needs to have a tool that can be used to process data from millions of sensors. Which of the following service can be used for this purpose?",
    options: [
      { id: "a", text: "Azure Machine Learning." },
      { id: "b", text: "Azure loT Hub." },
      { id: "c", text: "Azure Al bot." },
      { id: "d", text: "Azure Functions." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q7",
    prompt: "A company needs to deploy a set of resources to Azure. Below are the key requirements for the deployment: The need to be deployed across several departments. The resources that need to be deployed are all of the same type. You need to recommend a solution to automate the deployment of the Azure resources. Which of the following would you use for this requirement?",
    options: [
      { id: "a", text: "Virtual Machine scale sets." },
      { id: "b", text: "Management Groups." },
      { id: "c", text: "Microsoft Entra ID." },
      { id: "d", text: "Azure Resource Manager Templates." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q8",
    prompt: "Your company needs to deploy an application to virtual machines hosted in Azure. The solution must ensure an SLA of 99.99%. What is the minimum number of virtual machines and availability zones that you need to recommend for the deployment?",
    options: [
      { id: "a", text: "One virtual machine and One availability zone." },
      { id: "b", text: "Two virtual machines and availability zone." },
      { id: "c", text: "One virtual machine and Two availability zones." },
      { id: "d", text: "Two virtual machines and Two availability zones." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q9",
    prompt: "Your team needs a tool that can be used to correlate events from multiple resources into a central repository. Which of the following can be used for this purpose?",
    options: [
      { id: "a", text: "Azure Event Hubs." },
      { id: "b", text: "Microsoft Defender for Cloud." },
      { id: "c", text: "Microsoft Entra ID." },
      { id: "d", text: "Azure Log Analytics." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q10",
    prompt: "A company is planning on hosting an application on an Azure Virtual Machine. It needs to be ensured that the application hosted on the virtual machine is accessible from the Internet over HTTPS. You decide to implement a DDoS protection plan. Would this satisfy the requirement?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q11",
    prompt: "A company is planning on hosting an application on an Azure Virtual Machine. It needs to be ensured that the application hosted on the virtual machine is accessible from the Internet over HTTPS. You decide to implement an Azure Traffic Manager profile. Would this satisfy the requirement?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q12",
    prompt: "Which of the following customers are eligible to use Azure Government to develop a cloud solution? Choose 2 answers from the options given below.",
    options: [
      { id: "a", text: "United states government Entity." },
      { id: "b", text: "A United states government contractor." },
      { id: "c", text: "A European government Entity." },
      { id: "d", text: "A European government contractor." },
    ],
    correctOptionId: "a,b"
  },

  {
    id: "q13",
    prompt: "A team is currently planning on using Azure for hosting resources. They are going to create users which would have access to the Azure resources. They want to implement Multi-Factor authentication for the users. Is it required to deploy a federated solution to implement Multi-Factor authentication?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q14",
    prompt: "A team is currently planning on using Azure for hosting resources. They are going to create users which would have access to the Azure resources. They want to implement Multi-Factor authentication for the users. Are two valid methods for Azure Multi-Factor authentication picture identification and entering a passport number.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q15",
    prompt: "Which of the following support plan gives you access to best practice information, health status and notifications, and 24/7 access to billing information at the lowest possible cost.",
    options: [
      { id: "a", text: "Basic." },
      { id: "b", text: "Standard." },
      { id: "c", text: "Premier." },
      { id: "d", text: "Developer." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q16",
    prompt: "If you plan to host a web application in the Azure platform as a service solution of Azure Web Apps, then you will have complete control over the underlying operating system.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q17",
    prompt: "You decide to create a virtual machine which is of the size D2s_v3. If you plan to stop the virtual machine, will you incur any costs for the storage associated with the virtual machine.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q18",
    prompt: "Your company is planning on using Azure for hosting Infrastructure level resources such as Azure Virtual Machines. When planning for the costing aspect for these resources, is there a flexibility offered when it comes to Capital and Operational Expenditure.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q19",
    prompt: "You are looking at using a Software as a Service in Azure. Which of the following would you be responsible for?",
    options: [
      { id: "a", text: "High availability of the solution." },
      { id: "b", text: "Configuration of the solution." },
      { id: "c", text: "Installing the solution." },
      { id: "d", text: "Scalability of the solution." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q20",
    prompt: "A company is planning on migrating all of their on-premises servers to Azure. Their business continuity department has advised that they need to ensure that servers hosted in Azure are available even if an Azure Data Center were to go down. Which of the following is a concept that would be involved in the design stage for this requirement.",
    options: [
      { id: "a", text: "Scalability." },
      { id: "b", text: "Fault Tolerance." },
      { id: "c", text: "Low Latency." },
      { id: "d", text: "Elasticity." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q21",
    prompt: "Under which of the following circumstances could a company look at decommissioning its data center?",
    options: [
      { id: "a", text: "If they have their infrastructure hosted in a private cloud." },
      { id: "b", text: "If they have their infrastructure hosted in the public cloud." },
      { id: "c", text: "If they have their infrastructure hosted in a hybrid cloud." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q22",
    prompt: "A company is planning on migrating a web site to Azure. This is a public web site that is used by users on the Internet. Which of the following must the company plan for if they are planning to migrate the web site to Azure?",
    options: [
      { id: "a", text: "They would need to deploy a VPN." },
      { id: "b", text: "They would need to pay for the cost to transfer the web site to Azure." },
      { id: "c", text: "They would need to pay for the monthly costs incurred for hosting the web site." },
      { id: "d", text: "They would need to pay for the number of connections to the web site." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q23",
    prompt: "An administrator needs to run a script written in PowerShell. This script is going to create a virtual machine in Azure. Would the script run on a computer that runs Linux and has the Azure CLI tools installed?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q24",
    prompt: "An administrator needs to run a script written in PowerShell. This script is going to create a virtual machine in Azure. Would you be able to run the script on a machine that has Chrome OS installed and uses Azure Cloud Shell?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q25",
    prompt: "An administrator needs to run a script written in PowerShell. This script is going to create a virtual machine in Azure. Would you be able to run the script on a machine that has macOS and PowerShell core installed?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q26",
    prompt: "An Administrator needs to view the list of planned maintenance events that could potentially affect the availability of the resources hosted in an Azure subscription. Which of the following blade in the Azure portal should the administrator consider for this requirement?",
    options: [
      { id: "a", text: "Resource Groups." },
      { id: "b", text: "Microsoft Entra ID." },
      { id: "c", text: "Azure Advisor." },
      { id: "d", text: "Help + Support." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q27",
    prompt: "Your team needs to have an integrated solution in place that can be used for the deployment of code. Which of the following service can be used for this purpose?",
    options: [
      { id: "a", text: "Azure Advisor." },
      { id: "b", text: "Azure Cognitive Services." },
      { id: "c", text: "Azure Application Insights." },
      { id: "d", text: "Azure DevOps." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q28",
    prompt: "Your team needs a tool that can provide guidance and recommendations that can be used to improve an Azure environment. Which of the following service can be used for this purpose?",
    options: [
      { id: "a", text: "Azure Advisor." },
      { id: "b", text: "Azure Cognitive Services." },
      { id: "c", text: "Azure Application Insights." },
      { id: "d", text: "Azure DevOps." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q29",
    prompt: "Your team needs to use a tool that can be used to build intelligent Artificial Intelligence based applications. Which of the following service can be used for this purpose?",
    options: [
      { id: "a", text: "Azure Advisor." },
      { id: "b", text: "Azure Cognitive Services." },
      { id: "c", text: "Azure Application Insights." },
      { id: "d", text: "Azure DevOps." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q30",
    prompt: "Your team needs to have a tool that can be used to monitor web applications deployed to Azure. Which of the following service can be used for this purpose?",
    options: [
      { id: "a", text: "Azure Advisor." },
      { id: "b", text: "Azure Cognitive Services." },
      { id: "c", text: "Azure Application Insights." },
      { id: "d", text: "Azure DevOps." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q31",
    prompt: "A team currently has several computers in their on-premises environment that runs on Windows 10. They need to share files by enabling mapped drives from the computers. Which of the following would be an ideal storage solution for this requirement?",
    options: [
      { id: "a", text: "Using the Azure storage - BLOB service." },
      { id: "b", text: "Using the Azure storage - File service." },
      { id: "c", text: "Using the Azure storage - Queue service." },
      { id: "d", text: "Using the Azure storage - Table service." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q32",
    prompt: "A company wants to have a data store hosted in Azure. Below are the key requirements for the data store: The data store must be able to store JSON documents. The data store must be able to handle data writes from multiple regions. Which of the following would be the ideal data store for this requirement?",
    options: [
      { id: "a", text: "Azure SQL Database." },
      { id: "b", text: "Azure Cosmos DB." },
      { id: "c", text: "Azure Redis Cache." },
      { id: "d", text: "Azure Synapse Analytics." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q33",
    prompt: "A team is planning on deploying Azure Virtual Machines to a resource group named demogroup. The group has been created in the US Central region. Do the virtual machines deployed to the resource group also need to be deployed to the US Central region only?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q34",
    prompt: "A team is planning on assigning tags to a resource group. Would the tag be inherited by resources in the resource group?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q35",
    prompt: "A set of IAM permissions have been assigned to a resource group. Would the resources in the resource group automatically inherit the IAM permissions assigned to the resource group?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q36",
    prompt: "Which of the following service can be used to build, test and deploy a predictive analytics solution that could subsequently be used to deploy an Artificial Intelligence solution to Azure?",
    options: [
      { id: "a", text: "Azure Functions." },
      { id: "b", text: "Azure Logic Apps." },
      { id: "c", text: "Azure Batch." },
      { id: "d", text: "Azure Machine Learning Studio." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q37",
    prompt: "Your team is planning on using the Azure Advisor tool. Would the Azure Advisor tool give recommendations on how to configure network settings for Azure virtual machines?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q38",
    prompt: "Your team is planning on using the Azure Advisor tool. Would the Azure Advisor tool give recommendations on how to save costs when it comes to hosting virtual machines in Azure?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q39",
    prompt: "Your team is planning on using the Azure Advisor tool. Would the Azure Advisor tool give recommendations on how to improve the security for Microsoft Entra ID?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q40",
    prompt: "A support engineer currently has a computer that runs Ubuntu. Which of the following Azure Management tools could be run from this computer?",
    options: [
      { id: "a", text: "Azure CLI." },
      { id: "b", text: "Azure PowerShell." },
      { id: "c", text: "The Azure Portal." },
    ],
    correctOptionId: "a,b,c"
  },

  {
    id: "q41",
    prompt: "Your company has just setup an Azure account and Microsoft Entra ID. They need to ensure that when users connect to Microsoft Entra ID from the Internet from an Anonymous IP address, they are prompted to change their password automatically. Which of the following Azure service can help them achieve this requirement?",
    options: [
      { id: "a", text: "Microsoft Entra Connect." },
      { id: "b", text: "Microsoft Entra ID Protection." },
      { id: "c", text: "Microsoft Entra Privileged Identity Management." },
      { id: "d", text: "Microsoft Defender for Identity." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q42",
    prompt: "A company is planning on creating several virtual machines that will be used to host web and database servers. You need to limit the type of connections from the web and database servers. Which of the following can be used to fulfil this requirement?",
    options: [
      { id: "a", text: "Network Security Groups." },
      { id: "b", text: "Microsoft Entra ID Protection." },
      { id: "c", text: "Azure VPN." },
      { id: "d", text: "Azure Route tables." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q43",
    prompt: "Which of the following can be used to allow an organization to manage the compliance of resources across multiple subscriptions?",
    options: [
      { id: "a", text: "Resource Groups." },
      { id: "b", text: "Management Groups." },
      { id: "c", text: "Azure Policies." },
      { id: "d", text: "Azure Resource Manager templates." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q44",
    prompt: "Your company is planning on setting an Azure environment by setting up a subscription and Microsoft Entra ID. They need to purchase a low-cost option support plan. The support plan needs to ensure 24*7 access to support engineers by phone or email. You suggest opting for the Basic Support plan. Does this support the requirement?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q45",
    prompt: "Your company is planning on setting an Azure environment by setting up a subscription and Microsoft Entra ID. They need to purchase a low-cost option support plan. The support plan needs to ensure 24*7 access to support engineers by phone or email. You suggest opting for the Standard Support plan. Does this support the requirement?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q46",
    prompt: "Does Microsoft release most of the Azure services in private preview before being introduced in public preview?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q47",
    prompt: "Is it true that Azure services released in public preview can only be managed via the Azure command line interface?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q48",
    prompt: "Is it true that an Azure service that is released in private preview is made available to all Azure customers?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q49",
    prompt: "Is it true that an Azure service that is released in public preview is made available to all Azure customers?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q50",
    prompt: "Is it true that an Azure service that is released as generally available is made available to all Azure customers?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q51",
    prompt: "Can a single Microsoft Account be used to manage multiple Azure subscriptions?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q52",
    prompt: "Is it possible to merge subscriptions into a single subscription?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q53",
    prompt: "A company has just started using Azure. They have setup a subscription and started deploying resources to Azure. Would they be guaranteed a service level agreement of at least 99.9% for paid Azure services?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q54",
    prompt: "A company has just started using Azure. They have setup a subscription and started deploying resources to Azure. Could the company increase the SLA for their resources by deploying resources across multiple regions?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q55",
    prompt: "A company has just started using Azure. They have setup a subscription and started deploying resources to Azure. Could the company increase the SLA for their resources by purchasing multiple subscriptions?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q56",
    prompt: "A set of virtual machines have been created in a subscription. You have now paid for a new subscription. Is it possible to move the virtual machines to the new subscription?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q57",
    prompt: "A company has defined the following resources in Azure: 10 Public IP addresses. 20 users in Microsoft Entra ID. 5 user groups in Microsoft Entra ID. They now want to reduce the costs associated with the Azure account. Would the removal of the users from the account help reduce the cost?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q58",
    prompt: "A company has defined the following resources in Azure: 10 Public IP addresses. 20 users in Microsoft Entra ID. 5 user groups in Microsoft Entra ID. They now want to reduce the costs associated with the Azure account. Would the removal of the user groups from the account help reduce the cost?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q59",
    prompt: "A company has defined the following resources in Azure: 10 Public IP addresses. 20 users in Microsoft Entra ID. 5 user groups in Microsoft Entra ID. They now want to reduce the costs associated with the Azure account. Would the removal of the public IP addresses from the account help reduce the cost?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q60",
    prompt: "A team member currently has a laptop that is based on the Android OS. The team member wants to create a virtual machine in Azure. The team member decides to use the Azure portal to create the virtual machine. Would this suit the purpose?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q61",
    prompt: "A team member currently has a laptop that is based on the Android OS. The team member wants to create a virtual machine in Azure. The team member decides to use the PowerApps portal to create the virtual machine. Would this suit the purpose?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q62",
    prompt: "Which of the following URL is used to manage the creation of Azure resources?",
    options: [
      { id: "a", text: "`https://admin.azure.com`." },
      { id: "b", text: "`https://admin.azurewebsites.com`." },
      { id: "c", text: "`https://portal.microsoft.com`." },
      { id: "d", text: "`https://portal.azurewebsites.com`." },
      { id: "e", text: "`https://portal.azure.com`." },
    ],
    correctOptionId: "e"
  },

  {
    id: "q63",
    prompt: "You need to create a virtual machine in Azure. Which of the following storage account service is used to store the data disks for the virtual machine?",
    options: [
      { id: "a", text: "Blobs." },
      { id: "b", text: "Files." },
      { id: "c", text: "Tables." },
      { id: "d", text: "Queues." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q64",
    prompt: "Your company needs to have a data store in Azure. Below are the key requirements for the data store: The data store should be capable of storing 10TB of data. The data would be accessed infrequently. The data would need to be visualised using PowerBI. Which of the following services could you use for this requirement? Choose 2 answers from the options given below.",
    options: [
      { id: "a", text: "Azure SQL database." },
      { id: "b", text: "Azure Synapse Analytics." },
      { id: "c", text: "Azure Data Lake." },
      { id: "d", text: "Azure Cosmos DB." },
    ],
    correctOptionId: "b,c"
  },

  {
    id: "q65",
    prompt: "You need to deploy several virtual machines to Azure. You need to ensure that you can assign permissions to the virtual machines simultaneously. Which of the following can be implemented to fulfil this requirement?",
    options: [
      { id: "a", text: "Deploy all the virtual machines to the same region." },
      { id: "b", text: "Deploy all the virtual machines to the same resource group." },
      { id: "c", text: "Deploy all the virtual machines to the same availability zone." },
      { id: "d", text: "Deploy all the virtual machines to the same scale." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q66",
    prompt: "Which of the following is a benefit of moving on-premises servers to the Azure cloud environment?",
    options: [
      { id: "a", text: "The Azure platform is a public cloud platform wherein all the resources can be accessed by the public." },
      { id: "b", text: "The Azure platform is a private cloud platform wherein all the resources can be accessed only by a private handful of people." },
      { id: "c", text: "The Azure platform is a shared platform wherein multiple companies can use a portion of the resources on the platform." },
      { id: "d", text: "The Azure platform is an ecommerce platform wherein users can buy and sell resources as required." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q67",
    prompt: "What are two key characteristics of the public cloud?",
    options: [
      { id: "a", text: "Dedicated hardware resources." },
      { id: "b", text: "Shared infrastructure." },
      { id: "c", text: "Pay-as-you-go model." },
      { id: "d", text: "On-premises deployment." },
      { id: "e", text: "Limited geographic availability." },
    ],
    correctOptionId: "b,c"
  },

  {
    id: "q68",
    prompt: "Your company plans to migrate all its data and resources to Azure. The company migration plan states that only Platform as a Service (PaaS) solutions must be used in Azure. You need to deploy an Azure environment that meets the company migration plan. Solution: You create an Azure App Service and Azure SQL databases. Does this meet the goal?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q69",
    prompt: "You plan to migrate a web application to Azure. The web application is accessed by external users. You need to recommend a cloud deployment solution to minimize the amount of administrative effort used to manage the web application. What should you include in the recommendation?",
    options: [
      { id: "a", text: "Software as a Service (SaaS)." },
      { id: "b", text: "Platform as a Service (PaaS)." },
      { id: "c", text: "Infrastructure as a Service (laaS)." },
      { id: "d", text: "Database as a Service (DaaS)." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q70",
    prompt: "You have an on-premises network that contains 100 servers. You need to recommend a solution that provides additional resources to your users. The solution must minimize capital and operational expenditure costs. What should you include in the recommendation?",
    options: [
      { id: "a", text: "A complete migration to the public cloud." },
      { id: "b", text: "An additional data center." },
      { id: "c", text: "A private cloud." },
      { id: "d", text: "A hybrid cloud." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q71",
    prompt: "You plan to migrate several servers from an on-premises network to Azure. What is an advantage of using a public cloud service for the servers over an on-premises network?",
    options: [
      { id: "a", text: "The public cloud is owned by the public, NOT a private corporation." },
      { id: "b", text: "The public cloud is a crowd-sourcing solution that provides corporations with the ability to enhance the cloud." },
      { id: "c", text: "All public cloud resources can be freely accessed by every member of the public." },
      { id: "d", text: "The public cloud is a shared entity whereby multiple corporations each use a portion of the resources in the cloud." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q72",
    prompt: "You have 1,000 virtual machines hosted on the Hyper-V hosts in a data center. You plan to migrate all the virtual machines to an Azure pay-as-you-go subscription. You need to identify which expenditure model to use for the planned Azure solution. Which expenditure model should you identify?",
    options: [
      { id: "a", text: "Operational." },
      { id: "b", text: "Elastic." },
      { id: "c", text: "Capital." },
      { id: "d", text: "Scalable." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q73",
    prompt: "You plan to provision Infrastructure as a Service (laaS) resources in Azure. Which resource is an example of laaS?",
    options: [
      { id: "a", text: "An Azure web app." },
      { id: "b", text: "An Azure virtual machine." },
      { id: "c", text: "An Azure logic app." },
      { id: "d", text: "An Azure SQL database." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q74",
    prompt: "A team of developers at your company plans to deploy, and then remove, 50 virtual machines each week. All the virtual machines are configured by using Azure Resource Manager templates. You need to recommend which Azure service will minimize the administrative effort required to deploy and remove the virtual machines. What should you recommend?",
    options: [
      { id: "a", text: "Azure Reserved Virtual Machine (VM) Instances." },
      { id: "b", text: "Azure DevTest Labs." },
      { id: "c", text: "Azure virtual machine scale sets." },
      { id: "d", text: "Microsoft Managed Desktop." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q75",
    prompt: "Your company plans to migrate all its data and resources to Azure. The company migration plan states that only Platform as a Service (PaaS) solutions must be used in Azure. You need to deploy an Azure environment that meets the company migration plan. Solution: You create an Azure virtual machines, Azure SQL databases, and Azure Storage accounts. Does this meet the goal?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q76",
    prompt: "Your company plans to deploy several custom applications to Azure. The applications will provide invoicing services to the customers of the company. Each application will have several prerequisite applications and services installed. You need to recommend a cloud deployment solution for all the applications. What should you recommend?",
    options: [
      { id: "a", text: "Software as a Service (SaaS)." },
      { id: "b", text: "Platform as a Service (PaaS)." },
      { id: "c", text: "Infrastructure as a Service (laas)." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q77",
    prompt: "[An Azure region] contains one or more data centers that are connected by using a low-latency network.",
    options: [
      { id: "a", text: "No change is needed." },
      { id: "b", text: "Is found in each country where Microsoft has a subsidiary office." },
      { id: "c", text: "Can be found in every country in Europe and the Americas only." },
      { id: "d", text: "Contains one or more data centers that are connected by using a high-latency network." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q78",
    prompt: "A support engineer plans to perform several Azure management tasks by using the Azure CLI. You install the CLI on a computer. You need to tell the support engineer which tools to use to run the CLI. Which two tools should you instruct the support engineer to use?",
    options: [
      { id: "a", text: "Command Prompt." },
      { id: "b", text: "Azure Resource Explorer." },
      { id: "c", text: "Windows PowerShell." },
      { id: "d", text: "Windows Defender Firewall." },
      { id: "e", text: "Network and Sharing Center." },
    ],
    correctOptionId: "a,c"
  },

  {
    id: "q79",
    prompt: "You plan to store 20 TB of data in Azure. The data will be accessed infrequently and visualized by using Microsoft Power BI. You need to recommend a storage solution for the data Which two solutions should you recommend?",
    options: [
      { id: "a", text: "Azure Data Lake." },
      { id: "b", text: "Azure Cosmos DB." },
      { id: "c", text: "Azure Synapse Analytics." },
      { id: "d", text: "Azure SQL Database." },
      { id: "e", text: "Azure Database for PostgreSQL." },
    ],
    correctOptionId: "a,c"
  },

  {
    id: "q80",
    prompt: "You need to identify the type of failure for which an Azure Availability Zone can be used to protect access to Azure services. What should you identify?",
    options: [
      { id: "a", text: "A physical server failure." },
      { id: "b", text: "An Azure region failure." },
      { id: "c", text: "A storage failure." },
      { id: "d", text: "An Azure data center failure." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q81",
    prompt: "You have a virtual machine named VM1 that runs Windows Server 2016. VM1 is in the East US Azure region. Which Azure service should you use from the Azure portal to view service failure notifications that can affect the availability of VM1?",
    options: [
      { id: "a", text: "Azure Service Fabric." },
      { id: "b", text: "Azure Monitor." },
      { id: "c", text: "Azure virtual machines." },
      { id: "d", text: "Azure Advisor." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q82",
    prompt: "An Azure administrator plans to run a PowerShell script that creates Azure resources. You need to recommend which computer configuration to use to run the script. Solution: Run the script from a computer that runs Linux and has the Azure CLI tools installed. Does this meet the goal?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q83",
    prompt: "An Azure administrator plans to run a PowerShell script that creates Azure resources. You need to recommend which computer configuration to use to run the script. Solution: Run the script from a computer that runs Chrome OS and uses Azure Cloud Shell Does this meet the goal?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q84",
    prompt: "You have an Azure environment that contains 10 virtual networks and 100 virtual machines You need to limit the amount of inbound traffic to all the Azure virtual network. What should you create?",
    options: [
      { id: "a", text: "One application security group (ASG)." },
      { id: "b", text: "10 virtual network gateways." },
      { id: "c", text: "10 Azure ExpressRoute circuits." },
      { id: "d", text: "One Azure firewall." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q85",
    prompt: "You have an Azure environment that contains multiple Azure virtual machines. You plan to implement a solution that enables the client computers on your on-premises network to communicate to the Azure virtual machines. You need to recommend which Azure resources must be created for the planned solution. Which two Azure resources should you include in the recommendation?",
    options: [
      { id: "a", text: "A virtual network gateway." },
      { id: "b", text: "A load balancer." },
      { id: "c", text: "An application gateway." },
      { id: "d", text: "A virtual network." },
      { id: "e", text: "A gateway subnet." },
    ],
    correctOptionId: "a,e"
  },

  {
    id: "q86",
    prompt: "You have an Azure environment. You need to create a new Azure virtual machine from a tablet that runs the Android operating system. Solution: You use Bash in Azure Cloud Shell. Does this meet the goal?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q87",
    prompt: "Your company plans to move several servers to Azure. The company compliance policy states that a server named FinServer must be on a separate network segment. You are evaluating which Azure services can be used to meet the compliance policy requirements. Which Azure solution should you recommend?",
    options: [
      { id: "a", text: "A resource group for FinServer and another resource group for all the other servers." },
      { id: "b", text: "A virtual network for FinServer and another virtual network for all the other servers." },
      { id: "c", text: "A VPN for FinServer and a virtual network gateway for another server." },
      { id: "d", text: "One resource group for all the servers and a resource lock for FinServer." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q88",
    prompt: "You plan to map a network drive from several computers that run Windows 10 to Azure Storage. You need to create a storage solution in Azure for the planned mapped drive. What should you create?",
    options: [
      { id: "a", text: "An Azure SQL database." },
      { id: "b", text: "A virtual machine data disk." },
      { id: "c", text: "A Files service in a storage account." },
      { id: "d", text: "A Blobs service in a storage account." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q89",
    prompt: "Your company plans to migrate all its network resources to Azure. You need to start the planning process by exploring Azure. What should you create first?",
    options: [
      { id: "a", text: "A subscription." },
      { id: "b", text: "A resource group." },
      { id: "c", text: "A virtual network." },
      { id: "d", text: "A management group." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q90",
    prompt: "You have an on-premises application that sends email notifications automatically based on a rule, You plan to migrate the application to Azure. You need to recommend a serverless computing solution for the application. What should you include in the recommendation?",
    options: [
      { id: "a", text: "A web app." },
      { id: "b", text: "A server image in Azure Marketplace." },
      { id: "c", text: "A logic app." },
      { id: "d", text: "An API app." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q91",
    prompt: "You plan to deploy a website to Azure. The website will be accessed by users worldwide and will host large video files. You need to recommend which Azure feature must be used to provide the best video playback experience. What should you recommend?",
    options: [
      { id: "a", text: "An application gateway." },
      { id: "b", text: "An Azure ExpressRoute circuit." },
      { id: "c", text: "A content delivery network (CDN)." },
      { id: "d", text: "An Azure Traffic Manager profile." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q92",
    prompt: "Your company plans to deploy several million sensors that will upload data to Azure. You need to identify which Azure resources must be created to support the planned solution. Which two Azure resources should you identify?",
    options: [
      { id: "a", text: "Azure Data Lake." },
      { id: "b", text: "Azure Queue storage." },
      { id: "c", text: "Azure File Storage." },
      { id: "d", text: "Azure IoT Hub." },
      { id: "e", text: "Azure Notification Hubs." },
    ],
    correctOptionId: "a,d"
  },

  {
    id: "q93",
    prompt: "You have an Azure web app. You need to manage the settings of the web app from an iPhone. What are two Azure management tools that you can use?",
    options: [
      { id: "a", text: "Azure CLI." },
      { id: "b", text: "The Azure portal." },
      { id: "c", text: "Azure Cloud Shell." },
      { id: "d", text: "Windows PowerShell." },
      { id: "e", text: "Azure Storage Explorer." },
    ],
    correctOptionId: "b,c"
  },

  {
    id: "q94",
    prompt: "Company plans to deploy an Artificial Intelligence (AI) solution in Azure. What should the company use to build, test, and deploy predictive analytics solutions?",
    options: [
      { id: "a", text: "Azure Logic Apps." },
      { id: "b", text: "Azure Machine Learning Studio." },
      { id: "c", text: "Azure Batch." },
      { id: "d", text: "Azure Cosmos DB." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q95",
    prompt: "You have an Azure subscription named Subscription1. You sign in to the Azure portal and create a resource group named RG1. From Azure documentation, you have the following command that creates a virtual machine named VM1. `az vm create --resource-group RG1 --name VM1 --image UbuntuLTS --generate-ssh-keys`. You need to create VM1 in Subscription1 by using the command. Solution: From the Azure portal, launch Azure Cloud Shell and select PowerShell. Run the command in Cloud Shell. Does this meet the goal?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q96",
    prompt: "An Azure administrator plans to run a PowerShell script that creates Azure resources. You need to recommend which computer configuration to use to run the script. Solution: Run the script from a computer that runs Windows 10 and has the Azure PowerShell module installed. Does this meet the goal?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q97",
    prompt: "Which service provides serverless computing in Azure?",
    options: [
      { id: "a", text: "Azure Virtual Machines." },
      { id: "b", text: "Azure Functions." },
      { id: "c", text: "Azure storage account." },
      { id: "d", text: "Azure Container Instances." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q98",
    prompt: "You have an Azure subscription named Subscription1. You sign in to the Azure portal and create a resource group named RG1. From Azure documentation, you have the following command that creates a virtual machine named VM1. `az vm create --resource-group RG1 --name VM1 --image UbuntuLTS --generate-ssh-keys`. You need to create VM1 in Subscription1 by using the command. Solution: From the Azure portal, launch Azure Cloud Shell and select Bash. Run the command in Cloud Shell. Does this meet the goal?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q99",
    prompt: "Your company has several business units. Each business unit requires 20 different Azure resources for daily operation. All the business units require the same type of Azure resources. You need to recommend a solution to automate the creation of the Azure resources. What should you include in the recommendations?",
    options: [
      { id: "a", text: "Azure Resource Manager templates." },
      { id: "b", text: "Virtual machine scale sets." },
      { id: "c", text: "The Azure API Management service." },
      { id: "d", text: "Management groups." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q100",
    prompt: "Which Azure service should you use to collect events from multiple resources into a centralized repository?",
    options: [
      { id: "a", text: "Azure Event Hubs." },
      { id: "b", text: "Azure Analysis Services." },
      { id: "c", text: "Azure Monitor." },
      { id: "d", text: "Azure Stream Analytics." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q101",
    prompt: "You have an Azure environment. You need to create a new Azure virtual machine from a tablet that runs the Android operating system. Solution: You use the PowerApps portal. Does this meet the goal?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q102",
    prompt: "You have an Azure environment. You need to create a new Azure virtual machine from a tablet that runs the Android operating system. Solution: You use the Azure portal. Does this meet the goal?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q103",
    prompt: "Which Azure service provides a set of version control tools to manage code?",
    options: [
      { id: "a", text: "Azure Repos." },
      { id: "b", text: "Azure DevTest Labs." },
      { id: "c", text: "Azure Storage." },
      { id: "d", text: "Azure Cosmos DB." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q104",
    prompt: "Your company plans to automate the deployment of servers to Azure. Your manager is concerned that you may expose administrative credentials during the deployment. You need to recommend an Azure solution that encrypts the administrative credentials during the deployment. What should you include in the recommendation?",
    options: [
      { id: "a", text: "Azure Key Vault." },
      { id: "b", text: "Microsoft Purview Information Protection." },
      { id: "c", text: "Microsoft Defender for Cloud." },
      { id: "d", text: "Azure Multi-Factor Authentication (MFA)." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q105",
    prompt: "You plan to deploy several Azure virtual machines. You need to control the ports that devices on the Internet can use to access the virtual machines. What should you use?",
    options: [
      { id: "a", text: "Network Security Group (NSG)." },
      { id: "b", text: "Microsoft Entra ID role." },
      { id: "c", text: "Microsoft Entra ID group." },
      { id: "d", text: "Azure key vault." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q106",
    prompt: "Azure Germany can be used by legal residents of Germany only.",
    options: [
      { id: "a", text: "No change is needed." },
      { id: "b", text: "Only enterprises that are registered in Germany." },
      { id: "c", text: "Only enterprises that purchase their azure licenses from a partner based in Germany." },
      { id: "d", text: "This service has been discontinued. Azure Germany was retired in 2021." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q107",
    prompt: "Your Azure environment contains multiple Azure virtual machines. You need to ensure that a virtual machine named VM1 is accessible from the Internet over HTTP. Solution. You modify a Network Security Group (NSG). Does this meet the goal?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q108",
    prompt: "Your Azure environment contains multiple Azure virtual machines. You need to ensure that a virtual machine named VM1 is accessible from the Internet over HTTP. Solution: You modify an Azure firewall. Does this meet the goal?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q109",
    prompt: "Your Azure environment contains multiple Azure virtual machines. You need to ensure that a virtual machine named VM1 is accessible from the Internet over HTTP. Solution: You modify an Azure Traffic Manager profile. Does this meet the goal?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q110",
    prompt: "Which two types of customers are eligible to use Azure Government to develop a cloud solution?",
    options: [
      { id: "a", text: "A Canadian government contractor." },
      { id: "b", text: "A European government contractor." },
      { id: "c", text: "A United States government entity." },
      { id: "d", text: "A United States government contractor." },
      { id: "e", text: "A European government entity." },
    ],
    correctOptionId: "c,d"
  },

  {
    id: "q111",
    prompt: "You need to ensure that when Microsoft Entra ID users connect to Microsoft Entra ID from the Internet by using an anonymous IP address, the users are prompted automatically to change their password. Which Azure service should you use?",
    options: [
      { id: "a", text: "Microsoft Entra Connect Health." },
      { id: "b", text: "Microsoft Entra Privileged Identity Management." },
      { id: "c", text: "Microsoft Defender for Identity." },
      { id: "d", text: "Microsoft Entra ID Protection." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q112",
    prompt: "Your company plans to deploy several web servers and several database servers to Azure. You need to recommend an Azure solution to limit the types of connections from the web servers to the database servers. What should you include in the recommendation?",
    options: [
      { id: "a", text: "Network Security Groups (NSGs)." },
      { id: "b", text: "Azure Service Bus." },
      { id: "c", text: "A local network gateway." },
      { id: "d", text: "A route filter." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q113",
    prompt: "To what should an application connect to retrieve security tokens?",
    options: [
      { id: "a", text: "An Azure Storage account." },
      { id: "b", text: "Microsoft Entra ID." },
      { id: "c", text: "A certificate store." },
      { id: "d", text: "An Azure key vault." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q114",
    prompt: "Which service provides network traffic filtering across multiple Azure subscriptions and virtual networks?",
    options: [
      { id: "a", text: "Azure Firewall." },
      { id: "b", text: "An application security group." },
      { id: "c", text: "Azure DDoS protection." },
      { id: "d", text: "A Network Security Group (NSG)." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q115",
    prompt: "Which Azure service should you use to store certificates?",
    options: [
      { id: "a", text: "Microsoft Defender for Cloud." },
      { id: "b", text: "An Azure Storage account." },
      { id: "c", text: "Azure Key Vault." },
      { id: "d", text: "Microsoft Purview Information Protection." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q116",
    prompt: "You have a resource group named RG1. You plan to create virtual networks and app services in RG1. You need to prevent the creation of virtual machines only in RG1. What should you use?",
    options: [
      { id: "a", text: "A lock." },
      { id: "b", text: "An Azure role." },
      { id: "c", text: "A tag." },
      { id: "d", text: "An Azure policy." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q117",
    prompt: "What can Microsoft Purview Information Protection encrypt?",
    options: [
      { id: "a", text: "Network traffic." },
      { id: "b", text: "Documents and email messages." },
      { id: "c", text: "An Azure Storage account." },
      { id: "d", text: "An Azure SQL database." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q118",
    prompt: "From [Azure Monitor], you can view which user turned off a specific virtual machine during the last 14 days.",
    options: [
      { id: "a", text: "No change is needed." },
      { id: "b", text: "Azure Event Hubs." },
      { id: "c", text: "Azure Activity Log." },
      { id: "d", text: "Azure Service Health." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q119",
    prompt: "Your company has an Azure subscription that contains resources in several regions. A company policy states that administrators must only be allowed to create additional Azure resources in a region in the country where their office is located. You need to create the Azure resource that must be used to meet the policy requirement. What should you create?",
    options: [
      { id: "a", text: "A read-only lock." },
      { id: "b", text: "An Azure policy." },
      { id: "c", text: "A management group." },
      { id: "d", text: "A reservation." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q120",
    prompt: "From [Azure Cloud Shell], you can track your company regulatory standards and regulations, such as ISO 27001.",
    options: [
      { id: "a", text: "No change is needed." },
      { id: "b", text: "The Microsoft Cloud Partner Portal." },
      { id: "c", text: "Compliance Manager." },
      { id: "d", text: "The Trust Center." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q121",
    prompt: "You need to configure an Azure solution that meets the following requirements: Secures websites from attacks. Generates reports that contain details of attempted attacks. What should you include in the solution?",
    options: [
      { id: "a", text: "Azure Firewall." },
      { id: "b", text: "A Network Security Group (NSG)." },
      { id: "c", text: "Microsoft Purview Information Protection." },
      { id: "d", text: "DDoS protection." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q122",
    prompt: "You attempt to create several managed Microsoft SQL Server instances in an Azure environment and receive a message that you must increase your Azure subscription limits. What should you do to increase the limits?",
    options: [
      { id: "a", text: "Create a service health alert." },
      { id: "b", text: "Upgrade your support plan." },
      { id: "c", text: "Modify an Azure policy." },
      { id: "d", text: "Create a new support request." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q123",
    prompt: "Your company has 10 offices. You plan to generate several billing reports from the Azure portal. Each report will contain the Azure resource utilization of each office. Which Azure Resource Manager feature should you use before you generate the reports?",
    options: [
      { id: "a", text: "Tags." },
      { id: "b", text: "Templates." },
      { id: "c", text: "Locks." },
      { id: "d", text: "Policies." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q124",
    prompt: "Your company plans to migrate to Azure. The company has several departments. All the Azure resources used by each department will be managed by a department administrator. What are two possible techniques to segment Azure for the departments?",
    options: [
      { id: "a", text: "Multiple subscriptions." },
      { id: "b", text: "Multiple Microsoft Entra ID directories." },
      { id: "c", text: "Multiple regions." },
      { id: "d", text: "Multiple resource groups." },
    ],
    correctOptionId: "a,d"
  },

  {
    id: "q125",
    prompt: "In which Azure support plans can you open a new support request?",
    options: [
      { id: "a", text: "Professional Direct only." },
      { id: "b", text: "Professional Direct, and Standard only." },
      { id: "c", text: "Professional Direct, Standard, and Developer only." },
      { id: "d", text: "Professional Direct, Standard, Developer, and Basic." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q126",
    prompt: "What is guaranteed in an Azure Service Level Agreement (SLA) for virtual machines?",
    options: [
      { id: "a", text: "Uptime." },
      { id: "b", text: "Feature availability." },
      { id: "c", text: "Bandwidth." },
      { id: "d", text: "Performance." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q127",
    prompt: "Your company plans to purchase an Azure subscription. The company support policy states that the Azure environment must provide an option to access support engineers by phone or email. You need to recommend which support plan meets the support policy requirement. Solution: Recommend a Basic support plan. Does this meet the goal?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q128",
    prompt: "Your company plans to request an architectural review of an Azure environment from Microsoft. The company currently has a Basic support plan. You need to recommend a new support plan for the company. The solution must minimize costs. Which support plan should you recommend?",
    options: [
      { id: "a", text: "Developer." },
      { id: "b", text: "Professional Direct." },
      { id: "c", text: "Standard." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q129",
    prompt: "What is required to use Azure Cost Management?",
    options: [
      { id: "a", text: "A Dev/Test subscription." },
      { id: "b", text: "Software Assurance." },
      { id: "c", text: "An Enterprise Agreement (EA)." },
      { id: "d", text: "A pay-as-you-go subscription." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q130",
    prompt: "Your Azure trial account expired last week. You are now unable to [create additional Microsoft Entra ID user accounts].",
    options: [
      { id: "a", text: "No change is needed." },
      { id: "b", text: "Start an existing Azure virtual machine." },
      { id: "c", text: "Access your data stored in Azure." },
      { id: "d", text: "Access the Azure portal." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q131",
    prompt: "Your company plans to purchase an Azure subscription, The company support policy states that the Azure environment must provide an option to access support engineers by phone or email. You need to recommend which support plan meets the support policy requirement. Solution: Recommend a Premier support plan. Does this meet the goal?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q132",
    prompt: "Your company has 10 departments. The company plans to implement Azure environment. You need to ensure that each department can use a different payment option for the Azure services it consumes. What should you create for each department?",
    options: [
      { id: "a", text: "A reservation." },
      { id: "b", text: "A subscription." },
      { id: "c", text: "A resource group." },
      { id: "d", text: "A container instance." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q133",
    prompt: "Which statement accurately describes the Modern Lifecycle Policy for Azure services?",
    options: [
      { id: "a", text: "Microsoft provides mainstream support for a service for five years." },
      { id: "b", text: "Microsoft provides a minimum of 12 months notice before ending support for a service." },
      { id: "c", text: "After a service is made generally available, Microsoft provides support for the service for a minimum of four years." },
      { id: "d", text: "When a service is retired, you can purchase extended support for the service for up to five years." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q134",
    prompt: "You can use Advisor recommendations in Azure to send email alerts when the cost of the current billing Azure subscription exceeds a specified limit.",
    options: [
      { id: "a", text: "No change is needed." },
      { id: "b", text: "Access control (LAM)." },
      { id: "c", text: "Budget alerts." },
      { id: "d", text: "Compliance." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q135",
    prompt: "To implement a hybrid cloud model, a company must first have a private cloud.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q136",
    prompt: "A company can extend the computing resources of its internal network by using a hybrid cloud.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q137",
    prompt: "In a public cloud model, only guest users at your company can access the resources in the cloud.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q138",
    prompt: "You have an on-premises network that contains several servers. You plan to migrate all the servers to Azure. You need to recommend a solution to ensure that some of the servers are available if a single Azure data center goes offline for an extended period. What should you include in the recommendation?",
    options: [
      { id: "a", text: "Fault tolerance." },
      { id: "b", text: "Elasticity." },
      { id: "c", text: "Scalability." },
      { id: "d", text: "Low latency." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q139",
    prompt: "An organization that hosts its infrastructure [in a private cloud] can close its data center.",
    options: [
      { id: "a", text: "No change is needed." },
      { id: "b", text: "In a hybrid cloud." },
      { id: "c", text: "In the public cloud." },
      { id: "d", text: "On a Hyper-V host." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q140",
    prompt: "What are two characteristics of the public cloud?",
    options: [
      { id: "a", text: "Dedicated hardware." },
      { id: "b", text: "Unsecured connections." },
      { id: "c", text: "Limited storage." },
      { id: "d", text: "Metered pricing." },
      { id: "e", text: "Self-service management." },
    ],
    correctOptionId: "d,e"
  },

  {
    id: "q141",
    prompt: "Your company plans to migrate all its data and resources to Azure. The company migration plan states that only Platform as a Service (PaaS) solutions must be used in Azure. You need to deploy an Azure environment that meets the company migration plan. Solution: You create an Azure App Service and Azure virtual machines that have Microsoft SQL Server installed. Does this meet the goal?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q142",
    prompt: "Your company hosts an accounting application named App1 that is used by all the customers of the company. App1 has low usage during the first three weeks of each month and very high usage during the last week of each month. Which benefit of Azure Cloud Services supports cost management for this type of usage pattern?",
    options: [
      { id: "a", text: "High availability." },
      { id: "b", text: "High latency." },
      { id: "c", text: "Elasticity." },
      { id: "d", text: "Load balancing." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q143",
    prompt: "You plan to deploy several Azure virtual machines. You need to ensure that the services running on the virtual machines are available if a single data center fails. Solution: You deploy the virtual machines to two or more scale sets. Does this meet the goal?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q144",
    prompt: "You plan to provision Infrastructure as a Service (IaaS) resources in Azure. Which resource is an example of IaaS?",
    options: [
      { id: "a", text: "An Azure web app." },
      { id: "b", text: "An Azure virtual machine." },
      { id: "c", text: "An Azure logic app." },
      { id: "d", text: "An Azure SQL database." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q145",
    prompt: "A team of developers at your company plans to deploy, and then remove, 50 customized virtual machines each week. Thirty of the virtual machines run Windows Server 2016 and 20 of the virtual machines run Ubuntu Linux. You need to recommend which Azure service will minimize the administrative effort required to deploy and remove the virtual machines. What should you recommend?",
    options: [
      { id: "a", text: "Azure Reserved Virtual Machines (VM) Instances." },
      { id: "b", text: "Azure virtual machine scale sets." },
      { id: "c", text: "Azure DevTest Labs." },
      { id: "d", text: "Microsoft Managed Desktop." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q146",
    prompt: "One of the benefits of Azure Synapse Analytics is that [high availability] is built into the platform.",
    options: [
      { id: "a", text: "No change is needed." },
      { id: "b", text: "Automatic scaling." },
      { id: "c", text: "Data compression." },
      { id: "d", text: "Versioning." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q147",
    prompt: "Match the Azure services to the correct descriptions. ![Question 147](images/question147.png)",
    options: [
      { id: "a", text: "Provide operating system virtualization: Azure App Service. Provide portable environment for virtualized applications: Azure virtual machines. Used to build, deploy, and scale web apps: Azure Container Instances. Provide a platform for serverless code: Azure Functions." },
      { id: "b", text: "Provide operating system virtualization: Azure Functions. Provide portable environment for virtualized applications: Azure virtual machines. Used to build, deploy, and scale web apps: Azure Container Instances. Provide a platform for serverless code: Azure App Service." },
      { id: "c", text: "Provide operating system virtualization: Azure virtual machines. Provide portable environment for virtualized applications: Azure Container Instances. Used to build, deploy, and scale web apps: Azure App Service. Provide a platform for serverless code: Azure Functions." },
      { id: "d", text: "Provide operating system virtualization: Azure virtual machines. Provide portable environment for virtualized applications: Azure Functions. Used to build, deploy, and scale web apps: Azure App Service. Provide a platform for serverless code: Azure Container Instances." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q148",
    prompt: "An Azure administrator plans to run a PowerShell script that creates Azure resources. You need to recommend which computer configuration to use to run the script. Solution: Run the script from a computer that runs macOS and has PowerShell Core 6.0 installed. Does this meet the goal?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q149",
    prompt: "You have an Azure environment that contains 10 virtual networks and 100 virtual machines. You need to limit the amount of inbound traffic to all the Azure virtual networks. What should you create?",
    options: [
      { id: "a", text: "One application security group (ASG)." },
      { id: "b", text: "10 virtual network gateways." },
      { id: "c", text: "10 Azure ExpressRoute circuits." },
      { id: "d", text: "One Azure firewall." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q150",
    prompt: "You have an on-premises application that sends email notifications automatically based on a rule. You plan to migrate the application to Azure. You need to recommend a serverless computing solution for the application. What should you include in the recommendation?",
    options: [
      { id: "a", text: "A web app." },
      { id: "b", text: "A server image in Azure Marketplace." },
      { id: "c", text: "A logic app." },
      { id: "d", text: "An API app." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q151",
    prompt: "You have an application that is comprised of an Azure web app that has a Service Level Agreement (SLA) of 99.95 percent and an Azure SQL database that has an SLA of 99.99 percent. The composite SLA for the application is [the product of both SLAs, which equals 99.94 percent].",
    options: [
      { id: "a", text: "No change is needed." },
      { id: "b", text: "The lowest SLA associated to the application, which is 99.95 percent." },
      { id: "c", text: "The highest SLA associated to the application, which is 99.99 percent." },
      { id: "d", text: "The difference between the two SLAs, which is 0.05 percent." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q152",
    prompt: "You have an Azure subscription named Subscription1. You sign in to the Azure portal and create a resource group named RG1. From Azure documentation, you have the following command that creates a virtual machine named VM1. `az vm create --resource-group RG1 --name VM1 --image UbuntuLTS --generate-ssh-keys`. You need to create VM1 in Subscription1 by using the command. Solution: From a computer that runs Windows 10, install Azure CLI. From PowerShell, sign in to Azure and then run the command. Does this meet the goal?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q153",
    prompt: "You have an Azure subscription named Subscription1. You sign in to the Azure portal and create a resource group named RG1. From Azure documentation, you have the following command that creates a virtual machine named VM1. `az vm create --resource-group RG1 --name VM1 --image UbuntuLTS --generate-ssh-keys`. You need to create VM1 in Subscription1 by using the command. Solution: From a computer that runs Windows 10, install Azure CLI. From a command prompt, sign in to Azure and then run the command. Does this meet the goal?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q154",
    prompt: "You have an Azure environment. You need to create a new Azure virtual machine from a tablet that runs the Android operating system. Solution: You use PowerShell in Azure Cloud Shell. Does this meet the goal?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q155",
    prompt: "[Azure Databricks] is an Apache Spark-based analytics service.",
    options: [
      { id: "a", text: "No change is needed." },
      { id: "b", text: "Azure Data Factory." },
      { id: "c", text: "Azure DevOps." },
      { id: "d", text: "Azure HDInsight." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q156",
    prompt: "Azure Site Recovery provides [fault tolerance] for virtual machines.",
    options: [
      { id: "a", text: "No change is needed." },
      { id: "b", text: "Disaster recovery." },
      { id: "c", text: "Elasticity." },
      { id: "d", text: "High availability." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q157",
    prompt: "An Availability Zone in Azure has physically separate locations [across two continents].",
    options: [
      { id: "a", text: "No change is needed." },
      { id: "b", text: "Within a single Azure region." },
      { id: "c", text: "Within multiple Azure regions." },
      { id: "d", text: "Within a single Azure datacenter." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q158",
    prompt: "Your company plans to migrate all on-premises data to Azure. You need to identify whether Azure complies with the company regional requirements. What should you use?",
    options: [
      { id: "a", text: "The Knowledge Center." },
      { id: "b", text: "Azure Marketplace." },
      { id: "c", text: "The MyApps portal." },
      { id: "d", text: "The Trust Center." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q159",
    prompt: "Azure Key Vault is used to store secrets for [Microsoft Entra ID user accounts].",
    options: [
      { id: "a", text: "No change is needed." },
      { id: "b", text: "Microsoft Entra ID administrative accounts." },
      { id: "c", text: "Personally Identifiable Information (PII)." },
      { id: "d", text: "Server applications." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q160",
    prompt: "After you create a virtual machine, you need to modify the [Network Security Group (NSG)] to allow connections to TCP port 8080 on the virtual machine.",
    options: [
      { id: "a", text: "No change is needed." },
      { id: "b", text: "Virtual network gateway." },
      { id: "c", text: "Virtual network." },
      { id: "d", text: "Route table." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q161",
    prompt: "Your Azure environment contains multiple Azure virtual machines. You need to ensure that a virtual machine named VM1 is accessible from the Internet over HTTP. Solution: You modify a Network Security Group (NSG). Does this meet the goal?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q162",
    prompt: "Your Azure environment contains multiple Azure virtual machines. You need to ensure that a virtual machine named VM1 is accessible from the Internet over HTTP. Solution: You modify a DDoS protection plan. Does this meet the goal?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q163",
    prompt: "[Resource groups] provide organizations with the ability to manage the compliance of Azure resources across multiple subscriptions.",
    options: [
      { id: "a", text: "No change is needed." },
      { id: "b", text: "Management groups." },
      { id: "c", text: "Azure policies." },
      { id: "d", text: "Azure App Service plans." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q164",
    prompt: "Your network contains an Active Directory forest. The forest contains 5,000 user accounts. Your company plans to migrate all network resources to Azure and to decommission the on-premises data center. You need to recommend a solution to minimize the impact on users after the planned migration. What should you recommend?",
    options: [
      { id: "a", text: "Implement Azure Multi-Factor Authentication (MFA)." },
      { id: "b", text: "Sync all the Active Directory user accounts to Microsoft Entra ID." },
      { id: "c", text: "Instruct all users to change their password." },
      { id: "d", text: "Create a guest user account in Microsoft Entra ID for each user." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q165",
    prompt: "What should you use to evaluate whether your company Azure environment meets regulatory requirements?",
    options: [
      { id: "a", text: "The Knowledge Center website." },
      { id: "b", text: "The Advisor blade from the Azure portal." },
      { id: "c", text: "Compliance Manager from the Service Trust Portal." },
      { id: "d", text: "The Security Center blade from the Azure portal." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q166",
    prompt: "The [Microsoft Online Services Privacy Statement] explains what data Microsoft processes, how Microsoft processes the data, and the purpose of processing the data.",
    options: [
      { id: "a", text: "No change is needed." },
      { id: "b", text: "Microsoft Online Services Terms." },
      { id: "c", text: "Microsoft Online Service Level Agreement." },
      { id: "d", text: "Online Subscription Agreement for Microsoft Azure." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q167",
    prompt: "If Microsoft plans to end support for an Azure service that does NOT have a successor service, Microsoft will provide notification at least [12 months] before.",
    options: [
      { id: "a", text: "No change is needed." },
      { id: "b", text: "6 months." },
      { id: "c", text: "90 days." },
      { id: "d", text: "30 days." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q168",
    prompt: "Your company has an Azure subscription that contains the following unused resources: 20 user accounts in Microsoft Entra ID. Five groups in Microsoft Entra ID. 10 public IP addresses. 10 network interfaces. You need to reduce the Azure costs for the company. Solution: You remove the unused network interfaces. Does this meet the goal?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q169",
    prompt: "Your company has an Azure subscription that contains the following unused resources: 20 user accounts in Microsoft Entra ID. Five groups in Microsoft Entra ID. 10 public IP addresses 10. network interfaces. You need to reduce the Azure costs for the company. Solution: You remove the unused public IP addresses. Does this meet the goal?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q170",
    prompt: "Your company has an Azure subscription that contains the following unused resources: 20 user accounts in Microsoft Entra ID. Five groups in Microsoft Entra ID. 10 public IP addresses 10. network interfaces. You need to reduce the Azure costs for the company. Solution: You remove the unused user accounts. Does this meet the goal?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q171",
    prompt: "A support plan solution that gives you best practice information, health status and notifications, and 24/7 access to billing information at the lowest possible cost is a [Standard] support plan.",
    options: [
      { id: "a", text: "No change is needed." },
      { id: "b", text: "Developer." },
      { id: "c", text: "Basic." },
      { id: "d", text: "Professional Direct." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q172",
    prompt: "You can create an Azure support request from [support.microsoft.com].",
    options: [
      { id: "a", text: "No change is needed." },
      { id: "b", text: "The Azure portal." },
      { id: "c", text: "The Knowledge Center." },
      { id: "d", text: "The Security & Compliance admin center." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q173",
    prompt: "Your company has an Azure subscription that contains the following unused resources: 20 user accounts in Microsoft Entra ID. Five groups in Microsoft Entra ID. 10 public IP addresses. 10 network interfaces. You need to reduce the Azure costs for the company. Solution: You remove the unused groups. Does this meet the goal?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q174",
    prompt: "The Azure [Standard] support plan is the lowest cost option to receive 24×7 access to support engineers by phone.",
    options: [
      { id: "a", text: "No change is needed." },
      { id: "b", text: "Developer." },
      { id: "c", text: "Basic." },
      { id: "d", text: "Professional Direct." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q175",
    prompt: "All Azure services that are in public preview are [provided without any documentation].",
    options: [
      { id: "a", text: "No change is needed." },
      { id: "b", text: "Only configurable from Azure CLI." },
      { id: "c", text: "Excluded from the Service Level Agreements." },
      { id: "d", text: "Only configurable from the Azure portal." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q176",
    prompt: "An Azure service is available to all Azure customers when it is in [public preview].",
    options: [
      { id: "a", text: "No change is needed." },
      { id: "b", text: "Private preview." },
      { id: "c", text: "Development." },
      { id: "d", text: "An Enterprise Agreement (EA) subscription." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q177",
    prompt: "Your company has an on-premises network with numerous servers, which they intend to migrate to Azure. You have been tasked with devising a plan that allows for the availability of a few of the servers, in the event that one of the Azure data centers becomes unavailable for a lengthy interval. Solution: You should include elasticity in your plan. Does the solution meet the goal?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q178",
    prompt: "Your company has an on-premises network with numerous servers, which they intend to migrate to Azure. You have been tasked with devising a plan that allows for the availability of a few of the servers, in the event that one of the Azure data centers becomes unavailable for a lengthy interval. Solution: You should include scalability in your plan. Does the solution meet the goal?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q179",
    prompt: "Your company has an on-premises network with numerous servers, which they intend to migrate to Azure. You have been tasked with devising a plan that allows for the availability of a few of the servers, in the event that one of the Azure data centers becomes unavailable for a lengthy interval. Solution: You should include fault tolerance in your plan. Does the solution meet the goal?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q180",
    prompt: "You are tasked with deploying Azure virtual machines for your company. You need to make use of the appropriate cloud deployment solution. Solution: You should make use of Software as a Service (SaaS). Does the solution meet the goal?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q181",
    prompt: "You are tasked with deploying Azure virtual machines for your company. You need to make use of the appropriate cloud deployment solution. Solution: You should make use of Platform as a Service (PaaS). Does the solution meet the goal?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q182",
    prompt: "You are tasked with deploying Azure virtual machines for your company. You need to make use of the appropriate cloud deployment solution. Solution: You should make use of Infrastructure as a Service (IaaS). Does the solution meet the goal?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q183",
    prompt: "Your company has on-premises network includes a large number of servers. They would like to make extra resources available to their users, while keeping capital and operational overheads to a minimum. You are required to make recommendations that should be included in the overall solution. Solution: You should indorse the use of an added data center as part of the solution. Does the solution meet the goal?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q184",
    prompt: "Your company has on-premises network includes a large number of servers. They would like to make extra resources available to their users, while keeping capital and operational overheads to a minimum. You are required to make recommendations that should be included in the overall solution. Solution: You should indorse the use of a hybrid cloud as part of the solution. Does the solution meet the goal?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q185",
    prompt: "Your company has on-premises network includes a large number of servers. They would like to make extra resources available to their users, while keeping capital and operational overheads to a minimum. You are required to make recommendations that should be included in the overall solution. Solution: You should indorse the use of a private cloud as part of the solution. Does the solution meet the goal?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q186",
    prompt: "Your company is planning to migrate all their virtual machines to an Azure pay-as-you-go subscription. The virtual machines are currently hosted on the Hyper-V hosts in a data center. You are required make sure that the intended Azure solution uses the correct expenditure model. Solution: You should recommend the use of the elastic expenditure model. Does the solution meet the goal?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q187",
    prompt: "Your company is planning to migrate all their virtual machines to an Azure pay-as-you-go subscription. The virtual machines are currently hosted on the Hyper-V hosts in a data center. You are required make sure that the intended Azure solution uses the correct expenditure model. Solution: You should recommend the use of the scalable expenditure model. Does the solution meet the goal?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q188",
    prompt: "Your company is planning to migrate all their virtual machines to an Azure pay-as-you-go subscription. The virtual machines are currently hosted on the Hyper-V hosts in a data center. You are required make sure that the intended Azure solution uses the correct expenditure model. Solution: You should recommend the use of the operational expenditure model. Does the solution meet the goal?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q189",
    prompt: "You are required to deploy an Artificial Intelligence (AI) solution in Azure. You want to make sure that you are able to build, test, and deploy predictive analytics for the solution. Solution: You should make use of Azure Cosmos DB. Does the solution meet the goal?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q190",
    prompt: "You are required to deploy an Artificial Intelligence (AI) solution in Azure. You want to make sure that you are able to build, test, and deploy predictive analytics for the solution. Solution: You should make use of Azure Logic Apps. Does the solution meet the goal?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q191",
    prompt: "You are required to deploy an Artificial Intelligence (AI) solution in Azure. You want to make sure that you are able to build, test, and deploy predictive analytics for the solution. Solution: You should make use of Azure Machine Learning Studio. Does the solution meet the goal?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q192",
    prompt: "Your company has infrastructure includes a number of business units that each need a large number of various Azure resources for everyday operation. The resources required by each business unit are identical. You are required to sanction a strategy to create Azure resources automatically. Solution: You recommend that the Azure API Management service be included in the strategy. Does the solution meet the goal?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q193",
    prompt: "Your company has infrastructure includes a number of business units that each need a large number of various Azure resources for everyday operation. The resources required by each business unit are identical. You are required to sanction a strategy to create Azure resources automatically. Solution: You recommend that management groups be included in the strategy. Does the solution meet the goal?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q194",
    prompt: "Your company has infrastructure includes a number of business units that each need a large number of various Azure resources for everyday operation. The resources required by each business unit are identical. You are required to sanction a strategy to create Azure resources automatically. Solution: You recommend that the Azure Resource Manager templates be included in the strategy. Does the solution meet the goal?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q195",
    prompt: "You are tasked with deploying a critical LOB application, which will be installed on a virtual machine, to Azure. You are informed that the application deployment strategy should allow for a guaranteed availability of 99.99 percent. You need to make sure that the strategy requires as little virtual machines and availability zones as possible. Solution: You include two virtual machines and one availability zone in your strategy. Does the solution meet the goal?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q196",
    prompt: "You are tasked with deploying a critical LOB application, which will be installed on a virtual machine, to Azure. You are informed that the application deployment strategy should allow for a guaranteed availability of 99.99 percent. You need to make sure that the strategy requires as little virtual machines and availability zones as possible. Solution: You include one virtual machine and two availability zones in your strategy. Does the solution meet the goal?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q197",
    prompt: "You are tasked with deploying a critical LOB application, which will be installed on a virtual machine, to Azure. You are informed that the application deployment strategy should allow for a guaranteed availability of 99.99 percent. You need to make sure that the strategy requires as little virtual machines and availability zones as possible. Solution: You include two virtual machines and two availability zones in your strategy. Does the solution meet the goal?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q198",
    prompt: "Your company has developers intend to deploy a large number of custom virtual machines on a weekly basis. They will also be removing these virtual machines during the same week it was deployed. Sixty percent of the virtual machines have Windows Server 2016 installed, while the other forty percent has Ubuntu Linux installed. You are required to make sure that the administrative effort, needed for this process, is reduced by employing a suitable Azure service. Solution: you recommend the use of Microsoft Managed Desktop. Does the solution meet the goal?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q199",
    prompt: "Your company has developers intend to deploy a large number of custom virtual machines on a weekly basis. They will also be removing these virtual machines during the same week it was deployed. Sixty percent of the virtual machines have Windows Server 2016 installed, while the other forty percent has Ubuntu Linux installed. You are required to make sure that the administrative effort, needed for this process, is reduced by employing a suitable Azure service. Solution: you recommend the use of Azure Reserved Virtual Machines (VM) Instances.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q200",
    prompt: "Your company has developers intend to deploy a large number of custom virtual machines on a weekly basis. They will also be removing these virtual machines during the same week it was deployed. Sixty percent of the virtual machines have Windows Server 2016 installed, while the other forty percent has Ubuntu Linux installed. You are required to make sure that the administrative effort, needed for this process, is reduced by employing a suitable Azure service. Solution: you recommend the use of Azure DevTest Labs. Does the solution meet the goal?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q201",
    prompt: "Your company has virtual machines (VMs) hosted in Microsoft Azure. The VMs are located in a single Azure virtual network named VNet1. The company has users that work remotely. The remote workers require access to the VMs on VNet1. You need to provide access for the remote workers. What should you do?",
    options: [
      { id: "a", text: "Configure a Site-to-Site (S2S) VPN." },
      { id: "b", text: "Configure a VNet-toVNet VPN." },
      { id: "c", text: "Configure a Point-to-Site (P2S) VPN." },
      { id: "d", text: "Configure DirectAccess on a Windows Server 2012 server VM." },
      { id: "e", text: "Configure a Multi-Site VPN." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q202",
    prompt: "You have been informed by your superiors of the company has intentions to automate server deployment to Azure. There is, however, some concern that administrative credentials could be uncovered during this process. You are required to make sure that during the deployment, the administrative credentials are encrypted using a suitable Azure solution. Solution: You recommend the use of Microsoft Purview Information Protection. Does the solution meet the goal?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q203",
    prompt: "You have been informed by your superiors of the company has intentions to automate server deployment to Azure. There is, however, some concern that administrative credentials could be uncovered during this process. You are required to make sure that during the deployment, the administrative credentials are encrypted using a suitable Azure solution. Solution: You recommend the use of Azure Key Vault. Does the solution meet the goal?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q204",
    prompt: "You have been informed by your superiors of the company has intentions to automate server deployment to Azure. There is, however, some concern that administrative credentials could be uncovered during this process. You are required to make sure that during the deployment, the administrative credentials are encrypted using a suitable Azure solution. Solution: You recommend the use of Azure Multi-Factor Authentication (MFA). Does the solution meet the goal?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q205",
    prompt: "Your company has a Microsoft Entra ID environment. Users occasionally connect to Microsoft Entra ID via the Internet. You have been tasked with making sure that users who connect to Microsoft Entra ID via the internet from an unidentified IP address, are automatically encouraged to change passwords. Solution: You configure the use of Azure Key Vault. Does the solution meet the goal?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q206",
    prompt: "Your company has a Microsoft Entra ID environment. Users occasionally connect to Microsoft Entra ID via the Internet. You have been tasked with making sure that users who connect to Microsoft Entra ID via the internet from an unidentified IP address, are automatically encouraged to change passwords. Solution: You configure the use of Microsoft Entra ID Protection. Does the solution meet the goal?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q207",
    prompt: "Your company has a Microsoft Entra ID environment. Users occasionally connect to Microsoft Entra ID via the Internet. You have been tasked with making sure that users who connect to Microsoft Entra ID via the internet from an unidentified IP address, are automatically encouraged to change passwords. Solution: You configure the use of Microsoft Entra Privileged Identity Management. Does the solution meet the goal?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q208",
    prompt: "You are planning a strategy to deploy numerous web servers and database servers to Azure. This strategy should allow for connection types between the web servers and database servers to be controlled. Solution: You include the Azure Service Bus in your strategy. Does the solution meet the goal?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q209",
    prompt: "You are planning a strategy to deploy numerous web servers and database servers to Azure. This strategy should allow for connection types between the web servers and database servers to be controlled. Solution: You include network security groups (NSGs) in your strategy. Does the solution meet the goal?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q210",
    prompt: "You are planning a strategy to deploy numerous web servers and database servers to Azure. This strategy should allow for connection types between the web servers and database servers to be controlled. Solution: You include a local network gateway in your strategy. Does the solution meet the goal?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q211",
    prompt: "Your company has Active Directory forest includes thousands of user accounts. You have been informed that all network resources will be migrated to Azure. Thereafter, the on-premises data center will be retired. You are required to employ a strategy that reduces the effect on users, once the planned migration has been completed. Solution: You plan to require Azure Multi-Factor Authentication (MFA). Does the solution meet the goal?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q212",
    prompt: "Your company has Active Directory forest includes thousands of user accounts. You have been informed that all network resources will be migrated to Azure. Thereafter, the on-premises data center will be retired. You are required to employ a strategy that reduces the effect on users, once the planned migration has been completed. Solution: You plan to sync all the Active Directory user accounts to Microsoft Entra ID. Does the solution meet the goal?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q213",
    prompt: "Your company has Active Directory forest includes thousands of user accounts. You have been informed that all network resources will be migrated to Azure. Thereafter, the on-premises data center will be retired. You are required to employ a strategy that reduces the effect on users, once the planned migration has been completed. Solution: You plan to enforce password change. Does the solution meet the goal?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q214",
    prompt: "Your developers have created 10 web applications that must be host on Azure. You need to determine which Azure web tier plan to host the web apps. The web tier plan must meet the following requirements: The web apps will use custom domains. The web apps each require 10 GB of storage. The web apps must each run in dedicated compute instances. Load balancing between instances must be included. Costs must be minimized. Which web tier plan should you use?",
    options: [
      { id: "a", text: "Standard." },
      { id: "b", text: "Basic." },
      { id: "c", text: "Free." },
      { id: "d", text: "Shared." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q215",
    prompt: "You are currently trying to generate a number of managed Microsoft SQL Server instances in an Azure environment. During the process, you are presented with a notification informing you that the Azure subscription limits must be increased. You want to make sure that you can complete your task. Solution: You generate a service health alert. Does the solution meet the goal?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q216",
    prompt: "You are currently trying to generate a number of managed Microsoft SQL Server instances in an Azure environment. During the process, you are presented with a notification informing you that the Azure subscription limits must be increased. You want to make sure that you can complete your task. Solution: You alter an Azure policy. Does the solution meet the goal?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q217",
    prompt: "You are currently trying to generate a number of managed Microsoft SQL Server instances in an Azure environment. During the process, you are presented with a notification informing you that the Azure subscription limits must be increased. You want to make sure that you can complete your task. Solution: You generate a new support request. Does the solution meet the goal?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q218",
    prompt: "You are planning to migrate a company to Azure. Each of the company has numerous divisions will have an administrator in place to manage the Azure resources used by their respective division. You want to make sure that the Azure deployment you employ allows for Azure to be segmented for the divisions, while keeping administrative effort to a minimum. Solution: You plan to make use of several Microsoft Entra ID directories. Does the solution meet the goal?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q219",
    prompt: "You are planning to migrate a company to Azure. Each of the company has numerous divisions will have an administrator in place to manage the Azure resources used by their respective division. You want to make sure that the Azure deployment you employ allows for Azure to be segmented for the divisions, while keeping administrative effort to a minimum. Solution: You plan to make use of several resource groups. Does the solution meet the goal?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q220",
    prompt: "You are planning to migrate a company to Azure. Each of the company has numerous divisions will have an administrator in place to manage the Azure resources used by their respective division. You want to make sure that the Azure deployment you employ allows for Azure to be segmented for the divisions, while keeping administrative effort to a minimum. Solution: You plan to make use of several subscriptions. Does the solution meet the goal?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q221",
    prompt: "Your developers have created a portal web app for users in the Miami branch office. The web app will be publicly accessible and used by the Miami users to retrieve customer and product information. The web app is currently running in an on-premises test environment. You plan to host the web app on Azure. You need to determine which Azure web tier plan to host the web app. The web tier plan must meet the following requirements: The website will use the miami.weyland.com URL. The website will be deployed to two instances. SSL support must be included. The website requires 12 GB of storage. Costs must be minimized. Which web tier plan should you use?",
    options: [
      { id: "a", text: "Standard." },
      { id: "b", text: "Basic." },
      { id: "c", text: "Free." },
      { id: "d", text: "Shared." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q222",
    prompt: "Your company has datacenters in Los Angeles and New York. The company has a Microsoft Azure subscription. You are configuring the two datacenters as geo-clustered sites for site resiliency. You need to recommend an Azure storage redundancy option. You have the following data storage requirements: Data must be stored on multiple nodes. Data must be stored on nodes in separate geographic locations. Data can be read from the secondary location as well as from the primary location Which of the following Azure stored redundancy options should you recommend?",
    options: [
      { id: "a", text: "Geo-redundant storage." },
      { id: "b", text: "Read-only geo-redundant storage." },
      { id: "c", text: "Zone-redundant storage." },
      { id: "d", text: "Locally redundant storage." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q223",
    prompt: "Your company has Azure subscription includes a Basic support plan. They would like to request an assessment of an Azure environment has design from Microsoft. This is, however, not supported by the existing plan. You want to make sure that the company subscribes to a support plan that allows this functionality, while keeping expenses to a minimum. Solution: You recommend that the company subscribes to the Standard support plan. Does the solution meet the goal?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q224",
    prompt: "Your company has Azure subscription includes a Basic support plan. They would like to request an assessment of an Azure environment has design from Microsoft. This is, however, not supported by the existing plan. You want to make sure that the company subscribes to a support plan that allows this functionality, while keeping expenses to a minimum. Solution: You recommend that the company subscribes to the Professional Direct support plan. Does the solution meet the goal?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q225",
    prompt: "Your company has Azure subscription includes a Basic support plan. They would like to request an assessment of an Azure environment has design from Microsoft. This is, however, not supported by the existing plan. You want to make sure that the company subscribes to a support plan that allows this functionality, while keeping expenses to a minimum. Solution: You recommend that the company subscribes to the Premier support plan. Does the solution meet the goal?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q226",
    prompt: "A company that has numerous divisions is planning to deploy an Azure environment. The company would like each division has option to pay for the Azure services it utilizes, not be the same. You have been asked to recommend a solution to meet the requirements. Solution: You recommend that an Azure role be created for each division. Does the solution meet the goal?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q227",
    prompt: "A company that has numerous divisions is planning to deploy an Azure environment. The company would like each division has option to pay for the Azure services it utilizes, not be the same. You have been asked to recommend a solution to meet the requirements. Solution: You recommend that an Azure policy be created for each division. Does the solution meet the goal?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q228",
    prompt: "A company that has numerous divisions is planning to deploy an Azure environment. The company would like each division has option to pay for the Azure services it utilizes, not be the same. You have been asked to recommend a solution to meet the requirements. Solution: You recommend that a subscription be created for each division. Does the solution meet the goal?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q229",
    prompt: "An Azure subscription can be associated to multiple Microsoft Entra ID tenants.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q230",
    prompt: "You can change the Microsoft Entra ID tenant to which an Azure subscription is associated.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q231",
    prompt: "When an Azure subscription expires, the associated Microsoft Entra ID tenant is deleted automatically.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q232",
    prompt: "A single Microsoft account can be used to manage multiple Azure subscriptions.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q233",
    prompt: "Two Azure subscriptions can be merged into a single subscription.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q234",
    prompt: "A company can use resources from multiple subscriptions.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q235",
    prompt: "Availability zones can be implemented in all Azure regions.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q236",
    prompt: "Only virtual machines that run Windows Server can be created in availability zones.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q237",
    prompt: "Availability zones are used to replicate data and applications to multiple regions.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q238",
    prompt: "You plan to create an Azure virtual machine. You need to identify which storage service must be used to store the unmanaged data disks of the virtual machine. What should you identify?",
    options: [
      { id: "a", text: "Containers." },
      { id: "b", text: "File shares." },
      { id: "c", text: "Tables." },
      { id: "d", text: "Queues." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q239",
    prompt: "You plan to implement an Azure database solution. You need to implement a database solution that meets the following requirements: Can add data concurrently from multiple regions. Can store JSON documents Which database service should you deploy?",
    options: [
      { id: "a", text: "Azure Cosmos DB." },
      { id: "b", text: "SQL databases." },
      { id: "c", text: "Azure Database for MYSQL servers." },
      { id: "d", text: "Azure Database for PostgreSQL servers." },
      { id: "e", text: "Azure Database for NariaDB servers." },
      { id: "f", text: "SQL servers." },
      { id: "g", text: "SQL Data warehouses." },
      { id: "h", text: "Azure Database Migration Services." },
      { id: "i", text: "Azure Cache for Redis." },
      { id: "j", text: "SQL Server stretch databases." },
      { id: "k", text: "Data factories." },
      { id: "l", text: "SQL elastic pools." },
      { id: "m", text: "Virtual Clusters." },
      { id: "n", text: "Managed databases." },
      { id: "o", text: "Elastic Job agents." },
      { id: "p", text: "SQL managed instances." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q240",
    prompt: "All the Azure resources deployed to a resource group must use the same Azure region.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q241",
    prompt: "If you assign a tag to a resource group, all the Azure resources in that resource group are assigned to the same tag.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q242",
    prompt: "If you assign permissions for a user to manage a resource group, the user can manage all the Azure resources in that resource group.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q243",
    prompt: "You plan to deploy a critical line-of-business application to Azure. The application will run on an Azure virtual machine. You need to recommend a deployment solution for the application. The solution must provide a guaranteed availability of 99.99 percent. What is the minimum number of virtual machines and the minimum number of availability zones you should recommend for the deployment? Minimum number of virtual machines:",
    options: [
      { id: "a", text: "1." },
      { id: "b", text: "2." },
      { id: "c", text: "3." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q244",
    prompt: "You plan to deploy a critical line-of-business application to Azure. The application will run on an Azure virtual machine. You need to recommend a deployment solution for the application. The solution must provide a guaranteed availability of 99.99 percent. What is the minimum number of virtual machines and the minimum number of availability zones you should recommend for the deployment? Minimum number of availability zones:",
    options: [
      { id: "a", text: "1." },
      { id: "b", text: "2." },
      { id: "c", text: "3." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q245",
    prompt: "Data that is stored in an Azure Storage account automatically has at least three copies.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q246",
    prompt: "All data that is copied to an Azure Storage account is backed up automatically to another Azure data center.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q247",
    prompt: "An Azure Storage account can contain up to 2 TB of data and up to one million files.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q248",
    prompt: "If you have Azure resources deployed to every region, you can implement availability zones in all the regions.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q249",
    prompt: "North America is represented by a single Azure region.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q250",
    prompt: "Every Azure region has multiple datacenters.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q251",
    prompt: "Data transfers between Azure services located in different Azure regions are always free.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q252",
    prompt: "You need to be notified when Microsoft plans to perform maintenance that can affect the resources deployed to an Azure subscription. What should you use?",
    options: [
      { id: "a", text: "Azure Monitor." },
      { id: "b", text: "Azure Service Health." },
      { id: "c", text: "Azure Advisor." },
      { id: "d", text: "Microsoft Trust Center." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q253",
    prompt: "A Windows Virtual Desktop session host can run Windows 10 only.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q254",
    prompt: "A Windows Virtual Desktop host pool that includes 20 session hosts supports a maximum of 20 simultaneous user connections.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q255",
    prompt: "Windows Virtual Desktop supports desktop and app virtualization.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q256",
    prompt: "[...] can calculate cost savings due to reduced electricity consumption as a result of migrating on-premises Microsoft SQL servers to Azure.",
    options: [
      { id: "a", text: "The Azure Migrate: Server Assessment tool." },
      { id: "b", text: "The Azure Total Cost of Ownership (TCO) calculator." },
      { id: "c", text: "The Database Migration Assistant." },
      { id: "d", text: "The pricing calculator in Azure." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q257",
    prompt: "You can use Availability Zones in Azure to protect Azure virtual machines from a datacenter failure.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q258",
    prompt: "You can use Availability Zones in Azure to protect Azure virtual machines from a region failure.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q259",
    prompt: "You can use Availability Zones in Azure to protect Azure managed disks from a datacenter failure.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q260",
    prompt: "An Azure subscription can have multiple account administrators.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q261",
    prompt: "An Azure subscription can be managed by using a Microsoft account only.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q262",
    prompt: "An Azure resource group can contain multiple Azure subscriptions.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q263",
    prompt: "To use Microsoft Entra ID credentials to sign in to a computer that runs Windows 10, the computer must be joined to Microsoft Entra ID.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q264",
    prompt: "Users in Microsoft Entra ID are organized by using resource groups.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q265",
    prompt: "Microsoft Entra ID groups support dynamic membership rules.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q266",
    prompt: "You plan to deploy several Azure virtual machines. You need to ensure that the services running on the virtual machines remain available if a single data center fails. What are two possible solutions?",
    options: [
      { id: "a", text: "Deploy the virtual machines to two or more availability zones." },
      { id: "b", text: "Deploy the virtual machines to two or more resource groups." },
      { id: "c", text: "Deploy the virtual machines to a scale set." },
      { id: "d", text: "Deploy the virtual machines to two or more regions." },
    ],
    correctOptionId: "a,d"
  },

  {
    id: "q267",
    prompt: "Azure Monitor can monitor the performance of on-premises computers.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q268",
    prompt: "Azure Monitor can send alerts to Microsoft Entra ID security groups.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q269",
    prompt: "Azure Monitor can trigger alerts based on data in an Azure Log Analytics workspace.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q270",
    prompt: "From Azure Service Health, an administrator can view the health of all the services in an Azure environment.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q271",
    prompt: "From Azure Service Health, an administrator can create a rule to be alerted if an Azure service fails.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q272",
    prompt: "From Azure Service Health, an administrator can prevent a service failure.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q273",
    prompt: "You need to identify which blades in the Azure portal must be used to perform the following task: Monitor the health of Azure services.",
    options: [
      { id: "a", text: "Monitor." },
      { id: "b", text: "Subscriptions." },
      { id: "c", text: "Marketplace." },
      { id: "d", text: "Advisor." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q274",
    prompt: "You need to identify which blades in the Azure portal must be used to perform the following task: Browse available virtual machine images.",
    options: [
      { id: "a", text: "Monitor." },
      { id: "b", text: "Subscriptions." },
      { id: "c", text: "Marketplace." },
      { id: "d", text: "Advisor." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q275",
    prompt: "You need to identify which blades in the Azure portal must be used to perform the following task: View security recommendations.",
    options: [
      { id: "a", text: "Monitor." },
      { id: "b", text: "Subscriptions." },
      { id: "c", text: "Marketplace." },
      { id: "d", text: "Advisor." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q276",
    prompt: "Azure Advisor can generate a list of Azure virtual machines that are protected by Azure Backup.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q277",
    prompt: "If you implement the security recommendations provided by Azure Advisor, your company secure score will decrease.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q278",
    prompt: "To maintain Microsoft support, you must implement the security recommendations provided by Azure Advisor within a period of 30 days.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q279",
    prompt: "What can you use to automatically send an alert if an administrator stops an Azure virtual machine?",
    options: [
      { id: "a", text: "Azure Advisor." },
      { id: "b", text: "Azure Service Health." },
      { id: "c", text: "Azure Monitor." },
      { id: "d", text: "Azure Network Watcher." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q280",
    prompt: "You have an Azure environment. You need to create a new Azure virtual machine from a tablet that runs the Android operating system. What are three possible solutions?",
    options: [
      { id: "a", text: "Use Bash in Azure Cloud Shell." },
      { id: "b", text: "Use PowerShell in Azure Cloud Shell." },
      { id: "c", text: "Use the PowerApps portal." },
      { id: "d", text: "Use the Security & Compliance admin center." },
      { id: "e", text: "Use the Azure portal." },
    ],
    correctOptionId: "a,b,e"
  },

  {
    id: "q281",
    prompt: "Azure Advisor provides recommendations on how to improve the security of a Microsoft Entra ID environment.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q282",
    prompt: "Azure Advisor provides recommendations on how to reduce the cost of running Azure virtual machines.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q283",
    prompt: "Azure Advisor provides recommendations on how to configure the network settings on Azure virtual machines.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q284",
    prompt: "Several support engineers plan to manage Azure by using the Computer1-Windows 10. You need to identify which Azure management tools can be used.",
    options: [
      { id: "a", text: "The Azure CLI and the Azure portal." },
      { id: "b", text: "The Azure portal and Azure PowerShell." },
      { id: "c", text: "The Azure CLI and Azure PowerShell." },
      { id: "d", text: "The Azure CLI, the Azure portal, and Azure PowerShell." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q285",
    prompt: "Several support engineers plan to manage Azure by using the Computer2-Ubuntu. You need to identify which Azure management tools can be used.",
    options: [
      { id: "a", text: "The Azure CLI and the Azure portal." },
      { id: "b", text: "The Azure portal and Azure PowerShell." },
      { id: "c", text: "The Azure CLI and Azure PowerShell." },
      { id: "d", text: "The Azure CLI, the Azure portal, and Azure PowerShell." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q286",
    prompt: "Several support engineers plan to manage Azure by using the Computer3-MacOS Mojave. You need to identify which Azure management tools can be used.",
    options: [
      { id: "a", text: "The Azure CLI and the Azure portal." },
      { id: "b", text: "The Azure portal and Azure PowerShell." },
      { id: "c", text: "The Azure CLI and Azure PowerShell." },
      { id: "d", text: "The Azure CLI, the Azure portal, and Azure PowerShell." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q287",
    prompt: "You can access Compliance Manager from the [...].",
    options: [
      { id: "a", text: "Microsoft Entra ID admin center." },
      { id: "b", text: "Azure portal." },
      { id: "c", text: "Microsoft 365 Admin Center." },
      { id: "d", text: "Microsoft Service Trust Portal." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q288",
    prompt: "An Azure administrator plans to run a PowerShell script that creates Azure resources. You need to recommend which computer configuration to use to run the script. Which three computers can run the script?",
    options: [
      { id: "a", text: "A computer that runs macOS and has PowerShell Core 6.0 installed." },
      { id: "b", text: "A computer that runs Windows 10 and has the Azure PowerShell module installed." },
      { id: "c", text: "A computer that runs Linux and has the Azure PowerShell module installed." },
      { id: "d", text: "A computer that runs Linux and has the Azure CLI tools installed." },
      { id: "e", text: "A computer that runs Chrome OS and uses Azure Cloud Shell." },
    ],
    correctOptionId: "a,b,e"
  },

  {
    id: "q289",
    prompt: "Azure Firewall will encrypt all the network traffic sent from Azure to the Internet.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q290",
    prompt: "A Network Security Group (NSG) will encrypt all the network traffic sent from Azure to the Internet.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q291",
    prompt: "Azure virtual machines that run Windows Server 2016 can encrypt network traffic sent to the Internet.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q292",
    prompt: "Microsoft Defender for Cloud can monitor Azure resources and on-premises resources.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q293",
    prompt: "All Microsoft Defender for Cloud features are free.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q294",
    prompt: "From Microsoft Defender for Cloud, you can download a Regulatory Compliance report.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q295",
    prompt: "You plan to implement several security services for an Azure environment. You need to identify which Azure services must be used to meet the following security requirements: Monitor threats by using sensors.",
    options: [
      { id: "a", text: "Azure Monitor." },
      { id: "b", text: "Microsoft Defender for Cloud." },
      { id: "c", text: "Microsoft Entra ID Identity Protection." },
      { id: "d", text: "Microsoft Defender for Identity." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q296",
    prompt: "You plan to implement several security services for an Azure environment. You need to identify which Azure services must be used to meet the following security requirements: Enforce Azure Multi-Factor Authentication (MFA) based on a condition.",
    options: [
      { id: "a", text: "Azure Monitor." },
      { id: "b", text: "Microsoft Defender for Cloud." },
      { id: "c", text: "Microsoft Entra ID Identity Protection." },
      { id: "d", text: "Microsoft Defender for Identity." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q297",
    prompt: "Your Azure environment contains multiple Azure virtual machines. You need to ensure that a virtual machine named VM1 is accessible from the Internet over HTTP. What are two possible solutions?",
    options: [
      { id: "a", text: "Modify an Azure Traffic Manager profile." },
      { id: "b", text: "Modify a Network Security Group (NSG)." },
      { id: "c", text: "Modify a DDoS protection plan." },
      { id: "d", text: "Modify an Azure firewall." },
    ],
    correctOptionId: "b,d"
  },

  {
    id: "q298",
    prompt: "You can enable Just In Time (JIT) VM access by using [...].",
    options: [
      { id: "a", text: "Azure Bastion." },
      { id: "b", text: "Azure Firewall." },
      { id: "c", text: "Azure Front Door." },
      { id: "d", text: "Microsoft Defender for Cloud." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q299",
    prompt: "You can associate a Network Security Group (NSG) to a virtual network subnet.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q300",
    prompt: "You can associate a Network Security Group (NSG) to a virtual network.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q301",
    prompt: "You can associate a Network Security Group (NSG) to a network interface.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q302",
    prompt: "After you create a virtual machine, you need to modify to allow connections to TCP port 8080 on the virtual machine [...].",
    options: [
      { id: "a", text: "Network Security Group (NSG)." },
      { id: "b", text: "Virtual network gateway." },
      { id: "c", text: "Virtual network." },
      { id: "d", text: "Route table." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q303",
    prompt: "You can create custom Azure roles to control access to resources.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q304",
    prompt: "A user account can be assigned to multiple Azure roles.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q305",
    prompt: "A resource group can have the Owner role assigned to multiple users.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q306",
    prompt: "You need to collect and automatically analyze security events from Microsoft Entra ID. What should you use?",
    options: [
      { id: "a", text: "Azure Sentinel." },
      { id: "b", text: "Azure Synapse Analytics." },
      { id: "c", text: "Microsoft Entra Connect." },
      { id: "d", text: "Azure Key Vault." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q307",
    prompt: "From [...] you can view which user turned off a specific virtual machine during the last 14 days.",
    options: [
      { id: "a", text: "Azure Access Control IAM." },
      { id: "b", text: "Azure Event Hubs." },
      { id: "c", text: "Azure Activity Log." },
      { id: "d", text: "Azure Service Health." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q308",
    prompt: "Which Azure service can you use as a security information and event management (SIEM) solution?",
    options: [
      { id: "a", text: "Azure Analysis Services." },
      { id: "b", text: "Azure Sentinel." },
      { id: "c", text: "Microsoft Purview Information Protection." },
      { id: "d", text: "Azure Cognitive Services." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q309",
    prompt: "Your company implements [Azure policies] to automatically add a watermark to Microsoft Word documents that contain credit card information.",
    options: [
      { id: "a", text: "No change is needed." },
      { id: "b", text: "DDoS protection." },
      { id: "c", text: "Microsoft Purview Information Protection." },
      { id: "d", text: "Microsoft Entra ID Identity Protection." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q310",
    prompt: "You have an Azure virtual network named VNET1 in a resource group named RG1. You assign the Azure Policy definition of Not Allowed Resource Type and specify that virtual networks are not an allowed resource type in RG1. VNET1 [...].",
    options: [
      { id: "a", text: "is deleted automatically." },
      { id: "b", text: "is moved automatically to another resource group." },
      { id: "c", text: "continues to function normally." },
      { id: "d", text: "is now a read-only object." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q311",
    prompt: "You can create Group Polices in Microsoft Entra ID.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q312",
    prompt: "You can join Windows 10 devices to Microsoft Entra ID.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q313",
    prompt: "You can join Android devices to Microsoft Entra ID.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q314",
    prompt: "The [...] explains what data Microsoft processes, how Microsoft processes the data, and the purpose of processing the data.",
    options: [
      { id: "a", text: "Microsoft Online Services Privacy Statement." },
      { id: "b", text: "Microsoft Online Services Terms." },
      { id: "c", text: "Microsoft Online Service Level Agreement." },
      { id: "d", text: "Online Subscription Agreement for Microsoft Azure." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q315",
    prompt: "An Azure Policy initiative definition is a [...].",
    options: [
      { id: "a", text: "collection of policy definitions." },
      { id: "b", text: "collection of Azure Policy definition assignments." },
      { id: "c", text: "group of Azure Blueprints definitions." },
      { id: "d", text: "group of role-based access control (RBAC) role assignments." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q316",
    prompt: "[...] provide organizations with the ability to manage the compliance of Azure resources across multiple subscriptions.",
    options: [
      { id: "a", text: "Resource groups." },
      { id: "b", text: "Management groups." },
      { id: "c", text: "Azure policies." },
      { id: "d", text: "Azure App Service plans." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q317",
    prompt: "General Data Protection Regulation (GDPR) defines data protection and privacy rules.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q318",
    prompt: "General Data Protection Regulation (GDPR) applies to companies that offer goods or services to individuals in the EU.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q319",
    prompt: "Azure can be used to build a General Data Protection Regulation (GDPR)-compliant infrastructure.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q320",
    prompt: "You can add an Azure Resource Manager template to an Azure blueprint.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q321",
    prompt: "You can assign an Azure blueprint to a resource group.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q322",
    prompt: "You can use Azure Blueprints to grant permissions to a resource.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q323",
    prompt: "Azure China is operated by Microsoft.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q324",
    prompt: "Azure Government is operated by Microsoft.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q325",
    prompt: "Azure Government is available only to US government agencies and their partners.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q326",
    prompt: "An Azure resource can have multiple Delete locks.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q327",
    prompt: "An Azure resource inherits locks from its resource group.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q328",
    prompt: "If an Azure resource has a Read-only lock, you can add a Delete lock to the resource.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q329",
    prompt: "Authorization to access Azure resources can be provided only to Microsoft Entra ID users.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q330",
    prompt: "Identities stored in Microsoft Entra ID, third-party cloud services, and on-premises Active Directory can be used to access Azure resources.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q331",
    prompt: "Azure has built-in authentication and authorization services that provide secure access to Azure resources.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q332",
    prompt: "Identities stored in an on-premises Active Directory can be synchronized to Microsoft Entra ID.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q333",
    prompt: "You can view your company regulatory compliance report from [...].",
    options: [
      { id: "a", text: "Azure Advisor." },
      { id: "b", text: "Azure Analysis Services." },
      { id: "c", text: "Azure Monitor." },
      { id: "d", text: "Microsoft Defender for Cloud." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q334",
    prompt: "Your company has an Azure subscription that contains resources in several regions. You need to ensure that administrators can only create resources in those regions. What should you use?",
    options: [
      { id: "a", text: "A read-only lock." },
      { id: "b", text: "An Azure policy." },
      { id: "c", text: "A management group." },
      { id: "d", text: "A reservation." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q335",
    prompt: "Microsoft Entra ID requires the implementation of domain controllers on Azure virtual machines.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q336",
    prompt: "Microsoft Entra ID provides authentication services for resources hosted in Azure and Microsoft 365.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q337",
    prompt: "Each user account in Microsoft Entra ID can be assigned only one license.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q338",
    prompt: "To implement an Azure Multi-Factor Authentication (MFA) solution, you must sync on-premises identities to the cloud.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q339",
    prompt: "Two valid methods for Azure Multi-Factor Authentication (MFA) are picture identification and a passport number.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q340",
    prompt: "You can configure the Microsoft Entra ID activity logs to appear in Azure Monitor.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q341",
    prompt: "From Azure Monitor, you can monitor resources across multiple Azure subscriptions.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q342",
    prompt: "From Azure Monitor, you can create alerts.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q343",
    prompt: "You create a resource group named RG1 in Azure Resource Manager. You need to prevent the accidental deletion of the resources in RG1. Which setting should you use?",
    options: [
      { id: "a", text: "Quickstart." },
      { id: "b", text: "Resource costs." },
      { id: "c", text: "Deployments." },
      { id: "d", text: "Policies." },
      { id: "e", text: "Properties." },
      { id: "f", text: "Locks." },
      { id: "g", text: "Automation script." },
    ],
    correctOptionId: "f"
  },

  {
    id: "q344",
    prompt: "You have a resource group named RG1. You need to prevent the creation of virtual machines only in RG1. The solution must ensure that other objects can be created in RG1. What should you use?",
    options: [
      { id: "a", text: "A lock." },
      { id: "b", text: "An Azure role." },
      { id: "c", text: "A tag." },
      { id: "d", text: "An Azure policy." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q345",
    prompt: "You have an Azure subscription and 100 Windows 10 devices. You need to ensure that only users whose devices have the latest security patches installed can access Microsoft Entra ID-integrated applications. What should you implement?",
    options: [
      { id: "a", text: "A conditional access policy." },
      { id: "b", text: "Azure Bastion." },
      { id: "c", text: "Azure Firewall." },
      { id: "d", text: "Azure Policy." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q346",
    prompt: "[...] enables users to authenticate to multiple applications by using single sign-on (SSO).",
    options: [
      { id: "a", text: "Application security groups in Azure." },
      { id: "b", text: "Microsoft Entra ID." },
      { id: "c", text: "Azure Key Vault." },
      { id: "d", text: "Microsoft Defender for Cloud." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q347",
    prompt: "You deploy an Azure resource. The resource becomes unavailable for an extended period due to a service outage. Microsoft will [...].",
    options: [
      { id: "a", text: "refund your bank account." },
      { id: "b", text: "migrate the resource to another subscription." },
      { id: "c", text: "credit your Azure account." },
      { id: "d", text: "send you a coupon code that you can redeem for Azure credits." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q348",
    prompt: "Which task can you perform by using Azure Advisor?",
    options: [
      { id: "a", text: "Integrate Active Directory and Microsoft Entra ID." },
      { id: "b", text: "Estimate the costs of an Azure solution." },
      { id: "c", text: "Confirm that Azure subscription security follows best practices." },
      { id: "d", text: "Evaluate which on-premises resources can be migrated to Azure." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q349",
    prompt: "If your company uses an Azure free account, you will only be able to use a subset of Azure services.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q350",
    prompt: "All Azure free accounts expire after a specific period.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q351",
    prompt: "You can create up to 10 Azure free accounts by using the same Microsoft account.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q352",
    prompt: "All Azure services in private preview must be accessed by using a separate Azure portal.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q353",
    prompt: "Azure services in public preview can be used in production environments.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q354",
    prompt: "Azure services in public preview are subject to a Service Level Agreement (SLA).",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q355",
    prompt: "A Standard support plan is included in an Azure free account.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q356",
    prompt: "Match the Azure services to the appropriate descriptions. ![Question 356](images/question356.png)",
    options: [
      { id: "a", text: "Extends on-premises networks to the Microsoft cloud via a private connection: VPN gateway. Combines two or more Azure virtual networks into a single logical virtual network: ExpressRoute. Provides an encrypted connection from on-premises networks to Azure via a public network: Virtual network peering." },
      { id: "b", text: "Extends on-premises networks to the Microsoft cloud via a private connection: ExpressRoute. Combines two or more Azure virtual networks into a single logical virtual network: VPN gateway. Provides an encrypted connection from on-premises networks to Azure via a public network: Virtual network peering." },
      { id: "c", text: "Extends on-premises networks to the Microsoft cloud via a private connection: VPN gateway. Combines two or more Azure virtual networks into a single logical virtual network: Virtual network peering. Provides an encrypted connection from on-premises networks to Azure via a public network: ExpressRoute." },
      { id: "d", text: "Extends on-premises networks to the Microsoft cloud via a private connection: ExpressRoute. Combines two or more Azure virtual networks into a single logical virtual network: Virtual network peering. Provides an encrypted connection from on-premises networks to Azure via a public network: VPN gateway." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q357",
    prompt: "Support from MSDN forums is only provided to companies that have a pay-as-you-go subscription.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q358",
    prompt: "A user who is assigned the Owner role can transfer ownership of an Azure subscription.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q359",
    prompt: "You can convert the Azure subscription of your company from Free Trial to Pay-As-You-Go.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q360",
    prompt: "With Azure Reservations, you pay less fer virtual machines than with pay as-you-go pricing.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q361",
    prompt: "Two Azure virtual machines that use the B25 size have the same monthly costs.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q362",
    prompt: "When an Azure virtual machine is stopped, you continue to pay storage costs for the virtual machine.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q363",
    prompt: "How should you calculate the monthly uptime percentage? [...] ÷ Maximum Available Minutes × 100.",
    options: [
      { id: "a", text: "Downtime in Minutes." },
      { id: "b", text: "Maximum Available Minutes." },
      { id: "c", text: "(Maximum Available Minutes-Downtime in Minutes)." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q364",
    prompt: "How should you calculate the monthly uptime percentage? (Maximum Available Minutes-Downtime in Minutes) ÷ [...] × 100.",
    options: [
      { id: "a", text: "60." },
      { id: "b", text: "1,440." },
      { id: "c", text: "Maximum Available Minutes." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q365",
    prompt: "How should you calculate the monthly uptime percentage? (Maximum Available Minutes-Downtime in Minutes) ÷ Maximum Available Minutes × [...].",
    options: [
      { id: "a", text: "100." },
      { id: "b", text: "99.99." },
      { id: "c", text: "1.440." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q366",
    prompt: "By creating additional resource groups in an Azure subscription, additional costs are incurred.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q367",
    prompt: "By copying several gigabits of data to Azure from an on-premises network over a VPN, additional data transfer costs are incurred.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q368",
    prompt: "An Azure service is available to all Azure customers when it is in [...].",
    options: [
      { id: "a", text: "Public preview." },
      { id: "b", text: "Private preview." },
      { id: "c", text: "Development." },
      { id: "d", text: "Development an Enterprise Agreement (EA) subscription." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q369",
    prompt: "Most Azure services are introduced in private preview before being introduced in public preview, and then in general availability.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q370",
    prompt: "Azure services in public preview can be managed only by using the Azure CLI.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q371",
    prompt: "The cost of an Azure service in private preview decreases when the service becomes generally available.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q372",
    prompt: "Your Azure trial account expired last week. You are now unable to [...].",
    options: [
      { id: "a", text: "create additional Microsoft Entra ID user accounts." },
      { id: "b", text: "start an existing Azure virtual machine." },
      { id: "c", text: "access your data stored in Azure." },
      { id: "d", text: "access the Azure portal." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q373",
    prompt: "Your company plans to purchase an Azure subscription. The company has support policy states that the Azure environment must provide an option to access support engineers by phone or email. You need to recommend which support plan meets the support policy requirement. Solution: Recommend a Professional Direct support plan. Does this meet the goal?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q374",
    prompt: "Your company has 10 departments. The company plans to implement an Azure environment. You need to ensure that each department can use a different payment option for the Azure services it consumes. What should you create for each department?",
    options: [
      { id: "a", text: "A reservation." },
      { id: "b", text: "A subscription." },
      { id: "c", text: "A resource group." },
      { id: "d", text: "A container instance." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q375",
    prompt: "An Azure free account has a spending limit.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q376",
    prompt: "An Azure free account has a limit of 2TB of data that can be uploaded to Azure.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q377",
    prompt: "An Azure free account can contain an unlimited number of web apps.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q378",
    prompt: "An Azure service in private preview is released to all Azure customers.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q379",
    prompt: "An Azure service in public preview is released to all Azure customers.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q380",
    prompt: "An Azure service in general availability is released to a subset of Azure customers.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q381",
    prompt: "With a consumption-based plan, you pay a fixed rate for all data sent to or from virtual machines hosted in the cloud.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q382",
    prompt: "With a consumption-based plan, you reduce overall costs by paying only for extra capacity when it is required.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q383",
    prompt: "Serverless computing is an example of a consumption-based plan.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q384",
    prompt: "The cost of Azure resources can vary between regions.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q385",
    prompt: "An Azure Reservation is used to reserve server capacity at a specific data center.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q386",
    prompt: "You can stop an Azure SQL Database instance to decrease costs.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q387",
    prompt: "You have an application that is comprised of an Azure web app that has a Service Level Agreement (SLA) of 99.95 percent and an Azure SQL database that has an SLA of 99.99 percent. The composite SLA for the application is [...].",
    options: [
      { id: "a", text: "the product of both SLAS, which equals 99.94 percent." },
      { id: "b", text: "the lowest SLA associated to the application, which is 99.95 percent." },
      { id: "c", text: "the highest SLA associated to the application, which is 99.99 percent." },
      { id: "d", text: "the difference between the two SLAS, which is 0.05 percent." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q388",
    prompt: "The Service Level Agreement (SLA) guaranteed uptime for paid Azure services is at least 99.9 percent.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q389",
    prompt: "Companies can increase the Service Level Agreement (SLA) guaranteed uptime by adding Azure resources to multiple regions.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q390",
    prompt: "Companies can increase the Service Level Agreement (SLA) guaranteed uptime by purchasing multiple subscriptions.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q391",
    prompt: "Match the Azure Services service to the correct description. ![Question 391](images/question391.png)",
    options: [
      { id: "a", text: "A managed service that provides bidirectional communication between IoT devices and Azure: IoT Hub. A fully managed software as a service (SaaS) solution to connect, monitor, and manage IoT devices at scale: IoT Central. A software and hardware solution that provides communication and security features for IoT devices: Azure Sphere." },
      { id: "b", text: "A managed service that provides bidirectional communication between IoT devices and Azure: Azure Sphere. A fully managed software as a service (SaaS) solution to connect, monitor, and manage IoT devices at scale: IoT Hub. A software and hardware solution that provides communication and security features for IoT devices: IoT Central." },
      { id: "c", text: "A managed service that provides bidirectional communication between IoT devices and Azure: Azure Sphere. A fully managed software as a service (SaaS) solution to connect, monitor, and manage IoT devices at scale: IoT Central. A software and hardware solution that provides communication and security features for IoT devices: IoT Hub." },
      { id: "d", text: "A managed service that provides bidirectional communication between IoT devices and Azure: IoT Hub. A fully managed software as a service (SaaS) solution to connect, monitor, and manage IoT devices at scale: Azure Sphere. A software and hardware solution that provides communication and security features for IoT devices: IoT Central." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q392",
    prompt: "You need to request that Microsoft increase a subscription quota limit for your company. Which blade should you use from the Azure portal?",
    options: [
      { id: "a", text: "Create a resource." },
      { id: "b", text: "All services." },
      { id: "c", text: "Favorites." },
      { id: "d", text: "Dashboard." },
      { id: "e", text: "All resources." },
      { id: "f", text: "Resource groups." },
      { id: "g", text: "App Services." },
      { id: "h", text: "Function Apps." },
      { id: "i", text: "SQL databases." },
      { id: "j", text: "Azure Cosmos DB." },
      { id: "k", text: "Virtual machines." },
      { id: "l", text: "Load balancers." },
      { id: "m", text: "Help + support." },
    ],
    correctOptionId: "m"
  },

  {
    id: "q393",
    prompt: "You can use in Azure to send email alerts when the cost of the current billing period for an Azure subscription exceeds a specified limit.",
    options: [
      { id: "a", text: "Advisor recommendations." },
      { id: "b", text: "Access control (IAM)." },
      { id: "c", text: "Budget alerts." },
      { id: "d", text: "Compliance." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q394",
    prompt: "From the Azure portal, you can distinguish between services that are generally available and services that are in public preview.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q395",
    prompt: "After an Azure service becomes generally available, the service is no longer updated with new features.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q396",
    prompt: "When you create Azure resources for a service in public preview, you must recreate the resources once the service becomes generally available.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q397",
    prompt: "When using an Azure ExpressRoute connection, inbound data traffic from an on-premises network to Azure is always free.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q398",
    prompt: "Outbound data traffic from Azure to an on-premises network is always free.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q399",
    prompt: "Data traffic between Azure services within the same Azure region is always free.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q400",
    prompt: "Your company has an Azure subscription that contains the following unused resources: 20 user accounts in Microsoft Entra ID. Five groups in Microsoft Entra ID. 10 public IP addresses. 10 network interfaces. You need to reduce the Azure costs for the company. Which unused resources should you remove?",
    options: [
      { id: "a", text: "The network interfaces." },
      { id: "b", text: "The public IP addresses." },
      { id: "c", text: "The groups." },
      { id: "d", text: "The user accounts." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q401",
    prompt: "If an Azure virtual machine has a status of Stopped (deallocated), you will continue to pay for.",
    options: [
      { id: "a", text: "Compute capacity." },
      { id: "b", text: "I/O operations." },
      { id: "c", text: "Networking." },
      { id: "d", text: "Storage." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q402",
    prompt: "Storing 1 TB of data in Azure Blob storage will always cost the same, regardless of the Azure region in which the data is located.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q403",
    prompt: "When you use a general-purpose v2 Azure Storage account, you are only charged for the amount of data that is stored. All read and write operations are free.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q404",
    prompt: "Transferring data between Azure Storage accounts in different Azure regions is free.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q405",
    prompt: "In Microsoft Entra ID Premium P2, at least 99.9 percent availability is guaranteed.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q406",
    prompt: "The Service Level Agreement (SLA) for Microsoft Entra ID Premium P2 is the same as the SLA for Microsoft Entra ID Free.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q407",
    prompt: "All paying Azure customers receive a credit if their monthly uptime percentage is below the guaranteed amount in the Service Level Agreement (SLA).",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q408",
    prompt: "Adding resource groups in an Azure subscription generates additional costs.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q409",
    prompt: "Copying 10 GB of data to Azure from an on-premises network over a VPN generates additional Azure data transfer costs.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q410",
    prompt: "Copying 10 GB of data from Azure to an on-premises network over a VPN generates additional Azure data transfer costs.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q411",
    prompt: "Each Azure subscription can contain multiple account administrators.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q412",
    prompt: "Each Azure subscription can be managed by using a Microsoft account only.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q413",
    prompt: "An Azure resource group contains multiple Azure subscriptions.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q414",
    prompt: "Data that is stored in the Archive access tier of an Azure Storage account [...].",
    options: [
      { id: "a", text: "can be accessed at any time by using azcopy.exe." },
      { id: "b", text: "can only be read by using Azure Backup." },
      { id: "c", text: "must be restored before the data can be accessed." },
      { id: "d", text: "must be rehydrated before the data can be accessed." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q415",
    prompt: "You deploy an Azure resource. The resource becomes unavailable for an extended period due to a service outage. Microsoft will automatically [refund your bank account].",
    options: [
      { id: "a", text: "No change is needed." },
      { id: "b", text: "Automatically migrate the resource to another subscription." },
      { id: "c", text: "Automatically credit your account." },
      { id: "d", text: "Send you a coupon code that you can redeem for Azure credits." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q416",
    prompt: "When you need to delegate permissions to several Azure virtual machines simultaneously, you must deploy the Azure virtual machines [to the same Azure region].",
    options: [
      { id: "a", text: "No change is needed." },
      { id: "b", text: "By using the same Azure Resource Manager template." },
      { id: "c", text: "To the same resource group." },
      { id: "d", text: "To the same availability zone." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q417",
    prompt: "Azure Cosmos DB is an example of a [...] offering.",
    options: [
      { id: "a", text: "Platform as a Service (PaaS)." },
      { id: "b", text: "Infrastructure as a service (IaaS)." },
      { id: "c", text: "Serverless." },
      { id: "d", text: "Software as a service (SaaS)." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q418",
    prompt: "The Microsoft Service Trust Portal can be accessed by using a Microsoft cloud services account.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q419",
    prompt: "Compliance Manager can be used to track your company regulatory compliance activities related to Microsoft cloud services.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q420",
    prompt: "The My Library feature can be used to save Microsoft Service Trust Portal documents and resources in a single location.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q421",
    prompt: "Your company plans to migrate all its data and resources to Azure. The company migration plan states that only Platform as a Service (PaaS) solutions must be used in Azure. You need to deploy an Azure environment that supports the planned migration. Solution: You create an Azure App Service and Azure Storage accounts. Does this meet the goal?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q422",
    prompt: "Data that is stored in the Archive access tier of an Azure Storage account [can be access at any time by using azcopy.exe].",
    options: [
      { id: "a", text: "No change is needed." },
      { id: "b", text: "can only be read by using Azure Backup." },
      { id: "c", text: "must be restored before the data can be accessed." },
      { id: "d", text: "must be restored before the data can be accessed." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q423",
    prompt: "To implement a hybrid cloud model, a company must always migrate from a private cloud model.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q424",
    prompt: "A company can extend the computing resources of its internal network by using the public cloud.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q425",
    prompt: "Azure DevOps Services allows developers to deploy or update applications to Azure using Continuous Integration/Continuous Delivery (CI/CD) pipelines.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q426",
    prompt: "Azure DevOps Services includes a Git repository for developers to store code.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q427",
    prompt: "Azure DevOps Services can be used to build and host web apps.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q428",
    prompt: "You plan to deploy 20 virtual machines to an Azure environment. To ensure that a virtual machine named VM1 cannot connect to the other virtual machines, VM1 must [be deployed to a separate virtual network].",
    options: [
      { id: "a", text: "No change is needed." },
      { id: "b", text: "run a different operating system than the other virtual machines." },
      { id: "c", text: "be deployed to a separate resource group." },
      { id: "d", text: "have two network interfaces." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q429",
    prompt: "You plan to extend your company network to Azure. The network contains a VPN appliance that uses an IP address of 131.107.200.1. You need to create an Azure resource that identifies the VPN appliance. Which Azure resource should you create?",
    options: [
      { id: "a", text: "Virtual networks." },
      { id: "b", text: "Load balancers." },
      { id: "c", text: "Virtual networks gateways." },
      { id: "d", text: "DNS zones." },
      { id: "e", text: "Traffic Manager profiles." },
      { id: "f", text: "Network  Watcher." },
      { id: "g", text: "Virtual networks (classic)." },
      { id: "h", text: "Application gateways." },
      { id: "i", text: "Local network gateways." },
      { id: "j", text: "CDN profiles." },
      { id: "k", text: "ExpressRoute circuits." },
      { id: "l", text: "Network security groups." },
    ],
    correctOptionId: "i"
  },

  {
    id: "q430",
    prompt: "You have several virtual machines in an Azure subscription. You create a new subscription [the virtual machines cannot be moved to the new subscription].",
    options: [
      { id: "a", text: "No change is needed." },
      { id: "b", text: "the virtual machines can be moved to the new subscription." },
      { id: "c", text: "the virtual machines can be moved to the new subscription only if they are all in the same resource group." },
      { id: "d", text: "the virtual machines can be moved to the new subscription only if they run Windows Server 2016." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q431",
    prompt: "[...] is the process of verifying a user credentials.",
    options: [
      { id: "a", text: "Authorization." },
      { id: "b", text: "Authentication." },
      { id: "c", text: "Federation." },
      { id: "d", text: "Ticketing." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q432",
    prompt: "If a resource group named RG1 has a delete lock, [...] can delete RG1.",
    options: [
      { id: "a", text: "only a member of the global administrators group." },
      { id: "b", text: "the delete lock must be removed before an administrator." },
      { id: "c", text: "an Azure policy must be modified before an administrator." },
      { id: "d", text: "an Azure tag must be added before an administrator." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q433",
    prompt: "A Platform as a Service (PaaS) solution that hosts web apps in Azure provides full control of the operating systems that host applications.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q434",
    prompt: "A Platform as a Service (PaaS) solution that hosts web apps in Azure can be provided with additional memory by changing the pricing tier.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q435",
    prompt: "A Platform as a Service (PaaS) solution that hosts web apps in Azure can be configured to automatically scale the number of instances based on demand.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q436",
    prompt: "You have an Azure environment. You need to create a new Azure virtual machine from an Android laptop. Solution: You use PowerShell in Azure Cloud Shell. Does this meet the goal?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q437",
    prompt: "You plan to deploy 20 virtual machines to an Azure environment. To ensure that a virtual machine named VM1 cannot connect to the other virtual machines, VM1 must [...].",
    options: [
      { id: "a", text: "be deployed to a separate virtual network." },
      { id: "b", text: "run a different operating system than the other virtual machines." },
      { id: "c", text: "be deployed to a separate resource group." },
      { id: "d", text: "have two network interfaces." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q438",
    prompt: "From Azure Service Health, an administrator can view the health of all the services deployed to an Azure environment and all the other services available in Azure.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q439",
    prompt: "Match the Azure Services service to the correct descriptions. ![Question 439](images/question439.png)",
    options: [
      { id: "a", text: "Analyze security log files from Azure virtual machines: Azure Security Center (now should be Microsoft Defender for Cloud). Display the secure score for an Azure subscription: Azure Lighthouse. Store passwords for use by Azure Function applications: Azure Key Vault." },
      { id: "b", text: "Analyze security log files from Azure virtual machines: Azure Sentinel. Display the secure score for an Azure subscription: Azure Lighthouse. Store passwords for use by Azure Function applications: Azure Key Vault." },
      { id: "c", text: "Analyze security log files from Azure virtual machines: Azure Sentinel. Display the secure score for an Azure subscription: Azure Security Center (now should be Microsoft Defender for Cloud). Store passwords for use by Azure Function applications: Azure Key Vault." },
      { id: "d", text: "Analyze security log files from Azure virtual machines: Azure Sentinel. Display the secure score for an Azure subscription: Azure Security Center (now should be Microsoft Defender for Cloud). Store passwords for use by Azure Function applications: Azure Active Directory (Azure AD) (now should be Microsoft Entra ID)." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q440",
    prompt: "[Azure policies provide] a common platform for deploying objects to a cloud infrastructure and for implementing consistency across the Azure environment.",
    options: [
      { id: "a", text: "No change is needed." },
      { id: "b", text: "Resource groups provide." },
      { id: "c", text: "Azure Resource Manager provides." },
      { id: "d", text: "Management groups provide." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q441",
    prompt: "All the Azure resources deployed to a single resource group must share the same Azure region.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q442",
    prompt: "If you set permissions to a resource group, all the Azure resources in that resource group inherit the permissions.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q443",
    prompt: "If you create two Azure virtual machines that use the B2S size, each virtual machine will always generate the same monthly costs.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q444",
    prompt: "When an Azure virtual machine is stopped, you continue to pay storage costs associated to the virtual machine.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q446",
    prompt: "Your company has a Software Assurance agreement that includes Microsoft SQL Server licenses. You plan to deploy SQL Server on Azure virtual machines. What should you do to minimize licensing costs for the deployment?",
    options: [
      { id: "a", text: "Use Azure Reservations." },
      { id: "b", text: "Use Azure Hybrid Benefit." },
      { id: "c", text: "Deallocate the virtual machines during off hours." },
      { id: "d", text: "Configure Azure Cost Management budgets." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q447",
    prompt: "If your company uses an Azure free account you can only deploy Azure virtual machines and Azure storage accounts.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q448",
    prompt: "You have an Azure environment. You need to create a new Azure virtual machine from an Android laptop. Solution: You use the Azure portal. Does this meet the goal?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q449",
    prompt: "You need to create a new Azure virtual machine from an Android laptop. Solution: You use Bash in Azure Cloud Shell. Does this meet the goal?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q450",
    prompt: "Which Azure service should you use to correlate events from multiple resources into a centralized repository?",
    options: [
      { id: "a", text: "Azure Event Hubs." },
      { id: "b", text: "Azure Analysis Services." },
      { id: "c", text: "Azure Monitor." },
      { id: "d", text: "Azure Log Analytics." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q451",
    prompt: "When planning to migrate a public website to Azure, you must plan to [pay monthly usage costs].",
    options: [
      { id: "a", text: "No change is needed." },
      { id: "b", text: "deploy a VPN." },
      { id: "c", text: "pay to transfer all the website data to Azure." },
      { id: "d", text: "reduce the number of connections to the website." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q452",
    prompt: "When you are implementing a Software as a Service (SaaS) solution, you are responsible for [configuring high availability].",
    options: [
      { id: "a", text: "No change is needed." },
      { id: "b", text: "Defining scalability rules." },
      { id: "c", text: "Installing the SaaS solution." },
      { id: "d", text: "Configuring the SaaS solution." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q453",
    prompt: "Azure provides flexibility between capital expenditure (CapEx) and operational expenditure (OpEx).",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q454",
    prompt: "Your company plans to deploy an Artificial Intelligence (AI) solution in Azure. What should the company use to build, test, and deploy predictive analytics solutions?",
    options: [
      { id: "a", text: "Azure Logic Apps." },
      { id: "b", text: "Azure Machine Learning Designer." },
      { id: "c", text: "Azure Batch." },
      { id: "d", text: "Azure Cosmos DB." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q455",
    prompt: "Your company plans to purchase Azure. The company support policy states that the Azure environment must provide an option to access support engineers by phone or email. You need to recommend which support plan meets the support policy requirement. Solution: Recommend a Standard support plan. Does this meet the goal?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q456",
    prompt: "You have an Azure environment that contains 10 web apps. To which URL should you connect [1] to manage all the Azure resources? https://[1].[2].com.",
    options: [
      { id: "a", text: "admin." },
      { id: "b", text: "portal." },
      { id: "c", text: "www." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q457",
    prompt: "You have an Azure environment that contains 10 web apps. To which URL should you connect [2] to manage all the Azure resources? https://[1].[2].com.",
    options: [
      { id: "a", text: "azure." },
      { id: "b", text: "azurewebsites." },
      { id: "c", text: "microsoft." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q458",
    prompt: "You plan to create an Azure virtual machine. You need to identify which storage service must be used to store the data disks of the virtual machine. What should you identify?",
    options: [
      { id: "a", text: "Blobs (REST-based object storage for unstructured data)." },
      { id: "b", text: "Files (File shares that use the standard rd SMB 3.0 protocol)." },
      { id: "c", text: "Tables (Tabular data storage)." },
      { id: "d", text: "Queues (Effectively scale apps according to traffic)." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q459",
    prompt: "You have an Azure environment. You need to create a new Azure virtual machine from an Android laptop. Solution: You use the PowerApps portal. Does this meet the goal?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q460",
    prompt: "To implement an Azure Multi-Factor Authentication (MFA) solution, you must deploy a federation solution or sync on-premises identities to the cloud.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q461",
    prompt: "Azure Multi-Factor Authentication (MFA) can be required for administrative and non administrative user accounts.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q462",
    prompt: "You need to view a list of planned maintenance events that can affect the availability of an Azure subscription. Which blade should you use from the Azure portal?",
    options: [
      { id: "a", text: "Dashboard." },
      { id: "b", text: "All resources." },
      { id: "c", text: "Resource groups." },
      { id: "d", text: "App Services." },
      { id: "e", text: "Function Apps." },
      { id: "f", text: "SQL databases." },
      { id: "g", text: "Azure Cosmos DB." },
      { id: "h", text: "Virtual machines." },
      { id: "i", text: "Load balancers." },
      { id: "j", text: "Storage accounts." },
      { id: "k", text: "Virtual networks." },
      { id: "l", text: "Microsoft Entra ID." },
      { id: "m", text: "Monitor." },
      { id: "n", text: "Advisor." },
      { id: "o", text: "Security Center." },
      { id: "p", text: "Help + support." },
    ],
    correctOptionId: "p"
  },

  {
    id: "q463",
    prompt: "A company can extend the capacity of its internal network by using the public cloud.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q464",
    prompt: "You plan to deploy several Azure virtual machines. You need to ensure that the services running on the virtual machines are available if a single data center fails. Solution: You deploy the virtual machines to two or more resource groups. Does this meet the goal?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q465",
    prompt: "[...] a common platform for deploying objects to a cloud infrastructure and for implementing consistency across the Azure environment.",
    options: [
      { id: "a", text: "Azure policies provide." },
      { id: "b", text: "Resource groups provide." },
      { id: "c", text: "Azure Resource Manager templates provide." },
      { id: "d", text: "Management groups provide." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q466",
    prompt: "Which cloud deployment solution is used for Azure virtual machines and Azure SQL databases?",
    options: [
      { id: "a", text: "Infrastructure as a service (laaS)." },
      { id: "b", text: "Platform as a service (PaaS)." },
      { id: "c", text: "Software as a service (SaaS)." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q467",
    prompt: "When planning to migrate a public website to Azure, you must plan to [...].",
    options: [
      { id: "a", text: "deploy a VPN." },
      { id: "b", text: "pay monthly usage costs." },
      { id: "c", text: "pay to transfer all the website data to Azure." },
      { id: "d", text: "reduce the number of connections to the website." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q468",
    prompt: "Azure Pay-As-You-Go pricing is an example of CapEx.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q469",
    prompt: "Azure Reserved VM Instances are an example of OpEx.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q470",
    prompt: "Deploying your own datacenter is an example of CapEx.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q471",
    prompt: "A company can extend a private cloud by adding its physical servers to the public cloud.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q472",
    prompt: "To build a hybrid cloud, you must deploy resources to the public cloud.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q473",
    prompt: "A private cloud must be disconnected from the internet.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q474",
    prompt: "You plan to deploy several Azure virtual machines. You need to ensure that the services running on the virtual machines are available if a single data center fails. Solution: You deploy the virtual machines to a scale set. Does this meet the goal?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q475",
    prompt: "You plan to deploy several Azure virtual machines. You need to ensure that the services running on the virtual machines are available if a single data center fails. Solution: You deploy the virtual machines to two or more availability zones. Does this meet the goal?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q476",
    prompt: "When you are implementing a Software as a Service (SaaS) solution, you are responsible for [...].",
    options: [
      { id: "a", text: "configuring high availability." },
      { id: "b", text: "defining scalability rules." },
      { id: "c", text: "installing the Saas solution." },
      { id: "d", text: "configuring the SaaS solution." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q477",
    prompt: "You plan to deploy several Azure virtual machines. You need to ensure that the services running on the virtual machines are available if a single data center fails. Solution: You deploy the virtual machines to two or more regions. Does this meet the goal?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q478",
    prompt: "Azure resources can only access other resources in the same resource group.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q479",
    prompt: "If you delete a resource group, all the resources in the resource group will be deleted.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q480",
    prompt: "A resource group can contain resources from multiple Azure regions.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q481",
    prompt: "Data that is copied to an Azure Storage account is maintained automatically in at least three copies.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q482",
    prompt: "Your company has an on-premises network that contains multiple servers. The company plans to reduce the following administrative responsibilities of network administrators: Backing up application data. Replacing failed server hardware. Managing physical server security. Updating server operating systems. Managing permissions to shared documents. The company plans to migrate several servers to Azure virtual machines. You need to identify which administrative responsibilities will be eliminated after the planned migration. Which two responsibilities should you identify?",
    options: [
      { id: "a", text: "Replacing failed server hardware." },
      { id: "b", text: "Backing up application data." },
      { id: "c", text: "Managing physical server security." },
      { id: "d", text: "Updating server operating systems." },
      { id: "e", text: "Managing permissions to shared documents." },
    ],
    correctOptionId: "a,c"
  },

  {
    id: "q483",
    prompt: "Azure Cosmos DB is an example of a [Platform as a Service (PaaS)] offering.",
    options: [
      { id: "a", text: "No change is needed." },
      { id: "b", text: "Infrastructure as a service (IaaS)." },
      { id: "c", text: "Serverless." },
      { id: "d", text: "Software as a service (SaaS)." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q484",
    prompt: "[Authorization] is the process of verifying a user credentials.",
    options: [
      { id: "a", text: "No change is needed." },
      { id: "b", text: "Authentication." },
      { id: "c", text: "Federation." },
      { id: "d", text: "Ticketing." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q485",
    prompt: "You plan to migrate several servers from an on-premises network to Azure. You need to identify the primary benefit of using a public cloud service for the servers. What should you identify?",
    options: [
      { id: "a", text: "The public cloud is owned by the public, NOT a private corporation." },
      { id: "b", text: "All public cloud resources can be freely accessed by every member of the public." },
      { id: "c", text: "The public cloud is a crowd-sourcing solution that provides corporations with the ability to enhance the cloud." },
      { id: "d", text: "The public cloud is a shared entity whereby multiple corporations each use a portion of the resources in the cloud." },
    ],
    correctOptionId: "d"
  },

];
