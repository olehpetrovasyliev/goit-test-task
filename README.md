# Tweets test task

## About
This is a simulation of a real test task for real job from cource i`m learning now. Below you can read the task itself and some decitions i made while faced troubes

## Technical task

According to the layout, you need to implement user cards.
When you click on the Follow button, the text changes to Following. The color of the button also changes. And yours is added to the number of followers. That is, the initial number is 100,500 followers. When you click on the button, it will be 100,501.
When the page is updated, the final result of the user's actions should be recorded. That is, if you click on the button and refresh the page, the button still remains in the Following state with the appropriate color, and the number of followers does NOT decrease to the initial value.
When you click the button again, its text and color change to their original state. The number of followers also changes. It decreases by 1 (100,500).
In the code, the number 100,500 must be written with one value (100500). In the UI, it is displayed with a comma (100,500).
Create your personal backend for development using the mockapi.io UI service. Create the users resource. Use the resource constructor and describe the user object as described below.

### User

Create a user in Mockapi with the following fields: id, user, tweets, followers, avatar (see screenshot below).
Avatar images must be specified with separate urls in the “avatar” property. You can choose them yourself.
There should be from 12 users with different values (at your discretion) in the database. Make pagination. One pagination page should display at least 3 tweets, the rest should be loaded when you click Load More
The rest of the requirements are similar to the technical task described above.

### Additional task

You will be awarded additional points for performance! Without completing an additional task, you will not be able to get the maximum score.

Create routing using React Router.

The application must have the following routes. If the user entered by a non-existent route, he must be redirected to the home page. '/' – Home component, home page. Styling and design at your discretion '/tweets' - component tweets, page with display of tweets The tweets page should have a Back button that leads to the main page.



### Tasks with an asterisk

Add filtering. It should be a Dropdown with 3 options (design at your discretion): show all, follow, followings show all - show all tweets. follow - show tweets with follow status. followings - show tweets with following status



## Troubles and decitions

1. There was a task to toggle saving of status if userif followed or no and saving it. Because this is not real project and backednd was not giving data about it, I added saving in local storage
2. Difference in some functions prod and developement. On localhost in worked in one way, on github in another. I just found all differences and deleted it before making final commits   
