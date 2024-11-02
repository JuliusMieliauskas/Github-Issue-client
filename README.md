#### This is an alternative client for viewing GitHub repo issues.

## To launch:

1. Clone the repo and navigate to it.
2. Run the following comands

```
npm install
npm run build
npm run start
```

3. Go to `localhost:3030`

## Implementation details

Application is built in NextJs. Data fetching is done in server actions which are defined inside `/actions` folder. ShadCn library is used for most components.

1. User can view repo issues, comments, and reactions.
2. Implemented pagination for better user experience.
3. Data fetching from GitHub API based on NextJs route parameters.

Tradeoff made:

User is only allowed to view issues of predefined set of repos. Chose this approach to facilitate data fetching and error handling by reducing choices for user.

Possible enhancements:

- Let user pick any repo they want.
- Make number of issue per page customizable.
- Add support for more GitHub features like pull requests and branches.
- Improve error handling for a wider range of repositories.
