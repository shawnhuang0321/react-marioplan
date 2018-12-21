import React from 'react'

// react-router
import { Redirect } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';
import { compose } from 'redux';

// firebase
import { firestoreConnect } from 'react-redux-firebase';

// moment
import moment from 'moment';

const ProjectDetail = (props) => {
  const { project, auth } = props;
  if (!auth.uid) {
    return <Redirect to='/signin' />
  }
  if (project) {
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{project.title}</span>
            <p>{project.content}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>Posted by {project.authorFirstName} {project.authorLastName}</div>
            <div>{ moment(project.createdAt.toDate()).startOf().fromNow() }</div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="container center">
        <p>Loading project...</p>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;
  const { projects } = state.firestore.data;
  const project = projects ? projects[id] : null;
  return {
    project: project,
    auth: state.firebase.auth,
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects' },
  ])
)(ProjectDetail);