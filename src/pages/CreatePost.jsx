import axios from "axios"
import { useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import Navbar from "../component/Navbar"


const CreatePost = () => {

    const navigate = useNavigate()
    const location = useLocation()

    const editPost = location.state?.post;

    const [caption, setCaption] = useState(editPost?.caption || "");
    const [description, setDescription] = useState(editPost?.description || "")

    const handleSubmit = async (e) => {
        e.preventDefault();

    try{
        if(editPost){  

          const formData = new FormData();

          formData.append("caption", caption);
          formData.append("description", description);

          const image = e.target.image.files[0];

          if(image){
            formData.append("image", image)
          }


          await axios.patch(`https://notes-web-app-wre5.vercel.app/posts/${editPost._id}`, formData)
                
        } else {

           const formData = new FormData(e.target)

          await axios.post("https://notes-web-app-wre5.vercel.app/create-post", formData);

        }
        navigate("/")
      } catch (error){
        alert("Post Not Create or Update");
        console.log(error)
      }
        
    }

    return (
      <>
      <Navbar />
        <section className='create-post-section' >
            <h1>{editPost ? "Edit Post" : "Add Post"}</h1>

            <form onSubmit={handleSubmit} >

              {editPost && editPost.image && (
                <img src={editPost.image} alt="Current" className="current-image"></img>
              )}
                <input type="file" name="image" accept="image/*" />
                <input type="text" value={caption} onChange={(e)=>setCaption(e.target.value)} name='caption' placeholder='Enter caption' required />
                <input type="text" value={description} onChange={(e)=>setDescription(e.target.value)} name='description' placeholder='Enter description' />
                <button type='submit'>{editPost ? "Update" : "Submit"}</button>

            </form>
        </section>
      </>
    )
}

export default CreatePost