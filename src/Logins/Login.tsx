import React, { useState, useEffect } from "react";
//firebase suth
import { auth } from "../models/firebase";
import { Button, FormControl, TextField, Typography } from "@material-ui/core";
import styles from "./Login.module.css";
import { AlternateEmail } from "@material-ui/icons";

//ここで受けているpropsはRouterのhisty　ページデータを補完しているprops = routeObject
const Login: React.FC = (props: any) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    //認証関係の状態変化を監視するfirebaseメソッド　引数の中はuserをとる
    //userの中に認証情報が入ってくるが、空なら認証に失敗している
    auth.onAuthStateChanged((user) => {
      //user情報がからならhistyでhomeへ遷移させる
      user && props.history.push("/");
    });
  }, [props.history]);
  return (
    <>
      <div className={styles.login__root}>
        <h1>{isLogin ? "Login" : "Register"}</h1>
        <br />
        <FormControl>
          <TextField
            InputLabelProps={{
              shrink: true
            }}
            name="email"
            label="E-mail"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setEmail(e.target.value);
            }}
          />
        </FormControl>
        <br />
        <FormControl>
          <TextField
            InputLabelProps={{
              shrink: true
            }}
            name="password"
            label="Password"
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setPassword(e.target.value);
            }}
          />
        </FormControl>
        <br />
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={
            isLogin
              ? async () => {
                  try {
                    await auth.signInWithEmailAndPassword(email, password);
                    props.history.push("/");
                  } catch (error) {
                    alert(error.message);
                  }
                }
              : async () => {
                  try {
                    await auth.createUserWithEmailAndPassword(email, password);
                    props.auth.history.push("/");
                  } catch (error) {
                    alert(error.masseage);
                  }
                }
          }
        >
          {isLogin ? "login" : "register"}
        </Button>
        <br />
        <Typography align="center">
          <span onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Create new account ?" : "Bsck to login"}
          </span>
        </Typography>
      </div>
    </>
  );
};

export default Login;
