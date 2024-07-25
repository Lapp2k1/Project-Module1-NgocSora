let accountBtn = document.getElementsByClassName("account-action")[0];
let cartBtn = document.getElementById("site-cart-handle");
let accountDropdown = document.getElementsByClassName(
  "header-action_dropdown"
)[0];
let cartDropdown = document.getElementsByClassName("cart-dropdown")[0];

accountBtn.onclick = function () {
    if (cartDropdown.style.display === "block") {
        cartDropdown.style.display = "none";
      }
  if (accountDropdown.style.display === "block") {
    accountDropdown.style.display = "none";
   
  } else {
    accountDropdown.style.display = "block";
  }
};
cartBtn.onclick = function () {
    if (accountDropdown.style.display === "block") {
        accountDropdown.style.display = "none";
       
      }
  if (cartDropdown.style.display === "block") {
    cartDropdown.style.display = "none";
    
  } else {
    cartDropdown.style.display = "block";
  }
};
let userData = [
  {
    id: 1,
    name: "NgocSora",
    userName: "NgocSora",
    password: "Lappy1111@",
    email: "vulengocvip2015@gmail.com",
    permission: "admin",
    order: [],
    wishList: [],
    status: "inactive",
  },
  {
    id: Math.floor(Math.random() * 1000000),
    name: "NgocSora",
    userName: "aNgocSora",
    password: "Lappy1111",
    email: "vulengocvip201@gmail.com",
    permission: "user",
    order: [],
    wishList: [],
    status: "inactive",
  },
  {
    id: Math.floor(Math.random() * 1000000),
    name: "NgocSora",
    userName: "bNgocSora",
    password: "Lappy1111",
    email: "vulengocvip215@gmail.com",
    permission: "user",
    order: [],
    wishList: [],
    status: "inactive",
  },
  {
    id: Math.floor(Math.random() * 1000000),
    name: "NgocSora",
    userName: "cNgocSora",
    password: "Lappy1111",
    email: "vulengocvip015@gmail.com",
    permission: "user",
    order: [],
    wishList: [],
    status: "inactive",
  },
  {
    id: Math.floor(Math.random() * 1000000),
    name: "NgocSora",
    userName: "dNgocSora",
    password: "Lappy1111",
    email: "ulengocvip2015@gmail.com",
    permission: "user",
    order: [],
    wishList: [],
    status: "inactive",
  },
  {
    id: Math.floor(Math.random() * 1000000),
    name: "NgocSora",
    userName: "eNgocSora",
    password: "Lappy1111",
    email: "vulengocvip5@gmail.com",
    permission: "user",
    order: [],
    wishList: [],
    status: "inactive",
  },
];

let categoryData = [
  {
    id: Math.floor(Math.random() * 1000000),
    categoryName: "Computer & Laptop",
    status: "available",
  },
  {
    id: Math.floor(Math.random() * 1000000),
    categoryName: "SmartPhone",
    status: "available",
  },
  {
    id: Math.floor(Math.random() * 1000000),
    categoryName: "Headphones",
    status: "unavailable",
  },
  {
    id: Math.floor(Math.random() * 1000000),
    categoryName: "Accessories",
    status: "unavailable",
  },
  {
    id: Math.floor(Math.random() * 1000000),
    categoryName: "Camera & Photo",
    status: "available",
  },
  {
    id: Math.floor(Math.random() * 1000000),
    categoryName: "TV & Homes",
    status: "available",
  },
];

let productData = [
  {
    id: Math.floor(Math.random() * 1000000),
    productName: "MSI",
    img: "https://anphat.com.vn/media/product/46739_laptop_msi_thin_gf63_12uc_887vn__1_.jpg",
    quantity: 40,
    price: 15000000,
    category: "Computer & Laptop",
    status: "available",
  },
  {
    id: Math.floor(Math.random() * 1000000),
    productName: "Samsung",
    quantity: 50,
    img: "https://images.samsung.com/is/image/samsung/p6pim/sg/2401/gallery/sg-galaxy-s24-s928-sm-s928bztqxsp-thumb-539305064",
    price: 34000000,
    category: "SmartPhone",
    status: "available",
  },
  {
    id: Math.floor(Math.random() * 1000000),
    productName: "Airpod 3",
    img: "https://lequanmobile.com/wp-content/uploads/2023/03/AIRPOD-3-.png",
    quantity: 0,
    price: 34000000,
    category: "Headphones",
    status: "unavailable",
  },
  {
    id: Math.floor(Math.random() * 1000000),
    productName: "Dareu EK 87",
    img: "https://nguyenphuc.com.vn/uploads/source/phim/ek87-b.png",
    quantity: 0,
    price: 34000000,
    category: "Accessories",
    status: "unavailable",
  },
  {
    id: Math.floor(Math.random() * 1000000),
    productName: "Leica M11",
    img: "https://www.cnet.com/a/img/resize/7f52e5050cc1b7c49840caec46b9123c2d925c93/hub/2022/01/12/41b8d96b-b9f1-482d-b46c-054f8c00bd93/leica-m11-product-cnet-hoyle-2.jpg?auto=webp&fit=crop&height=675&width=1200",
    quantity: 50,
    price: 34000000,
    category: "Camera & Photo",
    status: "available",
  },
  {
    id: Math.floor(Math.random() * 1000000),
    productName: "LGTV+",
    img: "https://variety.com/wp-content/uploads/2014/04/webos-tv_2014-lgtv.jpg",
    quantity: 50,
    price: 34000000,
    category: "TV & Homes",
    status: "available",
  },
];
if (!localStorage.getItem("userData")) {
  localStorage.setItem("userData", JSON.stringify(userData));
}

if (!localStorage.getItem("productData")) {
  localStorage.setItem("productData", JSON.stringify(productData));
}
if (!localStorage.getItem("categoryData")) {
  localStorage.setItem("categoryData", JSON.stringify(categoryData));
}