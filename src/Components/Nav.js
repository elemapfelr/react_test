import React from "react";

function Nav(props){
    return(
        <div className="nav">
            <h1 className="logo">LOGO</h1>
            <div className="gnb">
                <ul>
                    <li onClick={()=>props.gnbclickFunc("Home")}>HOME</li>
                    <li onClick={()=>props.gnbclickFunc("Project agit")}>PROJECT AGIT</li>
                    <li onClick={()=>props.gnbclickFunc("Final output")}>FINAL OUTPUT</li>
                    <li onClick={()=>props.gnbclickFunc("Design process")}>DESIGN PROCESS</li>
                    <li onClick={()=>props.gnbclickFunc("Team")}>TEAM</li>
                </ul>
            </div>
        </div>
    )
}

export default Nav;