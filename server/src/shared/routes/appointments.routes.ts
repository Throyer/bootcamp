import { parseISO } from 'date-fns';
import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import AppointmentRepository from '../../modules/appointments/repositories/AppointmentRepository';
import CreateAppointService from '../../modules/appointments/services/CreateAppointmentService';
import authenticationCheck from '../middlewares/authenticationCheck';

const appointments = Router();

appointments.use(authenticationCheck);

appointments.get('/', async (request, response) => {
    const repository: AppointmentRepository = getCustomRepository(
        AppointmentRepository,
    );
    const appointments = await repository.find();
    return response.json(appointments);
});

appointments.post('/', async (request, response) => {
    const { provider_id, date: requestDate } = request.body;

    const date = parseISO(requestDate);

    const service = new CreateAppointService();

    const appointment = await service.execute({
        provider_id,
        date,
    });

    return response.json(appointment);
});

export default appointments;
