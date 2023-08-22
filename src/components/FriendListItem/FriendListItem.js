import PropTypes from 'prop-types';
import { FriendStatus, 
  FriendItem, FriendName, FriendIcon } from './FriendListItemStyled';

export function FriendListItem({friend: { id, isOnline, avatar, name } }) {
  return (
    <FriendItem key={id}>
       <FriendStatus isOnline={isOnline}></FriendStatus>
      <FriendIcon src={avatar} alt={name} width="48" />
      <FriendName>{name}</FriendName>
    </FriendItem>
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