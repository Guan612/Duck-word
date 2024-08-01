import { Injectable } from '@nestjs/common';
import { User, Prisma } from '@prisma/client';
import { DbService } from 'src/db/db.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {
  constructor(
    private prisma: DbService,
    private jwtService: JwtService,
  ) {}

  async create(createUserDto: Prisma.UserCreateInput) {
    const res = await this.prisma.user.create({
      data: createUserDto,
    });
    return {
      code: 0,
      msg: '创建用户成功',
      res: {
        username: res.loginId,
      },
    };
  }

  async login(loginUserDto: Prisma.UserWhereUniqueInput) {
    const res = await this.prisma.user.findUnique({
      where: loginUserDto,
    });
    if (res) {
      return {
        code: 0,
        msg: '登录成功',
        res: {
          username: res.loginId,
        },
      };
    } else {
      return {
        code: 1,
        msg: '用户名或密码错误',
        res: null,
      };
    }
  }

  async findAll() {
    const res = await this.prisma.user.findMany();
    return {
      code: 0,
      msg: '查询所有用户成功',
      res: res,
    };
  }

  async findOne(id: number) {
    const res = await this.prisma.user.findUnique({
      where: {
        id: id,
      },
    });
    return {
      code: 0,
      msg: '查询指定用户成功',
      res: res,
    };
  }

  async update(id: number, updateUserDto) {
    const res = await this.prisma.user.update({
      where: {
        id: id,
      },
      data: updateUserDto,
    });
    return {
      code: 0,
      msg: '更新用户信息成功',
      res: res,
    };
  }

  async remove(id: number) {
    const res = await this.prisma.user.delete({
      where: {
        id: id,
      },
    });
    return {
      code: 0,
      msg: `注销${res.loginId}成功`,
      res: res.loginId,
    };
  }
}
