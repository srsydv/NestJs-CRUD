import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { RegisterDto } from './dto/register.dto';
@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService
    ) {}
    
    async registerUser(body: RegisterDto) {
        console.log("service body", body);
        const hashedPassword = await bcrypt.hash(body.password, 10);
        const user = await this.userService.createUser({
          ...body,
          password: hashedPassword,
        });
        const payload = {id: user._id};
        const token = await this.jwtService.signAsync(payload);
        console.log("token", token);
        return {access_token: token};
    }
}