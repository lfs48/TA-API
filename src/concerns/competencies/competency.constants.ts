export const COMPETENCY_SEED_DATA = [
    {
        id: 'pr',
        name: 'PR',
        directives: [
            'Each time you lie'
        ],
        sanctioned: [
            'Create a distraction.',
            'Give a great excuse.',
            'Ensure they will never speak of this again.'
        ],
        requisitionId: 'pr-req',
        assessment: [
            {
                question: 'When a coworker embarrasses themselves in public, I...',
                answers: [
                    'Loudly say \"How avant garde!\"',
                    'Repeat their behavior until it seems normal.'
                ],
                qas: [
                    'Presence',
                    'Persistence',
                ]
            },
            {
                question: 'When one of our products causes a serious tragedy, my messaging...',
                answers: [
                    'Communicate our regret.',
                    'Explain how it hurts us, too.'
                ],
                qas: [
                    'Duplicity',
                    'Empathy',
                ]
            },
            {
                question: 'A coworker has been murdered! I am...',
                answers: [
                    'The murderer.',
                    'Due for a promotion.',
                ],
                qas: [
                    'Initiative',
                    'Subtlety',
                ]
            }
        ],
    },
    {
        id: 'rnd',
        name: 'R&D',
        directives: [
            'Each time you do the same thing twice, receive 1 Demerit.'
        ],
        sanctioned: [
            'Uncover what someone really needs.',
            'Reinvent the wheel.',
            'Change someone\'s life. Permanently.'
        ],
        requisitionId: 'rnd-req',
        assessment: [
            {
                question: 'If at first you don\'t succeed...',
                answers: [
                    'Never let them see you cry.',
                    'Try try try try try try try.'
                ],
                qas: [
                    'Professionalism',
                    'Persistence'
                ]
            },
            {
                question: 'When I\'m solving an equation and the conclusion seems impossible, I...',
                answers: [
                    'Remind myself it\'s natural to make mistakes.',
                    'Eliminate all other possibilities.'
                ],
                qas: [
                    'Empathy',
                    'Dynamism'
                ]
            },
            {
                question: 'I\'ve been framed! I defend myself by...',
                answers: [
                    'Destroying all incriminating evidence.',
                    'Scapegoating a more likely suspect.'
                ],
                qas: [
                    'Subtlety',
                    'Attentiveness'
                ]
            }
        ],
    },
    {
        id: 'barista',
        name: 'Barista',
        directives: [
            'Each time you say someone\'s name correctly, receive 1 Demerit.'
        ],
        sanctioned: [
            'Make someone feel welcome.',
            'Show off your specialized knowledge.',
            'Get some blood flowing.'
        ],
        requisitionId: 'barista-req',
        assessment: [
            {
                question: 'A coworker asks me to cover their shift because of a breakup. I...',
                answers: [
                    'Cover their shift.',
                    'Get them back together.'
                ],
                qas: [
                    'Empathy',
                    'Professionalism'
                ]
            },
            {
                question: 'Someone\'s drink was stolen by a stranger! I handle it by...',
                answers: [
                    'Pretending I didn\'t notice.',
                    'Making two of every drink ahead of time.'
                ],
                qas: [
                    'Duplicity',
                    'Initiative'
                ]
            },
            {
                question: 'A customer complained about my service. I\'m more likely to...',
                answers: [
                    'Add something to the brew.',
                    'Add them to the brew.'
                ],
                qas: [
                    'Subtlety',
                    'Dynamism'
                ]
            }
        ],
    },
    {
        id: 'ceo',
        name: 'CEO',
        directives: [
            'Each time you take an order, receive 1 Demerit.'
        ],
        sanctioned: [
            'Make someone do what you want.',
            'Enjoy one of the finer things in life.',
            'Make a necessary sacrifice.'
        ],
        requisitionId: 'ceo-req',
        assessment: [
            {
                question: 'My management style is best described as...',
                answers: [
                    'Hands-on.',
                    'Treating employees like family.'
                ],
                qas: [
                    'Dynamism',
                    'Duplicity'
                ]
            },
            {
                question: 'I inspire my team with my...',
                answers: [
                    'Oil Portrait.',
                    'Automated out-of-office response.'
                ],
                qas: [
                    'Presence',
                    'Professionalism'
                ]
            },
            {
                question: 'When cuts are unavoidable, I terminate the employee who...',
                answers: [
                    'Was late most often.',
                    'Was late today.'
                ],
                qas: [
                    'Attentiveness',
                    'Initiative'
                ]
            }
        ],
    },
    {
        id: 'intern',
        name: 'Intern',
        directives: [
            'Each time you deny a request, receive 1 Demerit.',
        ],
        sanctioned: [
            'Confidently fail.',
            'Embarrass yourself for others\' benefit.',
            'Bring something screeching to a halt.'
        ],
        requisitionId: 'intern-req',
        assessment: [
            {
                question: 'When acquiring new skills, I am a...',
                answers: [
                    'Visual learner.',
                    'Pain-consequence learner.'
                ],
                qas: [
                    'Attentiveness',
                    'Persistence'
                ]
            },
            {
                question: 'I\'ve suddenly come into a large inheritance. I will definitely...',
                answers: [
                    'Invest it in the Agency for mutual benefit.',
                    'Donate it to an Agency branch in need.'
                ],
                qas: [
                    'Initiative',
                    'Empathy'
                ]
            },
            {
                question: 'My direct supervisor has been secretly committing felonies! I...',
                answers: [
                    'Edit their calendar to create strong alibis.',
                    'Turn myself in for their crimes.'
                ],
                qas: [
                    'Subtlety',
                    'Presence'
                ]
            }
        ],
    },
    {
        id: 'gravedigger',
        name: 'Gravedigger',
        directives: [
            'Each time you touch something living, receive 1 Demerit.',
        ],
        sanctioned: [
            'Dig up some dirt.',
            'Clean up a mess.',
            'Bury a problem.'
        ],
        requisitionId: 'gravedigger-req',
        assessment: [
            {
                question: 'When training new employees in my field, I emphasize...',
                answers: [
                    'Shovel technique.',
                    'Creating demand.'
                ],
                qas: [
                    'Attentiveness',
                    'Initiative'
                ]
            },
            {
                question: 'I\'m in charge of the quarterly earnings reports. To ensure a good impression on shareholders, I...',
                answers: [
                    'Repeat the presentation until I get the desired response.',
                    'Bury the bad numbers under positive energy.'
                ],
                qas: [
                    'Persistence',
                    'Presence'
                ]
            },
            {
                question: 'I handle my higher-than-average knowledge of humanity\'s infinite pain by...',
                answers: [
                    'Enjoying the smell of tea and other small pleasures.',
                    'Developing a higher-than-average knowledge of humanity\'s infinite joys to match.'
                ],
                qas: [
                    'Subtlety',
                    'Professionalism'
                ]
            }
        ],
    },
    {
        id: 'reception',
        name: 'Reception',
        directives: [
            'Each time you sit down, receive 1 Demerit.',
            'Each time you leave a question unanswered, receive 1 Demerit.'
        ],
        sanctioned: [
            'Interrogate someone.',
            'Commandeer belongings.',
            'Close a door forever.'
        ],
        requisitionId: 'reception-req',
        assessment: [
            {
                question: 'A coworker of four years has never learned my name. I...',
                answers: [
                    'Clearly and loudly introduce myself until they get the picture.',
                    'Forget theirs.'
                ],
                qas: [
                    'Presence',
                    'Duplicity'
                ]
            },
            {
                question: 'Somebody isn\'t who they claim to be. I verify their identity by...',
                answers: [
                    'Interrogating them.',
                    'Interrogating them.'
                ],
                qas: [
                    'Persistence',
                    'Dynamism'
                ]
            },
            {
                question: 'A criminal is breaking into my building while it is being evacuated due to a fire. I...',
                answers: [
                    'Ensure the fire is not interrupted.',
                    'Recognize them as first responders and let them through.'
                ],
                qas: [
                    'Professionalism',
                    'Attentiveness'
                ]
            }
        ],
    },
    {
        id: 'hotline',
        name: 'Hotline',
        directives: [
            'Each time you deliver bad news, receive 1 Demerit.',
            'Once each mission, you can press play on your tape player to immediately transport you and any nearby allies to a perfectly safe waiting room for up to one hour. When you return, all affected can place themselves anywhere in the room they left and no time has passed in the world around you.'
        ],
        sanctioned: [
            'Help someone unburden themselves.',
            'Take the blame for something you didn\'t do.',
            'Connect someone to an unexpected fate.'
        ],
        requisitionId: 'hotline-req',
        assessment: [
            {
                question: 'A customer has a problem I have been unable to fix in my own life. I...',
                answers: [
                    'Share the approaches that have failed, to save them time.',
                    'Assure them we can find a solution together.'
                ],
                qas: [
                    'Empathy',
                    'Duplicity'
                ]
            },
            {
                question: 'A customer has a broken product and a convincing story. I...',
                answers: [
                    'Pull every string necessary to get their refund.',
                    'Make it clear that all sales are final.'
                ],
                qas: [
                    'Persistence',
                    'Dynamism'
                ]
            },
            {
                question: 'A customer\'s call disconnected. I...',
                answers: [
                    'Call them back and submit an error report to IT.',
                    'Complete the call without them.'
                ],
                qas: [
                    'Professionalism',
                    'Presence'
                ]
            }
        ],
    },
    {
        id: 'clown',
        name: 'Clown',
        directives: [
            'Each time you talk about feelings, receive 1 Demerit.',
        ],
        sanctioned: [
            'Put on a show.',
            'Expose an embarrassing truth.',
            'Demand a smile.'
        ],
        requisitionId: 'clown-req',
        assessment: [
            {
                question: 'When I catch a thief making off with my balloon animals, I...',
                answers: [
                    'Teach them to make their own.',
                    'Show them balloons aren\'t the only thing I can tie into novel shapes.'
                ],
                qas: [
                    'Empathy',
                    'Dynamism'
                ]
            },
            {
                question: 'My car holds...',
                answers: [
                    'A regular number of people.',
                    'Everyone who needs a ride.'
                ],
                qas: [
                    'Duplicity',
                    'Persistence'
                ]
            },
            {
                question: 'Finish this sentence: "But doctor..."',
                answers: [
                    'I\'m the doctor!',
                    'I saw what happened to Pagliacci. The chaos. The carnage. The wars that followed. I would appreciate a more effective medical prescription.'
                ],
                qas: [
                    'Presence',
                    'Professionalism'
                ]
            }
        ],
    }
];

