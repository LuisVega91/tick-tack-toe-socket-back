import { Module } from '@nestjs/common';
import { PlayerService } from './player.service';
import { PlayerGateway } from './player.gateway';
import { MongooseModule } from '@nestjs/mongoose';
import { Player, PlayerSchema } from './schemas/player.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Player.name, schema: PlayerSchema }])],
  providers: [PlayerGateway, PlayerService]
})
export class PlayerModule {}
