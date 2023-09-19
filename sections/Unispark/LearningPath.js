"use client";
import Image from "next/image";
import { Accordion } from "react-bootstrap";
import AzureFundamental from "./../../assets/images/unispark/azure-fundamentals.png";
import AzureData from "./../../assets/images/unispark/azure-data-fundamentals.png";
import AzureDeveloper from "./../../assets/images/unispark/azure-developer.png";
import PortableText from "react-portable-text";

const outerAccordionData = [
  {
    icon: AzureFundamental,
    title: "AZ 900 : Azure Fundamentals (Fundamental Level)",
    desc: "Microsoft Azure Fundamentals Training Course will familiarize you with the main principles of cloud computing and how they have been implemented in Microsoft Azure. This course will get you up to speed on Azure services, security, privacy, compliance, trust, pricing, and support.",
    innerAccordionItems: [
      {
        title: "Cloud Computing Concepts",
        description: [
          "Cloud computing and its benefits",
          "Different cloud computing models (IaaS, PaaS, SaaS)",
          "Public, Private, and Hybrid cloud models",
          "Understand core Azure architectural components (regions, availability zones, resource groups, subscriptions)",
        ],
      },

      {
        title: "Core Azure Services",
        description: [
          "Core Azure compute services (virtual machines, App Service, Azure Functions, containers)",

          "Core Azure storage services (blob storage, file storage, table storage, queue storage)",

          "Azure database services (Azure SQL Database, Azure Cosmos DB, Azure Database for MySQL, Azure Database for PostgreSQL)",

          "Azure networking services (Virtual Network, Load Balancer, VPN Gateway, Azure DNS)",
        ],
      },
      {
        title: "Security, Privacy, Compliance, and Trust",
        description: [
          "Azure security features (Identity and Access Management, Azure Security Center, Azure Key Vault)",

          "Azure privacy and data protection standards (GDPR, CCPA, HIPAA)",

          "Azure compliance standards (ISO, SOC, PCI DSS)",

          "Azure monitoring and reporting capabilities (Azure Monitor, Azure Advisor, Azure Service Health)",
        ],
      },
      {
        title: "Azure Pricing and Support",
        description: [
          "Azure pricing models (Pay-As-You-Go, Reserved Instances, Azure Hybrid Benefit)",

          "Azure subscriptions, management groups, and billing",

          "Azure support plans and service level agreements (SLAs)",

          "Azure service lifecycles (preview, general availability, end of life)",
        ],
      },
    ],
  },
  {
    icon: AzureData,
    title: "DP 900: Azure Data Fundamentals (Fundamental Level)",
    desc: "In Microsoft Azure Data Fundamentals Course student will learn about core data concepts such as relational, non-relational, big data, and analytics, and build their foundational knowledge of cloud data services within Microsoft Azure. Students will explore fundamental relational data concepts and relational database services in Azure. They will explore Azure storage for non-relational data and the fundamentals of Azure Cosmos DB. Students will learn about large-scale data warehousing, real-time analytics, and data visualization.",
    innerAccordionItems: [
      {
        title: "Core Data Concepts",
        description: [
          "Types of data (Relational and non-relational data, and structured and unstructured data)",

          "How to work with relational data in Azure (Including Azure SQL Database and Azure Synapse Analytics)",

          "How to work with non-relational data in Azure (Including Azure Cosmos DB, Azure Blob Storage, and Azure Data Lake Storage)",

          "How to work with streaming data in Azure (Including Azure Stream Analytics and Azure Event Hubs)",

          "Data Processing and Data Analytics",
        ],
      },

      {
        title: "Azure Data Analytics Solutions",
        description: [
          " Build a modern data warehouse in Azure using Azure Synapse Analytics",

          "Build a big data solution in Azure using Azure HDInsight and Azure Databricks",

          "Build a machine learning solution in Azure using Azure Machine Learning",
        ],
      },
      {
        title: "Azure Data Services",
        description: [
          "Azure Data Factory to orchestrate data movement and transformation",

          "Azure Data Catalog to discover and understand data assets in Azure",

          "Azure Data Share to share data with other organizations securely",
        ],
      },
      {
        title: "Azure Analytics Workload",
        description: [
          "Concepts of analytics and how to work with them on Azure.",

          "How to provision and configure an analytics workload on Azure.",

          "Monitor and troubleshoot an analytics workload on Azure.",
        ],
      },
    ],
  },
  {
    icon: AzureDeveloper,
    title: "AZ 204: Azure Developer Associate (Associate Level)",
    desc: "Microsoft Azure Developer Associate Course will familiarize you with Azure compute solutions, Azure Functions, Azure storage, implementation of authentication and authorization, and securing solutions by using Key Vault and Managed Identities. The learners will also gain knowledge about how to connect to and consume Azure services and third-party services, and include event- and message-based models in their solutions.",
    innerAccordionItems: [
      {
        title: "Developing Azure compute solutions",
        description: [
          "Developing Azure App Service Web Apps",
          " Developing Azure App Service Functions",

          "Developing Azure App Service Logic Apps",

          "Developing Azure Container Instances",

          "Developing Azure Kubernetes Service (AKS) solutions",

          "Implementing Azure Batch solutions",

          "Implementing Azure Functions",
        ],
      },

      {
        title: "Developing for Azure storage",
        description: [
          " Developing solutions that use Cosmos DB storage",

          " Developing solutions that use Blob storage",

          " Developing solutions that use Azure Queue Storage",

          "Developing solutions that use Azure Table storage",
        ],
      },
      {
        title: "Developing Azure security",
        description: [
          "Implementing authentication and authorization",

          "Implementing secure cloud solutions",

          "Implementing security for storage solutions",

          "Monitoring, logging, and troubleshooting Azure solutions",
        ],
      },
      {
        title: "Monitoring, troubleshooting, and optimizing Azure solutions",
        description: [
          "Monitoring Azure solutions",
          "Troubleshooting Azure solutions",
          "Optimizing Azure solutions",
        ],
      },
      {
        title:
          "Connecting to and consuming Azure services and third-party services",
        description: [
          " Developing solutions that use Azure Service Bus",

          "Developing solutions that use Azure Event Grid",

          "Developing solutions that use Azure Event Hub",

          "Developing solutions that use Azure Notification Hub",

          "Developing solutions that use Azure Time Series Insights",

          "Developing solutions that use Azure Stream Analytics",

          "Developing solutions that use Azure Cognitive Services",
        ],
      },
    ],
  },
];

