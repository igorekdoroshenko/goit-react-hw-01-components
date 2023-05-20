import PropTypes from 'prop-types'
import {
  ProfileWrap,
  Description,
  Avatar,
  Name,
  Tag,
  Location,
  Stats,
  Label,
  Quantity,
} from './Profile.styled';

export default function Profile({ username, tag, location, avatar, stats }) {
    return (
        <ProfileWrap>
            <Description>
                <Avatar
                    src={avatar}
                    alt={username}
                    className="avatar"
        
                />
                <Name className="name">{username}</Name>
                <Tag className="tag">@{tag}</Tag>
                <Location className="location">{location}</Location>
            </Description>

            <Stats className="stats">
                <li>
                    <Label>Followers</Label>
                    <Quantity>{stats.followers}</Quantity>
                </li>
                <li>
                    <Label>Views</Label>
                    <Quantity>{stats.views}</Quantity>
                </li>
                <li>
                    <Label>Likes</Label>
                    <Quantity>{stats.likes}</Quantity>
                </li>
            </Stats>
        </ProfileWrap>
    );
};

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired
    })
} 