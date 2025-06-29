// This is a client component, needed because it uses hooks like useState
'use client';

import { useState } from 'react';

export default function UploadForm() {
  // Store selected files from the file input
  const [files, setFiles] = useState<FileList | null>(null);

  // Store a success or error message after uploading
  const [message, setMessage] = useState('');

  // Store preview URLs of the selected images
  const [previews, setPreviews] = useState<string[]>([]);

  // Runs when the user selects files
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files; // Get the selected file(s)
    setFiles(selected);              // Save them in state

    if (selected) {
      // Create temporary preview URLs for each selected file
      const previewUrls = Array.from(selected).map((file) =>
        URL.createObjectURL(file)
      );
      setPreviews(previewUrls); // Save preview URLs in state to display below
    }
  };

  // Runs when the user clicks the Upload button
  const handleUpload = async () => {
    // If no files were selected, do nothing
    if (!files) return;

    // Create a FormData object to send files to the server
    const formData = new FormData();
    Array.from(files).forEach((file) =>
      formData.append('files', file) // Add each file to the FormData under key "files"
    );

    // Send the files to your API route (/api/upload)
    const res = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });

    // Wait for server response and parse it
    const data = await res.json();

    // Show a success message or fallback message
    setMessage(data.message || 'Uploaded!');

    // Clear the form
    setFiles(null);
    setPreviews([]);
  };

  return (
    <div className="mt-4">
      {/* File input (accepts multiple images) */}
      <input
        type="file"
        multiple
        accept="image/*"
        onChange={handleFileChange}
        className="mb-4"
      />

      {/* Upload button */}
      <button
        onClick={handleUpload}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Upload
      </button>

      {/* Show upload result message */}
      {message && <p className="mt-2 text-green-600">{message}</p>}

      {/* Show preview thumbnails of selected images */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
        {previews.map((src, idx) => (
          <img key={idx} src={src} className="w-full rounded shadow" />
        ))}
      </div>
    </div>
  );
}
