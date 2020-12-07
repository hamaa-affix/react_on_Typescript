import React, {useEffect, useState} from "react";
import {db} from "./models/firebase.ts";

interface TaskType {
  id: number;
  title: string;
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState({id: "", title: ""});
  useEffect(() => {
    const  unsub = db.collection("tasks").onSnapshot((snapshot) => {
      setTasks(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          title: doc.data().title
        }))
      )
    })
  }, []);
  return();
}