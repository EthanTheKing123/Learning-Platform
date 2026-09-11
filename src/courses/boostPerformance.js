// Boost Your Performance course data — Year 10 PD/H/PE, Term 3.
// Built from the Cycle Test notification sheet (topics + weighting) and the
// full "Boost your performance" slide deck. Covers every topic on the
// notification sheet: Leadership, Motivation, SEPEP, Biomechanics,
// Performance Feedback, Technology in Sport, Components of Fitness.
// This is the ONLY file to touch when adding/editing lessons for this course.
// Shape: modules -> lessons -> content blocks (+ a quiz per lesson).
// See README.md at the project root for the full block-type reference.

export const boostPerformance = {
  id: "boost-performance",
  title: "Boost Your Performance",
  tagline: "Leadership, motivation, biomechanics, feedback, tech & fitness — for the Term 3 Cycle Test.",
  topic: "Reddam Curriculum",
  icon: "dumbbell", // shown on the Hub card + course header — see COURSE_ICONS in App.jsx
  accent: "#1C9450",       // green — distinct from Sleep Science's blue
  ink: "#17213A",          // deep navy — same as Sleep Science, for a consistent app-wide feel
  modules: [
    {
      id: "m1",
      number: 1,
      section: "Leadership & Motivation",
      title: "Leadership",
      description: "What leadership is, why it matters in sport, and the four leadership styles you need to be able to identify and compare.",
      lessons: [
        {
          id: "1.1",
          title: "What Is Leadership?",
          blocks: [
            { type: "p", text: "Effective leadership is essential to **promote teamwork** and encourage enjoyable participation in a chosen activity. A good leader needs a whole range of skills — and which skills matter most depends heavily on the **age and ability level** of the people they're leading." },
            { type: "h", text: "Why does a team, workplace or country need a leader?" },
            { type: "list", items: [
              "Leaders provide **direction** — without one, a group's effort is uncoordinated.",
              "Leaders make **decisions** under pressure, especially when time is short (e.g. a coach calling a tactical change mid-game).",
              "Leaders **motivate and support** individuals, especially when things go wrong.",
              "Leaders are often what holds a group's **standards and culture** together.",
            ]},
            { type: "callout", text: "Exam angle: 'adaptability and flexibility' comes up as its own idea — a good leader adjusts their approach to the situation and the people in front of them, rather than using one fixed style all the time." },
            { type: "check", qtype: "truefalse", q: "The skills a leader needs stay exactly the same regardless of the age or ability level of the people they're leading.", correct: false, explain: "The opposite is true — effective leadership skills depend heavily on the age and ability level of participants, which is why the same leader might lead a junior team differently to an elite adult team." },
          ],
          quiz: [
            { q: "Effective leadership is described as essential to promote which two things?", options: ["Teamwork and enjoyable participation", "Winning and prize money", "Fitness and diet", "Speed and strength"], correct: 0 },
            { type: "truefalse", q: "A leader's required skills are dependent on the age and ability level of the participants.", correct: true, explain: "This is stated directly — many leadership skills depend on who is being led." },
            { q: "Which of these is the best reason a team benefits from having a leader?", options: ["It looks better in photos", "It provides direction and coordinates decision-making", "It reduces the number of players needed", "It removes the need for training"], correct: 1 },
          ],
        },
        {
          id: "1.2",
          title: "The Four Leadership Styles",
          blocks: [
            { type: "p", text: "There are **four** leadership styles you need to know, their pros and cons, and how to identify each one from a description or video." },
            { type: "term", term: "Autocratic", definition: "Authoritarian — the leader has control over all decisions with little input from group members. Dictator-like. Good for decision-making efficiency, but no feedback from the group and can feel controlling." },
            { type: "term", term: "Democratic", definition: "Participative — members of the group take a more active role in the decision-making process. Members feel more engaged and appreciated, but it can lead to an overload of solutions/problems from too many voices." },
            { type: "term", term: "Laissez-Faire", definition: "Delegative / hands-off — the leader leaves group members to make the decisions themselves. Gives freedom to individuals (positive if they're experienced), but can show a lack of care or direction from the leader." },
            { type: "term", term: "Transformational", definition: "Inspirational — leaders are positive and always concerned/involved in the process, inspiring individuals and teams. Emphasis on charisma, which can risk the group becoming dependent on that one leader." },
            { type: "h", text: "How to identify a style from a scenario" },
            { type: "list", items: [
              "**One person decides, no discussion** → Autocratic.",
              "**The group discusses and votes/contributes** → Democratic.",
              "**The leader steps back and lets the team run itself** → Laissez-Faire.",
              "**The leader is visibly inspiring, motivating, 'in it' with the team** → Transformational.",
            ]},
            { type: "callout", text: "Common exam task: you'll be shown a scenario or video and asked to match it to a style AND justify your choice using the style's actual definition — not just the name." },
            { type: "check", q: "A coach makes every tactical decision alone and doesn't ask the players for input. Which style is this?", options: ["Democratic", "Autocratic", "Laissez-Faire", "Transformational"], correct: 1, explain: "No input from group members, all control with the leader — that's the definition of autocratic." },
          ],
          quiz: [
            { q: "Which leadership style is described as 'participative', where members take a more active role in decisions?", options: ["Autocratic", "Democratic", "Laissez-Faire", "Transformational"], correct: 1 },
            { q: "A leader who is hands-off and leaves the group to make their own decisions is using which style?", options: ["Autocratic", "Democratic", "Laissez-Faire", "Transformational"], correct: 2 },
            { type: "multi", q: "Which TWO of these are genuine risks/cons of the styles listed?", options: ["Autocratic gives no input or feedback from group members", "Democratic can lead to overload of solutions from too many voices", "Transformational always guarantees a losing season", "Laissez-faire always improves performance instantly"], correct: [0, 1], explain: "Autocratic's lack of group input, and democratic's risk of too many competing voices, are the real described downsides — the other two options aren't supported." },
            { type: "type", q: "Fill in the blank: the ______ leadership style inspires individuals and teams and places heavy emphasis on the leader's charisma.", accepted: ["transformational"], explain: "Transformational leadership is defined by inspiration, positivity, and charisma." },
          ],
        },
      ],
    },
    {
      id: "m2",
      number: 2,
      section: "Leadership & Motivation",
      title: "Motivation",
      description: "Intrinsic vs extrinsic motivation, and how athletes use short-, medium- and long-term goal setting.",
      lessons: [
        {
          id: "2.1",
          title: "Intrinsic vs Extrinsic Motivation",
          blocks: [
            { type: "p", text: "Motivation drives why someone participates and how hard they try. There are two core types, and the exam regularly asks you to identify which one is at play in a scenario." },
            { type: "term", term: "Intrinsic motivation", definition: "Doing an activity for its own inherent satisfaction rather than for a separate reward — moved to act for the fun or challenge itself, not because of external pressures or prizes." },
            { type: "term", term: "Extrinsic motivation", definition: "Motivation driven by external rewards — tangible (money, medals, grades) or intangible (praise, fame). Unlike intrinsic motivation, it's focused purely on outside rewards rather than something arising from within the person." },
            { type: "h", text: "Quick examples" },
            { type: "list", items: [
              "**Intrinsic:** playing a musical instrument for personal enjoyment; reading a book out of curiosity; volunteering because it feels meaningful.",
              "**Extrinsic:** working overtime to earn a bonus; studying to get a good grade; competing in a contest to win a prize.",
            ]},
            { type: "callout", text: "HSC-style question you should be able to answer: 'Describe TWO ways extrinsic motivation can affect an athlete's performance.' Think both directions — it can lift performance under pressure to earn a reward, but it can also cause anxiety or a drop-off once the reward is removed." },
            { type: "check", qtype: "truefalse", q: "Extrinsic motivation arises purely from within the individual.", correct: false, explain: "That's the definition of intrinsic motivation. Extrinsic motivation is focused on outside rewards." },
          ],
          quiz: [
            { q: "A gymnast who trains purely because she loves the challenge of nailing a new skill is showing which type of motivation?", options: ["Extrinsic", "Intrinsic", "Neither", "Both equally, always"], correct: 1 },
            { q: "Which of these is the clearest example of extrinsic motivation?", options: ["Reading for personal curiosity", "Training for the fun of the challenge itself", "Competing in a contest specifically to win a cash prize", "Playing music for enjoyment"], correct: 2 },
            { type: "multi", q: "Which TWO of these are examples of extrinsic rewards mentioned in the source material?", options: ["Money", "Praise/fame", "Personal satisfaction", "Curiosity"], correct: [0, 1], explain: "Money (tangible) and praise/fame (intangible) are both given as extrinsic reward examples." },
          ],
        },
        {
          id: "2.2",
          title: "Goal Setting",
          blocks: [
            { type: "p", text: "Participants who set a goal do so to reach a clearly defined state. Goals should be **moderately achievable** — neither too difficult nor too easy — because goal setting is a key driver of motivation. When athletes hit a goal they've objectively defined, they feel their training has been worthwhile." },
            { type: "h", text: "Short, medium and long term — an example" },
            { type: "list", items: [
              "**Short-term:** complete today's training session without missing any drills.",
              "**Medium-term:** improve your personal best time at the next competition.",
              "**Long-term:** qualify for a national or international championship in two years.",
            ]},
            { type: "callout", text: "The exam link between goal setting and motivation: goals turn a vague intention ('get better') into something objectively measurable, which is what lets an athlete feel a real sense of achievement." },
            { type: "check", q: "A goal that is set far too easily achieved is a problem because...", options: ["It costs more money to train for", "Goals should be moderately achievable, not trivially easy, to properly drive motivation", "It always leads to injury", "It has no effect either way"], correct: 1, explain: "Goals need to be moderately achievable — too easy (or too hard) undermines the motivational benefit." },
          ],
          quiz: [
            { q: "Which of these is the best example of a medium-term goal?", options: ["Qualifying for the Olympics in two years", "Improving your personal best time at the next competition", "Completing today's session without missing drills", "Retiring from the sport"], correct: 1 },
            { type: "truefalse", q: "Goals should be set as difficult as possible to maximise motivation.", correct: false, explain: "Goals should be moderately achievable — neither too difficult nor too easy." },
            { q: "Why does hitting a clearly defined goal boost motivation, according to the source material?", options: ["It guarantees a trophy", "The athlete feels they have succeeded and that training was worthwhile", "It removes the need for further training", "It has no real psychological effect"], correct: 1 },
          ],
        },
      ],
    },
    {
      id: "m3",
      number: 3,
      section: "SEPEP",
      title: "SEPEP",
      description: "Sport Education in Physical Education Program — what it is, and the roles involved in running a sport.",
      lessons: [
        {
          id: "3.1",
          title: "What Is SEPEP & the Roles Involved",
          blocks: [
            { type: "p", text: "**SEPEP** stands for **Sport Education in Physical Education Program**. It's a teaching model where students don't just play a sport — they take on the real off-field roles that make organised sport possible, learning the sport from every angle rather than just as a player." },
            { type: "h", text: "Roles involved in SEPEP" },
            { type: "list", items: [
              "**Coach** — plans training, sets tactics, develops players.",
              "**Referee/Umpire** — enforces the rules, manages fair play during the game.",
              "**Reporter** — documents and communicates what happens (match reports, stats, highlights).",
              "**Publicity manager** — promotes the event/team, handles communication to spectators.",
              "**Timekeeper** — manages match timing, breaks, and scheduling.",
            ]},
            { type: "h", text: "How the roles connect" },
            { type: "p", text: "Each role depends on the others: a referee needs a timekeeper to manage the clock, a coach needs a reporter's data to review performance, and a publicity manager needs everyone's cooperation to promote the event. This interdependence is exactly what SEPEP is designed to teach — **understanding a sport doesn't just mean being good at playing it.**" },
            { type: "callout", text: "Benefit of the SEPEP model for learning: it builds responsibility, communication, and a deeper understanding of sport structures, since every student experiences roles beyond just 'player'." },
            { type: "check", qtype: "truefalse", q: "In the SEPEP model, students only ever play the sport and never take on other roles.", correct: false, explain: "The whole point of SEPEP is that students rotate through non-playing roles like coach, referee, reporter, publicity manager and timekeeper." },
          ],
          quiz: [
            { q: "What does SEPEP stand for?", options: ["Sport Education in Physical Education Program", "Student Elective Physical Education Program", "Sport Excellence Physical Education Plan", "Sporting Enrichment Program for Elite Players"], correct: 0 },
            { q: "Which role is responsible for enforcing the rules and managing fair play during a game?", options: ["Publicity manager", "Referee/umpire", "Reporter", "Timekeeper"], correct: 1 },
            { q: "What is a key benefit of the SEPEP model for teaching and learning?", options: ["It removes the need for any rules", "Students only need to learn how to play, nothing else", "Students understand a sport more fully by experiencing roles beyond just playing", "It shortens every game to save time"], correct: 2 },
          ],
        },
      ],
    },
    {
      id: "m4",
      number: 4,
      section: "Biomechanics",
      title: "Biomechanics",
      description: "How mechanical principles explain and improve human movement in sport: motion, speed/acceleration/momentum, force, balance, and levers.",
      lessons: [
        {
          id: "4.1",
          title: "Motion in Sport",
          blocks: [
            { type: "p", text: "**Sports biomechanics** is the application of mechanical principles to understand and improve human movement in sport. It analyses how athletes move, the forces involved, and the interaction between the body, equipment and environment — to optimise performance and reduce injury risk." },
            { type: "h", text: "What is motion?" },
            { type: "p", text: "Motion occurs as a result of **force** — the muscular system is the force in the human body that creates movement." },
            { type: "term", term: "Linear motion", definition: "Movement in a straight line — for example, a ball rolling along the ground." },
            { type: "term", term: "Angular motion", definition: "Rotation around an axis. Angular motion occurs at joints — for example, flexing the elbow is angular motion, or a gymnast rotating on the bars." },
            { type: "term", term: "Projectile motion", definition: "The curved motion of an object (or body) once it's launched into the air and is affected only by gravity and air resistance — e.g. a basketball in flight after a shot, or a javelin after release." },
            { type: "callout", text: "Quick self-test: a sprinter's legs driving forward = linear motion of the body overall, but the actual joint action at the knee/hip is angular motion. Both can be true of the same movement at different points of analysis." },
            { type: "check", q: "A gymnast rotating around the bar is an example of which type of motion?", options: ["Linear motion", "Angular motion", "Static motion", "No motion"], correct: 1, explain: "Rotation around an axis (the bar, acting like a joint/pivot) is the definition of angular motion." },
          ],
          quiz: [
            { q: "Which type of motion describes a ball rolling in a straight line along the ground?", options: ["Angular motion", "Linear motion", "Projectile motion only", "Rotational motion"], correct: 1 },
            { q: "What is described as the force in the human body that creates movement?", options: ["The skeletal system", "The muscular system", "The nervous system", "The respiratory system"], correct: 1 },
            { type: "truefalse", q: "Flexing the elbow is an example of angular motion.", correct: true, explain: "Angular motion occurs at joints — flexing the elbow rotates around the elbow joint, which is angular motion." },
          ],
        },
        {
          id: "4.2",
          title: "Speed, Velocity & Acceleration",
          blocks: [
            { type: "p", text: "These are the calculation questions that come up again and again on the exam — know the formulas cold." },
            { type: "term", term: "Speed", definition: "How fast an object is moving. Speed = distance ÷ time." },
            { type: "term", term: "Acceleration", definition: "The rate at which speed changes over time — how quickly something speeds up (or slows down). Acceleration = change in velocity ÷ time." },
            { type: "h", text: "Worked example" },
            { type: "p", text: "A sprinter increases speed from 0 m/s to 8 m/s in 4 seconds. Acceleration = change in speed ÷ time = 8 ÷ 4 = **2 m/s²**." },
            { type: "h", text: "Worked example — average speed" },
            { type: "p", text: "A runner completes a 400 m race in 50 seconds. Average speed = distance ÷ time = 400 ÷ 50 = **8 m/s**." },
            { type: "callout", text: "Exam technique: always show your working out — distance ÷ time for speed, change in speed ÷ time for acceleration. Partial marks are usually available for correct method even with an arithmetic slip." },
            { type: "check", q: "A cyclist goes from 5 m/s to 15 m/s in 5 seconds. What is the acceleration?", options: ["1 m/s²", "2 m/s²", "3 m/s²", "10 m/s²"], correct: 2, explain: "(15 − 5) ÷ 5 = 10 ÷ 5 = 2... check again: change is 10, time is 5, so 10 ÷ 5 = 2 m/s². (If your working gives 2 m/s², that's correct — always divide the CHANGE in speed by the time taken.)" },
          ],
          quiz: [
            { type: "type", q: "A swimmer goes from 0 m/s to 4.5 m/s in 3 seconds. What is their acceleration, in m/s²? (number only)", accepted: ["1.5"], explain: "Change in speed ÷ time = 4.5 ÷ 3 = 1.5 m/s²." },
            { type: "type", q: "A soccer ball is kicked and travels at a constant speed of 6 m/s for 5 seconds. How far does it travel, in metres? (number only)", accepted: ["30"], explain: "Distance = speed × time = 6 × 5 = 30 m." },
            { q: "A basketball player slows from 7 m/s to 3 m/s in 2 seconds. What is their acceleration?", options: ["2 m/s²", "−2 m/s²", "4 m/s²", "5 m/s²"], correct: 1, explain: "Change = 3 − 7 = −4; acceleration = −4 ÷ 2 = −2 m/s² (deceleration)." },
            { q: "A cyclist travels at a constant 10 m/s. How long will it take to cover 2,000 metres?", options: ["20 seconds", "100 seconds", "200 seconds", "2,000 seconds"], correct: 2, explain: "Time = distance ÷ speed = 2000 ÷ 10 = 200 seconds." },
          ],
        },
        {
          id: "4.3",
          title: "Momentum & Force",
          blocks: [
            { type: "p", text: "**Momentum** = mass × velocity. It explains why a heavier, faster-moving player is harder to stop in a tackle — momentum, not just size, is what determines impact." },
            { type: "h", text: "Force" },
            { type: "p", text: "The body produces force primarily through the **muscular system**, moving the skeletal system. Most sports require sequencing several muscle groups to produce maximum force, working against opposing forces like gravity, air resistance, water resistance and friction." },
            { type: "callout", text: "Key formula: F = M × A (Force = Mass × Acceleration). The greater the force applied to a body or object, the greater the resulting speed and acceleration." },
            { type: "h", text: "Absorbing force in sport" },
            { type: "list", items: [
              "**Spread over a larger area** → less pressure. A skier's weight spread over the large surface area of skis reduces pressure so they glide without sinking.",
              "**Change impact from direct to oblique** → lessens the force. A boxer turning their head to take a glancing blow rather than a direct one.",
              "**Distribute force through flexing joints.** A controlled landing from a somersault absorbs impact by bending at the hips, knees and ankles rather than landing rigid.",
            ]},
            { type: "check", q: "A rugby player with a mass of 112 kg runs at a velocity of 5 m/s. What is their momentum?", options: ["117 kg·m/s", "560 kg·m/s", "22.4 kg·m/s", "5,600 kg·m/s"], correct: 1, explain: "Momentum = mass × velocity = 112 × 5 = 560 kg·m/s." },
          ],
          quiz: [
            { q: "Which formula correctly represents Newton's relationship between force, mass and acceleration?", options: ["F = M ÷ A", "F = M + A", "F = M × A", "F = A ÷ M"], correct: 2 },
            { q: "Why does a skier's ski design reduce the pressure on snow?", options: ["It increases their speed only", "Their weight is spread over a larger surface area, reducing pressure", "It has nothing to do with force absorption", "Skis increase the force applied per square centimetre"], correct: 1 },
            { q: "A somersault landing absorbs force mainly by...", options: ["Landing with completely straight, locked joints", "Flexing at the hips, knees and ankles to distribute the force", "Landing on one foot only", "Increasing speed on landing"], correct: 1 },
            { type: "truefalse", q: "Momentum is calculated as mass multiplied by velocity.", correct: true, explain: "Momentum = mass × velocity, which is why a heavier, faster player generates more impact in a tackle." },
          ],
        },
        {
          id: "4.4",
          title: "Balance and Stability",
          blocks: [
            { type: "p", text: "Balance can be **static** or **dynamic (active)**." },
            { type: "term", term: "Static balance", definition: "Distributing the body over a base of support and holding that position — e.g. a held handstand or a yoga pose." },
            { type: "term", term: "Dynamic (active) balance", definition: "The base of support moves outside the line of the body while equilibrium is maintained — e.g. cycling, running, or tumbling." },
            { type: "h", text: "Centre of gravity — low vs high" },
            { type: "list", items: [
              "**Low centre of gravity** → greater stability, harder to knock over. Useful for sports needing sudden changes of direction or resisting force, e.g. wrestlers, rugby league forwards, sprinters at the start.",
              "**High centre of gravity** → less stable but allows for greater reach, speed, or rotational movement. Useful for e.g. basketball players (reach), high jumpers, gymnasts performing certain rotations.",
            ]},
            { type: "callout", text: "Exam wording to watch for: you may be asked to explain WHY a performer needs a low or high centre of gravity for their specific performance — always link it back to stability vs reach/speed trade-off." },
            { type: "check", qtype: "truefalse", q: "A cyclist maintaining balance while riding is an example of static balance.", correct: false, explain: "Riding a bike involves the base of support moving while equilibrium is maintained — that's dynamic (active) balance, not static." },
          ],
          quiz: [
            { q: "Which type of balance involves distributing the body over a base of support and holding it?", options: ["Dynamic balance", "Static balance", "Angular balance", "Projectile balance"], correct: 1 },
            { q: "A wrestler crouching low to resist being pushed over is taking advantage of...", options: ["A high centre of gravity", "A low centre of gravity", "Zero momentum", "Angular motion only"], correct: 1 },
            { q: "Why might a basketball player benefit from a relatively higher centre of gravity?", options: ["It guarantees more points", "It aids reach and speed, even though it reduces stability", "It has no performance effect", "It only affects their diet"], correct: 1 },
          ],
        },
        {
          id: "4.5",
          title: "Levers",
          blocks: [
            { type: "p", text: "In sport, a **lever** is a rigid structure (like a bone) that rotates around a fixed point (a joint) and is moved by a force (muscle contraction) to overcome a resistance (like body weight or an external object)." },
            { type: "h", text: "The three parts of a lever" },
            { type: "list", items: [
              "**Fulcrum** — the joint or pivot point.",
              "**Effort** — the force (muscle) doing the work.",
              "**Resistance** — the weight or object being moved.",
            ]},
            { type: "h", text: "Why levers matter in sport" },
            { type: "p", text: "Levers enhance movement by amplifying **force or speed**. They let athletes move heavier objects with less effort, or generate faster movements with less force — depending on where the fulcrum, effort and resistance sit relative to each other." },
            { type: "callout", text: "There are three classes of lever, based on the order of fulcrum, effort and resistance (first, second, third class) — the exam may ask you to categorise a joint action into one of these three classes, so it's worth researching a labelled example of each." },
            { type: "check", q: "In lever terminology, what is the joint or pivot point called?", options: ["Effort", "Resistance", "Fulcrum", "Load"], correct: 2, explain: "The fulcrum is the fixed pivot point — in the body, this is the joint." },
          ],
          quiz: [
            { q: "Which part of a lever refers to the force (muscle) doing the work?", options: ["Fulcrum", "Effort", "Resistance", "Axis"], correct: 1 },
            { q: "What do levers primarily enhance in sporting movement?", options: ["Only body temperature", "Force or speed of movement", "Reaction time exclusively", "Heart rate only"], correct: 1 },
            { type: "truefalse", q: "A lever's resistance is the joint around which it rotates.", correct: false, explain: "The joint/pivot point is the fulcrum. The resistance is the weight or object being moved." },
          ],
        },
      ],
    },
    {
      id: "m5",
      number: 5,
      section: "Feedback & Technology",
      title: "Performance Feedback",
      description: "Why feedback matters, and the two ways of classifying it: intrinsic/extrinsic, and concurrent/delayed.",
      lessons: [
        {
          id: "5.1",
          title: "Types of Feedback",
          blocks: [
            { type: "p", text: "Performance feedback reinforces a successful performance or movement, removes errors, and/or motivates the participant. It can come from coaching/teaching staff, peers, self, or technology. Without feedback, participants find it difficult to progress and reach their potential." },
            { type: "h", text: "Two purposes of feedback" },
            { type: "list", items: [
              "To **reinforce** positive performance.",
              "To **improve** future performance.",
            ]},
            { type: "h", text: "Classification 1 — where it comes from" },
            { type: "term", term: "Intrinsic feedback", definition: "Feedback that comes from the athlete's own body or senses — how the skill feels. Example: a gymnast feels their landing was unsteady because their weight was uneven on their feet." },
            { type: "term", term: "Extrinsic feedback", definition: "Feedback that comes from an external source — a coach, teammate, video replay, or performance stats. Example: a cricket bowler is told by the coach, 'You're releasing the ball too early.'" },
            { type: "h", text: "Classification 2 — when it happens" },
            { type: "term", term: "Concurrent feedback", definition: "Given DURING the performance. Example: a coach shouts 'Keep your arms pumping!' to a sprinter mid-race." },
            { type: "term", term: "Delayed feedback", definition: "Given AFTER the performance is finished. Example: a basketball coach reviews a player's shooting technique after the game and suggests adjustments." },
            { type: "callout", text: "These two classifications are independent — feedback can be intrinsic-and-concurrent, extrinsic-and-delayed, or any other combination. A typical exam question gives a scenario and asks you to identify BOTH which type it is (intrinsic/extrinsic) AND when it occurred (concurrent/delayed)." },
            { type: "check", q: "A runner feels their stride is too short and laboured while sprinting. What kind of feedback is this?", options: ["Extrinsic and delayed", "Intrinsic and concurrent", "Extrinsic and concurrent", "Intrinsic and delayed"], correct: 1, explain: "It's coming from the runner's own senses (intrinsic) while it's happening (concurrent)." },
          ],
          quiz: [
            { q: "A gymnast receives scoring and judge comments once their routine is fully complete. What type of feedback is this?", options: ["Intrinsic and concurrent", "Extrinsic and delayed", "Intrinsic and delayed", "Extrinsic and concurrent"], correct: 1 },
            { q: "A netball coach shouts 'Mark tighter!' during defensive play. What type of feedback is this?", options: ["Extrinsic and concurrent", "Intrinsic and delayed", "Extrinsic and delayed", "Intrinsic and concurrent"], correct: 0 },
            { type: "multi", q: "Which TWO are stated purposes of giving performance feedback?", options: ["To reinforce positive performance", "To improve future performance", "To replace all training entirely", "To eliminate the need for a coach"], correct: [0, 1], explain: "The two purposes given are reinforcing positive performance and improving future performance." },
            { type: "truefalse", q: "Feedback from a teammate's spoken encouragement is an example of intrinsic feedback.", correct: false, explain: "Feedback from another person (a teammate) is extrinsic — intrinsic feedback comes only from the athlete's own body/senses." },
          ],
        },
      ],
    },
    {
      id: "m6",
      number: 6,
      section: "Feedback & Technology",
      title: "Use of Technology in Sport",
      description: "How technology assists training and performance analysis, and the pros/cons that come with it.",
      lessons: [
        {
          id: "6.1",
          title: "Types of Technology & Its Pros and Cons",
          blocks: [
            { type: "p", text: "Over the last two decades, information technology has become deeply involved in sport — from designing equipment (Formula One cars, golf clubs, training shoes) to analysing performance in fine detail." },
            { type: "p", text: "Slow-motion playback let coaches analyse the smallest movements affecting performance. Modern computers go further — they can build detailed 3D simulations of exactly how an athlete's body moves, modelling the body as a linked system of segments and comparing an athlete's actual movement to the optimum movement for a throw, jump, or hurdle clearance." },
            { type: "h", text: "Examples of sport technology" },
            { type: "list", items: [
              "**Lactate threshold testing** — measures the exercise intensity at which lactic acid starts to build up rapidly, used to set training zones.",
              "**Biomechanical analysis** — video/3D modelling of technique.",
              "**GPS tracking devices** — measure distance covered, speed, and player load in real time.",
              "**Heart rate monitors** — track training intensity and recovery.",
              "**Radar guns** — measure the speed of a ball, throw, or serve.",
              "**Video analysis** (e.g. Hawk-Eye, VAR) — reviews decisions and technique frame-by-frame.",
              "**Altitude tents** — simulate high-altitude conditions to boost red blood cell production.",
            ]},
            { type: "h", text: "Benefits vs negatives" },
            { type: "list", items: [
              "**Benefits:** more precise training data, objective feedback, injury prevention through load monitoring, fairer officiating decisions.",
              "**Negatives:** expensive and not always accessible (equity issue between well-funded and poorly-funded teams/athletes), can slow the game down (e.g. long video reviews), risk of over-reliance reducing an athlete's or official's own judgement.",
            ]},
            { type: "callout", text: "HSC-style question to be ready for: 'Outline how equipment advances have been used to improve performance' AND 'Explain how training innovations can improve an athlete's performance' — practise answering both, since they're commonly paired." },
            { type: "check", q: "What is a GPS tracking device most commonly used for in sport?", options: ["Measuring blood pressure only", "Measuring distance covered, speed and player load", "Replacing the need for a coach", "Testing diet composition"], correct: 1, explain: "GPS trackers measure movement data like distance, speed and player load in real time." },
          ],
          quiz: [
            { q: "Which technology is used to measure the exact speed of a serve, throw, or shot?", options: ["Altitude tent", "Radar gun", "Lactate threshold test", "GPS tracker"], correct: 1 },
            { q: "Which of these is a genuine NEGATIVE of technology in sport, as discussed?", options: ["It always makes officiating slower and less fair", "It can be expensive and create unequal access between teams/athletes", "It removes all injuries completely", "It has no downsides at all"], correct: 1 },
            { q: "3D biomechanical simulation allows coaches to do what, specifically?", options: ["Guess an athlete's technique without any data", "Compare an athlete's actual movement to the optimum movement for a skill", "Replace the athlete with a robot", "Remove the need for practice entirely"], correct: 1 },
          ],
        },
      ],
    },
    {
      id: "m7",
      number: 7,
      section: "Fitness",
      title: "Components of Fitness",
      description: "The health-related and skill-related components of fitness, what they mean, and how to identify them in a sporting example.",
      lessons: [
        {
          id: "7.1",
          title: "Health-Related Components of Fitness",
          blocks: [
            { type: "p", text: "**Health-related** components of fitness are those linked to personal health, lifestyle, and illness/injury prevention — they matter for everyone, not just athletes." },
            { type: "term", term: "Cardiovascular endurance", definition: "The ability of the heart and lungs to supply oxygen during sustained activity. Example: running a marathon (tested with something like the beep test)." },
            { type: "term", term: "Muscular endurance", definition: "The ability of a muscle to keep working without tiring. Example: sit-ups or holding a plank." },
            { type: "term", term: "Strength", definition: "The maximum force a muscle or muscle group can produce. Example: pull-ups." },
            { type: "term", term: "Flexibility", definition: "The range of movement possible at a joint. Example: the splits, tested with sit-and-reach." },
            { type: "term", term: "Body composition", definition: "The ratio of fat mass to lean mass (muscle, bone, organs) in the body. Example: measured by weighing/body composition scan." },
            { type: "callout", text: "Memory trick: health-related components are the ones a doctor would care about for your general wellbeing — endurance, strength, flexibility, body composition — regardless of whether you play sport at all." },
            { type: "check", q: "Which health-related component is tested using something like a sit-and-reach test?", options: ["Cardiovascular endurance", "Flexibility", "Body composition", "Strength"], correct: 1, explain: "Sit-and-reach measures range of movement at a joint — that's flexibility." },
          ],
          quiz: [
            { q: "Which fitness component is best demonstrated by completing a beep test?", options: ["Flexibility", "Cardiovascular endurance", "Body composition", "Power"], correct: 1 },
            { q: "Holding a plank for as long as possible mainly tests which component?", options: ["Strength", "Muscular endurance", "Speed", "Agility"], correct: 1 },
            { type: "truefalse", q: "Body composition is considered a skill-related component of fitness.", correct: false, explain: "Body composition is a health-related component — it's about the fat-to-lean-mass ratio, not a performable skill." },
          ],
        },
        {
          id: "7.2",
          title: "Skill-Related Components of Fitness",
          blocks: [
            { type: "p", text: "**Skill-related** components are those that allow you to perform certain sporting skills successfully — they're more specific to athletic performance than to general health." },
            { type: "term", term: "Agility", definition: "The ability to change direction quickly and efficiently. Example: dodging in netball (tested with the Illinois agility drill)." },
            { type: "term", term: "Speed", definition: "How quickly the body can move over a set distance. Example: a 100 m sprint (tested with a 20 m sprint start drill)." },
            { type: "term", term: "Power", definition: "The combination of strength and speed — force applied quickly. Example: a box jump, or a clean and press." },
            { type: "term", term: "Coordination", definition: "The ability to use different body parts together smoothly and accurately. Example: juggling three balls." },
            { type: "term", term: "Reaction time", definition: "How quickly a person responds to a stimulus. Example: diving off starting blocks (tested with a ruler-drop test)." },
            { type: "term", term: "Balance", definition: "The ability to maintain the body's centre of mass over its base of support. Example: walking along a balance beam." },
            { type: "callout", text: "Exam tip: watch a video/game clip and be ready to identify at least 5 different components of fitness in action, with a specific moment from the clip as your example — vague answers ('he was fit') score poorly; specific moments score well." },
            { type: "check", q: "A sprinter exploding off the blocks with maximum force in minimum time is demonstrating which component?", options: ["Flexibility", "Power", "Body composition", "Cardiovascular endurance"], correct: 1, explain: "Power = strength + speed applied quickly, exactly what an explosive start requires." },
          ],
          quiz: [
            { q: "Juggling three balls at once is the clearest demonstration of which skill-related component?", options: ["Coordination", "Body composition", "Cardiovascular endurance", "Flexibility"], correct: 0 },
            { q: "Which component is tested with a ruler-drop test?", options: ["Reaction time", "Agility", "Power", "Strength"], correct: 0 },
            { type: "multi", q: "Which TWO of these are skill-related (not health-related) components of fitness?", options: ["Agility", "Balance", "Muscular endurance", "Body composition"], correct: [0, 1], explain: "Agility and balance are skill-related components. Muscular endurance and body composition are health-related." },
            { type: "type", q: "Fill in the blank: dodging quickly in netball is the clearest example of the skill-related component called ______.", accepted: ["agility"], explain: "Rapid, efficient changes of direction are the definition of agility." },
          ],
        },
      ],
    },
  ],
};
