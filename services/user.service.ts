import { BehaviorSubject } from "rxjs";
import Router from "next/router";
import users from "pages/api/users";
import { server } from "config";
import { route } from "next/dist/server/router";

let userSubject = new BehaviorSubject(null);
if (process.browser) {
  const userJson = localStorage.getItem("currentUser");
  userSubject = new BehaviorSubject(userJson ? JSON.parse(userJson) : "");
}
const login = async (
  email: string,
  password: string
): Promise<{ success: boolean; body: string }> => {
  const res = await fetch(`${server}/api/auth`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });
  const json = await res.json();
  if (json.success) {
    console.log(json.body.payload);
    localStorage.setItem("currentUser", JSON.stringify(json.body.payload));
    return { success: true, body: "success" };
  } else {
    return { success: false, body: json.error };
  }
};
const register = async (
  email: string,
  password: string,
  name: string
): Promise<{ success: boolean; body: string }> => {
  const res = await fetch(`${server}/api/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: name,
      email: email,
      avatar: "https://i.pravatar.cc/266",
      password: password,
    }),
  });
  const json = await res.json();
  if (json.success) {
    await login(email, password);
    return { success: true, body: "success" };
  } else {
    return { success: false, body: json.error };
  }
};
const logout = () => {
  localStorage.removeItem("user");
  userSubject?.next(null);
  Router.push("/login");
};

const userService = {
  currentUser: userSubject?.asObservable(),
  get userValue() {
    return userSubject?.value;
  },
  login,
  register,
  logout,
};
export default userService;
