import joi from "joi";
const BusStationJoi = joi.object({
  name: joi.string().required().messages({
    "any.required": "Tên bến xe xe là bắt buộc",
    "string.empty": "Tên bến xe xe không được bỏ trống",
  }),
  adress: joi.string().required().messages({
    "any.required": "Địa chỉ bến xe là bắt buộc",
    "string.empty": "Địa chỉ bến xe không được bỏ trống",
  }),
  phone: joi
    .string()
    .pattern(/((09|03|07|08|05)+([0-9]{8})\b)/)
    .required()
    .messages({
      "any.required": "Số điện thoại bến xe là bắt buộc",
      "string.empty": "Số điện thoại bến xe không được bỏ trống",
      "string.pattern.base": "Số điện thoại bến xe không đúng định dạng",
    }),
});
const BusStationValidate = (req, res, next) => {
  const { error } = BusStationJoi.validate(req.body, { abortEarly: false });
  if (error) {
    const Errors = error.details.map((e) => e.message);
    return res.status(401).send({ status: false, message: Errors });
  }
  next();
};
export default BusStationValidate;
