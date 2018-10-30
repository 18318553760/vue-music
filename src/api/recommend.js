import jsonp from 'common/js/jsonp'
import {commonParams, options} from './config'
import axios from 'axios'

export function getRecommend() {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'

  const data = Object.assign({}, commonParams, {
    platform: 'h5',
    uin: 0,
    needNewCode: 1
  })

  return jsonp(url, data, options)
}

export function getDiscList() {
  const url = '/api/getDiscList'

  const data = Object.assign({}, commonParams, {
    platform: 'yqq',
    hostUin: 0,
    sin: 0,
    ein: 29,
    sortId: 5,
    needNewCode: 0,
    categoryId: 10000000,
    rnd: Math.random(),
    format: 'json'
  })

  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function getSongList(disstid) {
  const url = 'https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg'

  const data = Object.assign({}, commonParams, {
    disstid,
    type: 1,
    json: 1,
    utf8: 1,
    onlysong: 0,
    platform: 'yqq',
    hostUin: 0,
    needNewCode: 0
  })

  return jsonp(url, data, options)
}

export function getCdInfo(disstid) {
  const url = '/api/getCdInfo'
  const data = Object.assign({}, commonParams, {
    disstid,
    type: 1,
    json: 1,
    utf8: 1,
    onlysong: 0,
    platform: 'yqq',
    hostUin: 0,
    needNewCode: 0,
    format: 'json'
  })
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

// export function getPurlUrl () {
//   const url = 'http://ustbhuangyi.com/music/api/getPurlUrl'
//   let datas = {
//     comm: {
//       format: 'json',
//       g_tk: 5381,
//       inCharset: 'utf-8',
//       needNewCode: 1,
//       notice: 0,
//       outCharset: 'utf-8',
//       platform: 'h5',
//       uin: 0
//     },
//     url_mid: {
//       module: 'vkey.GetVkeyServer',
//       method: 'CgiGetVkey',
//       param: {
//         guid: '721073960',
//         loginflag: 0,
//         platform: '23',
//         songmid: [
//           '004DFiHO43I3Ej',
//           '004B3RXr2E23qO',
//           '0032saZr006Mjf',
//           '0000QGuf3Xi7mO',
//           '003wepuu1bXvvo',
//           '000zwuwL0W79jX',
//           '000Se0bb2KwCqa',
//           '0045NMeU3Mu8YM',
//           '0012yinE1P1HL1',
//           '001KMjha4AxqLy',
//           '001eQBbL3d41Sx',
//           '001yRxKJ05MLTf',
//           '001cWlEl0W5nY6',
//           '001qASNZ3J5okU',
//           '001lKt5v2v0nuV',
//           '001FBnUP1xzJjR',
//           '000NyX5H4F85l6',
//           '003H1ig53H783o',
//           '002wiRTZ4YrGBo',
//           '0024evJU0rsKuk',
//           '002Sx6Dq0fpPJG',
//           '003GAtF044Fge0',
//           '001pVRyf3y2YBD',
//           '001ijmpT1OcO0G',
//           '0037mcTe1rkc9z',
//           '003j4u8R0iy1Zh',
//           '00402nI71Ki5Xj',
//           '001Dq4wl1bHl01',
//           '004VXLE124Zi2n',
//           '0043f1WX0Kl4vc'
//         ],
//         songtype: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//         uin: '0'
//       }
//     }
//   }
//   const data = Object.assign({}, commonParams, datas)
//   return jsonp(url, data, options)
// }
