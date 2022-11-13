import React, {useEffect, useState} from 'react'
import '../Components/App/App.css';
import { getStoryIds } from '../Services/hackernewsApi'
import { Story } from '../Components/Story/Story'

export const StoriesContainer = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoryIds().then(data => setStoryIds(data))

  }, [])

  // setTimeout(() => {
  //   let storyIdsUpdated = true
  // }, 60000)

  return storyIds.map(storyId => (<Story key={storyId} storyId={storyId}/>))
}
