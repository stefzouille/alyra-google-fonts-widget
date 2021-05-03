import {useState} from "react"

const Inputs = () => {
const [value, setValue] = useState("24")

const handleChange = (event) => {
  setValue(event.target.value)
}
 
return (
  <div className="col-lg-3 mb-4">
    <div style={{position: "sticky", top: 0}}>
        <label htmlFor="sort" class="fw-bold mb-2">Afficher des polices</label>
        <select id="sort" class="form-select mb-4">
          <option value="date">Les 10 plus récentes</option>
          <option value="popularity">Les 10 plus populaires</option>
          <option value="trending">Top 10 trendings</option>
        </select>
        <div class="mb-3">
          <label htmlFor="text" class="form-label fw-bold mb-3">Tapez votre text</label>
          <textarea id="text" class="form-control">Portez ce vieux whisky au juge blond qui fume !? 0123456789</textarea>
        </div>
        <label htmlFor="range" class="form-label fw-bold mb-3">La taille de police</label>
        <input onChange={handleChange} type="range" className="form-range" min="8" max="48" step="1" value={value}></input>
      </div>
  </div>
  )
}

export default Inputs