import { useState } from 'react';
import { Link } from 'react-router';

const NavBar = () => {
  const [hoveredLink, setHoveredLink] = useState(null);

  const links = [
    { name: 'Home', path: '/home' },
    { name: 'Register', path: '/register' },
    { name: 'Students', path: '/students' }
  ];

  const linkStyle = (isHovered) => ({
    textDecoration: 'none',
    color: isHovered ? '#007bff' : '#333',
    fontWeight: 'bold',
    transition: 'color 0.3s'
  });

  return (
    <nav style={{
      backgroundColor: '#f0f0f0',
      padding: '1rem',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      {links.map(link => (
        <Link
          key={link.name}
          to={link.path}
          style={linkStyle(hoveredLink === link.name.toLowerCase())}
          onMouseEnter={() => setHoveredLink(link.name.toLowerCase())}
          onMouseLeave={() => setHoveredLink(null)}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default NavBar;