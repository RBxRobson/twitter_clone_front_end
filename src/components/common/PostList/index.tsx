import { useSelector } from 'react-redux';

import { RootReducer } from '../../../store';
import { PostItem } from '../../postComponents';

type Props = {
  posts: Post[];
};

const PostList = ({ posts }: Props) => {
  const { user } = useSelector((state: RootReducer) => state.user);

  return (
    <>
      {posts.map((post) => (
        <PostItem 
          key={post.id} 
          post={post}
          user={user!} 
        />
      ))}
    </>
  );
};

export default PostList;