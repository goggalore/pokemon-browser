# Pokemon Browser

A small web project that allows a user to browse and search for all current existing pokemon. The application
is pretty minimally styled, though still features mobile and desktop views, as well as a large and dark mode
as both took an insignificant amount of time to add.

This project is made for demonstration purposes for the reason that almost all the code I worked on, and am proudest of, 
in the past years of my professional career is under copyright, and my GitHub is outdated. 

I wanted to make a project that is up-to-date with my current capability. I have worked in React for the past five years,
and I understand Next fundamentals well. I, however, chose to use a framework (Vue/Nuxt) as a challenge and to 
get an idea of what another popular framework used in the web domain has to offer. 

That being said, this is the first time I have ever used Vue. Anything demonstrated in this project is something I could
do within React/Next with a much greater sense for standard practice, as well as in a much shorter time. Many of 
the concepts overlap strongly, and any confident React programmer should understand what is going on relatively easily
with a code read-through.

The project took roughly 15 hours to complete.

## Setup

Usage of NPM to install the dependencies and run the project is recommended. Installation with
other package managers were not tested.

Make sure to install the dependencies:

```bash
npm install
````
## Development Server

Start the development server on `http://localhost:3000`:

```bash
npm run dev
```

## Production

Build the application for production:
```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

## Author's Notes:

### Usage of pokedex-promise-v2 package:
Rather than use something like `fetch` commands on the back-end directly to the API,
a [wrapper library](https://pokeapi.co/docs/v2) called [pokedex-promise-v2](https://github.com/PokeAPI/pokedex-promise-v2) 
was chosen primarily for the extra types it exposes, and therefore, the greater type safety it provides.

The types both for the request parameters and response types are wonderful to have 
to ensure no mistakes are made when providing params or receiving requests.

The package also provides the additional benefit of providing useful error handling and parsing the return types, 
which can be bug-prone if done improperly at worst, and tedious even if done even negligently 
(i.e. just assuming `data.json()` is in the right shape).

For demonstration purposes, calling the API directly without aid of the package would have looked something like:

In `pokemon.get.ts`:
```ts 
// Get the list of pokemon
  const responseJSON = await fetch(
    `${process.env.POKEMON_API_URL}/pokemon?offset=${offset}&limit=${limit}`
  ).then((data) => data.json())
```
where `offset` and `limit` are constants defined at an earlier point, 
and where `process.env.POKEMON_API_URL` is defined in a `.env` file, though this the
fast, negligent, non type-safe implementation aforementioned.

## Code Comments
Overall, I made a lot of comments especially in places where I felt I needed to explain *why* I did something.
I don't usually leave SO many comments, as I tend to put explanations in JSDoc format and any extra, excessive 
reasoning in commit messages or in the team documentation location. 

I think that good code is something that speaks for itself and does not need excessive explanation,
but I wanted them to be very visible here because I worked so independently on it and this is an offhand project.

## What the app is missing:

### Route Level Error Handling/General Error Handling: 
It PAINS me that there is so little error handling across the application as a whole. I especially would like to add 
route level error handling, such that certain pages/components are rendered when the server responds with 
common error codes, i.e. a 404 page and a more general error page.

Additionally, sadly the back-end server hardly addresses cases where the incorrect data 
is sent or when something goes wrong when making the third party requests. 

You'll see some TODOs in the code denoting this.

### Styling for the search input component
Yeah, that thing is tiny and hard to read compared to the rest of the website. It also overlaps the button. 
It wasn't styled because of the self-imposed time restraint.

### Back navigation to index.vue doesn't preserve state
Arguably not necessary, but I think it's a nicer UX if the data is preserved from the page you navigated from,
and also the client-side re-fetching is noticeably slower. It would be nice if it didn't do that as a whole.

### Unit testing
There are no programmatic tests at all, this app lives dangerously. But seriously, in any application made for public production,
some form of programmatic testing should exist.
