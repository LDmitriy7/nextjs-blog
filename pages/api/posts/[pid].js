export default async function handler(req, res) {
  const {pid} = req.query
  res.end(`Post ${pid}`)
}