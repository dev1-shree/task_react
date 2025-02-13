import React,{useState} from "react";

const MultipleImage = () => {
  const [img, setImg] = useState([]);

  const handleChange = (e) => {
    const files = Array.from(e.target.files);
    const imageurl = files.map((file) => URL.createObjectURL(file));

    setImg((prev) => [...prev, ...imageurl]);
  };
  
  const handleremoveimage=(index)=>{
   setImg(img.filter((_,i)=>i!==index))
  }

  return (
    <center>
      <div>
        <input
          type="file"
          id="image"
          accept="image/*"
          multiple
          onChange={handleChange}
        />
       {img.length>0&&(
          <div style={{marginTop: "20px", display: "flex", gap: "20px", flexWrap: "wrap"}} >
             {img.map((image,index)=>(
                <div >
                <img src={image}  style={{width:"200px",height:"200px"}}  />
                <br></br>
                <button onClick={()=>handleremoveimage(index)}>Remove Image</button>
                </div>
             ))}

          </div>
       )}
      </div>
    </center>
  )
};

export default MultipleImage;
