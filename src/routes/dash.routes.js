import { Router } from 'express';
import * as dashCtrl from '../controllers/dash.controller';
import { isAuthenticated } from "../helpers/auth";

const router = Router();

router.get('/pay/reward', isAuthenticated, dashCtrl.rewardPay);

router.get('/dashboard', isAuthenticated, dashCtrl.dashboard);

router.get('/pay/bronce', isAuthenticated, dashCtrl.bronce);

router.get('/pay/plata', isAuthenticated, dashCtrl.plata);

router.get('/pay/oro', isAuthenticated, dashCtrl.oro);

router.get('/pay/zafiro', isAuthenticated, dashCtrl.zafiro);

router.get('/pay/diamante', isAuthenticated, dashCtrl.diamante);

router.get('/pay/platino', isAuthenticated, dashCtrl.platino);

router.get('/pay/rubi', isAuthenticated, dashCtrl.rubi);

router.get('/pay/titanio', isAuthenticated, dashCtrl.titanio);

router.get('/wallet', isAuthenticated, dashCtrl.wallet);

router.get('/referral', isAuthenticated, dashCtrl.referral);

router.get('/reward', isAuthenticated, dashCtrl.reward);

router.get('/market', isAuthenticated, dashCtrl.market);

router.get('/profile', isAuthenticated, dashCtrl.profile);

router.put('/profile/:id', isAuthenticated, dashCtrl.profileUpdate);

router.post("/request/add", isAuthenticated, dashCtrl.createRequest);

export default router;