import axios from 'axios';
const base = 'http://192.168.70.1:3001'

export const toSearch = params => {return axios.get(`${base}/search?keywords=${params}`).then(res =>res.data);}
export const getHot = params => {return axios.get(`${base}/search/hot`).then(res =>res.data);}
export const getFM = params => {return axios.get(`${base}/personal_fm`).then(res =>res.data);}
export const toLogin = params => {return axios.get(`${base}/login?email=ouyinheng@163.com&password=651224ou`).then(res =>res.data);}

