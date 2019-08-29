import React from "react";
import PropTypes from "prop-types";

const ProfileTop = ({
  profile: {
    status,
    company,
    location,
    website,
    social,
    avatar_link,
    user: { name, avatar }
  }
}) => {
  return (
    <div class="profile-top p-2">
      <img className="avatar" src={avatar_link} alt="avatar" />
      <h1>{name}</h1>
      <p>
        {status} {company && <span>at {company}</span>}
      </p>
      <p>{location && <span>Located in {location}</span>}</p>
      <div>
        {website && (
          <a href={website} target="_blank" rel="noopener noreferrer">
            <i class="fas fa-globe fa-2x" />
          </a>
        )}
        <span />
        {social && social.twitter && (
          <a href={social.twitter} target="_blank" rel="noopener noreferrer">
            <i class="fab fa-twitter fa-2x" />
          </a>
        )}
        {/* <a href="#" target="_blank" rel="noopener noreferrer">
          <i class="fab fa-facebook fa-2x" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <i class="fab fa-linkedin fa-2x" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <i class="fab fa-youtube fa-2x" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <i class="fab fa-instagram fa-2x" />
        </a> */}
      </div>
    </div>
  );
};

ProfileTop.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileTop;
