import Product from './Product'
const Http = {
    getAll() {
        return Product;
    },
    getbyId(id){
        return Product.find((doc)=>{
            console.log(doc,id,doc.id == id)
            return doc.id == id
        });
        //axios.get(`http://localhost:8000/${id}`);
    }
}
export default Http;