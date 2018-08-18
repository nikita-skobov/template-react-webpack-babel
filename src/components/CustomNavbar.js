import React, {Component} from 'react'
import {Navbar, Nav, NavItem} from 'react-bootstrap'
import { Link} from 'react-router-dom'
import './CustomNavbar.css'


export default class CustonNavbar extends Component {
  render() {
    var navbarheader = Navbar.Header
    var navbartoggle = Navbar.Toggle
    var navbarbrand = Navbar.Brand
    var navbarcollapse = Navbar.Collapse
    var a1 = 1
    var a2 = 2
    var a3 = 3

    return pug`
      Navbar(bsStyle='inverse' collapseOnSelect fixedTop id='nav1')
        Navbar.Header
          Navbar.Brand
            Link(to='/') Teeessst
          Navbar.Toggle
        Navbar.Collapse
          Nav(pullRight)
            NavItem(eventKey='{1}', componentClass='{Link}', href='/', to='/') Home
            NavItem(eventKey='{2}', componentClass='{Link}', href='/about', to='/about') About
            NavItem(eventKey='{3}', componentClass='{Link}', href='/news', to='/news') News
    `
  }
}
