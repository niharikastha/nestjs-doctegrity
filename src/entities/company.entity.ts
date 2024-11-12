import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm';
// import { Member } from './Member';
// import { Partner } from './Partner';
// import { Document } from './Document';
// import { Service } from './Service';
import { Group } from './group.entity'; 
import { Brand } from './brand.entity';

@Entity('companies')
export class Company {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  defaultPartnerId: string;

  @Column({ nullable: true })
  imported: string;

  @Column({ nullable: true })
  groupCode: string;

  @Column({ nullable: true })
  planId: string;

  @Column({ nullable: true })
  dctPlanId: string;

  @Column({ default: false })
  dctAllowAccess: boolean;

  @Column({ default: '3' })
  planDetailId: string;

  @Column({ nullable: false })
  companyName: string;

  @Column({ nullable: true })
  companyType: string;

  @Column({ unique: true })
  companyEmail: string;

  @Column({ nullable: true })
  companyPhone: string;

  @Column({ nullable: true })
  companyAddress: string;

  @Column({ nullable: true })
  companyDetails: string;

  @Column({ default: 'active' })
  status: string;

  @Column({ nullable: true })
  avatarUrl: string;

  @Column({ default: 'Doctegrity' })
  fulfilment: string;

  @Column({ default: false })
  marblesHRIntegration: boolean;

  @Column({ nullable: true })
  marblesHRToken: string;

  @Column({ nullable: true })
  marblesPullDataLastTime: string;

  @Column({ default: '', type: 'varchar', enum: ['portal', 'system'] })
  census: string;

  @Column({ default: true })
  rxCardAccess: boolean;

  @Column({ default: true })
  createDependentAccess: boolean;

  // Relationships
  @ManyToOne(() => Group, (group) => group.companies, { nullable: true })
  group: Group;

  @ManyToOne(() => Brand, (brand) => brand.companies, { nullable: true })
  brand: Brand;

//   @OneToMany(() => Member, (member) => member.company)
//   members: Member[];

//   @OneToMany(() => Partner, (partner) => partner.company)
//   partners: Partner[];

//   @OneToMany(() => Document, (document) => document.company)
//   documents: Document[];

//   @OneToMany(() => Service, (service) => service.company)
//   services: Service[];
}
