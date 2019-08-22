import Ax from './ax'

export const getNews =function(data){
    return  Ax.get('url',data).then(res=>res.data)
}