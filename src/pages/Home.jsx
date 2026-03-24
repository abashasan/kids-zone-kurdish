import { Link } from 'react-router-dom';
import { Gamepad2, BookOpen, ScrollText } from 'lucide-react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">بەخێربێیت بۆ زۆنی منداڵان! 🎈</h1>
          <p className="hero-subtitle">لێرە دەتوانیت فێربیت، یاری بکەیت، و کاتێکی خۆش بەسەر بەریت.</p>
        </div>
        <div className="hero-illustration">
          <div className="animated-character bounce-infinite">🧸</div>
          <div className="animated-character float-infinite" style={{ animationDelay: '1s' }}>🎨</div>
          <div className="animated-character bounce-infinite" style={{ animationDelay: '0.5s' }}>🎲</div>
        </div>
      </section>

      <section className="nav-cards-section">
        <Link to="/games" className="kid-card games-card hover-bounce">
          <div className="card-icon-wrapper"><Gamepad2 size={60} /></div>
          <h2>یارییەکان</h2>
          <p>یاری چێژبەخش بۆ زیرەکی</p>
        </Link>
        
        <Link to="/learning" className="kid-card learning-card hover-bounce">
          <div className="card-icon-wrapper"><BookOpen size={60} /></div>
          <h2>فێرکاری</h2>
          <p>فێربوونی پیت و ژمارەکان</p>
        </Link>
        
        <Link to="/stories" className="kid-card stories-card hover-bounce">
          <div className="card-icon-wrapper"><ScrollText size={60} /></div>
          <h2>چیرۆکەکان</h2>
          <p>چیرۆکی خەیاڵی پەندئامێز</p>
        </Link>
      </section>
    </div>
  );
}

export default Home;
