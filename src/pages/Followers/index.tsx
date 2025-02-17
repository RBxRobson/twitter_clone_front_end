import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { BackIcon } from '../../assets/images';
import { ButtonHeaderBlur, Loading, UsersList } from '../../components/common';
import { useListFollowingQuery, useListFollowersQuery } from '../../services/api';
import { RootReducer } from '../../store';
import { setIsFollowers } from '../../store/reducers/followers';
import * as S from './styles';

const Followers = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { isFollowers, targetUser } = useSelector((state: RootReducer) => state.isFollowers);
  const username = location.pathname.split('/')[2]; 

  const { data: followingData, isLoading: followingLoading } = useListFollowingQuery(username, { skip: isFollowers });
  const { data: followersData, isLoading: followersLoading } = useListFollowersQuery(username, { skip: !isFollowers });

  const isLoading = followingLoading || followersLoading;
  const noFollowing = !followingLoading && followingData?.length === 0;
  const noFollowers = !followersLoading && followersData?.length === 0;

  return (
    <S.CentralWrapper>
      <S.Header>
        <S.FlexContainer>
          <S.BtnBack onClick={() => navigate(-1)} title="Voltar para página anterior">
            <img src={BackIcon} alt="Ícone de voltar" />
          </S.BtnBack>
          <S.Title>
            {targetUser?.name}
            <span>{targetUser?.username}</span>
          </S.Title>
        </S.FlexContainer>
        <S.FlexContainer>
          <ButtonHeaderBlur 
            handleClick={() => dispatch(setIsFollowers(true))}
            isActive={isFollowers}
            textButton="Seguidores"
          />
          <ButtonHeaderBlur 
            handleClick={() => dispatch(setIsFollowers(false))}
            isActive={!isFollowers}
            textButton="Seguindo"
          />
        </S.FlexContainer>
      </S.Header>
      {isLoading ? (
        <Loading />
      ) : noFollowers && isFollowers ? (
        <S.Warning>{targetUser?.name} ainda não tem seguidores.</S.Warning>
      ) : noFollowing && !isFollowers ? (
        <S.Warning>{targetUser?.name} ainda não segue outros usuários.</S.Warning>
      ) : (
        <UsersList users={isFollowers ? followersData! : followingData!} />
      )}
    </S.CentralWrapper>
  );
};

export default Followers;
