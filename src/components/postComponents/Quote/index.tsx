import { useNavigate } from 'react-router-dom';

import { SmallAvatar, UserInfos } from '../../common';
import * as S from './styles';

type Props = {
  publication: Post;
  isModal?: boolean;
};

const Quote = ({ publication, isModal = false }: Props) => {
  const navigate = useNavigate();

  const handleClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    navigate(`/post/${publication.id}`);
  };

  if (isModal) {
    return (
      <S.Wrapper>
        <S.QuoteHeader>
          <SmallAvatar postUser={publication.user_details} />
          <UserInfos publication={publication} />
        </S.QuoteHeader>
        <S.ContentPost>{publication.content}</S.ContentPost>
      </S.Wrapper>
    );
  }

  return (
    <S.Wrapper onClick={handleClick}>
      <S.QuoteHeader>
        <SmallAvatar postUser={publication.user_details} />
        <UserInfos publication={publication} navigateProfile />
      </S.QuoteHeader>
      <S.ContentPost>{publication.content}</S.ContentPost>
    </S.Wrapper>
  );
};

export default Quote;
