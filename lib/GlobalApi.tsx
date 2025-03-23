import { request, gql } from 'graphql-request';

const MASTER_URL = process.env.NEXT_PUBLIC_BACKEND_API_URL as string;

const getAllProducts = async ()=>{
    const query = gql`
      query Products {
  products {
    id
    name
    price
    images {
      url
    }
    quantity
    description
    slug
    category {
      name
    }
  }
}
`
 

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

const getProductById =async(id:string)=>{
   const query = gql`
      query MyProduct {
  product(where: {id: "`+id+`"}) {
    images {
      url
    }
    name
    price
    quantity
    description
  }
}
   `
   const result = await request(MASTER_URL, query)
    return result
}


export default{
    getAllProducts,
    getProductsCategories,
    getProductById
}