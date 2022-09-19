import React from "react";
import { Homepage } from "../pages";
import { Popup } from "../popup";
import './app.sass';


export default class App extends React.Component {

   render() {
      return (
         <>
            <Popup />
            <Homepage />
         </>
      )
   }
}
