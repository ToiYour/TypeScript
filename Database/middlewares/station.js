import joi from "joi";
const StatioJoi = joi.object({
  name: joi.string().required().messages({
    "any.required": "Tên nhà xe là bắt buộc",
    "string.empty": "Tên nhà xe không được bỏ trống",
  }),
  province: joi.string().required().messages({
    "any.required": "Địa chỉ nhà xe là bắt buộc",
    "string.empty": "Địa chỉ nhà xe không được bỏ trống",
  }),
});
const StationValidate = (req, res, next) => {
  const { error } = StatioJoi.validate(req.body, { abortEarly: false });
  if (error) {
    const Errors = error.details.map((e) => e.message);
    return res.status(401).send({ status: false, message: Errors });
  }
  next();
};
export default StationValidate;
