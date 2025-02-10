import * as S from './styles';
import { UserInfos } from '../../common';

type Props = {
  children?: JSX.Element
  post: Post
};

const Content = ({ children, post }: Props) => {
  return (
    <S.Wrapper>
      <UserInfos 
        publication={post}
        navigateProfile
      />
      <S.ContentPost>{post.content}</S.ContentPost>
      {children}
    </S.Wrapper>
  );
};

export default Content;
