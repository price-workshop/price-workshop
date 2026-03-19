---
layout: default
title: "Performance, Rendering, and Interaction for Competitive Esports"
subtitle: "SIGGRAPH 2026 Technical Workshop"
description: "Join us for the PRICE workshop at SIGGRAPH 2026, exploring performance, rendering, and interaction techniques for competitive esports."
---

<!-- Hero Section -->
<section class="hero" id="home">
  <div class="container">
    <h1><span>PRICE</span> 2026</h1>
    <p class="hero-subtitle">Performance, Rendering, and Interaction for Competitive Esports</p>
    <p class="hero-dates">August 9-13, 2026 • Denver, Colorado</p>
    
    <div class="hero-btns">
      <a href="/registration" class="btn btn-primary btn-lg">Register Now</a>
      <a href="/program" class="btn btn-outline btn-lg">View Program</a>
    </div>
  </div>
</section>

<!-- About Section -->
<section class="section" id="about">
  <div class="container">
    <div class="section-header">
      <h2>About the Workshop</h2>
      <p class="lead">Bridging the gap between academic research and esports industry challenges</p>
    </div>
    
    <div class="container-sm">
      <p>
        The <strong>Performance, Rendering, and Interaction for Competitive Esports (PRICE)</strong> workshop 
        at SIGGRAPH 2026 brings together researchers, developers, and industry professionals to explore 
        cutting-edge techniques in real-time graphics, performance optimization, and human-computer interaction 
        specifically tailored for competitive esports environments.
      </p>
      
      <p>
        This workshop focuses on the unique challenges posed by competitive gaming:
      </p>
      
      <div class="card-grid" style="margin-top: 2rem;">
        <div class="card">
          <div class="card-title">Performance Optimization</div>
          <div class="card-text">
            Techniques for achieving high frame rates, low latency, and efficient resource utilization 
            in competitive gaming scenarios.
          </div>
        </div>
        
        <div class="card">
          <div class="card-title">Visual Rendering</div>
          <div class="card-text">
            Advanced rendering techniques for esports, from visibility optimization to visual clarity 
            in competitive environments.
          </div>
        </div>
        
        <div class="card">
          <div class="card-title">Interaction Design</div>
          <div class="card-text">
            Human-computer interaction research for competitive gaming, including control schemes, 
            feedback mechanisms, and accessibility.
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Key Dates Section -->
<section class="section section-alt" id="dates">
  <div class="container">
    <div class="section-header">
      <h2>Key Dates</h2>
      <p class="lead">Important deadlines for the workshop</p>
    </div>
    
    <div class="dates-container">
      <div class="date-card">
        <div class="date-month">April 15</div>
        <div class="date-number">15</div>
        <div class="date-title">Abstract Submission</div>
        <div class="date-description">Submit your workshop paper abstract</div>
      </div>
      
      <div class="date-card">
        <div class="date-month">May 1</div>
        <div class="date-number">01</div>
        <div class="date-title">Notification</div>
        <div class="date-description">Acceptance notification sent</div>
      </div>
      
      <div class="date-card highlight">
        <div class="date-month">May 15</div>
        <div class="date-number">15</div>
        <div class="date-title">Camera-Ready</div>
        <div class="date-description">Final paper submission deadline</div>
      </div>
      
      <div class="date-card">
        <div class="date-month">August</div>
        <div class="date-number">09</div>
        <div class="date-title">Workshop Day</div>
        <div class="date-description">PRICE @ SIGGRAPH 2026, Denver</div>
      </div>
    </div>
  </div>
</section>

<!-- Registration Section -->
<section class="section" id="registration">
  <div class="container">
    <div class="section-header">
      <h2>Registration</h2>
      <p class="lead">Join us at SIGGRAPH 2026 in Denver</p>
    </div>
    
    <div class="registration-grid">
      <div class="registration-card">
        <div class="registration-title">Attendee</div>
        <div class="registration-price">$100</div>
        <ul class="registration-features">
          <li>Workshop access (full day)</li>
          <li>Workshop materials</li>
          <li>Coffee breaks</li>
          <li>Networking reception</li>
        </ul>
        <a href="/registration" class="btn btn-outline">Learn More</a>
      </div>
      
      <div class="registration-card featured">
        <div class="registration-title">SIGGRAPH Attendee</div>
        <div class="registration-price">Free</div>
        <ul class="registration-features">
          <li>Workshop access (full day)</li>
          <li>Workshop materials</li>
          <li>Coffee breaks</li>
          <li>Networking reception</li>
          <li>Full SIGGRAPH access</li>
        </ul>
        <a href="/registration" class="btn btn-primary">Register Now</a>
      </div>
      
      <div class="registration-card">
        <div class="registration-title">Presenter</div>
        <div class="registration-price">Included</div>
        <ul class="registration-features">
          <li>Workshop presentation slot</li>
          <li>Workshop materials</li>
          <li>Coffee breaks</li>
          <li>Networking reception</li>
          <li>Paper in workshop proceedings</li>
        </ul>
        <a href="/program" class="btn btn-outline">Submit Paper</a>
      </div>
    </div>
    
    <div style="text-align: center; margin-top: 2rem;">
      <p class="text-muted">
        Note: Workshop attendance requires valid SIGGRAPH 2026 registration or separate workshop badge.
      </p>
    </div>
  </div>
</section>

<!-- Call to Action -->
<section class="section section-alt">
  <div class="container" style="text-align: center;">
    <h2>Have Questions?</h2>
    <p class="lead" style="max-width: 600px; margin: 0 auto 2rem;">
      Contact our organizing committee for any questions about the workshop, submission process, or registration.
    </p>
    <a href="/contact" class="btn btn-primary">Get in Touch</a>
  </div>
</section>

<!-- Scripts for countdown (can be removed if not needed) -->
<script>
  // Simple countdown to workshop date
  document.addEventListener('DOMContentLoaded', function() {
    const workshopDate = new Date('2026-08-09T09:00:00').getTime();
    
    // Update countdown every second
    setInterval(function() {
      const now = new Date().getTime();
      const distance = workshopDate - now;
      
      if (distance < 0) {
        const dateElements = document.querySelectorAll('.date-card.highlight .date-description');
        dateElements.forEach(el => {
          if (el.textContent.includes('Final paper submission')) {
            el.textContent = 'Workshop has started!';
          }
        });
      }
    }, 1000);
  });
</script>