import { GoogleGenerativeAI } from "@google/generative-ai";

export const SYSTEM_PROMPT = `
You are Pooja Bhanushali's AI Assistant. You represent her as a virtual agent on her personal HR portfolio website.
Pooja is a cheerful, energetic, and people-oriented aspiring HR Professional who believes in empathy, culture, and growth.

Here is all the factual information about Pooja from her resume and internship documents:
1. Contact Info:
   - Email: poojabhanushali1401@gmail.com
   - Phone: +91 9372 601 570
   - Location: Kalyan, Thane, Maharashtra (Permanent Address: Om Shri Sai Dham apt., Room no. 5, 1st floor, Tisgaon Naka, Kalyan East, 421 306)
   - LinkedIn: (Include in contact responses)

2. Education:
   - MMS (HR): Chetana's R.K. Institute of Management & Research, Mumbai University. Class of 2027. Currently ongoing (Due/Due).
   - BSc (Forensic Science): Institute of Forensic Science, Mumbai University (Graduated 2024). Outstanding Academic Record with CGPA of 9.12!
   - HSC: B.K. Birla College of Arts, Science and Commerce, Maharashtra State Board (2021) - 95.83%.
   - SSC: Lok Kalyan Public School, Maharashtra State Board (2019) - 87.40%.

3. Work Experience & Internships:
   - Tata Motors Limited: HR Intern (Off-Summer / Live Project) from 5th May 2026 to 4th July 2026.
     * Project: "Driving Learner Adoption & Engagement for LXP (Learning Experience Platform)".
     * Mentor: Scherezade Bahmani.
     * Responsibilities/Focus: Working on driving engagement and adoption rates for learning programs on Tata Motors' LXP, analyzing learner behavior, and designing engagement campaigns.
   - Shoppers Stop: Off-Summer Internship / Live Project (02 Days).
     * Completed On-Job Training with exposure to retail operations, sales processes, and team dynamics.

4. Academic Projects:
   - Personalized and Career-Aligned Learning Paths using ML in EdTech (Case Study & Academic Presentation).
   - Career Intelligence using ML to Align Learning Paths with Industry Job Skills (Case Study & Academic Presentation).
   - Machine Learning as the Backbone of Personalized & Career-Aligned Learning in EdTech (Case Study & Academic Presentation).
   - Field-based marketing study on Papaya (Asian cuisine restaurant chain), involving on-ground industry interaction.
   - Behavioral Dynamics and Related Adaptations with Change in Weather (Research Paper).

5. Skills & Certifications:
   - Core HR: Recruitment, L&D, Employee Engagement, Team Coordination, Retail Operations.
   - Soft Skills: Strong Communication, Problem Solving, Adaptability, Empathy, Adaptable Mindset.
   - Technical & IT Knowledge: MS Office (Excel, Word, PowerPoint), Data Analytics, Digital Marketing.
   - Languages: English, Hindi, Kutchi.
   - Certifications:
     * Introduction to MS Excel (April 2025)
     * Introduction to Data Analytics (April 2025)
     * Digital Marketing Fundamentals (May 2025)

6. Extra-Curriculars & Hobbies:
   - Teaching experience in coaching classes (Started Sept 2025).
   - Dancing: Pooja's "Happy Place"! She loves to dance, viewing it as her creative outlet, source of energy, and expression of joy ("Dance is the hidden language of the soul — and mine speaks joy").
   - Achievements: Runner-up in the HROpSys Kiosk Competition (December 2025), where she designed a circular economy model.

INSTRUCTIONS FOR TONE AND STYLE:
- Be warm, enthusiastic, polite, and professional.
- Start responses with positive, energetic expressions when appropriate (e.g., "Hi there! 🌸", "I'd love to tell you about that! ✨").
- Do not make up facts. If asked about something not covered in the prompt, say you don't know but offer to connect them directly with Pooja at poojabhanushali1401@gmail.com.
- Keep answers concise and readable. Use bullet points for lists.
`;

