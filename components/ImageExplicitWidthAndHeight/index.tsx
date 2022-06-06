import styles from './ImageExplicitWidthAndHeight.module.scss';
import Image from 'next/image';

const ImageExplicitWidthAndHeight = ({ id, src, width, height, alt }: any) => {
  return (
    <div id={id} className={styles.imageExplicitWidthAndHeight}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        onLoadingComplete={() => {
          const imgs = document.querySelectorAll('#' + id + ' img');
          imgs.forEach((img) => {
            img.setAttribute('width', '' + width);
            img.setAttribute('height', '' + height);
          });
        }}
      />
    </div>
  );
};

export default ImageExplicitWidthAndHeight;
