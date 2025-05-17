import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { BedType } from '../enum/bed-type.enum';
import { RoomSize } from '../enum/room-size.enum';
import { LuxType } from '../enum/lux-type.enum';

@Entity()
export class Room {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('text', {
    name: 'number',
    nullable: false,
  })
  number: string;

  @Column('enum', {
    name: 'bed_type',
    nullable: false,
    enum: Object.values(BedType),
  })
  bedType: BedType;

  @Column('enum', {
    name: 'size',
    nullable: false,
    enum: Object.values(RoomSize),
  })
  size: RoomSize;

  @Column('enum', {
    name: 'lux-type',
    nullable: false,
    enum: Object.values(LuxType),
  })
  luxType: LuxType;

  @Column('decimal', {
    name: 'price',
    nullable: false,
  })
  price: number;

  @Column({ name: 'is_available', default: true })
  isAvailable: boolean;
}
