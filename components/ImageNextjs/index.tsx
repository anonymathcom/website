const ImageNextjs = ({ id, src, width, height }: any) => {
  return (
    <div
      id={id}
      style={{
        backgroundImage: `url(${src})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: `${width}`,
        height: `${height}`,
      }}
      className="background-image"
    ></div>
  );
};

export default ImageNextjs;
