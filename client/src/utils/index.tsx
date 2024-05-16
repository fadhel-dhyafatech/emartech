export const getUserFromLocalStorage = () => {
  const user = localStorage.getItem("user");
  return user && user !==  "undefined"  ? JSON.parse(user) : null;
};

export const setUserInLocalStorage = (user : any) => {
  localStorage.setItem("user", user ? JSON.stringify(user) : "undefined");
};