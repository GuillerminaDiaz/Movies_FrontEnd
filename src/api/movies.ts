import { instance } from "./base.api";

const endpoint= '/movies';
export const movies= {
    getAll: ()=>{
        return instance.get(endpoint)
    },
    getById:(id: string)=>{
        return instance.get(`${endpoint}/${id}`)
    }
} 

// adult
// : 
// "false"
// genre
// : 
// (3) ['Adventure', 'Comedy', 'Fantasy']
// id_movie
// : 
// 346698
// image
// : 
// "/nHf61UzkfFno5X1ofIhugCPus2R.jpg"
// language
// : 
// "en"
// overview
// : 
// "Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans."
// poster
// : 
// "/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg"
// rating
// : 
// 7.5
// release_date
// : 
// "2023-07-19T00:00:00.000Z"
// reviews
// : 
// []
// title
// : 
// "Barbie"
// __v
// : 
// 0
// _id
// : 
// "64cada75aa6e7f4804ffe2d3"