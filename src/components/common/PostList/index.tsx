import { useSelector } from 'react-redux';

import { RootReducer } from '../../../store';
import { PostItem } from '../../postComponents';
import * as S from './styles';

type Props = {
  posts: Post[];
  isThreadList?: boolean;
};

const PostList = ({ posts, isThreadList = false }: Props) => {
  const { user } = useSelector((state: RootReducer) => state.user);

  return (
    <>
      {isThreadList ? (
        <S.Feed isThreadList={isThreadList}>
          {posts.map((post) => (
            <PostItem 
              key={post.id} 
              post={post}
              user={user!} 
            />
          ))}
        </S.Feed>
      ):(
        <S.Feed>
          {posts.map((post) => (
            <PostItem 
              key={post.id} 
              post={post}
              user={user!} 
            />
          ))}
        </S.Feed>
      )}
    </>
  );
};

export default PostList;