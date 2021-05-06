import { useEffect, useState } from "react";
import GoogleFontLoader from 'react-google-font-loader'; 


const Fonts = ({ valueSlider, text, sort, font }) => {

 return (
    
    <div className="col-lg-9">
     <article className="col-lg-6 mb-4">
          <div className="shadow-sm border p-3 h-100">
            <h2 className="h6 d-flex aling-items-center justify-content-between">
              <span>Karantina</span>
              <small>3 variant(s)</small>
            </h2>
            <span className="badge bg-dark mb-4">DISPLAY</span>

            <p className="sample" style={{ fontSize: `${valueSlider}px` }}>
              {text}
            </p>

            <a
              rel="noopener noreferrer"
              target="_blank"
              className="text-danger"
              href="https://fonts.google.com/specimen/Karantina"
            >
              Voir sur Google Fonts (ouvre un nouveau tab)
            </a>
          </div>
        </article>
      </div>
   
  );
};

export default Fonts;
