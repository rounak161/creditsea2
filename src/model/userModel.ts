// import mongoose from 'mongoose';
// const { Schema } = mongoose;

// const userSchema = new Schema({
//   name: String, 
//   state: String,
//   profession: String,
//   marital_status: Boolean,
//   date: { type: Date, default: Date.now },
// });

// const User = mongoose.model('users', userSchema);

// export default User;
// import mongoose from 'mongoose';
// const { Schema } = mongoose;

// const userSchema = new Schema({
//     name: { type: String, required: true },
//     email: { type: String, required: true, unique: true },
//     password: { type: String, required: true },
//     date: { type: Date, default: Date.now },
// });

// const User = mongoose.model('User', userSchema);

// export default User;
import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    date: { type: Date, default: Date.now },
    role: { type: String, default: 'user' },
});

const User = mongoose.model('User', userSchema);

export default User;


