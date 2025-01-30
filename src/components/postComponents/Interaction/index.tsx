import { CommentIcon, LikeIcon, QuoteIcon, RepostIcon } from '../../svgComponents';
import * as S from './styles';

type InteractionType = {
  action: 'Curtir' | 'Comentar' | 'Repostar' | 'Citar';
};

type Props = {
  classInteraction: string;
  count: number;
  title: 'Curtir' | 'Comentar' | 'Repostar' | 'Citar';
  handleClick: (e: React.MouseEvent, { action }: InteractionType ) => void;
};

const Interaction = ({ 
  classInteraction, 
  count, 
  handleClick, 
  title
}: Props) => {
  const setIcon = () => {
    if (title === 'Citar') {
      return <QuoteIcon />;
    } else if (title === 'Repostar') {
      return <RepostIcon />;
    } else if (title === 'Comentar') {
      return <CommentIcon />;
    } else {
      return <LikeIcon />;
    }
  };

  return (
    <S.Interaction
      title={title}
      className={classInteraction}
      onClick={(e) => handleClick(e, {action: title})}
    >
      {setIcon()}
      <span>{count}</span>
    </S.Interaction>

  );
};

export default Interaction;
