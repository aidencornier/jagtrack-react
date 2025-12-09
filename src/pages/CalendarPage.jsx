import { Container, Title, Text, Paper } from '@mantine/core'
import './CalendarPage.css'




function CalendarPage() {
return (
  <Container size="xl" py="xl">
    <Title order={2} ta="center" mb="md">Calendar & Deadlines</Title>
    <Text ta="center" c="dimmed" mb="xl">
      Your Canvas assignments automatically sync to this calendar. Never miss a deadline!
    </Text>




    <Paper shadow="sm" p="md" radius="md" withBorder>
      <div className="calendar-container">
       <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FDenver&showPrint=0&src=Y18yNWRkNjcwNjg0NmI5OTVjNzJkY2Y4NzZjYjFlNTUwMzlhYzUxMzk2MDViMTM2NjgzMmE3M2Q2YzM1YWUyZTg3QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23ef6c00&color=%230b8043" style="border:solid 1px #777" width="816" height="600" frameborder="0" scrolling="no"></iframe>
      </div>
    </Paper>




    <Text size="sm" c="dimmed" ta="center" mt="md" className="mobile-tip">
      <strong>Mobile Tip:</strong> For a better experience on small screens,{' '}
      <a href="https://calendar.google.com/calendar/embed?src=c_25dd6706846b995c72dcf876cb1e55039ac5139605b1366832a73d6c35ae2e87%40group.calendar.google.com&ctz=America%2FDenver" target="_blank" rel="noopener noreferrer">
        open calendar in new tab
      </a>
    </Text>
  </Container>
)
}




export default CalendarPage
