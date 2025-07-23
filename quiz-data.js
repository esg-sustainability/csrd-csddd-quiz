// Quiz Data for CSRD vs CSDD Challenge
const quizData = [
    {
        id: 1,
        type: "multiple-choice",
        question: "What does CSRD stand for?",
        options: [
            "Corporate Social Responsibility Directive",
            "Corporate Sustainability Reporting Directive", 
            "Corporate Sustainability Risk Directive",
            "Corporate Social Reporting Directive"
        ],
        correct: 1,
        explanation: "CSRD stands for Corporate Sustainability Reporting Directive. It's a European directive that strengthens sustainability reporting obligations for companies, adopted in 2021."
    },
    {
        id: 2,
        type: "multiple-choice",
        question: "When was the CSRD adopted?",
        options: [
            "2020",
            "2021",
            "2022", 
            "2023"
        ],
        correct: 1,
        explanation: "The CSRD (Corporate Sustainability Reporting Directive) was adopted in 2021, replacing the previous NFRD (Non-Financial Reporting Directive)."
    },
    {
        id: 3,
        type: "multiple-choice",
        question: "Which directive does the CSRD replace?",
        options: [
            "CSDD (Corporate Sustainability Due Diligence Directive)",
            "NFRD (Non-Financial Reporting Directive)",
            "GDPR (General Data Protection Regulation)",
            "MiFID (Markets in Financial Instruments Directive)"
        ],
        correct: 1,
        explanation: "The CSRD replaces the NFRD (Non-Financial Reporting Directive) and broadens the transparency requirements regarding companies' environmental, social, and governance (ESG) impacts."
    },
    {
        id: 4,
        type: "multiple-choice",
        question: "What is the primary focus of the CSDD?",
        options: [
            "Financial reporting standards",
            "Data protection compliance",
            "Due diligence for human rights and environmental impacts",
            "Market transparency regulations"
        ],
        correct: 2,
        explanation: "The CSDD (Corporate Sustainability Due Diligence Directive) focuses on implementing procedures to identify, prevent, and mitigate negative impacts on human rights and the environment throughout the value chain."
    },
    {
        id: 5,
        type: "multiple-choice",
        question: "What does the CSDD require companies to monitor throughout?",
        options: [
            "Their financial statements",
            "Their value chain",
            "Their marketing campaigns",
            "Their IT infrastructure"
        ],
        correct: 1,
        explanation: "The CSDD requires companies to monitor and manage risks throughout their entire value chain, including relationships with suppliers and partners."
    },
    {
        id: 6,
        type: "multiple-choice",
        question: "Which companies are covered by the CSRD? (Select the most complete answer)",
        options: [
            "Only publicly traded companies",
            "Companies with more than 500 employees",
            "Large companies with 250+ employees, €40M+ turnover, or €20M+ balance sheet",
            "All European companies regardless of size"
        ],
        correct: 2,
        explanation: "The CSRD applies to large companies including those with more than 250 employees, a turnover of more than €40 million, or a total balance sheet exceeding €20 million, as well as large publicly traded companies."
    },
    {
        id: 7,
        type: "multiple-choice",
        question: "What type of verification is required for CSRD reports?",
        options: [
            "Self-assessment only",
            "Internal audit",
            "Independent third-party verification",
            "Government inspection"
        ],
        correct: 2,
        explanation: "CSRD requires that sustainability reports must be verified by an independent third party to ensure accuracy and transparency of the disclosed information."
    },
    {
        id: 8,
        type: "multiple-choice",
        question: "What can happen if companies don't comply with the CSDD?",
        options: [
            "Nothing, it's voluntary",
            "Only reputational damage",
            "Legal sanctions and brand image damage",
            "Just a warning letter"
        ],
        correct: 2,
        explanation: "Non-compliance with the CSDD can lead to legal sanctions and negatively affect an organization's brand image, making compliance crucial for companies."
    },
    {
        id: 9,
        type: "true-false",
        question: "The CSRD and CSDD have identical objectives and requirements.",
        options: ["True", "False"],
        correct: 1,
        explanation: "False. While both directives focus on sustainability, they have distinct objectives: CSRD focuses on reporting transparency, while CSDD focuses on due diligence and action to prevent negative impacts."
    },
    {
        id: 10,
        type: "true-false",
        question: "The CSDD applies only to European companies.",
        options: ["True", "False"],
        correct: 1,
        explanation: "False. The CSDD also covers non-European companies that generate significant revenue in the EU, extending its reach beyond just European organizations."
    },
    {
        id: 11,
        type: "true-false",
        question: "CSRD reports must be verified by an independent third party.",
        options: ["True", "False"],
        correct: 0,
        explanation: "True. The CSRD requires that sustainability reports must be verified by an independent third party to ensure accuracy and transparency."
    },
    {
        id: 12,
        type: "true-false",
        question: "Both CSRD and CSDD encourage a more proactive approach to sustainability.",
        options: ["True", "False"],
        correct: 0,
        explanation: "True. Both directives encourage companies to adopt a more proactive and responsible approach to sustainability, though through different mechanisms."
    },
    {
        id: 13,
        type: "scenario",
        question: "A company has 300 employees, €45 million annual turnover, and operates across Europe with a complex supply chain. Which directive(s) would likely apply?",
        options: [
            "Only CSRD",
            "Only CSDD", 
            "Both CSRD and CSDD",
            "Neither directive applies"
        ],
        correct: 2,
        explanation: "Both directives would likely apply. The company meets CSRD criteria (250+ employees, €40M+ turnover) and as a large company with complex supply chains, it would also fall under CSDD requirements."
    },
    {
        id: 14,
        type: "scenario",
        question: "A company discovers human rights violations in its supply chain. Which directive primarily guides the required response?",
        options: [
            "CSRD - they must report it",
            "CSDD - they must take corrective action",
            "Both equally",
            "Neither, it's voluntary"
        ],
        correct: 1,
        explanation: "The CSDD primarily guides this situation, as it requires companies to implement procedures to identify, prevent, and mitigate negative impacts on human rights, and take corrective actions when violations are discovered."
    },
    {
        id: 15,
        type: "scenario",
        question: "An investor wants to compare the ESG performance of different companies. Which directive primarily serves this need?",
        options: [
            "CSDD - due diligence reports",
            "CSRD - standardized sustainability reporting",
            "Both provide equal value",
            "Neither addresses investor needs"
        ],
        correct: 1,
        explanation: "The CSRD primarily serves this need by standardizing sustainability reporting, making it easier for investors to compare ESG performance across different companies."
    },
    {
        id: 16,
        type: "challenge",
        question: "Which statement best describes the complementary relationship between CSRD and CSDD?",
        options: [
            "CSRD focuses on transparency while CSDD focuses on action and prevention",
            "Both directives have identical requirements and objectives",
            "CSRD is mandatory while CSDD is voluntary",
            "CSDD replaces CSRD for large companies"
        ],
        correct: 0,
        explanation: "CSRD and CSDD are complementary: CSRD focuses on transparency and standardized reporting of ESG performance, while CSDD focuses on taking concrete actions to identify, prevent, and mitigate negative impacts throughout the value chain. Together, they create a comprehensive framework for corporate sustainability."
    }
];

// Performance levels configuration
const performanceLevels = [
    {
        minScore: 18,
        maxScore: 20,
        title: "Sustainability Expert",
        description: "Outstanding! You have mastered the key concepts of both CSRD and CSDD. You're ready to guide organizations through these important sustainability directives.",
        emoji: "🏆"
    },
    {
        minScore: 15,
        maxScore: 17,
        title: "Compliance Champion", 
        description: "Excellent work! You have a strong understanding of sustainability directives and their implications for businesses.",
        emoji: "⭐"
    },
    {
        minScore: 12,
        maxScore: 14,
        title: "ESG Enthusiast",
        description: "Good job! You're well on your way to understanding these important sustainability frameworks. Keep learning!",
        emoji: "📈"
    },
    {
        minScore: 9,
        maxScore: 11,
        title: "Learning Leader",
        description: "You're making progress! Consider reviewing the key differences between CSRD and CSDD to strengthen your knowledge.",
        emoji: "📚"
    },
    {
        minScore: 0,
        maxScore: 8,
        title: "Future Sustainability Star",
        description: "Everyone starts somewhere! Take some time to learn about these important directives - they're shaping the future of business.",
        emoji: "🌱"
    }
];

