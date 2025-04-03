import { Download } from '@controllers';
import { Router } from 'express';

const router = Router();
export default router;

router.post('/download/document', Download.document);
