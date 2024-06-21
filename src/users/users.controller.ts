import {
  Controller,
  Get,
  Post,
  Delete,
  Param,
  Body
} from '@nestjs/common';
import { UsersService } from './users.service';
import User from './user.entity';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
@ApiTags('Users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  
  @Post(':id')
  @ApiOperation({ summary: 'Update user by ID' })
  @ApiResponse({ status: 200, description: 'User successfully updated.' })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  @ApiResponse({ status: 404, description: 'User not found.' })
  async update(@Param('id') id: number, @Body() userData: UpdateUserDto): Promise<UpdateUserDto> {
    return await this.usersService.update(id, userData); 
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete user by ID' })
  @ApiResponse({ status: 200, description: 'User successfully deleted.' })
  @ApiResponse({ status: 404, description: 'User not found.' })
  async delete(@Param('id') id: number): Promise<void> {
    return await this.usersService.delete(id); 
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get user by ID' })
  @ApiResponse({ status: 200, description: 'Return user by ID.' })
  @ApiResponse({ status: 404, description: 'User not found.' })
  async findOne(@Param('id') id: number): Promise<User> {
    return await this.usersService.findOne(id); 
  }

  @Post()
  @ApiOperation({ summary: 'Create user' })
  @ApiResponse({ status: 201, description: 'User successfully created.' })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  async create(@Body() userData: CreateUserDto): Promise<CreateUserDto> {
    return await this.usersService.create(userData); 
  }

  @Get()
  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({ status: 200, description: 'Return all users.' })
  async findAll(): Promise<User[]> {
    return await this.usersService.findAll();
  }
  
}
