import React from "react";
import BannerImg from "../assets/banner.jpeg";
import Logo from '../assets/logo.png'
import Line from '../assets/line1.png'
import {FaFacebookF,FaTwitter,FaYoutube} from 'react-icons/fa'

export default function Banner() {
  return (
    <div className="w-full h-2/3 relative overflow-hidden">
      <img src={BannerImg} className="w-full z-0" alt="banner" />
      <div className="bg-black w-full h-full absolute top-0 bg-opacity-20 z-30">
       <section className="flex justify-between items-center px-5">
       <img src={Logo} className="w-24" alt="logo"/>
        <ul className="flex text-white pr-5">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Ingredients</a></li>
          <li><a href="#">Menu</a></li>
          <li><a href="#">Reservation</a></li>
          <li><a href="#"><FaTwitter className="text-yellow-400"/></a></li>
          <li><a href="#"><FaYoutube className="text-yellow-400"/></a></li>
          <li><a href="#"><FaFacebookF className="text-yellow-400"/></a></li>
        </ul>
       </section>
        <div className="flex flex-col h-full w-screen justify-center items-center">
          <p className="banner-txt text-5xl text-gray-300 text-center font-bold">
            the right ingredients
            <br /> for the right foods
            
          </p>
          <img src={Line} className="w-64 h-7" alt="logo"/>
          <article className="flex justify-center items-center my-6">
            <button className="bg-black bg-opacity-60 px-5 py-2 text-white uppercase">
              BOOK A TABLE
            </button>
            <button className="bg-white bg-opacity-20 px-5 py-2 text-white uppercase ml-3 border border-white">
              SEE THE MENU
            </button>
          </article>
        </div>
      </div>
    </div>
  );
}
