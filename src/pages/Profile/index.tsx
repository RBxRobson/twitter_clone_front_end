import { useParams } from 'react-router-dom';

import { useGetUserQuery } from '../../services/api';
import * as S from './styles';
import { Loading } from '../../components/common';
import { ProfileContent, ProfileFeed, ProfileHeader, ProfileHero } from '../../components/profileComponents';

const Profile = () => {
  const { username } = useParams();
  const { data: userData, isLoading: userLoading, isError } = useGetUserQuery(username!);

  if (userLoading && !userData) { 
    return (
      <S.CentralWrapper>
        <Loading  />
      </S.CentralWrapper>
    );
  };

  if (isError) {
    return (
      <S.CentralWrapper>
        <h2>Esse usuário não existe</h2>
      </S.CentralWrapper>
    );
  }

  return (
    <S.CentralWrapper>
      <ProfileHeader name={userData!.name} />
      <ProfileHero user={userData!}/>
      <ProfileContent user={userData!}/>
      <ProfileFeed />
    </S.CentralWrapper>
  );
};

export default Profile;