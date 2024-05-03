import { Box, Button, Container, Heading, SimpleGrid, Text, useColorModeValue, VStack } from "@chakra-ui/react";
import { FaHtml5, FaCss3Alt, FaJsSquare } from "react-icons/fa";

const Index = () => {
  const bgColor = useColorModeValue("gray.100", "gray.700");
  const hoverBgColor = useColorModeValue("gray.200", "gray.600");

  const courses = [
    {
      id: 1,
      title: "Learn HTML",
      description: "Master the basics of HTML, the fundamental language of the web. Structure your pages and content effectively.",
      icon: <FaHtml5 size="3rem" />,
      colorScheme: "red",
    },
    {
      id: 2,
      title: "Learn CSS",
      description: "Understand how to style websites using CSS. Learn about layouts, colors, fonts, and more.",
      icon: <FaCss3Alt size="3rem" />,
      colorScheme: "blue",
    },
    {
      id: 3,
      title: "Learn JavaScript",
      description: "Dive into JavaScript to add interactivity to your websites. Learn about functions, objects, arrays, and events.",
      icon: <FaJsSquare size="3rem" />,
      colorScheme: "yellow",
    },
  ];

  return (
    <Container maxW="container.xl" p={5}>
      <VStack spacing={5}>
        <Heading as="h1" size="2xl">
          Web Development Courses
        </Heading>
        <Text fontSize="xl">Choose a course to start learning the essentials of web development.</Text>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} pt={5}>
          {courses.map((course) => (
            <Box key={course.id} p={5} bg={bgColor} borderRadius="lg" boxShadow="md" _hover={{ bg: hoverBgColor }}>
              <VStack>
                <Box color={course.colorScheme} p={2} borderRadius="full">
                  {course.icon}
                </Box>
                <Heading as="h3" size="lg">
                  {course.title}
                </Heading>
                <Text textAlign="center">{course.description}</Text>
                <Button colorScheme={course.colorScheme} mt={4}>
                  Start Course
                </Button>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;
