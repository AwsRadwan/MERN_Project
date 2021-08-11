import React from 'react'
import { TextField } from '@material-ui/core'

function TheInput({ label, value, handleChange, err }) {
    return (
        <div>
            {err.length === 0 ?
                <TextField id="outlined-basic"
                    variant="outlined"
                    label={label}
                    value={value} onChange={handleChange}
                    margin="normal"
                    required
                    fullWidth />
                : <TextField
                    error
                    id="outlined-error-helper-text"
                    label={label}
                    defaultValue={value}
                    helperText={err}
                    variant="outlined"
                    onChange={handleChange}
                    margin="normal"
                    required
                    fullWidth

                />}

        </div>
    )
}

export default TheInput
