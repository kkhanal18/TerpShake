import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Moment from "react-moment";
import { deleteComment } from "../../actions/post";

const CommentItem = ({
  postId,
  comment: { _id, text, name, avatar, user, date },
  auth,
  deleteComment,
  avatar_link
}) => (
  <div className="post">
    <div>
      <p className="post-date">
        Posted on <Moment format="YYYY/MM/DD">{date}</Moment>
        <br />
        By <Link to={`/profile/${user}`}>{name}</Link>
      </p>
    </div>

    <div>
      <p>
        {text}

        {!auth.loading && user === auth.user._id && (
          <span>
            {" "}
            <button
              onClick={() => deleteComment(postId, _id)}
              type="button"
              className="btn btn-sm btn-danger"
            >
              <i className="fas fa-times" />
            </button>
          </span>
        )}
      </p>
    </div>
  </div>
);

CommentItem.propTypes = {
  postId: PropTypes.string.isRequired,
  comment: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deleteComment: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { deleteComment }
)(CommentItem);
