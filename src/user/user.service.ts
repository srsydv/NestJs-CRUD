import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    createUser(body: any) {
        return {message: "User created successfully"};
    } 
}
