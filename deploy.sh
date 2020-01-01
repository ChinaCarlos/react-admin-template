echo "checkout Docker Environment....."
yarn run build
docker version

echo "Checkout Local Docker Images List......"

docker images

echo "Checkout Local Docker Container List...."

docker container ls -a

echo "Delete Docker Container..."

docker container rm -f react-admin-template
rm -fr react-admin-template.tar

echo "Delete Docker iamge ...."

docker rmi -f carlos/react-admin-template-image

echo "===========Begin Build Docker Image============"

docker build -t carlos/react-admin-template-image .

echo "========== Build Docker Image END=============="

echo "===========Begin Build Docker Container============"

docker run -d -p 3107:80 --name react-admin-template  carlos/react-admin-template-image

echo "Build Docker Container Success! please open your browser!"

# echo "Export Docker Container....."

# docker export react-admin-template > react-admin-template.tar

# echo "Export Docker Container Success!"