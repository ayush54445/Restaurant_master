import React from "react";
import Plate from "../assets/sample-plate.png";
import Chilly from "../assets/chef.jpg";
import Line from '../assets/line1.png';

export default function Second() {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-4 col-start-3 flex flex-col justify-center items-center">
        <article className="max-w-sm p-10">
          <p className="text-2xl text-yellow-500 text-center font-bold">Just the right food</p>
          <img src={Line} className="w-44 h-7 ml-12 mt-2" alt="logo"/>
          <p className="mt-7 text-xs text-gray-600 text-center">
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content. Lorem ipsum may be
            used as a placeholder before final copy is available.
          </p>

          <section className="flex justify-around items-center mt-4">
            <div className="w-20 h-20 rounded-full overflow-hidden">
              <img
                src={Chilly}
                className="w-full h-full object-cover"
                alt="chef"
              />
            </div>
          </section>
        </article>
      </div>
      <div className="col-span-4">
        <img src={Plate} className="w-full" alt="plate" />
      </div>
    </div>
  );
}
