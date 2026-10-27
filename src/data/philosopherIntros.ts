/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Chapter } from './epoch1';

/**
 * Detailed biographical catalyst introductions for world philosophers across all four eras.
 * Explains:
 * 1. The era and cultural/geographic setting in which they lived.
 * 2. The specific sociopolitical, moral, religious, or intellectual crisis that prompted their philosophy.
 * 3. Their enduring philosophical breakthrough.
 */
export const PHILOSOPHER_INTRODUCTIONS: Record<string, string> = {
  // --- ERA I: Ancient Foundations & Axial Age Wisdom ---
  laozi: "Flourishing during the 6th–4th Century BCE in Ancient China (Zhou Dynasty), Laozi was prompted to formulate his philosophy by the escalating carnage, relentless militarism, and moral decay of the Warring States period. Observing that aggressive governance, draconian penal codes, and artificial Confucian rituals only exacerbated violence and hypocrisy, Laozi authored the Daodejing to advocate an urgent return to the nameless Dao (the Way), effortless non-coercive action (wuwei), and the generative, healing power of yielding like water.",
  
  mahavira: "Active in c. 599–527 BCE in Ancient India (Bihar), Mahavira was prompted to revitalize Jainism by the rapid urbanization, entrenched caste stratification, and bloody animal sacrifices characterizing early Brahmanical Vedic rituals. Renouncing royal privilege at thirty to undergo twelve years of rigorous ascetic contemplation, Mahavira established an uncompromising philosophy of universal non-violence (ahimsa), multi-perspectival truth (anekantavada), and radical spiritual liberation (moksha).",
  
  buddha: "Living in c. 563–483 BCE across the Gangetic Plain of Ancient India, Siddhartha Gautama was prompted to seek awakening after confronting the inescapable human realities of aging, illness, and death, realizing that both palace hedonism and extreme self-mortification were spiritually futile. Amidst rising interstate warfare and rigid caste hierarchies, the Buddha formulated the Middle Way, identifying the Four Noble Truths, dependent origination (pratītyasamutpāda), and the revolutionary doctrine of non-self (anatta) to extinguish suffering (dukkha).",
  
  confucius: "Active in c. 551–479 BCE during the fractured Spring and Autumn period in Ancient China (State of Lu), Confucius was prompted by the collapse of Zhou feudal order, widespread patricide, and warlord lawlessness. Convinced that society could not be saved through military coercion or cynical realpolitik, Confucius pioneered a humanistic philosophy of moral self-cultivation, seeking to rebuild social harmony through filial piety (xiao), ritual propriety (li), and benevolence (ren).",
  
  suntzu: "Active c. 544–496 BCE in the Kingdom of Wu during the Spring and Autumn period, Sun Tzu was prompted by the catastrophic waste, mass slaughter, and strategic incompetence plaguing ancient Chinese warfare. Observing that reckless commanders were bankrupting states and decimating populations, Sun Tzu composed The Art of War to transform combat into a disciplined science of strategic calculation, declaring that supreme excellence consists of breaking the enemy's resistance without fighting.",
  
  mozi: "Active c. 470–391 BCE in Ancient China, Mozi was prompted by the opulent waste of aristocratic Confucian mourning rituals, offensive interstate warfare, and nepotistic clan privilege that inflicted deep poverty on commoners. Founding Mohism, he championed radical utilitarianism, universal impartial care (jian'ai), defensive anti-militarism, and meritocratic governance to maximize tangible welfare for all people.",
  
  socrates: "Living in c. 469–399 BCE in Classical Athens, Socrates was prompted by the intellectual cynicism of the Sophists, the moral decay of Athenian imperial democracy, and the devastation of the Peloponnesian War. Turning philosophy from cosmological speculation to ethical inquiry, Socrates challenged Athenian citizens who prioritized wealth and status over virtue, practicing dialectical cross-examination (elenchus) and declaring that 'the unexamined life is not worth living.'",
  
  plato: "Living in c. 428–348 BCE in Classical Athens, Plato was prompted by the traumatic execution of his mentor Socrates by the restored Athenian democracy, combined with the chronic political instability of Greek city-states. Seeking an incorruptible, objective foundation for justice and knowledge, Plato developed the Theory of Forms, the Allegory of the Cave, and the ideal Republic governed by philosopher-kings.",
  
  mencius: "Active in c. 372–289 BCE during the brutal Warring States period, Mencius was prompted by the rise of tyrannical Legalist statecraft and Yang Zhu's radical egoism. Defending Confucian humanism, Mencius argued passionately before warring dukes that human nature is innately good—possessing inborn sprouts of compassion, righteousness, propriety, and wisdom—and asserted that rulers who tyrannize their subjects forfeit the Mandate of Heaven.",
  
  aristotle: "Active in 384–322 BCE across Greece and Macedonia, Aristotle was prompted by the need to synthesize, systematize, and empirically investigate the natural world, moving beyond Plato's metaphysical separation of Forms. Founding the Lyceum, Aristotle created comprehensive frameworks for formal logic, biology, physics, virtue ethics (the golden mean), and political constitutions, arguing that human flourishing (eudaimonia) is realized through rational excellence in community.",
  
  zhuangzi: "Active in c. 369–286 BCE during the Warring States period in China, Zhuangzi was prompted by the rigid pedantry of rival philosophical sects and the dangerous absurdity of seeking political power in an age of treachery. Developing Daoist thought through whimsical parables and paradoxes, Zhuangzi celebrated spontaneous freedom, the equality of all perspectives (qiwulun), and joyful attunement with the boundless transformations of the Dao.",
  
  chanakya: "Active in c. 375–283 BCE in Ancient India, Chanakya (Kautilya) was prompted by the external threat of Alexander the Great's invasion and the corruption of the reigning Nanda Empire. Orchestrating the rise of the Maurya Empire under Chandragupta, Chanakya authored the Arthashastra, formulating an incisive science of political economy, state security, diplomacy (mandala theory), and realpolitik to forge a unified, resilient subcontinent.",
  
  epicurus: "Active in 341–270 BCE in Hellenistic Athens, Epicurus was prompted by the widespread existential anxiety, fear of divine punishment, and dread of death that consumed individuals following the dissolution of the Greek poleis. Opening his Garden to women and enslaved people, Epicurus formulated atomistic materialism and rational hedonism, teaching that true tranquility (ataraxia) arises from modest pleasures, philosophical friendship, and liberation from superstitious terror.",
  
  xunzi: "Active in c. 310–235 BCE in late Warring States China, Xunzi was prompted by the escalating violence and Mencius's optimistic view of human nature, which he considered dangerously naive. Xunzi argued that human nature is originally warped and selfish, requiring conscious deliberate effort (wei), rigorous ritual education (li), and external moral discipline to transform humans into virtuous, cooperative citizens.",
  
  hanfeizi: "Active in c. 280–233 BCE in Warring States China, Han Feizi was prompted by the impending military collapse of his home state of Han and the persistent failure of moralistic Confucian appeals to restrain greedy ministers. Synthesizing Legalism (Fajia), Han Feizi argued that successful governance requires neither virtue nor sentimentality, but clear written laws (fa), bureaucratic statecraft (shu), and unyielding sovereign power (shi).",
  
  epictetus: "Living in c. 50–135 CE across Hierapolis and Rome, Epictetus was prompted by his experiences as an enslaved person in Nero's imperial court and the precariousness of life under tyrannical Roman emperors. Teaching Stoic philosophy in exile, Epictetus formulated the dichotomy of control, demonstrating that human freedom and peace of mind depend entirely on distinguishing what is in our control (our judgments, impulses, desires) from what is not (external events, wealth, reputation, health).",

  // --- ERA II: Classical Statecraft, Scholasticism & Awakening ---
  nagarjuna: "Active in c. 150–250 CE in South India, Nagarjuna was prompted by dogmatic reifications within early Buddhist scholasticism (Abhidharma) and rival Brahmanical systems that threatened the Buddha's core teaching of dependent origination. Founding Madhyamaka (the Middle Way), Nagarjuna deployed rigorous reductio ad absurdum (prasanga) to establish sunyata (emptiness), proving that all entities lack independent intrinsic essence (svabhava) and liberating the mind from conceptual grasping.",

  plotinus: "Living in c. 204–270 CE in Roman Egypt and Rome, Plotinus was prompted by the spiritual crisis, philosophical fragmentation, and political decay of the 3rd-century Roman Empire. Synthesizing Platonism into Neoplatonism, Plotinus articulated a majestic cosmology where all reality emanates continuously from the transcendent One (to Hen) through divine Intellect (Nous) and Soul (Psyche), offering an intellectual and contemplative ascent to mystical union.",

  augustine: "Active in 354–430 CE in Roman North Africa (Hippo), Augustine was prompted by the catastrophic Visigothic sack of Rome in 410 CE, pagan accusations that Christianity caused the empire's downfall, and deep personal struggles with sin and Manichaean dualism. In The City of God and Confessions, Augustine synthesized Christian theology with Neoplatonism, articulating original sin, divine grace, predestination, and the enduring duality between the earthly city and the heavenly City of God.",

  shankaracharya: "Active in c. 788–820 CE across India, Adi Shankara was prompted by the fragmentation of Vedic traditions and the intellectual ascendance of Buddhist and Jain non-theistic philosophies. Traveling across India to engage rival scholars, Shankara systematized Advaita (Non-Dual) Vedanta, demonstrating through Upanishadic exegesis that the individual soul (Atman) is fundamentally identical with supreme metaphysical reality (Brahman), and that perceived duality is an illusion (maya).",

  al_farabi: "Active in c. 872–950 CE across Baghdad and Damascus, Al-Farabi (known in Islamic philosophy as 'The Second Teacher' after Aristotle) was prompted by sectarian strife and political fragmentation in the Abbasid Caliphate. Seeking to harmonize Islamic revelation with Platonic political philosophy and Aristotelian logic, Al-Farabi outlined the ideal Virtuous City (Al-Madina Al-Fadila), arguing that philosophical reason and prophetic religion convey the same ultimate truth through different modes.",

  avicenna: "Living in 980–1037 CE across Central Asia and Persia, Ibn Sina (Avicenna) was prompted by the need for an encyclopedic, logically rigorous synthesis of Aristotelian metaphysics, Neoplatonic cosmology, and Islamic monotheism. Formulating the famous 'Floating Man' thought experiment to prove the immateriality of consciousness, Avicenna distinguished between contingent existence and the Necessary Existent (Wajib al-Wujud), profoundly shaping Islamic, Jewish, and Christian scholastic thought.",

  alghazali: "Living in 1058–1111 CE across Baghdad, Damascus, and Tus, Al-Ghazali was prompted by a profound spiritual and epistemological crisis after mastering Islamic jurisprudence and philosophy, coming to view excessive rationalism as spiritually corrosive. In The Incoherence of the Philosophers and Deliverance from Error, Al-Ghazali critiqued Aristotelian metaphysics while integrating Sufi mystical experience into orthodox Sunni theology, revitalizing experiential faith.",

  averroes: "Active in 1126–1198 CE in Islamic Cordoba and Marrakesh, Ibn Rushd (Averroes) was prompted by Al-Ghazali's attack on philosophy and the rising tide of religious anti-intellectualism in Al-Andalus. Authoring authoritative commentaries on Aristotle and The Incoherence of the Incoherence, Averroes defended the harmony of faith and demonstrative philosophical reason, arguing that truth cannot contradict truth and igniting the Latin Renaissance.",

  maimonides: "Active in 1138–1204 CE across Cordoba, Fez, and Cairo, Moses Maimonides was prompted by Almohad religious persecution and the acute intellectual dilemma faced by educated Jews who struggled to reconcile biblical literalism with Aristotelian science. In The Guide for the Perplexed, Maimonides deployed negative theology (apophasis) and allegorical hermeneutics to demonstrate that true Judaism requires rigorous philosophical rationality.",

  aquinas: "Active in 1225–1274 CE in Paris and Italy, Thomas Aquinas was prompted by the rediscovery of Aristotle's natural philosophy, which university authorities initially feared would undermine Christian dogma. In his monumental Summa Theologiae, Aquinas achieved the definitive medieval synthesis of Christian revelation and Aristotelian philosophy, famously showing that grace does not destroy nature, but perfects it.",

  rumi: "Living in 1207–1273 CE across Balkh, Baghdad, Damascus, and Konya, Jalal al-Din Muhammad Rumi was prompted by the devastating Mongol cataclysm that annihilated cities across Eurasia, coupled with a life-transforming encounter with the wandering dervish Shams of Tabriz. Transmuting personal grief and cosmic dislocation into ecstatic Persian poetry (the Masnavi), Rumi established a universal philosophy of divine love, ego-dissolution (fana), and compassionate spiritual inclusion.",

  ibn_khaldun: "Active in 1332–1406 CE across Tunis, Fez, Granada, and Cairo, Ibn Khaldun was prompted by the catastrophic Black Death plague that decimated North Africa and the sudden, turbulent collapses of Islamic dynasties. In the Muqaddimah, Ibn Khaldun founded scientific sociology, economics, and critical historiography, formulating the concept of social solidarity (asabiyyah) and the cyclical rise and fall of civilizations.",

  // --- ERA III: Early Modern Rationalism, Enlightenment & Critique ---
  machiavelli: "Active in 1469–1527 in Renaissance Florence, Niccolo Machiavelli was prompted by the chronic foreign invasions, political betrayals, and devastating instability tearing Italy apart following the Medici restoration. Discarding medieval scholastic pieties about the idealized Christian ruler, Machiavelli authored The Prince to establish modern political realism, arguing that a leader must understand virtù, fortùna, and the harsh realities of power to protect the state.",

  descartes: "Active in 1596–1650 across France and the Netherlands, René Descartes was prompted by the collapse of Aristotelian scholastic physics during the Scientific Revolution and the paralyzing skepticism following Europe's bloody Wars of Religion. In Discourse on Method and Meditations, Descartes applied methodical doubt to dismantle all uncertain beliefs, discovering the bedrock foundation of human self-awareness in 'Cogito, ergo sum' and pioneering mind-body dualism.",

  hobbes: "Active in 1588–1679 during the English Civil War, Thomas Hobbes was prompted by the terror of violent death, regicide, and nationwide chaos. In Leviathan (1651), Hobbes articulated a mechanical materialist philosophy and social contract theory, demonstrating that without a supreme sovereign power to maintain peace, human life in the state of nature is 'solitary, poor, nasty, brutish, and short.'",

  locke: "Active in 1632–1704 in England during the Glorious Revolution, John Locke was prompted by authoritarian Stuart assertions of the divine right of kings and dogmatic scholastic innate-idea epistemology. In An Essay Concerning Human Understanding and Two Treatises of Government, Locke established modern empiricism (the mind as a blank slate / tabula rasa) and natural rights theory (life, liberty, property), laying the foundations for constitutional democracy and legitimate government by consent.",

  hume: "Active in 1711–1776 in Scotland during the Enlightenment, David Hume was prompted by dogmatic metaphysical claims, theological superstition, and unexamined rationalist assumptions about causality and identity. In An Enquiry Concerning Human Understanding and A Treatise of Human Nature, Hume radicalized empiricism, proving that causation is an inductive psychological habit rather than a logical necessity, dismantling the concept of a substantial self, and showing that 'reason is, and ought only to be the slave of the passions.'",

  kant: "Active in 1724–1804 in Königsberg, Prussia, Immanuel Kant was prompted into his revolutionary critical philosophy after Hume's skepticism 'interrupted his dogmatic slumber,' threatening to dismantle the certainty of both Newtonian physics and moral duty. In the Critique of Pure Reason, Kant enacted a Copernican revolution in philosophy, demonstrating that while all knowledge begins with experience, the human mind actively structures experience through synthetic a priori forms of space, time, and categories.",

  hegel: "Active in 1770–1831 across Germany, Georg Wilhelm Friedrich Hegel was prompted by the French Revolution, the Napoleonic transformation of Europe, and the fragmentation of German intellectual life. In Phenomenology of Spirit and Philosophy of Right, Hegel developed Absolute Idealism and the historical dialectic, demonstrating that human consciousness, culture, and institutions evolve through contradiction toward the realization of universal freedom.",

  // --- ERA IV: Late Modernity, Existentialism & Contemporary Horizons ---
  schopenhauer: "Active in 1788–1860 in Germany, Arthur Schopenhauer was prompted by the triumphalist, state-worshiping rationalism of Hegel and German Idealism, which he viewed as pompous academic delusion. In The World as Will and Representation, Schopenhauer synthesized Kantian critique with Vedic and Buddhist insights, arguing that the universe's ultimate underlying reality is a blind, striving, insatiable Will, and that salvation requires aesthetic contemplation and ascetic compassion.",

  mill: "Active in 1806–1873 in Victorian Britain, John Stuart Mill was prompted by the rise of mass industrial society, strict Benthamite utilitarianism, and the political disenfranchisement of working people and women. Authoring On Liberty and Utilitarianism, Mill formulated the harm principle, defended free speech, and co-championed women's equality in The Subjection of Women.",

  kierkegaard: "Active in 1813–1855 in Copenhagen, Søren Kierkegaard was prompted by the complacent, hypocritical nominal Christianity of the Danish state church and the abstract, depersonalizing philosophical system of Hegelianism. Writing under pseudonyms, Kierkegaard founded modern Christian existentialism, emphasizing radical individual choice, existential anxiety (angst), and the subjective 'leap of faith' in the face of the objective absurdity of the infinite.",

  marx: "Active in 1818–1883 across Germany, France, and Britain, Karl Marx was prompted by the horrific exploitation, child labor, and dehumanizing wage misery of the Industrial Revolution. Formulating historical materialism and surplus value theory in Das Kapital and The Communist Manifesto, Marx demonstrated that history is driven by class struggle and called for the revolutionary emancipation of the international working class.",

  nietzsche: "Active in 1844–1900 across Germany, Switzerland, and Italy, Friedrich Nietzsche was prompted by the profound spiritual and moral vacuum left by the 'death of God' in European civilization, coupled with the mediocrity of bourgeois conformism and ressentiment-driven moralities. Through dazzling aphorisms, Nietzsche diagnosed the crisis of nihilism, formulated the will to power, and called for the revaluation of all values and the emergence of the self-overcoming Übermensch.",

  marti: "Active in 1853–1895 in Cuba and across the Americas, José Martí was prompted by the brutality of Spanish colonial slavery and the imperial ambition of the United States toward Latin America. In Nuestra América and revolutionary organizing, Martí pioneered anti-imperialist humanism, racial equality, and cultural self-determination, dying in battle for Cuban independence.",

  dubois: "Active in 1868–1963 in the United States and Ghana, W.E.B. Du Bois was prompted by the violent terror of Jim Crow lynchings, legal segregation, and European colonial empires in Africa. In The Souls of Black Folk (1903) and Black Reconstruction, Du Bois formulated the concepts of 'the color line,' 'double-consciousness,' and Pan-African liberation, pioneering modern scientific sociology.",

  russell: "Active in 1872–1970 in Britain, Bertrand Russell was prompted by the paradoxes threatening mathematical foundations and the catastrophic slaughter of World War I. In Principia Mathematica, Russell founded modern analytic philosophy and mathematical logic, dedicating his long life to anti-war activism, nuclear disarmament, and scientific humanism.",

  wittgenstein: "Active in 1889–1951 in Vienna and Cambridge, Ludwig Wittgenstein was prompted in his youth by the need to establish the absolute logical limits of thought and language (Tractatus), and in his maturity by realizing that language is not a rigid mathematical calculus, but an organic, practical human activity. In Philosophical Investigations, Wittgenstein introduced 'language-games' and 'forms of life,' demonstrating that philosophical problems dissolve when language is understood within its concrete human use.",

  heidegger: "Active in 1889–1976 in Germany, Martin Heidegger was prompted by the total technological mechanization of modern life and Western philosophy's historic oblivion of the question of Being. In Being and Time (1927), Heidegger founded fundamental ontology and existential phenomenology, analyzing Dasein (Being-in-the-world), inauthenticity (Das Man), and Being-toward-death.",

  sartre: "Active in 1905–1980 in Paris, Jean-Paul Sartre was prompted by the catastrophic trauma of World War II, the horrors of fascist occupation, and the moral collapse of bourgeois European institutions. In Being and Nothingness and Existentialism is a Humanism, Sartre formulated radical atheistic existentialism, declaring that 'existence precedes essence,' that humans are 'condemned to be free,' and that attempting to escape moral responsibility constitutes inauthentic bad faith (mauvaise foi).",

  beauvoir: "Active in 1908–1986 in Paris, Simone de Beauvoir was prompted by the glaring exclusion of women's concrete lived experience from classical male existentialism and historical political discourse. In The Second Sex (1949), Beauvoir delivered the foundational work of modern feminist philosophy, famously asserting that 'one is not born, but rather becomes, a woman,' and diagnosing how patriarchal civilization has systematically defined woman as the contingent 'Other' relative to man as the absolute.",

  arendt: "Active in 1906–1975 in Germany and the United States, Hannah Arendt was prompted by the rise of Nazi and Stalinist totalitarianism, the Holocaust, and her own stateless refugee experience. In The Origins of Totalitarianism and The Human Condition, Arendt analyzed the destruction of political public space, the 'banality of evil' (Eichmann in Jerusalem), and the revolutionary human power of natality and political speech.",

  fanon: "Active in 1925–1961 across Martinique, France, and Algeria, Frantz Fanon was prompted by the violent psychological pathology of racism in French psychiatric hospitals and the armed struggle of the Algerian War of Independence. In Black Skin, White Masks and The Wretched of the Earth, Fanon provided the definitive clinical and political analysis of colonial dehumanization and decolonial liberation.",

  foucault: "Active in 1926–1984 in France, Michel Foucault was prompted by post-WWII disillusionment with traditional Marxist teleology and liberal humanist orthodoxies that obscured how modern institutions enforce control. Through genealogical and archaeological inquiries into madness, clinics, prisons, and sexuality, Foucault exposed how modern power functions not merely through sovereign violence, but diffusely through 'power-knowledge' networks, surveillance, and disciplinary biopolitics.",

  wiredu: "Active in 1931–2022 in Ghana and the United States, Kwasi Wiredu was prompted by the post-independence challenge of conceptual decolonization and the uncritical imposition of Western philosophical categories onto African intellectual traditions. In Philosophy and an African Culture and Cultural Universals and Particulars, Wiredu pioneered contemporary African analytic philosophy, examining Akan communal ontology, consensual democracy, and humanistic ethics.",

  dussel: "Active in 1934–2023 across Argentina and Mexico, Enrique Dussel was prompted by the historical reality of European colonial conquest, poverty, and state repression in Latin America. Founding the Philosophy of Liberation and the concept of Transmodernity, Dussel challenged Eurocentric philosophy from the perspective of the global Periphery and the victims of modernity.",

  contemporary_horizons: "Emerging in the late 20th and early 21st centuries, Contemporary Horizons is prompted by planetary climate disruption, the advent of artificial superintelligence, genetic editing, and global technofeudalism. Synthesizing AI alignment ethics, intergenerational environmental justice, and bioethics, this living frontier confronts existential risks to preserve conscious life, democratic agency, and human dignity on a fragile planet."
};

