/**
 * Arogya Jagruthi (ఆరోగ్య జాగృతి)
 * Early Health Warning Signs Awareness System for Rural Communities
 * Pure Vanilla JavaScript - Dual Language Content & Logic
 */

// Global Content Store (English and Telugu)
const content = {
  en: {
    meta: {
      title: "Arogya Jagruthi: Early Health Warning Signs Awareness System for Rural Communities",
      tagline: "Your friend for early health care",
      taglineTe: "ఆలస్యం చేయకండి, డాక్టర్ను కలవండి"
    },
    nav: {
      brandTitle: "Arogya Jagruthi",
      brandSub: "Health Awareness",
      links: [
        { href: "#warning-signs", text: "Warning Signs" },
        { href: "#emergency", text: "Emergency" },
        { href: "#myths-facts", text: "Myths & Facts" },
        { href: "#when-doctor", text: "Checklist" },
        { href: "#quiz", text: "Quiz" },
        { href: "#find-help", text: "Find Help" },
        { href: "#community", text: "Village Visit" }
      ],
      call108: "Call 108",
      langSwitchLabel: "తెలుగు"
    },
    hero: {
      badge: "Community Health Initiative",
      title: "Arogya Jagruthi",
      titleTelugu: "ఆరోగ్య జాగృతి",
      tagline: "Your friend for early health care",
      taglineSub: "Don't delay, visit a doctor early",
      message: "Don't ignore symptoms that last. See a qualified doctor early before a small issue becomes serious.",
      ctaPrimary: "Learn the Warning Signs",
      ctaEmergency: "Emergency Warning (108)",
      highlights: [
        "Purely Educational",
        "Free Health Advice: 104",
        "Emergency: 108"
      ]
    },
    warningSigns: {
      badge: "Do Not Ignore",
      title: "7 Crucial Early Warning Signs",
      subtitle: "If any of these conditions persist in you or your family members, do not wait. Seek advice from a qualified doctor.",
      actionLabel: "What to do:",
      actionAdvice: "Visit a qualified doctor at your nearest Primary Health Centre (PHC).",
      cards: [
        {
          id: "cough",
          title: "Continuous Cough (> 2 Weeks)",
          subtitle: "Coughing that lasts more than 14 days",
          lookLike: "A nagging dry or phlegm cough that does not subside with ordinary rest, sometimes accompanied by evening mild fever or chest discomfort.",
          whyIgnore: "A cough lasting over 2 weeks can indicate tuberculosis (TB), chronic chest infection, or other lung conditions that require specific lab testing.",
          actionText: "Visit a qualified doctor"
        },
        {
          id: "fever",
          title: "Prolonged or Repeated Fever",
          subtitle: "Fever continuing for more than a few days",
          lookLike: "Body temperature that remains elevated for multiple days, or fever that returns repeatedly despite taking ordinary fever tablets.",
          whyIgnore: "Unchecked fever could signal infectious diseases like malaria, typhoid, dengue, or other systemic infections requiring accurate blood tests.",
          actionText: "Visit a qualified doctor"
        },
        {
          id: "weakness",
          title: "Persistent Weakness & Tiredness",
          subtitle: "Severe fatigue with minimal activity",
          lookLike: "Feeling exhausted even after a full night's sleep, struggling to perform routine daily chores, or feeling dizzy and out of breath.",
          whyIgnore: "Continuous extreme tiredness is often an early sign of severe anaemia, nutritional deficiency, thyroid disorders, or diabetes.",
          actionText: "Visit a qualified doctor"
        },
        {
          id: "weight-loss",
          title: "Unexplained Weight Loss",
          subtitle: "Dropping weight without dieting or exercise",
          lookLike: "Clothes becoming noticeably loose over a few weeks or months without any change in diet, fasting, or hard physical labor.",
          whyIgnore: "Sudden unexplained loss of weight can be an early indicator of metabolic conditions, diabetes, digestive disorders, or chronic diseases.",
          actionText: "Visit a qualified doctor"
        },
        {
          id: "wound",
          title: "Non-Healing Wound or Sore",
          subtitle: "Cuts or ulcers that do not heal for weeks",
          lookLike: "A sore on the foot, leg, mouth, or skin that stays open, weeps fluid, or keeps recurring over several weeks.",
          whyIgnore: "Wounds that refuse to heal can point to uncontrolled blood sugar (diabetes), poor circulation, or skin conditions that need clinical care.",
          actionText: "Visit a qualified doctor"
        },
        {
          id: "pain",
          title: "Persistent Body or Abdominal Pain",
          subtitle: "Pain that lasts day after day",
          lookLike: "A dull, sharp, or continuous pain in the stomach, joints, back, or limbs that does not go away after adequate rest.",
          whyIgnore: "Masking constant pain with repeated painkillers from local shops can damage your kidneys and stomach while delaying the true diagnosis.",
          actionText: "Visit a qualified doctor"
        },
        {
          id: "appetite",
          title: "Persistent Loss of Appetite",
          subtitle: "No desire to eat food for many days",
          lookLike: "Feeling completely unwilling to eat meals, feeling full after just one bite, or feeling chronic nausea at the sight of food.",
          whyIgnore: "A prolonged drop in food intake leads to malnutrition, drops immunity, and may signify underlying stomach, liver, or chronic infections.",
          actionText: "Visit a qualified doctor"
        }
      ]
    },
    emergency: {
      badge: "Immediate Action Required",
      title: "Emergency Warning Signs",
      headline: "Do Not Wait! Every Minute Counts.",
      description: "If anyone around you suddenly displays any of these symptoms, do not give home remedies or wait for morning. Take them to the nearest hospital immediately.",
      signs: [
        {
          title: "Severe Chest Pain or Pressure",
          desc: "Crushing feeling in the chest, radiating to left arm, neck, or jaw, often accompanied by cold sweat."
        },
        {
          title: "Difficulty in Breathing",
          desc: "Gasping for air, extreme breathlessness while sitting quietly, or turning pale / bluish."
        },
        {
          title: "Fainting or Loss of Consciousness",
          desc: "Sudden collapse, unresponsiveness, confusion, or inability to wake up."
        },
        {
          title: "Sudden Weakness on One Side",
          desc: "Inability to lift one arm, drooping face on one side, or slurred, garbled speech (signs of stroke)."
        }
      ],
      actionBox: {
        text: "Go to the nearest government hospital immediately. Call 108 for free emergency ambulance support.",
        callButton: "Dial 108 Emergency Ambulance",
        telNumber: "tel:108"
      }
    },
    mythsFacts: {
      badge: "Knowledge Protects",
      title: "Myths vs Facts",
      subtitle: "Rural communities often hear traditional beliefs. Learn what is safe and when home remedies delay life-saving medical care.",
      flipInstruction: "Tap any card to reveal the medical fact",
      cards: [
        {
          number: "01",
          myth: "Myth: 'It is just a regular cough or fever, it will disappear by itself without seeing any doctor.'",
          fact: "Fact: While mild colds pass, any cough or fever persisting beyond 14 days can be tuberculosis (TB) or severe infection. Early checkup prevents transmission and damage.",
          takeaway: "Timely checkup saves families from long illness."
        },
        {
          number: "02",
          myth: "Myth: 'Buying random colorful pills from the neighborhood petty shop is faster and cheaper than visiting the PHC.'",
          fact: "Fact: Local over-the-counter painkillers hide the pain without curing the cause. Inappropriate antibiotic use builds resistance and harms organs.",
          takeaway: "Consult a qualified medical doctor at the government PHC for free."
        },
        {
          number: "03",
          myth: "Myth: 'Non-scientific herbal pastes and spiritual rituals will cure deep wounds, jaundice, and snakebites.'",
          fact: "Fact: Applying unsterile pastes to open wounds causes dangerous tetanus and gangrene. Snakebites and jaundice require prompt hospital anti-venom and scientific care.",
          takeaway: "Traditional faith should never replace immediate medical attention."
        },
        {
          number: "04",
          myth: "Myth: 'Frequent painkiller tablets can be taken daily like candy for joint and body aches.'",
          fact: "Fact: Habitual self-administration of pain pills without clinical supervision can cause kidney damage and stomach ulcers.",
          takeaway: "Treat the cause of pain, don't poison your kidneys."
        },
        {
          number: "05",
          myth: "Myth: 'Visiting a hospital is always too expensive and terrifying for poor families.'",
          fact: "Fact: Government Primary Health Centres (PHCs) and Community Health Centres (CHCs) provide free consultations, diagnostic tests, and medicines under government health schemes.",
          takeaway: "Early visits at the PHC cost nothing; late visits in emergencies cost much more."
        }
      ]
    },
    whySelfMedicate: {
      badge: "Crucial Caution",
      title: "Why You Must Not Self-Medicate",
      subtitle: "Taking medicines on your own or on shopkeeper recommendations is dangerous.",
      intro: "When you feel sick, buying tablets from a local shop without a doctor's prescription might provide temporary relief from pain or fever. However, this is a dangerous trap.",
      points: [
        {
          title: "Suppresses & Masks Warning Signals",
          desc: "Pain and fever are body alarms telling you something is wrong. Painkillers switch off the alarm, but the fire inside continues to burn."
        },
        {
          title: "Delays Real Clinical Diagnosis",
          desc: "By temporarily feeling better, patients postpone visiting the hospital for weeks. When they finally go, the illness has often advanced to a critical stage."
        },
        {
          title: "Danger of Wrong Antibiotic Usage",
          desc: "Taking partial doses of antibiotics without knowing the bacterial strain creates drug resistance, making future infections far harder to cure."
        },
        {
          title: "Irreversible Organ Toxicity",
          desc: "Unsupervised painkillers and unverified powders can quietly cause kidney damage, liver damage, and internal stomach bleeding."
        }
      ],
      summaryBox: "Always consult your local ASHA worker, ANM, or PHC medical officer before taking any medication."
    },
    whenDoctor: {
      badge: "Quick Decision Tool",
      title: "When to Go to the Doctor: Simple Checklist",
      subtitle: "Tick off your observations. If any item applies, plan a visit to your nearest health centre this week.",
      checklist: [
        {
          label: "Any symptom lasting longer than 10 to 14 days",
          sub: "Cough, low-grade fever, sore throat, or tiredness that doesn't improve with regular rest."
        },
        {
          label: "Symptoms gradually worsening instead of improving",
          sub: "Each day you feel slightly weaker, or the pain area expands."
        },
        {
          label: "Inability to eat, sleep, or perform daily village work",
          sub: "When normal daily routines and farming work are disrupted by your physical condition."
        },
        {
          label: "Unexplained changes in body weight or appetite",
          sub: "Noticeable loss of flesh, clothes becoming baggy, or refusing regular food."
        },
        {
          label: "A cut, boil, or skin patch that remains red, swelling, or open",
          sub: "Particularly dangerous on feet or lower limbs of elders and diabetics."
        },
        {
          label: "Abnormal swelling in the feet, face, or abdomen",
          sub: "Puffiness when pressing the shin or sudden tightness in waistline."
        }
      ],
      adviceCard: {
        title: "Rule of Thumb for Rural Families:",
        text: "'If it hasn't gone away in two weeks, do not wait for a third week. Visit your Primary Health Centre (PHC).'"
      }
    },
    quiz: {
      badge: "Test Your Understanding",
      title: "Community Health Awareness Quiz",
      subtitle: "Answer these 5 simple questions to see how well you know early warning signs.",
      progressText: "Question {current} of {total}",
      nextBtn: "Next",
      seeResultBtn: "See Result",
      scoreTitle: "Quiz Completed!",
      retakeBtn: "Try Again",
      correctTitle: "✔ Correct Answer!",
      wrongTitle: "✖ Not quite right.",
      questions: [
        {
          q: "If someone in your family has a continuous cough for more than 2 weeks, what is the best step?",
          options: [
            "Wait for 2 more months to see if it stops",
            "Take herbal juice and skip seeing any doctor",
            "Visit the nearest PHC / qualified doctor for testing",
            "Buy random cough syrups from the grocery store"
          ],
          correct: 2,
          explanation: "A cough lasting over 2 weeks requires a medical evaluation to rule out tuberculosis (TB) and chronic respiratory infections."
        },
        {
          q: "What should you do immediately if someone experiences sudden severe chest pain and breathlessness?",
          options: [
            "Give them tea and wait for the morning",
            "Call 108 and rush them to the nearest hospital right away",
            "Tell them to walk around in the field",
            "Apply hot balm on their chest and sleep"
          ],
          correct: 1,
          explanation: "Severe chest pain and breathlessness are medical emergencies that could be a heart attack. Every minute is vital; call 108 immediately."
        },
        {
          q: "Why is buying medicine from a local shop without a doctor's prescription harmful?",
          options: [
            "It saves time so it is always good",
            "It only cures the disease faster",
            "It masks the symptoms, delaying proper diagnosis and risking organ damage",
            "There is no harm at all"
          ],
          correct: 2,
          explanation: "Self-medication can hide critical symptoms, postpone the real cure, and damage internal organs like kidneys."
        },
        {
          q: "A small sore or wound on the foot has not healed for over three weeks. What does this mean?",
          options: [
            "It is completely normal and can be ignored",
            "It requires immediate doctor evaluation as it could signal diabetes or infection",
            "Tie mud or cow dung on it",
            "Wash only with plain water and wait six months"
          ],
          correct: 1,
          explanation: "Non-healing wounds are a common indicator of high blood sugar (diabetes) or vascular problems and need sterile clinical care."
        },
        {
          q: "Which free government helpline can rural citizens dial for telephone medical guidance and advice in Andhra Pradesh?",
          options: [
            "Dial 100",
            "Dial 104",
            "Dial 112",
            "Dial 101"
          ],
          correct: 1,
          explanation: "104 is the state medical helpline providing free telephonic healthcare advice, while 108 is for emergency ambulance response."
        }
      ],
      feedbackHigh: "Outstanding! You are a true Health Champion for your community. Share this knowledge with your neighbors!",
      feedbackMed: "Good effort! You know key warning signs, but remember: never hesitate to consult a doctor at the PHC.",
      feedbackLow: "Thank you for trying! Review the 7 warning signs above to keep yourself and your family safe."
    },
    findHelp: {
      badge: "Access Healthcare",
      title: "Where to Find Help in Your Area",
      subtitle: "Government healthcare facilities are established to serve rural citizens at zero or minimal cost.",
      facilities: [
        {
          type: "Primary Care",
          title: "Primary Health Centre (PHC)",
          name: "Primary Health Centre (PHC), Revidi, Padmanabham",
          timings: "9:00 AM – 4:00 PM (Every working day)",
          services: "Free medical consultation, basic blood tests, maternal checkups, and free essential medicines.",
          location: "Located at Mandal Headquarters, Padmanabham.",
          note: "Please confirm details with your ASHA worker"
        },
        {
          type: "Secondary Care",
          title: "Community Health Centre (CHC) / Govt Hospital",
          name: "Community Health Centre (CHC), Bheemunipatnam",
          timings: "24x7 Emergency & Inpatient Services",
          services: "Doctor specialists, ultrasound, X-ray, lab testing, maternity ward, and emergency stabilization.",
          location: "Nearest Sub-divisional Hospital / District Center.",
          note: "Please confirm details with your ASHA worker"
        }
      ],
      helplines: [
        {
          number: "104",
          badge: "Toll-Free Health Advice",
          title: "104 Health Information Helpline",
          desc: "Call for free medical advice from doctors, disease information, counseling, and government health scheme guidance.",
          buttonText: "Dial 104 Helpline",
          actionUrl: "tel:104"
        },
        {
          number: "108",
          badge: "Emergency Ambulance 24x7",
          title: "108 Free Emergency Service",
          desc: "Immediate ambulance dispatch for heart attacks, accidents, severe breathing distress, poisoning, and maternity emergencies.",
          buttonText: "Call 108 Ambulance",
          actionUrl: "tel:108"
        }
      ],
      ashaCard: {
        title: "Meet Your Village ASHA Worker & ANM",
        text: "Your village Accredited Social Health Activist (ASHA) and Auxiliary Nurse Midwife (ANM) visit households regularly. They can guide you directly to the PHC and assist with appointments."
      }
    },
    community: {
      badge: "Grassroots Outreach",
      title: "Our Community Activity",
      subtitle: "Bringing early healthcare awareness directly to rural doorsteps.",
      villageBadge: "Village Focus",
      villageName: "Padmanabham Village",
      villageDistrict: "Visakhapatnam District, Andhra Pradesh",
      villageSummary: "Our awareness campaign engages local residents, women's self-help groups, and rural elders in Padmanabham to recognize vital early health warning signs and promote PHC visits over risky self-medication.",
      stats: [
        {
          id: "peopleReached",
          label: "People Reached",
          value: "20+"
        },
        {
          id: "visitDate",
          label: "Date of Visit",
          value: "29 June 2026"
        },
        {
          id: "healthWorkers",
          label: "Healthcare Personnel Interacted",
          value: "2"
        }
      ],
      galleryTitle: "Field Visit Glimpses",
      galleryNote: "Photographs from our on-ground community interaction in Padmanabham village.",
      photos: [
        {
          src: "images/visit1.jpg",
          alt: "Interacting with local healthcare personnel",
          caption: "Interacting with local healthcare personnel"
        },
        {
          src: "images/visit2.jpg",
          alt: "Awareness session in the village",
          caption: "Awareness session in the village"
        },
        {
          src: "images/visit3.jpg",
          alt: "Community members learning about warning signs",
          caption: "Community members learning about warning signs"
        },
        {
          src: "images/visit4.jpg",
          alt: "Interactive discussion on early diagnosis and timely care",
          caption: "Interactive discussion on early diagnosis and timely care"
        }
      ],
      placeholderNote: "Click or tap any photo to view in full size."
    },
    footer: {
      disclaimerHeading: "Important Medical Disclaimer",
      disclaimerText: "This website is created purely for educational and public health awareness purposes for rural communities. It does NOT diagnose diseases, predict medical outcomes, check symptoms, or suggest medications or treatments. Always consult a qualified medical professional for health concerns.",
      creditsTitle: "Project Initiative",
      teamBadge: "Team No. 6 · HealthFirst",
      collegeName: "Lendi Institute of Engineering and Technology",
      guideHeading: "Project Guide",
      guideName: "P. Venkata Satya Sri",
      teamHeading: "Team Members",
      teamList: "Meesala Veda Gayatri, Nallabanda Manideep, Nammi Sruthi, Neteti Asha, Nithin Pyla, Oruganti Sai Mani Keerthana, Palaparthi Pavani, Pampana Sai Teja",
      members: [
        { name: "Meesala Veda Gayatri", initials: "MVG" },
        { name: "Nallabanda Manideep", initials: "NM" },
        { name: "Nammi Sruthi", initials: "NS" },
        { name: "Neteti Asha", initials: "NA" },
        { name: "Nithin Pyla", initials: "NP" },
        { name: "Oruganti Sai Mani Keerthana", initials: "OSMK" },
        { name: "Palaparthi Pavani", initials: "PP" },
        { name: "Pampana Sai Teja", initials: "PST" }
      ],
      copyright: "Arogya Jagruthi Community Health Awareness Initiative. Designed for rural Andhra Pradesh."
    }
  },

  te: {
    meta: {
      title: "ఆరోగ్య జాగృతి | ముందస్తు ఆరోగ్య హెచ్చరిక సంకేతాల అవగాహన",
      tagline: "ఆలస్యం చేయకండి, డాక్టర్ను కలవండి",
      taglineTe: "ఆరోగ్య జాగృతి"
    },
    nav: {
      brandTitle: "ఆరోగ్య జాగృతి",
      brandSub: "ఆరోగ్య అవగాహన",
      links: [
        { href: "#warning-signs", text: "హెచ్చరిక సంకేతాలు" },
        { href: "#emergency", text: "అత్యవసరం" },
        { href: "#myths-facts", text: "అపోహలు & నిజాలు" },
        { href: "#when-doctor", text: "చెక్‌లిస్ట్" },
        { href: "#quiz", text: "క్విజ్" },
        { href: "#find-help", text: "సహాయం పొందండి" },
        { href: "#community", text: "గ్రామ సందర్శన" }
      ],
      call108: "108 కి కాల్ చేయండి",
      langSwitchLabel: "English"
    },
    hero: {
      badge: "గ్రామీణ ఆరోగ్య చైతన్య కార్యక్రమం",
      title: "ఆరోగ్య జాగృతి",
      titleTelugu: "Arogya Jagruthi",
      tagline: "ఆలస్యం చేయకండి, డాక్టర్ను కలవండి",
      taglineSub: "ముందస్తు వైద్యం కోసం మీ నమ్మకమైన జాగృతి",
      message: "ఎక్కువ రోజులు ఉండే రోగ లక్షణాలను ఏమాత్రం నిర్లక్ష్యం చేయకండి. చిన్న సమస్య పెద్దది కాకముందే అర్హత కలిగిన డాక్టరును సంప్రదించండి.",
      ctaPrimary: "హెచ్చరిక సంకేతాలను తెలుసుకోండి",
      ctaEmergency: "అత్యవసర హెచ్చరిక (108)",
      highlights: [
        "కేవలం ప్రజారోగ్య అవగాహన కొరకు",
        "ఉచిత వైద్య సలహా: 104",
        "అత్యవసర అంబులెన్స్: 108"
      ]
    },
    warningSigns: {
      badge: "నిర్లక్ష్యం చేయవద్దు",
      title: "7 ముఖ్యమైన ముందస్తు హెచ్చరిక సంకేతాలు",
      subtitle: "మీలో లేదా మీ కుటుంబ సభ్యులలో ఈ క్రింది లక్షణాలు ఎక్కువ రోజులు కనిపిస్తే ఆలస్యం చేయకుండా వెంటనే డాక్టర్ వద్దకు వెళ్ళండి.",
      actionLabel: "ఏం చేయాలి:",
      actionAdvice: "మీ సమీప ప్రాథమిక ఆరోగ్య కేంద్రం (PHC) లో అర్హత కలిగిన డాక్టరును సంప్రదించండి.",
      cards: [
        {
          id: "cough",
          title: "2 వారాలకు మించి నిరంతర దగ్గు",
          subtitle: "14 రోజుల కంటే ఎక్కువ కాలం ఉండే దగ్గు",
          lookLike: "సాధారణ విశ్రాంతి లేదా వేడి నీటితో తగ్గని పొడి దగ్గు లేదా కఫం దగ్గు. సాయంత్రం వేళల్లో స్వల్ప జ్వరం లేదా ఛాతీలో అసౌకర్యం ఉండవచ్చు.",
          whyIgnore: "రెండు వారాలకు మించిన దగ్గు క్షయవ్యాధి (టీబీ) లేదా తీవ్రమైన ఊపిరితిత్తుల సంక్రమణకు సంకేతం కావచ్చు. వైద్య పరీక్షలు తప్పనిసరి.",
          actionText: "అర్హత కలిగిన డాక్టర్ను కలవండి"
        },
        {
          id: "fever",
          title: "ఎక్కువ రోజులు తగ్గని జ్వరం",
          subtitle: "చాలా రోజులు కొనసాగే లేదా మళ్లీ మళ్లీ వచ్చే జ్వరం",
          lookLike: "చాలా రోజుల పాటు శరీర ఉష్ణోగ్రత తగ్గకపోవడం లేదా జ్వరం మాత్రలు వేసుకున్నప్పుడు తగ్గి మళ్లీ తిరగబెట్టడం.",
          whyIgnore: "తగ్గని జ్వరం మలేరియా, టైఫాయిడ్, డెంగ్యూ లేదా శరీరంలో ఇతర తీవ్రమైన ఇన్ఫెక్షన్లకు సంకేతం కావచ్చు. రక్త పరీక్షలు అవసరం.",
          actionText: "అర్హత కలిగిన డాక్టర్ను కలవండి"
        },
        {
          id: "weakness",
          title: "నిరంతర బలహీనత లేదా విపరీతమైన అలసట",
          subtitle: "చిన్న పని చేసినా ఒంట్లో శక్తి లేకపోవడం",
          lookLike: "పూర్తిగా నిద్రపోయినా విశ్రాంతి తీసుకున్నా కూడా నీరసం తగ్గకపోవడం, రోజువారీ పనులు చేసుకోలేకపోవడం మరియు కళ్ళు తిరగడం.",
          whyIgnore: "నిరంతర అలసట రక్తహీనత (ఎనీమియా), పోషకాహార లోపం, థైరాయిడ్ సమస్యలు లేదా మధుమేహానికి (షుగర్) ముందస్తు హెచ్చరిక కావచ్చు.",
          actionText: "అర్హత కలిగిన డాక్టర్ను కలవండి"
        },
        {
          id: "weight-loss",
          title: "కారణం లేకుండా బరువు తగ్గడం",
          subtitle: "ఎలాంటి డైటింగ్ లేదా శ్రమ లేకుండా బరువు తగ్గడం",
          lookLike: "ఆహారం తగ్గించకుండానే కొద్ది వారాల్లో బట్టలు వదులైపోవడం, శరీరం కృశించిపోవడం లేదా శరీరం పీలగా మారడం.",
          whyIgnore: "కారణం లేకుండా అకస్మాత్తుగా బరువు తగ్గడం మధుమేహం, జీర్ణకోశ సమస్యలు లేదా ఇతర దీర్ఘకాలిక వ్యాధుల ప్రారంభ లక్షణం కావచ్చు.",
          actionText: "అర్హత కలిగిన డాక్టర్ను కలవండి"
        },
        {
          id: "wound",
          title: "చాలా కాలం మానని పుండు లేదా గాయం",
          subtitle: "వారాలు గడిచినా మానని చర్మ గాయాలు లేదా పుండ్లు",
          lookLike: "పాదాలు, కాళ్ళు, నోరు లేదా చర్మంపై ఏర్పడిన పుండు లేదా గాయం ఎంతకీ మానకుండా చీము లేదా రసి కారుతూ ఉండటం.",
          whyIgnore: "మానని పుండ్లు నియంత్రణలో లేని రక్తంలో చక్కెర (మధుమేహం/షుగర్) లేదా రక్త ప్రసరణ లోపాలకు ప్రధాన సూచిక. ఇన్ఫెక్షన్ ప్రమాదం ఎక్కువ.",
          actionText: "అర్హత కలిగిన డాక్టర్ను కలవండి"
        },
        {
          id: "pain",
          title: "శరీరంలో ఎడతెగని నొప్పులు",
          subtitle: "రోజూ వేధించే కడుపు లేదా శరీర నొప్పులు",
          lookLike: "కడుపులో, కీళ్ళలో, నడుములో లేదా కాళ్లలో విశ్రాంతి తీసుకున్నా తగ్గకుండా నిరంతరం కొనసాగే మొద్దుబారిన లేదా తీవ్రమైన నొప్పి.",
          whyIgnore: "మెడికల్ షాపుల్లో నొప్పి మాత్రలు (పెయిన్ కిల్లర్స్) వేసుకుని నొప్పిని అణచివేస్తే కిడ్నీలు దెబ్బతింటాయి మరియు అసలు రోగం బయటపడదు.",
          actionText: "అర్హత కలిగిన డాక్టర్ను కలవండి"
        },
        {
          id: "appetite",
          title: "ఆకలి పూర్తిగా మందగించడం",
          subtitle: "చాలా రోజుల పాటు ఏమీ తినాలనిపించకపోవడం",
          lookLike: "ఆహారం పట్ల ఏమాత్రం ఆసక్తి లేకపోవడం, ఒక ముద్ద తిన్నా కడుపు నిండిపోయినట్లు అనిపించడం లేదా అన్నం చూస్తేనే వికారం కలగడం.",
          whyIgnore: "ఆకలి లేకపోవడం వల్ల రోగనిరోధక శక్తి తగ్గిపోతుంది. ఇది కాలేయం (లివర్), జీర్ణాశయం లేదా ఇన్ఫెక్షన్ల హెచ్చరిక కావచ్చు.",
          actionText: "అర్హత కలిగిన డాక్టర్ను కలవండి"
        }
      ]
    },
    emergency: {
      badge: "తక్షణ చర్య అత్యవసరం",
      title: "అత్యవసర హెచ్చరిక సంకేతాలు",
      headline: "ఆలస్యం చేయవద్దు! ప్రతి నిమిషం విలువైనది.",
      description: "మీ చుట్టుపక్కల ఎవరికైనా ఈ క్రింది లక్షణాలు అకస్మాత్తుగా కనిపిస్తే, ఇంటి చిట్కాలతో సమయం వృధా చేయకండి. వెంటనే సమీపంలోని ఆసుపత్రికి తరలించండి.",
      signs: [
        {
          title: "ఛాతీలో తీవ్రమైన నొప్పి లేదా ఒత్తిడి",
          desc: "గుండెపై బండరాయి పెట్టినట్లుగా ఛాతీ పిండేస్తున్న నొప్పి, ఎడమ చేయి, మెడ లేదా దవడకు నొప్పి పాకడం, చల్లని చెమటలు పట్టడం."
        },
        {
          title: "శ్వాస తీసుకోవడంలో తీవ్ర ఇబ్బంది",
          desc: "ఊపిరి ఆడకపోవడం, కూర్చున్నా ఆయాసం రావడం, ముఖం లేదా పెదవులు నీలం రంగులోకి మారడం."
        },
        {
          title: "స్పృహ తప్పి పడిపోవడం / మూర్ఛ",
          desc: "అకస్మాత్తుగా స్పృహ కోల్పోవడం, పిలిచినా పలకకపోవడం లేదా తల తిరిగి కుప్పకూలడం."
        },
        {
          title: "శరీరంలో ఒక వైపు అకస్మాత్తుగా బలహీనత",
          desc: "చేయి పైకి ఎత్తలేకపోవడం, మూతి ఒక పక్కకు వంకరపోవడం లేదా మాట ముద్దగా రావడం (పక్షవాతం లక్షణాలు)."
        }
      ],
      actionBox: {
        text: "వెంటనే సమీపంలోని ప్రభుత్వ ఆసుపత్రికి వెళ్ళండి. ఉచిత అంబులెన్స్ కోసం 108 కి కాల్ చేయండి.",
        callButton: "108 ఉచిత అంబులెన్స్ కు కాల్ చేయండి",
        telNumber: "tel:108"
      }
    },
    mythsFacts: {
      badge: "అవగాహనే శ్రీరామరక్ష",
      title: "అపోహలు vs వాస్తవాలు",
      subtitle: "గ్రామాల్లో తరచూ వినిపించే తప్పుడు నమ్మకాలు ఏమిటి? సరైన వైద్య వాస్తవాలు ఏమిటి? తెలుసుకోండి.",
      flipInstruction: "నిజం తెలుసుకోవడానికి కార్డుపై తాకండి (టాప్ చేయండి)",
      cards: [
        {
          number: "01",
          myth: "అపోహ: 'ఇది మామూలు దగ్గు లేదా జ్వరమే, డాక్టర్ వద్దకు వెళ్లకుండానే దానంతట అదే తగ్గిపోతుంది.'",
          fact: "వాస్తవం: సాధారణ జలుబు కొన్ని రోజుల్లో తగ్గుతుంది. కానీ 14 రోజులు దాటినా తగ్గకపోతే టీబీ లేదా తీవ్రమైన ఇన్ఫెక్షన్ కావచ్చు. ముందస్తు పరీక్షలు ప్రాణాలు కాపాడతాయి.",
          takeaway: "సకాలంలో పరీక్షలు చేయించుకోవడం వల్ల కుటుంబం సురక్షితంగా ఉంటుంది."
        },
        {
          number: "02",
          myth: "అపోహ: 'పీహెచ్‌సీకి వెళ్లడం కంటే పక్కనే ఉన్న చిన్న షాపులో రంగురంగుల మాత్రలు కొనుక్కోవడం సులభం.'",
          fact: "వాస్తవం: డాక్టర్ చీటీ లేకుండా వేసుకునే మాత్రలు నొప్పిని తాత్కాలికంగా దాచిపెడతాయి. వ్యాధి ముదిరిపోతుంది మరియు తప్పుడు యాంటీబయాటిక్స్ శరీరానికి హాని చేస్తాయి.",
          takeaway: "ప్రభుత్వ పీహెచ్‌సీలో అర్హత కలిగిన డాక్టరును ఉచితంగా సంప్రదించండి."
        },
        {
          number: "03",
          myth: "అపోహ: 'నాటు వైద్యం పసర్లు, తాయెత్తులు పాముకాటును, పచ్చకామెర్లను, పాత పుండ్లను పూర్తిగా నయం చేస్తాయి.'",
          fact: "వాస్తవం: శాస్త్రీయ ఆధారం లేని పసర్లు పుండ్లకు రాస్తే ధనుర్వాతం (టెటానస్), సెప్సిస్ వస్తాయి. పాముకాటుకు ఆసుపత్రిలో యాంటీ-వీనమ్ ఇంజెక్షన్ మాత్రమే ప్రాణం కాపాడుతుంది.",
          takeaway: "నమ్మకాల పేరుతో అత్యవసర వైద్యాన్ని ఎప్పుడూ ఆలస్యం చేయకండి."
        },
        {
          number: "04",
          myth: "అపోహ: 'కీళ్ల నొప్పులకు, ఒంటి నొప్పులకు మెడికల్ షాపులో దొరికే పెయిన్ కిల్లర్లను రోజూ మిఠాయిల్లా మింగవచ్చు.'",
          fact: "వాస్తవం: డాక్టర్ పర్యవేక్షణ లేకుండా నిరంతరం నొప్పి మాత్రలు వాడటం కిడ్నీలను దెబ్బతీసి, కడుపులో పుండ్లు (అల్సర్లు) ఏర్పడటానికి కారణం కావచ్చు.",
          takeaway: "నొప్పికి గల అసలు కారణాన్ని నయం చేసుకోండి; కిడ్నీలను పాడుచేసుకోకండి."
        },
        {
          number: "05",
          myth: "అపోహ: 'ఆసుపత్రికి వెళ్తే పేదవారికి ఖర్చులు తడిసి మోపెడవుతాయి, అందుకే వెళ్లకూడదు.'",
          fact: "వాస్తవం: ప్రభుత్వ ప్రాథమిక ఆరోగ్య కేంద్రాలు (PHC), ఏరియా ఆసుపత్రులలో పరీక్షలు, డాక్టర్ సలహాలు, మందులు పూర్తిగా ఉచితం.",
          takeaway: "ముందుగా వెళ్తే ఉచితంగా నయమవుతుంది; రోగం ముదిరితేనే ఖర్చు, ప్రమాదం ఎక్కువ."
        }
      ]
    },
    whySelfMedicate: {
      badge: "అతి ముఖ్యమైన హెచ్చరిక",
      title: "సొంత వైద్యం ఎందుకు చేసుకోకూడదు?",
      subtitle: "సొంతంగా లేదా షాపు వారి మాటలు విని మందులు వాడటం ప్రాణాలకే ప్రమాదకరం.",
      intro: "అనారోగ్యంగా ఉన్నప్పుడు డాక్టర్ ప్రిస్క్రిప్షన్ లేకుండా లోకల్ షాపు నుండి మాత్రలు తెచ్చుకుని వేసుకోవడం ప్రమాదకరమైన ఉచ్చు.",
      points: [
        {
          title: "హెచ్చరిక సంకేతాలను తాత్కాలికంగా దాచేస్తుంది",
          desc: "నొప్పి, జ్వరం అనేవి శరీరంలో ఏదో లోపం ఉందని తెలిపే సైరన్ లాంటివి. నొప్పి మాత్రలు ఆ సైరన్‌ను మాత్రమే ఆపుతాయి, కానీ లోపల ఉన్న రోగం ముదురుతూనే ఉంటుంది."
        },
        {
          title: "సరైన రోగ నిర్ధారణ ఆలస్యం అవుతుంది",
          desc: "తాత్కాలిక ఉపశమనం వల్ల రోగి ఆసుపత్రికి వెళ్లకుండా వారాల తరబడి కాలయాపన చేస్తారు. తీరా డాక్టర్ వద్దకు వెళ్లేసరికి వ్యాధి ప్రమాదకర దశకు చేరుకుంటుంది."
        },
        {
          title: "తప్పుడు యాంటీబయాటిక్స్ వాడే ముప్పు",
          desc: "అవసరం లేకున్నా లేదా సగం మోతాదులో యాంటీబయాటిక్స్ వేసుకుంటే శరీరంలో బ్యాక్టీరియా మొండిగా మారుతుంది. భవిష్యత్తులో నిజమైన మందులు పనిచేయవు."
        },
        {
          title: "కిడ్నీలు మరియు కాలేయం దెబ్బతినే ప్రమాదం",
          desc: "నియంత్రణ లేని పెయిన్ కిల్లర్స్ మరియు తెలియని మందులు మూత్రపిండాలు (కిడ్నీలు), కాలేయం దెబ్బతినడానికి మరియు కడుపులో అంతర్గత రక్తస్రావానికి దారితీయవచ్చు."
        }
      ],
      summaryBox: "ఏ మందైనా వాడే ముందు మీ గ్రామ ఆశా కార్యకర్త లేదా పీహెచ్‌సీ డాక్టరును తప్పనిసరిగా సంప్రదించండి."
    },
    whenDoctor: {
      badge: "నిర్ణయ మార్గదర్శిని",
      title: "ఎప్పుడు డాక్టర్ వద్దకు వెళ్ళాలి? సరళమైన చెక్‌లిస్ట్",
      subtitle: "మీ ఆరోగ్య పరిస్థితిని గమనించండి. క్రింది వాటిలో ఏదైనా ఉంటే, ఈ వారమే సమీప ఆరోగ్య కేంద్రానికి వెళ్ళండి.",
      checklist: [
        {
          label: "ఏదైనా లక్షణం 10 నుండి 14 రోజులకు మించి కొనసాగితే",
          sub: "విశ్రాంతి తీసుకున్నా తగ్గని దగ్గు, స్వల్ప జ్వరం, గొంతు నొప్పి లేదా నీరసం."
        },
        {
          label: "రోజురోజుకూ పరిస్థితి మెరుగుపడకపోగా మరింత దిగజారుతుంటే",
          sub: "ప్రతిరోజూ నీరసం పెరుగుతుండటం లేదా నొప్పి విస్తరిస్తుండటం."
        },
        {
          label: "భోజనం చేయలేకపోవడం లేదా రోజూవారీ పనులు చేయలేకపోవడం",
          sub: "వ్యవసాయ పనులు, ఇంటి పనులు చేసుకోలేనంతగా శరీరం సహకరించకపోవడం."
        },
        {
          label: "కారణం లేకుండా బరువు తగ్గడం లేదా ఆకలి పూర్తిగా చచ్చిపోవడం",
          sub: "శరీరం పీలగా మారడం, బట్టలు వదులైపోవడం, అన్నం తినాలనిపించకపోవడం."
        },
        {
          label: "కాళ్లపై లేదా చర్మంపై ఏర్పడిన గాయం లేదా పుండు ఎరుపుగా మారి మానకపోతే",
          sub: "ముఖ్యంగా వృద్ధులు మరియు షుగర్ ఉన్నవారి పాదాలపై వచ్చే పుండ్లు చాలా ప్రమాదకరం."
        },
        {
          label: "పాదాలలో, ముఖంలో లేదా కడుపులో అసాధారణ వాపులు కనిపిస్తే",
          sub: "చీలమండల వద్ద వేలితో నొక్కితే గుంట పడే వాపులు లేదా కడుపు ఉబ్బరం."
        }
      ],
      adviceCard: {
        title: "గ్రామీణ ప్రజల కోసం బంగారు సూత్రం:",
        text: "'రెండు వారాలు గడిచినా రోగ లక్షణం తగ్గకపోతే, మూడో వారం వరకు వేచి చూడకండి. వెంటనే మీ ప్రాథమిక ఆరోగ్య కేంద్రానికి (PHC) వెళ్లండి.'"
      }
    },
    quiz: {
      badge: "మీ అవగాహనను పరీక్షించుకోండి",
      title: "గ్రామ ఆరోగ్య అవగాహన క్విజ్",
      subtitle: "ముందస్తు హెచ్చరిక సంకేతాలపై మీకున్న అవగాహనను తెలుసుకోవడానికి ఈ 5 ప్రశ్నలకు సమాధానం ఇవ్వండి.",
      progressText: "ప్రశ్న {current} / {total}",
      nextBtn: "తదుపరి",
      seeResultBtn: "ఫలితం చూడండి",
      scoreTitle: "క్విజ్ పూర్తయింది!",
      retakeBtn: "మళ్ళీ ప్రయత్నించండి",
      correctTitle: "✔ సరైన సమాధానం!",
      wrongTitle: "✖ సరైన సమాధానం కాదు.",
      questions: [
        {
          q: "మీ కుటుంబంలో ఎవరికైనా 2 వారాలకు మించి నిరంతరం దగ్గు ఉంటే ఏం చేయాలి?",
          options: [
            "దానంతట అదే తగ్గుతుందని మరో రెండు నెలలు వేచి చూడాలి",
            "నాటు పసర్లు తాగి డాక్టరు వద్దకు వెళ్లడం మానేయాలి",
            "సమీప పీహెచ్‌సీ లేదా డాక్టరు వద్దకు వెళ్లి పరీక్ష చేయించుకోవాలి",
            "చిన్న దుకాణంలో కనిపించిన దగ్గు మందు కొనుక్కోవాలి"
          ],
          correct: 2,
          explanation: "2 వారాలు దాటిన దగ్గుకు క్షయ (టీబీ) లేదా ఇతర తీవ్ర ఊపిరితిత్తుల ఇన్ఫెక్షన్ల పరీక్షలు అవసరం."
        },
        {
          q: "ఎవరికైనా అకస్మాత్తుగా ఛాతీలో తీవ్రమైన నొప్పి, ఊపిరి ఆడకపోవడం వస్తే తక్షణమే ఏం చేయాలి?",
          options: [
            "టీ ఇచ్చి తెల్లవారే వరకు ఆగి చూద్దాం అనాలి",
            "వెంటనే 108 కి కాల్ చేసి సమీప ఆసుపత్రికి తరలించాలి",
            "పొలంలో నడవమని చెప్పాలి",
            "ఛాతీపై బామ్ రాసి నిద్రపోమనాలి"
          ],
          correct: 1,
          explanation: "ఛాతీ నొప్పి, ఆయాసం గుండెపోటు లక్షణాలు కావచ్చు. ప్రతి క్షణం అమూల్యం, వెంటనే 108 కి కాల్ చేయాలి."
        },
        {
          q: "డాక్టర్ సలహా లేకుండా మెడికల్ షాపు నుండి మాత్రలు తెచ్చుకుని వేసుకోవడం ఎందుకు ప్రమాదకరం?",
          options: [
            "సమయం ఆదా అవుతుంది కాబట్టి మంచిది",
            "అది రోగాన్ని తొందరగా నయం చేస్తుంది",
            "అది లక్షణాలను దాచిపెట్టి, రోగం ముదరడానికి మరియు కిడ్నీలు పాడవడానికి కారణమవుతుంది",
            "దానివల్ల ఎలాంటి నష్టం ఉండదు"
          ],
          correct: 2,
          explanation: "సొంత వైద్యం అసలు వ్యాధిని బయటపడకుండా దాచిపెడుతుంది, సరైన చికిత్స ఆలస్యమై కిడ్నీలు పాడవుతాయి."
        },
        {
          q: "పాదాలపై లేదా చర్మంపై చిన్న పుండు మూడు వారాలు దాటినా మానకపోతే దాని అర్థం ఏమిటి?",
          options: [
            "అది సాధారణమే, పట్టించుకోనవసరం లేదు",
            "అది మధుమేహం (షుగర్) లేదా ఇన్ఫెక్షన్ కావచ్చు, డాక్టర్ పరీక్ష అవసరం",
            "దానిపై మట్టి లేదా పేడ రాయాలి",
            "కేవలం నీళ్లతో కడిగి ఆరు నెలలు వేచి చూడాలి"
          ],
          correct: 1,
          explanation: "మానని పుండ్లు షుగర్ వ్యాధికి ప్రధాన సంకేతం. వెంటనే డాక్టరుకు చూపించి శుభ్రమైన చికిత్స తీసుకోవాలి."
        },
        {
          q: "ఆంధ్రప్రదేశ్‌లో ఉచిత వైద్య సలహాలు, సమాచారం కోసం ప్రజలు డయల్ చేయవలసిన హెల్ప్‌లైన్ నంబర్ ఏది?",
          options: [
            "100 కి డయల్ చేయాలి",
            "104 కి డయల్ చేయాలి",
            "112 కి డయల్ చేయాలి",
            "101 కి డయల్ చేయాలి"
          ],
          correct: 1,
          explanation: "104 అనేది ఉచిత ప్రభుత్వ వైద్య సలహా హెల్ప్‌లైన్. 108 అనేది అత్యవసర అంబులెన్స్ సర్వీస్."
        }
      ],
      feedbackHigh: "అద్భుతం! మీ గ్రామానికి మీరు నిజమైన ఆరోగ్య జాగృతి. ఈ విలువైన సమాచారాన్ని మీ పొరుగువారితో పంచుకోండి!",
      feedbackMed: "మంచి ప్రయత్నం! హెచ్చరిక సంకేతాలు తెలిశాయి. ఎప్పుడూ పీహెచ్‌సీ డాక్టరును సంప్రదించడానికి వెనుకాడకండి.",
      feedbackLow: "క్విజ్ రాసినందుకు ధన్యవాదాలు! మీ కుటుంబాన్ని సురక్షితంగా ఉంచడానికి పైన పేర్కొన్న 7 హెచ్చరిక సంకేతాలను మళ్ళీ చదవండి."
    },
    findHelp: {
      badge: "వైద్య సేవలు పొందండి",
      title: "మీ ప్రాంతంలో సహాయం ఎక్కడ లభిస్తుంది?",
      subtitle: "గ్రామీణ ప్రజల కోసం ప్రభుత్వం ఉచిత లేదా నామమాత్రపు ఖర్చుతో వైద్య సేవలను ఏర్పాటు చేసింది.",
      facilities: [
        {
          type: "ప్రాథమిక వైద్యం",
          title: "ప్రాథమిక ఆరోగ్య కేంద్రం (PHC)",
          name: "Primary Health Centre (PHC), Revidi, Padmanabham",
          timings: "ఉదయం 9:00 నుండి సాయంత్రం 4:00 వరకు (అన్ని పనిదినాలు)",
          services: "ఉచిత డాక్టర్ పరీక్షలు, ప్రాథమిక రక్త పరీక్షలు, గర్భిణీల సంరక్షణ, మరియు ఉచిత మందులు.",
          location: "మండల కేంద్రం, పద్మనాభం.",
          note: "దయచేసి వివరాలను మీ ఆశా కార్యకర్తతో నిర్ధారించుకోండి"
        },
        {
          type: "ద్వితీయ స్థాయి వైద్యం",
          title: "కమ్యూనిటీ హెల్త్ సెంటర్ (CHC) / ప్రభుత్వ ఆసుపత్రి",
          name: "Community Health Centre (CHC), Bheemunipatnam",
          timings: "24x7 గంటల అత్యవసర & ఇన్-పేషెంట్ సేవలు",
          services: "స్పెషలిస్ట్ డాక్టర్లు, అల్ట్రాసౌండ్, ఎక్స్-రే, పెద్ద లాబ్ పరీక్షలు, ప్రసవాలు మరియు అత్యవసర చికిత్సలు.",
          location: "సమీప డివిజనల్ కేంద్రం / జిల్లా ఆసుపత్రి.",
          note: "దయచేసి వివరాలను మీ ఆశా కార్యకర్తతో నిర్ధారించుకోండి"
        }
      ],
      helplines: [
        {
          number: "104",
          badge: "ఉచిత వైద్య సలహా హెల్ప్‌లైన్",
          title: "104 ఆరోగ్య సమాచార హెల్ప్‌లైన్",
          desc: "డాక్టర్ల నుండి ఉచిత వైద్య సలహాలు, వ్యాధుల సమాచారం, మానసిక కౌన్సెలింగ్ మరియు ప్రభుత్వ పథకాల సమాచారం కొరకు కాల్ చేయండి.",
          buttonText: "104 హెల్ప్‌లైన్‌కు కాల్ చేయండి",
          actionUrl: "tel:104"
        },
        {
          number: "108",
          badge: "అత్యవసర అంబులెన్స్ (24x7)",
          title: "108 ఉచిత అత్యవసర అంబులెన్స్",
          desc: "గుండెపోటు, తీవ్ర ప్రమాదాలు, శ్వాస ఆడకపోవడం, విషం తాగడం, మరియు ప్రసవ అత్యవసరాల కోసం వెంటనే డయల్ చేయండి.",
          buttonText: "108 అంబులెన్స్‌కు కాల్ చేయండి",
          actionUrl: "tel:108"
        }
      ],
      ashaCard: {
        title: "మీ గ్రామ ఆశా వర్కర్ & ఏఎన్ఎంను సంప్రదించండి",
        text: "మీ గ్రామంలోని ఆశా కార్యకర్తలు (ASHA), ఏఎన్ఎంలు (ANM) క్రమం తప్పకుండా ఇళ్లను సందర్శిస్తారు. వారు మిమ్మల్ని నేరుగా పీహెచ్‌సీకి తీసుకెళ్లడంలో, తగిన సలహాలు అందించడంలో సహాయపడతారు."
      }
    },
    community: {
      badge: "గ్రామ స్థాయి కార్యకలాపాలు",
      title: "మా గ్రామ అవగాహన కార్యక్రమం",
      subtitle: "ముందస్తు ఆరోగ్య హెచ్చరికల సమాచారాన్ని నేరుగా గ్రామీణ గడప వద్దకు చేర్చడం.",
      villageBadge: "లక్ష్యిత గ్రామం",
      villageName: "పద్మనాభం గ్రామం",
      villageDistrict: "విశాఖపట్నం జిల్లా, ఆంధ్రప్రదేశ్",
      villageSummary: "పద్మనాభం గ్రామంలో ప్రజలు, మహిళా స్వయం సహాయక సంఘాలు మరియు పెద్దలతో సమావేశమై ముందస్తు ఆరోగ్య హెచ్చరిక సంకేతాలను గుర్తించడం మరియు సొంత వైద్యం మానుకుని పీహెచ్‌సీకి వెళ్లడంపై అవగాహన కల్పించాము.",
      stats: [
        {
          id: "peopleReached",
          label: "అవగాహన పొందిన ప్రజలు",
          value: "20+"
        },
        {
          id: "visitDate",
          label: "సందర్శించిన తేదీ",
          value: "2026 జూన్ 29"
        },
        {
          id: "healthWorkers",
          label: "కలిసిన ఆరోగ్య సిబ్బంది సంఖ్య",
          value: "2"
        }
      ],
      galleryTitle: "క్షేత్రస్థాయి సందర్శన చిత్రాలు",
      galleryNote: "పద్మనాభం గ్రామంలో నిర్వహించిన అవగాహన సదస్సుల దృశ్యాలు.",
      photos: [
        {
          src: "images/visit1.jpg",
          alt: "స్థానిక ఆరోగ్య సిబ్బందితో సంభాషణ",
          caption: "స్థానిక ఆరోగ్య సిబ్బందితో సంభాషణ"
        },
        {
          src: "images/visit2.jpg",
          alt: "గ్రామంలో ఆరోగ్య అవగాహన సదస్సు",
          caption: "గ్రామంలో ఆరోగ్య అవగాహన సదస్సు"
        },
        {
          src: "images/visit3.jpg",
          alt: "హెచ్చరిక సంకేతాలను తెలుసుకుంటున్న గ్రామ ప్రజలు",
          caption: "హెచ్చరిక సంకేతాలను తెలుసుకుంటున్న గ్రామ ప్రజలు"
        },
        {
          src: "images/visit4.jpg",
          alt: "ముందస్తు చికిత్స మరియు సరైన వైద్యంపై సమాలోచన",
          caption: "ముందస్తు చికిత్స మరియు సరైన వైద్యంపై సమాలోచన"
        }
      ],
      placeholderNote: "పూర్తి పరిమాణంలో చూడటానికి ఏదైనా ఫోటోపై తాకండి."
    },
    footer: {
      disclaimerHeading: "ముఖ్యమైన వైద్య నిరాకరణ (డిస్క్లైమర్)",
      disclaimerText: "ఈ వెబ్‌సైట్ కేవలం గ్రామీణ ప్రజల కోసం విద్య మరియు ప్రజా చైతన్యం కొరకు మాత్రమే రూపొందించబడింది. ఇది ఏ వ్యాధినీ నిర్ధారించదు, రోగాలను ముందే ఊహించదు, రోగ లక్షణాలను పరీక్షించదు లేదా మందులు/చికిత్సలను సూచించదు. ఆరోగ్య సమస్యలు ఉన్నప్పుడు ఎల్లప్పుడూ అర్హత కలిగిన వైద్యులను మాత్రమే సంప్రదించండి.",
      creditsTitle: "ప్రాజెక్ట్ వివరాలు",
      teamBadge: "Team No. 6 · HealthFirst",
      collegeName: "లెండి ఇన్స్టిట్యూట్ ఆఫ్ ఇంజనీరింగ్ అండ్ టెక్నాలజీ",
      guideHeading: "ప్రాజెక్ట్ గైడ్",
      guideName: "P. Venkata Satya Sri",
      teamHeading: "టీమ్ సభ్యులు",
      teamList: "Meesala Veda Gayatri, Nallabanda Manideep, Nammi Sruthi, Neteti Asha, Nithin Pyla, Oruganti Sai Mani Keerthana, Palaparthi Pavani, Pampana Sai Teja",
      members: [
        { name: "Meesala Veda Gayatri", initials: "MVG" },
        { name: "Nallabanda Manideep", initials: "NM" },
        { name: "Nammi Sruthi", initials: "NS" },
        { name: "Neteti Asha", initials: "NA" },
        { name: "Nithin Pyla", initials: "NP" },
        { name: "Oruganti Sai Mani Keerthana", initials: "OSMK" },
        { name: "Palaparthi Pavani", initials: "PP" },
        { name: "Pampana Sai Teja", initials: "PST" }
      ],
      copyright: "ఆరోగ్య జాగృతి కమ్యూనిటీ హెల్త్ ప్రాజెక్ట్. గ్రామీణ ఆంధ్రప్రదేశ్ కోసం ప్రత్యేకంగా రూపొందించబడింది."
    }
  }
};

