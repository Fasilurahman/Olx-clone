import bcrypt from 'bcrypt'
import User from '../models/userSchema.js'
import { validationResult } from 'express-validator';
import { generateToken } from '../helpers/jwtHelper.js';



const catchAsync = fn => (req, res, next) =>
    fn(req, res, next).catch(next);

export const register = catchAsync(async (req, res) => {
    console.log('1');

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    console.log('2');

    const { email, password } = req.body;
    console.log(req.body, ' req body');

    // Check if email and password fields are provided
    if (!email || !password) {
        return res.status(400).json({ error: 'All fields must be filled' });
    }

    if (password.trim() === '') {
        return res.status(400).json({ error: 'Password cannot consist only of spaces' });
    }
    console.log('3');

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ error: 'Invalid email format' });
    }

    // Check password length
    if (password.length < 8) {
        return res.status(400).json({ error: 'Password must be at least 8 characters long' });
    }
    console.log('4');

    try {
        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'User already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create and save the new user
        const user = new User({
            email,
            password: hashedPassword,
        });

        await user.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Error during registration:', error); // Log the error
        res.status(500).json({ error: 'An error occurred during registration' }); // Return a generic error message to the client
    }
});

  

export const login = catchAsync(async(req, res) => {
    const { email, password } = req.body;
  
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }
  
    try {
      const user = await User.findOne({ email });
  
      if (!user) {
        return res.status(400).json({ error: 'User not found' });
      }
  
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(400).json({ error: 'Incorrect password' });
      }
  
      const token = await generateToken({ id: user._id, email: user.email });
      return res.status(200).json({
        message: 'Successfully logged in',
        token,
        user: { id: user._id, email: user.email }
      });
    } catch (error) {
      console.error("Login error:", error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  