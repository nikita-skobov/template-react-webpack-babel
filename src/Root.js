import React, {Component} from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './components/Home.js'
import About from './components/About.js'
import News from './components/News.js'
import Navbar from './components/CustomNavbar.js'

class Root extends Component {
  render() {
    return pug`
      Router
        div
          Navbar
          Route(exact path='/' component='{Home}')
          Route(exact path='/about' component='{About}')
          Route(exact path='/news' component='{News}')
    `
  }
}

// class Root extends Component {
//   render() {
//     return (
//       <Router>
//         <div>
//           <Navbar />
//           <Route exact path="/" component={Home} />
//           <Route exact path="/about" component={About} />
//           <Route exact path="/news" component={News} />
//         </div>
//       </Router>
//     )
//   }
// }

export default Root
