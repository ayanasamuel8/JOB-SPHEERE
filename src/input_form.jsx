export default function INPUT({ image_path, type, placeholder }) {
    return (
      <>
        <div className="relative inline-flex flex-col">
          <img 
            src={image_path} 
            alt="img" 
            className="absolute top-1/2 left-3 transform -translate-y-1/2 w-5 h-5"
          />
          <input 
            type={type} 
            placeholder={placeholder} 
            className="pl-10 p-2 border rounded-lg text-start focus:outline-none"
          />
        </div>
      </>
    );
  }
  