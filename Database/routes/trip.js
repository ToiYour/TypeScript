import express from "express";
import moment from "moment";
import Trip from "../models/trips.js";
import TripValidate from "../middlewares/trip.js";
const router = express.Router();
router.get("/", async (req, res) => {
  const currenDate = moment().format("YYYY-MM-DD HH:mm");
  try {
    const data = await Trip.find({ startTime: { $gte: currenDate } })
      .populate("fromStationId toStationId busHouseId busStationId")
      .sort({ startTime: "asc" });
    if (!data) {
      return res
        .status(500)
        .send({ status: false, message: "Lấy dữ liệu trip thất bại" });
    }
    res.send(data);
  } catch (error) {
    return res.status(505).send({ status: false, message: error.message });
  }
});
router.get("/history", async (req, res) => {
  const currenDate = moment().format("YYYY-MM-DD HH:mm");
  console.log(currenDate);
  try {
    const data = await Trip.find({ startTime: { $lt: currenDate } }).populate(
      "fromStationId toStationId busHouseId busStationId"
    );
    if (!data) {
      return res
        .status(500)
        .send({ status: false, message: "Lấy dữ liệu trip thất bại" });
    }
    res.send(data);
  } catch (error) {
    return res.status(505).send({ status: false, message: error.message });
  }
});
router.get("/search", async (req, res) => {
  try {
    const defaultSort = {
      col: "createdAt",
      type: "asc",
    };
    if (req.query.sort) {
      defaultSort.type = req.query.sort;
      defaultSort.col = req.query.col;
    }
    // const nextDays = moment(req.query.startTime).add(1, "day");
    const nextDays = moment(req.query.startTime).endOf("day");
    console.log(nextDays);
    const data = await Trip.find({
      fromStationId: req.query.fromStationId,
      toStationId: req.query.toStationId,
      startTime: { $gte: req.query.startTime, $lte: nextDays },
    })
      .populate("fromStationId toStationId busHouseId busStationId")
      .sort({ [defaultSort.col]: defaultSort.type });
    if (!data) {
      return res
        .status(500)
        .send({ status: false, message: "Lấy dữ liệu trip thất bại" });
    }
    res.send(data);
  } catch (error) {
    return res.status(505).send({ status: false, message: error.message });
  }
});
router.get("/filter", async (req, res) => {
  try {
    let futureTimeFilter = moment();
    switch (req.query.filter) {
      case "3days":
        console.log("3Days filter");
        futureTimeFilter = futureTimeFilter.add(3, "days").startOf("day");
        break;
      case "1week":
        futureTimeFilter = futureTimeFilter.add(1, "weeks").startOf("day");
        console.log(futureTimeFilter);
        break;
      case "1month":
        futureTimeFilter = futureTimeFilter.add(1, "months").startOf("day");
        console.log(futureTimeFilter);
        break;
      default:
        console.log("default");
        futureTimeFilter = moment();
        break;
    }
    const data = await Trip.find({
      startTime: { $gte: moment().startOf("day"), $lte: futureTimeFilter },
    }).populate("fromStationId toStationId busHouseId busStationId");
    if (!data) {
      return res
        .status(500)
        .send({ status: false, message: "Lấy dữ liệu trip thất bại" });
    }
    res.send(data);
  } catch (error) {
    return res.status(505).send({ status: false, message: error.message });
  }
});
router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Trip.findById(id).populate(
      "fromStationId toStationId busHouseId busStationId"
    );
    if (!data) {
      return res
        .status(500)
        .send({ status: false, message: "Lấy dữ liệu trip thất bại" });
    }
    res.send(data);
  } catch (error) {
    return res.status(505).send({ status: false, message: error.message });
  }
});
router.post("/", TripValidate, async (req, res) => {
  try {
    const data = await Trip.create(req.body);
    if (!data) {
      return res
        .status(500)
        .send({ status: false, message: "Thêm trip thất bại" });
    }
    res.send(data);
  } catch (error) {
    return res.status(505).send({ status: false, message: error.message });
  }
});
router.put("/:id", TripValidate, async (req, res) => {
  try {
    const data = await Trip.findByIdAndUpdate(req.params.id, req.body);
    if (!data) {
      return res
        .status(500)
        .send({ status: false, message: "Cập nhập trip thất bại" });
    }
    res.send(data);
  } catch (error) {
    return res.status(505).send({ status: false, message: error.message });
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const data = await Trip.deleteOne({ _id: req.params.id });
    if (!data) {
      return res
        .status(500)
        .send({ status: false, message: "Xoá trip thất bại" });
    }
    res.send(data);
  } catch (error) {
    return res.status(505).send({ status: false, message: error.message });
  }
});
export default router;
