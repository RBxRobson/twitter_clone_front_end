import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import { 
  ButtonBack, 
  Loading, 
  MoreButton,
  PostList,
  SmallAvatar, 
  usePostUtils, 
  UserInfos 
} from '../../components/common';
import { RootReducer } from '../../store';
import { Interactions, PostPopUp, Quote } from '../../components/postComponents';
import { useGetPostCommentsQuery, useGetPostQuery } from '../../services/api';
import { useFormPost } from '../../utils';
import * as S from './styles';

const Post = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state: RootReducer) => state.user);
  const { popUp } = useSelector((state: RootReducer) => state.currentPost);
  const formik = useFormPost({notModal: true});
  const location = useLocation();
  const postId = location.pathname.split('/')[2];
  const { data: currentPost, isLoading, error } = useGetPostQuery(postId);
  const { 
    data: commentsData,
    isLoading: commentsLoading
  } = useGetPostCommentsQuery(postId);

  const postUtils = usePostUtils(currentPost ? currentPost : null, user);

  const { 
    isAnnexPostUser,
    isPostUser,
    isRepost,
    isQuoteRepost
  } = postUtils;

  const date = new Date(currentPost ? currentPost.created_at : 0);
  const formatter = new Intl.DateTimeFormat('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });
  const formattedTime = formatter.format(date);
  const formattedDate = date.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).replace('.', '');
  const finalFormattedDate = `${formattedTime} · ${formattedDate}`;

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const element = e.currentTarget;
    element.style.height = 'auto';
    element.style.height = `${element.scrollHeight}px`;
    formik.handleChange(e);
  };

  const handleClickSubmit = () => {
    formik.setFieldValue('postType', 'comment');
    formik.setFieldValue('original_post', currentPost!.id);
  };

  useEffect(() => {
    if (error && 'status' in error && error.status === 404) {
      alert('Post não encontrado, voltando para pagina inicial');
      navigate('/home');
    }
  }, [error]);

  if (isLoading || !currentPost) {
    return (
      <S.ModCentralWrapper>
        <S.Header>
          <ButtonBack />
          <h2>Publicação</h2>
          <S.ButtonComment>Comentar</S.ButtonComment>
        </S.Header>
        <Loading size="medium" />
      </S.ModCentralWrapper>
    );
  }

  return (
    <S.ModCentralWrapper>
      <S.Header>
        <ButtonBack />
        <h2>Publicação</h2>
        <S.ButtonComment>Comentar</S.ButtonComment>
      </S.Header>
      <S.PostContainer>
        <S.PostHeader>
          <SmallAvatar 
            avatar={currentPost.user_details.avatar} 
            username={currentPost.user_details.username} 
          />
          <UserInfos publication={currentPost} navigateProfile isPostPage />
          <MoreButton postId={currentPost.id} />
        </S.PostHeader>
        {popUp.isOpen && popUp.postId === currentPost.id && (
          <PostPopUp 
            post={currentPost} 
            isPostUser={isPostUser} 
            isRepost={isRepost}
            isAnnexPostUser={isAnnexPostUser}
            originalPost={isRepost ? currentPost.original_post : null}
          />
        )}
        {currentPost.content &&
          <S.Content>{currentPost.content}</S.Content>
        }
        {currentPost.post_type === 'quote' &&
          <Quote publication={currentPost.original_post as Post} />
        }
        {isQuoteRepost &&
          <Quote publication={currentPost.original_post?.original_post as Post} />
        }
        <S.Time>{finalFormattedDate}</S.Time>
        <Interactions displayPost={currentPost}/>
        <S.FormComment onSubmit={formik.handleSubmit}>
          <S.TagReply>
            Respondendo a <span>{currentPost.user_details.username}</span>
          </S.TagReply>
          <SmallAvatar 
            avatar={user!.profile.avatar}
            username={user!.username}
          />
          <S.TextField 
            placeholder="Publique seu comentário" 
            maxLength={280}
            id="content" 
            name="content"
            onChange={handleInput}
            onBlur={formik.handleBlur}
            value={formik.values['content']}
          />
          <S.ButtonSubmit
            type="submit" 
            disabled={
              !formik.isValid || 
              !formik.dirty || 
              formik.isLoading
            }
            onClick={handleClickSubmit}
          >
            Comentar
          </S.ButtonSubmit>
        </S.FormComment>
      </S.PostContainer>
      {commentsLoading ? 
        <Loading /> :
        <PostList posts={commentsData!}/>
      }
    </S.ModCentralWrapper>
  );
};


export default Post;