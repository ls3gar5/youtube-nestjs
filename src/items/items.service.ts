import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';

@Injectable()
export class ItemsService {
  create(createItemDto: CreateItemDto): string {
    const itemplain = JSON.stringify(createItemDto);
    return `This action returns a news ${itemplain} item`;
  }

  findAll() {
    return 'This action returns all items';
  }

  findOne(id: number): string {
    return `This action returns a #${id} item`;
  }

  update(id: number, updateItemDto: UpdateItemDto) {
    return `This action updates a #${id} item`;
  }

  remove(id: number) {
    return `This action removes a #${id} item`;
  }
}
