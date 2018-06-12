
import axios from 'axios';

class Http{
    getAll(){
       return axios.get(`http://www.mocky.io/v2/59b0d4e6260000d501287d57`);
    }
    // getId(){
    //     return axios.get(`http://www.mocky.io/v2/59b0d4e6260000d501287d57/detail/$id`);
    // }
} 
export default Http;


