import { WorkerModel } from '../../entities/Worker'
import { IWorkersRepository } from '../../repositories/IWorkersRepository'
import { CreateWorkerUseCase } from './CreateWorkerUseCase'

const workerMock: WorkerModel = {
  id: 'any_id',
  name: 'any_name',
  email: 'any@email.com',
  password: 'any_password'
}

class WorkerRepositoryStub implements IWorkersRepository {
  async add(workerMock: WorkerModel): Promise<WorkerModel[]> {
    return Promise.resolve([workerMock])
  }
}

const workerRepositoryStub = new WorkerRepositoryStub
const sut = new CreateWorkerUseCase(workerRepositoryStub) 

describe('Create Worker Use Case', () => {
  it('should create new Worker', async () => {
    const result = await sut.execute(workerMock)
    expect(result[0]).toEqual(expect.objectContaining({email: 'any@email.com'}))
  })
})
