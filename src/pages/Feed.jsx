import { useState, useEffect } from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { MdDelete, MdEdit } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import Navbar from '../component/Navbar';


const Feed = () => {

    const navigate = useNavigate(); 

    const [ posts, setPosts ] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{

        axios.get("https://notes-backend-five-phi.vercel.app/posts")
        .then((res)=>{

            console.log("API POSTS:", res.data.posts)
            setPosts(res.data.posts)

        })
        .finally(() => {
            setLoading(false);
        })
        
    },[])

    const handleAdd = () => {
        navigate("/create-post")

        console.log(handleAdd)
    }

    const handleDelete = async (id) => {
        await axios.delete(`https://notes-backend-five-phi.vercel.app/posts/${id}`)  

        setPosts((prevPosts)=>{
           return prevPosts.filter((post)=> post._id !== id )
        })
    
    }

    const handleUpdate = (id) => {

        console.log("EDIT ID", id)
        const post = posts.find((post) => post._id === id);

        console.log("EDIT ID", post)
    
        navigate("/create-post", {
            state: {
                post: post
            }
        });
    }
    

    return (
        <>
        <Navbar />

        <section className='feed-section' >

        <div className='feed-div'>

            { loading ? (
                <h1>Loading...</h1>
            ) :
                posts.length > 0 ? (
                    posts.map((post) => (
                        <div key={post._id} className='post-card' >
                            <img src={post.image} alt={post.caption} />
                          <div className="desc-cont">
                            <div className='post-content'>
                            <h2 className='post-caption'>{post.caption}</h2>
                            <p className='post-desc'>{post.description}</p>
                            </div>
                            <div className="btn-cont">
                            <button className='edit-btn' onClick={() => handleUpdate(post._id)}>
                                <MdEdit/>
                            </button>
                            <button className='delete-btn' onClick={() => handleDelete(post._id)}>
                                <MdDelete/>
                            </button>
                            </div>
                          </div>  
                        </div>
                    ))
                ) : (
                    <h1>No posts</h1> 
                )
            }
        </div>


        <div className='feed-btn'>
                <button className='add-btn-feed' onClick={handleAdd}><FaPlus/></button>
           </div>
        </section>

    </>
    )
}

export default Feed