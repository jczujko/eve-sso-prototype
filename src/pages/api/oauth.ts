import type { NextApiRequest, NextApiResponse } from 'next'


// const query = `grant_type=authorization_code&code=${req.query.code}`
// const buffer = Buffer.from(`${process.env.CLIENT_ID}${process.env.SECRET_KEY}`)
// const secret = buffer.toString('base64')
// fetch(`https://login.eveonline.com/v2/oauth/token?${query}`, {
//             method: 'POST',
//             headers: {
//                 'Authorization': `Basic: ${secret}`,
//                 'Content-Type': 'application/x-www-form-urlencoded',
//                 'Host': 'login.eveonline.com'
//             }
//         })