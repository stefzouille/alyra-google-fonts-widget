import { useEffect, useState } from "react";
import Inputs from "./Inputs";
import Fonts from "./Fonts";

const Page = () => {
  const [valueSlider, setValueSlider] = useState("24");
  const [text, setText] = useState("Portez ce vieux whisky au juge blond qui fume !? 0123456789")
  const [sort, setSort] = useState("date")
  const [data, setData] = useState([])
  console.log(data)

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
    <div className="container ">
        <div className="row my-5">
          <Inputs
            setValueSlider={setValueSlider}
            setSort={setSort}
            valueSlider={valueSlider}
            text={text}
            setText={setText}
          />
          <h2 className="mb-3 col-9">
            <span className="badge bg-danger">{sort}</span>
          </h2>
          {data.map((elem) => {
             return <Fonts font={elem}  sort={sort} valueSlider={valueSlider} text={text} />
            })
          }
        </div>
      </div>
  );
};

export default Page;
