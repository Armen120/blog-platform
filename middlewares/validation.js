import { check, validationResult } from "express-validator";

const validationErrCheck = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({errors: errors.array() });
  }
  next();
};

export const validateUserRegistration = [
  check("email").isEmail().normalizeEmail(),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters"),
  validationErrCheck,
];

 export const validateBlogPostCreation = [
  check("title").isLength({ min: 1 }).withMessage("Title is required"),
  check("body").isLength({ min: 1 }).withMessage("Body is required"),
  validationErrCheck,
];

export const validateCommentCreation = [
  check("text").isLength({ min: 1 }).withMessage("Comment text is required"),
  validationErrCheck,
];
