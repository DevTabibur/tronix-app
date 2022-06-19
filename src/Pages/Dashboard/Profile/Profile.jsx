import React from 'react';
import './Profile.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle, faTwitter  } from "@fortawesome/free-brands-svg-icons";

const Profile = () => {
    return (
        <>
            <div className="container mx-auto px-4">
                <div className="flex justify-center items-center">
                    <div className="card bg-red-200">
                        <div className="img">
                            <img src="https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGZhY2V8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                        </div>
                        <div className="infos">
                            <div className="name">
                                <h2>Bradley Steve</h2>
                                <h4>@bradsteve</h4>
                            </div>
                            <p className="text">
                                I'm a Front End Developer, follow me to be the first
                                who see my new work.
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
                                <button className="follow">Follow</button>
                                <button className="view ">View profile</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile