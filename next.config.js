/**
 * Stolen from https://stackoverflow.com/questions/10776600/testing-for-equality-of-regular-expressions
 */
const regexEqual = (x, y) => (
  x instanceof RegExp
    && y instanceof RegExp
    && x.source === y.source
    && x.global === y.global
    && x.ignoreCase === y.ignoreCase
    && x.multiline === y.multiline
);

// eslint-disable-next-line import/no-extraneous-dependencies
require('dotenv').config();

module.exports = {
  webpack: (config) => {
    const oneOf = config.module.rules.find(
      (rule) => typeof rule.oneOf === 'object',
    );
    if (oneOf) {
      const moduleSassRule = oneOf.oneOf.find((rule) => regexEqual(rule.test, /\.module\.(scss|sass)$/));
      if (moduleSassRule) {
        const cssLoader = moduleSassRule.use.find(({ loader }) => loader.includes('css-loader'));
        if (cssLoader) {
          // Use the default CSS modules mode. Next.js use 'pure'. Not sure of all implications
          cssLoader.options.modules.mode = 'local';
        }
      }
    }
    return config;
  },
  env: {
    SERVER_URI: process.env.SERVER_URI,
  },
};
