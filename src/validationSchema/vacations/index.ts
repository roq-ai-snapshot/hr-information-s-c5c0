import * as yup from 'yup';

export const vacationValidationSchema = yup.object().shape({
  start_date: yup.date().nullable(),
  end_date: yup.date().nullable(),
  approved: yup.boolean().nullable(),
  reason: yup.string().nullable(),
  employee_id: yup.string().nullable().required(),
});
