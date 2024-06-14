export const load = async ({ url }) => {
  console.log("ATTEMPTING TO LOG URL", url)
  return { pathname: url.pathname }
}
