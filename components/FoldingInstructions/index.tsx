import styles from './FoldingInstructions.module.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { useTranslations } from 'next-intl';
import ImageNextjs from '../../components/ImageNextjs';

/*
Siguiendo indicaciones de https://yarnpkg.com/package/react-responsive-carousel:
yarn add react-responsive-carousel
*/

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
        <ImageNextjs src="/carousel/fig-01.svg" width="350px" height="350px" />
      </figure>
      <figure>
        <ImageNextjs src="/carousel/fig-02.svg" width="350px" height="350px" />
      </figure>
      <figure>
        <ImageNextjs src="/carousel/fig-03.svg" width="350px" height="350px" />
      </figure>
      <figure>
        <ImageNextjs src="/carousel/fig-04.svg" width="350px" height="350px" />
      </figure>
      <figure>
        <ImageNextjs src="/carousel/fig-05.svg" width="350px" height="350px" />
      </figure>
      <figure>
        <ImageNextjs src="/carousel/fig-06.svg" width="350px" height="350px" />
      </figure>
      <figure>
        <ImageNextjs src="/carousel/fig-07.svg" width="350px" height="350px" />
      </figure>
    </Carousel>
  );
};

export default FoldingInstructions;
