//const mongoose = require("mongoose")
import mongoose from "mongoose"

const produitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true
    }
})

export const Produit = mongoose.model(`Produit`, produitSchema)