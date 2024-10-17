import express, { Request, Response } from 'express';
import { Loan } from '../model/loan'; // Ensure this path is correct

const router = express.Router();
//create loan
router.post('/apply', async (req: Request, res: Response) => {
    try {
        const { userId, fullName, amount, tenure, reason, employmentStatus, employmentAddress } = req.body; // Expect all fields in the request body
        const newLoan = new Loan({ userId, fullName, amount, tenure, reason, employmentStatus, employmentAddress });
        await newLoan.save();
        res.status(201).json(newLoan); // Return the created loan with status 201
    } catch (error: unknown) {
        // Error handling
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        } else {
            res.status(500).json({ message: 'An unknown error occurred' });
        }
    }
});

// Get all loans
router.get('/loans', async (req: Request, res: Response) => {
    try {
        const loans = await Loan.find(); // Fetch all loans from the database
        res.status(200).json(loans); // Return the loans with status 200
    } catch (error: unknown) {
        // Error handling
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        } else {
            res.status(500).json({ message: 'An unknown error occurred' });
        }
    }
});

// Get loans by user ID
router.get('/loans/user/:userId', async (req: Request, res: Response) => {
    const { userId } = req.params; // Get userId from URL parameters
    try {
        const loans = await Loan.find({ userId }); // Find loans by userId
        if (loans.length === 0) {
            return res.status(404).json({ message: 'No loans found for this user' });
        }
        res.status(200).json(loans); // Return the loans with status 200
    } catch (error: unknown) {
        // Error handling
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        } else {
            res.status(500).json({ message: 'An unknown error occurred' });
        }
    }
});

export default router;
