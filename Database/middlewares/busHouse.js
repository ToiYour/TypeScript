import joi from "joi";
const BusHouseJoi = joi.object({
  name: joi.string().required().messages({
    "any.required": "Tên nhà xe là bắt buộc",
    "string.empty": "Tên nhà xe không được bỏ trống",
  }),
  adress: joi.string().required().messages({
    "any.required": "Địa chỉ nhà xe là bắt buộc",
    "string.empty": "Địa chỉ nhà xe không được bỏ trống",
  }),
  phone: joi
    .string()
    .pattern(/((09|03|07|08|05)+([0-9]{8})\b)/)
    .required()
    .messages({
      "any.required": "Số điện thoại nhà xe là bắt buộc",
      "string.empty": "Số điện thoại nhà xe không được bỏ trống",
      "string.pattern.base": "Số điện thoại nhà xe không đúng định dạng",
    }),
});
const BusHouseValidate = (req, res, next) => {
  const { error } = BusHouseJoi.validate(req.body, { abortEarly: false });
  if (error) {
    const Errors = error.details.map((e) => e.message);
    return res.status(401).send({ status: false, message: Errors });
  }
  next();
};
export default BusHouseValidate;
