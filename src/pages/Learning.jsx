import { Type, ListOrdered, Palette } from 'lucide-react';
import './Learning.css';

function Learning() {
  const lessons = [
    { title: 'پیتەکان', desc: 'فێربوونی ئەلفوبێ', icon: <Type size={40}/>, color: '#4ECDC4' },
    { title: 'ژمارەکان', desc: 'ژماردن لە ١ تا ١٠', icon: <ListOrdered size={40}/>, color: '#FF6B6B' },
    { title: 'ڕەنگەکان', desc: 'ناسیاری بە ڕەنگ', icon: <Palette size={40}/>, color: '#FFE66D' },
  ];

  return (
    <div className="section-container page-content">
      <div className="page-header">
        <h1>فێرکاری 📚</h1>
        <p>وانە سادە و خۆشەکان بۆ فێربوونی بنەماکان</p>
      </div>

      <div className="learning-grid">
        {lessons.map((lesson, index) => (
          <div key={index} className="lesson-card hover-bounce">
            <div className="lesson-icon" style={{ backgroundColor: lesson.color }}>
              {lesson.icon}
            </div>
            <h2>{lesson.title}</h2>
            <p>{lesson.desc}</p>
            <button className="start-btn" style={{ borderColor: lesson.color, color: lesson.color }}>
              دەستپێبکە
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Learning;
