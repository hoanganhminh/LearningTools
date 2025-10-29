import type { Question } from "../types/quiz";

export const scrumDeveloperIQuestions: Question[] = [
  {
    id: "q1",
    prompt: "When can Product Backlog Refinement occur?",
    options: [
      { id: "a", text: "Only during Sprint Planning." },
      { id: "b", text: "Anytime during the Sprint." },
      {
        id: "c",
        text: "Only during Refinement meetings planned by the Product Owner.",
      },
      { id: "d", text: "Before Sprint Planning." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q2",
    prompt: "What would NOT be considered Refactoring?",
    options: [
      { id: "a", text: "Reordering method parameters to improve readability." },
      { id: "b", text: "Extracting interfaces." },
      { id: "c", text: "Renaming things to be more logical." },
      { id: "d", text: "Changing external interfaces or APIS." },
      { id: "e", text: "Extracting methods." },
    ],
    correctOptionId: "d",
  },

  {
    id: "q3",
    prompt:
      "Your Scrum Team is one of seven teams working on a Software Product. All teams use the same Version Control System. Which is the best approach to deliver a high-quality Increment?",
    options: [
      {
        id: "a",
        text: "Developers should perform a combination of local and private builds.",
      },
      {
        id: "b",
        text: "Each team's automated build is integrated toward the end of the Sprint.",
      },
      {
        id: "c",
        text: "There is one automated and integrated build for all seven teams.",
      },
      { id: "d", text: "Each team should have its own automated build." },
    ],
    correctOptionId: "c",
  },

  {
    id: "q4",
    prompt: "Who creates documentation included with an Increment?",
    options: [
      { id: "a", text: "The Developers." },
      { id: "b", text: "Increments do not need documentation." },
      { id: "c", text: "The Product Owner." },
      { id: "d", text: "Technical Writers." },
      { id: "e", text: "The Scrum Master." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q5",
    prompt: "What is a merge in a Version Control System?",
    options: [
      {
        id: "a",
        text: "Copying a portion of a code base to isolate it from the original codebase.",
      },
      {
        id: "b",
        text: "Identifying a particular codebase as ready for distribution.",
      },
      { id: "c", text: "Triggering a Deployment into Production." },
      {
        id: "d",
        text: "Combining two or more versions of code into a single codebase.",
      },
    ],
    correctOptionId: "d",
  },

  {
    id: "q6",
    prompt: "Which three of the following are feedback loops in Scrum?",
    options: [
      { id: "a", text: "Daily Scrum." },
      { id: "b", text: "Release Planning." },
      { id: "c", text: "Sprint Review." },
      { id: "d", text: "Refinement Meeting." },
      { id: "e", text: "Sprint Retrospective." },
    ],
    correctOptionId: "a,c,e",
  },

  {
    id: "q7",
    prompt:
      "Which four types of tests can be included in an automated test harness?",
    options: [
      { id: "a", text: "Performance." },
      { id: "b", text: "Exploratory." },
      { id: "c", text: "Unit." },
      { id: "d", text: "Functional." },
      { id: "e", text: "Manual regression." },
      { id: "f", text: "Integration." },
    ],
    correctOptionId: "a,c,d,f",
  },

  {
    id: "q8",
    prompt: "Which concept is described by the Last Responsible Moment?",
    options: [
      {
        id: "a",
        text: "Making decisions as soon as possible to close feedback loops as soon as possible.",
      },
      {
        id: "b",
        text: "Discover decisions to be made as soon as possible but postpone deciding to the latest reasonable moment.",
      },
      {
        id: "c",
        text: "The last moment in a Sprint when code changes are allowed, after this only stabilization work should be conducted.",
      },
      {
        id: "d",
        text: "Opening a learning window to validate hypotheses and create learning.",
      },
      {
        id: "e",
        text: "The last moment a Developer is responsible for quality, after this the Tester is responsible.",
      },
    ],
    correctOptionId: "b",
  },

  {
    id: "q9",
    prompt: "Choose four desirable characteristics of a Unit Test.",
    options: [
      { id: "a", text: "Includes exercising the persistence layer." },
      { id: "b", text: "Makes assertions about only one logical concept." },
      { id: "c", text: "Independent of others." },
      { id: "d", text: "Test code is as small as possible." },
      { id: "e", text: "Execution is fast." },
    ],
    correctOptionId: "b,c,d,e",
  },

  {
    id: "q10",
    prompt:
      "Why does a test written using TDD (Test Driven Development) initially fail?",
    options: [
      { id: "a", text: "Because the test has not been refactored." },
      {
        id: "b",
        text: "Because it has to be put into an automated test harness to be run.",
      },
      {
        id: "c",
        text: "Because the tests are checked in before the Product code exists.",
      },
      {
        id: "d",
        text: "Because the Product code to satisfy the test does not yet exist.",
      },
    ],
    correctOptionId: "d",
  },

  {
    id: "q11",
    prompt: "When do the Developers show their work to the Product Owner?",
    options: [
      { id: "a", text: "Whenever the Product Owner asks." },
      { id: "b", text: "During the Sprint Review." },
      {
        id: "c",
        text: "Anytime the Developers need feedback from the Product Owner.",
      },
      { id: "d", text: "All of the above." },
    ],
    correctOptionId: "d",
  },

  {
    id: "q12",
    prompt:
      "What are possible benefits from practicing Test Driven Development (TDD)?",
    options: [
      {
        id: "a",
        text: "It is a great way for Testers to contribute early in the Sprint as they can start creating all the tests from the beginning on.",
      },
      {
        id: "b",
        text: "It makes Integration Tests obsolete and by doing so saves a lot of time.",
      },
      {
        id: "c",
        text: "It helps break down complex problems into smaller ones that are much easier to be tackled.",
      },
      {
        id: "d",
        text: "It increases collaboration between Developers as it requires Pair Programming.",
      },
      {
        id: "e",
        text: "It might lead to better code as Refactoring is part of the TDD cycle.",
      },
      {
        id: "f",
        text: "It helps to identify gaps in understanding the desired behavior.",
      },
    ],
    correctOptionId: "c,e,f",
  },

  {
    id: "q13",
    prompt:
      "Who decides the System Architecture of a Product developed using Scrum?",
    options: [
      { id: "a", text: "The Architect chosen by the Scrum Team." },
      { id: "b", text: "The Software Architect assigned to the Scrum Team." },
      {
        id: "c",
        text: "The Developers with input from the Scrum Team and others.",
      },
      { id: "d", text: "The Chief Architect." },
    ],
    correctOptionId: "c",
  },

  {
    id: "q14",
    prompt:
      "When using Continuous Integration, how often should the build be executed?",
    options: [
      { id: "a", text: "Once per hour." },
      {
        id: "b",
        text: "Whenever new or changed code is checked into version control.",
      },
      { id: "c", text: "Once per day." },
      { id: "d", text: "Before the end of the Sprint." },
      {
        id: "e",
        text: "Whenever new tests are created or uncertainty arises about whether old tests will pass.",
      },
    ],
    correctOptionId: "b",
  },

  {
    id: "q15",
    prompt: "Which of the following are advantages of Continuous Integration?",
    options: [
      { id: "a", text: "Readability of code is improved." },
      { id: "b", text: "Know immediately how a change affected the Product." },
      {
        id: "c",
        text: "The feature-branch is generally kept in a buildable state.",
      },
      { id: "d", text: "Reduce effort and risk when integrating changes." },
    ],
    correctOptionId: "b,d",
  },

  {
    id: "q16",
    prompt: "Who determines how work is performed during the Sprint?",
    options: [
      { id: "a", text: "The Scrum Master." },
      { id: "b", text: "The Scrum Team." },
      { id: "c", text: "Team Manager." },
      { id: "d", text: "Subject matter experts." },
      { id: "e", text: "The Developers." },
    ],
    correctOptionId: "e",
  },

  {
    id: "q17",
    prompt: "Who creates tests on a Scrum Team?",
    options: [
      { id: "a", text: "The Product Owner." },
      { id: "b", text: "The Developers." },
      { id: "c", text: "Quality Assurance Specialists." },
      { id: "d", text: "The Scrum Master." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q18",
    prompt: "What is Test First Development (TFD)?",
    options: [
      { id: "a", text: "Creating tests before satisfying them." },
      { id: "b", text: "Testing existing code before adding more code to it." },
      {
        id: "c",
        text: "Having the Tester in the Scrum Team write the test plans before coding.",
      },
      {
        id: "d",
        text: "The continuous restructuring of Software to retain flexibility.",
      },
    ],
    correctOptionId: "a",
  },

  {
    id: "q19",
    prompt: "Which is the most reliable form of technical documentation?",
    options: [
      { id: "a", text: "A spreadsheet of passing manual tests." },
      { id: "b", text: "The Developer's whiteboard." },
      { id: "c", text: "UML model." },
      { id: "d", text: "Release notes." },
      { id: "e", text: "A help file." },
      {
        id: "f",
        text: "A passing test harness with clear naming and vocabulary.",
      },
    ],
    correctOptionId: "f",
  },

  {
    id: "q20",
    prompt:
      "While developing new functionality, you find a bug that has already been delivered to the customer. What do you do?",
    options: [
      {
        id: "a",
        text: "Revise the tests so that the bug no longer appears on the bug report.",
      },
      { id: "b", text: "Fix the bug." },
      { id: "c", text: "Talk to the Product Owner." },
      {
        id: "d",
        text: "Stub out the code that caused the bug so it no longer occurs.",
      },
    ],
    correctOptionId: "c",
  },

  {
    id: "q21",
    prompt:
      "Who has the final decision about the order of items in the Product Backlog?",
    options: [
      { id: "a", text: "The Scrum Master." },
      { id: "b", text: "The Stakeholders." },
      { id: "c", text: "The Scrum Team." },
      { id: "d", text: "The Developers." },
      { id: "e", text: "The Product Owner." },
    ],
    correctOptionId: "e",
  },

  {
    id: "q22",
    prompt:
      "What are two differences between Unit Tests and Integration Tests?",
    options: [
      { id: "a", text: "A Unit Test isolates a specific system behavior." },
      {
        id: "b",
        text: "An Integration Test usually focuses on the integration of two or more units.",
      },
      { id: "c", text: "A Unit Test is automated." },
      { id: "d", text: "An Integration Test runs overnight." },
      { id: "e", text: "A Unit Test only runs on a Developer's workstation." },
    ],
    correctOptionId: "a,b",
  },

  {
    id: "q23",
    prompt: "How much time must a Product Owner spend with the Developers?",
    options: [
      { id: "a", text: "100%." },
      {
        id: "b",
        text: "Enough so that the Product Owner is not surprised by the value delivered by the Increment.",
      },
      { id: "c", text: "40%, or more if the Stakeholders agree." },
      {
        id: "d",
        text: "Any amount of time the Developers ask the Product Owner to be present.",
      },
    ],
    correctOptionId: "d",
  },

  {
    id: "q24",
    prompt: "What are the typical roles when practicing Pair Programming?",
    options: [
      { id: "a", text: "Product Owner and Developer." },
      { id: "b", text: "Business Analyst and Developer." },
      { id: "c", text: "Tester and Developer." },
      { id: "d", text: "Driver and Navigator." },
      { id: "e", text: "Frontend and Backend." },
    ],
    correctOptionId: "d",
  },

  {
    id: "q25",
    prompt:
      "True or False: When multiple teams work together on the same Product, each team should maintain a separate Product Backlog.",
    options: [
      { id: "a", text: "True." },
      { id: "b", text: "False." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q26",
    prompt:
      "What are three of the best ways to address non-functional requirements?",
    options: [
      { id: "a", text: "Scrum is for functional, front-end development only." },
      {
        id: "b",
        text: "Important, recurring non-functional requirements can be added to the Definition of Done.",
      },
      {
        id: "c",
        text: "Discuss them during a risk mitigation phase before development.",
      },
      { id: "d", text: "Include them in the Product Backlog." },
      {
        id: "e",
        text: "Specific expectations can be used as Acceptance Criteria to specific Product Backlog Items.",
      },
      {
        id: "f",
        text: "Before the release, they should be tested and validated in a hardening Sprint.",
      },
    ],
    correctOptionId: "b,d,e",
  },

  {
    id: "q27",
    prompt: "What is the primary purpose of Refactoring?",
    options: [
      { id: "a", text: "Ensuring that all factors are constantly aligned." },
      {
        id: "b",
        text: "Removing all bugs that were found during Regression Tests.",
      },
      {
        id: "c",
        text: "Making sure that the code is readable and maintainable.",
      },
      { id: "d", text: "Creating better technical documentation." },
    ],
    correctOptionId: "c",
  },

  {
    id: "q28",
    prompt: "Which are four attributes of a good bug report?",
    options: [
      { id: "a", text: "Expected results and observed results." },
      {
        id: "b",
        text: "Includes build or version number where bug was found.",
      },
      { id: "c", text: "Includes code for a proposed fix." },
      { id: "d", text: "Provides simple and repeatable reproduction steps." },
      { id: "e", text: "Screenshots or other pictures of the bug in action." },
      { id: "f", text: "Explains some new system functionality desired." },
    ],
    correctOptionId: "a,b,d,e",
  },

  {
    id: "q29",
    prompt:
      "The practice of decomposing a requirement into failing tests is called:",
    options: [
      { id: "a", text: "Regression Testing." },
      { id: "b", text: "Object oriented requirements definition." },
      { id: "c", text: "Acceptance Test Driven Development." },
      { id: "d", text: "Behavior Driven Development." },
    ],
    correctOptionId: "c",
  },

  {
    id: "q30",
    prompt: "What is a mock object?",
    options: [
      {
        id: "a",
        text: "A test object that mimics the behavior of a dependency in the system under test.",
      },
      { id: "b", text: "A mock helps you create a build script." },
      {
        id: "c",
        text: "Mocks, stubs, dummies, fakes, and shims are all the same.",
      },
      {
        id: "d",
        text: "A mock is a way to initialize the database for testing.",
      },
    ],
    correctOptionId: "a",
  },

  {
    id: "q31",
    prompt: "Which four are benefits of Test Driven Development?",
    options: [
      { id: "a", text: "It improves quality and reduces bugs." },
      { id: "b", text: "It reduces the cost of maintenance over time." },
      { id: "c", text: "It promotes good design and separation of concerns." },
      { id: "d", text: "It ensures no defects are present in the code." },
      {
        id: "e",
        text: "It causes you to construct a test harness that can be automated.",
      },
    ],
    correctOptionId: "a,b,c,e",
  },

  {
    id: "q32",
    prompt: "Which are three attributes of a bad bug report?",
    options: [
      { id: "a", text: "Vague statements or untested assumptions." },
      { id: "b", text: "Generic titles." },
      { id: "c", text: "Simple and repeatable reproduction steps." },
      { id: "d", text: "Assigning blame." },
      { id: "e", text: "One bug per report." },
    ],
    correctOptionId: "a,b,d",
  },

  {
    id: "q33",
    prompt: "When using Scrum, can a Scrum Team use Continuous Delivery?",
    options: [
      {
        id: "a",
        text: "Yes, there is nothing in Scrum that conflicts with Continuous Delivery.",
      },
      {
        id: "b",
        text: "No, because the Product Owner may not be available each time a PBI is done and the Product Owner has to decide if it should be released.",
      },
      {
        id: "c",
        text: "No, because the increment has to be approved at the Sprint Review before it can be released, and a 2-week Sprint would not be considered continuous.",
      },
      {
        id: "d",
        text: "No, because Stakeholders may have already seen the new features and the Sprint Review will be meaningless.",
      },
      {
        id: "e",
        text: "No, because before releasing an Increment it first has to fulfill the Definition of Done.",
      },
    ],
    correctOptionId: "a",
  },

  {
    id: "q34",
    prompt:
      "You are asked to refactor part of the codebase for Application X. When you are done, all Unit Tests pass with 50% Code Coverage. What can you infer from this?",
    options: [
      { id: "a", text: "At least 50% of Application X functions correctly." },
      { id: "b", text: "At most 50% of Application X functions correctly." },
      { id: "c", text: "There are no bugs present in Application X." },
      { id: "d", text: "You did not break any existing Unit Tests." },
    ],
    correctOptionId: "d",
  },

  {
    id: "q35",
    prompt:
      "What are two ways that regulatory compliance issues are dealt with in Scrum?",
    options: [
      {
        id: "a",
        text: "They are addressed by a separate team who is responsible for compliance issues.",
      },
      {
        id: "b",
        text: "They are addressed along with functional development of the Product.",
      },
      {
        id: "c",
        text: "They are discussed, determined, and documented before the actual feature development Sprints.",
      },
      {
        id: "d",
        text: "They are added to the Product Backlog and addressed in early Sprints, while always requiring at least some business functionality. no matter how small.",
      },
    ],
    correctOptionId: "b,d",
  },

  {
    id: "q36",
    prompt: "True or False: User Stories are required in the Product Backlog.",
    options: [
      { id: "a", text: "True." },
      { id: "b", text: "False." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q37",
    prompt: "In Software Development, DRY refers to:",
    options: [
      { id: "a", text: "Code with low Cyclomatic Complexity." },
      { id: "b", text: "Code with minimal duplication." },
      { id: "c", text: "Code that has not been peer reviewed." },
      { id: "d", text: "Code that has been peer reviewed." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q38",
    prompt:
      "Which statements are true when multiple Scrum Teams work on a Software Product at the same time?",
    options: [
      {
        id: "a",
        text: "All Scrum Teams work in their own version control branch.",
      },
      { id: "b", text: "Code is merged at the Scrum of Scrums." },
      {
        id: "c",
        text: "The Scrum Teams must integrate their work before the end of the Sprint.",
      },
      {
        id: "d",
        text: "The Scrum Teams coordinate their work to deliver a single Increment.",
      },
      {
        id: "e",
        text: "Each Scrum Team should have a different Product Owner.",
      },
    ],
    correctOptionId: "c,d",
  },

  {
    id: "q39",
    prompt: "Which answer best describes Behavior Driven Development (BDD)?",
    options: [
      {
        id: "a",
        text: "A style of Test Driven Development focusing on user and system interactions.",
      },
      {
        id: "b",
        text: "A development style that accounts for leadership style among team members.",
      },
      {
        id: "c",
        text: "A way to organize Unit Tests based on class and method structures.",
      },
      {
        id: "d",
        text: "A technique for maintaining Regression Test harnesses.",
      },
    ],
    correctOptionId: "a",
  },

  {
    id: "q40",
    prompt:
      "In what ways do Developers contribute to refining the Product Backlog?",
    options: [
      {
        id: "a",
        text: "They ask questions in order to clarify the intent of Product Backlog Items.",
      },
      {
        id: "b",
        text: "They do not. The Developers are only responsible for prioritizing technical work.",
      },
      {
        id: "c",
        text: "They do not. The Scrum Master and the Product Owner are responsible for Product Backlog Refinement.",
      },
      { id: "d", text: "They give input on technical dependencies." },
      { id: "e", text: "They may update estimates for Product Backlog Items." },
    ],
    correctOptionId: "a,d,e",
  },

  {
    id: "q41",
    prompt: "When should the Developers create their first automated build?",
    options: [
      { id: "a", text: "Just before the Product is released." },
      { id: "b", text: "Before writing the first line of code." },
      { id: "c", text: "When the Product Owner asks for a build." },
      { id: "d", text: "Just before the end of the Sprint." },
      {
        id: "e",
        text: "As soon as there is code in the Version Control System.",
      },
    ],
    correctOptionId: "e",
  },

  {
    id: "q42",
    prompt: "Which types of tests can be automated?",
    options: [
      { id: "a", text: "Exploratory." },
      { id: "b", text: "Performance." },
      { id: "c", text: "Unit." },
      { id: "d", text: "Smoke." },
      { id: "e", text: "Functional." },
      { id: "f", text: "Integration." },
    ],
    correctOptionId: "b,c,d,e,f",
  },

  {
    id: "q43",
    prompt:
      "How much work is required of the Developers to complete a Product Backlog Item selected during the Sprint Planning?",
    options: [
      {
        id: "a",
        text: "A proportional amount of time on analysis, design, development, and testing.",
      },
      { id: "b", text: "All development work and at least some testing." },
      {
        id: "c",
        text: "As much as they can fit into the Sprint, with remaining work deferred to the next Sprint.",
      },
      {
        id: "d",
        text: "As much as s required to meet the Scrum Team's Definition of Done.",
      },
    ],
    correctOptionId: "d",
  },

  {
    id: "q44",
    prompt: "Why might Developers choose to do Pair Programming?",
    options: [
      { id: "a", text: "Information sharing and learning." },
      { id: "b", text: "Improving Code Quality." },
      { id: "c", text: "Efficiency." },
      { id: "d", text: "It can be a fun way to work." },
      { id: "e", text: "All of the above." },
    ],
    correctOptionId: "e",
  },

  {
    id: "q45",
    prompt: "What is the role of Modeling in Scrum Teams?",
    options: [
      { id: "a", text: "Models are not used by agile teams." },
      {
        id: "b",
        text: "Models are maintained along with the Software as it emerges.",
      },
      { id: "c", text: "Models are assembly instructions for the Developers." },
      {
        id: "d",
        text: "Modeling may be useful to increase shared understanding.",
      },
    ],
    correctOptionId: "d",
  },

  {
    id: "q46",
    prompt: "Which of the following are DevOps Practices?",
    options: [
      {
        id: "a",
        text: "Continuous Integration / Continuous Deployment / Continuous Delivery.",
      },
      { id: "b", text: "Blue-Green Deployment." },
      { id: "c", text: "Hypothesis Driven Development." },
      { id: "d", text: "Vertical Teams." },
      { id: "e", text: "Blameless Postmortem." },
      { id: "f", text: "All of the above." },
    ],
    correctOptionId: "f",
  },

  {
    id: "q47",
    prompt:
      "While practicing Test Driven Development, what is done after the test fails?",
    options: [
      {
        id: "a",
        text: "Write the minimum amount of Product code to satisfy the test.",
      },
      { id: "b", text: "Refactor the test so the code passes." },
      { id: "c", text: "Run it again to make sure it really fails." },
      { id: "d", text: "Implement the required functionality." },
      {
        id: "e",
        text: "Meet with the Business Analyst to ensure that the test is correct.",
      },
    ],
    correctOptionId: "a",
  },

  {
    id: "q48",
    prompt:
      "What tactic should a Scrum Master use to divide a group of 100 people into multiple Scrum Teams?",
    options: [
      {
        id: "a",
        text: "Create teams based on their skills across multiple layers (such as database, Ul, etc.).",
      },
      { id: "b", text: "Ask the people to divide themselves into teams." },
      { id: "c", text: "Ask the Product Owner to assign the people to teams." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q49",
    prompt:
      "Developers are blocked by an impediment in the middle of the Sprint. The impediment is outside the Developer's control. What should they do?",
    options: [
      { id: "a", text: "Stop using Scrum until the impediment is resolved." },
      {
        id: "b",
        text: "Complete the work that can be done and complete the remainder during the hardening Sprint.",
      },
      { id: "c", text: "Immediately raise the issue to the Scrum Master." },
      { id: "d", text: "Cancel the Sprint." },
      {
        id: "e",
        text: "Drop the Product Backlog Items affected by the impediment from the Sprint Plan.",
      },
    ],
    correctOptionId: "c",
  },

  {
    id: "q50",
    prompt: "What is an Integration Test?",
    options: [
      { id: "a", text: "A test of the user interface." },
      { id: "b", text: "A test runs during a Continuous Integration build." },
      { id: "c", text: "A test of a single unit of functionality." },
      { id: "d", text: "A test of multiple units of functionality." },
    ],
    correctOptionId: "d",
  },

  {
    id: "q51",
    prompt:
      "Which of the following describes the focus of the first way of DevOps?",
    options: [
      {
        id: "a",
        text: "The first set of practices a team should apply before moving to the second way.",
      },
      { id: "b", text: "Using automated build and release pipelines." },
      { id: "c", text: "To deliver value earlier and more frequently." },
      {
        id: "d",
        text: "A tool-focused way of introducing DevOps, compared to a mindset way (second way) and organizational structure (third way).",
      },
      {
        id: "e",
        text: "A culture of continuous experimentation and learning.",
      },
    ],
    correctOptionId: "c",
  },

  {
    id: "q52",
    prompt: "Which of the following is true about the Definition of Done?",
    options: [
      {
        id: "a",
        text: "It might be a subject of discussion during Sprint Retrospective.",
      },
      {
        id: "b",
        text: "It is the sole responsibility of the Developers to define it.",
      },
      { id: "c", text: "It is synonymous with Acceptance Criteria." },
      { id: "d", text: "It can only be extended; nothing can be removed." },
      {
        id: "e",
        text: "It defines a state when the entire Increment is releasable.",
      },
    ],
    correctOptionId: "a,e",
  },

  {
    id: "q53",
    prompt:
      "At Sprint Planning, the Scrum Team has NO clear standard to meet for releasable Software. What should the Scrum Team do?",
    options: [
      {
        id: "a",
        text: "Ask the Product Owner to specify a Definition of Done.",
      },
      {
        id: "b",
        text: "Create a unique completion checklist for each item in the Sprint.",
      },
      { id: "c", text: "Specify a shared Definition of Done." },
      { id: "d", text: "Ask the Scrum Master what they should do." },
    ],
    correctOptionId: "c",
  },

  {
    id: "q54",
    prompt:
      'Based on "Sprint 7 Burndown Chart" would you do anything different in Sprint 8? ![Burndown](images/burndown.jpg)',
    options: [
      {
        id: "a",
        text: "The Scrum Master adds additional Developers for Sprint 8.",
      },
      {
        id: "b",
        text: "The Developers carry over incomplete Sprint Backlog items from Sprint 7 to Sprint 8 and monitor the Sprint 8 burn-down chart. As soon as deviation from trends is detected, the Developers work with the Product Owner to negotiate remaining work.",
      },
      {
        id: "c",
        text: "There is nothing wrong The Developers will present all Product Backlog Items selected for Sprint 7 at the end of the Sprint.",
      },
      {
        id: "d",
        text: "The Developers may forecast less overall work in Sprint 8.",
      },
      {
        id: "e",
        text: "Stakeholders will encourage the Scrum Team to estimate better during the Sprint 8 Planning Meeting.",
      },
      {
        id: "f",
        text: "The Developers put incomplete Product Backlog Items back into the Product Backlog for re-ordering.",
      },
      {
        id: "g",
        text: "The Product Owner may ask the Developers to complete the unfinished Product Backlog Items from Sprint 7 in Sprint 8.",
      },
    ],
    correctOptionId: "d,f",
  },

  {
    id: "q55",
    prompt:
      "True or False: Database design must be complete before coding starts to ensure a solid foundation?",
    options: [
      { id: "a", text: "True." },
      { id: "b", text: "False." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q56",
    prompt:
      "The Daily Scrum event happens every day. What would be three concerns if the frequency were to be lowered to every two to three days?",
    options: [
      {
        id: "a",
        text: "Opportunities to inspect and adapt in the Sprint Backlog are lost.",
      },
      {
        id: "b",
        text: "The Scrum Master loses the ability to update the Gantt Chart properly.",
      },
      {
        id: "c",
        text: "Too much work is spent updating the Scrum Board before meeting.",
      },
      { id: "d", text: "Sprint Plan may become inaccurate." },
      { id: "e", text: "Impediments are raised and resolved more slowly." },
      {
        id: "f",
        text: "The Product Owner cannot accurately report to the Stakeholders.",
      },
    ],
    correctOptionId: "a,d,e",
  },

  {
    id: "q57",
    prompt:
      "Which of the following are required by Scrum? (choose all of those who apply)",
    options: [
      { id: "a", text: "Release Burnup Chart." },
      { id: "b", text: "Burndown Chart." },
      { id: "c", text: "Unit Tests." },
      { id: "d", text: "Critical Path Analysis." },
      { id: "e", text: "Refactoring." },
      { id: "f", text: "Build automation." },
      { id: "g", text: "None of the above." },
    ],
    correctOptionId: "g",
  },

  {
    id: "q58",
    prompt: "Who is responsible for creation of the Definition of Done?",
    options: [
      { id: "a", text: "The Scrum Master." },
      { id: "b", text: "The Scrum Team." },
      { id: "c", text: "The Developers." },
      { id: "d", text: "The Product Owner." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q59",
    prompt: "Pair Programming is implemented by?",
    options: [
      { id: "a", text: "Frontend and Backend Developers." },
      { id: "b", text: "Tester and Developer." },
      { id: "c", text: "Developer and Scrum Master." },
      { id: "d", text: "Two persons working on the same PBI." },
    ],
    correctOptionId: "d",
  },

  {
    id: "q60",
    prompt: "Which of the following best describes Emergent Architecture?",
    options: [
      {
        id: "a",
        text: "Starting development of a Software Product requires a clear understanding of the underlying Software Architecture and Emergent Architecture describes the process of creating this initial architecture.",
      },
      {
        id: "b",
        text: "The Software Architecture emerges solely decisions the Developers make from a technical perspective.",
      },
      {
        id: "c",
        text: "In Scrum there is no Architecture-Role therefore architecture emerges naturally.",
      },
      {
        id: "d",
        text: "The desire to make decisions easier to change in the future and find the best possible point in time to make decisions.",
      },
      {
        id: "e",
        text: "Enterprise Architects must be involved to create the foundation of each Software Product.",
      },
    ],
    correctOptionId: "d",
  },

  {
    id: "q61",
    prompt:
      "Which are two benefits of establishing naming conventions for code? (choose best two answers)",
    options: [
      {
        id: "a",
        text: "To make it easy to distinguish between different Software Products.",
      },
      { id: "b", text: "To make the code more readable." },
      {
        id: "c",
        text: "To communicate the identity of the Developer who worked on the code.",
      },
      { id: "d", text: "To reduce friction in a shared codebase." },
      { id: "e", text: "To ensure that abandoned functions are not created." },
    ],
    correctOptionId: "b,d",
  },

  {
    id: "q62",
    prompt:
      "Does delivering changes frequently and directly into Production help to reduce risk? (choose two)",
    options: [
      {
        id: "a",
        text: "Yes, because the changes you make are much smaller and it is easier to fix problems.",
      },
      {
        id: "b",
        text: "No, because each release means a risk to break something so releasing more frequently would increase the risk.",
      },
      {
        id: "c",
        text: "Yes, because frequent release encourage the Developers to automate the release process.",
      },
      {
        id: "d",
        text: "Yes, because you get earlier feedback and can learn faster.",
      },
      {
        id: "e",
        text: "No, the only way to tackle these risks is by extensive risk management.",
      },
      {
        id: "f",
        text: "No, because releasing needs extensive testing which cannot be conducted frequently.",
      },
    ],
    correctOptionId: "a,d",
  },

  {
    id: "q63",
    prompt:
      "True or False: Best Practices are recommended to solve complex problems.",
    options: [
      { id: "a", text: "True." },
      { id: "b", text: "False." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q64",
    prompt: "When is Performance Testing most effectively performed?",
    options: [
      { id: "a", text: "Often, throughout development of the Software." },
      { id: "b", text: "Just before deploying to Production." },
      { id: "c", text: "After coding is complete." },
      { id: "d", text: "In Production." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q65",
    prompt:
      "Which three of the following criteria are most helpful as part of a Scrum Team's Definition of Done? (choose best three answers)",
    options: [
      { id: "a", text: "The Product is released at the end of every Sprint." },
      { id: "b", text: "Acceptance Tests pass." },
      { id: "c", text: "Code Review is done." },
      { id: "d", text: "Regression Tests pass." },
      { id: "e", text: "No impediments exist." },
    ],
    correctOptionId: "b,c,d",
  },

  {
    id: "q66",
    prompt:
      "A team has expressed requirements as a set of failing Acceptance Tests. What are two benefits? (choose best two answers)",
    options: [
      { id: "a", text: "Improves quality in the requirement itself." },
      { id: "b", text: "Clear Acceptance Criteria for each feature." },
      {
        id: "c",
        text: "Using a code generation tool, the solution can be generated from the requirements model.",
      },
      { id: "d", text: "Promotes the use of DRY principle." },
      { id: "e", text: "Tracking of competencies." },
    ],
    correctOptionId: "a,b",
  },

  {
    id: "q67",
    prompt: "Which is LEAST useful when measuring Code Maintainability?",
    options: [
      { id: "a", text: "Function Points." },
      { id: "b", text: "Cyclomatic Complexity." },
      { id: "c", text: "Depth of Inheritance." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q68",
    prompt:
      "Which two criteria are useful in deciding if something should be documented every Sprint? (choose best two answers)",
    options: [
      { id: "a", text: "The Scrum Master requires it." },
      { id: "b", text: "It is required by the Definition of Done." },
      {
        id: "c",
        text: "The documentation is used to enhance and maintain the Software.",
      },
      { id: "d", text: "The Software tool being used requires it." },
      { id: "e", text: "It has always been documented in the past." },
    ],
    correctOptionId: "b,c",
  },

  {
    id: "q69",
    prompt:
      "What factor should be considered when establishing the Sprint length?",
    options: [
      {
        id: "a",
        text: "The need of the team to learn on doing work and measuring results.",
      },
      {
        id: "b",
        text: "The frequency at which team formation can be changed.",
      },
      { id: "c", text: "The organization release schedule." },
      {
        id: "d",
        text: "The organization has mandated similar length Sprints.",
      },
    ],
    correctOptionId: "a",
  },

  {
    id: "q70",
    prompt:
      "What are some disadvantages of Code Coverages as a measurement for how well a system or Product is tested? (choose best three answers)",
    options: [
      { id: "a", text: "It only provides insights for programmers." },
      {
        id: "b",
        text: "It does not ensure that the most important or highest risk areas of the code are being exercised by the tests.",
      },
      {
        id: "c",
        text: "It could create incentives to write tests that simply increase Code Coverage, rather than tests that find bugs without increasing coverage.",
      },
      { id: "d", text: "It is too complicated to explain to Management." },
      {
        id: "e",
        text: "Developers could stop adding more valuable tests once the target coverage is achieved.",
      },
    ],
    correctOptionId: "b,c,e",
  },

  {
    id: "q71",
    prompt:
      "Which of the following are quality goals in Application Architecture? (choose best two answers)",
    options: [
      { id: "a", text: "Build." },
      { id: "b", text: "Security." },
      { id: "c", text: "Design Pattern selection." },
      { id: "d", text: "Scalability." },
    ],
    correctOptionId: "b,d",
  },

  {
    id: "q72",
    prompt:
      "True or False: Stakeholders can be included in Product Backlog Refinement?",
    options: [
      { id: "a", text: "True." },
      { id: "b", text: "False." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q73",
    prompt:
      "What are two good ways for the Developers to make a non-functional requirements visible?",
    options: [
      {
        id: "a",
        text: "Put them on a separate list on the Scrum board, available for all to see.",
      },
      {
        id: "b",
        text: "Add them to the Product Backlog and keep the Product Owner posted on the expected effort.",
      },
      {
        id: "c",
        text: "Run the Integration and Regression Tests before the end of the Sprint, and capture the open work for the Sprint Backlog of the next Sprint.",
      },
      {
        id: "d",
        text: "Add them to the Definition of Done so the work is taken care of every Sprint.",
      },
    ],
    correctOptionId: "b,d",
  },

  {
    id: "q74",
    prompt:
      "What activities would a Product Owner typically undertake in the phase between the end of the current Sprint and the start of the next Sprint? (choose the best answer)",
    options: [
      {
        id: "a",
        text: "There are no such activities. The next Sprint starts immediately after the current Sprint.",
      },
      {
        id: "b",
        text: "Work with the Quality Assurance departments on the Increment of the current Sprint.",
      },
      { id: "c", text: "Refine the Product Backlog." },
      { id: "d", text: "Update the project plan with Stakeholders." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q75",
    prompt:
      "You are the Scrum Master on a newly formed Scrum Team. Which two of the following activities would probably help the team in starting up? (choose the best two answers)",
    options: [
      {
        id: "a",
        text: "Ensure the Scrum Team members have compatible personalities.",
      },
      {
        id: "b",
        text: "Introduce a bonus system for the top performers in the team.",
      },
      {
        id: "c",
        text: "Ensure the team understands they need a Definition of Done.",
      },
      {
        id: "d",
        text: "Have the development managers for each Developers member introduce their direct reports and go over their responsibilities on the Scrum Team.",
      },
      {
        id: "e",
        text: "Ask the Product Owner to discuss the Product, its vision, history, goals, and context, as well as answer questions.",
      },
    ],
    correctOptionId: "c,e",
  },

  {
    id: "q76",
    prompt:
      "Which best describes the Product Backlog? (choose the best answer)",
    options: [
      {
        id: "a",
        text: "It contains all foreseeable tasks and requirements from which the Scrum team can develop and maintain a complete project plan.",
      },
      {
        id: "b",
        text: "It is allowed to grow and change as more is learned about the Product and its customers.",
      },
      {
        id: "c",
        text: "It is baselined to follow change management processes.",
      },
      {
        id: "d",
        text: "It provides just enough information to enable a Scrum team to start the design phase of a Product.",
      },
    ],
    correctOptionId: "b",
  },

  {
    id: "q77",
    prompt:
      "What are two responsibilities of Testers in the Developers? (choose the best two answers)",
    options: [
      { id: "a", text: "Verifying the work of programmers." },
      { id: "b", text: 'Scrum has no "Tester" role.' },
      { id: "c", text: "Finding bugs." },
      {
        id: "d",
        text: "Everyone in the Developers is responsible for quality.",
      },
      { id: "e", text: "Tracking quality metrics." },
    ],
    correctOptionId: "b,d",
  },

  {
    id: "q78",
    prompt:
      "How do you know that the Developers are cross-functional? (choose the best answer)",
    options: [
      {
        id: "a",
        text: "A few of the Developers pair program and do Test Driven Development.",
      },
      {
        id: "b",
        text: "The Developers have all the skills to create a potentially releasable increment by the end of every Sprint.",
      },
      {
        id: "c",
        text: "Every member of the Developers is able to perform every task.",
      },
      { id: "d", text: "There are no conflicts within the Developers." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q79",
    prompt:
      "For the purpose of transparency, when does Scrum say a new Increment of working Software must be available? (choose the best answer)",
    options: [
      { id: "a", text: "When the Product Owner asks to create one." },
      { id: "b", text: "At the end of every Sprint." },
      { id: "c", text: "Before the release Sprint." },
      { id: "d", text: "Every 3 Sprints." },
      { id: "e", text: "After the Acceptance Testing phase." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q80",
    prompt:
      "Which three behaviors demonstrate that a team is self-managing? (choose the best three answers)",
    options: [
      {
        id: "a",
        text: "The Developers inviting external people to the Sprint Planning to ask them how to turn a Product Backlog Item into an Increment via a complete and detailed Sprint Backlog.",
      },
      {
        id: "b",
        text: "The Developers are working within the boundaries of their functional description and nicely handing off work from analyst to Developer to Tester to integration.",
      },
      {
        id: "c",
        text: "The Product Owner doesn't need to be at Sprint Retrospectives.",
      },
      {
        id: "d",
        text: "Stakeholders walking in at the Daily Scrum to check progress and work with the Scrum Master to optimize the functional scope for the Sprint.",
      },
      {
        id: "e",
        text: "The Developers collaboratively selecting their own work during the Sprint.",
      },
      { id: "f", text: "The Scrum Master is no longer needed." },
      {
        id: "g",
        text: "The Developers have all the skills needed to create a releasable Increment.",
      },
      {
        id: "h",
        text: "The Developers creating their own Sprint Backlog, reflecting all work that is part of the Definition of Done.",
      },
    ],
    correctOptionId: "e,g,h",
  },

  {
    id: "q81",
    prompt: "What is the purpose of a Sprint Review? (choose the best answer)",
    options: [
      { id: "a", text: "To take time to judge the validity of the project." },
      {
        id: "b",
        text: "To inspect the Product Increment with the Stakeholders and collect feedback on next steps.",
      },
      {
        id: "c",
        text: "To review the Scrum Team's activities and processes during the Sprint.",
      },
      { id: "d", text: "To build team spirit." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q82",
    prompt:
      "True or False: The Product Owner makes sure the team selects enough from the Product Backlog for a Sprint to satisfy the Stakeholders.",
    options: [
      { id: "a", text: "True." },
      { id: "b", text: "False." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q83",
    prompt:
      "Which statement best describes the Sprint Backlog as outcome of the Sprint Planning? (choose the best answer)",
    options: [
      { id: "a", text: "It is the Developers plan for the Sprint." },
      { id: "b", text: "Every item has a designated owner." },
      {
        id: "c",
        text: "It is a complete list of all work to be done in a Sprint.",
      },
      { id: "d", text: "Each task is estimated in hours." },
      { id: "e", text: "It is ordered by the Product Owner." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q84",
    prompt:
      'The Developers selects a set of Product Backlog Items for a Sprint Backlog with the intent to get the selected items "Done" by the end of the Sprint. Which three phrases best describe the purpose of a Definition of Done? (choose the best three answers)',
    options: [
      {
        id: "a",
        text: "It provides a template for elements that need to be included in the technical documentation.",
      },
      {
        id: "b",
        text: "It guides the Developers in creating a forecast at the Sprint Planning.",
      },
      {
        id: "c",
        text: "It controls whether the Developers have performed their tasks.",
      },
      {
        id: "d",
        text: "It creates transparency over the work inspected at the Sprint Review.",
      },
      {
        id: "e",
        text: "It defines what it takes for an Increment to be ready for release.",
      },
      {
        id: "f",
        text: "It tracks the percentage complete of a Product Backlog Item.",
      },
    ],
    correctOptionId: "b,d,e",
  },

  {
    id: "q85",
    prompt:
      "Which output from Sprint Planning provides the Developers with a target and overarching direction for the Sprint? (choose the best answer)",
    options: [
      { id: "a", text: "The Sprint Goal." },
      { id: "b", text: "Sprint Review minutes." },
      { id: "c", text: "The Release Plan." },
      { id: "d", text: "The Sprint Backlog." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q86",
    prompt:
      "The Product Owner determines how many Product Backlog Items the Developers selects for a Sprint. (choose the best answer)",
    options: [
      {
        id: "a",
        text: "True, but only after confirmation by the resource manager that the Team has enough capacity.",
      },
      {
        id: "b",
        text: "False, capacity and commitment are the Project Manager's responsibility.",
      },
      { id: "c", text: "False, the Scrum Master does that." },
      { id: "d", text: "True." },
      {
        id: "e",
        text: "True, accordingly to what was committed to the Stakeholders.",
      },
      { id: "f", text: "False." },
    ],
    correctOptionId: "f",
  },

  {
    id: "q87",
    prompt: "Who owns the Sprint Backlog? (choose the best answer)",
    options: [
      { id: "a", text: "The Scrum Team." },
      { id: "b", text: "The Scrum Master." },
      { id: "c", text: "The Developers." },
      { id: "d", text: "The Product Owner." },
    ],
    correctOptionId: "c",
  },

  {
    id: "q88",
    prompt:
      "When is implementation of a Product Backlog Item considered complete? (choose the best answer)",
    options: [
      {
        id: "a",
        text: "When the item has no work remaining in order to be potentially released.",
      },
      {
        id: "b",
        text: "When Quality Assurance reports that the item passes all Acceptance Criteria.",
      },
      { id: "c", text: "At the end of the Sprint." },
      {
        id: "d",
        text: "When all work in the Sprint Backlog related to the item is finished.",
      },
    ],
    correctOptionId: "a",
  },

  {
    id: "q89",
    prompt:
      "Which two of the following are true about the Scrum Master role? (choose the best two answers)",
    options: [
      {
        id: "a",
        text: "The Scrum Master teaches the Developers to keep the Scrum meetings to their time-box.",
      },
      {
        id: "b",
        text: "The Scrum Master is responsible for updating the Sprint Burndown.",
      },
      {
        id: "c",
        text: "The Scrum Master assigns tasks to Developers when they need work.",
      },
      {
        id: "d",
        text: "The Scrum Master helps those outside the team interact with the Scrum Team.",
      },
      {
        id: "e",
        text: 'At the Sprint Review, the Scrum Master identifies what has been "Done" and what has not been "Done".',
      },
    ],
    correctOptionId: "a,d",
  },

  {
    id: "q90",
    prompt:
      "Which two of the following are appropriate topics for discussion during a Sprint Retrospective? (choose the best two answers)",
    options: [
      {
        id: "a",
        text: "Documenting Acceptance Criteria for items in the next Sprint.",
      },
      { id: "b", text: "The order of items in the Product Backlog." },
      {
        id: "c",
        text: "Identifying high priority process improvements for the next Sprint.",
      },
      { id: "d", text: "How the team collaborates." },
    ],
    correctOptionId: "c,d",
  },

  {
    id: "q91",
    prompt:
      "True or False: Multiple Scrum Teams working on the same project must have the same Sprint start date.",
    options: [
      { id: "a", text: "True." },
      { id: "b", text: "False." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q92",
    prompt:
      "When is it most appropriate for a Scrum Team to change the Definition of Done? (choose the best answer)",
    options: [
      { id: "a", text: "During Sprint Planning." },
      { id: "b", text: "Prior to starting a new project." },
      { id: "c", text: "Prior to starting a new Sprint." },
      { id: "d", text: "During the Sprint Retrospective." },
    ],
    correctOptionId: "d",
  },

  {
    id: "q93",
    prompt:
      "The Product Owner is not collaborating with the Developers during the Sprint. What are two valuable actions for a Scrum Master to take? (choose the best two answers)",
    options: [
      { id: "a", text: "Nominate a proxy Product Owner." },
      {
        id: "b",
        text: "Coach the Product Owner in the values of Scrum and incremental delivery.",
      },
      {
        id: "c",
        text: "Stop the Sprint, send the Product Owner to a course and restart.",
      },
      { id: "d", text: "Inform the Product Owner's functional manager." },
      { id: "e", text: "Bring up the problem in the Sprint Retrospective." },
    ],
    correctOptionId: "b,e",
  },

  {
    id: "q94",
    prompt:
      "A Scrum Master is working with the Developers that has members in different physical locations. The Developers meets in a variety of meeting rooms and has much to do logistically (for example, set up conference calls) before the Daily Scrum. What action should the Scrum Master take? (choose the best answer)",
    options: [
      {
        id: "a",
        text: "Ask the Developers to alternate who is responsible for meeting setup.",
      },
      {
        id: "b",
        text: "Set up the meeting and tell the Developers that is how it will be done.",
      },
      { id: "c", text: "Inform Management and ask them to solve it." },
      {
        id: "d",
        text: "Allow the Developers to self-manage and determine for itself what to do.",
      },
    ],
    correctOptionId: "d",
  },

  {
    id: "q95",
    prompt:
      "Five new Scrum Teams have been created to build one Product. A few of the Developers on one of the Developers ask the Scrum Master how to coordinate their work with the other teams. What should the Scrum Master do?",
    options: [
      {
        id: "a",
        text: "Teach the Product Owner to work with the Lead Developers on ordering Product Backlog in a way to avoid too much technical and development overlap during a Sprint.",
      },
      {
        id: "b",
        text: "Collect the Sprint tasks from the teams at the end of their Sprint Planning and merge that into a consolidated plan for the entire Sprint.",
      },
      {
        id: "c",
        text: "Teach them that it is their responsibility to work with the other teams to create an integrated Increment.",
      },
      {
        id: "d",
        text: "Visit the five teams each day to inspect that their Sprint Backlogs are aligned.",
      },
    ],
    correctOptionId: "c",
  },

  {
    id: "q96",
    prompt:
      "True or False: Scrum is a methodology that tells in detail how to build Software incrementally.",
    options: [
      { id: "a", text: "True." },
      { id: "b", text: "False." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q97",
    prompt:
      "In the Sprint Planning meeting, the Product Owner and the Developers were unable to reach a clear understanding about the highest order Product Backlog Items. Because of this, the Developers couldn't figure out how many Product Backlog Items it could forecast for the upcoming Sprint. They were able to agree on a Sprint Goal, however. Which of the following two actions should the Scrum Master support? (choose the best two answers)",
    options: [
      {
        id: "a",
        text: "Ask everyone to take as much time as needed to analyze the Product Backlog first, and then reconvene another Sprint Planning meeting.",
      },
      {
        id: "b",
        text: "Cancel the Sprint. Send the entire team to an advanced Scrum training and then start a new Sprint.",
      },
      {
        id: "c",
        text: "Forecast the most likely Product Backlog Items to meet the goal and create a Sprint Backlog based on a likely initial design and plan. Once the time-box for the Sprint Planning meeting is over, start the Sprint and continue to analyze, decompose, and create additional functionality during the Sprint.",
      },
      {
        id: "d",
        text: "Continue the Sprint Planning meeting past its time-box until an adequate number of Product Backlog Items are well enough understood for the Developers to make a complete forecast. Then start the Sprint.",
      },
      {
        id: "e",
        text: "Discuss in the upcoming Sprint Retrospective why this happened and what changes will make it less likely to recur.",
      },
    ],
    correctOptionId: "c,e",
  },

  {
    id: "q98",
    prompt:
      "A member of the Developers takes the Scrum Master aside to express his concerns about data security issues. What should the Scrum Master do? (choose the best answer)",
    options: [
      { id: "a", text: "Create a Product Backlog Item for security." },
      {
        id: "b",
        text: "Ask the person to share the issue with the team as soon as possible.",
      },
      { id: "c", text: "Add security to the Definition of Done." },
      {
        id: "d",
        text: "Tell the Product Owner to stop further development of features until the issues are fixed.",
      },
      { id: "e", text: "Go check with the Testers." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q99",
    prompt:
      "What are two ways that architecture and infrastructure are handled in Scrum? (choose the best two answers)",
    options: [
      {
        id: "a",
        text: "They are implemented along with functional development of the Product.",
      },
      {
        id: "b",
        text: "They are built by a separate team through the creation of an architectural runway.",
      },
      {
        id: "c",
        text: "They are added to the Product Backlog and addressed in early Sprints, while always requiring at least some business functionality, no matter how small.",
      },
      {
        id: "d",
        text: "They are discussed, determined, and documented before the actual feature development Sprints.",
      },
    ],
    correctOptionId: "a,c",
  },

  {
    id: "q100",
    prompt:
      "What are three ways Scrum promotes self-management? (choose three)",
    options: [
      {
        id: "a",
        text: "By preventing Stakeholders from entering the development room.",
      },
      { id: "b", text: "By removing titles for the Developers." },
      { id: "c", text: "By not allowing documentation." },
      { id: "d", text: "By being a lightweight framework." },
      {
        id: "e",
        text: "By the Developers deciding what work to do in a Sprint.",
      },
    ],
    correctOptionId: "b,d,e",
  },

  {
    id: "q101",
    prompt:
      "True or False: Cross-functional teams are optimized to work on one technical layer of a system only (e.g. GUI, database, middle tier, interfaces).",
    options: [
      { id: "a", text: "False." },
      { id: "b", text: "True." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q102",
    prompt: "What are three benefits of self-management? (choose three)",
    options: [
      { id: "a", text: "Increased accuracy of estimates." },
      { id: "b", text: "Increased rule compliance." },
      { id: "c", text: "Increased self-accountability." },
      { id: "d", text: "Increased creativity." },
      { id: "e", text: "Increased commitment." },
    ],
    correctOptionId: "c,d,e",
  },

  {
    id: "q103",
    prompt: "Why does a Scrum Team need a Sprint Goal?",
    options: [
      {
        id: "a",
        text: "A Sprint Goal ensures that all of the Product Backlog Items selected for the Sprint are implemented.",
      },
      {
        id: "b",
        text: "The Scrum Team is more focused with a common yet specific goal.",
      },
      {
        id: "c",
        text: "Sprint Goals are not valuable. Everything is known from the Product Backlog.",
      },
      { id: "d", text: "A Sprint Goal only gives purpose to Sprint 0." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q104",
    prompt:
      "How should Product Backlog Items be chosen when multiple Scrum Teams work from the same Product Backlog?",
    options: [
      {
        id: "a",
        text: "The Product Owner should provide each team with its own Product Backlog.",
      },
      {
        id: "b",
        text: "The Developers pull in work in agreement with the Product Owner.",
      },
      { id: "c", text: "Each Scrum Team takes an equal numbers of items." },
      {
        id: "d",
        text: "The Scrum Team with the highest velocity pulls Product Backlog Items first.",
      },
      { id: "e", text: "The Product Owner decides." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q105",
    prompt:
      "Which of the following describe Test Driven Development? (choose two answers)",
    options: [
      {
        id: "a",
        text: "A Software Development technique based on automated tests.",
      },
      {
        id: "b",
        text: "A predictable way to develop working, well-organized code.",
      },
      { id: "c", text: "Having Testers in the development process." },
      {
        id: "d",
        text: "An Increment and emergent approach to Software Design.",
      },
      { id: "e", text: "Creating a manual test script before writing code." },
    ],
    correctOptionId: "a,d",
  },

  {
    id: "q106",
    prompt:
      "When a Continuous Integration build fails, who ideally ensures the build is repaired? (choose the best answer)",
    options: [
      { id: "a", text: "The person who broke the build." },
      {
        id: "b",
        text: "The next person who needs the build to complete successfully.",
      },
      {
        id: "c",
        text: "The person assigned to the configuration management role within the team.",
      },
      { id: "d", text: "The Tester responsible for validating builds." },
      { id: "e", text: "Whoever the Developers agree should fix it." },
    ],
    correctOptionId: "e",
  },

  {
    id: "q107",
    prompt: "What happens during Sprint 0? (choose the best answer)",
    options: [
      {
        id: "a",
        text: "Establish base System Architecture and design, install version control and continuous integration setup.",
      },
      { id: "b", text: "There is no such thing as Sprint 0." },
      { id: "c", text: "Base System Architecture and design." },
      {
        id: "d",
        text: "Overall planning, base System Architecture, base design, version control and continuous integration setup.",
      },
      {
        id: "e",
        text: "Requirements gathering, version control setup, and continuous integration setup.",
      },
    ],
    correctOptionId: "b",
  },

  {
    id: "q108",
    prompt: "Product Backlog Items are refined by: (choose the best answer)",
    options: [
      { id: "a", text: "The Developers." },
      { id: "b", text: "The Product Owner." },
      { id: "c", text: "The Scrum Team." },
      { id: "d", text: "The Business Analyst and the Product Owner." },
    ],
    correctOptionId: "c",
  },

  {
    id: "q109",
    prompt:
      "Who is responsible for the System Architecture of a Product being developed using Scrum? (choose the best answer)",
    options: [
      { id: "a", text: "The Architect chosen by the Scrum Team." },
      { id: "b", text: "The Developers." },
      { id: "c", text: "The Software Architect." },
      { id: "d", text: "The Corporate Architect." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q110",
    prompt:
      "Which of the following are attributes of a bad bug report? (choose the best three answers)",
    options: [
      { id: "a", text: "Simple and repeatable reproduction steps." },
      { id: "b", text: "Vague statements or untested assumptions." },
      { id: "c", text: "Generic titles." },
      { id: "d", text: "One bug per report." },
      { id: "e", text: "Assigning blame." },
    ],
    correctOptionId: "b,c,e",
  },

  {
    id: "q111",
    prompt: "Who writes tests in a Scrum Team? (choose the best answer)",
    options: [
      { id: "a", text: "The Developers." },
      { id: "b", text: "Coders." },
      { id: "c", text: "The Scrum Master." },
      { id: "d", text: "Quality Assurance Specialists." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q112",
    prompt:
      "When Developers are having trouble delivering an Increment because they do not understand a functional requirement, what should they do?",
    options: [
      {
        id: "a",
        text: "Partially complete the functionality, and discuss the remaining work at the Sprint Review.",
      },
      { id: "b", text: "Add a specialist to the Scrum Team." },
      {
        id: "c",
        text: "Collaborate with the Product Owner to determine what is possible and acceptable.",
      },
      { id: "d", text: "Defer the work to a more appropriate Sprint." },
    ],
    correctOptionId: "c",
  },

  {
    id: "q113",
    prompt:
      "Who should be present during Product Backlog Refinement? (choose the best answer)",
    options: [
      {
        id: "a",
        text: "The integration architects from the release department.",
      },
      { id: "b", text: "Only the most senior Developers." },
      {
        id: "c",
        text: "Anyone that the Scrum Team decides will be valuable during Refinement.",
      },
      { id: "d", text: "The Stakeholders." },
      {
        id: "e",
        text: "The external Business Analysts that have prepared the functional details.",
      },
    ],
    correctOptionId: "c",
  },

  {
    id: "q114",
    prompt:
      "True or False: Programmers and Testers should not be included in refining Product Backlog Items.",
    options: [
      { id: "a", text: "True." },
      { id: "b", text: "False." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q115",
    prompt: "Why are automated builds important? (choose the best answer)",
    options: [
      { id: "a", text: "Without them you cannot tell if your code works." },
      { id: "b", text: "You are unable to check-in code without one." },
      { id: "c", text: "They are part of your done criteria." },
      {
        id: "d",
        text: "They provide rapid assurance that defects and configuration management issues have not been introduced.",
      },
    ],
    correctOptionId: "d",
  },

  {
    id: "q116",
    prompt:
      "Upon what type of process control is Scrum based? (choose the best answer)",
    options: [
      { id: "a", text: "Defined." },
      { id: "b", text: "Empirical." },
      { id: "c", text: "Complex." },
      { id: "d", text: "Hybrid." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q117",
    prompt:
      "When might a Sprint be abnormally cancelled? (choose the best answer)",
    options: [
      { id: "a", text: "When the Sprint Goal becomes obsolete." },
      {
        id: "b",
        text: "When the sales department has an important new opportunity.",
      },
      { id: "c", text: "When the Developers feel that the work is too hard." },
      {
        id: "d",
        text: "When it becomes clear that not everything will be finished by the end of the Sprint.",
      },
    ],
    correctOptionId: "a",
  },

  {
    id: "q118",
    prompt:
      "Who should know the most about the progress toward a business objective or a release, and be able to explain the alternatives most clearly? (choose the best answer)",
    options: [
      { id: "a", text: "The Scrum Master." },
      { id: "b", text: "The Project Manager." },
      { id: "c", text: "The Product Owner." },
      { id: "d", text: "The Developers." },
    ],
    correctOptionId: "c",
  },

  {
    id: "q119",
    prompt:
      "When many Scrum Teams are working on a single Product, what best describes the Definition of Done? (choose the best answer)",
    options: [
      {
        id: "a",
        text: "Each Scrum Team defines and uses its own. The differences are discussed and reconciled during a hardening Sprint.",
      },
      {
        id: "b",
        text: "The Scrum Masters from each Scrum Team define a common Definition of Done.",
      },
      {
        id: "c",
        text: "Each Scrum Team uses its own, but must make their definition clear to all other teams so the differences are known.",
      },
      {
        id: "d",
        text: "All Scrum Teams must have a Definition of Done that makes their combined Increment valuable and useful.",
      },
    ],
    correctOptionId: "d",
  },

  {
    id: "q120",
    prompt:
      "During a Sprint, a Developer determines that the Scrum Team will not be able to complete the items in their forecast. Who should be present to review and adjust the Product Backlog Items selected? (choose the best answer)",
    options: [
      { id: "a", text: "The Product Owner and the Developers." },
      {
        id: "b",
        text: "The Scrum Master, the Project Manager, and the Developers.",
      },
      { id: "c", text: "The Product Owner and all Stakeholders." },
      { id: "d", text: "The Developers." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q121",
    prompt:
      "When should the Developers on a Scrum Team be replaced? (choose the best answer)",
    options: [
      {
        id: "a",
        text: "As needed, with no special allowance for changes in productivity.",
      },
      { id: "b", text: "Never, it reduces productivity." },
      {
        id: "c",
        text: "As needed, while taking into account a short-term reduction in productivity.",
      },
      { id: "d", text: "Every Sprint to promote shared learning." },
    ],
    correctOptionId: "c",
  },

  {
    id: "q122",
    prompt: "When is a Sprint over? (choose the best answer)",
    options: [
      {
        id: "a",
        text: "When all Product Backlog Items meet their Definition of Done.",
      },
      { id: "b", text: "When the timebox expires." },
      { id: "c", text: "When the Product Owner says it is done." },
      { id: "d", text: "When all the tasks are completed." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q123",
    prompt: "When does the next Sprint begin? (choose the best answer)",
    options: [
      { id: "a", text: "Immediately following the next Sprint Planning." },
      {
        id: "b",
        text: "Immediately after the conclusion of the previous Sprint.",
      },
      { id: "c", text: "When the Product Owner is ready." },
      { id: "d", text: "Next Monday." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q124",
    prompt:
      "What does it mean to say that an event has a timebox? (choose the best answer)",
    options: [
      { id: "a", text: "The event must happen at a set time." },
      {
        id: "b",
        text: "The event can take no more than a maximum amount of time.",
      },
      { id: "c", text: "The event must happen by a given time." },
      {
        id: "d",
        text: "The event must take at least a minimum amount of time.",
      },
    ],
    correctOptionId: "b",
  },

  {
    id: "q125",
    prompt:
      "Who is required to attend the Daily Scrum? (choose the best answer)",
    options: [
      { id: "a", text: "The Developers and Product Owner." },
      { id: "b", text: "The Developers." },
      { id: "c", text: "The Developers and Scrum Master." },
      { id: "d", text: "The Scrum Master and Product Owner." },
      { id: "e", text: "The Scrum Team." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q126",
    prompt:
      "When does a Developer become accountable for the value of a Product Backlog Item selected for the Sprint? (choose the best answer)",
    options: [
      { id: "a", text: "Whenever a team member can accommodate more work." },
      { id: "b", text: "At the Sprint Planning Event." },
      { id: "c", text: "During the Daily Scrum." },
      {
        id: "d",
        text: "Never. The entire Scrum Team is accountable for creating value every Sprint.",
      },
    ],
    correctOptionId: "d",
  },

  {
    id: "q127",
    prompt: "Who is on the Scrum Team? (choose the best three answers)",
    options: [
      { id: "a", text: "Project Manager." },
      { id: "b", text: "Developers." },
      { id: "c", text: "The Product Owner." },
      { id: "d", text: "The Scrum Master." },
    ],
    correctOptionId: "b,c,d",
  },

  {
    id: "q128",
    prompt:
      "Which of the following are examples of a Scrum Team practicing Scrum poorly or not exhibiting traits of a self-managing Scrum Team? (choose the best three answers)",
    options: [
      {
        id: "a",
        text: "The Developers have all the skills they need to create a valuable, useful Increment.",
      },
      {
        id: "b",
        text: "Stakeholders attend the Daily Scrum to check on the Scrum Team's progress.",
      },
      {
        id: "c",
        text: "The Developers create their own Sprint Backlog, reflecting all work that is required to meet the Definition of Done.",
      },
      {
        id: "d",
        text: "The Developers are collaboratively selecting their own work during the Sprint.",
      },
      {
        id: "e",
        text: "The Developers invite external Stakeholders to the Sprint Planning to ask them how to turn a Product Backlog Item into an Increment via a complete and detailed Sprint Backlog.",
      },
      {
        id: "f",
        text: "The Developers are working within the boundaries of their organizations functional description and nicely handing off work from analyst to Developer to Tester to integration.",
      },
    ],
    correctOptionId: "b,e,f",
  },

  {
    id: "q129",
    prompt: "The timebox for the Sprint Review is: (choose the best answer)",
    options: [
      { id: "a", text: "As long as needed." },
      { id: "b", text: "2 hours." },
      {
        id: "c",
        text: "4 hours for a monthly Sprint. For shorter Sprints it is usually shorter.",
      },
      { id: "d", text: "4 hours and longer as needed." },
      { id: "e", text: "1 day." },
    ],
    correctOptionId: "c",
  },

  {
    id: "q130",
    prompt:
      "The timebox for the Sprint Planning event is? (choose the best answer)",
    options: [
      {
        id: "a",
        text: "8 hours for a monthly Sprint. For shorter Sprints it is usually shorter.",
      },
      { id: "b", text: "4 hours." },
      { id: "c", text: "Whenever it is done." },
      { id: "d", text: "Monthly." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q131",
    prompt:
      "True or False: The purpose of a Sprint is to produce a valuable and useful Increment of working Product.",
    options: [
      { id: "a", text: "True." },
      { id: "b", text: "False." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q132",
    prompt:
      "An organization has decided to adopt Scrum, but Management wants to change the terminology to fit with terminology already used. What will likely happen if this is done? (choose the best answer)",
    options: [
      {
        id: "a",
        text: "Without a new vocabulary as a reminder of the change, very little change may actually happen.",
      },
      {
        id: "b",
        text: "The organization may not understand what has changed with Scrum and the benefits of Scrum may be lost.",
      },
      { id: "c", text: "Management may feel less anxious." },
      { id: "d", text: "All of the above." },
    ],
    correctOptionId: "d",
  },

  {
    id: "q133",
    prompt: "Who creates the Definition of Done? (choose the best answer)",
    options: [
      {
        id: "a",
        text: "The Scrum Team, in a collaborative effort where the result is the common denominator of all members' definitions.",
      },
      {
        id: "b",
        text: "The Scrum Master since they are responsible for the productivity of the Developers.",
      },
      {
        id: "c",
        text: "The Product Owner since they are responsible for the Product's success.",
      },
      {
        id: "d",
        text: "If it is not an organizational standard, the Scrum Team must create a Definition of Done appropriate for the Product.",
      },
    ],
    correctOptionId: "d",
  },

  {
    id: "q134",
    prompt:
      "Who is responsible for managing the progress of work during a Sprint? (choose the best answer)",
    options: [
      { id: "a", text: "The Developers." },
      { id: "b", text: "The most junior member of the team." },
      { id: "c", text: "The Scrum Master." },
      { id: "d", text: "The Product Owner." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q135",
    prompt:
      "Who has the final say on the order of the Product Backlog? (choose the best answer)",
    options: [
      { id: "a", text: "The Product Owner." },
      { id: "b", text: "The Stakeholders." },
      { id: "c", text: "The Scrum Master." },
      { id: "d", text: "The CEO." },
      { id: "e", text: "The Developers." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q136",
    prompt: "Which Scrum events are timeboxed? (choose the best three answers)",
    options: [
      { id: "a", text: "Release Retrospective." },
      { id: "b", text: "Sprint Planning." },
      { id: "c", text: "Sprint Testing." },
      { id: "d", text: "Refinement." },
      { id: "e", text: "Sprint Retrospective." },
      { id: "f", text: "Sprint Review." },
      { id: "g", text: "Release Testing." },
    ],
    correctOptionId: "b,e,f",
  },

  {
    id: "q137",
    prompt:
      "A Scrum Team consists of the following: (choose the best three answers)",
    options: [
      { id: "a", text: "Product Owner." },
      { id: "b", text: "Scrum Master." },
      { id: "c", text: "Customers." },
      { id: "d", text: "Users." },
      { id: "e", text: "Developers." },
    ],
    correctOptionId: "a,b,e",
  },

  {
    id: "q138",
    prompt:
      "When does a Developer become the sole owner of a Sprint Backlog item? (choose the best answer)",
    options: [
      { id: "a", text: "Whenever a team member can accommodate more work." },
      { id: "b", text: "During the Daily Scrum." },
      { id: "c", text: "At the Sprint Planning event." },
      {
        id: "d",
        text: 'Never. All Sprint Backlog items are "owned" by the Developers on the Scrum Team even though each item may be implemented by an individual Developer.',
      },
    ],
    correctOptionId: "d",
  },

  {
    id: "q139",
    prompt: "What is the role of Management in Scrum? (choose the best answer)",
    options: [
      {
        id: "a",
        text: "Support the Product Owner with insights and information into high value Product and system capabilities. Support the Scrum Master to cause organizational change that fosters empiricism, self-management, bottom-up intelligence, and intelligent Product delivery.",
      },
      {
        id: "b",
        text: "Continually monitor staffing levels of the Scrum Team.",
      },
      {
        id: "c",
        text: "Monitor the progress of the Developers on the Scrum Team.",
      },
      {
        id: "d",
        text: "Identify and remove people that are not working hard enough.",
      },
    ],
    correctOptionId: "a",
  },

  {
    id: "q140",
    prompt:
      "Why is the Daily Scrum held at the same time and same place? (choose the best answer)",
    options: [
      { id: "a", text: "The consistency reduces complexity." },
      { id: "b", text: "The place can be named." },
      { id: "c", text: "The Product Owner demands it." },
      {
        id: "d",
        text: "Rooms are hard to book and this lets it be booked in advance.",
      },
    ],
    correctOptionId: "a",
  },

  {
    id: "q141",
    prompt: "The length of a Sprint should be: (choose the best answer)",
    options: [
      {
        id: "a",
        text: "Short enough to keep the business risk acceptable to the Product Owner.",
      },
      {
        id: "b",
        text: "Short enough to be able to synchronize the development work with other business events.",
      },
      { id: "c", text: "One month or less." },
      { id: "d", text: "All of the above." },
    ],
    correctOptionId: "d",
  },

  {
    id: "q142",
    prompt:
      "How much work must the Developers complete for each Product Backlog Item they select for a Sprint? (choose the best answer)",
    options: [
      {
        id: "a",
        text: "Enough so that each Product Backlog Item they select meets the Definition of Done.",
      },
      {
        id: "b",
        text: "Analysis, design, programming, testing and documentation.",
      },
      { id: "c", text: "As much as it can fit into the Sprint." },
      { id: "d", text: "All development work and at least some testing." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q143",
    prompt:
      'The CEO asks the Developers to add a "very important" item to a Sprint that is in progress. What should the Developers do? (choose the best answer)',
    options: [
      {
        id: "a",
        text: "Add the item to the current Sprint and drop an item of equal size.",
      },
      {
        id: "b",
        text: "Inform the other members of the Scrum Team so the team can decide what to do.",
      },
      { id: "c", text: "Add the item to the next Sprint." },
      {
        id: "d",
        text: "Add the item to the current Sprint without any adjustments.",
      },
    ],
    correctOptionId: "b",
  },

  {
    id: "q144",
    prompt:
      "What is the recommended size for a Scrum Team? (choose the best answer)",
    options: [
      { id: "a", text: "Minimum of 7." },
      { id: "b", text: "9." },
      { id: "c", text: "Typically 10 or fewer people." },
      { id: "d", text: "7 plus or minus 2." },
    ],
    correctOptionId: "c",
  },

  {
    id: "q145",
    prompt:
      "Which statement best describes a Product Owner's responsibility? (choose the best answer)",
    options: [
      { id: "a", text: "Keep Stakeholders from distracting the Developers." },
      {
        id: "b",
        text: "Optimizing the value of the work the Scrum Team does.",
      },
      {
        id: "c",
        text: "Managing the project and ensuring that the work meets the commitments to the Stakeholders.",
      },
      { id: "d", text: "Directing the Developers." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q146",
    prompt:
      "True or False: 100% Code Coverage of tests guarantees bug-free Software.",
    options: [
      { id: "a", text: "True." },
      { id: "b", text: "False." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q147",
    prompt:
      "Who is responsible for monitoring the progress of work during a Sprint? Pick 1",
    options: [
      { id: "a", text: "Product Owner." },
      { id: "b", text: "Project Manager." },
      { id: "c", text: "Scrum Master." },
      { id: "d", text: "Developers." },
    ],
    correctOptionId: "d",
  },

  {
    id: "q148",
    prompt: "Who can tell the Developers what to work on?",
    options: [
      { id: "a", text: "The Product Owner." },
      { id: "b", text: "The COO, CEO and CTO." },
      { id: "c", text: "The Project Manager." },
      { id: "d", text: "The Scrum Master." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q149",
    prompt:
      "Who can do the work to ensure the Product Backlog is refined to a state that it is useful? Pick 2",
    options: [
      { id: "a", text: "The Product Owner." },
      { id: "b", text: "The Business Analyst." },
      { id: "c", text: "Stakeholders." },
      {
        id: "d",
        text: "The Developers, with support from the Product Owner who is still accountable for it.",
      },
    ],
    correctOptionId: "a,d",
  },

  {
    id: "q150",
    prompt: "SCRUM stands for:",
    options: [
      { id: "a", text: "Super Creative Really Useful Method." },
      {
        id: "b",
        text: "Self Organising Collaborative & Reflective Universal Method.",
      },
      { id: "c", text: "Safe Controlled Response Under Management." },
      { id: "d", text: "Nothing. Its not an acronym." },
    ],
    correctOptionId: "d",
  },

  {
    id: "q151",
    prompt: "Who manages the Sprint Backlog?",
    options: [
      { id: "a", text: "The Scrum Master." },
      { id: "b", text: "The Product Owner." },
      { id: "c", text: "The Developers." },
      { id: "d", text: "The Scrum Team." },
    ],
    correctOptionId: "c",
  },

  {
    id: "q152",
    prompt: "Which statement best describes a cross-functional team? Pick 1",
    options: [
      { id: "a", text: "The team has a good mix of skills." },
      {
        id: "b",
        text: "All members of the team have all the skills required to create the Product.",
      },
      {
        id: "c",
        text: "The team has all competencies needed to accomplish the work.",
      },
    ],
    correctOptionId: "c",
  },

  {
    id: "q153",
    prompt: "Bugs discovered out of Sprint should be:",
    options: [
      {
        id: "a",
        text: "Investigated and fixed immediately by the Developers.",
      },
      {
        id: "b",
        text: "Reviewed with the Product Owner and added to the Product Backlog.",
      },
    ],
    correctOptionId: "b",
  },

  {
    id: "q154",
    prompt:
      "When could a release to Production occur if a Scrum Team produced a Done increment multiple times each day? (select all that apply)",
    options: [
      { id: "a", text: "Mid Sprint." },
      { id: "b", text: "Every Sprint." },
      { id: "c", text: "Multiple times per day." },
      { id: "d", text: "Every Day." },
    ],
    correctOptionId: "a,b,c,d",
  },

  {
    id: "q155",
    prompt:
      "True or False: The Definition of Done is a mandatory part of Scrum.",
    options: [
      { id: "a", text: "False." },
      { id: "b", text: "True." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q156",
    prompt:
      "Who may be best positioned to decide who will be the Scrum Master for a new Scrum Team?",
    options: [
      { id: "a", text: "The Developers." },
      { id: "b", text: "The Product Owner." },
      { id: "c", text: "The Developers and the Product Owner." },
      { id: "d", text: "Stakeholders." },
    ],
    correctOptionId: "c",
  },

  {
    id: "q157",
    prompt: "True or False: A Scrum Team must be 10 or fewer people.",
    options: [
      { id: "a", text: "True." },
      { id: "b", text: "False." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q158",
    prompt:
      "Continuous Integration (CI) provides the following advantages: (select all that apply)",
    options: [
      {
        id: "a",
        text: "Less back-tracking to discover where things went wrong, so you can spend more time building features.",
      },
      { id: "b", text: "Allows teams to detect problems early." },
      { id: "c", text: "Automatically eliminates all integration issues." },
      {
        id: "d",
        text: "Stop waiting to find out if your code's going to work.",
      },
    ],
    correctOptionId: "a,b,d",
  },

  {
    id: "q159",
    prompt: "Sizing is best when: (select all that apply)",
    options: [
      {
        id: "a",
        text: "It is done by the actual Developers who will carry out the work.",
      },
      { id: "b", text: "It is done by a group, rather than an individual." },
      { id: "c", text: "Estimates are made relative to similar things." },
      { id: "d", text: "It is done by the Lead Developer alone." },
    ],
    correctOptionId: "a,b,c",
  },

  {
    id: "q160",
    prompt: "Select the correct timebox for each Scrum event.",
    options: [
      {
        id: "a",
        text: "Sprint Planning - 8 hours or less, Daily Scrum - 30 minutes or less, Sprint Review - 4 hours or less, Sprint Retrospective - 3 hours or less.",
      },
      {
        id: "b",
        text: "Sprint Planning - 4 hours or less, Daily Scrum - 15 minutes or less, Sprint Review - 8 hours or less, Sprint Retrospective - 4 hours or less.",
      },
      {
        id: "c",
        text: "Sprint Planning - 4 hours or less, Daily Scrum - 15 minutes or less, Sprint Review - 4 hours or less, Sprint Retrospective - 4 hours or less.",
      },
      {
        id: "d",
        text: "Sprint Planning - 8 hours or less, Daily Scrum - 15 minutes or less, Sprint Review - 4 hours or less, Sprint Retrospective - 3 hours or less.",
      },
    ],
    correctOptionId: "d",
  },

  {
    id: "q161",
    prompt: "True or False: Planning Poker must be used by Scrum Teams.",
    options: [
      { id: "a", text: "False." },
      { id: "b", text: "True." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q162",
    prompt: "What is Test Driven Development?",
    options: [
      { id: "a", text: "Appointing the QA Tester as the Lead Developer." },
      {
        id: "b",
        text: "The practice of writing Unit Tests prior to writing the implementation code.",
      },
      { id: "c", text: "Integrating Testers and Developers." },
      { id: "d", text: "The process of motivating Testers." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q163",
    prompt:
      "True or False: Tasks in a Sprint Backlog must be estimated in days/hours.",
    options: [
      { id: "a", text: "True." },
      { id: "b", text: "False." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q164",
    prompt: "Who is responsible for testing in Scrum?",
    options: [
      { id: "a", text: "The Product Owner." },
      { id: "b", text: "The Developers." },
      { id: "c", text: "Stakeholders." },
      { id: "d", text: "The Scrum Master." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q165",
    prompt: "Bugs discovered in Sprint should be:",
    options: [
      { id: "a", text: "Fixed immediately." },
      { id: "b", text: "Ignored if not created by me." },
      { id: "c", text: "Send to the Junior Developer to fix." },
      {
        id: "d",
        text: "Added to the bug tracking repository and left for a later Sprint.",
      },
    ],
    correctOptionId: "a",
  },

  {
    id: "q166",
    prompt:
      "True or False: YAGNI states that most systems work best if they are kept simple rather than made complicated.",
    options: [
      { id: "a", text: "False." },
      { id: "b", text: "True." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q167",
    prompt: "Which one is a Scrum Value? (pick all that apply)",
    options: [
      { id: "a", text: "Focus." },
      { id: "b", text: "Commitment." },
      { id: "c", text: "Courage." },
      { id: "d", text: "Creativity." },
      { id: "e", text: "Accountability." },
    ],
    correctOptionId: "a,b,c",
  },

  {
    id: "q168",
    prompt:
      "What is NOT the name of the original program in source control from which branches are taken?",
    options: [
      { id: "a", text: "Mainline." },
      { id: "b", text: "Feature." },
      { id: "c", text: "Trunk." },
      { id: "d", text: "Master." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q169",
    prompt: "What is the Static Analysis?",
    options: [
      {
        id: "a",
        text: "Analysis performed on code in a non-runtime environment.",
      },
      { id: "b", text: "Analysis performed on Software at runtime." },
      { id: "c", text: "Duties of a Business Analyst." },
      { id: "d", text: "Checking static classes' readability." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q170",
    prompt: "Which one is true about Black-box testing? (pick all that apply)",
    options: [
      {
        id: "a",
        text: "Tester can see inside the component or system under test.",
      },
      {
        id: "b",
        text: "Tests that are done can be either functional or non-functional.",
      },
      {
        id: "c",
        text: "The internal structure of the item being tested is known to the Tester.",
      },
      {
        id: "d",
        text: "Tester cannot see inside the component or system under test.",
      },
      {
        id: "e",
        text: "The internal structure of the item being tested is not known to the Tester.",
      },
    ],
    correctOptionId: "b,d,e",
  },

  {
    id: "q171",
    prompt: "Which expression is NOT used for KISS principle?",
    options: [
      { id: "a", text: "Keep it simple, silly." },
      { id: "b", text: "Keep it safe and same." },
      { id: "c", text: "Keep it small and simple." },
      { id: "d", text: "Keep it simple stupid." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q172",
    prompt: "What shapes can be an Architecture Spike? (pick all that apply)",
    options: [
      { id: "a", text: "A prototype which will be thrown away." },
      { id: "b", text: "A comprehensive architecture implementation." },
      { id: "c", text: "A quick and dirty implementation." },
      {
        id: "d",
        text: "A plan for all required architectures of the Product.",
      },
    ],
    correctOptionId: "a,c",
  },

  {
    id: "q173",
    prompt: "What does cross-functionality mean in a Scrum Team?",
    options: [
      {
        id: "a",
        text: "Each Developer who has a special skill and works with all Scrum Teams of the organization is cross-functional.",
      },
      {
        id: "b",
        text: "The Developers should collaborate with all other functional departments of the organization.",
      },
      {
        id: "c",
        text: "The Developers should have all required skills to create potentially releasable Increments without any dependency to others outside the team.",
      },
      {
        id: "d",
        text: "Each Developers member should have all required skills to create potentially releasable Increments without any dependency to others outside the team.",
      },
    ],
    correctOptionId: "c",
  },

  {
    id: "q174",
    prompt:
      "What is the proper reaction of the Developers in the middle of the Sprint when they found they have over committed?",
    options: [
      {
        id: "a",
        text: "They should ask the Product Owner to cancel the Sprint.",
      },
      { id: "b", text: "They extend the Sprint duration." },
      { id: "c", text: "They can add new team members to the team." },
      {
        id: "d",
        text: "They negotiate with the Product Owner about the scope of the Sprint Backlog Items.",
      },
    ],
    correctOptionId: "d",
  },

  {
    id: "q175",
    prompt: "What is the Sprint Planning time-box for two-week Sprints?",
    options: [
      { id: "a", text: "Usually 2 hours." },
      { id: "b", text: "Usually 8 hours." },
      { id: "c", text: "Usually 6 hours." },
      { id: "d", text: "Usually 4 hours." },
    ],
    correctOptionId: "d",
  },

  {
    id: "q176",
    prompt: "Which one is true?",
    options: [
      {
        id: "a",
        text: "There is no assignment for both Sprint Backlog elements.",
      },
      {
        id: "b",
        text: "The team can assign a task to a Team member with consensus.",
      },
      { id: "c", text: "The team should assign both Sprint Backlog elements." },
      {
        id: "d",
        text: "The team assigns a Sprint Backlog Item to a Team member.",
      },
    ],
    correctOptionId: "b",
  },

  {
    id: "q177",
    prompt:
      "True or False: Through Depth of Inheritance metric, a low number for depth implies less complexity but also the possibility of less code reuse through inheritance.",
    options: [
      { id: "a", text: "False." },
      { id: "b", text: "True." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q178",
    prompt: "Who is responsible for writing tests in a Scrum Team?",
    options: [
      { id: "a", text: "The Developers." },
      { id: "b", text: "The programmer." },
      { id: "c", text: "The QA specialist." },
      { id: "d", text: "The Tester." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q179",
    prompt: "Who are the participants of the Daily Scrum?",
    options: [
      { id: "a", text: "The Developers and the Scrum Master." },
      { id: "b", text: "The Developers and the Product Owner." },
      { id: "c", text: "The Scrum Team." },
      { id: "d", text: "The Developers." },
    ],
    correctOptionId: "d",
  },

  {
    id: "q180",
    prompt: "Which concept has interactive attribute?",
    options: [
      { id: "a", text: "Sketch." },
      { id: "b", text: "Mockup." },
      { id: "c", text: "Wireframe." },
      { id: "d", text: "Prototype." },
    ],
    correctOptionId: "d",
  },

  {
    id: "q181",
    prompt: "Who is responsible for the documentation?",
    options: [
      { id: "a", text: "Developers." },
      { id: "b", text: "Tech Lead." },
      { id: "c", text: "Document Writer." },
      { id: "d", text: "Scrum Master." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q182",
    prompt:
      "True or False: Afferent Coupling measures the number of classes on which a given class depends.",
    options: [
      { id: "a", text: "False." },
      { id: "b", text: "True." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q183",
    prompt: "Which concerns are most important in the scaled Scrum? Pick 2",
    options: [
      { id: "a", text: "Minimizing or removing dependencies between teams." },
      {
        id: "b",
        text: "Creating an integrated releasable Increment at the end of each Sprint.",
      },
      { id: "c", text: "Having same Sprint duration for all teams." },
      { id: "d", text: "Increasing all team members utilization." },
    ],
    correctOptionId: "a,b",
  },

  {
    id: "q184",
    prompt: "Who makes the decision for the architecture in a Scrum Team?",
    options: [
      { id: "a", text: "Tech Lead." },
      { id: "b", text: "Developers." },
      { id: "c", text: "Chief Architect." },
      { id: "d", text: "CTO (Chief Technology Officer)." },
      { id: "e", text: "Scrum Master." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q185",
    prompt:
      "How much time does the Product Owner should consume for the Product Backlog Refinement?",
    options: [
      { id: "a", text: "No more than 10%." },
      { id: "b", text: "No more than 20%." },
      { id: "c", text: "It is not the Product Owner responsibility." },
      { id: "d", text: "Any time that the Product Owner needs." },
    ],
    correctOptionId: "d",
  },

  {
    id: "q186",
    prompt: "Which one is a Scrum Team role? (pick all that apply)",
    options: [
      { id: "a", text: "The Product Owner." },
      { id: "b", text: "The Project Manager." },
      { id: "c", text: "The Scrum Master." },
      { id: "d", text: "The Developers." },
    ],
    correctOptionId: "a,c,d",
  },

  {
    id: "q187",
    prompt: "Which one is NOT a Test Double?",
    options: [
      { id: "a", text: "Two combined Unit Tests." },
      { id: "b", text: "Test Spy." },
      { id: "c", text: "Test Stub." },
      { id: "d", text: "Mock Object." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q188",
    prompt: "Which is true about Refactoring?",
    options: [
      { id: "a", text: "Through it internal structure of code is altered." },
      {
        id: "b",
        text: "Its results are improved maintainability, code readability and reduced complexity.",
      },
      {
        id: "c",
        text: "There should be special and distinct Sprints called “Refactoring Sprint” to do Refactoring with focus every a few Sprints.",
      },
      { id: "d", text: "Through it external behavior of code is altered." },
    ],
    correctOptionId: "a,b",
  },

  {
    id: "q189",
    prompt: "When the Product Owner can see the Developers work?",
    options: [
      { id: "a", text: "Just at the Sprint Review." },
      { id: "b", text: "Whenever the Developers are ready." },
      { id: "c", text: "Anytime the Product Owner asks." },
      {
        id: "d",
        text: "When the Tech Lead allows the Developers to show their work.",
      },
    ],
    correctOptionId: "c",
  },

  {
    id: "q190",
    prompt: "What are the most important things for increasing transparency?",
    options: [
      { id: "a", text: "Using chat tools to have the best communication." },
      { id: "b", text: "Having a Definition of Done." },
      { id: "c", text: "Having a common language." },
      { id: "d", text: "Having a comprehensive documentation." },
    ],
    correctOptionId: "b,c",
  },

  {
    id: "q191",
    prompt: "What is the ATDD?",
    options: [
      {
        id: "a",
        text: "Using Acceptance Tests to define requirements specified by the customer and market.",
      },
      {
        id: "b",
        text: "Using advanced Integration Test to develop quality Product.",
      },
      { id: "c", text: "Using approved tests by Product Owner in TDD." },
      {
        id: "d",
        text: "Using Unit Tests to define requirements specified by the customer and market.",
      },
    ],
    correctOptionId: "a",
  },

  {
    id: "q192",
    prompt: "In Software Development, which acronym is NOT true?",
    options: [
      { id: "a", text: "LOC: Lines of Code." },
      { id: "b", text: "CBO: Coupling Between Objects." },
      { id: "c", text: "DIT: Depth of Inheritance Tree." },
      { id: "d", text: "SLOC: Sample Lines of Code." },
    ],
    correctOptionId: "d",
  },

  {
    id: "q193",
    prompt: "Where does Smoke testing originate from?",
    options: [
      {
        id: "a",
        text: "Comes from a comprehensive type of hardware testing in which a device passes the test if it does not catch fire during a sample long time run.",
      },
      {
        id: "b",
        text: "Comes from a basic type of hardware testing in which a device passes the test if it does not catch fire during a sample long time run.",
      },
      {
        id: "c",
        text: "Comes from a basic type of hardware testing in which a device passes the test if it does not catch fire the first time it turns on.",
      },
      {
        id: "d",
        text: "Comes from a comprehensive type of hardware testing in which a device passes the test if it does not catch fire the first time it turns on.",
      },
    ],
    correctOptionId: "c",
  },

  {
    id: "q194",
    prompt: "What is the goal of the Continuous Integration?",
    options: [
      { id: "a", text: "To publish the Product Increment on Production." },
      { id: "b", text: "To penalize the Developer who breaks the build." },
      { id: "c", text: "To provide rapid feedback of build and test result." },
      { id: "d", text: "To find who has made the change on source control." },
    ],
    correctOptionId: "c",
  },

  {
    id: "q195",
    prompt:
      "What kind of activity can be done in the Product Backlog Refinement?",
    options: [
      { id: "a", text: "Adding detail to the items." },
      { id: "b", text: "Ordering." },
      { id: "c", text: "Design." },
      { id: "d", text: "Develop." },
    ],
    correctOptionId: "a,b",
  },

  {
    id: "q196",
    prompt: "What is the recommended size of the Scrum Team?",
    options: [
      { id: "a", text: "10 or fewer people." },
      { id: "b", text: "5 ± 4." },
      { id: "c", text: "6 ± 3." },
      { id: "d", text: "9 ± 3." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q197",
    prompt: "What are the duties of the Developers in a Scrum Team?",
    options: [
      { id: "a", text: "Removing impediments." },
      { id: "b", text: "Making technical decisions." },
      { id: "c", text: "Resolving team internal conflicts." },
      { id: "d", text: "Assigning value to the Product Backlog Items." },
    ],
    correctOptionId: "b,d",
  },

  {
    id: "q198",
    prompt: "Which one is true about the scaled Scrum? Pick 2",
    options: [
      {
        id: "a",
        text: "The scaled Scrum does not add or change anything in Scrum framework.",
      },
      { id: "b", text: "It is based on the Scrum framework." },
      { id: "c", text: "It uses Scrum parts as its building blocks." },
      {
        id: "d",
        text: "Through scaled Scrum Teams work on multiple Products.",
      },
    ],
    correctOptionId: "b,c",
  },

  {
    id: "q199",
    prompt:
      "Which factors should be considered to determine the Sprint length? (pick all that apply)",
    options: [
      { id: "a", text: "Market change speed." },
      { id: "b", text: "Raising complexity speed." },
      { id: "c", text: "Amount of the risk." },
      { id: "d", text: "Cost of risk." },
    ],
    correctOptionId: "a,b,c,d",
  },

  {
    id: "q200",
    prompt:
      "True or False: One of the outcomes of using TDD is creating an automated Regression Test suite.",
    options: [
      { id: "a", text: "False." },
      { id: "b", text: "True." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q201",
    prompt: "Which work can be done between two Sprints?",
    options: [
      {
        id: "a",
        text: "Nothing. There is no special time between two Sprints.",
      },
      { id: "b", text: "Resolving some important bugs." },
      { id: "c", text: "Preparing Product Backlog Items for the next Sprint." },
      {
        id: "d",
        text: "Thinking about architectural concerns of the next Sprint.",
      },
    ],
    correctOptionId: "a",
  },

  {
    id: "q202",
    prompt: "How often does the Sprint Planning should be conducted?",
    options: [
      { id: "a", text: "Once a Release." },
      { id: "b", text: "Each time that the Product Owner decides." },
      { id: "c", text: "In the middle of each Sprint." },
      { id: "d", text: "Once a Sprint." },
    ],
    correctOptionId: "d",
  },

  {
    id: "q203",
    prompt:
      "True or False: Creating a done and potentially releasable Increment is the purpose of each Sprint.",
    options: [
      { id: "a", text: "False." },
      { id: "b", text: "True." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q204",
    prompt: "Which is NOT true about Lines of Code metric?",
    options: [
      {
        id: "a",
        text: "A high count might indicate that a type or method is doing too much work.",
      },
      {
        id: "b",
        text: "A high count might be a warning that code will be hard to maintain.",
      },
      { id: "c", text: "It isn't a Code Quality metric." },
      { id: "d", text: "It is explained via percentage." },
    ],
    correctOptionId: "d",
  },

  {
    id: "q205",
    prompt: "What does Code Coverage mean?",
    options: [
      {
        id: "a",
        text: "The degree of a source code which is executed or exercised by a test suite.",
      },
      {
        id: "b",
        text: "The number of Unit Tests which have passed through a test suite run.",
      },
      {
        id: "c",
        text: "The amount of codes which is covered in a source control.",
      },
      {
        id: "d",
        text: "The number of Unit Tests which have failed through a test suite run.",
      },
    ],
    correctOptionId: "a",
  },

  {
    id: "q206",
    prompt:
      "Who are responsible for monitoring the progress over the Project and Sprint?",
    options: [
      {
        id: "a",
        text: "Project Progress: the Product Owner, Sprint Progress: the Developers.",
      },
      {
        id: "b",
        text: "Project Progress: the Scrum Master, Sprint Progress: the Developers.",
      },
      {
        id: "c",
        text: "Project Progress: the Developers, Sprint Progress: the Product Owner.",
      },
      {
        id: "d",
        text: "Project Progress: the Product Owner, Sprint Progress: the Scrum Master.",
      },
    ],
    correctOptionId: "a",
  },

  {
    id: "q207",
    prompt: "Which is true about Strategic Debt in Technical Debt context?",
    options: [
      {
        id: "a",
        text: "Debt caused to gain strategic benefits (such as time to market).",
      },
      {
        id: "b",
        text: "This is typically caused by lack of awareness or knowledge.",
      },
      {
        id: "c",
        text: "Short-time gains, for instance cutting some corners to make an extra release for increased customer satisfaction.",
      },
    ],
    correctOptionId: "a",
  },

  {
    id: "q208",
    prompt: "Which one is a code metric? (pick all that apply)",
    options: [
      { id: "a", text: "Code Coverage." },
      { id: "b", text: "Lines of Code." },
      { id: "c", text: "Automated Build." },
      { id: "d", text: "Test Doubles." },
      { id: "e", text: "Class Coupling." },
    ],
    correctOptionId: "b,e",
  },

  {
    id: "q209",
    prompt: "What are the outputs of the Sprint Planning?",
    options: [
      { id: "a", text: "The Increment." },
      { id: "b", text: "The Release Plan." },
      { id: "c", text: "The Sprint Backlog." },
      { id: "d", text: "The Sprint Goal." },
    ],
    correctOptionId: "c,d",
  },

  {
    id: "q210",
    prompt:
      "True or False: Dependency Inversion principle implies that entities must depend on abstractions not on concretions.",
    options: [
      { id: "a", text: "False." },
      { id: "b", text: "True." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q211",
    prompt:
      "What will happen for the undone Sprint Backlog Items at the end of the Sprint?",
    options: [
      { id: "a", text: "Extend the Sprint to finish them." },
      { id: "b", text: "Move back to the bottom of the Product Backlog." },
      { id: "c", text: "Re-estimate and move back to the Product Backlog." },
      { id: "d", text: "Directly move to the next Sprint." },
    ],
    correctOptionId: "c",
  },

  {
    id: "q212",
    prompt:
      "What the Developers should do when the CEO assign them an unplanned work in the middle of the Sprint?",
    options: [
      { id: "a", text: "Inform the Scrum Master to work with his/her." },
      { id: "b", text: "Reject it because they are independent." },
      {
        id: "c",
        text: "Accept it because the CEO is the highest rank in the organization.",
      },
      { id: "d", text: "Inform the Product Owner to work with his/her." },
    ],
    correctOptionId: "d",
  },

  {
    id: "q213",
    prompt:
      "When the Developers can change their practices, tools or techniques?",
    options: [
      { id: "a", text: "Whenever needed." },
      { id: "b", text: "At the end of each release." },
      { id: "c", text: "At the beginning of the project." },
      { id: "d", text: "At the end of each Sprint." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q214",
    prompt: "How many Definition of Done should be used in scaled Scrum?",
    options: [
      {
        id: "a",
        text: "They can have a separate Definition of Done for each team as long as they do not violate each other.",
      },
      {
        id: "b",
        text: "Each team should have a separated Definition of Done.",
      },
      { id: "c", text: "All teams should have one Definition of Done." },
      {
        id: "d",
        text: "All teams can have one common Definition of Done as long as they can create a unique integrated Increment.",
      },
    ],
    correctOptionId: "c,d",
  },

  {
    id: "q215",
    prompt: "Which two of the followings are synonyms of TDD?",
    options: [
      { id: "a", text: "Domain Driven Design." },
      { id: "b", text: "Red-Green-Refactor." },
      { id: "c", text: "Test First Development (TFD)." },
      { id: "d", text: "Continuous Deployment." },
    ],
    correctOptionId: "b,c",
  },

  {
    id: "q216",
    prompt: "When tests should be added in the development process?",
    options: [
      { id: "a", text: "At the end of each release." },
      { id: "b", text: "From the beginning of the project." },
      { id: "c", text: "At the end each Sprint." },
      { id: "d", text: "In special Sprints called “Test Sprint”." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q217",
    prompt: "Which language is usually used in BDD?",
    options: [
      { id: "a", text: "Ubiquitous language." },
      { id: "b", text: "Tongue language." },
      { id: "c", text: "Technical language." },
      { id: "d", text: "Native language." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q218",
    prompt:
      "Which of the followings are characteristics of a good bug report? (pick all that apply)",
    options: [
      { id: "a", text: "Impacted related requirement." },
      { id: "b", text: "Version and build of the Software under test." },
      { id: "c", text: "The severity of the defect." },
      { id: "d", text: "Expected results and observed results." },
    ],
    correctOptionId: "b,c,d",
  },

  {
    id: "q219",
    prompt: "Who creates the Sprint Backlog?",
    options: [
      { id: "a", text: "The Scrum Master." },
      { id: "b", text: "The Product Owner." },
      { id: "c", text: "The Scrum Team." },
      { id: "d", text: "The Developers." },
    ],
    correctOptionId: "d",
  },

  {
    id: "q220",
    prompt: "When is a feature done?",
    options: [
      { id: "a", text: "When it is potentially releasable and shippable." },
      { id: "b", text: "When the Product Owner approves it." },
      { id: "c", text: "When the customer accepts it." },
      { id: "d", text: "When the Scrum Master approves it." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q221",
    prompt:
      "True or False: The Developers have immediately resolved a bug, which is found in the current Sprint and belongs to an Increment that has already been delivered to the market. Is it a proper behavior?",
    options: [
      { id: "a", text: "False." },
      { id: "b", text: "True." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q222",
    prompt: "Why mock objects are used in Unit Tests? Pick 3",
    options: [
      { id: "a", text: "To simulate the behavior of a given object." },
      { id: "b", text: "To isolate system under test for controlled testing." },
      { id: "c", text: "To cope with dependencies." },
      { id: "d", text: "TDD can be done just by having mock objects." },
    ],
    correctOptionId: "a,b,c",
  },

  {
    id: "q223",
    prompt:
      "What is the usual comparison of Product Backlog Items average size in the Product Backlog and Sprint Backlog?",
    options: [
      {
        id: "a",
        text: "Product Backlog Items in the Product Backlog are usually smaller than the Sprint Backlog.",
      },
      {
        id: "b",
        text: "Product Backlog Items in the Product Backlog are usually larger than the Sprint Backlog.",
      },
      {
        id: "c",
        text: "Product Backlog Items usually have the same size in both the Product Backlog and the Sprint Backlog.",
      },
      { id: "d", text: "Such a comparison does not make sense." },
    ],
    correctOptionId: "d",
  },

  {
    id: "q224",
    prompt: "Which is NOT true about Efferent Coupling?",
    options: [
      {
        id: "a",
        text: "Classes with high efferent will affect other classes when changes are made.",
      },
      {
        id: "b",
        text: "A large Efferent Coupling can indicate that a class is unfocused and may also indicate that it is unstable since it depends on the stability of all the types to which it is coupled.",
      },
      {
        id: "c",
        text: "Classes with high Efferent Coupling will receive the effects of changes or defects in other classes.",
      },
      { id: "d", text: "It is a Code Quality metric." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q225",
    prompt:
      "What is the instability index metric calculation formula? (Ca: Afferent Coupling, Ce: Efferent Coupling)",
    options: [
      { id: "a", text: "Ca / (Ca+Ce)." },
      { id: "b", text: "Ce / (Ca+Ce)." },
      { id: "c", text: "(Ca+Ce) / Ce." },
      { id: "d", text: "(Ca+Ce) / Ca." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q226",
    prompt: "Which is true about the Sprint Backlog?",
    options: [
      {
        id: "a",
        text: "It is a list of selected Product Backlog Items that the Developers have committed for the Sprint.",
      },
      {
        id: "b",
        text: "It contains all Product Backlog Items and requirements that could be implemented for the project.",
      },
      { id: "c", text: "It is created one Sprint ahead the current Sprint." },
      {
        id: "d",
        text: "It is a plan for the Developers to realize the Sprint Goal.",
      },
    ],
    correctOptionId: "d",
  },

  {
    id: "q227",
    prompt:
      "Which one is true about Definition of Done and Acceptance Criteria? (pick all that apply)",
    options: [
      {
        id: "a",
        text: "Acceptance Criteria should be passed for a feature in order to be called as complete and done.",
      },
      {
        id: "b",
        text: "Acceptance Criteria should be passed to ensure that a feature is working as expected.",
      },
      {
        id: "c",
        text: "Definition of Done should be applied to a feature in order to be called as complete.",
      },
      { id: "d", text: "There are many Acceptance Criteria in a Product." },
      {
        id: "e",
        text: "There are many Definition of Done in a Product and a Scrum Team.",
      },
    ],
    correctOptionId: "a,b,c",
  },

  {
    id: "q228",
    prompt: "Which principle is included in SOLID? (pick all that apply)",
    options: [
      { id: "a", text: "Liskov Substitution Principle." },
      { id: "b", text: "Dual Interface Principle." },
      { id: "c", text: "Single Responsibility Principle." },
      { id: "d", text: "Open-Closed Principle." },
      { id: "e", text: "Interface Segregation Principle." },
    ],
    correctOptionId: "a,c,d,e",
  },

  {
    id: "q229",
    prompt:
      "True or False: In an impediment case, the Scrum Master can intervene to help the Developers to remove a member from the Developers.",
    options: [
      { id: "a", text: "False." },
      { id: "b", text: "True." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q230",
    prompt: "Which one is true about the Daily Scrum? Pick 3",
    options: [
      { id: "a", text: "It is a feedback loop." },
      { id: "b", text: "All Scrum Team members should participate in it." },
      {
        id: "c",
        text: "The Developers monitors Sprint progress toward the Sprint Goal.",
      },
      { id: "d", text: "It is a 15 minutes time-box event." },
    ],
    correctOptionId: "a,c,d",
  },

  {
    id: "q231",
    prompt:
      "What are traits of a high performance Scrum Team? (pick all that apply)",
    options: [
      { id: "a", text: "They live the Scrum Values deeply." },
      { id: "b", text: "They help their customers become more successful." },
      {
        id: "c",
        text: "They evolve the Definition of Done over time and add more stringent criteria to it continuously.",
      },
      {
        id: "d",
        text: "There is a high level of creativity, productivity and accountability in the Team dynamics.",
      },
      {
        id: "e",
        text: "They respect top managers through accepting their work every time.",
      },
    ],
    correctOptionId: "a,b,c,d",
  },

  {
    id: "q232",
    prompt:
      "Who knows best about how to create usable and releasable Increments?",
    options: [
      { id: "a", text: "The Developers." },
      { id: "b", text: "The Scrum Master." },
      { id: "c", text: "The Technical Manager." },
      { id: "d", text: "The Product Owner." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q233",
    prompt:
      "True or False: Interface Segregation principle implies that a client should never be forced to implement an interface that it doesn't use.",
    options: [
      { id: "a", text: "False." },
      { id: "b", text: "True." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q234",
    prompt:
      "Who is responsible for the Product Backlog Items and tasks estimation in Scrum?",
    options: [
      { id: "a", text: "The Product Owner." },
      { id: "b", text: "The Scrum Master." },
      { id: "c", text: "The Project Manager." },
      { id: "d", text: "The Developers." },
    ],
    correctOptionId: "d",
  },

  {
    id: "q235",
    prompt: "How do the Developers divide into multiple teams in scaled Scrum?",
    options: [
      { id: "a", text: "The top Management divides them." },
      { id: "b", text: "The Developers divide themselves." },
      { id: "c", text: "The Product Owner divides them." },
      { id: "d", text: "The Scrum Master divides them." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q236",
    prompt:
      "What should the Developers do when there is no standard contract to create a releasable Product?",
    options: [
      { id: "a", text: "Ask the Product Owner to make a Definition of Done." },
      { id: "b", text: "Ask Project Manager to help them." },
      { id: "c", text: "Define a list of satisfactory tests for each PBI." },
      { id: "d", text: "The Developers should define a Definition of Done." },
    ],
    correctOptionId: "d",
  },

  {
    id: "q237",
    prompt:
      "True or False: Through the Sprint Review, the Scrum Team tries to hand-off the Increment to the Customer formally.",
    options: [
      { id: "a", text: "False." },
      { id: "b", text: "True." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q238",
    prompt:
      "Which Scrum Values are adhered by not building Product Backlog Items that have low business value? Pick 3",
    options: [
      { id: "a", text: "Courage." },
      { id: "b", text: "Respect." },
      { id: "c", text: "Focus." },
      { id: "d", text: "Transparency." },
      { id: "e", text: "Adaptation." },
    ],
    correctOptionId: "a,b,c",
  },

  {
    id: "q239",
    prompt: "Which one is true about Design Patterns?",
    options: [
      {
        id: "a",
        text: "Is a general, reusable solution to a commonly occurring problem within a given context in Software Design.",
      },
      {
        id: "b",
        text: "Is a low-fidelity UI pattern that can be called sketch.",
      },
      {
        id: "c",
        text: "Is a list of guidelines to design better UX for customers.",
      },
      {
        id: "d",
        text: "Is a high-fidelity UI pattern that can be called prototype.",
      },
    ],
    correctOptionId: "a",
  },

  {
    id: "q240",
    prompt:
      "Which Scrum events can use more time rather than their time-box if there are 9 Developers (the maximum Developers size) in the Team?",
    options: [
      { id: "a", text: "The Daily Scrum." },
      { id: "b", text: "The Sprint Retrospective." },
      { id: "c", text: "No one." },
      { id: "d", text: "The Sprint Review." },
    ],
    correctOptionId: "c",
  },

  {
    id: "q241",
    prompt: "Product Backlog Items are refined by:",
    options: [
      { id: "a", text: "The Business Analyst and the Product Owner." },
      { id: "b", text: "The Developers." },
      { id: "c", text: "The Developers and the Product Owner." },
      { id: "d", text: "The Product Owner solely." },
    ],
    correctOptionId: "c",
  },

  {
    id: "q242",
    prompt:
      "Select the desirable characteristics of a Unit Test. (choose the best four answers)",
    options: [
      {
        id: "a",
        text: "Code in each test is as small as possible while maintaining readability of the code.",
      },
      { id: "b", text: "Each test is independent of other Unit Tests." },
      {
        id: "c",
        text: "Each test makes assertions about only one logical concept.",
      },
      { id: "d", text: "The test executes fast." },
      { id: "e", text: "They exercise the persistence layer of a solution." },
    ],
    correctOptionId: "a,b,c,d",
  },

  {
    id: "q243",
    prompt:
      "Should User Stories be part of the documentation generated by a Scrum project?",
    options: [
      { id: "a", text: "Always." },
      { id: "b", text: "If the Architect requires it." },
      { id: "c", text: "If they are part of the Definition of Done." },
      { id: "d", text: "Never." },
      {
        id: "e",
        text: "They must be provided to the Developers as part of the user specifications documents.",
      },
    ],
    correctOptionId: "c",
  },

  {
    id: "q244",
    prompt:
      "The Definition of Done describes the work that must be completed for every Product Backlog Item before it can be deemed releasable. What should the Developers do when, during the Sprint, it finds out that a problem outside of their control blocks them from doing all this work?",
    options: [
      { id: "a", text: "Cancel the Sprint." },
      {
        id: "b",
        text: 'Complete the work that can be done on as much scope as possible and complete the rest during the "hardening" Sprints at the end of the release.',
      },
      {
        id: "c",
        text: "Complete the work that can be done on as much scope as possible and use the Sprint Review to plan the rest with the Stakeholders.",
      },
      {
        id: "d",
        text: "Immediately raise the issue to the Scrum Master as an impediment.",
      },
      { id: "e", text: "Stop using Scrum." },
    ],
    correctOptionId: "d",
  },

  {
    id: "q245",
    prompt:
      "To refine Product Backlog Items, the following activities will occur implicitly or explicitly: (choose all that apply)",
    options: [
      { id: "a", text: "Analysis." },
      { id: "b", text: "Decomposition." },
      { id: "c", text: "Design." },
      { id: "d", text: "Programming." },
      { id: "e", text: "Testing." },
    ],
    correctOptionId: "a,b,c",
  },

  {
    id: "q246",
    prompt:
      "True or False: Only technical writers can create documentation during a Sprint.",
    options: [
      { id: "a", text: "True." },
      { id: "b", text: "False." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q247",
    prompt:
      "True or False: The Scrum Team should choose at least one high priority process improvement, identified during the Sprint Retrospective, and place it in the Product Backlog.",
    options: [
      { id: "a", text: "True." },
      { id: "b", text: "False." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q248",
    prompt:
      "What are reasons to automate the Software build process? (choose the best two answers)",
    options: [
      {
        id: "a",
        text: "Automation improves the quality of Software by making builds less error-prone.",
      },
      {
        id: "b",
        text: "Code Reviews are much faster if you automate your build.",
      },
      {
        id: "c",
        text: "To get feedback on changes to the code early and often.",
      },
      {
        id: "d",
        text: "You can't run automated tests without an automated build.",
      },
    ],
    correctOptionId: "a,c",
  },

  {
    id: "q249",
    prompt:
      "What are some shortcomings of Code Coverage as a measurement for how well a system or Product is tested? (choose the best three answers)",
    options: [
      {
        id: "a",
        text: "Code Coverage does not ensure that the most important or highest risk areas of the code are being exercised by tests.",
      },
      {
        id: "b",
        text: "Code Coverage does not necessarily provide functional coverage.",
      },
      {
        id: "c",
        text: "Code Coverage metrics vary by development platform (e.g., .NET, Java).",
      },
      {
        id: "d",
        text: "Could create incentives to write tests that simply increase Code Coverage, rather than tests that find bugs without increasing coverage.",
      },
      { id: "e", text: "It is too complicated to explain to Management." },
    ],
    correctOptionId: "a,b,d",
  },

  {
    id: "q250",
    prompt:
      "What are three advantages of Continuous Integration? (choose the best three answers)",
    options: [
      { id: "a", text: "Broken builds are detected quickly." },
      { id: "b", text: "Know immediately how a check-in affected the build." },
      { id: "c", text: "Readability of code is improved." },
      { id: "d", text: "The Software is generally kept in a buildable state." },
    ],
    correctOptionId: "a,b,d",
  },

  {
    id: "q251",
    prompt:
      "What are ways the Developers can ensure a good Application Architecture? (choose the best two answers)",
    options: [
      {
        id: "a",
        text: "The Developers don't need an architecture model in Scrum and should focus on adding functionality. The architecture will come into place without fail as the Developers adds functionality.",
      },
      {
        id: "b",
        text: "The Developers plans a Sprint 0 at the beginning of a project with the objective of developing an architecture model used during the following Sprints.",
      },
      {
        id: "c",
        text: "The Developers plans some time each Sprint to discuss the architecture needed for the features planned in that Sprint.",
      },
      {
        id: "d",
        text: "The Developers should assign someone to the role of Software Architect whose job it is to make sure a consistent architecture is developed.",
      },
      {
        id: "e",
        text: "The Developers should have a set of guiding architecture principles that every Developers member understands and follows when writing code.",
      },
    ],
    correctOptionId: "c,e",
  },

  {
    id: "q252",
    prompt: "What does a test written with Test Driven Development represent?",
    options: [
      { id: "a", text: "A bug that will be uncovered." },
      { id: "b", text: "A technical requirement that must be satisfied." },
      { id: "c", text: "An assignment from the lead quality engineer." },
      {
        id: "d",
        text: "Something that completes the test coverage of a system.",
      },
    ],
    correctOptionId: "b",
  },

  {
    id: "q253",
    prompt: "What does Code Coverage show?",
    options: [
      { id: "a", text: "Code being exercised by tests." },
      { id: "b", text: "The absence of defects in code." },
      { id: "c", text: "The quality of Unit Tests being written." },
      {
        id: "d",
        text: "The ratio of number of tests to lines of code in the system being tested.",
      },
      { id: "e", text: "When a feature is done." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q254",
    prompt: "What is a Unit Test?",
    options: [
      {
        id: "a",
        text: "A technique for ensuring that units of co-dependent or clustered computers perform correctly.",
      },
      {
        id: "b",
        text: "A test that isolates and verifies individual units of source code.",
      },
      {
        id: "c",
        text: "A way for the team to ensure that the system satisfies the user requirements.",
      },
      {
        id: "d",
        text: "A way in which units of programmers ensure their code works.",
      },
    ],
    correctOptionId: "b",
  },

  {
    id: "q255",
    prompt: "What is Code Coverage?",
    options: [
      {
        id: "a",
        text: "An insurance policy that covers the code for defects.",
      },
      {
        id: "b",
        text: "The degree to which the system under test has been exercised by tests.",
      },
      {
        id: "c",
        text: "The number of Developers that understand how the code works.",
      },
      {
        id: "d",
        text: "The percent of code in version control included in a build.",
      },
    ],
    correctOptionId: "b",
  },

  {
    id: "q256",
    prompt: "What is NOT Test Driven Development?",
    options: [
      { id: "a", text: "A predictable way to develop working, clean code." },
      {
        id: "b",
        text: "A Software Development technique based on automated tests.",
      },
      {
        id: "c",
        text: "An incremental and emergent approach to Software Design.",
      },
      {
        id: "d",
        text: "Testing existing Software before developing any new Software.",
      },
    ],
    correctOptionId: "a,d",
  },

  {
    id: "q257",
    prompt: "What is Pair Programming?",
    options: [
      {
        id: "a",
        text: "A Developer and a Tester work together to write and test code.",
      },
      {
        id: "b",
        text: "Managers doing performance reviews by comparing one programmer's code to another's.",
      },
      {
        id: "c",
        text: "The Scrum Team is divided into several two-person Developers groups that consolidate work in a Scrum of Scrums.",
      },
      {
        id: "d",
        text: "Two Developers writing code together, providing constant peer review.",
      },
      {
        id: "e",
        text: "Two programmers write code separately. A third programmer integrates the work.",
      },
    ],
    correctOptionId: "d",
  },

  {
    id: "q258",
    prompt: "What is Technical Debt?",
    options: [
      {
        id: "a",
        text: "A term representing the eventual consequences of poor technical choices.",
      },
      { id: "b", text: "Code that has not been commented or documented." },
      {
        id: "c",
        text: "The average time or money a Scrum Team spends per Sprint on bug fixes.",
      },
      {
        id: "d",
        text: "The money an organization owes to tool and hardware vendors.",
      },
    ],
    correctOptionId: "a",
  },

  {
    id: "q259",
    prompt: "What is the value of Refactoring code?",
    options: [
      {
        id: "a",
        text: "To have all code in a single file for easy printing and Code Reviews.",
      },
      { id: "b", text: "To improve readability and maintainability." },
      { id: "c", text: "To keep the code moving." },
      { id: "d", text: "To make the Software faster at runtime." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q260",
    prompt: "What relationship does Scrum have to technical practices?",
    options: [
      {
        id: "a",
        text: "All technical practices must be used to support Scrum.",
      },
      {
        id: "b",
        text: "Developers with excellent technical practices will likely be more successful.",
      },
      {
        id: "c",
        text: "Scrum requires specific technical practices or it isn't Scrum.",
      },
      { id: "d", text: "None." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q261",
    prompt:
      "When are Testers and quality experts ideally included in a project?",
    options: [
      { id: "a", text: "After Developer handoff." },
      { id: "b", text: "After Sprint Review." },
      { id: "c", text: "From the beginning and throughout all Sprints." },
      { id: "d", text: "When the Product is feature complete." },
    ],
    correctOptionId: "c",
  },

  {
    id: "q262",
    prompt: "When do the Developers participate in Product Backlog Refinement?",
    options: [
      { id: "a", text: "Anytime during the Sprint." },
      { id: "b", text: "As Part 1 of the Sprint Planning meeting." },
      {
        id: "c",
        text: "Never. It is the sole responsibility of the Product Owner to refine the Product Backlog.",
      },
      {
        id: "d",
        text: "Only during Refinement meetings planned by the Product Owner.",
      },
    ],
    correctOptionId: "a",
  },

  {
    id: "q263",
    prompt: "When is a System's Architecture decided?",
    options: [
      { id: "a", text: "In the beginning of the project, during Sprint 0." },
      {
        id: "b",
        text: "It is designed along with the vision, before the first Sprint.",
      },
      {
        id: "c",
        text: "Throughout the project, as understanding emerges and the Developers learns more about the project.",
      },
      {
        id: "d",
        text: "Whenever the assigned Architect can join the Developers.",
      },
    ],
    correctOptionId: "c",
  },

  {
    id: "q264",
    prompt:
      "Which are attributes of a good bug report? (choose all that apply)",
    options: [
      { id: "a", text: "Build/version where bug was found." },
      { id: "b", text: "Clear title and proper grammar in report." },
      { id: "c", text: "Expected results and observed results." },
      { id: "d", text: "One bug per report." },
      {
        id: "e",
        text: "Screenshots or other pictures of bug in action when user interfaces are involved.",
      },
      { id: "f", text: "Simple and repeatable reproduction steps." },
    ],
    correctOptionId: "a,b,c,d,e,f",
  },

  {
    id: "q265",
    prompt:
      "Which are potential benefits of Test Driven Development? (choose all that apply)",
    options: [
      {
        id: "a",
        text: "It causes you to construct a test harness that can be automated.",
      },
      { id: "b", text: "It improves quality and reduces bugs." },
      { id: "c", text: "It promotes good design and separation of concerns." },
      { id: "d", text: "It speeds the overall development process." },
    ],
    correctOptionId: "a,b,c,d",
  },

  {
    id: "q266",
    prompt:
      "Which describes the practice of expressing requirements as Acceptance Tests?",
    options: [
      { id: "a", text: "Acceptance Test Driven Development." },
      { id: "b", text: "Object Driven Requirements Definition." },
      { id: "c", text: "Quality Oriented Requirements Definition." },
      { id: "d", text: "Regression Testing." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q267",
    prompt: "Which is a benefit of establishing naming standards for code?",
    options: [
      {
        id: "a",
        text: "To communicate the name of the Developer that worked on the code.",
      },
      { id: "b", text: 'To ensure that "orphan functions" are not created.' },
      {
        id: "c",
        text: "To make it easy to distinguish between different Software Products.",
      },
      { id: "d", text: "To make the code more readable." },
    ],
    correctOptionId: "d",
  },

  {
    id: "q268",
    prompt:
      "Which of the following are benefits of Continuous Integration? (choose the best two answers)",
    options: [
      {
        id: "a",
        text: "Causes team members to consider each other's work and context.",
      },
      { id: "b", text: "It eliminates bugs completely." },
      {
        id: "c",
        text: "It leads to higher transparency and rapid feedback to the team.",
      },
      {
        id: "d",
        text: "The build is executed once every night and at least once each weekend.",
      },
    ],
    correctOptionId: "a,c",
  },

  {
    id: "q269",
    prompt:
      "Which of the following are NOT metrics of Code Quality? (choose all that apply)",
    options: [
      { id: "a", text: "Class Coupling." },
      { id: "b", text: "Code Coverage." },
      { id: "c", text: "Cycle Time per Feature." },
      { id: "d", text: "Cyclomatic Complexity." },
      { id: "e", text: "Depth of Inheritance." },
    ],
    correctOptionId: "b,c",
  },

  {
    id: "q270",
    prompt: "Which of the following best describes Continuous Integration?",
    options: [
      {
        id: "a",
        text: "A Software Development practice that continuously integrates feedback from users into Software Design.",
      },
      {
        id: "b",
        text: "A Software Development practice used by Integration Teams to create Best Practice branching and merging strategies.",
      },
      {
        id: "c",
        text: "A Software Development practice where members of the Developers all work on the same computer to ensure a common code base.",
      },
      {
        id: "d",
        text: "A Software Development practice where members of the Developers integrate and verify their work frequently, often multiple times each day, to detect integration errors as quickly as possible.",
      },
    ],
    correctOptionId: "d",
  },

  {
    id: "q271",
    prompt: "Which of the following describe an Architecture Spike?",
    options: [
      {
        id: "a",
        text: "A decision made by a Systems Architect to settle disagreement within the Developers.",
      },
      {
        id: "b",
        text: "A fundamental architectural problem found in an existing application.",
      },
      {
        id: "c",
        text: "A small development activity to learn about technical elements of a proposed solution.",
      },
      {
        id: "d",
        text: "The result of an exhaustive architectural planning effort.",
      },
    ],
    correctOptionId: "c",
  },

  {
    id: "q272",
    prompt: "Which statement describes how often the build should be executed?",
    options: [
      {
        id: "a",
        text: "As often as possible, and certainly prior to the end of the Sprint.",
      },
      { id: "b", text: "Once per day." },
      {
        id: "c",
        text: "Whenever new or changed code is checked into version control.",
      },
      {
        id: "d",
        text: "Whenever the Quality Assurance group becomes uncertain that the system works.",
      },
    ],
    correctOptionId: "c",
  },

  {
    id: "q273",
    prompt: "Which statement describes Test First Development (TFD)?",
    options: [
      { id: "a", text: "Designing tests before satisfying them." },
      {
        id: "b",
        text: "Having the Tester in the Developers write the test plans before coding.",
      },
      { id: "c", text: "Testing existing code before adding more code to it." },
      {
        id: "d",
        text: "The continuous restructuring of Software to retain flexibility.",
      },
    ],
    correctOptionId: "a",
  },

  {
    id: "q274",
    prompt:
      "Which statements describe why automated builds are important? (choose the best three answers)",
    options: [
      {
        id: "a",
        text: "They allow frequent validation of the unit of Software being worked on, ensuring it remains in a potentially shippable state.",
      },
      {
        id: "b",
        text: "The build process is clearly defined and scripted, making it easy consistent and repeatable.",
      },
      { id: "c", text: "They eliminate the need for Build Engineers." },
      { id: "d", text: "They ensure your Product remains bug free." },
      { id: "e", text: "They support continuous integration." },
    ],
    correctOptionId: "a,b,e",
  },

  {
    id: "q275",
    prompt:
      "While changing Software, you find a bug in a previously delivered piece of functionality. What should you do?",
    options: [
      { id: "a", text: "Fix the bug." },
      {
        id: "b",
        text: "Fix the bug if it is critical or easily fixed. Otherwise, put the new bug into the Product Backlog to be prioritized and fixed in an upcoming Sprint.",
      },
      {
        id: "c",
        text: "Revise the tests so that the bug no longer appears on the bug report.",
      },
      {
        id: "d",
        text: "Stub out the code that caused the bug so it no longer occurs.",
      },
    ],
    correctOptionId: "b",
  },

  {
    id: "q276",
    prompt:
      "Who is responsible for the System Architecture of a Product being developed using Scrum?",
    options: [
      { id: "a", text: "The Architect chosen by the Developers." },
      { id: "b", text: "The Corporate Architect." },
      { id: "c", text: "The Developers." },
      { id: "d", text: "The Software Architect." },
    ],
    correctOptionId: "c",
  },

  {
    id: "q277",
    prompt: "Who must be present at the Daily Scrum meeting?",
    options: [
      { id: "a", text: "Anyone who wants to attend." },
      {
        id: "b",
        text: "No one is required, anyone who wishes to attend is welcome.",
      },
      { id: "c", text: "The Developers." },
      { id: "d", text: "The entire Scrum Team." },
      { id: "e", text: "The Scrum Master and the Developers." },
    ],
    correctOptionId: "c",
  },

  {
    id: "q278",
    prompt:
      "Who should be present during Product Backlog Refinement? (choose all that apply)",
    options: [
      { id: "a", text: "Only the most senior people from the Developers." },
      { id: "b", text: "The Developers." },
      {
        id: "c",
        text: "The external Business Analysts that have prepared the functional details.",
      },
      {
        id: "d",
        text: "The integration architects from the release department.",
      },
      { id: "e", text: "The Product Owner." },
      { id: "f", text: "The Stakeholders." },
    ],
    correctOptionId: "b,e",
  },

  {
    id: "q279",
    prompt:
      "You are on a Scrum Team that is enhancing an existing Product. Which is the LEAST useful piece of documentation you want to have at your disposal?",
    options: [
      { id: "a", text: "Acceptance Tests." },
      { id: "b", text: "Detailed designs." },
      {
        id: "c",
        text: "The full history of retrospective plans and lessons learned.",
      },
      { id: "d", text: "Well-structured and named code." },
    ],
    correctOptionId: "c",
  },

  {
    id: "q280",
    prompt:
      "True or False: Test Driven Development is a predictable way to develop working, well-organized code?",
    options: [
      { id: "a", text: "True." },
      { id: "b", text: "False." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q281",
    prompt:
      "The Scrum Team should have all the skills needed to: (choose the best answer)",
    options: [
      {
        id: "a",
        text: "Do all of the development work, except for specialized testing that requires additional tools and environments.",
      },
      {
        id: "b",
        text: "Complete the project within the date and cost as calculated by the Product Owner.",
      },
      {
        id: "c",
        text: "Turn Product Backlog item into a valuable, useful Increment.",
      },
    ],
    correctOptionId: "c",
  },

  {
    id: "q282",
    prompt:
      "Who determines when it is appropriate to update the Sprint Backlog during a Sprint? (choose the best answer)",
    options: [
      { id: "a", text: "The Scrum Team." },
      { id: "b", text: "The Project Manager." },
      { id: "c", text: "The Product Owner." },
      { id: "d", text: "The Developers." },
    ],
    correctOptionId: "d",
  },

  {
    id: "q283",
    prompt:
      "What is the Scrum Master responsible for during the Sprint Retrospective? (choose the best answer)",
    options: [
      {
        id: "a",
        text: "Summarizing and reporting the discussions to management.",
      },
      {
        id: "b",
        text: "Acting as a scribe to capture the Scrum Team's answers.",
      },
      {
        id: "c",
        text: "Participating as a Scrum Team member and facilitating as requested or needed.",
      },
      { id: "d", text: "Prioritizing the resulting action items." },
    ],
    correctOptionId: "c",
  },

  {
    id: "q284",
    prompt:
      "The right time to refactor code using Test Driven Development is: (choose the best answer)",
    options: [
      { id: "a", text: 'When I can see the "debt" building in the code.' },
      { id: "b", text: "When preparing legacy code for unit tests." },
      { id: "c", text: "After the test passes." },
      { id: "d", text: "After the test fails." },
    ],
    correctOptionId: "c",
  },

  {
    id: "q285",
    prompt:
      "When should Product Backlog refinement occur? (choose the best answer)",
    options: [
      {
        id: "a",
        text: "Anytime the Scrum Team feels Product Backlog items require more precision.",
      },
      { id: "b", text: "Always prior to Sprint Planning." },
      {
        id: "c",
        text: "Only during refinement meetings planned by the Product Owner.",
      },
      { id: "d", text: "Only during Sprint Planning." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q286",
    prompt:
      "Why is architectural layering important for emergent systems? (choose the best three answers)",
    options: [
      { id: "a", text: "Layering makes it easier to reuse functionality." },
      {
        id: "b",
        text: "Layering assigns clear responsibilities to individual Developers.",
      },
      {
        id: "c",
        text: "Layering separates different logical concerns withing the system.",
      },
      {
        id: "d",
        text: "Layering increases maintainability of a system by isolating functional responsibilities.",
      },
    ],
    correctOptionId: "a,c,d",
  },

  {
    id: "q287",
    prompt:
      "Is it a good idea to follow each automated build with the execution of automated tests?",
    options: [
      { id: "a", text: "Yes. Code Coverage can be used to assess progress." },
      {
        id: "b",
        text: "No. Automated tests should be executed when the implementation of a Product Backlog item is complete.",
      },
      {
        id: "c",
        text: "Yes. The tests may identify whether there are problems that the Developers should fix before proceeding.",
      },
      { id: "d", text: "No. It would take too much time." },
    ],
    correctOptionId: "c",
  },

  {
    id: "q288",
    prompt: "What is Pair Programming? (choose the best answer)",
    options: [
      {
        id: "a",
        text: "Developers that are able to write code both in the back-end and the front-end.",
      },
      {
        id: "b",
        text: "Two Developers working on the same problem, at the same computer (physically or virtually), at the same time.",
      },
      {
        id: "c",
        text: "Two persons working on the same Product Backlog item trying to get it one as soon as possible.",
      },
      {
        id: "d",
        text: "A Tester and a Developer working together to ensure high quality.",
      },
    ],
    correctOptionId: "b",
  },

  {
    id: "q289",
    prompt:
      "What are the top three benefits of a good Definition of Done? (choose the best three answers)",
    options: [
      {
        id: "a",
        text: "Clear Communication of the Scrum Team's quality standards.",
      },
      {
        id: "b",
        text: "A fully valuable, useful Increment by the end of each Sprint.",
      },
      {
        id: "c",
        text: "An ongoing strategy or technique for steadily addressing Technical Debt.",
      },
      {
        id: "d",
        text: "Guidance on the specific patterns to be implemented in code.",
      },
      { id: "e", text: "A full description of all test steps." },
    ],
    correctOptionId: "a,b,d",
  },

  {
    id: "q290",
    prompt:
      "Which best describes the practice of branching code in a version control system? (choose the best answer)",
    options: [
      {
        id: "a",
        text: "Tagging or labelling a particular codebase as ready for distribution.",
      },
      {
        id: "b",
        text: "Creating a duplicate of existing code, isolated from the original code.",
      },
      {
        id: "c",
        text: "Releasing a specific codebase into a production environment.",
      },
      {
        id: "d",
        text: "Combining two or more branches of code into a signe codebase.",
      },
    ],
    correctOptionId: "b",
  },

  {
    id: "q291",
    prompt: "Cyclomatic Complexity is a metric for: (choose the best answer)",
    options: [
      {
        id: "a",
        text: "Assessing if code is written in as few lines as possible.",
      },
      {
        id: "b",
        text: "A measurement for complexity based on the number of people involved.",
      },
      {
        id: "c",
        text: "Determining the number of unit tests required to ensure correctness.",
      },
      {
        id: "d",
        text: "Demonstrating code is well-structured and cleanly implemented.",
      },
      {
        id: "e",
        text: "Measuring branching structures and nesting levels in code.",
      },
    ],
    correctOptionId: "e",
  },

  {
    id: "q292",
    prompt:
      "The Developers should have all the skills needed to: (choose the best answer)",
    options: [
      {
        id: "a",
        text: "Complete the project as estimated when the date and cost are committed to the Product Owner.",
      },
      {
        id: "b",
        text: "Turn the Product Backlog items they select into an Increment of useful and valuable product functionality.",
      },
      {
        id: "c",
        text: "Do all of the development work, except for specialized testing that requires additional tools and environments.",
      },
    ],
    correctOptionId: "b",
  },

  {
    id: "q293",
    prompt: "Which statement best describes Scrum? (choose the best answer)",
    options: [
      {
        id: "a",
        text: "A framework for creating complex products in complex environments.",
      },
      {
        id: "b",
        text: "A defined and predictive process that conforms to the principles of Scientific Management.",
      },
      {
        id: "c",
        text: "A complete methodology that defines how to develop software.",
      },
      {
        id: "d",
        text: "A cookbook that defines best practices for software development.",
      },
    ],
    correctOptionId: "a",
  },

  {
    id: "q294",
    prompt: "The timebox for a Daily Scrum is? (choose the best answer)",
    options: [
      { id: "a", text: "15 minutes." },
      {
        id: "b",
        text: "15 minutes for a 4-week sprint. For shorter Sprints it is usually shorter.",
      },
      { id: "c", text: "Two minutes per person." },
      { id: "d", text: "4 hours." },
      { id: "e", text: "The same time of day every day." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q295",
    prompt:
      "The Developers should not be interrupted during the Sprint and the Sprint Goal should remain intact. These are conditions that foster creativity, quality and productivity. Which one the following answers is FALSE?",
    options: [
      {
        id: "a",
        text: "The Developers may work with the Product Owner to add or remove work if they find themselves with more or less capacity than expected.",
      },
      {
        id: "b",
        text: "The Sprint Backlog is fully formulated in the Sprint Planning event and does not change during the Sprint.",
      },
      {
        id: "c",
        text: "As a decomposition of the selected Product Backlog items, the Sprint Backlog changes and may grow as the work emerges.",
      },
      {
        id: "d",
        text: "The Product Owner can help clarify or optimize the Sprint when asked by the Developers.",
      },
    ],
    correctOptionId: "b",
  },

  {
    id: "q296",
    prompt: "The three pillars of empiricism are: (choose the best answer)",
    options: [
      { id: "a", text: "Respect For People, Kaizen, Eliminating Waste." },
      { id: "b", text: "Planning, Inspection, Adaptation." },
      { id: "c", text: "Planning, Demonstration, Retrospective." },
      { id: "d", text: "Inspection, Transparency, Adaptation." },
      { id: "e", text: "Transparency, Eliminating Waste, Kaizen." },
    ],
    correctOptionId: "d",
  },

  {
    id: "q297",
    prompt:
      "What is the typical size for a Scrum Team? (choose the best answer)",
    options: [
      { id: "a", text: "10 or fewer." },
      { id: "b", text: "Minimum of 7." },
      { id: "c", text: "7 plus or minus 2." },
      { id: "d", text: "9." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q298",
    prompt:
      "What is the function or purpose of Management in Scrum? (choose the best answer)",
    options: [
      {
        id: "a",
        text: "Identify and remove people that are not working hard enough.",
      },
      {
        id: "b",
        text: "Monitor the progress of the Developers on the Scrum Team.",
      },
      {
        id: "c",
        text: "Support the Product Owner with insights and information into high value product and system capabilities. Support the Scrum Master to encourage organizational change that fosters empiricism, self-management, bottom-up intelligence, and intelligent product delivery.",
      },
      {
        id: "d",
        text: "Continually monitor staffing levels of the Scrum Team.",
      },
    ],
    correctOptionId: "c",
  },

  {
    id: "q299",
    prompt:
      "What is the main reason for the Scrum Master to be at the Daily Scrum? (choose the best answer)",
    options: [
      {
        id: "a",
        text: "To gather status and progress information to report to management.",
      },
      {
        id: "b",
        text: "To write down any changes to the Sprint Backlog, including adding new items, and tracking progress on the burn-down.",
      },
      {
        id: "c",
        text: "They do not have to be there; they only need to ensure the Developers have a Daily Scrum.",
      },
      {
        id: "d",
        text: "To make sure every team member answers the three questions.",
      },
    ],
    correctOptionId: "c",
  },

  {
    id: "q300",
    prompt:
      "Which two things should the Scrum Team do during the first Sprint? (choose the best two answers)",
    options: [
      {
        id: "a",
        text: "Develop and deliver at least one piece of functionality.",
      },
      { id: "b", text: "Develop a plan for the rest of the release." },
      { id: "c", text: "Deliver an Increment of useful and valuable product." },
      {
        id: "d",
        text: "Determine the complete architecture and infrastructure for the product.",
      },
      {
        id: "e",
        text: "Create the complete Product Backlog to be developed in subsequent Sprints.",
      },
    ],
    correctOptionId: "a,c",
  },

  {
    id: "q301",
    prompt:
      "True or False: It is mandatory that the product Increment be released to production at the end of each Sprint.",
    options: [
      { id: "a", text: "True." },
      { id: "b", text: "False." },
    ],
    correctOptionId: "b",
  },

  {
    id: "q302",
    prompt:
      "When should a Developer on a Scrum Team be replaced? (choose the best answer)",
    options: [
      {
        id: "a",
        text: "As needed, with no special allowance for changes in productivity.",
      },
      { id: "b", text: "Every Sprint to promote shared learning." },
      {
        id: "c",
        text: "As needed, while taking into account a short-term reduction in productivity.",
      },
      { id: "d", text: "Never, it reduces productivity." },
    ],
    correctOptionId: "c",
  },

  {
    id: "q303",
    prompt: "Refactoring is: (choose the best answer)",
    options: [
      {
        id: "a",
        text: "Improving your code without breaking your unit tests.",
      },
      { id: "b", text: "Increasing the amount of code." },
      { id: "c", text: "Multiplying the amount of code." },
      { id: "d", text: "Reducing the amount of code." },
    ],
    correctOptionId: "a",
  },

  {
    id: "q304",
    prompt: "Developers include which role(s)? (select all that apply)",
    options: [
      { id: "a", text: "Software Architects." },
      { id: "b", text: "Business Analysts." },
      { id: "c", text: "Testers." },
      {
        id: "d",
        text: "No other roles. Developer is one of the 3 accountabilities in Scrum.",
      },
    ],
    correctOptionId: "d",
  },

  {
    id: "q305",
    prompt: "True or False: The more code a Developer writes the better.",
    options: [
      { id: "a", text: "True." },
      { id: "b", text: "False." },
    ],
    correctOptionId: "b",
  },
];