export const REQUISITION_SEED_DATA = [
    {
        id: 'pr-req',
        title: 'Printing Press',
        description:`
            <p>
            This ancient, unwieldy printing press is kept
            in an old recreation room on an unused floor in
            your Agency headquarters. Once each mission,
            you may use the press to print a story which is
            then immediately published across all major local
            publications. If you’re on the go, you can send your
            story to the others in your department to run
            it through the press.
            </p>
        `,
        uses: 1,
    },
    {
        id: 'rnd-req',
        title: 'Rubber Duck',
        description:`
            <p>
            The squeaker within this bath toy foretells great
            possibility. Once per mission, you may describe an
            outcome to this pocket-sized duck toy. The toy will
            speak back: your GM will tell you the 3 steps you
            must take to achieve that outcome. Any outcome
            you request becomes possible, no matter how
            improbable it seems. If you ask the Rubber Duck
            about Anomalies directly, it will melt into a
            useless lump instead.
            </p>
        `,
        uses: 1,
    },
    {
        id: 'barista-req',
        title: 'Triple Shot Glass',
        description:`
            <p>
            The Barista has a special shot glass from the Vault
            Cafe. Once each mission, if this shot glass is used
            when pulling espresso from any espresso machine,
            the resulting shot can be poured into the mouth of
            a dead body to return them to life for ten minutes.
            Whether Anomalous or Mundane, they cannot
            survive any amount of Harm.
            </p>
        `,
        uses: 1,
    },
    {
        id: 'ceo-req',
        title: 'Expense Account',
        description:`
            <p>
            This enormous accountant’s ledger is rumored
            to contain every purchase made in the history of
            mankind. Once each mission, you may write that
            the Agency has acquired something specific in the
            ledger and it becomes Agency property. You may
            use it during this mission, but the Agency makes
            decisions about it going forward.
            </p>
        `,
        uses: 1,
    },
    {
        id: 'intern-req',
        title: 'Inherited Nametag',
        description:`
            <p>
            All Interns are given an endless packet of
            blank nametags.
            Once each mission, you may write the name of
            someone you met today on a nametag and apply
            it somewhere on your person. Everyone except
            other Agents will treat you as the named person
            for as long as you keep the nametag on.
            </p>
        `,
        uses: 1,
    },
    {
        id: 'gravedigger-req',
        title: 'Dracula\'s Coffin',
        description:`
            <p>
            The coffin of the man himself lies deep in the vault,
            buried under layers of earth. You can exhume the
            coffin once each mission to place something inside
            that can fit. When the coffin is returned to the
            earth, whatever you placed inside never existed.
            All memories of it are erased, and every effect it
            had on the world is ascribed to other sources.
            </p>
        `,
        uses: 1,
    },
    {
        id: 'reception-req',
        title: 'Moebius Circuit TV',
        description:`
            <p>
            An endless room in the Vault made entirely of
            television screens. Once each mission, you may use
            any internet-connected device to access a feed
            from one of the TVs in this room. The screen shows
            you up to thirty minutes of footage of any moment
            in time from a place you’ve visited that day.
            </p>
        `,
        uses: 1,
    },
    {
        id: 'hotline-req',
        title: 'Hold Music, Vol 1',
        description:`
            <p>
            You have a powerful tape player with a built-in
            speaker and one tape of bland, cheerful music.
            Once each mission, you can press play to
            immediately transport you and any nearby allies
            to a perfectly safe waiting room for up to one hour.
            When you return, all affected can place themselves
            anywhere in the room they left and no time has
            passed in the world around you.
            </p>
        `,
        uses: 1,
    },
    {
        id: 'clown-req',
        title: 'The Fool\'s Cap',
        description:`
            <p>
            Once each mission, you may don the Fool’s Cap
            given to all Agency Clowns. For one minute, anything
            you do inspires laughter and enjoyment, no matter
            the action. Following this minute, mundane viewers
            will remember all actions you took fondly. This does
            not protect you from later viewers of the consequences.
            </p>
        `,
        uses: 1,
    }
];