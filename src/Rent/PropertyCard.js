import React from "react";
import { Link } from "react-router-dom";
import { FaBed } from "react-icons/fa";
import { MdBathroom } from "react-icons/md";
import { BsTextarea } from "react-icons/bs";

const PropertyCard = ({ property }) => {
  return (
    <Link className="propertycard" to={`/property/${property._id}`}>
     
      <img src={property.url} alt="image" />
      <span>{`$${property.price}/month`}</span>
      <h2>{property.name}</h2>
      <div className="propertybox">
        <div>
          <p>
            <FaBed /> {`${property.beds} beds`} 
          </p>
        </div>
        <div>
          <p>
            <MdBathroom /> {property.bathroom} Bathrooms
          </p>
        </div>
        <div>
          <p>
            <BsTextarea /> {property.area} Area
          </p>
        </div>
      </div>
      <p>{property.type}</p>
        <p>{property.discription}</p>
    </Link>
  );
};

export default PropertyCard;
