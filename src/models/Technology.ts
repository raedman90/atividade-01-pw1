import { v4 as uuidV4 } from "uuid";

class Technology {
  id?: string;
  title: string;
  studied: boolean;
  deadline: Date;
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
    this.studied = false;
    this.created_at = new Date();
  }
}

export { Technology };