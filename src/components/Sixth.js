import React from "react";
import Plate from "../assets/sample-plate.png";
import Plate1 from "../assets/mutton1.jpg";
import Line from '../assets/line1.png';

export default function Sixth() {
  return (
    <div className="grid grid-cols-12 pb-24">
      <div className="col-span-3 bg-grey-400">
        <div class='w-1/2 h-full m-20'>
      <img
                src={Plate}
                className="w-full h-full object-cover"
                alt="chicken"
              />
      </div>
      
      </div>
      <div className="col-span-3 bg-grey-400">
        <div class='w-1/2 h-full mt-20'>
      <img
                src={Plate1}
                className="w-full h-full object-cover"
                alt="chicken"
              />
      </div>
      
      </div>
      <div className="col-span-6">
        <h1 className="text-2xl text-yellow-500 text-center my-20">
          Just the right food
          <img src={Line} className="w-44 h-7 ml-44" alt="logo"/>
        </h1>
        
        <p className="my-4 text-xs text-gray-500 text-center px-16 pb-10">
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before final copy is available.
        </p>

        <section className="mt-4">
          <article className="flex justify-around items-center mb-5">
            <input placeholder="your name*" />
            <input placeholder="your email*" />
          </article>
          <article className="flex justify-around items-center mb-5">
            <input placeholder="date" type="date" />
            <select name="cars" id="cars">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
          </article>

          <button className="px-10 py-2 bg-yellow-500 text-lg text-white block mx-auto">
            Book Now
          </button>
        </section>
      </div>
    </div>
  );
}
