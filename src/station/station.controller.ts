import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException, BadRequestException } from '@nestjs/common';
import { StationService } from './station.service';
import { CreateStationDto } from './dto/create-station.dto';
import { UpdateStationDto } from './dto/update-station.dto';

@Controller('station')
export class StationController {
  constructor(private readonly stationService: StationService) {}

  @Post()
   async create(@Body() createStationDto: CreateStationDto) {
    try {return await this.stationService.create(createStationDto)
    }
    catch
    {
      throw new BadRequestException('Az IP cím már létezik. Kérlek adj meg egyedi IP címet.')
    };
  }

  @Get()
  findAll() {
    return this.stationService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
 try{  return await this.stationService.findOne(+id);
  } catch
  { 
  throw new BadRequestException('A keresett ID nem található')
  }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateStationDto: UpdateStationDto) {
    try{
    return await this.stationService.update(+id, updateStationDto);
    } catch{
      throw new BadRequestException('A keresett ID nem található')
    }
  }

  @Delete(':id')
   async remove(@Param('id') id: string) {
    try{
    return await this.stationService.remove(+id);
    }catch{
      throw new BadRequestException('A keresett ID nem található')
    }
  }
}