// Application State
let currentLang = 'en';
let quizState = {
  currentIndex: 0,
  score: 0,
  answers: {}, // questionIndex: selectedOptionIndex
  completed: false
};

// SVG Icons Definitions for crisp, zero-dependency visual presentation
const ICONS = {
  shield: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M12 8v8"/><path d="M8 12h8"/></svg>`,
  cough: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="m8 15 2 2 4-4"/><path d="M12 19v3"/><path d="M8 21h8"/></svg>`,
  fever: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"/><path d="M12 4v7"/></svg>`,
  weakness: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/><path d="M7 16h10"/></svg>`,
  weightLoss: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/></svg>`,
  wound: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="m9 9 6 6"/><path d="m15 9-6 6"/><circle cx="12" cy="12" r="3"/></svg>`,
  pain: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="m12 11-2 2 4 1-2 2"/></svg>`,
  appetite: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>`,
  emergencyAlert: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
  phone: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
  checkCircle: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
  infoCircle: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>`,
  arrowRight: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
  flip: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M3 21v-5h5"/></svg>`,
  camera: `<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>`,
  heartbeat: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>`,
  zoom: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>`,
  close: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
  prev: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>`,
  next: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>`
};

// Map card ID to icon
const WARNING_ICONS = {
  cough: ICONS.cough,
  fever: ICONS.fever,
  weakness: ICONS.weakness,
  'weight-loss': ICONS.weightLoss,
  wound: ICONS.wound,
  pain: ICONS.pain,
  appetite: ICONS.appetite
};

