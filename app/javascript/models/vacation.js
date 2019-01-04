import { destroy, post } from 'lib/ajax';
import vacationFormData from 'lib/vacationFormData';

export function destroyVacation(id) {
  return destroy(`/vacations/${id}`);
}

export function createVacation(vacation) {
  return post('/vacations', vacationFormData(vacation));
}