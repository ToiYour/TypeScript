import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import routerTrips from "./routes/trip.js";
import routerStation from "./routes/station.js";
import routerBusHouse from "./routes/busHouse.js";
import routerBusStation from "./routes/busStation.js";
import routerUser from "./routes/user.js";
import routerBooking from "./routes/booking.js";
const app = express();
app.use(express.json());
app.use(cors());
const port = 3000;
mongoose
  .connect("mongodb://127.0.0.1:27017/TypeScript")
  .then(() => {
    console.log("Connect to Mongoose successfully");
  })
  .catch(() => {
    console.log("Connect to Mongoose false");
  });
// routes
app.use("/api/trip", routerTrips);
app.use("/api/station", routerStation);
app.use("/api/bushouse", routerBusHouse);
app.use("/api/busstation", routerBusStation);
app.use("/api/user", routerUser);
app.use("/api/booking", routerBooking);
app.listen(port, () => {
  console.log(`Server is runnig http://localhost/${port}`);
});
