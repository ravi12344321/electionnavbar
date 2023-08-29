import React from "react";
import "./Footer.css";
import fb from "./assets/1fb.png";
import Twitter from "./assets/4twitter.png";
import linkedin from "./assets/3linke.png";
import insta from "./assets/2insta.png";

export default function Footer() {
    return (


        <div className="footer">
            <div className="sb_footer section_padding">
                <div className="sb_footer-Links">
                    <div className="sb_footer-Links_div">
                        <h4>For Bussiness</h4>
                        <a href="/employer">
                            <p>Employer</p>
                        </a>
                        <a href="/abcde">
                            <p>abcde</p>
                        </a>
                        <a href="/abeced">
                            <p>abesdfe</p>
                        </a>
                    </div>
                    <div className="sb_footer-Links_div">
                        <h4>resource</h4>
                        <a href="/employer">
                            <p>employer</p>
                        </a>
                        <a href="/employer">
                            <p>employer</p>
                        </a>
                        <a href="/employer">
                            <p>employer</p>
                        </a>
                    </div>
                    <div className ="sb_footer-Links_div">
                        <h4>parters</h4>
                        <a href="/abecde">

                        </a>
                    </div>
                    <div className="sb_footer-Links_div">
                        <h4>company</h4>
                        <a href="/employe">
                            <p>Employewe</p>
                        </a>
                        <a href="/employe">
                            <p>Employewe</p>
                        </a>
                        
                        <a href="/employe">
                            <p>Employewe</p>
                        </a>
                        <a href="/employe">
                            <p>Employewe</p>
                        </a>
                    </div>
                    <div className="sb_footer-Links_div">
                        <h4>comming soon on</h4>
                        <div className="socialmedia">
                            <p><img src={fb} alt=""/></p>
                            <p><img src={Twitter} alt=""/></p>
                            <p><img src={linkedin} alt=""/></p>
                            <p><img src={insta} alt=""/></p>
                        </div>
                    </div>
                </div>

            <hr></hr>

            <div className="sb_footer-below">
                <div className="sb_footer-copyright">
                    <p>
                        @{new Date().getFullYear} codeInn.All right reserved.
                    </p>
                </div>
                <div className="sb_footer-below-links">
                    <a href="/terms"><div><p>Terms& Conditions</p></div></a>
                    <a href="/Privacy"><div><p>Privacy</p></div></a>
                    <a href="/Security"><div><p>Security</p></div></a>
                    <a href="/Cookie"><div><p>Cookie Declaration</p></div></a>
                </div>
            </div>

            </div>
        </div>
  )
}