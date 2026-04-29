
 export const GetAllBooks = async() => {

    const res = await fetch('https://json-server-library-1.onrender.com/books');
    return res.json();
}