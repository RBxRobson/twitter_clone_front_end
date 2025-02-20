import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import { ButtonBack, ButtonHeaderBlur, Loading, PostList, UsersList } from '../../components/common';
import { useGetPostQuotesQuery, useGetPostRepostsQuery } from '../../services/api';
import * as S from './styles';

const PostStats = () => {
  const [isQuoteInfos, setIsQuoteInfos] = useState(true);
  const location = useLocation();
  const postId = location.pathname.split('/')[2];

  const { data: quotesData, isLoading: quotesLoading } = useGetPostQuotesQuery(postId);
  const { data: repostsData, isLoading: repostsLoading } = useGetPostRepostsQuery(postId, { skip: !isQuoteInfos });
  
  const isLoading = quotesLoading || repostsLoading;
  const noReposts = !repostsLoading && repostsData?.length === 0;
  const noQuotes = !quotesLoading && quotesData?.length === 0;

  return (
    <S.ModCentralWrapper>
      <S.Header>
        <S.HeaderWrapper className="pd-left">
          <ButtonBack />
          <S.Title>
          Engajamentos da Postagem
          </S.Title>
        </S.HeaderWrapper>
        <S.HeaderWrapper>
          <ButtonHeaderBlur 
            handleClick={() => setIsQuoteInfos(true)}
            isActive={isQuoteInfos}
            textButton="Citações"
          />
          <ButtonHeaderBlur 
            handleClick={() => setIsQuoteInfos(false)}
            isActive={!isQuoteInfos}
            textButton="Repostagens"
          />
        </S.HeaderWrapper>
      </S.Header>
      {isLoading ? (
        <Loading />
      ) : noQuotes && isQuoteInfos ? (
        <S.Warning>A postagem ainda não possuí nenhuma citação.</S.Warning>
      ) : noReposts && !isQuoteInfos ? (
        <S.Warning>A postagem ainda não possuí nenhuma repostagem.</S.Warning>
      ) : isQuoteInfos ? (
        <PostList posts={quotesData!}/>
      ) : (
        <UsersList users={repostsData!} />
      )}
    </S.ModCentralWrapper>
  );
};

export default PostStats;
