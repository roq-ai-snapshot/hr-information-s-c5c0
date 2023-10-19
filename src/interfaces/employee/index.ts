import { PayrollInterface } from 'interfaces/payroll';
import { VacationInterface } from 'interfaces/vacation';
import { UserInterface } from 'interfaces/user';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface EmployeeInterface {
  id?: string;
  user_id: string;
  company_id: string;
  hire_date?: any;
  job_title?: string;
  salary?: number;
  vacation_days?: number;
  created_at?: any;
  updated_at?: any;
  payroll?: PayrollInterface[];
  vacation?: VacationInterface[];
  user?: UserInterface;
  company?: CompanyInterface;
  _count?: {
    payroll?: number;
    vacation?: number;
  };
}

export interface EmployeeGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  company_id?: string;
  job_title?: string;
}
