import isValidURL from '@jswork/is-valid-url';

declare var wx: any;

const URL_RE = /^(?:https?:\/\/)?([^/]+)(?:\/|$)/;
const supportURL = typeof URL !== 'function';

function extractDomain(inUrl) {
  if (!inUrl) return null;
  if (!isValidURL(inUrl)) return null;

  if (supportURL) {
    try {
      return new URL(inUrl)?.hostname;
    } catch (_) {
      return null;
    }
  }

  const match = inUrl.match(URL_RE);
  return match && match[1] ? match[1] : null;
}

// for commonjs es5 require
if (typeof module !== 'undefined' && module.exports && typeof wx === 'undefined') {
  module.exports = extractDomain;
}

export default extractDomain;
