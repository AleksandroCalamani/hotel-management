import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('text', {
    name: 'first_name',
    nullable: false,
  })
  firstName: string;

  @Column('text', {
    name: 'last_name',
    nullable: false,
  })
  lastName: string;

  @Column('text', {
    name: 'email',
    unique: true,
    nullable: false,
  })
  email: string;

  @Column('text', {
    name: 'password',
    nullable: false,
  })
  password: string;

  @Column('datetime', {
    name: 'birthday',
    nullable: false,
  })
  birthday: Date;

  @Column('datetime', {
    name: 'created_at',
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @Column('datetime', {
    name: 'updated_at',
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;
}
