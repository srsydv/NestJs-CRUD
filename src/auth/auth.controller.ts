import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {}
    @Post('/register')
    register(@Body() body: any){
        // console.log("controller body", body);
        const result = this.authService.registerUser(body);
        return result;
        // return {message: "User registered successfully"};
    }
}



