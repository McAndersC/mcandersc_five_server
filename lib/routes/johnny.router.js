import express from 'express';
import { turnOn } from '../handlers/commands.handler.js';

// Setting Routes
const johnnyRouter = express.Router();

johnnyRouter.get('/johnny/on', async (req, res) => {

    turnOn();
    return res.json({status: true});

});

export default johnnyRouter;