/**
 * Returns a rich, scholarly biographical catalyst introduction for any chapter.
 * If a tailored introduction exists in the dictionary, returns it.
 * Otherwise, dynamically synthesizes an authoritative 3-sentence introduction
 * articulating the thinker's era, the crises prompting their thought, and their breakthrough.
 */
export function getPhilosopherIntroduction(chapter: Chapter): string {
  if (PHILOSOPHER_INTRODUCTIONS[chapter.id]) {
    return PHILOSOPHER_INTRODUCTIONS[chapter.id];
  }

  // Dynamic scholarly synthesis for any philosopher across all epochs
  const eraInfo = chapter.era ? `Flourishing during ${chapter.era} in ${chapter.region || 'their historical homeland'}, ` : '';
  const context = chapter.historicalContext 
    ? chapter.historicalContext.replace(/^[A-Z][a-z]+ing\s+/i, '').replace(/\.$/, '')
    : 'turbulent societal shifts and unresolved metaphysical challenges';
  
  const promptSummary = chapter.summary ? chapter.summary.replace(/\.$/, '') : chapter.centralThinking;

  return `${eraInfo}${chapter.name} was prompted to develop their philosophy amidst ${context}. Responding to these urgent conditions, ${chapter.name} formulated a transformative framework: ${promptSummary}.`;
}

