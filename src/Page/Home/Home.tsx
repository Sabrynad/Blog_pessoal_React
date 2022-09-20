import React from "react";
import Navbar from "../../components/estaticos/navbar/Navbar";
import "./Home.css";

export  default function Home() {
   return (
      <>
      <Navbar/>
       <main id='home'>
         <div id='img'>
            <img id='fundo' src="https://media.glamour.mx/photos/6190c64df5ed039ceea8dc60/3:2/w_840,h_560,c_limit/154794.jpg" alt="" />
         </div>
      </main>
      </>
   )

}

