
import { useState } from 'react';
import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Hero from "../components/baniere";
import Script from "next/script";
import Footer from "../components/footer";

import AvantagesCard from '../components/cardadvantagecompetitive';
import Missioncard from '../components/cardmission';
import * as Iconsfi from "react-icons/fi";
import * as Iconsfa from "react-icons/fa6";
import * as Iconsfc from "react-icons/fc";
import * as Iconsfb from "react-icons/tb";
import * as Iconsgr from "react-icons/gr";
import * as Iconstfi from "react-icons/tfi";
import * as Iconsci from "react-icons/ci"; 
import {motion} from 'framer-motion';

const geistSans = Geist({
variable: "--font-geist-sans",
subsets: ["latin"],
});

const geistMono = Geist_Mono({
variable: "--font-geist-mono",
subsets: ["latin"],
});



export async function getServerSideProps() {
  try {
    const response = await fetch('https://eliezerspace.org/fetchData/api.php?fetchdata=home');
    if (!response.ok) {
      throw new Error(`Erreur HTTP ! status: ${response.status}`);
    }
    const sitecontent = await response.json();
    const homedatas = sitecontent[0];
    const banner = homedatas[0];
    const sectionavantagetitle = sitecontent[1];
    const sectionavantagetitle_datas = sectionavantagetitle[0];
    const allavantages = sitecontent[2];
    const sectionmission = sitecontent[3];
    const sectionmission_datas = sectionmission[0];
    const allmissions = sitecontent[4];
    const sectionsustainability = sitecontent[5];
    const sectionsustainability_datas = sectionsustainability[0];
    const onecommitment = sitecontent[6][4];
    const sectionteam = sitecontent[7][0];
    const allteam = sitecontent[8];
    const configs = sitecontent[9][0];

    return {
      props: {
        banner,
        sectionavantagetitle_datas,
        allavantages,
        sectionmission_datas,
        allmissions,
        sectionsustainability_datas,
        onecommitment,
        sectionteam,
        allteam,
        configs,
      },
    };
  } catch (error) {
    console.error('Erreur lors de la récupération des données :', error);
    return {
      props: {}, // Retourner des valeurs par défaut si erreur
    };
  }
}

export default function Home({
  banner,
  sectionavantagetitle_datas,
  allavantages,
  sectionmission_datas,
  allmissions,
  sectionsustainability_datas,
  onecommitment,
  sectionteam,
  allteam,
  configs,
}) {
  // Utilisez les données ici
  return (
<>

  <Head>
    
    <title>Elikya foods</title>
    <meta name="description" content="Elikya food is a agrigultural company based in kinshasa, Democratic Replublic of Congo, that aims to redefine the agricultural landscape in the region" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="favicon.ico" />
    <Script src="/js/main.js" />

  </Head>
  <div className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}>
    <div className="preloader"></div> 
    <main className={styles.main}>
    <div className="div_transition" style={{backgroundImage: 'url(/sites_images/cover2.jpg)'}}></div>
      <Hero 
      titreprojet={banner.soustitre}
      moreAbout={banner.descriptionduprogramme} 
      cover= {banner.immagedecouverture}
         
      />

      
      <section id="avantages">  
        <div className="avantages">

        <div className="avantages-left" style={{backgroundImage:'url(sites_images/bg2.png)'}}>

          <div className="opacity-couverture">
          </div>
          
        </div>
        <div className="avantages-right">
          
          <h2 className="light light-title">{sectionavantagetitle_datas.titre_avantagecompetitive}</h2>
          <p className="font-size-17">{sectionavantagetitle_datas.sous_titre_avantagecompetitive}</p>
          
          <div className="row g-0 container_chus">      

          {allavantages.slice(0, 4).map((e) => {     
            return (
              <AvantagesCard
              icone={e.icone}
              titre={e.titre_avantage_comp}
              descriptif={e.descirp_avantage_comp}
              />
            );              
          })} 

          </div>
        </div>
        </div>
      </section>

      <section id="mission">      
        <div className="mission">
      <div className="mission-z1">
        <h2 className="dark-title">{sectionmission_datas.titre}</h2>
        <p className="font-size-17">{sectionmission_datas.description}
        </p>
        <div>

          <div className="content">
            <div className="">
              <div className="row g-0 container_chus">


     
            {allmissions.slice(0, 4).map((e) => {     
            return (
              <Missioncard
                icone={e.icone_inc}
                titre={e.titre_objectif}
                descriptif={e.description}
              />
                );              
              })} 

              </div>
            </div>
          </div>

        </div>

      </div>
      <div className="mission-z2" style={{backgroundImage:'url(/sites_images/bg5.png)'}}>
      </div>
        </div>
      </section> 

      <section id="sustainability">
        <div className="sustainability">
      <div className="sustainability_containt">
        <h2 className="light light-title">{sectionsustainability_datas.titre}</h2>
        <p>
        {onecommitment.description_commitement}
        </p>
        <button className="btn btn-danger">
          View more.
        </button>
      </div>
        </div>      
      </section>

      <section id="team">
      <div className="team-15 team team_container shapedividers_com-1847">
      
      <div className="container section-title mt-4" data-aos="fade-up">
        <h3 className="dark-title" style={{textAlign:'center'}}>{sectionteam.titre}</h3>
        <p style={{textAlign:'center',paddingBottom:'20px'}}>{sectionteam.soustitre}</p>
      </div>
      <div className="content">
        <div className="container">
          <div className="row">
             
          {allteam.slice(0, 4).map((e) => {     
            return (

            <div className="col-lg-3 col-6 col-md-6 mb-4 team_member">
              <div className="person">
                <figure>
                {/* e.profil */}
                  <img src={`https://eliezerspace.org/elikyafoods-adminspace/Views/Uploads/${e.profil}`} alt="Image" className="img-fluid_n"/>
                  <div className="social">
                    <a href={e.facebook}>
                    <span>
                      <Iconsfa.FaFacebook style={{fontSize:'20px',color:' #0a4b20',display:'flex',justifySelf:'center'}} />
                    </span>
                    </a>
                    <a href={e.linkedin}><span className="">
                    <Iconsfa.FaXTwitter style={{fontSize:'20px',color:' #0a4b20',display:'flex',justifySelf:'center'}} />
                    </span></a>
                    <a href={e.linkedin}><span>
                    <Iconsfa.FaLinkedin style={{fontSize:'20px',color:' #0a4b20',display:'flex',justifySelf:'center'}} />
                    </span></a>
                  </div>
                </figure>
                <div className="person-contents">
                  <h3>{e.nom}</h3>
                  <span className="position">{e.postoccupe}</span>
                </div>
              </div>
            </div>
     );              
    })}

          </div>

        </div>
      </div>

      {/* <div className="zoneContact">
      <a href="/contact">  <button className="btn btn-danger" style={{backgroundColor:"inherit",color:"#00000"}}>Contacts</button> </a>     
      </div>  */}
        </div>

      </section>
 
    </main>
    <Footer
      phone1={configs.telephone1} 
      phone2={configs.telephone2} 
      adresse={configs.adressephysique}
      facebook={configs.facebook}
      twitter={configs.twitter}
      linkendin={configs.linkedin}
      email={configs.email}  
      about_us= {banner.descriptionduprogramme}
    />
  </div>
</>
);

}