/**
 * Initialize Language from localStorage
 */
function initLanguage() {
  const savedLang = localStorage.getItem('arogya_jagruthi_lang');
  if (savedLang === 'te' || savedLang === 'en') {
    currentLang = savedLang;
  } else {
    currentLang = 'en'; // default
  }
  document.documentElement.lang = currentLang;
}

/**
 * Switch Language
 */
function switchLanguage(targetLang) {
  currentLang = targetLang;
  localStorage.setItem('arogya_jagruthi_lang', targetLang);
  document.documentElement.lang = targetLang;
  renderAll();
  
  // Update toggle button visuals
  const langToggleBtn = document.getElementById('lang-toggle-btn');
  if (langToggleBtn) {
    langToggleBtn.setAttribute('aria-label', currentLang === 'en' ? 'Switch to Telugu' : 'Switch to English');
  }
}

/**
 * Render Entire Website
 */
function renderAll() {
  const data = content[currentLang];
  document.title = data.meta.title;

  renderNavbar(data.nav);
  renderHero(data.hero);
  renderWarningSigns(data.warningSigns);
  renderEmergency(data.emergency);
  renderMythsFacts(data.mythsFacts);
  renderWhySelfMedicate(data.whySelfMedicate);
  renderWhenDoctor(data.whenDoctor);
  renderQuiz(data.quiz);
  renderFindHelp(data.findHelp);
  renderCommunity(data.community);
  renderFooter(data.footer);

  // Re-observe animations after rendering
  setupIntersectionObserver();
}

