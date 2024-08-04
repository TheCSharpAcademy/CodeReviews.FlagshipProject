interface IUser {
  id: string;
  username: string;
  email: string;
  firstName: string | undefined;
  lastName: string | undefined;
  currentGoal: string | undefined;
  bio: string | undefined;
  xp: number;
  level: number;
  totalMissionsAdded: number;
  totalMissionsCompleted: number;
  totalXpGained: number;
  avatarUrl: string;
  githubId: string | undefined;
  facebookId: string | undefined;
  googleId: string | undefined;
}

export default IUser;
