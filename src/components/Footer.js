import React from 'react';
import './footer.css';


function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
         
          <div className="col-md-4">
            <h4>Contact Us</h4>
            <ul className="list-unstyled">
              <li><i className="fa fa-map-marker"></i> interno,gandhi chowk,iscon,ahmedabad,301910.</li>
              <li><i className="fa fa-phone"></i> (123) 456-7890</li>
              <li><i className="fa fa-envelope"></i> info@example.com</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h4>Connect with Us</h4>
            <ul className="list-inline social-buttons">
              <li><a href="#"><i className="fa fa-twitter"></i></a></li>
              <li><a href="#"><i className="fa fa-facebook"></i></a></li>
              <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <p className="text-center">&copy; 2022 My Interior Design Studio. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
