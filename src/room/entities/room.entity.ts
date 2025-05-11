import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Room {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  number: string;

  @Column()
  type: string;

  @Column('decimal')
  price: number;

  @Column({ default: true })
  isAvailable: boolean;
}
