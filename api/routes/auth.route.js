import express from 'express';
import { signup } from '../controller/auth.controller.js'; //signup was imported from the controller page


const router = express.Router()

router.post('/signup', signup )  //the signup in the second parameter was gotten the file "/controller/auth.controller.js".

export default router;