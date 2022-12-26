import React, { useState } from "react";
import GunDetailsModal from "./GunDetailsModal";

const GunCard = ({ gun, count }) => {
  // console.log(gun);
  const { category, img, name } = gun;
  const [details, setDetails]= useState(null)
  return (
    <>
      <div className="card w-full h-full bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="Shoes" className="h-64 w-3/4 m-5"/>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          
         <div className="flex">
         <p>Category : {category}</p>
         
         </div>
          <div className="card-actions justify-between">
            <button onClick={()=>count()} className="btn btn-primary">Add to Cart</button>
            <label onClick={()=>setDetails(gun)} htmlFor="my-modal-3" className="btn btn-secondary">Details</label>    
          </div>
        </div>
        {details && <GunDetailsModal details={details} setDetails={setDetails}></GunDetailsModal>}
      </div>
    </>
  );
};

export default GunCard;
