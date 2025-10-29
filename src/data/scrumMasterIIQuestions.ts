import type { Question } from "../types/quiz";

export const scrumMasterIIQuestions: Question[] = [
  {
    id: "q1",
    prompt:
      "A Scrum Master is not only a servant-leader to the Scrum Team and organization, it's also considered a management position.Which three activities describe what a Scrum Master manages as reflected by the Scrum Guide? (Choose three.)",
    options: [
      { id: "a", text: "Reporting on the performance of the Sprint." },
      {
        id: "b",
        text: "The way Scrum is understood and enacted within the organization.",
      },
      {
        id: "c",
        text: "Managing the capacity and utilization of each Development Team member.",
      },
      { id: "d", text: "Managing the process in which Scrum is applied." },
      {
        id: "e",
        text: "Managing the Product Backlog items and work in the Sprint Backlog.",
      },
      {
        id: "f",
        text: "Removing organizational impediments that limits the team's progress and productivity.",
      },
    ],
    correctOptionId: "b,d,f",
  },

  {
    id: "q2",
    prompt:
      "An organization has just hired you as a new Scrum Master to help them transition their teams from their current traditional process to Scrum. The teams are currently structured to specialize in a single function. This is also known as component teams where a team would only address a single layer (i.e. design, frontend, backend, database, testing, etc.). You've introduced the concept of cross-functional teams where all the skills needed to produce business functionality, from end to end, are inside of a single team.What should you keep in mind when transitioning from siloed teams to cross-functional teams? (Choose two.)",
    options: [
      {
        id: "a",
        text: "It is easier to compare the performance between cross-functional teams in order to identify to which teams to assign tasks and which teams need additional coaching.",
      },
      {
        id: "b",
        text: "Newly formed teams will need time to stabilize before reaching their peak performance. During the initial stages of forming, performance will suffer and productivity may be low, although even then delivery of business value is still likely to increase.",
      },
      {
        id: "c",
        text: "Without feature teams, you cannot do Scrum. Postpone Scrum adoption until the teams are reorganized in feature teams.",
      },
      {
        id: "d",
        text: "People from the different layers and components will need time to become accustomed to working and delivering unified functionality together as one Scrum Team thus productivity may suffer.",
      },
    ],
    correctOptionId: "b,d",
  },

  {
    id: "q3",
    prompt:
      "Paul is a Product Owner for multiple products. Each product is allocated a dedicated Scrum Team and a set budget. Based on the average velocity of a previous product release, Paul had estimated a new product to take 9 Sprints to complete. The average velocity of the previous product release was 50 completed units of work per Sprint. Over the first 3 Sprints, the Development Team reported an average velocity of 40 completed units per Sprint, while not fully completing the required integration tests. The Development Team estimates that integration testing would require additional effort to make the increments shippable. TheDevelopment Team is unsure if the required velocity is achievable.What is the most effective way to recover?",
    options: [
      {
        id: "a",
        text: "In the next Sprints, the Development Team strives to make the selected work as close to 'done' as possible and at the minimum 90% completed. Any undone work is divided into new Product Backlog Items that will be deferred to the last Sprint in order to maintain stable velocity.",
      },
      {
        id: "b",
        text: "The Development Team informs Paul that the progress he has perceived to date is not correct. The Increment is not releasable. They give Paul their estimate of the effort it would take to get the previous work 'done', and suggest doing that work first before proceeding with new features. The team also re-estimates the effort to make the remaining Product Backlog items 'done', including all integration effort. In the end, it is Paul's call to continue the project or to cancel.",
      },
      {
        id: "c",
        text: "The Scrum Master will manage the Sprint Backlog and assign work to the Development Team members to ensure maximum utilization of each member. He/ she will keep track of unused resources so that it does not impact the budget. Unused budget can be allocated for additional Sprints if needed.",
      },
      {
        id: "d",
        text: "The Scrum Master sets the open work aside to be performed in one or more release Sprints. They remind Paul to find funding for enough Release Sprints in which this remaining work can be done. Up to one release Sprint per three development Sprints may be required. It is Paul's role to inform users and stakeholders of the impact on the release date.",
      },
    ],
    correctOptionId: "b",
  },

  {
    id: "q4",
    prompt:
      "Paul, a Product Owner of one of the Scrum Teams, has been attending the Daily Scrum. During the Daily Scrum, the Development Team members have been reporting their daily work to Paul so that he is aware of their Sprint progress and what each member is working on.What is the best action for the Scrum Master to take?",
    options: [
      { id: "a", text: "Ask Paul to stop attending the Daily Scrum." },
      {
        id: "b",
        text: "Coach Paul and Development Team members on the purpose of the Scrum events and let them figure out what to do in this situation.",
      },
      {
        id: "c",
        text: "Allow the Paul to participate in the Daily Scrum as he is responsible for the success of the product.",
      },
      {
        id: "d",
        text: "Facilitate the Daily Scrums to avoid any conflicts between the Development Team members and Paul.",
      },
    ],
    correctOptionId: "b",
  },

  {
    id: "q5",
    prompt:
      "Steven, the Scrum Master, is approached by one of the Development Team members saying that they are not completing regression tests for all of the work they are performing to the level defined in the Definition of Done. They have discussed this with the Product Owner and decided to remove regression testing from the Definition of Done.Which two actions are the most appropriate for Steven to take? (Choose two.)",
    options: [
      {
        id: "a",
        text: "Reject the decision as the long term maintainability of the product will be negatively impacted by modifying the Definition of Done.",
      },
      {
        id: "b",
        text: "Accept the decision as a mutual agreement has been made between the Development Team and the Product Owner.",
      },
      {
        id: "c",
        text: "Ask the Development Team and the Product Owner what problem they are trying to solve by altering the Definition of Done and removing regression testing from it. In what ways will this decision impact transparency and quality?",
      },
      {
        id: "d",
        text: "Ask the Development Team and the Product Owner if they are still able to produce potentially shippable product increments by altering the Definition of Done?",
      },
    ],
    correctOptionId: "c,d",
  },

  {
    id: "q6",
    prompt:
      "At the end of the eighth Sprint, the internal sponsors are upset and angry with the progress of the product being built. The current state of the product is not as expected and will require additional Sprints and more budget than originally anticipated at the start of the project.What factors may have led to this? (Choose three.)",
    options: [
      {
        id: "a",
        text: "The Product Owner has not been engaging with sponsors frequently enough and has not been kept aware of the overall progress of the project.",
      },
      {
        id: "b",
        text: "The sponsors haven't been using the Sprint Reviews to actively engage, and inspect and evaluate progress.",
      },
      {
        id: "c",
        text: "The scope changes have not been tracked adequately and the change request process has not been followed properly.",
      },
      {
        id: "d",
        text: "The stakeholders have not been using the Daily Scrum effectively to track the Development Team's progress.",
      },
      { id: "e", text: "The Scrum Master has not ensured transparency." },
      {
        id: "f",
        text: "The project plan proposed to the sponsors at the start of the project followed stringently.",
      },
    ],
    correctOptionId: "a,b,e",
  },

  {
    id: "q7",
    prompt:
      "Three Development Teams are currently building a single product and pulling work from the same Product Backlog. All three teams have identified that they will need Dan, a database specialist, to work full time in their team for the next several Sprints.What should Steven, the Scrum Master, do to solve this potential problem?",
    options: [
      {
        id: "a",
        text: "Manage the items in the Sprint Backlogs so that Dan can be utilized evenly for each team.",
      },
      {
        id: "b",
        text: "Assign Dan to the team with the most urgent tasks first and then move him to the next team and so on until the required support is completed.",
      },
      {
        id: "c",
        text: "Facilitate a discussion with all Development Teams on how they want to deal with this issue, and help them implement their preferred solution.",
      },
      {
        id: "d",
        text: "Ask Dan to work with the HR department to recruit and hire additional database specialists. In the meantime, have the Product Owner move items that do not depend on Dan to the top of the Product Backlog.",
      },
    ],
    correctOptionId: "c",
  },

  {
    id: "q8",
    prompt:
      "An organization wants to apply Scrum to build a new product and has hired Steven to be the Scrum Master of three new teams that will build the first release. The organization is new to Scrum and asks Steven for advice on how to start. Which two things should Steven first advise? (Choose two.)",
    options: [
      {
        id: "a",
        text: "Each Scrum Team has its own Product Backlog with items only their team will be working on.",
      },
      {
        id: "b",
        text: "One Product Backlog to represent all of the known work needed to be done for the product.",
      },
      { id: "c", text: "Three Product Owners, one for each Scrum Team." },
      {
        id: "d",
        text: "Having one Product Owner to be accountable for maximizing the flow of value throughout the development process and provide transparency on the overall progress.",
      },
    ],
    correctOptionId: "b,d",
  },

  {
    id: "q9",
    prompt:
      "A Development Team has a total of six members, 4 members who work full time in the office and 2 members who work part time at home. The Development Team is complaining that it is too difficult to synchronize every day and has suggested having the Daily Scrum every other day instead.What would be three key concerns if the Daily Scrum is held less frequently? (Choose three.)",
    options: [
      { id: "a", text: "Impediments are raised and resolved more slowly." },
      {
        id: "b",
        text: "Opportunities to inspect and adapt the Sprint Backlog are reduced.",
      },
      {
        id: "c",
        text: "Less information about the progress will be shared causing the Sprint plan to become inaccurate and reducing transparency over progress toward the Sprint Goal.",
      },
      {
        id: "d",
        text: "The Scrum Master loses the ability to update the burndown chart adequately.",
      },
      {
        id: "e",
        text: "The Product Owner cannot accurately inspect utilization of the individual team members.",
      },
    ],
    correctOptionId: "a,b,c",
  },

  {
    id: "q10",
    prompt:
      "Steven is a Scrum Master asked to assist in creating five new Scrum Teams that will be working to build a highly anticipated product. He talks with them about the importance of being able to integrate their Increments by the end of their Sprints. This includes the first Sprints. The product is very important to both the end users and the organization.Of the choices raised by future team members, what would Steven encourage?",
    options: [
      {
        id: "a",
        text: "Each Scrum Team delivers Increments in its own code branch. After UAT is performed at the Sprint Review, the code branch is isolated until enough Increments are considered acceptable. All code branches will then be merged during the release phase.",
      },
      {
        id: "b",
        text: "Each Scrum Team delivers functionality at the end of each Sprint. New Product Backlog items will then be added to the next Sprint Backlog to integrate their functionality with the other teams to create a unified Increment.",
      },
      {
        id: "c",
        text: "All Scrum Teams agree on a mutual understanding of 'done' that defines all work necessary to deliver a potentially shippable Increment that includes all previous Increments delivered for the product.",
      },
      {
        id: "d",
        text: "Wait until enough of the infrastructure and architecture is in place before starting the first Sprints. This will increase the success of delivering integrated Increments in Sprint 1.",
      },
    ],
    correctOptionId: "c",
  },

  {
    id: "q11",
    prompt:
      "According to the values of Scrum, which is the best way to create Development Teams?",
    options: [
      {
        id: "a",
        text: "The Product Owner will create a skills matrix according to what is needed for the project and work with the technical leads to allocate resources to the team.",
      },
      {
        id: "b",
        text: "Work with the leadership team to allocate members according to skills, seniority and experience to ensure that all Development Teams are balanced fairly.",
      },
      {
        id: "c",
        text: "Provide boundaries to the developers and allow them to self-organize into Development Teams.",
      },
    ],
    correctOptionId: "c",
  },

  {
    id: "q12",
    prompt:
      "When multiple Scrum Teams are working from the same Product Backlog, also known as scaled Scrum, they must still work in conformance of the Scrum guide.",
    options: [
      { id: "a", text: "True." },
      { id: "b", text: "False." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q13",
    prompt:
      "In Scrum, how would budgeting and financial forecasting be performed? (Choose two.)",
    options: [
      {
        id: "a",
        text: "Frequently inspect the outcomes of the delivered Sprint Increments to understand how much value is being produced per investment spent.",
      },
      {
        id: "b",
        text: "A single release may be funded with several Sprints where every Sprint is producing shippable increments.",
      },
      {
        id: "c",
        text: "Budgeting is not necessary as the only funding necessary is the operational costs of the Scrum Teams.",
      },
      { id: "d", text: "Fixed budgets are not allowed in Scrum." },
    ],
    correctOptionId: "a,b",
  },

  {
    id: "q14",
    prompt:
      "Steven is a Scrum Master that was hired to help an organization, that is new to Scrum, understands and enacts Scrum effectively.Which three activities would be acceptable? (Choose three.)",
    options: [
      {
        id: "a",
        text: "Require all teams in the organization to start using Scrum as soon as possible.",
      },
      {
        id: "b",
        text: "Arrange 1:1 coaching sessions to discuss any identified concerns Steven may have.",
      },
      { id: "c", text: "Schedule formal trainings." },
      {
        id: "d",
        text: "Penalize any Scrum Team members who are not staying within the Scrum Framework.",
      },
      { id: "e", text: "Educate stakeholders and clients about Scrum." },
      { id: "f", text: "Extend Retrospectives to include formal training." },
    ],
    correctOptionId: "b,c,e",
  },

  {
    id: "q15",
    prompt:
      "A Scrum Team has been working on a product for several iterations and has an average velocity of 55 units of 'done' work per Sprint. A second team will be added to work on the same product.What might be the impact on the original team?",
    options: [
      {
        id: "a",
        text: "Their velocity is likely not affected and will remain at 55.",
      },
      {
        id: "b",
        text: "Their velocity is likely to drop and be less than 55.",
      },
      {
        id: "c",
        text: "Their velocity is likely to rise and be more than 55.",
      },
    ],
    correctOptionId: "b",
  },

  {
    id: "q16",
    prompt:
      "What would be two boundaries, defined in Scrum, that give guidance for teams to effectively self-organize? (Choose two.)",
    options: [
      {
        id: "a",
        text: "Timeboxing the events in Scrum to allow for regular inspection and adaptation creating opportunities to adjust course in any given path.",
      },
      {
        id: "b",
        text: "Clearly defined functional teams within the Development Team to define handoff phases during development.",
      },
      {
        id: "c",
        text: "Creating an integrated and potentially shippable Increment by the end of each Sprint.",
      },
      {
        id: "d",
        text: "Having a mixture of different levels of skills and experience to promote domain knowledge sharing.",
      },
    ],
    correctOptionId: "a,c",
  },

  {
    id: "q17",
    prompt:
      "Peter, the Product Owner, has been giving positive recognition to individual Development Team members who have moved their work to 'done' during the Daily Scrum. Peter wants to ensure the team is adhering to the ideal guideline on the burndown chart.What would be two valid actions for Steven, the Scrum Master, to take? (Choose two.)",
    options: [
      {
        id: "a",
        text: "Steven talks with Peter about concerns of how his behavior might impact the team members and request that he stop attending for now.",
      },
      {
        id: "b",
        text: "Steven coaches Peter on best practices for updating the burndown chart as it provides accurate information on how well the team is performing.",
      },
      {
        id: "c",
        text: "Nothing. Steven is optional at the Daily Scrum and it is the responsibility of the team to decide how to best run it.",
      },
      {
        id: "d",
        text: "Steven coaches the Scrum Team about the purpose of the Daily Scrum.",
      },
    ],
    correctOptionId: "a,d",
  },

  {
    id: "q18",
    prompt:
      "A Scrum Team has requested a hardening Sprint to integrate the work produced in previous Sprints and test before releasing.What three scenarios has likely occurred? (Choose three.)",
    options: [
      {
        id: "a",
        text: "The team's Definition of Done is not being adhered to during every Sprint.",
      },
      {
        id: "b",
        text: "The team's Definition of Done is weak or incomplete causing a build up of technical debt.",
      },
      {
        id: "c",
        text: "The Development Team is having difficulties with the ability to regularly release during a Sprint.",
      },
      {
        id: "d",
        text: "Hardening Sprints are supported by the Scrum framework so this is acceptable.",
      },
      {
        id: "e",
        text: "Scrum has been customized in a suitable manner to make the previous work releasable.",
      },
    ],
    correctOptionId: "a,b,c",
  },

  {
    id: "q19",
    prompt:
      "Which three statements best describe the purpose of having a Definition of Done? (Choose three.)",
    options: [
      {
        id: "a",
        text: "It is a checklist to monitor the Development Team member's progress on a task.",
      },
      {
        id: "b",
        text: "It provides guidance to the Development Team when they are forecasting their Sprint Backlog during the Sprint Planning.",
      },
      {
        id: "c",
        text: "As the Development Team is doing the work, it provides guidance on the remaining work needed to create the potentially shippable Increment by the end of the Sprint.",
      },
      {
        id: "d",
        text: "It helps the Development Team defer any pending work to subsequent Sprints.",
      },
      {
        id: "e",
        text: "It creates transparency and provides a common understanding of the 'done' state of the Increment at the Sprint Review.",
      },
      {
        id: "f",
        text: "It helps the Scrum Team decide how much time is needed before the Sprint can end.",
      },
    ],
    correctOptionId: "b,c,e",
  },

  {
    id: "q20",
    prompt:
      "Successful use of Scrum depends on how well people behave and act in ways that reflect the Scrum values. What can the value of openness affect?",
    options: [
      { id: "a", text: "Collaboration efforts." },
      { id: "b", text: "Level of product quality." },
      { id: "c", text: "Team member happiness." },
      { id: "d", text: "Time to market." },
      { id: "e", text: "Trust from stakeholders." },
      { id: "f", text: "All of the above." },
    ],
    correctOptionId: "f",
  },

  {
    id: "q21",
    prompt: "What is management's role in Scrum?",
    options: [
      {
        id: "a",
        text: "To provide the necessary environment and support needed as defined by the Scrum Guide by providing insights and resources that help the Scrum Teams continue moving forward.",
      },
      {
        id: "b",
        text: "Identifying and removing people that are performing poorly.",
      },
      { id: "c", text: "Monitoring skill levels of the Development Team." },
      { id: "d", text: "Monitoring the Development Team's velocity." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q22",
    prompt:
      "What would likely happen if management only changed the organization's current terminology to fit Scrum without the proper understanding and support of Scrum as defined in the Scrum Guide?",
    options: [
      {
        id: "a",
        text: "Very little change will happen as the vocabulary in Scrum is specifically defined for implementing Scrum.",
      },
      {
        id: "b",
        text: "The organization may not realize the real benefits of Scrum as there would be no real change on the way the teams work.",
      },
      {
        id: "c",
        text: "Organizations may feel less stressed as the behaviors would remain familiar to management.",
      },
      { id: "d", text: "All answers apply." },
    ],
    correctOptionId: "d",
  },

  {
    id: "q23",
    prompt: "Which statement best describes Scrum?",
    options: [
      {
        id: "a",
        text: "A clearly defined methodology that defines the software development process.",
      },
      {
        id: "b",
        text: "A manual for defining best practices for software development.",
      },
      {
        id: "c",
        text: "A clearly defined and predictable process that follows the principles of Computer Science.",
      },
      {
        id: "d",
        text: "A framework to address complex products in complex environments.",
      },
    ],
    correctOptionId: "d",
  },

  {
    id: "q24",
    prompt:
      "In order to start the first Sprint, Scrum only requires a Product Owner with enough ideas, a Development Team to execute on those ideas, and a Scrum Master to guide the process.",
    options: [
      { id: "a", text: "True." },
      { id: "b", text: "False." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q25",
    prompt: "Scrum is based on which of the following?",
    options: [
      { id: "a", text: "Defined process." },
      { id: "b", text: "Complex process." },
      { id: "c", text: "Empiricism." },
      { id: "d", text: "Hybrid model." },
    ],
    correctOptionId: "c",
  },

  {
    id: "q26",
    prompt:
      "Stakeholders are only allowed to meet with the Scrum Team at Sprint Review.",
    options: [
      { id: "a", text: "True." },
      { id: "b", text: "False." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q27",
    prompt: "Which Scrum Value is impacted by trust?",
    options: [
      { id: "a", text: "Respect." },
      { id: "b", text: "Courage." },
      { id: "c", text: "Commitment." },
      { id: "d", text: "Openness." },
      { id: "e", text: "Focus." },
      { id: "f", text: "All of the above." },
    ],
    correctOptionId: "f",
  },

  {
    id: "q28",
    prompt:
      "Doing your best and helping other Scrum Team members demonstrates which of the following?",
    options: [
      { id: "a", text: "Value of Commitment." },
      { id: "b", text: "Increased Revenue." },
      { id: "c", text: "Increased Profit." },
      { id: "d", text: "Maximizing utilization." },
      { id: "e", text: "High Performance." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q29",
    prompt:
      "Peter, a Project Manager, has raised concerns about your Scrum Team's productivity and progress towards the objectives. Which is the best way to respond to Peter's concerns?",
    options: [
      {
        id: "a",
        text: "Share the Product Backlog, the projections towards the release dates and ensure that Peter has access.",
      },
      { id: "b", text: "Show the Profit & Loss (P&L) report." },
      { id: "c", text: "Share the current impediments." },
      {
        id: "d",
        text: "Share the last stakeholder status report prepared by the Scrum Master.",
      },
    ],
    correctOptionId: "a",
  },

  {
    id: "q30",
    prompt: "The three pillars of empirical process control consist of:",
    options: [
      { id: "a", text: "Planning, Inspection, Adaptation." },
      { id: "b", text: "Inspection, Transparency, Adaptation." },
      { id: "c", text: "Planning, Demonstration, Retrospective." },
      { id: "d", text: "Respect For People, Kaizen, Eliminating Waste." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q31",
    prompt:
      "Steven, a Scrum Master, is approached by the Development Team members complaining that one of the senior engineers is using too much time during the Daily Scrums to share technical solutions. Which are the best two actions for Steven to take? (Choose two.)",
    options: [
      {
        id: "a",
        text: "Coach the Development Team to help them find a way to solve the problem, and for them to take ownership of the solution.",
      },
      {
        id: "b",
        text: "Contact the team member's direct manager and to resolve this problem.",
      },
      {
        id: "c",
        text: "Suggest that the team members timebox the amount of time each person can speak at the Daily Scrum to a maximum of two minutes.",
      },
      {
        id: "d",
        text: "Suggest using a token to limit who is allowed to speak during the Daily Scrum.",
      },
      {
        id: "e",
        text: "Speak with the person privately and coach him on the purpose of the Daily Scrum.",
      },
    ],
    correctOptionId: "a,e",
  },

  {
    id: "q32",
    prompt:
      "During Sprint Planning, the Definition of Done will help the Development Team forecast the amount of work, selected from the Product Backlog, deemed feasible to make 'done' by the end of the Sprint. Which two items best describes what 'done' means? (Choose two.)",
    options: [
      {
        id: "a",
        text: "All the work needed to prepare the Increment for User Acceptance Testing.",
      },
      {
        id: "b",
        text: "All the work needed to prepare the Increment for Integration Testing.",
      },
      {
        id: "c",
        text: "Having an Increment of working software that is potentially releasable to the end users.",
      },
      {
        id: "d",
        text: "All the work performed as defined in the Definition of Done.",
      },
      {
        id: "e",
        text: "All the work completed within the current skills and expertise in the Development Team.",
      },
    ],
    correctOptionId: "c,d",
  },

  {
    id: "q33",
    prompt:
      "During the implementation of an item in the Sprint Backlog, a conflict arises between team members about what work is needed to make the item 'done'. Some say it is a part of the Definition of Done and others say it isn't. Steven, the Scrum Master, observes a debate forming and members beginning to take sides.What is the best action for Steven to take?",
    options: [
      {
        id: "a",
        text: "Bring the Development Team members together and interpret the Definition of Done for them so that there are no future conflicts on interpretation.",
      },
      {
        id: "b",
        text: "Immediately end the discussion before it becomes worse. Make the decision on what work is needed to make the item 'done' and teach the team about the importance of avoiding conflicts.",
      },
      {
        id: "c",
        text: "Facilitate a session with all members on the Scrum Team to help them resolve the conflict, refine the Definition of Done, and become effective again. Tell the team that conflicts are a natural occurrence and coach them on the value of resolving conflicts.",
      },
      {
        id: "d",
        text: "Bring the Product Owner to the discussion and have him/her decide the work needed to make the item 'done.' It is the Product Owner's responsibility to manage the Development Team members.",
      },
    ],
    correctOptionId: "",
  },

  {
    id: "q34",
    prompt:
      "Steven, the Scrum Master, observes that one of the Development Team members is not attending the Daily Scrum. The Development Team feels this is ok as they all sit in the same area and already have constant communication throughout the day.Which is the best action for Steven to take?",
    options: [
      {
        id: "a",
        text: "Start running the Daily Scrum and require all members to be in attendance.",
      },
      {
        id: "b",
        text: "Talk to the Development Team member privately and tell him that he needs to be a team player.",
      },
      {
        id: "c",
        text: "Ask the Development Team, what value will result from having all team members present at the Daily Scrum and what are the risks if members don't attend.",
      },
      {
        id: "d",
        text: "The Daily Scrum is owned by the Development Team and it is their responsibility to decide which team members must participate.",
      },
    ],
    correctOptionId: "c",
  },

  {
    id: "q35",
    prompt:
      "Over the course of several Sprints, the relationship between the Product Owner and the Development team has suffered. The Development Team is upset with the Product Owner for the constantly changing the upcoming items for the product. The Product Owner is upset with the Development Team for changing the work that needs to be done during the Sprint.What should Steven, the Scrum Master, do?",
    options: [
      {
        id: "a",
        text: "During the Sprint Retrospective, ask the Product Owner and the Development Team to address the issues. Have the Team discuss why the changes occur and what impact they have on the value of the product.",
      },
      {
        id: "b",
        text: "The Scrum Master's responsibility is to ensure the Development Team has a stable velocity. Any changes that negatively impact the team's velocity will be rejected by the Scrum Master.",
      },
      {
        id: "c",
        text: "Take the time between Sprints to organize a team building session to rebuild the relationship.",
      },
      {
        id: "d",
        text: "Explain to the Development Team that the Product Owner is accountable for flow of value and needs to be followed in order to maximize the value delivered.",
      },
    ],
    correctOptionId: "a",
  },

  {
    id: "q36",
    prompt:
      "Individual Development Team members have been approaching Steven, the Scrum Master, to complain about Chris. Chris has the most experience on the system they are building. He often questions the choices team members make in design and architecture making them feel bad.What are two good ways for Steven to address this problem? (Choose two.)",
    options: [
      {
        id: "a",
        text: "Steven observes whether this topic is raised at the Sprint Retrospective. If not, then he checks with the team on how comfortable they are with the way the design and architecture is being handled.",
      },
      {
        id: "b",
        text: "Steven suggests facilitating a session with the full team to help resolve the issue.",
      },
      {
        id: "c",
        text: "Steven tells the concerned members that Chris' opinions should be respected as he has the most experience and understands what is best for long term sustainability.",
      },
      {
        id: "d",
        text: "Steven shares his concerns with Chris and the impact on the other team members and that he should be a team player.",
      },
      {
        id: "e",
        text: "Steven takes the time between Sprints to organize a team building session to build a stronger relationship.",
      },
    ],
    correctOptionId: "a,b",
  },

  {
    id: "q37",
    prompt:
      "By the end of the Sprint, a Product Backlog item in the Sprint Backlog does not meet the team's Definition of Done. What two things should happen with the item? (Choose two.)",
    options: [
      {
        id: "a",
        text: "It will be inspected at the Sprint Review and if it is acceptable by the stakeholders then include it in the Increment.",
      },
      {
        id: "b",
        text: "Do not include the item in the Increment for the Sprint.",
      },
      {
        id: "c",
        text: "Split the item and add the estimation of the completed work to the current Sprint so not to impact the velocity and add the 'undone' work to the next Sprint.",
      },
      {
        id: "d",
        text: "Estimate the remaining work needed to make it 'done' and add it to the Product Backlog for the Product Owner to decide what to do with it.",
      },
    ],
    correctOptionId: "b,d",
  },

  {
    id: "q38",
    prompt:
      "You have been hired as a Scrum Master for a company that has been doing business for over fifty years. In order to stay competitive, they have started an initiative to digitize their legacy systems. The company has several Scrum Teams working on different components that will be integrated to a single back office platform.Your team is responsible for building the back office platform and integrating all other components. The Scrum Teams work in two week Sprints and are expected to deliver all functionality in six Sprints.During development the requirement changes in the other components have been slowing down your team's progress. Because of these changes, your team has estimated that they will not be able to deliver all expected work within the original timeframe. The Scrum Teams working on the other components confirm that they are still on track to meet the expected delivery date. The program manager in charge of the digitization initiative is upset and angry with your team.As a Scrum Master, what could you do to help the Product Owner?",
    options: [
      {
        id: "a",
        text: "You suggest working with the program manager and the other teams on the ordering and the value of your team's open Product Backlog items to redefine the possible delivery date.",
      },
      { id: "b", text: "You shorten your team's Sprints to be ready sooner." },
      {
        id: "c",
        text: "You remove all items from the Product Backlog for which development is forecasted to be beyond the expected date. These are likely to be low value anyhow.",
      },
      {
        id: "d",
        text: "You suggest adding additional developers to the team in order to increase velocity and meet the original date.",
      },
    ],
    correctOptionId: "a",
  },

  {
    id: "q39",
    prompt:
      "Steven is a Scrum Master for three different teams building a single product from the same Product Backlog. Development Team members from each team have approached Steven complaining that their teams need Nicole, an external specialist, to commit full time for their next Sprint.Which three acceptable solutions would Steven consider? (Choose three.)",
    options: [
      {
        id: "a",
        text: "For Sprints that require Nicole's expertise for more than one team, combine the teams into one and separate when they no longer need to share her services.",
      },
      {
        id: "b",
        text: "Investigate whether applying additional techniques or frameworks for scaling Scrum would be appropriate for this product team in the future, since you have multiple Scrum Teams working on the same product, with dependencies between the teams.",
      },
      {
        id: "c",
        text: "People from the Development Teams with an interest in Nicole's domain could volunteer to take on this work in their respective teams.",
      },
      {
        id: "d",
        text: "Ask Nicole for a plan to hire and train additional people in her domain, and in the meantime work with the Product Owner and Development Teams to re- prioritize the work so that tasks not depending on Nicole can be done first.",
      },
      {
        id: "e",
        text: "Have the Development Team re-order the Product Backlog so Nicole can serve one team full-time in a Sprint.",
      },
      {
        id: "f",
        text: "Create a team with Nicole and people from the teams to temporarily work in Nicole's domain to serve the existing teams.",
      },
    ],
    correctOptionId: "b,c,e",
  },

  {
    id: "q40",
    prompt:
      "At the fifth Sprint Retrospective, the Product Owner mentions that he is surprised about the amount of technical debt that has built up in the system and that the product is not able to support an adequate number of users. Peter, the Product Owner, is upset that the product will need several more Sprints to address the scalability issues in order to meet his expectations.What factors may have led to this?",
    options: [
      {
        id: "a",
        text: "The Scrum Team has not used the past Sprint Retrospectives effectively to inspect and adapt.",
      },
      {
        id: "b",
        text: "The Development Team has not been paying enough attention to technical quality.",
      },
      {
        id: "c",
        text: "The Development Team and the Product Owner are not having conversations around technical debt.",
      },
      {
        id: "d",
        text: "The Scrum Master has not ensured that the Scrum Team is transparent.",
      },
      { id: "e", text: "All of the above." },
      { id: "f", text: "None of the above." },
    ],
    correctOptionId: "e",
  },

  {
    id: "q41",
    prompt:
      "Which two scenarios would best represent a self-organizing Development Team? (Choose two.)",
    options: [
      {
        id: "a",
        text: "The Development Team members are strictly focused on the work within their functional role and always handing off the work to other roles in a timely matter.",
      },
      {
        id: "b",
        text: "Management works with the Scrum Master to optimize the Development Team's progress during the Sprint.",
      },
      {
        id: "c",
        text: "Development Team members collaboratively select and re-plan their work throughout the Sprint.",
      },
      {
        id: "d",
        text: "The Development Team invites external people to the Sprint Planning to help them create a complete and detailed Sprint Backlog.",
      },
      {
        id: "e",
        text: "The Development Team creates its own Sprint Backlog, reflecting all work that is part of the Definition of Done.",
      },
    ],
    correctOptionId: "c,e",
  },

  {
    id: "q42",
    prompt:
      "Steven is a Scrum Master of a Development Team that has members working in different cities and time zones. Organizing the Scrum events is time consuming and requires a lot of effort to set up and run. The Development Team proposes to only hold the Daily Scrum on Mondays.Which two responses would be most appropriate from Steven? (Choose two.)",
    options: [
      {
        id: "a",
        text: "Coach the team on why having a Daily Scrum every day is an important opportunity to update the Sprint plan and how it helps the team self-organize work toward achieving the Sprint Goal.",
      },
      {
        id: "b",
        text: "Ensure that there is an overall consensus by having the Development Team members vote.",
      },
      {
        id: "c",
        text: "Help the Development Team understand that lowering the frequency of communication will only increase the feeling of disconnect between the team members.",
      },
      { id: "d", text: "Acknowledge and support their decision." },
    ],
    correctOptionId: "a,c",
  },

  {
    id: "q43",
    prompt:
      "Steven is a Scrum Master of a Scrum Team that is new to Scrum. At the halfway point of the Sprint, the Product Owner comes to Steven telling him that he is concerned the Development Team will not be able to complete the entire Sprint Backlog by the end of the Sprint.What should Steven do in this situation?",
    options: [
      {
        id: "a",
        text: "Motivate the Development Team to meet their commitment to the Product Owner.",
      },
      {
        id: "b",
        text: "Coach the Product Owner that with complex software development, you cannot promise the entire scope that was forecast during Sprint Planning. As more is learned during the Sprint, work may emerge that affects the Sprint Backlog.",
      },
      {
        id: "c",
        text: "Advise the Product Owner that the Development Team owns the Sprint Backlog and it is up to them to meet their commitments. No one tells the Development Team how to turn Product Backlog into Increments of potentially releasable functionality.",
      },
      {
        id: "d",
        text: "Add more people to the Development Team to meet the Product Owner's expectations.",
      },
    ],
    correctOptionId: "b",
  },

  {
    id: "q44",
    prompt:
      "Scrum addresses which of the following four risks in software development? (Choose four.)",
    options: [
      {
        id: "a",
        text: "The complexity and unpredictability of the requirements.",
      },
      { id: "b", text: "The stability and complexity of the technology." },
      {
        id: "c",
        text: "The skills and working relationships of the people on the teams.",
      },
      { id: "d", text: "The timescale of the planned work." },
      {
        id: "e",
        text: "The clear definitions of stages and gateways in the overall governance model.",
      },
      {
        id: "f",
        text: "The definition of incentive and bonus strategies by HR for all team members.",
      },
    ],
    correctOptionId: "a,b,c,d",
  },

  {
    id: "q45",
    prompt:
      "After several Sprints, a key stakeholder starts using the product. The stakeholder is surprised by the slow performance and complains to the Product Owner. The Product Owner comes to the Scrum Master asking for advice.What is the best action for a Scrum Master to take?",
    options: [
      {
        id: "a",
        text: "Wait until the next Sprint Retrospective as it is the most opportune time to modify the Definition of Done.",
      },
      {
        id: "b",
        text: "Bring the concern to the testers in the Development Team and ask them to include performance testing.",
      },
      {
        id: "c",
        text: "Explain to the Product Owner that it's up to the Development Team to. decide on acceptable performance standards as they own the Definition of Done.",
      },
      {
        id: "d",
        text: "Encourage the Product Owner to bring the performance concerns to the Development Team and work with them on how to improve performance, and ultimately have stronger Definition of Done.",
      },
    ],
    correctOptionId: "d",
  },

  {
    id: "q46",
    prompt:
      "During the Sprint Review, the Product Owner decides to release the current Increment to production. The stakeholders suggest temporarily delaying the next Sprint in order to respond more quickly to user feedback after the release. The Product Owner prefers to continue to the next Sprint and make progress towards the next release. Steven, the Scrum Master, begins facilitating the discussion.What would be two acceptable outcomes of the discussion? (Choose two.)",
    options: [
      {
        id: "a",
        text: "Continue with the Sprints and include the customer feedback in the Product Backlog.",
      },
      {
        id: "b",
        text: "Delay the next Sprint to allow the Development Team to work on new customer feedback.",
      },
      {
        id: "c",
        text: "Continue with the Sprints but shorten the Sprint time-boxes to allow for shorter feedback loops.",
      },
      {
        id: "d",
        text: "Continue with the Sprints but allow the Sprint Goal within the Sprint to change according to the customer feedback.",
      },
    ],
    correctOptionId: "a,c",
  },

  {
    id: "q47",
    prompt:
      "At the Sprint Planning, the Development Team is not able to forecast the number of Product Backlog items it can do in the upcoming Sprint due to unclear requirements. The Product Owner, however, was able to clearly define the business objective he hopes to achieve in the Sprint.Which of the following two actions would you support? (Choose two.)",
    options: [
      {
        id: "a",
        text: "The Development Team forecasts the most likely Product Backlog items to meet the business objective and create a Sprint Backlog based on a likely initial design and plan. Once the time- box for the Sprint Planning meeting is over, they start implementation and continue to analyze, decompose, and create additional functionality during the Sprint.",
      },
      {
        id: "b",
        text: "If all agree they can extend the Sprint Planning until the Development Team can forecast enough Product Backlog items before starting the implementation.",
      },
      {
        id: "c",
        text: "Allow the Development Team members as much time as needed to review the Product Backlog items and reconvene with the Product Owner when they are confident enough to make a forecast for the Sprint.",
      },
      {
        id: "d",
        text: "They discuss in the upcoming Sprint Retrospective why this happened and what changes will make it less likely to occur again.",
      },
    ],
    correctOptionId: "a,d",
  },

  {
    id: "q48",
    prompt:
      "Steven is a Scrum Master on a new Scrum Team.What would be the best way for him to determine if the Product Owner is interacting enough with the Development Team during a Sprint?",
    options: [
      {
        id: "a",
        text: "Check whether the Product Owner is actively engaged at the Daily Scrums.",
      },
      {
        id: "b",
        text: "Check whether the Increment presented at the Sprint Review meets the Product Owner's expectations.",
      },
      {
        id: "c",
        text: "See whether the Product Owner has provided enough information at the Sprint Planning to make his/her presence optional during the Sprint. The level of autonomy within Development Team can be the result of having the right presence from the Product Owner.",
      },
      {
        id: "d",
        text: "The Product Owner must always be present with the Development Team. Unavailability of the Product Owner is prohibited in Scrum.",
      },
    ],
    correctOptionId: "c",
  },

  {
    id: "q49",
    prompt:
      "In what two ways is velocity and technical debt related? (Choose two.)",
    options: [
      {
        id: "a",
        text: "They are not related because technical debt is non-functional and velocity is calculated based on end user functionality.",
      },
      {
        id: "b",
        text: "As the Development Team is working on new Product Backlog items, they may unexpectedly run into technical debt that will result the team's velocity dropping.",
      },
      {
        id: "c",
        text: "A Development Team can artificially increase velocity by allowing technical debt to be incurred.",
      },
      {
        id: "d",
        text: "Adding estimates to technical debt will allow the Development Team to maintain constant velocity therefore ensuring predictability.",
      },
    ],
    correctOptionId: "b,c",
  },

  {
    id: "q50",
    prompt:
      "A new Product Owner has joined an existing Scrum Team that has been working together for eight Sprints. The Development Team has grown to have a good understanding of the functionality and business for the product they have been building. The Product Owner, being new to the company, is unsure about his responsibilities.As a Scrum Master explain what two acceptable ways of helping the Product Owner would be. (Choose two.)",
    options: [
      {
        id: "a",
        text: "You advise the Product Owner to start building a good relationship with the stakeholders of the product. Ongoing interaction with them is important to regularly align with changing organizational or market expectations. The Product Owner is also expected to invite the right stakeholders to the Sprint Review meeting.",
      },
      {
        id: "b",
        text: "You inform the Product Owner that, in today's highly competitive markets, it is important that the Development Team is updated on changing business priorities on a daily basis. The Daily Scrum allows the Development Team to adapt to the changes in scope without delay.",
      },
      {
        id: "c",
        text: "You tell the Product Owner to make sure that there are no ambiguities or possible misunderstandings in the items on the Product Backlog when they are handed over to the Development Team. This is best done by capturing the functional requirements during an analysis phase, resulting in documents that are considered as the working product of such analysis Sprints.",
      },
      {
        id: "d",
        text: "You advise the Product Owner to rely on the Development Team and the stakeholders to formulate the Product Backlog, as they are the ones most knowledgeable. By asking questions and working with them the Product Owner will quickly be up to speed.",
      },
    ],
    correctOptionId: "a,d",
  },

  {
    id: "q51",
    prompt:
      "If burndown charts are used to visualize progress, what does a trendline through a release burndown chart indicate?",
    options: [
      {
        id: "a",
        text: "When all work will be completed so the Scrum Team can start work on a new Product Backlog.",
      },
      {
        id: "b",
        text: "When the project will be over if the Product Owner removes work that is equal in effort to any new work that is added.",
      },
      {
        id: "c",
        text: "When the work remaining is projected to be completed if nothing changes on the Product Backlog or Development Team.",
      },
      {
        id: "d",
        text: "The evolution of the return of investment on the project.",
      },
    ],
    correctOptionId: "c",
  },

  {
    id: "q52",
    prompt:
      "What is a good way for a Scrum Team to ensure that security concerns are addressed and transparent?",
    options: [
      {
        id: "a",
        text: "Add Security Sprints to resolve security concerns when needed.",
      },
      {
        id: "b",
        text: "Have the Scrum Team create Product Backlog items for each concern and/or add security concerns to the definition of ג€Doneג€.",
      },
      {
        id: "c",
        text: "Create a separate backlog for security items and only work on the items when a specialist becomes available.",
      },
      { id: "d", text: "Delegate the work to an external team." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q53",
    prompt:
      "Technical Debt can lead to false assumptions about the current state of the system and the Increment reviewed at the end of the Sprint.",
    options: [
      { id: "a", text: "True." },
      { id: "b", text: "False." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q54",
    prompt:
      "When technical debt occurs, the system will become more unstable as development progresses and code is added resulting in future work being slowed down.",
    options: [
      { id: "a", text: "True." },
      { id: "b", text: "False." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q55",
    prompt:
      "At the eighth Sprint Review, the stakeholders are upset that the product being built is not what they expected and will incur additional costs that was not planned for.What may have led to this?",
    options: [
      {
        id: "a",
        text: "The Scrum Master has not been reporting on the progress of the Scrum Team. The Product Owner has not been managing the Development Team's tasks effectively. The Development Team has not been improving their velocity.",
      },
      {
        id: "b",
        text: "The Scrum Master has not ensured that the project is transparent. The Product Owner has not made the stakeholders aware of the progress of the project. The stakeholders have not been attending the Sprint Reviews.",
      },
      {
        id: "c",
        text: "The Scrum Master has not been attending the Daily Standup. The Product Owner has not been using the Gantt chart correctly. The Stakeholders has not been invited to the Sprint Retrospectives.",
      },
    ],
    correctOptionId: "b",
  },

  {
    id: "q56",
    prompt: "Select the correct Scrum Team roles defined in Scrum.",
    options: [
      { id: "a", text: "Development Team, Scrum Master, Product Owner." },
      { id: "b", text: "Engineers, Business Analyst, Product Owner." },
      {
        id: "c",
        text: "Stakeholders, Scrum Master, Project Manager, Product Owner.",
      },
      {
        id: "d",
        text: "Product Manager, Business Analyst, Development Team, Stakeholders.",
      },
    ],
    correctOptionId: "a",
  },

  {
    id: "q57",
    prompt: "Scrum has a role called `Project Manager.",
    options: [
      { id: "a", text: "True." },
      { id: "b", text: "False." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q58",
    prompt:
      "A Scrum Team has been working on the same product for twelve Sprints. What would likely be the immediate impact on the original Scrum Team if two newScrum Teams are to be added the same product?",
    options: [
      { id: "a", text: "Its productivity is likely to decrease." },
      { id: "b", text: "Its productivity is likely to increase." },
      { id: "c", text: "Its productivity is likely to stay the same." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q59",
    prompt: "What would be the main benefits of self-organization?",
    options: [
      {
        id: "a",
        text: "Increased rule compliance, self-accountability, commitment.",
      },
      {
        id: "b",
        text: "Increased rule compliance, self-accountability, output.",
      },
      { id: "c", text: "Increased capacity, accuracy of estimates, output." },
      {
        id: "d",
        text: "Increased creativity, self-accountability, commitment.",
      },
    ],
    correctOptionId: "d",
  },

  {
    id: "q60",
    prompt: "A Scrum Team must have a Product Owner and Scrum Master.",
    options: [
      {
        id: "a",
        text: "False. A Scrum Master is only necessary when requested or needed.",
      },
      {
        id: "b",
        text: "True. Each must be a full-time member on the Scrum Team.",
      },
      {
        id: "c",
        text: "True. Their participation and availability will impact the outcomes produced by the Scrum Team.",
      },
      {
        id: "d",
        text: "False. If a Product Owner is unavailable, he/she can be replaced by a Business Analyst.",
      },
    ],
    correctOptionId: "c",
  },

  {
    id: "q61",
    prompt:
      "A new member has just joined an existing Development Team that has been together for several Sprints. During the Sprint, the individual has been trying to share his ideas and viewpoints but is continuously ignored by the rest of the Development Team.Which three Scrum Values has the Development Team been neglecting? (Choose three.)",
    options: [
      { id: "a", text: "Commitment." },
      { id: "b", text: "Respect." },
      { id: "c", text: "Transparency." },
      { id: "d", text: "Focus." },
      { id: "e", text: "Openness." },
      { id: "f", text: "Courage." },
    ],
    correctOptionId: "b,e,f",
  },

  {
    id: "q62",
    prompt:
      "Which two behaviors would reflect Servant Leadership in a Scrum Master? (Choose two.)",
    options: [
      { id: "a", text: "Facilitating Scrum Events as requested or needed." },
      {
        id: "b",
        text: "Coaching the Development Team, the Product Owner and the organization on how to work empirically.",
      },
      {
        id: "c",
        text: "Staying away from internal Development Team interactions, maximizing their autonomy and freedom.",
      },
      { id: "d", text: "Resolving every impediment for the Development Team." },
    ],
    correctOptionId: "a,b",
  },

  {
    id: "q63",
    prompt:
      "Collaboration issues and technical dependencies between multiple Scrum Teams working on the same product can be fully resolved by using the correct version control tools.",
    options: [
      { id: "a", text: "True." },
      { id: "b", text: "False." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q64",
    prompt:
      "Which two statements are the most accurate in regards to scaling Scrum for large projects requiring multiple Scrum Teams? (Choose two.)",
    options: [
      {
        id: "a",
        text: "A person focusing on the Sprint Backlog of a single Scrum Team is often more productive than that same person working on multiple Scrum Teams at the same time.",
      },
      {
        id: "b",
        text: "A well-structured Product Backlog can minimize and often eliminate Development Team members working on multiple Scrum Teams during a Sprint.",
      },
      {
        id: "c",
        text: "Team members must work full time on a single Scrum Team.",
      },
      {
        id: "d",
        text: "Customizing the core Scrum framework is necessary to be successful with Scrum at large scale.",
      },
    ],
    correctOptionId: "a,b",
  },

  {
    id: "q65",
    prompt:
      "You have a Scrum Team that has been working together for over a year. The Development Team consists of eleven members who rarely collaborate and work within their functional boundaries. There are no Sprint Goals and most of the items in the Sprint Backlog are unrelated. The Scrum Team has concluded that it is not possible to create Sprint Goals based on the items in the Product Backlog.What might explain why the Scrum Team is finding it difficult to craft Sprint Goals? (Choose all that apply.)",
    options: [
      { id: "a", text: "The Sprints are too long." },
      {
        id: "b",
        text: "The Product Owner is not empowered to make decisions about items in the Product Backlog nor how they are ordered.",
      },
      {
        id: "c",
        text: "The Product Owner doesn't set objectives that he/she wants to achieve with upcoming Sprints.",
      },
      { id: "d", text: "Scrum might not be the best framework for this team." },
      { id: "e", text: "The Development Team is too big." },
    ],
    correctOptionId: "b,c,d",
  },

  {
    id: "q66",
    prompt:
      "According to the Scrum Guide, where should the Daily Scrum be held?",
    options: [
      {
        id: "a",
        text: "Wherever the Development Team decides is most suitable.",
      },
      { id: "b", text: "In a room where management can attend." },
      {
        id: "c",
        text: "In the same location where the Development Team is seated.",
      },
      { id: "d", text: "In front of the Scrum board." },
      { id: "e", text: "Wherever the Scrum Master decides is best." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q67",
    prompt:
      "During the Sprint Retrospective, the team is discussing the quality issues that prevented the team from delivering a releasable Increment at the end of the Sprint.The Development Team does, however, mention that they were able to achieve a high velocity.What are the best two responses for Steven, their Scrum Master, to take? (Choose two.)",
    options: [
      {
        id: "a",
        text: "Stress the value of working software over measured velocity.",
      },
      {
        id: "b",
        text: "Agree and acknowledge the Development Team's hard work, so they will be motivated to do even more in the next Sprint.",
      },
      {
        id: "c",
        text: "Acknowledge the hard work but remind the Development Team that they need to improve in order to do even more in the next Sprint.",
      },
      {
        id: "d",
        text: "Facilitate a discussion on how to improve the quality to a level high enough for the Increment to be releasable, even if the measured velocity drops in the next Sprint.",
      },
    ],
    correctOptionId: "a,d",
  },

  {
    id: "q68",
    prompt:
      "Adding more resources in Scrum will proportionally increase the value delivered.",
    options: [
      { id: "a", text: "True." },
      { id: "b", text: "False." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q69",
    prompt:
      "Steven, a Scrum Master, has been hired by an organization that is new to Scrum. He has been invited to meet the IT and product management team to kick-off the project. During the meeting the Product Owner asks how many Sprints will be needed to address the entire architecture and infrastructure before working on the features for the new product.What are the two best responses for Steven to explain how such work is handled in Scrum? (Choose two.)",
    options: [
      {
        id: "a",
        text: "You explain that product management should not worry about technical solutions. You inform them that the developers will work with the IT department when needed and keep the Product Owner updated on additional time required for each Sprint. The additional effort will be added to the top of the Sprint Backlog before Sprint Planning.",
      },
      {
        id: "b",
        text: "You explain that it is more effective when architecture and infrastructure emerge alongside the development of business functionality. The additional advantage is that business value is created more quickly and earlier.",
      },
      {
        id: "c",
        text: "You confirm that architecture and infrastructure is needed before starting on business functionality but the estimated budget will be difficult to estimate. You suggest that the first Sprint will be dedicated towards building the technical foundation in order to get an accurate estimation for any additional budget and time required.",
      },
      {
        id: "d",
        text: "You coach the Product Owner and Development Team to add this work to Product Backlog to ensure transparency, have the Development Team estimate the work and do this in early Sprints while also creating some business functionality in the early Sprints.",
      },
    ],
    correctOptionId: "b,d",
  },

  {
    id: "q70",
    prompt:
      "Steven, who is a Scrum Master, on one of the Scrum Teams has approached you asking for advice. Their Daily Scrum requires more than 15 minutes and the team has suggested dividing themselves into two separate teams in order to stay within the time box.As another Scrum Master, what would be the best response?",
    options: [
      {
        id: "a",
        text: 'Agree ג€" this is an appropriate solution to the problem.',
      },
      {
        id: "b",
        text: 'Disagree ג€" as the root cause may not be that the team is too big.',
      },
      {
        id: "c",
        text: 'Unsure ג€" dividing a team into two cannot be decided based on this information. You offer to observe.',
      },
      {
        id: "d",
        text: "Agree ג€\" You agree that dividing the team into two is a good strategy to allow the teams to learn how to run Daily Scrums quickly and effectively. Once they've learned to limit the Daily Scrum to 15 minutes, you can merge the teams again.",
      },
    ],
    correctOptionId: "c",
  },

  {
    id: "q71",
    prompt:
      "An organization is using Scrum to build five new products.What would be the best two options for the number of Product Owners the organization should have? (Choose two.)",
    options: [
      {
        id: "a",
        text: "There is one Product Owner for each product (so five in total). Each Product Owner may delegate, share and align work within their individual Product Backlog.",
      },
      {
        id: "b",
        text: "Enough Product Owners to delegate as much work needed to maximize utilization of all Development Team members.",
      },
      {
        id: "c",
        text: "There is one Product Owner responsible for all five products. This person is not allowed to delegate any of the Product Owner responsibilities as he/she is accountable for the success of each product.",
      },
      {
        id: "d",
        text: "There is one Product Owner responsible for all five products. In order to scale his/her role, he/she can delegate some of the individual Product Owner responsibilities to others within each product but would still remain accountable for the value of the work produced.",
      },
    ],
    correctOptionId: "a,d",
  },

  {
    id: "q72",
    prompt:
      "Your company has notified the stakeholders that they will be delivering the first release of a new product within ten Sprints. On the seventh Sprint, the ScrumTeam discovers that they will not be able to include all of the expected features within the first release. The Product Owner believes if they remove some items from the Definition of Done they will be able to accelerate the development process. The Development Team objects to this idea as it will lead to technical debt. As a Scrum Master, what would be the best two ways to explain to the Product Owner the impact of technical debt? (Choose two.)",
    options: [
      {
        id: "a",
        text: "As long as there is still technical debt in the current release, feature development for the next release cannot be started. The Product Owner must first agree to this impact before allowing changes to the Definition of Done.",
      },
      {
        id: "b",
        text: "Reducing the Definition of Done will introduce unknown errors as development progresses and functionality is added. The system can become more difficult to stabilize as work progresses. Development for the actual release as well as future releases will be slowed down in unpredictable ways.",
      },
      {
        id: "c",
        text: "Releasing the version upon a reduced Definition of Done creates false assumptions about the actual state of the system. This will create many interruptions during the development of the next release as fixes will need to be done to the previous release caused from a reduction of quality.",
      },
      {
        id: "d",
        text: "The amount of technical debt will need to be analyzed in order to understand the impact on subsequent releases in order to allocate additional Sprints at the end of the project.",
      },
    ],
    correctOptionId: "c,d",
  },

  {
    id: "q73",
    prompt:
      "Steven is a Scrum Master for three Scrum Teams building the same product and working from the same Product Backlog. Management wants to standardize how velocity is calculated across all three teams in order to identify which teams are high performing and which teams need more support.What would be the best two responses Steven could provide to management? (Choose two.)",
    options: [
      {
        id: "a",
        text: "There is no direct relationship between velocity and value.",
      },
      {
        id: "b",
        text: "Standardizing velocity across teams is a good way to understand which teams are producing the most value.",
      },
      {
        id: "c",
        text: "Providing incentives based on velocity can increase the Scrum Team's motivation to produce more value.",
      },
      {
        id: "d",
        text: "Velocity is the amount of business functionality that a Scrum Team creates in a Sprint. It is unique to that team and used as an input to Sprint Planning.",
      },
    ],
    correctOptionId: "a,d",
  },

  {
    id: "q74",
    prompt:
      "Which approach would you recommend to ensure that the Product Backlog items discussed at Sprint Planning are well understood, actionable, and easier to forecast?",
    options: [
      {
        id: "a",
        text: "Having a separate group of business analysts and functional testers analyzing high-ordered Product Backlog items before Sprint Planning.",
      },
      {
        id: "b",
        text: "Having the Product Owner work with stakeholders between the end of the last Sprint and before beginning the next to prepare the Product Backlog items so not to interrupt the Development Team.",
      },
      {
        id: "c",
        text: "Having the business analysts in the Development Team create the upcoming Product Backlog items during a Sprint and adding them to the next Sprint's forecast.",
      },
      {
        id: "d",
        text: "Having the Development Team use some time during each Sprint to help the Product Owner analyze, estimate, and design items at the top of the Product Backlog that is projected to be worked on in the upcoming Sprint.",
      },
    ],
    correctOptionId: "d",
  },

  {
    id: "q75",
    prompt:
      "During the Sprint Review of a scaled development effort, each Scrum Team should demonstrate its individual Increment in a separate branch of the code.",
    options: [
      { id: "a", text: "True." },
      { id: "b", text: "False." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q76",
    prompt:
      "What would be the best two ways to identify that a Development Team is self-organizing? (Choose two.)",
    options: [
      {
        id: "a",
        text: "Management is able to know which members are working on which items.",
      },
      {
        id: "b",
        text: "Creativity thrives and new possibilities are explored.",
      },
      {
        id: "c",
        text: "The Development Team members are cross-functional and knows what it needs to do to deliver the all tasks committed to the Sprint Planning.",
      },
      {
        id: "d",
        text: "The Development Team is able to resolve internal conflicts between members in order to continue working.",
      },
    ],
    correctOptionId: "b,d",
  },

  {
    id: "q77",
    prompt:
      "Select two ways in which Scrum uses time-boxing to promote self-organization? (Choose two.)",
    options: [
      {
        id: "a",
        text: "Time-boxes ensures that the Development Team commits to completing the items in the Sprint Backlog by the end of the Sprint.",
      },
      {
        id: "b",
        text: "Time-boxes encourage the ones closest to the problem make the best possible decisions within the time-frame given the current situation.",
      },
      {
        id: "c",
        text: "Time-boxes can help teams plan how many additional Sprints is needed for User Acceptance testing.",
      },
      {
        id: "d",
        text: "Time-boxes helps everybody concentrate on the same problem at the same time.",
      },
    ],
    correctOptionId: "b,d",
  },

  {
    id: "q78",
    prompt:
      "Your organization requires all Increments to pass user acceptance testing (UAT) before it is allowed to be released to production.Is it a good idea to postpone UAT until the end of the project to prevent the Development Team from being disrupted during the Sprints?",
    options: [
      {
        id: "a",
        text: "No, because the state of the Product Increment won't be transparent and the feedback loop would be too long.",
      },
      { id: "b", text: "It depends on the team's Definition of Done." },
      {
        id: "c",
        text: "Yes, because the Development Team is a self-organizing team and should not be disrupted during development.",
      },
      {
        id: "d",
        text: "Yes, because UAT is done in a hardening Sprint before the release Sprint.",
      },
    ],
    correctOptionId: "a",
  },

  {
    id: "q79",
    prompt:
      "During the Sprint Review, one of the stakeholders announces that due to recent market changes, there is risk that funding might be reduced for the project. This triggers tensions to rise and arguments to break out between members.As a Scrum Master, what would be the best two actions to take? (Choose two.)",
    options: [
      {
        id: "a",
        text: "Defend the original budget and request the stakeholders to adhere to the original agreed funding for the product.",
      },
      {
        id: "b",
        text: "Encourage the stakeholders and Product Owner to focus on delivering the highest value items for the next Sprint.",
      },
      {
        id: "c",
        text: "Be objective and request for a short break for people to calm down.",
      },
      {
        id: "d",
        text: "Avoid getting involved as it is the Product Owner's responsibility to manage stakeholder expectations.",
      },
      {
        id: "e",
        text: "Inform everyone that the team needs to stay busy until the information is formally announced.",
      },
    ],
    correctOptionId: "b,c",
  },

  {
    id: "q80",
    prompt:
      "The director of engineering in your organization always stresses the importance of meeting deadlines in order for the engineering department to be seen as a reliable source for the product management department. The director has calculated that the team's velocity needs to increase an additional 15% to meet the commitment he made to management for the release date of the product.He asks Steven, the team's Scrum Master, to increase his team's velocity. Which would be the best two responses for Steven to take? (Choose two.)",
    options: [
      {
        id: "a",
        text: "He explains how a team uses the velocity of a Sprint primarily to forecast work for the next Sprint, not to perfectly predict future productivity. He refers the director to the Product Owner for all information concerning the progress of development.",
      },
      {
        id: "b",
        text: "He informs the director of organizational impediments he is aware of that prevent the team from being more productive. He suggests collaborating with him on how to remove these impediments.",
      },
      {
        id: "c",
        text: "He educates his director how it is part of a team's self-organization to improve velocity. He invites the director to the next Sprint Retrospective to brainstorm on how they can improve.",
      },
      {
        id: "d",
        text: "He helps the director understand that it typically takes a few Sprints for a team to gradually increase the velocity up to the level expected. Meanwhile he presents this to the team as a challenge and a company goal, leaving it however up to them to figure out exactly how to achieve this.",
      },
      {
        id: "e",
        text: "He tells the director that this is not his responsibility in Scrum. He tells the director to work with the Product Owner to check whether the estimates on the Product Backlog are being respected during implementation.",
      },
    ],
    correctOptionId: "a,b",
  },

  {
    id: "q81",
    prompt:
      "In what ways does the Scrum Master keep a Development Team working at its highest level of productivity?",
    options: [
      {
        id: "a",
        text: "By removing impediments that hinder the Development Team and facilitating Development Team decisions.",
      },
      {
        id: "b",
        text: "By helping the Development Team with user acceptance tests and tracking defects.",
      },
      {
        id: "c",
        text: "By ensuring each member takes turns speaking at the Daily Scrum and ending the event on time.",
      },
      {
        id: "d",
        text: "By keeping the Scrum board and burn-down chart updated daily.",
      },
    ],
    correctOptionId: "a",
  },

  {
    id: "q82",
    prompt:
      "Which of the following statements are true about the Scrum Master role?",
    options: [
      {
        id: "a",
        text: "The Scrum Master assigns the tasks to Development Team members and ensures they are completed within the committed timebox.",
      },
      {
        id: "b",
        text: "The Scrum Master helps those outside the Scrum Team understand which interactions are helpful and teaches the Development Team to keep the Scrum meetings within the timebox.",
      },
      {
        id: "c",
        text: "The Scrum Master is responsible for updating the Scrum board and ensuring team members avoid conflicts.",
      },
      {
        id: "d",
        text: "At the Sprint Review, the Scrum Master demonstrates the completed Increment and answers any questions from the stakeholders.",
      },
    ],
    correctOptionId: "b",
  },

  {
    id: "q83",
    prompt:
      "A Development Team, that has remote team members, typically spends time before the Daily Scrum to setup the meeting rooms and conference calling equipment and tools in order to have their Daily Scrum.How should the Scrum Master handle this situation?",
    options: [
      {
        id: "a",
        text: "Allow the Development Team to self-manage and decide for itself what to do.",
      },
      {
        id: "b",
        text: "Setup the meeting and tell the Development Team that is how it will be done.",
      },
      {
        id: "c",
        text: "Ask the Development Team members to alternate who is responsible for meeting setup.",
      },
      { id: "d", text: "Inform management and ask them to solve it." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q84",
    prompt:
      "A Development Team member has notified the Scrum Master of a potential data security risk.What action should the Scrum Master take?",
    options: [
      { id: "a", text: "Notify the test team." },
      {
        id: "b",
        text: "Add a Product Backlog item to address the security issue.",
      },
      {
        id: "c",
        text: "Ask the Development Team member to share the issue with the team as soon as possible.",
      },
      {
        id: "d",
        text: "Wait until the Sprint Retrospective to add security to the definition of ג€Doneג€.",
      },
    ],
    correctOptionId: "c",
  },

  {
    id: "q85",
    prompt:
      "A Scrum Master is keeping a list of open impediments, but it is growing and he/she has been able to resolve only a small portion of the impediments.Which would be the LEAST helpful technique in this situation?",
    options: [
      { id: "a", text: "Consulting with the Development Team." },
      { id: "b", text: "Prioritizing the list and working on them in order." },
      {
        id: "c",
        text: "Arranging a triage meeting with all project managers.",
      },
      {
        id: "d",
        text: "Alerting management to the impediments and their impact.",
      },
    ],
    correctOptionId: "c",
  },

  {
    id: "q86",
    prompt:
      "Your organization has formed a new Scrum Team and has assigned you as the Scrum Master. In what ways would you help the team start?",
    options: [
      {
        id: "a",
        text: "Ensure the Scrum Team members have compatible personalities, have the tech leads clarify the expectations and responsibilities of each role, and propose a performance rewards system.",
      },
      {
        id: "b",
        text: "Have the Scrum Team members introduce their background experience with each other, ask the Product Owner to discuss the product and answer questions, and ensure the team understands the need for a Definition of ג€Done.ג€",
      },
    ],
    correctOptionId: "b",
  },

  {
    id: "q87",
    prompt:
      "What guideline should the Scrum Master provide if the Product Owner asks how estimations should be made in Scrum?",
    options: [
      { id: "a", text: "Estimates must be made in Story Points." },
      { id: "b", text: "Estimates must be in relative units." },
      { id: "c", text: "The Development Team is responsible for estimates." },
      { id: "d", text: "Estimates are made by the Product Owner." },
      { id: "e", text: "Estimates must follow the Fibonacci Sequence." },
    ],
    correctOptionId: "c",
  },

  {
    id: "q88",
    prompt:
      "The Development Team discovers that it doesn't have the tools and infrastructure to make each selected Product Backlog item done.What is the most appropriate action for the Scrum Master to take?",
    options: [
      {
        id: "a",
        text: "Stop the Sprint and have the Development team work on the infrastructure before continuing.",
      },
      {
        id: "b",
        text: "Encourage the Product Owner to accept partially done Increments and complete the work in the Hardening Sprint.",
      },
      {
        id: "c",
        text: "Coach the Development Team to improve its skills, tools and infrastructure over time and establish a Definition of ג€Doneג€ that is actually possible to achieve given the current circumstances.",
      },
    ],
    correctOptionId: "c",
  },

  {
    id: "q89",
    prompt:
      "The Development Team has suggested to move the Daily Scrum to every other day instead of every day.What is the most appropriate action for the Scrum Master to take?",
    options: [
      {
        id: "a",
        text: "Learn why the Development Team wants this, coach the team on why the Daily Scrum is important and work with them to improve the outcome of the Daily Scrum.",
      },
      { id: "b", text: "Support the self-organizing team's decision." },
      {
        id: "c",
        text: "Have the Development Team members vote on which days the Daily Scrum should occur.",
      },
    ],
    correctOptionId: "a",
  },

  {
    id: "q90",
    prompt:
      "What action can the Scrum Master take to ensure communication between the Development Team and Product Owner is effective?",
    options: [
      {
        id: "a",
        text: "Ensure all communication goes through the Scrum Master first.",
      },
      {
        id: "b",
        text: "Teach the Product Owner to talk in terms of technology and technical requirements.",
      },
      {
        id: "c",
        text: "Observe the communications between them and facilitate discussions if needed or by request.",
      },
      {
        id: "d",
        text: "Translate the technologies used by the Development Team in order for the Product Owner to make decisions.",
      },
    ],
    correctOptionId: "c",
  },

  {
    id: "q91",
    prompt:
      "On a project where multiple Scrum Teams are working from the same Product Backlog, how should the work be distributed between teams?",
    options: [
      {
        id: "a",
        text: "The Scrum Team with the highest capacity will pull items from the Product Backlog first.",
      },
      {
        id: "b",
        text: "Each Scrum Team must have an equal amount of User Stories per Sprint.",
      },
      {
        id: "c",
        text: "The Product Owner separates the Product Backlog items for each team.",
      },
      {
        id: "d",
        text: "The Development Teams pull in work from a shared Product Backlog in agreement with the Product Owner and the other teams.",
      },
    ],
    correctOptionId: "d",
  },

  {
    id: "q92",
    prompt:
      "The outcome of a Sprint can be impacted by which of the following? (Choose all that apply.)",
    options: [
      {
        id: "a",
        text: "The working relationships and skills of the people on the Scrum Team(s).",
      },
      { id: "b", text: "The complexity and stability of the technology." },
      { id: "c", text: "The complexity of the requirements." },
    ],
    correctOptionId: "a,b,c",
  },

  {
    id: "q93",
    prompt: "Which statement is FALSE in regards to the Sprint Goal?",
    options: [
      {
        id: "a",
        text: "It is only a forecast and changes during the Sprint as more is learned.",
      },
      {
        id: "b",
        text: "If it doesn't seem achievable, the Development Team has the courage to tell the Product Owner.",
      },
      {
        id: "c",
        text: "The Product Owner respects the Development Team's opinion on whether they can achieve it.",
      },
      { id: "d", text: "It helps increase focus." },
      {
        id: "e",
        text: "The Scrum Team discusses openly about alternative ways to reach it.",
      },
      { id: "f", text: "The Development Team commits to it." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q94",
    prompt:
      "During a Product Backlog refinement meeting, the Product Owner introduces a business objective that will be worked on for the next several Sprints. The ProductOwner envisions several key features necessary to be delivered in order to meet the business objective. As the features will be using sensitive user data it will be subjected to external security audits. These non-functional security requirements were not applicable to previous Increments.What are two good ways the Development Team can handle these high-security concerns? (Choose two.)",
    options: [
      {
        id: "a",
        text: "They should be planned in parallel Sprints so not to disrupt the Development Team during feature development. After security concerns have been finalized, they will be applied to the work that is already completed before new feature development can continue.",
      },
      {
        id: "b",
        text: "They should be handled in a parallel Sprint by a separate security team so that security can be resolved through application enhancements without impacting the functional development.",
      },
      {
        id: "c",
        text: "A complete list of security-related Product Backlog items needs to be created before starting a new Sprint.",
      },
      {
        id: "d",
        text: "During the Sprint Retrospective, the Development Team assesses how to add these expectations to their Definition of Done so every future Increment will meet these security requirements. If needed they can work with external specialists to better understand the requirements.",
      },
      {
        id: "e",
        text: "They are added to the Product Backlog and addressed throughout the next Sprints, combined with creating the business functionality in those Sprints, no matter how small the business functionality.",
      },
    ],
    correctOptionId: "d,e",
  },

  {
    id: "q95",
    prompt:
      "Steven is a Scrum Master employed by the engineering department. The Director of Engineering considers using Scrum for a new project but wonders about the value of having all of the Development Team members attend the Daily Scrum. He is concerned that the employees already attend a lot of mandatory company meetings.What are two outcomes of the Daily Scrum that Steven should explain on why the Daily Scrum is important? (Choose two.)",
    options: [
      {
        id: "a",
        text: "During the Daily Scrum the members of the Development Team will inform of problems that are hindering their progress, and for which they have no means to resolve. They will inform Steven as a Scrum Master, so he can remove the impediments and help the team be more productive.",
      },
      {
        id: "b",
        text: "Through the short, daily alignment of the Daily Scrum the members of the Development Team grow and improve a shared understanding of the most important work to be undertaken in the next 24 hours to achieve the best possible progress toward the Sprint Goal. This daily opportunity to inspect and adapt will enable the Development Team to best tackle any unforeseen circumstances that might otherwise disrupt the team's progress.",
      },
      {
        id: "c",
        text: "The Development Team members will produce a daily status report indicating how much time was spent working on individual tasks since the last Daily Scrum. The reports will help in discussing how the Sprint went at the Sprint Review meeting. It will provide detailed insights into the accuracy of estimates versus actual time spent, which can be used to create better estimates at the next Sprint Planning.",
      },
      {
        id: "d",
        text: "The Daily Scrum serves for the Development Team to report to Steven, as a Scrum Master, all updates on the assigned tasks in the Sprint Backlog. He can then use the team's updates to plan their work for the next day, making sure that every team member is assigned the right tasks.",
      },
      {
        id: "e",
        text: "During the Daily Scrum, the Development Team needs to update the Scrum board with their current status and progress, at a task level. This is crucial to ensure that the Directory of Engineering knows the team's actual progress and control the work being done.",
      },
    ],
    correctOptionId: "a,b",
  },

  {
    id: "q96",
    prompt:
      "An organization is planning to form five new Scrum Teams to work on building a single product. A few of the future team members ask the Scrum Master who will coordinate the work between the different Scrum Teams. What action should the Scrum Master take?",
    options: [
      {
        id: "a",
        text: "Visit the five Development Teams daily to ensure alignment and that all Sprint Backlogs remain synchronized.",
      },
      {
        id: "b",
        text: "Teach them that it is their responsibility to form the teams such that each team will have the necessary skills, knowledge, and competencies to create an integrated Increment by the end of every Sprint.",
      },
      {
        id: "c",
        text: "Advise the teams to minimize dependencies by working on separate development branches and integrate at the end of four Sprint cycles.",
      },
      {
        id: "d",
        text: "At the end of Sprint Planning, collect all Sprint tasks and create a consolidated plan for the entire Sprint.",
      },
      {
        id: "e",
        text: "Teach the Product Owner to work with the technical leads on ordering Product Backlog in a way to avoid too much technical and development overlap during a Sprint.",
      },
    ],
    correctOptionId: "b",
  },

  {
    id: "q97",
    prompt: "Which two statements best describe a Sprint Goal? (Choose two.)",
    options: [
      {
        id: "a",
        text: "Sprint Goals are defined when the completed work is reviewed at the end of a Sprint.",
      },
      {
        id: "b",
        text: "Sprint Goals give the Development Teams flexibility and creativity on how to implement functionality during the Sprint.",
      },
      {
        id: "c",
        text: "During the Sprint Planning, the entire Scrum Team collaboratively crafts a Sprint Goal based on a business objective that the Product Owner would like to achieve that Sprint.",
      },
      {
        id: "d",
        text: "Sprint Goals can change as new insights emerge during the Sprint.",
      },
    ],
    correctOptionId: "b,c",
  },

  {
    id: "q98",
    prompt:
      "If there are multiple Scrum Teams working on the same product, all of the Scrum Teams must mutually define a Definition of Ready (DoR). The DoR is a checklist that the Product Owner must fulfill before a Product Backlog item can be presented at the Sprint Planning. This protects the Development Team from interruptions and disruptions during the Sprint.",
    options: [
      { id: "a", text: "True." },
      { id: "b", text: "False." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q99",
    prompt:
      "How should a Scrum Master coordinate the work when more than one Scrum Team is working on one product?",
    options: [
      {
        id: "a",
        text: "Monitor the progress of the Development Team and assigning tasks.",
      },
      {
        id: "b",
        text: "Remove impediments and facilitating inspection and adaptation opportunities as requested or needed.",
      },
      {
        id: "c",
        text: "Avoiding conflicts and escalating to the line managers if conflicts occur.",
      },
    ],
    correctOptionId: "b",
  },

  {
    id: "q100",
    prompt: "What would be typical Scrum Master activities during the Sprint?",
    options: [
      {
        id: "a",
        text: "Monitor the progress of the Development Team and assigning tasks.",
      },
      {
        id: "b",
        text: "Remove impediments and facilitating inspection and adaptation opportunities as requested or needed.",
      },
      {
        id: "c",
        text: "Avoiding conflicts and escalating to the line managers if conflicts occur.",
      },
    ],
    correctOptionId: "b",
  },
];
