import * as React from 'react'
import {Link} from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import {reviews} from "/Users/gaiagoulandris/Documents/GitHub/wgtb/src/components/reviews.module.css"

const Reviews = () => {
    return (
        <section className={reviews}>
        <h2>Single Review</h2>
        <article>
          <div>
            <Link>
              <StaticImage
                src="https://i0.wp.com/georgetownradio.com/wp/wp-content/uploads/2021/03/hitlikeagirl-emilyberger.jpg?resize=350%2C200"
                alt=""
                />
            </Link>
          </div>
          <h3>
            Hit Like A Girl’s Newest Single “Monsters” is an Anthem for the Forgotten
          </h3>
          <p>
            Hit Like A Girl’s newest single, “Monsters”, came out on March
            16, 2021. "Monsters" is the second single shared from their
            third album, Heart Racer, which will be released on April 2nd
            through...
          </p>
        </article>
        <h2>Album Reviews</h2>
          <article>
            <div>
              <Link>
                <StaticImage>
                  src="https://i0.wp.com/georgetownradio.com/wp/wp-content/uploads/2023/01/og_image.jpg?resize=350%2C200"
                  alt=""
                </StaticImage>
              </Link>
            </div>
          </article>
      </section>


    );
};

export default Reviews;