function saveData(event) {
    event.preventDefault()

    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let course = document.getElementById("course").value
    let roll = document.getElementById("roll").value
    let batch = document.getElementById("batch").value
    let image = document.getElementById("image").files[0]

    // agar koi bhi field empty ho
    if (name == "" || email == "" || course == "" || roll == "" || batch == "" || !image) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill all the fields!",
      });
      return
    }

    // image dikhane ke liye
    let imgUrl = URL.createObjectURL(image)

    // ID card display karna
    document.getElementById("cardName").innerText = name
    document.getElementById("cardEmail").innerText = email
    document.getElementById("cardCourse").innerText = course
    document.getElementById("cardRoll").innerText = roll
    document.getElementById("cardBatch").innerText = batch
    document.getElementById("cardImage").src = imgUrl

    // form reset karna
    document.getElementById("studentForm").reset()

    // 2 second baad reload kar dena
    setTimeout(function () {
      location.reload()
    }, 2000)
  }