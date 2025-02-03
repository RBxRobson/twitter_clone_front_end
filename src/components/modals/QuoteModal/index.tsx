import { FormikValues } from 'formik';

import { SmallAvatar } from '../../common';
import { TextField } from '../../../styles/common/';
import { Quote } from '../../postComponents';
import * as S from './styles';

type Props = {
  user: User
  form: FormikValues
  post: Post
}

const QuoteModal = ({form, user, post}: Props) => {
  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const element = e.currentTarget;
    element.style.height = 'auto';
    element.style.height = `${element.scrollHeight}px`;
    form.handleChange(e);
  };

  return (
    <S.FormWrapper>
      <SmallAvatar user={user} />
      <S.InputGroup>
        <TextField 
          placeholder="Adicione suas ideias" 
          maxLength={280}
          id="content" 
          name="content"
          onChange={handleInput}
          onBlur={form.handleBlur}
          value={form.values['content']}
        />
        <Quote post={post}/>
      </S.InputGroup>
    </S.FormWrapper>
  );
};

export default QuoteModal;
