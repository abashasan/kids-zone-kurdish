import { BookOpen } from 'lucide-react';
import './Stories.css';

function Stories() {
  const stories = [
    { title: 'کەروێشک و کیسەڵ', time: '٥ خولەک', image: '🐰🐢' },
    { title: 'شێری نەبەرد', time: '٧ خولەک', image: '🦁👑' },
    { title: 'کچە بچکۆلە و گورگ', time: '١٠ خولەک', image: '👧🐺' },
  ];

  return (
    <div className="section-container page-content">
      <div className="page-header">
        <h1>چیرۆکەکان 📖</h1>
        <p>چیرۆکی خەیاڵی و پەندئامێز بۆ پێش نوستن</p>
      </div>

      <div className="stories-list">
        {stories.map((story, index) => (
          <div key={index} className="story-item hover-bounce">
            <div className="story-emoji">{story.image}</div>
            <div className="story-info">
              <h2>{story.title}</h2>
              <span className="story-time">⏳ {story.time}</span>
            </div>
            <button className="read-btn">
              <BookOpen size={20} />
              خوێندنەوە
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Stories;
