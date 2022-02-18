import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ResponseService } from '../common/http/response.service';
import { CreateSceneDto } from './dto/create-scene.dto';
import { UpdateSceneDto } from './dto/update-scene.dto';
import { Scene } from './entities/scene.entity';

@Injectable()
export class SceneService {
  constructor(
    @InjectRepository(Scene)
    private readonly sceneRepository: Repository<Scene>,
    private readonly responseService: ResponseService,
  ) {}

  create(createSceneDto: CreateSceneDto): string {
    return 'This action adds a new scene';
  }

  async findAll() {
    const Videos = await this.sceneRepository.find({
      select: ['title', 'image', 'videoCode', 'trailer', 'addedOn', 'videoId'],
      take: 28,
    });
    return this.responseService.responseSuccess(HttpStatus.OK, Videos);
  }

  async findByVideoId(id: string) {
    const res = await this.sceneRepository.findOne({
      where: {
        videoId: id,
      },
    });
    return this.responseService.responseSuccess(HttpStatus.OK, res);
  }

  async findByVideoCode(videoCode: string) {
    const res = await this.sceneRepository.findOne({
      where: {
        videoCode: videoCode,
      },
    });
    return this.responseService.responseSuccess(HttpStatus.OK, res);
  }

  update(id: number, updateSceneDto: UpdateSceneDto) {
    return `This action updates a #${id} scene`;
  }

  remove(id: number) {
    return `This action removes a #${id} scene`;
  }
}
