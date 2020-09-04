import React from 'react'
import {useDispatch} from "react-redux"
import {reactionAdded} from '../posts/postsSclice'

const reactionEmoji = {
    thumbsUp: '👍',
    hooray: '🎉',
    heart: '❤️',
    rocket: '🚀',
    eyes: '👀',
}

const ReactionButtons = ({post}) => {
    const dispatch = useDispatch();

    const reactionButtons = Object.entries(reactionEmoji).map(
        ([name, emoji]) => {
            return (
                <button
                    key={name}
                    type="button"
                    className="muted-button reaction-button"
                    onClick={() => dispatch(reactionAdded(post.id, name))}
                    >
                    {emoji} {post.reactions[name]}
                </button>
            )
        }
    )

    return <div>{reactionButtons}</div>
}

export default ReactionButtons;