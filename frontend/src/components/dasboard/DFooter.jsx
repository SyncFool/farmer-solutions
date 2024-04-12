import React from "react";

export default function DFooter(){
return(
    <>
    <div style={{

        position:"inherit",
        width:"100%",
        height:"5vh",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        padding:"3rem"
    }}>
        © Copyrights farmer solutions {new Date().getFullYear()}. All rights reserved.
    </div>
    </>
)


}