declare var wx: any;

const ExtractDomain = (): void => {
  console.log('hello');
};

// for commonjs es5 require
if (typeof module !== 'undefined' && module.exports && typeof wx === 'undefined') {
  module.exports = ExtractDomain;
}

export default ExtractDomain;
