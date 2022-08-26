import React, { Fragment, useState } from "react";
import PropertyCard from "./PropertyCard.js";

import Typography from "@material-ui/core/Typography";
import { Slider } from "@material-ui/core";
import data from "../data/data.js";
import "./Rent.css";

const Rent = () => {
  const [sfilter, setSfilter] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [cost, setCost] = useState([0, 7000]);

  const priceHandler = (event, newPrice) => {
    setCost(newPrice);
  };

  let dataSearch = data.properties
    .filter((item) => {
      return Object.keys(item).some((key) =>
        item[key]
          .toString()
          .toLowerCase()
          .includes(sfilter.toString().toLowerCase())
      );
    })
    .filter((x) => x.location === (location === "" ? x.location : location))
    .filter((y) => y.type === (type === "" ? y.type : type))
    .filter((x) => x.price >= cost[0] && x.price <= cost[1]);

  return (
    <Fragment>
      <h2 className="homeheading">Search properties to rent </h2>

      <div className="searchcontainer2">
        <div className="searchbox">
          <Typography>Location</Typography>
          <select
            className="searchbox2"
            onChange={(e) => setLocation(e.target.value)}
          >
            <option value="">-Select-</option>
            <option value="Jabalpur">Jabalpur</option>
            <option value="Gwalior">Gwalior</option>
            <option value="Noida">Noida</option>
            <option value="Rajasthan">Rajasthan</option>
          </select>
        </div>
        <div className="searchbox">
          <Typography>Property Type</Typography>
          <select
            className="searchbox2"
            onChange={(e) => setType(e.target.value)}
          >
            <option value="">-Select-</option>
            <option value="Villa">Villa</option>
            <option value="Flat">Flat</option>
            <option value="House">House</option>
            <option value="Hotel">Hotel</option>
          </select>
        </div>
        <div className="filterBox">
          <Typography>Price</Typography>
          <Slider
            value={cost}
            onChange={priceHandler}
            valueLabelDisplay="auto"
            area-labelledby="range-slider"
            className="pricebar"
            min={0}
            max={7000}
          />
        </div>

        <div className="searchbox">
          
          <input
            type="text"
            placeholder="Search with Search Bar"
            className="searchbox1"
            value={sfilter}
            
            onChange={(e) => {
              setSfilter(e.target.value);
            }}
          ></input>
        </div>
      </div>

      <div className="container" id="container">
        {dataSearch.map((property) => (
          <PropertyCard  key={property._id} property={property} />
        ))}
      </div>
    </Fragment>
  );
};

export default Rent;
