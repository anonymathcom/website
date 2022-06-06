import styles from './FoldingInstructions.module.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { useTranslations } from 'next-intl';
import ImageExplicitWidthAndHeight from '../../components/ImageExplicitWidthAndHeight';
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
        <ImageExplicitWidthAndHeight
          id="slide-1"
          src={slide_01}
          width={156}
          height={94}
          alt={t('one.title')}
        />
      </figure>
      <figure>
        <ImageExplicitWidthAndHeight
          id="slide-2"
          src={slide_02}
          width={156}
          height={94}
          alt={t('two.title')}
        />
      </figure>
      <figure>
        <ImageExplicitWidthAndHeight
          id="slide-3"
          src={slide_03}
          width={156}
          height={94}
          alt={t('three.title')}
        />
      </figure>
      <figure>
        <ImageExplicitWidthAndHeight
          id="slide-4"
          src={slide_04}
          width={156}
          height={94}
          alt={t('four.title')}
        />
      </figure>
      <figure>
        <ImageExplicitWidthAndHeight
          id="slide-5"
          src={slide_05}
          width={156}
          height={94}
          alt={t('five.title')}
        />
      </figure>
      <figure>
        <ImageExplicitWidthAndHeight
          id="slide-6"
          src={slide_06}
          width={156}
          height={94}
          alt={t('six.title')}
        />
      </figure>
      <figure>
        <ImageExplicitWidthAndHeight
          id="slide-7"
          src={slide_07}
          width={156}
          height={94}
          alt={t('seven.title')}
        />
      </figure>
    </Carousel>
  );
};

export default FoldingInstructions;
