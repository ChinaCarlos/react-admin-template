echo "================== Install Package =================="
rm -fr ./build
yarn
echo "================== Begin Stop And Delete Old Project =================="
pm2 stop react-admin-template
pm2 delete react-admin-template
echo "================== Begin Build Project =================="
yarn run build
echo "================== Begin Deploy New Project =================="
pm2 start start.js
echo "================== Begin Project Success =================="
pm2 ls