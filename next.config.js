const path = require('path')
const Dotenv = require('dotenv-webpack')
const withCSS = require('@zeit/next-css')

module.exports = withCSS({
  webpack: config => {
    // path setting
    config.resolve.modules = [...config.resolve.modules, './src']
    // dotenv setting
    config.plugins = config.plugins || []
    config.plugins = [
      ...config.plugins,
      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true
      })
    ]
    return config
  }
})
