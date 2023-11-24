import React, { useState } from "react";

export const Question = (props) => {
  // console.log(props);
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
    <div className="question m-4 p-2 bg-white">
      <div className="content flex flex-row text-lg items-center justify-between font-semibold">
        <h2 className="ques-title">{props.title}</h2>
        <button className="plus-sign bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white px-2 border border-blue-500 hover:border-transparent rounded" onClick={()=> setIsOpen(!isOpen)}>+</button>
      </div>
      {isOpen && <h3 className="ques-info text-gray-700">{props.info}</h3>}    
      </div>
    </>
  );
};
