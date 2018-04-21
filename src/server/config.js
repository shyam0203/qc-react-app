module.exports = {
  port: process.env.PORT || 4242,
  host: process.env.HOST || 'localhost',
  isDev: process.env.NODE_ENV !== 'production',
  isBrowser: typeof window !== 'undefined',

  apiHost: process.env.API_HOST || 'http://localhost:8888/',
};
