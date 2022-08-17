import { Module } from '@nestjs/common';
import { JustfunService } from './justfun.service';
import { JustfunController } from './justfun.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Justfun, justfunSchema } from './Schema/justforfun.schema';

@Module({
  imports:[MongooseModule.forFeature([{name: Justfun.name, schema: justfunSchema}])],
  controllers: [JustfunController],
  providers: [JustfunService]
})
export class JustfunModule {}
