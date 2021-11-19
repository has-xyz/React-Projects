import React, {useState} from 'react';
import Navbar from './Navbar';
import LoggedInNavbar from './LoggedInNavbar';
import InterviewComp from './InterviewComp';

const FrontPage = () => {
  const [loggedIn, setLoggedIn] = useState(false);

    return (
        <div>
        <section class="hero is-dark is-small">
        <div class="hero-head">
        {!loggedIn && (
            <Navbar setLoggedIn={setLoggedIn}/>
        )}

        {loggedIn && (
            <LoggedInNavbar setLoggedIn={setLoggedIn}/>
        )}


        </div>

        <div class="hero-body">
          <div class="container has-text-centered">
            <InterviewComp />
          </div>
        </div>
      </section>
        </div>
    )
}

export default FrontPage
