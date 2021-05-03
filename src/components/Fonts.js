import { useEffect, useState } from "react"


const Fonts = ({valueSlider, text}) => {
   const [loading, setLoading] = useState(false)
   const [error, setError] = useState("")

  useEffect(() => {

    setLoading(true)
    setError("")


    fetch('https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyBQmtaFj1OaYmkjj8Qwo9uYKblF61wxjQM')

      .then((response) => {
        console.log("j'en suis la!!coucou!");
        return new Promise((resolved) => {
          setTimeout(() => resolved(response), 2000);
        });
      })
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `Nous n'avons pas pu lire les registres des planètes, status : ${response.status}`
          );
        }
        return response.json();
      })
      .then((data) => {
        console.log(data)
        //setFonts((p) => [...p, ...data.results])
        setLoading(false);
      })
      .catch((error) => {
        console.error(error.message)
        setError(error.message)
        setLoading(false);
      })
  }, [])

  return (
    <div className="col-lg-9">
      <section className="row mb-5">
        <h2 className="mb-3"><span className="badge bg-danger"></span></h2>
        <article className="col-lg-6 mb-4">

          <div className="shadow-sm border p-3 h-100">
            
            <h2 className="h6 d-flex aling-items-center justify-content-between"><span>Karantina</span><small>3 variant(s)</small></h2>
            <span className="badge bg-dark mb-4">DISPLAY</span>


            <p className="sample" style={{fontSize: `${valueSlider}px`}}>{text}</p>

            <a rel="noopener noreferrer" target="_blank" className="text-danger"
              href="https://fonts.google.com/specimen/Karantina">Voir sur Google Fonts (ouvre un nouveau tab)</a>

          </div>

        </article>
      </section>

    </div>
  )
}

export default Fonts