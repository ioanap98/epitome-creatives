// app/api/images/route.ts
import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export async function GET() {
  const folderPath = path.join(process.cwd(), "public/uploads");
  const files = await fs.readdir(folderPath);
  return NextResponse.json(files);
}
