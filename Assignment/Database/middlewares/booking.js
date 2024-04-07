import joi from "joi";
const BookingJoi = joi.object({
  name: joi.string().required().messages({
    "any.required": "Họ tên là bắt buộc",
    "string.empty": "Họ tên không được bỏ trống",
  }),
  email: joi.string().required().email().messages({
    "any.required": "Email là bắt buộc",
    "string.email": "Email không đúng định dạng",
    "string.empty": "Email không được bỏ trống",
  }),
  phone: joi.string().required().messages({
    "any.required": "Số điện thoại là bắt buộc",
    "string.empty": "Số điện thoại không được bỏ trống",
  }),
  quantity: joi.number().required().messages({
    "any.required": "Số lượng là bắt buộc",
    "number.empty": "Số lượng không được bỏ trống",
  }),
  payment: joi.string().required().messages({
    "any.required": "Id trip là bắt buộc",
    "string.empty": "Id trip không được bỏ trống",
  }),
  tripId: joi.string().required().messages({
    "any.required": "Id trip là bắt buộc",
    "string.empty": "Id trip không được bỏ trống",
  }),
  price: joi.number().required().messages({
    "any.required": "Giá là bắt buộc",
    "number.empty": "Giá không được bỏ trống",
  }),
});
const BookingValidate = (req, res, next) => {
  const { error } = BookingJoi.validate(req.body, { abortEarly: false });
  if (error) {
    const Errors = error.details.map((e) => e.message);
    return res.status(401).send({ status: false, message: Errors });
  }
  next();
};
export default BookingValidate;
