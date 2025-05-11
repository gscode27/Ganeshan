import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const Organisation = () => {

  useEffect(() => {
        document.title = "GANESHAN K - Organisation";
    }, []);



  return ( 
    <>
        <div id="main" className="site-main">
          <div id="main-content" className="single-page-content">
            <div id="primary" className="content-area">

              <div className="page-title">
                <h1><i className="fas fa-building"></i> Organisation</h1>   
                <div class="page-subtitle">
                    <h4> 6+ Years of Experience</h4>
                </div>             
              </div>

              <div id="content" className="page-content site-content single-post" role="main">
                <div className="row">
  
                  <div className=" col-xs-12 col-sm-12 ">                   

                    <div id="timeline_1" className="timeline clearfix">
                      <div className="timeline-item clearfix">
                        <h5 className="item-period ">OCT - 2020 To Jan - 2025</h5>
                        <span className="item-company">Senior .NET Developer</span>
                        <h4 className="item-title">Finaara Technologies Pvt Ltd</h4>                        
                        <div className="certi-logo">
                          <img src="./image/Organisation/finaara_logo.png" alt="logo"/>
                        </div>  
                        <p><strong>Finaara Technologies Pvt Ltd</strong> is a Chennai-based fintech company that specializes in next-generation banking and financial technology solutions, including digital banking units, remittance platforms, and cryptocurrency kiosks. Founded in 2019, Finaara focuses on enhancing digital financial services with innovative, secure, and scalable solutions.</p>                      
                      </div>

                      <div className="timeline-item clearfix">
                        <h5 className="item-period ">SEP - 2018 To SEP - 2020</h5>
                        <span className="item-company">Junior .NET Developer</span>
                        <h4 className="item-title">KST Infotech Pvt Ltd</h4>
                        <div className="certi-logo">
                          <img src="./image/Organisation/kst_logo.png" alt="logo"/>
                        </div>
                        <p><strong>KST Infotech Pvt Ltd</strong> is a Chennai-based software development company that specializes in custom IT solutions, including HR software, mobile applications, and asset tracking. Established in 2013, it serves clients across various industries, offering innovative and scalable services.</p>
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

export default Organisation;