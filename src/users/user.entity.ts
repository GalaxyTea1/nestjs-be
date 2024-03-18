import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
extends class User{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    password: string;
}