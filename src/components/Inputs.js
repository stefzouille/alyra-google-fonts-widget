const Inputs = ({
  setValueSlider,
  valueSlider,
  text,
  setText,
  setTextSelect,
}) => {
  const handleChange = (event) => {
    setValueSlider(event.target.value);
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleSelectChange = (event) => {
    setTextSelect(event.target.value);
  };

  return (
    <div className="col-lg-3 mb-4">
      <div style={{ position: "sticky", top: 0 }}>
        <label htmlFor="sort" className="fw-bold mb-2">
          Afficher des polices
        </label>
        <select
          id="sort"
          className="form-select mb-4"
          onChange={handleSelectChange}
        >
          <option value="date">Les 10 plus récentes</option>
          <option value="popularity">Les 10 plus populaires</option>
          <option value="trending">Top 10 trendings</option>
        </select>

        <div className="mb-3">
          <label htmlFor="text" className="form-label fw-bold mb-3">
            Tapez votre text
          </label>

        {/* //attention le warning vient de ICI text area !!!! */}
          <textarea
            onChange={handleTextChange}
            id="text"
            className="form-control"
            >
     {/* hmm obligé de descendre text en dehors de textarea ??? le usetex de page.js pose souci??     */}
            {text}
          </textarea>
        </div>

        <label htmlFor="range" className="form-label fw-bold mb-3">
          La taille de police
        </label>
        <input
          onChange={handleChange}
          type="range"
          className="form-range"
          min="8"
          max="48"
          step="1"
          value={valueSlider}
        ></input>
      </div>
    </div>
  );
};

export default Inputs;
