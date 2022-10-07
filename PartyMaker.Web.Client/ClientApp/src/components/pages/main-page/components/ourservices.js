import React, { useEffect } from "react";
import useMedia from "use-media";
import Tags from "../../../ui/Tags";

const OurServices = ({ services }) => {
  useEffect(() => {
    console.log(media)
  }, []);
  const media = useMedia({maxWidth : 1600})
  return (
    <div className="container my-5">
        {!media && <img style = {{position : "absolute",left : 0}} src = "https://i.ibb.co/k2S9rYm/sh11.webp" />}
        <h1 className = 'text-center my-3' style ={{fontFamily : "'Rubik', sans-serif", fontWeight : "600"}}>Our services</h1>
        <div className="row justify-content-evenly">
          {services?.map((elem) => (
            <div className="col-6 col-md-4 d-flex w-auto ">
              <h3
                className="text-center text-uppercase m-1 px-1 text-dark rounded d-flex"
                style={{ background: "#ffd80b", width :'fit-content' }}
              >
                #{elem.name}
              </h3>
            </div>
          ))}
        </div>

    
    
    </div>
  );
};

export default OurServices;
