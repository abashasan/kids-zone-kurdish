import { Puzzle, Hash, Zap } from 'lucide-react';
import './Games.css';

function Games() {
  const gamesList = [
    { title: 'دۆزینەوەی وێنەکان', desc: 'یادگە و سەرنج', icon: <Puzzle size={40}/>, color: '#FF9F43' },
    { title: 'ژمارە شاراوەکان', desc: 'بیرکاری سەرەتایی', icon: <Hash size={40}/>, color: '#EE5253' },
    { title: 'خێرایی دەست', desc: 'ڕەنگ و شێوەکان', icon: <Zap size={40}/>, color: '#0ABDE3' },
  ];

  return (
    <div className="section-container page-content">
      <div className="page-header">
        <h1>یارییەکان 🎮</h1>
        <p>یارییە درەوشاوە و بەسوودەکان لێرەن، با دەستپێبکەین!</p>
      </div>

      <div className="games-grid">
        {gamesList.map((game, index) => (
          <div key={index} className="game-card hover-bounce" style={{ borderTop: `5px solid ${game.color}` }}>
            <div className="game-icon" style={{ backgroundColor: game.color }}>
              {game.icon}
            </div>
            <h2>{game.title}</h2>
            <p>{game.desc}</p>
            <button className="play-btn" style={{ backgroundColor: game.color }}>یاری بکە</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Games;
