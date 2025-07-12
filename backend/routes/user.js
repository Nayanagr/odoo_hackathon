const express = require("express");
const router = express.Router();
const { getMe, updateProfile } = require("../controllers/userController");
const auth = require("../middlewares/authMiddleware");

router.get("/me", auth, getMe);
router.patch("/me", auth, updateProfile);

module.exports = router;
