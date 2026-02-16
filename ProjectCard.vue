<template>
  <div class="project-card" :class="{ featured: variant === 'featured' }">
    <div class="project-image">
      <img :src="project.image" :alt="project.title">
      <div class="project-overlay">
        <div class="project-links">
          <Button :to="`/projects/${project.id}`" size="small">View Details</Button>
          <Button v-if="project.githubUrl" :href="project.githubUrl" target="_blank" variant="outline" size="small">GitHub</Button>
        </div>
      </div>
    </div>
    <div class="project-info">
      <h3>{{ project.title }}</h3>
      <p>{{ project.description }}</p>
      <div class="project-tech">
        <span v-for="tech in project.technologies" :key="tech" class="tech-tag">
          {{ tech }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  project: {
    type: Object,
    required: true
  },
  variant: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'featured'].includes(value)
  }
})
</script>

<style scoped>
.project-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: transform 0.3s, box-shadow 0.3s;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.15);
}

.project-card.featured {
  grid-column: span 2;
}

.project-image {
  position: relative;
  overflow: hidden;
  aspect-ratio: 16/9;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s;
}

.project-card:hover .project-image img {
  transform: scale(1.1);
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s;
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.project-links {
  display: flex;
  gap: 1rem;
}

.project-info {
  padding: 1.5rem;
}

.project-info h3 {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: #333;
}

.project-info p {
  color: #666;
  margin-bottom: 1rem;
  line-height: 1.6;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tag {
  background: #f0f0f0;
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.85rem;
  color: #666;
}
</style>