/**
 * Extended historical narrative for the dedicated right-pane Era Introduction view.
 */
export interface EraNarrative {
  timeframe: string;
  geographicScope: string;
  grandEssay: string;
  centralThemes: { title: string; description: string }[];
}

export const ERA_NARRATIVES: Record<number, EraNarrative> = {
  0: {
    timeframe: "c. 800–200 BCE",
    geographicScope: "Vedic South Asia • Zhou Dynasty China • Classical Greece",
    grandEssay: "The Axial Age represents one of the most extraordinary epochs in human intellectual history. Across three independent centers of civilization—the Gangetic plains of ancient India, the warring principalities of Zhou China, and the maritime poleis of the Aegean—thinkers simultaneously turned away from unreflective mythological conformity toward rigorous self-examination, ethical critique, and systematic metaphysical inquiry.\n\nFaced with violent state fragmentation, collapsing feudal dynasties, and the moral inadequacies of ritual sacrifice, axial sages formulated the enduring bedrock of global thought. In India, Upanishadic seers, Mahavira, and the Buddha sought liberation from suffering and the cycle of rebirth. In China, Laozi, Confucius, and Mozi pioneered humanistic, naturalistic, and strategic pathways to restore cosmic harmony and good governance. In Greece, Socrates, Plato, and Aristotle turned philosophical reason into an autonomous, rigorous discipline capable of interrogating truth, justice, and the nature of the cosmos.",
    centralThemes: [
      {
        title: "The Awakening of Critical Self-Awareness",
        description: "The transition from external mythological ritualism to internal moral conscience, individual psychological reflection, and ethical responsibility."
      },
      {
        title: "Cosmic Order & Ultimate Reality",
        description: "Formulating foundational cosmological concepts: Brahman/Atman in India, the nameless Dao and Tian in China, and Logos and the Forms in Greece."
      },
      {
        title: "Ethics Amidst Warfare & Political Decay",
        description: "Developing practical philosophies of statecraft, non-violence, virtue ethics, and justice to heal societies traumatized by endless interstate warfare."
      }
    ]
  },
  1: {
    timeframe: "c. 150 BCE – 1400 CE",
    geographicScope: "Eurasia • South Asia • East Asia • Islamic Near East • Medieval Europe",
    grandEssay: "Spanning more than fifteen centuries, Philosophical Era II witnessed the profound synthesis of classical philosophical traditions with transformative religious revelations across the Eurasian landmass. Far from an intellectual dark age, this era produced some of history's most sophisticated metaphysical, epistemological, and political treatises.\n\nIn South and East Asia, Mahayana Buddhism and Advaita Vedanta codified deep non-dualist and dialectical ontologies through thinkers like Nagarjuna and Adi Shankara. In the Mediterranean and Near East, Hellenistic philosophy engaged deeply with monotheistic revelation. The Islamic Golden Age in Baghdad, Damascus, and Cordoba became the intellectual capital of the world, where Al-Farabi, Avicenna, Al-Ghazali, and Averroes developed groundbreaking Aristotelian commentaries, medical sciences, and negative theologies. This cross-cultural intellectual momentum subsequently ignited the European high scholastic Renaissance, culminating in the monumental theological synthesis of Thomas Aquinas.",
    centralThemes: [
      {
        title: "Faith & Reason: The Great Synthesis",
        description: "Harmonizing revealed scriptural truth with rigorous Aristotelian and Neoplatonic logic and demonstrative philosophy across Islam, Judaism, and Christianity."
      },
      {
        title: "Emptiness, Non-Duality & Ultimate Consciousness",
        description: "Pioneering sophisticated process metaphysics (Madhyamaka sunyata) and absolute non-dual ontology (Advaita Vedanta) in classical Asian philosophy."
      },
      {
        title: "Scholastic Systematization & Preservation",
        description: "Building universities, madrasas, and monasteries that translated, preserved, debated, and expanded global classical knowledge."
      }
    ]
  },
  2: {
    timeframe: "1500–1850 CE",
    geographicScope: "Western Europe • The Atlantic World • Enlightenment Centers",
    grandEssay: "The Early Modern period shattered the scholastic consensus through the combined shocks of the Scientific Revolution, maritime global exploration, the Protestant Reformation, and devastating religious wars. As old authorities crumbled, philosophers faced an urgent epistemological challenge: on what certain foundation can human knowledge, moral obligation, and political legitimacy be rebuilt?\n\nFrom Machiavelli's realistic appraisal of power to Descartes' foundational doubt and 'Cogito, ergo sum', thinkers rebuilt philosophy from first principles. Continental rationalists (Descartes, Spinoza, Leibniz) sought mathematical certainty through pure reason, while British empiricists (Locke, Hume) grounded knowledge in sensory experience and observation. Political contract theorists (Hobbes, Locke, Rousseau) dismantled divine-right monarchy to birth constitutional rights. Finally, Immanuel Kant enacted a revolutionary synthesis, showing how the human mind actively shapes experience, while Mary Wollstonecraft demanded universal rational equality for women.",
    centralThemes: [
      {
        title: "The Epistemological Turn",
        description: "Prioritizing the question 'How do we know?' over 'What is?', dividing into Continental Rationalism, British Empiricism, and Kantian Transcendental Idealism."
      },
      {
        title: "Social Contract & Natural Rights",
        description: "Deriving political legitimacy from the consent of the governed, foundational human rights, and the rule of law rather than divine decree."
      },
      {
        title: "The Dawn of Universal Rights & Critique",
        description: "Subjecting tradition, ecclesiastical dogma, social prejudice, and gender subordination to the unrelenting light of universal human reason."
      }
    ]
  },
  3: {
    timeframe: "1850–Present",
    geographicScope: "Global • Europe • Americas • Contemporary International Horizons",
    grandEssay: "Late Modernity and the contemporary era confront the turbulent consequences of industrial capitalism, totalitarianism, two world wars, technological acceleration, and the collapse of grand metaphysical narratives. The era opened with the revolutionary 'masters of suspicion'—Marx, Nietzsche, and Freud—who exposed how ideology, will to power, and the unconscious secretly govern conscious belief.\n\nIn response to existential alienation and technological displacement, 20th-century philosophy fragmented into rich, competing movements. Existentialism (Kierkegaard, Sartre, Beauvoir) placed radical individual freedom and responsibility at the heart of existence. American Pragmatism (James, Dewey) judged truth by its practical fruits. Linguistic philosophy and ordinary language analysis (Wittgenstein) demystified philosophical puzzles. Post-structuralism (Foucault) unmasked the hidden nexus of power and institutional knowledge, opening ongoing frontiers in digital ethics, artificial intelligence, and environmental philosophy.",
    centralThemes: [
      {
        title: "Critique of Metanarratives & Ideology",
        description: "Interrogating historical teleology, bourgeois morality, linguistic traps, and institutional power relations."
      },
      {
        title: "Existential Freedom & Authenticity",
        description: "Confronting anxiety, the absurdity of existence, and the radical burden of self-creation without predefined metaphysical essences."
      },
      {
        title: "Language, Technology & Global Horizons",
        description: "Analyzing the limits of language games, the ethics of emerging technologies, biopolitics, and planetary ecological responsibility."
      }
    ]
  }
};
