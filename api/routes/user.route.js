 import express from 'express';
import { test } from '../controller/user.controllers.js';

 const router = express.Router();

 router.get('/test', test )   //the "test" in the second parameter is comiong from the user.controllers.js file in the controller folder.

 export default router;