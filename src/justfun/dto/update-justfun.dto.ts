import { PartialType } from '@nestjs/mapped-types';
import { CreateJustfunDto } from './create-justfun.dto';

export class UpdateJustfunDto extends PartialType(CreateJustfunDto) {}
