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
         <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FDenver&showPrint=0&src=YWlkZW4uY29ybmllckBqYWphZ3MuY29t&src=NTJuaWtqbWUybWprcTNra21ic29tOWkxZm92aDlhODFAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039be5&color=%234285f4&color=%230b8043" width="800" height="600" frameBorder="0" scrolling="no"></iframe>
       </div>
     </Paper>




     <Text size="sm" c="dimmed" ta="center" mt="md" className="mobile-tip">
       <strong>Mobile Tip:</strong> For a better experience on small screens,{' '}
       <a href="https://calendar.google.com/calendar/ical/aiden.cornier%40jajags.com/public/basic.ics" target="_blank" rel="noopener noreferrer">
         open calendar in new tab
       </a>
     </Text>
   </Container>
 )
}




export default CalendarPage
