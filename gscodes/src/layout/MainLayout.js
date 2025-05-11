import { Outlet } from "react-router-dom";
import { Link } from 'react-router-dom';

const MainLayout = () => {
  return (

    <>

    <div className="lm-animated-bg"></div>


    <div className="preloader">
      <div className="preloader-animation">
        <div className="preloader-spinner">
        </div>
      </div>
    </div>
  

    <div id="page_container" className="page-container bg-move-effect animated transition-flip-in-right" data-animation="transition-flip-in-right">


        {/*Header*/}         
        <header id="site_header" className="header">
          <div className="header-content clearfix">
                
            {/*Text Logo*/}  
             <div className="text-logo">
              <a href="/">
                <div className="logo-symbol">GK</div>
                {/*<div className="logo-text">Ganeshan <span>K</span></div>*/}
              </a>
            </div>
            {/*Text Logo*/}  
            

            {/*Navigation*/}             
            <div className="site-nav mobile-menu-hide">
              <ul className="leven-classic-menu site-main-menu">

                <li className="menu-item">
                  <a href="/"><i className="fas fa-user"></i> About Me</a>
                </li>               

                <li className="menu-item">
                  <a href="/Education"><i className="fas fa-user-graduate"></i> Education</a>
                </li>

                 <li className="menu-item">
                  <a href="/Certificates"><i className="fas fa-certificate"></i> Certificates</a>
                </li>

                <li className="menu-item">
                  <a href="/Skills"><i className="fab fa-leanpub"></i> Skills</a>
                </li>

                <li className="menu-item">
                  <a href="/Organisation"><i className="fas fa-building"></i> Organisations</a>
                </li>

                <li className="menu-item">
                  <a href="/Project"><i className="fas fa-project-diagram"></i> Project</a>
                </li>

                

              </ul>
            </div>

            {/*Mobile Menu Toggle             
            <a className="menu-toggle mobile-visible">
              <i className="fa fa-bars"></i>              
            </a>
            {/*Mobile Menu Toggle*/} 
           
          </div>
        </header>

        {/*Header*/}      

        <Outlet /> {/* Renders authentication child pages */}   

        {/*Footer*/}
        <footer className="site-footer clearfix">
          <div className="footer-social">
            <ul className="footer-social-links">
              <li>
                <a href="https://www.linkedin.com/in/ganeshan-k-3a7985361/" target="_blank">LinkedIn</a>
              </li>              
            </ul>
          </div>   

          <div className="footer-copyrights">
            <p>© 2025 All rights reserved.</p>
          </div>                    
        </footer>
        {/*Footer*/}
        
      </div>
    
        
    </>


    

  );
};

export default MainLayout;