import { Produit } from "../models/produits.js"

export const createProduit = (req, res, next) => {
    const newProduit = new Produit ({
        name : req.body.name,
        price : req.body.price,
        category : req.body.category
    })

    newProduit.save ().then( ()=> res.status(201).json( {Message: `saved`} ) )

    .catch((error) => res.status(400).json({Error:error}))
}

export const GetAllProduits = (req, res, next) => {
    const AllProduits = Produit.find()

    AllProduits.then( (produits) => res.status(200).json(produits) )

    .catch((error) => res.status(400).json({Error:error}))

}

export const GetOneProduit = (req, res, next) => {
    const OneProduit = Produit.findOne({_id: req.params.id})

    OneProduit.then( (produit) => res.status(200).json(produit) )

    .catch((error) => res.status(400).json({Error:error}))

}

export const DeleteOneProduit = (req, res, next) => {

    const OneProduit = Produit.deleteOne({_id: req.params.id})

    OneProduit.then( () => res.status(200).json({Message: "Produit deleted"}) )

    .catch((error) => res.status(400).json({Error:error}))
}

export const UpdateOneProduit = (req, res, next) => {

    const OneProduit = Produit.updateOne({_id: req.params.id, name: req.body.name})

    OneProduit.then( () => res.status(200).json({Message: "Produit updated"}) )

    .catch((error) => res.status(400).json({Error:error}))
}
