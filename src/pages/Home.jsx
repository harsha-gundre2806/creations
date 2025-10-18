import { useState } from 'react';

function Home() {
  const [posts] = useState([
    {
      mediaUrl: '110.jpg', // ✅ Use public folder path
      description: 'Beautiful hand-painted art.',
      mediaType: 'image',
    },
    {
      mediaUrl:
        '111.mp4',
      description: 'Timelapse of garden growth.',
      mediaType: 'video',
    },
    {
      mediaUrl: '12.jpg',
      description: 'Creative hand-drawn deisgn.',
      mediaType: 'image',
    },
  ]);

  return (
    <div className="font-sans text-gray-800">

      {/* 🌄 Hero Section with Background Image */}
      <section
        className="relative bg-cover bg-center bg-no-repeat text-white text-center py-20 w-[80%] mx-auto rounded-2xl"
        style={{
          backgroundImage: "url('18.jpg')", // ✅ public/images/logo.jpg
        }}
      >
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg animate-fadeIn">
            Welcome to HandArt Gallery 🎨
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-xl mx-auto animate-fadeIn delay-150">
            Explore unique hand-crafted art designs, beautiful garden videos, and original creations made with passion.
          </p>
        </div>
      </section>

      {/* 🖋 Description Section */}
      <section className="py-12 px-4 max-w-4xl mx-auto text-center">
        <p className="text-gray-700 leading-relaxed text-lg">
          This is a creative platform where talented hand artists can showcase their paintings, designs, and garden videos.
          Every piece reflects skill, imagination, and care for beauty. Explore the collection and get inspired by authentic work.
        </p>
      </section>

      {/* 🖼 Posts Grid with Improved Image/Video Display */}
      <section className="py-12 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-8 text-center text-indigo-700">
          Latest Creations
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div
              key={index}
              className="group bg-white shadow-lg rounded-xl overflow-hidden transform transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              {post.mediaType === 'image' ? (
                <div className="w-full h-80 flex items-center justify-center bg-gray-100 overflow-hidden">
                  <img
                    src={post.mediaUrl}
                    alt="Art"
                    className="max-h-full max-w-full object-contain transition duration-500 group-hover:scale-105 group-hover:opacity-90"
                  />
                </div>
              ) : (
                <video
  src={post.mediaUrl}
  autoPlay
  muted
  loop
  playsInline
  
  className="w-full h-96 object-cover transition duration-500 group-hover:scale-105"
/>

              )}
              <div className="p-4 text-center">
                <p className="text-gray-700 text-md">{post.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-indigo-700">
   Transform Your Clothes into Art! <br />
  Reach Out to Us Today
</h2>
    </div>
  );
}

export default Home;
