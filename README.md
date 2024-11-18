# next-stock-search

dev log:

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
- todo temp fix: save next response json & add as mock data
