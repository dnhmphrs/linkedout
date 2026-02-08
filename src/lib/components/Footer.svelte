<script>
  // No props needed
</script>

<footer class="footer">
  <p>We acknowledge this resource is built on the ancestral land of DARPA: ARPANET.</p>
</footer>

<style>
  .footer {
    position: fixed;
    bottom: 0;
    left: var(--sidebar);
    right: 0;
    background: var(--bg-alt);
    border-top: 1px solid var(--border);
    padding: 1rem 2rem;
    font-size: 0.875rem;
    color: var(--text-secondary);
    z-index: 10;
    opacity: 0.0;
  }

  @media (max-width: 768px) {
    .footer {
      left: 0;
      padding: 0.875rem 1.5rem;
    }
  }
</style>
