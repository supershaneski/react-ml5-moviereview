react-ml5-moviereview
==========

This React project is bootstrapped using [Vite](https://vitejs.dev/guide/).

<br />

# Motivation

This is an exercise to use `ml5`'s method [`Sentiment`](https://learn.ml5js.org/#/reference/sentiment) to predict whether or not a user review is favorable. A practical application would be to use a similar system to rate the comments/suggestions submitted in a company website to determine user sentiments and gives the company an opportunity to respond in a timely manner.

I will be using [The Movie Database](https://developers.themoviedb.org/3/getting-started/introduction)(TMDb) API to get actual movie and movie reviews as an example. I will be checking the `favorable score` of the review. In actual project/app, it would be better to determine the score after submitting or editing the review.

I am just going to take the first page of movie trending list for the week.

```javascript
https://api.themoviedb.org/3/trending/movie/week?api_key=${import.meta.env.VITE_TMDB_APIKEY_v3}
```

For this example, there is no need to get any other details for each movie.
Also, only the first page of reviews for the movie that the user selected will be used.

```javascript
https://api.themoviedb.org/3/movie/${movie_id}/reviews?api_key=${import.meta.env.VITE_TMDB_APIKEY_v3}&language=en-US&page=1
```

You need to provide your own `TMDb` API key to make the URL work.
Open the `.env` file and edit `VITE_TMDB_APIKEY_v3`.
Please note that it is not advisable to put secret API keys in `.env` files for production.

For server state management, I will be using [`react-query`](https://tanstack.com/query/v4) together with just plain `fetch` to make things simple. This will take care of caching our request so that we do not have to send request each time.

Then lastly, to get the `favorable score`, we will be using `ml5.js`'s method `Sentiment`.

```javascript
const sentiment = ml5.sentiment('movieReviews', handleModelLoaded)

function handleModelLoaded() {
  
  const prediction = sentiment.predict(review)

  console.log(prediction)

}
```


<br />

# Screenshots

Sample user reviews from Movie page.

![Movie page](public/image2.jpeg)

<br />

# Getting Started

Clone the repository, install the dependencies and run

```sh
$ git clone https://github.com/supershaneski/react-ml5-moviereview.git myproject

$ cd myproject

$ npm install

$ npm start
```

Your browser will open to `http://localhost:3000/` or some other port depending on the availability.

<br />

# Library/Modules Installation

To separately install the library/module used this project

* [`ml5.js`](https://learn.ml5js.org)
  ```sh
  $ npm install ml5@0.12.2
  ```

* [@tanstack/react-query v4](https://tanstack.com/query/v4/docs/installation)
  ```sh
  $ npm install @tanstack/react-query
  ```

* [react-router v6](https://reactrouter.com/docs/en/v6/getting-started/overview)
  ```sh
  $ npm i react-router-dom@6
  ```
