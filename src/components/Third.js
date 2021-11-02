import React from "react";
import Food from "../assets/food-bg-3.jpeg";
import Chilly from "../assets/chilly.jpeg";
import Wheat from "../assets/wheat.jpeg";
import Termic from "../assets/termic.jpg";
import Line from '../assets/line1.png';

export default function Third() {
  return (
    <div className="w-full h-2/3 relative overflow-hidden bg-gray-300">
      <img src={Food} className="w-full" alt="food-bg-3" />
      <div className="bg-black w-full h-full absolute top-0 bg-opacity-5 z-30 flex flex-col items-end justify-center">
        <article className="max-w-sm p-16 bg-black opacity-60 mr-16">
          <p className="text-xl text-white text-center">Fine Ingredients</p>
          <img src={Line} className="w-44 h-7 ml-12 mt-2" alt="logo"/>
          <p className="mt-7 text-xs text-white text-center">
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content. Lorem ipsum may be
            used as a placeholder before final copy is available.
          </p>

          <section className="flex justify-around items-center mt-4">
              <div className="w-16 h-16 bg-black border-4 border-gray-800 rounded-full overflow-hidden">
              <img src={Chilly} className="w-full h-full object-cover" alt="chilly" />

              </div>
              <div className="w-16 h-16 bg-black border-4 border-gray-800 rounded-full mx-4 overflow-hidden">
              <img src={Wheat} className="w-full h-full object-cover" alt="chilly" />
              </div>
              <div className="w-16 h-16 bg-black border-4 border-gray-800 rounded-full overflow-hidden">
              <img src={Termic} className="w-full h-full object-cover" alt="chilly" />
              </div>
          </section>
        </article>
      </div>
    </div>
  );
}
