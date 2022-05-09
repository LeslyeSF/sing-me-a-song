module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'class-methods-use-this': 'off', // desativa uma regra que diz que todo método de uma classe precisa usar a palavra this
    'no-param-reassign': 'off', // desativa uma regra que diz que não é permitido receber parâmetro e fazer alterações nele
    camelcase: 'off', // desativa uma regra que diz que toda variável precisa ser escrita no formato camelCase
    'no-unused-vars': ['error', { argsIgnorePattern: 'next' }], // não reclamar caso a variável utilizada seja next que é usada pelos middlewares do express
  },
};
