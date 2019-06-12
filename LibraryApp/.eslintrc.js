module.exports = {
  extends: ['wolox-react'],
  rules: {
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    "module-resolver/use-alias": 2
  },
  settings: {
    "import/resolver": {
      "babel-module": {}
    }
  },
  plugins: [
    "module-resolver"
  ]
};
