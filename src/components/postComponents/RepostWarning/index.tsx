import * as S from './styles';
import { RepostIcon } from '../../svgComponents';

type Props = {
  username: string;
};

const RepostWarning = ({ username }: Props) => {
  return (
    <S.RepostWarning>
      <RepostIcon/>
      <a href={`/profile/${username.replace('@', '')}`}>{username}</a> repostou
    </S.RepostWarning>
  );
};

export default RepostWarning;
