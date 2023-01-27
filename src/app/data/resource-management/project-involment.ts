export const projectInvolment = [
  {
    question: 'Are you involved into project? What if the customer is angry and yelling you: ‘Who have done this mistake? Tell me his name. I want to talk to this person’ and the person is promising ‘I won’t do it again’ What will you do?',
    answer: `
      Blaming someone is not a best option here. First of all, we are working as a team and team is responsible for the delivered result.
      First of all, we need to calm down the customer and negotiate it appropriately.
      Also, we should negotiate this issue only with the customer. If something happened, our project management should also be aware of it.
      Take action items: we should analyze this "mistake", why it occurred, and find a way how to prevent it in the future.
    `,
    category: "project-involvement"
  },
  {
    question: 'SD Process on your project?',
    answer: `
      - Grooming
      - Planning
      - Development ( including CI/CD, code reviews etc. )
      - Testing ( SIT, UAT )
      - Deployment to the prod
    `,
    category: "project-involvement"
  },
  {
    question: 'Project documentation',
    answer: `
      Major part of the project documentation we have on the confluence. It consists of instructions how to setup the project, information about
      style guidelines.
    `,
    category: "project-involvement"
  },
  {
    question: 'Leading of the small parts of project. How would you start new engagement with a client? (for ex. Customer want to start mobile stream, what actions from a lead is required?). What if you have no team yet? Quality in the project.',
    answer: `
      - Define the expectations for that stream ( users engagement, desired outcome )
      - Define the size of scope, needed amount of the team members etc.
      - Get approximate release date
      - Ensure the code quality on the project ( configure CI/CD pipelines, code reviews, enforce code style )
    `,
    category: "project-involvement"
  },
  {
    question: 'Imagine you are project supply owner on your account. What challenging tasks or cases in this role?',
    answer: `
      I am not sure who is supply owner exactly. But, for my understanding challenges here could be finding the right persons for
      dedicated positions, manage allocated budget for the team, providing additional resources for project needs ( workspaces like GitLab, Jira etc. )
    `,
    category: "project-involvement"
  },
  {
    question: 'Risk mitigation strategies. How do you handle project risks? How do you control scope, budget, timeline?',
    answer: `
      Strategies:  <br />
      - Assume and accept <br />
      - Avoidance of risk <br />
      - Controlling risk <br />
      - Transference of risk <br />
      - Watch and monitor risk
    `,
    category: "project-involvement"
  }
]
