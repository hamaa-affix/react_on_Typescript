import React from "react";
import * as firebase from "firebase/app";
import { ListItem, TextField, Grid } from "@material-ui/core";
import DeleteOutlineOutIcon from "@material-ui/icons";
import EditOutlineIcon from "@material-ui/icons";

//propsのデータ型を定義する
interface PROPS {
  id: string;
  title: string;
}
const TaskItem: React.FC<PROPS> = (props) => {
  const { id, title } = props;
  return (
    <>
      <ListItem>
        <h2>{title}</h2>
      </ListItem>
    </>
  );
};

export default TaskItem;
