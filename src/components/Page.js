import { useEffect, useState } from "react";
import Inputs from "./Inputs";
import Fonts from "./Fonts";


const Page = () => {
  const [valueSlider, setValueSlider] = useState("24");
  const [text, setText] = useState("Portez ce vieux whisky au juge blond qui fume !? 0123456789")
  const [sort, setSort] = useState("date")
  const [data, setData] = useState([])

  useEffect(() => {
    fetch(`https://www.googleapis.com/webfonts/v1/webfonts?sort=${sort}&key=AIzaSyBQmtaFj1OaYmkjj8Qwo9uYKblF61wxjQM`)
    .then((response) => {
        if(!response.ok) {
          throw new Error(`impossible de lire les Fonts ${response.status}`)
        }
        return response.json()
    })
    .then((data) => {
      setData(data.items.slice(0,10))
    })
    .catch((error) => {
      console.error(error.message)
    })
  }, [sort])

  return (
    <div className="container min-vh-100">
      <div className="row my-5">
        <Inputs
          setValueSlider={setValueSlider}
          setSort={setSort}
          valueSlider={valueSlider}
          text={text}
          setText={setText}
        />
        <div className="col-lg-9">
          <section className="row mb-5">
            <h2 className="mb-3 col-9"><span className="badge bg-danger">{sort}</span></h2>
            {data.map((elem) => {
              return <Fonts key={elem.family} font={elem}  sort={sort} valueSlider={valueSlider} text={text} />
              })
            }
          </section>
        </div>  
      </div>
    </div>
  );
};

export default Page;
