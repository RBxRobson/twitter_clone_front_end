type ParentComment = Omit<Comment, 'parent_comment'>;

export interface Comment {
  id: number;
  content: string;
  post: number;
  user_details: UserDetails;
  created_at: string; 
  updated_at: string; 
  likes_count: number;
  replies_count: number;
  is_liked: boolean;
  parent_comment: number | ParentComment | null;
}