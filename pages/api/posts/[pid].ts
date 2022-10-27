import {NextApiRequest, NextApiResponse} from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const {pid} = req.query
  res.end(`Post ${pid}`)
}