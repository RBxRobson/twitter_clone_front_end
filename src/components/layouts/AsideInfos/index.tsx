import * as As from '../../asideInfosComponents';
import { InfosBar } from '../../common';
import * as S from './styles';

const infosLinks = [
  'Termos de serviço',
  'Política de privacidade',
  'Política de cookies',
  'Acessibilidade',
  'Informações de anúncios',
  'Mais...',
  '© 2025 X Corp.'
];

const AsideInfos = () => {
  return (
    <S.AsideInfos>
      <As.WhoToFollow />
      <InfosBar links={infosLinks}/>
    </S.AsideInfos>
  );
};

export default AsideInfos;
