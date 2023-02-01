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
    let dirarr = await fs.promises.readdir("blogposts");

    if (req.method === "POST") {
        await fs.promises.writeFile(`blogposts/${dirarr.length}.json`, JSON.stringify(req.body))
    }

    let dataToShow: any = []

    for (let index = 0; index < dirarr.length; index++) {
        const element = dirarr[index];
        let filearr = await fs.promises.readFile(("blogposts/" + element), "utf-8");
        dataToShow.push(JSON.parse(filearr))
    }

    res.status(200).json(dataToShow)

}