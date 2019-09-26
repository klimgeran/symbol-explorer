let defaultNode = 'http://52.194.207.217:3000'

if (localStorage['defaultNode'] && validURL(localStorage['defaultNode'])) {
  defaultNode = localStorage['defaultNode']
}

export const Endpoint = {
  api: defaultNode,
  ws: 'ws://47.107.245.217:3000',
  nodes: [
    { protocol: 'http', domain: '52.194.207.217', port: 3000 },
    { protocol: 'http', domain: '103.3.60.174', port: 3000 },
    { protocol: 'http', domain: '13.114.200.132', port: 3000 },
    { protocol: 'http', domain: '47.107.245.217', port: 3000 }
  ],
  marketDataURL: 'https://min-api.cryptocompare.com/'
}

export const pageMenu = {
  items:  [
    { to: "/", text: "Home", classname: "ico-th-large" },
    { to: "/blocks", text: "Blocks", classname: "ico-content-34" },
    { to: '/transactions', text: 'Transactions', classname: 'ico-line-awesome-3' },
    // { to: '/account', text: 'Accounts', classname: 'ico-user-outline' },
    // { to: '/namespace', text: 'Namespaces', classname: 'ico-data' },
    // { to: '/mosaic', text: 'Mosaics', classname: 'ico-tags' },
    // { to: '/node', text: 'Nodes', classname: 'ico-content-34' },
    // { to: '/stats', text: 'Statistics', classname: 'ico-bar-chart' },
  ]
}

function validURL(str) {
  let pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
    '(\\#[-a-z\\d_]*)?$', 'i') // fragment locator
  return !!pattern.test(str)
}
