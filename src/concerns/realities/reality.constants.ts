export const REALITY_SEED_DATA = [
    {
        id: 'caretaker',
        name: 'Caretaker',
        trigger: {
            title: 'Needy',
            description:`
                <p>
                The GM may use Reality Trigger to put your
                Dependent in need of attention. If you ignore it,
                your Dependent will throw a fit now and demand
                your time later: the Relationship who has the
                least camaraderie with your Dependent loses
                one Connection.
                </p>
            `
        },
        track: {
            title: 'Independent',
            description:`
                <p>
                If you make your Dependent fix something on
                their own, allow them to be hurt, or place them
                under anyone else’s supervision, your relationship
                with them suffers. Mark the next empty box in a
                four-box “Independent” track. When this happens
                while all boxes are marked, or they mature beyond
                your control, your Dependent no longer depends
                on you. You must choose a new Reality.
                </p>
            `
        },
        release: {
            title: 'It\'s Your Favorite!',
            description:`
                <p>
                When you are doing something that will
                entertain your Dependent, ignore all Burnout.
                </p>
            `
        },
        matrix: [
            'Who would gain custody of your Dependent if you were gone?',
            'Who misses the freedom you used to have?',
            'Who is your Dependent always excited to spend time with?',
        ]
    },
    {
        id: 'overbooked',
        name: 'Overbooked',
        trigger: {
            title: 'Work Phone',
            description: `
                <p>
                You have a smartphone specifically dedicated to your
                Vocation. The GM may use Reality Trigger to have
                one of your Relationships call this phone at any time.
                If you ignore it, that Relationship loses one Connection.
                </p>
            `
        },
        track: {
            title: 'Something Gives',
            description: `
                <p>
                If you fail to do the necessary duties of your
                Vocation, or you lose your phone, mark the next
                empty box in a four-box "Something Gives" track.
                When this happens while all boxes are marked, your
                Vocation is irrevocably ended. If ended this way or
                through any other means, you must choose a
                new Reality.
                </p>
            `
        },
        release: {
            title: 'Threading the Needle',
            description: `
                <p>
                When you are doing something that counts as work
                or practice for your Vocation, ignore all Burnout.
                </p>
            `
        },
        matrix: [
            'Who is your other boss?',
            'Who cares the most about your health?',
            'Who are you in charge of?',
        ]
    },
    {
        id: 'pursued',
        name: 'Pursued',
        trigger: {
            title: 'On Your Trail',
            description: `
                <p>
                The GM may use Reality Trigger to highlight a person
                who recognizes you and will report back to those
                looking for you. If you do not take time to put them
                off your scent, they go rooting around in your
                private life: the Relationship who knows the least
                about you loses one Connection and will ask some
                difficult questions during your next scene with them.
                </p>
            `
        },
        track: {
            title: 'Caught',
            description: `
                <p>
                If you reveal your new identity or location to people
                who would recognize you, mark the next empty box
                on a four-box "Caught" track. When this happens
                while all boxes are marked, your past catches up to
                you. When it does, through this effect or otherwise,
                you must choose a new Reality.
                </p>
            `
        },
        release: {
            title: 'Wasn\'t Me',
            description: `
                <p>
                When you're doing something that will cover
                your tracks, ignore all Burnout.
                </p>
            `
        },
        matrix: [
            'Who knows about your pursuer?',
            'Who would be most hurt to find out the truth?',
            'Who is obsessed with the new you?',
        ]
    },
    {
        id: 'star',
        name: 'Star',
        trigger: {
            title: 'Your Biggest Fan',
            description: `
                <p>
                You have fans everywhere, and all of them want
                a chance to talk to you. The GM may use Reality
                Trigger to have someone recognize you and
                become desperate for your attention. If you ignore
                them, they make a scene now and complain online
                later: the Relationship that would lose the most
                if you fell from fame loses one Connection.
                </p>
            `
        },
        track: {
            title: 'Fallen',
            description: `
                <p>
                If you do something to damage your reputation,
                your fame starts to dwindle. Mark the next empty
                box in a four-box "Fallen" track. When the Fallen
                track is full, or when you give up on your goals,
                your rise to stardom is finished: you must choose
                a new Reality.
                </p>
            `
        },
        release: {
            title: 'Eat It Up',
            description: `
                <p>
                When you are doing something that will assert your
                superiority or prove your worth, ignore all Burnout.
                </p>
            `
        },
        matrix: [
            'Who remains from your former life?',
            'Who is your manager?',
            'Who is your biggest rival?',
        ]
    },
    {
        id: 'struggling',
        name: 'Struggling',
        trigger: {
            title: 'Fly in Your Wallet',
            description: `
                <p>
                The GM may use Reality Trigger to make something
                you're obligated to pay (taxi fare, cover charge, etc.)
                cost more money than you can afford to spend. If you do
                not find a way to escape payment, you'll have to borrow
                from a friend: one of your Relationships, chosen by you,
                loses one Connection.
                </p>
            `
        },
        track: {
            title: 'Back to Zero',
            description: `
                <p>
                If you gain a large sum of money, your debts
                come calling and it quickly disappears.
                Mark the next empty box on a four-box "Back to
                Zero" track. When this happens while all four boxes
                are marked, or you find a way to permanently escape
                your responsibilities, you must choose a new Reality.
                </p>
            `
        },
        release: {
            title: 'Not a Penny More',
            description: `
                <p>
                When you are doing something that will get
                you a good deal, ignore all Burnout.
                </p>
            `
        },
        matrix: [
            'Who do you rely on for shelter?',
            'Who do you owe the most money to?',
            'For whom do you most want to get it together?',
        ]
    },
    {
        id: 'newborn',
        name: 'Newborn',
        trigger: {
            title: 'Still Learning',
            description: `
                <p>
                The GM may use Reality Trigger to have you forget —
                or never have known — how to do a common
                everyday activity (open a door, operate a toaster,
                fire a gun, say the word "earwax," etc.) You cannot
                do it right now, and need to seek assistance or an
                alternative path. If you do not take the time to find
                either, the embarrassment sends you retreating:
                the Relationship whose opinion you value the
                most loses one Connection.
                </p>
            `
        },
        track: {
            title: 'Self-Made',
            description: `
                <p>
                If you change something about yourself to fit into
                the world, mark the next empty box on a four-box
                "Self-Made" track. When this happens while all four
                boxes are marked, or you no longer feel like an
                outsider in your world, you must choose a new Reality.
                </p>
            `
        },
        release: {
            title: 'Just Like Home',
            description: `
                <p>
                When you are doing something that will make
                the world more like you, ignore all Burnout.
                </p>
            `
        },
        matrix: [
            'Who is your favorite teacher?',
            'Who relies on your unusual perspective?',
            'Who loves to take advantage of your naivete?',
        ]
    },
    {
        id: 'romantic',
        name: 'Romantic',
        trigger: {
            title: 'Oh No, They\'re Hot',
            description: `
                <p>
                You cannot ignore when an opportunity strikes. The
                GM may use Reality Trigger to have you notice a
                Vibe. This Vibe might be genuine or entirely imagined.
                If you don't shoot your shot, you dwell on the missed
                connection and struggle to be present: the Relationship
                you're closest to something real with loses 1 Connection.
                </p>
            `
        },
        track: {
            title: 'Settled',
            description: `
                <p>
                Each time an existing relationship gets in the way
                of a new one, mark the next empty box on a four-
                box "Settled" track. When this happens while all
                four boxes are full, you know what you're looking
                for and might have already found it. You must
                choose a new Reality.
                </p>
            `
        },
        release: {
            title: 'That\'s Right, I\'m Hot',
            description: `
                <p>
                Whenever you're doing something that will make you
                look more attractive or sympathetic, ignore all Burnout.
                </p>
            `
        },
        matrix: [
            'Who is your longest-term situationship?',
            'Who has never, ever found you attractive?',
            'Who are you oblivious to the romantic possibilities with?',
        ]
    },
    {
        id: 'backbone',
        name: 'Backbone',
        trigger: {
            title: 'Endless Responsibility',
            description: `
                <p>
                The GM may use Reality Trigger to have one of your
                organization's members approach you with a need
                at any time. If you ignore or avoid them, you look
                bad to your organization and those who know it: a
                Relationship, chosen by the player of your successor
                (see Relationship Matrix) loses one Connection.
                </p>
            `
        },
        track: {
            title: 'Ousted',
            description: `
                <p>
                If you break your Organization's rules or embarrass
                the other members, mark the next empty box on a
                four-box "Ousted" track. When this happens while
                all boxes are marked, or when you abdicate your
                position, your successor takes over the organization.
                You must choose a new Reality.
                </p>
            `
        },
        release: {
            title: 'Here\'s My Card',
            description: `
                <p>
                When you are doing something that will increase the
                influence of your Organization, ignore all Burnout.
                </p>
            `
        },
        matrix: [
            'Who is your successor?',
            'Who threatens your organization\'s continued existence?',
            'Who can never even remember your organization\'s name?',
        ]
    },
    {
        id: 'creature',
        name: 'Creature',
        trigger: {
            title: 'Yes Right Now',
            description: `
                <p>
                Your true self has needs that others may understand
                but could never share. The GM may use Reality
                Trigger to have one of these urges bubble to the
                surface of your consciousness. If you ignore this
                urge, the willpower spent ignoring it causes you
                to struggle to communicate with others: the
                Relationship who most believes your disguise
                loses one Connection.
                </p>
            `
        },
        track: {
            title: 'Revealed',
            description: `
                <p>
                If the truth about yourself is confessed or exposed
                to someone, mark the next empty box on a four-
                box "Revealed" track. When this happens while all
                boxes are marked, or you are exposed publicly in a
                way that can't be undone, your disguise no longer
                functions. If you can continue to work you must
                choose a new Reality.
                </p>
            `
        },
        release: {
            title: 'Crushing It',
            description: `
                <p>
                When you are doing something that will make
                you seem less interesting, ignore all Burnout.
                </p>
            `
        },
        matrix: [
            'Who came from the same place you did?',
            'Who taught you how to hide among regular people?',
            'Who do you wish to teach more about your first life?',
        ]
    },
];

