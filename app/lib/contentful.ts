// const contentful = require('contentful/contentful.node')
// import contentful from "contentful"
const contentful = require('contentful')
const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: 'kc2v26q428wp',
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: '-9O9xJ3WTbdujanNgvtW5IxKTWsgXW1R0kNsEj03gUg',
})
// This API call will request an entry with the specified ID from the space defined at the top, using a space-specific access token
client
  .getEntry('5PeGS2SoZGSa4GuiQsigQu')
  .then((entry: any) => console.log(entry))
  .catch((err: any) => console.log(err))
export default client