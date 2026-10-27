/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Chapter } from './epoch1';

export interface EnhancedExample {
  eraExamples: string[];
  contemporaryExamples: string[];
}

/**
 * High-clarity, bullet-pointed historical and contemporary examples for all 50 philosophers.
 * Each bullet explicitly explains:
 * 1. The concrete scenario/problem.
 * 2. The philosopher's specific take (critique, diagnosis, or prescription).
 * 3. The underlying philosophical takeaway.
 */
export const PHILOSOPHER_EXAMPLES: Record<string, EnhancedExample> = {
  // ==========================================
  // ERA I: ANCIENT FOUNDATIONS (16 Thinkers)
  // ==========================================
  laozi: {
    eraExamples: [
      "**Warring States Militarism**: Feudal lords aggressively mobilized massive conscript armies and built monumental fortifications, exhausting their populations. — *Laozi's Take*: Forcing and rigid aggression always trigger violent counter-reactions; true strength lies in yielding, like soft water that steadily wears away impenetrable stone.",
      "**Draconian Legalism & Excessive Rules**: Rulers enacted suffocating penal codes and intrusive regulations to coerce loyalty. — *Laozi's Take*: The more prohibitions and laws a state enacts, the more criminals and hypocrites multiply; true governance requires *wuwei* (effortless, non-coercive leadership)."
    ],
    contemporaryExamples: [
      "**Ecological Restoration**: Industrial attempts to conquer nature frequently trigger ecological collapses, whereas letting rivers and wetlands re-wild naturally restores balance. — *Laozi's Take*: Human hubris must yield to *ziran* (the spontaneous self-ordering of nature) rather than imposing violent technocratic control.",
      "**Agile Leadership vs. Micromanagement**: Authoritarian corporate executives who micromanage every process stifle innovation, while leaders who remove friction allow teams to flourish. — *Laozi's Take*: The highest leader acts so subtly that when the great work is accomplished, people say, 'We did it naturally ourselves.'"
    ]
  },

  mahavira: {
    eraExamples: [
      "**Vedic Animal Sacrifices**: Brahmin priests performed costly animal sacrifices to secure divine favors and social dominance. — *Mahavira's Take*: Every sentient creature—from humans down to insects—possesses an equally sacred soul (*jiva*); ritual slaughter is a catastrophic moral crime that binds heavy karmic matter to the soul.",
      "**Dogmatic Religious Rivalries**: Sectarian teachers claimed exclusive, absolute possession of the truth. — *Mahavira's Take*: Reality is manifold (*anekantavada*); any single human perspective is inevitably partial, demanding intellectual humility (*syadvada*)."
    ],
    contemporaryExamples: [
      "**Industrial Factory Farming**: Trillions of animals suffer inside mechanized slaughterhouses to feed consumer demand. — *Mahavira's Take*: *Ahimsa* (absolute non-harm) is an unconditional duty; human convenience can never justify systematic cruelty to sentient life.",
      "**Polarized Online Discourse**: Partisans assume their political ideology captures the total truth, canceling dissenting views. — *Mahavira's Take*: The ancient parable of the blind men and the elephant teaches that conflicting perspectives each grasp only one facet of a multi-dimensional reality."
    ]
  },

  buddha: {
    eraExamples: [
      "**Caste Injustice & Ritual Purity**: The Vedic hierarchy barred lower castes from spiritual study and liberation. — *The Buddha's Take*: Nobility is determined by ethical volition (*cetana*), not by birth or pedigree; the monastic Sangha was open equally to all castes and backgrounds.",
      "**The Extremes of Palace Hedonism & Self-Mortification**: Sages either pursued sensual luxury or starved their bodies near death. — *The Buddha's Take*: Both extremes fail to liberate the mind; the Middle Way balances physical health with meditative clarity."
    ],
    contemporaryExamples: [
      "**Consumerist Treadmill & Dopamine Addiction**: Modern advertising encourages endless purchasing and social media scrolling, yet anxiety rates continue to soar. — *The Buddha's Take*: Craving (*tanha*) can never be satisfied by external acquisition; lasting peace (*nirvana*) comes only from extinguishing mental grasping.",
      "**Ego Burnout & Identity Fixation**: Professionals suffer chronic imposter syndrome by obsessing over rigid personal identities and prestige. — *The Buddha's Take*: The self is not a static substance, but an ever-shifting stream of aggregates (*anatta*); releasing ego-fixation dissolves psychological suffering."
    ]
  },

  confucius: {
    eraExamples: [
      "**Usurping Warlords & Broken Treaties**: Ambitious dukes routinely assassinated their sovereigns and broke solemn oaths during the Spring and Autumn period. — *Confucius's Take*: Society collapses when moral character decays; political stability cannot be restored by swords, but by cultivating virtuous leadership (*junzi*) and moral conscience.",
      "**Erosion of Ceremonial Decorum**: Traditional communal rituals were degraded into vulgar displays of private wealth. — *Confucius's Take*: Ritual propriety (*li*) is not empty etiquette; it is the sacred grammar that instills mutual respect and social cohesion."
    ],
    contemporaryExamples: [
      "**Erosion of Civic Norms & Public Trust**: Cynical political campaigns violate unwritten democratic conventions to retain partisan power. — *Confucius's Take*: A society that relies solely on laws without cultivating moral shame and ethical propriety will produce citizens who seek to evade punishment without developing virtue.",
      "**Corporate Governance by Character**: Companies prioritizing short-term financial greed over employee welfare face toxic workplace cultures. — *Confucius's Take*: Leaders must govern by moral example, treating employees with benevolence (*ren*) to inspire genuine loyalty."
    ]
  },

  suntzu: {
    eraExamples: [
      "**Protracted, Ruinous Sieges**: Reckless generals engaged in long, exhausting sieges that depleted state treasuries and starved entire towns. — *Sun Tzu's Take*: No nation has ever benefited from protracted warfare; supreme military excellence consists of breaking the enemy's resistance without fighting.",
      "**Emotional, Hot-Headed Commanders**: Kings marched armies into ambushes out of anger or wounded pride. — *Sun Tzu's Take*: A sovereign must never launch a war out of rage; military strategy requires cold, rational calculation of terrain, weather, morale, and resources."
    ],
    contemporaryExamples: [
      "**Modern Cybersecurity & Deterrence**: Nations protect critical infrastructure by deterring hostile attacks before a single physical shot is fired. — *Sun Tzu's Take*: Victory is won in the preparatory planning phase before engaging in active conflict.",
      "**Competitive Business Strategy**: Disruptive startups capture new markets through speed, agility, and identifying unmet niches rather than waging head-to-head price wars with established monopolies. — *Sun Tzu's Take*: Strike where the competitor is weak and undefended; avoid their entrenched fortifications."
    ]
  },

  mozi: {
    eraExamples: [
      "**Extravagant Aristocratic Funerals**: Nobility bankrupted common families by demanding three-year mourning periods and burying vast treasures with the dead. — *Mozi's Take*: Wasteful rituals that produce no tangible human benefit must be abolished in favor of frugal utility and poverty alleviation.",
      "**Offensive Interstate Conquest**: Large states invaded and subjugated smaller neighboring states under the guise of glory. — *Mozi's Take*: Universal impartial care (*jian'ai*) requires treating other states and families as one's own; offensive militarism is the supreme social evil."
    ],
    contemporaryExamples: [
      "**Global Humanitarian Aid & Vaccine Equity**: Hoarding medical resources in wealthy countries while vulnerable nations suffer causes global disease mutations. — *Mozi's Take*: Impartial concern for all human beings produces greater collective security than tribal nationalism.",
      "**Effective Altruism & Utilitarian Charity**: Donating resources to evidence-based interventions that save the greatest number of lives per dollar. — *Mozi's Take*: Every public policy and expenditure must be tested against one fundamental standard: Does it increase human well-being and decrease tangible harm?"
    ]
  },

  socrates: {
    eraExamples: [
      "**Athenian Imperial Hubris**: Athens invaded Sicily out of arrogant greed, claiming that 'the strong do what they can and the weak suffer what they must.' — *Socrates's Take*: Ignorance masquerading as wisdom ruins souls and states; conquering external territories while neglecting one's own moral virtue is tragic folly.",
      "**Sophistic Moral Relativism**: Professional rhetoricians taught wealthy youth how to argue any position for money, denying objective truth. — *Socrates's Take*: Dialogue must pursue genuine truth through relentless questioning (*elenchus*), not manipulative applause."
    ],
    contemporaryExamples: [
      "**Echo Chambers & Social Media Confirmation Bias**: Users consume partisan news that confirms prejudices without critically scrutinizing their premises. — *Socrates's Take*: 'The unexamined life is not worth living'; intellectual honesty requires courageously interrogating our own foundational assumptions.",
      "**Conflating Material Wealth with Human Success**: Modern society idolizes billionaires regardless of their moral character or societal impact. — *Socrates's Take*: Wealth does not bring about excellence; rather, virtue makes wealth and everything else truly good for human beings."
    ]
  },

  plato: {
    eraExamples: [
      "**The Execution of Socrates by Athenian Democracy**: An impassioned democratic jury voted to put the city's greatest moral teacher to death. — *Plato's Take*: Majority voting cannot determine justice; just as a ship must be steered by an experienced navigator, a state must be governed by those who know the truth (philosopher-kings).",
      "**Sophists Manipulating the Assembly**: Eloquent demagogues swayed public assemblies with emotional rhetoric rather than philosophical wisdom. — *Plato's Take*: Most citizens live chained inside the Cave, mistaking flickering shadows for ultimate reality."
    ],
    contemporaryExamples: [
      "**Deepfakes, Disinformation & The Algorithmic Cave**: Social media feeds optimize for sensational viral illusions, disconnecting the public from verified facts. — *Plato's Take*: The modern public is trapped in an electronic Cave; education must turn the entire soul toward transcendent, objective truth.",
      "**Meritocracy vs. Demagoguery**: Elections won through polarizing soundbites and empty promises. — *Plato's Take*: Without rigorous philosophical education and moral virtue, political systems decay into oligarchy and tyranny."
    ]
  },

  mencius: {
    eraExamples: [
      "**Cruel Kings Taxing Starving Peasants**: Feudal rulers hoarded grain while their peasants starved in ditches. — *Mencius's Take*: When rulers neglect their people, they act as bandits; the people are of supreme importance, the altars of state come second, and the sovereign is the least.",
      "**Yang Zhu's Radical Selfishness**: Thinkers taught that one should not pluck a single hair from one's body to benefit the whole world. — *Mencius's Take*: Human nature is innately good; anyone who sees a child about to fall into a well feels an instinctive, unselfish pang of compassion."
    ],
    contemporaryExamples: [
      "**Universal Child Welfare & Public Education**: Providing nutrition and schooling to disadvantaged children. — *Mencius's Take*: Just as water naturally flows downward, human nature naturally inclines toward goodness; society's solemn duty is to nourish these inborn moral sprouts.",
      "**Legitimate Resistance to Corrupt Regimes**: Citizens rising up against authoritarian rulers who abuse human rights. — *Mencius's Take*: A ruler who brutalizes his people loses the Mandate of Heaven; deposing a tyrant is not treason, but the removal of a dangerous criminal."
    ]
  },

  aristotle: {
    eraExamples: [
      "**Systematizing 158 Greek Constitutions**: Greek city-states oscillated wildly between violent oligarchies and chaotic mob democracies. — *Aristotle's Take*: The most stable and just constitution relies on a strong middle class and balances monarchic, aristocratic, and democratic elements.",
      "**Platonic Abstract Forms**: Plato posited that the Form of the Good existed in an unearthly metaphysical realm. — *Aristotle's Take*: Forms exist within concrete physical entities; to understand anything, we must study its material, formal, efficient, and final (*telos*) causes."
    ],
    contemporaryExamples: [
      "**Virtue Ethics in Modern Medicine & AI**: Developing ethical artificial intelligence based on human character and the golden mean rather than rigid rulebooks. — *Aristotle's Take*: Moral virtue is an acquired habit; courage is the balanced mean between recklessness and cowardice.",
      "**Workplace Burnout vs. Eudaimonia**: Equating professional success with relentless work hours and monetary gain. — *Aristotle's Take*: True human flourishing (*eudaimonia*) requires the active exercise of human rational capacities in accordance with virtue across a complete lifetime."
    ]
  },

  zhuangzi: {
    eraExamples: [
      "**Courtiers Seeking Dangerous Imperial Offices**: Scholars competed ruthlessly to become prime ministers, only to be executed when regimes changed. — *Zhuangzi's Take*: The sacred tortoise would rather drag its tail in the mud than be venerated inside a gilded ancestral temple; radical freedom is superior to gilded servitude.",
      "**Dogmatic Scholastic Debates (Ru vs. Mo)**: Confucians and Mohists endlessly debated rigid definitions of righteousness. — *Zhuangzi's Take*: Linguistic arguments are like piping wind through hollow trees; step outside conceptual categories and roam freely in the boundless Dao."
    ],
    contemporaryExamples: [
      "**Hyper-Optimization & 'Hustle' Culture**: Modern professionals feel guilty whenever they are not monetizing their hobbies or maximizing productivity. — *Zhuangzi's Take*: The 'useless' gnarled tree survives for centuries because no carpenter cuts it down; celebrate the profound freedom of being uncommodifiable.",
      "**Partisan Epistemic Certainty**: Internet commentators screaming past one another with absolute conviction. — *Zhuangzi's Take*: Remember the butterfly dream—our human waking perspective is merely one temporary vantage point among infinite cosmic transformations."
    ]
  },

  chanakya: {
    eraExamples: [
      "**Alexander the Great's Northwestern Invasions**: Fragmented Indian republics were being overrun individually by Macedonian forces. — *Chanakya's Take*: Disunited principalities invite foreign subjugation; subcontinental security requires a unified, centralized empire with strong economic and military discipline.",
      "**Corruption in the Nanda Administration**: Royal ministers embezzled state funds and mistreated subjects. — *Chanakya's Take*: The ruler's happiness must lie in the happiness of the subjects; a vast network of intelligence and strict accountability is vital to prevent corruption."
    ],
    contemporaryExamples: [
      "**Geopolitical Balancing & Mandala Theory**: Modern nations forming regional alliances (like the Quad) to balance rising superpowers. — *Chanakya's Take*: 'Your neighbor is your natural competitor, but the neighbor beyond them is your natural ally'; foreign policy must be guided by strategic realism.",
      "**State Fiscal Integrity & Economic Security**: Sovereign wealth funds and national infrastructure investments. — *Chanakya's Take*: 'All state undertakings depend on finance'; a robust treasury managed without waste is the foundation of all national strength."
    ]
  },

  epicurus: {
    eraExamples: [
      "**Existential Terror of Divine Punishment**: Hellenistic citizens lived in constant dread of vengeful Olympian gods and eternal underworld torture. — *Epicurus's Take*: The universe is composed entirely of natural atoms and void; gods do not intervene in human affairs, and death is merely the cessation of sensation, not something to be feared.",
      "**Political Chaos After Alexander's Death**: Power struggles between rival generals created chronic social instability. — *Epicurus's Take*: Withdraw from toxic political arenas; true security is cultivated in a tranquil Garden shared with trusted philosophical friends."
    ],
    contemporaryExamples: [
      "**Consumerist Debt & Status Anxiety**: People buy luxury goods they cannot afford to impress people they do not like. — *Epicurus's Take*: Desires for fame and luxury are 'unnatural and unnecessary'; true happiness requires only basic food, shelter, good health, and intimate philosophical friendship.",
      "**Thanatophobia (Dread of Death)**: People paralyzed by medical anxiety and mortality. — *Epicurus's Take*: 'Death is nothing to us; for when we exist, death is not, and when death exists, we are not.'"
    ]
  },

  xunzi: {
    eraExamples: [
      "**Late Warring States Moral Degeneracy**: With old dynasties collapsing, people acted on raw, greedy impulses, pillaging communities. — *Xunzi's Take*: Human nature is originally crooked and selfish like warped wood; it requires conscious moral education (*wei*) and the steam-press of ritual propriety (*li*) to straighten it.",
      "**Superstitious Omens & Solar Eclipses**: Commoners panicked when comets appeared, believing heaven was punishing them. — *Xunzi's Take*: Nature (*Tian*) operates by regular, indifferent laws; agricultural prosperity comes from human effort, not from superstitious prayers."
    ],
    contemporaryExamples: [
      "**Public Health Mandates & Traffic Laws**: Unregulated individual freedom on highways causes fatal accidents. — *Xunzi's Take*: Civilized cooperation does not arise spontaneously; it requires structured institutions, legal rules, and social norms to channel selfish desires into communal safety.",
      "**Civic Education & Scientific Literacy**: Combating viral misinformation through rigorous school curricula. — *Xunzi's Take*: Human beings are not born with moral wisdom; virtue is an achieved, hard-won artifice produced through continuous disciplined study."
    ]
  },

  hanfeizi: {
    eraExamples: [
      "**Treasonable Ministerial Cabals**: Feudal ministers secretly undermined their kings through flattery and palace coups. — *Han Feizi's Take*: Never rely on the personal loyalty or moral virtue of ministers; rulers must govern through objective rewards and punishments (*the two handles*) and keep their own intentions unreadable.",
      "**The Impending Conquest of the State of Han**: The state of Han was tiny and threatened with total military annihilation by Qin. — *Han Feizi's Take*: Moralistic Confucian lectures cannot stop advancing chariots; only a disciplined, law-bound state with standardized agriculture and conscription survives."
    ],
    contemporaryExamples: [
      "**Algorithmic Automated Regulations**: Using automated speed cameras and digital tax audits that treat everyone identically without human discretion. — *Han Feizi's Take*: Laws must be transparent, universal, and enforced without sentimental favoritism regardless of rank or wealth.",
      "**Corporate Compliance & Internal Audits**: Strict financial controls that prevent embezzlement rather than hoping accountants remain honest. — *Han Feizi's Take*: 'The sage ruler does not rely on people being good; he relies on them being unable to do wrong.'"
    ]
  },

  epictetus: {
    eraExamples: [
      "**Enslavement Under Roman Despotism**: Epictetus was enslaved in Rome and permanently crippled by a cruel master. — *Epictetus's Take*: You can chain my leg, but not even Zeus can conquer my rational will; human freedom is interior and cannot be stripped away by emperors or slaveholders.",
      "**Exile by Emperor Domitian**: Stoic philosophers were banished from Rome under pain of death. — *Epictetus's Take*: What upsets people is not external events, but the judgments they form about events; exile is merely a change of location, not a moral catastrophe."
    ],
    contemporaryExamples: [
      "**Flight Delays, Bad Weather & Traffic Jams**: Commuters screaming in rage over unexpected traffic delays. — *Epictetus's Take*: The Dichotomy of Control: The traffic is outside your control; your emotional response is completely within your control. Focus on what is yours.",
      "**Cognitive Behavioral Therapy (CBT)**: Clinical treatment of anxiety by identifying and reframing irrational, catastrophic thoughts. — *Epictetus's Take*: 'Men are disturbed not by things, but by the principles and notions which they form concerning things.'"
    ]
  },

  // ==========================================
  // ERA II: CLASSICAL SYSTEMS (9 Thinkers)
  // ==========================================
  nagarjuna: {
    eraExamples: [
      "**Abhidharma Atomism Debates**: Buddhist scholastics argued that ultimate reality consisted of tiny indivisible mental and physical building blocks with inherent essence (*svabhava*). — *Nagarjuna's Take*: If anything possessed independent, intrinsic essence, it could never change, interact, or cease; everything exists only in relational interdependence (*sunyata*).",
      "**Dogmatic Partisan Clashes**: Philosophers claimed their doctrine alone represented absolute truth. — *Nagarjuna's Take*: The Tetralemma (*Catuskoti*) dismantles all dogmatic assertions; ultimate wisdom consists of abandoning conceptual fixation without falling into nihilism."
    ],
    contemporaryExamples: [
      "**Quantum Entanglement & Relational Physics**: Subatomic particles do not possess fixed, independent properties until they interact with an observer or system. — *Nagarjuna's Take*: Reality is fundamentally non-substantial and relational; entities exist as dependently co-arising phenomena.",
      "**Deconstructing Polarized Ideological Narratives**: Political partisans reifying social categories into rigid, unchangeable essences. — *Nagarjuna's Take*: Deconstruct the illusion of intrinsic essence to open space for compassionate, flexible dialogue."
    ]
  },

  augustine: {
    eraExamples: [
      "**The Visigoth Sack of Rome (410 CE)**: Pagans blamed the adoption of Christianity for Rome's military collapse. — *Augustine's Take*: Earthly empires (*the City of Man*) are transient and founded on selfish ambition; only *the City of God*, built upon selfless love, endures eternally.",
      "**Personal Struggles with Lust & Ambition**: Augustine's youth was consumed by restless careerism and sensual desire in Carthage. — *Augustine's Take*: The human heart is intrinsically restless until it rests in divine truth; human will is fractured by original sin and requires grace."
    ],
    contemporaryExamples: [
      "**Civilizational Anxiety in Crisis Eras**: Modern citizens feeling existential panic as democratic institutions and international alliances falter. — *Augustine's Take*: Do not confuse any temporary political empire with ultimate cosmic purpose; invest your deepest love in transcendent justice.",
      "**Psychological Introspection & Addiction Recovery**: Acknowledging that willpower alone is often powerless against deep-seated compulsive habits. — *Augustine's Take*: The honest self-examination pioneered in the *Confessions* shows that transformation requires admitting our brokenness and opening to higher grace."
    ]
  },

  avicenna: {
    eraExamples: [
      "**Central Asian Sectarian Fracturing**: Rival caliphates and emirs fought over theological dogma. — *Avicenna's Take*: Demonstrative Aristotelian logic provides an objective universal foundation for truth that transcends partisan sectarian disputes.",
      "**Medical Ignorance & Superstitions**: Diseases were attributed to demonic possession. — *Avicenna's Take*: In the *Canon of Medicine*, Avicenna introduced rigorous clinical trials, quarantine procedures, and evidence-based pharmacology."
    ],
    contemporaryExamples: [
      "**Neuroscience & The 'Floating Man' Argument**: Imagining a person created in mid-air with senses blanked out; would they know they exist? — *Avicenna's Take*: Yes; primary self-awareness is direct and immaterial, anticipating modern debates over the hard problem of consciousness.",
      "**Contingency of the Universe in Cosmology**: Why does something exist rather than nothing? — *Avicenna's Take*: All physical phenomena are contingent (they might not have existed); their ultimate explanation requires a Necessary Existent (*Wajib al-Wujud*)."
    ]
  },

  alghazali: {
    eraExamples: [
      "**Dogmatic Intellectual Hubris in Baghdad**: Elite university philosophers claimed that Greek logic could fully explain divine mystery, denying bodily resurrection. — *Al-Ghazali's Take*: In *The Incoherence of the Philosophers*, he demonstrated that rationalist metaphysics oversteps its empirical boundaries and contradicts its own logic.",
      "**Personal Epistemic & Spiritual Breakdown**: At the height of his fame as dean of the Nizamiyya, Al-Ghazali suffered speech-paralysis and deep depression. — *Al-Ghazali's Take*: Intellectual prestige cannot satisfy the soul; he abandoned wealth to wander as a Sufi ascetic, discovering that experiential contemplation (*dhikr*) surpasses abstract book-learning."
    ],
    contemporaryExamples: [
      "**Critique of Scientific Reductionism**: Technologists claiming that neuroscience has 'proven' love, art, and spirituality are mere chemical illusions. — *Al-Ghazali's Take*: Quantitative reason has real utility, but it cannot capture the qualitative, experiential depth of human consciousness.",
      "**Academic Burnout & Mental Health in Prestigious Careers**: Elite scholars suffering profound existential emptiness despite career accolades. — *Al-Ghazali's Take*: When professional ambition eclipses inner spiritual integrity, the soul revolts; step back and cultivate inner silence."
    ]
  },

  averroes: {
    eraExamples: [
      "**Andalusian Fundamentalist Book Burnings**: Religious zealots in Islamic Spain burned philosophical treatises, declaring logic heresy. — *Averroes's Take*: In *The Decisive Treatise*, Averroes proved through Islamic jurisprudence that the Quran mandates the philosophical study of nature; 'truth cannot contradict truth.'",
      "**Distorted Translations of Aristotle**: European and Islamic universities used corrupted Latin and Arabic summaries of classical texts. — *Averroes's Take*: He authored exhaustive, line-by-line commentaries on Aristotle, restoring genuine scientific and philosophical methodology to Western civilization."
    ],
    contemporaryExamples: [
      "**Reconciling Biological Evolution with Religious Faith**: Religious fundamentalists rejecting climate science and evolutionary biology. — *Averroes's Take*: If demonstrated scientific truth appears to contradict sacred scripture, the scripture must be interpreted allegorically, not literally.",
      "**Academic Freedom & Resisting Anti-Intellectualism**: Public school boards banning books and scientific curricula. — *Averroes's Take*: Suppressing rational inquiry harms the very society that bans it; reason is humanity's highest divine gift."
    ]
  },

  maimonides: {
    eraExamples: [
      "**Almohad Religious Persecution in Spain**: Spanish Jews were forced into exile or coerced conversion by invading Almohad armies. — *Maimonides's Take*: He composed the *Epistle on Martyrdom*, offering compassionate pastoral guidance that preserved Jewish lives while maintaining secret fidelity to core ethical tenets.",
      "**Anthropomorphic Superstitions**: Believers imagined God as an old man sitting on a physical throne with hands and feet. — *Maimonides's Take*: In *The Guide for the Perplexed*, he established negative theology; asserting that God has physical attributes is a blasphemous category mistake."
    ],
    contemporaryExamples: [
      "**Critique of Religious Fundamentalism & Biblical Literalism**: Reading ancient theological metaphors as literal scientific claims. — *Maimonides's Take*: Scripture speaks in the language of human beings; educated believers must use philosophical reason to interpret sacred texts metaphorically.",
      "**Medical Ethics & Healing as Sacred Duty**: Maimonides serving as court physician in Cairo while writing treatises on asthma and toxicology. — *Maimonides's Take*: Science and healthcare are the highest forms of religious service, directly fulfilling the command to preserve human life."
    ]
  },

  aquinas: {
    eraExamples: [
      "**The Aristotelian Crisis at the University of Paris**: Conservative bishops banned Aristotle's newly translated pagan scientific works. — *Aquinas's Take*: In the *Summa Theologiae*, Aquinas demonstrated that 'grace does not destroy nature, but perfects it'; pagan philosophy contains genuine truth that enriches Christian theology.",
      "**The Challenge of Just War & Sovereign Violence**: Medieval kings waged continuous feudal wars without moral limits. — *Aquinas's Take*: He codified strict Just War criteria: legitimate authority, just cause, and right intention (avoiding cruelty and unnecessary bloodshed)."
    ],
    contemporaryExamples: [
      "**Universal Human Rights Grounded in Natural Law**: Resisting tyrannical state laws that violate human dignity. — *Aquinas's Take*: An unjust law is no law at all (*lex iniusta non est lex*); positive civil laws must align with universal natural moral law.",
      "**Bioethics & The Principle of Double Effect**: Medical dilemmas where saving a pregnant mother's life may foreseeably cause the death of an unborn fetus. — *Aquinas's Take*: If an action has two effects (one good, one bad), it is morally permissible if only the good effect is intended and proportional."
    ]
  },

  rumi: {
    eraExamples: [
      "**The Horrific Mongol Conquest of Khwarazm & Baghdad**: Genghis Khan's hordes destroyed libraries, massacred populations, and forced Rumi's family into refugee exile. — *Rumi's Take*: In the face of apocalyptic violence, hatred only begets hatred; the wounded heart is the place where divine love and light enter.",
      "**Narrow Sectarian Dogmatism in Anatolia**: Sunni, Shia, Christian, and Jewish communities clashed in 13th-century Konya. — *Rumi's Take*: 'Out beyond ideas of wrongdoing and rightdoing there is a field. I'll meet you there.' Universal divine love transcends dogmatic theological borders."
    ],
    contemporaryExamples: [
      "**Trauma Healing & Emotional Integration**: Individuals suppressing grief, heartbreak, and emotional suffering. — *Rumi's Take*: In *The Guest House*, Rumi teaches that every dark thought, shame, and malice should be welcomed at the door laughing, for each has been sent as a guide from beyond.",
      "**Interfaith Reconciliation in Polarized Societies**: Rising religious nationalism and xenophobic hatred across global politics. — *Rumi's Take*: All religions sing different verses of the same divine longing; look past outer rituals to recognize our shared sacred humanity."
    ]
  },

  ibn_khaldun: {
    eraExamples: [
      "**The Rapid Rise and Fall of Berber Dynasties**: North African dynasties routinely conquered cities, grew decadent within three generations, and were overthrown. — *Ibn Khaldun's Take*: In the *Muqaddimah*, he invented scientific sociology and historiography, demonstrating that social solidarity (*asabiyyah*) is the essential engine of political power and civilizational vitality.",
      "**The Black Death Pandemic (1348)**: The plague wiped out his parents, teachers, and a third of the Mediterranean population. — *Ibn Khaldun's Take*: When the world undergoes radical transformation, scholars must completely rewrite history and sociology from empirical observation rather than relying on stale myths."
    ],
    contemporaryExamples: [
      "**Erosion of Social Cohesion & Political Tribalism**: Modern Western democracies experiencing intense political polarization and collapsing civic trust. — *Ibn Khaldun's Take*: When luxury and inequality destroy a society's shared *asabiyyah* (collective social solidarity), civilizational decay and vulnerability inevitably follow.",
      "**Economic Cycles & The Laffer Curve**: The economic insight that excessive tax rates eventually reduce total government revenue. — *Ibn Khaldun's Take*: He originally articulated that at the beginning of an empire, low tax rates produce high revenues, while at the end, oppressive taxation destroys enterprise and ruins the treasury."
    ]
  },

  // ==========================================
  // ERA III: EARLY MODERN TURN (7 Thinkers)
  // ==========================================
  machiavelli: {
    eraExamples: [
      "**Foreign Invasions & The Sack of Prato**: Fragmented Italian city-states relied on treacherous mercenary armies and were easily plundered by France and Spain. — *Machiavelli's Take*: Relying on mercenaries is suicidal; a sovereign must maintain a disciplined citizen army and face harsh reality (*verità effettuale*) rather than imagined Christian utopias.",
      "**The Treachery of Cesare Borgia**: Borgia consolidated Romagna by hiring a ruthless lieutenant to pacify the province, then executing him publicly to win popular favor. — *Machiavelli's Take*: A ruler must understand both the lion and the fox, recognizing that cruelty well-used in a single stroke produces greater long-term peace than weak indecision."
    ],
    contemporaryExamples: [
      "**Modern Geopolitical Realpolitik & National Defense**: International diplomacy during times of war and geopolitical crises. — *Machiavelli's Take*: A statesman who seeks to be completely saintly in a world of ruthless actors guarantees their nation's destruction; survival requires strategic pragmatism.",
      "**Crisis Leadership in Corporate Turnarounds**: A new CEO executing painful immediate restructuring rather than prolonged, agonizing uncertainty. — *Machiavelli's Take*: 'Injuries should be inflicted all at once, that their taste may be less lasting; benefits should be granted little by little, that they may be savored.'"
    ]
  },

  descartes: {
    eraExamples: [
      "**The Bloody Thirty Years' War & Religious Skepticism**: Catholic and Protestant dogmatists massacred each other across Europe while skepticism paralyzed intellectuals. — *Descartes's Take*: Apply radical methodical doubt to tear down all unverified assumptions, discovering the indubitable foundation of all knowledge: *Cogito, ergo sum* (I think, therefore I am).",
      "**The Collapse of Aristotelian Scholastic Physics**: The telescope proved that the heavens were not composed of immutable, sacred quintessence. — *Descartes's Take*: The physical universe is a unified mechanical clockwork governed by universal mathematical geometry (*res extensa*), separate from conscious mind (*res cogitans*)."
    ],
    contemporaryExamples: [
      "**The Age of Deepfakes, AI Hallucinations & Epistemic Doubt**: AI-generated video and audio making it impossible to trust sensory evidence naively. — *Descartes's Take*: Senses deceive us; we must reconstruct knowledge from foundational first principles and rigorous rational verification.",
      "**Mind-Body Problem in Neuroscience & Artificial Intelligence**: Can physical silicon microchips produce conscious subjective experience? — *Descartes's Take*: Dualism highlights the profound ontological distinction between physical matter and subjective, conscious intentionality."
    ]
  },

  hobbes: {
    eraExamples: [
      "**The Brutal English Civil War (1642–1651)**: Royalists and Parliamentarians tore England apart, beheading King Charles I and bringing anarchy. — *Hobbes's Take*: In the *Leviathan*, Hobbes showed that without an undivided sovereign authority, human life in the state of nature is 'solitary, poor, nasty, brutish, and short.'",
      "**Religious Fanatics Claiming Divine Authority to Rebel**: Sectarian militias claimed divine inspiration to wage war against the government. — *Hobbes's Take*: Religious authority must be subordinated to the civil sovereign; peace requires a unified social contract where citizens surrender private violence in exchange for state security."
    ],
    contemporaryExamples: [
      "**Failed States & Anarchy (e.g., Somalia, Haiti)**: When centralized governments collapse, violent warlord gangs immediately terrorize the population. — *Hobbes's Take*: Security and the rule of law are the non-negotiable preconditions for all human commerce, art, science, and flourishing.",
      "**International Anarchy & Global Nuclear Treaties**: Nations arming themselves because there is no global sovereign enforcing peace. — *Hobbes's Take*: In the absence of an overarching sovereign power, sovereign states exist in a perpetual state of potential war, requiring deterrence."
    ]
  },

  locke: {
    eraExamples: [
      "**The Glorious Revolution & Stuart Absolutism (1688)**: King James II claimed absolute divine right to overrule Parliament and suspend laws. — *Locke's Take*: In the *Two Treatises of Government*, Locke argued that political power is held on trust; legitimate government exists solely to protect natural rights (life, liberty, and property).",
      "**Religious Intolerance & The Revocation of the Edict of Nantes**: European monarchs persecuted religious minorities to enforce uniformity. — *Locke's Take*: In *A Letter Concerning Toleration*, Locke argued that the state has no authority over the soul; genuine religious faith cannot be coerced by force."
    ],
    contemporaryExamples: [
      "**Digital Privacy Rights & Personal Data Ownership**: Tech monopolies harvesting private data without meaningful user consent. — *Locke's Take*: Labor theory of property: Every person possesses an inalienable property in their own person and the fruits of their labor.",
      "**Right of Democratic Revolution Against Tyranny**: Citizens protesting authoritarian governments that violate constitutional rights. — *Locke's Take*: When a government systematically violates the fundamental rights of its citizens, it breaches the social contract, and the people have the moral right to replace it."
    ]
  },

  hume: {
    eraExamples: [
      "**Rationalist Metaphysical Dogmatism**: Philosophers claimed they could prove the nature of God, the soul, and the universe through abstract deductive reasoning alone. — *Hume's Take*: In *An Enquiry Concerning Human Understanding*, Hume radicalized empiricism: 'Commit it then to the flames, for it can contain nothing but sophistry and illusion.'",
      "**Uncritical Belief in Miracles**: Sects claimed religious truth based on secondhand reports of miraculous events. — *Hume's Take*: A miracle is a violation of the laws of nature; reason requires that we proportion our belief to the evidence, and it is always more probable that the witness was mistaken or deceitful."
    ],
    contemporaryExamples: [
      "**The Problem of Induction in Machine Learning & Black Swan Events**: Financial algorithms predicting market stability because 'the market has never crashed on this metric before.' — *Hume's Take*: No amount of past observations can logically guarantee that the future will resemble the past; correlation is not causation.",
      "**Behavioral Economics & Emotional Decision-Making**: Classical economists assuming humans act as purely rational utility maximizers. — *Hume's Take*: 'Reason is, and ought only to be the slave of the passions'; human action is driven by desire, emotion, and sentiment, while reason merely calculates means."
    ]
  },

  kant: {
    eraExamples: [
      "**Hume's Skepticism Threatening Newtonian Physics**: Hume's proof that causality is an unprovable mental habit threatened to destroy the certainty of natural science. — *Kant's Take*: In the *Critique of Pure Reason*, Kant enacted a Copernican Revolution: Space, time, and causality are not external things, but the synthetic *a priori* cognitive architecture through which human consciousness constructs experience.",
      "**Prussian Absolutism & Intellectual Censorship**: King Frederick William II threatened Kant with arrest if he continued publishing on religion. — *Kant's Take*: In *What is Enlightenment?*, Kant coined the motto *Sapere aude!* (Dare to know!), demanding freedom for public reason and moral autonomy."
    ],
    contemporaryExamples: [
      "**Human Dignity vs. Exploitative Commodification**: Treating workers as disposable cost-centers or using human data as mere economic fuel. — *Kant's Take*: The Categorical Imperative: 'Act in such a way that you treat humanity, whether in your own person or in the person of any other, never merely as a means, but always as an end.'",
      "**Cognitive Framing in Virtual Reality & Perception**: How VR headsets and brain-computer interfaces demonstrate that experienced reality is synthesized by mental processing. — *Kant's Take*: We never perceive the 'thing-in-itself' (*noumenon*); we access only phenomena structured by our cognitive faculties."
    ]
  },

  hegel: {
    eraExamples: [
      "**The Disillusionment of the French Revolution**: The French Revolution proclaimed universal liberty but deteriorated into the bloody Reign of Terror. — *Hegel's Take*: Abstract liberty inevitably turns into violent terror when it lacks concrete institutional embodiment; history progresses dialectically through thesis, antithesis, and synthesis (*Aufhebung*).",
      "**Napoleon's Triumph at the Battle of Jena (1806)**: Hegel watched Napoleon ride through Jena, calling him 'the World-Spirit on horseback.' — *Hegel's Take*: History is the progressive realization of human freedom across time, unfolding through civilizational struggle and constitutional states."
    ],
    contemporaryExamples: [
      "**Polarized Cultural Dialectics**: Political debates swinging between radical extremes before settling into broader cultural consensus (e.g., civil rights, marriage equality). — *Hegel's Take*: Historical progress is not linear; contradictory cultural forces clash, contradict, and are eventually reconciled at a higher stage of institutional freedom.",
      "**Master-Slave Dialectic in Social Recognition**: The psychological realization that status and identity depend upon mutual recognition by peers. — *Hegel's Take*: Domination fails because the oppressor can never receive genuine recognition from an unfree subject; true self-consciousness requires reciprocal recognition."
    ]
  },

  // ==========================================
  // ERA IV: LATE MODERNITY & BEYOND (18 Thinkers)
  // ==========================================
  schopenhauer: {
    eraExamples: [
      "**Victorian Industrial Optimism & Hegelian State-Worship**: Academic philosophers claimed that the universe was a rational, moral, divinely guided historical triumph. — *Schopenhauer's Take*: Blind delusion; the underlying essence of the universe is a blind, purposeless, insatiable *Will to Live*, producing endless suffering, competition, and striving.",
      "**The Daily Struggle for Survival in Nature**: Animals tearing each other apart just to prolong existence for another day. — *Schopenhauer's Take*: Life swings like a pendulum between pain and boredom; salvation is achieved only through aesthetic contemplation of art and selfless Buddhist/Hindu compassion."
    ],
    contemporaryExamples: [
      "**Evolutionary Biology's 'Selfish Gene'**: Organisms driven to reproduce by unconscious evolutionary wiring regardless of personal happiness. — *Schopenhauer's Take*: Anticipated Darwin and Freud: Sexual passion is the Will's trick to perpetuate the species, often trapping the individual in misery.",
      "**Aesthetic Flow State in Art & Music**: Finding temporary relief from mental anxiety when immersed in sublime music or visual beauty. — *Schopenhauer's Take*: Music is the purest expression of reality; in aesthetic contemplation, the ego ceases striving and enters serene tranquility."
    ]
  },

  mill: {
    eraExamples: [
      "**Victorian Class Exploitation & Factory Child Labor**: Unregulated British industrialists forced ten-year-old children into textile mills. — *Mill's Take*: In *Utilitarianism*, Mill argued that actions are right in proportion as they promote the greatest happiness for the greatest number, advocating factory safety laws and public education.",
      "**The Tyranny of the Victorian Moral Majority**: Social non-conformists were ostracized by puritanical public opinion. — *Mill's Take*: In *On Liberty*, Mill formulated the Harm Principle: 'The only purpose for which power can be rightfully exercised over any member of a civilized community, against his will, is to prevent harm to others.'"
    ],
    contemporaryExamples: [
      "**Digital Free Speech & Censorship of Unpopular Ideas**: Online platforms deplatforming controversial dissenters. — *Mill's Take*: Silencing an opinion is a theft from the human race; if the opinion is right, we are robbed of truth; if wrong, we lose the clear perception of truth produced by its collision with error.",
      "**Subjection of Women & Equal Opportunity**: Equal pay legislation and breaking patriarchal glass ceilings. — *Mill's Take*: In *The Subjection of Women*, Mill proved that systemic female subordination is a relic of feudal barbarism that deprives humanity of half its intellectual genius."
    ]
  },

  kierkegaard: {
    eraExamples: [
      "**The Hypocrisy of the Danish State Church**: Citizens were declared Christians simply by being registered in state tax registers, without personal commitment. — *Kierkegaard's Take*: One cannot be an authentic Christian by birth or social conformity; true faith is a passionate, subjective 'leap of faith' over 70,000 fathoms of objective uncertainty.",
      "**The Abstract Hegelian System**: University professors claimed that history was an objective rational system where individuals were mere cogs. — *Kierkegaard's Take*: A professor can explain world history on paper, but he still has to live, choose, and die as an existing individual."
    ],
    contemporaryExamples: [
      "**Existential Dread (*Angst*) & The Agony of Choice**: Young adults feeling paralyzed by infinite career and lifestyle choices. — *Kierkegaard's Take*: 'Anxiety is the dizziness of freedom'; freedom Terrifies because we alone bear total responsibility for defining our lives through radical choice.",
      "**Social Media Groupthink & Performative Virtue**: Mindlessly echoing Twitter/Reddit slogans to feel accepted by the crowd. — *Kierkegaard's Take*: 'The crowd is untruth'; escaping despair requires stepping out of the anonymous herd to become a courageous individual before the infinite."
    ]
  },

  marx: {
    eraExamples: [
      "**19th-Century Manchester Industrial Slums**: Factory workers labored 16 hours a day in toxic mills while wealthy capitalist owners accumulated astronomical fortunes. — *Marx's Take*: Capitalism systematically alienates workers from their labor, products, fellow workers, and human nature (*Gattungswesen*), reducing human beings to exploitable commodities.",
      "**The Revolutions of 1848 Across Europe**: Working-class uprisings across Europe demanding democratic rights and economic justice. — *Marx's Take*: 'The history of all hitherto existing society is the history of class struggles'; capitalism produces its own gravediggers."
    ],
    contemporaryExamples: [
      "**Gig Economy Precarity & Algorithmic Exploitation**: Delivery drivers and warehouse workers monitored by surveillance software with zero job security. — *Marx's Take*: Capital constantly revolutionizes technology to lower labor costs, extract surplus value, and maximize private profit at the expense of human dignity.",
      "**Housing Affordability & Speculative Real Estate**: Homes treated as financial investment vehicles for Wall Street hedge funds while working families face homelessness. — *Marx's Take*: Commodities under capitalism are ruled by exchange-value rather than human use-value (*commodity fetishism*)."
    ]
  },

  nietzsche: {
    eraExamples: [
      "**The 'Death of God' in European Civilization**: Secular scientific progress destroyed the metaphysical foundation of traditional Christian morality. — *Nietzsche's Take*: 'God is dead, and we have killed him'; unless humanity actively creates life-affirming values, European culture will collapse into catastrophic nihilism.",
      "**Bourgeois Conformism & Resentment (*Ressentiment*)**: The mediocre masses celebrated herd conformity, envy, and passive weakness as moral virtues. — *Nietzsche's Take*: Slay the dragon of 'Thou Shalt'; cultivate the *Übermensch* (the creative individual who overcomes suffering, affirms life, and creates their own values)."
    ],
    contemporaryExamples: [
      "**Online Outrage & Victimhood Culture (*Ressentiment*)**: Social media mobs weaponizing moral indignation to tear down high achievers out of unconscious envy. — *Nietzsche's Take*: Slave morality derives its sense of goodness by reacting against and demonizing the strong; cultivate joyful self-creation (*Amor Fati*) instead.",
      "**Resisting Passive Nihilism & Doomscrolling**: Feeling hopeless in the face of political and ecological crises. — *Nietzsche's Take*: 'He who has a why to live can bear almost any how'; suffering is not meaningless if it serves as the forge for personal greatness."
    ]
  },

  marti: {
    eraExamples: [
      "**Spanish Colonial Atrocities in Cuba**: Spain concentrated Cuban rural populations into brutal reconcentration camps, starving hundreds of thousands. — *Martí's Take*: He organized the Cuban Revolutionary Party and gave his life on the battlefield, arguing that true liberation requires unconditional human dignity, racial unity, and cultural independence.",
      "**The Emerging Imperialism of the United States**: Martí lived in New York for 15 years and witnessed the US preparing to seize Caribbean territories. — *Martí's Take*: In *Our America* (*Nuestra América*), he warned Latin America against imitating Anglo-American models, demanding self-governance rooted in indigenous and mestizo realities."
    ],
    contemporaryExamples: [
      "**Global South Cultural Sovereignty vs. Western Hegemony**: International financial institutions imposing austerity policies on developing nations. — *Martí's Take*: 'Governments must be born of the country; the spirit of the government must be that of the country.'",
      "**Multiracial Solidarity in Civil Rights**: Racial divisions weaponized to prevent common working-class political coalitions. — *Martí's Take*: 'There are no races; to be Cuban is more than being white, more than being mulatto, more than being black.'"
    ]
  },

  dubois: {
    eraExamples: [
      "**Jim Crow Segregation & White Supremacist Lynching**: The post-Reconstruction South disenfranchised Black Americans through terror, poll taxes, and lynchings. — *Du Bois's Take*: In *The Souls of Black Folk* (1903), Du Bois rejected Booker T. Washington's passive accommodationism, demanding immediate voting rights, civic equality, and higher education for the 'Talented Tenth.'",
      "**The Global Color Line in Imperialism**: European colonial powers partitioning the African continent at the 1884 Berlin Conference. — *Du Bois's Take*: 'The problem of the twentieth century is the problem of the color-line'—the relation of the darker to the lighter races of men."
    ],
    contemporaryExamples: [
      "**'Double Consciousness' Among Minority Communities**: Navigating racial codes and feeling the psychological strain of viewing oneself through the eyes of a hostile dominant society. — *Du Bois's Take*: 'This sense of always looking at one’s self through the eyes of others, of measuring one’s soul by the tape of a world that looks on in amused contempt and pity.'",
      "**Systemic Racial Wealth Gaps & Reparative Justice**: The enduring economic chasm caused by redlining, segregation, and discriminatory banking. — *Du Bois's Take*: Freedom without economic and educational foundation is a hollow emancipation; justice requires systemic structural empowerment."
    ]
  },

  russell: {
    eraExamples: [
      "**World War I Jingoistic Hysteria**: The British government imprisoned Russell for his anti-war pacifist campaigning. — *Russell's Take*: Mass slaughter for imperial pride is criminal insanity; human survival requires critical rationalism, intellectual skepticism, and international cooperation.",
      "**Paradoxes in Set Theory (Russell's Paradox)**: Finding that the 'set of all sets that do not contain themselves' creates a fatal logical contradiction in mathematics. — *Russell's Take*: In *Principia Mathematica*, he introduced Type Theory, laying the theoretical foundation for 20th-century mathematical logic and computer science."
    ],
    contemporaryExamples: [
      "**Nuclear Proliferation & The Russell-Einstein Manifesto**: The existential danger of nuclear weapons wiping out human civilization. — *Russell's Take*: 'Remember your humanity, and forget the rest'; survival demands transcending nationalistic chauvinism through global peace treaties.",
      "**Combating Dogmatism in the Post-Truth Era**: Partisan fundamentalism driving political violence. — *Russell's Take*: 'The fundamental cause of the trouble is that in the modern world the stupid are cocksure while the intelligent are full of doubt.'"
    ]
  },

  wittgenstein: {
    eraExamples: [
      "**First World War Trenches & The Limits of Language**: Writing the *Tractatus Logico-Philosophicus* while serving as an artillery officer on the Austrian front. — *Wittgenstein's Take*: Language can picture empirical facts in the world, but it cannot express ultimate value, ethics, or aesthetics: 'Whereof one cannot speak, thereof one must be silent.'",
      "**Academic Philosophical Jargon**: Cambridge scholars arguing endlessly over abstract metaphysical pseudo-problems. — *Wittgenstein's Take*: In *Philosophical Investigations*, he completely reversed his early theory: words are not rigid labels, but tools inside practical human 'language-games' (*Sprachspiele*)."
    ],
    contemporaryExamples: [
      "**Large Language Models (ChatGPT, Claude) & Meaning**: Debating whether AI chatbots 'actually understand' human words. — *Wittgenstein's Take*: 'The meaning of a word is its use in the language'; language is rooted in shared human forms of life (*Lebensformen*), not mysterious private mental states.",
      "**Resolving Fruitless Semantic Arguments**: People arguing past one another on internet forums because they use the same word with different contextual definitions. — *Wittgenstein's Take*: Philosophy is a therapy that unties the knots in our thinking caused by language bewitching our intelligence."
    ]
  },

  heidegger: {
    eraExamples: [
      "**Interwar Existential Crisis in Weimar Germany**: Modern European civilization experiencing spiritual alienation and the mechanization of daily life. — *Heidegger's Take*: In *Being and Time* (1927), Heidegger argued that Western philosophy forgot the fundamental question of *Being* (*Sein*); humans are *Dasein* (Being-in-the-world), thrown into temporal existence and confronting mortality (*Being-towards-death*).",
      "**The Industrialization of Nature**: Hydroelectric dams turning the sacred Rhine River into a mere energy source. — *Heidegger's Take*: Modern technology operates through *Gestell* (Enframing), reducing all of nature, and eventually human beings themselves, into a disposable 'standing reserve' (*Bestand*)."
    ],
    contemporaryExamples: [
      "**Algorithmic Enframing & Attention Commodification**: Social media algorithms reducing human beings to click-through data points and behavioral inventory. — *Heidegger's Take*: Technology is not merely a neutral tool; it is an ontological worldview that conceals the poetic, contemplative mystery of Being.",
      "**Mortality & Living Authentically**: Overcoming shallow distractions to live with existential purpose. — *Heidegger's Take*: Most people flee into the superficial idle chatter of 'the They' (*das Man*); authentic freedom begins when we courageously confront our finitude."
    ]
  },

  sartre: {
    eraExamples: [
      "**Nazi Occupation of Paris & The Dilemmas of Collaboration**: French citizens facing agonizing choices between joining the Resistance, collaborating, or remaining passive. — *Sartre's Take*: 'Existence precedes essence'; humans are not created with a pre-set purpose; we define who we are entirely through our concrete choices under pressure.",
      "**Bourgeois Excuses & 'Bad Faith' (*Mauvaise Foi*)**: Individuals blaming circumstances, biology, or social station to excuse cowardice. — *Sartre's Take*: We are 'condemned to be free'; you can always choose, and pretending you had no choice is living in inauthentic bad faith."
    ],
    contemporaryExamples: [
      "**Blaming Algorithms & Environment for Personal Behavior**: People excusing toxic online behavior by claiming 'the algorithm made me angry.' — *Sartre's Take*: You are radically responsible for your actions; no external circumstance dictates your moral choices without your consent.",
      "**Existential Career Anxiety**: Feeling trapped in a soul-crushing corporate job while claiming 'I have no other option.' — *Sartre's Take*: You choose to stay every morning; acknowledging your terrifying freedom is the first step toward living authentically."
    ]
  },

  beauvoir: {
    eraExamples: [
      "**Postwar Patriarchal Domesticity**: Post-WWII European society pushing women back into subservient housewife roles and criminalizing birth control. — *Beauvoir's Take*: In *The Second Sex* (1949), Beauvoir dismantled biological determinism: 'One is not born, but rather becomes, a woman'; femininity is a manufactured social construct.",
      "**The Philosophical Blind Spot of Male Existentialism**: Male philosophers assuming their privileged masculine experience was the universal human norm. — *Beauvoir's Take*: Patriarchal culture defines man as the absolute Subject and woman as the inessential, contingent 'Other', denying women reciprocal existential transcendence."
    ],
    contemporaryExamples: [
      "**Gender Pay Gaps & The 'Second Shift'**: Working women shouldering the overwhelming burden of unpaid domestic childcare and eldercare. — *Beauvoir's Take*: Economic independence is the essential prerequisite for female liberation; without economic autonomy, equality remains a hollow myth.",
      "**Challenging Rigid Gender Stereotypes**: Deconstructing societal expectations forced on young girls regarding appearance, passivity, and emotional submission. — *Beauvoir's Take*: Biological sex does not dictate human destiny; every human being has the right to project their freedom into the world."
    ]
  },

  arendt: {
    eraExamples: [
      "**The Nazi Holocaust & Totalitarian Propaganda**: Nazi Germany and Stalinist Russia deploying total terror, systematic lying, and concentration camps. — *Arendt's Take*: In *The Origins of Totalitarianism*, Arendt showed that totalitarianism destroys the capacity for critical thought by isolating individuals and erasing the shared public space for political speech and action.",
      "**The Trial of Adolf Eichmann in Jerusalem (1961)**: Watching the chief organizer of the Holocaust reveal himself not as a demonic monster, but as a shallow, thoughtless bureaucrat. — *Arendt's Take*: She coined 'the banality of evil'; catastrophic evil is often committed by ordinary, thoughtless functionaries who blindly follow administrative rules without moral reflection."
    ],
    contemporaryExamples: [
      "**Algorithmic Bureaucracy & Unthinking Compliance**: Tech workers building automated deportation, drone targeting, or mass surveillance software while claiming 'I'm just a programmer writing code.' — *Arendt's Take*: The refusal to think from the standpoint of another human being enables bureaucratic evil; moral responsibility cannot be delegated to an administrative system.",
      "**The Erosion of Shared Truth in Democracy**: Authoritarian politicians spreading relentless conspiracy theories to overwhelm public discernment. — *Arendt's Take*: 'The ideal subject of totalitarian rule is not the convinced Nazi or communist, but people for whom the distinction between fact and fiction no longer exists.'"
    ]
  },

  fanon: {
    eraExamples: [
      "**The Brutal Algerian War of Independence (1954–1962)**: French colonial forces systematically torturing Algerian freedom fighters while preaching 'liberty, equality, fraternity.' — *Fanon's Take*: In *The Wretched of the Earth*, Fanon, working as a psychiatrist in Blida, demonstrated that colonialism is naked structural violence that traumatizes both colonized and colonizer, requiring complete systemic rupture.",
      "**The Psychological Alienation of Black Antilleans**: Educated Black Martinicans feeling compelled to adopt French language, dress, and manners to be deemed human. — *Fanon's Take*: In *Black Skin, White Masks*, he exposed how colonial racism internalizes a devastating inferiority complex in the colonized mind."
    ],
    contemporaryExamples: [
      "**Psychological Decolonization & Eurocentric Standards of Beauty**: Non-Western youth feeling inadequate because commercial media elevates Eurocentric features and cultural norms. — *Fanon's Take*: Liberation is psychological as well as political; true freedom requires dismantling the internalized white gaze.",
      "**Neo-Colonial Economic Exploitation of African Resources**: Western multinationals extracting lithium and cobalt from the Democratic Republic of Congo while local populations live in squalor. — *Fanon's Take*: Formal political independence is a sham if the national bourgeoisie simply replaces the colonial masters while raw wealth continues flowing overseas."
    ]
  },

  foucault: {
    eraExamples: [
      "**The Evolution of Modern Asylums, Clinics & Prisons**: The transition from public medieval executions (drawing and quartering) to modern sanitized penitentiaries. — *Foucault's Take*: In *Discipline and Punish*, Foucault proved that modern penal reform was not a humanitarian triumph, but a more subtle, pervasive technology of surveillance and disciplinary power to produce 'docile bodies.'",
      "**Victorian Sexual Taboos & Medical Categorization**: 19th-century psychiatry categorizing human desires into pathological diagnoses (e.g., hysteria, perversion). — *Foucault's Take*: In *The History of Sexuality*, he demonstrated that 'power-knowledge' networks produce our very concepts of identity and normality."
    ],
    contemporaryExamples: [
      "**Surveillance Capitalism & The Digital Panopticon**: Smartphone tracking, facial recognition cameras, and credit scores monitoring every digital movement. — *Foucault's Take*: Jeremy Bentham's Panopticon realized on a planetary scale: When individuals internalize the gaze of the watcher, they police themselves without physical chains.",
      "**Biopolitics & State Population Control**: Governments managing public health data, reproductive policies, and pandemic lockdowns. — *Foucault's Take*: Modern power operates through 'biopower'—the management, measurement, and regulation of biological life itself."
    ]
  },

  wiredu: {
    eraExamples: [
      "**Post-Colonial African Epistemic Colonization**: Post-independence African universities taught Western philosophical problems in English and French, assuming they were universal. — *Wiredu's Take*: Wiredu pioneered 'conceptual decolonization,' demonstrating that many Western metaphysical dilemmas (like Cartesian mind-body dualism or theological creation ex nihilo) are linguistic quirks of Indo-European languages that literally make no sense in Akan.",
      "**Authoritarian One-Party Regimes in Post-Independence Africa**: African dictators claiming traditional authoritarian status to suppress opposition. — *Wiredu's Take*: Traditional Akan governance was not authoritarian; it operated by consensus democracy, where decisions required unanimous consensus among clan representatives rather than majority tyranny."
    ],
    contemporaryExamples: [
      "**Decolonizing Academic Curricula & Language Preservation**: Resisting the linguistic extinction of indigenous languages and recognizing diverse epistemological traditions. — *Wiredu's Take*: Thinking in one's mother tongue uncovers philosophical assumptions that Western European languages conceal.",
      "**Consensus-Based Dispute Resolution**: Moving away from adversarial zero-sum litigation toward restorative consensus circles. — *Wiredu's Take*: Majoritarian voting always creates an alienated, resentful minority; true democracy seeks substantive consensus that reconciles all community interests."
    ]
  },

  dussel: {
    eraExamples: [
      "**The 1492 Conquest of the Americas as the Birth of Modernity**: Eurocentric historians celebrating the 'Enlightenment' while erasing the genocide and enslavement of Indigenous and African peoples. — *Dussel's Take*: In *The Philosophy of Liberation*, Dussel demonstrated that Descartes' *Ego cogito* (I think) was preceded and enabled by the imperial *Ego conquiro* (I conquer); modernity has a hidden, dark colonial underside.",
      "**Military Dictatorships in 1970s Latin America**: US-backed military juntas in Argentina and Chile disappearing dissidents and imposing neoliberal austerity. — *Dussel's Take*: Philosophy must not remain an ivory-tower luxury; it must originate from the 'exteriority' of the oppressed—the poor, the marginalized, and the victims of global empire."
    ],
    contemporaryExamples: [
      "**Climate Injustice Between Global North & Global South**: Rich industrialized nations emitting the overwhelming majority of greenhouse gases while island nations and the Global South suffer catastrophic flooding and famine. — *Dussel's Take*: Modernity's predatory capitalist relationship with nature is built upon the sacrificial exploitation of the periphery; ethics must prioritize the material life of the victim.",
      "**Decentering Eurocentric Philosophy in Global Education**: Acknowledging that global thought did not begin and end in Western Europe. — *Dussel's Take*: A 'trans-modern' dialogue where diverse world cultures enter into equitable, pluriversal philosophical conversation."
    ]
  },

  contemporary_horizons: {
    eraExamples: [
      "**The Dawn of the Atomic Age & Industrial Acceleration**: The 20th century closed with unprecedented technological power capable of destroying the biosphere. — *The Take*: Humanity entered the Anthropocene, where human technological activity has become the dominant planetary force, demanding a radical expansion of ethical responsibility beyond national borders and human generations.",
      "**The Collapse of Cold War Binary Ideologies**: The fall of the Berlin Wall and the rise of the digital internet age. — *The Take*: Disproved the simplistic 'End of History'; global philosophy must now grapple with complex multi-polar cultural identities, biotechnology, and digital connectivity."
    ],
    contemporaryExamples: [
      "**Artificial Intelligence & The Question of Consciousness**: Generative AI models mimicking human reasoning, art, and language. — *The Take*: Re-interrogates fundamental questions: What is consciousness? Can an algorithm possess moral agency? How do we prevent technological tools from automating human dehumanization?",
      "**Global Climate Tipping Points & Intergenerational Justice**: Decisions made today altering the habitability of Earth for thousands of years. — *The Take*: Planetary ethics: Human survival requires moving from short-term quarterly capitalism to deep-time ecological solidarity, recognizing that ethics includes the unborn future."
    ]
  }
};

