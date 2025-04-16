import { useEffect, useState } from "react";

function InsecureImageFetch() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const folder = "your_folder_name"; // like: products/shoes
      const auth = btoa("your_api_key:your_api_secret"); // Base64 encode

      const response = await fetch(
        `https://api.cloudinary.com/v1_1/your_cloud_name/resources/image/upload?prefix=${folder}/&max_results=100`,
        {
          headers: {
            Authorization: `Basic ${auth}`,
          },
        }
      );

      const data = await response.json();
      setImages(data.resources);
    };

    fetchImages();
  }, []);

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
      {images.map((img) => (
        <img
          key={img.public_id}
          src={img.secure_url}
          alt={img.public_id}
          width="200"
        />
      ))}
    </div>
  );
}

export default InsecureImageFetch;