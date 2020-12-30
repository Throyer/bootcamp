import { Router } from "express";

import home from "./home";

import appointments from "./appointments.routes";
import sessions from "./sessions.routes";
import users from "./users.routes";

const routes = Router();

routes.get("/", home);

routes.use("/appointments", appointments);
routes.use("/users", users);
routes.use("/sessions", sessions);

export default routes;