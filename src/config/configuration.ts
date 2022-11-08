export default () => ({
    PORT: parseInt(process.env.PORT, 10) || 5555,
    MONGO_URI : process.env.MONGO_URI || 'mongodb://localhost/nestJSTEST',
    SECRETKEY: process.env.SECRETKEY || 'ByKanSaz',
  });