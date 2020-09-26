import styles from '../styles/member.module.css';
export default function MemberComponent(props) {
    let backgroundImg = <img src="/bgshape_03.svg"></img>;
    return (
        <div className={styles.teamMember}>
            {backgroundImg}
            <div className={styles.innerText}>
                <p>Founder and CEO</p>
                <p>Boris Yang</p>
            </div>
        </div>
    );
}