import React from 'react';
import RestList from '../RestList/RestList';
import Search from '../Search/Search';
import SideBar from '../SideBar/SideBar';

function MainPage(props) {
  return (
    <div>
      {/* <SideBar /> */}
      <Search />
      <RestList />
    </div>
  );
}

export default MainPage;
