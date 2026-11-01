// Usage:  cd tools/package-web && npm install && npm run build
// Re-creates web/index.html from the Scratch project (no internet needed after npm install).
const Packager = require('@turbowarp/packager');
const fs = require('fs');
const path = require('path');
const root = path.join(__dirname, '..', '..');
(async () => {
  const project = await Packager.loadProject(fs.readFileSync(path.join(root, 'game', 'Galactic_Wars_Elite_Fleet.sb3')));
  const p = new Packager.Packager();
  p.project = project;
  p.options.target = 'html';
  p.options.autoplay = true;
  p.options.app.windowTitle = 'Galactic Wars - Elite Fleet';
  p.options.app.packageName = 'galactic-wars';
  p.options.app.icon = new Packager.Image('image/png', fs.readFileSync(path.join(__dirname, 'icon.png')));
  p.options.loadingScreen.text = 'GALACTIC WARS - Elite Fleet Evolution';
  p.options.appearance.background = '#02040c';
  p.options.appearance.accent = '#ff8c1a';
  p.options.controls.fullscreen.enabled = true;
  p.options.cloudVariables.mode = 'local'; // the ☁ high score is saved on the device
  p.options.custom.css = fs.readFileSync(path.join(__dirname, 'custom.css'), 'utf8');
  p.options.custom.js = fs.readFileSync(path.join(__dirname, 'custom.js'), 'utf8');
  const result = await p.package();
  fs.writeFileSync(path.join(root, 'web', 'index.html'), result.data);
  console.log('web/index.html written,', (result.data.length / 1e6).toFixed(1), 'MB');
})().catch((e) => { console.error(e); process.exit(1); });
