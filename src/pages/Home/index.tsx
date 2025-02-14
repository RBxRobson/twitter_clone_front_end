import { useState } from 'react';
import { useSelector } from 'react-redux';

import { FormPost, HeaderHome } from '../../components/homeComponents';
import { Loading, PostList } from '../../components/common';
import { useGetPostsQuery, useGetUserFeedQuery } from '../../services/api';
import { RootReducer } from '../../store';
import * as S from './styles';

const Home = () => {
  const [isForYouActive, setIsForYouActive] = useState(true);
  const [hasFetchedUserFeed, setHasFetchedUserFeed] = useState(false);
  const { user } = useSelector((state: RootReducer) => state.user);

  const { data: userFeedData, isLoading: loadingUserFeed } = useGetUserFeedQuery(undefined, {
    skip: isForYouActive && !hasFetchedUserFeed,
  });

  const { data: generalFeedData, isLoading: loadingGeneralFeed } = useGetPostsQuery();

  const handleClickFollowing = () => {
    setIsForYouActive(false);
    if (!hasFetchedUserFeed) {
      setHasFetchedUserFeed(true);
    }
  };

  if (loadingUserFeed || loadingGeneralFeed) {
    return (
      <S.CentralWrapper>
        <HeaderHome 
          isForYouActive={isForYouActive}
          onClickFollowing={handleClickFollowing}
          onClickForYou={() => setIsForYouActive(true)}
        />
        <FormPost />
        <S.LoadingContainer>
          <Loading />
        </S.LoadingContainer>
      </S.CentralWrapper>
    );
  }

  return (
    <S.CentralWrapper>
      <HeaderHome 
        isForYouActive={isForYouActive}
        onClickFollowing={handleClickFollowing}
        onClickForYou={() => setIsForYouActive(true)}
      />
      <FormPost />
      {isForYouActive 
        ? <PostList posts={generalFeedData!}/> 
        : (
          <>
            <PostList posts={userFeedData!}/>
            {userFeedData?.length === 0 
            && user?.following_count === 0
            && 'Você ainda não segue ninguém.'}
            {userFeedData?.length === 0 
            && user?.following_count! >= 0
            && 'Seus seguidores não possuem postagens no momento'}
          </>
        )
      }
    </S.CentralWrapper>
  );
};

export default Home;