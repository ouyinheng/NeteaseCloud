import axios from 'axios';
// const base = 'http://192.168.1.236:3001'
// const base = 'http://192.168.70.1:3001'
const base = 'http://118.25.95.147:3001'
// 获取src
export const geturl = params => {return axios.get(`${base}/music/url?id=${params}`).then(res =>res.data);}
// 歌曲详情
export const getdetail = params => {return axios.get(`${base}/song/detail?ids=${params}`).then(res =>res.data);}
// 获取歌词
export const getlyric = params => {return axios.get(`${base}/lyric?id=${params}`).then(res =>res.data);}

export const getmurl = params => {return axios.get(`${base}/search?keywords=${params}`).then(res =>res.data);}
export const toSearch = params => {return axios.get(`${base}/search?keywords=${params}`).then(res =>res.data);}
export const getHot = () => {return axios.get(`${base}/search/hot`).then(res =>res.data);}
export const toLogin = params => {return axios.get(`${base}/login?email=${params.username}&password=${params.pwd}`).then(res =>res.data);}
// 独家放送
export const privatecontent = () => {return axios.get(`${base}/personalized/privatecontent`).then(res =>res.data);}
// 推荐歌单
export const personalized = () => {return axios.get(`${base}/personalized`).then(res =>res.data);}
// 歌单详情
export const playlistdetail = params => {return axios.get(`${base}/playlist/detail?id=${params}`).then(res =>res.data);}

// 最新音乐
export const newsong = () => {return axios.get(`${base}/personalized/newsong`).then(res =>res.data);}
// 推荐电台
export const djprogram = () => {return axios.get(`${base}/personalized/djprogram`).then(res =>res.data);}
// 歌手分类
export const singerlist = params => {return axios.get(`${base}/artist/list?cat=`+params).then(res =>res.data);}
// FM
export const getFM = () => {return axios.get(`${base}/personal_fm`).then(res =>res.data);}
// 获取歌手单曲
export const getArtists = params => {return axios.get(`${base}/artists?id=${params}`).then(res =>res.data);}
// 获取歌手描述
export const getArtistsDesc = params => {return axios.get(`${base}/artist/desc?id=${params}`).then(res =>res.data);}
// 获取歌手专辑
export const getArtistsAlbum = params => {return axios.get(`${base}/artist/album?id=${params.id}&limit=${params.limit}`).then(res =>res.data);}
// 获取歌手MV
export const getArtistsMV = params => {return axios.get(`${base}/artist/mv?id=${params}`).then(res =>res.data);}

// ouyinheng@163.com
// 651224ou