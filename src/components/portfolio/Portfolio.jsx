import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";


const items = [
    {
        id:1,
        title:"CV Builder Site",
        img:"/portfolio 1.png",
        desc:"In our lastest project, we drove the development of a cutting-edge CV builder website, redefining resume creation for the modern job seekers. Our Platform boasts intuitive design and powerful features, enabling users to effortlessly craft professional resumes tailored to their unique strengths. ",
    },

    {
        id:2,
        title:"Music Site",
        img:"/portfolio 2.png",
        desc:"In another beautiful project, we led the creation of a dynamic music website, redefining the way users engage with tunes online. This platform offers a seamless blend of listening and downloading capabilities. Setting new standards, our website harmonizes innovation with user satisfaction.",
    },
    {
        id:3,
        title:"Ecommerce Site",
        img:"/portfolio 3.png",
        desc:"We crafted a state-of-the-art-e-commerce platform offering an extensive selection of wigs, cosmetics, and accessories. The site boasts intuitive navigation, robust security features, and support for multiple payment methods. With expedited delivery services, we guarantee prompt order processing and customer satisfaction.",
    },
    {
        id:4,
        title:"Message App",
        img:"/portfolio 4.png",
        desc:"We also created a groundbreaking messaging app aimed at revolutionizing communication. Featuring a sleek interface and robust functionality, our app ensures seamless messaging across platforms. Leveraging advanced encryption and intuitive design, our solution prioritizes users privacy and convenience.",
    },
];

const Single = ({item}) => {
    const ref = useRef();

    const {scrollYProgress} = useScroll({
        target: ref,
       // offset: ["end end", "start start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

    return <section>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} alt="" />
                    </div>
                    <motion.div className="textContainer" style={{y}}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button>See Demo</button>
                    </motion.div>
                </div>
            </div>
        </section>;
};

const Portfolio = () => {

    const ref = useRef()

    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["end end", "start start"],
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,        
    });

    return (
        <div className="portfolio" ref={ref}>
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            </div>
            {items.map(item=>(
                <Single item={item} key={item.id}/>
            ))}
        </div>
    );
};


export default Portfolio;