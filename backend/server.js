
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import passport from 'passport';
import "./passport/github.auth.js"
import session from 'express-session';


import { connectDB } from './db/db.js';
import userRoutes from './routes/user.routes.js';
import exploreRoutes from './routes/explore.routes.js';
import authRoutes from './routes/auth.routes.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

app.use(session({ secret: 'keyboard cat', resave: false, saveUninitialized: false}))
// Initialize Passport!  Also use passport.session() middleware, to support
// persistent login sessions (recommended).
app.use(passport.initialize());
app.use(passport.session());

connectDB();

app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)
app.use("/api/explore", exploreRoutes)



app.listen(5000,() => {
    console.log('Server is running on port 5000');
})