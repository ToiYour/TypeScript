import express from "express";
import BusStation from "../models/busStation.js";
import BusHouseValidate from "../middlewares/busHouse.js";

const router = express.Router();
router.get("/", async (req, res) => {
  try {
    const data = await BusStation.find();
    if (!data) {
      return res
        .status(500)
        .send({ status: false, message: "Lấy dữ liệu bến xe thất bại" });
    }
    res.send(data);
  } catch (error) {
    return res.status(505).send({ status: false, message: error.message });
  }
});
router.post("/", BusHouseValidate, async (req, res) => {
  try {
    const data = await BusStation.create(req.body);
    if (!data) {
      return res
        .status(500)
        .send({ status: false, message: "Thêm mới bến xe thất bại" });
    }
    res.send(data);
  } catch (error) {
    return res.status(505).send({ status: false, message: error.message });
  }
});

export default router;
