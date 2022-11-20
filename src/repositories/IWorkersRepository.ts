import { WorkerModel } from '../entities/Worker';

export interface IWorkersRepository {
  // findByEmail(email: string): Promise<Worker>
  add(worker: WorkerModel): Promise<WorkerModel[]>
}