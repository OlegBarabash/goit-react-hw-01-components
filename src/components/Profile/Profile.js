import PropTypes from 'prop-types';
import { Status } from 'components/Status/Status';
import {
  Container,
  Description,
  Avatar,
  Name,
  Tag,
  Location,
} from './Profile.styled';

export const Profile = ({
  usr: { username, tag, location, avatar, stats },
}) => {
  return (
    <Container>
      <Description>
        <Avatar src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <Tag>{'@' + tag}</Tag>
        <Location>{location}</Location>
      </Description>
      <Status stat={stats} />
    </Container>
  );
};

Profile.propTypes = {
  usr: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    location: PropTypes.string.isRequired,
    stats: PropTypes.object.isRequired,
  }).isRequired,
};
