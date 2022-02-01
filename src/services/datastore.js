const fetch = require('node-fetch');
const config = require("../configs/devConfig.json");

export {config}

export async function authFunction() {
    const params = new URLSearchParams(window.location.search);
    const requestToken = params.get('code');
    const searchQuery = params.get('state');

    console.log('authfunc ran',requestToken, searchQuery)

        const response = await fetch(`${config.expressRoot}/app?code=${requestToken}&state=${searchQuery}`, {

        method: "GET",
        headers: {
            //"Content-type": "*/* ",//"application/json",
        },
        });

        let output = await response
        return output;
}


export async function preAuthFunction() {
  // const params = new URLSearchParams(window.location.search);
  // const requestToken = params.get('code');

  console.log('preauthfunc ran')

      const response = await fetch(`${config.expressRoot}/auth`, {

      method: "GET",
      headers: {

          // Accept: "application/json",
          // "Content-type": "application/json",
      },
      });

      let output = await response
      return output;
}
// export async function translateFunction() {

//   const params = new URLSearchParams(window.location.search);
//   const requestToken = params.get('code');

//       const response = await fetch(`http://localhost:3035/home?code=${requestToken}&state=SOME_STATE_VALUE`, {
//       method: "GET",
//       headers: {
//           Accept: "application/json",
//           "Content-type": "application/json",
//       },
//       });

//       let output = await response
//       return output;
// }
