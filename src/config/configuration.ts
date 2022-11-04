export default () => ({
    port: parseInt(process.env.PORT, 10) || 5555,
    MONGO_URI : process.env.MONGO_URI,
    SECRETKEY: process.env.SECRETKEY,
  });