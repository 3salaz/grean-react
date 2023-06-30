import React from "react";
import { Link } from "react-router-dom";

function Cover() {
  return (
    <div className='bg-white w-full h-[93vh]'>
        <img className='w-full h-full object-cover bg-red-300' src="https://firebasestorage.googleapis.com/v0/b/grean-de04f.appspot.com/o/photos%2Fpexels-melissa-sombrerero-12605435.jpg?alt=media&token=5a00d3f9-eb4a-43c6-a692-7a92f3a47f35"></img>
        <div className="relative w-full flex items-center justify-center bottom-36">
          <button className="w-36 p-2 bg-white rounded-lg shadow-4xl">
            <Link to="/login" className="text-xl">Login</Link>
          </button>
        </div>
    </div>
  );
}

export default Cover;
