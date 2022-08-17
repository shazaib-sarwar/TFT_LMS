import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { JustfunService } from './justfun.service';
import { CreateJustfunDto } from './dto/create-justfun.dto';
import { UpdateJustfunDto } from './dto/update-justfun.dto';

@Controller('justfun')
export class JustfunController {
  constructor(private readonly justfunService: JustfunService) {}

  @Post()
  create(@Body() createJustfunDto: CreateJustfunDto) {
    return this.justfunService.create(createJustfunDto);
  }

  @Get()
  findAll() {
    return this.justfunService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.justfunService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateJustfunDto: UpdateJustfunDto) {
    return this.justfunService.update(id, updateJustfunDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.justfunService.remove(id);
  }
}
