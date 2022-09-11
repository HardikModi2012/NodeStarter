const router = require('express').Router();
const userController = require('../controllers/userController');

router.post("/", userController.signUp);

router.post("/logIn", userController.logIn);

router.patch("/:userId", userController.updateUser);

router.delete("/:userId", userController.deleteUser);

router.get("/data", userController.data);

router.get("/", userController.get);

module.exports = router;