import React,{useState}  from 'react';

export default function ImageEditor(props) {
  const[image,setImage]=useState('https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Flandscapes&psig=AOvVaw0DlrMn9zgVGpB5l3XAO8NL&ust=1701755303912000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCMjs0fuJ9YIDFQAAAAAdAAAAABAE');
    const changeImage = () =>
    {
      let newImage = image.tochangeImage();
      setImage(newImage);
    }
return (
    <div>
      <img src="https://www.1800flowers.com/blog/wp-content/uploads/2015/10/red-roses.jpg.webp" id='theImage' class="img-fluid" style={{height:300,width:500}}>
        
      </img>
</div>
  )
}




