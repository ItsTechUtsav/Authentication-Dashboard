const express = require("express");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// @desc    Get logged in user profile
// @route   GET /api/users/profile
router.get("/profile", protect, (req, res) => {
  res.json(req.user);
});

module.exports = router;
