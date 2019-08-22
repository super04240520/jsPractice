import Ax from './ax'

export const getNews =function(data){
    return  Ax.get('https://api.shenjian.io/?appid=417f3aa27adfc1e872911c400261536b',data).then(res=>res.data)
}