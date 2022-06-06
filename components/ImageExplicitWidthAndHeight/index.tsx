import Image from 'next/image';

const ImageExplicitWidthAndHeight = ({ id, src, width, height, alt }: any) => {
  return (
    <div id={id}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        onLoadingComplete={(imageDimension) => {
          const imgs = document.querySelectorAll('#' + id + ' img');
          imgs.forEach((img) => {
            img.setAttribute('width', '' + imageDimension.naturalWidth);
            img.setAttribute('height', '' + imageDimension.naturalHeight);
          });
        }}
      />
    </div>
  );
};

export default ImageExplicitWidthAndHeight;
