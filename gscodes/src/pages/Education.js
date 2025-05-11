import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const Education = () => {

  useEffect(() => {
        document.title = "GANESHAN K - Education";
    }, []);


  return ( 
    <>
        <div id="main" className="site-main">
          <div id="main-content" className="single-page-content">
            <div id="primary" className="content-area">

              <div className="page-title">
                <h1><i className="fas fa-user-graduate"></i> Education</h1>                
              </div>

              <div id="content" className="page-content site-content single-post" role="main">
                <div className="row">
  
                  <div className=" col-xs-12 col-sm-12 ">                    

                    <div id="timeline_1" className="timeline clearfix">
                      <div className="timeline-item clearfix">
                        <h5 className="item-period ">2018 - 75%</h5>
                        <span className="item-company">University of Madras</span>
                        <h4 className="item-title">BCA - Bachelor of Computer Applications</h4>                        
                        <div className="certi-logo">
                          <img src="./image/Education/Nazareth.png" alt="logo"/>
                        </div>  
                        <p><strong>Nazareth College of Arts and Science,</strong> established in 2000 in Avadi, Chennai, is affiliated with the University of Madras and offers UG and PG programs across various disciplines. The college emphasizes holistic education with modern facilities, strong industry ties, and placement support.</p>                      
                      </div>

                      <div className="timeline-item clearfix">
                        <h5 className="item-period ">2015 - 53%</h5>
                        <span className="item-company">State Board</span>
                        <h4 className="item-title">12th - Higher Secondary Certificate.</h4>
                        <div className="certi-logo">
                          <img src="./image/Education/HSC.png" alt="logo"/>
                        </div>
                        <p><strong>Chennai Higher Secondary School,</strong>located at No. 17, Choolaimedu High Road, Chennai – 600094, is a government-run institution managed by the Chennai Corporation. The school offers education from classes VI to XII and is equipped with facilities such as science and computer laboratories, a well-stocked library, and sports amenities. Emphasizing both academic excellence and co-curricular development, the school provides a supportive and inclusive environment for holistic student growth. </p>
                      </div>

                      <div className="timeline-item clearfix">
                        <h5 className="item-period ">2013 - 85%</h5>
                        <span className="item-company">State Board</span>
                        <h4 className="item-title">10th - Secondary School Leaving Certificate.</h4>
                        <div className="certi-logo">
                          <img src="./image/Education/SSLC.png" alt="logo"/>
                        </div> 
                        <p><strong>Sri Annai Vidhyashram Matriculation Higher Secondary School, </strong> established in 2002 in Thiruverkadu, Chennai, is a co-educational English medium school affiliated with the Tamil Nadu State Board. The school offers classes from Pre-KG to XII, focusing on holistic education with modern facilities and consistent academic excellence.</p>
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

export default Education;