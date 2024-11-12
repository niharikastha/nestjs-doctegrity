import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Company } from './company.entity'; 
// import { Document } from './document.entity'; 
import {Status} from '../enums/status.enum';

@Entity('group') 
export class Group {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  imported: string;

  @Column({ nullable: false })
  groupName: string;

  @Column({ nullable: true })
  groupCode: string;

  @Column({ nullable: true })
  planId: string;

  @Column({ nullable: true })
  groupDescription: string;

  @Column({ nullable: true })
  address: string;

  @Column({ nullable: true })
  secondaryPhone: string;

  @Column({ nullable: true })
  mainContactName: string;

  @Column({ nullable: true })
  mainContactEmail: string;

  @Column({ nullable: true })
  mainContactPhone: string;

  @Column({
    type: 'enum',
    enum: Status,
    default: Status.ACTIVE,
  })
  status: Status; 

  @Column({ default: false })
  archiveGroup: boolean;

  @Column({ nullable: true })
  avatarUrl: string;

  @Column({ default: true })
  rxCardAccess: boolean;

  @Column({ default: true })
  createDependentAccess: boolean;

  @OneToMany(() => Company, (company) => company.group) 
  companies: Company[];

//   @OneToMany(() => Document, (document) => document.group) 
//   documents: Document[];
}
