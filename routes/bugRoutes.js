const express = require('express')
const router = express.Router()
const { getBugs, createBug, updateBug, deleteBug, addComment, getBug} = require('../controllers/bugController')
const { protect } = require("../middleware/authMiddleware")

router.route('/').get(getBugs).post(protect, createBug)
router.route('/addComment/:id').put(addComment)
router.route('/:id').put(updateBug).delete(deleteBug).get(getBug)

module.exports = router