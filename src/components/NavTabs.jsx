// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names

// 

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


// function NavTabs({ currentPage, handlePageChange }) {
//   return (
    
//     <ul className="nav nav-tabs">
//       <li className="nav-item">
//         <a
//           href="#home"
//           onClick={() => handlePageChange('Home')}
//           // This is a conditional (ternary) operator that checks to see if the current page is "Home"
//           // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
//           className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
//         >
//           Home
//         </a>
//         </li>
//       <li className="nav-item">
//         <a
//           href="#about"
//           onClick={() => handlePageChange('About')}
//           // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
//           className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
//         >
//           About
//         </a>
//       </li>
//       <li className="nav-item">
//         <a
//           href="#blog"
//           onClick={() => handlePageChange('Blog')}
//           // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
//           className={currentPage === 'Blog' ? 'nav-link active' : 'nav-link'}
//         >
//           Blog
//         </a>
//       </li>
//       <li className="nav-item">
//         <a
//           href="#contact"
//           onClick={() => handlePageChange('Contact')}
//           // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
//           className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
//         >
//           Contact
//         </a>
//       </li>
//     </ul>
//   );
// }

export default NavTabs;
