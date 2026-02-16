export const useProjects = () => {
  // Sample projects data
  const projects = ref([
    {
      id: '1',
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform built with Nuxt and Stripe',
      fullDescription: 'This e-commerce platform includes product management, shopping cart, secure checkout with Stripe, order tracking, and admin dashboard. Built with Nuxt 3, Vue 3, and Tailwind CSS.',
      image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=600',
      technologies: ['Nuxt 3', 'Vue 3', 'Tailwind CSS', 'Stripe', 'MongoDB'],
      features: [
        'Product catalog with categories',
        'Shopping cart with persistent storage',
        'Secure payment processing with Stripe',
        'Order management system',
        'Admin dashboard for inventory',
        'Responsive design for all devices'
      ],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      category: 'featured'
    },
    {
      id: '2',
      title: 'Task Management App',
      description: 'Collaborative task management with real-time updates',
      fullDescription: 'A modern task management application that allows teams to collaborate in real-time. Features include task creation, assignment, comments, and progress tracking.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600',
      technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
      features: [
        'Real-time updates with WebSockets',
        'Task assignment and comments',
        'Progress tracking with Kanban board',
        'Team collaboration features',
        'File attachments',
        'Notification system'
      ],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      category: 'featured'
    },
    {
      id: '3',
      title: 'Weather Dashboard',
      description: 'Beautiful weather app with interactive maps',
      fullDescription: 'A weather dashboard that provides current weather conditions, forecasts, and interactive maps. Uses multiple weather APIs for accurate data.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6fd032b4?w=600',
      technologies: ['Vue 3', 'Vite', 'OpenWeather API', 'Mapbox'],
      features: [
        'Current weather conditions',
        '5-day weather forecast',
        'Interactive weather maps',
        'Location search',
        'Favorite locations',
        'Dark/light mode'
      ],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      category: 'regular'
    }
  ])

  const testimonials = ref([
    {
      id: '1',
      name: 'Abdulhamid Nuri',
      role: 'Computer science',
      content: 'Working with Fuad was an absolute pleasure. He delivered our project on time and exceeded our expectations. His technical expertise and attention to detail are impressive.',

      rating: 5
    },
    {
      id: '2',
      name: 'Abdi Demeke',
      role: 'Software eng.',
      content: 'Fuad is one of the most talented developers I\'ve worked with. He not only writes clean code but also understands the business requirements perfectly.',
      
      rating: 4
    },
    {
      id: '3',
      name: 'Gelgelo Abdisa',
      role: 'CS at ASTU',
      content: 'Exceptional work! Fuad transformed our idea into a fully functional web application. His communication throughout the project was excellent.',
      rating: 5
    }
  ])

  const getFeaturedProjects = () => {
    return projects.value.filter(p => p.category === 'featured')
  }

  const getProjectById = (id) => {
    return projects.value.find(p => p.id === id)
  }

  return {
    projects: computed(() => projects.value),
    testimonials: computed(() => testimonials.value),
    getFeaturedProjects,
    getProjectById
  }
}