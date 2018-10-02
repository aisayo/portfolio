import React from 'react'

const Project = (props) => {
    return (
      <div>
         { props.projecttitle } 
         { props.projectimage }
         { props.projectdescr }
         { props.githublink }
         { props.demo }
      </div>
    )
}

export default Project;