<template>
  <div class="project-detail" v-if="project">
    <section class="project-hero">
      <div class="container">
        <h1>{{ project.title }}</h1>
        <div class="project-tech">
          <span v-for="tech in project.technologies" :key="tech" class="tech-tag">
            {{ tech }}
          </span>
        </div>
      </div>
    </section>

    <section class="project-content section">
      <div class="container">
        <div class="project-layout">
          <div class="project-main">
            <div class="project-image">
              <img :src="project.image" :alt="project.title">
            </div>
            
            <div class="project-description">
              <h2>Overview</h2>
              <p>{{ project.fullDescription }}</p>
            </div>

            <div class="project-features">
              <h2>Key Features</h2>
              <ul>
                <li v-for="feature in project.features" :key="feature">
                  {{ feature }}
                </li>
              </ul>
            </div>
          </div>

          <div class="project-sidebar">
            <div class="sidebar-card">
              <h3>Project Links</h3>
              <div class="project-links">
                <Button v-if="project.liveUrl" :to="project.liveUrl" target="_blank">
                  Live Demo
                </Button>
                <Button v-if="project.githubUrl" :to="project.githubUrl" target="_blank" variant="outline">
                  View Code
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

  <div v-else class="not-found">
    <div class="container">
      <h2>Project not found</h2>
      <Button to="/projects">Back to Projects</Button>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const { getProjectById } = useProjects()

const project = computed(() => {
  return getProjectById(route.params.id)
})

if (!project.value) {
  throw createError({ statusCode: 404, statusMessage: 'Project not found' })
}
</script>

<style scoped>
.project-hero {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 60px 0;
  text-align: center;
}

.project-hero h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
}

.tech-tag {
  background: rgba(255,255,255,0.2);
  padding: 0.5rem 1rem;
  border-radius: 25px;
  font-size: 0.9rem;
}

.project-layout {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;
}

.project-image {
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 2rem;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.project-image img {
  width: 100%;
  height: auto;
  display: block;
}

.project-description,
.project-features {
  margin-bottom: 2rem;
}

.project-description h2,
.project-features h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
}

.project-description p {
  color: #666;
  line-height: 1.8;
}

.project-features ul {
  list-style: none;
  padding: 0;
}

.project-features li {
  padding: 0.5rem 0;
  padding-left: 1.5rem;
  position: relative;
  color: #666;
}

.project-features li::before {
  content: "✓";
  color: #007bff;
  position: absolute;
  left: 0;
}

.sidebar-card {
  background: white;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  position: sticky;
  top: 100px;
}

.sidebar-card h3 {
  margin-bottom: 1.5rem;
  font-size: 1.25rem;
}

.project-links {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.not-found {
  text-align: center;
  padding: 100px 0;
}

.not-found h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #666;
}

@media (max-width: 768px) {
  .project-hero h1 {
    font-size: 2rem;
  }

  .project-layout {
    grid-template-columns: 1fr;
  }

  .sidebar-card {
    position: static;
  }
}
</style>