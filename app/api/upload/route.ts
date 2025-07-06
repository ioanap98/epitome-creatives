import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs/promises';

export async function POST(req: Request) {
  // 1. Parse the incoming multipart/form-data request
  const formData = await req.formData();

  // 2. Extract all files from the "files" field as an array of File objects
  const files = formData.getAll('files') as File[];

  // 3. Determine the target upload directory (inside your Next.js "public" folder)
  const uploadDir = path.join(process.cwd(), 'public/uploads');

  // 4. Ensure the upload directory exists (create if missing)
  await fs.mkdir(uploadDir, { recursive: true });

  // 5. Loop over each uploaded file…
  for (const file of files) {
    // 5a. Read the file data as an ArrayBuffer
    const bytes = await file.arrayBuffer();

    // 5b. Convert the ArrayBuffer to a Node.js Buffer
    const buffer = Buffer.from(bytes);

    // 5c. Construct the full file path: e.g. "project-root/public/uploads/filename.png"
    const filePath = path.join(uploadDir, file.name);

    // 5d. Write the file buffer to disk at the target path
    await fs.writeFile(filePath, buffer);
  }

  // 6. Return a JSON response indicating success
  return NextResponse.json({ message: 'Files uploaded successfully!' });
}
