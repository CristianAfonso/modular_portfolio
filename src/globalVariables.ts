import { CareerElementModel, ProjectModel, SkillGroupModel } from "./models"

export const globalVariables = {
    name: 'Name',
    my_description: 'Hi there and thanks for stopping by! This is the description of my repo.',
    my_photo: 'default_avatar.jpg',
    url_github: 'www.github.com',
    url_linkedin: 'www.linkedin.com',
    url_youtube: 'www.youtube.com',
    url_mailto: 'www.gmail.com'
}

export const tagColors= {
    "date": "#1919cb",
    "category": "#cb1919",
    "languages": "#19cb19",
    "engine": "#191919"
};

export const projects: ProjectModel[] = [
    {   //Full project
        title: "Full project",
        img_url: `${process.env.PUBLIC_URL}/logo192.png`,
        date: "01/10/24",
        category: ["Games", "AI"],
        languages: ["C", "Python"],
        description: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
        quotes: ["Inspiring quote here", "The best project ever"],
        engine: "React",
        github_url: "https://github.com/example",
        doc_url: "https://docs.example.com",
        project_url: "https://project.example.com",
        youtube_url: "https://www.youtube.com/watch?v=c0-hvjV2A5Y"
    },
    {   //Minimun content project
        title: "Minimun project1",
        img_url: "https://example.com/image.jpg",
        date: "05/10/23",
        category: ["Web Development"],
        languages: ["JavaScript", "TypeScript"],
        description: "An example project description",
    },
    {   //Minimun content project
        title: "Minimun project",
        img_url: "https://example.com/image.jpg",
        date: "05/10/23",
        category: ["Web Development"],
        languages: ["JavaScript", "TypeScript"],
        description: "An example project description",
    },
    {   //Minimun content project
        title: "Minimun project2",
        img_url: "https://example.com/image.jpg",
        date: "05/10/23",
        category: ["Web Development"],
        languages: ["JavaScript", "TypeScript"],
        description: "An example project description",
    },
    {   //Minimun content project
        title: "Minimun project3",
        img_url: "https://example.com/image.jpg",
        date: "05/10/23",
        category: ["Web Development"],
        languages: ["JavaScript", "TypeScript"],
        description: "An example project description",
    },
    {   //Minimun content project
        title: "Minimun project4",
        img_url: "https://example.com/image.jpg",
        date: "05/10/23",
        category: ["Web Development"],
        languages: ["JavaScript", "TypeScript"],
        description: "An example project description",
    }
];

export const workElements: CareerElementModel[] = [
    {
        title: "Company I was working on",
        start_date: "2022",
        end_date: "July 2023",
        role: "Internship",
        location: "A great place to work, Remote",
        description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
    },
    {
        title: "My new company",
        start_date: "2023",
        end_date: "Present",
        role: "CEO",
        location: "My city",
        description: "Consequatur aut perferendis doloribus asperiores repellat."
    }
]
export const studyElements: CareerElementModel[] = [
    {
        title: "Computer Science Degree",
        start_date: "2018",
        end_date: "2022",
        location: "Harvard University",
        description: "I studied hard for my degree."
    },
    {
        title: "A course i did",
        start_date: "January 2023",
        end_date: "October 2023",
        location: "A great courses page",
        description: "Learned all i know in this course."
    }
]

export const skillsElements: SkillGroupModel[] = [
    {
        title: "Programming Languages",
        skills: [
            {
                language_name: 'JavaScript',
                proficiency: 95
            },
            {
                language_name: 'C++',
                proficiency: 33
            },
            {
                language_name: 'C',
                proficiency: 99
            },
            {
                language_name: 'PHP',
                proficiency: 12
            },
            {
                language_name: 'R',
                proficiency: 1
            },
        ]
    },
    {
        title: "Databases",
        skills: [
            {
                language_name: 'MySQL',
                proficiency: 12
            },
            {
                language_name: 'PostgreSQL',
                proficiency: 78
            },
            {
                language_name: 'MariaDB',
                proficiency: 44
            },
        ]
    }
]