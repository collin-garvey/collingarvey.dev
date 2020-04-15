import React from 'react';

import styles from './Carousel.module.css';

interface ICarouselProps {
  images: [{source: string}];
}

const Carousel: React.SFC<ICarouselProps> = props => {
  return (
    <>
      <div className={styles.carousel}>
        {props.images.map((image: {source: string}, key: number) => {
          return (
            <div className={styles.item} key={key}>
              <div className="aspectContainer">
                <div className="aspectContainer__inner">
                  <img src={image.source} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <span className={styles.instructions}>{'<< Scroll >>'}</span>
    </>
  );
};

export default Carousel;
