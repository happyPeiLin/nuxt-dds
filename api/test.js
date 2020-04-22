import request from '../utils/request'


export default{
    getList(){
        const req = request({
            method: 'get',
            // url: BASE_URI+'/dajiba'
            url: 'http://localhost:3800/woaini'
        })
        console.log(req)
        return req
    }
}