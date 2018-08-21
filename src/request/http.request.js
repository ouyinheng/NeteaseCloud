import axios from 'axios';
const base = 'http://192.168.1.236:3001'
// const base = 'http://192.168.70.1:3001'

export const toSearch = params => {return axios.get(`${base}/search?keywords=${params}`).then(res =>res.data);}
export const getHot = params => {return axios.get(`${base}/search/hot`).then(res =>res.data);}
export const getFM = params => {return axios.get(`${base}/personal_fm`).then(res =>res.data);}
export const toLogin = params => {return axios.get(`${base}/login?email=${params.username}&password=${params.pwd}`).then(res =>res.data);}
// 独家放送
export const privatecontent = () => {return axios.get(`${base}/personalized/privatecontent`).then(res =>res.data);}
// 推荐歌单
export const personalized = () => {return axios.get(`${base}/personalized`).then(res =>res.data);}
// 最新音乐
export const newsong = () => {return axios.get(`${base}/personalized/newsong`).then(res =>res.data);}
// 推荐电台
export const djprogram = () => {return axios.get(`${base}/personalized/djprogram`).then(res =>res.data);}

// ouyinheng@163.com
// 651224ou