/**
 * Navbar
 */
function renderNavbar(navData) {
  const brandTitle = document.getElementById('nav-brand-title');
  const brandSub = document.getElementById('nav-brand-sub');
  const navLinksContainer = document.getElementById('nav-links-list');
  const navEmergencyBtn = document.getElementById('nav-emergency-btn');
  const langSwitchLabel = document.getElementById('lang-switch-label');

  if (brandTitle) brandTitle.textContent = navData.brandTitle;
  if (brandSub) brandSub.textContent = navData.brandSub;

  if (navLinksContainer) {
    navLinksContainer.innerHTML = navData.links.map(link => `
      <li><a href="${link.href}" class="nav-link">${link.text}</a></li>
    `).join('');

    // Attach click listeners to close mobile nav on link click
    navLinksContainer.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        const navMenu = document.getElementById('nav-menu');
        const hamburgerBtn = document.getElementById('hamburger-btn');
        if (navMenu && navMenu.classList.contains('is-open')) {
          navMenu.classList.remove('is-open');
          if (hamburgerBtn) hamburgerBtn.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }

  if (navEmergencyBtn) {
    navEmergencyBtn.innerHTML = `${ICONS.phone} <span>${navData.call108}</span>`;
  }

  if (langSwitchLabel) {
    langSwitchLabel.textContent = navData.langSwitchLabel;
  }
}

/**
 * Hero Section
 */
function renderHero(heroData) {
  const heroBadge = document.getElementById('hero-badge');
  const heroTitle = document.getElementById('hero-title');
  const heroTitleAlt = document.getElementById('hero-title-alt');
  const heroTagline = document.getElementById('hero-tagline');
  const heroMessage = document.getElementById('hero-message');
  const heroCtaPrimary = document.getElementById('hero-cta-primary');
  const heroCtaEmergency = document.getElementById('hero-cta-emergency');
  const heroHighlights = document.getElementById('hero-highlights');

  if (heroBadge) heroBadge.textContent = heroData.badge;
  if (heroTitle) heroTitle.textContent = heroData.title;
  if (heroTitleAlt) heroTitleAlt.textContent = heroData.titleTelugu;
  if (heroTagline) heroTagline.textContent = heroData.tagline;
  if (heroMessage) heroMessage.textContent = heroData.message;

  if (heroCtaPrimary) {
    heroCtaPrimary.innerHTML = `<span>${heroData.ctaPrimary}</span> ${ICONS.arrowRight}`;
  }

  if (heroCtaEmergency) {
    heroCtaEmergency.innerHTML = `${ICONS.phone} <span>${heroData.ctaEmergency}</span>`;
  }

  if (heroHighlights) {
    heroHighlights.innerHTML = heroData.highlights.map(item => `
      <div class="hero-highlight-chip">
        ${ICONS.checkCircle}
        <span>${item}</span>
      </div>
    `).join('');
  }
}

/**
 * Warning Signs Section (7 Cards)
 */
function renderWarningSigns(sectionData) {
  const badgeEl = document.getElementById('warning-badge');
  const titleEl = document.getElementById('warning-title');
  const subtitleEl = document.getElementById('warning-subtitle');
  const gridEl = document.getElementById('warning-cards-grid');

  if (badgeEl) badgeEl.textContent = sectionData.badge;
  if (titleEl) titleEl.textContent = sectionData.title;
  if (subtitleEl) subtitleEl.textContent = sectionData.subtitle;

  if (gridEl) {
    gridEl.innerHTML = sectionData.cards.map((card, index) => {
      const iconSvg = WARNING_ICONS[card.id] || ICONS.shield;
      return `
        <article class="warning-card fade-in-up" data-card-id="${card.id}">
          <div class="warning-card-header">
            <div class="warning-icon-wrapper" aria-hidden="true">
              ${iconSvg}
            </div>
            <span class="warning-card-number">0${index + 1}</span>
          </div>

          <h3 class="warning-card-title">${card.title}</h3>
          <p class="warning-card-subtitle">${card.subtitle}</p>

          <div class="warning-card-content">
            <div class="warning-info-block">
              <span class="info-label">${currentLang === 'en' ? 'What it looks like:' : 'లక్షణం ఎలా ఉంటుంది:'}</span>
              <p class="info-text">${card.lookLike}</p>
            </div>

            <div class="warning-info-block why-block">
              <span class="info-label">${currentLang === 'en' ? 'Why not to ignore:' : 'ఎందుకు నిర్లక్ష్యం చేయకూడదు:'}</span>
              <p class="info-text">${card.whyIgnore}</p>
            </div>
          </div>

          <div class="warning-card-action">
            <span class="action-lead">${sectionData.actionLabel}</span>
            <span class="action-target">${card.actionText}</span>
          </div>
        </article>
      `;
    }).join('');
  }
}

/**
 * Emergency Signs Section (Prominent Red Alert Box)
 */
function renderEmergency(sectionData) {
  const badgeEl = document.getElementById('emergency-badge');
  const titleEl = document.getElementById('emergency-title');
  const headlineEl = document.getElementById('emergency-headline');
  const descEl = document.getElementById('emergency-desc');
  const signsListEl = document.getElementById('emergency-signs-list');
  const actionTextEl = document.getElementById('emergency-action-text');
  const callBtnEl = document.getElementById('emergency-call-btn');

  if (badgeEl) badgeEl.textContent = sectionData.badge;
  if (titleEl) titleEl.textContent = sectionData.title;
  if (headlineEl) headlineEl.textContent = sectionData.headline;
  if (descEl) descEl.textContent = sectionData.description;

  if (signsListEl) {
    signsListEl.innerHTML = sectionData.signs.map(sign => `
      <div class="emergency-sign-item">
        <div class="emergency-sign-icon" aria-hidden="true">
          ${ICONS.emergencyAlert}
        </div>
        <div class="emergency-sign-details">
          <h4 class="emergency-sign-title">${sign.title}</h4>
          <p class="emergency-sign-desc">${sign.desc}</p>
        </div>
      </div>
    `).join('');
  }

  if (actionTextEl) actionTextEl.textContent = sectionData.actionBox.text;
  if (callBtnEl) {
    callBtnEl.href = sectionData.actionBox.telNumber;
    callBtnEl.innerHTML = `${ICONS.phone} <span>${sectionData.actionBox.callButton}</span>`;
  }
}

/**
 * Myths vs Facts Section (5 Flip Cards)
 */
function renderMythsFacts(sectionData) {
  const badgeEl = document.getElementById('myths-badge');
  const titleEl = document.getElementById('myths-title');
  const subtitleEl = document.getElementById('myths-subtitle');
  const hintEl = document.getElementById('myths-hint');
  const gridEl = document.getElementById('myths-grid');

  if (badgeEl) badgeEl.textContent = sectionData.badge;
  if (titleEl) titleEl.textContent = sectionData.title;
  if (subtitleEl) subtitleEl.textContent = sectionData.subtitle;
  if (hintEl) {
    hintEl.innerHTML = `${ICONS.flip} <span>${sectionData.flipInstruction}</span>`;
  }

  if (gridEl) {
    gridEl.innerHTML = sectionData.cards.map((item) => `
      <div class="flip-card-wrapper fade-in-up" tabindex="0" role="button" aria-expanded="false" aria-label="Tap to flip card ${item.number}">
        <div class="flip-card-inner">
          <!-- Front Face: The Myth -->
          <div class="flip-card-front">
            <div class="flip-card-header">
              <span class="myth-tag">${currentLang === 'en' ? 'COMMON MYTH' : 'ప్రజా అపోహ'}</span>
              <span class="flip-number">${item.number}</span>
            </div>
            <div class="myth-body">
              <p class="myth-text">${item.myth}</p>
            </div>
            <div class="flip-action-hint">
              ${ICONS.flip}
              <span>${currentLang === 'en' ? 'Tap to view medical fact' : 'వాస్తవం చూడటానికి తాకండి'}</span>
            </div>
          </div>

          <!-- Back Face: The Fact -->
          <div class="flip-card-back">
            <div class="flip-card-header">
              <span class="fact-tag">${currentLang === 'en' ? 'MEDICAL FACT' : 'వైద్య వాస్తవం'}</span>
              <span class="flip-number">${item.number}</span>
            </div>
            <div class="fact-body">
              <p class="fact-text">${item.fact}</p>
              <div class="fact-takeaway">
                <strong>${currentLang === 'en' ? 'Takeaway:' : 'ముఖ్య గమనిక:'}</strong> ${item.takeaway}
              </div>
            </div>
            <div class="flip-action-hint back-hint">
              ${ICONS.flip}
              <span>${currentLang === 'en' ? 'Tap to flip back' : 'మళ్లీ తిప్పడానికి తాకండి'}</span>
            </div>
          </div>
        </div>
      </div>
    `).join('');

    // Attach touch & click handler for flipping cards on mobile & desktop
    gridEl.querySelectorAll('.flip-card-wrapper').forEach(cardWrapper => {
      const toggleCard = () => {
        const isFlipped = cardWrapper.classList.toggle('is-flipped');
        cardWrapper.setAttribute('aria-expanded', isFlipped ? 'true' : 'false');
      };

      cardWrapper.addEventListener('click', (e) => {
        // Prevent click if clicking a sub-link
        if (e.target.tagName !== 'A') {
          toggleCard();
        }
      });

      cardWrapper.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggleCard();
        }
      });
    });
  }
}

