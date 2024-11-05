// @index('./**/index.{js,jsx}', f => `export { default as ${f.path.split('/').reverse()[1]} } from '${f.path.replace(/\/index$/, '')}';`)
export { default as cn } from './cn';
// @endindex
