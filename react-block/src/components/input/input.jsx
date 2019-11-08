import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { omit } from '../_utils/utils'

const Input = (props) => {
    const {
        type,
        size,
        disabled,
        readonly,
        number,
        autofocus,
        placeholder,
        maxlength,
        className,
        onClick,
        onFocus,
        onBlur,
        onChange,
    } = props

    console.log(props)

    let sizeClass = ''
    switch (size) {
        case 'large':
            sizeClass = 'large'
            break
        case 'small':
            sizeClass = 'small'
            break
        default:
            break
    }

    const handleInputNumber = (e) => {
        let t = e.currentTarget
        t.value = t.value.replace(/[^\d]/g, '')
    }

    let options = {}

    if (autofocus) {
        options.autoFocus = autofocus
    }

    if (readonly) {
        options.readonly = 'readonly'
    }

    if (number) {
        options.onInput = handleInputNumber
    }


    if (onFocus) {
        options.onFocus = onFocus
    }

    if (onBlur) {
        options.onBlur = onBlur
    }

    if (maxlength) {
        options.maxlength = maxlength
    }

    const prefixCls = 'input'
    const classes = classNames(prefixCls, className, {
        [`${prefixCls}-${type}`]: type,
        [`${prefixCls}-${sizeClass}`]: sizeClass,
        // [`${prefixCls}-icon`]: iconType,
        [`${prefixCls}-disabled`]: disabled,
    })

    console.log('op', options)

    const inputNode = (
        // input 的类型有很多, 鉴于基础组件封装的目的为复用, 所以只封装最常用的input类型
        // 其它的input类型调用者可以使用原生的input标签
        <input  className={classes}
                onClick={onClick}
                onChange={onChange}
                placeholder={placeholder}
                
                {...options}
        >
        </input>
    )
    console.log(inputNode)
    return inputNode
}

const InputType = ['text', 'password']
const InputSizes = ['large', 'default', 'small']
Input.defaultProps  = { 
    type: 'text',
}
Input.propTypes = {
    // attr
    type: PropTypes.oneOf(InputType),
    size: PropTypes.oneOf(InputSizes),
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    autofocus: PropTypes.bool,
    readonly: PropTypes.bool,
    maxlength: PropTypes.number,
    number: PropTypes.bool,
    // start: PropTypes.string, // 输入文本的起点 left || right
    // event
    // onEnter: PropTypes.func,
    onClick: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
}

export default Input