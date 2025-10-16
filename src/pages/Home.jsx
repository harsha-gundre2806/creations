import { useState } from 'react';

function Home() {
  // Example static data for demonstration
  const [posts, setPosts] = useState([
    {
      mediaUrl: 'https://via.placeholder.com/600x400.png?text=Hand+Art+1',
      description: 'Beautiful hand-painted abstract art.',
      mediaType: 'image',
    },
    {
      mediaUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
      description: 'Timelapse of garden growth.',
      mediaType: 'video',
    },
    {
      mediaUrl: 'https://via.placeholder.com/600x400.png?text=Hand+Art+2',
      description: 'Creative hand-drawn floral design.',
      mediaType: 'image',
    },
  ]);

  return (
    <div className="font-sans text-gray-800">

      {/* Hero Section */}
      <section className="bg-indigo-600 text-white text-center py-20">
        <h1 className="text-5xl font-bold mb-4">Welcome to HandArt Gallery 🎨</h1>
        <p className="text-xl max-w-xl mx-auto">
          Explore unique hand-crafted art designs, beautiful garden videos, and original creations made with passion.
        </p>
      </section>

      {/* Description Section */}
      <section className="py-12 px-4 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">About This Website</h2>
        <p className="text-gray-700 leading-relaxed">
          This is a creative platform where talented hand artists can showcase their paintings, designs, and garden videos.
          Every piece reflects skill, imagination, and care for beauty. Explore the collection and get inspired by authentic work.
        </p>
      </section>

      {/* Posts Grid */}
      <section className="py-12 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-8 text-center">Latest Creations</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div key={index} className="bg-white shadow-lg rounded overflow-hidden hover:scale-105 transition-transform">
              {post.mediaType === 'image' ? (
                <img
                  src={post.mediaUrl}
                  alt="Art"
                  className="w-full h-48 object-cover"
                />
              ) : (
                <video
                  src={post.mediaUrl}
                  controls
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-4">
                <p className="text-gray-700">{post.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
