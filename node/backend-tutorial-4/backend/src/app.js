   import express from 'express';
   import mongoose from 'mongoose';
   import cors from 'cors';
   import cookieParser from 'cookie-parser';
   //for files we use multer

    import { MONGO_URI } from './constants';

    const app= express();

    app.use(cors({
        origin:process.env.CORS_ORIGIN,
        credentials:true

    }));
    //since the data could be shared in different formats, we need to parse the data
    // like JSON, text, urlencoded, etc.
    // so therefore we need to use the following middleware

    app.use(express.json({
        limit:'50mb'

    }));
    //to take data
    //express.urlencoded is for parsing the data in the form of arrays and objects
    app.use(express.urlencoded({
        extended:true
        //to take data in the form of arrays and objects
    }));

    app.use(express.static('public'));
    //this is for static files like images pdf etc

    //cookies are to take the data in the form of cookies
    app.use(cookieParser());
    //to take the data in the form of cookies
    //
    //  origin: 'http://localhost:3000',
    // app.use(express.json());

export {app};
// Compare this snippet from node/backend-tutorial-4/backend/src/constants.js:   

