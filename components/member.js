export default function MemberComponent(props) {
    let backgroundImg = <img style={{transform: "scaleX(-1)"}} src="/bgshape_02.svg"></img>;
    return (
        <div>{backgroundImg}</div>
    );
}