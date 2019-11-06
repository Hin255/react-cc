import React, { useState } from 'react'
import PropTypes from 'prop-types'
import omit from 'omit.js'
import classNames from 'classnames'

const Button = function(props) {
    // const iconType = loading ? 'loading' : icon
    // const iconNode = iconType ? <Icon type={iconType} /> : null
    let initState = {
        loading: false,
    }

    const {
        prefixCls,
        type,
        shape,
        size,
        className,
        icon,
        ghost,
        disable,
    } = props

    const prefixCls = 'btn'
    let sizeClass = ''
    switch (size) {
        case 'large':
            sizeClass = 'lg';
            break;
        case 'small':
            sizeClass = 'sm';
            break;
        default:
            break;
    }

    let iconNode = <i></i> // 暂时不做 icon
    const classes = classNames(prefixCls, className, {
        [`${prefixCls}-${type}`]: type,
        [`${prefixCls}-${shape}`]: shape,
        [`${prefixCls}-${sizeClass}`]: sizeClass,
        [`${prefixCls}-icon-only`]: !children && children !== 0 && iconType,
        [`${prefixCls}-loading`]: !!loading,
        [`${prefixCls}-background-ghost`]: ghost,
        [`${prefixCls}-two-chinese-chars`]: hasTwoCNChar && autoInsertSpace,
        [`${prefixCls}-block`]: block,
    })
    const buttonNode = (
        <button
            type={htmlType}
            className={classes}
            onClick={this.handleClick}
            ref={this.saveButtonRef}
        >
            {iconNode}
        </button>
    )
    return buttonNode
}

Button.defaultProps = {
    loading: false,
    ghost: false,
    block: false,
    htmlType: 'button',
}

const ButtonTypes = ['default', 'primary', 'ghost', 'dashed', 'danger', 'link']
const ButtonShapes = ['circle', 'circle-outline', 'round']
const ButtonSizes = ['large', 'default', 'small']
const ButtonHTMLTypes = ['submit', 'button', 'reset']

Button.propTypes = {
    type: PropTypes.string,
    shape: PropTypes.oneOf(ButtonShapes),
    size: PropTypes.oneOf(ButtonSizes),
    htmlType: PropTypes.oneOf(ButtonHTMLTypes),
    onClick: PropTypes.func,
    loading: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
    className: PropTypes.string,
    icon: PropTypes.string,
    disable: PropTypes.bool,
    title: PropTypes.string,
}

export default Button