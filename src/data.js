import { Code, Server, AppWindow, Database, Brain, Cpu, Shield, BookOpen, Layers, Bot, LineChart, FileText } from 'lucide-react';

export const portfolioData = {
    name: "CodeWalnut ML Team",
    title: "AI Engineering | Machine Learning Systems | MLOps & Workflow Automation",
    description: "An elite AI Engineering team specializing in machine learning systems, LLM-powered applications, intelligent workflow automation, and production-ready AI deployments. Experienced in designing scalable AI pipelines, automation systems, and real-world machine learning solutions.",
    badge: "Pending Patent: AI Student Productivity Assistant Platform"
};

export const publications = [
    {
        title: "Investigating the Impact of Feedback Loop Training on Machine Learning Model's Performance in Time Series Data",
        description: "Research analyzing the impact of feedback loop training strategies on machine learning performance in time-series prediction tasks.",
        link: "https://ieeexplore.ieee.org/document/10581164/"
    },
    {
        title: "Assessing the Impact of COVID-19 on Inflation Dynamics in India: A Machine Learning Approach",
        description: "Machine learning-based economic analysis studying the effects of the COVID-19 pandemic on inflation trends in India using predictive modeling.",
        link: "https://ieeexplore.ieee.org/document/10690053/"
    },
    {
        title: "AI-driven Analysis of Indicators and Risk Factors: Predicting Depression Tendency among College Students",
        description: "Machine learning research identifying behavioral indicators and predictive factors for detecting depression tendencies among college students."
    },
    {
        title: "Classic Models, Modern Threats: A Study on Adversarial Attack and Defense for Traditional ML Models",
        description: "Experimental research analyzing adversarial attacks such as FGSM and PGD on traditional machine learning models and evaluating defensive techniques.",
        link: "https://link.springer.com/chapter/10.1007/978-3-032-10016-0_20"
    },
    {
        title: "Systematic Evaluation of Vision Transformer Robustness under Gradient, Optimization, and Black-Box Attacks with Hybrid Defense Mechanisms",
        description: "Advanced research evaluating the robustness of Vision Transformer architectures against gradient-based, optimization-based, and black-box adversarial attacks while proposing hybrid defense mechanisms."
    }
];

export const projects = [
    {
        title: "Automated Academic Marks Verification System",
        description: "An AI-powered verification system where students upload academic records and intelligent AI agents automatically validate marksheets using document analysis, rule-based verification, and automated workflows.",
        tags: ["AI Agents", "Document Processing", "Python Automation", "Backend AI Systems"],
        icon: FileText
    },
    {
        title: "Conversational Book Character AI (RAG System)",
        description: "A retrieval-augmented generation system where users upload books and interact conversationally with characters. The system constructs character personas and retrieves contextual passages to generate realistic dialogue responses.",
        tags: ["RAG Architecture", "Vector Databases", "Large Language Models", "Semantic Retrieval"],
        icon: BookOpen
    },
    {
        title: "Hybrid Context Preservation Model for LLM Systems",
        description: "Developed a hybrid architecture designed to prevent context degradation (\"context rot\") in long-running LLM interactions by combining memory retrieval mechanisms with structured contextual reconstruction techniques.",
        tags: ["LLM Memory Systems", "Context Management", "RAG + Memory Hybrid Models", "Prompt Engineering"],
        link: "https://ever-mind.alexkh.site/",
        icon: Brain
    },
    {
        title: "Predictive Traffic Management System",
        description: "Machine learning system analyzing traffic camera feeds and traffic patterns to assist in smart traffic monitoring and road condition detection, including identifying road anomalies such as potholes and integrating geolocation reporting through map APIs.",
        tags: ["Computer Vision", "Machine Learning", "API Integration", "Smart Infrastructure Systems"],
        icon: LineChart
    },
    {
        title: "AI Student Productivity Assistant (Patent Pending)",
        description: "Full-stack AI productivity platform designed for students, integrating conversational AI, budgeting tools, and automation services through modular AI tools and intelligent task workflows.",
        tags: ["React", "FastAPI", "LLM Integration", "Modular AI Tools", "Automation Pipelines"],
        icon: AppWindow
    },
    {
        title: "AI Workflow Automation Systems",
        description: "Built automation frameworks integrating machine learning models, APIs, and backend services to automate repetitive business tasks including data processing pipelines, automated analysis systems, and AI-driven reporting workflows.",
        tags: ["Python", "FastAPI", "Automation Pipelines", "ML APIs", "Data Processing Systems"],
        icon: Cpu
    }
];

export const skillCategories = [
    {
        category: "Machine Learning",
        skills: ["Machine Learning", "Deep Learning", "Natural Language Processing", "Transformers", "Adversarial Machine Learning"],
        icon: Brain
    },
    {
        category: "AI Engineering",
        skills: ["RAG Systems", "LLM Applications", "Prompt Engineering", "AI Agents", "Vector Databases"],
        icon: Bot
    },
    {
        category: "MLOps",
        skills: ["Docker", "Model Deployment", "API-based ML Systems", "CI/CD for ML", "Workflow Automation", "Production ML Pipelines"],
        icon: Layers
    },
    {
        category: "Development",
        skills: ["Python", "FastAPI", "React", "MySQL", "REST APIs"],
        icon: Code
    }
];
