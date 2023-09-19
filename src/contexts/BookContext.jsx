import React, { useState, createContext, useEffect} from "react";

export const Books = createContext();

const url = 'https://epibooks.onrender.com/';

const BookContext = ({children}) => {

   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(null);
   const[ books, setBooks] = useState([]);

   const getData = async () => {
    try{
        setLoading(true)
        const response = await fetch(url)
        const data = await response.json()
        setBooks(data);
        setLoading(false)
        
    }catch(error){
        setError(error)
    }


   
   }

   useEffect(() => {
    getData()
   }, [])
 

    return(
       <Books.Provider value={{error, loading, books, setBooks, getData}}>
        {children}
       </Books.Provider>
    )
}

export default BookContext;
