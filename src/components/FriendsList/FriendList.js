import PropTypes from 'prop-types';
import { FriendListItem } from '../FriendListItem/FriendListItem';
import { FriendList } from './FriendListStyled';

export const Friends = ({ friends }) => {
  return (
    <FriendList>
      {friends.map(friend => {
        return (
          <FriendListItem key={friend.id} friend={friend} />
         );
      })}
    </FriendList>
  );
};

FriendList.propTypes = {
  friends: PropTypes.shape({
   })
};