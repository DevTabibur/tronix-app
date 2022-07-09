import React from 'react';
import './Profile.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle, faTwitter  } from "@fortawesome/free-brands-svg-icons";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase/firebase.init';
import { Navigate, useNavigate } from 'react-router-dom';

const Profile = () => {
    const navigate = useNavigate()
    const [user] = useAuthState(auth);
    const {displayName, email, photoURL} = user;
// console.log(user)

    return (
        <>
            <div className="container mx-auto px-4">
                <div className="flex justify-center items-center">
                    <div className="card bg-red-200">
                        {photoURL && <div className="img">
                            <img src={photoURL} alt="avatar"/>
                        </div>}
                        <div className="infos">
                            <div className="name">
                                <h2>{displayName}</h2>
                                <h4>{email}</h4>
                            </div>
                            <p className="text">
                                Please Update Your BIO..
                            </p>

                            {/* <ul className="social">
                                <li>
                                li
                                    <FontAwesomeIcon icon={faFacebookF}/>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faGoogle}/>
                                </li>
                            </ul> */}

                            <div className="links md:flex">
                                <button className="follow">Update Profile</button>
                                <button className="view ">Update Address</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile;