// Study & Learning course data — how memory, attention and effective study
// techniques actually work, grounded in cognitive science research (not
// study "tips" folklore). Built from established learning-science findings
// (retrieval practice, spaced repetition, cognitive load theory, growth
// mindset research, etc.), not a single source document.
// This is the ONLY file to touch when adding/editing lessons for this course.
// Shape: modules -> lessons -> content blocks (+ a quiz per lesson).
// See README.md at the project root for the full block-type reference.

export const studyLearning = {
  id: "study-learning",
  title: "Study & Learning",
  tagline: "How memory actually works, and the techniques that genuinely improve it.",
  topic: "Study Tips",
  icon: "brain", // shown on the Hub card + course header — see COURSE_ICONS in App.jsx
  accent: "#D9791F",       // warm orange — distinct from the other two courses
  ink: "#17213A",
  modules: [
    {
      id: "m1",
      number: 1,
      section: "Foundations",
      title: "How Memory Works",
      description: "The two-part memory system behind every study technique, and why forgetting is fast, predictable, and beatable.",
      lessons: [
        {
          id: "1.1",
          title: "Working Memory vs Long-Term Memory",
          blocks: [
            { type: "p", text: "Everything you learn passes through two very different memory systems, and almost every study technique that works is really just a strategy for getting information safely from one to the other." },
            { type: "term", term: "Working memory", definition: "Your short-term mental workspace — where you hold and manipulate information right now. It's extremely limited: most people can only actively hold around 4–7 items at once, and anything not actively rehearsed fades within seconds." },
            { type: "term", term: "Long-term memory", definition: "Your vast, durable storage — effectively unlimited in size, and where information can last for years once it's properly encoded. The whole goal of studying is moving things here, not just holding them in working memory long enough to survive a quiz." },
            { type: "h", text: "Why this matters for how you study" },
            { type: "p", text: "Re-reading a page feels productive because the information sits comfortably in working memory while your eyes are on it — that fluency is an illusion. The moment you look away, most of it is gone, because it was never actually pushed into long-term storage. This single distinction explains why some study methods feel easy but don't work, and others feel hard but do." },
            { type: "callout", text: "The feeling of 'this makes sense' while reading is a working-memory feeling, not a long-term-memory feeling. It tells you almost nothing about whether you'll remember it tomorrow." },
            { type: "check", qtype: "truefalse", q: "Working memory can hold a large amount of information for an extended period of time.", correct: false, explain: "Working memory is small (roughly 4–7 items) and information fades within seconds unless actively rehearsed or moved to long-term memory." },
          ],
          quiz: [
            { q: "Roughly how many items can working memory actively hold at once?", options: ["1–2", "4–7", "20–30", "Unlimited"], correct: 1 },
            { q: "Why does re-reading a page often feel like it's working, even when it isn't?", options: ["Because it always transfers information to long-term memory", "Because the information feels familiar in working memory, which is mistaken for real learning", "Because re-reading is scientifically proven to be the best method", "It has no explanation"], correct: 1 },
            { type: "truefalse", q: "The main goal of effective studying is to get information from working memory into long-term memory.", correct: true, explain: "That transfer is exactly what durable learning is — techniques that don't achieve this transfer don't produce lasting learning." },
          ],
        },
        {
          id: "1.2",
          title: "How Forgetting Works (The Forgetting Curve)",
          blocks: [
            { type: "p", text: "In the 1880s, psychologist Hermann Ebbinghaus tested his own memory repeatedly and mapped out something now called the **forgetting curve** — and its shape is the single most useful fact in this whole course for planning when to study." },
            { type: "h", text: "The shape of forgetting" },
            { type: "list", items: [
              "Forgetting is **fastest right after learning** — you can lose the majority of new information within a day if you never revisit it.",
              "Each time you **successfully recall** something, the rate of forgetting slows down — the curve gets flatter.",
              "This is why one read-through is never enough, no matter how good your memory is — the drop-off in the first 24–48 hours is steep for everyone.",
            ]},
            { type: "callout", text: "The practical takeaway: the fix for forgetting isn't 'try harder to remember' — it's revisiting the material at the right intervals, which is exactly what Module 2's spaced repetition lesson covers." },
            { type: "check", q: "According to the forgetting curve, when is the rate of forgetting fastest?", options: ["A month after learning", "Immediately after learning", "It's constant and never changes", "Only during exams"], correct: 1, explain: "Forgetting drops off steeply in the first day or two after learning if the material isn't revisited." },
          ],
          quiz: [
            { q: "Who is credited with first mapping the forgetting curve?", options: ["B.F. Skinner", "Hermann Ebbinghaus", "Jean Piaget", "Ivan Pavlov"], correct: 1 },
            { q: "What happens to the forgetting curve each time you successfully recall information?", options: ["It gets steeper", "It flattens — forgetting slows down", "Nothing changes", "It resets to zero"], correct: 1 },
            { type: "truefalse", q: "A single thorough read-through of material is generally enough to remember it long-term.", correct: false, explain: "The forgetting curve shows a steep drop-off within a day or two without revisiting — one pass is rarely enough for durable memory." },
          ],
        },
      ],
    },
    {
      id: "m2",
      number: 2,
      section: "Core Techniques",
      title: "The Techniques That Actually Work",
      description: "The four study techniques with the strongest research backing: retrieval practice, spaced repetition, interleaving, and elaboration.",
      lessons: [
        {
          id: "2.1",
          title: "Retrieval Practice",
          blocks: [
            { type: "p", text: "If you only take one technique from this entire course, take this one. **Retrieval practice** — actively trying to pull information out of memory (self-testing) — is one of the most well-supported findings in learning science, often called the **testing effect**." },
            { type: "p", text: "The counterintuitive part: the effort of struggling to recall something, even when you get it wrong, strengthens memory more than simply looking the answer up again. Retrieval isn't just a way of *checking* what you know — the act of retrieving *is itself* what builds long-term memory." },
            { type: "h", text: "What this looks like in practice" },
            { type: "list", items: [
              "Closing the book and writing down everything you remember about a topic, then checking what you missed.",
              "Using flashcards properly — actually trying to recall the answer before flipping, not flipping straight away.",
              "Doing practice questions **before** you feel 'ready', not just after.",
              "Explaining a concept out loud from memory, with no notes in front of you.",
            ]},
            { type: "callout", text: "Common mistake: using flashcards as a re-reading tool (reading the front, then immediately reading the back) skips the retrieval step entirely and gets almost none of the benefit. The struggle to recall is the part that matters." },
            { type: "check", qtype: "truefalse", q: "Simply re-reading your notes provides the same memory benefit as trying to recall the information from memory first.", correct: false, explain: "Retrieval practice (trying to recall, even with effort or partial failure) produces stronger long-term memory than passive re-reading." },
          ],
          quiz: [
            { q: "What is the 'testing effect'?", options: ["The idea that tests are always stressful", "The finding that actively recalling information strengthens memory more than re-reading it", "A way to predict exam scores", "A method for writing better tests"], correct: 1 },
            { q: "Which use of flashcards actually captures the benefit of retrieval practice?", options: ["Reading the front then immediately reading the back", "Trying to recall the answer before flipping the card", "Sorting cards by colour", "Reading through the whole deck once, front to back, without pausing"], correct: 1 },
            { type: "truefalse", q: "Getting an answer wrong during retrieval practice means it had no learning benefit.", correct: false, explain: "Even unsuccessful retrieval attempts (especially followed by feedback) can strengthen memory — the effortful attempt itself matters, not just getting it right." },
          ],
        },
        {
          id: "2.2",
          title: "Spaced Repetition",
          blocks: [
            { type: "p", text: "Given the forgetting curve from Module 1, **spaced repetition** is the direct response to it: reviewing material at increasing intervals over time, instead of cramming it all at once." },
            { type: "h", text: "Why spacing beats cramming for long-term memory" },
            { type: "p", text: "Cramming can produce a short-term bump in performance — but that memory decays fast, often within days. Spacing feels harder in the moment (you have to work to recall something you're starting to forget), but that difficulty is exactly what makes the memory stick. This is sometimes called **desirable difficulty** — a certain amount of struggle during learning actually improves long-term retention." },
            { type: "h", text: "A simple spacing schedule" },
            { type: "list", items: [
              "Review new material again **within 24 hours** of first learning it.",
              "Review again after about **3 days**.",
              "Review again after about **1 week**.",
              "Review again after about **2–3 weeks**, then monthly.",
              "If you recall something easily, push the next review further out. If you struggle, review it again sooner.",
            ]},
            { type: "callout", text: "This is why cramming the night before an exam is the worst possible time to first encounter difficult material — there's no way to space it, so you're relying entirely on short-term working memory that will mostly be gone within days." },
            { type: "check", q: "Why does spacing out study sessions work better than cramming, even though it feels harder?", options: ["It doesn't actually work better, it just feels different", "The mild difficulty of recalling slightly-forgotten information strengthens long-term memory", "Spacing takes less total time overall", "Cramming is always more effective for exams"], correct: 1, explain: "The 'desirable difficulty' of recalling something you've started to forget is what strengthens the memory trace, which cramming never triggers." },
          ],
          quiz: [
            { q: "What is 'desirable difficulty' in the context of spaced repetition?", options: ["Making study sessions unnecessarily long", "The idea that a degree of effortful struggle during recall improves long-term memory", "Studying only difficult subjects", "A term for exam stress"], correct: 1 },
            { type: "truefalse", q: "If you recall something very easily during a spaced review, you should review it again very soon after.", correct: false, explain: "Easy recall means you can safely push the next review further out — reviewing too soon after an easy recall wastes time that spacing is meant to save." },
            { q: "Why does a cram session the night before an exam tend to produce short-lived memory?", options: ["Because studying at night is biologically impossible", "Because there's no time to space out reviews, so it relies on working memory that decays within days", "Because cramming always causes anxiety", "It doesn't — cramming produces identical long-term results to spacing"], correct: 1 },
          ],
        },
        {
          id: "2.3",
          title: "Interleaving",
          blocks: [
            { type: "p", text: "Most students study in **blocks** — doing 20 algebra questions in a row, then 20 geometry questions in a row. **Interleaving** mixes different topics or problem types together within a single study session instead." },
            { type: "h", text: "Why mixing it up works better than blocking" },
            { type: "p", text: "Blocked practice feels good because once you're a few questions into a block, you already know which method to use — you're pattern-matching to 'the algebra chapter', not actually deciding. Interleaved practice forces you to identify **which** method or concept applies before you can even start solving — which is the exact skill an exam actually tests, since a real exam paper doesn't announce 'this is the algebra section' the way a textbook chapter does." },
            { type: "list", items: [
              "**Blocked:** AAAA BBBB CCCC — feels smooth, but doesn't train you to tell A, B, and C apart under pressure.",
              "**Interleaved:** ABCA CABB CBAC — feels harder and slower at first, but builds the actual skill of recognising which approach a problem needs.",
            ]},
            { type: "callout", text: "Interleaving is one of the clearest examples in learning science of a technique that feels worse while you're doing it (slower, more mistakes) but produces measurably better results on a later test than blocked practice." },
            { type: "check", qtype: "truefalse", q: "Interleaved practice usually feels easier and more fluent while you're doing it than blocked practice.", correct: false, explain: "It's the reverse — interleaving usually feels harder and slower in the moment, even though it produces better long-term results than blocked practice." },
          ],
          quiz: [
            { q: "What does 'interleaving' mean in a study context?", options: ["Studying only one topic for very long sessions", "Mixing different topics or problem types together within a session", "Taking long breaks between study sessions", "Reading textbooks in a specific chapter order"], correct: 1 },
            { q: "Why is interleaving closer to what a real exam actually demands than blocked practice?", options: ["Because exams are always harder than practice", "Because real exams don't label which topic each question belongs to, so you must identify the right approach yourself", "Because interleaving takes less time", "There's no real connection between the two"], correct: 1 },
            { type: "type", q: "Fill in the blank: blocked practice (AAAA BBBB) tends to feel easier, but ______ practice (ABCA CABB) tends to produce better long-term results despite feeling harder.", accepted: ["interleaved", "interleaving"], explain: "Interleaved practice is the technique that mixes topic types and produces stronger long-term retention despite feeling harder in the moment." },
          ],
        },
        {
          id: "2.4",
          title: "Elaboration & Dual Coding",
          blocks: [
            { type: "p", text: "Two more techniques that consistently show up in the research: **elaboration** and **dual coding**." },
            { type: "term", term: "Elaboration", definition: "Explaining and describing ideas with many details, and connecting new information to what you already know. Asking yourself 'why is this true?' and 'how does this connect to X?' builds far richer, more retrievable memories than passively accepting a fact." },
            { type: "term", term: "Self-explanation", definition: "A specific form of elaboration — pausing while learning to explain, in your own words, why a step makes sense or how it connects to the bigger picture, rather than just following along." },
            { type: "term", term: "Dual coding", definition: "Combining words with visuals — diagrams, timelines, sketches, concept maps — because information encoded both verbally and visually creates two separate retrieval paths in memory, rather than just one." },
            { type: "h", text: "What this looks like in practice" },
            { type: "list", items: [
              "Instead of memorising a fact in isolation, ask **'why is this true?'** and **'what would happen if this weren't true?'**",
              "Turn a block of written notes into a simple diagram, timeline, or flowchart — even a rough one.",
              "Explain a new concept as if teaching it to someone who's never heard of it (the 'Feynman technique').",
              "Connect new material explicitly to something you already understand well — 'this is like X, except...'.",
            ]},
            { type: "callout", text: "Elaboration and dual coding both work for the same underlying reason: they force deeper processing of the material and create more ways for your brain to reach the memory later, instead of relying on one single, fragile retrieval path." },
            { type: "check", q: "What is 'dual coding'?", options: ["Studying two subjects in the same session", "Combining verbal information with visual information (diagrams, sketches) to create two retrieval paths", "Writing notes twice", "A programming technique"], correct: 1, explain: "Dual coding pairs words with visuals so the same information can be retrieved via either path." },
          ],
          quiz: [
            { q: "Which of these best demonstrates elaboration?", options: ["Copying a definition word-for-word", "Asking 'why is this true?' and connecting it to something you already know", "Reading the same paragraph five times without pausing", "Highlighting a sentence in yellow"], correct: 1 },
            { q: "The 'Feynman technique' of explaining a concept as if teaching a beginner is an example of which technique?", options: ["Dual coding", "Self-explanation / elaboration", "Cramming", "Blocked practice"], correct: 1 },
            { type: "truefalse", q: "Dual coding works because combining visual and verbal information creates more than one path to retrieve the memory later.", correct: true, explain: "That's exactly the mechanism — two encoding paths (verbal and visual) make the information more retrievable than a single path alone." },
          ],
        },
      ],
    },
    {
      id: "m3",
      number: 3,
      section: "Core Techniques",
      title: "Techniques That Feel Good But Don't Work",
      description: "Popular study habits that create a false sense of mastery — and what the research actually says about them.",
      lessons: [
        {
          id: "3.1",
          title: "Passive Re-Reading, Highlighting & the Learning Styles Myth",
          blocks: [
            { type: "p", text: "Some of the most common study habits are also among the **least effective** — not because students are lazy, but because these methods create a strong, misleading feeling of fluency without building real long-term memory." },
            { type: "h", text: "Re-reading and highlighting" },
            { type: "p", text: "Re-reading and highlighting both feel productive because the highlighted text or the reread page feels familiar and easy to process — but familiarity is a **working memory** feeling (see Module 1), not evidence of long-term learning. Reviews of the research consistently rank these among the **least effective** techniques compared to retrieval practice and spaced repetition, despite being the most commonly used." },
            { type: "h", text: "The 'learning styles' myth" },
            { type: "p", text: "The idea that people learn best when taught in their preferred 'style' (visual, auditory, kinaesthetic, etc.) is extremely popular — but controlled studies have consistently failed to find evidence that matching teaching style to a person's preferred style improves learning outcomes. What actually helps everyone, regardless of preference, is **matching the study method to the material** — e.g. dual coding (visuals + words) for spatial content, verbal elaboration for conceptual content — not matching it to a fixed personal 'style'." },
            { type: "callout", text: "This doesn't mean visuals or diagrams are useless — dual coding (Lesson 2.4) genuinely helps. The myth is specifically the claim that each person has one fixed 'learning style' that they must be taught in to learn well." },
            { type: "check", qtype: "truefalse", q: "Highlighting text while reading is one of the most effective study techniques according to the research.", correct: false, explain: "Highlighting and re-reading are consistently found to be among the least effective techniques compared to retrieval practice and spacing, despite being extremely popular." },
          ],
          quiz: [
            { q: "Why does re-reading feel productive even when it isn't very effective for long-term memory?", options: ["It genuinely is the most effective technique", "It creates a feeling of familiarity/fluency that is mistaken for real learning", "It always takes the most time", "There is no explanation for this"], correct: 1 },
            { q: "What does the research actually say about matching teaching to a person's preferred 'learning style'?", options: ["It dramatically improves learning for everyone", "Controlled studies haven't found evidence it improves outcomes", "It only works for visual learners", "It's the single most important factor in learning"], correct: 1 },
            { type: "truefalse", q: "The 'learning styles myth' means that visual aids and diagrams are never useful for learning.", correct: false, explain: "Visuals can genuinely help (see dual coding) — the myth is the specific claim that each person has one fixed style they must be taught in." },
          ],
        },
        {
          id: "3.2",
          title: "Cramming vs Distributed Practice",
          blocks: [
            { type: "p", text: "Cramming — squeezing most of your studying into one long session right before a test — is probably the single most common study strategy, and also one of the most consistently shown to underperform **distributed (spaced) practice** for anything you need to remember beyond the test itself." },
            { type: "h", text: "What cramming actually buys you" },
            { type: "list", items: [
              "A short-term performance boost — cramming CAN work for a test happening within the next day or two.",
              "Very poor retention afterwards — material crammed the night before is often mostly forgotten within a week, sometimes less.",
              "High stress and fatigue, both of which independently make encoding new information harder (see Module 7).",
            ]},
            { type: "h", text: "The trade-off, honestly stated" },
            { type: "p", text: "If a test is tomorrow and you have nothing prepared, cramming is genuinely better than nothing. But if the goal is a subject you'll be examined on again later (a cumulative exam, a subject that builds on itself, or something you need for real understanding), distributed practice over weeks produces dramatically better long-term results for a similar total amount of study time — it's not about studying more, it's about spreading the same amount of study out." },
            { type: "callout", text: "Practical rule: never let 'I'll cram it later' be your plan for anything cumulative. Cramming is a last resort for damage control, not a study strategy." },
            { type: "check", q: "What is the main trade-off with cramming?", options: ["It never works at all, even short-term", "It can give a short-term boost but produces much weaker long-term retention than spaced practice", "It's always superior to spaced practice", "There is no meaningful difference between cramming and spacing"], correct: 1, explain: "Cramming can genuinely help for an immediate test but tends to be forgotten quickly, unlike distributed practice." },
          ],
          quiz: [
            { q: "For which situation might cramming be a reasonable (if imperfect) choice?", options: ["A cumulative final exam months away", "A test tomorrow with nothing prepared and no other option", "A subject you need to remember for years", "A skill that builds directly on earlier material"], correct: 1 },
            { type: "truefalse", q: "Distributed practice requires studying for a much greater total amount of time than cramming.", correct: false, explain: "Distributed practice is about spreading a similar amount of total study time across sessions, not necessarily increasing the total amount of time spent." },
            { q: "Why does high stress and fatigue during a cram session make things worse, beyond just poor timing?", options: ["They have no effect on learning at all", "Stress and fatigue independently make it harder to encode new information", "They only affect physical performance, not memory", "Cramming eliminates stress entirely"], correct: 1 },
          ],
        },
      ],
    },
    {
      id: "m4",
      number: 4,
      section: "Organising Knowledge",
      title: "Note-Taking & Organising Information",
      description: "How to take notes and organise material in a way that supports the techniques from Module 2, instead of undermining them.",
      lessons: [
        {
          id: "4.1",
          title: "Note-Taking Methods",
          blocks: [
            { type: "p", text: "The point of notes isn't to create a record of everything you heard or read — it's to create material you can later use for **retrieval practice**. A note-taking method that just transcribes information verbatim skips the processing step that makes notes useful later." },
            { type: "term", term: "Cornell method", definition: "The page is split into a main notes column, a narrower cue column (for keywords/questions written after the fact), and a summary section at the bottom. The cue column turns your own notes into ready-made retrieval-practice prompts." },
            { type: "term", term: "Mind mapping", definition: "A visual, branching structure starting from a central topic, radiating out into subtopics and connections. Especially useful for material with lots of interconnected relationships, since it doubles as dual coding (Lesson 2.4)." },
            { type: "term", term: "Outline method", definition: "A structured, indented hierarchy of headings, subheadings, and points — good for clearly sequenced or hierarchical material like a textbook chapter." },
            { type: "callout", text: "The method matters far less than what you do with the notes afterwards. Notes that are never revisited for retrieval practice provide almost none of their potential benefit, regardless of how well-organised they are." },
            { type: "check", qtype: "truefalse", q: "The main purpose of note-taking is to create a complete, word-for-word transcript of everything covered.", correct: false, explain: "Verbatim transcription skips the processing that makes notes genuinely useful — good notes are a summarised, organised base for later retrieval practice, not a full transcript." },
          ],
          quiz: [
            { q: "In the Cornell method, what is the cue column mainly used for?", options: ["Doodling", "Keywords/questions that turn your notes into retrieval-practice prompts", "A second copy of the main notes", "Nothing — it's decorative"], correct: 1 },
            { q: "Which note-taking method is described as especially suited to material with lots of interconnected relationships?", options: ["Outline method", "Cornell method", "Mind mapping", "Verbatim transcription"], correct: 2 },
            { q: "What ultimately matters most for whether notes are useful?", options: ["Handwriting neatness", "Whether they're later used for retrieval practice, not just their format", "The colour of pen used", "How many pages they fill"], correct: 1 },
          ],
        },
        {
          id: "4.2",
          title: "Summarising & Concept Mapping",
          blocks: [
            { type: "p", text: "Summarising — condensing a larger piece of material into your own words — is a form of elaboration (Lesson 2.4), but only if it's done actively." },
            { type: "h", text: "Doing it well vs doing it badly" },
            { type: "list", items: [
              "**Badly:** copying and slightly rewording sentences from the source, staying close to the original structure and language.",
              "**Well:** closing the source material, then writing what you remember and understand in your own structure and words — which is really retrieval practice combined with elaboration.",
            ]},
            { type: "h", text: "Concept maps" },
            { type: "p", text: "A concept map goes a step further than a summary by explicitly labelling the **relationships** between ideas (not just listing them) — arrows labelled 'causes', 'is a type of', 'leads to', 'is the opposite of'. Building one from memory, then checking it against the source, combines retrieval practice, elaboration, and dual coding all at once — which is why it's one of the more powerful (if time-consuming) study methods available." },
            { type: "callout", text: "A quick self-check for whether a summary was 'active' enough: could you have written it with the source material closed? If not, it was closer to copying than summarising." },
            { type: "check", q: "What's the key difference between an effective summary and an ineffective one?", options: ["Effective summaries are always longer", "Effective ones are written from memory in your own words/structure, not copied close to the original", "Ineffective summaries use more colour", "There's no meaningful difference"], correct: 1, explain: "A genuinely useful summary requires closing the source and reconstructing understanding from memory, not lightly rewording the original." },
          ],
          quiz: [
            { q: "What makes a concept map different from a simple list or summary?", options: ["It uses more colours", "It explicitly labels the relationships between ideas, not just lists them", "It's always shorter than a summary", "It removes the need for any other study technique"], correct: 1 },
            { type: "truefalse", q: "Summarising by closely rewording sentences from the original source captures most of the benefit of active summarising.", correct: false, explain: "Staying close to the source's language and structure is closer to copying — it skips the retrieval and reconstruction that makes summarising genuinely useful." },
            { q: "Which three techniques does building a concept map from memory combine?", options: ["Cramming, highlighting, re-reading", "Retrieval practice, elaboration, and dual coding", "Blocked practice, cramming, and re-reading", "None — it's a standalone technique unrelated to the others"], correct: 1 },
          ],
        },
      ],
    },
    {
      id: "m5",
      number: 5,
      section: "Mindset",
      title: "Mindset & Metacognition",
      description: "How your beliefs about ability, and your awareness of your own understanding, shape how effectively you learn.",
      lessons: [
        {
          id: "5.1",
          title: "Growth Mindset vs Fixed Mindset",
          blocks: [
            { type: "p", text: "Psychologist Carol Dweck's research distinguishes between two beliefs people hold about ability, and the belief you hold changes how you respond to difficulty — which directly affects whether you keep going when studying gets hard." },
            { type: "term", term: "Fixed mindset", definition: "The belief that ability (intelligence, talent) is a fixed trait you either have or don't. Under this belief, struggling or failing feels like evidence of a personal limit, which makes people avoid challenges that risk exposing it." },
            { type: "term", term: "Growth mindset", definition: "The belief that ability can be developed through effort, strategy, and practice. Under this belief, struggling is evidence you're doing something appropriately hard, not evidence of a limit — which makes people more willing to persist through difficulty." },
            { type: "h", text: "Why this connects directly to Module 2 and 3" },
            { type: "p", text: "Retrieval practice and interleaving both feel harder than re-reading — that's the whole point (desirable difficulty). A fixed mindset makes that difficulty feel discouraging ('I'm bad at this'); a growth mindset reframes it correctly ('this difficulty means it's working')." },
            { type: "callout", text: "A growth mindset isn't just 'positive thinking' — it specifically changes how you interpret struggle: as information about effort and strategy, not as a verdict on fixed ability." },
            { type: "check", qtype: "truefalse", q: "Under a growth mindset, struggling with something difficult is typically interpreted as evidence of a fixed personal limitation.", correct: false, explain: "That interpretation is characteristic of a fixed mindset. A growth mindset interprets struggle as a normal part of developing ability through effort and strategy." },
          ],
          quiz: [
            { q: "Who is most associated with growth mindset research?", options: ["Hermann Ebbinghaus", "Carol Dweck", "B.F. Skinner", "Jean Piaget"], correct: 1 },
            { q: "Why does interpreting difficulty matter for using techniques like retrieval practice and interleaving?", options: ["It doesn't matter at all", "Those techniques deliberately feel harder, so how you interpret that difficulty affects whether you persist with them", "Difficulty only matters for exams, not study techniques", "Growth mindset makes techniques easier, not just easier to persist with"], correct: 1 },
            { type: "truefalse", q: "A growth mindset claims that anyone can become equally talented at anything with no limits whatsoever.", correct: false, explain: "Growth mindset is about ability being developable through effort and strategy, not a claim that all limits or differences disappear entirely." },
          ],
        },
        {
          id: "5.2",
          title: "Metacognition — Monitoring Your Own Understanding",
          blocks: [
            { type: "p", text: "**Metacognition** is thinking about your own thinking — specifically, accurately judging what you do and don't actually understand. It's a skill in its own right, and most students are worse at it than they assume." },
            { type: "h", text: "The illusion of competence" },
            { type: "p", text: "Because re-reading and recognising familiar material feels easy (Module 3), students often judge their own understanding as higher than it actually is — this gap between felt confidence and real knowledge is sometimes called the **illusion of competence**. It's the single biggest reason students are surprised by exam results after feeling 'ready'." },
            { type: "h", text: "How to check your understanding honestly" },
            { type: "list", items: [
              "Close your notes and try to explain the topic out loud, from memory, in full — gaps and stumbles reveal exactly what you don't actually know.",
              "Do practice questions **without** looking anything up first, then check.",
              "Ask yourself specifically: 'could I teach this to someone who's never seen it?' — not just 'does this feel familiar?'",
            ]},
            { type: "callout", text: "This is exactly why retrieval practice (Lesson 2.1) does double duty: it builds memory AND it's the most honest metacognitive check available, because you can't fake successful recall the way you can fake feeling 'ready' from re-reading." },
            { type: "check", q: "What is the 'illusion of competence'?", options: ["A magic trick", "The gap between how well you feel you understand something and how well you actually understand it", "A memory technique", "A type of exam question"], correct: 1, explain: "It's the mismatch between felt confidence (often inflated by familiarity) and real, retrievable knowledge." },
          ],
          quiz: [
            { q: "Why does re-reading tend to inflate a student's sense of how well they understand something?", options: ["Re-reading always genuinely improves understanding", "The familiarity it produces feels like understanding, even without real recall ability", "It has no effect on confidence at all", "Re-reading always decreases confidence"], correct: 1 },
            { q: "Which of these is the most honest way to check your own understanding?", options: ["Judging based on how familiar the material feels", "Trying to explain the topic from memory with no notes, and noticing where you get stuck", "Counting how many times you've read it", "Asking how long you spent studying"], correct: 1 },
            { type: "truefalse", q: "Metacognition and retrieval practice are unrelated skills.", correct: false, explain: "They're closely connected — retrieval practice is one of the most reliable ways to accurately test your own metacognitive judgement of what you know." },
          ],
        },
        {
          id: "5.3",
          title: "Goal Setting for Study",
          blocks: [
            { type: "p", text: "Vague goals like 'study more' or 'get better at maths' give you nothing to actually act on. Specific, well-structured goals give studying direction and let you tell, objectively, whether a session worked." },
            { type: "h", text: "What makes a study goal effective" },
            { type: "list", items: [
              "**Specific:** 'Do 15 retrieval-practice questions on cell division' beats 'study biology'.",
              "**Process-focused, not just outcome-focused:** a goal like 'do 3 spaced review sessions this week' is something you directly control; a goal like 'get an A' depends on many things beyond just effort.",
              "**Appropriately challenging:** a goal that's trivially easy doesn't build much; a goal wildly out of reach just produces discouragement — aim for a level that stretches you but is realistically achievable this week.",
            ]},
            { type: "h", text: "Short, medium, and long-term goals working together" },
            { type: "p", text: "A long-term goal ('understand this whole topic by the exam') is too big to act on directly. Break it into medium-term goals ('finish these two modules by Friday') and short-term goals ('do today's retrieval session'), so that finishing today's session is visible, concrete progress toward the bigger goal — not a separate, disconnected task." },
            { type: "callout", text: "Process goals ('did I do the session?') are more motivating over time than pure outcome goals ('did I get the mark I wanted?') because they're something you can control and check off every single day, regardless of how any one test goes." },
            { type: "check", q: "Why is a process goal like 'complete 3 spaced review sessions this week' often more useful than an outcome goal like 'get an A'?", options: ["Outcome goals are always better", "Process goals are directly within your control and checkable, unlike outcomes affected by many factors", "Process goals guarantee a specific grade", "There's no real difference"], correct: 1, explain: "You can always control whether you do a review session; you can't fully control the exact grade outcome, which depends on more than effort alone." },
          ],
          quiz: [
            { q: "Which of these is the most effective study goal?", options: ["Study harder", "Get better grades", "Complete 15 retrieval-practice questions on photosynthesis today", "Be smarter"], correct: 2 },
            { type: "truefalse", q: "A goal that is trivially easy to achieve is generally just as useful for motivation as an appropriately challenging one.", correct: false, explain: "Goals that are too easy don't build much and don't sustain motivation the way an appropriately challenging, achievable goal does." },
            { q: "What is the relationship between short-, medium- and long-term study goals?", options: ["They should be set completely independently of each other", "Short-term goals should be concrete steps that visibly build toward medium- and long-term goals", "Only long-term goals actually matter", "Short-term goals should be ignored in favour of the final outcome"], correct: 1 },
          ],
        },
      ],
    },
    {
      id: "m6",
      number: 6,
      section: "Time & Focus",
      title: "Time, Focus & Procrastination",
      description: "Planning study time realistically, protecting focus, and understanding why procrastination happens so you can actually beat it.",
      lessons: [
        {
          id: "6.1",
          title: "Planning a Study Schedule",
          blocks: [
            { type: "p", text: "A study schedule's real job isn't to look impressive — it's to make the decision of 'what do I study, and when' *before* the moment you're supposed to be studying, since that decision itself is a common point where procrastination creeps in." },
            { type: "h", text: "Building a schedule that actually gets followed" },
            { type: "list", items: [
              "**Time-block, don't just list tasks.** 'Study biology' with no time attached is easy to defer indefinitely. 'Biology retrieval practice, 4:00–4:30pm' has a start and end.",
              "**Build in spacing, not blocks** (Lessons 2.2 & 2.3) — a schedule that studies one subject for a whole day undoes the benefit of spacing and interleaving.",
              "**Be realistic about total capacity.** An overstuffed schedule gets abandoned entirely after the first bad day; a slightly conservative one gets followed.",
              "**Schedule breaks and rest explicitly** — treating rest as part of the plan rather than something that only happens when the plan fails.",
            ]},
            { type: "callout", text: "A realistic schedule you actually follow beats an ambitious one you abandon by Wednesday. The best schedule is the one that survives contact with a bad day." },
            { type: "check", qtype: "truefalse", q: "A study schedule that lists tasks without specific times attached is generally just as effective as one with time-blocks.", correct: false, explain: "Vague task lists without specific times are much easier to defer indefinitely than concrete time-blocked plans." },
          ],
          quiz: [
            { q: "Why is spacing subjects across a schedule (rather than one big block per subject) important?", options: ["It has no real effect", "It preserves the benefits of spaced repetition and interleaving rather than undoing them", "It only matters for language subjects", "Blocking one subject per day is always more effective"], correct: 1 },
            { q: "What tends to happen to an overly ambitious, overstuffed study schedule?", options: ["It's always followed perfectly", "It tends to get abandoned entirely after the first difficult day", "It automatically becomes more realistic over time", "It has no downside compared to a realistic one"], correct: 1 },
          ],
        },
        {
          id: "6.2",
          title: "Focus, Deep Work & the Pomodoro Technique",
          blocks: [
            { type: "p", text: "Not all study time is equal — an hour of genuinely focused attention produces far more learning than three distracted hours with a phone nearby. Protecting focus is a study technique in its own right." },
            { type: "term", term: "Deep work", definition: "Focused, distraction-free effort on a cognitively demanding task. Even short periods of genuine deep work tend to outproduce much longer periods of fragmented, distracted effort." },
            { type: "term", term: "The Pomodoro Technique", definition: "A time-management method: work in a focused block (traditionally 25 minutes), then take a short break (5 minutes), repeating this cycle, with a longer break after several cycles. It works by making 'just 25 minutes' feel manageable, and using the approaching break as a concrete incentive to stay focused." },
            { type: "h", text: "Why constant task-switching costs more than it seems" },
            { type: "p", text: "Every time attention switches — even briefly, to check a notification — there's a real cost to re-establishing focus afterwards, sometimes called 'attention residue'. This is why a 45-minute session with your phone in another room can outperform a 90-minute session with it face-up on the desk, even though the second session has more total time." },
            { type: "callout", text: "The point of a method like Pomodoro isn't the exact number of minutes — it's creating a clear boundary that makes 'just this one block' feel achievable, and protecting that block from interruption." },
            { type: "check", q: "What is 'attention residue'?", options: ["A cleaning product", "The lingering cost to focus that remains after switching attention away and back, even briefly", "A type of note-taking method", "A memory technique"], correct: 1, explain: "Attention residue describes the real cost of re-establishing deep focus after even a brief interruption or task-switch." },
          ],
          quiz: [
            { q: "In the traditional Pomodoro Technique, how long is a typical focused work block?", options: ["5 minutes", "25 minutes", "90 minutes", "3 hours"], correct: 1 },
            { type: "truefalse", q: "A 90-minute study session with a phone visible and buzzing nearby will generally produce as much learning as a 45-minute session with the phone out of the room.", correct: false, explain: "Attention residue from repeated interruptions means the shorter, uninterrupted session often outperforms the longer, distracted one." },
            { q: "What is the main purpose of the short break in a Pomodoro cycle?", options: ["To completely disengage from the study topic for the rest of the day", "To provide a genuine, incentivising rest point that makes the next focused block easier to start", "To replace the need for sleep", "It serves no real purpose"], correct: 1 },
          ],
        },
        {
          id: "6.3",
          title: "Why We Procrastinate (and How to Beat It)",
          blocks: [
            { type: "p", text: "Procrastination is often misunderstood as a time-management problem or laziness — but research increasingly frames it as an **emotion-regulation problem**: putting off a task because of the negative feelings (anxiety, boredom, self-doubt) it triggers, not because of the time itself." },
            { type: "h", text: "The emotional-regulation view" },
            { type: "p", text: "Starting a task that feels overwhelming, boring, or threatens your sense of competence produces genuine, immediate discomfort. Avoiding the task removes that discomfort right away — which is a powerful, immediate reward that makes procrastination self-reinforcing, even though it creates a much larger cost later (more stress, less time, worse work)." },
            { type: "h", text: "Practical strategies that follow from this" },
            { type: "list", items: [
              "**Shrink the first step.** 'Write the essay' feels overwhelming; 'open the document and write one sentence' doesn't — the goal is reducing the emotional barrier to just starting.",
              "**Make starting easier than not starting.** Have materials ready, the right tab open, the timer set — remove friction between the impulse and the action.",
              "**Forgive the last slip-up.** Research on self-compassion after procrastinating shows it reduces future procrastination more than self-criticism does — guilt tends to fuel more avoidance, not less.",
              "**Use a visible commitment** — telling someone your plan, or time-blocking it (Lesson 6.1), makes the intention harder to quietly abandon.",
            ]},
            { type: "callout", text: "The core insight worth remembering: procrastination is usually about managing an uncomfortable feeling in the short term, not about poor scheduling. Fixes that only target the schedule (more apps, more planners) without addressing the emotional trigger tend not to stick." },
            { type: "check", qtype: "truefalse", q: "Being harshly self-critical after procrastinating tends to reduce the likelihood of procrastinating again in future.", correct: false, explain: "Research on self-compassion suggests the opposite — self-criticism after procrastinating tends to increase future procrastination, while self-compassion tends to reduce it." },
          ],
          quiz: [
            { q: "According to the emotion-regulation view, what is procrastination primarily about?", options: ["Poor time-management apps", "Avoiding the uncomfortable feelings a task triggers, which provides immediate short-term relief", "A fixed personality trait that can't be changed", "Simply not caring about the outcome"], correct: 1 },
            { q: "Why does 'shrinking the first step' help with procrastination?", options: ["It makes the task take less total time", "It lowers the emotional barrier to starting, which is the actual obstacle", "It has no real effect", "It removes the need to ever finish the task"], correct: 1 },
            { type: "truefalse", q: "Avoiding a task provides an immediate, short-term emotional reward, which is part of why procrastination is self-reinforcing.", correct: true, explain: "The immediate relief from avoiding discomfort is a real, powerful reward that reinforces the procrastination pattern even as it creates larger costs later." },
          ],
        },
        {
          id: "6.4",
          title: "Managing Digital Distraction",
          blocks: [
            { type: "p", text: "Smartphones and notifications are specifically engineered to capture attention — which makes them a uniquely difficult distraction to manage through willpower alone. The most effective approaches change the **environment**, not just the intention." },
            { type: "h", text: "Environment-first strategies" },
            { type: "list", items: [
              "**Physical distance beats willpower.** A phone in another room is dramatically more effective than a phone face-down on the same desk — proximity alone measurably affects available attention, even when the phone is silent.",
              "**Turn off notifications**, don't just silence sound — a visible badge or banner still pulls attention even without a sound.",
              "**Use website/app blockers** during study blocks rather than relying on in-the-moment self-restraint, since willpower is a limited and fatigable resource across a study session.",
              "**Batch checking, not constant checking.** Deciding in advance ('I'll check messages after this block') removes the repeated, draining decision of 'should I check now?' throughout the session.",
            ]},
            { type: "callout", text: "The theme connecting this lesson to the rest of the module: the goal isn't more willpower — it's designing a study environment where the distracting choice is simply harder to make than the focused one." },
            { type: "check", q: "Why does simply silencing a phone (rather than removing it from the room) often fail to prevent distraction?", options: ["Silencing doesn't work at all, even briefly", "A visible phone can still pull attention through visual notifications and its mere presence, even without sound", "Silent phones use more battery", "There's no difference between silencing and removing a phone"], correct: 1, explain: "Visual notifications and even the phone's presence alone can pull attention, which is why physical distance is more effective than silencing alone." },
          ],
          quiz: [
            { q: "Which strategy is described as more effective than relying on willpower alone during a study session?", options: ["Keeping the phone face-up in case of emergencies", "Changing the environment — e.g. physical distance from the phone, or blockers", "Checking notifications constantly to 'get it over with'", "Studying with music that has lyrics"], correct: 1 },
            { type: "truefalse", q: "Willpower is described as an unlimited resource that doesn't get depleted across a study session.", correct: false, explain: "The material describes willpower as limited and fatigable, which is why environment-based strategies (removing temptation) tend to outperform relying on willpower alone for an entire session." },
            { q: "What is the benefit of 'batch checking' messages instead of checking constantly?", options: ["It removes the repeated, draining decision of whether to check right now", "It has no benefit over constant checking", "It guarantees you'll never miss anything important", "It only works for emails, not messages"], correct: 0 },
          ],
        },
      ],
    },
    {
      id: "m7",
      number: 7,
      section: "Body & Brain",
      title: "The Body-Brain Connection",
      description: "How sleep, exercise, nutrition and stress directly affect your ability to encode and recall information — not just your general wellbeing.",
      lessons: [
        {
          id: "7.1",
          title: "Sleep and Learning",
          blocks: [
            { type: "p", text: "Sleep isn't downtime from learning — it's an active part of the memory process. During sleep, the brain **consolidates** memories formed during the day, strengthening and stabilising them for long-term storage." },
            { type: "h", text: "Why an all-nighter before an exam usually backfires" },
            { type: "p", text: "Studying late into the night crowds out the sleep needed to consolidate that very material — so the last few hours of frantic 'extra' study can end up worse than useless, because they cost consolidation time for everything studied earlier in the day too. Sleep-deprived encoding (trying to learn new material while badly rested) is also measurably less effective than well-rested encoding — tired brains form weaker initial memories, on top of losing the consolidation benefit." },
            { type: "list", items: [
              "New learning gets **consolidated** into more stable long-term memory during sleep, particularly during specific sleep stages.",
              "Sleep deprivation impairs **both** forming new memories (encoding) and retaining ones from earlier in the day (consolidation) — it's a double cost, not a single one.",
              "This is exactly why a spaced study schedule (Lesson 2.2, Lesson 6.1) that ends at a reasonable hour tends to outperform a compressed, sleep-cutting cram schedule for the same total material.",
            ]},
            { type: "callout", text: "Practical takeaway: protecting sleep, especially the night(s) right after learning difficult material and the night before a big test, is itself a study technique — not a separate wellness issue disconnected from performance." },
            { type: "check", qtype: "truefalse", q: "Sacrificing sleep for a few extra hours of study the night before an exam is generally a good trade-off.", correct: false, explain: "Lost sleep costs both memory consolidation of earlier studying and the quality of new, sleep-deprived encoding — it's rarely a good trade for the last few hours before a test." },
          ],
          quiz: [
            { q: "What does memory 'consolidation' during sleep actually do?", options: ["Erases the day's memories", "Strengthens and stabilises memories formed during the day into more durable long-term storage", "Has no measurable effect on memory", "Only affects physical, not academic, skills"], correct: 1 },
            { q: "Why can an all-nighter before an exam backfire on the material studied earlier that same day, not just the new material?", options: ["It doesn't affect earlier material at all", "Skipping sleep costs the consolidation time needed to stabilise everything studied that day, including earlier material", "Earlier material is always forgotten regardless of sleep", "There's no connection between the two"], correct: 1 },
          ],
        },
        {
          id: "7.2",
          title: "Exercise, Nutrition & the Brain",
          blocks: [
            { type: "p", text: "Physical exercise and basic nutrition don't just affect general health — they have measurable, direct effects on cognitive function, attention and memory formation." },
            { type: "h", text: "Exercise" },
            { type: "p", text: "Regular aerobic exercise is associated with improved memory and executive function, partly through increased blood flow to the brain and the release of growth factors that support the hippocampus — a brain region central to forming new long-term memories. Even a single session of moderate exercise before a study session has been shown to improve subsequent focus and mood in ways that support learning." },
            { type: "h", text: "Nutrition and hydration" },
            { type: "list", items: [
              "**Hydration:** even mild dehydration is linked to reduced concentration and short-term memory performance — a genuinely simple, easily overlooked factor.",
              "**Blood sugar stability:** large sugar spikes followed by crashes are linked to attention dips; steadier energy intake (protein, complex carbs) tends to support more consistent focus across a study session.",
              "**Regularity matters more than any single 'brain food'.** Consistent, adequate meals support sustained attention far more reliably than any specific supplement or food choice.",
            ]},
            { type: "callout", text: "None of this replaces the study techniques in Modules 2–6 — but studying while dehydrated, hungry, or sedentary for hours on end is working against your own brain's basic requirements, not just a minor inconvenience." },
            { type: "check", q: "Why is aerobic exercise linked to improved memory function?", options: ["It has no real biological link, just a placebo effect", "It's associated with increased blood flow and growth factors supporting the hippocampus, a region central to forming new memories", "Exercise only improves physical, not cognitive, performance", "It works purely by reducing study time"], correct: 1, explain: "Exercise supports blood flow and growth factors linked to the hippocampus, a brain region central to memory formation." },
          ],
          quiz: [
            { q: "What has mild dehydration been linked to in terms of cognitive performance?", options: ["No measurable effect", "Reduced concentration and short-term memory performance", "Improved memory only", "Increased long-term memory exclusively"], correct: 1 },
            { type: "truefalse", q: "A single moderate exercise session before studying has been shown to have no effect on subsequent focus.", correct: false, explain: "Even a single moderate session has been shown to improve subsequent focus and mood in ways that support learning." },
            { q: "What matters more for sustaining attention across a long study session — a specific 'brain food', or regular, adequate meals?", options: ["A specific brain food always matters more", "Regular, adequate meals matter more reliably than any single food", "Neither has any effect", "Skipping meals entirely improves focus"], correct: 1 },
          ],
        },
        {
          id: "7.3",
          title: "Stress, Anxiety & Performance",
          blocks: [
            { type: "p", text: "Stress isn't simply 'bad' for learning — the relationship is more specific than that, and understanding the shape of it is genuinely useful for managing exam pressure." },
            { type: "h", text: "The inverted-U relationship" },
            { type: "p", text: "Performance under stress tends to follow an inverted-U shape: **too little** arousal/stress leads to low focus and motivation (nothing feels urgent enough to engage with), a **moderate** amount sharpens focus and energises effort, but **too much** overwhelms working memory and impairs recall — the exact system covered in Module 1. The goal isn't zero stress; it's staying in the productive middle zone." },
            { type: "h", text: "Why high anxiety specifically damages recall" },
            { type: "p", text: "High anxiety consumes working memory capacity with worry-related thoughts, leaving less capacity available for the actual task — which is part of why a capable, well-prepared student can still blank on an exam under extreme anxiety. This is a real cognitive-capacity effect, not just 'nerves' in a vague sense." },
            { type: "list", items: [
              "**Preparation reduces uncertainty**, which is itself one of the biggest drivers of anxiety — thorough retrieval practice (Module 2) builds genuine confidence, not just knowledge.",
              "**Brief, slow breathing** before a stressful task can measurably reduce physiological arousal back toward the productive middle zone.",
              "**Reframing physical arousal** (racing heart, alertness) as 'my body preparing to perform' rather than 'I'm panicking' has been shown to improve performance under pressure compared to trying to suppress the feeling entirely.",
            ]},
            { type: "callout", text: "This connects directly back to Module 1: severe anxiety essentially crowds out working memory capacity with worry, which is exactly the resource retrieval and recall depend on." },
            { type: "check", q: "According to the inverted-U relationship between stress and performance, what happens with very LOW stress/arousal?", options: ["Performance is always at its peak", "Focus and motivation tend to be low because nothing feels urgent enough to engage with", "It has an identical effect to very high stress", "There is no such thing as too little stress"], correct: 1, explain: "Very low arousal tends to produce low engagement and motivation — the productive zone is moderate stress, not none." },
          ],
          quiz: [
            { q: "What does the inverted-U relationship suggest about the ideal level of stress for performance?", options: ["Zero stress is always ideal", "Maximum stress is always ideal", "A moderate level is ideal — both too little and too much impair performance", "Stress has no relationship to performance at all"], correct: 2 },
            { q: "Why does high anxiety specifically impair recall during an exam?", options: ["It has no cognitive mechanism, it's purely psychological with no real effect", "Worry-related thoughts consume working memory capacity, leaving less available for the task itself", "Anxiety only affects physical performance, not memory", "High anxiety always improves recall"], correct: 1 },
            { type: "truefalse", q: "Reframing physical arousal (racing heart, alertness) as the body preparing to perform, rather than suppressing it, has been shown to help performance under pressure.", correct: true, explain: "Reappraisal of arousal as preparation/excitement rather than pure panic has been shown to improve performance compared to trying to suppress the feeling." },
          ],
        },
      ],
    },
    {
      id: "m8",
      number: 8,
      section: "Exam Performance",
      title: "Exam Technique",
      description: "Turning everything from Modules 1–7 into a concrete plan for revision, exam day itself, and managing nerves when it counts.",
      lessons: [
        {
          id: "8.1",
          title: "Building a Revision Plan",
          blocks: [
            { type: "p", text: "A good revision plan is really just Modules 2 and 6 applied on a calendar, working backwards from the exam date." },
            { type: "h", text: "Building the plan backwards" },
            { type: "list", items: [
              "**Start from the exam date** and work backwards, leaving the final 1–2 days for light review only, not new material — cramming new content right before an exam undermines both sleep (Lesson 7.1) and consolidation.",
              "**List topics, then rank them** by a mix of exam weighting and your own honest confidence (from Lesson 5.2's metacognition check) — weak, heavily-weighted topics get the most time.",
              "**Space each topic across multiple sessions**, not one long block per topic (Lesson 2.2/2.3), even if that means starting revision earlier than feels necessary.",
              "**Build in practice-paper time** close to (but not immediately before) the exam, since practice papers are one of the highest-value forms of retrieval practice available — they test recall under realistic conditions.",
            ]},
            { type: "callout", text: "A revision timetable is a prediction, not a contract — expect to adjust it as you discover which topics need more time than planned. A plan you revise is far more useful than a perfect plan you abandon." },
            { type: "check", qtype: "truefalse", q: "It's generally a good idea to save some brand-new, unstudied topics for the final day before an exam.", correct: false, explain: "The final day(s) should be light review of already-studied material, protecting sleep and consolidation — cramming new material right before the exam works against both." },
          ],
          quiz: [
            { q: "Which topics should generally get the most revision time?", options: ["Topics you already feel confident about", "Topics that are both heavily weighted in the exam and where you have lower confidence", "Whichever topic comes first alphabetically", "Only the very last topic covered in class"], correct: 1 },
            { q: "Why is a revision plan described as 'a prediction, not a contract'?", options: ["Because it should never be followed", "Because it's normal and expected to need adjusting as you discover which topics need more time", "Because plans have no real value", "Because only the exam date matters"], correct: 1 },
          ],
        },
        {
          id: "8.2",
          title: "Exam-Day Strategy & Command Words",
          blocks: [
            { type: "p", text: "Even excellent preparation can be undermined by poor time management or misreading what a question is actually asking — both are separate, learnable skills from knowing the content itself." },
            { type: "h", text: "Reading and planning before writing" },
            { type: "p", text: "Use any reading time to scan the whole paper first, noting mark allocations — a question worth 1 mark needs a short, direct answer; a question worth 6 marks needs structured, developed points. Roughly matching time spent to marks available (rather than writing until you 'feel done') prevents running out of time on high-value questions because of an over-length answer to an early, low-value one." },
            { type: "h", text: "Command words matter" },
            { type: "list", items: [
              "**'Identify' / 'State'** — a short, direct answer; no explanation needed.",
              "**'Describe'** — give a detailed account of what something is or how it happens, without needing to explain why.",
              "**'Explain'** — you must give reasons or causes ('because...'), not just describe what happens.",
              "**'Discuss' / 'Evaluate'** — present multiple sides or factors, often weighing them against each other, not just one viewpoint.",
              "**'Justify'** — give reasons that specifically support a stated choice or position.",
            ]},
            { type: "callout", text: "A perfectly accurate answer to the wrong command word (e.g. describing when the question asked you to explain) typically scores far below full marks — matching the command word is often worth as much as the content itself." },
            { type: "check", q: "A question asks you to 'explain' a concept. What does this specifically require, beyond a 'describe' answer?", options: ["Nothing different — they mean the same thing", "Giving reasons or causes ('because...'), not just describing what happens", "A shorter answer than 'describe'", "Listing multiple unrelated topics"], correct: 1, explain: "'Explain' specifically requires reasoning/causation, which is a distinct requirement from simply describing what something is." },
          ],
          quiz: [
            { q: "Why is it useful to roughly match time spent on a question to its mark allocation?", options: ["It has no real benefit", "It helps prevent running out of time for high-value questions due to overspending on low-value ones", "Marks and time are always unrelated", "It only matters for multiple-choice questions"], correct: 1 },
            { q: "Which command word specifically requires presenting and weighing multiple sides or factors?", options: ["Identify", "Describe", "Discuss/Evaluate", "State"], correct: 2 },
            { type: "truefalse", q: "A fully accurate answer that ignores the command word (e.g. describing instead of explaining) typically still receives full marks.", correct: false, explain: "Matching the command word is usually a distinct requirement from content accuracy — ignoring it typically costs significant marks even with correct content." },
          ],
        },
        {
          id: "8.3",
          title: "Managing Exam Stress & Nerves",
          blocks: [
            { type: "p", text: "This lesson applies Lesson 7.3's inverted-U stress model directly to the exam room itself — the goal on the day is staying in that productive middle zone, not eliminating nerves entirely." },
            { type: "h", text: "Before the exam" },
            { type: "list", items: [
              "Light review only — trust the spaced preparation already done rather than last-minute cramming, which mainly adds anxiety without adding much real knowledge (Lesson 6.3).",
              "Protect sleep the night before over squeezing in extra study (Lesson 7.1) — impaired recall from sleep loss usually costs more than any last-minute content gained.",
              "A few minutes of slow breathing beforehand can measurably reduce physiological arousal if you're starting from the anxious end of the inverted-U.",
            ]},
            { type: "h", text: "During the exam" },
            { type: "list", items: [
              "If you blank on a question, **move on and come back** rather than losing time to one question — a blank moment often passes once working memory isn't being consumed by panic about that specific question.",
              "**Reframe physical arousal** (racing heart, alertness) as your body preparing to perform, per Lesson 7.3's reappraisal research, rather than as a sign something is wrong.",
              "Re-read your plan against the command words (Lesson 8.2) before finalising an answer, especially for higher-mark questions.",
            ]},
            { type: "callout", text: "The single most effective long-term anxiety reducer isn't a technique used on exam day at all — it's genuine preparation via retrieval practice (Module 2), because confidence built from actually having tested your own recall reduces the uncertainty that drives anxiety in the first place." },
            { type: "check", qtype: "truefalse", q: "If you blank on a question during an exam, continuing to stare at it until you solve it is generally the best strategy.", correct: false, explain: "Moving on and returning later is generally more effective — continuing to dwell on a blank often keeps working memory consumed by panic rather than resolving it." },
          ],
          quiz: [
            { q: "What is described as the single most effective long-term way to reduce exam anxiety?", options: ["Breathing exercises on the day only", "Genuine preparation through retrieval practice, which builds real confidence and reduces uncertainty", "Avoiding thinking about the exam entirely beforehand", "Cramming extra content the night before"], correct: 1 },
            { q: "According to this lesson, what should you do the night before an exam if you're tempted to squeeze in extra study?", options: ["Always prioritise the extra study over sleep", "Generally protect sleep, since impaired recall from sleep loss usually costs more than the extra content gains", "It makes no difference either way", "Extra study the night before always improves the exam outcome"], correct: 1 },
            { type: "truefalse", q: "Reappraising a racing heart before an exam as 'my body preparing to perform' rather than 'I'm panicking' has research support for improving performance.", correct: true, explain: "This reappraisal strategy is drawn directly from the research described in Lesson 7.3, and has been shown to help performance under pressure compared to suppression." },
          ],
        },
      ],
    },
  ],
};