const LearningPath = ({ unisparkData, index }) => {
  return (
    <>
      {unisparkData.map((data) => (
        <div className="section-container section-sp4 bg-white">
          <div className="container">
            <h4>Learning Path</h4>
            <p className="text-blue mt--10 fw5">
              Unispark Cloud Computing Program overview
            </p>
            <div
              className="row bg-light-blue p-20"
              style={{ borderRadius: "8px" }}>
              <div className="col-md"></div>
              <div className="col-md-10">
                <Accordion className="accordion" defaultActiveKey="1">
                  {data.learningPath.map((item, index) => (
                    <Accordion.Item
                      className="bg-white m-b20"
                      eventKey={`outer-accordion-${index}`}>
                      <Accordion.Header className="d-flex align-items-center">
                        <Image
                          width={35}
                          height={35}
                          src={item.icon}
                          alt="Infispark"
                        />
                        <div className="flex-grow-1">
                          <h6 className="p-l15 fs16 text-blue">{item.title}</h6>
                        </div>
                        <p className="m-r10 m-t5 d-none d-md-block">
                          <svg
                          className="m-r5"
                            id="time"
                            xmlns="http://www.w3.org/2000/svg"
                            width={18}
                            viewBox="0 0 27.916 27.85">
                            <path
                              id="Path_7048"
                              data-name="Path 7048"
                              d="M13.958.333A13.45,13.45,0,0,1,23.83,4.419a13.412,13.412,0,0,1,4.086,9.839A13.412,13.412,0,0,1,23.83,24.1a13.45,13.45,0,0,1-9.872,4.086A13.45,13.45,0,0,1,4.086,24.1,13.412,13.412,0,0,1,0,14.258,13.412,13.412,0,0,1,4.086,4.419,13.45,13.45,0,0,1,13.958.333Zm0,25.1a10.737,10.737,0,0,0,7.878-3.269A10.775,10.775,0,0,0,25.1,14.258a10.775,10.775,0,0,0-3.269-7.911,10.737,10.737,0,0,0-7.878-3.269A10.737,10.737,0,0,0,6.08,6.348a10.775,10.775,0,0,0-3.269,7.911A10.775,10.775,0,0,0,6.08,22.169,10.737,10.737,0,0,0,13.958,25.438Zm.686-18.175v7.322l6.276,3.726-1.046,1.765-7.322-4.446V7.263Z"
                              transform="translate(0 -0.333)"
                              fill="#006dff"
                            />
                          </svg>
                          {item.hours}
                        </p>
                      </Accordion.Header>
                      <Accordion.Body className="accordion-body1 ">
                        <div className="row">
                          <div className="col-md-12">
                            <p>
                              <PortableText
                                className="custom-portable-text"
                                // Pass in block content straight from Sanity.io
                                content={item.description}
                                projectId="oy08lsi5"
                                dataset="production"
                              />
                            </p>
                          </div>
                          <Accordion className="accordion" defaultActiveKey="1">
                            {item.innerDescription.map(
                              (innerItem, innerIndex) => (
                                <Accordion.Item
                                  className="bg-light-blue m-b20"
                                  eventKey={`inner-accordion-${index}-${innerIndex}`}>
                                  <Accordion.Header className="d-flex align-items-center">
                                    <div className="flex-grow-1">
                                      <h6 className="p-l15 fs14 text-blue">
                                        {innerItem.title}
                                      </h6>
                                    </div>
                                  </Accordion.Header>
                                  <Accordion.Body className="accordion-body1 ">
                                    <div className="row">
                                      <div className="col-md-12">
                                        <p>
                                          <PortableText
                                            className="custom-portable-text"
                                            // Pass in block content straight from Sanity.io
                                            content={innerItem.description}
                                            projectId="oy08lsi5"
                                            dataset="production"
                                          />
                                        </p>
                                      </div>
                                    </div>
                                  </Accordion.Body>
                                </Accordion.Item>
                              )
                            )}
                          </Accordion>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  ))}
                </Accordion>
              </div>
              <div className="col-md"></div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default LearningPath;
