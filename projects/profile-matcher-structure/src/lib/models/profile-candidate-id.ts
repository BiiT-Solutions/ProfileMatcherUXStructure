export class ProfileCandidateId {
  profileId: number;
  userUuid: string;

  public static copy(from: ProfileCandidateId, to: ProfileCandidateId): void {
    to.profileId = from.profileId;
    to.userUuid = from.userUuid;
  }
  public static clone(from: ProfileCandidateId): ProfileCandidateId {
    const to: ProfileCandidateId = new ProfileCandidateId();
    ProfileCandidateId.copy(from, to);
    return to;
  }
}
