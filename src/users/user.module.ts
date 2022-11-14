import { Module } from "@nestjs/common";
import {SequelizeModule} from '@nestjs/sequelize';
import { User } from "./user.model";
import { UsersService } from './user.service';

@Module({
    imports: [SequelizeModule.forFeature([User])],
    providers: [UsersService],
    controllers: [],
})

export class UserModule {}