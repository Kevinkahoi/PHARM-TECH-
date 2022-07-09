import * as React from 'react';

export default function Article() {
  return (
    <div className="hero-area bg-1 text-center overly">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="content-block">
              <h1>BEST PLACE TO GET A JOB </h1>
              <p>Join the millions Post and Get a job!!!</p>
              <div className="short-popular-category-list text-center">
                <h2>Popular Category</h2>
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="fa fa-category"></i> Category
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="fa fa-location"></i> Location
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="fa fa-job"></i> Find a job
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="advance-search">
              <form action="#">
                <div className="row">
                  <div className="col-lg-6 col-md-12">
                    <div className="block d-flex">
                      <input
                        type="text"
                        className="form-control mb-2 mr-sm-2 mb-sm-0"
                        id="search"
                        placeholder="Search for a job"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className="block d-flex">
                      <input
                        type="text"
                        className="form-control mb-2 mr-sm-2 mb-sm-0"
                        id="search"
                        placeholder="Search for a job"
                      />

                      <button className="btn btn-main">SEARCH</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
