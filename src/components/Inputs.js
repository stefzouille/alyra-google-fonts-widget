import {useState} from "react"

const Inputs = ({setValueSlider, valueSlider}) => {

const handleChange = (event) => {
  setValueSlider(event.target.value)
}
 
return (
  <div className="col-lg-3 mb-4">
    <div style={{position: "sticky", top: 0}}>
        <label htmlFor="sort" className="fw-bold mb-2">Afficher des polices</label>
        <select id="sort" className="form-select mb-4">
          <option value="date">Les 10 plus récentes</option>
          <option value="popularity">Les 10 plus populaires</option>
          <option value="trending">Top 10 trendings</option>
        </select>
        <div className="mb-3">
          <label htmlFor="text" className="form-label fw-bold mb-3">Tapez votre text</label>
          <textarea id="text" className="form-control">Portez ce vieux whisky au juge blond qui fume !? 0123456789</textarea>
        </div>
        <label htmlFor="range" className="form-label fw-bold mb-3">La taille de police</label>
        <input onChange={handleChange} type="range" className="form-range" min="8" max="48" step="1" value={valueSlider}></input>
      </div>
  </div>
  )
}

export default Inputs