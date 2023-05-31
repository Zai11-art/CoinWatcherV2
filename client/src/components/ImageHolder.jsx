const ImageHolder = ({image}) => {
    
  return (
    <div>
      <img
        className="w-[50px] h-[50px] rounded-full"
        src={`http://localhost:8080/assets/${image}`}
        alt=""
      />
    </div>
  );
};

export default ImageHolder;
