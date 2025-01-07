import React, { useEffect } from 'react'
import { useState } from 'react'
const Library = () => {
    const [books,setbooks]=useState([]);
    useEffect(()=>{
        const fetchData=async ()=>{
            const response=await fetch('http://localhost:4005/api/books/');
            const json=await response.json();
            console.log(json);
            setbooks(json);
        }
        fetchData()
    },[])
  return (
    <div>
         <h1>Library</h1>
         <table border={2}>
               <tr>
                   <th>Book_id</th>
                   <th>Book Name</th>
                   <th>Author</th>
                   <th>Year Published</th>
               </tr>
                 {books.map((book,index)=>(
                    <tr>
                        <td>{book.book_id}</td>
                        <td>{book.name}</td>
                        <td>
                            {book.author}
                        </td>
                        <td>{book.year_published}</td>
                    </tr>
                 ))
                 }
              
         </table>
    </div>
  )
}

export default Library