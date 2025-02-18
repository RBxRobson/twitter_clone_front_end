type PostType = 'original' | 'repost' | 'quote' | 'comment';

interface UserDetails {
  id: number;
  name: string;
  username: string;
  avatar: string;
}

interface Post {
  id: number;
  user: number;
  user_details: UserDetails;
  content: string;
  post_type: PostType;
  original_post: Post | null;
  created_at: string;
  updated_at: string;
  likes_count: number;
  comments_count: number;
  reposts_count: number;
  quotes_count: number;
  is_liked: boolean;
  is_reposted: number | false;
  is_following_author: boolean;
}

interface PostPayload extends Omit<Post, 'original_post'> {
  original_post: number | null;
}
