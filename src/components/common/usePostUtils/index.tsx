import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { setPost } from '../../../store/reducers/currentPost';

export function usePostUtils(post: Post | null, user?: User | null) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isRepost = post?.post_type === 'repost' && post.original_post !== null;
  const displayPost = isRepost ? post.original_post! : post;

  const isPostUser = useMemo(() => user?.id === post?.user_details.id && !isRepost, [user, post, isRepost]);
  const isAnnexPostUser = useMemo(() => post?.original_post !== null && post?.original_post.user_details.id === user?.id, [post, user]);
  const isQuoteRepost = useMemo(() => isRepost && post.original_post?.post_type === 'quote', [isRepost, post]);

  const handleClickPost = () => {
    dispatch(setPost(displayPost ? displayPost : null));
    navigate(`/posts/${displayPost?.id}`);
  };

  return {
    isRepost,
    displayPost,
    isPostUser,
    isAnnexPostUser,
    isQuoteRepost,
    handleClickPost,
  };
}
