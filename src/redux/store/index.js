import { createStore } from 'redux';
import reducer from '../reducer';
const initialState = {
    id:'',
    src: '',
    anthor: '未知歌手',
    name: '未知歌名',
    cover:'/assets/shenwei.jpg',
    paused: true
}
const configStore = () => createStore(reducer,initialState);

export default configStore;

