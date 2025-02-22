import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { CommentIcon, LikeIcon, QuoteIcon, RepostIcon } from '../../svgComponents';
import { 
  useCreatePostMutation, 
  useDeletePostMutation, 
  useLikePostMutation 
} from '../../../services/api';
import { openCommentModal, openQuoteModal } from '../../../store/reducers/publicationModal';
import * as S from './styles';

type InteractionType = {
  action: 'Curtir' | 'Comentar' | 'Repostar' | 'Citar';
};

type Props = {
  displayPost: Post
};

const Interactions = ({ displayPost }: Props) => {
  const dispatch = useDispatch();
  const [likePost] = useLikePostMutation();
  const [createPost] = useCreatePostMutation();
  const [deletePost] = useDeletePostMutation();

  const [likeCount, setLikeCount] = useState(displayPost.likes_count);
  const [isLiked, setIsLiked] = useState(displayPost.is_liked);
  const [repostCount, setRepostCount] = useState(displayPost.reposts_count);
  const [isReposted, setIsReposted] = useState(displayPost.is_reposted !== false);

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
    <S.PostInteractions>
      <S.Interaction
        className="comment-icon"
        onClick={(e) => handleInteractionClick('Comentar', e)}
      >
        <CommentIcon />
        {displayPost.comments_count !== 0 &&
          <span>{displayPost.comments_count}</span>
        }
      </S.Interaction>
      <S.Interaction
        className={`${isReposted ? 'repost-icon-active' : ''} repost-icon`}
        onClick={(e) => handleInteractionClick('Repostar', e)}
      >
        <RepostIcon />
        {repostCount !== 0 &&
          <span>{repostCount}</span>
        }
      </S.Interaction>
      <S.Interaction
        className={`${isLiked ? 'like-icon-active' : ''} like-icon`}
        onClick={(e) => handleInteractionClick('Curtir', e)}
      >
        <LikeIcon />
        {likeCount !== 0 && 
          <span>{likeCount}</span>
        }
      </S.Interaction>
      <S.Interaction
        className="quote-icon"
        onClick={(e) => handleInteractionClick('Citar', e)}
      >
        <QuoteIcon />
        {displayPost.quotes_count !== 0 &&
          <span>{displayPost.quotes_count}</span>
        }
      </S.Interaction>
    </S.PostInteractions>
  );
};

export default Interactions;
