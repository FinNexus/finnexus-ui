export default function ArrowComponent(props) {
    let glyphDir = '';
    let glyphColor = '';
    let innerStyle = '';
    let arrowColor = props.arrowColor ? props.arrowColor : 'white';
    let width, height, posAttr = { left: 'unset', right: 'unset', top: 'unset', bottom: 'unset' };
    if (props.glyphDir === 'left') {
        glyphDir = "arrows/left_arrow_white.svg";
    } else {
        glyphDir = "arrows/right_arrow_white.svg";
    }
    if (props.glyphColor === 'pink') {
        glyphColor = 'var(--dark-pink-color)';
    } else if (props.glyphColor === 'blue') {
        glyphColor = 'var(--top-color)';
    } else if (props.glyphColor === 'lightpink') {
        glyphColor = 'var(--light-pink-color)';
    }
    if (props.size === 'medium') {
        width = "40px";
        height = "40px";
        innerStyle = `  display: flex;
                        margin-top: -8px;
                        font-size: 2.5rem;
                        margin-left: 6px;
                        color: ${arrowColor};`;
    } else if (props.size === 'large') {
        width = height = "55px";
        innerStyle = `display: flex;
                        margin-top: -12px;
                        font-size: 4rem;
                        margin-left: 8px;
                        color: ${arrowColor};`
    }

    if (props.position === "bottom right" || props.position === "right bottom") {
        posAttr.right = "5px";
        posAttr.bottom = "5px";
    } else if (props.right && props.bottom) {
        posAttr.right = props.right;
        posAttr.bottom = props.bottom;
    }

    const styleObj = {
        backgroundColor: glyphColor,
        width: width,
        height: height,
        position: "absolute",
        borderRadius: "50px",
        display: "flex",
        top: posAttr.top,
        right: posAttr.right,
        bottom: posAttr.bottom,
        left: posAttr.left
    }

    const objectStyles = {
        width: '20px',
        height: '20px',
        margin: 'auto'
    }
    return (
        <span style={styleObj}><object style={objectStyles} data={glyphDir} type="image/svg+xml"></object></span>
    );
}