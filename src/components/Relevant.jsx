import React from 'react'
import { RiHeart2Line } from 'react-icons/ri';
import { FaRegComment } from 'react-icons/fa';


const Relevant = ({title, link, name, image, date, tags, reactCount, commentCount, readTime}) => {
    return (
        <article className="article_tab">
            <div className="userInfo">
                <div className="userImage">
                    <img src={image} alt="profile" />
                </div>
                <div className="username">
                    <p className="name">{name}</p>
                    <p className="date"> {date}</p>
                </div>
            </div>
            <h2 className="post_title">
                <a href={link} target="_blank" rel="noreferrer">
                  {title}
                </a>
                
            </h2>
            <div className="post_tags">
                <span>{tags}</span>
            </div>

            <div className="post_details">
                <div className="reactions">
                    <p className="love"><span><RiHeart2Line/></span> {reactCount} reactions</p>
                    <p className="comments"> <span><FaRegComment/></span> {commentCount} Comments</p>
                </div>
                <div className="save_tab">
                    <p className="time">{readTime} minutes</p>
                    <p className="save_btn">Save</p>
                </div>
            </div>

        
        </article>
    )
}

export default Relevant
