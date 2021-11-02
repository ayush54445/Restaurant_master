import React from "react";
import {FaFacebookF,FaTwitter,FaYoutube} from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="grid grid-cols-8 bg-black py-10">
      <div className="col-span-2 col-start-2 px-10">
        <p className="text-center text-white my-4 text-xl">About us</p>
        <p className="mt-7 text-xs text-gray-600 text-center">
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before final copy is available.
        </p>
      </div>
      <div className="col-span-2 px-16">
        <p className="text-center text-white my-4 text-xl">Opening Hours</p>
        <p className="mt-7 text-xs text-gray-600 text-center">
          Mon-Thu:7:00am - 8:00pm
        </p>
        <p className="mt-1 text-xs text-gray-600 text-center">
          Fri-Sun:7:00am - 10:00pm
        </p>
      </div>
      <div className="col-span-2 px-16">
        <p className="text-center text-white my-4 text-xl">Our Locations</p>
        <p className="mt-7 text-xs text-gray-600 text-center">
          19th Paradise Street Sitia
            128 Meresole Avenue
        </p>
        <ul className="flex text-white my-4 justify-around">
          <li><FaTwitter className="text-gray-400"/></li>
          <li><FaYoutube className="text-gray-400"/></li>
          <li><FaFacebookF className="text-gray-400"/></li>
        </ul>
      </div>
    </footer>
  );
}
