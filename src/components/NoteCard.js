import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Typography from "@mui/material/Typography"
import Avatar from "@mui/material/Avatar"
import { IconButton } from "@mui/material"
import { DeleteOutlined } from "@mui/icons-material"
import { makeStyles } from "@mui/styles"
import { blue, green, pink, yellow } from "@mui/material/colors"

const useStyles = makeStyles({
  avatar: {
    backgroundColor: note => {
      switch (note.category) {
        case 'work':
          return yellow[700]
        case 'money':
          return green[500]
        case 'todos':
          return pink[500]
        default:
          return blue[500]
      }
    }
  }
})

const NoteCard = ({ note, handleDelete }) => {
  const classes = useStyles(note)

  return (
    <div>
      <Card elevation={3}>
        <CardHeader
          avatar={
            <Avatar className={classes.avatar}>
              {note.category[0].toUpperCase()}
            </Avatar>
          }
          action={
            <IconButton onClick={() => handleDelete(note.id)}>
              <DeleteOutlined />
            </IconButton>
          }
          title={note.title}
          subheader={note.category}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {note.details}
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}

export default NoteCard