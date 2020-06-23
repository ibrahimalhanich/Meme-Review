Welcome to Meme-Review, A Full-Stack Social Media Application that let's you review memes posted by the community!

#  How to use the app:
Visit the [app](https://me-review-meme.herokuapp.com/) and log-in using a Google Account. Once logged in, you can view all memes and go view an individual meme and leave a comment on it. You can also add your own meme provided it's uploaded on an image-sharing platform. 

#  How the app works:

##  Packages used in source-code:

- Express
- Path
- http-errors
- cookie parser
- morgan
- express-session
- passport
- connect-mongo

## Discussion on source code

The App uses boiler-plate express code to kick things off. I followed a guide to implement OAuthorization which basically allows users to log-in with a Google Account. It's honestly still quite difficult for me to explain how OAuthorization works but any number of guides online can help you get started with it.

Next, I set up my MongoDB Cluster with the following things in mind:

- We'll need the USER's name, email and googleID
- The Meme schema will need a URL that we can upload on our HTML page
- The Meme schema will also need a comments schema embedded within it, so that each set of comments will be unique to a particular meme
- The Comment Schema will need to hold a USER inside it, so we can display who's commented on any given post

This means that our Databases are related. 

So next we have to create models for our user their comments and the memes themselves. 

(PLACEHOLDER FOR MEMEMODEL.PNG)

(PLACEHOLDER FOR USERMODEL.PNG) 





























##  Timeline:
- 06/13/2020    OAuth implementation
- 06/14/2020    Started using this [api](https://github.com/R3l3ntl3ss/Meme_Api) to generate memes, but I keep adding new elements to the database whenever I do anything on the page. This is because of the populateDB function being mounted on the router. I will make the database more static by generating the DB using the API call and pasting it into the mongoose server off of their website, will only use the code itself to query the DB instead of generating it. 
- 06/15/2020    Added meme thumbnails and refactored the routes to name the URLs a bit more intuitively. Previously they all just worked off of the following URL: https://localhost:3000/users even when I was on the home page. Now it just works off of https://localhost:3000 and renders the individual memes after you click them on it's own URL (https://localhost:3000/meme/:id). Tomorrow will probably be on comment and like implementation on the web page. If all goes well we should have a very base version of the app done by tomorrow's end. Remaining days will be on added features and improved styling if time permits. 
- 06/16/2020    Quite an unproductive day to be completely honest. Not much at all was done other than deploying the webpage to Heroku.
- 06/17/2020    Gave the USER the ability to create comments.
- 06/18/2020    Gave the USER the ability to delete their own comments on a meme. Also allow the USER to upload a meme. Fixed some of the CSS but a lot more work will have to go into the CSS soon. 
