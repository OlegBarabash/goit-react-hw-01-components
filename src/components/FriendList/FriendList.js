import PropTypes from 'prop-types';
import {
  Status,
  FriendsList,
  FriendItem,
  Name,
  Avatar,
} from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendsList>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendItem key={id}>
          <Status $isOn={isOnline}></Status>
          <Avatar src={avatar} alt="User avatar" />
          <Name>{name}</Name>
        </FriendItem>
      ))}
    </FriendsList>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object),
};
