// import { Router, Request, Response } from 'express';
// import  User  from '../model/userModel';

// const router = Router();

// router.post('/user/add', (req: Request, res: Response) => {
//     let output = {flag: false, message: "", data:{}}
//     const newUser = new User({
//         name: req.body.name,
//         state: req.body.state,
//         profession: req.body.profession,
//         marital_status: req.body.marital_status,
//     }); 

//     const savedUser = newUser.save()
//     if (!savedUser) {
//         output.message = "user saved failed";
//         return output
//     }

//     output.flag = true;
//     output.message = "user successfully saved";
//     output.data = newUser;

//     res.status(200).json(output)
// })

// export default router;
import { Router, Request, Response } from 'express';
import User from '../model/userModel';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const router = Router();

// Register route
router.post('/register', async (req: Request, res: Response) => {
    const { name, email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already in use' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ name, email, password: hashedPassword });
        
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Error registering user' });
    }
});

 
// Login route
router.post('/login', async (req: Request, res: Response) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        // Create a token and return user info along with it
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || 'yourSecretKey', { expiresIn: '1h' });
        res.status(200).json({ 
            message: 'Login successful', 
            token,
            others: { // Send user data (you can modify this based on your User model)
                id: user._id,
                name: user.name,
                email: user.email,
                role:user.role,
            }
        });
    } catch (err) {
        console.error(err); // Log the error for debugging
        res.status(500).json({ message: 'Error logging in' });
    }
});


// Get User by ID route
router.get('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const user = await User.findById(id);
        
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // You can choose to exclude sensitive information like the password
        res.status(200).json({ 
            id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
        });
    } catch (err) {
        console.error(err); // Log the error for debugging
        res.status(500).json({ message: 'Error retrieving user' });
    }
});

export default router;
