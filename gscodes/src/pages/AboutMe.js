import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const AboutMe = () => {

   useEffect(() => {
        document.title = "GANESHAN K - About Me";
    }, []);


  return ( 
    <>
        <div id="main" className="site-main">
          <div id="main-content" className="single-page-content">
            <div id="primary" className="content-area">    
              <div id="content" className="page-content site-content single-post" role="main">
                {/*Home Page Top Part*/}                
                <div className="row">
                  <div className=" col-xs-12 col-sm-12">
                    <div className="home-content">
                      <div className="row flex-v-align">
                        
                        <div className="col-sm-12 col-md-5 col-lg-5">
                          <div className="home-photo"> 
                            <div className="hp-inner" style={{backgroundImage: `url('./image/ganeshank.jpg')`,backgroundPosition: `calc(50% + 3.75px) calc(50% - 0.695876px)`}}> {/**/}
                            </div>
                          </div>
                        </div>

                        <div className="col-sm-12 col-md-7 col-lg-7">
                          <div className="home-text hp-left">
                            
                              
                            <h1>GANESHAN.K</h1>
                            <p>An enthusiastic and highly self-motivated professional backed with strong programming, negotiation, analysis,and
time management skills. I can adapt to the quickly changing environment and am a good team player, bringing
innovative ideas. I am looking forward to a challenging position in an organization where my current skills and
resources will be utilized and enhanced.</p>
                                 
                           <div className="home-buttons">
                              <a href="/assets/GaneshanK.pdf" target="_blank" className="btn btn-primary">Download CV</a>                              
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*Home Page Top Part*/}
              </div>
            </div>
          </div>
        </div>
    
    </>
      
  );
};

export default AboutMe;