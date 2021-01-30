rm -rf dist
yarn build
cd dist
git add .
git commit -m "update"
git branch -M master
git remote add origin git@github.com:Fight-Jason/jason-ui-website.git
git push -f -u origin master
cd -