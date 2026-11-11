const fs = require('fs');
const js = fs.readFileSync('/tmp/main.js', 'utf8');

// Find all React routes or keywords
const keywords = ['about', 'ecosystem', 'approach', 'partnerships', 'ministry', 'library-store', 'creatives', 'insights', 'contact', 'login', 'register', 'forgot-password', 'reset-password'];

keywords.forEach(kw => {
  let idx = 0;
  let count = 0;
  while ((idx = js.indexOf(kw, idx)) !== -1) {
    if (count < 3) {
      console.log(`Match for "${kw}":`, js.substring(Math.max(0, idx - 80), Math.min(js.length, idx + 120)));
    }
    count++;
    idx += kw.length;
  }
  console.log(`Total matches for "${kw}": ${count}`);
});
