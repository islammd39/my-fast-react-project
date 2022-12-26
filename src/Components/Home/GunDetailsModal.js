import React from "react";

const GunDetailsModal = ({details, setDetails}) => {
    // console.log(details);
    const {action, bullet, category, img, name, price}= details
  return (
    <div>
      {/* The button to open modal */}
   

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            onClick={()=>setDetails(null)}
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">
            {name}
          </h3>
          <figure className="h-screen">
          <img src={img} alt="Shoes"/>
        </figure>
          <p className="py-4">
            {price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default GunDetailsModal;
