import React, { Component } from "react";
import firebase from "firebase/app";
import "firebase/database";
import {
  FirebaseDatabaseProvider,
  FirebaseDatabaseNode,
} from "@react-firebase/database";
import { firebaseConfig } from "../firebase";
import PintaLeds from "./PintaLeds";

export default class LedList extends Component {
    constructor(props){
        super(props)
        this.state = {
            r: 0,
            g: 0,
            b: 0
        }
    }
    render() {
    return (
      <div>
        <FirebaseDatabaseProvider firebase={firebase} {...firebaseConfig}>
          <FirebaseDatabaseNode path="led/">
            {(data) => {
              const { value } = data;
              if (value === null || typeof value === "undefined") return null;
              const keys = Object.keys(value);
              const values = Object.values(value);
             
              return <PintaLeds items={values} />;
            }}
          </FirebaseDatabaseNode>
        </FirebaseDatabaseProvider>
      </div>
    );
  }
}
