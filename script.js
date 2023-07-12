function changeTheme(theme) {
  var body = document.body;

  if (theme === "dark") {
    body.classList.add("dark");
  } else {
    body.classList.remove("dark");
  }
}