/**
 * Why Not Self-Medicate Section
 */
function renderWhySelfMedicate(sectionData) {
  const badgeEl = document.getElementById('selfmed-badge');
  const titleEl = document.getElementById('selfmed-title');
  const subtitleEl = document.getElementById('selfmed-subtitle');
  const introEl = document.getElementById('selfmed-intro');
  const pointsListEl = document.getElementById('selfmed-points-list');
  const summaryBoxEl = document.getElementById('selfmed-summary-box');

  if (badgeEl) badgeEl.textContent = sectionData.badge;
  if (titleEl) titleEl.textContent = sectionData.title;
  if (subtitleEl) subtitleEl.textContent = sectionData.subtitle;
  if (introEl) introEl.textContent = sectionData.intro;

  if (pointsListEl) {
    pointsListEl.innerHTML = sectionData.points.map((pt, idx) => `
      <div class="selfmed-point-card fade-in-up">
        <div class="point-number-badge">0${idx + 1}</div>
        <div class="point-content">
          <h4 class="point-title">${pt.title}</h4>
          <p class="point-desc">${pt.desc}</p>
        </div>
      </div>
    `).join('');
  }

  if (summaryBoxEl) {
    summaryBoxEl.innerHTML = `
      <div class="summary-box-icon" aria-hidden="true">${ICONS.infoCircle}</div>
      <p class="summary-box-text">${sectionData.summaryBox}</p>
    `;
  }
}

