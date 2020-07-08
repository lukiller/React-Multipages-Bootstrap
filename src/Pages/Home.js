import React from "react";
import LoremIpsum from "../Components/LoremIpsum";

export default function Home() {
  return (
    <div>
      <h1 class="mt-5">Welcome!</h1>
      <p class="lead">
        Pin a fixed-height footer to the bottom of the viewport in desktop
        browsers with this custom HTML and CSS. A fixed navbar has been added
        with <code>padding-top: 60px;</code> on the{" "}
        <code>body &gt; .container</code>.
      </p>
      <LoremIpsum />
    </div>
  );
}
