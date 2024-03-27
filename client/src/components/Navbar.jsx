import { Link } from 'react-router-dom';


function Navbar() {


 return (
   <nav style={{
     height: '100vh',
     margin: 0, padding: 0,
     backgroundImage: 'url("/background.jpeg")',
     backgroundSize: 'cover',
     backgroundPosition: 'center',
     width: '100%',
     overflow: 'hidden'
   }}>
     <ul className='links'>
       <li><Link to="/england">England</Link></li>
       <li><Link to="/spain">Spain</Link></li>
       <li><Link to="/italy">Italy</Link></li>
     </ul>
     <h1 className='welcome'>Welcome to the best Football Website</h1>
   </nav>
 );
}


export default Navbar;