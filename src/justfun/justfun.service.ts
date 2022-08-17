import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateJustfunDto } from './dto/create-justfun.dto';
import { UpdateJustfunDto } from './dto/update-justfun.dto';
import { Justfun, justfunDocument } from './Schema/justforfun.schema';

@Injectable()
export class JustfunService {

  constructor(@InjectModel(Justfun.name) private justforfunModel: Model<justfunDocument>) { }

  create(createJustfunDto: CreateJustfunDto): Promise<Justfun> {

    const model = new this.justforfunModel()
    model.data = createJustfunDto.data
    model.count = createJustfunDto.count

    return model.save();
  }

  findAll(): Promise<Justfun[]> {
    return this.justforfunModel.find().exec();
  }

  findOne(id: string): Promise<Justfun> {
    return this.justforfunModel.findById(id).exec();
  }

  update(id: string, updateJustfunDto: UpdateJustfunDto) {
    return this.justforfunModel.updateOne({ _id: id }, {
      data: updateJustfunDto.data,
      count: updateJustfunDto.count
    }).exec();
  }

  remove(id: string) {
    return this.justforfunModel.deleteOne({ _id: id }).exec();
  }
}
