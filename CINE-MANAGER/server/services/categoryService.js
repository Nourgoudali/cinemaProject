import categoryDB from "../model/categoryModel.js";
import categoryDb from "../model/categoryModel.js"
import sessionDb from "../model/sessionModel.js";

class CategoryService {

        addCategory(categoryData) {
            const { name } = categoryData;
            
            const category = new categoryDB ({
                name,
            });
            return category.save().then(savedCategory => {
                return savedCategory;
            }).catch(err => {
                throw err
            });
        }

        getAllCategories() {
            return categoryDB.find({})
            .then(categories => {
                return categories;
            })
            .catch(err => {
                console.log('Cannot get categories')
                throw err
            });
        }

        async deleteCategory(categoryId) {
            const deleteCategory = await categoryDB.findByIdAndDelete(categoryId);
            if(!deleteCategory) {
                throw Error (`Category with Id ${categoryId} Not FOund`);
            }
            return deleteCategory;
        }


        async categoryCount() {
            const countCategory = await categoryDB.countDocuments();
            return countCategory
        }
}

export default new CategoryService();