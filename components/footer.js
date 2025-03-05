import Link from "next/link";
import styles from "@/styles/Home.module.css";
import * as Iconsfa from "react-icons/fa6";

const Footer = (props) => {

return (

<footer id="footer" className="footer dark-background">
  <div className="footer-top">
    <div className="container">
      <div className="row gy-4">


        <div className="col-12 col-lg-6 col-md-6 footer-about">
          <a href="/" className="logo d-flex align-items-center">
            <span className="sitename">
              <img src="/sites_images/logo_elikyafoods.PNG" alt="Elikyafoods" height="320px" />
            </span>
          </a>
          <div className="footer-contact pt-1 pr-4">        
           <p>
            {props.about_us}
           </p>
           <p>
           <a href="/contact" className="btn btn-success mt-3" style={{backgroundColor:'inherit',borderRadius:'90px',padding:'9px 17px'}}>Contact us</a>
           </p>
          </div>
        </div>


        <div className=" col-6 col-lg-3 col-md-4 footer-links">
          <h4>Useful Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Our mission</a></li>
            <li><a href="#">Competitives avantages</a></li>
            <li><a href="#">Soustainability commitment</a></li>
            <li><a href="#">About us</a></li>
          </ul>
        </div>
        <div className="col-6 col-lg-3 col-md-6 footer-about">
        <h4>Contacts infos</h4>

          <div className="footer-contact pt-1">        
            <p>{props.adresse}</p>
            <p className="mt-3"><strong>Phone : </strong> <span>{props.phone1}, {props.phone2}</span></p>
            <p><strong>Email : </strong> {props.email}</p>
          </div>
        </div>


        
      </div>
    </div>
  </div>

  <div className="copyright text-center">
    <div
      className="container d-flex flex-column flex-lg-row justify-content-center justify-content-lg-between align-items-center">

      <div className="d-flex flex-column align-items-center align-items-lg-start">
        <div>
          © Copyright <strong><span>Elikya foods 2025</span></strong>. All Rights Reserved
        </div>
        <div className="credits">
          Designed by <a href="#">Eliezer kasongo</a>
        </div>
      </div>

      <div className="social-links order-first order-lg-last mb-3 mb-lg-0">
        <a href={props.facebook} style={{fontSize:'20px',color:' #F8F8F8',display:'flex',justifyItems:'center'}}>
          <Iconsfa.FaFacebook/>
        </a>
        <a href={props.twitter}>
          <Iconsfa.FaXTwitter style={{fontSize:'20px',color:' #F8F8F8',display:'flex',justifySelf:'center'}} />
        </a>
        <a href={props.linkendin}>
          <Iconsfa.FaLinkedin style={{fontSize:'20px',color:' #F8F8F8',display:'flex',justifySelf:'center'}} />
        </a>

      </div>

    </div>
  </div>

</footer>

);
};
export default Footer;
