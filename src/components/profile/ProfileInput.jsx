import React, { useRef } from 'react'

function ProfileInput(props) {
    const newPostText = useRef(null)
    const addPost = () => {
        const text = newPostText.current.value
        props.addPost(text)
    }

    return (
        <div className="col-span-2 h-[200px] w-[100%] px-2">
            <h3 className="text-lightGray text-l font-aboreto">My post</h3>
            <textarea
                className="w-[80%] font-josefin px-2 py-1 rounded-md h-[70px] resize-none"
                placeholder="write your post here, my friend"
                ref={newPostText}
            ></textarea>
            <button
                className="block py-3 px-6 bg-darkGreen text-lightGray rounded-md"
                onClick={addPost}
            >
                Send
            </button>
        </div>
    )
}

export default ProfileInput
