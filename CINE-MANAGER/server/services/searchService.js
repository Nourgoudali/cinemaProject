import categoryDB from "../model/categoryModel.js";
import movieDb from "../model/movieModel.js";

  
  
  class SearchService {

    async searchMovies(query) {
        const { title, category } = query;
    
        const search = {};
    
        if (title) {
            search.title = { $regex: title, $options: 'i' };
        }
    
        if (category) {
          const foundCategory = await categoryDB.findOne({ name: category }); // Find category by name
          if (foundCategory) {
              search.categories = foundCategory._id; 
          } else {
              return []; 
          }
      }
    
        const movies = await movieDb.find(search).populate('categories', 'name');
        return movies;
    }
  }

  export default new SearchService();