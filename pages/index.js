import styles from "../styles/Home.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className={styles.container}>
      <motion.h1 layoutId="header">張祐豪的作品集 by next.js</motion.h1>
      <div className={styles["product-container"]}>
        {["guessw07","modalw07","monsterkiller","navbar","lastsemesterworks"].map((product) => (
          <Link href={product}>
            
              <motion.img
                layoutId={product}
                className={styles.image}
                src={product + ".PNG"}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
              />
            
          </Link>
        ))}
      </div>
      <div className={styles["product-container"]}>
        {["tictatoew11","asynchromousw13","mealw13","reacthomework","selfstudCovid19AI"].map((product) => (
          <Link href={product}>
            
              <motion.img
                layoutId={product}
                className={styles.image}
                src={product + ".PNG"}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
              />
            
          </Link>
        ))}
      </div>
    </div>
  );
}