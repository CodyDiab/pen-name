import React,{useState} from 'react';
import { Redirect, useParams } from 'react-router-dom'; //Redirect,
import ProfilePostList from '../components/ProfilePostList';
import { useQuery, useMutation} from '@apollo/react-hooks';
import { QUERY_USER,QUERY_ME} from '../utils/queries';
import { ADD_FOLLOWER,ADD_ABOUT} from '../utils/mutations';
import FollowerList from '../components/FollowerList';
import PostForm from '../components/PostForm';
import Auth from '../utils/auth';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faBookReader } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Profile = () => {
  
  const [addFollower] = useMutation(ADD_FOLLOWER);
  const {username: userParam} = useParams();
  const { loading, data} = useQuery( userParam ? QUERY_USER : QUERY_ME, {
    variables: {username: userParam}
  });

  //modal handler ////////////////////////////////////////////////
  // const [formState, setFormState] = useState({ aboutText:''});
  const [modalOpen, setModalOpen] = useState()
  const [aboutText,setText] = useState('')
  const [addAbout, { error }] = useMutation(ADD_ABOUT) 
  

  const handleChange = event => {
   
    setText(event.target.value)
    console.log(aboutText);
   
    // setFormState({
    //   ...formState,
    //   [name]: value,
    // });
    // console.log(formState)
  };

  const handleAboutFormSubmit = async event => {
    event.preventDefault();
     
    try {
      
        await addAbout({
        variables:aboutText
      });
    } catch (e) {
      console.error(e);
    }
    setModalOpen(false)
    console.log(aboutText)
    console.log(data)
  };
  ////////////////////////////////////////////////////////////////
  
  const user = data?.me||data?.user || {};
  
  
//   // redirect to personal profile page if username is the logged-in user's
//if (Auth.loggedIn() && Auth.getProfile().data.username.toLowerCase() === userParam.toLowerCase()) {
if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
  return <Redirect to="/profile" />;
}

  if(loading) {
    return <progress className="progress is-medium is-dark" max="100">Loading</progress>
  }
  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to see this page. Use the navigation links above to sign up or log in!
      </h4>
    );
  }

  const handleClick = async () => {
    try{
      await addFollower({
        variables: {id:user._id}
      });
    } catch (e) {
      console.error(e)
    }
  };

  return (
    <div>
    <section className="section">
      <div className="container py-4">
        
          <h2 className="title has-text-centered mb-6" style={{ color: '#D0B8B3' }}>
          Viewing {userParam ? `${user.username}'s`: 'your'} profile
         </h2>
    
        
      <div className="columns">
        <div className="column is-6">
         {!user.aboutText? (
            <h4 className="title is-spaced is-4" style={{ color: '#D0B8B3' }}>
            About{userParam ? ` ${user.username}`: ' me'}
            <section>
           {userParam ? <p></p> : <button className="button" onClick={() => setModalOpen(true)}>Add About</button>}
           </section>
          </h4>
           
         ):(
           <>
          <h4 className="title is-spaced is-4" style={{ color: '#D0B8B3' }}>
          About {userParam ? ` ${user.username}`: ' me'}
          </h4>
<<<<<<< HEAD
          <p className="subtitle about">{user.about}Farm-to-table pitchfork shaman bespoke williamsburg artisan vexillologist, lo-fi mlkshk four dollar toast chia hexagon art party drinking vinegar dreamcatcher. Literally meh gentrify taxidermy, 90's knausgaard butcher. Humblebrag art party pabst hella. Next level actually health goth, tacos air plant microdosing twee vexillologist portland fam. Marfa pork belly beard next level tbh slow-carb pug. Paleo selfies fanny pack la croix, farm-to-table chia post-ironic XOXO yuccie put a bird on it distillery.</p> 
        
       
        
=======
          <p className="subtitle">{user.aboutText}</p> 
          {!userParam? <p></p> :
           <button className="button" onClick={() => setModalOpen(true)}>Edit About</button> }
           </>
         )
        }
         
>>>>>>> user-about
        
        <div>

          <div className="media">
            <div className="media-left"><figure className=""><FontAwesomeIcon icon={faEnvelope} size="lg" alt="Email" style={{ color: '#D0B8B3'}}/></figure></div>
              <div className="media-content">
                <div className="content">
                  
                  <a href={`mailto:${user.email}`} className="email">{user.email}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      
      <div className="column is-5 is-offset-1 follow">
      {userParam && (
        <button className="button is-inverted is-outlined mb-5" onClick={handleClick}>
          <span className=" pr-3"><FontAwesomeIcon icon={faBookReader} size="" alt="Follow"></FontAwesomeIcon></span>
          <span>Follow</span>
       </button>
       )}
      <div className="col-12 col-lg-3 mb-1">
          <FollowerList
            username={user.username}
            followerCount={user.followerCount}
            followers={user.followers}
          />
          {/* <form action="/charge" method="POST">
            <script
              src="https://checkout.stripe.com/checkout.js" class="stripe-button"
              data-key="{{stripePublishableKey}}"
              data-amount="1000"
              data-name="Hire Writer"
              data-description="Personal Writer"
              data-image="/img/marketplace.png"
              data-locale="auto">
            </script>
            <script>
              document.getElementsByClassName('stripe-button-el')[0].style.display = 'none';
            </script>
            <button type="submit" className='button is-normal'>Hire For $10</button>
          </form> */}
          
          </div>

      </div>
      </div>
      </div>
      </section>
      <div className="flex-row justify-space-between mb-3">
        <div className="col-12 mb-3 col-lg-8" >
          <ProfilePostList posts={user.posts} title={`${user.username}'s posts`}/>
        </div>

        
      </div>
      {/* about text modal */}
      <div className={`modal ${modalOpen && 'is-active'}`}>
         <div className="modal-background"></div>
           <div className="modal-card">
             <header className="modal-card-head">
                  <p className="modal-card-title">Edit About</p>
                  
                   </header>
                    <form className="modal-card-body" onSubmit={handleAboutFormSubmit}>
                    <textarea
                      className="textarea" 
                      rows="10"
                      name="aboutText"
                      value={aboutText}
                      onChange={handleChange}
                      >About text</textarea>
                      <button className="button is-success" type="submit">Save changes</button>
                  </form>
                 <footer className="modal-card-foot">
                 
               <button className="button" onClick={() => setModalOpen(false)} >Cancel</button>
               </footer>
         </div>
     </div>

    </div>
    

  );
};

export default Profile;