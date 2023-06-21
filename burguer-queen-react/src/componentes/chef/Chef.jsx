import { NavChef } from "./NavChef"

export default function Chef() {
    document.body.classList.add('others-background');
    document.body.classList.remove('login-background');
    return (
      <>
        <NavChef/>
        <div>Chef</div>
      </>
    )
  }
  