import styles from "../styles/Home.module.css";
import Head from 'next/head';
import ArrowComponent from '../components/arrow';
import MemberComponent from '../components/member';
import { Container, Grid, Box, Typography, Card, CardMedia } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 500,
    fontFamily: 'Noto Sans',
    color: 'white'
  }
});

export default function Home() {
  const classes = useStyles();
  return (
    <div className={styles.container}>
      <Head>
        <title>FinNexus</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"></link>
      </Head>
      {/** START -- Upper Section. Can be later moved to a component */}
      <Container maxWidth="lg" className={`${styles.bkgImgBlue}`}>
        <Container maxWidth="md" /* className={styles.centerContent} */>
          <Grid container direction="row" className={styles.navbar}>
            {/*https://stackoverflow.com/questions/4476526/do-i-use-img-object-or-embed-for-svg-files*/}
            <object className={styles.logoProps} data="fnxLogo.svg" type="image/svg+xml"></object>
            <div className={`${styles.navBtnsContainer} `}>
              <button className={styles.fnxBtn}>Click1</button>
              <button className={styles.fnxBtn}>Click1</button>
              <button className={styles.fnxBtn}>Click1</button>
              <button className={styles.fnxBtn}>Click1</button>
              <button className={styles.fnxBtn}>Click1</button>
              <object className={styles.langIcoProps} data="language_icon.svg" type="image/svg+xml"></object>
            </div>
          </Grid>
          <Grid container className={styles.upperMainContent}>
            <Grid item xs={8} lg={9} md={8}>
              <p className={styles.compName}>FinNexus</p>
              <p className={styles.contentUnderImg} style={{ marginBottom: "10px" }}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ul</p>
              <span>
                <button className={`${styles.fnxBtn} ${styles.fnxPinkBtn}`}>Click1</button>
                <button className={`${styles.fnxBtn} ${styles.fnxWhiteBtn}`}>Click1</button>
              </span>
            </Grid>
            <Grid item xs={3} lg={3} md={4}>
              <object style={{ height: "15em" }} data="bgshape_01.svg" type="image/svg+xml"></object>
            </Grid>
          </Grid>
        </Container>
      </Container>
      {/** END -- Upper Section. Can be later moved to a component */}

      <Container maxWidth="lg">
        <Container maxWidth="md" className={`${styles.liqAndInfo}`}>
          <Grid container justify="space-around">
            <Grid item md={5} lg={6} xs={12} style={{ minHeight: "20em" }}>
              <div style={{
                backgroundImage: "url(/FNX_liquidity.svg)",
                height: "100%",
                backgroundRepeat: "no-repeat",
                filter: "drop-shadow(0px 10px 15px black)",
                backgroundPositionX: "center"
              }}></div>
            </Grid>
            <Grid item lg={4} md={4} xs={12}>
              <h1>Liquidity</h1>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ul</p>
            </Grid>
          </Grid>
          <Grid container justify="space-around">
            <Grid item lg={4} md={4} xs={12} >
              <h1>Options</h1>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ul</p>
            </Grid>
            <Grid item md={5} lg={6} xs={12} style={{ minHeight: "20em" }}>
              <div style={{
                backgroundImage: "url(/FNX_options.svg)",
                height: "100%",
                backgroundRepeat: "no-repeat",
                backgroundPositionX: "center",
                filter: "drop-shadow(0px 10px 15px black)"
              }}></div>
            </Grid>
          </Grid>
        </Container>
      </Container>

      {/** START -- Next Section Content */}
      <Container maxWidth="lg" className={styles.middleSection}>
        <Container maxWidth="md" className={`${styles.section}`}>
          <Grid container className={`${styles.halfMiddleSection}`} style={{ display: "flex", justifyContent: "flex-end" }}>
            <Grid item lg={4} xs={12} className={styles.halfMiddleOneThird}>
              <Grid item md={7} className={styles.imageContainer}>
                <div className={styles.imageBox}></div>
                <div className={styles.textBox}><span className={styles.biggerText}>FPO</span> v1.0</div>
              </Grid>
              <div className={styles.contentUnderImg} style={{ padding: "30px 0", color: "white" }}><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ul</p>
              </div>
              <button className={`${styles.fnxBtn} ${styles.fnxWhiteBtn}`}>Click1</button>
            </Grid>
            <Grid item lg={7} xs={12} className={styles.halfMiddleTwoThird} style={{ minHeight: "20em" }}>
              <div style={{
                backgroundImage: "url(/FNX_options.svg)",
                height: "100%",
                backgroundRepeat: "no-repeat",
                marginLeft: "5em",
                filter: "drop-shadow(0px 10px 15px black)",
                backgroundPositionX: "center"
              }}>

              </div>
            </Grid>
          </Grid>
        </Container>
      </Container>
      {/** END -- Next Section Content */}

      {/** START -- Third Section Content */}
      <Container maxWidth="lg" className={`${styles.thirdSection}`}>
        <Container maxWidth="md">
          <Grid container justify="space-around" spacing={1}>
            <Grid item lg={3} md={3} xs={12}>
              <div className={`${styles.picBox}`}>
                <div className={styles.innerPicBox}>
                  <p className={styles.innerBoxTitle}>Title</p>
                  <p style={{ fontSize: "9px" }}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy </p>
                  <ArrowComponent position="bottom right" size="medium" glyphDir="right" glyphColor="pink" />
                </div>
              </div>
            </Grid>
            <Grid item lg={3} md={3} xs={12}>
              <div className={`${styles.picBox}`}>
                <div className={styles.innerPicBox}>
                  <p className={styles.innerBoxTitle}>Title</p>
                  <p style={{ fontSize: "9px" }}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy </p>
                  <ArrowComponent position="bottom right" size="medium" glyphDir="right" glyphColor="pink" />
                </div>
              </div>
            </Grid>
            <Grid item lg={3} md={3} xs={12}>
              <div className={`${styles.picBox}`}>
                <div className={styles.innerPicBox}>
                  <p className={styles.innerBoxTitle}>Title</p>
                  <p style={{ fontSize: "9px" }}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy </p>
                  <ArrowComponent position="bottom right" size="medium" glyphDir="right" glyphColor="pink" />
                </div>
              </div>
            </Grid>
          </Grid>
          <Grid container justify="center" spacing={2} style={{ marginTop: "20px", color: "white" }}>
            <Grid item xs={2} lg={1}>
              <object className={styles.logoProps} data="FNX_partners.svg" type="image/svg+xml"></object>
            </Grid>
            <Grid item xs={10} lg={11}>
              <h1 style={{ margin: '0' }}>PARTNERS</h1>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy </p>
            </Grid>
          </Grid>
        </Container>
      </Container>
      {/** END -- Third Section Content */}
      <Container maxWidth="md" style={{marginTop: "3em"}}>
        <Grid container>
          <div className={styles.teamBoxDesc}>
            <p className={styles.titleTeam}>TEAM</p>
            <p>Loren Ipsum</p>
          </div>
          <Grid container direction="row" justify="center">
            <MemberComponent></MemberComponent>
            <MemberComponent></MemberComponent>
            <MemberComponent></MemberComponent>
            <MemberComponent></MemberComponent>
            <MemberComponent></MemberComponent>
            <MemberComponent></MemberComponent>
            <MemberComponent></MemberComponent>
            <MemberComponent></MemberComponent>
            <MemberComponent></MemberComponent>
            <MemberComponent></MemberComponent>
          </Grid>
        </Grid>
      </Container>
      {/** START -- Bottom Section */}
      <Container maxWidth="lg" className={styles.bkgImgBlueInverted} /* style={{ maxWidth: "2000px" }} */>
        <Container maxWidth="lg" style={{ padding: "0 7%" }}>
          <Grid container justify="space-around" spacing={10} direction="row" style={{ flexWrap: "wrap-reverse", marginTop: "4em", color: "white" }}>
            <Grid item lg={5} style={{ height: "100%" }}>
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
            </Grid>
            <Grid item lg={5}>
              <p style={{ fontSize: "3em" }}><b>SUBSCRIBE</b></p>
              <p>to the <b>FinNexus</b> NewsLetters</p>
              <span style={{ position: "relative" }}>
                <input className={styles.subscribeInput} placeholder="Your email" />
                <button className={styles.subscribeBtn}><b>ok</b></button>
              </span>
            </Grid>
          </Grid>
        </Container>
      </Container>
      {/** END -- Bottom Section */}
      <Container maxWidth="lg" className={styles.contactMenu}>
        <Container maxWidth="lg">
          <Grid container justify="space-around" direction="row" spacing={4}>
            <Grid item>
              <div className={styles.menuBox}>
                <span style={{ gridArea: "1/span 2" }}>Menu1</span>
                <a href="#">Click1</a>
                <a href="#">Click1</a>
                <a href="#">Click1</a>
                <a href="#">Click1</a>
                <a href="#">Click1</a>
                <a href="#">Click1</a>
              </div>
            </Grid>
            <Grid item>
              <object className={styles.logoProps} data="fnxLogo.svg" type="image/svg+xml"></object>
            </Grid>
            <Grid item>
              <div className={styles.menuBox}>
                <span style={{ gridArea: "1/span 2" }}>Menu1</span>
                <a href="#">Click1</a>
                <a href="#">Click1</a>
                <a href="#">Click1</a>
                <a href="#">Click1</a>
                <a href="#">Click1</a>
                <a href="#">Click1</a>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Container>
      <Container maxWidth="lg" className={styles.copyrightBox}>
        <div className={styles.copyright}><p>CopyRight</p></div>
      </Container>
    </div >
  );
}
