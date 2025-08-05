import React from "react";

function Footer() {
  return (
    <>
      <footer className="bg-dark text-light pt-5 pb-3">
        <div className="container">
          <div className="row">
            {/* About */}
            <div className="col-md-3 mb-3">
              <h5>About</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-light text-decoration-none">
                    About us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-light text-decoration-none">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-light text-decoration-none">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="text-light text-decoration-none">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            {/* Discover */}
            <div className="col-md-3 mb-3">
              <h5>Discover</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-light text-decoration-none">
                    Get the App
                  </a>
                </li>
                <li>
                  <a href="#" className="text-light text-decoration-none">
                    Teach with Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-light text-decoration-none">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-light text-decoration-none">
                    Support
                  </a>
                </li>
              </ul>
            </div>

            {/* Business */}
            <div className="col-md-3 mb-3">
              <h5>Business</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-light text-decoration-none">
                    Solutions
                  </a>
                </li>
                <li>
                  <a href="#" className="text-light text-decoration-none">
                    Enterprise
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div className="col-md-3 mb-3">
              <h5>Legal</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-light text-decoration-none">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-light text-decoration-none">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="text-light text-decoration-none">
                    Accessibility
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="row mt-4">
            <div className="col-md-6">
              <p className="mb-0">&copy; 2025 YourBrandName</p>
            </div>
            <div className="col-md-6 text-md-end">
              <a href="#" className="text-light text-decoration-none me-3">
                Cookie Settings
              </a>
              <select className="form-select d-inline-block w-auto bg-dark text-light text-decoration-none border-light">
                <option>English</option>
                <option>Malayalam</option>
                <option>Hindi</option>
              </select>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
