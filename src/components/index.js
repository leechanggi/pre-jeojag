// @index('./**/index.{js,jsx}', f => `export { default as ${f.path.split('/').reverse()[1].charAt(0).toUpperCase()}${f.path.split('/').reverse()[1].slice(1)} } from '${f.path.replace(/\/index$/, '')}';`)
export { default as Button } from './button';
export { default as LoadingSpinner } from './loadingSpinner';
export { default as Text } from './text';
// @endindex
