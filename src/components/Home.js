import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap'
import './Home.css'

export default class Home extends Component {
  render() {
    return pug`
      Grid
        Jumbotron
          h2 Welcome to dsdsd
          p Touch urself loser
          Link(to='/about')
            Button(bsStyle='primary') About
        Row(class='show-grid text-center')
          Col(cs='{12}' sm='{4}' class='person-wrapper')
            Image(src='static/person.jpg' circle, class='profile-pic')
            h3 Frank1
          Col(cs='{12}' sm='{4}' class='person-wrapper')
            Image(src='static/person.jpg' circle, class='profile-pic')
            h3 Frank2
          Col(cs='{12}' sm='{4}' class='person-wrapper')
            Image(src='static/person.jpg' circle, class='profile-pic')
            h3 Frank3
        Row(class='show-grid text-center')
          Col(cs='{12}' sm='{4}' class='person-wrapper')
            Image(src='static/person.jpg' circle, class='profile-pic')
            h3 Frank1
          Col(cs='{12}' sm='{4}' class='person-wrapper')
            Image(src='static/person.jpg' circle, class='profile-pic')
            h3 Frank2
          Col(cs='{12}' sm='{4}' class='person-wrapper')
            Image(src='static/person.jpg' circle, class='profile-pic')
            h3 Frank3
        Row(class='show-grid text-center')
          Col(cs='{12}' sm='{4}' class='person-wrapper')
            Image(src='static/person.jpg' circle, class='profile-pic')
            h3 Frank1
          Col(cs='{12}' sm='{4}' class='person-wrapper')
            Image(src='static/person.jpg' circle, class='profile-pic')
            h3 Frank2
          Col(cs='{12}' sm='{4}' class='person-wrapper')
            Image(src='static/person.jpg' circle, class='profile-pic')
            h3 Frank3
        Row(class='show-grid text-center')
          Col(cs='{12}' sm='{4}' class='person-wrapper')
            Image(src='static/person.jpg' circle, class='profile-pic')
            h3 Frank1
          Col(cs='{12}' sm='{4}' class='person-wrapper')
            Image(src='static/person.jpg' circle, class='profile-pic')
            h3 Frank2
          Col(cs='{12}' sm='{4}' class='person-wrapper')
            Image(src='static/person.jpg' circle, class='profile-pic')
            h3 Frank3
    `
  }
}
