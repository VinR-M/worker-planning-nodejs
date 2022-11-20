import { Request, Response } from 'express';
import { CreateWorkerUseCase } from '../useCases/CreateWorker/CreateWorkerUseCase';

export class CreateWorkerController {
  constructor (
    private createWorkerUseCase: CreateWorkerUseCase 
  ) {}

  async handle (req: Request, res: Response ): Promise<Response> {
    const { name, email, password } = req.body

   try {
    const workers = await this.createWorkerUseCase.execute({
      name, email, password
    }) 

    return res.status(201).send(workers)
   } catch (error) {
     return res.status(400).json({
      message: error.message || 'Failed to create worker.'
     }) 
   } 
  }
}
