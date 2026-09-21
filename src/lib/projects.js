export const projects = [
  {
    title: `Research Agent`,
    description: `
    <ul>
      <li>Built a <strong>multi-step AI research agent</strong> using <strong>LangGraph</strong> that plans research tasks, autonomously selects tools, gathers evidence from <strong> Web,Wikipedia, and ArXiv, </strong> and generates citation-grounded research responses.</li>

      <li>Developed a <em><strong>hybrid RAG pipeline</strong></em> with <strong>ChromaDB</strong> and local <strong>BAAI/bge-m3 embeddings</strong>, combining <strong>dense retrieval,
      BM25 lexical search, Reciprocal Rank Fusion (RRF), and cross-encoder reranking</strong> for relevant document retrieval.</li>
      <li>Implemented <strong>quality-controlled generation</strong>  with LLM-based critique and iterative revision, human-in-the-loop clarification, session-isolated document storage, multi-format document ingestion, and <strong>Streamlit</strong> research workflow visualization.</li>
    </ul>
    `,
    image: [
      "/projects/researchAgent/query 1-1.png",
      "/projects/researchAgent/query 2-1.png",
      "/projects/researchAgent/query 2-2.png",
    ], // multiple images for slideshow
    tags: ["Python", "LangGraph", "LangChain", "ChromaDB", "Hugging Face", "Streamlit"],
    slideshow: true,
    github:"https://github.com/anirban2005143a/research_agent",
    demo:"https://github.com/anirban2005143a/research_agent/blob/main/recordings%20and%20screenshots/recording.mp4"
    // ongoing: true,
  },
  {
    title: `JobPilot`,
    description: `
    <ul>
      <li><strong>AI-powered automatic job application platform</strong> that finds and applies to jobs based on user profile and resumes.</li>
      <li>Built a <em><strong>modular asynchronous system</strong></em> using <strong>BullMQ</strong>with independent workers managing the complete job lifecycle from collection and matching to scheduling, applications, status checks, notifications, and recovery.</li>
      <li>Implemented a common <strong>JobSource interface</strong> to integrate different job portals, along with a dedicated <strong>FastAPI AI service</strong> for resume parsing, job matching, and application content generation.</li>
    </ul>
    `,
    image: [
      // "/projects/legalSummarization/img1.png",
      // "/projects/legalSummarization/img2.png",
      // "/projects/legalSummarization/img3.png",
      // "/projects/legalSummarization/img4.png",
    ], // multiple images for slideshow
    tags: ["Node.js", "Next.js (TypeScript)", "FastAPI", "BullMQ", "Redis", "MongoDB"],
    slideshow: true,
    github:"https://github.com/anirban2005143a/job_pilot"
    // ongoing: true,
  },
  {
    title: `NYC TLC Taxi Trip Analysis`,
    description: `
    <ul>
      <li>Performed end-to-end analysis of <strong>NYC TLC Yellow Taxi trip data</strong>, including data exploration, quality assessment,
cleaning, and preparation using <strong>Python and Pandas</strong>.</li>
      <li>Analyzed <strong>trip, fare, payment, time, passenger, and location patterns</strong> and stored the cleaned dataset in <strong>PostgreSQL</strong>
for structured analysis.</li>
      <li>Built an interactive <strong>Power BI dashboard</strong> with filters and visualizations to analyze taxi demand, trip characteristics,
fares, payment behavior, and geographic activity.</li>
    </ul>
    `,
    image: [
      "/projects/NYC_Taxi_Trip/Fare, Payment & Revenue Analysis.png",
      "/projects/NYC_Taxi_Trip/Trip Efficiency, Geography & Data Quality.png",
      "/projects/NYC_Taxi_Trip/Trip Overview & Demand.png",
    ], // multiple images for slideshow
    tags: ["Python", "Pandas", "PostgreSQL", "Power BI"],
    slideshow: true,
    github:"https://github.com/anirban2005143a/NYC-TLC-Analysis",
    // ongoing: true,
    demo:"https://github.com/anirban2005143a/NYC-TLC-Analysis/blob/main/NYC_Taxi_Trip_recoding.mp4"
  },
  {
    title: `Food Delivery Analytics Dashboard`,
    description: `
    <ul>
      <li>Cleaned and transformed <strong>customer, order, and restaurant data</strong> using <strong>Python/Jupyter and Power Query</strong>, preparing datasets for business analysis.</li>
      <li>Developed <strong>DAX-based analytical measures</strong> and a relational Power BI data model to analyze revenue, orders,
customer behavior, restaurant performance, and delivery operations.</li>
      <li>Built an interactive <strong>6-page Power BI dashboard</strong> with dynamic metrics, filters, cross-filtering, and drill-downs for
executive, customer, restaurant, and operational analysis.</li>
    </ul>
    `,
    image: [
      "/projects/food_delivery_app_dashboard/Advance Insights.png",
      "/projects/food_delivery_app_dashboard/Customer Analytics.png",
      "/projects/food_delivery_app_dashboard/Delivery and Operations.png",
      "/projects/food_delivery_app_dashboard/Executive Overview.png",
      "/projects/food_delivery_app_dashboard/Restaurant Details.png",
      "/projects/food_delivery_app_dashboard/Restaurant Performace.png",
    ], // multiple images for slideshow
    tags: ["Python", "Pandas", "Power Query", "DAX", "Power BI", "Excel"],
    slideshow: true,
    github:"https://github.com/anirban2005143a/Food-Delivery-App-Dashboard",
    // ongoing: true,
    demo:"https://github.com/anirban2005143a/Food-Delivery-App-Dashboard/blob/main/food_delivery_app_recording.mp4"
  },
  {
    title: `AI-Powered Indian Legal Judgment Summarization`,
    description: `Instantly <strong>analyze</strong> and <strong>summarize</strong> Indian court judgments using 
    <em>advanced AI models</em>. Built for <strong>legal professionals</strong>, <strong>law students</strong>, and 
    <strong>researchers</strong> who need clarity, speed, and accuracy in legal research.`,
    image: [
      "/projects/legalSummarization/img1.png",
      "/projects/legalSummarization/img2.png",
      "/projects/legalSummarization/img3.png",
      "/projects/legalSummarization/img4.png",
    ], // multiple images for slideshow
    tags: ["Next.js", "TypeScript", "Fast API", "Huggingface", "Runpod", "Tailwind CSS"],
    slideshow: true,
    // ongoing: true,
  },
  {
    title: "Atom Books",
    description: `
    <p><strong>Atom Books</strong> is a <em>smart accounting platform</em> I developed as a <strong>frontend developer intern at GoFloww</strong>.</p>
    <ul>
      <li>Automates <strong>financial tracking</strong> and <strong>real-time reporting</strong> for businesses.</li>
      <li>Helps with <strong>tax compliance</strong> and integrates with other <strong>Atom Suite products</strong>.</li>
      <li>Offers a <strong>user-friendly interface</strong> for easy navigation and management.</li>
    </ul>
  `,
    image: [
      "/projects/atomAccounting/img1.png",
      "/projects/atomAccounting/img2.png",
      "/projects/atomAccounting/img3.png",
      "/projects/atomAccounting/img4.png",
      "/projects/atomAccounting/img5.png",
      "/projects/atomAccounting/img6.png",
      "/projects/atomAccounting/img7.png",
      "/projects/atomAccounting/img8.png",
      "/projects/atomAccounting/img9.png",
      "/projects/atomAccounting/img10.png",
      "/projects/atomAccounting/img11.png",
    ],
    tags: [
      "React.js",
      "Node.js",
      "Context API",
      "MongoDB",
      "Tailwind CSS",
      "AI-powered Accounting",
    ],
    github: "",
    // demo: "https://books.gofloww.co/",
    slideshow: true,
  },
  {
    title: "Code Fusion",
    description: `
    <p><strong>Code Fusion</strong> is an <em>online code editor</em> supporting real-time collaboration, multiple languages, and customizable themes.</p>
    <ul>
      <li>Enables multiple developers to collaborate in real-time with <strong>live cursor tracking</strong> and integrated in-app chat for seamless communication.</li>
      <li>Integrates <strong>auto-completion</strong>, <strong>real-time syntax error detection</strong>, and <strong>persistent code-saving functionality</strong>.</li>
      <li>Offers various themes, <em>multi-language support</em>, and a <strong>collapsible sidebar</strong> for efficient file management.</li>
    </ul>
  `,
    image: [
      "/projects/codeFusion/img1.png",
      "/projects/codeFusion/img2.png",
      "/projects/codeFusion/img3.png",
      "/projects/codeFusion/img4.png",
      "/projects/codeFusion/img5.png",
    ],
    tags: ["React.js", "Flask", "Express.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/anirban2005143a/code-Fusion",
    demo: "https://code-fusion-code-collab.vercel.app/",
    slideshow: true,
  },
  {
    title: "Parakram 2025 - The Sports Fest of IIT (ISM) Dhanbad",
    description: `
    <p><strong>Parakram 2025</strong> is the official <em>Sports Fest website</em> of <strong>IIT (ISM) Dhanbad</strong>, built to streamline student participation and management.</p>
    <ul>
      <li>Provides a smooth <strong>registration system</strong> for students from other colleges, supporting both <strong>individual</strong> and <strong>multiple student registrations</strong>.</li>
      <li>Uses <strong>Context API</strong> for efficient state management and seamless handling of registration data across the application.</li>
      <li>Features a secure <strong>Admin Page</strong> with <strong>username and password authentication</strong>, enabling admins to view and manage registered students.</li>
      <li>Admin can <strong>filter participants</strong> by <em>sports discipline</em> and also manage <em>team-wise grouping</em> for better organization.</li>
    </ul>
  `,
    image: [
      "/projects/parakram/img1.png",
      "/projects/parakram/img2.png",
      "/projects/parakram/img3.png",
      "/projects/parakram/img4.png",
      "/projects/parakram/img5.png",
    ],
    tags: ["React.js", "Context API", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/anirban2005143a/parakram-2025",
    demo: "https://parakram25-iitism.in/",
    slideshow: true,
  },
  {
    title: "NoteBridge",
    description: `
    <p><strong>NoteBridge</strong> is built using <em>React.js</em>, <em>Express.js</em>, <em>MongoDB</em>, and <em>Bootstrap</em>.</p>
    <ul>
      <li>A feature-rich <strong>note-taking and sharing platform</strong> that enables structured organization through folders and facilitates seamless file sharing with controlled access.</li>
      <li>Enables <strong>interactive engagement</strong> through features like <strong>likes</strong>, <strong>comments</strong>, and <strong>shares</strong>.</li>
      <li>Provides a comprehensive profile page displaying the <strong>total number of posts, followers, and following</strong>, along with an organized archive of past posts for easy access and engagement.</li>
    </ul>
  `,
    image: [
      "/projects/noteBridge/img1.png",
      "/projects/noteBridge/img2.png",
      "/projects/noteBridge/img3.png",
      "/projects/noteBridge/img4.png",
      "/projects/noteBridge/img5.png",
      "/projects/noteBridge/img6.png",
      "/projects/noteBridge/img7.png",
      "/projects/noteBridge/img8.png",
    ],
    tags: ["React.js", "Express.js", "MongoDB", "Bootstrap"],
    github: "https://github.com/anirban2005143a/note-bridge",
    demo: "https://notebridge.vercel.app/",
    slideshow: true,
  },
  {
    title: "DIGMIN-2025",
    description: `
    <p><strong>DIGMIN-2025</strong> is an <em>International Conference on Digital Mining</em> organized by <strong>IIT (ISM) Dhanbad</strong>.</p>
    <ul>
      <li>A premier platform for <strong>researchers, industry experts, and academicians</strong> to discuss advancements in <strong>digital technologies in mining</strong>.</li>
      <li>Focuses on innovations in <strong>automation, AI/ML applications, IoT, data analytics, and sustainable mining practices</strong>.</li>
      <li>Provides opportunities for <strong>knowledge exchange, networking, and collaboration</strong> among global participants.</li>
      <li>Hosted at <strong>IIT (ISM) Dhanbad</strong>, one of India’s leading institutes in mining and earth sciences.</li>
    </ul>
  `,
    image: [
      "/projects/digmin/img1.png",
      "/projects/digmin/img2.png",
      "/projects/digmin/img3.png",
      "/projects/digmin/img4.png",
    ],
    tags: [
      "Digital Mining",
      "AI/ML",
      "IoT",
      "Sustainable Mining",
      "IIT ISM Dhanbad",
    ],
    github: "",
    demo: "https://international-conference-digimin-2025.vercel.app/",
    slideshow: true,
  },
  {
    title: "Movie Flix",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB"],
    description: `<strong>Movie Flix</strong> — <em>Winner of Winter Of Code 6.O</em> in the <strong>Web Development Division</strong>, 
      a one-month long hackathon conducted by <strong>CyberLabs, IIT(ISM) Dhanbad</strong>. Movie Flix is a dynamic movie application 
      where users can discover a wide range of <strong>movies and web series</strong> across different <strong>genres</strong> 
      and <strong>languages</strong>. It features powerful <strong>search functionality</strong>, allowing users to quickly find titles 
      of interest. Users can <strong>rate</strong>, <strong>like</strong>, and <strong>add movies to their wishlist</strong> for 
      future viewing. The platform also includes robust <strong>authentication</strong> to ensure secure and personalized user access, 
      making it a fully engaging entertainment experience.`,
    image: [
      "/projects/movieFlix/img1.png",
      "/projects/movieFlix/img2.png",
      "/projects/movieFlix/img3.png",
      "/projects/movieFlix/img4.png",
      "/projects/movieFlix/img5.png",
      "/projects/movieFlix/img6.png",
      "/projects/movieFlix/img7.png",
      "/projects/movieFlix/img8.png",
      "/projects/movieFlix/img9.png",
    ],
    slideshow: true,
    github: "https://github.com/anirban2005143a/movieflix",
    demo: "https://movieflix2005.netlify.app/",
  },
];
