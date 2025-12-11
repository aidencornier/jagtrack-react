import { Container, Title, Text, Grid, Paper, Divider } from '@mantine/core'
import ClassCard from '../components/ClassCard'
import WeekDay from '../components/WeekDay'
import { classes } from '../data/classes'




function HomePage() {
 return (
   <Container size="xl" py="xl">
     <WeekDay />




     <Title order={2} ta="center" mb="md">My 4 Classes</Title>
     <Text ta="center" c="dimmed" mb="xl">
       Current Quarter
     </Text>




     <Grid>
       {classes.map((classItem) => (
         <Grid.Col
           key={classItem.id}
           span={{ base: 12, sm: 6, lg: 3 }}
         >
           <ClassCard {...classItem} />
         </Grid.Col>
       ))}
     </Grid>




     <Divider my="xl" />




     {/* Upcoming Assignments Section */}
     <Title order={2} ta="center" mb="md">Upcoming Assignments</Title>
     <Text ta="center" c="dimmed" mb="xl">
       Your Canvas assignments sync automatically
     </Text>




     <Paper shadow="sm" p="md" radius="md" withBorder>
       <div className="calendar-container">
         <iframe
           src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FDenver&showPrint=0&src=YWlkZW4uY29ybmllckBqYWphZ3MuY29t&src=NTJuaWtqbWUybWprcTNra21ic29tOWkxZm92aDlhODFAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039be5&color=%234285f4&color=%230b8043" width="800" height="600" frameBorder="0" scrolling="no"
           className="google-calendar"
         ></iframe>
       </div>
     </Paper>
   </Container>
 )
}




export default HomePage
