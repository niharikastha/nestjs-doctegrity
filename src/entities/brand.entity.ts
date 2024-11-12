import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Company } from './company.entity'; 
import { Status } from '../enums/status.enum'; 

@Entity('brand')
export class Brand {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: true })
  avatarUrl: string;

  @Column({ nullable: true })
  frontendBaseUrl: string;

  @Column({ nullable: true })
  pdfLogoUrl: string;

  @Column({ nullable: true })
  emailTemplateVideoCall: string;

  @Column({ nullable: true })
  emailTemplatePasswordReset: string;

  @Column({ nullable: true })
  emailTemplateMemberWelcome: string;

  @Column({ nullable: true })
  emailTemplateMemberWelcomeSpanish: string;

  @Column({ nullable: true })
  emailTemplateMemberActivation: string;

  @Column({ nullable: true })
  emailTemplateConsultSubmitted: string;

  @Column({ nullable: true })
  emailTemplateConsultReminder: string;

  @Column({ nullable: true })
  emailTemplateLateConsultReminder: string;

  @Column({ nullable: true })
  emailTemplateUpdateEmailID: string;

  @Column({
    type: 'enum',
    enum: Status,
    default: Status.ACTIVE,
  })
  status: Status;

  @OneToMany(() => Company, (company) => company.brand)
  companies: Company[]; 
}
