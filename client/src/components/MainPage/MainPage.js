import React from 'react';
import Navbar from '../Navbar/Navbar';
import Search from '../Search/Search';
import SideBar from '../SideBar/SideBar';

function MainPage(props) {
  return (
    <div>
      <SideBar />
      {/* <Navbar /> */}
      <Search />
    </div>
  );
}

export default MainPage;
