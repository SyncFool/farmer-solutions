import React from "react";

export default function DFooter(){
return(
    <>
    <div id="footer" style={{

        position:"absolute",
        width:"100%",
        height:"5vh",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        padding:"3rem"
    }} >
        © Copyrights farmer solutions {new Date().getFullYear()}. All rights reserved.
    </div>
    </>
)


}