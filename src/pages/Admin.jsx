import { useState } from "react";

function Admin() {
  const [items, setItems] = useState([]);
  const [file, setFile] = useState(null);
  const [description, setDescription] = useState("");
  const [uploading, setUploading] = useState(false);

  // Your Google Apps Script Web App URL
  const SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbxIAbKXMClFtwreHrglxLU5z2lpF5twUZ5ooz8oOpfatN-GNL8AwBUzeGyC6q6gP9Ru/exec";

  const handleUpload = () => {
    if (!file || !description) {
      alert("Please select a file and add a description!");
      return;
    }

    setUploading(true);

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = async () => {
      const base64Data = reader.result.split(",")[1]; // remove prefix

      try {
        const response = await fetch(SCRIPT_URL, {
          method: "POST",
          body: JSON.stringify({
            contents: base64Data,
            type: file.type,
            filename: file.name,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });

        const result = await response.json();

        if (result.success) {
          setItems([
            ...items,
            {
              mediaUrl: result.url, // direct download link
              description,
              mediaType: file.type.startsWith("video") ? "video" : "image",
            },
          ]);

          setFile(null);
          setDescription("");
        } else {
          alert("Upload failed: " + result.message);
        }
      } catch (err) {
        console.error(err);
        alert("Something went wrong while uploading.");
      } finally {
        setUploading(false);
      }
    };
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8 text-center">🎨 Admin Dashboard</h1>

      <div className="bg-white p-6 rounded shadow-lg mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          {/* File Picker */}
          <input
            type="file"
            accept="image/*,video/*"
            className="border p-2 flex-1"
            onChange={(e) => setFile(e.target.files[0])}
          />

          {/* Description */}
          <input
            type="text"
            placeholder="Description"
            className="border p-2 flex-1"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          {/* Upload Button */}
          <button
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
            onClick={handleUpload}
            disabled={uploading}
          >
            {uploading ? "Uploading..." : "Upload"}
          </button>
        </div>
      </div>

      {/* Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="border rounded shadow-lg overflow-hidden hover:scale-105 transition-transform"
          >
            {item.mediaType === "image" ? (
              <img
                src={item.mediaUrl}
                alt="Media"
                className="w-full h-48 object-cover"
              />
            ) : (
              <video
                src={item.mediaUrl}
                autoPlay
                loop
                muted
                controls
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-4 bg-gray-50">
              <p className="text-gray-700">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Admin;
