import { useEffect } from 'react';
import './App.css';
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDScD9zYs8V9fh4EFJaAUxwW6DVRO5fW80",
  authDomain: "quizface-45e19.firebaseapp.com",
  projectId: "quizface-45e19",
  storageBucket: "quizface-45e19.appspot.com",
  messagingSenderId: "831115215424",
  appId: "1:831115215424:web:77aee1b76632b3ed3095a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const tg = window.Telegram.WebApp;

function App() {

  useEffect(() => {
    tg.ready();
  })

  const onClose = () => {
    tg.close()
  }

  return (
    <div className="App">
      work
      <button onClick={onClose}>Закрыть</button>
    </div>
  );
}

export default App;
