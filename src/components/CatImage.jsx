const CatImage = ({ src }) => (
    <img
        src={src}
        alt="Cat"
        className=" aspect-3/2 object-cover rounded-lg w-auto mb-[20px]"
    />
);

export default CatImage;
