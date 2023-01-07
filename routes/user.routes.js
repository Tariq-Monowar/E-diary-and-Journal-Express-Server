const { getAllUser, createUser, getOneUser, deleteUser, updateUser, getKey } = require('../controllers/user.controllers')

const router = require('express').Router()


router.route("/").get(getAllUser).post(createUser)
router.route("/key").get(getKey)

router.route("/:id").get(getOneUser).delete(deleteUser).patch(updateUser)
module.exports = router