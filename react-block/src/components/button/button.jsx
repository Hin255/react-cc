import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { omit } from '../_utils/utils'
import classNames from 'classnames'
import Icon from '../icon/icon'
import './style/index.css'


const Button = function(props) {
    // const iconType = loading ? 'loading' : icon
    // const iconNode = iconType ? <Icon type={iconType} /> : null
    let initState = {
        loading: false,
    }

    const {
        prefixCls,
        pattern,
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
    const classes = classNames(prefixCls, className, {
        [`${prefixCls}-${pattern}`]: pattern,
        [`${prefixCls}-${shape}`]: shape,
        [`${prefixCls}-${sizeClass}`]: sizeClass,
        [`${prefixCls}-icon-only`]: !children && children !== 0 && iconType,
        [`${prefixCls}-loading`]: !!loading,
        [`${prefixCls}-background-ghost`]: ghost,
    })
    // 非受控组件 和 受控组件
    // 组件需要维护自身的状态, 当外部不需要控制组件内部的状态的时候, 组件需要自己控制自身的状态, 这就是非受控组件
    // 当外部需要控制组件的内部状态时, 组件的内部状态的控制权交给外层代码控制, 这是受控组件
    // 组件要兼顾两个方面, 成为受控组件和非受控组件,  也即 对外暴露接口, 可以由外部控制自身的行为, 当外部不适用api控制自己的时候, 自己要控制自己的行为
    const buttonNode = (
        <button
            type={type}
            className={classes}
            onClick={this.handleClick}
            ref={this.saveButtonRef}
        >
        </button>
    )
    return buttonNode
}

Button.defaultProps = {
    loading: false,
    ghost: false,
    block: false,
    type: 'button',
}

const ButtonPattern = ['default', 'primary', 'ghost', 'dashed', 'danger', 'link']
const ButtonShapes = ['circle', 'circle-outline', 'round']
const ButtonSizes = ['large', 'default', 'small']   
const ButtonHTMLTypes = ['submit', 'button', 'reset']

Button.propTypes = {
    pattern: PropTypes.string, // promary
    type: PropTypes.oneOf(ButtonHTMLTypes),
    shape: PropTypes.oneOf(ButtonShapes),
    size: PropTypes.oneOf(ButtonSizes),
    onClick: PropTypes.func,
    loading: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
    className: PropTypes.string,
    icon: PropTypes.string,
    disable: PropTypes.bool,
    title: PropTypes.string,
}

export default Button