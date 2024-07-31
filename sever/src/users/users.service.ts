import { Injectable } from '@nestjs/common';
import { User,Prisma } from '@prisma/client';
import { DbService } from 'src/db/db.service';

@Injectable()
export class UsersService {
  constructor(private prisma: DbService) {}

  async create(createUserDto: Prisma.UserCreateInput) {
    const res = await this.prisma.user.create({
      data:createUserDto
    })
    return {
      code:0,
      msg:'创建用户成功',
      res:{
        username:res.loginId,
      }
    }
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
