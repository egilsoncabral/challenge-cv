const CLIENT_ID = 'a7b542cdf81966478e7b'
const CLIENT_SECRET = '0534ec325fcc429f38e4ea6a379b5eef35c79692'

module.exports = function (app) {

    //Import to handle with Cors problems
    const cors = require('cors');

    // Import the axios library, to make HTTP requests
    const axios = require('axios')

    //Import registered users
    const users = require('../../config/users')

    //Import token Generator
    const tokenGenerator = require('../../utils/tokenGenerator')

    app.use(cors());

    //Used to authenticate and verify if the user exist
    app.get('/authentication', (req, res) => {
        const body = req.query
        if (Object.keys(body).length === 0 && body.constructor === Object){
            res.status('500').send({ error: 'Invalid params' })
        }else{
            var userFounded = users.some(user => {
                return user.email === body.username && user.password === body.password
            })
            tokenGenerator((accessToken) => {
                if (userFounded) {
                    res.json({ access_token: accessToken })
                } else {
                    res.status('401').send({ error: 'Invalid User/Password' })
                }
            })
        }
    })

    //Used to verify if the code from the client is a valid code in github platform
    app.get('/oauth/redirect', (req, res) => {
        const requestToken = req.query.code
        axios({
            method: 'post',
            url: `https://github.com/login/oauth/access_token?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&code=${requestToken}`,
            headers: {
                accept: 'application/json'
            }
        }).then((response) => {
            const accessToken = response.data.access_token
            res.json({access_Token:accessToken})
        }).catch((error) => {
            console.log(error)
            res.status('500').send({error:error})
        })
    })
}





