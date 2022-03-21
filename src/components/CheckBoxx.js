import React from 'react'
import { CheckBox } from '@mui/icons-material'

function CheckBoxx() {
    return (
        <div>
            This is CheckBoxx in React Material UI
            <CheckBox color='secondary' defaultChecked></CheckBox>
            <CheckBox color='error' defaultChecked size='large'></CheckBox>

        </div>
    )
}

export default CheckBoxx
