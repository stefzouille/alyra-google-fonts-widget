import { useState } from 'react'
import Inputs from './Inputs'
import Fonts from './Fonts'

const Page = () => {
  const [valueSlider, setValueSlider] = useState("24")
 
  return (
    <div className="container min-vh-100">
      <div className="container">
        <div className="row my-5">
          <Inputs setValueSlider={setValueSlider} valueSlider={valueSlider} />
          <Fonts valueSlider={valueSlider} />
        </div>
      </div>
    </div>
  )
}

export default Page