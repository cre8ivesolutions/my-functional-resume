import React from "react";
import "../App.css";
import Welcome from "./Welcome";
import UseState from "./UseState";
import { Parrallax, ParallaxLayer } from "react-spring";
import Contact from "./Contact";

export default function Home() {
  return (
    <div className="homepage">
      <Parrallax pages={1}>
        <ParallaxLayer
          offset={0}
          speed={1}
          factor={2}
          style={{
            backgroundImage: `url($https://images.unsplash.com/photo-1532278951723-545f655c97f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80)`,
            backgroundSize: `cover`,
          }}
        ></ParallaxLayer>

        <ParallaxLayer
          offset={0.2}
          speed={1}
          factor={2}
          style={{
            backgroundImage: `url($https://images.unsplash.com/photo-1504966981333-1ac8809be1ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80)`,
            backgroundSize: `cover`,
          }}
        ></ParallaxLayer>
      </Parrallax>
      <Welcome />
      <UseState />
      <Contact />
    </div>
  );
}
