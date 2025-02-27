import { getCurrentYear } from "../lib/utils";

const navigationLinks = [
  { label: "Features", href: "#features" },
  { label: "Solutions", href: "#use-cases" },
  { label: "Pricing", href: "#pricing" },
  { label: "Docs", href: "/docs" },
  {
    label: "Blog",
    href: "https://medium.com/abstract-machines-blog",
  },
];

const logo = {
  src: "/img/logo-light1.png",
  alt: "Magistrala Logo",
  width: "250px",
  height: "250px",
  placeholder: "/placeholder.svg",
};

export const HeaderData = {
  logo: logo,
  navigationLinks: navigationLinks,
  ctaButton: {
    text: "Try For Free",
    link: "#pricing",
  },
};

export const FooterData = {
  companyInfo: {
    logo: logo,
    name: "Magistrala",
    description:
      "Connecting devices, sharing data, and visualizing insights with our powerful IoT platform built for the future.",
  },
  quickLinks: navigationLinks,
  socialLinks: [
    {
      platform: "Twitter",
      icon: "Twitter",
      href: "https://twitter.com/absmach",
    },
    {
      platform: "LinkedIn",
      icon: "Linkedin",
      href: "https://www.linkedin.com/company/abstract-machines",
    },
    {
      platform: "GitHub",
      icon: "Github",
      href: "https://github.com/absmach/magistrala",
    },
  ],
  contact: {
    email: "info@abstractmachines.fr",
  },
  newsletter: {
    title: "Newsletter",
    subtitle: "Stay in the loop",
    placeholder: "Your email address",
    buttonText: "Subscribe",
  },
  footerCopyright: {
    year: getCurrentYear(),
    rights: "All rights reserved.",
    policies: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
    ],
  },
};

export const HeroData = {
  title1: "Simplify Messaging",
  title2: "Empower Systems",
  title3: "Integrate Seamlessly",
  subtitle:
    "Magistrala bridges the gap between devices, applications, and systems. With multi-protocol messaging, customizable dashboards, and robust security, we make it easy to manage, monitor, and scale your operations.",
  getStartedButton: {
    text: "Get Started",
    link: "#",
  },
  requestDemoButton: {
    text: "Request For Demo",
    link: "#",
  },
  image: {
    url: "hero.webp",
    alt: "Hero Image",
  },
};

export const TrustedByData = [
  {
    name: "Target",
    logo: "img/logos/target.png",
    style: {
      height: "70px",
    },
  },
  {
    name: "Greennet",
    logo: "img/logos/greennet.png",
    style: {
      height: "40px",
    },
  },
  {
    name: "EU Commission",
    logo: "img/logos/eu.png",
    style: {
      height: "70px",
    },
  },
  {
    name: "Telefonica",
    logo: "img/logos/telefonica.png",
    style: {
      height: "40px",
    },
  },
  {
    name: "TUe",
    logo: "img/logos/tue.png",
    style: {
      height: "40px",
    },
  },
  {
    name: "TNO",
    logo: "img/logos/tno.png",
    style: {
      height: "50px",
    },
  },
  {
    name: "Intel",
    logo: "img/logos/parc.png",
    style: {
      height: "40px",
    },
  },
  {
    name: "VTT",
    logo: "img/logos/vtt.png",
    style: {
      height: "50px",
    },
  },
  {
    name: "etf",
    logo: "img/logos/etf.png",
    style: {
      height: "70px",
    },
  },
  {
    name: "LF",
    logo: "img/logos/lf.png",
    style: {
      height: "50px",
    },
  },
];

export const ProductData = {
  sectionId: "introduction",
  title: "What is Magistrala?",
  imageUrl: "img/magistrala-concept.png",
  alt: "Magistrala IoT Platform",
  content: {
    overview:
      "Magistrala is a cutting-edge Software as a Service (SaaS) platform designed to empower businesses to connect, manage, and monitor their IoT devices and applications with ease. Formerly known as Mainflux, our platform offers a suite of tools and features that simplify the development and deployment of IoT solutions, enabling businesses to scale their operations and drive innovation. This platform provides a comprehensive suite of open-source frameworks, libraries and APIs that facilitate seamless connectivity between devices, applications, and systems, ensuring that businesses can easily manage and monitor their operations in real-time.",
    security:
      "Abstract Machines is committed to delivering software that is highly resilient against cyber threats. The platform incorporates advanced encryption protocols, robust security frameworks, and other essential tools, ensuring that developers can create IoT applications with the utmost security.",
    community:
      "Magistrala is also committed to fostering a thriving open-source community of developers and contributors. Through events, discussion forums, and extensive training support, developers can leverage Magistrala’s tools to build solutions with confidence.",
  },
};

