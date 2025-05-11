import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const Certificates = () => {

    useEffect(() => {
        document.title = "GANESHAN K - Certificates";
    }, []);


  return ( 
    <>
        <div id="main" className="site-main">
          <div id="main-content" className="single-page-content">
            <div id="primary" className="content-area">

              <div className="page-title">
                <h1><i className="fas fa-certificate"></i> Certificates</h1>                
              </div>

              <div id="content" className="page-content site-content single-post" role="main">
                <div className="row">
  
                  <div className=" col-xs-12 col-sm-12 ">                   

                    <div id="timeline_1" className="timeline clearfix">

                      <div className="timeline-item clearfix">
                        <h5 className="item-period ">Dec - 2016 To Jan - 2017</h5>
                        <span className="item-company"><strong>Grade: "DISTINCTION"</strong> </span>                        
                        <h4 className="item-title">KENNY SOFTWARE SOLUTION</h4>                        
                        <div className="certi-logo">
                          <img src="./image/Certificates/KSS_Logo.png" alt="logo"/>
                        </div> 
                        <p><strong>Telecom Technician - PC Hardware and Networking</strong></p>
                      </div>
                      

                      <div className="timeline-item clearfix">
                        <h5 className="item-period ">Jun - 2017 To APR - 2018</h5> 
                        <span className="item-company"><strong>Grade: "A"</strong> </span>                           
                        <h4 className="item-title">NINT - NATIONAL INSTITUTED OF NETWORK TECHNOLOGY</h4>                        
                        <div className="certi-logo">
                          <img src="./image/Certificates/NINT_Logo.png" alt="logo"/>
                        </div> 
                        <p><strong>C#, ASP.NET , ADO.NET , .NET Framework , Core Java & J2EE</strong></p>
                      </div> 

                     

                      <div className="timeline-item clearfix">
                        <h5 className="item-period ">Mar - 2018</h5> 
                        <span className="item-company"><strong>Grade: "B"</strong> </span>                           
                        <h4 className="item-title">Gusto Information Technologies & Management Solution LLP.</h4>                        
                        <div className="certi-logo">
                          <img src="./image/Certificates/GITMS_Logo.png" alt="logo"/>
                        </div> 
                        <p><strong>Software Testing - Manual & Selenium</strong></p>
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

export default Certificates;