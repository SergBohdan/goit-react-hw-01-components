import PropTypes from 'prop-types';
import {FriendList} from './FriendListStyled';
import {FriendItem} from './FriendListStyled';
import {FriendStatus} from './FriendListStyled';
import {FriendIcon} from './FriendListStyled';
import {FriendName} from './FriendListStyled';

export const Friends = ({ friends }) => {
  return (
    
      <FriendList>
      {friends.map(({ avatar, name, isOnline, id }) => (
      <FriendItem key={id}>
        <FriendStatus isOnline={isOnline}></FriendStatus>
        <FriendIcon src={avatar} alt={name} width="48" />
        <FriendName>{name}</FriendName>
      </FriendItem>
    ))}
    </FriendList>
    
  );
};

Friends.propTypes = {
  friend: PropTypes.shape({
    id: PropTypes.number,
    isOnline: PropTypes.bool,
    avatar: PropTypes.string,
    name: PropTypes.string,
  }),
};