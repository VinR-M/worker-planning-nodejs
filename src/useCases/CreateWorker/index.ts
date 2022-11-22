import { CreateWorkerController } from '../../controllers/CreateWorkerController';
import { WorkersRepository } from '../../infra/repositories/postgres/WorkersRepository';
import { CreateWorkerUseCase } from './CreateWorkerUseCase';

const workerRepository = new WorkersRepository()

const createWorkerUseCase = new CreateWorkerUseCase(
  workerRepository
)

const createWorkerController = new CreateWorkerController(
  createWorkerUseCase
) 

export { createWorkerController }