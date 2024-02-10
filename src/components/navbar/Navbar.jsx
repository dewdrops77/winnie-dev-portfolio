import Sidebar from "../sidebar/Sidebar"
import "./navbar.scss"
import {motion} from "framer-motion"

const Navbar = () => {
    return (
        <div className="navbar">
            {/* Sidebar */}
            <Sidebar/>
            <div className="wrapper">
                <motion.span 
                initial={{opacity:0, scale:0.5}} 
                animate={{opacity:1, scale:1}}
                transition={{duration:0.5}}>WD <strong>.</strong></motion.span>
                <motion.div className="social" 
                initial={{opacity:0, scale:0.5}} 
                animate={{opacity:1, scale:1}}
                transition={{duration:0.5}}>
                    <a href="https://www.facebook.com/profile.php?id=100068624853582&mibextid=ZbWKwL"><img src="/facebook.png" alt="" /></a>
                    <a href="https://www.instagram.com/princ.essbel?igsh=ZGUzMzM3NWJiOQ=="><img src="/instagram.png" alt="" /></a>
                    <a href="https://x.com/Bella_Leonnie?t=Uqcoxps3lC__AYQ0tBLG6Q&s=09"><img src="/twitter.png" alt="" /></a>
                    <a href="https://dribbble.com/Leonnie"><img src="/dribbble.png" alt="" /></a>
                </motion.div>
            </div>
        </div>
    )
}

export default Navbar