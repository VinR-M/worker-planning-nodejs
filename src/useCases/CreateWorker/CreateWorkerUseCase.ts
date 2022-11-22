import { WorkerModel } from '../../entities/Worker';
import { IWorkersRepository } from '../../infra/repositories/IWorkersRepository';
import { ICreateWorkerDTO } from './ICreateWorkerDTO';

export class CreateWorkerUseCase {
  constructor(
    private workersRepository: IWorkersRepository
  ) {}

  async execute(data: ICreateWorkerDTO) {
    // const workerExists = await this.workersRepository.findByEmail(data.email)

    // if(workerExists) {
    //   throw new Error('Worker already exists.')
    // }

    const worker = new WorkerModel(data)

    const workers = await this.workersRepository.add(worker)
    return workers
  }
}
