const presets = ['@babel/preset-react'];
const plugins = [
    '@babel/plugin-transform-template-literals',
    '@babel/plugin-transform-arrow-functions'
];


const testPlugins = [
  'dynamic-import-node',
  '@babel/plugin-transform-modules-commonjs',
  [
    'babel-plugin-styled-components',
    {
      displayName: false,
      pure: true
    }
  ]
]

const isTestEnv = process.env.NODE_ENV === 'test'

if (isTestEnv) {
  plugins.push(...testPlugins)
}


module.exports = { presets, plugins };
