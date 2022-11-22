module.exports = {
  presets: [
    '@babel/preset-env',
    ['@babel/preset-react', { 'runtime': 'automatic' }],
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          theme: './src/theme',
          utils: './src/utils',
          types: './src/types',
        },
      },
    ],
  ],
};
