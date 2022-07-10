import styles from './ImageExplicitWidthAndHeight.module.scss';
import Image from 'next/future/image';

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
        onLoadingComplete={() => {
          const imgs = document.querySelectorAll('#' + id + ' img');
          imgs.forEach((img) => {
            img.setAttribute('width', '' + width);
            img.setAttribute('height', '' + height);
            // This code is placed here because longdesc attribute is not
            // recognized by the Image component. Remove this code when
            // this attribute will be supported by the Image component.
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
