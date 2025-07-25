function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(sec => sec.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
  }

  function logout() {
    alert("Logged out successfully (frontend only).");
 
  }
  // Attach event listeners after DOM loads
  document.getElementById("btnDashboard").addEventListener("click", () => showSection("dashboard"));
  document.getElementById("btnMedicines").addEventListener("click", () => showSection("medicines"));
  document.getElementById("btnBlood").addEventListener("click", () => showSection("blood"));
  document.getElementById("btnUsers").addEventListener("click", () => showSection("users"));
  document.getElementById("btnLogout").addEventListener("click", logout);
  
