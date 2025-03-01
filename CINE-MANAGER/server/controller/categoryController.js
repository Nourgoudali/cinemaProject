import categoryService from "../services/categoryService.js";

const addCategory = (req, res) => {

        categoryService.addCategory(req.body)
        .then(category => {
            res.status(200).json({
                message: "Category Created Successfully",
                data: category,
            })
        }).catch(err => {
            res.status(500).json({
                message: "Faild Create Category"
            });
        });
    
};

const getAllCategories = (req, res) => {
    categoryService.getAllCategories()
    .then(categories => {
        res.status(200).json({
            data: categories,
        })
    }).catch(err => {
        res.status(500).json({
            message: "cannot get Categories"
        });
    });
};

const deleteCategory = async (req, res) => {
    try {
        const categoryId = req.params.id;

        const deleteCategory = await categoryService.deleteCategory(categoryId);
        res.status(200).json({
            message: "category deleted successfully",
        });
    } catch (err) {
        res.status(500).json({
            message:"cannot delete Category"
        });
    }
};

const countCategory = async (req, res) => {
    try {
        const countCategory = await categoryService.categoryCount();
        res.status(200).json(countCategory);
    } catch (error) {
        res.status(500).json({
            message: error.message || "Cannot Count Categories"
        });
    }
}

export default { addCategory, getAllCategories, deleteCategory, countCategory };