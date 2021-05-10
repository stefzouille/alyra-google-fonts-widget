import { useEffect, useState } from "react";
import Inputs from "./Inputs";
import Fonts from "./Fonts";


const Page = () => {
  const [valueSlider, setValueSlider] = useState("24");
  const [text, setText] = useState("Portez ce vieux whisky au juge blond qui fume !? 0123456789")
  const [sort, setSort] = useState("date")
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const spanText = (sort) => {
    switch(sort) {
      case "date":
        return "Les 10 plus récentes"
      case "popularity":
        return "Les 10 plus populaires"
      case 'trending': 
        return "Top 10 trendings"
      default:
        return "ça bug !"
    }
  }

  useEffect(() => {
  setLoading(false);
    setError("");

    fetch(`https://www.googleapis.com/webfonts/v1/webfonts?sort=${sort}&key=${process.env.REACT_APP_SECRET_NAME}`)
      .then((response) => {
        return new Promise((resolved) => {
          // setTimeout(() => resolved(response), 200);
        });
      })
      .then((response) => {
        if (!response.ok) {
          throw new error(`impossible de lire les Fonts ${response.status}`)
        }
        return response.json();
      })
    .then((data) => {
      setData(data.items.slice(0,10))
      setLoading(false);
    })
    .catch((error) => {
      console.error(error.message)
      setError(error.message)
      setLoading(false);
    })
  }, [sort, error])

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
            <h2 className="mb-3 col-9"><span className="badge bg-danger">{spanText(sort)}</span></h2>
            {data.map((elem) => {
              return <Fonts key={elem.family} font={elem}  sort={sort} valueSlider={valueSlider} text={text} />
              })
            }
              {loading && <p className="text-center">loading mode wait please...</p>}
              {!!error && <p className="alert alert-danger">{error}</p>}
            <div className="row mb-5"> </div>
          </section>
        </div>  
      </div>
    </div>
  );
};

export default Page;
