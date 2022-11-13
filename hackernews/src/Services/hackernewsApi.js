import { selectFields } from '../Selectors/selectFields';

export const baseUrl = 'https://hacker-news.firebaseio.com/v0/'
export const newStoriesUrl = `${baseUrl}newstories.json`
export const storyUrl = `${baseUrl}item/`



export const getStory = async (storyId) => {
    try{
    const response = await fetch(`${storyUrl + storyId}.json`)
    if (response.ok) {
        const jsonResponse = await response.json()
        return selectFields(jsonResponse)
    }
    return response
} catch {
    console.error();
}
}

export const getStoryIds = async () => {
    try {
        const response = await fetch(newStoriesUrl)
        if (response.ok) {
            const jsonResponse = await response.json()
            return jsonResponse
        }
        return response
    } catch(error) {
        console.error();
    }
}