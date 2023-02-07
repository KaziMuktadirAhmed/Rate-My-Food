// models/topbar.ts
interface ITopbar {
  searchTerm: string;
  isLoggedIn: boolean;
  userImageUrl: string;
}

const model: ITopbar = {
  searchTerm: "",
  isLoggedIn: false,
  userImageUrl: "",
};

export { model as default, ITopbar };
