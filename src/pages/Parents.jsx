import { Info, ShieldCheck, Mail } from 'lucide-react';
import './Parents.css';

function Parents() {
  return (
    <div className="section-container page-content">
      <div className="page-header">
        <h1>بۆ دایک و باوک 👨‍👩‍👧‍👦</h1>
        <p>ڕێنمایی و زانیاری بۆ بەکارهێنانی سەلامەتی پلاتفۆرمەکە</p>
      </div>

      <div className="parents-grid">
        <div className="info-card">
          <div className="info-icon"><Info size={30} /></div>
          <h3>دەربارەی زۆنی منداڵان</h3>
          <p>ئەم پلاتفۆرمە دروستکراوە بۆ گەشەپێدانی تواناکانی منداڵان بە شێوازێکی سەرنجڕاکێش و سەلامەت لە ڕێگەی یاری و چیرۆکە پەروەردەییەکانەوە.</p>
        </div>

        <div className="info-card">
          <div className="info-icon"><ShieldCheck size={30} /></div>
          <h3>سەلامەتی و تایبەتمەندی</h3>
          <p>ئێمە زانیاری کەسی منداڵان کۆناکەینەوە وە هیچ ڕێکلامێکی بازرگانی لەسەر لاپەڕەکانمان بوونی نییە.</p>
        </div>

        <div className="info-card">
          <div className="info-icon"><Mail size={30} /></div>
          <h3>پەیوەندیمان پێوە بکەن</h3>
          <p>بۆ هەر تێبینی و پێشنیارێک، تکایە ئیمەیڵمان بۆ بنێرن. پشتیوانی ئێوە یارمەتیدەرمانە بۆ پێشخستنی بەرنامەکە.</p>
        </div>
      </div>
    </div>
  );
}

export default Parents;
