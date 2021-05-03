import { useState } from "react";
import Inputs from "./Inputs";
import Fonts from "./Fonts";

const Page = () => {
  const [valueSlider, setValueSlider] = useState("24");
  const [text, setText] = useState(
    "Portez ce vieux whisky au juge blond qui fume !? 0123456789"
  )
  const [textSelect, setTextSelect] = useState();

  return (
    <div className="container min-vh-100">
      <div className="container">
        <div className="row my-5">
          <Inputs
            setValueSlider={setValueSlider}
            setTextSelect={setTextSelect}
            valueSlider={valueSlider}
            text={text}
            setText={setText}
          />

          <Fonts valueSlider={valueSlider} text={text} />
        </div>
      </div>
    </div>
  );
};

export default Page;
