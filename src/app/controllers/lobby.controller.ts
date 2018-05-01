import { Request as ExpressRequest } from 'express';
import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiProduces, ApiResponse } from '@nestjs/swagger';
import { LobbyService } from '../services/lobby.service';
import { AuthenticationGuard } from '../middlewares/guards/authentication.guard';
import { LobbyDTO } from '../dto/responses/lobby.dto';
import { LobbyInitialDataDTO } from '../dto/requests/lobby-initial-data.dto';

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
        status: 400,
        description: 'Data validation error'
    })
    @ApiResponse({
        status: 401,
        description: 'Please login first'
    })
    @ApiResponse({
        status: 406,
        description: 'Server overloaded. Try again later'
    })
    @ApiResponse({
        status: 410,
        description: 'Gaming server start failed. Try again later'
    })
    @ApiProduces('LobbyDTO')
    async createLobby(@Req() req: ExpressRequest, @Body() initialData?: LobbyInitialDataDTO): Promise<LobbyDTO> {
        return this.lobbyService.createLobby(req, (initialData && initialData.playersCount) ? initialData : new LobbyInitialDataDTO());
    }

    @Get('getLobbies')
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
    @ApiResponse({
        status: 410,
        description: 'Gaming server start failed. Try again later'
    })
    @ApiProduces('LobbyDTO')
    async quickStart(@Req() req: ExpressRequest): Promise<LobbyDTO> {
        return this.lobbyService.quickStart(req);
    }

}
