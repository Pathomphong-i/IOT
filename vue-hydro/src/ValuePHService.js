import axios from 'axios';

const url = 'http://localhost:3000/api/value_ph';

class ValuePHService {
    static async getValuePH(){        
        try{
            const res = await axios.get(url);
            const data = res.data;
            return data.map(post => ({
                ...post,
                createdAt: new Date(post.createdAt)
            }))
        }catch (err){
            console.log(err)
        }
    }
    static insertValuePH(value) {
        try{
            return axios.post(url, {
                value
            })
        }catch (err){
            console.log(err)
        }
        
    }
}

export default ValuePHService;