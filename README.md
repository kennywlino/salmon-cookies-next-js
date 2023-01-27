# LAB - CLASS 43 

## Project: Salmon Cookies: JS Framework Comparative Analysis

## Author: Kenny W. Lino, Hunter Fehr

## Problem Domain

In this lab, we chose to take a look at using the React framework, Next.js to reimplement the [Salmon Cookies](https://codefellows.github.io/code-201-guide/curriculum/class-09/lab/) project. We reimplemented the CookieStore class to simulate the data again, and then loaded the data into a Material UI table component. This was then loaded into a separate page, `/sales_data`, which was very easily created by adding a new folder (or file) underneath the `/pages` directory.

We also make note of our analysis of Next.js below.

## Links and Resources

- [Deployed website on GitHub](https://kennywlino.github.io/salmon-cookies-next-js/)

## Framework Analysis: Next.js

### Research Conducted By: Kenny W. Lino, Hunter Fehr

### Overall Score and Comments

Score (Out of 10): 9

### General Comments

Using salmon-cookies to practice and create a new framework using Next.js. To develop skills and understanding reading documents. With using Next.js and the Salmon Cookies example we didn't get to experience the full power and added features of Next.js in our application. However, we did have smooth transitions using the react components.

### Pros

- Really easy to make a new page. Simply add a new .js/.tsx, etc. file in the /pages directory.
- functions carried over well to Next.js only having to make minor changes.

### Cons

- When looking at [TasteJS's comparison](https://tastejs.com/movies/index.html) of Next.js with other frameworks like Solid or Astro, Next.js' bundle was much bigger. Whether that impacts the overall performance is hard to say, but it seems like something to note.
-

### Ratings and Reviews

#### Documentation

Very good documentation in Next.js allowing us to search and find reference to make our application quickly work.

#### Systems Requirements

Above and beyond 'node' and 'linux', what dependencies or core requirements exist for this framework? Is it easily deployable to the cloud? Does it require a certain database?

- Node. js 16.8 or later. MacOS, Windows (including WSL), and Linux are supported.
- Deployment seems to be consistent with our experiences with regular React apps.

#### Ramp-Up Projections

How long would/should it take a team of mid-junior developers to become productive?

- The app is very dynamic with JavaScript so it feels that with a spin up or a quick demo can help mid level devs start an application quick and easy.

#### Community Support and Adoption levels

How popular is this framework? What big companies are running on it? How is it "seen" in the general JS community? Is there an active community of developers supporting and growing it?

- Next.js seems to be very popular in the sense that there are a lot of openings looking for people with experience in the framework. Companies like Nike, Netflix, TikTok, Uber, Lyft, and Starbucks use Next.js as their company framework. Next.js is a framework that will continue to grow but at the end of the day will be a user preference.

### Links and Resources

- [framework](https://nextjs.org/)
- [docs](https://nextjs.org/docs/getting-started)
- [examples/tutorials](https://nextjs.org/learn/basics/create-nextjs-app)


### Operating Instructions

If someone were to download your repo (above), what steps do they need to take to run the application

- `npm run dev` or `npm run build` `npm run start`
- Endpoint: `/sales_data`