import type { Question } from "../types/quiz";

export const scrumMasterIQuestions: Question[] = [

  {
    id: "q1",
    prompt: "You have just been hired by a company new to Scrum. Your management has assigned you to be the Scrum Master of six new Scrum Teams. These teams will build one product. Select two conditions you should strive for in this scenario. (choose two)",
    options: [
      { id: "a", text: "There should be six Product Owners, one for each Scrum Team." },
      { id: "b", text: "There should be six Product Owners, reporting to a chief Product Owner." },
      { id: "c", text: "The product has one Product Backlog." },
      { id: "d", text: "Each Scrum Team should have a separate Product Backlog." },
      { id: "e", text: "There should be only one Product Owner." },
    ],
    correctOptionId: "c,e"
  },

  {
    id: "q2",
    prompt: "A Scrum Team has been working on a product for nine Sprints. A new Product Owner comes in, understanding he is accountable for the Product Backlog. However, he is unsure about his responsibilities. Which two activities are part of the Product Owner role according to Scrum? (choose two)",
    options: [
      { id: "a", text: "Ensuring that the most valuable functionality is produced first, at all times." },
      { id: "b", text: "Interacting with stakeholders." },
      { id: "c", text: "Providing the Scrum Team with detailed specifications." },
      { id: "d", text: "Describing features as Use Cases." },
      { id: "e", text: "Creating detailed functional test cases." },
    ],
    correctOptionId: "a,b"
  },

  {
    id: "q3",
    prompt: "User documentation is part of your Definition of Done. However, there aren't enough technical writers for all teams. Your Developers don't have a technical writer. What should you do?",
    options: [
      { id: "a", text: "Form a separate team of technical writers that will work on an on-demand basis for the various Product Owners. Work order will be first in, first out." },
      { id: "b", text: "Let the user documentation remain undone and accumulate until after the last development Sprint. It will then be done by any available technical writers." },
      { id: "c", text: "Wait until you have a technical writer on your Scrum Team to take care of this." },
      { id: "d", text: "Your Scrum Team is still responsible for creating user documentation. In this case, the Scrum Team members will write it." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q4",
    prompt: "You are the Scrum Master for four Scrum Teams working from the same Product Backlog. Several of the Developers come to you complaining that work identified for the upcoming two Sprints will require full-time commitment from a technical specialist who is external to the teams. What are two key concerns for the Scrum Master to take into account in this situation? (choose two)",
    options: [
      { id: "a", text: "The desire to maintain a stable velocity." },
      { id: "b", text: "The benefit of Developers figuring out a solution for themselves." },
      { id: "c", text: "The need to have enough work to keep all Developers busy." },
      { id: "d", text: "The ability of the Developers to produce integrated Increments." },
    ],
    correctOptionId: "b,d"
  },

  {
    id: "q5",
    prompt: "The Product Backlog is ordered by:",
    options: [
      { id: "a", text: "The Product Owner with the most valuable items placed at the top." },
      { id: "b", text: "Risk, where safer items are at the top, and riskier items are at the bottom." },
      { id: "c", text: "Items are randomly arranged." },
      { id: "d", text: "Size, where small items are at the top and large items are at the bottom." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q6",
    prompt: "What happens if the Scrum Team cannot complete its work by the end of the Sprint?",
    options: [
      { id: "a", text: "The Sprint is extended and future Sprints use this new duration." },
      { id: "b", text: "The Sprint length holds and the Scrum Team continuously learns what is actually possible to do within a Sprint of this length." },
      { id: "c", text: "The Sprint is extended temporarily. Lessons are taken to ensure it doesn't happen again." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q7",
    prompt: "Which topics should be discussed in the Sprint Review?",
    options: [
      { id: "a", text: "The Scrum process, and how it was used during the Sprint." },
      { id: "b", text: "Coding and engineering practices." },
      { id: "c", text: "Sprint results." },
      { id: "d", text: "All of the above." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q8",
    prompt: "A member of the Scrum Team takes the Scrum Master aside to express his concerns about data security issues. What should the Scrum Master do?",
    options: [
      { id: "a", text: "Add security to the Definition of Done." },
      { id: "b", text: "Tell the Product Owner to stop further development of features until the issues are fixed." },
      { id: "c", text: "Create a Product Backlog item for security." },
      { id: "d", text: "Go check with the testers." },
      { id: "e", text: "Ask the person to share the issue with the team as soon as possible." },
    ],
    correctOptionId: "e"
  },

  {
    id: "q9",
    prompt: "What does it mean for a Scrum Team to be cross-functional?",
    options: [
      { id: "a", text: "The Scrum Team includes not only Developers but also business analysts, architects, and testers." },
      { id: "b", text: "The Scrum Team includes cross-skilled individuals who are able to contribute to do what is necessary to deliver an Increment of software." },
      { id: "c", text: "Developers on the Scrum Team work closely with business analysts, architects, Developers and testers who are not on the team." },
      { id: "d", text: "The Scrum Team is a virtual team drawing from separate teams of business analysts, architects, Developers and testers." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q10",
    prompt: "Sprint burndown charts are an efficient tracking tool, because they show:",
    options: [
      { id: "a", text: "An estimate of the total work remaining for the Sprint." },
      { id: "b", text: "How much effort has gone into a Sprint." },
      { id: "c", text: "How many hours have been worked by each Scrum Team member." },
      { id: "d", text: "How many Product Backlog items remain." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q11",
    prompt: "How much work must a Scrum Team do to a Product Backlog item it selects for a Sprint?",
    options: [
      { id: "a", text: "A proportional amount of time on analysis, design, programming, testing, and documentation." },
      { id: "b", text: "As much as it can fit into the Sprint. Any remaining work will be transferred to a subsequent Sprint." },
      { id: "c", text: "All development work and at least some testing." },
      { id: "d", text: "As much as it has told the Product Owner will be done for every Product Backlog item it selects in conformance with the Definition of Done." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q12",
    prompt: "Which statement best describes the Sprint Backlog as outcome of the Sprint Planning?",
    options: [
      { id: "a", text: "It is a complete list of all work to be done in a Sprint." },
      { id: "b", text: "Every item has a designated owner." },
      { id: "c", text: "Each task is estimated in hours." },
      { id: "d", text: "It is the Scrum Team's plan for the Sprint." },
      { id: "e", text: "It is ordered by the Product Owner." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q13",
    prompt: "If burndown charts are used to visualize progress, what does a trend line through a release burndown chart indicate? (choose the best answer)",
    options: [
      { id: "a", text: "The evolution of the cost spent on the project." },
      { id: "b", text: "When all work will be completed to the Scrum Team can be released for other work." },
      { id: "c", text: "When the work remaining will likely be completed if nothing changes on the Product Backlog or the Developers." },
      { id: "d", text: "When the project will be over if the Product Owner removes work that is equal in effort to any new work that is added." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q14",
    prompt: "Who is responsible for engaging the stakeholders? (choose the best answer)",
    options: [
      { id: "a", text: "The Business Analyst." },
      { id: "b", text: "The Developers." },
      { id: "c", text: "The Team Manager." },
      { id: "d", text: "The Project Manager." },
      { id: "e", text: "The Product Owner." },
    ],
    correctOptionId: "e"
  },

  {
    id: "q15",
    prompt: "At the end of a Sprint, a Product Backlog item worked on during the Sprint does not meet the Definition of Done. What two things should happen with the undone Product Backlog item? (choose the best two answers)",
    options: [
      { id: "a", text: "If the stakeholders agree, the Product Owner can accept it and release it to the users." },
      { id: "b", text: "Put it on the Product Backlog for the Product Owner to decide what to do with it." },
      { id: "c", text: "Review the item, add the Done part of the estimate to the velocity and create a Story for the remaining work." },
      { id: "d", text: "Do not include the item in the Increment this Sprint." },
    ],
    correctOptionId: "b,d"
  },

  {
    id: "q16",
    prompt: "Which two of the following are true about the Scrum Master role? (choose the best two answers)",
    options: [
      { id: "a", text: "At the Sprint Review, the Scrum Master identifies what has been \"done\" and what has not been \"done\"." },
      { id: "b", text: "The Scrum Master teaches the Developers to keep the Scrum meetings to their time-box." },
      { id: "c", text: "The Scrum Master helps those outside the team interact with the Scrum Team." },
      { id: "d", text: "The Scrum Master assigns tasks to Developers when they need work." },
      { id: "e", text: "The Scrum Master is responsible for updating the Sprint Burndown." },
    ],
    correctOptionId: "b,c"
  },

  {
    id: "q17",
    prompt: "What are three benefits of self-management? (choose the best three answers)",
    options: [
      { id: "a", text: "Increased creativity." },
      { id: "b", text: "Increased rule compliance." },
      { id: "c", text: "Increased accuracy of estimates." },
      { id: "d", text: "Increased self-accountability" },
      { id: "e", text: "Increased commitment." },
    ],
    correctOptionId: "a,d,e"
  },

  {
    id: "q18",
    prompt: "Which three of the following are time-boxed events in Scrum? (choose the best three answers)",
    options: [
      { id: "a", text: "Release Testing." },
      { id: "b", text: "Release Retrospective." },
      { id: "c", text: "Sprint Retrospective." },
      { id: "d", text: "Sprint Planning." },
      { id: "e", text: "Sprint Testing." },
      { id: "f", text: "Sprint 0." },
      { id: "g", text: "Daily Scrum." },
    ],
    correctOptionId: "c,d,g"
  },

  {
    id: "q19",
    prompt: "Who is responsible for clearly expressing Product Backlog items? (choose the best answer)",
    options: [
      { id: "a", text: "The Scrum Master, or the Scrum Master may have the Developers do it." },
      { id: "b", text: "The Scrum Master." },
      { id: "c", text: "The Product Owner." },
      { id: "d", text: "The business analyst who represents the Product Owner in the Scrum Team." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q20",
    prompt: "What is the best suited structure for Scrum Teams in order to produce integrated Increments? (choose the best answer)",
    options: [
      { id: "a", text: "Each Scrum Team works only one technical layer of the system (e.g. GUI, database, middle tier, interfaces)." },
      { id: "b", text: "Each Scrum Team develops functionality from beginning to end throughout all technical layers." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q21",
    prompt: "Why should the Product Owner be present at the Daily Scrum? (choose the best answer)",
    options: [
      { id: "a", text: "He/She doesn't need to be there." },
      { id: "b", text: "To hear about impediments in functionality." },
      { id: "c", text: "To represent the stakeholder's point of view." },
      { id: "d", text: "To participate as a Scrum Team member." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q22",
    prompt: "What two techniques could the Scrum Master use when the Scrum Team gets caught in an internal disagreement about which development techniques to apply? (choose the best two answers)",
    options: [
      { id: "a", text: "Involve the complete Scrum Team." },
      { id: "b", text: "Use coaching techniques; such as open questions and active listening." },
      { id: "c", text: "Ask an external technical specialist to make the decision." },
      { id: "d", text: "Send every team member to the company's Human Resources department to express their concerns." },
    ],
    correctOptionId: "a,b"
  },

  {
    id: "q23",
    prompt: "What enhances the transparency of an Increment? (choose the best answer)",
    options: [
      { id: "a", text: "Doing all work needed to meet the Definition of Done" },
      { id: "b", text: "Reporting Sprint progress to the stakeholders daily" },
      { id: "c", text: "Keeping track of and estimating all undone work to be completed in a separate Sprint." },
      { id: "d", text: "Updating Sprint tasks properly in the electronic tracking tool." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q24",
    prompt: "Who determines how work is performed during the Sprint? (choose the best answer)",
    options: [
      { id: "a", text: "Architects." },
      { id: "b", text: "The Scrum Team." },
      { id: "c", text: "The Scrum Master." },
      { id: "d", text: "Subject matter experts." },
      { id: "e", text: "The Developers managers." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q25",
    prompt: "When does the second Sprint start? (choose the best answer)",
    options: [
      { id: "a", text: "Once the architectural changes for the second Sprint have been approved by the senior architect." },
      { id: "b", text: "After the Product Backlog for the second Sprint has been selected." },
      { id: "c", text: "Immediately after the first Sprint." },
      { id: "d", text: "After the customer completes acceptance testing of the first Sprint." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q26",
    prompt: "What is included in the Sprint Backlog? (choose the best answer)",
    options: [
      { id: "a", text: "User Stories." },
      { id: "b", text: "Tasks." },
      { id: "c", text: "Use Cases." },
      { id: "d", text: "Tests." },
      { id: "e", text: "Any of the above (or others) which are a decomposition of the selected Product Backlog items." },
    ],
    correctOptionId: "e"
  },

  {
    id: "q27",
    prompt: "Which of the following are true about the Product Owner role? (choose the best two answers)",
    options: [
      { id: "a", text: "The Product Owner is one person." },
      { id: "b", text: "The Product Owner is accountable for ordering the Product Backlog." },
      { id: "c", text: "Multiple people can share the Product Owner role on a Scrum Team." },
      { id: "d", text: "The Product Owner role can be played by a committee or a team of people." },
    ],
    correctOptionId: "a,b"
  },

  {
    id: "q28",
    prompt: "True or False: When multiple teams work together on the same product, each team should maintain a separate Product Backlog.",
    options: [
      { id: "a", text: "True." },
      { id: "b", text: "False." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q29",
    prompt: "If two Scrum Teams are added to the development of a product that previously had only one Scrum Team, what will be the immediate impact on the productivity of the original Scrum Team? (choose the best answer)",
    options: [
      { id: "a", text: "Its productivity is likely to decrease." },
      { id: "b", text: "Its productivity is likely to stay the same." },
      { id: "c", text: "Its productivity is likely to increase." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q30",
    prompt: "A Scrum Master is introducing Scrum to a new Scrum Team. The Scrum Team has decided that a Sprint Retrospective is unnecessary. What action should the Scrum Master take? (choose the best answer)",
    options: [
      { id: "a", text: "Call a meeting between the Scrum Team and senior management." },
      { id: "b", text: "Comply with the decision of the self-managing team." },
      { id: "c", text: "Consult with the Product Owner to see how he/she feels about the situation." },
      { id: "d", text: "Begin facilitating productive and useful Sprint Retrospectives." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q31",
    prompt: "Which two things are appropriate for a Scrum Master to do if the Developers don't have the engineering tools and infrastructure to completely finish each selected Product Backlog item? (choose the best two answers)",
    options: [
      { id: "a", text: "Coach the Scrum Team to improve its skills, tools, and infrastructure over time and adjust the Definition of Done accordingly." },
      { id: "b", text: "Encourage the Product Owner to accept partially \"Done\" Increments until the situation improves." },
      { id: "c", text: "Refocus the current Sprint on establishing the Scrum Team's infrastructure instead of delivering an Increment." },
      { id: "d", text: "Declare the Scrum Team not ready for Scrum." },
      { id: "e", text: "Have the Scrum Team establish a Definition of Done that is actually possible to achieve given current circumstances." },
    ],
    correctOptionId: "a,e"
  },

  {
    id: "q32",
    prompt: "When is implementation of a Product Backlog item considered complete? (choose the best answer)",
    options: [
      { id: "a", text: "At the end of the Sprint." },
      { id: "b", text: "When the item has no work remaining in order to be potentially released." },
      { id: "c", text: "When QA reports that the item passes all acceptance criteria." },
      { id: "d", text: "When all work in the Sprint Backlog related to the item is finished." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q33",
    prompt: "Choose two responsibilities of a self-managing Scrum Team. (choose the best two answers)",
    options: [
      { id: "a", text: "Reorder the Product Backlog." },
      { id: "b", text: "Pull Product Backlog items for the Sprint." },
      { id: "c", text: "Do the work planned in the Sprint Backlog." },
      { id: "d", text: "Increase velocity." },
      { id: "e", text: "Report daily progress to stakeholders." },
    ],
    correctOptionId: "b,c"
  },

  {
    id: "q34",
    prompt: "Every Scrum Team should have: (choose the best answer)",
    options: [
      { id: "a", text: "At least one representative from each major software engineering discipline (like QA, Dev, UX)." },
      { id: "b", text: "The competencies and skills needed to deliver a Done Increment in a Sprint." },
      { id: "c", text: "One Lead Developer and no more than 8 other members." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q35",
    prompt: "Why does the Product Owner want the Scrum Team to adhere to its Definition of Done? (choose the best answer)",
    options: [
      { id: "a", text: "To have complete transparency into what has been done at the end of each Sprint." },
      { id: "b", text: "To be able to reprimand the team when they don't meet their velocity goal for the Sprint." },
      { id: "c", text: "To know what the team will deliver over the next three Sprints." },
      { id: "d", text: "To predict the team's productivity over time." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q36",
    prompt: "During a Sprint Retrospective, for what is the Scrum Master responsible? (choose the best answer)",
    options: [
      { id: "a", text: "Prioritizing the resulting action items." },
      { id: "b", text: "Participating as a Scrum team member and facilitating as requested or needed." },
      { id: "c", text: "Acting as a scribe to capture the Developers answers." },
      { id: "d", text: "Summarizing and reporting the discussions to management." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q37",
    prompt: "The Scrum Team should have all the skills needed to: (choose the best answer)",
    options: [
      { id: "a", text: "Turn Product Backlog items into an Increment of potentially releasable product functionality." },
      { id: "b", text: "Do all of the development work, except for specialized testing that requires additional tools and environments." },
      { id: "c", text: "Complete the project within the date and cost as calculated by the Product Owner." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q38",
    prompt: "During the Sprint, the Scrum Master's role is to do which two of the following: (choose the best two answers)",
    options: [
      { id: "a", text: "Facilitate inspection and adaptation opportunities as requested or needed." },
      { id: "b", text: "Coaching the team members in the self-management." },
      { id: "c", text: "Ensure the Product Owner attends all Scrum events." },
      { id: "d", text: "Escalate team conflicts to functional line managers." },
      { id: "e", text: "Monitor the progress of the Developers." },
      { id: "f", text: "Assign tasks with the Scrum Team." },
    ],
    correctOptionId: "a,b"
  },

  {
    id: "q39",
    prompt: "The Scrum Master observes the Product Owner struggling with ordering the Product Backlog. What is an appropriate action for the Scrum Master to take? (choose the best answer)",
    options: [
      { id: "a", text: "Suggest the Product Owner extend the Sprint, so he can have more time to order the Product Backlog." },
      { id: "b", text: "Suggest that the Developers do the ordering to be sure that it is a feasible ordering of work." },
      { id: "c", text: "Offer the Product Owner help in understanding that the goal of ordering the Product Backlog is to maximize value." },
      { id: "d", text: "Present the Product Owner with an ordered Product Backlog to use." },
      { id: "e", text: "Encourage the Product Owner to work with the Developers to see which items technically are fastest to implement." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q40",
    prompt: "True or False: The Product Owner makes sure the team selects enough from the Product Backlog for a Sprint to satisfy the stakeholders.",
    options: [
      { id: "a", text: "True." },
      { id: "b", text: "False." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q41",
    prompt: "Which statement best describes the Sprint Review? (choose the best answer)",
    options: [
      { id: "a", text: "It is used to congratulate the Developers if it did what it forecast, or to punish the Developers if it failed to meet its forecast." },
      { id: "b", text: "It is a demo at the end of the Sprint for everyone in the organization to check on the work done." },
      { id: "c", text: "It is a mechanism to control the Developers activities during a Sprint." },
      { id: "d", text: "It is when the Scrum Team and stakeholders inspect the outcome of a Sprint and figure out what to do next." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q42",
    prompt: "Who owns the Sprint Backlog? (choose the best answer)",
    options: [
      { id: "a", text: "The Chief Backlog Officer." },
      { id: "b", text: "The Product Owner." },
      { id: "c", text: "The Scrum Master." },
      { id: "d", text: "The Scrum Team." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q43",
    prompt: "When might a Sprint be abnormally cancelled? (choose the best answer)",
    options: [
      { id: "a", text: "When the Scrum Team feels that the work is too hard." },
      { id: "b", text: "When the Sprint Goal becomes obsolete." },
      { id: "c", text: "When the sales department has an important new opportunity." },
      { id: "d", text: "When it becomes clear that not everything will be finished by the end of the Sprint." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q44",
    prompt: "A Sprint Retrospective should be held: (choose the best answer)",
    options: [
      { id: "a", text: "At the end of each Sprint." },
      { id: "b", text: "At the beginning of each Sprint." },
      { id: "c", text: "Only when the Scrum Team determines it needs one." },
      { id: "d", text: "At the end of the last Sprint in a project or a release." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q45",
    prompt: "A new Developer is having continuing conflicts with existing Developers and creating the hostile environment. If necessary, who is responsible for removing the team member? (choose the best answer)",
    options: [
      { id: "a", text: "The hiring manager is responsible, because he/she hired the Developer." },
      { id: "b", text: "The Scrum Manager is responsible, because he/she removes Impediments." },
      { id: "c", text: "The Developers are responsible, and may need help from the Scrum Master." },
      { id: "d", text: "The Product Owner is responsible, because he/she controls the return on investment (ROI)." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q46",
    prompt: "Which three purposes does the Definition of Done serve? (choose the best three answers)",
    options: [
      { id: "a", text: "Guide the Developers on how many Product Backlog items to select for the Sprint." },
      { id: "b", text: "Create a shared understanding of when work is complete." },
      { id: "c", text: "Describe the purpose, objective, and time-box of each Scrum event." },
      { id: "d", text: "Describe the work that must be done before the Sprint is allowed to end." },
      { id: "e", text: "Increase transparency." },
    ],
    correctOptionId: "a,b,e"
  },

  {
    id: "q47",
    prompt: "During a Sprint Retrospective, the Developers proposes moving the Daily Scrum to only occur on Tuesdays and Thursdays. Which two are the most appropriate responses for the Scrum Master? (choose the best two answers)",
    options: [
      { id: "a", text: "Consider the request and decide on which days the Daily Scrum should occur." },
      { id: "b", text: "Coach the team on why the Daily Scrum is important as an opportunity to update the plan." },
      { id: "c", text: "Have the Developers vote." },
      { id: "d", text: "Learn why the Developers wants this and work with them to improve the outcome of the Daily Scrum." },
      { id: "e", text: "Acknowledge and support the self-managing team's decision." },
    ],
    correctOptionId: "b,d"
  },

  {
    id: "q48",
    prompt: "When should a Sprint Goal be created? (choose the best answer)",
    options: [
      { id: "a", text: "It should have been created in the previous Sprint during Product Backlog refinement." },
      { id: "b", text: "It must be established before Sprint Planning in order to begin planning." },
      { id: "c", text: "A Sprint Goal is not mandatory in Scrum." },
      { id: "d", text: "At any time during the Sprint." },
      { id: "e", text: "During Sprint Planning." },
    ],
    correctOptionId: "e"
  },

  {
    id: "q49",
    prompt: "True or False: Every Scrum team must have a Product Owner and Scrum Master.",
    options: [
      { id: "a", text: "True. Outcomes affected by their participation and availability." },
      { id: "b", text: "False. A Product Owner can be replaced by a business analyst in the Scrum Team." },
      { id: "c", text: "False. A Scrum Master is only required when asked for by the Scrum Team." },
      { id: "d", text: "True. Each must be 100% dedicated to the Scrum Team." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q50",
    prompt: "Who can abnormally terminate a Sprint? (choose the best answer)",
    options: [
      { id: "a", text: "The Scrum Master." },
      { id: "b", text: "The Scrum Team or its members." },
      { id: "c", text: "The Product Owner." },
      { id: "d", text: "The Stakeholders." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q51",
    prompt: "True or False: The Sprint Goal is a result of Sprint Planning, as is the Sprint Backlog.",
    options: [
      { id: "a", text: "True." },
      { id: "b", text: "False." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q52",
    prompt: "Which two of the following are appropriate topics for discussion during a Sprint Retrospective? (choose the best two answers)",
    options: [
      { id: "a", text: "Identifying high priority process improvements for the next Sprint." },
      { id: "b", text: "The order of items in the Product Backlog." },
      { id: "c", text: "How the team collaborates." },
      { id: "d", text: "Documenting acceptance criteria for items in the next Sprint." },
    ],
    correctOptionId: "a,c"
  },

  {
    id: "q53",
    prompt: "A Scrum Master is working with a Scrum Team that has members in different physical locations. The Scrum Team meets in a variety of meeting rooms and has much to do logistically (for example, set up conference calls) before the Daily Scrum. What action should the Scrum Master take? (choose the best answer)",
    options: [
      { id: "a", text: "Allow the Scrum Team to self-manage and determine for itself what to do." },
      { id: "b", text: "Set up the meeting and tell the Scrum Team that is how it will be done." },
      { id: "c", text: "Ask the Scrum Team members to alternate who is responsible for meeting setup." },
      { id: "d", text: "Inform management and ask them to solve it." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q54",
    prompt: "True or False: Cross-functional teams are optimized to work on one technical layer of a system only (e.g. GUI, database, middle tier, interfaces).",
    options: [
      { id: "a", text: "True." },
      { id: "b", text: "False." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q55",
    prompt: "Which of the following might the Scrum Team discuss during a Sprint Retrospective? (choose the best answer)",
    options: [
      { id: "a", text: "Methods of communication." },
      { id: "b", text: "The way the Scrum Team does Sprint Planning." },
      { id: "c", text: "Skills needed to improve the Developers ability to deliver." },
      { id: "d", text: "Its Definition of Done." },
      { id: "e", text: "All of the above." },
    ],
    correctOptionId: "e"
  },

  {
    id: "q56",
    prompt: "What are the two primary ways a Scrum Master keeps a Developers working at its highest level of productivity? (choose the best two answers)",
    options: [
      { id: "a", text: "By ensuring the meetings start and end at the proper time." },
      { id: "b", text: "By removing impediments that hinder the Developers." },
      { id: "c", text: "By facilitating Developers decisions." },
      { id: "d", text: "By keeping high value features high in the Product Backlog." },
    ],
    correctOptionId: "b,c"
  },

  {
    id: "q57",
    prompt: "What is the recommended size for the Developers? (choose the best answer)",
    options: [
      { id: "a", text: "7 plus or minus 3." },
      { id: "b", text: "At least 7." },
      { id: "c", text: "9." },
      { id: "d", text: "3 to 9." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q58",
    prompt: "You are the Scrum Master of a new, to be developed product. Development is going to require 45 people. What is a good first question-for you to suggest the group thinks about when forming into teams? (choose the best answer)",
    options: [
      { id: "a", text: "How will we make sure all teams have the right amount or expertise?" },
      { id: "b", text: "What is the right mixture of senior and junior people on each team?" },
      { id: "c", text: "Who are going to be the team leads?" },
      { id: "d", text: "Who are the subject matter experts on each team?" },
    ],
    correctOptionId: "a"
  },

  {
    id: "q59",
    prompt: "Which three of the following are feedback loops in Scrum? (choose the best three answers)",
    options: [
      { id: "a", text: "Sprint Review." },
      { id: "b", text: "Release Planning." },
      { id: "c", text: "Sprint Retrospective." },
      { id: "d", text: "Refinement Meeting." },
      { id: "e", text: "Daily Scrum." },
    ],
    correctOptionId: "a,c,e"
  },

  {
    id: "q60",
    prompt: "When the Developers are having trouble delivering a working Increment because they don't understand a functional requirement, what should they do? (choose the best answer)",
    options: [
      { id: "a", text: "Add a specialist to the Developers." },
      { id: "b", text: "Partially complete the functionality, and discuss the remaining work at the Sprint Review." },
      { id: "c", text: "Collaborate with the Product Owner to determine what is possible and acceptable." },
      { id: "d", text: "Defer the work to a more appropriate Sprint." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q61",
    prompt: "When is the Sprint Backlog created? (choose the best answer)",
    options: [
      { id: "a", text: "At the beginning of the project." },
      { id: "b", text: "During the Sprint Planning meeting." },
      { id: "c", text: "Prior to the Sprint Planning meeting." },
      { id: "d", text: "During the Sprint." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q62",
    prompt: "Which of the following services are appropriate for a Scrum Master in regard to the Daily Scrum? (choose the best answer)",
    options: [
      { id: "a", text: "Lead the discussions of the Developers." },
      { id: "b", text: "Make sure that all 3 questions have been answered by each member of the team." },
      { id: "c", text: "Keep track of whether each team member has a chance to speak." },
      { id: "d", text: "Teach the Developers to keep the Daily Scrum within the 15 minute time-box." },
      { id: "e", text: "All of the above." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q63",
    prompt: "Which of the following best describes an Increment of working software? (choose the best answer)",
    options: [
      { id: "a", text: "A decomposition of all Product Backlog items into tasks for future Sprint Backlog lists." },
      { id: "b", text: "Additional features in a usable state that complement those delivered in previous iterations." },
      { id: "c", text: "A new user interface design for functionality delivered in previous iterations." },
      { id: "d", text: "An automated test suite to verify functionality delivered in previous iterations." },
      { id: "e", text: "UML diagrams that describe how to deliver functionality in future iterations." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q64",
    prompt: "In order to achieve the benefits of Scrum, it is important to enact the value of commitment. What two actions demonstrate the commitment of Scrum Team members? (choose the best two answers)",
    options: [
      { id: "a", text: "Always deliver the items in the Sprint forecast." },
      { id: "b", text: "Help the other Scrum Team members." },
      { id: "c", text: "Do your best" },
      { id: "d", text: "Send out a daily status report." },
      { id: "e", text: "Work late." },
    ],
    correctOptionId: "b,c"
  },

  {
    id: "q65",
    prompt: "True or False: The Product Owner determines how many Product Backlog items the Developers selects for a Sprint. (choose the best answer)",
    options: [
      { id: "a", text: "False." },
      { id: "b", text: "True, accordingly to what was committed to the stakeholders." },
      { id: "c", text: "True, but only after confirmation by the resource manager that the Team has enough capacity." },
      { id: "d", text: "True." },
      { id: "e", text: "False, the Scrum Master does that." },
      { id: "f", text: "False, capacity and commitment are the Project manager's responsibility." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q66",
    prompt: "What are two ways that regulatory compliance requirements are dealt with in Scrum? (choose the best two answers)",
    options: [
      { id: "a", text: "They are addressed by a separate team who is responsible for compliance issues." },
      { id: "b", text: "They are discussed, analyzed, and documented before the first Sprint can begin." },
      { id: "c", text: "They are added to the Product Backlog and addressed during each Sprint, alongside the creation of new Product capabilities." },
      { id: "d", text: "They are addressed as part of meeting the Definition of Done during each Sprint." },
    ],
    correctOptionId: "c,d"
  },

  {
    id: "q67",
    prompt: "The Sprint Review is mainly an inspect and adapt opportunity for which group?",
    options: [
      { id: "a", text: "The Developers and stakeholders." },
      { id: "b", text: "The Product Owner and Developers." },
      { id: "c", text: "The Scrum Team and stakeholders." },
      { id: "d", text: "The Product Owner and management." },
      { id: "e", text: "The Developers and management." },
      { id: "f", text: "The Product Owner and stakeholders." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q68",
    prompt: "True or False: To get started in terms of what to build, Scrum requires no more than a Product Owner with enough ideas for a first Sprint, Developers to implement those ideas and a Scrum Master to help guide the process.",
    options: [
      { id: "a", text: "True." },
      { id: "b", text: "False." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q69",
    prompt: "What is the time-box for the Sprint Review?",
    options: [
      { id: "a", text: "As long as needed." },
      { id: "b", text: "2 hours for a monthly Sprint." },
      { id: "c", text: "4 hours for a monthly Sprint." },
      { id: "d", text: "4 hours and longer as needed." },
      { id: "e", text: "1 day" },
    ],
    correctOptionId: "c"
  },

  {
    id: "q70",
    prompt: "Who is responsible for tracking the remaining work of the Sprint?",
    options: [
      { id: "a", text: "The Developers." },
      { id: "b", text: "The Scrum Master." },
      { id: "c", text: "The Project Manager." },
      { id: "d", text: "The Developers is consultation with the Product Owner." },
      { id: "e", text: "The Product Owner." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q71",
    prompt: "What is the tactic a Scrum Master should use to divide a group of 100 people into multiple Scrum Teams?",
    options: [
      { id: "a", text: "Create teams based on their skills across multiple layers (such as database, UI, etc.)" },
      { id: "b", text: "Ask the Product Owner to assign the people to teams." },
      { id: "c", text: "Ask the Developers to divide themselves into teams." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q72",
    prompt: "True or False: A product Increment must be released to production at the end of each Sprint.",
    options: [
      { id: "a", text: "True." },
      { id: "b", text: "False." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q73",
    prompt: "If burndown charts are used to visualize progress, what do they track?",
    options: [
      { id: "a", text: "Accumulated cost." },
      { id: "b", text: "Individual worker productivity." },
      { id: "c", text: "Work remaining across time." },
      { id: "d", text: "Accumulated business value delivered to the customer." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q74",
    prompt: "How is management external to the Scrum Team involved in the Daily Scrum?",
    options: [
      { id: "a", text: "The Scrum Master speaks on their behalf." },
      { id: "b", text: "The Scrum Team self-manages and is the only management required at the Daily Scrum." },
      { id: "c", text: "Management gives an update at the start of each Daily Scrum." },
      { id: "d", text: "The Product Owner represents their opinions." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q75",
    prompt: "A Scrum Master is keeping a list of open impediments, but it is growing and he/she has been able to resolve only a small portion of the impediments. Which three techniques would be most helpful in this situation? (choose three)",
    options: [
      { id: "a", text: "Consulting with the Scrum Team." },
      { id: "b", text: "Prioritizing the list and working on them in order." },
      { id: "c", text: "Arranging a triage meeting with all project managers." },
      { id: "d", text: "Alerting management to the impediments and their impact." },
    ],
    correctOptionId: "a,b,d"
  },

  {
    id: "q76",
    prompt: "Which Scrum Value is affected by a lack of trust in the Scrum Team?",
    options: [
      { id: "a", text: "Focus." },
      { id: "b", text: "Respect." },
      { id: "c", text: "Openness." },
      { id: "d", text: "Courage." },
      { id: "e", text: "Commitment." },
      { id: "f", text: "All of the above." },
    ],
    correctOptionId: "f"
  },

  {
    id: "q77",
    prompt: "What is the time-box for the Sprint Planning meeting?",
    options: [
      { id: "a", text: "4 Hours for a monthly Sprint." },
      { id: "b", text: "8 Hours for a monthly Sprint." },
      { id: "c", text: "Monthly." },
      { id: "d", text: "Whenever it is done." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q78",
    prompt: "A Product Owner wants advice from the Scrum Master about estimating work in Scrum. Which of these is the guideline that a Scrum Master should give?",
    options: [
      { id: "a", text: "Product Backlog items must be estimated in story points." },
      { id: "b", text: "Estimates are made by the Scrum Team." },
      { id: "c", text: "Estimates must be in relative units." },
      { id: "d", text: "Scrum forbids estimating." },
      { id: "e", text: "Estimates are made by the Product Owner, but are best checked with the Scrum Team." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q79",
    prompt: "What is a Scrum Team responsible for? (choose two)",
    options: [
      { id: "a", text: "Resolving internal team conflicts." },
      { id: "b", text: "Reporting productivity." },
      { id: "c", text: "Selecting the Product Owner." },
      { id: "d", text: "Organizing the work required to meet the Sprint Goal." },
    ],
    correctOptionId: "a,d"
  },

  {
    id: "q80",
    prompt: "Which two ways of creating Scrum Teams are consistent with Scrum's values? (choose two)",
    options: [
      { id: "a", text: "Existing teams propose how they would like to go about organizing into the new structure." },
      { id: "b", text: "Managers personally re-assign current subordinates to new teams." },
      { id: "c", text: "Managers collaborate to assign individuals to specific teams." },
      { id: "d", text: "Bring all the Developers together and let them self-manage into Scrum Teams." },
      { id: "e", text: "The Chief Product Owner determines the new team structures and assignments." },
    ],
    correctOptionId: "a,d"
  },

  {
    id: "q81",
    prompt: "True or False: A Scrum Master is essentially the same thing as a traditional PM (Project Manager).",
    options: [
      { id: "a", text: "True." },
      { id: "b", text: "False." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q82",
    prompt: "The Product Owner is not collaborating with the Developers during the Sprint. What are two valuable actions for a Scrum Master to take? (choose two)",
    options: [
      { id: "a", text: "Inform the Product Owner's functional manager." },
      { id: "b", text: "Stop the Sprint, send the Product Owner to a course and restart." },
      { id: "c", text: "Bring up the problem in the Sprint Retrospective." },
      { id: "d", text: "Coach the Product Owner in the values of Scrum and incremental delivery." },
      { id: "e", text: "Nominate a proxy Product Owner." },
    ],
    correctOptionId: "c,d"
  },

  {
    id: "q83",
    prompt: "True or False: Multiple Scrum Teams working on the same product or system all select work from the same Product Backlog.",
    options: [
      { id: "a", text: "True." },
      { id: "b", text: "False." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q84",
    prompt: "For the purpose of transparency, when does Scrum say a new Increment of working software must be available?",
    options: [
      { id: "a", text: "After the acceptance testing phase." },
      { id: "b", text: "Before the release Sprint." },
      { id: "c", text: "Every 3 Sprints." },
      { id: "d", text: "At the end of every Sprint." },
      { id: "e", text: "When the Product Owner asks to create one." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q85",
    prompt: "True or False: Multiple Scrum Teams working on the same project must have the same Sprint start date.",
    options: [
      { id: "a", text: "True." },
      { id: "b", text: "False." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q86",
    prompt: "During a Sprint Retrospective, for what is the Product Owner responsible?",
    options: [
      { id: "a", text: "Participating as a Scrum Team member." },
      { id: "b", text: "Summarizing and reporting the discussions to the stakeholders that he/she represents in the Scrum Team." },
      { id: "c", text: "Capturing requirements for the Product Backlog." },
      { id: "d", text: "The Product Owner should not take part in Sprint Retrospectives." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q87",
    prompt: "Marian is the Product Owner envisioning a project for a new release of her product. She made a projection of a release date based upon a sustained velocity of 17 completed units of work per Sprint. Over the first 3 Sprints, the average velocity was 13 for work that the Developers estimated as 90% done. The Developers, feeling the need to meet the plan, figured that a velocity of 17 was within their reach. A good way to continue is:",
    options: [
      { id: "a", text: "The Developers makes sure that all of the selected scope per Sprint is as \"Done\" as possible. The undone work is estimated and added to the Sprint Backlog of the next Sprint, so it doesn't mess up the Product Backlog." },
      { id: "b", text: "Add enough people to the Developers for the deadline to be made." },
      { id: "c", text: "The opportunity to inspect and adapt is lost. Opaqueness has replaced transparency. Predictability has dropped below zero. The produced software is not usable. As the rules of Scrum have not been respected, it is the Scrum Master's duty to assess whether repair is possible, or a restart with a more reliable team. If not, the Scrum Master should cancel the project." },
      { id: "d", text: "The Developers should remind Marian to find funding for enough Release Sprints in which the remaining work can be done." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q88",
    prompt: "The time-box for a Daily Scrum?",
    options: [
      { id: "a", text: "Two minutes per person." },
      { id: "b", text: "15 minutes." },
      { id: "c", text: "15 minutes for a 4 week sprint. For shorter Sprints it is usually shorter." },
      { id: "d", text: "4 hours." },
      { id: "e", text: "The same time of day every day." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q89",
    prompt: "Which phrase best describes a Product Owner?",
    options: [
      { id: "a", text: "Go-between Developers and customers." },
      { id: "b", text: "Value optimizer." },
      { id: "c", text: "Requirements engineer." },
      { id: "d", text: "Team manager." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q90",
    prompt: "The length of a Sprint should be:",
    options: [
      { id: "a", text: "Short enough to keep the business risk acceptable to the Product Owner." },
      { id: "b", text: "Short enough to be able to synchronize the development work with other business events." },
      { id: "c", text: "No more than one calendar month." },
      { id: "d", text: "All of these answers are correct." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q91",
    prompt: "What are two responsibilities of testers in a Scrum Team? (choose two)",
    options: [
      { id: "a", text: "Verifying the work of programmers." },
      { id: "b", text: "Everyone in the Developers is responsible for quality." },
      { id: "c", text: "Tracking quality metrics." },
      { id: "d", text: "Finding bugs." },
      { id: "e", text: "Scrum has no \"tester\" role." },
    ],
    correctOptionId: "b,e"
  },

  {
    id: "q92",
    prompt: "The CEO asks the Developers to add a \"very important\" item to a Sprint that is in progress. What should the Developers do?",
    options: [
      { id: "a", text: "Add the item to the current Sprint and drop an item of equal size." },
      { id: "b", text: "Add the item to the current Sprint without any adjustments." },
      { id: "c", text: "Inform the Product Owner so he/she can work with the CEO." },
      { id: "d", text: "Add the item to the next Sprint." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q93",
    prompt: "What is the role of management in Scrum?",
    options: [
      { id: "a", text: "To facilitate the Scrum Teams with insights and resources that help them improve." },
      { id: "b", text: "To monitor the Scrum Team's productivity." },
      { id: "c", text: "To identify and remove people that aren't working hard enough." },
      { id: "d", text: "To continually monitor staffing levels of the Developers." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q94",
    prompt: "Which technique is the best way the Scrum Master can ensure that the Developers communicates effectively with the Product Owner?",
    options: [
      { id: "a", text: "Monitor communications between them and facilitate direct collaboration." },
      { id: "b", text: "Teach the Developers to talk in terms of business needs and objectives." },
      { id: "c", text: "Teach the Product Owner about the technologies employed during the Sprints." },
      { id: "d", text: "Act as a go-between for them." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q95",
    prompt: "How much of the Sprint Backlog must be defined during the Sprint Planning event?",
    options: [
      { id: "a", text: "Just enough tasks for the Scrum Master to be confident in the Developers understanding of the Sprint." },
      { id: "b", text: "The entire Sprint Backlog must be identified and estimated by the end of the Sprint Planning meeting." },
      { id: "c", text: "Enough so the Developers can create its best forecast of what is can do, and to start the first several days of the Sprint." },
      { id: "d", text: "Just enough to understand design and architectural implications." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q96",
    prompt: "Who is responsible for managing the progress of work during a Sprint?",
    options: [
      { id: "a", text: "The Scrum Master." },
      { id: "b", text: "The Developers." },
      { id: "c", text: "The Product Owner." },
      { id: "d", text: "The most junior member of the Team." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q97",
    prompt: "Who is responsible for collaborating with stakeholders?",
    options: [
      { id: "a", text: "The Developers." },
      { id: "b", text: "The Team Manager." },
      { id: "c", text: "The Project Manager." },
      { id: "d", text: "The Scrum Team." },
      { id: "e", text: "The Business Analyst." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q98",
    prompt: "What two factors are best considered when establishing the Sprint length? (choose two)",
    options: [
      { id: "a", text: "The organization has mandated similar length sprints." },
      { id: "b", text: "The level of uncertainty over the technology to be used." },
      { id: "c", text: "The frequency at which team formation can be changed." },
      { id: "d", text: "The risk of being disconnected from the stakeholders." },
    ],
    correctOptionId: "b,d"
  },

  {
    id: "q99",
    prompt: "Which of these may a Developers deliver at the end of a Sprint?",
    options: [
      { id: "a", text: "Failing unit tests, to identify acceptance tests for the next Sprint." },
      { id: "b", text: "An Increment of software with minor known bugs in it." },
      { id: "c", text: "An Increment of working software that is \"done\"." },
      { id: "d", text: "A single document, if that is what the Scrum Master asked for." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q100",
    prompt: "Who creates a Product Backlog item's estimate?",
    options: [
      { id: "a", text: "The Developers after clarifying requirements with the Product Owner." },
      { id: "b", text: "The Product Owner with input from the Developers." },
      { id: "c", text: "The most senior people in the organization, including architects and subject matter experts." },
      { id: "d", text: "The Scrum Master." },
      { id: "e", text: "The Developers, alone." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q101",
    prompt: "Who starts the Daily Scrum?",
    options: [
      { id: "a", text: "The person coming in last. This encourages people to be on time and helps to stay within the time-box." },
      { id: "b", text: "Whoever the Developers decides should start." },
      { id: "c", text: "The person who has the token." },
      { id: "d", text: "The Scrum Master. This ensures that the Developers have the meeting and stays within the time-box." },
      { id: "e", text: "The person who last broke the build." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q102",
    prompt: "You are the Scrum Master on a newly formed Scrum Team. Which three of the following activities would probably help the team in starting up? (choose three)",
    options: [
      { id: "a", text: "Introduce a bonus system for the top performers in the team." },
      { id: "b", text: "Have the Scrum Team members introduce themselves to each other and give a brief background of their skills and work history." },
      { id: "c", text: "Have the development managers for each Developer introduce their direct reports and go over their responsibilities on the Scrum Team." },
      { id: "d", text: "Ensure the Scrum Team members have compatible personalities." },
      { id: "e", text: "Ensure the team understands they need a Definition of Done." },
      { id: "f", text: "Ask the Product Owner to discuss the product or project, its history, goals, and context, as well as answer questions." },
    ],
    correctOptionId: "b,e,f"
  },

  {
    id: "q103",
    prompt: "The Developers selects a set of Product Backlog items for a Sprint Backlog with the intent to get the selected items \"Done\" by the end of the Sprint. Which three phrases best describe the purpose of a Definition of Done? (choose three)",
    options: [
      { id: "a", text: "It controls whether the Developers have performed their tasks." },
      { id: "b", text: "It provides a template for elements that need to be included in the technical documentation." },
      { id: "c", text: "It creates transparency over the work inspected at the Sprint Review." },
      { id: "d", text: "It tracks the percent completeness of a Product Backlog item." },
      { id: "e", text: "It guides the Developers is creating a forecast at the Sprint Planning." },
      { id: "f", text: "It defines what it takes for an Increment to be ready for release." },
    ],
    correctOptionId: "c,e,f"
  },

  {
    id: "q104",
    prompt: "The Daily Scrum is an event that happens every day. What would be three key concerns if the frequency were to be lowered to every two or three days? (choose three)",
    options: [
      { id: "a", text: "Opportunities to inspect and adapt the Sprint Backlog are lost." },
      { id: "b", text: "Impediments are raised and resolved more slowly." },
      { id: "c", text: "The Product Owner cannot accurately report progress to the stakeholders." },
      { id: "d", text: "Too much work is spent updating the Scrum board before the meeting." },
      { id: "e", text: "The Scrum Master loses the ability to update the Gantt chart properly." },
      { id: "f", text: "The Sprint Backlog may become inaccurate." },
    ],
    correctOptionId: "a,b,f"
  },

  {
    id: "q105",
    prompt: "Which statement best describes Scrum?",
    options: [
      { id: "a", text: "A defined and predictive process that confirms to the principles of Scientific Management." },
      { id: "b", text: "A complete methodology that defines how to develop software." },
      { id: "c", text: "A cookbook that defines best practices for software development." },
      { id: "d", text: "A framework within which complex products in complex environments are developed." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q106",
    prompt: "Which Scrum Values are exhibited by not building Product Backlog items that have low business value? (choose three)",
    options: [
      { id: "a", text: "Economic Value Added." },
      { id: "b", text: "Respect." },
      { id: "c", text: "Focus." },
      { id: "d", text: "Earned Value." },
      { id: "e", text: "Courage." },
    ],
    correctOptionId: "b,c,e"
  },

  {
    id: "q107",
    prompt: "How should Product Backlog items be chosen when multiple Scrum Teams work from the same Product Backlog?",
    options: [
      { id: "a", text: "The Scrum Team with the highest velocity pulls Product Backlog items first." },
      { id: "b", text: "The Developers pull in work in agreement with the Product Owner." },
      { id: "c", text: "The Product Owner should provide each team with its own Product Backlog." },
      { id: "d", text: "Each Scrum Team takes an equal numbers of items." },
      { id: "e", text: "The Product Owner decides." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q108",
    prompt: "How often should Developers change?",
    options: [
      { id: "a", text: "As needed, while taking into account a short term reduction in productivity." },
      { id: "b", text: "Never, because it reduces productivity." },
      { id: "c", text: "As needed, with no special allowance for changes in productivity." },
      { id: "d", text: "Every Sprint to promote shared learning." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q109",
    prompt: "Who should make sure everyone on the Developers does his or her tasks for the Sprint?",
    options: [
      { id: "a", text: "The Project Manager." },
      { id: "b", text: "The Product Owner." },
      { id: "c", text: "The Scrum Master." },
      { id: "d", text: "The Developers." },
      { id: "e", text: "All of the above." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q110",
    prompt: "When is it most appropriate for a Developers to change the Definition of Done?",
    options: [
      { id: "a", text: "During Spring Planning." },
      { id: "b", text: "Prior to starting a new Sprint." },
      { id: "c", text: "During the Sprint Retrospective." },
      { id: "d", text: "Prior to starting a new project." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q111",
    prompt: "As the Sprint Planning meeting progresses, the Developers sees that the workload is greater than they can handle. Which two are valid actions? (choose two)",
    options: [
      { id: "a", text: "Recruit additional Developers before the work can begin." },
      { id: "b", text: "The Developers ensures that the Product Owner is aware, starts the Sprint, and monitors progress." },
      { id: "c", text: "Cancel the Sprint." },
      { id: "d", text: "Remove or change selected Product Backlog items." },
      { id: "e", text: "The Developers works overtime during this Sprint." },
    ],
    correctOptionId: "b,d"
  },

  {
    id: "q112",
    prompt: "Currently, your Developers are organized to address a single layer only (for example, front end, middle tier, back end, and interfaces). What are three things to consider when deciding to move away from such component teams toward feature teams? (choose three)",
    options: [
      { id: "a", text: "You cannot do Scrum without feature teams." },
      { id: "b", text: "Productivity may suffer when making this kind of move." },
      { id: "c", text: "Getting support from the business side first helps." },
      { id: "d", text: "Feature teams have less communication overhead." },
      { id: "e", text: "With feature teams, it is easier to calculate the productivity per team." },
    ],
    correctOptionId: "b,c,d"
  },

  {
    id: "q113",
    prompt: "During a Sprint, when is new work or further decomposition of work added to the Sprint Backlog?",
    options: [
      { id: "a", text: "When the Product Owner identifies new work." },
      { id: "b", text: "As soon as possible after they are identified." },
      { id: "c", text: "When the Scrum Master has time to enter them." },
      { id: "d", text: "During the Daily Scrum after the Developers approves them." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q114",
    prompt: "What is the main reason for the Scrum Master to be at the Daily Scrum?",
    options: [
      { id: "a", text: "To gather status and progress information to report to management." },
      { id: "b", text: "To write down any changes to the Sprint Backlog, including adding new items, and tracking progress on the burn-down." },
      { id: "c", text: "He or she does not have to be there; he or she only has to ensure the Developers have a Daily Scrum." },
      { id: "d", text: "To make sure every team member answers the three questions." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q115",
    prompt: "You have six teams using a traditional method to deliver a product. Your management has asked you to start using Scrum. In the initial project there were separate plans and teams for the layers of a software system, i.e. one for the frontend, one for the middle tier, one for the back-end, and one for the interfaces and services. This resembles what is known as component teams. But you have read that it's a good idea to have teams organized by feature. What are the advantages of keeping component teams while starting Scrum?",
    options: [
      { id: "a", text: "There's less initial disruption than organizing into new teams. As they start, they will discover what works best, and how to potentially re-organize towards this." },
      { id: "b", text: "Component teams generally have the skills needed to create a working Increment of software that provides business value." },
      { id: "c", text: "Because they have worked together for some time, they are likely able to start producing shippable Increments faster that new feature teams would." },
      { id: "d", text: "There are fewer cross-team dependencies than working in feature teams." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q116",
    prompt: "True or False: A properly functioning Scrum Team will have at least one Release Sprint and may well have several.",
    options: [
      { id: "a", text: "True." },
      { id: "b", text: "False." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q117",
    prompt: "True or False: Scrum is a methodology that tells in detail how to build software incrementally.",
    options: [
      { id: "a", text: "True." },
      { id: "b", text: "False." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q118",
    prompt: "For which is the Scrum Master responsible?",
    options: [
      { id: "a", text: "Managing the performance of the Scrum Team." },
      { id: "b", text: "The meetings and the objectives that a Scrum Team sets for itself." },
      { id: "c", text: "The Scrum framework being adopted and used properly." },
      { id: "d", text: "Keeping track of resource allocation." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q119",
    prompt: "The Developers asks their Product Owner to re-order the Product Backlog. The team is waiting for an external supplier to deliver a specific software component. Without that component there won't be enough work in the next Sprint to occupy the full team. The Product Owner asks the Scrum Master for help. What would be good advice to give the Product Owner?",
    options: [
      { id: "a", text: "Remind the Product Owner that his primary concern is the flow of value reflected in the ordering of the Product Backlog." },
      { id: "b", text: "Tell the Product Owner to re-order the Product Backlog so the work involving the external component can be planned in a separate sprint." },
      { id: "c", text: "Tell the Product Owner that the Product Backlog should be ordered to maximize utilization of the Developers." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q120",
    prompt: "What are three ways Scrum promotes self-management? (choose three)",
    options: [
      { id: "a", text: "By not allowing documentation." },
      { id: "b", text: "By the Developers deciding what work to do in a Sprint." },
      { id: "c", text: "By preventing stakeholders from entering the development room." },
      { id: "d", text: "By removing titles for Developers." },
      { id: "e", text: "By being a lightweight framework." },
    ],
    correctOptionId: "b,d,e"
  },

  {
    id: "q121",
    prompt: "What is the key concern when multiple Scrum Teams are working from the same Product Backlog?",
    options: [
      { id: "a", text: "Minimizing dependencies between teams." },
      { id: "b", text: "Clear definition of requirements." },
      { id: "c", text: "Meeting original scope projections." },
      { id: "d", text: "Making sure there's enough work for everyone on every team." },
      { id: "e", text: "Maximizing velocity." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q122",
    prompt: "What does it mean to say that an event has a time-box?",
    options: [
      { id: "a", text: "The event must happen at a set time." },
      { id: "b", text: "The event must happen by a given time." },
      { id: "c", text: "The event must take at least a minimum amount of time." },
      { id: "d", text: "The event can take no more than a maximum amount of time." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q123",
    prompt: "Which outcome is expected as Scrum Teams mature?",
    options: [
      { id: "a", text: "They will improve their Definition of Done to include more stringent criteria." },
      { id: "b", text: "The Sprint Retrospectives will grow to be longer than 4 hours." },
      { id: "c", text: "There is no need for a time-boxed Sprint, since time-boxes are only for new Scrum Teams." },
      { id: "d", text: "Sprint Reviews will no longer be needed." },
      { id: "e", text: "A Scrum Master is no longer needed since they are a mature team now." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q124",
    prompt: "The Product Owner must release each Increment to production.",
    options: [
      { id: "a", text: "When it makes sense." },
      { id: "b", text: "To make sure the Developers are done every Sprint." },
      { id: "c", text: "Whenever the product is free of defects." },
      { id: "d", text: "Without exception." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q125",
    prompt: "Who creates the Definition of Done?",
    options: [
      { id: "a", text: "The Scrum Master as he/she is responsible for the Developers productivity." },
      { id: "b", text: "The Scrum Team, in a collaborative effort where the result is the common denominator of all members' definition." },
      { id: "c", text: "The Product Owner as he/she is responsible for the product's success." },
      { id: "d", text: "The development organization (or Developers if none is available from the development organization)." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q126",
    prompt: "Five new Scrum Teams have been created to build one product. A few of the Developers on one of the Scrum Teams ask the Scrum Master how to coordinate their work with the order teams. What should the Scrum Master do?",
    options: [
      { id: "a", text: "Teach the Product Owner to work with the lead Developers on ordering Product Backlog in a way to avoid too much technical and development overlap during a Sprint." },
      { id: "b", text: "Teach them that it is their responsibility to work with the other teams to create an integrated Increment." },
      { id: "c", text: "Collect the Sprint tasks from the teams at the end of their Sprint Planning and merge that into a consolidated plan for the entire Sprint." },
      { id: "d", text: "Visit the five teams each day to inspect that their Sprint Backlogs are aligned." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q127",
    prompt: "Which two things should the Developers do during the first Sprint? (choose two)",
    options: [
      { id: "a", text: "Make up a plan for the rest of the project." },
      { id: "b", text: "Analyze, describe, and document the requirements for the subsequent Sprints." },
      { id: "c", text: "Develop at least one piece of functionality." },
      { id: "d", text: "Analyze, design, and describe the complete architecture and infrastructure." },
      { id: "e", text: "Create an Increment of potentially releasable software." },
    ],
    correctOptionId: "c,e"
  },

  {
    id: "q128",
    prompt: "Who determines when it is appropriate to update the Sprint Backlog during a Sprint?",
    options: [
      { id: "a", text: "The Project Manager." },
      { id: "b", text: "The Developers." },
      { id: "c", text: "The Scrum Team." },
      { id: "d", text: "The Product Owner." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q129",
    prompt: "Who must attend the Daily Scrum?",
    options: [
      { id: "a", text: "The Scrum Master and Product Owner." },
      { id: "b", text: "The Developers." },
      { id: "c", text: "The Developers and Product Owner." },
      { id: "d", text: "The Scrum Team." },
      { id: "e", text: "The Developers and Scrum Master." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q130",
    prompt: "When do Developers take ownership of a Sprint Backlog item?",
    options: [
      { id: "a", text: "At the Sprint planning meeting." },
      { id: "b", text: "During the Daily Scrum." },
      { id: "c", text: "Never. All Sprint Backlog Items are \"owned\" by the entire Scrum Team, even though each one may be done by an individual Developers." },
      { id: "d", text: "Whenever a team member can accommodate more work." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q131",
    prompt: "True or False: The purpose of a Sprint is to produce a done Increment of product.",
    options: [
      { id: "a", text: "True." },
      { id: "b", text: "False." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q132",
    prompt: "In the Sprint Planning meeting, the Product Owner and the Developers were unable to reach a clear understanding about the highest order Product Backlog items. Because of this, the Developers couldn't figure out how many Product Backlog items it could forecast for the upcoming Sprint. They were able to agree on a Sprint Goal, however. Which of the following two actions should the Scrum Master support? (choose two)",
    options: [
      { id: "a", text: "Cancel the Sprint. Send the entire team to an advanced Scrum training and then start a new Sprint." },
      { id: "b", text: "Forecast the most likely Product Backlog items to meet the goal and create a Sprint Backlog based on a likely initial design and plan. Once the time-box for the Sprint Planning meeting is over, start the Sprint and continue to analyze, decompose, and create additional functionality during the Sprint." },
      { id: "c", text: "Continue the Sprint Planning meeting past its time-box until an adequate number of Product Backlog items are well enough understood for the Developers to make a complete forecast. Then start the Sprint." },
      { id: "d", text: "Discuss in the upcoming Sprint Retrospective why this happened and what changes will make it less likely to recur." },
      { id: "e", text: "Ask everyone to take as much time as needed to analyze the Product Backlog first, and then reconvene another Sprint Planning meeting." },
    ],
    correctOptionId: "b,d"
  },

  {
    id: "q133",
    prompt: "Which answer best describes the topics covered in Sprint Planning?",
    options: [
      { id: "a", text: "What to do and who will do it." },
      { id: "b", text: "How conditions have changed and how the Product Backlog should evolve." },
      { id: "c", text: "What can be done and how to do it." },
      { id: "d", text: "What went wrong in the last Sprint and what to do differently this Sprint." },
      { id: "e", text: "Who is on the team and what team member roles will be." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q134",
    prompt: "Which of the following is required by Scrum? (choose all that apply)",
    options: [
      { id: "a", text: "Sprint Retrospective." },
      { id: "b", text: "Members must be stand up at the Daily Scrum." },
      { id: "c", text: "Sprint Burndown Chart." },
      { id: "d", text: "Release planning." },
      { id: "e", text: "All of the above." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q135",
    prompt: "What is the purpose of a Sprint Review?",
    options: [
      { id: "a", text: "To take time to judge the validity of the project." },
      { id: "b", text: "To inspect the product Increment with the stakeholders and collect feedback on next steps." },
      { id: "c", text: "To review the Scrum Team's activities and processes during the Sprint." },
      { id: "d", text: "To build team sprint." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q136",
    prompt: "How should the Developers deal with non-functional requirements?",
    options: [
      { id: "a", text: "Ensure every Increment meets them." },
      { id: "b", text: "Make sure the release department understands these requirements, but it is not the Developers responsibility." },
      { id: "c", text: "Handle them during the Integration Sprint preceding the Release Sprint." },
      { id: "d", text: "Assign them to the lead Developers on the team." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q137",
    prompt: "When is a Sprint over?",
    options: [
      { id: "a", text: "When the Product Owner says it is done." },
      { id: "b", text: "When all Product Backlog items meet their Definition of Done." },
      { id: "c", text: "When all the tasks are completed." },
      { id: "d", text: "When the time-box expires." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q138",
    prompt: "True or False: Scrum has a role called \"Project Manager\".",
    options: [
      { id: "a", text: "True." },
      { id: "b", text: "False." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q139",
    prompt: "Which Scrum Values are violated by building Product Backlog items that have low business value?",
    options: [
      { id: "a", text: "Courage." },
      { id: "b", text: "Focus." },
      { id: "c", text: "Respect." },
      { id: "d", text: "Economic Value Added." },
      { id: "e", text: "Earned Value." },
    ],
    correctOptionId: "a,b,c"
  },

  {
    id: "q140",
    prompt: "How much time is required after a Sprint to prepare for the next Sprint?",
    options: [
      { id: "a", text: "The break between Sprints is time-boxed to 1 week for 30 day Sprints, and usually less for shorter sprints." },
      { id: "b", text: "Enough time for the requirements for the next Sprint to be determined and documented." },
      { id: "c", text: "Enough time for the Developers to finish the testing from the last Sprint." },
      { id: "d", text: "None. A new Sprint starts immediately following the end of the previous Sprint." },
      { id: "e", text: "All of the above are allowed depending on the situation." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q141",
    prompt: "When many Scrum Teams are working on the same product, should all of their Increments be integrated every Sprint?",
    options: [
      { id: "a", text: "Yes, but only for Scrum Teams whose work has dependencies." },
      { id: "b", text: "Yes, otherwise the Product Owners (and stakeholders) may not be able to accurately inspect what is done." },
      { id: "c", text: "No, each Scrum Team stands alone." },
      { id: "d", text: "No, that is far too hard and must be done in a hardening Sprint." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q142",
    prompt: "When can the Developers cancel a Sprint?",
    options: [
      { id: "a", text: "It can't. Only Product Owners can cancel Sprints." },
      { id: "b", text: "When functional expectations are not well understood." },
      { id: "c", text: "When the Product Owner is absent too often." },
      { id: "d", text: "When the selected Product Backlog items for the Sprint become unachievable." },
      { id: "e", text: "When a technical dependency cannot be resolved." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q143",
    prompt: "Which output from Sprint Planning provides the Developers with a target and overarching direction for the Sprint?",
    options: [
      { id: "a", text: "The Sprint Backlog." },
      { id: "b", text: "The Sprint Goal" },
      { id: "c", text: "The release plan." },
      { id: "d", text: "Sprint Review minutes." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q144",
    prompt: "During the Sprint Retrospective a Scrum Team has identified several high priority process improvements. Which of the following statements is most accurate? (choose the best answer)",
    options: [
      { id: "a", text: "The Scrum Team may add items to the Sprint Backlog for the next Sprint." },
      { id: "b", text: "The Scrum Team should choose at least one high priority process improvement to place in the Product Backlog." },
      { id: "c", text: "The Scrum Team should decline to add a process improvement to the Sprint Backlog when things are running smoothly." },
      { id: "d", text: "The Scrum Master selects the most important process improvement and places it in the Sprint Backlog." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q145",
    prompt: "What techniques could the Scrum Master use when the Scrum Team gets caught in an internal disagreement about which agile practices to apply? (choose the best two answers)",
    options: [
      { id: "a", text: "Involve the complete Scrum Team in making a decision." },
      { id: "b", text: "Use coaching techniques; such as open questions and active listening." },
      { id: "c", text: "Ask an external agile coach what they recommend." },
      { id: "d", text: "Ask team members to take the issue up with to the company's Human Resources department." },
    ],
    correctOptionId: "a,b"
  },

  {
    id: "q146",
    prompt: "Who is accountable for clearly expressing Product Backlog items? (choose the best answer)",
    options: [
      { id: "a", text: "The business analyst who represents the Product Owner." },
      { id: "b", text: "The Product Owner." },
      { id: "c", text: "The Scrum Master, or the Scrum Master may have the Developers do it." },
      { id: "d", text: "The Scrum Master." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q147",
    prompt: "When many Scrum Teams are working on a single product, what best describes the Definition of Done? (choose the best answer)",
    options: [
      { id: "a", text: "Each Scrum Team defines and uses its own. The differences are discussed and reconciled during a hardening Sprint." },
      { id: "b", text: "The Scrum Masters from each Scrum Team define a common Definition of Done." },
      { id: "c", text: "Each Scrum Team uses its own, but must make their definition clear to all other teams so the differences are known." },
      { id: "d", text: "All Scrum Teams must have a Definition of Done that makes their combined work potentially releasable." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q148",
    prompt: "When many Developers are working on a single product, what best describes the Definition of Done? (choose the best answer)",
    options: [
      { id: "a", text: "Each Developer defines and uses its own. The differences are discussed and reconciled during a hardening Sprint." },
      { id: "b", text: "It depends." },
      { id: "c", text: "Each Developer uses its own but must make their definition clear to all other teams so the differences are known." },
      { id: "d", text: "All Developers must have a Definition of Done that makes their combined work potentially releasable." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q149",
    prompt: "At the seventh Sprint Review, the stakeholders are disappointed and angry. They have determined that the product or system being built will not meet their needs and will cost more than they are willing to spend. What factors likely led to this? (choose two)",
    options: [
      { id: "a", text: "The Project Management Office (PMO) has not been engaged adequately." },
      { id: "b", text: "The Product Owner has not been keeping the stakeholders aware of the progress of the project." },
      { id: "c", text: "The stakeholders haven't been using the Sprint Reviews to inspect and evaluate progress." },
      { id: "d", text: "The stakeholders were not allowed to enter the development area." },
    ],
    correctOptionId: "b,c"
  },

  {
    id: "q150",
    prompt: "When a Scrum Team determines that it will not be able to finish the complete forecast, who has to be present when reviewing and adjusting the Sprint work selected? (choose the best answer)",
    options: [
      { id: "a", text: "The Developers." },
      { id: "b", text: "The Product Owner and all stakeholders." },
      { id: "c", text: "The Product Owner and the Developers." },
      { id: "d", text: "The Scrum Master, project manager and Developers." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q151",
    prompt: "As the Scrum Team starts work during the Sprint, it realizes it has selected too much work to finish in the Sprint. What should it do?",
    options: [
      { id: "a", text: "Inform the Product Owner at the Sprint Review, but prior to the demonstration." },
      { id: "b", text: "Find another Scrum Team to give the excess work to." },
      { id: "c", text: "As soon as possible in the Sprint, work with the Product Owner to remove some work or Product Backlog items." },
      { id: "d", text: "Reduce the Definition of Done and get all of the Product Backlog items \"Done\" by the new definition." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q152",
    prompt: "Which of the following are roles on a Scrum Team? (choose all that apply)",
    options: [
      { id: "a", text: "Users." },
      { id: "b", text: "Scrum Master." },
      { id: "c", text: "Product Owner." },
      { id: "d", text: "The Developers." },
      { id: "e", text: "Customers." },
    ],
    correctOptionId: "b,c,d"
  },

  {
    id: "q153",
    prompt: "Which two activities will a Product Owner engage in during a Sprint? (choose two)",
    options: [
      { id: "a", text: "Run the Daily Scrum." },
      { id: "b", text: "Prioritize the Developers work on the Sprint Backlog." },
      { id: "c", text: "Update management on what is being worked on." },
      { id: "d", text: "Answer questions from the Developers about items in the current Sprint." },
      { id: "e", text: "Work with the stakeholders." },
    ],
    correctOptionId: "d,e"
  },

  {
    id: "q154",
    prompt: "What are two good ways for the Developers to make non-functional requirements visible? (choose two)",
    options: [
      { id: "a", text: "Put them on a separate list on the Scrum board, available for all to see." },
      { id: "b", text: "Add them to the Product Backlog and keep the Product Owner posted on the expected effort." },
      { id: "c", text: "Run the integration and regression tests before the end of the Sprint, and capture the open work for the Sprint Backlog of the next Sprint." },
      { id: "d", text: "Add them to the Definition of Done so the work is taken care of every Sprint." },
    ],
    correctOptionId: "b,d"
  },

  {
    id: "q155",
    prompt: "Which three questions might be answered by Developers at the Daily Scrum? (choose three)",
    options: [
      { id: "a", text: "How is the Sprint proceeding?" },
      { id: "b", text: "What did I do yesterday that helped the Developers meet the Sprint Goal?" },
      { id: "c", text: "Why were you late?" },
      { id: "d", text: "What will I do today to help the Developers meet the Sprint Goal?" },
      { id: "e", text: "How many hours did I spend on the project yesterday?" },
      { id: "f", text: "What will I be working on tomorrow?" },
      { id: "g", text: "Do I see any impediment that prevents me or the Developers from meeting the Sprint Goal?" },
    ],
    correctOptionId: "b,d,g"
  },

  {
    id: "q156",
    prompt: "What activities would a Product Owner typically undertake in the phase between the end of the current Sprint and the start of the next Sprint?",
    options: [
      { id: "a", text: "There are no such activities. The next Sprint starts immediately after the current Sprint." },
      { id: "b", text: "Refine the Product Backlog." },
      { id: "c", text: "Work with the Quality Assurance departments on the Increment of the current Sprint." },
      { id: "d", text: "Update the project plan with stakeholders." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q157",
    prompt: "When does a Developer become accountable for the value of a Product Backlog item selected for the Sprint?",
    options: [
      { id: "a", text: "During the Daily Scrum" },
      { id: "b", text: "Whenever a team member can accommodate more work." },
      { id: "c", text: "Never. The entire Scrum Team is accountable for creating value every Sprint." },
      { id: "d", text: "At the Sprint Planning Event." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q158",
    prompt: "Every Developer should have:",
    options: [
      { id: "a", text: "At least one representative from each major software engineering discipline (like QA, Dev, UX)." },
      { id: "b", text: "The competencies and skills needed to deliver a Done Increment in a Sprint." },
      { id: "c", text: "One Lead Developer and no more than 8 other members." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q159",
    prompt: "Which best describes the Product Backlog?",
    options: [
      { id: "a", text: "It is allowed to grow and change as more is learned about the product and its customers." },
      { id: "b", text: "It provides just enough information to enable a Scrum team to start the design phase of a product." },
      { id: "c", text: "It contains all foreseeable tasks and requirements from which the Scrum team can develop and maintain a complete project plan." },
      { id: "d", text: "It is baselined to follow change management processes." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q160",
    prompt: "Who has the final decision about the order of items in the Product Backlog? (choose the best answer)",
    options: [
      { id: "a", text: "The Stakeholders." },
      { id: "b", text: "The Product Owner." },
      { id: "c", text: "The Scrum Team." },
      { id: "d", text: "The Scrum Master." },
      { id: "e", text: "The Developers." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q161",
    prompt: "Which are properties of the Daily Scrum? (choose two)",
    options: [
      { id: "a", text: "It is facilitated by the team lead." },
      { id: "b", text: "It is held first thing in the morning." },
      { id: "c", text: "It is fifteen minutes or less in duration." },
      { id: "d", text: "It is free from and designed to promote conversation." },
      { id: "e", text: "It consists of the Scrum Master asking the Team members the three questions." },
      { id: "f", text: "Its location and time remain constant." },
    ],
    correctOptionId: "c,f"
  },

  {
    id: "q162",
    prompt: "What is the accountability of the Product Owner during Sprint 0? (choose the best answer)",
    options: [
      { id: "a", text: "There is no such thing as Sprint 0." },
      { id: "b", text: "Gathering, eliciting, and analyzing the requirements that will be inserted into the Product Backlog." },
      { id: "c", text: "Make the complete project plan to commit date, budget, and scope to the stakeholders." },
      { id: "d", text: "Determine the composition of the Developers so they have the capacity to deliver the completed forecast." },
      { id: "e", text: "Make sure enough Product Backlog items are refined to fill the first 3 Sprints." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q163",
    prompt: "In accordance with Scrum theory, how should a group of 100 people be divided into multiple Scrum Teams?",
    options: [
      { id: "a", text: "Understanding the product, the product vision and the rules of the Scrum framework, the group divides itself into teams." },
      { id: "b", text: "It doesn't really matter because you can rotate the teams every Sprint to spread knowledge." },
      { id: "c", text: "Check with the allocation department to see who has worked together before and make these the first teams." },
      { id: "d", text: "Create a matrix of skills, seniority, and level of experience to assign people to teams." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q164",
    prompt: "Who is accountable for tracking the remaining work toward the Sprint Goal? (choose the best answer)",
    options: [
      { id: "a", text: "The Developers." },
      { id: "b", text: "The Scrum Master." },
      { id: "c", text: "The Product Owner." },
      { id: "d", text: "The Project Manager." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q165",
    prompt: "When must a Product Owner release each Increment? (choose the best answer)",
    options: [
      { id: "a", text: "When it makes sense." },
      { id: "b", text: "When the Scrum Team finishes their work." },
      { id: "c", text: "Whenever the product is free of defects." },
      { id: "d", text: "After every Sprint, Without exception." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q166",
    prompt: "What are two good ways for a Scrum Team to ensure security concerns are satisfied? (choose two)",
    options: [
      { id: "a", text: "Postpone the work until a specialist can perform a security audit and create a list of security-related Product Backlog items." },
      { id: "b", text: "Add security concerns to the Definition of Done." },
      { id: "c", text: "Add a Sprint to specifically resolve all security concerns." },
      { id: "d", text: "Delegate the work to the concerned department." },
      { id: "e", text: "Have the Scrum Team create Product Backlog items for each concern." },
    ],
    correctOptionId: "b,e"
  },

  {
    id: "q167",
    prompt: "What is the recommended size for a Scrum Team? (choose the best answer)",
    options: [
      { id: "a", text: "At least 7." },
      { id: "b", text: "9." },
      { id: "c", text: "10 or fewer." },
      { id: "d", text: "7 plus or minus 3." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q168",
    prompt: "How do you know that a Scrum Team is cross-functional?",
    options: [
      { id: "a", text: "Scrum Team has all the skills to create a potentially releasable Increment by the end of every Sprint." },
      { id: "b", text: "A few of the Developers pair program and do Test Driven Development." },
      { id: "c", text: "There are no conflicts within the Scrum Team." },
      { id: "d", text: "Every member of the Scrum Team is able to perform every task." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q169",
    prompt: "Select two ways in which technical debt impacts transparency. (choose two)",
    options: [
      { id: "a", text: "When calculated and estimated, the total amount of technical debt shows exactly how long until the Product Owner can release the Increment." },
      { id: "b", text: "It leads to false assumptions about the current state of the system, specifically of an Increment being releasable at the end of a Sprint." },
      { id: "c", text: "As development progresses and code is added, the system becomes more difficult to stabilize, which results in future work being slowed down in unpredictable ways." },
      { id: "d", text: "It enhances transparency for the Product Owner as a Developers are not allowed to do additional feature development in a Sprint as long as there is technical debt." },
    ],
    correctOptionId: "b,c"
  },

  {
    id: "q170",
    prompt: "The Developers are required to deliver a done Increment by the end of a Sprint. Select two statements that explain what \"Done\" means. (choose two)",
    options: [
      { id: "a", text: "All work the Developers are willing to do." },
      { id: "b", text: "Ready for integration." },
      { id: "c", text: "No work left from the Definition of Done." },
      { id: "d", text: "Whatever the Product Owner defines as quality." },
      { id: "e", text: "All work to create software that is ready to be released to end users." },
    ],
    correctOptionId: "c,e"
  },

  {
    id: "q171",
    prompt: "Which of the following are true about the length of the Sprint? (choose two)",
    options: [
      { id: "a", text: "The length of the Sprint should be proportional to the work that is done in between Sprints." },
      { id: "b", text: "It is best to have Sprints of consistent length throughout a development effort." },
      { id: "c", text: "Sprint length is determined during Sprint Planning, and should hold the time it will take to code the planned features in the upcoming Sprint, but does not include time for any testing." },
      { id: "d", text: "Sprint length is determined during Sprint Planning, and should be long enough to make sure the Developers can deliver what is to be accomplished in the upcoming Sprint." },
      { id: "e", text: "All Sprints must be 1 month or less." },
    ],
    correctOptionId: "b,e"
  },

  {
    id: "q172",
    prompt: "What may be included in the Sprint Backlog? (choose the best answer)",
    options: [
      { id: "a", text: "User Stories." },
      { id: "b", text: "Tasks." },
      { id: "c", text: "Use Cases." },
      { id: "d", text: "Tests." },
      { id: "e", text: "Any of the above (or others) which are a decomposition of the selected Product Backlog items." },
    ],
    correctOptionId: "e"
  },

  {
    id: "q173",
    prompt: "Developers include which role(s)?",
    options: [
      { id: "a", text: "No other roles. Developers is one of the 3 accountabilities in Scrum." },
      { id: "b", text: "Testers." },
      { id: "c", text: "Business Analysts." },
      { id: "d", text: "Software Architects." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q174",
    prompt: "The Sprint Backlog must be detailed enough that...",
    options: [
      { id: "a", text: "every task is identified when the Sprint Backlog is first created." },
      { id: "b", text: "changes in progress can be understood in the Daily Scrum." },
      { id: "c", text: "the Product Owner can understand what everyone is working on." },
      { id: "d", text: "stakeholders can monitor progress at task level." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q175",
    prompt: "True or False: The Scrum Master is accountable for the Product Backlog.",
    options: [
      { id: "a", text: "True." },
      { id: "b", text: "False." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q176",
    prompt: "True or False: A Scrum Team uses 2 weeks Sprints and time box their Sprint Planning to 6 hours. Does this break the rules of Scrum?",
    options: [
      { id: "a", text: "True." },
      { id: "b", text: "False." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q177",
    prompt: "Who is accountable for ensuring that the burn-down chart and gantt chart exist?",
    options: [
      { id: "a", text: "No one." },
      { id: "b", text: "The Developers." },
      { id: "c", text: "The Product Owner." },
      { id: "d", text: "The Scrum Master." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q178",
    prompt: "True or False: By the end of the Sprint Retrospective, the Scrum Team should have identified and planned improvements to increase its effectiveness.",
    options: [
      { id: "a", text: "True." },
      { id: "b", text: "False." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q179",
    prompt: "The Scrum Master is a leader and servant in service to which of the following?",
    options: [
      { id: "a", text: "The organisation and Scrum Team." },
      { id: "b", text: "The Product Owner." },
      { id: "c", text: "The Developers." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q180",
    prompt: "The Product Owner manages...",
    options: [
      { id: "a", text: "the Developers." },
      { id: "b", text: "the Scrum Team." },
      { id: "c", text: "the Project." },
      { id: "d", text: "the Product Backlog." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q181",
    prompt: "Management need to monitor progress on a daily basis and decide to do so by attending the Daily Scrum. What are the likely results? (choose three)",
    options: [
      { id: "a", text: "Management will be able to better direct the work of the Developers." },
      { id: "b", text: "Additional facilitation may be required to keep to the time-box." },
      { id: "c", text: "Developers may end up with less time in the Daily Scrum to re-plan their work." },
      { id: "d", text: "Developers may be less open and transparent during the Daily Scrum." },
    ],
    correctOptionId: "b,c,d"
  },

  {
    id: "q182",
    prompt: "True or False: The Product Owner must attend the Sprint Retrospective.",
    options: [
      { id: "a", text: "True." },
      { id: "b", text: "False." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q183",
    prompt: "True or False: A Scrum Team must only work on a single Product Goal at any time.",
    options: [
      { id: "a", text: "True." },
      { id: "b", text: "False." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q184",
    prompt: "True or False: The Definition of Done is a mandatory part of Scrum.",
    options: [
      { id: "a", text: "True." },
      { id: "b", text: "False." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q185",
    prompt: "True or False: The Scrum Master must facilitate the Daily Scrum.",
    options: [
      { id: "a", text: "True." },
      { id: "b", text: "False." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q186",
    prompt: "Among the Developers, there is nobody with significant testing expertise. They should...",
    options: [
      { id: "a", text: "request for a specialist tester to join them and queue testing for them to do when they arrive in a later Sprint." },
      { id: "b", text: "produce an Increment that will be tested by a dedicated test team after the Sprint to guarantee the quality." },
      { id: "c", text: "raise this as an impediment which may require the assistance of the Scrum Master to resolve." },
      { id: "d", text: "quality is the responsibility of the Developers and they should undertake testing themselves to the best of their abilities." },
    ],
    correctOptionId: "c,d"
  },

  {
    id: "q187",
    prompt: "True or False: The Sprint Planning event is comprised of 2 parts and the Product Owner is not needed at the 2nd part.",
    options: [
      { id: "a", text: "True." },
      { id: "b", text: "False." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q188",
    prompt: "Product Backlog refinement is...",
    options: [
      { id: "a", text: "carried out once per Sprint." },
      { id: "b", text: "a Scrum event." },
      { id: "c", text: "the concern of the Product Owner." },
      { id: "d", text: "an ongoing process in which the Product Owner and the Developers collaborate." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q189",
    prompt: "An Increment is...",
    options: [
      { id: "a", text: "all work that has happened up to the current point in time." },
      { id: "b", text: "all work completed up to now, where there are no bugs present." },
      { id: "c", text: "all work that was carried out in the Sprint." },
      { id: "d", text: "the sum of the Done work during a Sprint, plus the work Done in earlier Sprints." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q190",
    prompt: "Which statement best describes a cross-functional team?",
    options: [
      { id: "a", text: "The team has all competencies needed to accomplish the work." },
      { id: "b", text: "The team has a good mix of skills." },
      { id: "c", text: "All members of the team have all the skills required to create the Product." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q191",
    prompt: "The result of the Sprint Review is...",
    options: [
      { id: "a", text: "incomplete Product Backlog Items have been reviewed and returned to the top of the Product Backlog." },
      { id: "b", text: "the Increment has been demonstrated to Stakeholders." },
      { id: "c", text: "a revised Product Backlog that defines the probable Product Backlog items for the next Sprint." },
      { id: "d", text: "acceptance (or rejection) of all Product Backlog Items." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q192",
    prompt: "The Product Owner is using burn-up charts instead of burn-down charts. What would your response be as Scrum Master?",
    options: [
      { id: "a", text: "There's nothing wrong with it." },
      { id: "b", text: "Burn-up charts are used in traditional methods and should be replaced by burn-down charts." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q193",
    prompt: "True or False: The Scrum Master manages the Scrum Team.",
    options: [
      { id: "a", text: "True." },
      { id: "b", text: "False." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q194",
    prompt: "The Scrum Master is responsible for?",
    options: [
      { id: "a", text: "Delivering the Product on budget and to the agreed schedule." },
      { id: "b", text: "Ensuring Scrum is understood." },
      { id: "c", text: "Solving all impediments, blockers & issues." },
      { id: "d", text: "Coordinating the work of the Developers." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q195",
    prompt: "A Scrum Team has how many specific accountabilities?",
    options: [
      { id: "a", text: "1." },
      { id: "b", text: "4." },
      { id: "c", text: "2." },
      { id: "d", text: "3." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q196",
    prompt: "Who is responsible for monitoring the progress of work during a Sprint?",
    options: [
      { id: "a", text: "Project Manager." },
      { id: "b", text: "Product Owner." },
      { id: "c", text: "Scrum Master." },
      { id: "d", text: "Developers." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q197",
    prompt: "True or False: During Sprint Planning, every task must be estimated so the Developers can be sure they have the capacity to complete them in the Sprint.",
    options: [
      { id: "a", text: "True." },
      { id: "b", text: "False." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q198",
    prompt: "Who may be best positioned to decide who will be the Scrum Master for a new Scrum Team?",
    options: [
      { id: "a", text: "The Developers and the Product Owner." },
      { id: "b", text: "The Developers." },
      { id: "c", text: "The Product Owner." },
      { id: "d", text: "Stakeholders." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q199",
    prompt: "The Daily Scrum is consistently taking longer than 15 minutes. Which statement best describes what should be done?",
    options: [
      { id: "a", text: "A 2nd Daily Scrum should be held at the end of the day." },
      { id: "b", text: "The Scrum Master should help the Developers understand why the 15 minute time-box should be respected and help them find ways to do it as required." },
      { id: "c", text: "Developers should leave at the end of the 15 minutes." },
      { id: "d", text: "The Developers should take the additional time that they need in the Daily Scrum." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q200",
    prompt: "True or False: A Scrum Team must be 10 or fewer people.",
    options: [
      { id: "a", text: "True." },
      { id: "b", text: "False." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q201",
    prompt: "True or False: A Scrum Team must never have any technical debt.",
    options: [
      { id: "a", text: "True." },
      { id: "b", text: "False." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q202",
    prompt: "True or False: During Sprint Planning, all Product Backlog Items must be decomposed to a definitive set of tasks for the Developers to complete.",
    options: [
      { id: "a", text: "True." },
      { id: "b", text: "False." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q203",
    prompt: "True or False: The Increment must be released at the end of every Sprint.",
    options: [
      { id: "a", text: "True." },
      { id: "b", text: "False." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q204",
    prompt: "True or False: Developers should be set stretch goals by the Product Owner as part of Sprint Planning.",
    options: [
      { id: "a", text: "True." },
      { id: "b", text: "False." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q205",
    prompt: "True or False: During the Daily Scrum, the Developers must answer the \"3 questions\".",
    options: [
      { id: "a", text: "True." },
      { id: "b", text: "False." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q206",
    prompt: "Select the correct timebox for each Scrum event.",
    options: [
      { id: "a", text: "Sprint Planning - 8 hours, Daily Scrum - 30 minutes, Sprint Review - 4 hours, Sprint Retrospective - 3 hours." },
      { id: "b", text: "Sprint Planning - 4 hours, Daily Scrum - 15 minutes, Sprint Review - 4 hours, Sprint Retrospective - 4 hours." },
      { id: "c", text: "Sprint Planning - 4 hours, Daily Scrum - 15 minutes, Sprint Review - 8 hours, Sprint Retrospective - 4 hours." },
      { id: "d", text: "Sprint Planning - 8 hours, Daily Scrum - 15 minutes, Sprint Review - 4 hours, Sprint Retrospective - 3 hours." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q207",
    prompt: "True or False: The Scrum Master can be removed once Scrum is adopted.",
    options: [
      { id: "a", text: "True." },
      { id: "b", text: "False." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q208",
    prompt: "Who can do the work to ensure the Product Backlog is refined to a state that it is useful?",
    options: [
      { id: "a", text: "The Business Analyst." },
      { id: "b", text: "Stakeholders." },
      { id: "c", text: "The Developers, with support from the Product Owner who is still accountable for it." },
      { id: "d", text: "The Product Owner." },
    ],
    correctOptionId: "c,d"
  },

  {
    id: "q209",
    prompt: "The purpose of the Sprint Review is...",
    options: [
      { id: "a", text: "to show Stakeholders work that is done and work that is near to completion." },
      { id: "b", text: "to inspect the outcome of the Sprint and determine future adaptations." },
      { id: "c", text: "to review the status of the Project." },
      { id: "d", text: "to check what was done and not done during the Sprint." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q210",
    prompt: "Who can change the Sprint Backlog during a Sprint?",
    options: [
      { id: "a", text: "The Scrum Master." },
      { id: "b", text: "The Developers." },
      { id: "c", text: "The Product Owner." },
      { id: "d", text: "The Stakeholders." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q211",
    prompt: "True or False: Before the first Sprint, the Product Backlog must contain everything we will develop for the product.",
    options: [
      { id: "a", text: "True." },
      { id: "b", text: "False." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q212",
    prompt: "A Product Backlog is never complete.",
    options: [
      { id: "a", text: "False - A complete Product Backlog should be created before starting the first Sprint." },
      { id: "b", text: "True - As long as a product exists, its Product Backlog also exists." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q213",
    prompt: "What does the Sprint burn-down chart show?",
    options: [
      { id: "a", text: "The evolution of the amount of uncertainty during a project." },
      { id: "b", text: "An overview of the release progress by plotting the remaining workload." },
      { id: "c", text: "Dependencies, start times and stop times for project tasks3." },
      { id: "d", text: "How much work remains until the end of the Sprint." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q214",
    prompt: "A new Developer joins the Scrum Team taking the total number to 11 people. As a Scrum Master, What should you do?",
    options: [
      { id: "a", text: "Instruct the Developers to split into 2 teams." },
      { id: "b", text: "Do nothing, the Developers must fix its own issues." },
      { id: "c", text: "Instruct the Developers to split into 2 teams, they should decide the appropriate sizes." },
      { id: "d", text: "Raise the increased team size as a potential issue and help the Developers decide what to do about it." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q215",
    prompt: "Which technique is the best way the Scrum Master can ensure that the Developers communicate effectively with the Product Owner?",
    options: [
      { id: "a", text: "Teach the Developers to talk in terms of business needs and objectives." },
      { id: "b", text: "Observe communications between them and facilitate direct collaboration." },
      { id: "c", text: "Function as a go-between for them." },
      { id: "d", text: "Teach the Product Owner about the technologies employed during the Sprints." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q216",
    prompt: "Which two things should the Scrum Team do during the first Sprint? (choose the best two answers)",
    options: [
      { id: "a", text: "Develop and deliver at least one piece of functionality." },
      { id: "b", text: "Deliver an Increment of useful and valuable product" },
      { id: "c", text: "Determine the complete architecture and infrastructure for the product." },
      { id: "d", text: "Create the complete Product Backlog to be developed in subsequent Sprints." },
    ],
    correctOptionId: "a,b"
  },

  {
    id: "q217",
    prompt: "Who is on the Scrum Team?(choose the best three answers)",
    options: [
      { id: "a", text: "The Scrum Master." },
      { id: "b", text: "Project Manager." },
      { id: "c", text: "The Product Owner." },
      { id: "d", text: "Developers." },
    ],
    correctOptionId: "a,c,d"
  },

  {
    id: "q218",
    prompt: "The timebox for a Daily Scrum is?",
    options: [
      { id: "a", text: "15 minutes." },
      { id: "b", text: "15 minutes for a 4-week sprint. For shorter Sprints it is usually shorter." },
      { id: "c", text: "Two minutes per person." },
      { id: "d", text: "4 hours." },
      { id: "e", text: "The same time of day every day." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q219",
    prompt: "The three pillars of empiricism are:",
    options: [
      { id: "a", text: "Respect For People, Kaizen, Eliminating Waste." },
      { id: "b", text: "Planning, Inspection, Adaptation" },
      { id: "c", text: "Planning, Demonstration, Retrospective" },
      { id: "d", text: "Inspection, Transparency, Adaptation" },
      { id: "e", text: "Transparency, Eliminating Waste, Kaizen." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q220",
    prompt: "What does it mean to say that an event has a timebox?",
    options: [
      { id: "a", text: "The event must happen by a given time." },
      { id: "b", text: "The event must happen at a set time." },
      { id: "c", text: "The event must take at least a minimum amount of time" },
      { id: "d", text: "The event can take no more than a maximum amount of time." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q221",
    prompt: "Upon what type of process control is Scrum based?",
    options: [
      { id: "a", text: "Hybrid." },
      { id: "b", text: "Empirical." },
      { id: "c", text: "Defined." },
      { id: "d", text: "Complex." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q222",
    prompt: "True or False: It is mandatory that the product Increment be released to production at the end of each Sprint.",
    options: [
      { id: "a", text: "True." },
      { id: "b", text: "False." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q223",
    prompt: "The timebox for the Sprint Review is:",
    options: [
      { id: "a", text: "2 hours." },
      { id: "b", text: "1 day." },
      { id: "c", text: "4 hours for a monthly Sprint. For shorter Sprints it is usually shorter." },
      { id: "d", text: "4 hours and longer as needed." },
      { id: "e", text: "As long as needed." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q224",
    prompt: "Which statement best describes a Product Owner's responsibility?",
    options: [
      { id: "a", text: "Keep stakeholders from distracting the Developers." },
      { id: "b", text: "Optimizing the value of the work the Scrum Team does." },
      { id: "c", text: "Managing the project and ensuring that the work meets the commitments to the stakeholders." },
      { id: "d", text: "Directing the Developers." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q225",
    prompt: "Why is the Daily Scrum held at the same time and same place?",
    options: [
      { id: "a", text: "The place can be named." },
      { id: "b", text: "Rooms are hard to book and this lets it be booked in advance." },
      { id: "c", text: "The consistency reduces complexity." },
      { id: "d", text: "The Product Owner demands it." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q226",
    prompt: "A Scrum Team consists of the following:(choose the best three answers)",
    options: [
      { id: "a", text: "Users." },
      { id: "b", text: "Product Owner." },
      { id: "c", text: "Customers." },
      { id: "d", text: "Developers." },
      { id: "e", text: "Scrum Master." },
    ],
    correctOptionId: "b,d,e"
  },

  {
    id: "q227",
    prompt: "True or False: The purpose of a Sprint is to produce a valuable and useful Increment of working product.",
    options: [
      { id: "a", text: "True." },
      { id: "b", text: "False." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q228",
    prompt: "The timebox for the Sprint Planning event is?",
    options: [
      { id: "a", text: "4 hours." },
      { id: "b", text: "Monthly." },
      { id: "c", text: "8 hours for a monthly Sprint. For shorter Sprints it is usually shorter." },
      { id: "d", text: "Whenever itis done." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q229",
    prompt: "What is the main reason for the Scrum Master to be at the Daily Scrum?",
    options: [
      { id: "a", text: "To gather status and progress information to report to management" },
      { id: "b", text: "To write down any changes to the Sprint Backlog, including adding new items, and tracking progress on the burn-down." },
      { id: "c", text: "They do not have to be there; they only need to ensure the Developers have a Daily Scrum" },
      { id: "d", text: "To make sure every team member answers the three questions" },
    ],
    correctOptionId: "c"
  },

  {
    id: "q230",
    prompt: "What is the function or purpose of Management in Scrum?",
    options: [
      { id: "a", text: "Identify and remove people that are not working hard enough" },
      { id: "b", text: "Monitor the progress of the Developers on the Scrum Team" },
      { id: "c", text: "Support the Product Owner with insights and information into high value product and system capabilities. Support the Scrum Master to encourage organizational change that fosters empiricism, self-management, bottom-up intelligence, and intelligent product delivery." },
      { id: "d", text: "Continually monitor staffing levels of the Scrum Team." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q231",
    prompt: "When does a Developer become the sole owner of an item on the Sprint Backlog?",
    options: [
      { id: "a", text: "Whenever a team member can accommodate more work." },
      { id: "b", text: "At the Sprint Planning event" },
      { id: "c", text: "Never. All Sprint Backlog items are \"owned\" by the Developers on the Scrum Team." },
      { id: "d", text: "During the Daily Scrum" },
    ],
    correctOptionId: "c"
  },

  {
    id: "q232",
    prompt: "What is the typical size for a Scrum Team?",
    options: [
      { id: "a", text: "10 or fewer." },
      { id: "b", text: "Minimum of 7." },
      { id: "c", text: "7 plus or minus" },
      { id: "d", text: "9" },
    ],
    correctOptionId: "a"
  },

  {
    id: "q233",
    prompt: "An organization has decided to adopt Scrum, but management wants to change the terminology to fit with terminology already used. What will likely happen if this is done?",
    options: [
      { id: "a", text: "Without a new vocabulary as a reminder of the change, very little change may actually happen" },
      { id: "b", text: "The organization may not understand what has changed with Scrum and the benefits of Scrum may be lost" },
      { id: "c", text: "Management may feel less anxious" },
      { id: "d", text: "Al of the above" },
    ],
    correctOptionId: "d"
  },

  {
    id: "q234",
    prompt: "Which of the following are examples of a Scrum Team practicing Scrum poorly or not exhibiting traits of a self-managing Scrum Team?",
    options: [
      { id: "a", text: "The Developers have all the skills they need to create a valuable, useful Increment" },
      { id: "b", text: "StakeNolders attend the Daily Scrum to check on the Scrum Team's progress." },
      { id: "c", text: "The Developers create their own Sprint Backlog, reflecting all work that i required to meet the Definition of Done." },
      { id: "d", text: "The Developers are collaboratively selecting their own work during the Sprint" },
      { id: "e", text: "The Developers invite external stakeholders to the Sprint Planning tosk them how to turn a Product Backlog item into an Increment via a complete and detailed Sprint Backlog" },
      { id: "f", text: "The Developers are working within the boundaries of their organizations functional description and nicely handing off work from analyst to Developer to tester to integration" },
    ],
    correctOptionId: "b,e,f"
  },

  {
    id: "q235",
    prompt: "Who is required to attend the Daily Scrum?",
    options: [
      { id: "a", text: "The Scrum Master and Product Owner." },
      { id: "b", text: "The Developers and Scrum Master." },
      { id: "c", text: "The Developers." },
      { id: "d", text: "The Developers and Product Owner." },
      { id: "e", text: "The Scrum Team" },
    ],
    correctOptionId: "c"
  },

  {
    id: "q236",
    prompt: "How much work must the Developers complete for each Product Backlog item they select for a Sprint?",
    options: [
      { id: "a", text: "All development work and at least some testing" },
      { id: "b", text: "Enough so that each Product Backlog item they select meets the Definition of Done." },
      { id: "c", text: "Analysis, design, programming, testing and documentation" },
      { id: "d", text: "As much as it can fit into the Sprint" },
    ],
    correctOptionId: "b"
  },

  {
    id: "q237",
    prompt: "During a Sprint, a Developer determines that the Scrum Team will not be able to complete the items in their forecast. Who should be present to review and adjust the Product Backlog items selected?",
    options: [
      { id: "a", text: "The Product Owner and all stakeholders" },
      { id: "b", text: "The Scrum Master, the project manager, and the Developers" },
      { id: "c", text: "The Product Owner and the Developers." },
      { id: "d", text: "The Developers." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q238",
    prompt: "Who has the final say on the order of the Product Backlog?",
    options: [
      { id: "a", text: "The Product Owner." },
      { id: "b", text: "The CEO." },
      { id: "c", text: "The Developers." },
      { id: "d", text: "The Scrum Master." },
      { id: "e", text: "The Stakeholders" },
    ],
    correctOptionId: "a"
  },

  {
    id: "q239",
    prompt: "Who should know the most about the progress toward a business objective or a release, and be able to explain the alternatives most clearly?",
    options: [
      { id: "a", text: "The Product Owner" },
      { id: "b", text: "The Project Manager" },
      { id: "c", text: "The Developers" },
      { id: "d", text: "The Scrum Master" },
    ],
    correctOptionId: "a"
  },

  {
    id: "q240",
    prompt: "Which of the following services is appropriate for a Scrum Master in regard to the Daily Scrum?",
    options: [
      { id: "a", text: "Teach the Developers to keep the Daily Scrum within the 15 minute timebox." },
      { id: "b", text: "Lead the discussions of the Developers." },
      { id: "c", text: "Facilitate in a way that ensures each team member has a chance to speak" },
      { id: "d", text: "All answers apply." },
      { id: "e", text: "Ensure that all 3 questions have been answered" },
    ],
    correctOptionId: "a"
  },

  {
    id: "q241",
    prompt: "The Developers should not be interrupted during the Sprint and the Sprint Goal should remain intact. These are conditions that foster creativity, quality and productivity. Which one of the following answers is FALSE?",
    options: [
      { id: "a", text: "The Product Owner can help clarify or optimize the Sprint when asked by the Developers." },
      { id: "b", text: "The Developers may work with the Product Owner to add or remove work if they find themselves with more or less capacity than expected." },
      { id: "c", text: "The Sprint Backlog is fully formulated in the Sprint Planning event and does not change during the Sprint." },
      { id: "d", text: "As a decomposition of the selected Product Backlog items, the Sprint Backlog changes and may grow as the work emerges." },
    ],
    correctOptionId: "c"
  },

  {
    id: "q242",
    prompt: "When does the next Sprint begin?",
    options: [
      { id: "a", text: "Next Monday." },
      { id: "b", text: "Immediately after the conclusion of the previous Sprint." },
      { id: "c", text: "Immediately following the next Sprint Planning." },
      { id: "d", text: "When the Product Owner is ready." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q243",
    prompt: "What are two ways a Scrum Master serves to enable effective Scrum Teams?",
    options: [
      { id: "a", text: "By facilitating Developer decision-making." },
      { id: "b", text: "By keeping high value features high in the Product Backlog" },
      { id: "c", text: "By removing impediments that hinder the Scrum Team." },
      { id: "d", text: "By starting and ending the meetings at the proper time." },
    ],
    correctOptionId: "a,c"
  },

  {
    id: "q244",
    prompt: "True or False: When multiple Scrum Teams work together on the same product, each team should maintain a separate Product Backlog.",
    options: [
      { id: "a", text: "True." },
      { id: "b", text: "False." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q245",
    prompt: "When should a Developer on a Scrum Team be replaced?",
    options: [
      { id: "a", text: "As needed, while taking into account a short-term reduction in productivity." },
      { id: "b", text: "Every Sprint to promote shared learning" },
      { id: "c", text: "As needed, with no special allowance for changes in productivity." },
      { id: "d", text: "Never, it reduces productivity." },
    ],
    correctOptionId: "a"
  },

  {
    id: "q246",
    prompt: "Which are characteristics of the Daily Scrum? (choose the best two answers)",
    options: [
      { id: "a", text: "It is facilitated by the team lead." },
      { id: "b", text: "It consists of the Scrum Master asking the team for status." },
      { id: "c", text: "Its purpose is to inspect progress toward the Sprint Goal and adapt the Sprint Backlog." },
      { id: "d", text: "Is is held first thing in the morning." },
      { id: "e", text: "Its location and time remain constant." },
    ],
    correctOptionId: "c,e"
  },

  {
    id: "q247",
    prompt: "True or False: The Scrum Team must choose at least one high priority process improvement item, identified during the Sprint Retrospective, and place it in the Sprint Backlog.",
    options: [
      { id: "a", text: "True." },
      { id: "b", text: "False." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q248",
    prompt: "When does a Sprint conclude?",
    options: [
      { id: "a", text: "When the Product Owner decides enough has been delivered to meet the Sprint Goal." },
      { id: "b", text: "When the Sprint Retrospective is complete." },
      { id: "c", text: "When all the tasks are completed by the Developers." },
      { id: "d", text: "When all Product Backlog items meet their Definition of Done." },
    ],
    correctOptionId: "b"
  },

  {
    id: "q249",
    prompt: "When must a Scrum Team release each Increment?",
    options: [
      { id: "a", text: "When the Scrum Team finishes their work." },
      { id: "b", text: "After every Sprint, without exception." },
      { id: "c", text: "Whenever the product is free of defects." },
      { id: "d", text: "When it makes sense to release it." },
    ],
    correctOptionId: "d"
  },

  {
    id: "q250",
    prompt: "Which of the following is an example of an Increment?",
    options: [
      { id: "a", text: "A plan for the overall product release." },
      { id: "b", text: "A mock-up of the product marketing materials." },
      { id: "c", text: "A design for the product." },
      { id: "d", text: "A product roll-out plan." },
      { id: "e", text: "A valuable, useful set of product features." },
      { id: "f", text: "All of the above." },
    ],
    correctOptionId: "e"
  },

];
