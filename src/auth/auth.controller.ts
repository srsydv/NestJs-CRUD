import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/LoginDto';
@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {}
    @Post('/register')
    register(@Body() body: RegisterDto){
        // console.log("controller body", body);
        const token = this.authService.registerUser(body);
        return token;
        // return {message: "User registered successfully"};
    }

    @Post('/login')
    login(@Body() body: LoginDto){
        const token = this.authService.loginUser(body);
        return token;
    }
}



