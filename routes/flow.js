import { Flow } from '@controllers';
import { Router } from 'express';
import { authenticate } from 'express-goodies/middleware';

const router = Router();
export default router;

router.all('/flows', authenticate);
router.all('/flows/*', authenticate);

router.get('/flows/tabs/:flow', ...Flow.listTabs);
