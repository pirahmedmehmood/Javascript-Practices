// --- Part 01 ---
var mainContent = document.getElementById("main-content");
        console.log(mainContent);
      console.log(mainContent.children);
      var renderElements = document.getElementsByClassName("render");
        for (var i = 0; i < renderElements.length; i++) {
            console.log(renderElements[i].innerHTML);
        }
         document.getElementById("first-name").value = "Ahmed";
         document.getElementById("last-name").value = "Mehmood";
        document.getElementById("email").value = "ahmed@example.com";
        // --- Part 02 ---
        var formContent = document.getElementById("form-content");
        console.log("Node type of form-content is:", formContent.nodeType);
         var lastName = document.getElementById("lastName");
        console.log("Node type of lastName:", lastName.nodeType);
        console.log("Node type of child of lastName:", lastName.firstChild.nodeType);
        lastName.innerHTML = "Last Name :Mehmood ";
         console.log("First child:", mainContent.firstChild);
        console.log("Last child:", mainContent.lastChild);
        console.log("Next sibling:", lastName.nextSibling);
        console.log("Previous sibling:", lastName.previousSibling);
        var emailInput = document.getElementById("email");
        console.log("Parent node of email:", emailInput.parentNode);
        console.log("Node type of email:", emailInput.nodeType);