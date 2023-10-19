import * as yup from 'yup';

export const hrManagerValidationSchema = yup.object().shape({
  hire_date: yup.date().nullable(),
  job_title: yup.string().nullable(),
  salary: yup.number().integer().nullable(),
  user_id: yup.string().nullable().required(),
  company_id: yup.string().nullable().required(),
});
