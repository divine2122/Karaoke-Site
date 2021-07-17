const fetch = require('node-fetch');


export async function authFunction() {

    const params = new URLSearchParams(window.location.search);
    const requestToken = params.get('code');

        const response = await fetch(`http://localhost:3035/home?code=${requestToken}&state=SOME_STATE_VALUE`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-type": "application/json",
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
