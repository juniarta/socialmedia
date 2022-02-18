import { Column, Entity, PrimaryColumn } from 'typeorm';
import { IsNotEmpty } from 'class-validator';

@Entity('Videos')
export class Scene {
  @PrimaryColumn({
    type: 'int',
    nullable: false,
  })
  id: number;

  @IsNotEmpty()
  @Column({
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  title: string;

  @IsNotEmpty()
  @Column({
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  link: string;

  @IsNotEmpty()
  @Column({
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  videoCode: string;

  @IsNotEmpty()
  @Column({
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  videoId: string;

  @IsNotEmpty()
  @Column({
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  trailer: string;

  @IsNotEmpty()
  @Column({
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  linkEmbed: string;

  @IsNotEmpty()
  @Column({
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  image: string;

  @IsNotEmpty()
  @Column({
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  actrees: string;

  @IsNotEmpty()
  @Column({
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  addedOn: string;

  @IsNotEmpty()
  @Column({
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  label: string;
}
