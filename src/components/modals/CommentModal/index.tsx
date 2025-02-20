import { FormikValues } from 'formik';

import { SmallAvatar, UserInfos } from '../../common';
import { TextField } from '../../../styles/common';
import { Quote } from '../../postComponents';
import * as S from './styles';

type Props = {
  publication: Post
  form: FormikValues
  user: User
}

const CommentModal = ({ publication, form, user }: Props) => {
  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const element = e.currentTarget;
    element.style.height = 'auto';
    element.style.height = `${element.scrollHeight}px`;
    form.handleChange(e);
  };

  return (
    <>
      <S.PostContainer>
        <div>
          <SmallAvatar 
            avatar={publication.user_details.avatar} 
            username={publication.user_details.username} 
          />
          <S.VerticalLine></S.VerticalLine>
        </div>
        <S.ContentPost>
          <UserInfos publication={publication} />
          <p>{publication.content}</p>
          {publication.post_type === 'quote'  &&
            <Quote isModal publication={publication.original_post as Post} />
          } 
        </S.ContentPost>
      </S.PostContainer>
      <S.ReplyWrapper>
        <S.VerticalLine></S.VerticalLine>
        <p>Respondendo a <span>{publication.user_details.username}</span></p>
      </S.ReplyWrapper>
      <S.InputGroup>
        <SmallAvatar avatar={user.profile.avatar} username={user.username} />
        <TextField
          placeholder="Adicione seu comentário" 
          maxLength={280}
          id="content" 
          name="content"
          onChange={handleInput}
          onBlur={form.handleBlur}
          value={form.values['content']}
        />
      </S.InputGroup>
    </>
  );
};

export default CommentModal;
