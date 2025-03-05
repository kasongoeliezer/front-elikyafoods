// import Header from "./header";
// import Link from "next/link";
// import styles from "@/styles/Home.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from "../components/sidebar";
import { useState } from 'react';
import Navigationbar from './navigationbar';



const MainHeader = () => {

  return (
    <header  className="header d-flex align-items-center position-relative">
        <div className="container container-xl position-relative d-flex align-items-center justify-content-between">
          <a href="#" className="logo d-flex align-items-center">
          <img src="/sites_images/logo.png" alt="Elikyafoods" height="320px"/> 
          </a>
          <span className="navbar_def"> 
          <nav className="navmenu">
          <Navigationbar/>
          </nav>
          </span>
          <span className="Mobiletogleenavbar"> 
          <Sidebar/>
          </span>
        </div>
      </header>

  );
};
export default MainHeader;
