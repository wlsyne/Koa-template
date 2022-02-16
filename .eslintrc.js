const commonRules = require('./eslintRules/common');
const importRules = require('./eslintRules/import');
const typeScriptRules = require('./eslintRules/typeScript');

module.exports = {
  env: {
    node: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['import'],
  rules: {
    ...commonRules,
    ...importRules,
    ...typeScriptRules,
  },
};
