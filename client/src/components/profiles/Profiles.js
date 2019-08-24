import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../tools/Spinner";
import { getProfiles } from "../../actions/profile";
import ProfileItem from "./ProfileItem";

const Profiles = ({ getProfiles, profile: { profiles, loading } }) => {
  useEffect(() => {
    getProfiles();
  }, [getProfiles]);
  return (
    <div className="mt-3">
      {loading ? (
        Spinner
      ) : (
        <Fragment>
          <h1>Terps</h1>
          <p>
            <i class="far fa-address-book" /> Browse and connect with UMD
            students and alumni
          </p>
          <div className="profiles">
            {profiles.length > 0 ? (
              profiles.map(profile => (
                <div>
                  <ProfileItem key={profile._id} profile={profile} />
                  <br />
                </div>
              ))
            ) : (
              <h4>No profiles found...</h4>
            )}
          </div>
        </Fragment>
      )}
    </div>
  );
};

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};
const mapStatetoProps = state => ({
  profile: state.profile
});

export default connect(
  mapStatetoProps,
  { getProfiles }
)(Profiles);
