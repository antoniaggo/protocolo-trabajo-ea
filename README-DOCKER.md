```
docker build . -t docker-rest-api-ts-course:latest
docker run -d -p 3000:3000 --name api-rest2 docker-rest-api-ts-course:latest
```