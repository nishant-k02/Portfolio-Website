/**
 * Project data for the Work section and case-study modal.
 *
 * Every project has: title, category, tagline, imgSrc, tags, projectLink, stats.
 * Projects with a `caseStudy` object get a "View case study" modal.
 *
 * Copy is drafted from each repo's README and source — edit freely.
 */

const projects = [
  {
    slug: "resumelens",
    title: "ResumeLens",
    category: "AI tooling · ATS analysis",
    tagline:
      "An AI-powered resume analyzer that scores ATS compatibility against a job description and generates accept/reject-able rewrite suggestions.",
    imgSrc: "/images/project12.png",
    tags: ["Next.js 15", "TypeScript", "Claude 3.5 Sonnet", "Zod", "AWS Amplify", "CI/CD"],
    projectLink: "https://resumelenslite.vercel.app",
    repoLink: "https://github.com/nishant-k02/ResumeLens",
    featured: true,
    stats: [
      { value: "Hybrid", label: "rules + LLM scoring" },
      { value: "PDF · DOCX", label: "resume parsing" },
      { value: "Per-line", label: "accept / reject edits" },
    ],
    caseStudy: {
      pipeline: [
        { step: "Parse", text: "Extract and normalise text from pasted input, PDF (pdf-parse) or DOCX (mammoth)." },
        { step: "Score", text: "Weighted keyword + requirement coverage produces a capped, realistic ATS score." },
        { step: "Analyse", text: "Claude classifies must-have vs nice-to-have requirements and pulls evidence from both sides." },
        { step: "Suggest", text: "Original → improved text with reasoning; each suggestion can be accepted, rejected or regenerated." },
        { step: "Regenerate", text: "Only accepted edits are applied deterministically; the original resume is preserved." },
      ],
      challenge:
        "Most ATS checkers either match keywords naively or return a single opaque score. Candidates need to know which requirements they miss, why, and what to change — without an LLM silently rewriting their whole resume.",
      approach:
        "I combined rule-based ATS heuristics with LLM semantic analysis. The heuristics keep scores honest and stable; Claude handles requirement-level reasoning and rewrite suggestions, validated with Zod schemas so the UI never receives malformed output. Suggestions are non-destructive until explicitly accepted.",
      outcome:
        "A production app on AWS Amplify / Vercel with CI/CD that gives a match percentage, a must-have vs nice-to-have breakdown, keyword gaps, and a regenerated resume preview built only from accepted edits.",
      contribution: [
        "Designed the end-to-end scoring model and the accept/reject suggestion workflow.",
        "Built the Next.js App Router frontend with Framer Motion transitions and dark mode.",
        "Wrote the Claude integration and Zod-validated API routes; set up CI/CD deployment.",
      ],
      decisions: [
        "Kept ATS scoring rule-based so results are explainable and don't drift with model updates.",
        "Made every LLM edit opt-in and regenerable, so the user stays in control of their resume.",
        "Normalised keyword weighting to avoid inflated scores from repeated terms.",
      ],
    },
  },
  {
    slug: "shophub",
    title: "ShopHub – AI-Powered E-commerce Platform",
    category: "Full-stack · Conversational commerce",
    tagline:
      "A Next.js 15 storefront with JWT auth, cart, wishlist and checkout — plus a LangChain shopping assistant that finds products, adds them to the cart and tracks orders in plain English.",
    imgSrc: "/images/project10.jpg",
    tags: ["Next.js 15", "React 19", "TypeScript", "MongoDB Atlas", "LangChain", "LangGraph", "OpenAI", "JWT", "Tailwind"],
    projectLink: "https://shop-hub-ecommerce.vercel.app",
    repoLink: "https://github.com/nishant-k02/ShopHub-AI-Powered-E-commerce-Platform",
    stats: [
      { value: "60", label: "products · 7 categories" },
      { value: "Chat-to-cart", label: "LLM adds items & tracks orders" },
      { value: "JWT", label: "HTTP-only cookie auth" },
    ],
    caseStudy: {
      pipeline: [
        { step: "Browse", text: "Catalogue with search, category filters and price/popularity sort; product pages with specs, reviews and related items." },
        { step: "Sign in", text: "JWT auth in HTTP-only cookies, bcrypt-hashed passwords, profile and password management." },
        { step: "Ask", text: "Shoppers talk to the assistant — “gaming laptops under $1000”." },
        { step: "Act", text: "LangChain + LangGraph tools search products, add to cart and look up orders on the user's behalf." },
        { step: "Checkout", text: "Address and payment validation, saved payment methods, tax/shipping, order history and cancellation." },
      ],
      challenge:
        "Keyword search can't answer “something for a Chicago winter under $100”, and most assistants can only talk; they cannot act on the catalogue. The goal was an assistant that reasons over live product data and can take action.",
      approach:
        "Built the platform on Next.js 15 App Router with API routes over MongoDB Atlas, then gave the assistant tool access via LangChain and LangGraph: product search, add-to-cart and order lookup are tools the GPT-3.5-turbo agent can call, so answers are grounded in live data and side effects are explicit.",
      outcome:
        "A deployed, end-to-end store — auth, catalogue, cart, wishlist, checkout, order tracking — where the AI assistant is a first-class way to shop rather than an add-on.",
      contribution: [
        "Designed and built the full stack: Next.js app, API routes, MongoDB schema and seed scripts.",
        "Implemented JWT/HTTP-only-cookie auth, protected routes and input validation on every endpoint.",
        "Built the LangChain/LangGraph agent with product-search, cart and order tools.",
      ],
      decisions: [
        "Gave the LLM tools instead of free text so it can act (add to cart) without hallucinating products.",
        "Used HTTP-only cookies for JWTs to keep tokens out of JavaScript.",
        "Kept cart and wishlist behind login so they persist across devices.",
      ],
    },
  },
  {
    slug: "healthcare-ai-assistant",
    title: "Healthcare AI Assistant",
    category: "Mobile · Multi-agent AI",
    tagline:
      "A Flutter health-assistant chatbot backed by FastAPI, AutoGen agents and OpenAI that answers symptom questions and surfaces medicine info with safety disclaimers.",
    imgSrc: "/images/project1.jpg",
    tags: ["Flutter", "Python", "FastAPI", "AutoGen", "OpenAI", "ChromaDB"],
    projectLink: "https://github.com/nishant-k02/HealthCareAIAssistant.git",
    stats: [
      { value: "Multi-agent", label: "AutoGen backend" },
      { value: "Flutter", label: "cross-platform app" },
      { value: "Built-in", label: "medical disclaimers" },
    ],
    caseStudy: {
      pipeline: [
        { step: "Chat", text: "User describes symptoms or asks a health question in the Flutter app." },
        { step: "Route", text: "FastAPI receives the message and hands it to AutoGen agents." },
        { step: "Retrieve", text: "ChromaDB provides semantic retrieval for relevant health content." },
        { step: "Respond", text: "OpenAI composes a grounded answer plus medicine information and pricing." },
        { step: "Guard", text: "Every reply carries an AI disclaimer advising a doctor consult." },
      ],
      challenge:
        "Health questions are high-stakes: answers must be useful without pretending to be a diagnosis, and the app had to work on mobile with a Python AI backend.",
      approach:
        "Separated concerns cleanly — Flutter for the chat UI, FastAPI as the API layer, AutoGen for agent orchestration and ChromaDB for retrieval — so each piece could be swapped or scaled independently.",
      outcome:
        "A working cross-platform assistant that returns personalised recommendations and medicine details, with disclaimers built into every response.",
      contribution: [
        "Built the Flutter chat interface and backend communication layer.",
        "Implemented the FastAPI + AutoGen + OpenAI backend with ChromaDB retrieval.",
      ],
      decisions: [
        "Chose AutoGen to structure multi-step reasoning instead of one monolithic prompt.",
        "Added retrieval so answers cite real content rather than model memory alone.",
      ],
    },
  },
  {
    slug: "car-damage-detection",
    title: "Car Damage Detection",
    category: "Computer vision · Transfer learning",
    tagline:
      "A Django app that runs an uploaded car photo through a four-stage VGG16 pipeline to confirm it's a car, detect damage, locate it (front / rear / side) and grade severity — my B.E. capstone.",
    imgSrc: "/images/project2.jpg",
    tags: ["Django", "TensorFlow", "Keras", "VGG16", "scikit-learn", "Python"],
    projectLink: "https://github.com/nishant-k02/BE-Project.git",
    repoLink: "https://github.com/nishant-k02/BE-Project",
    stats: [
      { value: "4-stage", label: "classification pipeline" },
      { value: "VGG16", label: "ImageNet features" },
      { value: "3 × 3", label: "location × severity classes" },
    ],
    caseStudy: {
      pipeline: [
        { step: "Upload", text: "User submits a photo through the Django form." },
        { step: "Validate", text: "VGG16 top-5 ImageNet predictions confirm the image is actually a car." },
        { step: "Detect", text: "fc1 features feed a classifier that decides damaged vs whole." },
        { step: "Locate", text: "A second classifier labels the damage Front, Rear or Side." },
        { step: "Grade", text: "A third classifier rates severity Minor, Moderate or Severe, with a heat-map view." },
      ],
      challenge:
        "Insurance claims start with a photo, and triaging where and how badly a car is damaged is slow and inconsistent by hand. We wanted a browser tool that gives a structured assessment from a single image.",
      approach:
        "Rather than training a single large model on a limited dataset, we used VGG16 pre-trained on ImageNet as a frozen feature extractor and chained small scikit-learn classifiers on its fc1 features — one gate per question (car? damaged? where? how bad?). Django wraps the pipeline so assessors just upload a photo.",
      outcome:
        "A working end-to-end assessment tool that returns damage presence, location and severity plus a heat-map, built with a four-person team as our final-year project.",
      contribution: [
        "Built the Django application, upload flow and inference views.",
        "Implemented the staged VGG16 feature-extraction + classifier pipeline.",
      ],
      decisions: [
        "Transfer learning over from-scratch training — far better accuracy on a small labelled dataset.",
        "Staged gates (car → damage → location → severity) so each classifier solves one narrow problem and failures are explainable.",
      ],
    },
  },
  {
    slug: "gitpulse",
    title: "GitPulse",
    category: "Agentic AI · Text-to-SQL analytics",
    tagline:
      "Ask a GitHub repository questions in plain English — a LangGraph agent writes and runs the SQL + Python, then returns tables, forecasts and charts in Streamlit.",
    imgSrc: "/images/project11.png",
    tags: ["LangGraph", "OpenAI gpt-4o-mini", "PostgreSQL", "Streamlit", "Polars", "Prophet", "Matplotlib"],
    projectLink: "https://gitagenticanalysis.streamlit.app/",
    repoLink: "https://github.com/nishant-k02/GitPulse-AI-Agentic-Analytics-Platform",
    stats: [
      { value: "NL → SQL", label: "agent-generated queries" },
      { value: "4 tables", label: "repos · issues · PRs · commits" },
      { value: "Forecasts", label: "Prophet + Statsmodels" },
    ],
    caseStudy: {
      pipeline: [
        { step: "Fetch", text: "Pull repos, issues, pull requests and commits from the GitHub API into CSVs." },
        { step: "Load", text: "Create the relational schema and load the data into PostgreSQL." },
        { step: "Ask", text: "User types a natural-language question in the Streamlit UI." },
        { step: "Generate", text: "A LangGraph + gpt-4o-mini agent writes SQL and Python for the question." },
        { step: "Execute", text: "Code runs in a Python REPL over Polars; results return as markdown tables or Matplotlib / Prophet charts." },
      ],
      challenge:
        "Repository analytics usually means hand-writing SQL for every new question. I wanted anyone to ask “which repo's issue backlog is growing fastest?” or “forecast commits for next month” and get an answer with a chart.",
      approach:
        "Modelled the analysis as a LangGraph workflow: the agent inspects the schema, generates SQL + Python, executes it in a sandboxed REPL, and retries on errors. Polars handles the data frames, Prophet and Statsmodels power forecasting when the question asks for it.",
      outcome:
        "A deployed Streamlit app where a question becomes a query, a table and — when requested — a visualisation or time-series forecast, without writing any SQL.",
      contribution: [
        "Built the GitHub → CSV → Postgres data pipeline and schema.",
        "Designed the LangGraph agent, tool set and REPL executor.",
        "Built the Streamlit interface and deployed it.",
      ],
      decisions: [
        "Let the agent generate code and run it, rather than hard-coding analyses, so new questions need no new code.",
        "Chose a graph-based agent for explicit retry and error-handling steps over a single prompt.",
        "Stored data in Postgres so questions run on a real relational schema, not CSVs.",
      ],
    },
  },
  {
    slug: "sunwise",
    title: "SunWise",
    category: "Hackathon · ML + Maps",
    tagline:
      "Search any address and instantly see its rooftop solar potential, estimated output, savings and carbon offset — built in 24 hours at Scarlet Hawks 2025.",
    imgSrc: "/images/project7.jpg",
    tags: ["React", "Flask", "Random Forest", "UNet", "Google Maps API", "Recharts"],
    projectLink: "https://github.com/nishant-k02/SunWise_Scarlet_Hawks_Hackathon_2025.git",
    stats: [
      { value: "24 hrs", label: "hackathon build" },
      { value: "2 models", label: "Random Forest + UNet" },
      { value: "Maps API", label: "rooftop overlay" },
    ],
    caseStudy: {
      pipeline: [
        { step: "Search", text: "Google Maps autocomplete finds the location." },
        { step: "Segment", text: "UNet approximates the rooftop as a polygon overlay on satellite view." },
        { step: "Predict", text: "Random Forest estimates solar output from lat/long and monthly climate data." },
        { step: "Calculate", text: "Cost analysis with incentives, payback period and carbon offset." },
        { step: "Visualise", text: "Recharts dashboards show output and savings." },
      ],
      challenge:
        "Homeowners can't easily tell whether solar is worth it for their specific roof; existing tools are generic or paywalled.",
      approach:
        "Paired an image-segmentation model for the rooftop with a tabular regressor for energy output, then built a personal solar calculator on top — all in a 24-hour hackathon.",
      outcome:
        "A working demo that turns an address into a personalised solar report with output, savings and environmental impact.",
      contribution: ["React + Google Maps frontend with polygon overlay and charts.", "Flask backend serving the ML models."],
      decisions: ["Used Random Forest for fast, interpretable predictions under hackathon time limits."],
    },
  },
  {
    slug: "blogboard",
    title: "BlogBoard",
    category: "Full-stack · Search + AI",
    tagline:
      "A school blogging platform on Elasticsearch with AI comment replies, category subscriptions with real-time notifications, and a location-aware “Recommended for you” assistant.",
    imgSrc: "/images/project8.jpeg",
    tags: ["React", "Node.js", "Express", "Elasticsearch", "OpenAI", "Google Maps"],
    projectLink: "https://github.com/nishant-k02/School-Blogging-Website.git",
    stats: [
      { value: "Elasticsearch", label: "post storage + search" },
      { value: "Real-time", label: "subscriber notifications" },
      { value: "3 APIs", label: "weather · maps · SerpAPI" },
    ],
    caseStudy: {
      pipeline: [
        { step: "Post", text: "Users create, like, comment on and delete posts." },
        { step: "Index", text: "Content is stored and searched in Elasticsearch." },
        { step: "Notify", text: "New posts trigger notifications to category subscribers." },
        { step: "Reply", text: "Optional GPT-3.5 generated comment replies." },
        { step: "Recommend", text: "Weather + location + SerpAPI feed an AI recommendation map." },
      ],
      challenge:
        "A campus blog needs fast search and engagement features, and I wanted to explore how real-world context (location, weather) could drive AI recommendations.",
      approach:
        "Used Elasticsearch as the primary store for search speed, Express for the API, and composed OpenAI with OpenWeatherMap, SerpAPI and Google Maps for the recommendation popup.",
      outcome:
        "A full-stack platform with search, subscriptions, notifications, AI replies and a live recommendation map.",
      contribution: ["Frontend (React, Material-UI, Maps), Express API and Elasticsearch routes.", "OpenAI, SerpAPI and weather integrations."],
      decisions: ["Chose Elasticsearch over a relational DB to make search the first-class feature."],
    },
  },
  {
    slug: "sportify",
    title: "Sportify",
    category: "Full-stack · Recommendations",
    tagline:
      "A sports-event explorer with OpenAI recommendations from location and browsing history, plus a role-based admin dashboard for moderating reviews.",
    imgSrc: "/images/project9.jpg",
    tags: ["React", "Tailwind", "Node.js", "Express", "MongoDB", "JWT", "OpenAI"],
    projectLink: "https://github.com/nishant-k02/Sportify.git",
    stats: [
      { value: "AI", label: "personalised picks" },
      { value: "RBAC", label: "admin dashboard" },
      { value: "Vercel", label: "serverless deploy" },
    ],
    caseStudy: {
      pipeline: [
        { step: "Search", text: "Find events with location-based filtering." },
        { step: "Track", text: "Recent searches and clicks build a lightweight history." },
        { step: "Recommend", text: "OpenAI ranks events using location + history." },
        { step: "Review", text: "Users leave reviews on events." },
        { step: "Moderate", text: "Admins bulk-manage reviews and users." },
      ],
      challenge:
        "Event discovery is noisy; recommendations should reflect where you are and what you've looked at, and moderation needs to be safe and fast.",
      approach:
        "JWT auth with a role field in MongoDB gates the admin panel; recommendation prompts are built from IP location and history; destructive actions all have confirmation modals.",
      outcome:
        "A deployed team project (Team 14) with user and admin panels, AI recommendations and bulk moderation tools.",
      contribution: ["Backend APIs, JWT auth and MongoDB role model.", "Admin dashboard with bulk delete and confirmations."],
      decisions: ["Kept event data file-based and users in MongoDB to keep the demo simple to deploy."],
    },
  },
  {
    slug: "covid-analyzer",
    title: "Covid Stats Analyzer",
    category: "Data · Dashboards",
    tagline: "Pulled live COVID statistics from a public API with Python and visualised trends in a Power BI dashboard.",
    imgSrc: "/images/project4.jpg",
    tags: ["Python", "REST API", "Power BI"],
    projectLink: "https://github.com/nishant-k02/Covid-Dashboard-Project.git",
    stats: [
      { value: "Live", label: "API data" },
      { value: "Power BI", label: "interactive dashboard" },
      { value: "Python", label: "ETL scripts" },
    ],
  },
  {
    slug: "code-editor",
    title: "Code Editor",
    category: "Frontend · Tooling",
    tagline: "A browser-based HTML/CSS/JS playground with live preview, built on CodeMirror.",
    imgSrc: "/images/project5.jpg",
    tags: ["React", "Bootstrap", "CodeMirror"],
    projectLink: "https://code-editor-ten-inky.vercel.app/",
    stats: [
      { value: "Live", label: "preview" },
      { value: "CodeMirror", label: "editor core" },
      { value: "Vercel", label: "deployed" },
    ],
  },
  {
    slug: "android-weather",
    title: "Android Weather App",
    category: "Mobile · Android",
    tagline: "A native Android app that fetches current conditions and forecasts from a weather API.",
    imgSrc: "/images/project6.jpg",
    tags: ["Android", "Java", "REST API"],
    projectLink: "https://github.com/nishant-k02/Android-Weather-App.git",
    stats: [
      { value: "Java", label: "native Android" },
      { value: "REST", label: "weather API" },
      { value: "Forecast", label: "multi-day view" },
    ],
  },
];

export default projects;
