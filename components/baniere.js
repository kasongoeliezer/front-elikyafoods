import Link from "next/link";
import MainHeader from "@/components/header";
import styles from "@/styles/Home.module.css";

const Hero = (pros) => {

  return (
    <div class="main-cover"
   
    style={{backgroundImage: `url(https://eliezerspace.org/elikyafoods-adminspace/Views/Uploads/${pros.cover})`}}
     >
      <MainHeader/>
      <div class="hero-sub-container">
        <div class="hero-sub-container-left slide-in-elliptic-top-fwd">
          <h2 class="site-intro pt-3" style={{fontWeight:'800'}}> 
            {pros.titreprojet}
          </h2>
          <p className="mt-3">
            {pros.moreAbout}
          </p>
          <button className="btn btn-success main_call_to_action mt-3">WORK WITH US</button>
        </div>
        <div className="hero-sub-container-right">
          {/* <div class="circle_container slide-in-elliptic-top-fwd"
            style={{backgroundImage:'url(sites_images/27.png)'}}
            >
          </div> */}

        </div>
      </div> 
    </div>

  );
};
export default Hero;



    