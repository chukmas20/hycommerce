import { request, gql } from 'graphql-request';

const MASTER_URL = process.env.NEXT_PUBLIC_BACKEND_API_URL as string;

const getAllProducts = async ()=>{
    const query = gql`
      query Products {
        products {
            id
            images {
            url
            }
            name
            price
            quantity
            slug
            category {
            name
            }
            description
        }
     } `

     const result = await request(MASTER_URL, query)
     return result
}

const getProductsCategories = async ()=>{
    const query = gql`
       query Categories {
        categories {
            id
            slug
            name
        }
     }  
    `
    const result = await request(MASTER_URL, query)
    return result
}



export default{
    getAllProducts,
    getProductsCategories,
}