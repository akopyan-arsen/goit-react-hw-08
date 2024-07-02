import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    // Оновлюємо стан, щоб показати резервний UI
    return { hasError: true, error: error };
  }

  componentDidCatch(error, errorInfo) {
    // Ви можете також зберегти помилку в службі логування
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Ви можете використовувати this.state.error тут для показу детальної інформації про помилку
      return <h1>Something went wrong: {this.state.error.message}</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
