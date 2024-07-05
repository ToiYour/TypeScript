import express from "express";
import Booking from "../models/booking.js";
import BookingValidate from "../middlewares/booking.js";
const router = express.Router();
router.get("/search", async (req, res) => {
  try {
    const data = await Booking.findOne({
      _id: req.query.id,
      phone: req.query.phone,
    })
      .populate("tripId")
      .populate({
        path: "tripId",
        populate: [
          { path: "fromStationId" },
          { path: "toStationId" },
          { path: "busHouseId" },
          { path: "busStationId" },
        ],
      });

    if (!data) {
      return res.send({});
    }
    res.send(data);
  } catch (error) {
    return res.status(505).send({ status: false, message: error.message });
  }
});
router.get("/isbooking/:id", async (req, res) => {
  try {
    const data = await Booking.findOne({ tripId: req.params.id })
      .populate("tripId")
      .populate({
        path: "tripId",
        populate: [
          { path: "fromStationId" },
          { path: "toStationId" },
          { path: "busHouseId" },
          { path: "busStationId" },
        ],
      });

    if (!data) {
      return res.send({
        status: false,
        message: "Lấy dữ liệu kiểm tra booking thất bại",
      });
    }
    res.send(data);
  } catch (error) {
    return res.status(505).send({ status: false, message: error.message });
  }
});
router.get("/:id", async (req, res) => {
  try {
    const data = await Booking.findOne({ _id: req.params.id })
      .populate("tripId")
      .populate({
        path: "tripId",
        populate: [
          { path: "fromStationId" },
          { path: "toStationId" },
          { path: "busHouseId" },
          { path: "busStationId" },
        ],
      });

    if (!data) {
      return res.send({
        status: false,
        message: "Lấy dữ liệu booking thất bại",
      });
    }
    res.send(data);
  } catch (error) {
    return res.status(505).send({ status: false, message: error.message });
  }
});

router.post("/", BookingValidate, async (req, res) => {
  try {
    const data = await Booking.create(req.body);
    if (!data) {
      return res
        .status(500)
        .send({ status: false, message: "Thêm mới booking thất bại" });
    }
    res.send(data);
  } catch (error) {
    return res.status(505).send({ status: false, message: error.message });
  }
});
export default router;
