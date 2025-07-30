import express from 'express';
import {auth} from "../middlewares/auth.js"
import { generateArticle, generateBlogTitle, generateImage, removeImageBackground, removeImageObject, reviewResume } from '../controllers/aiController.js';
import { upload } from '../Configs/multer.js';
import { requireAuth } from '@clerk/express';

const aiRouter = express.Router();
aiRouter.use(requireAuth());
aiRouter.post('/generate-article',auth,generateArticle)
aiRouter.post('/generate-blog-title',auth,generateBlogTitle)
aiRouter.post('/generate-image',auth,generateImage)
aiRouter.post('/remove-image-background',upload.single('image'),auth,removeImageBackground)
aiRouter.post('/remove-image-object',upload.single('image'),auth,removeImageObject)
aiRouter.post('/review-resume',upload.single('resume'),auth,reviewResume)

export default aiRouter