# next-stock-search

## dev log:

- latest next.js requires node 18.18
- brew installed nvm to update node
- fixed ~/.bashrc and PATH variable
- installed node 18.18
- Node.js version 18.18 was built for macOS 10.15 (Catalina) or later, but running macOS 10.13 (High Sierra) version mismatch causes the dynamic linker (dyld) to fail because your system libraries don’t support newer macOS features
- nvm downgrade node to v16 as MacOs upgrade is not an option
- using a prebuilt next.js template by manually installing dependencies
- Next.js v11 is the latest compatible version
- nextjs.org doesn't have documentation prior to v15
- there is a github issue page on how to find older documentation https://github.com/vercel/next.js/discussions/17548
- next.js v11 documentation available in the github repo history

- api key to local env
- basic hardcoded fetch api url
- basic display view for the response data
- search field with loading, query, data, error states
- Alpha Vantage daily 25 request rate limit exceeded...
- temp fix: response json served as mock data if live API hit daily rate limit

- tailwind & deps added w/ configuration
- tailwind is compiled right but will not be displayed as there is a tailwind vs outdated react/next version mismatch (`content` field in `tailwind.config.js`)

## Possible next steps

- find which tailwind version is compatible with this version of react/next. Style the components, remove inline vanilla styles and replace with tailwind, add media-queries for responsive views
- split index.js to /components
- schema validation and backend keys remap for better usability on the frontend (`stock["2. name"]` -> `stock.name`)
- more robust error / mock handling
- for detail/[stock].js view, display stock details (possible solutions: 1. re-query the API via the stock name on detail view load, 2. pass original query results via query params 3. use Global State provider-context which might not be possible with this React version)
- vercel deployment (install vercel CLI, create new project on Vercel Dashboard, configure git repo with Next.js Framework Preset, configure env variables for the API key, verify deployment -> tailwind will not work without the `content` field version mismatch)
- add Server-Side Rendering (create page component, wrap context with `getServerSideProps`)
- add second API call for detail view to pull stock prices for the given stock name
- persist already requested / frequent favourite stocks (1. client-side cache via React State or Context if version wouldn't be outdated 2. localStorage 3. server-side caching, SSG-ISR, Cache-headers etc)
