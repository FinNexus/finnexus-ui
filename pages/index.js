import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.leftStyleBackground}></div>
      </div>
      <div className={styles.centerContent}>
        <div className={styles.navbar}>
          {/*https://stackoverflow.com/questions/4476526/do-i-use-img-object-or-embed-for-svg-files*/}
          <object className={styles.logoProps} data="fnxLogo.svg" type="image/svg+xml"></object>
          <div className={styles.navBtnsContainer}>
            <button className={styles.fnxBtn}>Click1</button>
            <button className={styles.fnxBtn}>Click1</button>
            <button className={styles.fnxBtn}>Click1</button>
            <button className={styles.fnxBtn}>Click1</button>
            <button className={styles.fnxBtn}>Click1</button>
            <object className={styles.langIcoProps} data="language_icon.svg" type="image/svg+xml"></object>
          </div>
        </div>
        <div className={styles.mainContent}>
          <div className={styles.upperMainContent}>
            <div>
              <h1 className={styles.compName}>FinNexus</h1>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <div>
        <div className={styles.rightStyleBackground}></div>
      </div>
    </div>
  );
}
