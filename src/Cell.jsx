import React from "react";
import './cell.css'

export default function Cell(props){
    const [cnt, setCnt] = React.useState(0);
    const [isHeld, nextHeld] = React.useState(0);
    const [val, nextVal] = React.useState("");
    const [color, nextColor] = React.useState("none")
    const styles = {
        backgroundColor: color,
    }
    function clk(){
        if(isHeld || props.win)return;
        setCnt(cnt+1);
        nextHeld(!isHeld);
        if(props.turn){
            nextVal("X");
            nextColor("red");
        }else {
            nextVal("O");
            nextColor("blue");
        }props.fl(props.id)
    }
    return (
        <div className="cell" onClick = {clk} style = {styles}>
            <div className="container">
                <div className="vertical-center">
                    <p>{val}</p>
                </div>
            </div>  
        </div>
    )
}