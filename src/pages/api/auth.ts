import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    if(req.query.state == process.env.pass) {
        window.localStorage['code'] = req.query.code;
        res.status(200).redirect('/auth')
    }
    res.status(400)
  }