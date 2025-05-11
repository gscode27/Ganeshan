import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const Skills = () => {


    useEffect(() => {
        document.title = "GANESHAN K - Skills";
    }, []);


  return ( 
    <>
        <div id="main" className="site-main">
          <div id="main-content" className="single-page-content">
            <div id="primary" className="content-area">

              <div className="page-title">
                <h1><i className="fab fa-leanpub"></i> Skills</h1>                
              </div>

              <div id="content" className="page-content site-content single-post" role="main">
                <div className="row">
  
                  <div className=" col-xs-12 col-sm-12 "> 

                    <div className="block-title">
                      <h2>Front - End</h2>
                    </div>

                    <div className="row">
                        <div className="col-xs-12 col-sm-2">
                            <div className="lm-info-block gray-default">
                                <i className="fab fa-html5" style={{color: `#f16a30`}}></i>                           
                                <h4>HTML5</h4>                            
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-2">
                            <div className="lm-info-block gray-default">
                                <i className="fab fa-css3-alt" style={{color: `#3babdc`}}></i>                        
                                <h4>CSS</h4>                            
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-2">
                            <div className="lm-info-block gray-default">
                                <i class="fas fa-bold" style={{color: `#814bde`}}></i>                      
                                <h4>Bootstrap</h4>                            
                            </div>
                        </div> 
                        <div className="col-xs-12 col-sm-2">
                            <div className="lm-info-block gray-default">                                
                                <i className="fab fa-js-square" style={{color: `#f7e025`}}></i>                        
                                <h4>Javascript</h4>                            
                            </div>
                        </div>                        
                    </div>

                    <div className="block-title">
                      <h2>Framework</h2>
                    </div>

                    <div className="row">
                        <div className="col-xs-12 col-sm-2">
                            <div className="lm-info-block gray-default">
                                <i className="fab fa-react" style={{color: `#66dbfb`}}></i>                        
                                <h4>ReactJS</h4>                            
                            </div>
                        </div>                                             
                    </div>

                    <div className="block-title">
                      <h2>Back - End</h2>
                    </div>

                    <div className="row">
                        <div className="col-xs-12 col-sm-2">
                            <div className="lm-info-block gray-default">
                                <i class="fab fa-chrome" style={{color: `#098fcc`}}></i>                        
                                <h4>ASP.Net Web Application - MVC - Entity FrameWork</h4>                            
                            </div>
                        </div> 
                        <div className="col-xs-12 col-sm-2">
                            <div className="lm-info-block gray-default">
                                <i class="fas fa-desktop" style={{color: `#098fcc`}}></i>                       
                                <h4>ASP.Net Windows Forms App - Entity FrameWork</h4>                            
                            </div>
                        </div> 
                        <div className="col-xs-12 col-sm-2">
                            <div className="lm-info-block gray-default">
                                <i class="fas fa-network-wired" style={{color: `#098fcc`}}></i>                       
                                <h4>Web API <br/> - <br/>Entity FrameWork & Core</h4>                            
                            </div>
                        </div>                                             
                    </div>

                    <div className="block-title">
                      <h2>DataBase</h2>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-sm-2">
                            <div className="lm-info-block gray-default">
                                <i class="fas fa-database" style={{color: `#e1342c`}}></i>                       
                                <h4>MSSQL <br/>- <br/>Microsoft SQL Server</h4>                            
                            </div>
                        </div> 
                        <div className="col-xs-12 col-sm-2">
                            <div className="lm-info-block gray-default">
                                <i class="fas fa-database" style={{color: `#085970`}}></i>                      
                                <h4>MYSQL <br/>- <br/> WorkBench</h4>                            
                            </div>
                        </div>                                                                     
                    </div>

                    <div className="block-title">
                      <h2>Hosting</h2>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-sm-2">
                            <div className="lm-info-block gray-default">
                                <i class="fas fa-server" style={{color: `#2e72c5`}}></i>                       
                                <h4>IIS</h4>                            
                            </div>
                        </div> 
                        <div className="col-xs-12 col-sm-2">
                            <div className="lm-info-block gray-default">
                                <i class="fas fa-server" style={{color: `#169a4e`}}></i>                      
                                <h4>NGINX </h4>                            
                            </div>
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

export default Skills;