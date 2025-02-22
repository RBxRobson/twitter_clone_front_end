import { useSelector } from 'react-redux';

import { MoreButton, SmallAvatar, usePostUtils } from '../../common';
import { RootReducer } from '../../../store';
import { 
  Content,
  Interactions,
  PostPopUp,
  Quote,
  RepostWarning
} from '../';
import * as S from './styles';

type Props = {
  post: Post; 
  user: User; 
}

const PostItem = ({ post, user }: Props) => {
  const { popUp } = useSelector((state: RootReducer) => state.currentPost);
  const { 
    displayPost, 
    handleClickPost, 
    isAnnexPostUser, 
    isPostUser, 
    isQuoteRepost, 
    isRepost
  } = usePostUtils(post, user);

  return (
    <S.PostContainer
      key={post.id}
      onClick={handleClickPost}
      className={isRepost ? 'is-repost' : ''}
    >
      <MoreButton postId={post.id}/>
      {popUp.isOpen && popUp.postId === post.id && (
        <PostPopUp 
          post={post} 
          isPostUser={isPostUser} 
          isRepost={isRepost}
          isAnnexPostUser={isAnnexPostUser}
          originalPost={isRepost ? post.original_post  : null}
        />
      )}
      <S.WrapperContent>
        <SmallAvatar 
          avatar={displayPost!.user_details.avatar} 
          username={displayPost!.user_details.username} 
        />
        {isRepost && <RepostWarning username={post.user_details.username} />}
        <Content post={displayPost!}>
          <>
            {post.post_type === 'quote' && <Quote publication={post.original_post as Post} />}
            { 
              isQuoteRepost && <Quote publication={post.original_post?.original_post as Post} />
            }
          </>
        </Content>
      </S.WrapperContent>
      <Interactions displayPost={displayPost!} />
    </S.PostContainer>
  );
};

export default PostItem;