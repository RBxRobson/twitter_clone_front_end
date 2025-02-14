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
        <S.Wrapper>
          <Loading />
        </S.Wrapper>
      </>
    );
  }

  if (data?.length === 0 ) {
    return (
      <>
        <S.Title>
          Postagens
        </S.Title>
        <S.Wrapper>
          Este usuário ainda não possui postagens
        </S.Wrapper>
      </>
    );
  }

  return (
    <>
      <S.Title>
        Postagens
      </S.Title>
      <PostList posts={data!} />
    </>
  );
};

export default ProfileFeed;
