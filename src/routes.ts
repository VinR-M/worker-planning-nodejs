import { Router } from 'express';
import { createWorkerController } from './useCases/CreateWorker';

const router = Router()

router.post('/', (req, res) => {
  return createWorkerController.handle(req, res)
})

export { router }