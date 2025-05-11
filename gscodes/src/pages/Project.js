import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const Project = () => {



    useEffect(() => {
        document.title = "GANESHAN K - Project";
    }, []);

  return ( 
    <>
        <div id="main" className="site-main">
          <div id="main-content" className="single-page-content">
            <div id="primary" className="content-area">

              <div className="page-title">
                <h1><i class="fas fa-project-diagram"></i> Project</h1>                
              </div>

              <div id="content" className="page-content site-content single-post" role="main">
                <div className="row">
  
                  <div className=" col-xs-12 col-sm-12 ">                   

                    <div id="timeline_1" className="timeline clearfix">

                      <div className="timeline-item clearfix">                        
                        <span className="item-company"><strong>API ( Application Programming Interface ) :</strong> </span>                        
                        <h4 className="item-title">Role: Senior .NET Developer / MSSQL Developer</h4> 
                        <h4 className="item-title">Responsibilities:</h4>                          
                        <p>
                            • Developed the front-end using Swagger and C# within ASP.NET Core Web API. <br/>
                            • Managed the back-end using SQL Server R2 2022 for efficient data handling.<br/> 
                            • Deployed the application on an NGINX server for secure and optimized hosting.<br/>
                            • Built the system on .NET Framework 4.8, ensuring stability and performance.<br/>
                            • Applied Object-Oriented Design (OOD) principles to enhance code modularity, maintainability, and scalability.<br/>
                            • Implemented security features for ATM transactions using QR codes for cash withdrawal and deposit.<br/>
                            • Enforced IP address restrictions and API key-based middleware for secure API access.<br/>
                            • Developed and maintained RESTful APIs supporting GET, POST, UPDATE, and DELETE methods.<br/>
                            • Configured and optimized the application for deployment on a Linux server, ensuring security and performance.
                        </p>
                      </div>

                      <div className="timeline-item clearfix">                        
                        <span className="item-company"><strong>Money Exchange Software:</strong> </span>                        
                        <h4 className="item-title">Role: Senior .NET Developer / MSSQL Developer</h4> 
                        <h4 className="item-title">Responsibilities:</h4>                          
                        <p>
                            • Utilized HTML5, CSS, Bootstrap, JavaScript, and jQuery for responsive and dynamic user interfaces.<br/>
                            • Developed the front-end using AJAX controls and C# within the ASP.NET MVC framework for a dynamic user experience.<br/>
                            • Applied Object-Oriented Design (OOD) principles to enhance code modularity, maintainability, and scalability.<br/>
                            • Managed the SQL Server R2 2022 database for efficient storage and retrieval of financial data.<br/>
                            • Deployed the application on an IIS server, ensuring secure and stable hosting.<br/>
                            • Built the system on .NET Framework 4.7.1, ensuring compatibility and performance.<br/>
                            • Implemented multi-user login support (company, branch, counter users) with role-specific functionalities.<br/>
                            • Developed features for currency investment management, exchange rate updates, and AML compliance checks.<br/>
                            • Designed and maintained transaction management and reporting for profit and loss, daily transactions, and day closures.<br/>
                            • Ensured software copyright protection, securing proprietary technology and functionality.<br/>
                        </p>
                      </div>

                      <div className="timeline-item clearfix">                        
                        <span className="item-company"><strong>Money Remittance Software:</strong> </span>                        
                        <h4 className="item-title">Role: Senior .NET Developer / MSSQL Developer</h4> 
                        <h4 className="item-title">Responsibilities:</h4>                          
                        <p>
                            • Developed a Windows application using .NET Framework 4.7.1 for secure and efficient transaction processing.<br/>
                            • Applied Object-Oriented Design (OOD) principles to enhance code modularity, maintainability, and scalability.<br/>
                            • Managed the SQL Server R2 2017 database for storing and retrieving transaction data.<br/>
                            • Implemented KYC integration, automatic passport reading, and AML compliance checks to ensure regulatory adherence.<br/>
                            • Developed features for sending and receiving transactions, supporting cash payments and verification processes.<br/>
                            • Designed transaction management functionalities, including transaction ID generation and amount retrieval.<br/>
                            • Ensured software copyright protection, securing its unique features and global applicability.<br/>
                        </p>
                      </div>

                      <div className="timeline-item clearfix">                        
                        <span className="item-company"><strong>IOT ( Internet Of Things )</strong> </span>                        
                        <h4 className="item-title">Role: Senior .NET Developer / MSSQL Developer</h4> 
                        <h4 className="item-title">Responsibilities:</h4>                          
                        <p>
                            • Developed a Windows application using .NET Framework 4.7.1 for seamless IoT device control.<br/>
                            • Applied Object-Oriented Design (OOD) principles to enhance code modularity, maintainability, and scalability.<br/>
                            • Designed and managed the SQL Server R2 2017 database for efficient data storage and retrieval.<br/>
                            • Implemented serial port communication for TX transfer and RX reception to control IoT devices.<br/>
                            • Integrated multiple devices, including lights, water motors, height sensors, weight machines, and third-party oximeters.<br/>
                            • Enabled real-time medical device data display for heart rate (HR) and SPO2 monitoring.<br/>
                            • Ensured reliable data communication and system stability for industrial and medical applications.<br/>
                        </p>
                      </div>


                      <div className="timeline-item clearfix">                        
                        <span className="item-company"><strong>Canteen Management System :</strong> </span>                        
                        <h4 className="item-title">Role: Junior .NET Developer / MSSQL Developer</h4> 
                        <h4 className="item-title">Responsibilities:</h4>                          
                        <p>
                            • Utilized HTML5, CSS, Bootstrap, JavaScript, and jQuery for responsive and dynamic user interfaces.<br/>
                            • Developed the front-end using AJAX controls and C# within the ASP.NET MVC framework for an interactive user experience.<br/>
                            • Applied Object-Oriented Design (OOD) principles to enhance code modularity, maintainability, and scalability.<br/>
                            • Managed the SQL Server R2 2017 database to handle inventory, transactions, and user data efficiently.<br/>
                            • Deployed the application on an IIS server, ensuring reliable and secure hosting.<br/>
                            • Built the system on .NET Framework 4.6.1, optimizing performance and scalability.<br/>
                            • Developed the Master Canteen module, handling inventory management, purchase orders, vendor coordination, and stock distribution.<br/>
                            • Designed the Unit Canteen module for police personnel registration, ID generation, card issuance, and item sales.<br/>
                            • Implemented the Reports module to generate stock details, purchase order summaries, and sales reports for operational insights.<br/>
                        </p>
                      </div>

                      <div className="timeline-item clearfix">                        
                        <span className="item-company"><strong>Quarters Management System :</strong> </span>                        
                        <h4 className="item-title">Role: Junior .NET Developer / MSSQL Developer</h4> 
                        <h4 className="item-title">Responsibilities:</h4>                          
                        <p>
                            • Utilized HTML5, CSS, Bootstrap, JavaScript, and jQuery for responsive and dynamic user interfaces.<br/>
                            • Developed the front-end using AJAX controls and C# within the ASP.NET MVC framework for a seamless user experience.<br/>
                            • Applied Object-Oriented Design (OOD) principles to enhance code modularity, maintainability, and scalability.<br/>
                            • Managed the SQL Server R2 2017 database for efficient quarter allocation, user registration, and report generation.<br/>
                            • Deployed the application on an IIS server, ensuring secure and stable hosting.<br/>
                            • Built the system on .NET Framework 4.6.1, optimizing performance and maintainability.<br/>
                            • Designed and implemented the Allotting Officer module for user registration, quarter selection, and waiting list management.<br/>
                            • Developed the Administrator module to review applications, approve quarter allocations, and send email/SMS notifications.<br/>
                            • Implemented the Supervisor module for quarter maintenance tracking and generating reports on waiting lists and occupied quarters.<br/>
                        </p>
                      </div>


                      

                      

                     

                                         

                    </div>
                  </div>                  
                </div>                
              </div>
            </div>
        </div>
      </div>
    
    </>
      
  );
};

export default Project;