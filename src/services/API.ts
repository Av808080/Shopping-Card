import axios from 'axios';
const BASE_URL = "https://fakestoreapi.com";

const products_Endpoint = "/products";

const fetchData = async ()=>{
    const products = await axios.get(`${BASE_URL}${products_Endpoint} `)
    return products.data;
}
export {fetchData};