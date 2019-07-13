const proxy = [
  {
    context: '/api',
    target: 'http://localhost:8080',
    pathRewrite: {'^/service' : ''}
  }
];
module.exports = proxy;
