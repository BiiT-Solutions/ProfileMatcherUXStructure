import {ElementDto} from "@biit-solutions/authorization-services";
import {ProfileCandidateId} from "./profile-candidate-id";

export class ProfileCandidateComment extends ElementDto {
  override id: ProfileCandidateId;
  comment: string;

  public static override copy(from: ProfileCandidateComment, to: ProfileCandidateComment): void {
    super.copy(from, to);
    to.id = from.id;
    to.comment = from.comment;
  }
  public static override clone(from: ProfileCandidateComment): ProfileCandidateComment {
    const to: ProfileCandidateComment = new ProfileCandidateComment();
    ProfileCandidateComment.copy(from, to);
    return to;
  }
}
