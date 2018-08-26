import { type } from '../action';
const initData = (state,action) => {
    switch (action.type) {
        case type.SET_SRC:
            return {
                ...state,
                src: action.src,
                anthor: action.anthor,
                name: action.name,
                id: action.id,
                cover: action.cover
            }
        case type.SET_PAUSED:
            return {
                ...state,
                paused: action.paused 
            } 
        default:
            return {...state}
    }
}
export default initData;
