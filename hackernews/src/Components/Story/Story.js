import React, { useState, useEffect } from "react";
import { getStory } from '../../Services/hackernewsApi'

export const Story = ({storyId}) => {
    const [story, setStory] = useState({});

    useEffect(() => {
        getStory(storyId).then(data => data && data.url && setStory(data))
    })

    return story && story.url ? (
        <>
        <a href={story.url}><p>{story.title}</p></a>
        <p>{story.score}</p> point by: <p>{story.by}</p> <p>{story.time}</p>
        </>
    ) : null
}