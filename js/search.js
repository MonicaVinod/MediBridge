 
    function performSearch() {
      const type = document.getElementById("type").value.toLowerCase();
      const query = document.getElementById("query").value.trim().toLowerCase();
      const resultsDiv = document.getElementById("results");
      resultsDiv.innerHTML = "";

      if (query === "") {
        resultsDiv.innerHTML = "<p>Please enter a valid search term.</p>";
        return;
      }

      // Sample static data
      const data = {
        medicine: [
          { name: "Paracetamol", location: "Apollo Pharmacy, MG Road", stock: "Available" },
          { name: "Ibuprofen", location: "MediCare, JP Nagar", stock: "Low stock" }
        ],
        blood: [
          { group: "A+", location: "City Blood Bank", units: "5 units available" },
          { group: "B+", location: "Red Cross, Indiranagar", units: "3 units available" }
        ]
      };

      const results = data[type].filter(item => {
        return type === "medicine"
          ? item.name.toLowerCase().includes(query)
          : item.group.toLowerCase() === query;
      });

      if (results.length === 0) {
        resultsDiv.innerHTML = "<p>No results found.</p>";
        return;
      }

      results.forEach(item => {
        const card = document.createElement("div");
        card.className = "result-card";
        if (type === "medicine") {
          card.innerHTML = `
            <h4>${item.name}</h4>
            <p>Location: ${item.location}</p>
            <p>Status: ${item.stock}</p>
          `;
        } else {
          card.innerHTML = `
            <h4>Blood Group: ${item.group}</h4>
            <p>Location: ${item.location}</p>
            <p>${item.units}</p>
          `;
        }
        resultsDiv.appendChild(card);
      });
    }
