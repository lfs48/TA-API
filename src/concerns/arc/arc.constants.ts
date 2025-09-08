export const ABILITY_SEED_DATA = [
    {
        id: 'whisper-1',
        title: 'Say Again?',
        anomalyId: 'whisper',
        data: {
            description: `
            You may respond to a spoken sentence with the
            phrase “Say again?” and then you may tell the
            group what the target says instead of what they
            said initially. Roll *Presence.*
            `,
            success:`
            *On a success,* the target believes that the new sentence
            is what they meant.
            `,
            additional:`
            *On six or more 3s,* you may speak for the target at any time
            in the next hour.
            `,
            failure:`
            *On a failure,* the target is unaffected, and for the next 3 hours
            you can only speak using the words in the sentence you intended for them.
            `,
            question:`
            When someone interrupts me, I give them...
            `,
            answers: {
                'T2': 'The benefit of the doubt.',
                'P4': 'A piece of my mind.'
            }
        },
    },
    {
        id: 'whisper-2',
        title: 'Tip of the Tongue',
        anomalyId: 'whisper',
        data: {
            description: `
            Open your mind to the thoughts of someone nearby.
            Let their words reach your voice and roll *Empathy.*
            `,
            success:`
            *On a success,* you say what the target wishes they were
            saying right now.
            `,
            additional:`
            *On every third 3,* you may ask a question about something
            currently relevant to the target and receive an answer
            from the GM. The question and answer must be spoken out loud
            by your character.
            `,
            failure:`
            *On a failure,* you admit something you don't want anyone to know.
            `,
            question:`
            When I need to fit in somewhere, I...
            `,
            answers: {
                'A11': 'Jump in and act like I belong.',
                'B9': 'Gradually infiltrate after a long period of careful reconnaissance.'
            }
        },
    },
    {
        id: 'whisper-3',
        title: 'Silence',
        anomalyId: 'whisper',
        data: {
            description: `
            Open your mouth and emit a sound that adjusts frequency
            to cancel out the noises you make. Roll *Subtlety.*
            `,
            success:`
            *On a success,* none of your actions make a sound until after
            you make another roll or close your mouth.
            `,
            additional:`
            *For each additional 3,* you can silence the actions of one
            additional target until this effect ends.
            `,
            failure:`
            *On a failure,* your frequency becomes imbalanced and you
            greatly amplify all sound you make for the next hour.
            `,
            question:`
            I go quiet...
            `,
            answers: {
                'S10': 'So others can speak.',
                'S8': 'So my next words hit harder.'
            }
        },
    },
    {
        id: 'catalogue-1',
        title: "What's That Over There?",
        anomalyId: 'catalogue',
        data: {
            description: `
            Point somewhere nearby and say "what's that over there?" Roll *Attentiveness.*
            `,
            success:`
            *On a success,* you create an object where you're pointing. It can be any mundane
            thing you imagine that fits comfortably and harmlessly inside the space, but can only
            feature details or information you would know.
            `,
            additional:`
            *For each additional 3,* you may add another object nearby.
            `,
            failure:`
            *On a failure,* the GM will describe a different object that is now there, and it is either obviously
            out of place or extremely inconvenient.
            `,
            question:`
            My friends would never hurt me, because...
            `,
            answers: {
                'Y1': "They don't know how.",
                'I5': 'I hired them.'
            }
        },
    },
    {
        id: 'catalogue-2',
        title: 'You Might Also Like...',
        anomalyId: 'catalogue',
        data: {
            description: `
            Hold any object small enough to carry and roll *Dynamism.*
            `,
            success:`
            *On a success,* the object changes to a similar but different version
            of the object. (A green coat becomes a blue coat, a stuffed bear
            becomes a stuffed tiger, room key #203 becomes #204, etc.)
            `,
            additional:`
            *On every third 3,* you may give the object an
            additional variant you can freely swap it between,
            such as giving a cane an alternate self as a
            sword. This effect is permanent but it can only
            swap when you are handling the object.
            `,
            failure:`
            *On a failure,* the object is replaced with
            something entirely different. It can no
            longer be changed by this ability.
            `,
            question:`
            To me, the customer is always...
            `,
            answers: {
                'L2': 'Wrong.',
                'J1': 'Right.'
            }
        },
    },
    {
        id: 'catalogue-3',
        title: 'Your Best Self',
        anomalyId: 'catalogue',
        data: {
            description: `
            Open a container large enough to fit you entirely inside. Roll *Duplicity.*
            `,
            success:`
            *On a success,* an alternate version of you is inside. They have one
            particular skill that is useful to your current situation (whittling, whistling,
            whisking, etc). They disappear from your world within the hour.
            `,
            additional:`
            *On six or more 3s,* you can create an additional alternate self.
            `,
            failure:`
            *On a failure,* the alternate version you reveal
            is evil from your perspective. They have
            goals and priorities opposite yours and are
            committed to getting in your way until dealt
            with. They leave your world voluntarily only
            when satisfied by the changes they made to it.
            `,
            question:`
            The enemy of my enemy is...
            `,
            answers: {
                'Y5': 'My friend.',
                'P5': 'Me.'
            }
        },
    },
    {
        id: 'drain-1',
        title: 'Would You Like Some More?',
        anomalyId: 'drain',
        data: {
            description: `
            To you, desire is a bucket. Poke a hole in it by saying
            "Would you like some more?" and roll *Empathy.*
            `,
            success:`
            *On a success,* the person you are speaking to becomes very interested in more of the
            last thing they enjoyed (attention, affection, ice cream, rest, etc.) as identified by you
            and the player of the character. This does not create an addiction or a compulsion, but
            makes that thing, if it's available, into leverage or distraction far beyond its worth.
            This effect lasts for up to one hour.
            `,
            additional:`
            *For each additional 3,* you may spread their
            desire to one other nearby target to similar effect.
            `,
            failure:`
            *On a failure,* the target develops a loathing for
            the last thing they enjoyed. Your suggestion of
            more is insulting to them, and even thinking
            about that thing is revolting to them from now on.
            `,
            question:`
            I can lead a horse to water...
            `,
            answers: {
                'Y4': 'But who drinks water?',
                'C1': "But I'm drinking first."
            }
        },
    },
    {
        id: 'drain-2',
        title: 'Borrow',
        anomalyId: 'drain',
        data: {
            description: `
            You may choose a feature of a mundane target and take it for yourself. Their face, their
            voice, their love, their fingerprints—now you have it, and they do not. Roll *Duplicity.*
            `,
            success:`
            *On a success,* select a nearby living person
            or Anomaly other than what hurt you. They
            are hurt instead, and you are unhurt.
            `,
            additional:`
            *For each additional 3,* choose one:  
            - The target keeps a flawed version of what's borrowed.
            - The effect lasts an additional hour.
            - You may share what's borrowed with one other target.
            `,
            failure:`
            *On a failure,* the target loses what you've
            taken permanently, and no one gets it.
            They remember what they have lost.
            `,
            question:`
            People love me because...
            `,
            answers: {
                'R9': "If they don't, I find new people.",
                'S15': "I make sure I'm flawless."
            }
        },
    },
    {
        id: 'drain-3',
        title: 'Universal Recipient',
        anomalyId: 'drain',
        data: {
            description: `
            When you receive Harm or are hurt in any way, you may roll *Persistence.*
            `,
            success:`
            *On a success,* select a nearby living person
            or Anomaly other than what hurt you. They
            are hurt instead, and you are unhurt.
            `,
            additional:`
            *For each additional 3,* you may choose an additional target
            who receives that same hurt.
            `,
            failure:`
            *On a failure,* your pain cycles back on itself,
            and you are dealt that hurt triply. If there would
            be Harm remaining after your death, it finds
            additional nearby targets until it is all dealt.
            `,
            question:`
            When someone hurts me...
            `,
            answers: {
                'S19': "It's a chance for a valuable lesson.",
                'B11': 'They should not have done that. Why did they do that?'
            }
        },
    },
    {
        id: 'timepiece-1',
        title: "We've Got Time.",
        anomalyId: 'timepiece',
        data: {
            description: `
            When you or a target are in a hurry to complete a task (fix a car, escape a pursuer, etc.)
            check any clock and say the phrase "We've got time." Roll *Professionalism.*
            `,
            success:`
            *On a success,* you're right. If the task is focused on and approached
            genuinely, it will be completed before the impending deadline.
            `,
            additional:`
            *For each additional 3,* you gain an
            additional minute of preparation before
            the deadline hits for other activities.
            `,
            failure:`
            *On a failure,* you are catastrophically, terribly
            wrong — and you don't know until it's too late.
            Your pursuer takes you by surprise, the deadline
            has already passed…where did all the time go?
            `,
            question:`
            I know...
            `,
            answers: {
                'W3': 'The deep magic.',
                'C10': 'Kung-fu.'
            }
        },
    },
    {
        id: 'timepiece-2',
        title: 'Overclock',
        anomalyId: 'timepiece',
        data: {
            description: `
            When you or an ally rolls for an Anomaly ability other than this one, after seeing
            the result, punch a clock and roll *Initiative.*
            `,
            success:`
            *On a success,* you send the target back in time to assist themselves, allowing them
            to use the same ability a second time with an identical number of 3s. This second
            use can affect new targets and does not generate Chaos or Triscendence effects.
            `,
            additional:`
            *For each additional 3,* you add one 3 to the second use.
            This effect can make a roll exceed six 3s.
            `,
            failure:`
            *On a failure,* the original roll becomes a
            failure, and then the ability fails a second time.
            The second failure repeats on the same target
            or moves to a new target, whichever is worse.
            Chaos is not generated by the copied failure.
            `,
            question:`
            I'm more likely to ask...
            `,
            answers: {
                'O6': 'Where are they now?',
                'F3': 'Where are they going?'
            }
        },
    },
    {
        id: 'timepiece-3',
        title: 'Remember When',
        anomalyId: 'timepiece',
        data: {
            description: `
            Make someone feel an overwhelming
            rush of nostalgia for the time they let
            slip away. Hum a tune and roll *Empathy.*
            `,
            success:`
            *On a success,* all past events, even recent
            ones, feel wistfully far away. The target is
            desperate to talk about their past and easily
            led toward subjects you're interested in—
            even typically secret or classified ones.
            `,
            additional:`
            *On every third 3,* you may request
            a particular memory or sequence be
            described in perfect detail—the GM will
            paint the entire scene, and it will not
            suffer the natural decay of memory. This
            effect can reveal information behind even
            Anomalous memory blockages or wipes.
            `,
            failure:`
            *On a failure,* the target becomes
            lost in their memories. They are
            overcome with emotion, and are
            useless for gathering information.
            Returning to the present will take
            time and care. Their condition
            generates at least one Loose End.
            `,
            question:`
            I'll sleep when...
            `,
            answers: {
                'P13': "I'm tired.",
                'O7': "I'm dead."
            }
        },
    },
    {
        id: 'growth-1',
        title: "I'll Cover You!",
        anomalyId: 'growth',
        data: {
            description: `
            When a nearby target would be hurt by an external force, you may say
            "I'll cover you!" and extend your flesh to protect them. Roll *Persistence.*
            `,
            success:`
            *On a success,* you grow rapidly around them and take the attack
            for them. Any hurt, Harm, or death is dealt to you instead of them.
            `,
            additional:`
            On every third 3, you armor yourself in
            extra layers of protective flesh. This instance
            of Harm is reduced by one, and any extra is
            applied to future Harm. (Higher numbers will
            create an obvious change in your physical
            body until it’s lost to absorb the harm.)
            `,
            failure:`
            *On a failure,* you and the target both take
            the original harm. Your body grows beyond
            your intent and remains overgrown in an
            obvious way until you have at least an hour
            to rest and recuperate.
            `,
            question:`
            I protect people because...
            `,
            answers: {
                'F5': "I want them to know who's tougher.",
                'L6': 'They cannot protect themselves.'
            }
        },
    },
    {
        id: 'growth-2',
        title: 'Limbs',
        anomalyId: 'growth',
        data: {
            description: `
            Expand your physical possibility with
            additional limbs similar to the ones you
            already possess. Roll *Dynamism.*
            `,
            success:`
            *On a success,* you gain reach and
            control far beyond typical combatants,
            and can easily engage any mundane or
            Minor Anomaly target into a stalemate.
            `,
            additional:`
            For each additional 3, choose one:  
            - Disarm a target.
            - Engage one more target.
            - Render an engaged target unconscious.
            - KKill an unconscious target.
            `,
            failure:`
            *On a failure,* you become only
            limbs. All other features disappear
            and you become a conscious pile of
            whatever limbs you were hoping to
            create. You are extremely awkward
            and vulnerable to Harm for an hour.
            `,
            question:`
            When I run into a wall, I...
            `,
            answers: {
                'S13': 'Eat the wall.',
                'R7': 'Step over the wall.'
            }
        },
    },
    {
        id: 'growth-3',
        title: 'Eyes',
        anomalyId: 'growth',
        data: {
            description: `
            Open a few more eyes. Roll *Professionalism.*
            `,
            success:`
            *On a success,* you sprout new eyes on your body, with potent new abilities.
            `,
            additional:`
            Spend 3s on the following types of vision, which last for 1 hour:  
            - *1:* Heat, Night, or Telescopic
            - *2:* Fingerprint or X-Ray
            - *3:* Reality (Cuts through illusions and obfuscations)
            - *4:* Plant Sign Language, Anomaly Tracking
            - *6:* Weakness
            - *7:* Future Sight
            `,
            failure:`
            *On a failure,* you see A Vision of the End. You
            receive a piece of forbidden knowledge about
            the end of all things, too big for your mind to
            comprehend. You suffer from an additional
            Burnout on all rolls until the end of the mission.
            `,
            'question-note':`
            Only you can answer this.
            `,
            question:`
            Have you seen a Vision of the End?
            `,
            answers: {
                'G6': 'No. Also, I like plants!',
                'G9': 'Yes.'
            }
        },
    },
    {
        id: 'gun-1',
        title: 'Eliminate',
        anomalyId: 'gun',
        data: {
            description: `
            You can remove a mundane object or person from the equation permanently.
            Once, they existed. Now they do not. Aim your Gun and roll *Dynamism.*
            `,
            success:`
            *On a success,* the target disappears without a trace.
            `,
            additional:`
            *On six or more 3s,* choose any number
            of targets you can see from where you're
            standing. They disappear without a trace.
            `,
            failure:`
            *On a failure,* the target is killed. An object is
            destroyed, a living creature dies. This fact is
            visible, obvious, and potentially horrifying.
            `,
            'question-note':`
            Only you can answer this.
            `,
            question:`
            Will you remember them all?
            `,
            answers: {
                'S6': 'No.',
                'T5': 'Yes.'
            }
        },
    },
    {
        id: 'gun-2',
        title: 'Quick Draw',
        anomalyId: 'gun',
        data: {
            description: `
            When something tries to hurt you, fire your Gun and roll *Initiative.*
            `,
            success:`
            *On a success,* you shot first. The aggressor
            takes one Harm before their attack and they
            do not succeed at hurting you.
            `,
            additional:`
            *For each additional 3,* you may choose an
            additional target to Harm or Eliminate a target
            you've already Harmed with this ability.
            `,
            failure:`
            *On a failure,* you misfire. Something or someone
            important to you is damaged, and the original
            attack against you proceeds as planned.
            `,
            question:`
            I shoot...
            `,
            answers: {
                'G4': 'Carefully.',
                'A12': 'Immediately.'
            }
        },
    },
    {
        id: 'gun-3',
        title: 'Open Carry',
        anomalyId: 'gun',
        data: {
            description: `
            The threat of your Gun is so great that even the mundane can
            sense it. Make your options clear and roll *Presence.*
            `,
            success:`
            *On a success,* a target you are focusing on is intimidated enough to do what you want.
            However, the GM chooses one consequence from the following. The target will:  
            - Remember your face.
            - Contact the authorities.
            - React with extreme fear.
            - Seek retribution.
            `,
            additional:`
            *For each additional 3,* you may either remove
            an option from the possible consequences or
            add an additional target. For example, six 3s
            could mean no consequences and 2 targets, or
            5 targets and all potential consequences.
            `,
            failure:`
            *On a failure,* the target is unafraid. They become
            immune to all effects of your Gun, and will likely
            retaliate in immediate and dangerous ways.
            `,
            question:`
            Friends are...
            `,
            answers: {
                'D6': 'Everywhere, if you know how to look.',
                'W11': "Enemies I haven't made yet."
            }
        },
    },
    {
        id: 'dream-1',
        title: 'Nightmare',
        anomalyId: 'dream',
        data: {
            description: `
            Project yourself into something larger-than-life. Pick a mind
            and wrap its shadow around yourself. Roll *Presence.*
            `,
            success:`
            *On a success,* you may adopt an illusory form and appear as that form to your target.
            The form can be terrifying, beautiful, or mundane—and they believe it's your true form.
            `,
            additional:`
            *On every third 3,* you may ask the player controlling the target
            to tell you one of the following before you take this form:  
            - Their worst fear.
            - Their greatest goal.
            - Their most secret desire.
            `,
            failure:`
            *On a failure,* your true identity is emblazoned
            onto their mind—by night they will dream
            about you, by day they will think about you.
            For today, though, maybe nothing will happen.
            `,
            question:`
            I tend to imagine...
            `,
            answers: {
                'D1': 'The best case scenario.',
                'R13': 'The worst possible outcome.'
            }
        },
    },
    {
        id: 'dream-2',
        title: 'Naptime',
        anomalyId: 'dream',
        data: {
            description: `
            Blow a pinch of sand onto a target and roll *Subtlety.*
            `,
            success:`
            *On a success,* you send the target into a sudden sleep.
            They'll have pleasant dreams and think they nodded off
            on their own after they wake up in a few minutes.
            `,
            additional:`
            *On every third 3,* choose one:  
            - Add an additional target to this effect.
            - The effect lasts an additional hour.
            `,
            failure:`
            *On a failure,* another target, an ally or
            perhaps even yourself, falls asleep instead.
            The fickle sand swirls in obvious ways, and
            the original target sees what you've done.
            `,
            question:`
            My favorite dreams...
            `,
            answers: {
                'D8': 'Recur.',
                'S1': 'Are completely unexpected.'
            }
        },
    },
    {
        id: 'dream-3',
        title: 'Site Visit',
        anomalyId: 'dream',
        data: {
            description: `
            Imagination is real enough. Step into a painting, photograph,
            video, novel, or other piece of art and roll *Attentiveness.*
            `,
            success:`
            *On a success,* you and any nearby allies you choose enter the world depicted. While
            inside you may manipulate objects, converse
            with people, and see from perspectives not
            featured in the original frame.
            `,
            additional:`
            *On every third 3,* choose one:
            - You and your allies change appearance to fit in with the art.
            - When you leave, this piece of art is returned to its original condition.
            `,
            failure:`
            *On a failure,* you forget how to hide your tracks.
            Opportunistic characters from nearby art can
            follow you and enter Reality on their own.
            `,
            question:`
            When I finish a story, I often wish I could...
            `,
            answers: {
                'P8': 'Spend more time with the characters.',
                'P9': 'Share the lesson with someone who needs it.'
            }
        },
    },
    {
        id: 'manifold-1',
        title: 'I Know a Shortcut!',
        anomalyId: 'manifold',
        data: {
            description: `
            When you want to get somewhere in a hurry, say the phrase "I know a shortcut!"
            and then describe a short path to the discussed location. Roll *Initiative.*
            `,
            success:`
            *On a success,* your directions are correct,
            no matter how impossible, for yourself. This
            shortcut disappears once it has been used.
            `,
            additional:`
            *For each additional 3,* an additional person
            may use your shortcut before it disappears.
            `,
            failure:`
            *On a failure,* your shortcut leads
            somewhere very inconvenient instead of
            the desired location, and it is persistent
            and visible to everyone on both ends.
            `,
            question:`
            The world is...
            `,
            answers: {
                'F9': 'As I see it.',
                'S16': 'As I make it.'
            }
        },
    },
    {
        id: 'manifold-2',
        title: 'Just Keep Walking...',
        anomalyId: 'manifold',
        data: {
            description: `
            When you give someone directions, are fleeing from a pursuer,
            or know where someone is going, you may attempt to trap them
            in a maze or endless hallway. Tie a knot and roll *Persistence.*
            `,
            success:`
            *On a success,* you trap them in a complex, repeating path of
            your own design. They cannot exit until you make another roll.
            `,
            additional:`
            *For each additional 3,* you may trap
            an additional target or make the maze
            last for additional rolls past the first.
            `,
            failure:`
            *On a failure,* you speed them
            immediately along to their
            destination—they reach their
            target, or catch you, immediately.
            `,
            question:`
            When in crisis, I...
            `,
            answers: {
                'P6': 'Fly.',
                'S18': 'Fight.'
            }
        },
    },
    {
        id: 'manifold-3',
        title: 'Gyre the Gimbal',
        anomalyId: 'manifold',
        data: {
            description: `
            Adjust your balance and roll *Professionalism.*
            `,
            success:`
            *On a success,* you change the orientation of gravity up to 90 degrees in a direction
            of your choosing. If you're in a room, it affects only that room. If you're outside, it
            affects everything within about 30 yards. This effect lasts until you make another roll.
            `,
            additional:`
            Choose one:
            - The change doesn't affect a single target, such as yourself.
            - The range is infinite for a single target.
            - Gravity for a single target is rotated further than 90 degrees.
            `,
            failure:`
            *On a failure,* you become unmoored from
            gravity. For at least an hour your body acts as
            if it is in a zero gravity environment. Anyone
            who sees this will become a Loose End.
            `,
            question:`
            I spend time with people...
            `,
            answers: {
                'A5': 'I want to understand.',
                'M9': 'Who are already like me.'
            }
        },
    },
    {
        id: 'absence-1',
        title: 'Missed!',
        anomalyId: 'absence',
        data: {
            description: `
            They never seem to know where you are. When something might
            touch or hurt you, you can say "Missed!" and roll *Duplicity.*
            `,
            success:`
            *On a success,* you were always
            somewhere else nearby — perhaps behind
            or on top of whatever tried to touch you.
            `,
            additional:`
            *For each additional 3,* another willing,
            nearby target may be moved with you
            to the new location.
            `,
            failure:`
            *On a failure,* the target moves instead — to
            hurt another, to an angle that deals additional
            Harm, or to a very inconvenient place.
            `,
            question:`
            In an argument, I'll win by...
            `,
            answers: {
                'I2': 'Identifying gaps in logic.',
                'M10': 'Never backing down.'
            }
        },
    },
    {
        id: 'absence-2',
        title: 'Negatives',
        anomalyId: 'absence',
        data: {
            description: `
            Inspect the place where something once was. Roll *Attentiveness.*
            `,
            success:`
            *On a success,* you can see the lost history
            of the place you're inspecting. If a note was
            removed, you know what it read—if an object
            was stolen, you know what it was and how it left.
            `,
            additional:`
            *On every third 3,* you may say one sentence
            about what is lost, and that sentence is true.
            `,
            failure:`
            *On a failure,* there's too much loss. You
            become overwhelmed by the history of
            the location you're in, and receive one
            Harm—in addition to any Loose Ends
            caused by your visible, painful reaction.
            `,
            question:`
            To fill empty space, I tend to...
            `,
            answers: {
                'W5': 'Make conversation.',
                'C6': 'Take up more of it.'
            }
        },
    },
    {
        id: 'absence-3',
        title: 'Unbound',
        anomalyId: 'absence',
        data: {
            description: `
            If something is in your way or holding you back, relax your body and roll *Subtlety.*
            `,
            success:`
            *On a success,* you pass directly through it. You become intangible and can
            move easily through walls, chains, and other obstructions for one hour.
            `,
            additional:`
            *On every third 3,* choose one:
            - You become invisible
            - You become inaudible
            - You become unmemorable to one observer
            - You bring one person with you any time you pass through an obstacle while using this ability.
            `,
            failure:`
            *On a failure,* you lose control of your physical
            form and become unstable. You are unable to
            feel, hold, or interact with physical objects, but
            can still be Harmed for the remainder of the
            mission or until you die, whichever comes first.
            `,
            question:`
            I'd rather be...
            `,
            answers: {
                'U3': 'The distraction.',
                'O3': 'Undercover.'
            }
        },
    },
] as const;