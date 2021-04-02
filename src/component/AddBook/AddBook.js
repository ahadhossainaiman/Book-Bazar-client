import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const AddBook = () => {
  const { register, handleSubmit, watch, errors } = useForm();

    const [imageUrl,setImageUrl] = useState(null)

  const onSubmit = (data) =>{
    const eventData = {
        bookName:data.bookName,
        authorName:data.authorName,
        price:data.price, 
        imageUrl:imageUrl
    };
    const url =`https://nameless-plateau-23547.herokuapp.com/addBook`
    fetch(url,{
        method:'POST',
        headers:{ 'content-type':'application/json'},
        body:JSON.stringify(eventData)
    })
    .then(res => console.log('server side response'))
    console.log(eventData)
  } 
  const handleImageUpload = (event) => {
    console.log(event.target.files[0]);
    const imageData = new FormData();
    imageData.set("key", "56489a32a100a5eccb9c2e11041fbd0e");
    imageData.append("image", event.target.files[0]);
axios.post('https://api.imgbb.com/1/upload',imageData)
      .then((res) => {
        setImageUrl(res.data.data.display_url);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <h1>Add Book</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p>Book name</p>
        <input name="bookName" defaultValue="" ref={register} />
        <p>Author Name</p>
        <input name="authorName" ref={register}/>
        <p>Add Price</p>
        <input name="price" ref={register}/>
        <p>Add Book Cover Photo</p>
        <input
          name="exampleRequired"
          type="file"
          onChange={handleImageUpload}
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddBook;
