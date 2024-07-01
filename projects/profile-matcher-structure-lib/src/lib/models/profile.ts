import {ElementDto} from "authorization-services-lib";

export class Profile extends ElementDto {
  override id: number;
  name: string;

  public static override copy(from: Profile, to: Profile): void {
    super.copy(from, to);
    to.id = from.id;
    to.name = from.name;
  }
  public static override clone(from: Profile): Profile {
    const to: Profile = new Profile();
    this.copy(from, to);
    return to;
  }
}
