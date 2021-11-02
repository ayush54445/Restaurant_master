import React from "react";
import Food from "../assets/food-bg-2.jpeg";
import Line from '../assets/line1.png';
export default function Fifth() {
  return (
    <div className="w-full h-2/3 relative overflow-hidden bg-gray-300">
      <img src={Food} className="w-full" alt="food-bg-2" />
      <div className="bg-white w-full h-full absolute top-0 bg-opacity-5 z-30 flex flex-col items-center justify-center">
        <article className="max-w-sm p-16 bg-black opacity-80">
          <p className="text-xl text-white text-center">Guest Reviews</p>
          <img src={Line} className="w-44 h-7 ml-16 mt-2" alt="logo"/>
          <p className="mt-7 text-xs text-white text-center">
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content. Lorem ipsum may be
            used as a placeholder before final copy is available.
          </p>
        </article>
      </div>
    </div>
  );
}
