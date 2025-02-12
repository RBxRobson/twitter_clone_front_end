import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { RootReducer } from '../../../store';
import { useFetchCurrentUserQuery } from '../../../services/api';
import AsideNav from '../AsideNav';
import AsideInfos from '../AsideInfos';
import PublicationModal from '../../modals/PublicationModal';
import * as S from './styles';

type LayoutProps = {
  children: JSX.Element;
};

const LayoutMain = ({ children }: LayoutProps) => {
  const location = useLocation();
  const { user } = useSelector((state: RootReducer) => state.user);
  const { 
    isOpen: isOpenPublicationModal 
  } = useSelector((state: RootReducer) => state.publicationModal);

  useFetchCurrentUserQuery(undefined, {skip: Boolean(user)});

  const isRecommendationsRoute = location.pathname === '/recommendations';

  return (
    <S.MainContainer id="main">
      <AsideNav />
      {isOpenPublicationModal && (
        <PublicationModal />
      )}
      {children}
      {!isRecommendationsRoute && <AsideInfos />}
    </S.MainContainer>
  );
};

export default LayoutMain;
