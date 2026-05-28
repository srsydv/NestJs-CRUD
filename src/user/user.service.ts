import { ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private userModel: Model<any>) {}

  async createUser(userData: any) {
    try {
        return await this.userModel.create(userData);
    } catch (error) {
        console.log("error", error);
        if(error.code === 11000) {
            throw new ConflictException("User already exists");
        }
        throw error;
    }
    
  }
}
