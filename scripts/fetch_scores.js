import fs from 'fs';
import fetch from 'node-fetch';

async function fetchScores() {
  // 你可以改成實際 API 來抓，這是示範用 ESPN MLB 賽事頁面
  const res = await fetch('https://site.api.espn.com/apis/site/v2/sports/baseball/mlb/scoreboard');
  const data = await res.json();

  // 假設只取第一場比賽示範
  const game = data.events[0].competitions[0];

  const home = game.competitors.find(c => c.homeAway === 'home');
  const away = game.competitors.find(c => c.homeAway === 'away');

  const html = `<!DOCTYPE html>
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
    <h1>${new Date().toISOString().split('T')[0]} MLB 賽事戰績</h1>
    <div class="game">
      <img src="${home.team.logo}" alt="${home.team.displayName}" /> ${home.team.displayName} ${home.score} - ${away.score} ${away.team.displayName} <img src="${away.team.logo}" alt="${away.team.displayName}" />
    </div>
  </body>
  </html>`;

  fs.writeFileSync('index.html', html);
  console.log('index.html 已更新');
}

fetchScores().catch(err => {
  console.error('抓取賽事失敗:', err);
  process.exit(1);
});
