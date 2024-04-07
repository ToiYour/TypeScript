import joi from "joi";
const UserJoi = joi.object({
  name: joi.string().required().messages({
    "any.required": "Tên là bắt buộc",
    "string.empty": "Vui lòng nhập tên",
  }),
  email: joi.string().required().email().messages({
    "any.required": "Email là bắt buộc",
    "string.empty": "Vui lòng nhập Email",
    "string.email": "Vui lòng nhập đúng định dạng Email",
  }),
  password: joi.string().required().messages({
    "any.required": "Mật khẩu là bắt buộc",
    "string.empty": "Vui lòng nhập Mật khẩu",
  }),
});
export const UserValidate = (req, res, next) => {
  const { error } = UserJoi.validate(req.body, { abortEarly: false });
  if (error) {
    const Errors = error.details.map((err) => err.message);
    return res.status(404).json({ message: Errors });
  }
  next();
};
