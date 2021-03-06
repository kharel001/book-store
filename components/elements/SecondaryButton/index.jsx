import React from 'react'
import { Typography, Button, Link } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { colors } from '../../../utils'

const SecondaryButton = (props) => {
    const useStyles = makeStyles(theme => ({


        buttonContainer: {
            display: "flex",
            justifyContent:"center",
            // marginBottom: "30px",
            // marginTop: "30px",
            marginRight: 0,
            ...props.parentStyle,
            [theme.breakpoints.down('md')]:{
                ...props.smallParentStyle
            }
        },
        button: {
            border:"none",
            background: "transparent",
            borderRadius: "40px",
            padding: "8px 32px",
            color: colors.black,
            border: `1px solid ${colors.black} `,
            // width: "100%",
            fontSize: "16px",
            lineHeight: "19px",
            outline: "none",
            fontWeight: "700",
            textTransform: "capitalize",
            ...props.style,
            '&.MuiButton-contained': {
                boxShadow: "none"
            },
            '&:hover':{
// transiton:"all 3000ms ease-in",
// transform:"scale(1.07)",
background:"transparent"
            },
            [theme.breakpoints.down('md')]:{
                ...props.smallStyle
            }

        },

    }))
    const classes = useStyles()
    return (


        <div className={classes.buttonContainer}>
            <Button onClick={props.actionClick} type="submit" variant="contained" className={classes.button}>{props.title}</Button>

        </div>

    )
}
export default SecondaryButton