import { body, validationResult } from 'express-validator';

// Validation rules for registration
const validateRegistration = [
  body('email').isEmail().withMessage('Invalid email format'),
  body('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters long'),
];

// Middleware to handle validation errors
const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next(); // Proceed if no validation errors
};

export { validateRegistration, handleValidationErrors };
