import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiProduces, ApiResponse } from '@nestjs/swagger';
import { RegisterDTO } from '../dto/requests/register.dto';
import { UserService } from '../services/user.service';
import { OwnUserDataDto } from '../dto/responses/own-user-data.dto';
import { LoginDto } from '../dto/requests/login.dto';

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
    @ApiProduces('OwnUserDataDto')
    async register(@Body() registerDto: RegisterDTO): Promise<OwnUserDataDto> {
        return this.userService.register(registerDto);
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
    @ApiProduces('OwnUserDataDto')
    async login(@Body() loginDto: LoginDto): Promise<OwnUserDataDto> {
        return this.userService.login(loginDto);
    }
}
