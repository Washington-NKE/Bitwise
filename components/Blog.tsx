import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import Section from './Section';
import Heading from './Heading';
import { blogPosts } from '@/constants';

const BlogPosts = () => {
  const [currentIndex, setCurrentIndex] = useState(0);


  // Number of cards to show at once based on screen size
  const getCardsToShow = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1280) return 3;
      if (window.innerWidth >= 768) return 2;
    }
    return 1;
  };

  const [cardsToShow, setCardsToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      setCardsToShow(getCardsToShow());
    };

    // Set initial value
    setCardsToShow(getCardsToShow());

    // Add event listener
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
    }

    // Remove event listener on cleanup
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? blogPosts.length - cardsToShow : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === blogPosts.length - cardsToShow ? 0 : prevIndex + 1
    );
  };

  return (
    <Section id="blog" className="py-20 bg-gray-900 text-gray-300">
            <Heading
                className=""
                tag="Blogs"
                title=""
                text=""
              />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Latest Articles</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our latest insights, tutorials, and industry updates to stay at the forefront of technology and innovation.
          </p>
        </div>

        <div className="relative">
          {/* Navigation buttons */}
          <button 
            onClick={prevSlide} 
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-gray-800 hover:bg-gray-700 p-2 rounded-full shadow-lg border border-gray-700 text-white transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={nextSlide} 
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-gray-800 hover:bg-gray-700 p-2 rounded-full shadow-lg border border-gray-700 text-white transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>

          {/* Blog posts slider */}
          <div className="overflow-hidden px-4">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)` }}
            >
              {blogPosts.map((post) => (
                <div 
                  key={post.id} 
                  className="px-4 flex-shrink-0" 
                  style={{ width: `${100 / cardsToShow}%` }}
                >
                  <a 
                    href={`/blog/${post.slug}`}
                    className="block h-full bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-700"
                  >
                    <div className="relative h-48 md:h-64">
                      <img 
                        src={post.imageUrl} 
                        alt={post.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <p className="text-sm text-purple-400 font-medium mb-1">{post.date}</p>
                      <h3 className="text-xl font-bold text-white mb-3 hover:text-purple-400 transition-colors">{post.title}</h3>
                      <p className="text-gray-400 mb-6 line-clamp-3">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-gray-600 mr-3"></div>
                          <span className="text-sm text-gray-400">{post.author}</span>
                        </div>
                        <span className="text-purple-400 hover:text-purple-300 flex items-center text-sm font-medium">
                          Read More
                          <ArrowRight className="ml-1 h-4 w-4" />
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <a 
            href="/blog" 
            className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg px-6 py-3 transition-colors"
          >
            View All Articles
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </Section>
  );
};

export default BlogPosts;