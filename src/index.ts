declare var wx: any;

const URL_RE = /^(?:https?:\/\/)?([^/]+)(?:\/|$)/;

function extractDomain(url) {
  const match = url.match(URL_RE);
  if (match && match[1]) {
    return match[1];
  } else {
    return null;
  }
}

// for commonjs es5 require
if (typeof module !== 'undefined' && module.exports && typeof wx === 'undefined') {
  module.exports = extractDomain;
}

export default extractDomain;
