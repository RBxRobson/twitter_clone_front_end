declare interface Profile {
  bio: string;
  avatar: string;
  header: string;
  updated_at: string;
}

declare interface User {
  id: number;
  username: string;
  name: string;
  email: string;
  profile: Profile;
  followers_count: number;
  following_count: number;
  created_at: string;
  updated_at: string;
}
