# Feedback-Collection
Build and deploy fullstack web apps with NodeJS, React, Redux, Express, and MongoDB.


User signs up via Google Auth	Express server +MongoDB + PassportJS	
User pays for email credits via stripe	Stripe + MongoDB	
User creates a new 'campaign'	React + Redux	
User enters list of emails to send survey to	React + Redux + Redux Form	
We send email to list of surveyees	Email Provider	
Surveyees click on link in email to provide feedback	Email Provider +Express + Mongo	
We tabulate feedback  	Mongo	
User can see repost of all survey responses 	Mongo + React +Redux	
React App	
        |	—HTTP Request JSON
Express/Node API	
        |	
    MongoDB	
Node: JavaScript  runtime used to execute code outside of the browser
| (route handler)
Express:Library that runs in the Node runtime. Has helpers to make dealing with HTTP traffic easier
|
Response
|
Node
|
Res
