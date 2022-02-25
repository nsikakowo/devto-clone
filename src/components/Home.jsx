import React, {useState, useEffect} from 'react'
import './home.css'
import Relevant from './Relevant'
import postService from '../services/post-service'
import moment from 'moment'
import LeftPanel from './LeftPanel'
import RightPanel from './RightPanel'


const Home = () => {
    const [postData, setpostData] = useState([]);

    async function getPosts(){
        const resp = await postService.getPost(
        );

        if (resp) {
            const dataa = resp.details;
            let sorted = dataa.slice(0, 25)
            console.log(sorted);
            setpostData(sorted);
            
        } else if(!resp) {
            console.log("error")
        }
    }
    

    useEffect(() => {
        getPosts();
    }, [])

    return (
        <section className="app_wrapper">
            <div className="dev_tags">
                <LeftPanel/>
            </div>
            <div className="dev_main_articles">
                {postData.map(post => {
                    
                    return (
                        <Relevant
                            key ={post.id}
                            title ={post.title}
                            link = {post.canonical_url}
                            name = {post.user.name}
                            date = {moment(post.created_at).format('MMM D')}
                            reactCount = {post.public_reactions_count}
                            commentCount={post.comments_count}
                            readTime={post.reading_time_minutes}
                            image={post.user.profile_image}
                            tags = {
                                post.tag_list.map(item => {
                                    return <span>#{item}</span>
                                })
                            }
                        
                        />
                    )
                })}
                
            </div>
            <div className="dev_gist">
                <RightPanel/>
            </div>
        </section>
    )
}

export default Home
