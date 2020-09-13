import styles from "../styles/Home.module.css";
import Head from 'next/head';
import ArrowComponent from '../components/arrow';
import MemberComponent from '../components/member';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>FinNexus</title>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"></link>
      </Head>
      {/** START -- Upper Section. Can be later moved to a component */}
      <div className={`${styles.section} ${styles.bkgImgBlue}`}>
        <div className={styles.leftStyleBackground}></div>
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
          <div className={`${styles.mainContent}`}>
            <div className={styles.upperMainContent}>
              <div>
                <p className={styles.compName}>FinNexus</p>
                <p style={{ marginBottom: "10px" }}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ul</p>
                <span>
                  <button className={`${styles.fnxBtn} ${styles.fnxPinkBtn}`}>Click1</button>
                  <button className={`${styles.fnxBtn} ${styles.fnxWhiteBtn}`}>Click1</button>
                </span>
              </div>
              <div style={{ padding: "1em 1em 20em 15em" }}>
                <object style={{ height: "15em" }} data="bgshape_01.svg" type="image/svg+xml"></object>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.rightStyleBackground}></div>
      </div>
      {/** END -- Upper Section. Can be later moved to a component */}

      {/** START -- Next Section Content */}
      <div className={`${styles.section} ${styles.middleSection}`}>
        <div className={`${styles.leftStyleBackground} ${styles.leftPinkStyleBackground}`}>
          <div className={`${styles.leftPinkStyleBackground} ${styles.leftLightPinkStyleBackground}`}></div>
        </div>
        <div className={`${styles.middleSectionContent}`}>
          <div className={`${styles.halfMiddleSection}`}>
            <div className={styles.halfMiddleOneThird}>
              <div className={styles.imageContainer}>
                <div className={styles.imageBox}></div>
                <div className={styles.textBox}><span className={styles.biggerText}>FPO</span> v1.0</div>
              </div>
              <div style={{ padding: "30px 0", color: "white" }}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ul
              </div>
              <button className={`${styles.fnxBtn} ${styles.fnxWhiteBtn}`}>Click1</button>
            </div>
            <div className={styles.halfMiddleTwoThird}></div>
          </div>
        </div>
        <div className={`${styles.rightStyleBackground} ${styles.rightPinkStyleBackground}`}>
          <div className={`${styles.rightPinkStyleBackground} ${styles.rightLightPinkStyleBackground}`}>
          </div>
        </div>
      </div>
      {/** END -- Next Section Content */}

      {/** START -- Third Section Content */}
      <div className={`${styles.section} ${styles.thirdSection}`}>
        <div className={styles.leftThirdSection}>
          <div style={{ height: "25%" }}></div>
          <div className={styles.leftThirdOuterSection}><div className={styles.leftThirdInnerSection}></div></div>
        </div>
        <div className={styles.thirdSectionContent}>
          <div className={styles.picBoxContainer}>
            <div className={styles.picBox}>
              <div className={styles.innerPicBox}>
                <p className={styles.innerBoxTitle}>Title</p>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy </p>
                <ArrowComponent position="bottom right" size="medium" glyphDir="right" glyphColor="pink" />
              </div>
            </div>
            <div className={styles.picBox}>
              <div className={styles.innerPicBox}>
                <p className={styles.innerBoxTitle}>Title</p>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy </p>
                <ArrowComponent position="bottom right" size="medium" glyphDir="right" glyphColor="pink" />
              </div>
            </div>
            <div className={styles.picBox}>
              <div className={styles.innerPicBox}>
                <p className={styles.innerBoxTitle}>Title</p>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy </p>
                <ArrowComponent position="bottom right" size="medium" glyphDir="right" glyphColor="pink" />
              </div>
            </div>
          </div>
          {/*  <div className={styles.picSliderContainer}>
            <div className={styles.picSliderTextBox}><div style={{ width: "25%" }}></div><div><p className={styles.picSliderTextHeader}>INVESTORS</p><p className={styles.picSliderTextContent}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy</p></div></div>
            <div className={styles.picSlider}>
              <span><ArrowComponent right="94%" bottom="96px" size="large" glyphDir="left" glyphColor="blue" /></span>
              <div className={styles.picSliderBox}></div>
              <div className={styles.picSliderBox}></div>
              <div className={styles.picSliderBox}></div>
              <div className={styles.picSliderBox}></div>
              <span><ArrowComponent right="63px" bottom="91px" size="large" glyphDir="right" glyphColor="blue" /></span>
            </div>
          </div>
          <div className={styles.picSliderContainer}>
            <div className={styles.picSliderTextBox}><div style={{ width: "25%" }}></div><div><p className={styles.picSliderTextHeader}>INVESTORS</p><p className={styles.picSliderTextContent}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy</p></div></div>
            <div className={styles.picSlider}>
              <span><ArrowComponent right="94%" bottom="96px" size="large" glyphDir="left" glyphColor="lightpink" /></span>
              <div className={styles.picSliderBox}></div>
              <div className={styles.picSliderBox}></div>
              <div className={styles.picSliderBox}></div>
              <div className={styles.picSliderBox}></div>
              <span><ArrowComponent right="63px" bottom="91px" size="large" glyphDir="right" glyphColor="lightpink" /></span>
            </div>
          </div> */}
        </div>
        <div className={styles.rightThirdSection}>
          <div style={{ height: "25%" }}></div>
          <div className={styles.rightThirdOuterSection}><div className={styles.rightThirdInnerSection}></div></div>
        </div>
      </div>
      {/** END -- Third Section Content */}

      <div className={`${styles.section}`}>
        <MemberComponent></MemberComponent>
      </div>
      {/** START -- Bottom Section */}
      <div className={`${styles.section} ${styles.bkgImgBlueInverted}`} style={{ minHeight: "800px" }}>
        <div className={styles.leftUpperStyleBackground}></div>
        <div className={styles.centerContentInverted}>
          <div className={`${styles.mainContent}`} style={{ padding: "0 40px", margin: "4em auto 0 auto", color: "white" }}>
            <div style={{ height: "100%" }}>
              <div style={{ marginBottom: "10px" }}>
                <p style={{ fontSize: "3em", margin: "0", fontWeight: "900" }}>Join</p>
                <p>the <b>FinNexus</b> community NOW</p>
              </div>
              <div>
                <span className={styles.userPicIcon}></span>
                <span className={styles.userPicIcon}></span>
                <span className={styles.userPicIcon}></span>
                <span className={styles.userPicIcon}></span>
                <span className={styles.userPicIcon}></span>
              </div>
              <div>
                <span className={styles.userPicIcon}></span>
                <span className={styles.userPicIcon}></span>
                <span className={styles.userPicIcon}></span>
                <span className={styles.userPicIcon}></span>
                <span className={styles.userPicIcon}></span>
              </div>
            </div>
            <div>
              <p style={{ fontSize: "3em" }}><b>SUBSCRIBE</b></p>
              <p>to the <b>FinNexus</b> NewsLetters</p>
              <span style={{ position: "relative" }}>
                <input className={styles.subscribeInput} placeholder="Your email" />
                <button className={styles.subscribeBtn}><b>ok</b></button>
              </span>
            </div>
          </div>
        </div>
        <div className={styles.rightUpperStyleBackground}>
        </div>
      </div>
      {/** END -- Bottom Section */}
    </div>
  );
}
