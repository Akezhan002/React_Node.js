import { DataSource } from "typeorm";
import { artistDBConnect } from "./bd/config";

export const artistDataSource = new DataSource(artistDBConnect)