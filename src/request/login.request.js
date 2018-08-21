import axios from 'axios';
const base = 'http://192.168.1.236:3001'
// const base = 'http://192.168.70.1:3001'

export const toLogin = params => {return axios.get(`${base}/login?email=${params.username}&password=${params.pwd}`).then(res =>res.data);}
// ouyinheng@163.com
// 651224ou