/**
 * When to Go to the Doctor Checklist
 */
function renderWhenDoctor(sectionData) {
  const badgeEl = document.getElementById('checklist-badge');
  const titleEl = document.getElementById('checklist-title');
  const subtitleEl = document.getElementById('checklist-subtitle');
  const itemsContainer = document.getElementById('checklist-items');
  const adviceTitleEl = document.getElementById('checklist-advice-title');
  const adviceTextEl = document.getElementById('checklist-advice-text');

  if (badgeEl) badgeEl.textContent = sectionData.badge;
  if (titleEl) titleEl.textContent = sectionData.title;
  if (subtitleEl) subtitleEl.textContent = sectionData.subtitle;

  if (itemsContainer) {
    itemsContainer.innerHTML = sectionData.checklist.map((item, index) => `
      <div class="checklist-item fade-in-up">
        <div class="checklist-icon-box" aria-hidden="true">
          ${ICONS.checkCircle}
        </div>
        <div class="checklist-text-box">
          <h4 class="checklist-item-title">${item.label}</h4>
          <p class="checklist-item-sub">${item.sub}</p>
        </div>
      </div>
    `).join('');
  }

  if (adviceTitleEl) adviceTitleEl.textContent = sectionData.adviceCard.title;
  if (adviceTextEl) adviceTextEl.textContent = sectionData.adviceCard.text;
}

