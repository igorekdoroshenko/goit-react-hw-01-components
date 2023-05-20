import PropTypes from 'prop-types'
import {
  Item,
  Status,
  Avatar,
  Name
} from './friendListItem.styled'

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Item>
      <Status statusType={isOnline}></Status>
      <Avatar src={avatar} alt="User avatar" width="48" />
      <Name className="name">{name}</Name>
    </Item>
  );
};

export default FriendListItem;

FriendListItem.prototype = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired
}