function About() {
  const galleryImages = [
    'https://via.placeholder.com/600x400.png?text=Hand+Art+Example+1',
    'https://via.placeholder.com/600x400.png?text=Hand+Art+Example+2',
    'https://via.placeholder.com/600x400.png?text=Garden+Video+1',
    'https://via.placeholder.com/600x400.png?text=Creative+Design+1',
    'https://via.placeholder.com/600x400.png?text=Hand+Art+Example+3',
  ];

  return (
    <div className="font-sans text-gray-800">

      {/* Hero Section */}
      <section className="bg-indigo-600 text-white text-center py-20">
        <h1 className="text-5xl font-bold mb-4">About HandArt Gallery 🎨</h1>
        <p className="text-xl max-w-xl mx-auto">
          Discover the story behind our passion for hand-made art and nature's beauty.
        </p>
      </section>

      {/* Description Section */}
      <section className="py-12 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">Our Mission</h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          HandArt Gallery was created to celebrate the creativity and dedication of talented hand artists.
          We offer a platform where original hand-painted artworks, garden videos, and creative designs come to life.
          Every piece tells a story, combining skill, imagination, and care.
        </p>
      </section>

      {/* Gallery Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-8 text-center">Gallery Showcase</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((url, index) => (
            <div
              key={index}
              className="overflow-hidden rounded shadow-lg transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={url}
                alt={`Gallery ${index + 1}`}
                className="w-full h-48 object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="bg-indigo-600 text-white text-center py-12">
        <h2 className="text-3xl font-semibold mb-4">Join Our Creative Journey</h2>
        <p className="mb-6 text-lg">
          Whether you're an artist or an art enthusiast, explore or contribute your own creations.
        </p>
        <a
          href="/admin"
          className="bg-white text-indigo-600 px-6 py-3 rounded font-semibold hover:bg-gray-100 transition"
        >
          Go to Admin Page
        </a>
      </section>
    </div>
  );
}

export default About;

