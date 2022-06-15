import React from "react";
import memesData from "../memesData";
export default function Random()
{
    const memes = memesData.data.memes;
    const no = Math.floor(Math.random()*memes.length)
    return (
        <h3>{ no}</h3>
    )
}