/**
 * Returns clean, structured bullet-point examples for any philosopher.
 */
export function getEraExamples(chapter: Chapter): string[] {
  if (PHILOSOPHER_EXAMPLES[chapter.id]?.eraExamples) {
    return PHILOSOPHER_EXAMPLES[chapter.id].eraExamples;
  }

  // Fallback for any chapter: split into clean bullet points
  if (Array.isArray(chapter.eraExamples)) {
    return chapter.eraExamples;
  }
  
  if (typeof chapter.eraExamples === 'string') {
    const cleaned = chapter.eraExamples.replace(/^Historical Era Example & Relevance:\s*/i, '').trim();
    const parts = cleaned.split(/(?<=\.)\s+(?=[A-Z])/).filter(p => p.trim().length > 0);
    if (parts.length >= 2) {
      return [
        `**Historical Context**: ${parts[0]}`,
        `**${chapter.name}'s Take**: ${parts.slice(1).join(' ')}`
      ];
    }
    return [`**Historical Era & Take**: ${cleaned}`];
  }

  return [`**Historical Relevance**: Foundational development in ${chapter.era}.`];
}

/**
 * Returns clean, structured bullet-point contemporary examples for any philosopher.
 */
export function getContemporaryExamples(chapter: Chapter): string[] {
  if (PHILOSOPHER_EXAMPLES[chapter.id]?.contemporaryExamples) {
    return PHILOSOPHER_EXAMPLES[chapter.id].contemporaryExamples;
  }

  // Fallback for any chapter: split into clean bullet points
  if (Array.isArray(chapter.contemporaryExamples)) {
    return chapter.contemporaryExamples;
  }

  if (typeof chapter.contemporaryExamples === 'string') {
    const cleaned = chapter.contemporaryExamples.replace(/^Today's Era Example & Relevance:\s*/i, '').trim();
    const parts = cleaned.split(/(?<=\.)\s+(?=[A-Z])/).filter(p => p.trim().length > 0);
    if (parts.length >= 2) {
      return [
        `**Contemporary Dilemma**: ${parts[0]}`,
        `**${chapter.name}'s Take & Relevance**: ${parts.slice(1).join(' ')}`
      ];
    }
    return [`**Today's Era Take**: ${cleaned}`];
  }

  return [`**Contemporary Relevance**: Enduring insight for modern ethical and philosophical inquiry.`];
}
