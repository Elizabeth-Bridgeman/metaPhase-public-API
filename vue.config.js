const path = process.env.NODE_ENV === 'production' ? '' : '/';
// Our production paths had an extra forward slash. this file removes it
module.exports = {
  publicPath: path,
  lintOnSave: false
};