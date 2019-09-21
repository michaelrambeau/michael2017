[![screenshot](https://user-images.githubusercontent.com/5546996/44306701-2f2f8000-a3cf-11e8-9c56-44da357721b6.png)](https://bestofjs.org/)

### Concept

[Best of JavaScript](https://bestofjs.org/) gathers every day the latest trends about the open source projects related to Node.js and the web platform: JavaScript of course, but also HTML and CSS.

### Background: why _Best of JavaScript_?

JavaScript and web technologies are advancing faster than ever, we are going full-speed on innovation.
Amazing open-source projects are released almost everyday, so it's hard to keep up-to-date about the trends.

- What are the most popular projects right now, over the last weeks or over the last months?
- What are the most relevant projects related to a given tag: the best framework? The best testing tools?

To answer those questions, I built [Best of JavaScript](https://bestofjs.org/).

Every day, _Best of JavaScript_ aggregates data from Github about more than 1000 projects related to Node.js and the web platform.

### Stack

- Single page application built with:
  - React (rendering engine)
  - Redux (state management)
- Cloud services:
  - [Auth0](https://auth0.com/): Authentication as a service, to let Github users contribute to the project
  - [mLab](https://mlab.com/): MongoDB Database-as-a-Service, used to store data related to projects
  - [SemaphoreCI](https://semaphoreci.com/): CI Server used to run the daily tasks
- Micro services
  - [webtask.io](https://webtask.io/)
  - [zeit.co/now](https://zeit.co/now)
