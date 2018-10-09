import React from "react";

const CatList = props => (
  <div>
    {props.loading
      ? "Loading..."
      : props.catPics.map(catPic => <img src={catPic.url} />)}
  </div>
);

export default CatList;
