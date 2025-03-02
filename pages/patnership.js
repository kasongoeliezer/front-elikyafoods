import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Hero from "@/components/baniere";
import Script from "next/script";
import Footer from "@/components/footer";
import MainHeader from "@/components/header";

import * as Iconsfi from "react-icons/fi";
import * as Iconsfa from "react-icons/fa6";
import * as Iconsfc from "react-icons/fc";
import * as Iconsfb from "react-icons/tb";
import * as Iconsgr from "react-icons/gr";
import * as Iconstfi from "react-icons/tfi";
import * as Iconsci from "react-icons/ci"; 





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
    const commitments = sitecontent[6];
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
        commitments,
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

export default function soustainability({
  banner,
  sectionavantagetitle_datas,
  allavantages,
  sectionmission_datas,
  allmissions,
  sectionsustainability_datas,
  commitments,
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

  </Head>
  <div className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}>
    <div className="preloader"></div>
    <main className={styles.main}>
    <div className="main-cover2"
          style={{backgroundImage:'url(sites_images/cover5.jpg)'}}
         >
      <MainHeader/> 
      <div className="hero-sub-container2">  
         Soustainability commitment      
      </div> 
      </div> 
      <div className="zoneSoustainability row">                          
        <div className="col-lg-12 ">                          
        {commitments.slice(0, 4).map((e) => {     
            return (
            <div>
              <h4 className="">                    
                  {e.titre_commitment}
              </h4>
               <p>                    
                  {e.description_commitement}
              </p>
            </div>
            );              
          })} 
        </div> 
           </div>  

      <div className="zoneContact bg-cover-norepeat" style={{backgroundImage: 'url(/sites_images/font.webp)'}}>
      <div className="absoluteContainer"> 
        <a href="/contact">  <button className="btn btn-danger" style={{backgroundColor:"inherit",color:"#00000"}}>Contacts</button> </a>     
      </div> 
      </div>       
    </main>
    <Footer/>
  </div>
</>
);
}