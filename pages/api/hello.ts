import {NextApiRequest, NextApiResponse} from "next";

export default (_: NextApiRequest, res: NextApiResponse) => {
  res.json({text: 'Hello'})
}
