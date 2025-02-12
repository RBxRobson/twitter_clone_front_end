import { useParams } from 'react-router-dom';

import { useGetUserPostsQuery } from '../../../services/api';
import * as S from './styles';
import { Loading, PostList } from '../../common';

const ProfileFeed = () => {
  const { username } = useParams();
  const {data, isLoading,} = useGetUserPostsQuery(username!);

  if (isLoading && !data) {
    return (
      <>
        <S.Title>
          Postagens
        </S.Title>
        <Loading />
      </>
    );
  }

  if (data?.length === 0 ) {
    return (
      <>
        <S.Title>
          Postagens
        </S.Title>
        <S.Feed>
          O usuário não possui nenhuma postagem
        </S.Feed>
      </>
    );
  }

  return (
    <>
      <S.Title>
        Postagens
      </S.Title>
      <S.Feed>
        <PostList posts={data!} />
      </S.Feed>
    </>
  );
};

export default ProfileFeed;
