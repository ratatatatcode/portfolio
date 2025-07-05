import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from '@/components/ui/accordion';

export default function ExperienceAccordion() {
    return (
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-base">
              3 years in Batangas State University
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-gray-700 dark:text-gray-300">
              <p>
                At Batangas State University - TNEU, I learned programming
                languages such as C, C++, Java, Python, and JavaScript, along
                with additional skills in HTML, CSS, Node.js, Express.js, EJS,
                Tailwind, Bootstrap, SQL, and NoSQL, while also gaining
                knowledge in Data Structures and Algorithms and Software
                Development Methodologies.
              </p>
              <p>
                Served as Head of Web Development and Pitching at Student Coders
                for Resourceful and Innovative Programming Techniques, and Co-Head
                of the TechnoFusion 2025 Hackathon and UI/UX Redesign Challenge.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-base">
              Freelancing
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-gray-700 dark:text-gray-300">
              <p>
                Developed various web applications including a student portal
                inspired by Google Classroom, a medical forum, and a blood bank
                management system with an integrated chat feature.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-base">
              Personal Project
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-gray-700 dark:text-gray-300">
              <p>
                Built several personal projects such as Talk (an anonymous
                sharing app), Opus (a freemium storytelling platform), Stepshow
                (a shoe showcase site), and currently developing a guide for FERN (Firebase,
                Express, React, Node) stack.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-base">
              Group Project
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-gray-700 dark:text-gray-300">
              <p>
                Collaborated on Smile Plaza Dental Center, a dental appointment
                system, and KAINMUNITY, a Windows application addressing food
                insecurity and waste.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="text-base">
              CS Internship
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-gray-700 dark:text-gray-300">
              <p>Currently undergoing a Computer Science internship at...</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
    )
}