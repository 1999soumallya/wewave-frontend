import React from 'react'
import { Alert } from 'react-bootstrap'

export default function Customalert({ variant, children }) {
    return (
        <>
            <Alert variant={variant} style={{ "textAlign": "center" }}>{children}</Alert>
        </>
    )
}
