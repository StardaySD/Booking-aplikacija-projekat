//Kreiran model u kome čuvamo naše podatke/ogledalo onoga što držimo u mongoDB
export interface Appointment {
  _id: string;
  appointmentDate: string;
  name: string;
  email: string;
}

