import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ProfileItem = ({
  profile: {
    user: { _id, name, avatar },
    status,
    company,
    location,
    skills
  }
}) => {
  return (
    <div>
      <div className="row">
        <div className="col-sm-auto">
          <img src={avatar} alt="" className="rounded" />
        </div>
        <div className="col-sm-auto">
          <h2>{name}</h2>
          {status}{" "}
          {company && (
            <span>
              {" "}
              at {company}
              <br />
            </span>
          )}
          {location && (
            <span>
              {location} <br />
            </span>
          )}
          <Link to={`/profile/${_id}`} className="btn btn-dark mt-2">
            View Profile
          </Link>
        </div>
        {/* <ul>
          {skills.slice(0, 4).map((skill, index) => (
            <li key={index} className="text-primary">
              <i className="fas fa-check" /> {skill}
            </li>
          ))}
        </ul> */}
      </div>
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;
