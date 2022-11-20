import { WorkerModel } from '../../entities/Worker';
import { IWorkersRepository } from '../IWorkersRepository';

export class WorkersRepository implements IWorkersRepository {
  private workers = []
  // async findByEmail(email: string): Promise<Worker> {
    
  // }

  async add(worker: WorkerModel): Promise<WorkerModel[]> {
    this.workers.push(worker)    
    return this.workers
  }
}