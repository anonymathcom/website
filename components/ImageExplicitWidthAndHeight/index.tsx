import styles from './ImageExplicitWidthAndHeight.module.scss';
import Image from 'next/image';

const ImageExplicitWidthAndHeight = ({
  id,
  src,
  width,
  height,
  alt,
  longdesc,
}: any) => {
  return (
    <div id={id} className={styles.imageExplicitWidthAndHeight}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        layout="raw"
        onLoadingComplete={() => {
          const imgs = document.querySelectorAll('#' + id + ' img');
          imgs.forEach((img) => {
            img.setAttribute('width', '' + width);
            img.setAttribute('height', '' + height);
            if (longdesc != undefined) {
              img.setAttribute('longdesc', '' + longdesc);
            }
          });
        }}
      />
    </div>
  );
};

export default ImageExplicitWidthAndHeight;
