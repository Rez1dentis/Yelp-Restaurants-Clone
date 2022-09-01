import React from 'react';

function SideBar(props) {
  return (
    <ul className="nav flex-column">
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#">Restaraunts</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="https://www.yelp.com/search?cflt=homeservices&find_loc=San+Francisco%2C+CA">Home Services</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="https://www.yelp.com/search?cflt=auto&find_loc=San+Francisco%2C+CA">Auto Services</a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled">More</a>
      </li>
    </ul>
  );
}

export default SideBar;
