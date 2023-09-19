import React from "react"
import Modal from 'react-bootstrap/Modal';
const CollapseArea = () => {
    return(
<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
              <label htmlFor="author">author</label>
              <input type="text"
                  name="user" 
                  id="user"
                  onChange={(e) => setAuthor(e.target.value)} 
              />
              <label htmlFor="rate">Rate</label>
              <input type="number"
                  name="rate" 
                  id="rate" 
                  onChange={(e) => setRate(e.target.value)}
              />
              <p>
                  <label htmlFor="textArea">Aggiungi un commento</label>
              </p>
              <textarea  className='myhight'
                  name="textArea"
                  id="textArea"
                  cols="30" 
                  rows="10"
                  onChange={(e) => setcommentTextarea(e.target.value)}
                  >
                   
              </textarea>
              <br/>
              <button type="submit" onClick={(e)=> postComment(e)}>Post</button>
          </form>
            <ul>
              {allComments.map((comment) => 
              <li>
                <p>{comment.author}</p>
                <p>{comment.comment}</p>
                
              </li>
              
              )}
              
            </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    )
}
export default CollapseArea;




