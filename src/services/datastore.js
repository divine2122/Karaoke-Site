const fetch = require('node-fetch');


const clientId = 'zMNZDYvktFEeAK3Qujfyrt5ActZwYpvvlJwATeprRbLAz3hxp2rZpX3YSHqzRhDC';
const clientSecret = 'gfYzi2KJWBeWNRxklmBeOvSeYkaPqPlp1-AWRR4rEp2x4aLB-kkBHbUVesAg84UQdYAMz9ood7Ygn2-iCrMK0Q';
const redirectUri = 'http://localhost:3035/home';
const grant_type = "authorization_code";
const response_type = "code";


const authLink = ``
//res.redirect(`https://api.genius.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=me&state=SOME_STATE_VALUE&response_type=code`)

// fetch(`http://localhost:3035/auth`, {
//     method: 'GET',
//     // headers: {
//     //   Accept: 'application/json',
//     //   'Content-type': 'application/json',
//     // },
//   })
//     .then((output) => {
//       //output.json()
//       console.log(output)
//       output.redirect(`https://api.genius.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=me&state=SOME_STATE_VALUE&response_type=code`)

//     })
//     .catch((error) => {
//     console.log(error)
//     });

    export async function functionsCall() {

        const params = new URLSearchParams(window.location.search);
        const requestToken = params.get('code');
    
            const response = await fetch(`http://localhost:3035/home?code=${requestToken}&state=SOME_STATE_VALUE`, {
            // method: "PUT",
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-type": "application/json",
            },
            });
    
            let output = await response
            return output;
    }