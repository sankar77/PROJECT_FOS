#!/bin/bash
echo $PWD > sample1.txt
cd /home/ec2-user/demo-repo/backend/
npm install pm2@latest -g
pm2 start index.js -f --watch