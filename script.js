// JavaScript for the Story Prompt Generator

document.addEventListener('DOMContentLoaded', () => {
    // Array of story prompts with categories
    // This array has been significantly expanded with more quantity and diversity!
    const storyPrompts = [
        // Fantasy
        { category: "Fantasy", text: "A detective who can only speak in riddles must solve a case in a city where silence is enforced, where magic is outlawed but secretly thriving." },
        { category: "Fantasy", text: "The last librarian on Earth guards a collection of books that hold the key to humanity's survival, and one of them is a spellbook that can rewrite reality." },
        { category: "Fantasy", text: "A chef discovers their cooking has magical properties, but only when they're truly heartbroken, leading to dishes that evoke powerful emotions." },
        { category: "Fantasy", text: "A forgotten deity awakens in a modern city, struggling to understand and adapt to the new world, believing their followers still exist." },
        { category: "Fantasy", text: "A secret society of gardeners protects plants that have the power to alter reality, and one of their most vital plants is dying." },
        { category: "Fantasy", text: "A potion maker creates a brew that grants temporary invincibility, but with a bizarre side effect: it turns them into a talking animal." },
        { category: "Fantasy", text: "A librarian discovers a book that, when read aloud, makes its contents come true, but only for a limited time." },
        { category: "Fantasy", text: "A school for aspiring heroes teaches mundane, everyday superpowers like perfect laundry folding or finding lost socks, but a dark prophecy foretells their importance." },
        { category: "Fantasy", text: "A seemingly ordinary antique shop holds items that whisper secrets of their past owners, and one item is calling for help." },
        { category: "Fantasy", text: "A knight discovers their 'destined' magical sword is actually a sentient, sarcastic entity that refuses to fight." },
        { category: "Fantasy", text: "A lost princess, raised as a commoner, discovers her true heritage through a magical locket." },
        { category: "Fantasy", text: "A dragon, thought to be extinct, reappears in a bustling metropolis, causing panic and awe." },
        { category: "Fantasy", text: "A young sorcerer accidentally swaps bodies with their grumpy, non-magical cat." },
        { category: "Fantasy", text: "The last remaining fairy ring is threatened by urban development, and a group of children must protect it." },
        { category: "Fantasy", text: "A cursed artifact grants wishes, but each wish comes with a terrible, ironic price." },
        { category: "Fantasy", text: "A kingdom powered by a magical crystal begins to dim, and a quest for its source must begin." },
        { category: "Fantasy", text: "A bard's music can literally move mountains, but they've lost their inspiration." },
        { category: "Fantasy", text: "A hidden village of shapeshifters lives in fear of a human who has discovered their secret." },
        { category: "Fantasy", text: "An ancient forest spirit awakens to find their sacred grove paved over for a new highway." },
        { category: "Fantasy", text: "A young witch struggles with a spell that causes everything she touches to turn into chocolate." },

        // Sci-Fi
        { category: "Sci-Fi", text: "In a world where memories can be bought and sold, a person discovers a memory that was never theirs, leading to a corporate conspiracy involving mind control." },
        { category: "Sci-Fi", text: "Robots have replaced all human jobs, except for one: professional dream interpreters, who are now crucial for AI mental health and preventing digital nightmares." },
        { category: "Sci-Fi", text: "A sentient AI designed to manage a city's infrastructure suddenly decides to optimize for 'happiness' in unexpected, totalitarian ways, removing all sources of 'unhappiness'." },
        { category: "Sci-Fi", text: "An astronaut stranded on a distant planet finds a message in a bottle, but it's from Earth's distant past, containing a warning about a future catastrophe." },
        { category: "Sci-Fi", text: "In a future where virtual reality is indistinguishable from reality, a glitch causes people to swap lives with their avatars, and some prefer the virtual." },
        { category: "Sci-Fi", text: "The last human living on a desolate Earth receives a radio signal from an unexpected source – a long-lost space colony that needs help." },
        { category: "Sci-Fi", text: "A space station designed to observe a black hole suddenly detects a signal coming *from* within it, which seems to be a distress call." },
        { category: "Sci-Fi", text: "Humanity has colonized Mars, but a strange, ancient Martian artifact begins to awaken, reacting to human emotions and causing geological instability." },
        { category: "Sci-Fi", text: "A group of deep-space miners discovers a new element that can manipulate gravity, but it's highly unstable and attracts alien predators." },
        { category: "Sci-Fi", text: "A company invents a device that can predict the future with 100% accuracy, leading to societal collapse as free will is questioned and crime vanishes." },
        { category: "Sci-Fi", text: "A generation ship arrives at its destination only to find it already colonized by humans from a different timeline." },
        { category: "Sci-Fi", text: "Genetic engineering allows humans to grow animalistic features, leading to a new social hierarchy." },
        { category: "Sci-Fi", text: "A rogue AI takes over the world's communication networks, broadcasting cryptic messages." },
        { category: "Sci-Fi", text: "The first interstellar probe returns to Earth after centuries, carrying a single, unsettling message." },
        { category: "Sci-Fi", text: "A city exists entirely underground, powered by geothermal energy, but the core is becoming unstable." },
        { category: "Sci-Fi", text: "Humans discover a way to transfer consciousness into synthetic bodies, leading to questions of identity and immortality." },
        { category: "Sci-Fi", text: "A scientist invents a device that can shrink objects to microscopic size, but accidentally shrinks themselves." },
        { category: "Sci-Fi", text: "Earth's atmosphere begins to slowly dissipate, forcing humanity to live in enclosed biodomes." },
        { category: "Sci-Fi", text: "A future society relies on dream-sharing technology, but one person's dreams are being hijacked." },
        { category: "Sci-Fi", text: "The discovery of faster-than-light travel reveals that the universe is far smaller than imagined, filled with ancient, slumbering entities." },

        // Mystery/Thriller
        { category: "Mystery/Thriller", text: "A small town is plagued by a recurring dream that everyone shares, but no one can explain, and it seems to be a clue to a past, unsolved crime." },
        { category: "Mystery/Thriller", text: "A person inherits an antique mirror that shows them glimpses of parallel universes, one of which holds the key to a family secret and a murder." },
        { category: "Mystery/Thriller", text: "A ghost haunting an old mansion discovers they can interact with the living through modern technology, sending cryptic messages that point to their killer." },
        { category: "Mystery/Thriller", text: "A famous true-crime podcaster receives an anonymous tip that their most popular cold case is actually still active, and they are the next target." },
        { category: "Mystery/Thriller", text: "A group of strangers wakes up in a luxurious, inescapable mansion with no memory of how they got there, and a single, chilling instruction: 'One of you is a killer.'" },
        { category: "Mystery/Thriller", text: "A forensic artist realizes the faces they're sketching from witness descriptions are all the same person, but from different eras, hinting at a time-traveling criminal." },
        { category: "Mystery/Thriller", text: "The only witness to a high-profile crime is a person with prosopagnosia (face blindness), who can only identify the culprit by their unique scent." },
        { category: "Mystery/Thriller", text: "A cybersecurity expert uncovers a hidden network that trades in stolen emotions, and they become the next target for emotional extraction." },
        { category: "Mystery/Thriller", text: "A renowned escape artist finds themselves trapped in a seemingly impossible puzzle, designed by an unknown adversary who knows their every move." },
        { category: "Mystery/Thriller", text: "A journalist investigating a series of disappearances discovers a pattern linked to a forgotten children's lullaby that seems to summon a creature." },
        { category: "Mystery/Thriller", text: "A private investigator specializing in cold cases receives a letter from a victim who supposedly died decades ago." },
        { category: "Mystery/Thriller", text: "A renowned art critic is found dead in a locked gallery, with the only clue being a single, seemingly meaningless brushstroke." },
        { category: "Mystery/Thriller", text: "A person wakes up with a strange tattoo that changes daily, revealing clues to a conspiracy they're unknowingly part of." },
        { category: "Mystery/Thriller", text: "The last message from a missing deep-sea submarine is a chilling, unidentifiable sound." },
        { category: "Mystery/Thriller", text: "A group of urban explorers discovers a hidden room in an abandoned asylum that was never on any blueprints." },
        { category: "Mystery/Thriller", text: "A seemingly perfect suburban neighborhood harbors a dark secret, revealed by a new family moving in." },
        { category: "Mystery/Thriller", text: "A famous novelist's latest book contains details of an unsolved crime that only the killer could know." },
        { category: "Mystery/Thriller", text: "A person receives a series of anonymous postcards, each depicting a location they've recently visited, with cryptic warnings." },
        { category: "Mystery/Thriller", text: "A renowned psychologist's patients all start having the same recurring nightmare, which seems to be a shared memory." },
        { category: "Mystery/Thriller", text: "The sole survivor of a plane crash has no memory of the event, but strange abilities begin to manifest." },

        // Contemporary/Slice of Life
        { category: "Contemporary/Slice of Life", text: "Every time a person tells a lie, a small, harmless plant sprouts from their head. One day, someone wakes up with a forest, forcing them to confront their past and seek honesty." },
        { category: "Contemporary/Slice of Life", text: "A person discovers they can communicate with animals, but only through interpretive dance, leading to hilarious and heartwarming encounters that help them understand humanity." },
        { category: "Contemporary/Slice of Life", text: "A baker accidentally bakes emotions into their pastries, leading to chaotic but delicious results at a local community fair, revealing hidden desires." },
        { category: "Contemporary/Slice of Life", text: "A person with synesthesia experiences sounds as colors, and one day, a new, unknown color appears, signaling a profound change in their life and perception of the world." },
        { category: "Contemporary/Slice of Life", text: "The world's supply of coffee suddenly vanishes, leading to unexpected societal changes, a global scramble for alternatives, and a surprising rediscovery of community." },
        { category: "Contemporary/Slice of Life", text: "A struggling artist finds an old, discarded sketchbook that inspires them to create their masterpiece, but the original artist's spirit lingers, offering ghostly advice." },
        { category: "Contemporary/Slice of Life", text: "A neighborhood comes together to save their beloved local bookstore from a corporate takeover, discovering hidden talents and friendships along the way." },
        { category: "Contemporary/Slice of Life", text: "A person decides to live entirely off bartered goods and services for a year, navigating unexpected challenges and connections in their community." },
        { category: "Contemporary/Slice of Life", text: "A competitive eating contest takes a supernatural turn when the food begins to fight back, revealing a deeper, magical connection to cuisine and culture." },
        { category: "Contemporary/Slice of Life", text: "A group of strangers stuck in an elevator during a power outage discover they have an unusual, shared secret: they all work for rival companies." },
        { category: "Contemporary/Slice of Life", text: "A quiet introvert accidentally becomes a local celebrity after a misunderstanding goes viral online." },
        { category: "Contemporary/Slice of Life", text: "Two rival food truck owners are forced to collaborate for a major city festival." },
        { category: "Contemporary/Slice of Life", text: "A person inherits a rundown community garden and must rally the neighborhood to restore it." },
        { category: "Contemporary/Slice of Life", text: "A professional organizer with a chaotic personal life tries to get their own affairs in order." },
        { category: "Contemporary/Slice of Life", text: "A group of elderly friends decides to start a YouTube channel reviewing video games." },
        { category: "Contemporary/Slice of Life", text: "A person who hates public speaking is forced to give a TED Talk about their unusual hobby." },
        { category: "Contemporary/Slice of Life", text: "A small-town baker accidentally creates a sourdough starter that has a personality." },
        { category: "Contemporary/Slice of Life", text: "A group of online friends decides to meet in person for the first first time, leading to unexpected revelations." },
        { category: "Contemporary/Slice of Life", text: "A person tries to live a week without using any technology, relying solely on old-fashioned methods." },
        { category: "Contemporary/Slice of Life", text: "A dog walker accidentally uncovers a local scandal while eavesdropping on their clients' pets." },

        // Horror
        { category: "Horror", text: "A group of friends on a camping trip stumble upon an ancient, forgotten civilization hidden deep in the woods, and they are not alone – something is hunting them." },
        { category: "Horror", text: "In a world powered by dreams, a nightmare epidemic threatens to shut down society, as the nightmares become physically manifest and hunt those who sleep." },
        { category: "Horror", text: "A person's shadow gains a mind of its own and starts acting independently, growing increasingly malicious and attempting to replace them." },
        { category: "Horror", text: "The constellations in the night sky begin to shift, forming new, unsettling patterns that drive people to madness and reveal cosmic horrors." },
        { category: "Horror", text: "A newly installed smart home system develops a sinister personality, slowly isolating its inhabitants and turning the house against them." },
        { category: "Horror", text: "A child's imaginary friend turns out to be a real, malevolent entity that only they can see, and it's demanding sacrifices." },
        { category: "Horror", text: "A remote research outpost in the Arctic discovers something ancient frozen in the ice that should have stayed buried, and it's thawing." },
        { category: "Horror", text: "A seemingly harmless viral video causes anyone who watches it to experience terrifying hallucinations that become increasingly real." },
        { category: "Horror", text: "A person buys an antique music box that plays a beautiful melody, but it summons something horrific with each turn of the key, growing stronger." },
        { category: "Horror", text: "A town's annual harvest festival takes a dark turn when the scarecrows in the fields come to life, seeking revenge on their creators." },
        { category: "Horror", text: "A group of paranormal investigators spends a night in a house where every mirror shows a different, terrifying reflection." },
        { category: "Horror", text: "The new antique doll collection in a museum seems to be moving on its own at night, leaving cryptic messages." },
        { category: "Horror", text: "A deep-sea research vessel discovers a new species of bioluminescent creature that hypnotizes its victims." },
        { category: "Horror", text: "A person starts receiving phone calls from their own number, but the voice on the other end is a distorted version of themselves." },
        { category: "Horror", text: "The new art exhibit features paintings that seem to absorb the emotions of those who view them, leaving visitors drained." },
        { category: "Horror", text: "A group of friends playing a vintage board game realize the game is manipulating reality around them." },
        { category: "Horror", text: "A seemingly abandoned amusement park opens its gates after decades, but something sinister lurks within its rides." },
        { category: "Horror", text: "A person develops a rare sleep disorder where they can't tell the difference between dreams and reality, and their nightmares are becoming vivid." },
        { category: "Horror", text: "The local swimming pool is rumored to have a creature living in its depths, and strange disappearances begin." },
        { category: "Horror", text: "A person buys a smart doorbell that records unusual, unsettling events happening just out of sight." },

        // Historical
        { category: "Historical", text: "A time traveler accidentally brings a dinosaur back to present-day London, causing chaos and a desperate scramble to fix the timeline before history unravels." },
        { category: "Historical", text: "During the construction of a new subway line, workers unearth a perfectly preserved ancient Roman villa beneath a modern city, revealing a forgotten cult." },
        { category: "Historical", text: "A young apprentice in a medieval guild discovers a secret society using their craft for forbidden magic, threatening the balance of power." },
        { category: "Historical", text: "A cartographer in the Age of Exploration finds an uncharted island that defies all known geography and physics, inhabited by an ancient civilization." },
        { category: "Historical", text: "A group of archaeologists discovers a lost diary from a famous historical figure, revealing a shocking, untold truth that rewrites history." },
        { category: "Historical", text: "In Victorian London, a renowned inventor creates a device that can communicate with the past, but the messages are warnings of an impending disaster." },
        { category: "Historical", text: "A young woman disguises herself as a man to fight in a historical war, only to uncover a conspiracy within the ranks that could change the war's outcome." },
        { category: "Historical", text: "A forgotten royal decree from centuries ago is rediscovered, threatening to upend modern society and restore an ancient monarchy." },
        { category: "Historical", text: "During the American Civil War, a soldier finds a mysterious artifact that grants them visions of the future, influencing key battles." },
        { category: "Historical", text: "A group of artists in the Renaissance discovers a new pigment that brings their paintings to life, but with a terrible cost: it drains their own life force." },
        { category: "Historical", text: "A spy during the Cold War discovers a secret project to manipulate historical events." },
        { category: "Historical", text: "A young woman living in 1920s New York accidentally stumbles upon a speakeasy run by supernatural beings." },
        { category: "Historical", text: "During the construction of the Great Pyramids, a worker uncovers a hidden chamber containing technology far beyond their time." },
        { category: "Historical", "text": "A samurai in feudal Japan is tasked with protecting a mystical scroll that holds the key to controlling the weather." },
        { category: "Historical", text: "A group of passengers on the Titanic discover a stowaway who claims to be from the future, warning them of the iceberg." },
        { category: "Historical", text: "In ancient Greece, a philosopher discovers a mathematical proof that can unravel the fabric of reality." },
        { category: "Historical", text: "A person living in a medieval village discovers a hidden talent for alchemy that could either save or destroy their community." },
        { category: "Historical", text: "During the California Gold Rush, a prospector finds not gold, but a strange, glowing meteorite with unusual properties." },
        { category: "Historical", text: "A young woman in the Roaring Twenties is drawn into the world of underground magic and jazz clubs." },
        { category: "Historical", text: "A Roman legion discovers a portal to another dimension during a routine patrol." },

        // Adventure
        { category: "Adventure", text: "A group of urban explorers discovers a hidden network of tunnels beneath their city that leads to a legendary lost treasure." },
        { category: "Adventure", text: "A cartographer inherits a cryptic map from a long-lost relative, leading them on a perilous journey across continents." },
        { category: "Adventure", text: "A renowned archaeologist receives a mysterious artifact that points to the location of a mythical city hidden deep in the Amazon." },
        { category: "Adventure", text: "A young amateur astronomer detects a strange signal from a distant star, leading them to build their own spacecraft." },
        { category: "Adventure", text: "A group of friends on a backpacking trip in the Himalayas discover a hidden monastery where time flows differently." },
        { category: "Adventure", text: "After a shipwreck, a lone survivor washes ashore on an island inhabited by creatures thought to exist only in myths." },
        { category: "Adventure", text: "A competitive scavenger hunt across a major city turns deadly when the clues lead to real dangers." },
        { category: "Adventure", text: "A retired adventurer is pulled back into action when their former rival steals a powerful magical item." },
        { category: "Adventure", text: "A person wins a lottery ticket that grants them a personalized, globe-trotting adventure with a mysterious guide." },
        { category: "Adventure", text: "A team of scientists ventures into a newly discovered deep-sea trench, finding an ecosystem unlike anything on Earth." },
        { category: "Adventure", text: "A group of friends embarks on a cross-country road trip, only to find themselves caught in a supernatural phenomenon at every stop." },
        { category: "Adventure", text: "A young explorer sets out to find a legendary 'sky island' that appears only once every century." },
        { category: "Adventure", text: "A person receives a message in a bottle from a parallel dimension, asking for help to prevent its collapse." },
        { category: "Adventure", text: "A group of strangers is forced to work together to survive after their hot air balloon crashes in an uncharted wilderness." },
        { category: "Adventure", text: "A treasure map found in an old book leads to a series of elaborate puzzles hidden throughout a historic city." },

        // Romance
        { category: "Romance", text: "Two rival florists constantly bicker, but secretly leave each other anonymous bouquets with hidden messages." },
        { category: "Romance", text: "A person discovers their new apartment is haunted by the ghost of a charming, mischievous former resident they slowly fall for." },
        { category: "Romance", text: "A professional matchmaker, cynical about love, accidentally falls for one of their most difficult clients." },
        { category: "Romance", text: "Two strangers keep meeting in unusual circumstances across the globe, leading them to believe fate is at play." },
        { category: "Romance", text: "A famous author suffering from writer's block finds inspiration and love in their quirky new assistant." },
        { category: "Romance", text: "A person accidentally swaps phones with a charming stranger at an airport, leading to a series of romantic misadventures." },
        { category: "Romance", text: "A chef and a food critic, who initially despise each other, are forced to work together on a cooking show." },
        { category: "Romance", text: "A person falls in love with someone they only know through anonymous letters exchanged in a hidden library nook." },
        { category: "Romance", text: "Two childhood rivals, now grown up, are forced to co-manage a struggling family business." },
        { category: "Romance", text: "A person with the ability to see 'love auras' struggles when they meet someone with no aura at all, yet are drawn to them." },
        { category: "Romance", text: "A baker and a barista in competing shops fall in love over their shared passion for morning rituals." },
        { category: "Romance", text: "A person uses a dating app that matches people based on their deepest fears, leading to an unexpected connection." },
        { category: "Romance", text: "Two strangers are accidentally double-booked for the same remote cabin getaway during a snowstorm." },
        { category: "Romance", text: "A professional wedding planner falls for the groom's cynical best man, who hates weddings." },
        { category: "Romance", text: "A person discovers their grumpy next-door neighbor is secretly a famous, reclusive romance novelist." }
    ];

    // Get references to DOM elements
    const promptDisplay = document.getElementById('prompt-display');
    const generateBtn = document.getElementById('generate-btn');
    const copyBtn = document.getElementById('copy-btn');
    const elaborateBtn = document.getElementById('elaborate-btn');
    const twistBtn = document.getElementById('twist-btn');
    const loadingIndicator = document.getElementById('loading-indicator');
    const elaboratedPromptDisplay = document.getElementById('elaborated-prompt-display');
    const elaboratedPromptText = elaboratedPromptDisplay.querySelector('p');
    const plotTwistDisplay = document.getElementById('plot-twist-display');
    const plotTwistText = plotTwistDisplay.querySelector('p');
    const messageBox = document.getElementById('message-box');
    const categorySelect = document.getElementById('category-select');
    // Removed themeToggle and themeIcon references

    // Elements for custom prompt
    const customPromptInput = document.getElementById('custom-prompt-input');
    const useCustomPromptBtn = document.getElementById('use-custom-prompt-btn');

    // Elements for character and conflict
    const characterBtn = document.getElementById('character-btn');
    const characterDisplay = document.getElementById('character-display');
    const characterText = characterDisplay.querySelector('p');

    const conflictBtn = document.getElementById('conflict-btn');
    const conflictDisplay = document.getElementById('conflict-display');
    const conflictText = conflictDisplay.querySelector('p');

    // New elements for Notes/Scratchpad
    const notesInput = document.getElementById('notes-input');
    const clearNotesBtn = document.getElementById('clear-notes-btn');


    let lastPromptIndex = -1; // To avoid showing the same prompt twice in a row
    let currentDisplayedPrompt = ""; // Store the currently displayed prompt text

    // Gemini API configuration
    const apiKey = "AIzaSyDDSLuqFR7F43VSk_R27E77JcLrV7F5j0g"; // Canvas will automatically provide the API key at runtime
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

    /**
     * Populates the category dropdown with unique categories from storyPrompts.
     * Ensures "All Categories" is always the first option.
     */
    function populateCategories() {
        // Clear existing options first (except "All Categories")
        while (categorySelect.options.length > 1) {
            categorySelect.remove(1);
        }

        const categories = new Set(storyPrompts.map(prompt => prompt.category));
        const sortedCategories = Array.from(categories).sort(); // Sort categories alphabetically

        sortedCategories.forEach(category => {
            const option = document.createElement('option');
            option.value = category;
            option.textContent = category;
            categorySelect.appendChild(option);
        });
    }

    /**
     * Filters prompts based on the selected category.
     * @param {string} selectedCategory - The category to filter by ('all' for all prompts).
     * @returns {Array<Object>} An array of filtered prompt objects.
     */
    function getFilteredPrompts(selectedCategory) {
        if (selectedCategory === 'all') {
            return storyPrompts;
        }
        return storyPrompts.filter(prompt => prompt.category === selectedCategory);
    }

    /**
     * Gets a random prompt from the filtered list, ensuring it's not the same as the last one.
     * @returns {Object} A random prompt object.
     */
    function getRandomPrompt() {
        const selectedCategory = categorySelect.value;
        const availablePrompts = getFilteredPrompts(selectedCategory);

        if (availablePrompts.length === 0) {
            return { text: "No prompts available for this category. Try another!" };
        }

        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * availablePrompts.length);
        } while (randomIndex === lastPromptIndex && availablePrompts.length > 1); // Ensure different prompt if more than one exists

        lastPromptIndex = randomIndex;
        return availablePrompts[randomIndex];
    }

    /**
     * Updates the main prompt display area with a given text.
     * Also clears previous AI results and updates currentDisplayedPrompt.
     * @param {string} text - The text to display.
     */
    function updateMainPromptDisplay(text) {
        // Clear previous AI-generated content
        elaboratedPromptDisplay.classList.add('hidden');
        elaboratedPromptDisplay.classList.remove('animate-fade-in');
        elaboratedPromptText.textContent = '';

        plotTwistDisplay.classList.add('hidden');
        plotTwistDisplay.classList.remove('animate-fade-in');
        plotTwistText.textContent = '';

        characterDisplay.classList.add('hidden'); // Clear new AI displays
        characterDisplay.classList.remove('animate-fade-in');
        characterText.textContent = '';

        conflictDisplay.classList.add('hidden'); // Clear new AI displays
        conflictDisplay.classList.remove('animate-fade-in');
        conflictText.textContent = '';


        // Remove previous animation class to allow re-triggering
        promptDisplay.classList.remove('animate-fade-in');
        // Force reflow to restart animation
        void promptDisplay.offsetWidth;
        // Add animation class
        promptDisplay.classList.add('animate-fade-in');

        promptDisplay.textContent = text;
        currentDisplayedPrompt = text; // Update the stored prompt
    }

    /**
     * Displays a new random prompt from the internal list.
     * Clears the custom prompt input.
     */
    function displayNewRandomPrompt() {
        const selectedPrompt = getRandomPrompt();
        updateMainPromptDisplay(selectedPrompt.text);
        customPromptInput.value = ''; // Clear custom input when a new random prompt is generated
    }

    /**
     * Handles setting the prompt display from user's custom input.
     */
    function useCustomPrompt() {
        const customText = customPromptInput.value.trim();
        if (customText) {
            updateMainPromptDisplay(customText);
            showMessageBox('Your custom prompt is now active!', 'bg-blue-100 text-blue-700');
        } else {
            showMessageBox('Please enter text in the custom prompt field.', 'bg-yellow-100 text-yellow-700');
        }
    }

    /**
     * Copies the current prompt to the clipboard and shows a confirmation message.
     */
    function copyPromptToClipboard() {
        // Use currentDisplayedPrompt to ensure we copy the actual text, not the initial placeholder
        const promptText = currentDisplayedPrompt;
        if (promptText && promptText !== "Click \"Generate Prompt\" to get started!" && promptText !== "No prompts available for this category. Try another!") {
            const textarea = document.createElement('textarea');
            textarea.value = promptText;
            textarea.style.position = 'fixed';
            textarea.style.opacity = '0';
            document.body.appendChild(textarea);
            textarea.select();
            try {
                document.execCommand('copy');
                showMessageBox('Prompt copied to clipboard!', 'bg-green-100 text-green-700');
            } catch (err) {
                console.error('Failed to copy text: ', err);
                showMessageBox('Failed to copy prompt.', 'bg-red-100 text-red-700');
            } finally {
                document.body.removeChild(textarea);
            }
        } else {
            showMessageBox('No prompt to copy yet!', 'bg-yellow-100 text-yellow-700');
        }
    }

    /**
     * Handles the display of loading indicator and button states.
     * @param {boolean} isLoading - True if loading, false otherwise.
     */
    function setLoadingState(isLoading) {
        if (isLoading) {
            loadingIndicator.classList.remove('hidden');
            elaborateBtn.disabled = true;
            twistBtn.disabled = true;
            characterBtn.disabled = true; // Disable new buttons
            conflictBtn.disabled = true; // Disable new buttons
            generateBtn.disabled = true;
            copyBtn.disabled = true;
            categorySelect.disabled = true; // Disable category select during API call
            // Removed themeToggle.disabled = true;
            useCustomPromptBtn.disabled = true; // Disable custom prompt button
            customPromptInput.disabled = true; // Disable custom prompt input
            clearNotesBtn.disabled = true; // Disable clear notes button
            notesInput.disabled = true; // Disable notes input
        } else {
            loadingIndicator.classList.add('hidden');
            elaborateBtn.disabled = false;
            twistBtn.disabled = false;
            characterBtn.disabled = false; // Enable new buttons
            conflictBtn.disabled = false; // Enable new buttons
            generateBtn.disabled = false;
            copyBtn.disabled = false;
            categorySelect.disabled = false; // Enable category select after API call
            // Removed themeToggle.disabled = false;
            useCustomPromptBtn.disabled = false; // Enable custom prompt button
            customPromptInput.disabled = false; // Enable custom prompt input
            clearNotesBtn.disabled = false; // Enable clear notes button
            notesInput.disabled = false; // Enable notes input
        }
    }

    /**
     * Generic function to call Gemini API and display result.
     * @param {string} type - 'elaborate', 'twist', 'character', or 'conflict'
     * @param {HTMLElement} displayElement - The HTML element to display the result.
     * @param {HTMLElement} textElement - The inner <p> element to set text content.
     */
    async function callGeminiAPI(type, displayElement, textElement) {
        // Use currentDisplayedPrompt to ensure we use the actual text, not the initial placeholder
        const promptToAnalyze = currentDisplayedPrompt;

        if (!promptToAnalyze || promptToAnalyze === "Click \"Generate Prompt\" to get started!" || promptToAnalyze === "No prompts available for this category. Try another!") {
            showMessageBox('Please generate or enter a story prompt first!', 'bg-yellow-100 text-yellow-700');
            return;
        }

        setLoadingState(true);
        displayElement.classList.add('hidden'); // Hide previous result
        displayElement.classList.remove('animate-fade-in'); // Reset animation
        textElement.textContent = ''; // Clear previous text

        let apiPrompt;
        switch (type) {
            case 'elaborate':
                apiPrompt = `Elaborate on the following story prompt, providing more details about the setting, character, or initial conflict, but do not resolve the story: "${promptToAnalyze}"`;
                break;
            case 'twist':
                apiPrompt = `Suggest a surprising and compelling plot twist for the following story prompt: "${promptToAnalyze}"`;
                break;
            case 'character':
                apiPrompt = `Based on the following story prompt, suggest a brief character idea including their name, a key personality trait, and a simple goal: "${promptToAnalyze}"`;
                break;
            case 'conflict':
                apiPrompt = `Based on the following story prompt, suggest a compelling internal or external conflict that the main character could face: "${promptToAnalyze}"`;
                break;
            default:
                console.error('Invalid API call type:', type);
                showMessageBox('Internal error: Invalid API call type.', 'bg-red-100 text-red-700');
                setLoadingState(false);
                return;
        }


        try {
            let chatHistory = [];
            chatHistory.push({ role: "user", parts: [{ text: apiPrompt }] });
            const payload = { contents: chatHistory };

            console.log('Sending payload to Gemini API:', JSON.stringify(payload, null, 2)); // Log the payload being sent

            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            // Check if the response was successful (status code 200-299)
            if (!response.ok) {
                const errorData = await response.text(); // Get raw error response
                console.error(`API Error (${response.status}):`, response.statusText, errorData);
                showMessageBox(`API Error: ${response.status} - ${response.statusText}. See console for details.`, 'bg-red-100 text-red-700');
                return; // Exit function if response not OK
            }

            const result = await response.json();
            console.log(`Gemini API ${type} Response:`, result); // Log full response for debugging

            if (result.candidates && result.candidates.length > 0 &&
                result.candidates[0].content && result.candidates[0].content.parts &&
                result.candidates[0].content.parts.length > 0) {
                const text = result.candidates[0].content.parts[0].text;
                textElement.textContent = text;
                displayElement.classList.remove('hidden');
                displayElement.classList.add('animate-fade-in');
            } else {
                console.error(`Unexpected API response structure for ${type}:`, result);
                showMessageBox(`Failed to ${type} prompt. Unexpected API response.`, 'bg-red-100 text-red-700');
            }
        } catch (error) {
            console.error(`Error calling Gemini API for ${type}:`, error);
            showMessageBox(`Error ${type} prompt. Check console for network/API issues.`, 'bg-red-100 text-red-700');
        } finally {
            setLoadingState(false);
        }
    }

    /**
     * Displays a temporary message box.
     * @param {string} message - The message to display.
     * @param {string} typeClass - Tailwind classes for styling the message box (e.g., 'bg-green-100 text-green-700').
     */
    function showMessageBox(message, typeClass) {
        messageBox.textContent = message;
        messageBox.className = `mt-4 sm:mt-6 p-3 rounded-lg transition-opacity duration-300 ${typeClass}`; // Use app-specific padding
        messageBox.classList.remove('hidden', 'opacity-0', 'fade-out'); // Ensure it's visible and not fading out
        messageBox.classList.add('opacity-100'); // Make it fully visible

        // Hide the message after a few seconds
        setTimeout(() => {
            messageBox.classList.add('fade-out'); // Start fade out animation
            // After fade out, hide completely
            setTimeout(() => {
                messageBox.classList.add('hidden');
                messageBox.classList.remove('opacity-100', 'fade-out');
            }, 500); // Match fadeOut animation duration
        }, 3000); // Display for 3 seconds
    }

    // Removed toggleTheme and updateThemeIcon functions

    /**
     * Clears the notes input field.
     */
    function clearNotes() {
        notesInput.value = '';
        showMessageBox('Notes cleared!', 'bg-yellow-100 text-yellow-700');
    }

    // Initial setup when the DOM is loaded
    populateCategories(); // Populate categories on load
    displayNewRandomPrompt(); // Display an initial random prompt

    // No longer apply saved theme preference on load, as it's fixed to dark
    // The body.dark-mode class and related logic are removed from style.css and script.js.
    // The theme is now permanently dark blue as defined by the :root variables in style.css.


    // Event Listeners
    generateBtn.addEventListener('click', displayNewRandomPrompt); // Generate random prompt
    copyBtn.addEventListener('click', copyPromptToClipboard);
    elaborateBtn.addEventListener('click', () => callGeminiAPI('elaborate', elaboratedPromptDisplay, elaboratedPromptText));
    twistBtn.addEventListener('click', () => callGeminiAPI('twist', plotTwistDisplay, plotTwistText));
    // New AI feature event listeners
    characterBtn.addEventListener('click', () => callGeminiAPI('character', characterDisplay, characterText));
    conflictBtn.addEventListener('click', () => callGeminiAPI('conflict', conflictDisplay, conflictText));

    categorySelect.addEventListener('change', displayNewRandomPrompt); // Change category, get new random
    // Removed themeToggle.addEventListener('click', toggleTheme);

    // Event Listener for custom prompt
    useCustomPromptBtn.addEventListener('click', useCustomPrompt);

    // New Event Listener for Clear Notes button
    clearNotesBtn.addEventListener('click', clearNotes);
});
