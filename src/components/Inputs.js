const Inputs = () => {

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
        </div>
      </div>
      <div class="mb-3">
        
        <input type="password" class="form-control" id="exampleInputPassword1" />
      </div>
      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
  </div>
  )
}

export default Inputs