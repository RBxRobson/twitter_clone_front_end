import * as S from './styles';

const InfosLinks = [
  'Sobre',
  'Baixe o aplicativo do X',
  'Central de Ajuda',
  'Termos de Serviço',
  'Política de Privacidade',
  'Política de cookies',
  'Acessibilidade',
  'Informações de anúncios',
  'Blog',
  'Carreiras',
  'Recursos da marca',
  'Publicidade',
  'Marketing',
  'X para Empresas',
  'Desenvolvedores',
  'Diretório',
  'Configurações',
  '© 2025 X Corp',
];

const InfosBar = () => {
  return (
    <S.Nav>
      {InfosLinks.map((info, index) => (
        <a href='#' key={index}>
          {info}
        </a>
      ))}
    </S.Nav>
  );
};

export default InfosBar;