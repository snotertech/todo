import { AppBar, IconButton, Toolbar, Typography } from "@mui/material"

const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar variant="dense">
                <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                </IconButton>
                <Typography variant="h6" color="inherit" component="div">
                    To do list
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header