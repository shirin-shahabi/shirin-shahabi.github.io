// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-i-was-accepted-to-mcmaster-university-under-the-supervision-of-prof-manish-verma-with-an-excellence-scholarship",
          title: 'I was accepted to McMaster University under the supervision of Prof. Manish Verma...',
          description: "",
          section: "News",},{id: "news-i-have-started-my-full-time-position-at-inference-labs-to-work-on-verifiable-inference",
          title: 'I have started my Full-time position at Inference Labs to work on Verifiable...',
          description: "",
          section: "News",},{id: "news-i-participated-in-the-deep-learning-and-reinforcement-learning-dlrl-2024-summer-school-at-vector-institute",
          title: 'I participated in the Deep Learning and Reinforcement Learning (DLRL) 2024 summer school...',
          description: "",
          section: "News",},{id: "news-i-successfully-defended-my-master-s-thesis-at-mcmaster-university-focusing-on-multi-objective-bi-level-hierarchical-reinforcement-learning-this-work-enhances-traditional-stochastic-optimization-and-multi-armed-bandit-approaches-to-offer-interpretable-decision-making-frameworks",
          title: 'I successfully defended my Master’s thesis at McMaster University, focusing on “Multi-Objective Bi-Level...',
          description: "",
          section: "News",},{id: "news-our-paper-titled-enhanced-pareto-optimality-with-reinforcement-learning-approach-has-been-accepted-for-presentation-at-the-cors-2025-conference",
          title: 'Our paper titled “Enhanced Pareto Optimality with Reinforcement Learning Approach” has been accepted...',
          description: "",
          section: "News",},{id: "news-promoted-to-ai-researcher-at-inference-labs-starting-may-2025-i-will-be-leading-research-initiatives-in-distributed-verifiable-inference-and-zero-knowledge-machine-learning",
          title: '🎉 Promoted to AI Researcher at Inference Labs! Starting May 2025, I will...',
          description: "",
          section: "News",},{id: "news-first-dsperse-paper-and-framwork-is-out",
          title: 'First DSperse Paper and framwork is out!',
          description: "",
          section: "News",},{id: "news-accepted-to-rl-residency-program-at-prime-intellect-honored-to-be-selected-for-prime-intellect-s-prestigious-reinforcement-learning-residency-program",
          title: '🎉 Accepted to RL Residency Program at Prime Intellect! Honored to be selected...',
          description: "",
          section: "News",},{id: "projects-local-quantized-deepseek-r1-the-671b-parameter-model",
          title: 'Local Quantized DeepSeek-R1 the 671B-Parameter Model',
          description: "Dynamic Quantization Approach for Large Language Models",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-python-tutorial-for-statistical-data-analysis",
          title: 'Python Tutorial for Statistical Data Analysis',
          description: "A comprehensive tutorial series on Python for Statistical Data Analysis in Healthcare",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/shirin-shahabi", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/shirinlshahabi", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/shirin-shahabinejad", "_blank");
        },
      },{
        id: 'social-medium',
        title: 'Medium',
        section: 'Socials',
        handler: () => {
          window.open("https://medium.com/@shahas8", "_blank");
        },
      },{
        id: 'social-discord',
        title: 'Discord',
        section: 'Socials',
        handler: () => {
          window.open("https://discord.com/users/shirin3662", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=DKjo_iMAAAAJ", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%73%68%69%72%69%6E.%73%68%61%68%61%62%69%6E%65%6A%61%64@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
