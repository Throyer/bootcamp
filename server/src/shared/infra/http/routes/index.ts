import { Router } from "express";

import home from "./home";

import appointments from "@modules/appointments/infra/http/routes/appointments.routes";
import users from "@modules/users/infra/http/routes/users.routes";
import sessions from "@modules/users/infra/http/routes/sessions.routes";

const routes = Router();

routes.get("/", home);

routes.use("/appointments", appointments);
routes.use("/users", users);
routes.use("/sessions", sessions);

export default routes;
