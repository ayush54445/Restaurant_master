import React from "react";
import Line from '../assets/line1.png'

export default function Fourth() {
  return (
    <div className="grid grid-cols-12">
       <div className="col-span-4 col-start-3 bg-grey-400 m-7">
       <p className="text-2xl text-yellow-500 text-center font-bold">Appetisers</p>
       <img src={Line} className="w-44 h-7 ml-16 mt-2" alt="logo"/>
       <div class="flex space-x-44">
       <p className="text-lg text-yellow-500 text-center underline">Tzatsiki</p>
       <p className="text-lg text-yellow-500 text-center underline">$3.99</p>
       </div>
       <p class='text-sm'>Refreshing the traditional cucumber.</p>
       <div class="flex space-x-44">
       <p className="text-lg text-yellow-500 text-center underline">Tzatsiki</p>
       <p className="text-lg text-yellow-500 text-center underline">$3.99</p>
       </div>
       <p class='text-sm'>Refreshing the traditional cucumber.</p>
       <div class="flex space-x-44">
       <p className="text-lg text-yellow-500 text-center underline">Tzatsiki</p>
       <p className="text-lg text-yellow-500 text-center underline">$3.99</p>
       </div>
       <p class='text-sm'>Refreshing the traditional cucumber.</p>
       </div>
        
      <div className="col-span-4 bg-grey-400 m-7">
         
        <p className="text-2xl text-yellow-500 text-center font-bold">Starters</p>
        <img src={Line} className="w-44 h-7 ml-16 mt-2" alt="logo"/>
       <div class="flex space-x-44">
       <p className="text-lg text-yellow-500 text-center underline">Haloumi</p>
       <p className="text-lg text-yellow-500 text-center underline">$3.99</p>
       </div>
       <p class='text-sm'>Refreshing the traditional cucumber.</p>
       <div class="flex space-x-44">
       <p className="text-lg text-yellow-500 text-center underline">Haloumi</p>
       <p className="text-lg text-yellow-500 text-center underline">$3.99</p>
       </div>
       <p class='text-sm'>Refreshing the traditional cucumber.</p>
       <div class="flex space-x-44">
       <p className="text-lg text-yellow-500 text-center underline">Haloumi</p>
       <p className="text-lg text-yellow-500 text-center underline">$3.99</p>
       </div>
       <p class='text-sm'>Refreshing the traditional cucumber.</p>
      </div>

      <div className="col-span-4 col-start-3 bg-grey-400 m-7">
      <p className="text-2xl text-yellow-500 text-center font-bold">Salads</p>
      <img src={Line} className="w-44 h-7 ml-16 mt-2" alt="logo"/>
       <div class="flex space-x-44">
       <p className="text-lg text-yellow-500 text-center underline">Olive</p>
       <p className="text-lg text-yellow-500 text-center underline">$3.99</p>
       </div>
       <p class='text-sm'>Refreshing the traditional cucumber.</p>
       <div class="flex space-x-44">
       <p className="text-lg text-yellow-500 text-center underline">Olive</p>
       <p className="text-lg text-yellow-500 text-center underline">$3.99</p>
       </div>
       <p class='text-sm'>Refreshing the traditional cucumber.</p>
       <div class="flex space-x-44">
       <p className="text-lg text-yellow-500 text-center underline">Olive</p>
       <p className="text-lg text-yellow-500 text-center underline">$3.99</p>
       </div>
       <p class='text-sm'>Refreshing the traditional cucumber.</p>
      </div>

      <div className="col-span-4 bg-grey-400 m-7">
        {/* <img src={Plate} className="w-full" alt="plate"/> */}
        <p className="text-2xl text-yellow-500 text-center font-bold">Main Dishes</p>
        <img src={Line} className="w-44 h-7 ml-16 mt-2" alt="logo"/>
       <div class="flex space-x-44">
       <p className="text-lg text-yellow-500 text-center underline">Chicken</p>
       <p className="text-lg text-yellow-500 text-center underline">$3.99</p>
       </div>
       <p class='text-sm'>Refreshing the traditional cucumber.</p>
       <div class="flex space-x-44">
       <p className="text-lg text-yellow-500 text-center underline">Chicken</p>
       <p className="text-lg text-yellow-500 text-center underline">$3.99</p>
       </div>
       <p class='text-sm'>Refreshing the traditional cucumber.</p>
       <div class="flex space-x-44">
       <p className="text-lg text-yellow-500 text-center underline">Chicken</p>
       <p className="text-lg text-yellow-500 text-center underline">$3.99</p>
       </div>
       <p class='text-sm'>Refreshing the traditional cucumber.</p>
      </div>
       
       
    </div>
  );
}
