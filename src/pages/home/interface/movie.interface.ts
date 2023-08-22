export interface IMovie {
    id_movie:     number;
    title:        string;
    genre:        string[];
    overview:     string;
    adult:        string;
    language:     string;
    image:        string;
    poster:       string;
    rating:       number;
    release_date: Date;
    reviews:      any[];
    __v:          number;
}
export interface IShortMovie {
    _id:          string;
    title:        string;
    overview:     any;
    image:        string;
   
}