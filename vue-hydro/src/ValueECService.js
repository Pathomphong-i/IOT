import axios from 'axios';

const url = 'http://localhost:3000/api/value_ec';

class ValueECService {
    static async getValueEC(){        
        try{
            const res = await axios.get(url)
            const data = res.data
            return data.map(post => ({
                ...post,
                createdAt: new Date(post.createdAt)
            }))
        }catch (err){
            console.log(err)
        }
    }
    static insertValueEC(value) {
        try{
            return axios.post(url, {
                value            
            })
        }catch (err){
            console.log(err)
        }        
    }
}

export default ValueECService;