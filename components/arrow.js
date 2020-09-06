export default function ArrowComponent(props) {
    let glyphDir = '';
    let glyphColor = '';
    let innerStyle = '';
    let width, height, posAttr = { left: 'unset', right: 'unset', top: 'unset', bottom: 'unset' };
    if (props.glyphDir === 'left') {
        glyphDir = '&larr;';
    } else {
        glyphDir = '&rarr;';
    }
    if (props.glyphColor === 'pink') {
        glyphColor = 'var(--dark-pink-color)';
    } else if (props.glyphColor === 'blue') {
        glyphColor = 'var(--top-color)';
    }
    if (props.size === 'medium') {
        width = "50px";
        height = "50px";
        innerStyle = `  display: inline-block;
                        margin-top: -8px;
                        font-size: 2.5rem;
                        margin-left: 6px;
                        color: white;`;
    } else if (props.size === 'large') {
        width = height = "100px";
        innerStyle = `display: inline-block;
                        margin-top: 0px;
                        font-size: 4rem;
                        margin-left: 19px;
                        color: white;`
    }

    if (props.position === "bottom right" || props.position === "right bottom") {
        posAttr.right = "10px";
        posAttr.bottom = "10px";
    }

    const styleObj = {
        backgroundColor: glyphColor,
        width: width,
        height: height,
        position: "absolute",
        borderRadius: "50px",
        display: "inline-block",
        top: posAttr.top,
        right: posAttr.right,
        bottom: posAttr.bottom,
        left: posAttr.left
    }
    return (
        <span style={styleObj} dangerouslySetInnerHTML={{ __html: `<p style="${innerStyle}">${glyphDir}</p>` }}></span>
    );
}