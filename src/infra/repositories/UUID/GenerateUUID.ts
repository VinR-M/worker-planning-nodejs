import { uuid } from 'uuidv4';
import { GenerateUUIDModel } from './IGenerateUUID';

export class GenerateUUID implements GenerateUUIDModel {
  generate(): string {
    return uuid()
  }
  
}