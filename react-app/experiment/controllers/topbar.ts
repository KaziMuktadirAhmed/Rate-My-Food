// controllers/topbar.ts
import model, { ITopbar } from "../models/topbar";

export function handleSearch(value: string) {
  model.searchTerm = value;
}

export function handleLogin() {
  model.isLoggedIn = true;
  model.userImageUrl = "https://example.com/user.jpg";
}

export function handleSignup() {
  // Perform signup logic here
}

export function handleLogout() {
  model.isLoggedIn = false;
}
