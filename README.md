## 5-a-side Football Team Picker

Technical excercise set at the end of the Autumn 2019 DevelopMe Web Development Fellowship.

By default 10 names can be added which will be randomly split into 2 teams of 5.

The number of players per side (as well as kit colour and team names) can be customised in the team settings section of the app.

## Setup/Installation on local machine

npm is required to set up app on a local machine.

Clone the git repository into a folder.

```
git clone git@github.com:kitclifford/5-a-side-picker.git
```

cd into the folder and run npm install to download packages.

```
npm install
```

When  the packages are installed, start the app with:

```
npm start
```
This will load up the app in your default web browser.

## About

I decided to build the project with React-Redux as it allowed for quick development of the UI and meant it was easier to pass different data up to global state. It was also the part of course I enjoyed most but also found most complicated, so having a go at developing an app from start to finish with it was something I wanted to try.

My planning in terms of overall design was pretty basic, just making some handwritten wireframes and a plan of my initial state (player array of separate player objects). In hindsight I would have liked to spend more time on planning the design in terms of colour schemes and component layout as once I actually had the minimal viable product working I felt I lacked the creativity to make the design really pop.

I developed the app initially in desktop format but always had it in mind to add mobile and tablet friendly styling. The majority of the sass styling is responsive but I added media queries where necessary to make font fit better and other components.

The initial MVP was just to split a list of 10 names into 2 random teams but once I had this working I decided to extend this to an n-per-side as per the extended project brief. Whilst adding that functionality, I decided having custom kit colours and team names added something a bit more fun and interactive to the app.

## Credit/Thanks

Football SVG - Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>

Close SVG - Icons made by <a href="https://www.flaticon.com/authors/pavel-kozlov" title="Pavel Kozlov">Pavel Kozlov</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>

Shirt SVG - Icons made by <a href="https://www.flaticon.com/authors/nikita-golubev" title="Nikita Golubev">Nikita Golubev</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>

SVG Optimiser by Peter Collingridge used to compress shirt SVG <a href="http://petercollingridge.appspot.com/svg-optimiser">petercollingridge.appspot.com/svg-optimiser</a>

Octin Sports Font made by Raymond Larabie <a href="https://www.1001fonts.com/octin-sports-free-font.html">www.1001fonts.com/octin-sports-free-font.html</a>

SF Sports Night Font Family made by ShyFoundry Fonts <a href="https://www.1001fonts.com/sf-sports-night-font.html">www.1001fonts.com/sf-sports-night-font.html</a>

And finally a thanks to everyone at DevelopMe for a great experience on the Autumn 2019 Bootcamp - you are all wonderful people!