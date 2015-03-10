module Firefly.distinctions {

	export class Distinction {
		name: string;
		description: string;
		triggers: Trigger[];
		highlightedSkills: string[];
		category: string;
	}

	export class Trigger {
		name: string;
		description: string;
	}

	export class DistinctionSet {
		roles: Distinction[] = [
			{
				name: "Agent Provocateur",
				description: "You’re a bad influence. Professionally.",
				triggers: [
					{ name: "Cover Story", description: "When you lie about where you’ve been or what you were doing, spend 1 PP to create a d8 Asset that confirms your cover story." },
					{ name: "Devil on the Shoulder", description: "Spend 1 PP to double Trick or Influence when persuading someone to do something illegal." }
				],
				highlightedSkills: ["Influence", "Sneak", "Trick"],
				category: 'Role'
			},

			{
				name: "Alliance Spy",
				description: "You’ve got your orders. What you do with them now is up to you.",
				triggers: [
					{ name: "Alliance Agenda", description: "When you’re interacting with any Alliance personnel, spend 1 PP to reveal that you outrank them or function at a more important level than they do." },
					{ name: "Espionage", description: "Step back an Asset related to surveillance, investigation, or intelligence gathering in order to reroll your dice in appropriate situations." }
				],
				highlightedSkills: ["Shoot", "Sneak", "Trick"],
				category: 'Role'
			},

			{
				name: "Alliance Officer",
				description: "You proudly wear the uniform of the organization that brought peace to the universe.",
				triggers: [
					{ name: "Chain of Command", description: "Gain 1 PP when you step up a Complication because of orders you received from your superiors." },
					{ name: "Sir, Yes, Sir:	", description: "Spend 1 PP to create an Asset at a d8 to represent a specialist under your command." }
				],
				highlightedSkills: ["Fight", "Notice", "Shoot"],
				category: 'Role'
			},

			{
				name: "Backwater Matriarch",
				description: "This planet ain’t much, but it’s better than not running one.",
				triggers: [
					{ name: "I Didn’t Expect to Be Hearing From You", description: "Step up your Social die for a scene when you step up a Complication involving someone you don’t like." },
					{ name: "Go Get ’Em", description: "Spend 1 PP to step up a Complication inflicted by one of your thugs." }
				],
				highlightedSkills: ["Focus", "Influence", "Shoot"],
				category: 'Role'
			},

			{
				name: "Backwater Mayor",
				description: "This town ain’t much, but you rule it with an iron grip.",
				triggers: [
					{ name: "Teach ’Em a Lesson, Boys:	", description: "Spend 1 PP to step up a Complication inflicted by one of your thugs." },
					{ name: "Vicious Glare", description: "Spend 1 PP to remove an Asset from an opponent’s roll involving the assistance of townfolks." }
				],
				highlightedSkills: ["Focus", "Influence", "Know"],
				category: 'Role'
			},

			{
				name: "Backwater Sheriff",
				description: "One good man is all a town needs to keep the peace. Sometimes, that’s all it has.",
				triggers: [
					{ name: "Playing the Bumpkin", description: "Step back your Know for a scene to step up your Notice to catch a suspect off guard." },
					{ name: "Only Law in Town", description: "When you stand up to a group of criminals by yourself, step up or double Shoot or spend 1 PP to do both." }
				],
				highlightedSkills: ["Fight", "Notice", "Shoot"],
				category: 'Role'
			},

			{
				name: "Blue Sun Agent",
				description: "They pay you well. But they want concrete results, or they will pull the plug. Your plug, specifically.",
				triggers: [
					{ name: "Corporate Payoff", description: "Step up a Complication to create a d8 Asset for another character when that character agrees to help you complete your mission." },
					{ name: "Failure Is Not an Option", description: "Step up a Complication to step up one of your Skill dice for one roll when completing a vital part of your mission." }
				],
				highlightedSkills: ["Shoot", "Sneak", "Trick"],
				category: 'Role'
			},

			{
				name: "Bounty Hunter",
				description: "There are wanted men everywhere in the ’Verse and people who’ll pay good money for ’em. This is what you do. You don’t have to like it.",
				triggers: [
					{ name: "Tracker", description: "Spend 1 PP to create a Quarry Asset at d6. Choose your target; they don’t have to be in your presence. You may use this Asset in any rolls made to track down and capture your target. Every time you use it in a die roll and fail, you may step it up by one. You may only have one Quarry Asset at a time." },
					{ name: "Cortex Sniffer", description: "Spend 1 PP to use Operate instead of Survive to track down a fugitive." }
				],
				highlightedSkills: ["Fight", "Fly", "Notice"],
				category: 'Role'
			},

			{
				name: "Brilliant Gunsmith",
				description: "You’ve got a knack for being a tech wiz. Guns make the most money, so you followed the market.",
				triggers: [
					{ name: "Design Flaw", description: "Spend 1 PP to step back a firearm Asset (including a Signature Asset) by exploiting an inferior weapon.", },
					{ name: "Genius Inventor", description: "Spend 1 PP to create a d8 Asset when you fiddle with someone else’s gun for a scene." }
				],
				highlightedSkills: ["Fix", "Notice", "Shoot"],
				category: 'Role'
			},

			{
				name: "Cattle Baron",
				description: "Everybody’s got to eat. Ain’t nothing in the ’Verse like a juicy steak. ’Cept maybe what folks are willing to pay for one.",
				triggers: [
					{ name: "An Eye for Good Folks", description: "Spend 1 PP to create a d8 Asset representing a servant or ranch hand." },
					{ name: "New Money", description: "Step up a Complication involving social graces to reroll a die." }
				],
				highlightedSkills: ["Influence", "Labor", "Survive"],
				category: 'Role'
			},

			{
				name: "Company Magistrate",
				description: "As a magistrate, you are the boss, mayor, judge, and jury of this company town.",
				triggers: [
					{ name: "Company Contacts", description: "Spend 1 PP to create a d8 Asset that represents a company specialist or resource." },
					{ name: "Middle Management", description: "Double or step up Trick for a scene. If you do, take or a Corporate Oversight d8 Complication." }
				],
				highlightedSkills: ["Fly", "Notice", "Trick"],
				category: 'Role'
			},

			{
				name: "Con Artist",
				description: "There’s a sucker born every minute. You just gotta put your line in the water.",
				triggers: [
					{ name: "Instant Expert", description: "When you try to pass yourself off as an expert, take or step up a Web of Lies Complication to double Trick for the roll." },
					{ name: "The Stall", description: "When you act as a distraction for another Crewmember’s Action, spend 1 PP to step up or double the die you lend to them." }
				],
				highlightedSkills: ["Craft", "Perform", "Trick"],
				category: 'Role'
			},

			{
				name: "Contract Miner",
				description: "Pulling ore out of the ground—or out of floating rocks—isn’t a vocation for the weak. Every rutting day is a battle against the elements.",
				triggers: [
					{ name: "Blood, Sweat, and Tears:	", description: "Spend 1 PP to ignore a Complication for a die roll that includes one of your highlighted Skills." },
					{ name: "Company Ties", description: "Gain 1 PP when your contract or agreement with the mining company forces you to make an unfavorable or unwanted choice." }
				],
				highlightedSkills: ["Labor", "Operate", "Survive"],
				category: 'Role'
			},

			{
				name: "Core Surgeon",
				description: "You’ve studied at the best medical academy in the Core. No one is doing to die on your watch.",
				triggers: [
					{ name: "Dedicated Effort", description: "Spend 1 PP to step up or double Focus for the duration of a Timed Action that relies on manual dexterity and endurance, such as an extended surgery." },
					{ name: "No Time for the Rules", description: "When you throw caution to the wind and break the rules to try to keep a patient alive, gain 1 PP." }
				],
				highlightedSkills: ["Focus", "Operate", "Treat"],
				category: 'Role'
			},

			{
				name: "Cortex Technician",
				description: "Waves in the black don’t just happen. From world to world, you’ve made sure nobody stops the signal.",
				triggers: [
					{ name: "I’m Working Here", description: "Spend 1 PP at the beginning of a Timed Action involving communications, data, or computer equipment. For each of your rolls during the Timed Action, you may reroll any die that comes up 1 instead of accepting a Plot Point for that die. If a die comes up as a 1 when rerolled, it may not be rerolled a second time." },
					{ name: "In the Loop", description: "You may spend Plot Points for anyone with whom you are in direct contact via a communications network." }
				],
				highlightedSkills: ["Fix", "Know", "Operate"],
				category: 'Role'
			},

			{
				name: "Dockyard Worker",
				description: "So many folk come and go at a spacedock, it’s like a daily class in other cultures. It’s also gorramn drudgery and pays almost nothing, so why not keep an ear open?",
				triggers: [
					{ name: "Cosmopolitan", description: "Spend 1 PP to add a Specialty in a different culture to your Crew Sheet for a scene." },
					{ name: "Unsavory Element", description: "When you create an Asset or take a Complication that relates your less-than-cultured social group of workers, smugglers, and inspectors, step it up." }
				],
				highlightedSkills: ["Know", "Labor", "Operate"],
				category: 'Role'
			},

			{
				name: "Engineer D8",
				description: "There are a lot of laws you follow. Newton’s second, for example.",
				triggers: [
					{ name: "Applied Physics", description: "When you have the time to calculate the trajectory of your throw, spend 1 PP to double Throw for a roll." },
					{ name: "Rush Job", description: "During a Timed Action that requires repairs or construction, you may take or step up a Shoddy Workmanship Complication to add an extra beat." }
				],
				highlightedSkills: ["Craft", "Fix", "Throw"],
				category: 'Role'
			},

			{
				name: "Farmer",
				description: "Terraforming made plenty of work for you, but it’s a rough life, whether it’s cows, corn, or chemically-altered protein product.",
				triggers: [
					{ name: "Lay of the Land", description: "Spend 1 PP to reveal a fact about the natural world you’re standing on—environmental conditions, weather, or animal life—as a d8 Asset." },
					{ name: "Rugged", description: "Spend 1 PP to ignore a Complication for a die roll that includes one of your highlighted Skills." }
				],
				highlightedSkills: ["Craft", "Labor", "Survive"],
				category: 'Role'
			},

			{
				name: "Fed",
				description: "You’ve got a crew, a ship, and a mission. Apprehend criminals runnin’ to the black.",
				triggers: [
					{ name: "Bound By Law", description: "Gain 1 PP when you arrest someone with an outstanding warrant." },
					{ name: "Field Work", description: "Double Know or Operate for a roll when investigating the scene of a crime. Step back your Social Attribute for the rest of the scene." }
				],
				highlightedSkills: ["Know", "Operate", "Shoot"],
				category: 'Role'
			},

			{
				name: "First Mate",
				description: "You’re the captain’s right hand, but as often as not you’re his fist.",
				triggers: [
					{ name: "Got Your Back, Sir:	", description: "If your captain fails a die roll in your presence, step up or double your Attribute on your next die roll." },
					{ name: "Right Here, Sir:	", description: "Spend 1 PP to join a scene involving the captain that you weren’t already in." }
				],
				highlightedSkills: ["Fight", "Influence", "Notice"],
				category: 'Role'
			},

			{
				name: "Gambler",
				description: "The greater the risk, the greater the thrill. You’re addicted to the luck of the draw.",
				triggers: [
					{ name: "Risky Business", description: "If you replace your Skill die in a roll with a d4, you get a Big Damn Hero Die equal to that Skill’s normal die rating if you successfully set or raise the stakes." },
					{ name: "All or Nothing", description: "When you are about to be Taken Out in a scene, spend 1 PP to reroll your dice. If you fail to set or raise the stakes on your second roll, you cannot spend a PP to stay in the fight." }
				],
				highlightedSkills: ["Focus", "Notice", "Trick"],
				category: 'Role'
			},

			{
				name: "Gang Boss",
				description: "They are the best muscle money can buy. Too bad you’re so cheap.",
				triggers: [
					{ name: "Menacing Growl", description: "Step up a personal Complication to reroll any pool containing your thugs or goons." },
					{ name: "What Do I Pay You For", description: "You may lose one of your thug Assets in your die pool to avoid being Taken Out in a scene." }
				],
				highlightedSkills: ["Focus", "Influence", "Trick"],
				category: 'Role'
			},

			{
				name: "Gang Member",
				description: "The ’Verse is a hard place. Folk stand together.",
				triggers: [
					{ name: "Rap Sheet", description: "When you meet a law enforcement agent, take or step up a legal Complication to gain 1 PP." },
					{ name: "Strength in Numbers", description: "When you and your Crew outnumber your opponents, step up Fight. When your opponents outnumber you and your crew, take an Outnumbered d8 Complication." }
				],
				highlightedSkills: ["Fight", "Shoot", "Sneak"],
				category: 'Role'
			},

			{
				name: "Gentry",
				description: "You’ve got a fancy title, probably a sash to go with it.",
				triggers: [
					{ name: "Blue Blood", description: "When you take a Complication that would besmirch your family honor, you can step it up to gain a d8 Big Damn Hero Die." },
					{ name: "Noblesse Oblige", description: "When someone less fortunate than you asks for your help, take or step up an Obliged Complication to step up Focus for the rest of the scene." }
				],
				highlightedSkills: ["Drive", "Fly", "Focus"],
				category: 'Role'
			},

			{
				name: "Gold Prospector",
				description: "All that glitters ought to be yours.",
				triggers: [
					{ name: "Camp Life", description: "When making camp in the wild or a putting up a makeshift shelter, step up or double Survive for the Action." },
					{ name: "Lust for Gold", description: "When directly acting to get more gold, step up or double Fight, Labor, or Trick for the Action. Take or step up a Gold Fever Complication." }
				],
				highlightedSkills: ["Labor", "Shoot", "Survive"],
				category: 'Role'
			},

			{
				name: "Goodwill Ambassador",
				description: "Experienced in matters of diplomacy and decorum, you’re the best candidate to send in to parley before the bullets start flyin’.",
				triggers: [
					{ name: "Speak Now, Or…:	", description: "Spend 1 PP to go first in a scene before any weapons or attacks can be made. On your first Action, you may reroll any dice that come up 1 instead of accepting a Plot Point." },
					{ name: "Talking Points", description: "If an ally or associate fails a roll involving their Social Attribute in your presence, step up or double your Attribute on your next die roll." }
				],
				highlightedSkills: ["Influence", "Know", "Treat"],
				category: 'Role'
			},

			{
				name: "Guild Trader",
				description: "Your business is in moving goods and services from one place to another under Guild contract. It’s not as free as you’d like, but there’s security.",
				triggers: [
					{ name: "Get Out of Jail Free", description: "Spend 1 PP when you’re imprisoned, locked up, seized, or held. The Trade Guild springs you, but they’ll ask you to do something for them later." },
					{ name: "Shadow of the Guild", description: "Gain 1 PP when your decision to go against the Trade Guild’s policies, practices, or orders puts you in danger or hot water." }
				],
				highlightedSkills: ["Drive", "Fly", "Know"],
				category: 'Role'
			},

			{
				name: "Handsome Ranch Hand",
				description: "All that hard work in the fields keeps you fit.",
				triggers: [
					{ name: "Ain’t Broke A Sweat", description: "Spend 1 PP to step back a Complication involving hard work or endurance." },
					{ name: "Don’t Even Know the Word Flirt", description: "Spend 1 PP to double Influence when you are trying to charm or seduce another character." }
				],
				highlightedSkills: ["Influence", "Labor", "Treat"],
				category: 'Role'
			},

			{
				name: "Homesteader",
				description: "You found yourself a home and a family to fill it. Ain’t no one gonna take that from you.",
				triggers: [
					{ name: "Head of the House", description: "When you work side by side with a Crewmember, you may spend 1 PP to step up or double their Craft, Labor, or Survive for their Action." },
					{ name: "Slice of Paradise", description: "When you or a Crewmember take a physical Complication while on your homestead, you can spend 1 PP to step it back and rename it to reflect property damage instead." }
				],
				highlightedSkills: ["Labor", "Survive", "Treat"],
				category: 'Role'
			},

			{
				name: "Invisible Ops",
				description: "I could tell you what I do, but then I’d have to kill you and everyone on this ship and I do hate making a mess.",
				triggers: [
					{ name: "All Access", description: "When you attempt to bypass physical security, double Operate for the Action." },
					{ name: "We Were Never Here", description: "When acting on your secret orders, spend 1 PP to step up or double Sneak for an Action." }
				],
				highlightedSkills: ["Know", "Operate", "Sneak"],
				category: 'Role'
			},

			{
				name: "Knife Fighter",
				description: "Hold a knife one way, cuts through an onion for dinner. Hold it another way, cuts someone’s throat for upsetting you.",
				triggers: [
					{ name: "Deep Cut", description: "Spend 1 PP to step up a Complication you inflicted with your blade." },
					{ name: "This Is a Knife", description: "When you create a bladed Asset such as a knife or a spear, step it up to a d8." }
				],
				highlightedSkills: ["Fight", "Focus", "Notice"],
				category: 'Role'
			},

			{
				name: "Local Yokel",
				description: "This land is my land, this land ain’t your land. I got a shotgun, and you ain’t got one.",
				triggers: [
					{ name: "Hunter’s Instinct", description: "When silently tracking or hunting another character, step up or double Sneak. Spend 1 PP to do both." },
					{ name: "Rabbit Snare", description: "Spend 1 PP to create a d8 Asset when setting up some kind of trap using your natural knowhow." }
				],
				highlightedSkills: ["Craft", "Sneak", "Survive"],
				category: 'Role'
			},

			{
				name: "Mama Bear",
				description: "Don’t get between Mama and her cubs.",
				triggers: [
					{ name: "Cubs", description: "Spend 1 PP to take a Complication from another Crewmember. Rename it as a Grudge against whoever inflicted the Complication." },
					{ name: "Mama’s Angry", description: "Spend 1 PP to use a Complication as an Asset in a roll. If the Complication was a Grudge, step the Grudge back after the roll." }
				],
				highlightedSkills: ["Fight", "Survive", "Throw"],
				category: 'Role'
			},

			{
				name: "Master of Disguise",
				description: "You’re more comfortable in someone else’s skin.",
				triggers: [
					{ name: "Evil Twin", description: "Gain 1 PP when someone you are disguised as shows up to ruin your illusion." },
					{ name: "Mockingbird", description: "Spend 1 PP to step up your Perform Skill when you are trying to mimic someone’s voice." }
				],
				highlightedSkills: ["Influence", "Perform", "Trick"],
				category: 'Role'
			},

			{
				name: "Medical Student",
				description: "Y’ain’t a doctor yet, but you’re the next best thing.",
				triggers: [
					{ name: "Competitive Academic", description: "When you fail a roll with Know, step up Mental for your next Action." },
					{ name: "Still Practicing", description: "When you try an operation or medical procedure for the first time, step back Treat to gain 1 PP." }
				],
				highlightedSkills: ["Know", "Operate", "Treat"],
				category: 'Role'
			},

			{
				name: "Mercenary",
				description: "They don’t pay you to look pretty. They pay you to shoot things.",
				triggers: [
					{ name: "Highest Bidder", description: "Gain 1 PP when you try to get a better deal than your current contract from the side you’re not currently fightin’ for." },
					{ name: "Time for Some Thrillin’ Heroics", description: "Spend 1 PP to go first in any battle or combat scene. On your first Action, you may reroll any dice that come up 1 instead of accepting a Plot Point." }
				],
				highlightedSkills: ["Fight", "Move", "Shoot"],
				category: 'Role'
			},

			{
				name: "Officer of the Law",
				description: "You’re charged with protecting the people and given the authority to do just that.",
				triggers: [
					{ name: "Public Figure", description: "Spend 1 PP to create a Respected d8 Asset when dealing with the people in your jurisdiction." },
					{ name: "Talk ’em Down", description: "When you try to defuse a charged situation, step up or double Influence. Take or step up a Complication to do both." }
				],
				highlightedSkills: ["Influence", "Move", "Shoot"],
				category: 'Role'
			},

			{
				name: "Politician",
				description: "You attained public office, acclaim, and people’s trust. You have access to the corridors of power, for what that’s worth.",
				triggers: [
					{ name: "Pulling the Strings", description: "When you create an Asset based on political or corporate connections, step it up to a d8." },
					{ name: "Promises, Promises:	", description: "Gain 1 PP when an agreement, vote, lobbying effort, or behind-the-scenes deal comes back to cause you grief or unpleasantness." }
				],
				highlightedSkills: ["Influence", "Notice", "Trick"],
				category: 'Role'
			},

			{
				name: "Registered Companion",
				description: "You have an active license in the Companion Registry, which opens doors and brings you business.",
				triggers: [
					{ name: "Inside Knowledge", description: "When you create an Asset related to an individual’s history, biodata, or Cortex record, step it up." },
					{ name: "I Know Your Ways", description: "Spend 1 PP to step up or double Influence when you are attempting to follow proper etiquette or put someone at ease." }
				],
				highlightedSkills: ["Focus", "Influence", "Perform"],
				category: 'Role'
			},

			{
				name: "Relentless Investigator",
				description: "Just the facts, dong ma?",
				triggers: [
					{ name: "Bloodhound", description: "Step up a Complication involving higher authorities in your jurisdiction to step up your Notice skill for a scene." },
					{ name: "I’ve Got Backup", description: "When you create an Asset based on calling in official resources and support, step it up to a d8." }
				],
				highlightedSkills: ["Influence", "Know", "Shoot"],
				category: 'Role'
			},

			{
				name: "Researcher",
				description: "The scientific method isn’t just for the lab. It’s a way of life.",
				triggers: [
					{ name: "Eureka!", description: "When you fail a roll trying to gather information or collect data, spend 1 PP to gain a Big Damn Hero Die equal to your Know." },
					{ name: "Hypothesize", description: "Spend 1 PP to create an Asset based on your current hypothesis. Crewmembers who use the Asset can spend 1 PP to step it up after a successful Action, to a d10 maximum. If any Action with the Asset fails, remove it from play." }
				],
				highlightedSkills: ["Craft", "Fix", "Fly"],
				category: 'Role'
			},

			{
				name: "Saboteur",
				description: "Sabotage ain’t just about breaking things. It’s about breaking them at the right time.",
				triggers: [
					{ name: "Gremlin", description: "Step up a Complication to remove a gear-based Asset or Signature Asset from an opponent’s roll." },
					{ name: "Two Steps Ahead", description: "When you reveal that you’ve already put sabotage into motion, spend 1 PP to create a Sabotage d8 Asset." }
				],
				highlightedSkills: ["Craft", "Operate", "Sneak"],
				category: 'Role'
			},

			{
				name: "Salvager",
				description: "Folk leave all manner of valuable hulks and crates floatin’ around waitin’ for you to just swoop in and liberate them. Finder’s keepers.",
				triggers: [
					{ name: "Spare Parts", description: "Spend 1 PP to turn a gear or equipment-based Asset into two new Assets. Step back the die rating of the original Asset to determine the die rating of the new Assets." },
					{ name: "This Is Why We Can’t Have Nice Things", description: "Turn one of your Assets into a Complication of the same die rating to gain 1 PP." }
				],
				highlightedSkills: ["Fix", "Move", "Operate"],
				category: 'Role'
			},

			{
				name: "Scary Lieutenant",
				description: "When your boss says to break a man’s legs, you already gone and picked out one that you like.",
				triggers: [
					{ name: "Size Them Up", description: "Spend 1 PP to use your Fight die instead of your Notice die when checking out an opponent." },
					{ name: "Knock Them Down", description: "Step back your Physical die for a scene to step up your Fight die for a scene." }
				],
				highlightedSkills: ["Drive", "Fight", "Influence"],
				category: 'Role'
			},

			{
				name: "Scavenger",
				description: "It’s everyone for themselves in the black.",
				triggers: [
					{ name: "Saboteur", description: "Step up your Fix die when you use a part that you took from a ship without the owner’s knowledge." },
					{ name: "Scavenger’s Eye", description: "Spend 1 PP when searching a pile of abandoned parts to find a nearly working version of the part you’ve been lookin’ for." }
				],
				highlightedSkills: ["Fix", "Operate", "Sneak"],
				category: 'Role'
			},

			{
				name: "Shady Business Man",
				description: "You keep tellin’ folks you are legitimate. Someday, they might believe you.",
				triggers: [
					{ name: "Fell Off a Truck", description: "Step up a Complication involving the authorities to create a d8 Asset that was acquired from less than reputable sources." },
					{ name: "Loan Shark", description: "Spend a PP to pass off a social Complication onto another character who owes you something." }
				],
				highlightedSkills: ["Influence", "Notice", "Trick"],
				category: 'Role'
			},

			{
				name: "Ship’s Captain",
				description: "A natural leader, you’re responsible for the Crew and the ship you all fly in.",
				triggers: [
					{ name: "Protect the Crew", description: "When a Crewmember in the same scene as you acquires a Complication, spend 1 PP to take it away and step it back." },
					{ name: "Lead the Crew", description: "When one of your crew directly follows one of your orders, spend 1 PP and give that Crewmember an Asset equal to your Influence die rating." }
				],
				highlightedSkills: ["Fly", "Focus", "Influence"],
				category: 'Role'
			},

			{
				name: "Ship’s Doctor",
				description: "Sometimes it seems whoever came up with “First, do no harm” never had to deal with the people you have to deal with.",
				triggers: [
					{ name: "Experimental Procedure", description: "If you replace your Operate or Treat Skill with a d4 for your next roll, gain a Big Damn Hero Die equal to that Skill’s normal die rating if your roll is successful." },
					{ name: "Natural Healer", description: "Spend 1 PP to step back another character’s medical or injury- based Complication." }
				],
				highlightedSkills: ["Know", "Operate", "Treat"],
				category: 'Role'
			},

			{
				name: "Ship’s Mechanic",
				description: "A ship’s a living thing, no matter what they say. You can feel when she’s sick, and she makes you proud when she’s well.",
				triggers: [
					{ name: "Zen & the Art of Engine Maintenance", description: "Spend 1 PP at the beginning of a Timed Action involving ship repair or upgrades. For each of your rolls during the Timed Action, you may reroll any die that comes up 1 instead of accepting a Plot Point for that die." },
					{ name: "Miracle Worker", description: "If you replace your Fix Skill with a d4 for your next roll, gain a Big Damn Hero Die equal to that Skill’s normal die rating if your roll is successful." }
				],
				highlightedSkills: ["Fix", "Know", "Operate"],
				category: 'Role'
			},

			{
				name: "Ship’s Pilot",
				description: "The list of folk wanting to hire you is longer than your arm. You’re just that good.",
				triggers: [
					{ name: "Born Behind the Wheel", description: "Spend 1 PP to step up or double your ship’s Engines Attribute for your next roll." },
					{ name: "I’ve Never Tried That Before", description: "If you replace your Fly or Operate Skill with a d4 for your next roll, gain a Big Damn Hero Die equal to that Skill’s normal die rating if your roll is successful." }
				],
				highlightedSkills: ["Fly", "Notice", "Operate"],
				category: 'Role'
			},

			{
				name: "Ship’s Shepherd",
				description: "You don’t fix faith. It fixes you.",
				triggers: [
					{ name: "Taken on Faith", description: "When you create an Asset or take on a Complication relating to your religious beliefs or convictions, step it up." },
					{ name: "Religiosity", description: "Gain 1 PP when you spend time sharing your faith with the unbelievers or the lost." }
				],
				highlightedSkills: ["Focus", "Influence", "Know"],
				category: 'Role'
			},

			{
				name: "Shrewd Patron",
				description: "You run a business and are often in need of discreet agents.",
				triggers: [
					{ name: "Haggler", description: "Double Mental when haggling over payment. Both 1s and 2s count as jinxes on the roll." },
					{ name: "Got a Job for You", description: "Gain 1 PP when you negotiate a business deal or hire a crew to do a job for you." }
				],
				highlightedSkills: ["Craft", "Focus", "Influence"],
				category: 'Role'
			},

			{
				name: "Teacher",
				description: "Teaching is a great honor and a heavy responsibility.",
				triggers: [
					{ name: "Thus Endeth the Lesson", description: "Spend 1 PP to step up or double Know for a roll. If the Action fails, step back Social until the end of the next scene." },
					{ name: "Troubled Students", description: "Gain 1 PP whenever you offer to teach or mentor someone in trouble." }
				],
				highlightedSkills: ["Know", "Operate", "Treat"],
				category: 'Role'
			},

			{
				name: "Technologist",
				description: "Where do you get all these wonderful toys?",
				triggers: [
					{ name: "Early Adopter", description: "When you encounter a new technological marvel, step back Focus for the scene and create a representative d8 Asset." },
					{ name: "Familiar Controls", description: "Step up Operate the first time you use a piece of tech that is similar to one of your Signature Assets." }
				],
				highlightedSkills: ["Drive", "Fly", "Operate"],
				category: 'Role'
			},

			{
				name: "Top Secret",
				description: "Officially, you don’t exist. Your job doesn’t exist. Your boss doesn’t exist. Where’s that leave you?",
				triggers: [
					{ name: "Covert Entry", description: "When bypassing security on a mission, take or step up an On a Timetable Complication to double Operate for the roll." },
					{ name: "Flown Just About Everything", description: "Spend 1 PP to create a Fly Specialty for the remainder of the session." }
				],
				highlightedSkills: ["Fly", "Operate", "Perform"],
				category: 'Role'
			},

			{
				name: "Wudang Style",
				description: "Also known as Practical Tai Chi. Being able to be dangerous without a weapon in your hand is pretty dang practical.",
				triggers: [
					{ name: "Fighting Spirit", description: "Step up a Complication created to avoid being Taken Out in a fight to reroll your dice." },
					{ name: "One-Two Punch", description: "Step up a Complication when you Take Out a Minor Gamemaster character to Take Out an additional Minor character." }
				],
				highlightedSkills: ["Focus", "Influence", "Know"],
				category: 'Role'
			}
		];
		personalities: Distinction[] = [
		{
			name: "A Little Nervous",
			description: "“Oh God, oh God, we’re all gonna die.”",
			triggers: [
				{ name: "On Edge", description: "Step up or double your Focus for one Action. After the roll, create or step up the Complication On Edge." },
				{ name: "Captain Obvious", description: "Gain 1 PP when you point out how dangerous, stupid, or illegal the Crew’s plan will be when they execute it." }
			],
			highlightedSkills: ["Focus", "Know", "Survive"],
			category: 'Personality'
		},

		{
			name: "Alluring",
			description: "You’re easy on the eyes and cunning enough to use those good looks to your advantage. .",
			triggers: [
				{ name: "Memorable", description: "Create a Memorable d8 Complication on yourself when tryin’ to execute a cunning plan. Gain 1 PP." },
				{ name: "Turn Heads", description: "When you’re using your good looks as a distraction to help an ally, spend 1 PP to give that ally a die equal to your Influence die rating for the ally’s next Action." }
			],
			highlightedSkills: ["Influence", "Perform", "Trick"],
			category: 'Personality'
		},

		{
			name: "Animal Lover",
			description: "Treat ’em right and they’re more loyal than people.",
			triggers: [
				{ name: "They Can Smell Fear", description: "Step back a Complication involving an angry animal if you walk toward it, unarmed." },
				{ name: "Saddle Up", description: "Spend 1 PP to create a d8 Asset representing a trusty animal companion (most likely a horse)." }
			],
			highlightedSkills: ["Labor", "Move", "Survive"],
			category: 'Personality'
		},

		{
			name: "Avaricious",
			description: "Folks say you’re greedy. They don’t understand that your retirement plans involve a big, floaty island to call your own.",
			triggers: [
				{ name: "A Bigger Cut", description: "When you demand more pay, double Focus for the scene. Take or step up a social Complication resulting from your demands." },
				{ name: "I’ll Take That", description: "Gain 1 PP when you keep something you promised to someone else." }
			],
			highlightedSkills: ["Fix", "Focus", "Trick"],
			category: 'Personality'
		},

		{
			name: "Backstabbin’ Git",
			description: "You look out for numero uno. Everyone else is just in the way.",
			triggers: [
				{ name: "Fickle Friend", description: "When you change sides in an argument, double Social for the Action. Take a Traitor d8 Complication." },
				{ name: "Getaway Driver", description: "When you’re at the wheel and being chased, spend 1 PP to step up or double Drive for an Action." }
			],
			highlightedSkills: ["Drive", "Throw", "Trick"],
			category: 'Personality'
		},

		{
			name: "Bad Reputation",
			description: "Folks whisper your name when they see you coming. And hope you leave as soon as possible.",
			triggers: [
				{ name: "Intimidating Build", description: "Spend 1 PP to roll your Physical die instead of your Mental die when using your Influence to scare someone." },
				{ name: "Don’t Get Him Riled", description: "Step back your Notice die to step up your Fight die for the scene." }
			],
			highlightedSkills: ["Fight", "Influence", "Survive"],
			category: 'Personality'
		},

		{
			name: "Big Mouth",
			description: "Ain’t got no stomach for torture.",
			triggers: [
				{ name: "Loose Lips", description: "Gain 1 PP when you tell someone everything you know about a subject with minimal prompting." },
				{ name: "Why Would I Lie?", description: "Step up a Complication to step up your Trick die for your next roll." }
			],
			highlightedSkills: ["Influence", "Perform", "Trick"],
			category: 'Personality'
		},

		{
			name: "Big Plans",
			description: "Always working the best angle.",
			triggers: [
				{ name: "Milk Run", description: "Spend a Plot point to turn a Complication into an Asset." },
				{ name: "Did I Forget to Mention That?", description: "Gain 1 PP when an important detail of your plan “slips your mind.”" }
			],
			highlightedSkills: ["Influence", "Notice", "Trick"],
			category: 'Personality'
		},

		{
			name: "By the Book",
			description: "According to section 5, subsection c, paragraph 2 of the Federal Alliance Judicial Code…",
			triggers: [
				{ name: "Standard Operating Procedure", description: "Spend 1 PP to double Know for a roll when you rely on your knowledge of Alliance rules, regulations, and procedures." },
				{ name: "This Isn’t in the Manual", description: "When the GM buys a jinx from you, you may step up a Complication to gain 1 PP." }
			],
			highlightedSkills: ["Focus", "Know", "Operate"],
			category: 'Personality'
		},

		{
			name: "Caring",
			description: "You’ve a courage and tenacity in carin’ for others that most folk don’t. You’re the light in their darkness.",
			triggers: [
				{ name: "Heal the Wounded Heart", description: "Spend 1 PP to step back another character’s emotional or relationship-based Complication." },
				{ name: "Go the Extra Mile", description: "While you are taking care of an incapacitated or griefstricken character, you or that character may reroll any dice that come up 1s instead of taking Plot Points." }
			],
			highlightedSkills: ["Focus", "Influence", "Treat"],
			category: 'Personality'
		},

		{
			name: "Chatterbox",
			description: "A lot of folk are afraid of a little conversation but not you, you’ve got the gift of gab, see, and if people want to leave it up to you to carry the conversation, then that’s just fine by you, ‘cuz…",
			triggers: [
				{ name: "Blather", description: "Step up or double Trick for an Action when you just keep talking. Take or step up an Annoying Complication after the roll." },
				{ name: "Friendly Banter", description: "Step up Social for a scene. The next time the GM buys a Complication after you’ve rolled a jinx, step the Complication up." }
			],
			highlightedSkills: ["Influence", "Perform", "Trick"],
			category: 'Personality'
		},

		{
			name: "Cocky",
			description: "You’re a smug, self-assured sommbitch and you’re not afraid to say it.",
			triggers: [
				{ name: "Pride Goeth Before a Fall", description: "Gain 1 PP when your cocky attitude gets you in a mess of trouble that you could have avoided by being silent." },
				{ name: "Confidence", description: "Step up a social Complication to step up or double your Social Attribute for your next roll." }
			],
			highlightedSkills: ["Focus", "Influence", "Perform"],
			category: 'Personality'
		},

		{
			name: "Code of Honor",
			description: "To live with honor is difficult. To live without honor is not living at all.",
			triggers: [
				{ name: "Honor Demands It", description: "Gain 1 PP when you act against your best interests because of your code or make a show of satisfying your honor." },
				{ name: "My Word is My Bond", description: "When you make a promise to someone, spend 1 PP to make a d6 Asset that lasts until the end of the session. If you break that promise, turn it into a d8 Complication." }
			],
			highlightedSkills: ["Focus", "Know", "Survive"],
			category: 'Personality'
		},

		{
			name: "Collector of Fine Things",
			description: "You like it? It’s one of a kind. Sculpted by Li Xiao, you know.",
			triggers: [
				{ name: "Pretty Things", description: "When you see something you must have, take an Obsession d8 Complication. When you acquire the object, step up the first Asset you create from it." },
				{ name: "On Display", description: "Gain 1 PP when you show off your collection to someone you probably shouldn’t show it to." }
			],
			highlightedSkills: ["Know", "Notice", "Operate"],
			category: 'Personality'
		},

		{
			name: "Crude",
			description: "You’re a little gorramn rough around the edges.",
			triggers: [
				{ name: "Rough Talk", description: "Double Influence when you’re trying to intimidate or scare folks with more sensitive proclivities. After your roll, step up or create a social Complication affecting another Crewmember." },
				{ name: "Obnoxious", description: "Gain 1 PP when you choose to disrupt, upset, or challenge the social order of things when you have the option of being mannerly or polite." }
			],
			highlightedSkills: ["Fight", "Labor", "Move"],
			category: 'Personality'
		},

		{
			name: "Dead Eye",
			description: "You’re cool under fire and a keen shot.",
			triggers: [
				{ name: "Quick Draw", description: "The first time you set the stakes in a firefight, spend 1 PP to double Shoot. If your opponent raises the stakes, step back Shoot for the rest of the scene." },
				{ name: "Take Aim", description: "Step back Move until the end of the scene to create an In My Crosshairs d8 Asset." }
			],
			highlightedSkills: ["Move", "Notice", "Shoot"],
			category: 'Personality'
		},

		{
			name: "Dedicated",
			description: "You don’t take much sitting down. You have a cause that gives your life meaning.",
			triggers: [
				{ name: "Never Back Down", description: "When you take a Complication related to your faith in your cause, immediately step it back one die type." },
				{ name: "Blood, Toil, Tears and Sweat:	", description: "Spend 1 PP to add your Labor to your next roll in addition to any other Skill you are using." }
			],
			highlightedSkills: ["Fight", "Know", "Focus"],
			category: 'Personality'
		},

		{
			name: "Driven",
			description: "You are willing to pay the ultimate price to restore your good name.",
			triggers: [
				{ name: "Vengeance is Mine", description: "Step up an opponent’s Complication. Step up one of your own Complications after the roll." },
				{ name: "Single Minded Pursuit", description: "Gain a PP when you choose your goal over your own happiness or well-being." }
			],
			highlightedSkills: ["Fight", "Focus", "Notice"],
			category: 'Personality'
		},

		{
			name: "Eagle Eyed",
			description: "Not much escapes your attention.",
			triggers: [
				{ name: "Trained Observer", description: "When a Notice Action gives you an Asset, step it up." },
				{ name: "20/10", description: "Spend 1 PP to double Notice for a roll when you peer into the distance." }
			],
			highlightedSkills: ["Fix", "Notice", "Throw"],
			category: 'Personality'
		},

		{
			name: "Fashionable",
			description: "You attend the most exclusive parties, dress in the latest fashions, and hire the best Companions.",
			triggers: [
				{ name: "Clout", description: "Step back Influence until the end of the next scene to remove a social Complication." },
				{ name: "I Don’t Wait In Line", description: "You may spend 1 PP to gain entry to an exclusive club or party without an invitation." }
			],
			highlightedSkills: ["Drive", "Fly", "Influence"],
			category: 'Personality'
		},

		{
			name: "Follows Orders",
			description: "The boss gave you a job and you intend to do it.",
			triggers: [
				{ name: "Don’t Think About It", description: "When following orders, step back Mental for the scene to double your Physical for an Action." },
				{ name: "Not My Job", description: "When you try to lead a group, replace your Influence with a d4 for the roll to gain 1 PP." }
			],
			highlightedSkills: ["Fight", "Fix", "Labor"],
			category: 'Personality'
		},

		{
			name: "Free Spirit",
			description: "You go where the wind takes you.",
			triggers: [
				{ name: "New Horizons", description: "Step up or double Drive or Fly when you first take a vehicle somewhere new." },
				{ name: "Unbound", description: "Spend 1 PP to double Physical when attempting to escape from bonds or a cell." }
			],
			highlightedSkills: ["Drive", "Fly", "Move"],
			category: 'Personality'
		},

		{
			name: "Heart of Gold",
			description: "You may be rough around the edges, but deep down you’re a good person.",
			triggers: [
				{ name: "Gruff Exterior", description: "Gain 1 PP when you try to scare off a new acquaintance or make a rough first impression." },
				{ name: "Softie", description: "When helping a Crewmember, spend 1 PP to step up the die you lend them for the roll." }
			],
			highlightedSkills: ["Labor", "Operate", "Treat"],
			category: 'Personality'
		},

		{
			name: "Heart of Ice and dust",
			description: "You know the old saying about cold hands, warm heart? You’re the exact opposite.",
			triggers: [
				{ name: "Best Served Cold", description: "Spend 1 PP to step back any Complication involving your emotions or personal relationships." },
				{ name: "Every Man for Himself", description: "Gain 1 PP when you abandon an ally in a time of need to further your own agenda." }
			],
			highlightedSkills: ["Influence", "Focus", "Trick"],
			category: 'Personality'
		},

		{
			name: "Here for the Party",
			description: "Let the good times roll. Life is too short to be serious all the time.",
			triggers: [
				{ name: "Non-Stop Party", description: "Spend 1 PP to create a d8 Asset involving good times, liquor, or loud music." },
				{ name: "Enabler", description: "Double your Social die when you try to convince another Crewmember to blow off responsibilities in favor of good times." }
			],
			highlightedSkills: ["Fight", "Influence", "Perform"],
			category: 'Personality'
		},

		{
			name: "Hill Folk",
			description: "Ain’t everybody in the ’Verse keen on civilization. You and yours lead hard, free lives on your own.",
			triggers: [
				{ name: "Ain’t Got Time to Bleed", description: "When making a recovery Action to remove a physical Complication with makeshift medical supplies, step up Survive for the roll." },
				{ name: "This is Our Land", description: "Step up or double Social when you stare down an interloper in your home. Step up any Complications that result from your roll." }
			],
			highlightedSkills: ["Fix", "Labor", "Survive"],
			category: 'Personality'
		},

		{
			name: "Hired Muscle",
			description: "You look tough, but looks aren’t everything.",
			triggers: [
				{ name: "Blunt Instrument", description: "When you fight dirty or use brute force to solve a problem, step up your Labor or Fight until the end of the current scene. Step back Social until the end of the next scene." },
				{ name: "Looming Shadow", description: "When you rely on your imposing size to intimidate someone, use Physical instead of Social. Both 1s and 2s count as jinxes on the roll." }
			],
			highlightedSkills: ["Fight", "Labor", "Notice"],
			category: 'Personality'
		},

		{
			name: "Holds a Grudge",
			description: "An elephant never forgets. Anyone calls you an elephant, you’ll dent their brainpan.",
			triggers: [
				{ name: "Got What’s Comin’ to Ya", description: "Step up a Complication to step up your Shoot die when you’re aiming at someone who wronged you." },
				{ name: "The Pain Don’t Matter", description: "Spend 1 PP to ignore a Complication for one Action; step up the Complication after the roll." }
			],
			highlightedSkills: ["Focus", "Influence", "Shoot"],
			category: 'Personality'
		},

		{
			name: "Honest Man",
			description: "Honest as the day is long.",
			triggers: [
				{ name: "Deep Cut", description: "Gain 1 PP when your honesty hurts someone close to you." },
				{ name: "Tough Love", description: "Spend 1 PP to step up your Treat when you attempt to remove mental Complications by tellin’ folks the truth about ugly situations." }
			],
			highlightedSkills: ["Focus", "Influence", "Treat"],
			category: 'Personality'
		},

		{
			name: "Idealist",
			description: "We can be better than we are now. Others scrape by, we push to make the ’Verse a better place.",
			triggers: [
				{ name: "A Better Tomorrow", description: "Step up a social Complication to gain a d8 Big Damn Hero Die." },
				{ name: "Lead by Example", description: "When you take a Complication while standing up for your beliefs, step up a Crewmember’s Attribute die on their next Action." }
			],
			highlightedSkills: ["Fix", "Survive", "Treat"],
			category: 'Personality'
		},

		{
			name: "Intuitive",
			description: "You ain’t a reader, not as such. But the way folk carry themselves, how they move, that’s the language you speak.",
			triggers: [
				{ name: "Now Is Not Your Time", description: "When someone tries to attack you the first time in a scene, spend 1 PP to instead make them set the stakes against a Social + Influence intimidation Action. If you raise the stakes, they cannot attack you until you roll a jinx." },
				{ name: "Take Measure", description: "When you come into conflict with someone for the first time, you may attempt to size them up with a Mental + Know Action. Create a Sized Up d8 Asset if you succeed or take an Overconfident d8 Complication if you fail." }
			],
			highlightedSkills: ["Focus", "Influence", "Notice"],
			category: 'Personality'
		},

		{
			name: "Iron-Fisted",
			description: "I don’t give one gorramn bit how dangerous it is. Get those miners back down the shaft or you’re fired!",
			triggers: [
				{ name: "Steely Gaze", description: "Step back Social for the rest of the scene to step up Focus for the rest of the scene." },
				{ name: "Taskmaster", description: "Double Influence when throwin’ the weight of your office around. At the start of the next scene, take or step up a social Complication that represents the backlash from your hard ways." }
			],
			highlightedSkills: ["Focus", "Influence", "Throw"],
			category: 'Personality'
		},

		{
			name: "Know It All",
			description: "Look, smarty pants, if we wanted schoolin’, we’d have gone to school.",
			triggers: [
				{ name: "Book Learnin’", description: "Double your Know when you have access to informational resources (the Cortex, an encyclopedia, etc.) and the time to use them." },
				{ name: "Pedantic", description: "Gain 1 PP when you correct someone at an inappropriate juncture or tell the crew a fact about a problem that is interesting but not useful." }
			],
			highlightedSkills: ["Fix", "Know", "Treat"],
			category: 'Personality'
		},

		{
			name: "Low Down, Dirty",
			description: "Corrupt is such a strong word, don’t you think? You prefer “enterprising.”",
			triggers: [
				{ name: "Illicit Dealings", description: "Gain 1 PP when you take a bribe or deal in illegal merchandise." },
				{ name: "Tarnished Authority", description: "Double Influence when you abuse your authority. Take or step up a Corruption Complication after the roll." }
			],
			highlightedSkills: ["Shoot", "Sneak", "Trick"],
			category: 'Personality'
		},

		{
			name: "Not to be Crossed",
			description: "",
			triggers: [
				{ name: "Just so we’re clear", description: "if you cross me, I will end you." },
				{ name: "Fair Warning", description: "Step up or double Influence when you use the weight of your intimidating reputation. Both 1s and 2s count for jinxes on the roll." },
				{ name: "To the Edge of the Black", description: "When you pursue someone who crossed you into obvious danger, create a d8 Asset for the scene." }
			],
			highlightedSkills: ["Fight", "Survive", "Trick"],
			category: 'Personality'
		},

		{
			name: "On a Different Level",
			description: "People aren’t up to your speed. The conversation you’re actually having is very different from the one they think they’re having.",
			triggers: [
				{ name: "Two Meanings", description: "Gain 1 PP when you withhold information from someone through euphemism and double-talk." },
				{ name: "We Don’t Have Time for This", description: "During a Timed Action, you may reroll a die in a failed Trick roll by taking or stepping up an Evidence We Were Here Complication." }
			],
			highlightedSkills: ["Influence", "Know", "Trick"],
			category: 'Personality'
		},

		{
			name: "One with the Shadows",
			description: "Fight fair? Honey, why would I do that?",
			triggers: [
				{ name: "Get in Position", description: "If you replace your Sneak with a d4 for your next roll, gain a Big Damn Hero Die equal to your Sneak rating if your roll is successful." },
				{ name: "Sniper", description: "Spend 1 PP to enter a scene hidden and in a position to do some harm. Take or step up a Complication representing a tenuous or precarious position to create a Sniper Nest d8 Asset." }
			],
			highlightedSkills: ["Move", "Shoot", "Sneak"],
			category: 'Personality'
		},

		{
			name: "Ooh-Rah",
			description: "There’s nothing better than a good fight.",
			triggers: [
				{ name: "Grenadier", description: "Double Throw when hurling an explosive. Take a Ringing Ears d8 Complication after the roll." },
				{ name: "Hail of Bullets", description: "When you Take Out a GMC with a Shoot Action, take or step up a Complication to automatically Take Out another from the scene." }
			],
			highlightedSkills: ["Fight", "Shoot", "Throw"],
			category: 'Personality'
		},

		{
			name: "Proselytizer",
			description: "I tell you, good people, that the Lord awaits in heaven for the righteous!",
			triggers: [
				{ name: "Sermonize", description: "Step up Influence for an Action when you preach. Take or step up an Unbelievers Complication if the Action fails." },
				{ name: "The Lord Provides", description: "When tending to someone who is spiritually lost or hurt, spend 1 PP to step up Treat for a scene." }
			],
			highlightedSkills: ["Influence", "Know", "Treat"],
			category: 'Personality'
		},

		{
			name: "Scrapper",
			description: "You’ve been in more tussles than you can count. Won most of ’em, too.",
			triggers: [
				{ name: "Sucker Punch", description: "Double Fight for the first round of an Action Order. Take or step up a social Complication after the roll." },
				{ name: "Victorious", description: "When you Take Out a Major GMC, spend 1 PP to step back a physical Complication twice." }
			],
			highlightedSkills: ["Fight", "Labor", "Move"],
			category: 'Personality'
		},

		{
			name: "Smooth Talker",
			description: "You can talk your way out of a life sentence or into a locked room. Just don’t make promises you can’t keep.",
			triggers: [
				{ name: "Gift of Gab", description: "Spend 1 PP to double your Influence die for your next roll." },
				{ name: "Start Fresh", description: "Spend 1 PP at the beginning of a scene to step back all of your social or mental-based Complications." }
			],
			highlightedSkills: ["Influence", "Know", "Trick"],
			category: 'Personality'
		},

		{
			name: "Something to Prove",
			description: "You may not look tough, but you’ve got steel inside waiting to come out. You’ll show ’em.",
			triggers: [
				{ name: "Big Man with a Gun", description: "Gain 1 PP when you needlessly escalate a conflict, such as pulling a gun in a fistfight or attacking someone who verbally threatens you." },
				{ name: "Bushwhacker", description: "Spend 1 PP to double Sneak when setting an ambush on someone who’s beaten you in a fight prior to the ambush." }
			],
			highlightedSkills: ["Fight", "Focus", "Sneak"],
			category: 'Personality'
		},

		{
			name: "Sore Loser",
			description: "They cheated! You weren’t ready! The sun was in your eyes! Double or nothing!",
			triggers: [
				{ name: "Sulk", description: "Step up a Complication gained in a contest you lost fair and square to gain 1 PP." },
				{ name: "Cheat to Win", description: "Create a d8 Asset of your choice when you openly cheat or lie to win a contest." }
			],
			highlightedSkills: ["Fight", "Know", "Focus"],
			category: 'Personality'
		},

		{
			name: "Spoiled Dandy",
			description: "You grew up with a proverbial silver spoon in each hand and never wanted for anything. Some folks think you don’t know the value of anything.",
			triggers: [
				{ name: "Dapper Gent", description: "Gain 1 PP when you protest a task or job you feel is undignified or below your station." },
				{ name: "Wild Ride", description: "When you drive recklessly, double Drive for the roll. Take a Reckless d8 Complication after the roll." }
			],
			highlightedSkills: ["Drive", "Fly", "Trick"],
			category: 'Personality'
		},

		{
			name: "Stalwart Friend",
			description: "You can count on me so long as stars burn in the black.",
			triggers: [
				{ name: "Kind Words", description: "Once per scene when you take the time to comfort a friend, spend 1 PP to step back a friend’s emotional Complication." },
				{ name: "Side by Side", description: "Gain a d8 Big Damn Hero Die when you expose yourself to risk— social or physical—for a friend." }
			],
			highlightedSkills: ["Focus", "Notice", "Treat"],
			category: 'Personality'
		},

		{
			name: "Steady",
			description: "It takes a lot to throw you off-balance.",
			triggers: [
				{ name: "Got It in One", description: "Spend 1 PP to roll your Focus and add it to your total." },
				{ name: "Sea of Calm", description: "Spend 1 PP to use a Complication as an Asset for one Action; step up the Complication afterward." }
			],
			highlightedSkills: ["Focus", "Notice", "Sneak"],
			category: 'Personality'
		},

		{
			name: "Steely Reserves",
			description: "People think you’re a pushover. They’re always a mite surprised when you don’t bend.",
			triggers: [
				{ name: "Not Today", description: "When you take a Complication to stay in a fight, you can spend 1 PP to double an appropriate Attribute in your next roll." },
				{ name: "Undeniable", description: "When standing up for your beliefs or Crew, spend 1 PP to double Focus for a roll." }
			],
			highlightedSkills: ["Focus", "Shoot", "Survive"],
			category: 'Personality'
		},

		{
			name: "Strong, Silent Type",
			description: "You’re big, strong, and you follow orders. You get trusted with valuable things of all sorts.",
			triggers: [
				{ name: "Silent Protector", description: "Gain 1 PP when you do what’s best for your charge, not your master." },
				{ name: "Get Behind Me", description: "Step up a Complication involving your charge to step up an Asset from a d6 to a d8." }
			],
			highlightedSkills: ["Fight", "Notice", "Shoot"],
			category: 'Personality'
		},

		{
			name: "Superstitious",
			description: "You take extra care to stay lucky and keep the spirits happy.",
			triggers: [
				{ name: "Fickle Fortunes", description: "Spend 1 PP to create a Lucky d8 Asset. If you use this Asset and lose the roll, change it to an Unlucky Complication of the same die size." },
				{ name: "Lucky Number 3", description: "When you roll exactly three jinxes in a single roll, you may reroll all your dice." }
			],
			highlightedSkills: ["Craft", "Survive", "Throw"],
			category: 'Personality'
		},

		{
			name: "Sweet & Cheerful",
			description: "It doesn’t seem like there’s a power in the ’Verse that can keep you from being cheerful.",
			triggers: [
				{ name: "Good-Natured", description: "Spend 1 PP to step up or double your Social die when you’re using your friendly manner to resolve a tense situation." },
				{ name: "Straight-Shooter", description: "Gain 1 PP when you openly tell the truth even though it might be to your greater benefit to lie or conceal it." }
			],
			highlightedSkills: ["Influence", "Treat", "Trick"],
			category: 'Personality'
		},

		{
			name: "Temper",
			description: "Some say you’re a mite testy when you’re courtin’ bad news. Truth is, you’re a mite testy all the time.",
			triggers: [
				{ name: "Anger Issues", description: "Gain 1 PP when you make a bad decision on account of the chip on your shoulder or your short fuse gets you in trouble." },
				{ name: "Seein’ Red", description: "Spend 1 PP to use a Complication as an Asset for one Action; step up the Complication afterward." }
			],
			highlightedSkills: ["Fight", "Focus", "Throw"],
			category: 'Personality'
		},

		{
			name: "Tough as an Old Leather Boot",
			description: "You built your empire with your own hands. You may be a rich man now, but you’re still the same sumbitch on the inside.",
			triggers: [
				{ name: "Hard Bargain", description: "Spend 1 PP to step back a Complication during a negotiation." },
				{ name: "Singin’ the Blues", description: "Gain 1 PP when you step back your Social die during a roll due to your melancholy over what you lost to get where you are." }
			],
			highlightedSkills: ["Focus", "Influence", "Know"],
			category: 'Personality'
		},

		{
			name: "True Faith",
			description: "Shepherds aren’t the only people in the ’Verse who believe in a higher power.",
			triggers: [
				{ name: "Lost in Prayer", description: "Step down your Social die for a scene to step up your Mental die." },
				{ name: "Test of Faith", description: "Step up a Complication to step up your Focus die for your next roll." }
			],
			highlightedSkills: ["Focus", "Influence", "Trick"],
			category: 'Personality'
		},

		{
			name: "Unprincipled",
			description: "You’d sell your own mother to the Reavers to make some coin. Your pappy you’d throw in for free.",
			triggers: [
				{ name: "Looking Out For Number One", description: "Reroll all dice in a roll. On the reroll, all dice that roll 1s or 2s are considered Complications." },
				{ name: "Curse Your Sudden, But Inevitable Betrayal:	", description: "When you betray an ally, gain 1 PP and double the highest Complication die in the ally’s roll." }
			],
			highlightedSkills: ["Influence", "Survive", "Trick"],
			category: 'Personality'
		},

		{
			name: "Well-Mannered",
			description: "You’re polite, genteel, and unassuming.",
			triggers: [
				{ name: "Best Foot Forward", description: "When you try to establish a good first impression with a Social Action, gain a d8 Big Damn Hero Die if you win the roll. If you fail the roll, take a Faux Pas d8 Complication." },
				{ name: "Kill ’em With Kindness", description: "When you set the stakes against intimidation by smoothing over the issue or flattering an aggressor, step up Focus for the roll." }
			],
			highlightedSkills: ["Influence", "Perform", "Treat"],
			category: 'Personality'
		},

		{
			name: "Wit’s End",
			description: "Things ain’t been good lately. Now you’re getting pretty desperate.",
			triggers: [
				{ name: "Bad to Worse", description: "When you take a Complication that starts at d8 or higher, you may step it up to gain 1 PP." },
				{ name: "Cornered", description: "When you have a d10 or higher Complication, you may double Shoot for a roll. If you do, you cannot take a Complication to avoid being Taken Out on that roll." }
			],
			highlightedSkills: ["Move", "Shoot", "Sneak"],
			category: 'Personality'
		},

		{
			name: "Yee-haw!!!!",
			description: "If a plan don’t involve explosions, jumping off a building, and laughing while the law chases you, it ain’t a plan worth doing.",
			triggers: [
				{ name: "Double Down", description: "Double your largest die in a pool before you roll. Step up a Complication to that die type or create one equal to that die type." },
				{ name: "Cut Both Wires", description: "Step up one of your Complications to reroll a die after you’ve rolled. On your next roll, both 1s and 2s count for Complications." }
			],
			highlightedSkills: ["Drive", "Fight", "Shoot"],
			category: 'Personality'
		},
	];
		backgrounds: Distinction[] = [
		{
			name: "A Lawyer’s Dream",
			description: "You are surrounded by lawyers. Just as scary as gunmen and they are usually better mannered.",
			triggers: [
				{ name: "Litigious", description: "Gain 1 PP when you threaten to sue someone out of house and home for a minor reason." },
				{ name: "One Call, That’s All:	", description: "Spend 1 PP to step back a Complication when you pass the problem off to your lawyers." }
			],
			highlightedSkills: ["Focus", "Influence", "Know"],
			category: 'Background'
		},

		{
			name: "Big ’Un",
			description: "Sure, you’ve packed on a few pounds, but there’s no gravity out in the black.",
			triggers: [
				{ name: "More to Love", description: "Spend 1 PP to step up your Social die for a scene when you make light of your physical condition." },
				{ name: "Tight Squeeze", description: "Gain 1 PP when you can’t get into, or out of, an area because of physical limitations." }
			],
			highlightedSkills: ["Know", "Operate", "Trick"],
			category: 'Background'
		},

		{
			name: "Blind as a Bat",
			description: "Y’ain’t much good without your glasses, four-eyes.",
			triggers: [
				{ name: "Keen Ears", description: "When you rely only on your hearing, step up Notice for the roll." },
				{ name: "Myopic", description: "Gain 1 PP when your poor vision causes trouble for you or the Crew." }
			],
			highlightedSkills: ["Craft", "Know", "Perform"],
			category: 'Background'
		},

		{
			name: "Brain Leech",
			description: "There’s a wealth of information all around you. It’s in the heads of the people you know.",
			triggers: [
				{ name: "Big Help", description: "When a Crewmember gives you a die to help you for a roll, you can replace it with a d4. If your roll is successful, gain a d8 Big Damn Hero Die." },
				{ name: "Two Heads Are Better Than One", description: "Once per scene, you may spend 1 PP to use the Skill of a Crewmember in the scene instead of your own. After the roll, take or step up a Complication to reflect their memories getting mixed up with your own." }
			],
			highlightedSkills: ["Craft", "Focus", "Notice"],
			category: 'Background'
		},

		{
			name: "Brothers",
			description: "Nothing can come between you and your brother. ’Cept maybe girls. Or liquor. Or cards. Or….",
			triggers: [
				{ name: "Squabblin’", description: "Gain a PP when you spend a scene arguing with your brother instead of the task at hand." },
				{ name: "Thick as Thieves", description: "When you share a scene with your brother, you may share Plot Points with one another." }
			],
			highlightedSkills: ["Fight", "Influence", "Trick"],
			category: 'Background'
		},

		{
			name: "Child Prodigy",
			description: "Your parents didn’t know what to do with you, other than enroll you in the best schools, and wonder at your potential.",
			triggers: [
				{ name: "Eidetic Memory", description: "Spend 1 PP to roll your Know Skill and add it to your total once per scene." },
				{ name: "Exceptional Talent", description: "Step up an existing Complication to step up or double a Skill in a non-combat situation." }
			],
			highlightedSkills: ["Fix", "Know", "Operate"],
			category: 'Background'
		},

		{
			name: "Dancer",
			description: "Anyone can shuffle their feet to a beat. A true dancer exists as beauty through motion.",
			triggers: [
				{ name: "Enticing", description: "When you perform before an audience, spend 1 PP and name someone who is watching. That person will seek you out after the show." },
				{ name: "Grand Jeté", description: "When you take cover or move quickly to avoid being hurt, step up or double Move for the Action. If you lose the roll, step back Move for the scene." }
			],
			highlightedSkills: ["Fight", "Move", "Perform"],
			category: 'Background'
		},

		{
			name: "Debt",
			description: "You’re in deep, and it’s a hole you can’t climb out of easily. But for the time being, you’ve got resources.",
			triggers: [
				{ name: "Something Borrowed", description: "When you create an Asset by spending money to purchase goods or services, step it up." },
				{ name: "Pay It Forward", description: "When you use your financial resources on behalf of another, spend 1 PP to create an appropriate d8 Asset." }
			],
			highlightedSkills: ["Know", "Notice", "Trick"],
			category: 'Background'
		},

		{
			name: "Decorated",
			description: "You came back from the War with a medal and a story. You’re not sure if it was worth the cost.",
			triggers: [
				{ name: "You’re a Gorramn Hero", description: "Spend 1 PP to double your Social when dealing with anyone who served on your side." },
				{ name: "Guilt", description: "Create a Guilt d8 Complication when details of the event that got you your medal come back to haunt you. Gain 1 PP." }
			],
			highlightedSkills: ["Fight", "Influence", "Shoot"],
			category: 'Background'
		},

		{
			name: "Done Time",
			description: "You’ve done time in the pokey. It may have changed you, but you didn’t break.",
			triggers: [
				{ name: "Keep Your Head Down", description: "When you take a social Complication, step it back by stepping back Influence for the scene." },
				{ name: "Breaking Rocks", description: "At the beginning of a Timed Action where endurance is a key factor, spend 1 PP to double Labor for the Timed Action." }
			],
			highlightedSkills: ["Craft", "Labor", "Sneak"],
			category: 'Background'
		},

		{
			name: "Drunk",
			description: "The demon in the bottle drags you in every time. You like to refer to it as having an expertise in beverages; others like to refer to it as a serious problem. One of you is right.",
			triggers: [
				{ name: "Functional Alcoholic", description: "Start every Episode with a Drunk d6 Complication. Step it up to reroll a die on a failed Action. Once it exceeds d12, you are out until given medical treatment." },
				{ name: "Gaps in Memory", description: "Gain 1 PP to reveal that you don’t remember or recall the events of a previous scene in which you had an active Drunk Complication." }
			],
			highlightedSkills: ["Influence", "Move", "Perform"],
			category: 'Background'
		},

		{
			name: "Duelist",
			description: "There is an art to honorable combat and you’re a veritable Picasso of the form.",
			triggers: [
				{ name: "Code Duello", description: "When you take a Complication that implies a slight upon your honor, you may issue a challenge to a duel and give your opponent a Challenged to a Duel d8 Complication." },
				{ name: "Mano a Mano", description: "When outnumbered, step back Fight. When facing a single opponent, step up or double Fight." }
			],
			highlightedSkills: ["Fight", "Move", "Perform"],
			category: 'Background'
		},

		{
			name: "Elderly",
			description: "You’ve got as many aches and pains as there are stars in the sky.",
			triggers: [
				{ name: "Old War Wound", description: "Gain 1 PP when you step back your Physical die for a scene as an old injury acts up." },
				{ name: "Forgetful", description: "Gain 1 PP when you step back your Mental die for a scene as your memory clouds up." }
			],
			highlightedSkills: ["Craft", "Influence", "Notice"],
			category: 'Background'
		},

		{
			name: "Everything’s Shiny",
			description: "Don’t worry. Everything’s going to come out shiny in the end.",
			triggers: [
				{ name: "Lightweight", description: "Gain 1 PP when you choose to get knocked out, drunk, or otherwise affected by incapacitating causes instead of rolling dice." },
				{ name: "Lighthearted", description: "Spend 1 PP to make light of a situation and step back a Crewmember’s Complication on account of your positive outlook." }
			],
			highlightedSkills: ["Focus", "Know", "Survive"],
			category: 'Background'
		},

		{
			name: "Fall from Grace",
			description: "",
			triggers: [
				{ name: "That’s the problem with ambition", description: "the higher you climb, the longer the drop. You really put yourself out there and now you’ve got to start over." },
				{ name: "Coping Mechanism", description: "If you have a Complication at a d10 or higher, you may add your Focus to any roll made to avoid being Taken Out." },
				{ name: "Out of Your Element", description: "Step up a Complication you have acquired as a result of being in unfamiliar surroundings, situations, or circumstances to gain 1 PP." }
			],
			highlightedSkills: ["Focus", "Influence", "Notice"],
			category: 'Background'
		},

		{
			name: "Family Ties",
			description: "Everybody is somebody’s son, daughter, brother, or sister. You maintain a connection to your family that is as important to you as it is dysfunctional.",
			triggers: [
				{ name: "Family Gifts", description: "When you create an Asset or take a Complication related to your relationship with your family, step it up." },
				{ name: "Thicker than Water", description: "Spend 1 PP and invoke a family member’s name to reroll your dice." }
			],
			highlightedSkills: ["Influence", "Perform", "Trick"],
			category: 'Background'
		},

		{
			name: "Filthy Rich",
			description: "Money is power. Folk who don’t know that are foolin’ themselves.",
			triggers: [
				{ name: "Leverage", description: "Double Influence when you bribe someone or threaten them with financial ruin." },
				{ name: "Only the Best", description: "Spend 1 PP to create a d8 Asset when you acquire or make use of new technology, high fashion, or gourmet food." }
			],
			highlightedSkills: ["Drive", "Fix", "Fly"],
			category: 'Background'
		},

		{
			name: "Former Companion",
			description: "You trained as a Companion, but left that life behind to follow your own path.",
			triggers: [
				{ name: "Old Habits Die Hard", description: "Step up a Complication to double or step up Social for all Influence, Notice, and Perform rolls in a scene." },
				{ name: "Fiercely Independent", description: "Gain 1 PP when you reject someone else’s plans to strike out on your own." }
			],
			highlightedSkills: ["Notice", "Influence", "Perform"],
			category: 'Background'
		},

		{
			name: "Friends in High Places",
			description: "The Alliance thinks highly of you. That’s the only opinion that matters.",
			triggers: [
				{ name: "Our Dear Purple Friends", description: "Spend 1 PP to step back a Complication involving Alliance scrutiny." },
				{ name: "Let’s Just Forget This Little Mess", description: "Step back your Know for a scene to change a Complication involving the Alliance into an Asset." }
			],
			highlightedSkills: ["Focus", "Know", "Influence"],
			category: 'Background'
		},

		{
			name: "Friends in Low Places",
			description: "Those of us on the Rim don’t have much, but we stick together. There’s a power in that.",
			triggers: [
				{ name: "I Know a Guy", description: "Spend 1 PP to create a d8 Asset when you call in a shady friend with the skills you need." },
				{ name: "Rumor Mill", description: "When you try to get information from your contacts, make a Social + Know roll. If successful, create a d6 Asset about the information. Take a Half the Story d8 Complication to step up the new Asset." }
			],
			highlightedSkills: ["Craft", "Labor", "Throw"],
			category: 'Background'
		},

		{
			name: "Government Experiment",
			description: "You don’t remember what they did to you. Mostly. But now that it’s done, you can never go back.",
			triggers: [
				{ name: "Meddled With", description: "Spend 1 PP to step up your Mental Attribute for the scene. Step down your Social Attribute for both this scene and the next one." },
				{ name: "Two by Two, Hands of Blue:	", description: "Create a Painful Memories d8 Complication to step up your Know for the rest of the scene." }
			],
			highlightedSkills: ["Fix", "Know", "Operate"],
			category: 'Background'
		},

		{
			name: "Hard Luck Case",
			description: "The ’Verse is a hard place, no one knows that better’n you.",
			triggers: [
				{ name: "Nose for Trouble", description: "Gain 1 PP when you stumble into a situation you shouldn’t be in or overhear something you shouldn’t." },
				{ name: "Trouble on Your Heels", description: "When you are being chased or followed out of a scene, you may step up Sneak or Trick when you roll to slip away." }
			],
			highlightedSkills: ["Fix", "Sneak", "Survive"],
			category: 'Background'
		},

		{
			name: "Harmless Looking",
			description: "You blend into a crowd like a rock blends into a quarry.",
			triggers: [
				{ name: "Couldn’t Hurt A Fly", description: "Step back your Physical die to step up your Social die when convincing someone you’re not a threat." },
				{ name: "Quick Change", description: "Spend 1 PP to create a d8 Asset to help you disappear into a crowd" }
			],
			highlightedSkills: ["Move", "Sneak", "Trick"],
			category: 'Background'
		},

		{
			name: "Hitched",
			description: "You ever been with a warrior woman?",
			triggers: [
				{ name: "In Sickness and in Health", description: "When you create an Asset or take a Complication related to your relationship with your spouse, step it up." },
				{ name: "For Richer or Poorer", description: "When you share a scene with your spouse, you may share Plot Points with one another." }
			],
			highlightedSkills: ["Influence", "Treat", "Trick"],
			category: 'Background'
		},

		{
			name: "Invalid",
			description: "You can’t get much of anywhere without somebody’s help.",
			triggers: [
				{ name: "Ain’t Dead Yet", description: "Spend 1 PP to use a Complication as an Asset for one Action; step up the Complication afterward." },
				{ name: "I Can’t Get Up", description: "Create a d8 Complication on yourself related to your medical condition. Gain 1 PP" }
			],
			highlightedSkills: ["Focus", "Influence", "Notice"],
			category: 'Background'
		},

		{
			name: "Leaky Brainpan",
			description: "Folk say you ain’t quite right in the head.",
			triggers: [
				{ name: "Disjointed Perception", description: "Take or step up a Fragmented Mind Complication to reroll a die when you fail a roll in a social situation." },
				{ name: "Unstable", description: "When you threaten someone with harm, step up or double Influence for the roll. If you lose the roll, attack that person immediately or spend 1 PP." }
			],
			highlightedSkills: ["Labor", "Shoot", "Throw"],
			category: 'Background'
		},

		{
			name: "Lifetime of Misdeeds",
			description: "This sort of life has a tendency to catch up with you.",
			triggers: [
				{ name: "Jack of All Trades", description: "Take or step up a Sins Of My Past Complication to step up Shoot or Trick for the rest of the scene." },
				{ name: "Trick of the Trade", description: "Spend 1 PP to create an Operate or Sneak Specialty for the rest of the session." }
			],
			highlightedSkills: ["Drive", "Operate", "Sneak"],
			category: 'Background'
		},

		{
			name: "Mighty Hideous",
			description: "You weren’t pretty to start, but then you got yourself deformed somethin’ fierce. Now folks try not to even look at you.",
			triggers: [
				{ name: "Look at Me!", description: "When you get in someone’s face, spend 1 PP to double Influence for the roll." },
				{ name: "You Call That Pain?", description: "When you activate an Opportunity to step back a physical Complication, step up Fight or Survive for the rest of the scene." }
			],
			highlightedSkills: ["Fight", "Labor", "Survive"],
			category: 'Background'
		},

		{
			name: "Mysterious Past",
			description: "You weren’t born to the life you’re livin’ now.",
			triggers: [
				{ name: "Cortex Specter", description: "Whenever anyone uses an information-based Asset against you, spend 1 PP to turn it into a No Data Found Complication of the same die rating." },
				{ name: "Ghosts of Yesterday", description: "Create a d8 Complication relating to your history to step up your Fight, Know, or Sneak for a scene. This Complication cannot be stepped back by spending PPs to activate Opportunities." }
			],
			highlightedSkills: ["Fight", "Know", "Sneak"],
			category: 'Background'
		},

		{
			name: "Never Learned To Read Nor Write",
			description: "They never got around to building a schoolhouse where you’re from.",
			triggers: [
				{ name: "Barely Literate", description: "Gain 1 PP when pretending that you’ve read and understood something gets you in trouble." },
				{ name: "Underestimated", description: "Spend 1 PP to ignore a Complication die for an Action when you try to catch your opponent offguard." }
			],
			highlightedSkills: ["Focus", "Influence", "Know"],
			category: 'Background'
		},

		{
			name: "On the Run",
			description: "Someone’s after you—Alliance, the Triads, the Guilds, maybe all three. You’re a fugitive and you’re trouble.",
			triggers: [
				{ name: "Hide in Plain Sight", description: "Spend 1 PP to reroll a die when you’re being pursued. On your next roll, both 1s and 2s count for Complications." },
				{ name: "Guilt by Association", description: "Gain 1 PP each time your actions cause your fellow Crewmembers to become targets for whoever it is that’s chasing you." }
			],
			highlightedSkills: ["Move", "Notice", "Sneak"],
			category: 'Background'
		},

		{
			name: "Pampered Upbringing",
			description: "Some would call you spoiled. When they do, you call Daddy.",
			triggers: [
				{ name: "Daddy’s Money", description: "Spend 1 PP to double your Influence die when promising a payout from your rich family." },
				{ name: "What’s That Smell?", description: "When you are out of your element, gain 1 PP by stepping back your Social for the scene." }
			],
			highlightedSkills: ["Know", "Influence", "Throw"],
			category: 'Background'
		},

		{
			name: "Princess of the Rim",
			description: "You turned a nasty nickname into a reputation for kindness.",
			triggers: [
				{ name: "Charity Ball Staple", description: "Spend 1 PP to run into someone familiar with you and your charity work." },
				{ name: "Heal the Wounded Heart", description: "Spend 1 PP to step back another character’s emotional or relationship-based Complication." }
			],
			highlightedSkills: ["Focus", "Influence", "Labor"],
			category: 'Background'
		},

		{
			name: "Reader",
			description: "You know things you shouldn’t. Some call you a witch. They’re just scared of what you represent.",
			triggers: [
				{ name: "Secrets, Secrets:	", description: "When you are in the presence of someone who is trying to keep a secret, spend 1 PP to discover the secret with a Mental + Know Action. If your Action fails, create or step up a Paranoid Complication." },
				{ name: "Psychic Flashes", description: "Once per scene, spend 1 PP to create a d8 Complication on a Gamemaster character by blurting out a secret or negative fate." }
			],
			highlightedSkills: ["Focus", "Influence", "Notice"],
			category: 'Background'
		},

		{
			name: "Secret Browncoat",
			description: "Independents aren’t appreciated much round these parts. But y’all know how to stick together.",
			triggers: [
				{ name: "Identity Crisis", description: "When you choose to let the identity slip of one of your fellow hidden Browncoats, gain 1 PP and step up any related Complication." },
				{ name: "The Walls Have Ears", description: "When you create an Asset based on things your Browncoats overheard, step it up to a d8 Asset." }
			],
			highlightedSkills: ["Influence", "Perform", "Trick"],
			category: 'Background'
		},

		{
			name: "Semi-Retired",
			description: "Despite your best efforts to get out, they keep pulling you back in.",
			triggers: [
				{ name: "I Don’t Do That Anymore", description: "Gain 1 PP when you refuse to do a favor for an old acquaintance." },
				{ name: "Too Old for This", description: "Spend 1 PP to give someone a Wanted by the Law d8 Complication when you call in law enforcement with evidence of their criminal activities." }
			],
			highlightedSkills: ["Drive", "Fly", "Trick"],
			category: 'Background'
		},

		{
			name: "Shadows of the War",
			description: "Not everyone serves their side on the front lines. Not everyone left what they did behind.",
			triggers: [
				{ name: "Nightmares", description: "Start every Episode with an Exhausted d6 Complication. Step it up to reroll the dice on an Action. Once it exceeds d12, you are out until given medical treatment." },
				{ name: "Operational Flexibility", description: "Double your Focus when you are working to reconfigure a plan on the fly." }
			],
			highlightedSkills: ["Fight", "Focus", "Sneak"],
			category: 'Background'
		},

		{
			name: "Sinister Countenance",
			description: "You’ve got a flinty glare and an evil sneer.",
			triggers: [
				{ name: "Scare Tactics", description: "Take a Frightening d8 Complication to step up Influence for a scene." },
				{ name: "Typecast", description: "When playing the heavy or the rube, spend 1 PP to double Perform for an Action." }
			],
			highlightedSkills: ["Move", "Perform", "Throw"],
			category: 'Background'
		},

		{
			name: "Sisters",
			description: "No one understands you like your sister. You’ve always stood together.",
			triggers: [
				{ name: "Dearest", description: "Step up Treat when you help your sister remove a Complication before you help anyone else." },
				{ name: "Shift Blame", description: "When you take a social Complication, spend 1 PP to step it back and give it to your sister." }
			],
			highlightedSkills: ["Notice", "Treat", "Trick"],
			category: 'Background'
		},

		{
			name: "Slim",
			description: "There ain’t much meat on your bones.",
			triggers: [
				{ name: "Hard Target", description: "Spend 1 PP to double Move when navigating through a crowd or diving for cover." },
				{ name: "Wiggle Room", description: "When you hide in a tiny space, you may use Move instead of Sneak to avoid detection." }
			],
			highlightedSkills: ["Drive", "Move", "Perform"],
			category: 'Background'
		},

		{
			name: "Things Don’t Go Smooth",
			description: "Life sure seems to be a string of mishaps, mistakes, and misappropriations. But you’re still here, ain’t you?",
			triggers: [
				{ name: "Tough as Nails", description: "When you take a Complication representing an injury or physical harm, spend 1 PP to step it back or rename it as a mental or social Complication." },
				{ name: "Trouble Magnet", description: "Step up one of your Complications to reroll a die. On your next roll, both 1s and 2s count for Complications." }
			],
			highlightedSkills: ["Move", "Notice", "Survive"],
			category: 'Background'
		},

		{
			name: "Trained Singer",
			description: "Your voice is one of the sweetest things in the ’Verse.",
			triggers: [
				{ name: "Private Audience", description: "When you need to get someone alone, spend 1 PP to force their entourage to wait outside." },
				{ name: "Perfect Pitch", description: "When you fail a Perform roll, spend 1 PP to reroll a die. When you fail a Notice roll, take or step up a Sensitive Ears Complication to reroll a die." }
			],
			highlightedSkills: ["Craft", "Notice", "Perform"],
			category: 'Background'
		},

		{
			name: "Triad Ranking",
			description: "You fought, swindled, and bargained your way to a position of minor leadership in the Triad. Only problem is what to do now that you’re here.",
			triggers: [
				{ name: "Brutal", description: "Step up one of your own Complications to step up a Complication you caused another character to acquire this scene." },
				{ name: "Gang Warfare", description: "Gain 1 PP when your criminal background and deadly connections lead to violence against you or your allies." }
			],
			highlightedSkills: ["Fight", "Influence", "Trick"],
			category: 'Background'
		},

		{
			name: "Two by Two",
			description: "You’re a pair, you are. Absolutely inseparable.",
			triggers: [
				{ name: "Did You Catch That?", description: "When you and your partner are actively looking to avoid trouble, step up or double Notice. Spend 1 PP to do both. Both 1s and 2s count as jinxes on the roll." },
				{ name: "One-Two Punch", description: "When you use an Asset created by another Crewmember, you may step it up. If you do, remove the Asset after the roll." }
			],
			highlightedSkills: ["Fight", "Move", "Notice"],
			category: 'Background'
		},

		{
			name: "Undercover",
			description: "Is this who you really are? Or are you working for someone else?",
			triggers: [
				{ name: "Identity Crisis", description: "When you choose to let slip one of your former clients, gain 1 PP and step up any related Complication." },
				{ name: "Friends in Low Places", description: "When you create an Asset based on a seedy contact or underworld connection, step it up." }
			],
			highlightedSkills: ["Influence", "Perform", "Trick"],
			category: 'Background'
		},

		{
			name: "Veteran of the Unification War",
			description: "It don’t matter which side you fight on, war leaves a mark on your heart n’ soul.",
			triggers: [
				{ name: "Fightin’ Type", description: "Spend 1 PP to step up or double your Shoot or Fight when you’re outnumbered." },
				{ name: "War Stories", description: "When you create an Asset or take a Complication related to a wartime flashback, step it up." }
			],
			highlightedSkills: ["Fight", "Shoot", "Survive"],
			category: 'Background'
		},

		{
			name: "Virtuoso",
			description: "True virtuosity is rare in this ’Verse. You’re more than gifted; you’re transcendent.",
			triggers: [
				{ name: "Music Therapy", description: "When you play beautiful music to soothe a Crewmember’s Mental complication, you may use Perform instead of Treat for the Action." },
				{ name: "Stradivari", description: "When you play your best instrument for a public audience, double or step up the Signature Asset for your instrument for the Action. Spend 1 PP to do both." }
			],
			highlightedSkills: ["Craft", "Perform", "Throw"],
			category: 'Background'
		},

		{
			name: "Wet Behind the Ears",
			description: "Folks say you’re naïve. It ain’t that. You just grew up a mite sheltered, is all.",
			triggers: [
				{ name: "Easy Mark", description: "Gain 1 PP when you are tricked by more worldly folk or whenever someone takes advantage of your naiveté." },
				{ name: "Optimist", description: "Spend 1 PP to double Treat when helping a Crewmember recover from a mental Complication." }
			],
			highlightedSkills: ["Drive", "Fix", "Treat"],
			category: 'Background'
		},

		{
			name: "World Weary",
			description: "You’ve seen a lot of things during your time in the black and little is left to surprise you.",
			triggers: [
				{ name: "Been There", description: "Create a d8 Asset when you ask for help from an old contact. If you use this Asset in a roll and fail, your contact turns against you. The Gamemaster will reveal why they set you up for a fall." },
				{ name: "Done That", description: "When you tell a Crewmember about a situation from your past similar to the one you face now, gain a new Specialty for the rest of the scene. Take or step up a social Complication reflecting your past." }
			],
			highlightedSkills: ["Focus", "Notice", "Sneak"],
			category: 'Background'
		}

		];

		all(): Distinction[]{
			return _.union(this.roles, this.personalities, this.backgrounds);
		}
	}
	
	var fireflyDistinctionsModule = angular.module('fireflyDistinctions', []);
	fireflyDistinctionsModule.service('distinctions', DistinctionSet);
	
}