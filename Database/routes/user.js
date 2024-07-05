import express from "express";
import bcryptjs from "bcryptjs";
import User from "../models/user.js";
import jwt from "jsonwebtoken";
import { UserValidate } from "../middlewares/user.js";
const router = express.Router();
router.post("/register", UserValidate, async (req, res) => {
  try {
    req.body.password = await bcryptjs.hash(req.body.password, 10);
    const data = await User.create(req.body);
    res.send(data);
  } catch (error) {
    res.status(500).json({ message: "Lỗi Server" });
  }
});
router.post("/login", async (req, res) => {
  try {
    const isUser = await User.findOne({ email: req.body.email });
    if (!isUser) {
      return res.send({
        isLogin: false,
        message: "Tài khoản bạn không tồn tại ",
      });
    } else {
      const isPassword = await bcryptjs.compare(
        req.body.password,
        isUser.password
      );
      if (!isPassword) {
        return res.send({
          isLogin: false,
          message: "Bạn nhập mật khẩu không đúng",
        });
      } else {
        const token = jwt.sign({ id: isUser._id }, "Nguyễn Huy Tới");
        res.send({
          isLogin: true,
          message: "Đăng nhập thành công",
          account: isUser,
          token,
        });
      }
    }
  } catch (error) {
    res.status(500).json({ message: "Lỗi Server" });
  }
});
export default router;
