import {Router} from 'express';
import {register} from '../controllers/user.controller.js';
import{upload} from '../utils/multer.js';

const router = Router();

router.route('/register').post(
    upload.fields([
        {
            name:"avatar",
            maxCount:1
        },
        {
            name:"cover",
            maxCount:1
        }
    ]),register);

// router.route('/login').post(login);////

export default router;