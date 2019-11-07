import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { omit } from '../_utils/utils'

const Input = () => {
    const inputNode = (
        <input type="text"/>
    )

    return inputNode
}

Input.defaultProps  = {
    type: ''

}

Input.propTypes = {
    // attr
    type: PropTypes.string,
    size: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    readonly: PropTypes.bool,
    maxlength: PropTypes.number,
    icon: PropTypes.string,
    rows: PropTypes.object,
    number: PropTypes.bool,
    start: PropTypes.string, // 输入文本的起点 left || right
    // event
    enter: PropTypes.func,
    click: PropTypes.func,
    change: PropTypes.func,
    focus: PropTypes.func,
    blur: PropTypes.func,
}