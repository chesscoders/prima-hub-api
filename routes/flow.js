import { Flow } from '@controllers';
import { Router } from 'express';
import { authenticate } from 'express-goodies/middleware';

const router = Router();
export default router;

router.all('/flows', authenticate);
router.all('/flows/*', authenticate);

router.get('/flows/:flowId', ...Flow.listFlows);
router.get('/flows/diagram/:flowId', ...Flow.getDiagram);
router.get('/flows/tabs/:flowId', ...Flow.listTabs);
router.get('/flows/tabs/:flowId/:tabId', ...Flow.getTab);
