import { Router } from 'express';
import { parseISO } from 'date-fns';
import { container } from 'tsyringe';

import authenticationCheck from '@modules/users/infra/http/middlewares/authenticationCheck';
import CreateAppointService from '@modules/appointments/services/CreateAppointmentService';

const appointments = Router();

appointments.use(authenticationCheck);

// appointments.get('/', async (request, response) => {

//     const appointments = await repository.find();
//     return response.json(appointments);
// });

appointments.post('/', async (request, response) =>  {
    const { provider_id, date: requestDate } = request.body;

    const date = parseISO(requestDate);

    const service = container.resolve(CreateAppointService);

    const appointment = await service.execute({
        provider_id,
        date,
    });

    return response.json(appointment);
});

export default appointments;
