import { FormikValues } from 'formik';

import { SmallAvatar } from '../../common';
import { TextField } from '../../../styles/common';
import * as S from './styles';

type Props = {
  user: User
  form: FormikValues
}

const PostModal = ({form, user}: Props) => {
  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const element = e.currentTarget;
    element.style.height = 'auto';
    element.style.height = `${element.scrollHeight}px`;
    form.handleChange(e);
  };

  return (
    <S.InputGroup>
      <SmallAvatar avatar={user.profile.avatar} username={user.username} />
      <TextField
        placeholder="O que está acontecendo?!" 
        maxLength={280}
        id="content" 
        name="content"
        onChange={handleInput}
        onBlur={form.handleBlur}
        value={form.values['content']}
      />
    </S.InputGroup>
  );
};

export default PostModal;
