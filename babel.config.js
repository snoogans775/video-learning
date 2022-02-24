module.exports = {
  plugins: ['@babel/plugin-transform-async-to-generator', 'babel-plugin-styled-components'],
  presets: [
      '@babel/env',
      ['@babel/preset-react',
      {
        targets: {
          node: 'current'
        },
        modules: 'cjs'
      }
    ]
  ]
}
