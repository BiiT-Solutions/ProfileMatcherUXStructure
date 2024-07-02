import {ElementDto} from "authorization-services-lib";

export class Profile extends ElementDto {
  override id: number;
  name: string;
  description: string;
  trackingCode: string;
  type: string;
  content: string;

  public static override copy(from: Profile, to: Profile): void {
    super.copy(from, to);
    to.id = from.id;
    to.name = from.name;
    to.description = from.description;
    to.trackingCode = from.trackingCode;
    to.type = from.type;
    to.content = from.content;
  }
  public static override clone(from: Profile): Profile {
    const to: Profile = new Profile();
    this.copy(from, to);
    return to;
  }
}
