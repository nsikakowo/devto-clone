import React, {useState, useEffect} from 'react'
import { FcHome } from 'react-icons/fc';
import postService from '../services/post-service'

const navLinks = ['Home', 'Listings', 'Podcast', 'Videos', 'Tags', 'FAQs', 'DEV Shop', 'Sponsor', 'About', 'Contact']


const LeftPanel = () => {
    const [tagData, settagData] = useState([]);

    async function getPostTags(){
        const resp = await postService.getTags(
        );

        if (resp) {
            const dataa = resp.details;
            // let sorted = dataa.slice(0, 25)
            console.log(dataa);
            settagData(dataa);
            
        } else if(!resp) {
            console.log("error")
        }
    }

    useEffect(() => {
        getPostTags()
    }, [])


    return (
        <main className="left_panel_wrapper">
            <div className="community">
                <h4>
                    <span>
                    DEV Community  &nbsp;
                    </span>
                     is a community of 803,838 amazing developers
                    
                </h4>
                <p className='com_gist'>We're a place where coders share, stay up-to-date and grow their careers.</p>
                <p className="create_account"> Create Account</p>
                <p className="login">Log in</p>
            </div>
            <div className="navigation">
                {navLinks.map(item => <p key={item + 1} className='nav_list_item'><span><FcHome/></span>{item} </p>)}
                
            </div>

                <h5 style={{padding:"10px 15px"}}>Popular Tags</h5>
            <div className="pop_tags navigation">
                {tagData.map(tagItem => <p key={tagItem.id} className='nav_list_item'>#{tagItem.name}</p>)}
                
            </div>
        </main>
    )
}

export default LeftPanel
