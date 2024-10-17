import mongoose from 'mongoose';

const loanSchema = new mongoose.Schema({
    userId: { type: String, required: true }, // User ID
    fullName: { type: String, required: true }, // Full name as it appears on the bank account
    amount: { type: Number, required: true }, // Amount requested
    tenure: { type: Number, required: true }, // Loan tenure in months
    reason: { type: String, required: true }, // Reason for the loan
    employmentStatus: { type: String, required: true }, // Employment status
    employmentAddress: { type: String, required: true }, // Employment address
    status: { type: String, default: 'pending' }, // Loan status
    createdAt: { type: Date, default: Date.now } // Creation date
});

export const Loan = mongoose.model('Loan', loanSchema);
