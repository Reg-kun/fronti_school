import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>404</h1>
      <h2 style={styles.subtitle}>Страница не найдена</h2>
      <p style={styles.text}>
        К сожалению, запрашиваемая страница не существует или была удалена.
      </p>
      <Link to="/" style={styles.button}>
        Вернуться на главную
      </Link>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f9fafb",
    textAlign: "center",
    padding: "20px",
  },
  title: {
    fontSize: "72px",
    margin: 0,
    color: "#111827",
  },
  subtitle: {
    fontSize: "24px",
    margin: "10px 0",
    color: "#374151",
  },
  text: {
    fontSize: "16px",
    color: "#6b7280",
    marginBottom: "20px",
  },
  button: {
    textDecoration: "none",
    padding: "10px 20px",
    backgroundColor: "#2563eb",
    color: "#fff",
    borderRadius: "6px",
  },
};

export default NotFoundPage;
