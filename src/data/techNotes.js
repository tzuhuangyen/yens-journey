export const techNotes = [
  {
    slug: 'how-i-started-frontend-self-learning',
    title: 'How I started my Frontend self-learning journey as a mom',
    category: 'Web Development',
    date: '2026-07-15',
    excerpt: 'My personal learning roadmap, time-management tips, and how I balanced coding with parenting.',
    readingTime: '5 min read',
    tags: ['React', 'Self-Learning', 'Career'],
    content: [
      {
        type: 'paragraph',
        text: 'Starting a coding journey while raising a child is one of the most challenging yet rewarding decisions I have ever made. Time becomes your most valuable currency, and consistency is far more important than intensity.'
      },
      {
        type: 'heading',
        text: '1. Finding the "Golden Hours"'
      },
      {
        type: 'paragraph',
        text: 'As a mom, uninterrupted blocks of time are rare. I had to build my learning schedule around nap times and early mornings. Even 45 minutes of focused, high-quality coding per day is better than trying to cram 5 hours on a chaotic weekend.'
      },
      {
        type: 'heading',
        text: '2. Choosing the Right Stack'
      },
      {
        type: 'paragraph',
        text: 'Instead of trying to learn everything, I focused on a clean, modern stack: HTML, CSS, JavaScript, and React. Mastering the fundamentals of JavaScript first made learning React much smoother.'
      },
      {
        type: 'heading',
        text: '3. Building Real Projects'
      },
      {
        type: 'paragraph',
        text: 'The best way to learn is to build. I started with simple tools that solved my own problems—like a baby schedule tracker and this personal journey website. When you build something you actually use, you stay motivated.'
      }
    ]
  },
  {
    slug: 'ai-tools-for-frontend-developers',
    title: 'How I use AI tools to accelerate my frontend development',
    category: 'AI & Tech',
    date: '2026-07-10',
    excerpt: 'Practical ways to use ChatGPT, Copilot, and Claude to write cleaner code, debug faster, and learn new concepts.',
    readingTime: '4 min read',
    tags: ['AI Tools', 'Frontend', 'Productivity'],
    content: [
      {
        type: 'paragraph',
        text: 'AI is not going to replace developers, but developers who use AI will replace those who do not. For self-learners, AI acts as a 24/7 personal mentor that can explain complex concepts in simple terms.'
      },
      {
        type: 'heading',
        text: '1. AI as a Code Reviewer'
      },
      {
        type: 'paragraph',
        text: 'Whenever I finish writing a React component, I ask AI: "How can I optimize this code for better performance and readability?" It often suggests cleaner ES6 syntax, better state management, or edge cases I missed.'
      },
      {
        type: 'heading',
        text: '2. Faster Debugging'
      },
      {
        type: 'paragraph',
        text: 'Instead of spending hours staring at a cryptic console error, I paste the error message and the relevant code block into the AI. It not only points out the bug but explains *why* it happened, turning a frustrating bug into a learning moment.'
      }
    ]
  }
];

export function getAllTechNotes() {
  return techNotes;
}

export function getTechNoteBySlug(slug) {
  return techNotes.find((note) => note.slug === slug);
}