export const BenefitsData = {
  sectionId: "benefits",
  title: "Why Choose Magistrala?",
  subtitle:
    "Empower your production ecosystem with tools designed to simplify, secure, and scale your operations.",
  benefits: [
    {
      title: "State of the Art Security",
      description:
        "Build highly secure applications with advanced encryption protocols and robust security frameworks via tokens and encryptions. Magistrala ensures resilience against cyber threats giving you the confidence to innovate without compromising security.",
      imageUrl: "cybersec.avif",
    },
    {
      title: "Seamless Connectivity",
      description:
        "Connect and manage your devices effortlessly with our open-source frameworks, libraries and APIs. Enjoy a streamlined data flow as well as smooth integration of existing systems. We ensure seamless connectivity across diverse ecosystems.",
      imageUrl: "connectivity.avif",
    },
    {
      title: "Thriving Dev Community",
      description:
        "Join a vibrant open-source community that fosters collaboration and innovation. Magistrala empowers developers to create groundbreaking technologies together through the use of extensive training, timely dev support and discussion forums.",
      imageUrl: "opensource.avif",
    },
  ],
};

export const FeaturesData = {
  sectionId: "features",
  title: "Explore Our Features",
  subtitle:
    "Discover tools that make your development journey seamless and scalable.",
  features: [
    {
      title: "Data Visualization",
      description:
        "Magistrala takes data visualization to the next level with customizable dashboards that provide real-time insights into the metrics that matter most to your business. Access a variety of charts, gauges, and control systems to monitor your devices effortlessly. Track and map your devices globally using advanced location services with marker and route maps. Shareable dashboards make it easy to collaborate with your team and keep everyone informed, no matter where they are.",
      imageUrl: "visual-person.svg",
    },
    {
      title: "Efficient and Cloud-Native",
      description:
        "Magistrala enables you to build, deploy, monitor and manage your IoT applications through a robust cloud-native architecture. This provides an extremely efficient and scalable deployment. Through the use of microservices you will have complete visibility over you ecosystems with the aid of remote monitoring, detailed and exhaustive logs as well as metric. This will ensire you never miss out.",
      imageUrl: "scalability.svg",
    },
    {
      title: "Rules Engine",
      description:
        "Magistrala’s Rules Engine is a powerful tool for creating dynamic, event-driven workflows tailored to your specific needs. It enables you to filter, enrich, and transform incoming data from devices, assets, or system events. With customizable rule nodes and chains, you can trigger real-time actions such as notifications, external API calls, or data validation. Whether processing telemetry, handling lifecycle events, or automating operations, the Rules Engine ensures precise control and seamless integration across your IoT ecosystem.",
      imageUrl: "calculator.svg",
    },
    {
      title: "UI and Open APIs",
      description:
        "Magistrala offers a visually stunning and highly engaging User Interface that empowers users to create, manage and connect clients, groups, and users over channels with ease. Designed with ease of use in mind, the UI eliminates the need for coding knowledge while providing comprehensive guides and documentation for any assistance. With support for Domains, you can efficiently group people and manage them seamlessly. While the Dashboards provide intuitive data visualization, Magistrala also boasts multiple APIs and SDKs to enable effortless integration with your systems. Developers can dive into our detailed dev docs for an enjoyable and productive experience while extending the platforms functionality.",
      imageUrl: "ui-woman-with-a-laptop.svg",
    },
    {
      title: "Superior Security",
      description:
        "Magistrala is built with security at its core, ensuring the protection and integrity of your data across diverse applications. Advanced encryption, authentication, and fine-grained access control mechanisms safeguard your sensitive information protecting you from cyber threats. The platform leverages access tokens for secure, token-based authentication and integrates with Google Zanzibar for distributed policy management, enabling scalable as well as granular access policies. Whether for IoT or enterprise systems, Magistrala provides the confidence to innovate without compromising security.",
      imageUrl: "abstract-art-5.svg",
    },
    {
      title: "Readers and Writers",
      description:
        "Magistrala enables seamless communication across diverse ecosystems with its powerful readers and writers framework. Messages are securely stored in scalable databases like TimescaleDB, ensuring they can be fetched at any time with minimal latency and maximum convenience. Whether it’s historical data retrieval or real-time message delivery, Magistrala offers unmatched reliability. Leverage industry-leading tools like RabbitMQ, Mosquitto, and CoAPCLI to handle both ingestion and delivery effortlessly. With robust support for message brokers and databases, you can ensure reliable data flow, optimized performance, and the flexibility to adapt to your unique requirements.",
      imageUrl: "searching-location-on-the-phone.svg",
    },
    {
      title: "Multi-Protocol Messaging",
      description:
        "The Magistrala Platform is designed to streamline communication between devices, applications and systems, regardless of their underlying protocols such as HTTP or MQTT. This ensures that your devices can effortlessly exchange data, making your IoT infrastructure both flexible and efficient. Built with multi-protocol messaging capabilities, it empowers businesses to handle data exchange across diverse infrastructures — from IoT ecosystems to cloud-based applications and enterprise software.",
      imageUrl: "surreal-hourglass.svg",
    },
  ],
};

