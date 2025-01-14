import React from "react";
import { useSelector } from "react-redux";

export default function Title() {
  const username = useSelector(state => state.username)
  return <h1> Hello {username}</h1>;
}
