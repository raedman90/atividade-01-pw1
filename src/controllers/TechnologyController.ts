import { Request, Response } from "express";
import { Technology } from "../models/Technology";

const users = [];

class TechnologyController {
  static create(request: Request, response: Response) {
    const { title, deadline } = request.body;
    const { user } = request;

    // Validação básica
    if (!title || !deadline) {
      return response.status(400).json({ error: "Title e deadline sao requeridos!" });
    }

    const technology = new Technology();
    technology.title = title;
    technology.deadline = new Date(deadline);

    user.technologies.push(technology);

    return response.status(201).json(technology);
  }

  static list(request: Request, response: Response) {
    const { user } = request;
    return response.json(user.technologies);
  }

  static update(request: Request, response: Response) {
    const { title, deadline } = request.body;
    const { id } = request.params;
    const { user } = request;

    const technologyIndex = user.technologies.findIndex(tech => tech.id === id);

    if (technologyIndex < 0) {
      return response.status(404).json({ error: "Technologia nao encontrada!" });
    }

    if (!title && !deadline) {
      return response.status(400).json({ error: "Title ou deadline são requridas para o update!" });
    }

    if (title) {
      user.technologies[technologyIndex].title = title;
    }

    if (deadline) {
      user.technologies[technologyIndex].deadline = new Date(deadline);
    }

    return response.json(user.technologies[technologyIndex]);
  }

  static toggleStudiedStatus(request: Request, response: Response) {
    const { id } = request.params;
    const { user } = request;

    const technologyIndex = user.technologies.findIndex(tech => tech.id === id);

    if (technologyIndex < 0) {
      return response.status(404).json({ error: "Technologia nao encontrada!" });
    }

    user.technologies[technologyIndex].studied = !user.technologies[technologyIndex].studied;

    return response.json(user.technologies[technologyIndex]);
  }

  static delete(request: Request, response: Response) {
    const { id } = request.params;
    const { user } = request;

    const technologyIndex = user.technologies.findIndex(tech => tech.id === id);

    if (technologyIndex < 0) {
      return response.status(404).json({ error: "Technologia nao encontrada!" });
    }

    user.technologies.splice(technologyIndex, 1);

    return response.status(204).send();
  }
}

export { TechnologyController };
