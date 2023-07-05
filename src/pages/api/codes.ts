import type { NextApiRequest, NextApiResponse } from "next";
import { promises } from "fs";
import path from "path";

// @ts-ignore
import map from "lang-map";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const codesDir = `${process.cwd()}/codes/`;
  const files = await promises.readdir(codesDir);

  let codes: any[] = [];

  for (const file of files) {
    codes.push({
      fileName: file,
      fileContent: await promises.readFile(`${codesDir}${file}`, "utf-8"),
      fileLanguage: map.languages(path.extname(file).replace(".", ""))[0],
    });
  }

  res.status(200).json(codes);
}
