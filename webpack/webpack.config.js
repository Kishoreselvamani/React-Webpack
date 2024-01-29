const {merge} =  require('webpack-merge');
const commonconfig = require('./webpack.common.js');

module.exports = (envVars) => {
    const {env} = envVars
    const envconfig = require(`./webpack.${env}.js`)
    const config = merge(commonconfig,envconfig)
    return config
}