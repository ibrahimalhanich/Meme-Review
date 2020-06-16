Welcome to Meme-Review, A Full-Stack Social Media Application that let's you review memes posted by the community!





































Timeline:
- 06/13/2020    OAuth implementation
- 06/14/2020    Started using this [api](https://github.com/R3l3ntl3ss/Meme_Api) to generate memes, but I keep adding new elements to the database whenever I do anything on the page. This is because of the populateDB function being mounted on the router. I will make the database more static by generating the DB using the API call and pasting it into the mongoose server off of their website, will only use the code itself to query the DB instead of generating it. 
- 06/15/2020    Added meme thumbnails and refactored the routes to name the URLs a bit more intuitively. Previously they all just worked off of the following URL: https://localhost:3000/users even when I was on the home page. Now it just works off of https://localhost:3000 and renders the individual memes after you click them on it's own URL (https://localhost:3000/meme/:id). Tomorrow will probably be on comment and like implementation on the web page. If all goes well we should have a very base version of the app done by tomorrow's end. Remaining days will be on added features and improved styling if time permits. 
