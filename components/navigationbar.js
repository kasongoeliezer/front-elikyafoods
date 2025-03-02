import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navigationbar(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    
            <ul>
              <li><a href="/" className="active">Home</a></li>
              <li>
              <NavDropdown
              id="nav-dropdown-dark-example"
              title="About us"
              menuVariant="dedfaut"
            >
               <li><a href="/#avantages"  style={{color:'#1B1B1B',fontSize:'16px',fontWeight:'200'}}>Why choose us</a></li>
               <li><a href="/#mission" style={{color:'#1B1B1B',fontSize:'16px',fontWeight:'200'}} >Our Mission</a></li>
               <li><a href="/#team" style={{color:'#1B1B1B',fontSize:'16px',fontWeight:'200'}} >Our Team</a></li> 
              
            </NavDropdown>
                
              </li>
              <li><a href="/patnership">Soustainability</a></li>
              <li><a href="/contact">Contacs</a></li>
              <li>                
              </li>
            </ul>
            
          
    </>
  );
}


export default Navigationbar;