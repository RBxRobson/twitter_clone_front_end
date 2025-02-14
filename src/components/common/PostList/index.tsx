import { useSelector } from 'react-redux';

import { RootReducer } from '../../../store';
import { PostItem } from '../../postComponents';
import * as S from './styles';

type Props = {
  posts: Post[];
};

const PostList = ({ posts }: Props) => {
  const { user } = useSelector((state: RootReducer) => state.user);

  return (
    <S.Feed>
      {posts.map((post) => (
        <PostItem 
          key={post.id} 
          post={post}
          user={user!} 
        />
      ))}
    </S.Feed>
  );
};

export default PostList;