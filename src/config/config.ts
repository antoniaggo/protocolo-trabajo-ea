export default {
    DB: {
        URI: process.env.MONGODB_URI || 'mongodb://localhost:9090/jwttstutorial',
        USER: process.env.MONGODB_USER,
        PASSWORD: process.env.MONGODB_PASSWORD
      }
}