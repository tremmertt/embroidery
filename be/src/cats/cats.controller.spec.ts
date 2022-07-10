import { Test, TestingModule } from '@nestjs/testing';
import { CatsController } from './cats.controller';

describe('CatsController', () => {
  let catsController: CatsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CatsController],
      providers: [CatsController],
    }).compile();

    catsController = app.get<CatsController>(CatsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(catsController.findAll()).toBe([]);
    });
  });
});
