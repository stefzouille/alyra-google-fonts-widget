import GoogleFontLoader from "react-google-font-loader"

const Fonts = ({ valueSlider, text, font }) => {

  const link = `https://fonts.google.com/specimen/${font.family}`


 return (
      <article className="col-lg-6 mb-4">
        
        <div className="shadow-sm border p-3 h-100">
          <h2 className="h6 d-flex aling-items-center justify-content-between">
            <span>{font.family}</span>
            <small>{font.variants.length} variant(s)</small>
          </h2>
          
          <span className="badge bg-dark mb-4">{font.category}</span>
          <GoogleFontLoader fonts={[{font: font.family}]} />
          <p className="sample" style={{fontFamily: font.family, fontSize: `${valueSlider}px`}}>
            {text}
          </p>

          <a
            rel="noopener noreferrer"
            target="_blank"
            className="box fs-3"
            href={link}
          >
            Voir sur Google Fonts (ouvre un nouveau tab)
          </a>
        </div>
      </article>
  )
}

export default Fonts
