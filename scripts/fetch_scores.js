const fs = require('fs');

// 模擬賽事資料
const games = [
  { home: '湖人', homeLogo: 'https://upload.wikimedia.org/wikipedia/en/0/03/Los_Angeles_Lakers_logo.svg', homeScore: 101, away: '勇士', awayLogo: 'https://upload.wikimedia.org/wikipedia/en/0/06/Golden_State_Warriors_logo.svg', awayScore: 98 },
  { home: '熱火', homeLogo: 'https://upload.wikimedia.org/wikipedia/en/f/fb/Miami_Heat_logo.svg', homeScore: 90, away: '公鹿', awayLogo: 'https://upload.wikimedia.org/wikipedia/en/4/4a/Milwaukee_Bucks_logo.svg', awayScore: 95 },
];

// 產生 HTML 內容
let html = `<!DOCTYPE html>
<html lang="zh-Hant">
<head>
<meta charset="UTF-8" />
<title>每日運動賽事戰績</title>
<style>
  body { font-family: Arial, sans-serif; margin: 20px; }
  .game { margin-bottom: 15px; }
  img { vertical-align: middle; width: 24px; height: 24px; }
</style>
</head>
<body>
<h1>${new Date().toISOString().split('T')[0]} 運動賽事戰績</h1>
`;

games.forEach(g => {
  html += `<div class="game">
    <img src="${g.homeLogo}" alt="${g.home}" /> ${g.home} ${g.homeScore} - ${g.awayScore} ${g.away}
  </div>`;
});

html += `</body></html>`;

fs.writeFileSync('index.html', html);
console.log('index.html 已更新');
