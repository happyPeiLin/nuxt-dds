import request from '../utils/request'

export default{
    postScore(){
        const req = request({
            method: 'post',
            // url: BASE_URI+'/dajiba'
            url: 'http://localhost:3800/users/score',
            
        })
        console.log(req)
        return req
    }
}