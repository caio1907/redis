# Docker + Node + Redis

## Installing
- Install NodeJs
- Install Docker
Download and running redis
```
docker pull redis:alpine
docker run --name redis -p 6379:6379 -d redis:alpine redis-server
```

## Development
On file **CityRedis.ts**, change the second param in the setCache function to set the expiration time.
Default is 5 seconds.

## Run
```
npm install
npm start
```

## License

MIT

**Free Software!**