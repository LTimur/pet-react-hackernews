export const baseUrl = 'https://hacker-news.firebaseio.com/v0/'
export const newStoriesUrl = `${baseUrl}newstories.json`
export const storyUrl = `${baseUrl}item/`

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