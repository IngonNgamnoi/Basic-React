import axios from 'axios'
class Http {
    getAll() {
        return axios.get('http://localhost:8000');
    }

    getbyId(id){
        return axios.get(`http://localhost:8000/${id}`);
    }
}
export default Http;