import { useState } from "react"

export const useTemplateSetter = ()=>{
    const [productDescription, setProductDescription] = useState('')
    const [productName, setProductName] = useState('')
    const [productPrice, setProductPrice] = useState('');
    const [productDiscountPrice, setProductDiscountPrice] = useState('');
    const [image, setProductImage] = useState("")



    return {
      setProductDescription,
      setProductName,
      setProductPrice,
      setProductDiscountPrice,
      productDescription,
      productPrice,
      productName,
      productDiscountPrice,
      image,
      setProductImage,
    };

}