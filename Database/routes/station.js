import express from "express";
import Station from "../models/stations.js";
import StationValidate from "../middlewares/station.js";
const router = express.Router();
router.get("/", async (req, res) => {
  try {
    const data = await Station.find();
    if (!data) {
      return res
        .status(500)
        .send({ status: false, message: "Lấy dữ liệu trạm thất bại" });
    }
    res.send(data);
  } catch (error) {
    return res.status(505).send({ status: false, message: error.message });
  }
});
router.post("/", StationValidate, async (req, res) => {
  try {
    const data = await Station.create(req.body);
    if (!data) {
      return res
        .status(500)
        .send({ status: false, message: "Thêm mới trạm thất bại" });
    }
    res.send(data);
  } catch (error) {
    return res.status(505).send({ status: false, message: error.message });
  }
});
export default router;
