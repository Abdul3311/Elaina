apt update && apt upgrade -y
apt install ffmpeg imagemagick nodejs libwebp
npm install
npm update
npm i pm2
pm2 start index.js && pm2 logs --raw
