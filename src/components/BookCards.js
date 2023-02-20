import React from 'react'
import useGetApiData from '../hooks/useGetApiData';

export const BookCards = () => {
    const [books] = useGetApiData("https://jsonplaceholder.typicode.com/posts");
    console.log(books);

  return (
    <div>BookCards</div>
  )
}
