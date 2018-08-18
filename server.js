const express        = require('express')
const app            = express()
const helmet         = require('helmet')
const server         = require('http').createServer(app)
const port           = 8083 //change this as needed

app.set('view engine', 'pug')
app.set('views', __dirname + '/dist')
app.use(express.json())
app.use(helmet())
app.use("/static", express.static(__dirname + '/dist'))
// test1 is the path in nginx that routes to port 8082. for other projects, test1 is not necessary.

app.use('/scripts', express.static('/home/ubuntu/ns_projects/linkurr/dist'))

server.listen(port, () => {
  console.log('listening on port:', port)
})

app.get('/*', (req, res) => {
  res.render('home')
  // res.sendFile(__dirname + '/dist/index.html')
})





// export default class CustonNavbar extends Component {
//   render() {
//     var navbarheader = Navbar.Header
//     var navbartoggle = Navbar.Toggle
//     var navbarbrand = Navbar.Brand
//     var navbarcollapse = Navbar.Collapse
//     var a1 = 1
//     var a2 = 2
//     var a3 = 3
//
//     return pug`
//       Navbar(default, collapseOnSelect)
//         NavbarHeader
//           NavbarBrand
//             Link(to='/') Ayy2y
//           NavbarToggle
//         NavbarCollapse
//           Nav(pullright)
//             NavItem(eventKey='{a1}' componentClass='{Link}' href='/' to='/') Home
//             NavItem(eventKey='{a2}' componentClass='{Link}' href='/about' to='/about') About
//             NavItem(eventKey='{a3}' componentClass='{Link}' href='/news' to='/news') News
//     `
//   }
// }

// export default class CustonNavbar extends Component {
//   render() {
//     var navbarheader = Navbar.Header
//     var navbartoggle = Navbar.Toggle
//     var navbarbrand = Navbar.Brand
//     var navbarcollapse = Navbar.Collapse
//     var a1 = 1
//     var a2 = 2
//     var a3 = 3
//
//     return pug`
//       navbar(default='', collapseonselect='')
//         navbarheader
//           navbarbrand
//             link(to='/')
//             |  Teeessst
//           navbartoggle
//         navbarcollapse
//           nav(pullright='')
//             navitem(eventkey='{1}', componentclass='{Link}', href='/', to='/')
//               | Home
//             navitem(eventkey='{2}', componentclass='{Link}', href='/about', to='/about')
//               | About
//             navitem(eventkey='{3}', componentclass='{Link}', href='/news', to='/news')
//               | News
//     `
//   }
// }

// export default class CustomNavbar extends Component {
//   render() {
//     var NavbarHeader = Navbar.Header
//     var NavbarBrand = Navbar.Brand
//     var NavbarToggle = Navbar.Toggle
//     var NavbarCollapse = Navbar.Collapse
//     return (
//       <Navbar default collapseOnSelect>
//         <NavbarHeader>
//           <NavbarBrand>
//             <Link to='/'> Teeessst </Link>
//           </NavbarBrand>
//           <NavbarToggle />
//         </NavbarHeader>
//         <NavbarCollapse>
//           <Nav pullRight>
//             <NavItem eventKey={1} componentClass={Link} href='/' to='/'>
//                 Home
//             </NavItem>
//             <NavItem eventKey={2} componentClass={Link} href='/about' to='/about'>
//                 About
//             </NavItem>
//             <NavItem eventKey={3} componentClass={Link} href='/news' to='/news'>
//                 News
//             </NavItem>
//           </Nav>
//         </NavbarCollapse>
//       </Navbar>
//     )
//   }
// }

// export default class CustonNavbar extends Component {
//   render() {
//     var navbarheader = Navbar.Header
//     var navbartoggle = Navbar.Toggle
//     var navbarbrand = Navbar.Brand
//     var navbarcollapse = Navbar.Collapse
//     var a1 = 1
//     var a2 = 2
//     var a3 = 3
//
//     return pug`
//       Navbar(default, collapseOnSelect)
//         NavbarHeader
//           NavbarBrand
//             Link(to='/') Ayy2y
//           NavbarToggle
//         NavbarCollapse
//           Nav(pullright)
//             NavItem(eventKey='{a1}' componentClass='{Link}' href='/' to='/') Home
//             NavItem(eventKey='{a2}' componentClass='{Link}' href='/about' to='/about') About
//             NavItem(eventKey='{a3}' componentClass='{Link}' href='/news' to='/news') News
//     `
//   }
// }
