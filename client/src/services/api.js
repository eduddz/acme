require('dotenv').config();
import axios from "axios";

const port = process.env.PORT_SERVER || 8080;

export const api = axios.create({
    baseURL: `http://localhost:${port}/pacientes/`
});