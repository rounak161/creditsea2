// import express, { Request, Response } from 'express';
// import studentRoutes from './routes/students';
// import userRoutes from './routes/users';
// import connectToDatabase from './dbserver';
// import bodyParser from 'body-parser';
// import loanRoutes from './routes/loanRoutes'; // A
// const app = express();
// const port = 3000;

// connectToDatabase()

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// app.use(express.json()); 
// app.use('/api', studentRoutes); 
// app.use('/api', userRoutes); 
// // Use loan routes
// app.use('/api/loan', loanRoutes);

// app.get('/', (req: Request, res: Response) => {
//     res.send('Hello, TypeScript Express!');
//   });


// app.listen(port, () => {
// console.log(`Server running at http://localhost:${port}`);
// });
import express, { Request, Response } from 'express';
import studentRoutes from './routes/students';
import userRoutes from './routes/users';
import connectToDatabase from './dbserver';
import bodyParser from 'body-parser';
import loanRoutes from './routes/loanRoutes';
import cors from 'cors'; // Import CORS

const app = express();
const port = 3000;

// Connect to the database
connectToDatabase();

// Use CORS middleware
app.use(cors({
    origin: 'http://localhost:3001', // Adjust this if your frontend is served from a different origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Middleware for parsing JSON and URL-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API routes
app.use('/api', studentRoutes);
app.use('/api', userRoutes);
app.use('/api/loan', loanRoutes);

// Test route
app.get('/', (req: Request, res: Response) => {
    res.send('Hello, TypeScript Express!');
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
