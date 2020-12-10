import { FormControl, TextField, List } from "@material-ui/core";
import AddtoPhotoIcon from "@material-ui/icons/AddToPhotos";
import { makeStyles } from "@material-ui/styles";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import React, { useEffect, useState } from "react";
import { db, auth } from "./models/firebase";
import styles from "./App.module.css";
//componernt
import TaskItem from "./componets/TaskItem";

const useStyles = makeStyles({
  field: {
    marginTop: 30,
    marginBottom: 20
  },
  list: {
    margin: "auto",
    width: "40%"
  }
});
const App: React.FC = (props: any) => {
  const [tasks, setTasks] = useState([{ id: "", title: "" }]);
  const [input, setInput] = useState("");
  //materialUiで使用するstyle
  const classes = useStyles();

  useEffect(() => {
    const unSub = auth.onAuthStateChanged((user) => {
      !user && props.history.push("login");
    });
    return () => unSub();
  });
  //databaseの状態監視
  useEffect(() => {
    //mounmtされるタイミングでdbへアクセスしてデータを取得している。
    const unSub = db.collection("tasks").onSnapshot((snapshot) => {
      //取得したデータはstateへ格納
      setTasks(
        snapshot.docs.map((doc) => ({ id: doc.id, title: doc.data().title }))
      );
    });
    return () => unSub();
  }, []);

  const newTask = (e: React.MouseEvent<HTMLButtonElement>) => {
    db.collection("tasks").add({ title: input });
    setInput("");
  };

  return (
    <>
      <div className={styles.app__root}>
        <h1>Todo App React/firebase</h1>
        <button
          className={styles.app__logout}
          onClick={async () => {
            try {
              await auth.signOut();
              props.history.push("/login");
            } catch (error) {
              alert(error.message);
            }
          }}
        >
          <ExitToAppIcon />
        </button>
        <br />
        <FormControl>
          <TextField
            className={classes.field}
            InputLabelProps={{
              shrink: true
            }}
            label="New task?"
            value={input}
            //typewscriptの場合はeventオブジェクトの型を割りたてる必要がある
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setInput(e.target.value)
            }
          />
          <button
            className={styles.app__icon}
            disabled={!input}
            onClick={newTask}
          >
            <AddtoPhotoIcon />
          </button>

          <List className={classes.list}>
            {tasks.map((task) => (
              //TaskItemコンポーネントでinterfaceによる属性を指定しているので合わせないといけない
              <TaskItem key={task.id} id={task.id} title={task.title} />
            ))}
          </List>
        </FormControl>
      </div>
    </>
  );
};

export default App;
