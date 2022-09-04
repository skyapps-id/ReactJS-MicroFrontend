import React, { useState } from "react";

import styles from "./App.module.scss";
import Card from "../components/Card";
import products from "../data/product";

export const Product = () => {
    return (
      <product className={styles.section}>
        <section className={styles.containers}>
          <div className={styles.layout}>
            {products.map((element, index) => (
              <Card
                key={index}
                title={element.title}
                likes={element.likes}
                order={index + 1}
                image={element.image}
              />
            ))}
          </div>
        </section>
      </product>
    );
}