import React from 'react';


const Projects = () => {
    return (
        <div className="Projects">
            <p><b>Manager App</b> - https://github.com/aisayo/managers-app<br/>
            A React Native app built for both Android and IOS platforms, helping managers keep track of their staff schedules and hours<br/>
            + Built management app using Expo platform<br/>
            + Utilized Firebase for database and authentication<br/>
            + Integrated React Natives Scene component to navigate between screens<br/>
            + Used Redux framework for sending and receiving data to API, and setting Apps components state</p><br/>

            <p><b>Book Notes</b> - https://github.com/aisayo/react | https://vimeo.com/251230154<br/>
            A React JS application built to help students keep track of all their reading notes.<br/>
            + Integrated ‘rack-cors’ gem to connect React JS front end to Rails API back end<br/>
            + Utilized Redux framework for all API calls and state management<br/>
            + Imported Thunk middleware for action to reducer functionality<br/>
            + Structured app for CRUD capabilities</p><br/>

            <p><b>BookClub</b> - https://github.com/aisayo/bookclub | https://bookclubheroku.herokuapp.com/<br/>
            A Ruby on Rails with jQuery app that allows book lovers to keep track and communicate their favorite books<br/>
            + Incorporated Omniauth for Facebook login functionality<br/>
            + Used ActiveRecord and PostgreSQL to design and populate a database<br/>
            + Added interactive browsing capabilities using AJAX and jQuery<br/>
            + Deployed to Heroku to allow users to demo app</p>
        </div>
    )
}

export default Projects;