/**
 * Awareness Quiz (5 MCQs, Instant Feedback, Dual Language)
 */
function renderQuiz(quizData) {
  const badgeEl = document.getElementById('quiz-badge');
  const titleEl = document.getElementById('quiz-title');
  const subtitleEl = document.getElementById('quiz-subtitle');
  const quizContainer = document.getElementById('quiz-interactive-area');

  if (badgeEl) badgeEl.textContent = quizData.badge;
  if (titleEl) titleEl.textContent = quizData.title;
  if (subtitleEl) subtitleEl.textContent = quizData.subtitle;

  if (!quizContainer) return;

  // Ensure event delegation is wired up
  if (!quizContainer._hasQuizDelegation) {
    initQuizDelegation();
  }

  const totalQuestions = quizData.questions.length;

  if (quizState.completed) {
    // Show Quiz Results
    let feedbackMsg = quizData.feedbackLow;
    if (quizState.score >= 4) {
      feedbackMsg = quizData.feedbackHigh;
    } else if (quizState.score >= 2) {
      feedbackMsg = quizData.feedbackMed;
    }

    quizContainer.innerHTML = `
      <div class="quiz-result-card fade-in-up is-visible">
        <div class="result-score-circle">
          <span class="score-num">${quizState.score}</span>
          <span class="score-divider">/</span>
          <span class="score-total">${totalQuestions}</span>
        </div>
        <h3 class="result-title">${quizData.scoreTitle}</h3>
        <p class="result-message">${feedbackMsg}</p>
        <button id="quiz-retake-btn" class="btn btn-primary" type="button">
          ${ICONS.arrowRight} <span>${quizData.retakeBtn || 'Try Again'}</span>
        </button>
      </div>
    `;
    return;
  }

  // Active Question View
  const qIndex = quizState.currentIndex;
  const currentQ = quizData.questions[qIndex];
  const isAnswered = quizState.answers[qIndex] !== undefined;
  const selectedAnswer = quizState.answers[qIndex];

  const progressStr = (quizData.progressText || "Question {current} of {total}")
    .replace('{current}', qIndex + 1)
    .replace('{total}', totalQuestions);

  quizContainer.innerHTML = `
    <div class="quiz-card fade-in-up is-visible">
      <div class="quiz-card-top">
        <span class="quiz-progress-badge">${progressStr}</span>
        <div class="quiz-progress-bar">
          <div class="quiz-progress-fill" style="width: ${((qIndex + 1) / totalQuestions) * 100}%"></div>
        </div>
      </div>

      <h3 class="quiz-question-text">${currentQ.q}</h3>

      <div class="quiz-options-grid" role="group" aria-label="Question options">
        ${currentQ.options.map((opt, optIndex) => {
          let optionClass = 'quiz-option-btn';
          let stateIcon = '';

          if (isAnswered) {
            if (optIndex === currentQ.correct) {
              optionClass += ' is-correct';
              stateIcon = `✔`;
            } else if (optIndex === selectedAnswer) {
              optionClass += ' is-wrong';
              stateIcon = `✖`;
            }
          }

          return `
            <button 
              type="button" 
              class="${optionClass}" 
              data-opt-index="${optIndex}"
              ${isAnswered ? 'disabled' : ''}
            >
              <span class="opt-prefix">${String.fromCharCode(65 + optIndex)}</span>
              <span class="opt-text">${opt}</span>
              ${stateIcon ? `<span class="opt-state-icon">${stateIcon}</span>` : ''}
            </button>
          `;
        }).join('')}
      </div>

      ${isAnswered ? `
        <div class="quiz-feedback-box ${selectedAnswer === currentQ.correct ? 'is-correct-box' : 'is-wrong-box'} fade-in-up is-visible">
          <div class="feedback-title">
            ${selectedAnswer === currentQ.correct 
              ? (quizData.correctTitle || (currentLang === 'en' ? '✔ Correct Answer!' : '✔ సరైన సమాధానం!')) 
              : (quizData.wrongTitle || (currentLang === 'en' ? '✖ Not quite right.' : '✖ సరైన సమాధానం కాదు.'))}
          </div>
          <p class="feedback-explanation">${currentQ.explanation}</p>
          <div class="quiz-next-action">
            <button id="quiz-next-btn" class="btn btn-primary btn-sm" type="button">
              <span>${qIndex < totalQuestions - 1 
                ? (quizData.nextBtn || (currentLang === 'en' ? 'Next' : 'తదుపరి')) 
                : (quizData.seeResultBtn || (currentLang === 'en' ? 'See Result' : 'ఫలితం చూడండి'))}</span>
              ${ICONS.arrowRight}
            </button>
          </div>
        </div>
      ` : ''}
    </div>
  `;
}

/**
 * Quiz Event Delegation (survives re-rendering and language toggling)
 */
function initQuizDelegation() {
  const quizContainer = document.getElementById('quiz-interactive-area');
  if (!quizContainer || quizContainer._hasQuizDelegation) return;
  quizContainer._hasQuizDelegation = true;

  quizContainer.addEventListener('click', (e) => {
    // 1. Option button clicked
    const optionBtn = e.target.closest('.quiz-option-btn');
    if (optionBtn) {
      const qIndex = quizState.currentIndex;
      if (quizState.answers[qIndex] !== undefined) return; // already locked

      const optIdx = parseInt(optionBtn.getAttribute('data-opt-index'), 10);
      if (isNaN(optIdx)) return;

      quizState.answers[qIndex] = optIdx;
      const currentQ = content[currentLang].quiz.questions[qIndex];
      if (currentQ && optIdx === currentQ.correct) {
        quizState.score += 1;
      }
      renderQuiz(content[currentLang].quiz);
      return;
    }

    // 2. Next / See Result button clicked
    const nextBtn = e.target.closest('#quiz-next-btn');
    if (nextBtn) {
      const totalQuestions = content[currentLang].quiz.questions.length;
      if (quizState.currentIndex < totalQuestions - 1) {
        quizState.currentIndex += 1;
      } else {
        quizState.completed = true;
      }
      renderQuiz(content[currentLang].quiz);
      return;
    }

    // 3. Try Again / Retake button clicked
    const retakeBtn = e.target.closest('#quiz-retake-btn');
    if (retakeBtn) {
      quizState = {
        currentIndex: 0,
        score: 0,
        answers: {},
        completed: false
      };
      renderQuiz(content[currentLang].quiz);
      return;
    }
  });
}

/**
 * Find Help Section (PHC, CHC, 104, 108)
 */
function renderFindHelp(sectionData) {
  const badgeEl = document.getElementById('help-badge');
  const titleEl = document.getElementById('help-title');
  const subtitleEl = document.getElementById('help-subtitle');
  const facilitiesGridEl = document.getElementById('help-facilities-grid');
  const helplinesGridEl = document.getElementById('help-helplines-grid');
  const ashaTitleEl = document.getElementById('help-asha-title');
  const ashaTextEl = document.getElementById('help-asha-text');

  if (badgeEl) badgeEl.textContent = sectionData.badge;
  if (titleEl) titleEl.textContent = sectionData.title;
  if (subtitleEl) subtitleEl.textContent = sectionData.subtitle;

  if (facilitiesGridEl) {
    facilitiesGridEl.innerHTML = sectionData.facilities.map(fac => `
      <div class="facility-card fade-in-up">
        <span class="facility-type-badge">${fac.type}</span>
        <h4 class="facility-title">${fac.title}</h4>
        <div class="facility-name-box">
          <span class="facility-label">${currentLang === 'en' ? 'Assigned Facility:' : 'కేంద్రం పేరు:'}</span>
          <strong>${fac.name}</strong>
        </div>
        <div class="facility-detail-row">
          <span class="facility-label">${currentLang === 'en' ? 'Timings:' : 'సమయాలు:'}</span>
          <span>${fac.timings}</span>
        </div>
        <div class="facility-detail-row">
          <span class="facility-label">${currentLang === 'en' ? 'Key Services:' : 'సేవలు:'}</span>
          <span>${fac.services}</span>
        </div>
        <div class="facility-detail-row">
          <span class="facility-label">${currentLang === 'en' ? 'Location:' : 'ప్రాంతం:'}</span>
          <span>${fac.location}</span>
        </div>
        <div class="facility-note-box">
          ${ICONS.infoCircle}
          <span>${fac.note}</span>
        </div>
      </div>
    `).join('');
  }

  if (helplinesGridEl) {
    helplinesGridEl.innerHTML = sectionData.helplines.map(line => `
      <div class="helpline-card fade-in-up ${line.number === '108' ? 'is-emergency-card' : ''}">
        <div class="helpline-badge">${line.badge}</div>
        <div class="helpline-number">${line.number}</div>
        <h4 class="helpline-title">${line.title}</h4>
        <p class="helpline-desc">${line.desc}</p>
        <a href="${line.actionUrl}" class="btn ${line.number === '108' ? 'btn-danger' : 'btn-primary'} helpline-call-btn">
          ${ICONS.phone}
          <span>${line.buttonText}</span>
        </a>
      </div>
    `).join('');
  }

  if (ashaTitleEl) ashaTitleEl.textContent = sectionData.ashaCard.title;
  if (ashaTextEl) ashaTextEl.textContent = sectionData.ashaCard.text;
}

/**
 * Community Activity Section (Padmanabham Village, 4 photo slots with graceful fallback)
 */
