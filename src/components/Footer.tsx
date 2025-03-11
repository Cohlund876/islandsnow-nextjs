'use client';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
const FooterMenu = () => (
  <footer className="footer mb-0" style={{ backgroundColor: '#292929', color: 'white' }}>
    <div className="container">
      <div className="row py-4 px-2">
        {/* Navigation Column */}
        <div className="col-4">
          <h5>NAVIGATION</h5>
          <hr />
          <h6>About Us</h6>
          <h6>Employment</h6>
          <h6>Videos</h6>
        </div>

        {/* Main Menu Column */}
        <div className="col-4">
          <h5>MAIN MENU</h5>
          <hr />
          <h6>Men</h6>
          <h6>Women</h6>
          <h6>Kids</h6>
        </div>

        {/* Connect Column */}
        <div className="col-4">
          <h5>CONNECT</h5>
          <hr />
          <h6>Sign up for Latest Updates</h6>
          <div className="input-group">
            <input
              type="text"
              className="form-control form-control-sm"
              placeholder="Enter Email Address"
              aria-label="Username"
            />
            <button type="button" className="btn btn-dark">
              Join
            </button>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default FooterMenu;
