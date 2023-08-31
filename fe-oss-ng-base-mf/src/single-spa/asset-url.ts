// In single-spa, the assets need to be loaded from a dynamic location,
// instead of hard coded to `/assets`. We use webpack public path for this.
// See https://webpack.js.org/guides/public-path/#root
/* eslint-disable */
/* global __webpack_public_path__:writable */

function strEndsWith(str:string, suffix:any) {
  return String(str).match(suffix+"$")==suffix;
}

export function assetUrl(url: string): string {
  // @ts-ignore
  const publicPath = __webpack_public_path__
  const publicPathSuffix = strEndsWith(publicPath, '/') ? '' : '/'
  const urlPrefix = url.startsWith('/') ? '' : '/'

  return `${publicPath}${publicPathSuffix}assets${urlPrefix}${url}`

}
