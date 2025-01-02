

//     const app= express();

//     app.use(cors({
//         origin:process.env.CORS_ORIGIN,
//         credentials:true

//     }));
//     //since the data could be shared in different formats, we need to parse the data
//     // like JSON, text, urlencoded, etc.
//     // so therefore we need to use the following middleware

//     app.use(express.json({
//         limit:'50mb'

//     }));
//     //to take data
//     //express.urlencoded is for parsing the data in the form of arrays and objects
//     app.use(express.urlencoded({
//         extended:true
//         //to take data in the form of arrays and objects
//     }));

//     app.use(express.static('public'));
//     //this is for static files like images pdf etc

//     //cookies are to take the data in the form of cookies
//     app.use(cookieParser());
//     //to take the data in the form of cookies
//     //
//     //  origin: 'http://localhost:3000',
//     // app.use(express.json());


//     //routes

// import userRoutes from './routes/user.routes.js';

// //routes declaration 
// // app.get///
// app.use('/api/v1/user',userRoutes); // prefix is /api/v1/user 
// export {app};
// // Compare this snippet from node/backend-tutorial-4/backend/src/constants.js:   

import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())


//routes import
import userRouter from './routes/user.routes.js'
import healthcheckRouter from "./routes/healthcheck.routes.js"
import tweetRouter from "./routes/tweet.routes.js"
import subscriptionRouter from "./routes/subscription.routes.js"
import videoRouter from "./routes/video.routes.js"
import commentRouter from "./routes/comment.routes.js"
import likeRouter from "./routes/like.routes.js"
import playlistRouter from "./routes/playlist.routes.js"
import dashboardRouter from "./routes/dashboard.routes.js"

//routes declaration
app.use("/api/v1/healthcheck", healthcheckRouter)
app.use("/api/v1/users", userRouter)
app.use("/api/v1/tweets", tweetRouter)
app.use("/api/v1/subscriptions", subscriptionRouter)
app.use("/api/v1/videos", videoRouter)
app.use("/api/v1/comments", commentRouter)
app.use("/api/v1/likes", likeRouter)
app.use("/api/v1/playlist", playlistRouter)
app.use("/api/v1/dashboard", dashboardRouter)

// http://localhost:8000/api/v1/users/register

export { app }