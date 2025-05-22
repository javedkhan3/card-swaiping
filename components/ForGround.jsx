import React, {useRef, useState} from "react";
import Card from "./Card";


function ForGround() {

  const ref = useRef(null);


  const  data = [
    {
    desc: "The is the bakground color of the card will be displayed.",
    filesize: ".9mb",
    close: true,
    tag: {isOpen: true, tagTitle: "Download Nnow", tagColor: "green"},
},
{
  desc: "The is the bakground color of the card will be displayed.",
  filesize: ".9mb",
  close: true,
  tag: {isOpen: true, tagTitle: "Uplaod", tagColor: "blue"},
},
{
  desc: "The is the bakground color of the card will be displayed.",
  filesize: ".9mb",
  close: false,
  tag: {isOpen: false, tagTitle: "Download Nnow", tagColor: "green"},
},
  ];

  return (
      <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-5 flex-wrap">
        {data.map( (item, index) => (
         <Card data={item} reference={ref}/>
        ) )
          }
        
      </div>
  );
}

export default ForGround;
 