import { Identity } from '@controllers';
import { loginSchema } from '@schemas';
import { Router } from 'express';
import { authenticate, recaptcha, validate } from 'express-goodies/middleware';

const router = Router();
export default router;

router.post('/confirm/:hash', recaptcha, Identity.confirm);
router.post('/forgot', recaptcha, Identity.forgot);
router.post('/login', validate(loginSchema), Identity.login);
router.post('/reset/:hash', recaptcha, Identity.reset);

router.post('/logout', Identity.logout);
router.post('/refresh-token', Identity.refreshToken);

router.post('/change-password', authenticate, Identity.changePassword);
router.get('/profile', authenticate, Identity.profile);

router.all('/users', authenticate);
router.all('/users/*', authenticate);

router.get('/users', Identity.listUsers);
router.post('/users', Identity.createUser);
router.get('/users/:id', Identity.readUser);
router.put('/users/:id', Identity.updateUser);

router.post('/users/upload-profile-picture', Identity.uploadProfilePicture);
