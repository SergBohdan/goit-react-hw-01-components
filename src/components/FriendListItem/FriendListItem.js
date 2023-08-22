import PropTypes from 'prop-types';
import { FriendStatus, 
 FriendCard, FriendName, FriendIcon } from './FriendListItemStyled';

export function FriendListItem({friend: { id, isOnline, avatar, name } }) {
  return (
    <FriendCard key={id}>
       <FriendStatus isOnline={isOnline}></FriendStatus>
      <FriendIcon src={avatar} alt={name} width="48" />
      <FriendName>{name}</FriendName>
    </FriendCard>
  );
}

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    id: PropTypes.number,
    isOnline: PropTypes.bool,
    avatar: PropTypes.string,
    name: PropTypes.string,
  }),
};