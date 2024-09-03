import React, {useState} from "react";


export default function PostForm({addPost,updateNewPost}) {

    const [imageUrl, setImageUrl] = useState('');
    const [caption, setCaption] = useState('');

    function submitHandler(e) {
        e.preventDefault();
       
        addPost({  imageUrl, caption, likes: 0 });
        setImageUrl('');
        setCaption('');
        updateNewPost();
        
    }


    return (
        <div>
            <form onSubmit={submitHandler} className="form-container">
                <h1>Instagram Clone</h1>
                <div className="form-group">
                    <label htmlFor="imageUrl"> Image URL </label>
                    <input id="imageUrl" value={imageUrl} onChange={(e)=>{setImageUrl(e.target.value)}} type="text" className="form-control"/>
                </div>

                <div className="form-group">
                    <label htmlFor="caption"> Caption </label>
                    <input id="caption" value={caption} onChange={(e)=>{setCaption(e.target.value)}} type="text" className="form-control"/>
                </div>

                <button className="btn btn-primary" type="submit">Upload Post</button>
            </form>
        </div>

    )

}