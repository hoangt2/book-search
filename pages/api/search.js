import dbConnect from '../../lib/dbConnect'
import Book from '../../models/book'

export default async function handler (req, res) {

  await dbConnect()

  try {
    const {title} = req.query

    const agg = [
        {
            '$search': {
                'autocomplete': {
                    'query': title,
                    'path': 'title'
                }
            }
        }, 
        {
            '$limit': 10
        },
        {
            '$project': {
                '_id': 0,
                'title': 1,
                'author': 1,
                'image_paths': 1,
            }
        }
    ]

    const response = await Book.aggregate(agg)
    return res.json(response)

  } catch (error) {
      console.log(error)
      return res.json([])
  } 
}