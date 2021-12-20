import { useState } from 'react'
import { makeStyles } from '@mui/styles'
import { useNavigate } from 'react-router-dom'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import TextField from '@mui/material/TextField'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block'
  }
})

export default function Create() {
  const classes = useStyles()
  const navigate = useNavigate()

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [titleError, setTitleError] = useState(false)
  const [detailsError, setDetailsError] = useState(false)
  const [category, setCategory] = useState('money')

  const handleTitleChange = e => setTitle(e.target.value)
  const handleDetailsChange = e => setDetails(e.target.value)
  const handleChangeCategory = e => setCategory(e.target.value)

  const handleFormSubmit = e => {
    e.preventDefault()
    setTitleError(false)
    setDetailsError(false)

    title === '' && setTitleError(true)
    details === '' && setDetailsError(true)

    if (title && details) {
      fetch('http://localhost:8000/notes', {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({ title, details, category })
      }).then(() => navigate('/'))
    }
  }

  return (
    <Container>
      <Typography
        variant="h6"
        component="h2"
        color="textSecondary"
        gutterBottom
      >
        Create a New Note
      </Typography>

      <form
        onSubmit={handleFormSubmit}
        autoComplete="off"
        noValidate
      >
        <TextField
          onChange={handleTitleChange}
          className={classes.field}
          error={titleError}
          label="Note Title"
          variant="outlined"
          color="secondary"
          fullWidth
          required
        />

        <TextField
          onChange={handleDetailsChange}
          className={classes.field}
          error={detailsError}
          label="Note Details"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          multiline
          rows="4"
        />

        <FormControl className={classes.field}>
          <FormLabel>Note Category</FormLabel>
          <RadioGroup value={category} onChange={handleChangeCategory}>
            <FormControlLabel value="money" control={<Radio />} label="Money" />
            <FormControlLabel value="todos" control={<Radio />} label="Todos" />
            <FormControlLabel value="reminders" control={<Radio />} label="Reminders" />
            <FormControlLabel value="work" control={<Radio />} label="Work" />
          </RadioGroup>
        </FormControl>

        <Button
          type="submit"
          variant="contained"
          color="secondary"
          endIcon={<KeyboardArrowRightIcon />}
        >
          Submit
        </Button>
      </form>
    </Container>
  )
}