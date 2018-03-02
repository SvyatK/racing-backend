import { Request as ExpressRequest } from 'express';
import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiProduces, ApiResponse } from '@nestjs/swagger';
import { LobbyService } from '../services/lobby.service';
import { AuthenticationGuard } from '../middlewares/guards/authentication.guard';
import { LobbyDTO } from '../dto/responses/lobby.dto';

@Controller('lobby')
@UseGuards(AuthenticationGuard)
export class LobbyController {
    constructor(private readonly lobbyService: LobbyService) {
    }

    @Post('createLobby')
    @ApiOperation({ title: 'Creates new lobby' })
    @ApiResponse({
        status: 201,
        description: 'Lobby created'
    })
    @ApiResponse({
        status: 401,
        description: 'Please login first'
    })
    @ApiResponse({
        status: 406,
        description: 'Server overloaded. Try again later'
    })
    @ApiProduces('LobbyDTO')
    async createLobby(@Req() req: ExpressRequest): Promise<LobbyDTO> {
        return this.lobbyService.createLobby(req);
    }

    @Post('getLobbies')
    @ApiOperation({ title: 'Returns lobbies list' })
    @ApiResponse({
        status: 401,
        description: 'Please login first'
    })
    @ApiProduces('LobbyDTO[]')
    async getLobbies(): Promise<LobbyDTO[]> {
        return this.lobbyService.getLobbies();
    }

    @Post('quickStart')
    @ApiOperation({ title: 'Automatically return any lobby. Or create it' })
    @ApiResponse({
        status: 401,
        description: 'Please login first'
    })
    @ApiResponse({
        status: 406,
        description: 'Server overloaded. Try again later'
    })
    @ApiProduces('LobbyDTO')
    async quickStart(@Req() req: ExpressRequest): Promise<LobbyDTO> {
        return this.lobbyService.quickStart(req);
    }

}
