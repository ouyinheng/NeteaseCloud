import axios from 'axios';
const base = 'http://192.168.1.236:3001'

export const toSearch = params => {return axios.get(`${base}/search?keywords=${params}`).then(res =>res.data);}
export const getHot = params => {return axios.get(`${base}/search/hot`).then(res =>res.data);}
export const getFM = params => {return axios.get(`${base}/personal_fm`).then(res =>res.data);}
export const toLogin = params => {return axios.get(`${base}/login?email=${params.username}&password=${params.pwd}`).then(res =>res.data);}

// ouyinheng@163.com
// 651224ou