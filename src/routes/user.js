import { Router } from 'express';
const user = require('../controllers/user.controller');
const router = Router();

router.get('/ping', user.ping);
router.get('/getAll', user.getAll);

export default router;