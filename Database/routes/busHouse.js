import express from "express";
import BusHouse from "../models/busHouse.js";
import BusHouseValidate from "../middlewares/busHouse.js";
const router = express.Router();
router.get("/", async (req, res) => {
  try {
    const defaultSort = {
      col: "createdAt",
      type: "asc",
    };
    if (req.query.sort) {
      defaultSort.type = req.query.sort;
      defaultSort.col = req.query.col;
    }
    const data = await BusHouse.find().sort({
      [defaultSort.col]: defaultSort.type,
    });
    if (!data) {
      return res
        .status(500)
        .send({ status: false, message: "Lấy dữ liệu nhà xe thất bại" });
    }
    res.send(data);
  } catch (error) {
    return res.status(505).send({ status: false, message: error.message });
  }
});
router.get("/:id", async (req, res) => {
  try {
    const data = await BusHouse.findById(req.params.id);
    if (!data) {
      return res
        .status(500)
        .send({ status: false, message: "Lấy dữ liệu nhà xe thất bại" });
    }
    res.send(data);
  } catch (error) {
    return res.status(505).send({ status: false, message: error.message });
  }
});
router.post("/", BusHouseValidate, async (req, res) => {
  try {
    const data = await BusHouse.create(req.body);
    if (!data) {
      return res
        .status(500)
        .send({ status: false, message: "Thêm mới nhà xe thất bại" });
    }
    res.send(data);
  } catch (error) {
    return res.status(505).send({ status: false, message: error.message });
  }
});
router.put("/:id", BusHouseValidate, async (req, res) => {
  try {
    const data = await BusHouse.findByIdAndUpdate(req.params.id, req.body);
    if (!data) {
      return res
        .status(500)
        .send({ status: false, message: "Cập nhập nhà xe thất bại" });
    }
    res.send(data);
  } catch (error) {
    return res.status(505).send({ status: false, message: error.message });
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const data = await BusHouse.deleteOne({ _id: req.params.id });
    if (!data) {
      return res
        .status(500)
        .send({ status: false, message: "Xoá nhà xe thất bại" });
    }
    res.send(data);
  } catch (error) {
    return res.status(505).send({ status: false, message: error.message });
  }
});
export default router;
