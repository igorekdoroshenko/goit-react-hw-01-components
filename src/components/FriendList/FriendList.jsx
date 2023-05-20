import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import {
  FriendListWrap
} from './friendList.styled'

export default function FriendList({ friends }) {
  return (
    <FriendListWrap>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </FriendListWrap>
  );
}

FriendList.prototype = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
