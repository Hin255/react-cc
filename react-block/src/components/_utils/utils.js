const getPrefixCls = (suffixCls, customizePrefixCls) => {
    const prefixCls = 'ant'
    if (customizePrefixCls) {
        return customizePrefixCls
    }
    return suffixCls ? `${prefixCls}-${suffixCls}` : prefixCls
}

const omit = (target, rule) => {
    if(!rule || !(rule instanceof Array)) {
        return target
    }

    let t = target

    for (let i = 0; i < rule.length; i++) {
        const key = rule[i]
        delete t[key]
    }
    return t
}

module.exports = {
    getPrefixCls,
    omit,
}