import { WebSocketGateway, SubscribeMessage, MessageBody, WebSocketServer, OnGatewayConnection, OnGatewayInit, OnGatewayDisconnect } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { PlayerService } from './player.service';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';

@WebSocketGateway(81, {
  cors: { origin: '*' },
})
export class PlayerGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server;

  afterInit(server: any) {
    // const resp = JSON.stringify(server)
    console.log('Esto se ejecuta cuando inicia')
  }

  handleConnection(client: any, ...args: any[]) {
    console.log('Hola alguien se conecto al socket 👌👌👌');
  }

  handleDisconnect(client: any) {
    console.log('ALguien se fue! chao chao')
  }

  constructor(private readonly playerService: PlayerService) { }

  @SubscribeMessage('createPlayer')
  create(@MessageBody() createPlayerDto: CreatePlayerDto) {
    return this.playerService.create(createPlayerDto);
  }

  @SubscribeMessage('findAllPlayer')
  findAll() {
    return this.playerService.findAll();
  }

  @SubscribeMessage('findOnePlayer')
  findOne(@MessageBody() id: string) {
    return this.playerService.findOne(id);
  }

  @SubscribeMessage('updatePlayer')
  update(@MessageBody() updatePlayerDto: UpdatePlayerDto) {
    return this.playerService.update(updatePlayerDto.id, updatePlayerDto);
  }

  @SubscribeMessage('removePlayer')
  remove(@MessageBody() id: string) {
    return this.playerService.remove(id);
  }
}
