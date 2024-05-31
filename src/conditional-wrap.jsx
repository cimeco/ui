function ConditionalWrap({
    condition,
    wrap,
    children,
    wrapElse = (child) => {
        return child;
    },
}) {
    return condition ? wrap(children) : wrapElse(children);
}

export default ConditionalWrap;
