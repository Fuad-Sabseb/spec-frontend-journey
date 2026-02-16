<template>
  <div class="projects-page">
    <section class="page-header">
      <div class="container">
        <h1>Projects Page</h1>
    <NuxtLink to="/">Back to Home</NuxtLink>
        <p>Here are some of the projects I've worked on</p>
      </div>
    </section>

    <section class="projects-list section">
      <div class="container">
        <div class="projects-grid">
          <ProjectCard
            v-for="project in projects"
            :key="project.id"
            :project="project"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const { projects } = useProjects()
</script>

<style scoped>
.page-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 60px 0;
  text-align: center;
}

.page-header h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.page-header p {
  font-size: 1.2rem;
  opacity: 0.9;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
}

@media (max-width: 768px) {
  .page-header h1 {
    font-size: 2rem;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>