import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import bcrypt from 'bcrypt';
@Injectable()
export class AuthService {
    constructor(private userService: UserService) {}
    
    async registerUser(body: any) {
        console.log("service body", body);
        const hashedPassword = await bcrypt.hash(body.password, 10);
        const result = await this.userService.createUser({
          ...body,
          password: hashedPassword,
        });
        return result;
    }
}