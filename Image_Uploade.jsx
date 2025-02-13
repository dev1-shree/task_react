import React, { useState } from "react";

const ImageUploader = () => {
  const [img, setImg] = useState(null);

  const handleChange = (e) => {
    const file = e.target.files[0];
    setImg(URL.createObjectURL(file));
  };
  const handleremoveimage = () => {
    setImg(null);
    // setImg(...img,[name]="")
    document.getElementById("image").value = "";
  };

  return (
    <center>
      <div>
        <input
          type="file"
          id="image"
          accept="image/*"
          onChange={handleChange}
        />
        {img && (
          <div>
            <img src={img} style={{ width: "300px", height: "300px" }} />
            <br></br>
            <button onClick={handleremoveimage}>Remove Image</button>
          </div>
        )}
      </div>
    </center>
  );
};

export default ImageUploader;
