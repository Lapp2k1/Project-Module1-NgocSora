document
  .getElementById("customer_login")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let username = document.getElementById("customer_username");
    let password = document.getElementById("customer_password");
    let isValid = true;

    // Xóa thông báo lỗi
    document.querySelectorAll(".error").forEach(function (el) {
      el.textContent = "";
    });

    // Lấy dữ liệu từ local storage
    let userData = JSON.parse(localStorage.getItem("userData")) || [];

    // Tìm chỉ số của user đang đăng nhập(nếu có)
    let userIndex = userData.findIndex(function (user) {
      return (
        user.userName === username.value && user.password === password.value
      );
    });
    console.log(userData[userIndex]);
    // Validate và thông báo
    if (userData[userIndex].status === "block") {
      username.nextElementSibling.textContent = "Your account is blocked.";
      isValid = false;
    }
    if (username.value === "") {
      username.nextElementSibling.textContent = "Username is required.";
      isValid = false;
    }
    if (password.value === "") {
      password.nextElementSibling.classList.add("text-danger");
      password.nextElementSibling.textContent = "Password is required.";
      isValid = false;
    } else if (
      !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@]{8,20}$/.test(password.value)
    ) {
      password.nextElementSibling.classList.add("text-danger");
      password.nextElementSibling.textContent = "Invalid password format.";
      isValid = false;
    }

    // Thông báo sai mật khẩu/username
    if (userIndex === -1) {
      username.nextElementSibling.textContent =
        "Username or password is incorrect.";
      password.nextElementSibling.classList.add("text-danger");
      password.nextElementSibling.textContent =
        "Username or password is incorrect.";
      isValid = false;
    }

    // Chuyển hướng trang  + Tạo và lưu trữ userLogin

    if (isValid) {
      userData[userIndex].status = "active";
      localStorage.setItem("userData", JSON.stringify(userData));
      let userLogin = {
        id: userData[userIndex].id,
        name: userData[userIndex].name,
        userName: userData[userIndex].userName,
        email: userData[userIndex].email,
        permission: userData[userIndex].permission,
        status: userData[userIndex].status,
      };
      localStorage.setItem("userLogin", JSON.stringify(userLogin));

      Swal.fire({
        title: "Đăng nhập thành công!",
        text: "Đang chuyển hướng...",
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
      }).then(function () {
        if (userData[userIndex].permission === "admin") {
          window.location.href = "../adminpage/admin.html";
        } else {
          window.location.href = "../homepage/homepage.html";
        }
      });
    }
  });
