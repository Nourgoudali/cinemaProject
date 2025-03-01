const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/verifyToken");

// Change password route
router.post("/change-password", verifyToken, async (req, res) => {
  const { newPassword } = req.body;
  if (!newPassword) {
    return res.status(400).json({ message: "New password required" });
  }

  try {
    const user = req.user;
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    await User.updateOne({ _id: user.id }, { password: hashedPassword });
    res.status(200).json({ message: "Password changed successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error changing password" });
  }
});

module.exports = router;
