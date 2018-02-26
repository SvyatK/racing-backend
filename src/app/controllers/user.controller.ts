import { Request as ExpressRequest } from 'express';
import { Body, Controller, Post, Req } from '@nestjs/common';
import { ApiOperation, ApiProduces, ApiResponse } from '@nestjs/swagger';
import { RegisterDTO } from '../dto/requests/register.dto';
import { UserService } from '../services/user.service';
import { OwnUserDataDTO } from '../dto/responses/own-user-data.dto';
import { LoginDTO } from '../dto/requests/login.dto';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {
    }

    @Post('register')
    @ApiOperation({ title: 'Register user' })
    @ApiResponse({
        status: 201,
        description: 'User created'
    })
    @ApiResponse({
        status: 500,
        description: 'An error occured during user saving'
    })
    @ApiProduces('OwnUserDataDTO')
    async register(@Req() req: ExpressRequest, @Body() registerDTO: RegisterDTO): Promise<OwnUserDataDTO> {
        return this.userService.register(req, registerDTO);
    }

    @Post('login')
    @ApiOperation({ title: 'Sign in' })
    @ApiResponse({
        status: 201,
        description: 'Logged in'
    })
    @ApiResponse({
        status: 401,
        description: 'Login failed'
    })
    @ApiResponse({
        status: 500,
        description: 'An error occured during signin'
    })
    @ApiProduces('OwnUserDataDTO')
    async login(@Req() req: ExpressRequest, @Body() loginDTO: LoginDTO): Promise<OwnUserDataDTO> {
        return this.userService.login(req, loginDTO);
    }
}
