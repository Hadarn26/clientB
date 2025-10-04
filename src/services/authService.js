import { httpPost } from "./httpService";

export async function login(username, password) {
  try {
    const res = await httpPost("http://localhost:3002/cs/login", { username, password });
    if (res.token) {
      localStorage.setItem("token", res.token);
      console.log("Login successful, token stored.");
    } else {
      console.log("No token in response");
    }
  } catch (error) {
    console.error("Login error:", error);
  }
};

export async function logout() {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      console.warn("No token to logout");
      return;
    }

    const res = await httpPost("http://localhost:3002/cs/logout", { token });
    if (res.success) {
      localStorage.removeItem("token");
      console.log("Logout successful, token removed.");
    } else {
      console.log("Logout failed:", res.message);
    }
  } catch (error) {
    console.error("Logout error:", error);
  }
}

export const register = () => {
  const newUser = { username: "newuser", password: "abcd1234" };

  return httpPost("http://localhost:3002/cs/register", newUser)
    .then(res => {
      if (res.success) {
        console.log("Register successful:", res.user);
      } else {
        console.log("Register failed:", res.message);
      }
      return res;
    })
    .catch(err => {
      console.error("Register error:", err);
      throw err;
    });
};
