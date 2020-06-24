#  TLDR:
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

![requires_server](https://github.com/ibrahimalhanich/Meme-Review/blob/master/pictures/server_requires.PNG)

## OAuthorization

The App uses boiler-plate express code to kick things off. I followed a guide to implement OAuthorization which basically allows users to log-in with a Google Account. It's honestly still quite difficult for me to explain how OAuthorization works but [this stackoverflow response](https://stackoverflow.com/questions/27637609/understanding-passport-serialize-deserialize) was pretty informative on what was actually going on within the passport file. 

![passport_file](https://github.com/ibrahimalhanich/Meme-Review/blob/master/pictures/passport.PNG)

By serializing and deserializing the user we are basically going through the motions of knowing what user is currently logged in and attaching it to our request in the form of `req.user`. 

Of course doing this is all well and good, but without actually initializing this within the `server.js` file and mounting it to a router, we won't be making any use of the passport file's implementation. 

![passport_server](https://github.com/ibrahimalhanich/Meme-Review/blob/master/pictures/server_passport.PNG)

This boots up the passport functionality within the server before we actually make use of it when the user clicks on the log-in button, which is mounted in the home-page's routes.

![index_router](https://github.com/ibrahimalhanich/Meme-Review/blob/master/pictures/index_router.PNG)


## How I modelled my MongoDB Cluster
Next, I set up my MongoDB Cluster with the following things in mind:

- We'll need the USER's name, email and googleID
- The Meme schema will need a URL that we can upload on our HTML page
- The Meme schema will also need a comments schema embedded within it, so that each set of comments will be unique to a particular meme
- The Comment Schema will need to hold a USER inside it, so we can display who's commented on any given post

![mememodel](https://github.com/ibrahimalhanich/Meme-Review/blob/master/pictures/meme_model.PNG)
![usermodel](https://github.com/ibrahimalhanich/Meme-Review/blob/master/pictures/user_model.PNG)

Above we see that both models have an established relationship in the sense that a unique meme references a comment posted by any given user. There isn't really a tie to a user based off of who posted the meme. In further iterations that could be an avenue to go down in terms of meme deletion. 

## Using the App

First of all, log-in to the page.

![home_page](https://github.com/ibrahimalhanich/Meme-Review/blob/master/pictures/homepage.png)

After you log-in the full view of the app is rendered, you can start adding newing memes up in the nav bar or view existing memes in the database. 

![memes page](https://github.com/ibrahimalhanich/Meme-Review/blob/master/pictures/allmemes.png)

Once you click on a meme you should be able to comment on it or just click on the Meme Review button in the top left of the page to go back to the home page. 

![meme_page](https://github.com/ibrahimalhanich/Meme-Review/blob/master/pictures/makeacomment.png)

If you regretted making a comment for one reason or another, you can always delete that comment and save yourself the embarrassment. 

![delete_comment](https://github.com/ibrahimalhanich/Meme-Review/blob/master/pictures/deleteacomment.png)

Now maybe a meme you saw was lame, and you really wanted to stick it to the poster... Add your own meme! All you need is a URL to a funny meme you saw and a creative title for the meme you're posting. 

![add_meme](https://github.com/ibrahimalhanich/Meme-Review/blob/master/pictures/addameme.png)

Great! You've mastered the art of shitposting on a pretty basic app that probably won't be used by anyone... but me! 

I seriously appreciate you taking the time to read this. Hope you enjoy the app just as strongly as I banged my head into walls trying to get this thing working. 


# Further Implementations:

- Delete a meme
- Like button
- Auto generated memes using a subreddit API




#  Timeline:
- 06/13/2020    OAuth implementation
- 06/14/2020    Started using this [api](https://github.com/R3l3ntl3ss/Meme_Api) to generate memes, but I keep adding new elements to the database whenever I do anything on the page. This is because of the populateDB function being mounted on the router. I will make the database more static by generating the DB using the API call and pasting it into the mongoose server off of their website, will only use the code itself to query the DB instead of generating it. 
- 06/15/2020    Added meme thumbnails and refactored the routes to name the URLs a bit more intuitively. Previously they all just worked off of the following URL: https://localhost:3000/users even when I was on the home page. Now it just works off of https://localhost:3000 and renders the individual memes after you click them on it's own URL (https://localhost:3000/meme/:id). Tomorrow will probably be on comment and like implementation on the web page. If all goes well we should have a very base version of the app done by tomorrow's end. Remaining days will be on added features and improved styling if time permits. 
- 06/16/2020    Quite an unproductive day to be completely honest. Not much at all was done other than deploying the webpage to Heroku.
- 06/17/2020    Gave the USER the ability to create comments.
- 06/18/2020    Gave the USER the ability to delete their own comments on a meme. Also allow the USER to upload a meme. Fixed some of the CSS but a lot more work will have to go into the CSS soon. 
