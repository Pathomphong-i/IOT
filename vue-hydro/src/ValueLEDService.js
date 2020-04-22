import axios from 'axios';

const url = 'http://localhost:3000/api/value_led';

class ValueLEDService {
    static async getValueLED(){
        const res = await axios.get(url)
        try{
            const data = res.data
            return data.map(post => ({
                ...post,
                createdAt: new Date(post.createdAt)
            }))
        }catch (err){
            console.log(err)
        }
    }
    static insertValueLED(status,status_pump) {
        try{
            return axios.post(url, {
                status,
                status_pump
            })
        }catch (err){
            console.log(err)
        }
        
    }
}

export default ValueLEDService;