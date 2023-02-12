function toggleBodyClassName(name) {
  const className = document.body.className;
  if (className.includes(name)) {
    document.body.className = className.replace(name, "");
  } else {
    document.body.className += " " + name;
  }
}

const addMenuItem = ({ title, cls, ul }) => {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.innerHTML = title;
  a.addEventListener("click", () => {
    toggleBodyClassName(cls);
  });
  li.append(a);
  ul.append(li);
};

const li = document.createElement("li");
li.setAttribute("class", "parent limanowa-pro-menu");

const ul = document.createElement("ul");
addMenuItem({ title: "tryb czytania", cls: "focus-mode", ul });
addMenuItem({ title: "tryb ciemny", cls: "dark-mode", ul });

const a = document.createElement("a");
a.innerHTML = "PRO"

li.append(a);
li.append(ul);

const menu = document.getElementsByClassName("menu")[0];
menu.append(li);
