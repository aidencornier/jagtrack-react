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
          src="https://calendar.google.com/calendar/embed?src=c_25dd6706846b995c72dcf876cb1e55039ac5139605b1366832a73d6c35ae2e87%40group.calendar.google.com&ctz=America%2FDenver"
          className="google-calendar"
          frameBorder="0"
          scrolling="no"
        ></iframe>
      </div>
    </Paper>
  </Container>
)
}




export default HomePage
