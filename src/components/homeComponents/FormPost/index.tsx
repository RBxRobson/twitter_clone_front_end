import { useSelector } from 'react-redux';

import { RootReducer } from '../../../store';
import { useFormPost } from '../../../utils';
import { Loading, SmallAvatar } from '../../common';
import * as S from './styles';

const FormPost = () => {
  const formik = useFormPost({notModal: true});
  const { user, isLoading } = useSelector((state: RootReducer) => state.user);

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const element = e.currentTarget;
    element.style.height = 'auto';
    element.style.height = `${element.scrollHeight}px`;
    formik.handleChange(e);
  };

  return (
    <S.FormPost onSubmit={formik.handleSubmit}>
      <S.InputGroup>
        {isLoading 
          ? <Loading size="small" /> 
          : <SmallAvatar avatar={user!.profile.avatar} username={user!.username} />
        }
        <S.ModTextField
          placeholder="O que está acontecendo?!" 
          maxLength={280}
          id="content" 
          name="content"
          onChange={handleInput}
          onBlur={formik.handleBlur}
          value={formik.values['content']}
        />
      </S.InputGroup>
      <S.WrapperButton>
        <S.ButtonSubmit
          type="submit" 
          disabled={
            !formik.isValid || 
          !formik.dirty || 
          formik.isLoading
          }
        >
        Publicar
        </S.ButtonSubmit>
      </S.WrapperButton>
    </S.FormPost>
  );
};

export default FormPost;