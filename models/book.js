import mongoose from 'mongoose'

const BookSchema = new mongoose.Schema({
    title: String,
    author: String,
})

module.exports = mongoose.models.BookSchema || mongoose.model('Book', BookSchema, 'nhanam')