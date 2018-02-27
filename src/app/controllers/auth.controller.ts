import { Request as ExpressRequest } from 'express';
import { Body, Controller, Post, Req } from '@nestjs/common';
import { ApiOperation, ApiProduces, ApiResponse } from '@nestjs/swagger';
import { RegisterDTO } from '../dto/requests/register.dto';
import { AuthService } from '../services/auth.service';
import { OwnUserDataDTO } from '../dto/responses/own-user-data.dto';
import { LoginDTO } from '../dto/requests/login.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {
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
        return this.authService.register(req, registerDTO);
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
        return this.authService.login(req, loginDTO);
    }
}
