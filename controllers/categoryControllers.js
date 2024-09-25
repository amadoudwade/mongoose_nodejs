import { Category } from "../models/category.js"

export const createCategory = (req, res, next) => {
    const newCategory = new Category ({
        name : req.body.name
    })

    newCategory.save ().then( ()=> res.status(201).json( {Message: `saved`} ) )

    .catch((error) => res.status(400).json({Error:error}))
}

export const GetAllCategory = (req, res, next) => {
    const AllCategory = Category.find()

    AllCategory.then( (categories) => res.status(200).json(categories))

    .catch((error) => res.status(400).json({Error:error}))

}

export const GetOneCategory = (req, res, next) => {
    const OneCategory = Category.findOne({_id: req.params.id})

    OneCategory.then( (category) => res.status(200).json(category) )

    .catch((error) => res.status(400).json({Error:error}))

}

export const DeleteOneCategory = (req, res, next) => {

    const OneCategory = Category.deleteOne({_id: req.params.id})

    OneCategory.then( () => res.status(200).json({Message: "Category deleted"}) )

    .catch((error) => res.status(400).json({Error:error}))
}

export const UpdateOneCategory = (req, res, next) => {

    const OneCategory = Category.updateOne({_id: req.params.id, name: req.body.name})

    OneCategory.then( () => res.status(200).json({Message: "Category updated"}) )

    .catch((error) => res.status(400).json({Error:error}))
}
