import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { 
  openQuoteModal, 
  openCommentModal 
} from '../../../store/reducers/publicationModal';
import { 
  useCreatePostMutation, 
  useDeletePostMutation, 
  useLikePostMutation 
} from '../../../services/api';
import { MoreIcon } from '../../../assets/images';
import { SmallAvatar } from '../../common';
import { 
  Content,
  Interaction,
  PostPopUp,
  Quote,
  RepostWarning
} from '../';
import * as S from './styles';

type InteractionType = {
  action: 'Curtir' | 'Comentar' | 'Repostar' | 'Citar';
};

type Props = {
  post: Post; 
  user: User; 
}

const PostItem = ({ post, user }: Props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [likePost] = useLikePostMutation();
  const [createPost] = useCreatePostMutation();
  const [deletePost] = useDeletePostMutation();
  const [isOpenPopUp, setIsOpenPopUp] = useState(false);
  
  const isRepost = post.post_type === 'repost' && post.original_post !== null;
  const displayPost = isRepost ? post.original_post! : post;
  
  const [likeCount, setLikeCount] = useState(displayPost.likes_count);
  const [isLiked, setIsLiked] = useState(displayPost.is_liked);
  const [repostCount, setRepostCount] = useState(displayPost.reposts_count);
  const [isReposted, setIsReposted] = useState(displayPost.is_reposted !== false);
  const isPostUser = 
    user?.id === post.user_details.id && !isRepost;
  const isAnnexPostUser = 
    post.original_post !== null && 
    post.original_post.user_details.id === user?.id;
  
  const isQuoteRepost = isRepost && post.original_post?.post_type === 'quote';
  
  useEffect(() => {
    setLikeCount(displayPost.likes_count);
    setIsLiked(displayPost.is_liked);
  }, [displayPost.likes_count, displayPost.is_liked]);
  
  const handleInteractionClick = async (action: InteractionType['action'], e: React.MouseEvent) => {
    e.stopPropagation();
  
    if (action === 'Curtir') {
      setIsLiked(!isLiked);
      setLikeCount((prev) => (isLiked ? prev - 1 : prev + 1));
      likePost(displayPost.id);
    } else if (action === 'Repostar') {
      if (isReposted) {
        await deletePost(displayPost.is_reposted).unwrap();
        setIsReposted(false);
        setRepostCount((prev) => prev - 1);
      } else {
        await createPost({ post_type: 'repost', original_post: displayPost.id }).unwrap();
        setIsReposted(true);
        setRepostCount((prev) => prev + 1);
      }
    } else if (action === 'Citar') {
      dispatch(openQuoteModal(displayPost));
    } else {
      dispatch(openCommentModal(displayPost));
    }
  };

  
  return (
    <S.PostContainer
      key={post.id}
      onClick={() => navigate(`post/${displayPost.id}`)}
      className={isRepost ? 'is-repost' : ''}
    >
      <S.MoreButton 
        type="button" 
        onClick={
          (e) => {
            e.stopPropagation();
            setIsOpenPopUp(true);
          }
        } 
      >
        <img src={MoreIcon} alt="Mais" />
      </S.MoreButton>
      {isOpenPopUp && (
        <>
          <PostPopUp 
            post={post} 
            isPostUser={isPostUser} 
            isRepost={isRepost}
            isAnnexPostUser={isAnnexPostUser}
            originalPost={isRepost ? post.original_post  : null}
          />
          <S.ClosePopUp 
            onClick={
              (e) => {
                e.stopPropagation();
                setIsOpenPopUp(false);
              }
            } 
          />
        </>
      )}
      <S.WrapperContent>
        <SmallAvatar postUser={displayPost.user_details} />
        {isRepost && <RepostWarning username={post.user_details.username} />}
        <Content post={displayPost}>
          <>
            {post.post_type === 'quote' && <Quote publication={post.original_post as Post} />}
            { 
              isQuoteRepost && <Quote publication={post.original_post?.original_post as Post} />
            }
          </>
        </Content>
      </S.WrapperContent>
      <S.PostInteractions>
        <Interaction
          title="Comentar"
          classInteraction="comment-icon"
          count={displayPost.comments_count}
          handleClick={(e) => handleInteractionClick('Comentar', e)}
        />
        <Interaction
          title="Repostar"
          classInteraction={`${isReposted ? 'repost-icon-active' : ''} repost-icon`}
          count={repostCount}
          handleClick={(e) => handleInteractionClick('Repostar', e)}
        />
        <Interaction
          title="Curtir"
          classInteraction={`${isLiked ? 'like-icon-active' : ''} like-icon`}
          count={likeCount}
          handleClick={(e) => handleInteractionClick('Curtir', e)}
        />
        <Interaction
          title="Citar"
          classInteraction="quote-icon"
          count={displayPost.quotes_count}
          handleClick={(e) => handleInteractionClick('Citar', e)}
        />
      </S.PostInteractions>
    </S.PostContainer>
  );
};

export default PostItem;