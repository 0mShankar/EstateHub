import express from 'express';
import { createListing ,deleteListing, getListings, updateListing} from "../controllers/listing.controller.js";
import { verifyToken } from '../utils/verifyUser.js';

const router=express.Router();


router.post('/create',verifyToken,  createListing);
router.delete('/delete.:id', verifyToken, deleteListing);
router.post('/update/:',verifyToken, updateListing);
router.get('/get/:id',verifyToken,updateListing);
router.get('/get',getListings);

export default router;