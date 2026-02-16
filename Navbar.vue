<template>
  <nav class="navbar">
    <div class="container">
      <div class="navbar-content">
        <NuxtLink to="/" class="logo">Fuad</NuxtLink>
        <ul class="nav-links">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/projects">Projects</NuxtLink></li>
          <li><NuxtLink to="/contact">Contact</NuxtLink></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  padding: 20px 0;
  position: sticky;
  top: 0;
  z-index: 1000;
}

.navbar-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  text-decoration: none;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 30px;
}

.nav-links a {
  color: #666;
  text-decoration: none;
  transition: color 0.3s;
}

.nav-links a:hover {
  color: #007bff;
}

.nav-links a.router-link-active {
  color: #007bff;
  font-weight: 500;
}
</style>