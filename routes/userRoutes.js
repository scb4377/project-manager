const express = require('express')
const router = express.Router()
const {getUser, createUser, updateUser, deleteUser, loginUser, getMe} = require('../controllers/userController')
const { protect } = require('../middleware/authMiddleware')

router.route('/').get(getUser).post(createUser)
router.post('/login', loginUser)
router.get('/me', protect, getMe)
router.route('/:id').put(updateUser).delete(deleteUser)

module.exports = router;