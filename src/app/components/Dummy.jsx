// import axios from "axios";

// const [imageUrl, setImageUrl] = useState("");

// // image upload function
// const handleImageUpload = async (e) => {
//   try {
//     const formData = new FormData();
//     const file = e.target.files[0];
//     formData.append("image", file);

//     const response = await axios.post(
//       `http://localhost:4000/api/banner/upload`,
//       formData,
//       {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       }
//     );

//     if (response.data.success) {
//       setImageUrl(response.data.imageUrl);
//       alert("Image uploaded successfully!");
//     } else {
//       alert("Image upload failed");
//     }
//   } catch (error) {
//     console.error("Image upload error:", error);
//     alert("Image upload error");
//   }
// };

// const handleSubmit = async (e) => {
//   e.preventDefault();

//   try {
//     const allData = {
//       ...formData,
//       image: imageUrl ? [{ url: imageUrl, alt: formData.name }] : [],
//     };

//     if (editingProduct) {
//       const response = await axios.put(
//         `${BASE_URL_TOW}/${editingProduct._id}`,
//         productData
//       );
//       if (response.data.success) {
//         alert("Product updated successfully!");
//       } else {
//         alert(`Error: ${response.data.message}`);
//       }
//     } else {
//       const response = await axios.post(`${BASE_URL_TOW}`, productData);
//       if (response.data.success) {
//         alert("Product created successfully!");
//       } else {
//         alert(`Error: ${response.data.message}`);
//       }
//     }
//   } catch (error) {
//     console.error("Product operation error:", error);

//     // IMPROVED: Better error messages
//     if (error.response?.data?.message) {
//       alert(`Error: ${error.response.data.message}`);
//     } else if (error.message) {
//       alert(`Error: ${error.message}`);
//     } else {
//       alert("An unknown error occurred while saving the product");
//     }
//   }
// };
