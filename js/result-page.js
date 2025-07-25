
    // Simulate query parameter (replace with URL param parsing if needed)
    const query = "Paracetamol".toLowerCase(); // Replace with dynamic value later
    const type = "medicine"; // "medicine" or "blood"

    const resultsData = {
      medicine: [
        { name: "Paracetamol", location: "Apollo Pharmacy, MG Road", stock: "Available" },
        { name: "Ibuprofen", location: "MediCare, JP Nagar", stock: "Low stock" }
      ],
      blood: [
        { group: "A+", location: "City Blood Bank", units: "5 units" },
        { group: "B+", location: "Red Cross, Indiranagar", units: "3 units" }
      ]
    };

    document.getElementById("search-term").textContent = query;

    function showResults() {
      const resultsDiv = document.getElementById("results");
      const noResultDiv = document.getElementById("noResult");

      let matched = resultsData[type].filter(item => {
        return type === "medicine"
          ? item.name.toLowerCase().includes(query)
          : item.group.toLowerCase() === query;
      });

      if (matched.length === 0) {
        noResultDiv.style.display = "block";
        return;
      }

      matched.forEach(item => {
        const card = document.createElement("div");
        card.className = "result-card";

        if (type === "medicine") {
          card.innerHTML = `
            <h3>${item.name}</h3>
            <p><strong>Location:</strong> ${item.location}</p>
            <p><strong>Status:</strong> ${item.stock}</p>
          `;
        } else {
          card.innerHTML = `
            <h3>Blood Group: ${item.group}</h3>
            <p><strong>Location:</strong> ${item.location}</p>
            <p><strong>Availability:</strong> ${item.units}</p>
          `;
        }

        resultsDiv.appendChild(card);
      });
    }

    // Run on load
    showResults();
  