const mockResponses: { keywords: string[]; response: string }[] = [
  {
    keywords: ["experience", "internship", "tata", "shoppers", "work"],
    response: "Pooja has exciting hands-on experience! 💼\n\n• **Tata Motors (May–July 2026)**: She is currently working as an HR Intern under the mentorship of Scherezade Bahmani. Her project is **'Driving Learner Adoption & Engagement for LXP (Learning Experience Platform)'**, focusing on L&D metrics, user adoption, and employee engagement.\n• **Shoppers Stop (OJT)**: She completed a hands-on live project training on retail operations, sales processes, and team dynamics.\n\nShe's passionate about building learning cultures and driving employee engagement! ✨"
  },
  {
    keywords: ["tata motors", "lxp", "learning experience", "scherezade"],
    response: "At **Tata Motors**, Pooja is an HR Intern (May–July 2026) working on a project titled **'Driving Learner Adoption & Engagement for LXP'** (Learning Experience Platform). Mentored by Scherezade Bahmani, she is exploring ways to increase course completion rates, analyze learner journeys, and build gamified engagement strategies. It's one of her proudest achievements! 🚗💨"
  },
  {
    keywords: ["education", "college", "school", "cgpa", "mms", "chetana", "bsc", "forensic"],
    response: "Pooja has a strong academic background! 🎓\n\n• **MMS in HR** (2025–2027): Chetana's R.K. Institute of Management & Research, Mumbai University (Currently ongoing, graduation in 2027).\n• **BSc in Forensic Science** (2021–2024): Institute of Forensic Science, Mumbai University — she graduated with an impressive **9.12 CGPA**! \n• **HSC**: B.K. Birla College (95.83%)\n• **SSC**: Lok Kalyan Public School (87.40%)\n\nHer transition from Forensic Science to Human Resources showcases her analytical background combined with her love for human connection! 🧬🤝"
  },
  {
    keywords: ["skills", "excel", "analytics", "marketing", "languages", "kutchi"],
    response: "Pooja brings a versatile skill set to the table! 🧠\n\n• **Core HR**: Recruitment, Learning & Development (L&D), Employee Engagement, Team Dynamics.\n• **Technical Skills**: MS Office (with a certification in **MS Excel**), **Data Analytics**, and **Digital Marketing**.\n• **Soft Skills**: Strong Communication, empathetic Problem Solving, and Adaptability.\n• **Languages**: English, Hindi, and Kutchi.\n\nShe loves leveraging analytics to make data-driven HR decisions! 📊"
  },
  {
    keywords: ["why hire", "hire pooja", "benefit", "recruit", "suitable"],
    response: "Here is why Pooja would be an amazing addition to your team! 🌸\n\n1. **Analytical & Empathetic**: Her background in Forensic Science gives her sharp observation and analytical skills, which she combines with a warm, people-first HR approach.\n2. **Proven Adaptability**: She is a quick learner, which is shown by her 9.12 CGPA and successful project at Tata Motors.\n3. **Energetic & Cheerful**: She brings positive energy, team-player vibes, and dedication to everything she does.\n4. **Certified Skills**: From MS Excel and Data Analytics to Digital Marketing, she possesses the technical toolkit required in modern HR Operations.\n\nLet's connect! You can reach her at **poojabhanushali1401@gmail.com** or **+91 9372 601 570**. 📞"
  },
  {
    keywords: ["dance", "dancing", "hobby", "fun", "happy place"],
    response: "Dance is Pooja's absolute happy place! 💃✨\n\nFor her, dancing is a beautiful form of self-expression, energy, and joy. She believes that *'Dance is the hidden language of the soul — and mine speaks joy.'*\n\nIf you click the **'Dance Mode'** toggle on her portfolio website, you can see the site transform to reflect this vibrant side of her! 🎶🟣"
  },
  {
    keywords: ["projects", "hropsys", "kiosk", "ml", "edtech", "weather", "papaya"],
    response: "Pooja has worked on several impactful academic and competition projects:\n\n• **HROpSys Kiosk Competition**: She was the **Runner-up** (Dec 2025) for building a circular economy model kiosk. 🏆\n• **EdTech ML Projects**: She co-created projects on *Personalized and Career-Aligned Learning Paths* and *Career Intelligence* using Machine Learning.\n• **Marketing Study**: Conducted a field-based marketing study on *Papaya* (Asian cuisine restaurant chain) involving on-ground interaction.\n• **Research Paper**: Published a paper on *Behavioral Dynamics and Related Adaptations with Change in Weather*.\n\nShe loves applying classroom theories to real-world challenges! 🌟"
  },
  {
    keywords: ["contact", "email", "phone", "linkedin", "hire", "address"],
    response: "You can easily reach out to Pooja! She'd love to connect: 📬\n\n• **Email**: [poojabhanushali1401@gmail.com](mailto:poojabhanushali1401@gmail.com)\n• **Phone**: [+91 9372 601 570](tel:+919372601570)\n• **Location**: Kalyan, Thane, Maharashtra\n• **LinkedIn**: [Pooja Bhanushali](https://linkedin.com)\n\nYou can also send a message via the Contact Form at the bottom of the page! ✈️"
  }
];

export async function askPoojaAI(question: string): Promise<string> {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    // Implement fuzzy keyword matching for mock responses
    const normalizedQuestion = question.toLowerCase();
    
    // Look for matching keywords
    for (const entry of mockResponses) {
      if (entry.keywords.some(kw => normalizedQuestion.includes(kw))) {
        return entry.response;
      }
    }

    // Default response if no keywords match
    return "Hi there! 🌸 Thanks for asking! I'm Pooja's AI assistant. I can tell you about her internship at Tata Motors, her Chetana MMS-HR studies, her 9.12 CGPA in Forensic Science, her skills, certifications, and her passion for dancing.\n\nWhat would you like to know? Or feel free to drop Pooja an email directly at **poojabhanushali1401@gmail.com**! 📩";
  }

  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
      systemInstruction: SYSTEM_PROMPT
    });

    const result = await model.generateContent(question);
    const text = result.response.text();
    return text || "I'm sorry, I couldn't generate a response. Please try again or reach out to Pooja directly!";
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return "Hi there! I encountered a small connection issue while trying to reach my brain. 🧠\n\nBut don't worry! I can tell you that Pooja is an MMS-HR student at Chetana's, who recently completed an HR internship at Tata Motors working on LXP engagement under mentor Scherezade Bahmani, and loves to dance! Please try asking another question or email her directly at **poojabhanushali1401@gmail.com**.";
  }
}
