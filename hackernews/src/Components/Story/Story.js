import React, { useState, useEffect } from "react";
import { getStory } from '../../Services/hackernewsApi'
import './Story.css'

export const Story = ({storyId}) => {
    const [story, setStory] = useState({});

    useEffect(() => {
        getStory(storyId).then(data => data && data.url && setStory(data))
    })

    return story && story.url ? (
        <div class='storiesWrapper'>
        <a class='storyLink' href={story.url}>{story.title}</a>
        <p class='storyDetails'>{story.score} point by: {story.by} {story.time} </p>
        </div>
    ) : null
}