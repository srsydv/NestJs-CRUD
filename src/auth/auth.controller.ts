import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
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
}



