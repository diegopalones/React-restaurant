import React from "react";
import "./Home.css";

const Home = ({ Data }) => {
     const Dishes = Data.map((element) => {
       return (
         <div key={element.id}>
           <div className="dishes">
             <img
               className="image"
               src={element.image}
               alt={element.name}
               height="200px"
             />
             <div className="container">
               {" "}
               <h3>Name of dish: {element.name}. </h3>
               <p> Description: {element.description} </p>
               <h4>Price: £{element.price} </h4>
             </div>
           </div>
         </div>
       );
     });
     return (
         <div className="dishes-container">
           <h1 className="title">Nuestros platos para hoy:</h1>
         {Dishes}
       </div>
     );

};

export default Home;
