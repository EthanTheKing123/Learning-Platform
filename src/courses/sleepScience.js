// Sleep Science course data.
// This is the ONLY file to touch when adding lessons to this course.
// Shape: modules -> lessons -> content blocks (+ a quiz per lesson).
//
// QUESTION TYPES — every quiz item, and every mid-lesson "check" block,
// can use one of four answer formats by setting `type` (quiz items) or
// `qtype` (check blocks — `type` is already used there to mark it as a
// checkpoint). Leaving it out defaults to "mcq".
//
//   mcq (default)  { q, options, correct, explain? }              — tap one option
//   truefalse      { q, correct: true|false, explain? }           — tap True/False
//   multi          { q, options, correct: [i, j], explain? }      — select ALL that apply
//   type           { q, accepted: ["answer", "alt answer"], explain? } — type the answer
//
// See README.md at the project root for the full block-type reference.

export const sleepScience = {
  id: "sleep-science",
  title: "Sleep Science",
  tagline: "From what sleep is, to how to use it well.",
  accent: "#2E7FD1",       // vibrant blue — used for progress, buttons, highlights
  ink: "#17213A",          // deep navy — used for headers, dark surfaces
  modules: [
    {
      id: "m1",
      number: 1,
      section: "Foundations",
      title: "What Is Sleep?",
      description: "Defining sleep, how it differs from rest and coma, why it evolved, and how we discovered REM.",
      lessons: [
        {
          id: "1.1",
          title: "Defining Sleep",
          blocks: [
            { type: "p", text: "Sleep looks simple from the outside — eyes closed, body still — but scientists don't define it by appearance. They define it by **behaviour** and by **brain activity**, and both have to be true at once for something to count as sleep." },
            { type: "h", text: "The behavioural criteria" },
            { type: "list", items: [
              "**Reduced responsiveness** — a sleeping animal reacts less to sound, light, or touch than an awake one, but can still be woken (unlike a coma).",
              "**Species-typical posture** — sleep happens in a recognisable position (lying down, roosting, floating) that's specific to the species.",
              "**Rapid reversibility** — this is the big one. A sleeping person wakes up quickly and returns to normal function. Coma and anaesthesia don't reverse quickly, and that's exactly why they're not sleep.",
              "**Homeostatic regulation** — if you're deprived of sleep, you sleep harder and longer afterwards to recover it. Rest doesn't work this way; you can't 'rest debt' the way you can sleep debt.",
            ]},
            { type: "h", text: "The neurological criteria" },
            { type: "p", text: "Behaviour alone isn't enough — plenty of animals sit still without sleeping. So scientists also require a specific, measurable brain signature, recorded with an **EEG (electroencephalogram)**: sleep produces distinct, repeating patterns of electrical activity that are different from both waking and from the flat-line pattern of unconsciousness under anaesthesia." },
            { type: "check", qtype: "truefalse", q: "An EEG is used to measure the brain-activity criterion for sleep.", correct: true, explain: "EEG (electroencephalogram) records the brain's electrical activity and is exactly how the neurological criterion is measured." },
            { type: "callout", text: "The key distinction to hold onto: sleep is a brain state you can be rapidly pulled out of. Coma and general anaesthesia are not — that reversibility is the line between sleep and unconsciousness." },
          ],
          quiz: [
            { q: "Which of these is a defining feature of sleep but NOT of coma?", options: ["Reduced responsiveness", "Rapid reversibility (can be woken quickly)", "Lying still", "Reduced muscle tone"], correct: 1 },
            { q: "What tool is used to measure the brain-activity criterion for sleep?", options: ["MRI", "EEG", "Thermometer", "Pulse oximeter"], correct: 1 },
            { q: "What happens after a period of sleep deprivation that doesn't happen after a period without 'rest'?", options: ["Nothing measurable", "The body sleeps harder/longer to recover the loss", "Heart rate permanently increases", "Appetite disappears"], correct: 1 },
            { type: "truefalse", q: "Sleep can be defined by behaviour alone, without looking at brain activity.", correct: false, explain: "Scientists require BOTH behavioural signs and a specific EEG signature — behaviour alone isn't enough, since plenty of still animals aren't asleep." },
          ],
        },
        {
          id: "1.2",
          title: "Sleep vs. Rest, Coma, Anaesthesia, Hibernation",
          blocks: [
            { type: "p", text: "Four states get confused with sleep constantly. Telling them apart is one of the clearest ways to understand what sleep actually *is*." },
            { type: "h", text: "Rest" },
            { type: "p", text: "Quiet wakefulness. Your EEG still shows waking patterns, you're still consciously aware, and you can respond instantly. No sleep-specific brain state has switched on." },
            { type: "h", text: "Coma" },
            { type: "p", text: "A state of unconsciousness caused by injury or illness, not a scheduled, reversible process. A person in a coma cannot be woken by stimulation, and the EEG pattern doesn't cycle the way sleep does — it's often flatter or irregular in a way that reflects damage, not regulation." },
            { type: "h", text: "General anaesthesia" },
            { type: "p", text: "Drug-induced unconsciousness. Interestingly, some anaesthetic drugs produce EEG patterns that superficially resemble deep sleep — but the brain isn't cycling through stages, there's no dreaming in the REM sense, and — critically — you don't wake up on your own. Reversibility is externally controlled by the anaesthetist, not internally by your brain." },
            { type: "h", text: "Hibernation" },
            { type: "p", text: "A seasonal, metabolic state (dramatically lowered heart rate, body temperature, and metabolism) that some animals use to survive winter. It's not the same as sleep — in fact, hibernating animals periodically **wake up to sleep**, suggesting sleep serves a function hibernation alone can't provide." },
            { type: "callout", text: "One test question worth remembering: hibernating animals interrupt hibernation to sleep. That single fact tells you sleep and hibernation are doing different jobs for the brain." },
          ],
          quiz: [
            { q: "What is the main difference between sleep and quiet rest?", options: ["Rest happens lying down", "Rest doesn't involve a distinct, cycling sleep-specific brain state", "Sleep only happens at night", "There is no real difference"], correct: 1 },
            { q: "Why is anaesthesia not classed as sleep, even though the EEG can look similar to deep sleep?", options: ["It happens in a hospital", "You can't wake yourself up from it — reversibility is externally controlled", "It's too short", "It only affects the heart"], correct: 1 },
            { q: "What do hibernating animals periodically do that reveals sleep and hibernation aren't the same thing?", options: ["They eat", "They wake up specifically to sleep", "They raise their body temperature permanently", "They stop breathing"], correct: 1 },
            { type: "type", q: "Fill in the blank: hibernating animals periodically wake up specifically to ______.", accepted: ["sleep", "to sleep"], explain: "That's the key fact from this lesson — hibernation and sleep aren't the same state, since animals interrupt one to get the other." },
          ],
        },
        {
          id: "1.3",
          title: "Why Sleep Evolved",
          blocks: [
            { type: "p", text: "Sleep is expensive from an evolutionary standpoint — a sleeping animal can't watch for predators, find food, or reproduce. For something that costly to survive across almost the entire animal kingdom, it must be doing something essential. There isn't one single agreed-upon answer; there are several leading theories, and they're not mutually exclusive." },
            { type: "h", text: "Energy conservation theory" },
            { type: "p", text: "Sleep lowers metabolic rate and body temperature, saving energy at times when activity (like foraging at night for a diurnal animal) would be inefficient or dangerous anyway. This explains *when* many animals sleep, but not fully *why* the brain needs to disengage so deeply to do it." },
            { type: "h", text: "Restoration theory" },
            { type: "p", text: "Sleep is when the body repairs itself — tissue repair, muscle growth, and immune-system reinforcement all increase during sleep, partly via growth hormone release. This theory explains physical recovery well but struggles to explain why the *brain* — not just the body — needs to go offline to achieve it." },
            { type: "h", text: "Brain maintenance / glymphatic theory" },
            { type: "p", text: "During sleep, the brain's waste-clearance system (the glymphatic system — covered in depth in Module 6) becomes far more active, flushing out metabolic byproducts that build up during waking hours. This is a strong candidate for *why sleep specifically requires unconsciousness* — the clearing process seems to need the brain to be offline to work efficiently." },
            { type: "h", text: "Memory & learning theory" },
            { type: "p", text: "Sleep — particularly certain stages — appears to be when the brain consolidates the day's learning, strengthening useful neural connections and pruning weaker ones. This is one of the best-supported theories today and will come up repeatedly through this course." },
            { type: "check", qtype: "multi", q: "Which of these are among the leading theories for why sleep evolved?", options: ["Energy conservation", "Restoration/repair", "Memory consolidation", "Random chance with no function"], correct: [0, 1, 2], explain: "Energy conservation, restoration, and memory consolidation (plus brain maintenance) are the leading theories — 'no function' isn't one of them, given how costly sleep is." },
            { type: "callout", text: "The honest scientific answer: sleep probably evolved for more than one reason, and different theories explain different pieces of the puzzle rather than competing to be the single 'true' one." },
          ],
          quiz: [
            { q: "Why is sleep considered evolutionarily 'expensive'?", options: ["It uses too much food", "A sleeping animal can't watch for predators or find food", "It makes animals grow too fast", "It only happens in mammals"], correct: 1 },
            { q: "Which theory is most directly about waste clearance in the brain?", options: ["Energy conservation", "Restoration theory", "Brain maintenance / glymphatic theory", "Memory theory"], correct: 2 },
            { q: "What's the current scientific consensus on why sleep evolved?", options: ["Only one theory is correct and the others are disproven", "Multiple theories likely each explain part of the picture", "Nobody has any theories", "Sleep has no evolutionary function"], correct: 1 },
          ],
        },
        {
          id: "1.4",
          title: "A Brief History of Sleep Science",
          blocks: [
            { type: "p", text: "For most of history, sleep was treated as simple 'switching off' — not something worth scientific study. That changed dramatically in the 20th century." },
            { type: "h", text: "The discovery of REM sleep (1953)" },
            { type: "p", text: "At the University of Chicago, researcher **Nathaniel Kleitman** and his graduate student **Eugene Aserinsky** were observing sleeping infants and noticed periods of rapid eye movement under closed eyelids, accompanied by a distinct, more 'awake-like' EEG pattern. This was the discovery of **REM (Rapid Eye Movement) sleep** — proof that sleep wasn't one uniform state, but had an active, brain-busy phase inside it." },
            { type: "p", text: "Follow-up work (notably by Kleitman's other student, **William Dement**) showed that waking people specifically during REM periods led to vivid dream reports far more often than waking them from other stages — connecting REM directly to dreaming for the first time with real evidence, rather than guesswork." },
            { type: "h", text: "Why this mattered" },
            { type: "p", text: "Before this discovery, sleep research had almost nowhere to go — there was no objective way to say sleep had internal structure. Once REM was identified, scientists could finally ask precise questions: how do stages cycle? What happens in each one? Does disrupting one stage specifically cause problems? Nearly everything in Modules 2 and 3 of this course exists because of this discovery." },
            { type: "callout", text: "One exam-style fact worth locking in: Aserinsky and Kleitman (1953) discovered REM sleep; Dement later linked REM specifically to dreaming." },
          ],
          quiz: [
            { q: "What did Aserinsky and Kleitman discover in 1953?", options: ["Sleep apnea", "REM sleep", "The circadian rhythm", "Melatonin"], correct: 1 },
            { q: "How did researchers first strongly link REM sleep to dreaming?", options: ["By scanning brains with MRI", "By waking people during REM and finding vivid dream reports were far more common", "By asking people to keep dream diaries", "It was assumed, not tested"], correct: 1 },
            { q: "Why was the discovery of REM sleep so significant for the field?", options: ["It proved sleep was one uniform state", "It showed sleep had internal structure, opening up precise research questions", "It ended sleep research", "It disproved the existence of dreams"], correct: 1 },
            { type: "truefalse", q: "REM sleep was discovered before scientists had any way to study sleep's internal structure.", correct: true, explain: "Exactly — before 1953, there was no objective way to say sleep had internal structure at all. REM's discovery is what opened that door." },
          ],
        },
      ],
    },
    {
      id: "m2", number: 2, section: "Foundations",
      title: "The Architecture of Sleep",
      description: "How sleep is measured, NREM stages 1–3, REM sleep, and reading a hypnogram.",
      lessons: [
        {
          id: "2.1",
          title: "How Sleep Is Measured",
          blocks: [
            { type: "p", text: "To study sleep scientifically, researchers needed a way to record what the brain and body are doing without waking the sleeper up. The gold-standard tool for this is the **polysomnogram (PSG)**, which combines three separate recordings at once." },
            { type: "term", term: "EEG", definition: "Electroencephalogram — electrodes on the scalp record the brain's electrical activity. This is what actually defines which sleep stage you're in." },
            { type: "term", term: "EOG", definition: "Electro-oculogram — electrodes near the eyes track eye movement. Crucial for spotting REM sleep, which is named for exactly this." },
            { type: "term", term: "EMG", definition: "Electromyogram — electrodes on the chin/limbs measure muscle tone. Muscle tone drops sharply in REM sleep (this is the paralysis that stops you acting out dreams)." },
            { type: "p", text: "Put together, these three signals are what let a sleep scientist look at a night's recording and say, minute by minute, exactly what stage someone was in — this is the same technique that let Aserinsky and Kleitman discover REM sleep in Module 1." },
            { type: "check", q: "Which signal specifically detects the muscle paralysis of REM sleep?", options: ["EEG", "EOG", "EMG"], correct: 2, explain: "EMG (muscle activity) is what shows the sharp drop in muscle tone that defines REM atonia." },
            { type: "h", text: "Why three signals, not one" },
            { type: "p", text: "EEG alone can't fully distinguish REM from light waking in every case — the brainwave pattern in REM is fast and can superficially resemble being awake. Adding EOG (rapid eye movement, but eyes closed) and EMG (muscles slack, unlike waking) resolves the ambiguity. It's the combination of all three that makes a stage call reliable." },
            { type: "callout", text: "Remember it as: **EEG = brain, EOG = eyes, EMG = muscles.** Together, that's a polysomnogram." },
          ],
          quiz: [
            { q: "What does a polysomnogram combine?", options: ["Just brain activity", "EEG, EOG, and EMG together", "Heart rate only", "Blood oxygen only"], correct: 1 },
            { q: "Why is EEG alone sometimes not enough to identify REM sleep?", options: ["EEG doesn't work during sleep", "REM brainwaves can superficially resemble waking, so eye and muscle signals are needed to confirm it", "EEG only measures heart rate", "REM has no brain activity"], correct: 1 },
            { q: "What does EOG track?", options: ["Muscle tone", "Eye movement", "Heart rate", "Body temperature"], correct: 1 },
            { type: "multi", q: "Which THREE signals together make up a polysomnogram?", options: ["EEG", "EOG", "EMG", "ECG (heart rhythm)"], correct: [0, 1, 2], explain: "EEG (brain), EOG (eyes), and EMG (muscles) are the three — a standard PSG doesn't require heart-rhythm monitoring." },
          ],
        },
        {
          id: "2.2",
          title: "NREM Sleep: Stages 1–3",
          blocks: [
            { type: "p", text: "NREM (Non-Rapid Eye Movement) sleep is divided into three stages, each one progressively deeper. You pass through all three, in order, at the start of every sleep cycle." },
            { type: "h", text: "Stage 1 — the transition" },
            { type: "p", text: "The lightest stage, usually lasting just a few minutes. Brainwaves slow slightly from waking. This is the stage where you can be woken by almost anything, and where people often deny they were even asleep — it's genuinely easy to drift in and out of." },
            { type: "h", text: "Stage 2 — established sleep" },
            { type: "p", text: "You spend more time in Stage 2 than any other stage across the night. Two distinctive EEG features appear here: **sleep spindles** (short bursts of fast brain activity, thought to help protect sleep from disturbance and support memory consolidation) and **K-complexes** (single large brainwave spikes, possibly a brain response to external noise while staying asleep)." },
            { type: "term", term: "Sleep spindle", definition: "A brief burst of oscillating brain activity seen in Stage 2 — linked to memory consolidation and to keeping you asleep despite minor noise." },
            { type: "term", term: "K-complex", definition: "A single large, sharp brainwave seen in Stage 2 — appears both spontaneously and in response to outside stimuli, possibly suppressing arousal." },
            { type: "h", text: "Stage 3 — deep / slow-wave sleep" },
            { type: "p", text: "The deepest NREM stage, dominated by large, slow **delta waves**. This is the hardest stage to be woken from, and if you are woken from it, you'll usually feel the most disoriented (this connects directly to sleep inertia, covered in Module 3). Stage 3 is when the body does the most physical repair work — see Module 6." },
            { type: "check", q: "Which stage features sleep spindles and K-complexes?", options: ["Stage 1", "Stage 2", "Stage 3"], correct: 1, explain: "Sleep spindles and K-complexes are the defining EEG features of Stage 2." },
            { type: "callout", text: "Depth order to remember: **Stage 1 (lightest) → Stage 2 (spindles/K-complexes) → Stage 3 (deepest, delta waves, hardest to wake from).**" },
          ],
          quiz: [
            { q: "Which NREM stage do you spend the most total time in across a night?", options: ["Stage 1", "Stage 2", "Stage 3"], correct: 1 },
            { q: "What type of brainwave dominates Stage 3?", options: ["Fast spindles", "Delta waves (large, slow)", "K-complexes only", "REM-like fast waves"], correct: 1 },
            { q: "Which stage is easiest to be woken from?", options: ["Stage 1", "Stage 2", "Stage 3"], correct: 0 },
            { type: "type", q: "What are the large, slow brainwaves that dominate Stage 3 called?", accepted: ["delta waves", "delta wave", "delta"], explain: "Stage 3 (deep/slow-wave sleep) is dominated by large, slow delta waves." },
          ],
        },
        {
          id: "2.3",
          title: "REM Sleep",
          blocks: [
            { type: "p", text: "REM sleep is called **'paradoxical sleep'** for a good reason: on an EEG, the brain activity looks almost as active as waking, yet the body is more physically still than at any other point in the night." },
            { type: "h", text: "The two defining features" },
            { type: "list", items: [
              "**Rapid eye movements** — the eyes dart around behind closed lids, picked up by the EOG (hence the name).",
              "**Muscle atonia** — near-total paralysis of the skeletal muscles, picked up as a flatline on the EMG. This is the body's built-in safety mechanism, preventing you from physically acting out what's happening in a dream.",
            ]},
            { type: "p", text: "This is also the stage most strongly associated with vivid, narrative dreaming, as Dement's waking experiments (Module 1) demonstrated. Vivid dreams can occur in NREM sleep too, but they're less frequent and less bizarre/story-like — this gets its own deep-dive in Module 7." },
            { type: "check", qtype: "truefalse", q: "During REM sleep, the EMG typically shows near-flatline muscle activity.", correct: true, explain: "REM atonia means the EMG signal drops to near-flat — the muscles are essentially switched off." },
            { type: "h", text: "Why 'paradoxical'?" },
            { type: "p", text: "Because the brain is highly active — similar to waking on an EEG trace — while the body is nearly paralysed. Active brain, inactive body: that contradiction is the paradox the name refers to." },
            { type: "callout", text: "If you ever see a question asking why REM is called 'paradoxical sleep,' the answer is always this contradiction: **active brain, paralysed body.**" },
          ],
          quiz: [
            { q: "Why is REM sleep called 'paradoxical'?", options: ["Because it never happens", "Because the brain is highly active while the body is nearly paralysed", "Because it only happens in dreams", "Because it happens during the day"], correct: 1 },
            { q: "What function does REM muscle atonia serve?", options: ["Improves digestion", "Prevents physically acting out dreams", "Increases heart rate", "Helps with breathing"], correct: 1 },
            { q: "Which signal picks up the defining eye movements of REM sleep?", options: ["EEG", "EOG", "EMG"], correct: 1 },
          ],
        },
        {
          id: "2.4",
          title: "Reading a Hypnogram",
          blocks: [
            { type: "p", text: "A **hypnogram** is a chart of a night's sleep — time along the bottom, sleep stage (depth) up the side. Once you can read one, an entire night of sleep becomes visible in a single glance." },
            { type: "diagram", kind: "hypnogram" },
            { type: "h", text: "What to look for" },
            { type: "list", items: [
              "**The staircase down at the start** — you pass through Stage 1 → 2 → 3 in order at the beginning of the night.",
              "**REM appears in bursts** — shown as separate raised sections, usually starting roughly 90 minutes in, then recurring.",
              "**The shape changes across the night** — early cycles dip deep into Stage 3; later cycles barely touch Stage 3 and have much longer REM sections. (This is explored fully in Module 3.)",
              "**Brief wake blips are normal** — small spikes up to 'awake' are common and don't necessarily mean poor sleep; everyone wakes briefly multiple times a night, usually without remembering it.",
            ]},
            { type: "check", q: "On a typical hypnogram, what generally happens to Stage 3 (deep sleep) as the night goes on?", options: ["It increases every cycle", "It decreases, appearing mostly early in the night", "It stays exactly the same all night", "It only appears at the very end"], correct: 1, explain: "Deep sleep (Stage 3) is concentrated in the earlier cycles; later cycles have little to none." },
            { type: "callout", text: "A hypnogram is the single best tool for connecting everything in this module — stages, cycles, and timing — into one picture." },
          ],
          quiz: [
            { q: "What does a hypnogram plot?", options: ["Heart rate over time", "Sleep stage against time across the night", "Room temperature", "Calories burned"], correct: 1 },
            { q: "Where do REM periods typically appear on a hypnogram?", options: ["Only at the very start", "As separate raised sections recurring through the night", "Never — REM isn't shown", "Only in Stage 3"], correct: 1 },
            { type: "truefalse", q: "Brief 'awake' blips on a hypnogram usually mean a sleep disorder.", correct: false, explain: "Brief awakenings are completely normal — everyone has several a night, usually without remembering them." },
            { q: "Are brief 'awake' blips on a hypnogram unusual?", options: ["Yes, they indicate a sleep disorder", "No, brief awakenings are normal and usually not remembered", "Yes, they mean the person didn't sleep at all", "They only happen in REM"], correct: 1 },
          ],
        },
      ],
    },
    {
      id: "m3", number: 3, section: "Foundations",
      title: "Sleep Cycles",
      description: "The ~90-minute ultradian cycle, how it shifts across the night, and sleep inertia.",
      lessons: [
        {
          id: "3.1",
          title: "The ~90-Minute Ultradian Cycle",
          blocks: [
            { type: "p", text: "A full night of sleep isn't one continuous block — it's made of repeating cycles, each running through NREM Stages 1→2→3 and then a REM period, before starting over. This is called an **ultradian rhythm**: a biological cycle shorter than 24 hours (as opposed to a circadian rhythm, which is roughly 24 hours — covered in Module 4)." },
            { type: "term", term: "Ultradian rhythm", definition: "A recurring biological cycle that repeats in less than 24 hours — sleep's ~90-minute cycle is a classic example." },
            { type: "diagram", kind: "cycle" },
            { type: "h", text: "Roughly, not exactly" },
            { type: "p", text: "'90 minutes' is an average, not a fixed rule — individual cycles commonly range anywhere from about 70 to 120 minutes, and vary night to night for the same person. Popular 'sleep cycle calculators' that promise an exact wake time are working off this average, which is why they're a helpful rough guide, not a precise science." },
            { type: "check", q: "What is an ultradian rhythm?", options: ["A rhythm lasting exactly 24 hours", "A repeating biological cycle shorter than 24 hours", "A rhythm that only happens once a year", "The same thing as a circadian rhythm"], correct: 1, explain: "Ultradian = shorter than a day and repeating; circadian = roughly a day." },
            { type: "callout", text: "A typical adult gets through **4 to 6 of these cycles** in a full night — that's where 'sleep in cycles, not just hours' advice comes from." },
          ],
          quiz: [
            { q: "Roughly how long is one full sleep cycle?", options: ["30 minutes", "~90 minutes", "4 hours", "12 hours"], correct: 1 },
            { q: "What term describes a biological cycle shorter than 24 hours?", options: ["Circadian", "Ultradian", "Homeostatic", "Nocturnal"], correct: 1 },
            { q: "Is 90 minutes an exact, fixed number for everyone?", options: ["Yes, always exactly 90 minutes", "No, it's an average — individual cycles vary", "No, it's always exactly 60 minutes", "It only applies to children"], correct: 1 },
          ],
        },
        {
          id: "3.2",
          title: "How Cycle Composition Shifts Across the Night",
          blocks: [
            { type: "p", text: "Not all sleep cycles are the same shape. Go back to the hypnogram from Module 2 — the reason its shape changes across the night is that each cycle's internal balance of Stage 3 and REM shifts as the night goes on." },
            { type: "h", text: "Early cycles: deep-sleep heavy" },
            { type: "p", text: "In the first 1–2 cycles of the night, Stage 3 (deep sleep) dominates, and REM periods are short — sometimes just a few minutes. This is the body prioritising physical restoration early." },
            { type: "h", text: "Later cycles: REM heavy" },
            { type: "p", text: "By the final cycles of the night (often in the early morning hours), Stage 3 mostly disappears, and REM periods stretch out — sometimes 20-30+ minutes. This is why the dream you remember most vividly is usually the one right before you wake up — you were likely woken directly out of a long REM period." },
            { type: "check", q: "Why do people often remember their last dream of the night most clearly?", options: ["It's random chance", "Late-night cycles have longer REM periods, and waking during/near REM aids recall", "Dreams only happen once per night", "Deep sleep improves dream memory"], correct: 1, explain: "REM periods lengthen toward morning, and waking from REM is strongly linked to dream recall." },
            { type: "callout", text: "**Early night = deep sleep priority. Late night = REM priority.** This single pattern explains a huge amount of practical sleep advice, including why cutting sleep short disproportionately costs you REM, not deep sleep." },
          ],
          quiz: [
            { q: "Which sleep stage dominates the early cycles of the night?", options: ["REM", "Stage 3 (deep sleep)", "Stage 1", "None — all stages are equal all night"], correct: 1 },
            { q: "What happens to REM periods as the night progresses?", options: ["They get shorter", "They get longer", "They disappear completely", "They stay exactly the same"], correct: 1 },
            { q: "If someone cuts their sleep short by waking up early, which stage do they lose the most of?", options: ["Deep sleep (Stage 3)", "REM sleep", "Stage 1", "None — loss is spread equally"], correct: 1 },
          ],
        },
        {
          id: "3.3",
          title: "Why Cycle Count & Timing Matter More Than Just 'Hours Slept'",
          blocks: [
            { type: "p", text: "'I got 8 hours' doesn't tell the whole story. Two people can both sleep 8 hours and have very different quality nights, depending on how cleanly those hours line up with full cycles." },
            { type: "h", text: "The logic behind cycle-based timing" },
            { type: "p", text: "Because each cycle runs ~90 minutes and ends in lighter sleep before dipping back down, waking up at the *end* of a cycle (in lighter sleep) tends to feel easier than waking up in the *middle* of one (often in deep Stage 3). This is the reasoning behind advice to time sleep in multiples of ~90 minutes — e.g. 6 hours (4 cycles) rather than 6.5 hours, which might land you mid-cycle." },
            { type: "check", q: "Why might a 6-hour sleep sometimes feel better than a 6.5-hour sleep?", options: ["6 hours is always objectively more sleep", "6 hours may align with the end of a full cycle, while 6.5 could land mid-cycle in deep sleep", "6.5 hours is scientifically impossible", "There's no real difference ever"], correct: 1, explain: "Cycle length averages ~90 min, so 6 hours = 4 clean cycles, while 6.5 hours can cut into the middle of a 5th cycle." },
            { type: "h", text: "The important caveat" },
            { type: "p", text: "Cycle length isn't perfectly fixed at 90 minutes (Lesson 3.1), so cycle-based sleep calculators are a useful rough guide, not a guarantee. Total sleep time still matters enormously — this is about *optimising when you wake up within* a reasonable, sufficient amount of sleep, not an excuse to sleep less." },
            { type: "callout", text: "Don't take this as 'fewer hours is fine as long as it's a clean number of cycles.' Total sleep need doesn't disappear — this is a secondary optimisation, not a replacement for enough sleep." },
          ],
          quiz: [
            { q: "What's the main idea behind timing sleep in multiples of ~90 minutes?", options: ["It guarantees more total sleep", "Waking at the end of a cycle (lighter sleep) tends to feel easier than waking mid-cycle", "It has nothing to do with sleep stages", "It only applies to naps"], correct: 1 },
            { q: "Is 90-minute cycle timing an exact guarantee?", options: ["Yes, it's always precisely accurate", "No — cycle length varies, so it's a useful estimate, not a guarantee", "It only works for children", "It replaces the need for enough total sleep"], correct: 1 },
            { q: "What's the risk of over-relying on cycle-based sleep calculators?", options: ["None, they're perfectly accurate", "Treating them as a reason to reduce total sleep time", "They only work on weekends", "They can't be used at all"], correct: 1 },
          ],
        },
        {
          id: "3.4",
          title: "Sleep Inertia — Waking Mid-Cycle vs. at a Boundary",
          blocks: [
            { type: "p", text: "**Sleep inertia** is the grogginess, disorientation, and reduced alertness you feel right after waking — and how bad it is depends heavily on *which* stage you were pulled out of." },
            { type: "term", term: "Sleep inertia", definition: "The temporary period of grogginess and impaired performance immediately after waking, before full alertness returns." },
            { type: "h", text: "Worst case: waking from deep Stage 3" },
            { type: "p", text: "Being woken abruptly from Stage 3 (deep, slow-wave sleep) produces the most severe sleep inertia — this is the disoriented, 'where am I' feeling that can last anywhere from several minutes to, in some cases, closer to an hour before full alertness returns." },
            { type: "h", text: "Best case: waking near a cycle boundary" },
            { type: "p", text: "Waking during light Stage 1–2 sleep, or naturally near the end of a cycle, produces much milder inertia — this is a big part of why cycle-timed alarms (Lesson 3.3) and smart alarms that track movement to guess your stage exist." },
            { type: "check", q: "From which stage is sleep inertia typically the worst?", options: ["Stage 1", "Stage 2", "Stage 3 (deep sleep)"], correct: 2, explain: "Being pulled out of deep, slow-wave sleep produces the most severe disorientation and grogginess." },
            { type: "callout", text: "This closes the loop on the whole module: **stages (Module 2) → how they cycle (3.1–3.2) → why cycle timing matters (3.3) → what happens if you get the timing wrong (3.4).**" },
          ],
          quiz: [
            { q: "What is sleep inertia?", options: ["A sleep disorder", "The grogginess/disorientation right after waking", "A type of dream", "A brainwave pattern"], correct: 1 },
            { q: "Waking from which stage tends to cause the most severe sleep inertia?", options: ["Stage 1", "Stage 3 (deep sleep)", "Light REM", "It's random and unrelated to stage"], correct: 1 },
            { q: "Why do 'smart alarms' try to track movement or sleep stage before waking you?", options: ["To save battery", "To try to wake you near a cycle boundary and reduce sleep inertia", "It's just a marketing gimmick with no basis", "To increase deep sleep"], correct: 1 },
          ],
        },
      ],
    },
    {
      id: "m4", number: 4, section: "Foundations",
      title: "Circadian Rhythm & Sleep Drive",
      description: "The Two-Process Model, the SCN master clock, melatonin and light, and adenosine.",
      lessons: [],
      lessonPreview: [{ id: "4.1", title: "The Two-Process Model (Process S + Process C)" }, { id: "4.2", title: "The suprachiasmatic nucleus (SCN)" }, { id: "4.3", title: "Melatonin and light" }, { id: "4.4", title: "Adenosine and sleep pressure" }],
    },
    {
      id: "m5", number: 5, section: "Mechanisms & Function",
      title: "The Neuroscience of Sleep–Wake",
      description: "Key neurotransmitters, brainstem/hypothalamic circuits, and the flip-flop switch model.",
      lessons: [],
      lessonPreview: [{ id: "5.1", title: "Key neurotransmitters (orexin, GABA, histamine…)" }, { id: "5.2", title: "Brainstem & hypothalamic circuits" }, { id: "5.3", title: "The flip-flop switch model" }],
    },
    {
      id: "m6", number: 6, section: "Mechanisms & Function",
      title: "Why We Sleep — Functions",
      description: "Memory consolidation, the glymphatic system, immune function, emotion, and physical repair.",
      lessons: [],
      lessonPreview: [{ id: "6.1", title: "Memory consolidation" }, { id: "6.2", title: "The glymphatic system" }, { id: "6.3", title: "Immune function" }, { id: "6.4", title: "Emotional regulation & REM" }, { id: "6.5", title: "Growth hormone & physical repair" }],
    },
    {
      id: "m7", number: 7, section: "Mechanisms & Function",
      title: "Dreams",
      description: "Dream theories, why we forget most dreams, REM vs. NREM dreaming, and lucid dreaming.",
      lessons: [],
      lessonPreview: [{ id: "7.1", title: "Dream theories" }, { id: "7.2", title: "Why we forget most dreams" }, { id: "7.3", title: "REM vs. NREM dreaming" }, { id: "7.4", title: "Lucid dreaming" }],
    },
    {
      id: "m8", number: 8, section: "Mechanisms & Function",
      title: "Chronotypes & Individual Differences",
      description: "Larks vs. owls, the teenage circadian shift, and measuring your own chronotype.",
      lessons: [],
      lessonPreview: [{ id: "8.1", title: "Larks vs. owls — genetic basis" }, { id: "8.2", title: "The teenage circadian shift" }, { id: "8.3", title: "Measuring your own chronotype" }],
    },
    {
      id: "m9", number: 9, section: "Mechanisms & Function",
      title: "Sleep Across the Lifespan",
      description: "Infant, adolescent, and adult/elderly sleep changes.",
      lessons: [],
      lessonPreview: [{ id: "9.1", title: "Infant & child sleep patterns" }, { id: "9.2", title: "Adolescent sleep" }, { id: "9.3", title: "Adult & elderly sleep changes" }],
    },
    {
      id: "m10", number: 10, section: "Disruption, Disorders & Measurement",
      title: "What Disrupts Sleep",
      description: "Light and screens, caffeine/alcohol/nicotine, stress, jet lag and shift work.",
      lessons: [],
      lessonPreview: [{ id: "10.1", title: "Light & screens" }, { id: "10.2", title: "Caffeine, alcohol, nicotine" }, { id: "10.3", title: "Stress & cognitive arousal" }, { id: "10.4", title: "Jet lag & shift work" }],
    },
    {
      id: "m11", number: 11, section: "Disruption, Disorders & Measurement",
      title: "Sleep Disorders (Overview)",
      description: "Insomnia, sleep apnea, narcolepsy, parasomnias — educational overview only.",
      lessons: [],
      lessonPreview: [{ id: "11.1", title: "Insomnia" }, { id: "11.2", title: "Sleep apnea" }, { id: "11.3", title: "Narcolepsy & REM-related disorders" }, { id: "11.4", title: "Parasomnias & restless legs syndrome" }],
    },
    {
      id: "m12", number: 12, section: "Disruption, Disorders & Measurement",
      title: "Sleep Pharmacology",
      description: "How melatonin, antihistamines, and prescription sleep aids work — mechanism, not dosing.",
      lessons: [],
      lessonPreview: [{ id: "12.1", title: "How melatonin actually works" }, { id: "12.2", title: "OTC antihistamine sleep aids" }, { id: "12.3", title: "Prescription Z-drugs/benzodiazepines" }, { id: "12.4", title: "Why alcohol wrecks sleep architecture" }],
    },
    {
      id: "m13", number: 13, section: "Disruption, Disorders & Measurement",
      title: "Measuring Sleep & Wearables",
      description: "Polysomnography, actigraphy, sleep scores, and Apple vs. Garmin vs. Oura vs. Whoop.",
      lessons: [],
      lessonPreview: [{ id: "13.1", title: "Polysomnography — the gold standard" }, { id: "13.2", title: "Actigraphy" }, { id: "13.3", title: "How a 'sleep score' is calculated" }, { id: "13.4", title: "Apple Watch/Health sleep data" }, { id: "13.5", title: "Garmin vs. Apple vs. Oura vs. Whoop" }, { id: "13.6", title: "What wearables get wrong" }, { id: "13.7", title: "Using your own data well" }],
    },
    {
      id: "m14", number: 14, section: "Applied Optimization",
      title: "Sleep Debt & Recovery",
      description: "Whether you can actually 'catch up' on sleep, and the research on recovery.",
      lessons: [],
      lessonPreview: [{ id: "14.1", title: "Can you actually catch up?" }, { id: "14.2", title: "Partial recovery vs. permanent deficit" }, { id: "14.3", title: "Practical recovery strategies" }],
    },
    {
      id: "m15", number: 15, section: "Applied Optimization",
      title: "Sleep Hygiene & Environment",
      description: "Temperature, light, noise, consistent timing, and common myths debunked.",
      lessons: [],
      lessonPreview: [{ id: "15.1", title: "Temperature, light, noise" }, { id: "15.2", title: "Consistent timing & routines" }, { id: "15.3", title: "Common myths debunked" }],
    },
    {
      id: "m16", number: 16, section: "Applied Optimization",
      title: "Optimizing for Performance",
      description: "Sleep and athletic recovery, cognitive performance, and how to use naps well.",
      lessons: [],
      lessonPreview: [{ id: "16.1", title: "Athletic performance & recovery" }, { id: "16.2", title: "Academic & cognitive performance" }, { id: "16.3", title: "Naps — timing, length, when they help vs. hurt" }],
    },
    {
      id: "m17", number: 17, section: "Applied Optimization",
      title: "Sleep Across Cultures & History",
      description: "Biphasic sleep before electric light, siesta cultures, and the historical norm.",
      lessons: [],
      lessonPreview: [{ id: "17.1", title: "Biphasic/segmented sleep before electric light" }, { id: "17.2", title: "Siesta cultures" }, { id: "17.3", title: "Is '8 hours in one block' really the historical norm?" }],
    },
    {
      id: "m18", number: 18, section: "Applied Optimization",
      title: "Capstone — Your Personal Sleep Protocol",
      description: "Audit your current sleep, design your own routine, and learn to iterate on it.",
      lessons: [],
      lessonPreview: [{ id: "18.1", title: "Auditing your current sleep" }, { id: "18.2", title: "Designing a personalised routine" }, { id: "18.3", title: "Iterating and troubleshooting" }],
    },
  ],
};
