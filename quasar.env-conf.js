module.exports = {
  useEnv: process.env.STAGE === 'prod' ? 'prod' : 'staging',
  baseURL: process.env.STAGE === 'prod' ? '' : 'https://dev.unknownddsm.work/',
};
