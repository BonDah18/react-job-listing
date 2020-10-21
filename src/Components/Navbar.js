import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import { ButtonContainer } from './Button';


export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-default ps-sm-5">
        {/* https://www.iconfinder.com/icons/1243689/call_phone_icon
        Creative Commons (Attribution 3.0 Unported);
        https://www.iconfinder.com/Makoto_msk */}
        <Link to='/'>
        <img src={logo} alt="jobs" className="navbar-brand" />
        </Link>
        <ul className="navbar-nav align-items-center">
        <li className="nav-item ml-5">
        <Link to="/" className="nav-link">
        Home
        </Link>
        </li>
        <li className="nav-item ml-5">
        <Link to="/jobs" className="nav-link">
        Browse Jobs
        </Link>
        </li>
        <li className="nav-item ml-5">
        <Link to="/" className="nav-link">
        Pages
        </Link>
        </li>
        <li className="nav-item ml-5">
        <Link to="/" className="nav-link">
        Blog
        </Link>
        </li>
        <li className="nav-item ml-5">
        <Link to="/" className="nav-link">
        Contact
        </Link>
        </li>
        </ul>
        <Link to='/cart' className="ml-auto">
          <ButtonContainer>
            <span className="boxed-btn3">
             </span>
            Post A Job
          </ButtonContainer>
        </Link> 
      </NavWrapper>
    )
  }
}

const NavWrapper = styled.nav`
  background:var(--mainBlue);
  .nav-link:{
    color: var(--mainWhite) !important;
    font-size:1.3rem;
    text-transform:  capitalize;
  }
`;