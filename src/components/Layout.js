import { makeStyles } from "@mui/styles"
import { AddCircleOutlined, SubjectOutlined } from "@mui/icons-material"
import { useLocation, useNavigate } from "react-router-dom"
import { format } from "date-fns"
import Drawer from '@mui/material/Drawer'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Avatar from '@mui/material/Avatar'

const drawerWidth = 240

const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: 'flex',
    },
    page: {
      width: '100%',
      padding: theme.spacing(3)
    },
    drawer: {
      width: drawerWidth,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    active: {
      background: '#f4f4f4',
    },
    title: {
      padding: theme.spacing(2)
    },
    appbar: {
      backgroundColor: '#fff',
      color: 'inherit',
      width: `calc(100% - ${drawerWidth}px)`
    },
    toolbar:  theme.mixins.toolbar,
    date: {
      flexGrow: 1,
    },
    avatar: {
      marginLeft: theme.spacing(2)
    }
  }
})

const Layout = ({ children }) => {
  const classes = useStyles()
  const navigate = useNavigate()
  const location = useLocation()

  const menuItems = [
    {
      text: 'My Notes',
      icon: <SubjectOutlined color="secondary" />,
      path: '/',
    },
    {
      text: 'Create Note',
      icon: <AddCircleOutlined color="secondary" />,
      path: '/create',
    },
  ]

  return (
    <div className={classes.root}>

      <AppBar
        className={classes.appbar}
        elevation={1}
      >
        <Toolbar>
          <Typography className={classes.date}>
            Today is the {format(new Date(), 'do MMMM Y')}
          </Typography>
          <Typography>
            Andrew
          </Typography>
          <Avatar
            src="/avatar_icon.png"
            className={classes.avatar}
          />
        </Toolbar>
      </AppBar>

      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{ paper: classes.drawerPaper }}
      >
        <div>
          <Typography variant="h5" className={classes.title}>
            Awesome Notes
          </Typography>
        </div>

        <List>
          {menuItems.map(item => (
            <ListItem
              button
              key={item.text}
              className={location.pathname === item.path ? classes.active : null}
              onClick={() => navigate(item.path)}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>

      </Drawer>
      <div className={classes.page}>
        <div className={classes.toolbar}></div>
        {children}
      </div>
    </div>
  );
};

export default Layout