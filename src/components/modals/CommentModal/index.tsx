import { FormikValues } from 'formik';

import { SmallAvatar, UserInfos } from '../../common';
import { TextField } from '../../../styles/common';
import { Comment } from '../../../types/comment-details';
import { Quote } from '../../postComponents';
import * as S from './styles';

type Props = {
  publication: Post | Comment
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

  const isPost = publication && 'post_type' in publication;

  return (
    <>
      <S.PostContainer>
        <div>
          <SmallAvatar postUser={publication.user_details}/>
          <S.VerticalLine></S.VerticalLine>
        </div>
        <S.ContentPost>
          <UserInfos publication={publication} />
          <p>{publication.content}</p>
          {isPost && publication.post_type === 'quote'  &&
            <Quote isModal publication={publication.original_post as Post} />
          } 
        </S.ContentPost>
      </S.PostContainer>
      <S.ReplyWrapper>
        <S.VerticalLine></S.VerticalLine>
        <p>Respondendo a <span>{publication.user_details.username}</span></p>
      </S.ReplyWrapper>
      <S.InputGroup>
        <SmallAvatar user={user} />
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
