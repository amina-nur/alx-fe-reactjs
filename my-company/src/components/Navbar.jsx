import { Link } from 'react-router-dom';

function Navbar() {
  const navStyle = {
    padding: '10px 20px',
    background: '#282c34',
    display: 'flex',
    gap: '20px',
    color: 'white'
  };

  return (
    <nav style={navStyle}>
      <Link to="/" style={{ color: 'white' }}>Home</Link>
      <Link to="/about" style={{ color: 'white' }}>About</Link>
      <Link to="/services" style={{ color: 'white' }}>Services</Link>
      <Link to="/contact" style={{ color: 'white' }}>Contact</Link>
    </nav>
  );
}

export default Navbar;
