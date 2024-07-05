import joi from "joi";
const TripJoi = joi.object({
  fromStationId: joi.string().min(24).max(24).required().messages({
    "any.required": "Id từ trạm là bắt buộc",
    "string.empty": "Id từ trạm Không được bỏ trống",
    "string.min": "Id từ trạm bạn đã nhập nhỏ hơn {#limit} ký tự",
    "string.max": "Id từ trạm bạn đã nhập lớn hơn {#limit} ký tự",
  }),
  toStationId: joi.string().min(24).max(24).required().messages({
    "any.required": "Id đến trạm là bắt buộc",
    "string.empty": "Id đến trạm Không được bỏ trống",
    "string.min": "Id đến trạm bạn đã nhập nhỏ hơn{#limit} ký tự",
    "string.max": "Id đến trạm bạn đã nhập lớn hơn {#limit} ký tự",
  }),
  startTime: joi.date().min("2024-3-28").required().messages({
    "any.required": "Thời gian bắt đầu  là bắt buộc",
    "date.empty": "Thời gian bắt đầu  Không được bỏ trống",
    "date.base": "Thời gian không đúng định dạng",
    "date.min": "Thời gian bắt đầu  phải lơn hơn hoặc bằng {#limit} ký tự",
  }),
  seats: joi.number().min(0).required().messages({
    "any.required": "Chỗ ngồi là bắt buộc",
    "number.empty": "Chỗ ngồi Không được bỏ trống",
    "number.base": "Chỗ ngồi Không đúng định dạng",
    "number.min": "Chỗ ngồi phải lơn hơn hoặc bằng {#limit} ký tự",
  }),
  price: joi.number().min(0).required().messages({
    "any.required": "Giá là bắt buộc",
    "number.empty": "Giá Không được bỏ trống",
    "number.base": "Giá Không đúng định dạng",
    "number.min": "Giá phải lơn hơn hoặc bằng {#limit} ký tự",
  }),
  busHouseId: joi.string().min(24).max(24).required().messages({
    "any.required": "Nhà xe là bắt buộc",
    "string.empty": "Nhà xe Không được bỏ trống",
    "string.min": "Nhà xe bạn đã nhập nhỏ hơn {#limit} ký tự",
    "string.max": "Nhà xe bạn đã nhập lớn hơn {#limit} ký tự",
  }),
  busStationId: joi.string().min(24).max(24).required().messages({
    "any.required": "Bến xe là bắt buộc",
    "string.empty": "Bến xe Không được bỏ trống",
    "string.min": "Bến xe bạn đã nhập nhỏ hơn {#limit} ký tự",
    "string.max": "Bến xe bạn đã nhập lớn hơn {#limit} ký tự",
  }),
});
const TripValidate = (req, res, next) => {
  const { error } = TripJoi.validate(req.body, { abortEarly: false });
  if (error) {
    const Errors = error.details.map((e) => e.message);
    return res.status(404).json({ message: Errors });
  }
  next();
};
export default TripValidate;
