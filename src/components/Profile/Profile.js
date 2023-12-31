import PropTypes from 'prop-types';
import {ProfileContainer, ProfileWrapper, ProfileAvatar, 
  ProfileName, ProfileTag, ProfileLocation, StatList,
 StatItem, StatNumber} from './ProfileStyled';

export const Profile = ({ items }) => {
  return (
    <ProfileContainer>
      <ProfileWrapper>
        <ProfileAvatar src={items.avatar} alt={items.username} />
        <ProfileName>{items.username}</ProfileName>
        <ProfileTag>@{items.tag}</ProfileTag>
        <ProfileLocation>{items.location}</ProfileLocation>
      </ProfileWrapper>
      <StatList>
        <StatItem>
          <span>Followers</span>
          <StatNumber>{items.stats.followers}</StatNumber>
        </StatItem>
        <StatItem>
          <span>Views</span>
          <StatNumber>{items.stats.views}</StatNumber>
        </StatItem>
        <StatItem>
          <span>Likes</span>
          <StatNumber>{items.stats.likes}</StatNumber>
        </StatItem>
      </StatList>
    </ProfileContainer>
  );
};

Profile.propTypes = {
  items: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.objectOf(PropTypes.number.isRequired),
  }),
};
