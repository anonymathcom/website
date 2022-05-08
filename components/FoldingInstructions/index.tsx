import styles from './FoldingInstructions.module.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { useTranslations } from 'next-intl';

import Image from 'next/image';

import slide_01 from '../../public/carousel/fig-01.svg';
import slide_02 from '../../public/carousel/fig-02.svg';
import slide_03 from '../../public/carousel/fig-03.svg';
import slide_04 from '../../public/carousel/fig-04.svg';
import slide_05 from '../../public/carousel/fig-05.svg';
import slide_06 from '../../public/carousel/fig-06.svg';
import slide_07 from '../../public/carousel/fig-07.svg';

/*
Siguiendo indicaciones de https://yarnpkg.com/package/react-responsive-carousel:
yarn add react-responsive-carousel
*/

const FoldingInstructions = () => {
  const t = useTranslations('Home.steps.three.steps');

  const handleCarouselChange = () => {
    const controlArrowRightElement =
      document.getElementsByClassName('control-next')[0];
    controlArrowRightElement.classList.add('stop-animation');
  };

  return (
    <Carousel
      className={styles['custom-carousel']}
      useKeyboardArrows
      showThumbs={false}
      emulateTouch={true}
      onChange={handleCarouselChange}
    >
      <figure>
        <Image
          alt={t('one.title')}
          src={slide_01}
          layout="intrinsic"
          objectFit="contain"
          priority
        />
      </figure>
      <figure>
        <Image
          alt={t('two.title')}
          src={slide_02}
          layout="intrinsic"
          objectFit="contain"
          priority
        />
      </figure>
      <figure>
        <Image
          alt={t('three.title')}
          src={slide_03}
          layout="intrinsic"
          objectFit="contain"
          priority
        />
      </figure>
      <figure>
        <Image
          alt={t('four.title')}
          src={slide_04}
          layout="intrinsic"
          objectFit="contain"
          priority
        />
      </figure>
      <figure>
        <Image
          alt={t('five.title')}
          src={slide_05}
          layout="intrinsic"
          objectFit="contain"
          priority
        />
      </figure>
      <figure>
        <Image
          alt={t('six.title')}
          src={slide_06}
          layout="intrinsic"
          objectFit="contain"
          priority
        />
      </figure>
      <figure>
        <Image
          alt={t('seven.title')}
          src={slide_07}
          layout="intrinsic"
          objectFit="contain"
          priority
        />
      </figure>
    </Carousel>
  );
};

export default FoldingInstructions;
