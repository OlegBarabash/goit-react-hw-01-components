import { Profile } from "./Profile/Profile";
import user from "../user.json"
import data from '../data.json'
import { Statistics } from "./Statistics/Statistics";
import { GlobalStyle } from "GlobalStyle";

export const App = () => {
  return (
    <div>
      <Profile usr={user} />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <GlobalStyle/>
    </div>
  );
};
