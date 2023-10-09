# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Usage of NPM to install the dependecies and run the project is recommended. Installation with
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

While I was hesitant to use the package since I know you may have wanted to see raw usage of the API, 
I really appreciated the type safety and robust error handling it provided.
Ultimately, I read the source code to ensure it wasn't just a wasteful additional package.

## Code Comments
Overall, I made a lot of comments especially in places where I felt I needed to explain *why* I did something.
I don't usually leave SO many comments, as I tend to put explanations in JSDoc format and any extra, excessive 
reasoning in commit messages or in the team documentation location. 

I wanted them to be very visible here because I worked so independently on it and it's an offhand project.

## What the app is missing:

There a few things leftover that I know are missing and wish I could have addressed, 
though ultimately I did not want to take too much
time to deliver something that was demo-able. 

### Route Level Error Handling/General Error Handling: 
It PAINS me that there is so little error handling across the application as a whole. I really would have liked to 
especially add route level error handling, such that certain pages/components are rendered when the server responds with 
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
There are no programmatic tests at all, this app lives dangerously. 

### Other
There's likely a few other pitfalls. I mentioned to Doug that this was the first time I'd be using
Nuxt/Vue, so there may be some things I did in a funny way.