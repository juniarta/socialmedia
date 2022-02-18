import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SceneService } from './scene.service';
import { CreateSceneDto } from './dto/create-scene.dto';
import { UpdateSceneDto } from './dto/update-scene.dto';

@Controller('scene')
export class SceneController {
  constructor(private readonly sceneService: SceneService) {}

  @Post()
  create(@Body() createSceneDto: CreateSceneDto) {
    return this.sceneService.create(createSceneDto);
  }

  @Get()
  async findAll() {
    return this.sceneService.findAll();
  }

  @Get('/code/:videoCode')
  async findByCode(@Param('videoCode') videoCode: string) {
    return this.sceneService.findByVideoCode(videoCode);
  }

  @Get(':id')
  async findByVideoId(@Param('id') id: string) {
    return this.sceneService.findByVideoId(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSceneDto: UpdateSceneDto) {
    return this.sceneService.update(+id, updateSceneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sceneService.remove(+id);
  }
}
