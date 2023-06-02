export default function Search() {
  return (
    <div className="weather-app">
      <div className="searchForm">
        <div className="row">
          <div className="col-6">
            <input
              type="text"
              className="form-control"
              placeholder="Choose your city"
              id="your-city"
              autoComplete="off"
              autoFocus="on"
            />
          </div>

          <div className="col-6">
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <button
                className="btn btn-primary me-md-2"
                type="button"
                id="search-button"
              >
                Search
              </button>
              <button
                className="btn btn-primary"
                type="button"
                id="current-button"
              >
                Current
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
