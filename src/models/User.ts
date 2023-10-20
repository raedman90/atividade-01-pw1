import { v4 as uuidV4 } from "uuid";
import { Technology } from "./Technology";

export class User {
    id: string;
    name: string;
    username: string;
    technologies: Technology[];
}