export const UsecasesData = {
  sectionId: "use-cases",
  title: "Use Cases",
  subtitle:
    "Here are some real-world solutions that Magistrala has aided in fruition.",
  useCases: [
    {
      title: "Smart Cities",
      description:
        "Manage traffic flow, monitor air quality, and optimize energy usage across urban environments.",
      imageUrl: "iot.jpg",
      ctaText: "Learn more",
      ctaLink: "#",
      secondaryCtaText: "View demo",
      secondaryCtaLink: "#",
    },
    {
      title: "Smart Energy",
      description:
        "Deliver and store data from smart meters in reliable and fault-tolerant way, visualize real-time and historical energy consumption data on customizable end-user dashboards.",
      imageUrl: "smart-home.jpg",
      ctaText: "Learn more",
      ctaLink: "#",
      secondaryCtaText: "View demo",
      secondaryCtaLink: "#",
    },
    {
      title: "Industrial IoT",
      description:
        "Monitor and control industrial equipment, optimize production processes, and predict maintenance needs in real-time.",
      imageUrl: "industrial.jpg",
      ctaText: "Learn more",
      ctaLink: "#",
      secondaryCtaText: "View demo",
      secondaryCtaLink: "#",
    },
  ],
};

export const PricingData = {
  sectionId: "pricing",
  title: "Pricing",
  subtitle:
    "Choose the right plan for your business needs and get started with Magistrala today.",
  plans: [
    {
      title: "Trial",
      features: ["Test 14 days for free", "Up to 5 users", "Self-service"],
      ctaText: "Sign Up",
      ctaVariant: "default" as const,
      ctaLink: "#",
    },
    {
      title: "Starter",
      features: [
        "Pay-per-user",
        "Unlimited workspaces and clients",
        "All elemental features",
      ],
      ctaText: "Sign Up",
      ctaVariant: "default" as const,
      ctaLink: "/#",
    },
    {
      title: "Enterprise",
      features: [
        "The full experience",
        "Individual models and customized dashboard templates",
        "All advanced features",
      ],
      ctaText: "Contact Us",
      ctaVariant: "success" as const,
      ctaLink: "/contact",
    },
  ],
};

export const faqData = {
  sectionId: "faq",
  title: "FAQs",
  subtitle:
    "Here are some of our most frequently asked questions. If you have any other questions, feel free to contact us.",
  faqs: [
    {
      title: "General Questions",
      faqs: [
        {
          question: "What protocols does the platform support?",
          answer:
            "Our platform supports a wide range of protocols including MQTT, HTTP, CoAP, and more. We're constantly adding support for new protocols to ensure compatibility with various devices.",
        },
        {
          question: "How secure is the data transmission?",
          answer:
            "We implement industry-standard encryption protocols and security measures to ensure that all data transmitted through our platform is secure. This includes end-to-end encryption and regular security audits.",
        },
        {
          question: "Can I integrate with existing systems?",
          answer:
            "Yes, our platform is designed to be highly integrable. We offer APIs and SDKs that allow you to easily integrate with your existing systems and workflows.",
        },
      ],
    },
    {
      title: "Billing and Subscription",
      faqs: [
        {
          question: "What are the available pricing plans?",
          answer:
            "We offer flexible pricing plans tailored to your needs. Visit our pricing section for detailed information.",
        },
        {
          question: "How do I upgrade my plan?",
          answer:
            "You can upgrade your plan directly from your billing page. Select the desired plan and complete the payment process.",
        },
      ],
    },
  ],
};
