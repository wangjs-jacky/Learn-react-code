#!/bin/sh
# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 发布到 ali CDN
npm run aliOss

# 进入生成的文件夹
cd dist

# deploy to github
msg='deploy'
githubUrl=https://github.com/wangjs-jacky/Learn-react-code.git

git init
git add -A
git commit -m "${msg}"
git push -f $githubUrl master:gh-pages # 推送到github


cd - # 退回开始所在目录
rm -rf dist

echo 'deploy.sh脚本执行结束'