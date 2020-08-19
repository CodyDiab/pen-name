import React from "react";
import {Feed} from 'semantic-ui-react'
import { useQuery } from '@apollo/react-hooks';
// import Auth from '../utils/auth';
import SubNav from '../components/SubNav'



const MainFeed = () => {
    // const loggedIn = Auth.loggedIn();

    return(
    <>
    <SubNav/>
    <Feed>
      <Feed.Event>
      <Feed.Content>
        <Feed.Summary>
          <Feed.User>Author</Feed.User> follow
          <Feed.Date>1 Hour Ago</Feed.Date>
        </Feed.Summary>
      </Feed.Content>
      </Feed.Event>
    </Feed>
    </>
    )
}

export default MainFeed;
