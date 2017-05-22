import React, { Component } from 'react'
// import { Dropdown, DropdownMenu, DropdownItem } from 'reactstrap'

class Header extends Component {
  /*constructor(props) {
    super(props);

    this.toggleProfile = this.toggleProfile.bind(this);
  }*/

  // toggleProfile(e) {
  //   e.preventDefault();
  //   var {dispatch} = this.props
  //   dispatch({ type: 'TOGGLE_PROFILE'})
  // }

  sidebarToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-hidden');
  }

 /* sidebarMinimize(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-minimized');
  }

  mobileSidebarToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-mobile-show');
  }

  asideToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('aside-menu-hidden');
  }*/

  render() {
    return (
      <header className="app-header navbar">
        <button className="navbar-toggler mobile-sidebar-toggler d-lg-none" onClick={this.mobileSidebarToggle} type="button">&#9776;</button>
        <a className="navbar-brand" href="#">CORE UI</a>
        <ul className="nav navbar-nav d-md-down-none mr-auto">
          <li className="nav-item">
            <a className="nav-link navbar-toggler sidebar-toggler" onClick={this.sidebarToggle} href="#">&#9776;</a>
          </li>
        </ul>
        <ul className="nav navbar-nav ml-auto">
          <li className="nav-item d-md-down-none">
            <a className="nav-link" href="#"><i className="icon-bell"></i><span className="badge badge-pill badge-danger">5</span></a>
          </li>
          <li className="nav-item d-md-down-none">
            <a className="nav-link" href="#"><i className="icon-list"></i></a>
          </li>
          <li className="nav-item d-md-down-none">
            <a className="nav-link" href="#"><i className="icon-location-pin"></i></a>
          </li>
          <li className="nav-item">
            <a onClick={this.toggle} className="nav-link dropdown-toggle nav-link" data-toggle="dropdown" href="" role="button" aria-haspopup="true">
              <img src={'img/avatars/6.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
              <span className="d-md-down-none">admin</span>
            </a>

            <span className="dropdown-menu-right">
            USER PROFILE
            </span>
          </li>
          <li className="nav-item d-md-down-none">
            <a className="nav-link navbar-toggler aside-menu-toggler" onClick={this.asideToggle} href="#">&#9776;</a>
          </li>
        </ul>
      </header>
    )
  }
}

export default Header;
