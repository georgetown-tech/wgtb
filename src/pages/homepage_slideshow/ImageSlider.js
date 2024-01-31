// ImageSlider.js
import React, { useState } from 'react';
import './ImageSlider.css'; // Make sure to create an ImageSlider.css file for styling
import { graphql, Link, useStaticQuery } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

const Preview = ({ previews }) => {
  return (
    <main>
      {previews.map((preview) => (
        <Link to={`/${preview.url}`}>
          <div className="slide-container" key={preview.id}>
            <img
              src={preview.image.url}
              alt={preview.title}
              style={{ width: 200, height: 'auto' }}
            />
            <div className="preview-info"> {/*title author and date*/}
              <h1 className="title">{preview.title}</h1> 
              <h2 className="author">{preview.author}</h2>
            </div>
            <p className="preview-content"> {preview.content.content}</p>
          </div>
        </Link>
      ))
      }
    </main>
)};

const ImageSlides = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulArticle {
        nodes {
          title
          author
          datetime
          image {
            url
          }
          content {
            content
          }
        }
      }
    }
  `);

  const previews = data.allContentfulArticle.nodes;

  return(
    <div className ="articles">
      <Preview previews={previews}/>
    </div>
  )
}


const ImageSlider = ({ slides }) => {
  // const [current, setCurrentIndex] = useState(0);
  // const length = slides.length;

  // const nextSlide = () => {
  //   setCurrentIndex(current === length - 1 ? 0 : current + 1);
  // }; 

  // const prevSlide = () => {
  //   setCurrentIndex(current === 0 ? length - 1 : current - 1);
  // };

  // if (!Array.isArray(slides) || slides.length <= 0) {
  //   return null; // If there are no slides, don't render the component
  // }

  return (
    <div className='slider'>
      
      <ImageSlides/>



      {/* <button className='left-arrow' onClick={prevSlide}>
        &lt;
      </button>
      <button className='right-arrow' onClick={nextSlide}>
        &gt;
      </button>
       {slides.map((slide, index) => (
        <div className={index === current ? 'slide active' : 'slide'} key={index}>
          {index === current && (
            <>
              <a href={slide.link} target="_blank" rel="noopener noreferrer">
                <img src={slide.imageSrc} alt={slide.title} className='image' />
              </a>
              <div className="slide-caption">
                <h2>{slide.title}</h2>
                <p className="slide-text">{slide.description}</p>
                <p>read more </p>
              </div>
            </>
          )}
        </div>
      ))} */}
    </div>
  );
};

export default ImageSlider;



