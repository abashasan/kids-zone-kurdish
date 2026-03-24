import { Link } from 'react-router-dom';
import { Home, Gamepad2, BookOpen, ScrollText, Users } from 'lucide-react';
import './Header.css';

function Header() {
  return (
    <header className="site-header">
      <div className="header-content">
        <Link to="/" className="brand-logo">
          <div className="logo-icon hover-bounce">🎈</div>
          <h1>زۆنی منداڵان</h1>
        </Link>
        
        <nav className="main-nav">
          <Link to="/" className="nav-link hover-bounce">
            <Home size={24} />
            <span>سەرەتا</span>
          </Link>
          <Link to="/games" className="nav-link hover-bounce">
            <Gamepad2 size={24} />
            <span>یارییەکان</span>
          </Link>
          <Link to="/learning" className="nav-link hover-bounce">
            <BookOpen size={24} />
            <span>فێرکاری</span>
          </Link>
          <Link to="/stories" className="nav-link hover-bounce">
            <ScrollText size={24} />
            <span>چیرۆکەکان</span>
          </Link>
        </nav>
        
        <Link to="/parents" className="parents-link hover-bounce">
          <Users size={20} />
          <span>بۆ دایک و باوک</span>
        </Link>
      </div>
    </header>
  );
}

export default Header;
