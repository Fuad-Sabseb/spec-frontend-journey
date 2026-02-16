<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <p>&copy; {{ new Date().getFullYear() }} Fuad-Sabseb. All rights reserved.</p>
        <div class="social-links">
          <a href="#" target="_blank">GitHub</a>
          <a href="#" target="_blank">LinkedIn</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #f8f9fa;
  padding: 40px 0;
  margin-top: auto;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.social-links {
  display: flex;
  gap: 20px;
}

.social-links a {
  color: #666;
  text-decoration: none;
  transition: color 0.3s;
}

.social-links a:hover {
  color: #007bff;
}
</style>