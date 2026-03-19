/**
 * PRICE Workshop 2026 - Main JavaScript
 * Handles navigation, interactivity, and dynamic functionality
 */

(function() {
  'use strict';

  // ==========================================================================
  // DOM Ready
  // ==========================================================================
  function onDocumentReady(callback) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', callback);
    } else {
      callback();
    }
  }

  // ==========================================================================
  // Mobile Navigation Toggle
  // ==========================================================================
  class MobileNavigation {
    constructor() {
      this.toggle = document.querySelector('.nav-toggle');
      this.navList = document.querySelector('.nav-list');
      
      if (this.toggle && this.navList) {
        this.init();
      }
    }

    init() {
      this.toggle.addEventListener('click', () => this.toggleNav());
      
      // Close nav when clicking outside
      document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav-container')) {
          this.closeNav();
        }
      });

      // Close nav on ESC key
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          this.closeNav();
        }
      });
    }

    toggleNav() {
      const isOpen = this.navList.classList.toggle('active');
      this.toggle.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    }

    closeNav() {
      this.navList.classList.remove('active');
      this.toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  }

  // ==========================================================================
  // Smooth Scrolling for Anchor Links
  // ==========================================================================
  class SmoothScroll {
    constructor() {
      this.init();
    }

    init() {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
          const targetId = anchor.getAttribute('href');
          
          if (targetId === '#') return;
          
          const targetElement = document.querySelector(targetId);
          
          if (targetElement) {
            e.preventDefault();
            const headerOffset = 100;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });

            // Close mobile nav if open
            const mobileNav = document.querySelector('.nav-list');
            if (mobileNav && mobileNav.classList.contains('active')) {
              mobileNav.classList.remove('active');
            }
            const toggle = document.querySelector('.nav-toggle');
            if (toggle) {
              toggle.setAttribute('aria-expanded', 'false');
            }
          }
        });
      });
    }
  }

  // ==========================================================================
  // Active Navigation Link Highlighting
  // ==========================================================================
  class ActiveNavigation {
    constructor() {
      this.sections = [];
      this.links = [];
      this.init();
    }

    init() {
      this.sections = document.querySelectorAll('section[id]');
      this.links = document.querySelectorAll('.nav-list a[href^="#"]');
      
      if (this.sections.length && this.links.length) {
        window.addEventListener('scroll', () => this.highlightLink());
      }
    }

    highlightLink() {
      let current = '';
      const scrollPosition = window.scrollY;
      const headerOffset = 150;

      this.sections.forEach(section => {
        const sectionTop = section.offsetTop - headerOffset;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          current = section.getAttribute('id');
        }
      });

      this.links.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
          link.classList.add('active');
        }
      });
    }
  }

  // ==========================================================================
  // Form Validation
  // ==========================================================================
  class FormValidation {
    constructor(formSelector) {
      this.form = document.querySelector(formSelector);
      
      if (this.form) {
        this.init();
      }
    }

    init() {
      this.form.addEventListener('submit', (e) => this.handleSubmit(e));
      this.form.querySelectorAll('input, textarea').forEach(input => {
        input.addEventListener('blur', () => this.validateField(input));
      });
    }

    handleSubmit(e) {
      let isValid = true;
      
      this.form.querySelectorAll('input[required], textarea[required]').forEach(field => {
        if (!this.validateField(field)) {
          isValid = false;
        }
      });

      if (!isValid) {
        e.preventDefault();
        this.showNotification('Please fill in all required fields.', 'error');
      }
    }

    validateField(field) {
      const value = field.value.trim();
      const name = field.name || field.getAttribute('placeholder');
      
      // Clear previous error
      this.clearFieldError(field);

      if (!value) {
        this.showFieldError(field, `${name} is required`);
        return false;
      }

      // Email validation
      if (field.type === 'email' && !this.isValidEmail(value)) {
        this.showFieldError(field, 'Please enter a valid email address');
        return false;
      }

      // Minimum length validation
      if (field.minLength && value.length < field.minLength) {
        this.showFieldError(field, `${name} must be at least ${field.minLength} characters`);
        return false;
      }

      return true;
    }

    isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }

    showFieldError(field, message) {
      field.classList.add('error');
      
      // Add error message below field
      const errorDiv = document.createElement('div');
      errorDiv.className = 'field-error';
      errorDiv.style.cssText = 'color: #dc2626; font-size: 0.875rem; margin-top: 0.25rem;';
      errorDiv.textContent = message;
      field.parentNode.insertBefore(errorDiv, field.nextSibling);
    }

    clearFieldError(field) {
      field.classList.remove('error');
      const errorDiv = field.parentNode.querySelector('.field-error');
      if (errorDiv) {
        errorDiv.remove();
      }
    }

    showNotification(message, type = 'info') {
      const notification = document.createElement('div');
      notification.className = `notification notification-${type}`;
      notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        background: ${type === 'error' ? '#dc2626' : '#0066cc'};
        color: white;
        border-radius: 0.5rem;
        z-index: 9999;
        animation: slideIn 0.3s ease;
      `;
      notification.textContent = message;
      
      document.body.appendChild(notification);
      
      setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
      }, 3000);
    }
  }

  // ==========================================================================
  // Date Countdown Timer
  // ==========================================================================
  class CountdownTimer {
    constructor(elementId, targetDate) {
      this.element = document.getElementById(elementId);
      this.targetDate = new Date(targetDate).getTime();
      
      if (this.element) {
        this.init();
      }
    }

    init() {
      this.update();
      setInterval(() => this.update(), 1000);
    }

    update() {
      const now = new Date().getTime();
      const distance = this.targetDate - now;

      if (distance < 0) {
        this.element.innerHTML = 'Event has started!';
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      this.element.innerHTML = `
        <div class="countdown-item">
          <span class="countdown-number">${days}</span>
          <span class="countdown-label">days</span>
        </div>
        <div class="countdown-item">
          <span class="countdown-number">${hours}</span>
          <span class="countdown-label">hours</span>
        </div>
        <div class="countdown-item">
          <span class="countdown-number">${minutes}</span>
          <span class="countdown-label">minutes</span>
        </div>
        <div class="countdown-item">
          <span class="countdown-number">${seconds}</span>
          <span class="countdown-label">seconds</span>
        </div>
      `;
    }
  }

  // ==========================================================================
  // Intersection Observer for Animations
  // ==========================================================================
  class ScrollAnimations {
    constructor() {
      this.init();
    }

    init() {
      const animatedElements = document.querySelectorAll('.card, .date-card, .registration-card, .speaker-card');
      
      if (!animatedElements.length) return;

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      });

      animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
      });

      // Add animation styles dynamically
      if (!document.querySelector('#animation-styles')) {
        const style = document.createElement('style');
        style.id = 'animation-styles';
        style.textContent = `
          .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
          }
        `;
        document.head.appendChild(style);
      }
    }
  }

  // ==========================================================================
  // Search Functionality (Simple client-side search)
  // ==========================================================================
  class SiteSearch {
    constructor() {
      this.init();
    }

    init() {
      const searchInput = document.getElementById('site-search');
      const searchButton = document.getElementById('search-button');
      
      if (searchInput) {
        searchInput.addEventListener('input', (e) => this.handleSearch(e));
        
        if (searchButton) {
          searchButton.addEventListener('click', () => this.handleSearch({ target: searchInput }));
        }
      }
    }

    handleSearch(e) {
      const query = e.target.value.toLowerCase().trim();
      
      if (query.length < 2) {
        this.clearSearchResults();
        return;
      }

      // Simple search - finds links matching the query
      const links = document.querySelectorAll('a');
      const results = [];

      links.forEach(link => {
        const text = link.textContent.toLowerCase();
        const href = link.getAttribute('href');
        
        if (text.includes(query) && !href.startsWith('#') && !href.startsWith('http')) {
          results.push({ text: link.textContent, href: href });
        }
      });

      this.displayResults(results);
    }

    displayResults(results) {
      let resultsContainer = document.getElementById('search-results');
      
      if (!resultsContainer) {
        resultsContainer = document.createElement('div');
        resultsContainer.id = 'search-results';
        resultsContainer.style.cssText = `
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 0.5rem;
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
          z-index: 1000;
          max-height: 400px;
          overflow-y: auto;
        `;
        
        const searchInput = document.getElementById('site-search');
        if (searchInput) {
          searchInput.parentNode.style.position = 'relative';
          searchInput.parentNode.appendChild(resultsContainer);
        }
      }

      if (results.length === 0) {
        resultsContainer.innerHTML = '<div class="search-no-results">No results found</div>';
        return;
      }

      resultsContainer.innerHTML = results
        .slice(0, 10)
        .map(result => `
          <a href="${result.href}" class="search-result-item">
            ${result.text}
          </a>
        `).join('');

      // Add styles for search results
      if (!document.querySelector('#search-styles')) {
        const style = document.createElement('style');
        style.id = 'search-styles';
        style.textContent = `
          .search-result-item {
            display: block;
            padding: 0.75rem 1rem;
            color: #374151;
            text-decoration: none;
            border-bottom: 1px solid #f3f4f6;
            transition: background 0.15s;
          }
          .search-result-item:hover {
            background: #f9fafb;
          }
          .search-no-results {
            padding: 1rem;
            color: #6b7280;
            text-align: center;
          }
        `;
        document.head.appendChild(style);
      }
    }

    clearSearchResults() {
      const resultsContainer = document.getElementById('search-results');
      if (resultsContainer) {
        resultsContainer.remove();
      }
    }
  }

  // ==========================================================================
  // Initialize All Components
  // ==========================================================================
  function init() {
    // Mobile Navigation
    new MobileNavigation();

    // Smooth Scrolling
    new SmoothScroll();

    // Active Navigation
    new ActiveNavigation();

    // Form Validation (contact form)
    new FormValidation('.contact-form');

    // Scroll Animations
    new ScrollAnimations();

    // Search Functionality
    new SiteSearch();

    // Print friendly message
    if (window.matchMedia('print').matches) {
      document.body.classList.add('print-mode');
    }

    // Add print-specific class listener
    window.matchMedia('print').addEventListener('change', (e) => {
      if (e.matches) {
        document.body.classList.add('print-mode');
      } else {
        document.body.classList.remove('print-mode');
      }
    });

    // Add notification animation keyframes
    if (!document.querySelector('#notification-styles')) {
      const style = document.createElement('style');
      style.id = 'notification-styles';
      style.textContent = `
        @keyframes slideIn {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes slideOut {
          from {
            transform: translateX(0);
            opacity: 1;
          }
          to {
            transform: translateX(100%);
            opacity: 0;
          }
        }
      `;
      document.head.appendChild(style);
    }

    console.log('PRICE Workshop 2026 website initialized');
  }

  // Start the app
  onDocumentReady(init);
})();