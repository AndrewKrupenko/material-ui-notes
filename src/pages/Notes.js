import { useEffect, useState } from "react"
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Container from "@mui/material/Container"

export default function Notes() {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    fetch('http://localhost:8000/notes')
      .then(res => res.json())
      .then(data => setNotes(data))
  }, [])

  return (
    <Container>
      <Grid container>
      {notes.map(note => (
        <Grid
          key={note.id}
          xs={12}
          md={6}
          lg={4}
          item
        >
          <Paper>
            {note.title}
          </Paper>
        </Grid>
      ))}
      </Grid>
    </Container>
  )
}