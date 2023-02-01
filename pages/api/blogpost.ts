// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import * as fs from 'fs'
type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {


  let parseddata:any = [];

  let blogposts = await fs.promises.readdir("./blogposts");
  
  if (req.method === "POST") {
      await fs.promises.writeFile(`blogposts/${blogposts.length}.json`,JSON.stringify(req.body))
      // res.status(200).json(req)
  } else {
    // res.status(200).json({ name: 'Abdul-basit' })
  }


  for (let index = 0; index < blogposts.length; index++) {
    const element = blogposts[index];
    let parsedData = await fs.promises.readFile((`blogposts/${element}`),"utf-8")
    parseddata.push(JSON.parse(parsedData))
    
  }
  res.status(200).json(parseddata)




}