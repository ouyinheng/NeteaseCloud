export const type = {
    SET_SRC:'SET_SRC',
    SET_PAUSED:'SET_PAUSED'
}
function setLocal(id){
    let now = localStorage.getItem('musicHistory');
    let arr = [];
    if(now) {
        let brr = JSON.parse(now);
        arr.push(id,...brr);
        arr = Array.from(new Set(arr))
        localStorage.setItem('musicHistory',JSON.stringify(arr));
    } else {
        localStorage.setItem('musicHistory',id)
    }
}
export function switchSRC(id,anthor='未知歌手',name='位置歌名',cover='/assets/shenwei.jpg'){
    setLocal(id)
    return {
        type: type.SET_SRC,
        id:id,
        src:`http://music.163.com/song/media/outer/url?id=${id}.mp3`,
        anthor,
        name,
        cover
    };
}
export function switchPaused(paused) {
    return {
        type: type.SET_PAUSED,
        paused
    }
}