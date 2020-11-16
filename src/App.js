import './App.css';
import { useState, useEffect } from 'react';
import Header from "./Header";
import Stories from "./Stories"
import FeedForm from "./FeedForm"
import FeedPost from "./FeedPost"

import { db } from "./firebase.js"


function App() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot=>{
      setPosts(snapshot.docs.map(function(doc){
        return {info:doc.data()}
      }))
    })
  }, [])
  return (
    <div className="App">
      <Header />
      <Stories />
      <FeedForm />

      {posts.map(function (val) {
        return (
        <FeedPost nome={val.info.nome} content={val.info.conteudo} img={val.info.img} />
        )
      })
      }


    </div>
  );
}

export default App;
