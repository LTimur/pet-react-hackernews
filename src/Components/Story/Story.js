import React, { useState, useEffect } from "react";
import { getStory } from '../../Services/hackernewsApi'
import './Story.css'
import { mapTime } from '../../Utils/MapTime'

export const Story = ({storyId}) => {
    const [story, setStory] = useState({});

    useEffect(() => {
        getStory(storyId).then(data => data && data.url && setStory(data))
    })

    return story && story.url ? (
        <div className='storiesWrapper'>
        <a className='storyLink' href={story.url}>{story.title}</a>
        <p className='storyDetails'>{story.score} {story.score > 1 ? 'points' : 'point'} by: {story.by} {mapTime(story.time)} ago</p>
        </div>
    ) : null
}