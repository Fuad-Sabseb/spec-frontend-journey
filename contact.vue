<template>
  <div class="contact-page">
    <section class="page-header">
      <div class="container">
        <h1>Get in Touch</h1>
        <p>Have a project in mind? Let's work together!</p>
      </div>
    </section>

    <section class="contact-content section">
      <div class="container">
        <div class="contact-grid">
          <div class="contact-info">
            <h2>Let's Connect</h2>
            <p>I'm always interested in hearing about new opportunities and exciting projects. Feel free to reach out!</p>
            
            <div class="info-items">
              <div class="info-item">
                <h3>Email</h3>
                <a href="mailto:fuadsabseb476@gmail.com">fuadsabseb476@gmail.com</a>
              </div>
              
              <div class="info-item">
                <h3>Location</h3>
                <p>jimma,shabe</p>
              </div>
              
              <div class="social-grid">
  <a href="https://github.com/Fuad-Sabseb" target="_blank" class="social-card">
    <span class="social-icon">Git</span>
    <span>GitHub</span>
  </a>
  <a href="http://www.linkedin.com/in/fuad-sebsib" target="_blank" class="social-card">
    <span class="social-icon">Li</span>
    <span>LinkedIn</span>
  </a>
</div>
            </div>
          </div>

          <div class="contact-form">
            <form @submit.prevent="handleSubmit">
              <div class="form-group">
                <label for="name">Name</label>
                <input
                  type="text"
                  id="name"
                  v-model="form.name"
                  required
                  placeholder="Your name"
                >
              </div>

              <div class="form-group">
                <label for="email">Email</label>
                <input
                  type="email"
                  id="email"
                  v-model="form.email"
                  required
                  placeholder="your@email.com"
                >
              </div>

              <div class="form-group">
                <label for="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  v-model="form.subject"
                  required
                  placeholder="What's this about?"
                >
              </div>

              <div class="form-group">
                <label for="message">Message</label>
                <textarea
                  id="message"
                  v-model="form.message"
                  required
                  rows="5"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <Button type="submit" :disabled="isSubmitting">
                {{ isSubmitting ? 'Sending...' : 'Send Message' }}
              </Button>

              <p v-if="submitStatus" class="form-status" :class="submitStatus.type">
                {{ submitStatus.message }}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const submitStatus = ref(null)

const handleSubmit = async () => {
  isSubmitting.value = true
  submitStatus.value = null
  
  // Simulate form submission
  try {
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // Reset form
    form.name = ''
    form.email = ''
    form.subject = ''
    form.message = ''
    
    submitStatus.value = {
      type: 'success',
      message: 'Message sent successfully! I\'ll get back to you soon.'
    }
  } catch (error) {
    submitStatus.value = {
      type: 'error',
      message: 'Something went wrong. Please try again.'
    }
  } finally {
    isSubmitting.value = false
  }
}
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

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 4rem;
}

.contact-info h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #333;
}

.contact-info > p {
  color: #666;
  margin-bottom: 2rem;
  line-height: 1.8;
}

.info-items {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.info-item h3 {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  color: #333;
}

.info-item a,
.info-item p {
  color: #666;
  text-decoration: none;
  transition: color 0.3s;
}

.info-item a:hover {
  color: #007bff;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-links a {
  color: #666;
  text-decoration: none;
  transition: color 0.3s;
}

.social-links a:hover {
  color: #007bff;
}

.contact-form {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: #333;
  font-weight: 500;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  transition: border-color 0.3s;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #007bff;
}

.form-status {
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
}

.form-status.success {
  background-color: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
}

.form-status.error {
  background-color: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
}

@media (max-width: 768px) {
  .page-header h1 {
    font-size: 2rem;
  }

  .contact-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}
</style>