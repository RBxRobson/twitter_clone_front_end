import { FormikValues } from 'formik';
import { useEffect } from 'react';

import { SmallAvatar, UserInfos } from '../../common';
import { TextField } from '../../../styles/common';
import { Comment } from '../../../types/comment-details';
import * as S from './styles';

type Props = {
  publication: Post | Comment
  form: FormikValues
  user: User
}

const EditModal = ({ publication, form, user }: Props) => {
  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const element = e.currentTarget;
    element.style.height = 'auto';
    element.style.height = `${element.scrollHeight}px`;
    form.handleChange(e);
  };

  useEffect(() => {
    const textarea = document.getElementById('content') as HTMLTextAreaElement;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, []); 

  return (
    <S.WrapperEdit>
      <SmallAvatar user={user} />
      <S.InputGroup>
        <UserInfos publication={publication} />
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
    </S.WrapperEdit>
  );
};

export default EditModal;
