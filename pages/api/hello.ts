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

  let contactData = await fs.promises.readdir("./contactdata");

  if (req.method === "POST") {
      await fs.promises.writeFile(`contactdata/${contactData.length}.json`,JSON.stringify(req.body))
      // res.status(200).json(req)
  } else {
    // res.status(200).json({ name: 'Abdul-basit' })
  }


  for (let index = 0; index < contactData.length; index++) {
    const element = contactData[index];
    let parsedData = await fs.promises.readFile((`contactdata/${element}`),"utf-8")
    parseddata.push(JSON.parse(parsedData))
    
  }
  res.status(200).json(parseddata)




}