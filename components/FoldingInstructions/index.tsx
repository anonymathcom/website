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

const FoldingInstructions = () => {
  const t = useTranslations('Pages.Home.steps.two.steps');

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
          id="img-1"
          alt={t('one.title')}
          src={slide_01}
          layout="intrinsic"
          objectFit="contain"
          priority
          onLoadingComplete={(imageDimension) => {
            document
              .getElementById('img-1')
              ?.setAttribute('width', '' + imageDimension.naturalWidth);
            document
              .getElementById('img-1')
              ?.setAttribute('height', '' + imageDimension.naturalHeight);
          }}
        />
      </figure>
      <figure>
        <Image
          id="img-2"
          alt={t('two.title')}
          src={slide_02}
          layout="intrinsic"
          objectFit="contain"
          priority
          onLoadingComplete={(imageDimension) => {
            document
              .getElementById('img-2')
              ?.setAttribute('width', '' + imageDimension.naturalWidth);
            document
              .getElementById('img-2')
              ?.setAttribute('height', '' + imageDimension.naturalHeight);
          }}
        />
      </figure>
      <figure>
        <Image
          id="img-3"
          alt={t('three.title')}
          src={slide_03}
          layout="intrinsic"
          objectFit="contain"
          priority
          onLoadingComplete={(imageDimension) => {
            document
              .getElementById('img-3')
              ?.setAttribute('width', '' + imageDimension.naturalWidth);
            document
              .getElementById('img-3')
              ?.setAttribute('height', '' + imageDimension.naturalHeight);
          }}
        />
      </figure>
      <figure>
        <Image
          id="img-4"
          alt={t('four.title')}
          src={slide_04}
          layout="intrinsic"
          objectFit="contain"
          priority
          onLoadingComplete={(imageDimension) => {
            document
              .getElementById('img-4')
              ?.setAttribute('width', '' + imageDimension.naturalWidth);
            document
              .getElementById('img-4')
              ?.setAttribute('height', '' + imageDimension.naturalHeight);
          }}
        />
      </figure>
      <figure>
        <Image
          id="img-5"
          alt={t('five.title')}
          src={slide_05}
          layout="intrinsic"
          objectFit="contain"
          priority
          onLoadingComplete={(imageDimension) => {
            document
              .getElementById('img-5')
              ?.setAttribute('width', '' + imageDimension.naturalWidth);
            document
              .getElementById('img-5')
              ?.setAttribute('height', '' + imageDimension.naturalHeight);
          }}
        />
      </figure>
      <figure>
        <Image
          id="img-6"
          alt={t('six.title')}
          src={slide_06}
          layout="intrinsic"
          objectFit="contain"
          priority
          onLoadingComplete={(imageDimension) => {
            document
              .getElementById('img-6')
              ?.setAttribute('width', '' + imageDimension.naturalWidth);
            document
              .getElementById('img-6')
              ?.setAttribute('height', '' + imageDimension.naturalHeight);
          }}
        />
      </figure>
      <figure>
        <Image
          id="img-7"
          alt={t('seven.title')}
          src={slide_07}
          layout="intrinsic"
          objectFit="contain"
          priority
          onLoadingComplete={(imageDimension) => {
            document
              .getElementById('img-7')
              ?.setAttribute('width', '' + imageDimension.naturalWidth);
            document
              .getElementById('img-7')
              ?.setAttribute('height', '' + imageDimension.naturalHeight);
          }}
        />
      </figure>
    </Carousel>
  );
};

export default FoldingInstructions;
