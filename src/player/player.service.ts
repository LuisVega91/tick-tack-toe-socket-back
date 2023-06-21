import { Injectable } from '@nestjs/common';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Player } from './schemas/player.schema';
import { Model } from 'mongoose';

@Injectable()
export class PlayerService {

  constructor(@InjectModel(Player.name) private playerModel: Model<Player>){

  }
 
  create(createPlayerDto: CreatePlayerDto) {
    return 'This action adds a new player';
  }

  findAll() {
    return this.playerModel.find().exec();
  }

  findOne(id: string) {
    return `This action returns a #${id} player`;
  }

  update(id: string, updatePlayerDto: UpdatePlayerDto) {
    return `This action updates a #${id} player`;
  }

  remove(id: string) {
    return `This action removes a #${id} player`;
  }
}
