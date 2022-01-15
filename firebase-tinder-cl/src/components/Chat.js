import React, { useState } from 'react'
import './Chat.css'
import db from '../firebase'


const Chat = () => {

      const [personName, setPersonName] = useState();
      const [imageurl, setImageurl] = useState();

      const addItems = (personName, imageurl) =>{
            db.collection('people').add({name: personName, url: imageurl});
      }

      const handleSubmit = event => {
          event.preventDefault();
          addItems(personName,imageurl);
          setPersonName('')
          setImageurl('')
          
    }
          
      return (
            <div>
                  <form>
                        <h1>Form Details</h1>
                        <div className="form-content">
                              <label htmlFor="name">Enter name: </label>
                              <input type="text" name="name" placeholder="Enter name" onChange={e => setPersonName(e.target.value) } value={personName} />
                        </div>
                        <div className="form-content">
                              <label htmlFor="url">Enter your email: </label>
                              <input type="url" name="url" placeholder="Enter url" onChange={e => setImageurl(e.target.value)} value={imageurl} />
                        </div>

                        <button onClick={handleSubmit}>Submit</button>
                  </form>
            </div>
      )
}

export default Chat
