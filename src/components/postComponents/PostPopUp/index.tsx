import { useDispatch } from 'react-redux';

import { 
  AddUSerIcon, 
  RemoveUserIcon, 
  TrashIcon, 
  EditIcon 
} from '../../../assets/images';
import { 
  useDeletePostMutation 
} from '../../../services/api';
import { openEditModal } from '../../../store/reducers/publicationModal';
import { useFollow } from '../../../components/common';
import * as S from './styles';

type Props = {
  post: Post;
  isPostUser: boolean;
  isRepost: boolean;
  isAnnexPostUser: boolean;
  originalPost: Post | null;
};

const PostPopUp = ({
  post, 
  isPostUser, 
  isRepost, 
  isAnnexPostUser,
  originalPost,
}: Props) => {
  const dispatch = useDispatch();
  const currentPost = originalPost && isRepost ? originalPost : post;
  const [deletePost, { isLoading: deleteLoading }] = useDeletePostMutation();
  const { followingState, loading, toggleFollow } = useFollow(currentPost.user_details.id, currentPost.is_following_author);

  const handleDeletePost = async () => {
    try {
      await deletePost(isAnnexPostUser ? originalPost?.id : post.id).unwrap();
    } catch {
      alert('Erro desconhecido ao deletar o post, tente novamente mais tarde.');
    }
  };
  
  const handleEditPost = () => {
    dispatch(openEditModal(originalPost || post));
  };

  const renderDeleteAndEditButtons = () => (
    <>
      <S.ButtonPopUp 
        type="button"
        onClick={handleDeletePost}
        className={deleteLoading ? 'loading' : ''}
      >
        <img src={TrashIcon} alt="Deletar" />
        <span className="delete">Deletar</span>
      </S.ButtonPopUp>
      <S.ButtonPopUp 
        type="button"
        onClick={handleEditPost}
      >
        <img src={EditIcon} alt="Editar" />
        <span>Editar</span>
      </S.ButtonPopUp>
    </>
  );

  const renderFollowButton = (username: string) => (
    <S.ButtonPopUp 
      type="button"
      onClick={toggleFollow}
      className={loading ? 'loading' : ''}
    >
      <img 
        src={followingState ? RemoveUserIcon : AddUSerIcon} 
        alt={followingState ? 'Parar de seguir' : 'Seguir'} 
      />
      {followingState ? 'Parar de seguir ' : 'Seguir '}
      <S.UsernameWrapper>
        <span>{username}</span>
      </S.UsernameWrapper>
    </S.ButtonPopUp>
  );

  const setButtons = () => {
    if (isPostUser && !isRepost) return renderDeleteAndEditButtons();

    if (!isPostUser) {
      if (!isRepost) return renderFollowButton(post.user_details.username);
      
      if (isAnnexPostUser) return renderDeleteAndEditButtons();

      if (isRepost && originalPost) {
        return renderFollowButton(originalPost.user_details.username);
      }
    }
    return null;
  };

  return <S.PostPopUp onClick={(e) => e.stopPropagation()}>{setButtons()}</S.PostPopUp>;
};

export default PostPopUp;
