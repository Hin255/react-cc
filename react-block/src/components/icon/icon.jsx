import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { omit } from '../_utils/utils'
import 'remixicon/fonts/remixicon.css'

 // 图标基于 remix icon 现在的type 和 remixicon中的 class 一致方面使用
const Icon = (props) => {
    const {
        type,
        className = '',
        onClick,
        style,
    } = props
    /*
        `${prefixCls}`,
    {
        [`${prefixCls}-${this.type}`]: this.type !== '',
        [`${this.custom}`]: this.custom !== '',
    } // 后期修改 icon 图标库的css
    */
    const classString = classNames({
        // 'spin': !!spin || type === 'loading',
        [`${type}`]: true,
    }, className)

    const iconNode = (
        <i  {...(omit(props, ['type', 'spin']))}
            onClick={onClick}
            className={classString}
            style={style}
        />
    )

    return iconNode
}

Icon.propTypes = {
    type: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func,
}

export default Icon