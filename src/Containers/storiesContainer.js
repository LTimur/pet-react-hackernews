import React, {useEffect, useState} from 'react'
import { getStoryIds } from '../Services/hackernewsApi'
import { Story } from '../Components/Story/Story'

export const StoriesContainer = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoryIds().then(data => setStoryIds(data))

  }, [])

  // setTimeout(() => {
  //   return storyIds.slice(0,100).map(storyId => (<Story key={storyId} storyId={storyId}/>))
  // }, 200)

  return storyIds.slice(0,100).map(storyId => (<Story key={storyId} storyId={storyId}/>))
}
