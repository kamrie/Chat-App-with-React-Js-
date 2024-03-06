import express from 'express';
import { signup } from '../controller/auth.controller.js'; //signup was imported from the controller page
import { signin } from '../controller/auth.controller.js';

const router = express.Router()

router.post('/signup', signup )  //the signup in the second parameter was gotten the file "/controller/auth.controller.js".
router.post('/signin', signin )  //the signup in the second parameter was gotten the file "/controller/auth.controller.js".

export default router;