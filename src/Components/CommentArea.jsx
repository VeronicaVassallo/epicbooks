import './singleBook.css'

const  CommentArea = () => {


    
    return(
        
     <form>
        
        <label htmlFor="author">author</label>
        <input type="text"
            name="user" 
            id="user" 
        />
        <label htmlFor="user">Rate</label>
        <input type="namber"
            name="rate" 
            id="rate" 
        />
        <p>
            <label htmlFor="textArea">Aggiungi un commento</label>
        </p>
        <textarea  className='myhight'
            name="textArea"
            id="textArea"
            cols="30" 
            rows="10"> 
        </textarea>
        <br/>
        <button type="submit">Post</button>
     </form>
    )
}

export default CommentArea;
