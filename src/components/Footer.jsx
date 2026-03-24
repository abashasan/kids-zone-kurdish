import { Heart } from 'lucide-react';
import './Footer.css';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <p>بە خۆشەویستییەوە دروستکراوە بۆ منداڵە چاوگەشەکان <Heart size={16} fill="var(--primary)" color="var(--primary)" className="heart-icon"/></p>
        <p className="footer-sub">ناونیشانی تایبەت بە سەلامەتی و پاراستنی زانیاری منداڵان</p>
      </div>
    </footer>
  );
}

export default Footer;