export const CONNECTION_BONUS_SEED_DATA = [
    {
        id: 'cerebral',
        title: 'Cerebral',
        description: 'This person is always a few steps ahead. On your next mission, you may call them at any point to get a warning of danger or potential tragedy before it happens.',
        maxUses: 1
    },
    {
        id: 'compassionate',
        title: 'Compassionate',
        description: 'This person is extremely understanding, and good at relating to people. While this Bonus is active they can\'t become a Loose End, and if you ask them for help keeping a small group calm they have a high chance of success.',
        maxUses: 1
    },
    {
        id: 'connected',
        title: 'Connected',
        description: 'This person knows everybody. If you need an introduction to all but the most reclusive and secretive people, they can arrange it. If you embarrass them as a result, you lose one Connection with this Relationship.',
        maxUses: 1
    },
    {
        id: 'cursed',
        title: 'Cursed',
        description: 'Nothing ever goes right when this person is around. Once during your mission, you can ask them to politely engage with someone or something and the curse will spread to them, creating inconveniences and disruption to their day.',
        maxUses: 1
    },
    {
        id: 'early-adopter',
        title: 'Early Adopter',
        description: 'This person has all sorts of strange gadgets. Once during your mission, you can reveal a perfectly niche device relevant to your situation that they have already let you borrow. If it breaks or is lost, you lose one Connection with this Relationship.',
        maxUses: 1
    },
    {
        id: 'energizing',
        title: 'Energizing',
        description: 'By performing one of the rituals of your friendship with this person (getting drinks, playing pickup basketball, painting one another\'s nails, etc.) once at any point during your mission, you can recharge 3 of your spent Quality Assurances.',
        maxUses: 1
    },
    {
        id: 'fashionable',
        title: 'Fashionable',
        description: 'This person has everything you could possibly need in their closet. If you need a change of clothes, a disguise, or an impressive outfit of some kind they will provide it quickly and easily. If you destroy or lose any of their things, you lose one Connection with this Relationship.',
        maxUses: 1
    },
    {
        id: 'influential',
        title: 'Influential',
        description: 'Once per mission you can tell this person about an idea, trend, or opinion and they will immediately spread it through their network. After you do so, all but the most reclusive people you encounter will know about this idea and have formed an opinion about it.',
        maxUses: 1
    },
    {
        id: 'mobile',
        title: 'Mobile',
        description: 'This person has access to an unusual mode of transit and lots of free time. They\'ll take you around in their vehicle or let you borrow it while this Bonus is active. If their vehicle breaks or is lost, you lose one Connection with this Relationship.',
        maxUses: 1
    },
    {
        id: 'tough',
        title: 'Tough',
        description: 'This person, if they\'re nearby, can protect civilians from death or you from a single Harm 3 times before they themselves have to retreat and recover.',
        maxUses: 1
    },
    {
        id: 'venerable',
        title: 'Venerable',
        description: 'Once during your mission, you can ask this person for advice on any interpersonal situation. They will clearly lay out the possibilities or best option, and they\'ll be right. Telling them too much information can still create Loose Ends.',
        maxUses: 1
    },
    {
        id: 'well-read',
        title: 'Well-Read',
        description: 'If you need to know a piece of historical information or how something mechanical works, you can call this person once during your mission and they\'ll reliably know the answer. Telling them too much information can still create Loose Ends.',
        maxUses: 1
    }
]