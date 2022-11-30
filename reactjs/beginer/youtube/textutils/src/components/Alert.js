import React, { useState } from 'react'


export default function Alert(props) {
    const caseText = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0) + lower.slice(1);
    }
    return (
        props.alert && <div className={`alert alert-${caseText(props.alert.type)} alert-dismissible fade show`} role="alert">
            {props.alert.msg} : <strong>{caseText(props.alert.type)}</strong>
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    )
}