function renderCommunity(sectionData) {
  const badgeEl = document.getElementById('community-badge');
  const titleEl = document.getElementById('community-title');
  const subtitleEl = document.getElementById('community-subtitle');
  const villageBadgeEl = document.getElementById('community-village-badge');
  const villageNameEl = document.getElementById('community-village-name');
  const villageDistEl = document.getElementById('community-village-dist');
  const villageSummaryEl = document.getElementById('community-village-summary');
  const statsContainer = document.getElementById('community-stats-grid');
  const galleryTitleEl = document.getElementById('community-gallery-title');
  const galleryNoteEl = document.getElementById('community-gallery-note');
  const galleryGridEl = document.getElementById('community-gallery-grid');
  const placeholderNoteEl = document.getElementById('community-placeholder-note');

  if (badgeEl) badgeEl.textContent = sectionData.badge;
  if (titleEl) titleEl.textContent = sectionData.title;
  if (subtitleEl) subtitleEl.textContent = sectionData.subtitle;
  if (villageBadgeEl) villageBadgeEl.textContent = sectionData.villageBadge;
  if (villageNameEl) villageNameEl.textContent = sectionData.villageName;
  if (villageDistEl) villageDistEl.textContent = sectionData.villageDistrict;
  if (villageSummaryEl) villageSummaryEl.textContent = sectionData.villageSummary;

  if (statsContainer) {
    statsContainer.innerHTML = sectionData.stats.map(st => `
      <div class="community-stat-card fade-in-up">
        <span class="stat-value">${st.value}</span>
        <span class="stat-label">${st.label}</span>
      </div>
    `).join('');
  }

  if (galleryTitleEl) galleryTitleEl.textContent = sectionData.galleryTitle;
  if (galleryNoteEl) galleryNoteEl.textContent = sectionData.galleryNote;
  if (placeholderNoteEl) placeholderNoteEl.textContent = sectionData.placeholderNote;

  if (galleryGridEl) {
    galleryGridEl.innerHTML = sectionData.photos.map((photo, index) => {
      const isMissing = !!failedImageSlots[index];
      return `
      <figure class="gallery-slot-card fade-in-up" data-slot="${index + 1}" role="button" tabindex="0" aria-label="${photo.caption} - ${currentLang === 'en' ? 'Click to view full image' : 'పూర్తి చిత్రాన్ని చూడటానికి నొక్కండి'}" onclick="openGalleryModal(${index})">
        <div class="gallery-image-frame">
          <img 
            src="${photo.src}" 
            alt="${photo.alt}" 
            class="gallery-image"
            loading="lazy"
            style="${isMissing ? 'display: none;' : ''}"
            onerror="handleGalleryImageError(this, ${index})"
          />
          <div class="gallery-zoom-badge" aria-hidden="true" title="${currentLang === 'en' ? 'Tap to view larger' : 'పెద్దగా చూడండి'}">
            ${ICONS.zoom}
          </div>
          <div class="gallery-fallback-placeholder" id="placeholder-slot-${index}" style="${isMissing ? 'display: flex;' : 'display: none;'}">
            <div class="placeholder-icon-wrap" aria-hidden="true">
              ${ICONS.camera}
            </div>
            <span class="placeholder-caption-title">${photo.caption}</span>
            <span class="placeholder-slot-tag">${currentLang === 'en' ? `Photo Slot 0${index + 1}` : `ఫోటో స్లాట్ 0${index + 1}`}</span>
          </div>
        </div>
        <figcaption class="gallery-caption">
          <span class="caption-index">0${index + 1}</span>
          <span class="caption-text">${photo.caption}</span>
        </figcaption>
      </figure>
    `;
    }).join('');

    galleryGridEl.querySelectorAll('.gallery-slot-card').forEach((card, idx) => {
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openGalleryModal(idx);
        }
      });
    });
  }

  // Update modal text if modal is currently open during a language switch
  updateGalleryModalContent();
}

const failedImageSlots = {};

/**
 * Handle Missing Gallery Images Gracefully
 */
window.handleGalleryImageError = function(imgElement, slotIndex) {
  failedImageSlots[slotIndex] = true;
  imgElement.style.display = 'none';
  const fallbackBox = document.getElementById(`placeholder-slot-${slotIndex}`);
  if (fallbackBox) {
    fallbackBox.style.display = 'flex';
  }
};

/**
 * Interactive Gallery Lightbox Modal
 */
let currentModalIndex = 0;

function createGalleryModal() {
  let modal = document.getElementById('gallery-lightbox-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'gallery-lightbox-modal';
    modal.className = 'gallery-lightbox-modal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-label', currentLang === 'en' ? 'Field Visit Photograph' : 'క్షేత్రస్థాయి సందర్శన చిత్రం');
    modal.innerHTML = `
      <div class="lightbox-backdrop" onclick="closeGalleryModal()" aria-hidden="true"></div>
      <div class="lightbox-dialog" role="document">
        <button type="button" class="lightbox-close-btn" onclick="closeGalleryModal()" aria-label="${currentLang === 'en' ? 'Close preview' : 'మూసివేయండి'}" id="lightbox-close-btn">
          ${ICONS.close}
        </button>
        <button type="button" class="lightbox-nav-btn lightbox-prev-btn" onclick="navigateGalleryModal(-1)" aria-label="${currentLang === 'en' ? 'Previous photo' : 'మునుపటి ఫోటో'}" id="lightbox-prev-btn">
          ${ICONS.prev}
        </button>
        <button type="button" class="lightbox-nav-btn lightbox-next-btn" onclick="navigateGalleryModal(1)" aria-label="${currentLang === 'en' ? 'Next photo' : 'తరువాతి ఫోటో'}" id="lightbox-next-btn">
          ${ICONS.next}
        </button>
        <div class="lightbox-content-box">
          <div class="lightbox-image-wrapper">
            <img id="lightbox-img" class="lightbox-img" src="" alt="" />
          </div>
          <div class="lightbox-caption-bar">
            <span class="lightbox-badge" id="lightbox-counter">01 / 04</span>
            <p class="lightbox-caption-text" id="lightbox-caption"></p>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(modal);

    document.addEventListener('keydown', (e) => {
      const m = document.getElementById('gallery-lightbox-modal');
      if (!m || !m.classList.contains('is-active')) return;
      if (e.key === 'Escape') {
        closeGalleryModal();
      } else if (e.key === 'ArrowLeft') {
        navigateGalleryModal(-1);
      } else if (e.key === 'ArrowRight') {
        navigateGalleryModal(1);
      }
    });

    // Touch swipe support for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    modal.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    modal.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      if (touchStartX - touchEndX > 50) {
        navigateGalleryModal(1); // Swipe left -> next
      } else if (touchEndX - touchStartX > 50) {
        navigateGalleryModal(-1); // Swipe right -> prev
      }
    }, { passive: true });
  }
  return modal;
}

window.openGalleryModal = function(index) {
  const modal = createGalleryModal();
  const photos = content[currentLang].community.photos;
  if (!photos || !photos[index]) return;

  currentModalIndex = index;
  updateGalleryModalContent();

  modal.classList.add('is-active');
  document.body.classList.add('modal-open');
  const closeBtn = document.getElementById('lightbox-close-btn');
  if (closeBtn) closeBtn.focus();
};

window.closeGalleryModal = function() {
  const modal = document.getElementById('gallery-lightbox-modal');
  if (modal) {
    modal.classList.remove('is-active');
  }
  document.body.classList.remove('modal-open');
};

window.navigateGalleryModal = function(direction) {
  const photos = content[currentLang].community.photos;
  if (!photos || photos.length === 0) return;
  currentModalIndex = (currentModalIndex + direction + photos.length) % photos.length;
  updateGalleryModalContent();
};

function updateGalleryModalContent() {
  const modal = document.getElementById('gallery-lightbox-modal');
  if (!modal) return;
  const photos = content[currentLang].community.photos;
  if (!photos || !photos[currentModalIndex]) return;
  const photo = photos[currentModalIndex];

  const imgEl = document.getElementById('lightbox-img');
  const captionEl = document.getElementById('lightbox-caption');
  const counterEl = document.getElementById('lightbox-counter');
  const closeBtn = document.getElementById('lightbox-close-btn');
  const prevBtn = document.getElementById('lightbox-prev-btn');
  const nextBtn = document.getElementById('lightbox-next-btn');

  if (imgEl) {
    imgEl.src = photo.src;
    imgEl.alt = photo.alt;
  }
  if (captionEl) {
    captionEl.textContent = photo.caption;
  }
  if (counterEl) {
    counterEl.textContent = `0${currentModalIndex + 1} / 0${photos.length}`;
  }
  if (closeBtn) {
    closeBtn.setAttribute('aria-label', currentLang === 'en' ? 'Close preview' : 'మూసివేయండి');
  }
  if (prevBtn) {
    prevBtn.setAttribute('aria-label', currentLang === 'en' ? 'Previous photo' : 'మునుపటి ఫోటో');
  }
  if (nextBtn) {
    nextBtn.setAttribute('aria-label', currentLang === 'en' ? 'Next photo' : 'తరువాతి ఫోటో');
  }
}

/**
 * Footer
 */
function renderFooter(footerData) {
  const disclaimerHeading = document.getElementById('footer-disclaimer-heading');
  const disclaimerText = document.getElementById('footer-disclaimer-text');
  const teamBadge = document.getElementById('footer-team-badge');
  const collegeName = document.getElementById('footer-college-name');
  const guideHeading = document.getElementById('footer-guide-heading');
  const guideName = document.getElementById('footer-guide-name');
  const teamHeading = document.getElementById('footer-team-heading');
  const membersGrid = document.getElementById('footer-members-grid');
  const copyright = document.getElementById('footer-copyright');

  if (disclaimerHeading) disclaimerHeading.textContent = footerData.disclaimerHeading;
  if (disclaimerText) disclaimerText.textContent = footerData.disclaimerText;
  if (teamBadge) teamBadge.textContent = footerData.teamBadge;
  if (collegeName) collegeName.textContent = footerData.collegeName;
  if (guideHeading) guideHeading.textContent = footerData.guideHeading;
  if (guideName) guideName.textContent = footerData.guideName;
  if (teamHeading) teamHeading.textContent = footerData.teamHeading;
  if (copyright) copyright.textContent = footerData.copyright;

  if (membersGrid && Array.isArray(footerData.members)) {
    membersGrid.innerHTML = footerData.members.map(member => `
      <div class="footer-member-card">
        <div class="member-avatar" aria-hidden="true">${member.initials}</div>
        <span class="member-name">${member.name}</span>
      </div>
    `).join('');
  }
}

/**
 * Subtle Scroll Animation Observer
 */
function setupIntersectionObserver() {
  const animatedElements = document.querySelectorAll('.fade-in-up:not(.is-visible)');
  if (!('IntersectionObserver' in window)) {
    // Fallback for older browsers
    animatedElements.forEach(el => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  animatedElements.forEach(el => observer.observe(el));
}

/**
 * Event Listeners & Bootstrapping
 */
document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  initQuizDelegation();
  renderAll();

  // Language switch button in header
  const langToggleBtn = document.getElementById('lang-toggle-btn');
  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      const nextLang = currentLang === 'en' ? 'te' : 'en';
      switchLanguage(nextLang);
    });
  }

  // Mobile Hamburger Toggle
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const navMenu = document.getElementById('nav-menu');
  if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('is-open');
      hamburgerBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  // Smooth scroll for anchor links with sticky header offset
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          const navOffset = 76;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });
});
