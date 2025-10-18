function About() {
  return (
    <div className="font-sans text-gray-800">

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat text-white text-center py-32"
        style={{ backgroundImage: "url('/images/about-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            About HandArt Gallery
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-xl mx-auto">
            Custom hand-painted art on clothing and personal items, made just for you.
          </p>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6 text-indigo-700">Our Mission</h2>
        <p className="text-gray-700 leading-relaxed text-lg mb-4">
          At HandArt Gallery, we specialize in painting directly on your clothes and items — sarees, shirts, T-shirts, and more. 
          Our goal is to turn your personal items into unique, wearable works of art.
        </p>
        <p className="text-gray-700 leading-relaxed text-lg">
          Every piece is hand-painted with care, ensuring a one-of-a-kind design that reflects your style and vision.
          We help you express yourself through art you can wear or showcase.
        </p>
      </section>

      {/* Our Vision */}
      <section className="py-16 px-6 max-w-4xl mx-auto text-center bg-gray-50 rounded-xl shadow-lg">
        <h2 className="text-3xl font-semibold mb-6 text-indigo-700">Our Vision</h2>
        <p className="text-gray-700 leading-relaxed text-lg mb-4">
          We envision a world where your clothes and personal items can become canvases for creativity. 
          By hand-painting custom designs, we make art accessible, wearable, and unique to each individual.
        </p>
        <p className="text-gray-700 leading-relaxed text-lg">
          Our aim is to help people express their personality and style through high-quality, hand-painted designs.
        </p>
      </section>

      {/* Business Story */}
      <section className="py-16 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6 text-indigo-700">Our Story</h2>
        <p className="text-gray-700 leading-relaxed text-lg mb-4">
          HandArt Gallery began as a small business creating custom hand-painted designs on clothing and personal items. 
          Over time, we have grown into a trusted name for individuals seeking unique, artistic expressions on their own items.
        </p>
        <p className="text-gray-700 leading-relaxed text-lg">
          Each design is created specifically for the item provided, ensuring originality and quality in every piece. 
          We do not mass-produce; we bring your vision to life on your items.
        </p>
      </section>

      {/* Closing Statement */}
      <section className="py-16 px-6 max-w-4xl mx-auto text-center bg-indigo-50 rounded-xl shadow-lg">
        <h2 className="text-3xl font-semibold mb-6 text-indigo-700">Bring Your Ideas to Life</h2>
        <p className="text-gray-700 leading-relaxed text-lg mb-4">
          Turn your clothing and items into unique works of art with HandArt Gallery. 
          From sarees to T-shirts, each piece is hand-painted with creativity and care. 
          Share your vision, and let us create a personalized design that’s truly yours.
        </p>
      </section>
    </div>
  );
}

export default About;
