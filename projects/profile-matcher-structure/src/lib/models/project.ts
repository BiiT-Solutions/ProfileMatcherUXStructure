import {ElementDto} from "@biit-solutions/authorization-services";

export class Project extends ElementDto {
  override id: number;
  name: string;
  description: string;

  public static override copy(from: Project, to: Project): void {
    super.copy(from, to);
    to.id = from.id;
    to.name = from.name;
    to.description = from.description;
  }

  public static override clone(from: Project): Project {
    const to: Project = new Project();
    Project.copy(from, to);
    return to;
  }
}
